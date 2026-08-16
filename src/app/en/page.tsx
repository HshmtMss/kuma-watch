import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { affiliateEnabled, amazonSearchUrl } from "@/lib/affiliate";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { INBOUND_EN_SLUGS } from "@/data/inbound-en-spots";
import { EN_GENERATED_SPOTS } from "@/data/inbound-en-generated";
import { EN_TRAILS } from "@/data/en-trails";
import { REGION_ORDER, prefRegion, prefEn } from "@/data/pref-en";
import TravelEssentials from "@/components/en/TravelEssentials";
import JsonLd from "@/components/JsonLd";
import EnSources from "@/components/en/EnSources";

// FAQPage 構造化データ。回答はページ上の可視テキストに一致させる（Google 方針）。
const REVIEWED = "August 17, 2026";
const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  dateModified: "2026-08-17",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are there bears in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Bears live across much of Japan's mountains and forests, including popular trails near Tokyo, the Japan Alps, Nikko, and all of Hokkaido. Encounters are rare, but a little preparation keeps your hike safe.",
      },
    },
    {
      "@type": "Question",
      name: "Are there different kinds of bear in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Asian black bears (tsukinowaguma) live in the mountains of Honshu and Shikoku, while larger brown bears (higuma) live only on Hokkaido. There are essentially no bears in Kyushu or Okinawa.",
      },
    },
    {
      "@type": "Question",
      name: "When are bears most active in Japan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bears are most active in autumn (September–November), when they feed heavily before winter, and again in late spring. They move most around dawn and dusk.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if I meet a bear?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stay calm and do not run or scream. Keep facing the bear and back away slowly, giving it space and an escape route. Never get between a bear and its cub. Use bear spray only at close range as a last resort.",
      },
    },
  ],
};

/**
 * 英語の土台ページ（インバウンド向け・追加方式）。日本語の既存ルートは触らず、
 * `/en/…` に英語を足していく最初の1枚。SEO の要となる安全ガイド（"bears in japan"）
 * ＋インバウンド向け導線（対策グッズ等）を置く。公開はフラグ NEXT_PUBLIC_EN_ENABLED。
 * ルート layout は lang="ja" のままだが、本文は英語で content 優先＋hreflang で担保。
 */
const SITE = "https://kuma-watch.jp";
const EN_ENABLED = process.env.NEXT_PUBLIC_EN_ENABLED === "true";

export const metadata: Metadata = {
  title: "Bears in Japan: A Hiker's Safety Guide | KumaWatch",
  description:
    "Planning to hike in Japan? Learn where bears live, when they are active, what to do if you meet one, and how to check real-time bear sightings near your trail.",
  alternates: {
    canonical: `${SITE}/en`,
    languages: {
      en: `${SITE}/en`,
      ja: `${SITE}/learn/safety`,
      "x-default": `${SITE}/en`,
    },
  },
  openGraph: {
    title: "Bears in Japan: A Hiker's Safety Guide",
    description:
      "Where bears live, when they are active, what to do if you meet one, and how to check sightings near your trail.",
    url: `${SITE}/en`,
    type: "article",
  },
};

const RULES: { k: string; title: string; body: string }[] = [
  {
    k: "は",
    title: "Don't run",
    body: "Never turn your back and run — it can trigger a chase. Back away slowly while keeping the bear in view.",
  },
  {
    k: "ち",
    title: "Don't approach",
    body: "Never approach a bear, especially a cub — the mother is nearby. Avoid dense brush and places with recent sightings.",
  },
  {
    k: "み",
    title: "Go together",
    body: "Avoid hiking alone. A group is noisier, more visible to bears, and safer.",
  },
  {
    k: "つ",
    title: "Make noise",
    body: "Let bears know you are there. Use a bear bell, talk, or play sound from your phone — surprise encounters are the most dangerous.",
  },
  {
    k: "🍯",
    title: "Leave no food",
    body: "Carry out all food and trash. Food smells attract bears to trails and campsites.",
  },
];

