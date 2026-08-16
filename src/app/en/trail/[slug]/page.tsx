import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNearbySightings } from "@/lib/sightings-cache";
import { haversineKm } from "@/lib/nearby-sightings";
import { jstToday, jstDaysAgo } from "@/lib/jst-date";
import {
  EN_TRAIL_SLUGS,
  getEnTrail,
  trailMapView,
  type EnTrail,
} from "@/data/en-trails";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import MiniSightingsMap from "@/components/MiniSightingsMap";
import EnSources from "@/components/en/EnSources";
import JsonLd from "@/components/JsonLd";

/**
 * インバウンド向け「有名トレイル」の英語ページ。点(スポット)ではなく、ルート上の
 * 主要ポイント周辺の出没を集計して「このルート沿いに直近クマ出没があるか」を答える。
 * 公開はフラグ NEXT_PUBLIC_EN_ENABLED。
 */
const SITE = "https://kuma-watch.jp";
const EN_ENABLED = process.env.NEXT_PUBLIC_EN_ENABLED === "true";
const RADIUS_KM = 10;

export const dynamicParams = false;
export const revalidate = 21600;

export function generateStaticParams() {
  return EN_TRAIL_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

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
  const t = getEnTrail(slug);
  if (!t) return { title: "Not found" };
  return {
    title: `Bears on the ${t.name} — Sightings & Safety | KumaWatch`,
    description: `${t.intro.slice(0, 150)} Check recent bear sightings along the route before you go.`.slice(
      0,
      200,
    ),
    alternates: { canonical: `${SITE}/en/trail/${slug}` },
    openGraph: {
      title: `Bears on the ${t.name} — Sightings & Safety`,
      url: `${SITE}/en/trail/${slug}`,
      type: "article",
    },
  };
}

type Agg = {
  count90: number;
  count365: number;
  latest: string | null;
  recent: { id: string; date: string; lat: number; lon: number; near: string }[];
  perWp: { name: string; count90: number }[];
};

async function aggregate(t: EnTrail): Promise<Agg> {
  const today = jstToday();
  const cutoff90 = jstDaysAgo(90);
  const cutoff365 = jstDaysAgo(365);
  const seen = new Set<string>();
  const merged: { id: string; date: string; lat: number; lon: number }[] = [];
  const perWp = t.waypoints.map((w) => ({ name: w.name, count90: 0 }));

  for (let wi = 0; wi < t.waypoints.length; wi++) {
    const w = t.waypoints[wi];
    const list = await getNearbySightings(w.lat, w.lon, RADIUS_KM);
    for (const rec of list) {
      if (!rec.date || rec.date > today) continue;
      if (haversineKm(w.lat, w.lon, rec.lat, rec.lon) > RADIUS_KM) continue;
      if (rec.date >= cutoff90) perWp[wi].count90++;
      if (!seen.has(rec.id)) {
        seen.add(rec.id);
        merged.push({ id: rec.id, date: rec.date, lat: rec.lat, lon: rec.lon });
      }
    }
  }

  let count90 = 0;
  let count365 = 0;
  let latest: string | null = null;
  const recentAll = merged.filter((r) => r.date >= cutoff365);
  for (const r of recentAll) {
    count365++;
    if (r.date >= cutoff90) count90++;
    if (!latest || r.date > latest) latest = r.date;
  }
  recentAll.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  // 各記録に最寄りのルート地点名を付ける(一覧で「near Hongu」と出す)。
  const recent = recentAll.slice(0, 80).map((r) => {
    let best = t.waypoints[0];
    let bestD = Infinity;
    for (const w of t.waypoints) {
      const d = haversineKm(w.lat, w.lon, r.lat, r.lon);
      if (d < bestD) {
        bestD = d;
        best = w;
      }
    }
    return { ...r, near: best.name };
  });

  return { count90, count365, latest, recent, perWp };
}

