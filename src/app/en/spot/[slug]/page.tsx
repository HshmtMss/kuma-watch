import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { getNearbySightings } from "@/lib/sightings-cache";
import { haversineKm } from "@/lib/nearby-sightings";
import { jstToday, jstDaysAgo } from "@/lib/jst-date";
import { affiliateEnabled, amazonSearchUrl } from "@/lib/affiliate";
import { INBOUND_EN_SLUGS } from "@/data/inbound-en-spots";

/**
 * インバウンド向け英語スポットページ（追加方式 /en）。日本語の /spot は無改修。
 * 主要観光地だけを対象に、来訪前に必要な「周辺のクマ出没状況＋季節＋安全」を英語で。
 * 公開はフラグ NEXT_PUBLIC_EN_ENABLED。hreflang で en↔ja を相互リンク。
 */
const SITE = "https://kuma-watch.jp";
const EN_ENABLED = process.env.NEXT_PUBLIC_EN_ENABLED === "true";
const NEAR_RADIUS_KM = 10;

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
  const nearby: { date: string; distanceKm: number }[] = [];
  for (const s of sightings) {
    if (!s.date || s.date > today) continue;
    const d = haversineKm(l.lat, l.lon, s.lat, s.lon);
    if (d > NEAR_RADIUS_KM) continue;
    if (s.date < cutoff365) continue;
    count365++;
    if (s.date >= cutoff90) count90++;
    if (!latest || s.date > latest) latest = s.date;
    nearby.push({ date: s.date, distanceKm: d });
  }
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
        <Link
          href={mapUrl}
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-800"
        >
          Open the live map →
        </Link>
        <p className="mt-2 text-[11px] text-stone-400">
          Real-time data from official reports and news, updated continuously.
        </p>
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
        Most active in <b>autumn (September–November)</b> and <b>late spring</b>,
        and around <b>dawn and dusk</b>. Poor acorn years push bears closer to
        trails.
      </p>

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

      <p className="mt-8 text-xs text-stone-400">
        日本語版:{" "}
        <Link href={`/spot/${slug}`} className="underline hover:text-stone-600">
          {l.name}周辺のクマ出没情報
        </Link>
      </p>
    </main>
  );
}