export default function EnglishSafetyHub() {
  if (!EN_ENABLED) notFound();

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <JsonLd data={FAQ_LD} />
      <p className="text-xs font-bold tracking-wider text-amber-700">
        HIKING IN JAPAN
      </p>
      <h1 className="mt-1 text-2xl font-black leading-tight text-stone-900 sm:text-3xl">
        Bears in Japan: A Hiker's Safety Guide
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
        Bears live across much of Japan's mountains and forests — including
        popular trails near Tokyo, the Japan Alps, Nikko, and all of Hokkaido.
        Encounters are rare, but a little preparation keeps your hike safe. This
        guide covers where bears are, when they are active, and exactly what to
        do.
      </p>

      {/* Species / where they live */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Two kinds of bear in Japan
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-stone-600">
        Which bear you might meet depends entirely on where you hike.
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <h3 className="text-[15px] font-bold text-stone-900">
            Asian black bear
          </h3>
          <p className="text-[12px] font-semibold text-stone-400">
            tsukinowaguma · Honshu &amp; Shikoku
          </p>
          <p className="mt-2 text-[13.5px] leading-relaxed text-stone-600">
            Smaller (about 1.2–1.5 m, often 50–120 kg), with a pale crescent on
            the chest. It lives through the mountains of Honshu — the Japan Alps,
            Tohoku, Nikko, and the forested hills around Tokyo. Usually shy and
            keen to avoid people, but a startled bear or a mother with cubs can be
            dangerous.
          </p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-4">
          <h3 className="text-[15px] font-bold text-stone-900">Brown bear</h3>
          <p className="text-[12px] font-semibold text-stone-400">
            higuma · Hokkaido only
          </p>
          <p className="mt-2 text-[13.5px] leading-relaxed text-stone-600">
            Much larger and stronger (males can exceed 200 kg), found only on
            Hokkaido — including Shiretoko and Daisetsuzan. Treat brown-bear
            country with extra caution: keep your distance and never approach for
            a photo.
          </p>
        </div>
      </div>
      <p className="mt-3 text-[14.5px] leading-relaxed text-stone-600">
        There are essentially <b>no bears in Kyushu or Okinawa</b>, and only a
        tiny, rarely-seen population remains in Shikoku. If you are sightseeing in
        cities, bears are not a concern — this matters mainly for hiking and
        rural travel.
      </p>

      {/* 5 rules */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        5 rules for bear country
      </h2>
      <ul className="mt-3 space-y-2.5">
        {RULES.map((r) => (
          <li
            key={r.title}
            className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50/50 px-3.5 py-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 text-lg font-black text-white shadow-sm">
              {r.k}
            </span>
            <span className="min-w-0">
              <span className="block text-[15px] font-extrabold text-stone-900">
                {r.title}
              </span>
              <span className="block text-[13.5px] leading-snug text-stone-600">
                {r.body}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-[13px]">
        <Link
          href="/en/bear-spray"
          className="font-semibold text-emerald-700 underline"
        >
          Bear spray &amp; bells: rules and where to buy →
        </Link>
      </p>

      {/* When / where */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        When are bears most active?
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-stone-600">
        Bears are most active in <b>autumn (September–November)</b>, when they
        feed heavily before winter, and again in <b>late spring</b>. They move
        most around <b>dawn and dusk</b>. In years when acorns and beech nuts
        fail, bears roam farther and appear closer to trails and villages.
      </p>

      {/* If you meet one */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        If you meet a bear
      </h2>
      <ol className="mt-2 space-y-1.5 text-[14.5px] leading-relaxed text-stone-600">
        <li>1. Stay calm. Do not run or scream — running can trigger a chase.</li>
        <li>2. Keep facing the bear and back away slowly, watching it as you go.</li>
        <li>3. Give it space and an escape route — never get between a bear and its cub.</li>
        <li>4. If it approaches, stand your ground and make yourself known calmly; use bear spray only at close range as a last resort.</li>
        <li>5. If a bear makes contact, protect your head and neck with your arms and backpack, and keep your face down.</li>
      </ol>
      <p className="mt-2 text-[13.5px] leading-relaxed text-stone-600">
        In Hokkaido&apos;s brown-bear country, keep an even greater distance and
        leave the area promptly if you see one — do not linger for photos.
      </p>

      {/* Family */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Hiking with children &amp; families
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-stone-600">
        Keep children close and within sight, especially at dawn, dusk, and near
        dense brush or rushing streams where a bear may not hear you coming. Make
        noise together — talking and a bell are enough. Carry out every snack and
        wrapper: food smells are the most common reason a bear approaches a trail
        or campsite.
      </p>

      {/* Check sightings */}
      <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-4">
        <h2 className="text-base font-bold text-stone-900">
          Check sightings near your trail
        </h2>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-stone-600">
          KumaWatch tracks real-time bear sightings across Japan, updated
          continuously from official reports and news. Pick your destination
          below to see recent sightings and a live map for that spot.
        </p>
        <Link
          href="#spots"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-800"
        >
          See hiking spots &amp; sightings →
        </Link>
      </div>

      {/* Multi-day trails (route-level bear status) */}
      <h2 id="trails" className="mt-8 scroll-mt-20 text-lg font-bold text-stone-900">
        Popular multi-day trails
      </h2>
      <p className="mt-1 text-[13.5px] leading-relaxed text-stone-600">
        Walking a famous route? Check recent bear sightings along the whole
        trail, section by section.
      </p>
      <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
        {EN_TRAILS.map((t) => (
          <Link
            key={t.slug}
            href={`/en/trail/${t.slug}`}
            className="rounded-2xl border border-stone-200 bg-white p-3.5 transition hover:border-amber-300 hover:bg-amber-50"
          >
            <span className="block text-[15px] font-bold text-stone-900">
              {t.name}
            </span>
            <span className="mt-0.5 block text-[12px] font-semibold text-stone-400">
              {t.region}
            </span>
            <span className="mt-1 block text-[12.5px] leading-snug text-stone-600">
              {t.tagline}
            </span>
          </Link>
        ))}
      </div>

      {/* Popular spots (internal links to English spot pages) */}
      <h2 id="spots" className="mt-8 scroll-mt-20 text-lg font-bold text-stone-900">
        Hiking spots across Japan
      </h2>
      <p className="mt-1 text-[13.5px] leading-relaxed text-stone-600">
        Check recent bear sightings and a live map before you visit —{" "}
        {INBOUND_EN_SLUGS.length + EN_GENERATED_SPOTS.length} spots across Japan.
      </p>

      <h3 className="mt-4 text-sm font-bold text-stone-500">Popular spots</h3>
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {INBOUND_EN_SLUGS.map((slug) => {
          const l = JAPAN_LANDMARKS.find((x) => x.slug === slug);
          if (!l) return null;
          const en =
            l.altNames?.find((a) => /^[A-Za-z]/.test(a)) ?? l.name;
          return (
            <Link
              key={slug}
              href={`/en/spot/${slug}`}
              className="rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-amber-300 hover:bg-amber-50"
            >
              {en}
            </Link>
          );
        })}
      </div>

      {/* More nature & hiking spots, grouped by region (self-contained EN data) */}
      {EN_GENERATED_SPOTS.length > 0 &&
        (() => {
          const byRegion = new Map<string, typeof EN_GENERATED_SPOTS>();
          for (const s of EN_GENERATED_SPOTS) {
            const rg = prefRegion(s.prefName);
            const arr = byRegion.get(rg) ?? [];
            arr.push(s);
            byRegion.set(rg, arr);
          }
          return (
            <div className="mt-6">
              <h3 className="text-sm font-bold text-stone-500">
                More nature &amp; hiking spots by region
              </h3>
              <div className="mt-2 space-y-6">
                {REGION_ORDER.filter((r) => byRegion.has(r)).map((region) => {
                  // 地方 → 県 でサブグループ化して見やすく
                  const byPref = new Map<string, typeof EN_GENERATED_SPOTS>();
                  for (const s of byRegion.get(region)!) {
                    const p = prefEn(s.prefName);
                    const arr = byPref.get(p) ?? [];
                    arr.push(s);
                    byPref.set(p, arr);
                  }
                  const prefs = [...byPref.keys()].sort();
                  return (
                    <div key={region}>
                      <p className="text-[13px] font-bold text-stone-700">
                        {region}
                      </p>
                      <div className="mt-1.5 space-y-2.5">
                        {prefs.map((pref) => (
                          <div key={pref}>
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                              {pref}
                            </p>
                            <div className="mt-1 flex flex-wrap gap-1.5">
                              {byPref
                                .get(pref)!
                                .slice()
                                .sort((a, b) => a.enName.localeCompare(b.enName))
                                .map((s) => (
                                  <Link
                                    key={s.slug}
                                    href={`/en/spot/${s.slug}`}
                                    className="rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-[13px] font-medium text-stone-700 transition hover:border-amber-300 hover:bg-amber-50"
                                  >
                                    {s.enName}
                                  </Link>
                                ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}

      {/* Gear (affiliate) */}
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
          <p className="mb-3 mt-1 text-xs leading-relaxed text-stone-500">
            Simple, effective basics. A bell to make noise is the single most
            useful item.
          </p>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: "Bear bell", kw: "bear bell 熊鈴", note: "Make noise" },
              { label: "Bear spray", kw: "熊よけスプレー bear spray", note: "Last resort" },
              { label: "Headlamp", kw: "登山 ヘッドライト headlamp", note: "Dawn / dusk" },
              { label: "Whistle", kw: "アウトドア ホイッスル whistle", note: "Signal help" },
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
                  <span className="mt-0.5 text-[11px] leading-snug text-stone-500">
                    {g.note}
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

      <EnSources updated={REVIEWED} className="mt-8" />

      <p className="mt-8 text-xs text-stone-400">
        日本語版:{" "}
        <Link href="/learn/safety" className="underline hover:text-stone-600">
          クマ対策の安全ガイド
        </Link>
      </p>
    </main>
  );
}
