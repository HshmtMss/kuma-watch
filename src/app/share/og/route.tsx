import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { loadJaFont } from "@/lib/og-font";

export const runtime = "nodejs";

const SIZE = { width: 1200, height: 630 };

// 起動時に1回だけ読み込み、base64 化してメモリにキャッシュ。
// ImageResponse から外部 URL を fetch するより安定する。
let bearDataUrl: string | null = null;
function getBearDataUrl(): string {
  if (bearDataUrl) return bearDataUrl;
  const buf = readFileSync(join(process.cwd(), "public/logo-bear-og.png"));
  bearDataUrl = `data:image/png;base64,${buf.toString("base64")}`;
  return bearDataUrl;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const labelRaw = url.searchParams.get("label") ?? "";
  const label = labelRaw.slice(0, 24) || "選択地点";

  const text = `${label}のクマ警戒レベルKumaWatchクマウォッチ全国マップkumawatchjp1234567890.-`;
  const fontBold = await loadJaFont(text, 700);
  const fontReg = await loadJaFont(text, 400);
  const fonts: { name: string; data: ArrayBuffer; style: "normal"; weight: 400 | 700 }[] = [];
  if (fontBold) fonts.push({ name: "NotoSansJP", data: fontBold, style: "normal", weight: 700 });
  if (fontReg) fonts.push({ name: "NotoSansJP", data: fontReg, style: "normal", weight: 400 });

  // 地点名サイズは文字数で段階調整。
  // 利用可能幅 ≈ 688px (左カラム780 - 左パディング72 - 右安全余白20)。
  // 1 行に収めるため、和文 1 文字の幅 ≈ font * 0.95 を逆算して段階設定。
  const labelFontSize =
    label.length <= 2 ? 200
    : label.length <= 3 ? 180
    : label.length <= 4 ? 160
    : label.length <= 5 ? 140
    : label.length <= 7 ? 100
    : label.length <= 9 ? 80
    : label.length <= 11 ? 64
    : label.length <= 14 ? 52
    : label.length <= 18 ? 42
    : 34;

  const bearSrc = getBearDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 55%, #34d399 100%)",
          fontFamily: "NotoSansJP",
          color: "#1f2937",
          position: "relative",
        }}
      >
        {/* 左カラム: テキスト (情報を 3 ブロックに集約: ブランド / 地点+CTA / URL) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "56px 0 56px 72px",
            width: "780px",
            justifyContent: "space-between",
          }}
        >
          {/* ブランド */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "60px",
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
                marginTop: "8px",
                fontWeight: 700,
              }}
            >
              全国クマ警戒レベルマップ
            </div>
          </div>

          {/* 地点名 + CTA — メイン訴求 */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: labelFontSize,
                fontWeight: 700,
                color: "#1c1917",
                lineHeight: 1.0,
                maxWidth: "100%",
              }}
            >
              {label}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "56px",
                color: "#065f46",
                marginTop: "16px",
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              のクマ警戒レベル
            </div>
          </div>

          {/* URL */}
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

        {/* 右カラム: クマイラスト
            シェア時のクロップで右端が切れないよう内側に寄せる */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "60px",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bearSrc}
            alt=""
            width={340}
            height={402}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, immutable",
      },
    },
  );
}
