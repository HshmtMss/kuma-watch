// 座標 → 「○○県○○市○○」の地名を得る (既存 /api/geocode を再利用)。
// /share のメタデータと /share/og 画像で使う。共有 URL に地名 (label) を載せず
// 短く保つため、サーバー側でここから解決する。取得失敗・遅延時は null を返し、
// 呼び出し側で「この地点」等にフォールバックする。
export async function reversePlaceName(
  origin: string,
  lat: number,
  lon: number,
): Promise<string | null> {
  try {
    const res = await fetch(
      `${origin}/api/geocode?lat=${lat.toFixed(5)}&lon=${lon.toFixed(5)}`,
      {
        // クローラのタイムアウトに巻き込まれないよう短めに打ち切る。
        signal: AbortSignal.timeout(3500),
        next: { revalidate: 86400 },
      },
    );
    if (!res.ok) return null;
    const j = (await res.json()) as {
      result?: { prefecture?: string; city?: string; district?: string };
    };
    const h = j.result;
    if (!h) return null;
    const name = [h.prefecture, h.city, h.district].filter(Boolean).join("");
    return name || null;
  } catch {
    return null;
  }
}
