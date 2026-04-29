// ImageResponse 用の日本語フォント (Noto Sans JP) を Google Fonts の subset API で取得する。
// テキスト中の文字だけを subset するためフェッチ量は数 KB〜数十 KB に収まる。
// プロセスメモリにキャッシュし、ビルド/リクエスト中の重複ダウンロードを抑制する。

const fontCache = new Map<string, ArrayBuffer>();

export type FontWeight = 400 | 700;

export async function loadJaFont(
  text: string,
  weight: FontWeight = 700,
): Promise<ArrayBuffer | null> {
  const unique = [...new Set(text.split(""))].sort().join("");
  if (!unique) return null;
  const key = `${weight}:${unique}`;
  const cached = fontCache.get(key);
  if (cached) return cached;
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@${weight}&text=${encodeURIComponent(unique)}`;
    const cssRes = await fetch(cssUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
      },
    });
    if (!cssRes.ok) return null;
    const css = await cssRes.text();
    const m = css.match(/src:\s*url\((https?:\/\/[^)]+)\)/);
    if (!m) return null;
    const fontRes = await fetch(m[1]);
    if (!fontRes.ok) return null;
    const buf = await fontRes.arrayBuffer();
    fontCache.set(key, buf);
    return buf;
  } catch {
    return null;
  }
}
