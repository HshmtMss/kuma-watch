import { ImageResponse } from "next/og";
import { PREF_CODE_TO_NAME } from "@/lib/prefectures";
import { getPlaceCell } from "@/lib/place-index";
import { loadJaFont } from "@/lib/og-font";

export const alt = "KumaWatch — 全国クマ出没予報";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PREF_NAMES = new Set(Object.values(PREF_CODE_TO_NAME));

type Props = { params: Promise<{ pref: string; muni: string }> };

function decode(v: string): string {
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

function formatDate(d: string | null): string {
  if (!d) return "—";
  const t = Date.parse(d);
  if (!Number.isFinite(t)) return d;
  const dt = new Date(t);
  return `${dt.getFullYear()}.${String(dt.getMonth() + 1).padStart(2, "0")}.${String(dt.getDate()).padStart(2, "0")}`;
}

export default async function OGImage({ params }: Props) {
  const { pref: rawPref, muni: rawMuni } = await params;
  const pref = decode(rawPref);
  const muni = decode(rawMuni);

  const cell = PREF_NAMES.has(pref) ? await getPlaceCell(pref, muni) : null;
  const count = cell?.count ?? 0;
  const count90d = cell?.count90d ?? 0;
  const count365d = cell?.count365d ?? 0;
  const latest = formatDate(cell?.latestDate ?? null);

  const tone =
    count90d >= 10
      ? { bg: "#fee2e2", accent: "#b91c1c" }
      : count90d >= 1
        ? { bg: "#fef3c7", accent: "#c2410c" }
        : { bg: "#fef9c3", accent: "#a16207" };

  const text = `${pref}${muni}のクマ出没情報危険度マップKumaWatchクマウォッチ全国予報総目撃過去日年月最新件1234567890.-:kumawatchjp`;
  const fontBold = await loadJaFont(text, 700);
  const fontReg = await loadJaFont(text, 400);

  const fonts = [];
  if (fontBold) fonts.push({ name: "NotoSansJP", data: fontBold, style: "normal" as const, weight: 700 as const });
  if (fontReg) fonts.push({ name: "NotoSansJP", data: fontReg, style: "normal" as const, weight: 400 as const });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: tone.bg,
          padding: "60px 70px",
          fontFamily: "NotoSansJP",
          color: "#1f2937",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: tone.accent,
              color: "#fff",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            🐻
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "26px", fontWeight: 700, color: "#374151" }}>
              KumaWatch
            </div>
            <div style={{ display: "flex", fontSize: "16px", color: "#6b7280", marginTop: "2px" }}>
              全国クマ出没予報・危険度マップ
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "60px",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", fontSize: "32px", color: "#6b7280", fontWeight: 400 }}>
            {pref}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: muni.length > 6 ? 96 : 116,
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.1,
              marginTop: "8px",
            }}
          >
            {muni}
          </div>
          <div style={{ display: "flex", fontSize: "32px", color: "#374151", marginTop: "12px" }}>
            のクマ出没情報
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "20px", marginTop: "auto" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.75)",
              borderRadius: "20px",
              padding: "20px 26px",
            }}
          >
            <div style={{ display: "flex", fontSize: "18px", color: "#6b7280" }}>総目撃</div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: "52px",
                fontWeight: 700,
                color: "#111827",
                marginTop: "4px",
              }}
            >
              <span>{count}</span>
              <span style={{ fontSize: "22px", color: "#6b7280", marginLeft: "6px" }}>件</span>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              background: "rgba(255,255,255,0.75)",
              borderRadius: "20px",
              padding: "20px 26px",
            }}
          >
            <div style={{ display: "flex", fontSize: "18px", color: "#6b7280" }}>過去1年</div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: "52px",
                fontWeight: 700,
                color: "#111827",
                marginTop: "4px",
              }}
            >
              <span>{count365d}</span>
              <span style={{ fontSize: "22px", color: "#6b7280", marginLeft: "6px" }}>件</span>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              background: count90d > 0 ? tone.accent : "rgba(255,255,255,0.75)",
              borderRadius: "20px",
              padding: "20px 26px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "18px",
                color: count90d > 0 ? "#fff" : "#6b7280",
              }}
            >
              過去90日
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                fontSize: "52px",
                fontWeight: 700,
                color: count90d > 0 ? "#fff" : "#111827",
                marginTop: "4px",
              }}
            >
              <span>{count90d}</span>
              <span
                style={{
                  fontSize: "22px",
                  color: count90d > 0 ? "rgba(255,255,255,0.85)" : "#6b7280",
                  marginLeft: "6px",
                }}
              >
                件
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "24px",
            color: "#6b7280",
            fontSize: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span>最新目撃:</span>
            <span style={{ color: "#374151", fontWeight: 700 }}>{latest}</span>
          </div>
          <div style={{ display: "flex", fontWeight: 700, color: "#374151" }}>
            kuma-watch.jp
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
