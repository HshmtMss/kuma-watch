/**
 * 解約の記録（墓標）。
 *
 * 通知の解除は購読レコードを物理削除する:
 *   - LINE ブロック → line-storage.purgeUser() が全キーを削除
 *   - Web Push 失効 (410/404) → push-storage が購読を削除
 * そのため**継続率・解約率・LTV が原理的に算出できない**状態だった。
 * しかも消えた分は後から復元できないので、記録を始めた時点より前は
 * 永久に不明のままになる。
 *
 * 個人を追跡する必要はないので、識別子は残さず「いつ登録して、いつ解約し、
 * どれだけ使ったか」だけを日付単位で積む。分析に必要な最小限に留める。
 */
import { Redis } from "@upstash/redis";

const KEY = "churn:log";
const RETENTION_DAYS = 730;

export type ChurnEvent = {
  /** "push" | "line" */
  channel: string;
  /** 解約時刻 (epoch ms) */
  at: number;
  /** 登録から解約までの日数。登録日不明なら null */
  lifetimeDays: number | null;
  /** 解約時点で登録していた地域数 */
  areaCount: number;
  /** 登録時の導線 (分かる場合のみ) */
  surface?: string;
};

function client(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

/**
 * 解約を記録する。購読レコードを削除する**前**に呼ぶこと。
 * 失敗しても解約処理自体は止めない (記録は副次的な関心事なので)。
 */
export async function recordChurn(ev: ChurnEvent): Promise<void> {
  try {
    const r = client();
    if (!r) return;
    await r.zadd(KEY, { score: ev.at, member: JSON.stringify(ev) });
    // 古い記録は落とす (2年分あれば継続率の分析には十分)
    const cutoff = Date.now() - RETENTION_DAYS * 86_400_000;
    await r.zremrangebyscore(KEY, 0, cutoff);
  } catch {
    // 記録できなくても解約は成立させる
  }
}

/** 直近 N 日の解約イベント。管理画面の継続率分析用。 */
export async function listChurn(days = 180): Promise<ChurnEvent[]> {
  try {
    const r = client();
    if (!r) return [];
    const from = Date.now() - days * 86_400_000;
    const raw = await r.zrange<string[]>(KEY, from, Date.now(), { byScore: true });
    return (raw ?? [])
      .map((v) => {
        try {
          return typeof v === "string" ? (JSON.parse(v) as ChurnEvent) : (v as ChurnEvent);
        } catch {
          return null;
        }
      })
      .filter((v): v is ChurnEvent => v !== null);
  } catch {
    return [];
  }
}
