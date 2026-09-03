/**
 * 市民投稿の「優先度」を決める。管理画面 (client) と投稿API (server) の両方から
 * 使うので、依存を持たない純関数だけを置く。
 *
 * === なぜ 2 軸なのか ===
 * 「緊急度」と「信ぴょう性」は別物で、1 つのスコアに混ぜてはいけない。
 * 「人がケガをした・信ぴょう性が低い」は後回しにする投稿ではなく、
 * 最優先で裏を取るべき投稿だから。機械の自信度で人身被害を沈めない。
 *
 *   緊急度   … 危険か・急ぐか   (至急 / 通常 / 低)   ← ルールだけで決まる
 *   信ぴょう性 … 本当か         (高 / 中 / 低)      ← 材料から推定する
 *
 * この 2 つを掛けて、対応の箱を 3 つに落とす:
 *
 *              信ぴょう性 高・中   信ぴょう性 低
 *   至急        ① 今すぐ見る       ① 今すぐ見る (要裏取り)
 *   通常        ② 順に見る         ③ 後で見る
 *   低          ② 順に見る         ③ 後で見る
 *
 * 「至急」は信ぴょう性に関係なく①に入る。ここが設計の芯。
 *
 * === 自動で弾かない ===
 * 信ぴょう性が低くても捨てない。並び順が下がって③に入るだけ。
 * 人身被害の可能性がある情報を機械が消すのは、このサービスでは許容できない失敗。
 */

export type SubmissionSituationKey = "sight" | "trace" | "damage" | "injury";

export type Urgency = "urgent" | "normal" | "low";
export type Credibility = "high" | "medium" | "low";
export type PriorityBucket = "now" | "queue" | "later";

export const URGENCY_LABEL: Record<Urgency, string> = {
  urgent: "至急",
  normal: "通常",
  low: "低",
};

export const CREDIBILITY_LABEL: Record<Credibility, string> = {
  high: "高",
  medium: "中",
  low: "低",
};

export const BUCKET_LABEL: Record<PriorityBucket, string> = {
  now: "今すぐ見る",
  queue: "順に見る",
  later: "後で見る",
};

/** 投稿に添える判定結果。投稿時に 1 回だけ計算して保存する */
export type Assessment = {
  urgency: Urgency;
  credibility: Credibility;
  /** 承認者に見せる 1 行。数値スコアは出さない */
  reason: string;
  /** 「位置ズレ 2.3km」のような short な注意書き */
  flags: string[];
  assessedAt: number;
  /** rule = ルールのみ / ai = 写真判定を含む。後から ai が上書きする */
  source: "rule" | "ai";
};

// ────────────────────────────────────────
// 緊急度: ルールだけで決める。AI は使わない
// ────────────────────────────────────────

const HOUR = 3600_000;

/**
 * 「至急」は人身被害だけに絞っている。
 * ここを広げると①が常に埋まり、本当に急ぐ 1 件が埋もれる。①が空であることに
 * 意味がある。市街地・通学路での目撃を至急に上げるのは、土地利用データを
 * 判定に足す段階で有効にする (それまでは②の中で新しい順に並ぶ)。
 */
export function assessUrgency(input: {
  situation: SubmissionSituationKey;
  occurredAt: string;
  now?: number;
}): { urgency: Urgency; reason: string } {
  const now = input.now ?? Date.now();
  const t = new Date(input.occurredAt).getTime();
  const hours = Number.isFinite(t) ? (now - t) / HOUR : Number.POSITIVE_INFINITY;

  if (input.situation === "injury")
    return { urgency: "urgent", reason: "人身被害の申告" };

  if (input.situation === "trace")
    return hours <= 24
      ? { urgency: "normal", reason: "24時間以内の痕跡" }
      : { urgency: "low", reason: "痕跡のみ・時間が経過" };

  // sight / damage
  if (hours <= 72) {
    const what = input.situation === "damage" ? "物損被害" : "目撃";
    return {
      urgency: "normal",
      reason: hours <= 6 ? `${what}・6時間以内` : `${what}・72時間以内`,
    };
  }
  return { urgency: "low", reason: "3日より前の情報" };
}

// ────────────────────────────────────────
// 信ぴょう性: いま手元にある材料だけで決める
// 写真の中身の判定 (Gemini) を足すときは、この関数の結果を上書きする
// ────────────────────────────────────────

/** 2点間の距離 (km) */
export function distanceKm(
  aLat: number,
  aLon: number,
  bLat: number,
  bLon: number,
): number {
  const toR = (d: number) => (d * Math.PI) / 180;
  const dLat = toR(bLat - aLat);
  const dLon = toR(bLon - aLon);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toR(aLat)) * Math.cos(toR(bLat)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(s));
}

