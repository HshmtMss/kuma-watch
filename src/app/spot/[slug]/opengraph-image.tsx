import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { jaFontOptions } from "@/lib/og-font";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";

// /spot/[slug] の OG 画像 (1200×630)。地点名入りのリッチカードにして SNS 共有時に
// 映えるようにする。ページ側 generateMetadata が openGraph.images を持たないため、
// 同一セグメントのこのファイル規約画像が og:image になる。
export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "KumaWatch｜地点周辺のクマ情報";

type Props = { params: Promise<{ slug: string }> };

let bearDataUrl: string | null = null;
function getBearDataUrl(): string {
  if (bearDataUrl) return bearDataUrl;
  const buf = readFileSync(join(process.cwd(), "public/logo-bear-og.png"));
  bearDataUrl = `data:image/png;base64,${buf.toString("base64")}`;
  return bearDataUrl;
}

export default async function OgImage({ params }: Props) {
  const { slug: rawSlug } = await params;
  let slug = rawSlug;
  try {
    slug = decodeURIComponent(rawSlug);
  } catch {
    /* そのまま使う */
  }
  const landmark = JAPAN_LANDMARKS.find((l) => l.slug === slug);
  const label = (landmark?.name ?? slug).slice(0, 24) || "この地点";

  const text = `${label}周辺のクマ出没情報KumaWatchクマウォッチkuma-watch.jp`;
  const fontOptions = await jaFontOptions(text);

  const labelFontSize =
    label.length <= 3 ? 150
    : label.length <= 5 ? 120
    : label.length <= 7 ? 96
    : label.length <= 9 ? 76
    : label.length <= 12 ? 60
    : 46;

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
                fontSize: "56px",
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
                fontSize: "28px",
                color: "#3f6212",
                marginTop: "8px",
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
                fontSize: "48px",
                color: "#065f46",
                marginTop: "14px",
                fontWeight: 700,
                lineHeight: 1.05,
              }}
            >
              周辺のクマ出没情報
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
            width={320}
            height={378}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    { ...size, ...fontOptions },
  );
}