export default async function EnglishTrailPage({ params }: Props) {
  if (!EN_ENABLED) notFound();
  const { slug } = await params;
  const t = getEnTrail(slug);
  if (!t) notFound();

  const agg = await aggregate(t);
  const view = trailMapView(t);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: t.name,
      description: t.intro.slice(0, 300),
      url: `${SITE}/en/trail/${slug}`,
      geo: {
        "@type": "GeoCoordinates",
        latitude: view.centerLat,
        longitude: view.centerLon,
      },
      address: { "@type": "PostalAddress", addressCountry: "JP" },
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Bear Safety in Japan", item: `${SITE}/en` },
        { "@type": "ListItem", position: 2, name: t.name, item: `${SITE}/en/trail/${slug}` },
      ],
    },
  ];

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <JsonLd data={jsonLd} />
      <nav className="text-xs text-stone-500">
        <Link href="/en" className="hover:text-stone-900">
          Bear Safety
        </Link>
        <span className="mx-1">›</span>
        <span className="font-semibold text-stone-700">{t.name}</span>
      </nav>

      <p className="mt-2 text-xs font-bold tracking-wider text-amber-700">
        {t.region}
      </p>
      <h1 className="mt-1 text-2xl font-black leading-tight text-stone-900 sm:text-3xl">
        Bears on the {t.name}
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-stone-600">{t.intro}</p>

      {/* Route status */}
      <section className="mt-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-4">
        {agg.count365 > 0 ? (
          <>
            <p className="text-[15px] font-bold text-stone-900">
              {agg.count90 > 0
                ? `${agg.count90} bear sighting${agg.count90 > 1 ? "s" : ""} within ${RADIUS_KM} km of the route in the past 90 days`
                : `${agg.count365} sighting${agg.count365 > 1 ? "s" : ""} within ${RADIUS_KM} km of the route in the past year`}
            </p>
            {agg.latest && (
              <p className="mt-1 text-[13px] text-stone-600">
                Most recent: {fmtDate(agg.latest)}
              </p>
            )}
            <p className="mt-2 text-[13px] leading-relaxed text-stone-600">
              Bears are present along this route. Carry a bell, make noise, and
              take extra care at dawn and dusk and near dense brush.
            </p>
          </>
        ) : (
          <>
            <p className="text-[15px] font-bold text-stone-900">
              No recent bear sightings reported within {RADIUS_KM} km of the route
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-stone-600">
              No sightings in the past year from official and news sources. Bears
              still live in these mountains — stay aware and prepared.
            </p>
          </>
        )}
        <p className="mt-2 text-[11px] text-stone-400">
          Aggregated from sightings near {t.waypoints.length} points along the
          route. Real-time data from official reports and news.
        </p>
      </section>

      {/* Map */}
      <section className="mt-6">
        <h2 className="text-lg font-bold text-stone-900">
          Sightings along the route
        </h2>
        <div className="mt-2 overflow-hidden rounded-2xl border border-stone-200">
          <MiniSightingsMap
            centerLat={view.centerLat}
            centerLon={view.centerLon}
            zoom={view.zoom}
            records={agg.recent.map((r) => ({
              id: r.id,
              lat: r.lat,
              lon: r.lon,
              date: r.date,
            }))}
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
        </div>
      </section>

      {/* Per-section status */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Status by section (past 90 days)
      </h2>
      <ul className="mt-3 space-y-1.5">
        {agg.perWp.map((w) => (
          <li
            key={w.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm"
          >
            <span className="font-semibold text-stone-800">{w.name}</span>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${
                w.count90 > 0
                  ? "bg-amber-100 text-amber-800"
                  : "bg-stone-100 text-stone-500"
              }`}
            >
              {w.count90 > 0
                ? `${w.count90} within ${RADIUS_KM} km`
                : "none reported"}
            </span>
          </li>
        ))}
      </ul>

      {/* Recent sightings */}
      {agg.recent.length > 0 && (
        <>
          <h2 className="mt-8 text-lg font-bold text-stone-900">
            Recent sightings near the route
          </h2>
          <ul className="mt-3 space-y-1.5">
            {agg.recent.slice(0, 8).map((s, i) => (
              <li
                key={`${s.id}-${i}`}
                className="flex items-baseline justify-between gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm"
              >
                <span className="font-semibold text-stone-900">
                  {fmtDate(s.date)}
                </span>
                <span className="truncate text-xs text-stone-500">
                  near {s.near}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* When active */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        When are bears most active?
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-stone-600">
        Bears are most active in <b>autumn (September–November)</b> and{" "}
        <b>late spring</b>, and around <b>dawn and dusk</b>. In years when acorns
        and beech nuts fail, they roam farther and appear closer to trails.
      </p>

      {/* Safety */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">Hike safely</h2>
      <ul className="mt-2 space-y-1.5 text-[14.5px] leading-relaxed text-stone-600">
        <li>• Make noise (a bear bell, talking) to avoid surprise encounters.</li>
        <li>• Don&apos;t hike alone; avoid dense brush and dawn/dusk if you can.</li>
        <li>• If you meet a bear: stay calm, don&apos;t run, back away slowly.</li>
      </ul>
      <p className="mt-2 text-[13px]">
        <Link href="/en" className="font-semibold text-emerald-700 underline">
          Full bear safety guide →
        </Link>
        <span className="mx-2 text-stone-300">·</span>
        <Link
          href="/en/bear-spray"
          className="font-semibold text-emerald-700 underline"
        >
          Bear spray &amp; bells →
        </Link>
      </p>

      {/* Related spots */}
      {t.relatedSpots && t.relatedSpots.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-bold text-stone-900">Nearby spots</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {t.relatedSpots.map((s) => {
              const l = JAPAN_LANDMARKS.find((x) => x.slug === s);
              const en = l?.altNames?.find((a) => /^[A-Za-z]/.test(a)) ?? s;
              return (
                <Link
                  key={s}
                  href={`/en/spot/${s}`}
                  className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-[13px] font-medium text-stone-700 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  {en}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <EnSources updated={fmtDate(jstToday()) ?? undefined} className="mt-8" />

      <p className="mt-8 text-xs text-stone-400">
        <Link href="/en#trails" className="underline hover:text-stone-600">
          ← All trails
        </Link>
      </p>
    </main>
  );
}
