// ImageResponse 用の日本語フォント (Noto Sans JP) を Google Fonts の subset API で取得する。
// テキスト中の文字だけを subset するためフェッチ量は数 KB〜数十 KB に収まる。
// プロセスメモリにキャッシュし、ビルド/リクエスト中の重複ダウンロードを抑制する。

const fontCache = new Map<string, ArrayBuffer>();

export type FontWeight = 400 | 700;

// Google Fonts が詰まったときにリクエストを道連れにしない。フォントは
// 「取れれば嬉しい」ものであって、待ち続ける価値は無い。
const FETCH_TIMEOUT_MS = 4000;

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
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!cssRes.ok) return null;
    const css = await cssRes.text();
    const m = css.match(/src:\s*url\((https?:\/\/[^)]+)\)/);
    if (!m) return null;
    const fontRes = await fetch(m[1], {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!fontRes.ok) return null;
    const buf = await fontRes.arrayBuffer();
    fontCache.set(key, buf);
    return buf;
  } catch {
    return null;
  }
}

export type OgFont = {
  name: string;
  data: ArrayBuffer;
  style: "normal";
  weight: FontWeight;
};

/**
 * ImageResponse に渡すフォント指定を作る。
 *
 * 取れなかったときは fonts を「含めない」のが要点。@vercel/og は
 * `fonts: options.fonts || defaultFonts` と書いており、空配列は truthy なので
 * 同梱の Geist にフォールバックせず、Satori が
 * 「No fonts are loaded. At least one font is required to calculate the layout.」
 * を投げる。これは画像をストリームしている最中に起きるため 5xx になる。
 * 2026-09-01 に Google Fonts が不調だった数分間、/spot/[slug]/opengraph-image が
 * まさにこれで落ちた (5 分で 22 件)。
 *
 * fonts を省けば Geist で描かれる。日本語は豆腐になるが、OG 画像が
 * 少し崩れるのと 5xx を返すのとでは、後者の方がはるかに悪い。
 */
export async function jaFontOptions(text: string): Promise<{ fonts?: OgFont[] }> {
  const [bold, regular] = await Promise.all([
    loadJaFont(text, 700),
    loadJaFont(text, 400),
  ]);
  const fonts: OgFont[] = [];
  if (bold) fonts.push({ name: "NotoSansJP", data: bold, style: "normal", weight: 700 });
  if (regular) fonts.push({ name: "NotoSansJP", data: regular, style: "normal", weight: 400 });
  return fonts.length > 0 ? { fonts } : {};
}
