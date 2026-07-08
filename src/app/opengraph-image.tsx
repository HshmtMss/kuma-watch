import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { loadJaFont } from "@/lib/og-font";

// アプリ全体の既定 OG 画像 (1200×630)。独自の opengraph-image / openGraph.images を
// 持たないページ (ホーム・/spot・/articles 等) はこれが使われる。SNS 共有時に
// 512×512 の正方形ロゴが見切れる問題を解消し、どのページでも横長のリッチカードにする。
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "KumaWatch｜全国クマ警戒レベルマップ";

let bearDataUrl: string | null = null;
function getBearDataUrl(): string {
  if (bearDataUrl) return bearDataUrl;
  const buf = readFileSync(join(process.cwd(), "public/logo-bear-og.png"));
  bearDataUrl = `data:image/png;base64,${buf.toString("base64")}`;
  return bearDataUrl;
}

export default async function OgImage() {
  const text =
    "KumaWatchクマウォッチ全国クマ出没警戒レベルマップ地図でひと目でチェックkuma-watch.jp";
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
            padding: "56px 0 56px 72px",
            width: "780px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "64px",
                fontWeight: 700,
                color: "#1c1917",
                letterSpacing: "-0.5px",
                lineHeight: 1,
              }}
            >
              KumaWatch
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "30px",
                color: "#3f6212",
                marginTop: "10px",
                fontWeight: 700,
              }}
            >
              全国クマ警戒レベルマップ
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "68px",
                fontWeight: 700,
                color: "#1c1917",
                lineHeight: 1.15,
              }}
            >
              クマの出没を、
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "68px",
                fontWeight: 700,
                color: "#065f46",
                lineHeight: 1.15,
              }}
            >
              地図でひと目で。
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                padding: "12px 26px",
                background: "rgba(255,255,255,0.92)",
                borderRadius: "999px",
                fontWeight: 700,
                color: "#1c1917",
                fontSize: "32px",
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
            paddingRight: "60px",
          }}
        >
          <img
            src={getBearDataUrl()}
            alt=""
            width={340}
            height={402}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
