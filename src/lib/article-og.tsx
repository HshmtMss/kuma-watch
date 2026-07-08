import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { loadJaFont } from "@/lib/og-font";
import { getArticle } from "@/lib/articles-meta";

// 記事 (/articles/[slug]) 共通の OG 画像 (1200×630)。各記事フォルダの
// opengraph-image.tsx がこの関数を slug 付きで呼ぶ。記事は 1 記事 1 フォルダで
// [slug] 動的セグメントではないため、フォルダごとに薄い opengraph-image を置き、
// 描画本体はここに集約している (同一セグメント配置なので og:image に確実に載る)。
export const OG_SIZE = { width: 1200, height: 630 } as const;

let bearDataUrl: string | null = null;
function getBearDataUrl(): string {
  if (bearDataUrl) return bearDataUrl;
  const buf = readFileSync(join(process.cwd(), "public/logo-bear-og.png"));
  bearDataUrl = `data:image/png;base64,${buf.toString("base64")}`;
  return bearDataUrl;
}

export async function makeArticleOg(slug: string): Promise<ImageResponse> {
  const article = getArticle(slug);
  const title = (article?.title ?? "クマ解説記事").slice(0, 60);

  const text = `${title}KumaWatchクマ解説記事kuma-watch.jp`;
  const fontBold = await loadJaFont(text, 700);
  const fontReg = await loadJaFont(text, 400);
  const fonts: {
    name: string;
    data: ArrayBuffer;
    style: "normal";
    weight: 400 | 700;
  }[] = [];
  if (fontBold)
    fonts.push({ name: "NotoSansJP", data: fontBold, style: "normal", weight: 700 });
  if (fontReg)
    fonts.push({ name: "NotoSansJP", data: fontReg, style: "normal", weight: 400 });

  // タイトルは長文になりうるので、文字数で段階的に縮小し折り返しで収める。
  const len = title.length;
  const titleFontSize =
    len <= 16 ? 62 : len <= 24 ? 54 : len <= 34 ? 46 : len <= 44 ? 40 : 34;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 55%, #34d399 100%)",
          fontFamily: "NotoSansJP",
          color: "#1f2937",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "56px 0 52px 72px",
            width: "820px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                fontSize: "40px",
                fontWeight: 700,
                color: "#1c1917",
                letterSpacing: "-0.5px",
              }}
            >
              KumaWatch
            </div>
            <div
              style={{
                display: "flex",
                padding: "4px 14px",
                background: "rgba(255,255,255,0.85)",
                borderRadius: "999px",
                fontSize: "24px",
                fontWeight: 700,
                color: "#3f6212",
              }}
            >
              クマ解説
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: titleFontSize,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.3,
              maxWidth: "100%",
            }}
          >
            {title}
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                padding: "10px 24px",
                background: "rgba(255,255,255,0.92)",
                borderRadius: "999px",
                fontWeight: 700,
                color: "#1c1917",
                fontSize: "30px",
              }}
            >
              kuma-watch.jp
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "48px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- OG画像(satori)ではnext/image不可 */}
          <img
            src={getBearDataUrl()}
            alt=""
            width={260}
            height={307}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
