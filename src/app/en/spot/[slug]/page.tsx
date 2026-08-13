import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { getNearbySightings } from "@/lib/sightings-cache";
import { haversineKm } from "@/lib/nearby-sightings";
import { jstToday, jstDaysAgo } from "@/lib/jst-date";
import { affiliateEnabled, amazonSearchUrl } from "@/lib/affiliate";
import { INBOUND_EN_SLUGS } from "@/data/inbound-en-spots";
import TravelEssentials from "@/components/en/TravelEssentials";
import MiniSightingsMap from "@/components/MiniSightingsMap";

/**
 * インバウンド向け英語スポットページ（追加方式 /en）。日本語の /spot は無改修。
 * 主要観光地だけを対象に、来訪前に必要な「周辺のクマ出没状況＋季節＋安全」を英語で。
 * 公開はフラグ NEXT_PUBLIC_EN_ENABLED。hreflang で en↔ja を相互リンク。
 */
const SITE = "https://kuma-watch.jp";
const EN_ENABLED = process.env.NEXT_PUBLIC_EN_ENABLED === "true";
const NEAR_RADIUS_KM = 10;
const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const dynamicParams = false;
export const revalidate = 21600;

export function generateStaticParams() {
  return INBOUND_EN_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

function romaji(name: string, alt?: string[]): string {
  // altNames の先頭(ローマ字表記)を優先。無ければ日本語名のまま。
  const r = alt?.find((a) => /^[A-Za-z]/.test(a));
  return r ?? name;
}

function fmtDate(iso: string | null): string | null {
  if (!iso) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return null;
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const l = JAPAN_LANDMARKS.find((x) => x.slug === slug);
  if (!l) return { title: "Not found" };
  const name = romaji(l.name, l.altNames);
  return {
    title: `Bears near ${name} — Sightings & Safety | KumaWatch`,
    description: `Recent bear sightings near ${name}, Japan, plus when bears are active and how to hike safely. Check before you go.`,
    alternates: {
      canonical: `${SITE}/en/spot/${slug}`,
      languages: {
        en: `${SITE}/en/spot/${slug}`,
        ja: `${SITE}/spot/${slug}`,
      },
    },
    openGraph: {
      title: `Bears near ${name} — Sightings & Safety`,
      url: `${SITE}/en/spot/${slug}`,
      type: "article",
    },
  };
}

export default async function EnglishSpotPage({ params }: Props) {
  if (!EN_ENABLED) notFound();
  const { slug } = await params;
  const l = JAPAN_LANDMARKS.find((x) => x.slug === slug);
  if (!l) notFound();

  const name = romaji(l.name, l.altNames);
  const sightings = await getNearbySightings(l.lat, l.lon, NEAR_RADIUS_KM);
  const today = jstToday();
  const cutoff90 = jstDaysAgo(90);
  const cutoff365 = jstDaysAgo(365);
  let count90 = 0;
  let count365 = 0;
  let latest: string | null = null;
  const nearby: {
    date: string;
    distanceKm: number;
    lat: number;
    lon: number;
  }[] = [];
  // 月別(季節性)は年をまたいで集計＝そのスポットで「何月に多いか」を可視化。
  const monthly = new Array(12).fill(0) as number[];
  for (const s of sightings) {
    if (!s.date || s.date > today) continue;
    const d = haversineKm(l.lat, l.lon, s.lat, s.lon);
    if (d > NEAR_RADIUS_KM) continue;
    const mo = Number(s.date.slice(5, 7));
    if (mo >= 1 && mo <= 12) monthly[mo - 1]++;
    if (s.date < cutoff365) continue;
    count365++;
    if (s.date >= cutoff90) count90++;
    if (!latest || s.date > latest) latest = s.date;
    nearby.push({ date: s.date, distanceKm: d, lat: s.lat, lon: s.lon });
  }
  const monthlyMax = Math.max(1, ...monthly);
  const monthlyTotal = monthly.reduce((a, b) => a + b, 0);
  const peakMonth = monthly.indexOf(Math.max(...monthly));
  nearby.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const mapUrl = `/?lat=${l.lat}&lon=${l.lon}&z=12`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${l.lat},${l.lon}`;

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <nav className="text-xs text-stone-500">
        <Link href="/en" className="hover:text-stone-900">
          Bear Safety
        </Link>
        <span className="mx-1">›</span>
        <span className="font-semibold text-stone-700">{name}</span>
      </nav>

      <h1 className="mt-2 text-2xl font-black leading-tight text-stone-900 sm:text-3xl">
        Bears near {name}
      </h1>

      {/* Hero photo (Wikipedia CC). 帰属表示つき。 */}
      {l.imageUrl && (
        <figure className="mt-4 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
          <div className="relative aspect-[16/9] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.imageUrl}
              alt={`${name}, Japan`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <figcaption className="border-t border-stone-200 bg-white px-3 py-1.5 text-[10px] text-stone-400">
            Photo: Wikimedia Commons ({l.imageCredit ?? l.name})
          </figcaption>
        </figure>
      )}

      {/* Real-time status */}
      <section className="mt-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
        {count365 > 0 ? (
          <>
            <p className="text-[15px] font-bold text-stone-900">
              {count90 > 0
                ? `${count90} bear sighting${count90 > 1 ? "s" : ""} within 10 km in the past 90 days`
                : `${count365} sighting${count365 > 1 ? "s" : ""} within 10 km in the past year`}
            </p>
            {latest && (
              <p className="mt-1 text-[13px] text-stone-600">
                Most recent: {fmtDate(latest)}
              </p>
            )}
            <p className="mt-2 text-[13px] leading-relaxed text-stone-600">
              Bears are present in this area. Take basic precautions when hiking —
              especially at dawn and dusk.
            </p>
          </>
        ) : (
          <>
            <p className="text-[15px] font-bold text-stone-900">
              No recent bear sightings reported within 10 km
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-stone-600">
              No sightings in the past year from official and news sources. Bears
              still live in Japan's mountains — stay aware and prepared.
            </p>
          </>
        )}
        <p className="mt-2 text-[11px] text-stone-400">
          Real-time data from official reports and news, updated continuously.
        </p>
      </section>

      {/* Embedded live map (same map as the Japanese page, English labels) */}
      <section className="mt-6">
        <h2 className="text-lg font-bold text-stone-900">Bear sightings map</h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-stone-200">
          <MiniSightingsMap
            centerLat={l.lat}
            centerLon={l.lon}
            records={nearby.slice(0, 60).map((n) => ({
              lat: n.lat,
              lon: n.lon,
              date: n.date,
            }))}
            showCenterMarker
            radiusKm={NEAR_RADIUS_KM}
            zoom={11}
          />
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-stone-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
            Past 90 days
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-stone-400" />
            Within 1 year
          </span>
          <span className="text-stone-400">· 10 km radius shown</span>
        </div>
        <Link
          href={mapUrl}
          className="mt-2 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
        >
          Open the full nationwide map →
        </Link>
      </section>

      {/* Recent sightings */}
      {nearby.length > 0 && (
        <>
          <h2 className="mt-8 text-lg font-bold text-stone-900">
            Recent sightings within 10 km
          </h2>
          <ul className="mt-3 space-y-1.5">
            {nearby.slice(0, 8).map((s, i) => (
              <li
                key={`${s.date}-${i}`}
                className="flex items-baseline justify-between gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm"
              >
                <span className="font-semibold text-stone-900">
                  {fmtDate(s.date)}
                </span>
                <span className="text-xs text-stone-500">
                  {s.distanceKm.toFixed(1)} km away
                </span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Getting there */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">Getting there</h2>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-800 hover:border-stone-400 hover:bg-stone-50"
      >
        Get directions on Google Maps →
      </a>

      {/* Season */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        When are bears most active?
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-stone-600">
        Bears are most active in <b>autumn (September–November)</b> and{" "}
        <b>late spring</b>, and around <b>dawn and dusk</b>. Poor acorn years
        push bears closer to trails.
      </p>

      {/* Monthly pattern near this spot (data-driven) */}
      {monthlyTotal > 0 && (
        <div className="mt-3 rounded-2xl border border-stone-200 bg-white p-4">
          <p className="text-xs font-bold text-stone-500">
            Sightings by month within 10 km{" "}
            <span className="font-normal text-stone-400">
              (peak: {MONTH_LABELS[peakMonth]})
            </span>
          </p>
          <div className="mt-3 flex items-end gap-1.5" aria-hidden>
            {monthly.map((c, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-16 w-full items-end">
                  <div
                    className={`w-full rounded-sm ${
                      i === peakMonth ? "bg-amber-500" : "bg-stone-300"
                    }`}
                    style={{ height: `${Math.max(4, (c / monthlyMax) * 100)}%` }}
                  />
                </div>
                <span className="text-[9px] text-stone-400">
                  {MONTH_LABELS[i][0]}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[10px] text-stone-400">
            Based on {monthlyTotal} reported sightings within 10 km (all years).
          </p>
        </div>
      )}

      {/* Safety */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">Hike safely</h2>
      <ul className="mt-2 space-y-1.5 text-[14.5px] leading-relaxed text-stone-600">
        <li>• Make noise (a bear bell, talking) to avoid surprise encounters.</li>
        <li>• Don't hike alone; avoid dense brush and dawn/dusk if you can.</li>
        <li>• If you meet a bear: stay calm, don't run, back away slowly.</li>
      </ul>
      <p className="mt-2 text-[13px]">
        <Link href="/en" className="font-semibold text-emerald-700 underline">
          Full bear safety guide →
        </Link>
      </p>

      {/* Gear */}
      {affiliateEnabled() && (
        <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-stone-800">
              Gear for bear country
            </span>
            <span className="rounded-sm bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-stone-500">
              PR
            </span>
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: "Bear bell", kw: "bear bell 熊鈴" },
              { label: "Bear spray", kw: "熊よけスプレー bear spray" },
              { label: "Headlamp", kw: "登山 ヘッドライト headlamp" },
              { label: "Whistle", kw: "アウトドア ホイッスル whistle" },
            ].map((g) => (
              <li key={g.label}>
                <a
                  href={amazonSearchUrl(g.kw)}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="flex h-full flex-col rounded-xl border border-stone-200 p-2.5 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  <span className="text-sm font-bold text-amber-800">
                    {g.label}
                  </span>
                  <span className="mt-2 text-[11px] font-semibold text-amber-700">
                    Find on Amazon →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[10px] leading-relaxed text-stone-400">
            As an Amazon Associate, KumaWatch earns from qualifying purchases.
          </p>
        </section>
      )}

      <TravelEssentials className="mt-6" />

      <p className="mt-8 text-xs text-stone-400">
        日本語版:{" "}
        <Link href={`/spot/${slug}`} className="underline hover:text-stone-600">
          {l.name}周辺のクマ出没情報
        </Link>
      </p>
    </main>
  );
}
