/**
 * Web 側から LINE (LIFF / 公式アカウント) へ渡すリンクの組み立て。
 *
 * LIFF は liff.line.me/{LIFF_ID} に付けたクエリをそのままエンドポイント
 * (= /line/register) へ転送する。そのため「この市町村の通知を受け取る」
 * といった対象指定は、Web 側でクエリに載せておけば LIFF 側でそのまま
 * 解釈できる (/line/register の searchParams と同じキーを使うこと)。
 */

export type LineTarget =
  | { kind: "muni"; pref: string; city: string }
  | { kind: "spot"; slug: string; name?: string }
  | { kind: "geo"; lat: number; lon: number; radiusKm?: number; label?: string };

/** LIFF が設定済みか (= LINE の登録導線を出せるか)。 */
export function isLiffConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_LIFF_ID);
}

/** 公式アカウントの友だち追加 URL。未設定なら既定の basic ID を使う。 */
export function lineAddFriendUrl(): string {
  const basicId = process.env.NEXT_PUBLIC_LINE_BASIC_ID || "@161qoyhh";
  return `https://line.me/R/ti/p/${encodeURIComponent(basicId)}`;
}

/**
 * 対象を指定して LIFF の登録ページを開く URL。
 * LIFF_ID 未設定なら null (呼び出し側は導線を出さない)。
 */
export function lineRegisterUrl(target: LineTarget): string | null {
  const liffId = process.env.NEXT_PUBLIC_LIFF_ID;
  if (!liffId) return null;

  const params = new URLSearchParams();
  if (target.kind === "muni") {
    params.set("pref", target.pref);
    params.set("city", target.city);
  } else if (target.kind === "spot") {
    params.set("slug", target.slug);
    if (target.name) params.set("name", target.name);
  } else {
    params.set("lat", target.lat.toFixed(5));
    params.set("lon", target.lon.toFixed(5));
    if (target.radiusKm) params.set("radiusKm", String(target.radiusKm));
    if (target.label) params.set("label", target.label);
  }
  return `https://liff.line.me/${liffId}?${params.toString()}`;
}

/** 通知対象の表示名 (ボタン見出し用)。 */
export function lineTargetLabel(target: LineTarget): string {
  if (target.kind === "muni") return target.city;
  if (target.kind === "spot") return target.name ?? target.slug;
  return target.label || "この地点";
}
