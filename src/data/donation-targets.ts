/**
 * 出没市町村 → ふるさと納税(楽天)の応援先を返す対応表。
 *
 * コンセプト:「クマが出た"その市町村"を応援」。全出没自治体をカバーする。
 * 楽天の全件調査(scripts参照)で作った専用寄付枠リスト(oen-donations.json)を軸に、
 * 3段で解決する。**着地とラベルを一致させ、Tier3では使い道をしっかり説明する**。
 *
 *   Tier1: その市町村の「クマ被害対策支援」専用枠(返礼品なし)。着地が即クマ対策。
 *   Tier2: 「自然環境・野生動物・里山」等の純粋な寄付枠(返礼品なし)。共生の土台。
 *   Tier3: 専用枠が無い自治体 → その市町村の一般ふるさと納税へ。
 *          寄付時に「使い道」で鳥獣/クマ・自然環境・観光/産業を選べる旨を明記。
 *
 * 実アフィリ変換は呼び出し側(/oen/go)で rakutenAffiliateUrl() を通す。
 */
import DONATIONS from "@/data/oen-donations.json";

type Entry = { tier: number; theme: string; itemName: string; url: string };
const MAP = DONATIONS as Record<string, Entry>;

export type DonationTarget = {
  /** カード見出し（着地テーマと一致）。 */
  label: string;
  /** 応援のしかたを 3 行で（何に寄付し、何に使われ、何が受け取れるか）。
   *  長い説明文は読まれないので、短い手順に分けて「地域を支える」ことを伝える。 */
  steps: [string, string, string];
  /** 楽天の着地 URL（アフィリ未変換）。 */
  targetUrl: string;
  tier: 1 | 2 | 3;
};

const THEME_LABEL: Record<string, string> = {
  自然環境: "自然環境",
  鳥獣: "鳥獣被害対策",
  野生動物: "野生動物の保護",
  森林里山: "里山・森林の保全",
};

function rakutenSearch(query: string): string {
  return `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(query)}/`;
}

/** 楽天ふるさと納税の「用途（使い道）から探す」カテゴリ URL。 */
function rakutenPurpose(purpose: string): string {
  return `https://event.rakuten.co.jp/furusato/purpose/${purpose}/`;
}

/**
 * /oen ハブの「テーマから選ぶ」カテゴリ。各ボタン＝カテゴリ名＋説明（クマとの関係）＋
 * そのテーマの楽天ふるさと納税へ。着地は /oen/go?cat=<key> 経由でアフィリ変換。
 */
export type OenCategory = {
  key: string;
  label: string;
  note: string;
  targetUrl: string;
};

export const OEN_CATEGORIES: OenCategory[] = [
  {
    key: "kuma",
    label: "クマ・鳥獣対策",
    note: "捕獲・見回り・電気柵など、直接の対策へ。",
    targetUrl: rakutenSearch("ふるさと納税 鳥獣被害対策"),
  },
  {
    key: "shizen",
    label: "自然環境の保護",
    note: "生息環境の保全は、人とクマの棲み分けの土台です。",
    targetUrl: rakutenPurpose("environment"),
  },
  {
    key: "yasei",
    label: "野生動物の保護",
    note: "クマも野生動物。共生の視点で守ります。",
    targetUrl: rakutenSearch("ふるさと納税 野生動物 保護"),
  },
  {
    key: "satoyama",
    label: "森林・里山の保全",
    note: "里山の荒廃は、出没が増えた根本原因のひとつ。",
    targetUrl: rakutenSearch("ふるさと納税 里山 森林"),
  },
  {
    key: "kanko",
    label: "観光の振興",
    note: "出没で減った観光客・風評の回復を支えます。",
    targetUrl: rakutenPurpose("sightseeing"),
  },
  {
    key: "sangyo",
    label: "地域産業（農林業）",
    note: "獣害で傷んだ農林業の生業を守ります。",
    targetUrl: rakutenPurpose("industry"),
  },
];

export function resolveCategory(key: string): OenCategory | undefined {
  return OEN_CATEGORIES.find((c) => c.key === key);
}

export function resolveDonationTarget(
  pref?: string,
  city?: string,
): DonationTarget {
  const e = pref && city ? MAP[`${pref}/${city}`] : undefined;

  // Tier1: クマ対策の専用寄付枠（返礼品なし）
  if (e && e.tier === 1 && city) {
    return {
      label: `${city}のクマ対策を、ふるさと納税で応援`,
      steps: [
        `${city}の「クマ被害対策支援」に寄付する`,
        "見回り・電気柵・人身被害の防止などに使われる",
        "税金の控除が受けられる（返礼品はありません）",
      ],
      targetUrl: e.url,
      tier: 1,
    };
  }

  // Tier2: 自然環境・野生動物・里山などの純粋な寄付枠（返礼品なし）
  if (e && e.tier === 2 && city) {
    const tl = THEME_LABEL[e.theme] ?? "自然環境";
    return {
      label: `${city}の${tl}を、ふるさと納税で応援`,
      steps: [
        `${city}の「${tl}」に寄付する`,
        "人とクマのすみ分けを支える取り組みに使われる",
        "税金の控除が受けられる（返礼品はありません）",
      ],
      targetUrl: e.url,
      tier: 2,
    };
  }

  // Tier3: 専用枠なし → その市町村の一般ふるさと納税＋使い道の説明
  if (pref && city) {
    return {
      label: `${city}を、ふるさと納税で応援`,
      steps: [
        `${city}に寄付する`,
        "使い道で「鳥獣被害対策」「野生動物の保護」「自然環境の保全」などを選ぶ（選べる項目は市町村ごとに違います）",
        "返礼品と、税金の控除が受けられる",
      ],
      targetUrl: rakutenSearch(`ふるさと納税 ${pref} ${city}`),
      tier: 3,
    };
  }

  // 全国フォールバック（pref 不明時）
  return {
    label: "クマと向き合う地域を、ふるさと納税で応援",
    steps: [
      "応援したい市町村に寄付する",
      "使い道で「鳥獣被害対策」「野生動物の保護」「自然環境の保全」などを選ぶ",
      "返礼品と、税金の控除が受けられる",
    ],
    targetUrl: rakutenSearch("ふるさと納税 鳥獣被害対策"),
    tier: 3,
  };
}
