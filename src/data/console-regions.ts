import type { MeshLevel } from "@/lib/mesh";

/**
 * 契約（コンソール）地域レジストリ。
 *
 * ここに登録した地域だけ、ヒートマップを高精度（500m/250m）で配信する。
 * 無料地域は 3 次メッシュ（約 1km）のまま。料金線引き(drafts/pricing-tiers-v1.md)の
 * 「③コンソール(有料)」に対応。
 *
 * gating はサーバー側でこのレジストリにより確定するため、クライアントが
 * precision を詐称しても非契約地域は細かくならない（高精度は別エンドポイント
 * /api/sighting-cells/hd で、登録地域の事案のみを対象に集計する）。
 *
 * level: 4 = 1/2 分割(約500m) / 5 = 1/4 分割(約250m)。
 */
export type ConsoleRegion = {
  prefName: string;
  /** 市町村まで絞る場合のみ指定。省略時は県全体。 */
  cityName?: string;
  level: MeshLevel;
  note?: string;
};

export const CONSOLE_REGIONS: ConsoleRegion[] = [
  // デモ契約地域: 秋田県（出没が密で高精度の価値が最も分かりやすい）を 500m で提供。
  { prefName: "秋田県", level: 4, note: "デモ契約地域・500m" },
];

/** 当該地域に適用するメッシュ次数を返す。非契約地域は 3（1km）。 */
export function meshLevelFor(prefName?: string, cityName?: string): MeshLevel {
  if (!prefName) return 3;
  let best: MeshLevel = 3;
  for (const r of CONSOLE_REGIONS) {
    if (r.prefName !== prefName) continue;
    if (r.cityName && r.cityName !== cityName) continue;
    if (r.level > best) best = r.level;
  }
  return best;
}

/** 契約地域かどうか（市町村は任意）。 */
export function isConsoleRegion(prefName?: string, cityName?: string): boolean {
  return meshLevelFor(prefName, cityName) > 3;
}
