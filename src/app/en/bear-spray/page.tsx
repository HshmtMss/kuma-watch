import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { affiliateEnabled, amazonSearchUrl } from "@/lib/affiliate";
import TravelEssentials from "@/components/en/TravelEssentials";
import JsonLd from "@/components/JsonLd";

const ARTICLE_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bear Spray & Bells in Japan: Rules and Where to Buy",
    description:
      "Is bear spray legal in Japan? Can you fly with it? What about bear bells? A practical guide for hikers, plus where to buy in Japan.",
    url: "https://kuma-watch.jp/en/bear-spray",
    inLanguage: "en",
    isPartOf: "https://kuma-watch.jp/en",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Bear Safety in Japan",
        item: "https://kuma-watch.jp/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bear Spray & Bells",
        item: "https://kuma-watch.jp/en/bear-spray",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is bear spray legal in Japan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Buying and carrying bear spray for wildlife defense is allowed, and it is sold at outdoor stores across Japan, especially in Hokkaido. It is meant for bears, not against people.",
        },
      },
      {
        "@type": "Question",
        name: "Can I bring bear spray on a plane to Japan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Pressurized irritant sprays are prohibited in both carry-on and checked luggage. Buy it after you arrive in Japan, and use up, give away, or dispose of it before you fly home.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need bear spray to hike in Japan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most day hikes in Honshu, a bear bell and awareness are usually enough, since Asian black bears tend to move away once they know you are there. Bear spray matters most in Hokkaido's brown-bear country and on remote backcountry routes.",
        },
      },
    ],
  },
];

/**
 * インバウンド向け土台記事その2：日本でのクマ鈴/クマ撃退スプレーのルールと入手。
 * 実在の検索需要（"bear spray japan legal" 等）を取りに行く＋グッズ affiliate。
 * 公開はフラグ NEXT_PUBLIC_EN_ENABLED。
 */
const SITE = "https://kuma-watch.jp";
const EN_ENABLED = process.env.NEXT_PUBLIC_EN_ENABLED === "true";

export const metadata: Metadata = {
  title: "Bear Spray & Bells in Japan: Rules and Where to Buy | KumaWatch",
  description:
    "Is bear spray legal in Japan? Can you fly with it? What about bear bells? A practical guide for hikers, plus where to buy in Japan.",
  alternates: {
    canonical: `${SITE}/en/bear-spray`,
    languages: { en: `${SITE}/en/bear-spray` },
  },
  openGraph: {
    title: "Bear Spray & Bells in Japan: Rules and Where to Buy",
    url: `${SITE}/en/bear-spray`,
    type: "article",
  },
};

export default function BearSprayGuide() {
  if (!EN_ENABLED) notFound();

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <JsonLd data={ARTICLE_LD} />
      <nav className="text-xs text-stone-500">
        <Link href="/en" className="hover:text-stone-900">
          Bear Safety
        </Link>
        <span className="mx-1">›</span>
        <span className="font-semibold text-stone-700">Spray & bells</span>
      </nav>

      <h1 className="mt-2 text-2xl font-black leading-tight text-stone-900 sm:text-3xl">
        Bear Spray &amp; Bells in Japan
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
        Two simple tools help you stay safe in Japan's bear country: a{" "}
        <b>bear bell</b> to avoid surprise encounters, and{" "}
        <b>bear spray</b> as a last-resort deterrent. Here's what you need to
        know as a visitor.
      </p>

      {/* Do you need it */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Do you actually need bear spray?
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-stone-600">
        For most visitors on popular day hikes in Honshu, a <b>bell and
        awareness are usually enough</b> — Asian black bears typically move away
        once they know you&apos;re there. Bear spray matters most in{" "}
        <b>Hokkaido&apos;s brown-bear country</b> and on remote, quiet, or
        multi-day backcountry routes. If in doubt, carry it: it&apos;s light, and
        you only ever need it once.
      </p>

      {/* Bells */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Bear bells — your everyday tool
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-stone-600">
        Most bear encounters happen by surprise. A bell (or simply talking and
        making noise) lets bears know you're there so they move away. Bells are
        cheap, legal, and sold at any outdoor shop and convenience store near
        trailheads. This is the single most useful item for day hikers.
      </p>

      {/* Spray legality */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Is bear spray legal in Japan?
      </h2>
      <ul className="mt-2 space-y-1.5 text-[14.5px] leading-relaxed text-stone-600">
        <li>
          • <b>Buying &amp; carrying for bear defense is allowed.</b> Bear spray
          is sold at outdoor stores across Japan (Hokkaido especially).
        </li>
        <li>
          • <b>You cannot bring it on a plane</b> — pressurized irritant sprays
          are prohibited in both carry-on and checked luggage. Buy it in Japan.
        </li>
        <li>
          • It's meant for <b>wildlife defense</b>, not against people. Use it
          only as a last resort at close range.
        </li>
      </ul>
      <p className="mt-2 text-[12px] leading-relaxed text-stone-400">
        Rules can change and vary by area — follow local signage and official
        guidance. This page is for reference only.
      </p>

      {/* How to use */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Using bear spray
      </h2>
      <ol className="mt-2 space-y-1.5 text-[14.5px] leading-relaxed text-stone-600">
        <li>1. Keep it on your hip/chest — reachable in seconds, not in your pack.</li>
        <li>2. Only deploy if a bear charges and is close (a few meters).</li>
        <li>3. Aim slightly downward at the bear's face; account for wind.</li>
        <li>4. After spraying, leave the area calmly — don't linger.</li>
      </ol>

      {/* Flying / disposal */}
      <h2 className="mt-8 text-lg font-bold text-stone-900">
        Flying home &amp; disposal
      </h2>
      <p className="mt-2 text-[14.5px] leading-relaxed text-stone-600">
        You cannot take bear spray on a plane, in carry-on or checked bags. Plan
        to <b>use up, give away, or dispose of it before you fly</b> — many
        outdoor shops and mountain huts in Hokkaido will take a used canister,
        and some rent spray so you never have to travel with it. Never pack a
        pressurized canister in your luggage.
      </p>

      {/* Gear affiliate */}
      {affiliateEnabled() && (
        <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-stone-800">
              Buy in Japan
            </span>
            <span className="rounded-sm bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-stone-500">
              PR
            </span>
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-2">
            {[
              { label: "Bear bell", kw: "bear bell 熊鈴" },
              { label: "Bear spray", kw: "熊よけスプレー bear spray" },
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

      <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-4">
        <p className="text-sm font-bold text-stone-900">
          Check sightings near your trail
        </p>
        <Link
          href="/en#spots"
          className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-800"
        >
          See hiking spots &amp; sightings →
        </Link>
      </div>
    </main>
  );
}
