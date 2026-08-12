import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { affiliateEnabled, amazonSearchUrl } from "@/lib/affiliate";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import { INBOUND_EN_SLUGS } from "@/data/inbound-en-spots";

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
        <li>1. Stay calm. Do not run or scream.</li>
        <li>2. Keep facing the bear and back away slowly.</li>
        <li>3. Give it space and an escape route — never get between a bear and its cub.</li>
        <li>4. If it approaches, make yourself known calmly; use bear spray only at close range as a last resort.</li>
      </ol>

      {/* Check sightings */}
      <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-4">
        <h2 className="text-base font-bold text-stone-900">
          Check sightings near your trail
        </h2>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-stone-600">
          KumaWatch maps real-time bear sightings across Japan, updated
          continuously from official reports and news. Check your destination
          before you go.
        </p>
        <Link
          href="/"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-800"
        >
          Open the live bear map →
        </Link>
      </div>

      {/* Popular spots (internal links to English spot pages) */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Popular hiking spots
      </h2>
      <p className="mt-1 text-[13.5px] leading-relaxed text-stone-600">
        Check recent bear sightings before you visit.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
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

      <p className="mt-8 text-xs text-stone-400">
        日本語版:{" "}
        <Link href="/learn/safety" className="underline hover:text-stone-600">
          クマ対策の安全ガイド
        </Link>
      </p>
    </main>
  );
}
