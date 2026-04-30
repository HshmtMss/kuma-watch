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

  const text = `${label}のクマ警戒レベルチェックKumaWatchクマウォッチ全国マップ散策登山前のひと確認にkumawatchjp1234567890.-:このあたりを見る`;
  const fontBold = await loadJaFont(text, 700);
  const fontReg = await loadJaFont(text, 400);
  const fonts: { name: string; data: ArrayBuffer; style: "normal"; weight: 400 | 700 }[] = [];
  if (fontBold) fonts.push({ name: "NotoSansJP", data: fontBold, style: "normal", weight: 700 });
  if (fontReg) fonts.push({ name: "NotoSansJP", data: fontReg, style: "normal", weight: 400 });

  // 地点名の文字数で大きさを微調整
  const labelFontSize =
    label.length <= 5 ? 110 : label.length <= 8 ? 88 : label.length <= 12 ? 70 : 56;

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
        {/* 左カラム: テキスト */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "60px 0 56px 72px",
            width: "720px",
            justifyContent: "space-between",
          }}
        >
          {/* ブランド */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "44px",
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
                fontSize: "20px",
                color: "#78716c",
                marginTop: "4px",
              }}
            >
              全国クマ警戒レベルマップ
            </div>
          </div>

          {/* 地点名 */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "26px",
                color: "#78716c",
                marginBottom: "10px",
              }}
            >
              このあたりのクマ情報を見る
            </div>
            <div
              style={{
                display: "flex",
                fontSize: labelFontSize,
                fontWeight: 700,
                color: "#1c1917",
                lineHeight: 1.05,
                maxWidth: "100%",
              }}
            >
              {label}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "26px",
                color: "#065f46",
                marginTop: "14px",
                fontWeight: 700,
              }}
            >
              のクマ警戒レベルをチェック
            </div>
          </div>

          {/* フッター */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "#57534e",
              fontSize: "18px",
            }}
          >
            <div style={{ display: "flex" }}>散策・登山前のひと確認に</div>
            <div
              style={{
                display: "flex",
                padding: "8px 18px",
                background: "rgba(255,255,255,0.85)",
                borderRadius: "999px",
                fontWeight: 700,
                color: "#1c1917",
              }}
            >
              kuma-watch.jp
            </div>
          </div>
        </div>

        {/* 右カラム: クマイラスト
            シェア時のクロップで右端が切れないよう内側に寄せる (paddingRight で確保) */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "80px",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bearSrc}
            alt=""
            width={380}
            height={449}
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
