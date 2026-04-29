import { ImageResponse } from "next/og";
import { loadJaFont } from "@/lib/og-font";

export const runtime = "nodejs";

const SIZE = { width: 1200, height: 630 };

export async function GET(req: Request) {
  const url = new URL(req.url);
  const labelRaw = url.searchParams.get("label") ?? "";
  const label = labelRaw.slice(0, 24) || "選択地点";

  const text = `${label}のクマ警戒レベルチェックKumaWatchクマウォッチ全国出没予報散策登山前のひと確認にkumawatchjp1234567890.-:このあたりを見るマップ`;
  const fontBold = await loadJaFont(text, 700);
  const fontReg = await loadJaFont(text, 400);
  const fonts: { name: string; data: ArrayBuffer; style: "normal"; weight: 400 | 700 }[] = [];
  if (fontBold) fonts.push({ name: "NotoSansJP", data: fontBold, style: "normal", weight: 700 });
  if (fontReg) fonts.push({ name: "NotoSansJP", data: fontReg, style: "normal", weight: 400 });

  // 地点名の文字数で大きさを微調整
  const labelFontSize =
    label.length <= 6 ? 120 : label.length <= 10 ? 96 : label.length <= 16 ? 76 : 60;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 60%, #fcd34d 100%)",
          padding: "64px 72px",
          fontFamily: "NotoSansJP",
          color: "#1f2937",
          position: "relative",
        }}
      >
        {/* 背景の山シルエット (薄い装飾) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 280,
            display: "flex",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(120,53,15,0.05) 60%, rgba(120,53,15,0.12) 100%)",
          }}
        />

        {/* ヘッダー */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "18px",
              background: "#92400e",
              color: "#fff",
              fontSize: "32px",
            }}
          >
            🐻
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "30px", fontWeight: 700, color: "#1c1917" }}>
              KumaWatch
            </div>
            <div style={{ display: "flex", fontSize: "16px", color: "#78716c", marginTop: "2px" }}>
              全国クマ出没予報・警戒レベルマップ
            </div>
          </div>
        </div>

        {/* 中央 — 地点名 + コピー */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "#78716c",
              marginBottom: "12px",
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
              fontSize: "30px",
              color: "#92400e",
              marginTop: "20px",
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
            justifyContent: "space-between",
            alignItems: "center",
            color: "#57534e",
            fontSize: "20px",
          }}
        >
          <div style={{ display: "flex", color: "#57534e" }}>
            散策・登山前のひと確認に
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
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