/** 写真の撮影位置がピンからこれ以上離れていたら注意を出す */
const PHOTO_GAP_WARN_KM = 1;
/** ここまで離れると別の場所の写真の疑いが濃い */
const PHOTO_GAP_BAD_KM = 5;

export function assessCredibility(input: {
  lat: number;
  lon: number;
  photoUrl?: string;
  photoLat?: number;
  photoLon?: number;
  comment?: string;
  cityCode?: string;
}): { credibility: Credibility; reason: string; flags: string[] } {
  const flags: string[] = [];
  const hasPhoto = Boolean(input.photoUrl);
  const hasComment = Boolean(input.comment && input.comment.trim().length >= 10);

  if (!input.cityCode) flags.push("市町村を特定できず");

  let gapKm: number | null = null;
  if (hasPhoto && input.photoLat != null && input.photoLon != null) {
    gapKm = distanceKm(input.lat, input.lon, input.photoLat, input.photoLon);
    if (gapKm >= PHOTO_GAP_WARN_KM) flags.push(`位置ズレ ${gapKm.toFixed(1)}km`);
  }

  // 写真の撮影位置がピンと一致 = いまのところ最も強い裏付け
  if (gapKm != null && gapKm < PHOTO_GAP_WARN_KM)
    return {
      credibility: "high",
      reason: "写真の撮影位置がピンと一致",
      flags,
    };

  if (gapKm != null && gapKm >= PHOTO_GAP_BAD_KM)
    return {
      credibility: "low",
      reason: `写真の撮影位置がピンから ${gapKm.toFixed(1)}km 離れている`,
      flags,
    };

  if (hasPhoto)
    return {
      credibility: "medium",
      reason:
        gapKm != null
          ? `写真あり・撮影位置が ${gapKm.toFixed(1)}km ずれている`
          : "写真あり・撮影位置は取得できず",
      flags,
    };

  if (hasComment)
    return { credibility: "medium", reason: "写真なし・状況の記述あり", flags };

  return { credibility: "low", reason: "写真も状況の記述もなし", flags };
}

/** 投稿 1 件から判定をまとめて作る */
export function assessSubmission(input: {
  situation: SubmissionSituationKey;
  occurredAt: string;
  lat: number;
  lon: number;
  photoUrl?: string;
  photoLat?: number;
  photoLon?: number;
  comment?: string;
  cityCode?: string;
  now?: number;
}): Assessment {
  const u = assessUrgency(input);
  const c = assessCredibility(input);
  return {
    urgency: u.urgency,
    credibility: c.credibility,
    reason: `${u.reason}。${c.reason}`,
    flags: c.flags,
    assessedAt: input.now ?? Date.now(),
    source: "rule",
  };
}

// ────────────────────────────────────────
// 優先度の箱と並び順
// ────────────────────────────────────────

export function priorityBucket(a: Assessment | undefined): PriorityBucket {
  if (!a) return "queue"; // 判定前の古い投稿は真ん中に置く (隠さない)
  if (a.urgency === "urgent") return "now";
  return a.credibility === "low" ? "later" : "queue";
}

const URGENCY_RANK: Record<Urgency, number> = { urgent: 0, normal: 1, low: 2 };
const CREDIBILITY_RANK: Record<Credibility, number> = {
  high: 0,
  medium: 1,
  low: 2,
};

/** 箱の中の並び順: 緊急度 → 信ぴょう性 → 新しい順 */
export function compareByPriority(
  a: { assessment?: Assessment; occurredAt: string },
  b: { assessment?: Assessment; occurredAt: string },
): number {
  const ua = URGENCY_RANK[a.assessment?.urgency ?? "normal"];
  const ub = URGENCY_RANK[b.assessment?.urgency ?? "normal"];
  if (ua !== ub) return ua - ub;
  const ca = CREDIBILITY_RANK[a.assessment?.credibility ?? "medium"];
  const cb = CREDIBILITY_RANK[b.assessment?.credibility ?? "medium"];
  if (ca !== cb) return ca - cb;
  return new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime();
}

// ────────────────────────────────────────
// 却下理由: 溜まればフォームの改善材料になる
// ────────────────────────────────────────

export const REJECT_REASONS = [
  "重複",
  "場所が特定できない",
  "クマ以外",
  "情報が古い",
  "いたずら",
] as const;

export type RejectReason = (typeof REJECT_REASONS)[number];
