import type { SpotSeasonGuide, SonaeLevel } from "@/lib/spot-season";

/**
 * 観光地ページ「四季の楽しみ方」ブロック。観光(魅せる)を主役に、クマ情報は
 * 「その季節のそなえ」として前向きに添える。写真ゾーンは季節ギャラリー1つに統一
 * （独立ヒーローは持たない＝ページに馴染ませる）。データは spot-season.ts で生成。
 */

// そなえの目安(3段階)。名称・色・具体アクション。文言は現代化（ラジオは外す）。
const SONAE_NAME: Record<SonaeLevel, string> = {
  1: "軽め",
  2: "ふつう",
  3: "しっかり",
};
const SONAE_TEXT: Record<SonaeLevel, string> = {
  1: "text-sky-700",
  2: "text-emerald-700",
  3: "text-amber-700",
};
const SONAE_BAR: Record<SonaeLevel, string> = {
  1: "bg-sky-400",
  2: "bg-emerald-500",
  3: "bg-amber-500",
};
const SONAE_DESC: Record<SonaeLevel, string> = {
  1: "いつもの装備でOK。クマ鈴があるとより安心。",
  2: "クマ鈴を持ち、音を立てながら歩く。",
  3: "クマ鈴を鳴らし、声やスマホでこまめに音を出す。早朝・夕方の単独は控える。",
};

// そなえメーター（3段階のバロメーター）。level まで色付き、残りはグレー。
function SonaeMeter({ level }: { level: SonaeLevel }) {
  const heights = [7, 11, 15];
  return (
    <span className="inline-flex h-4 items-end gap-[3px]" aria-hidden>
      {heights.map((h, i) => (
        <span
          key={i}
          className={`w-1.5 rounded-sm ${i < level ? SONAE_BAR[level] : "bg-stone-200"}`}
          style={{ height: `${h}px` }}
        />
      ))}
    </span>
  );
}

// 「そなえ」行（ラベル＋メーター＋段階名）。旬バンドとカードで共用。
function SonaeRow({ label, level }: { label: string; level: SonaeLevel }) {
  return (
    <div className="flex items-center gap-2 text-[11px] text-stone-500">
      <span className="shrink-0">{label}</span>
      <SonaeMeter level={level} />
      <span className={`font-bold ${SONAE_TEXT[level]}`}>
        {SONAE_NAME[level]}
      </span>
    </div>
  );
}

// 季節写真が無い場合のフォールバック（季節の色で表現）。
const SEASON_GRADIENT = {
  spring: "bg-gradient-to-br from-lime-200 via-lime-400 to-emerald-600",
  summer: "bg-gradient-to-br from-lime-300 via-green-500 to-teal-700",
  autumn: "bg-gradient-to-br from-amber-200 via-orange-400 to-orange-700",
  // 冬: 白飛びを避け、空色→濃紺で「澄んだ冬空」を表現。
  winter: "bg-gradient-to-b from-sky-300 via-slate-400 to-slate-700",
} as const;
// 「今の旬」バンドの季節アクセント（四季それぞれに等しく色を与える／優劣なし）。
const NOW_ACCENT: Record<
  "spring" | "summer" | "autumn" | "winter",
  { border: string; text: string; badge: string }
> = {
  spring: {
    border: "border-emerald-500",
    text: "text-emerald-800",
    badge: "bg-emerald-600",
  },
  summer: {
    border: "border-teal-500",
    text: "text-teal-800",
    badge: "bg-teal-600",
  },
  autumn: {
    border: "border-amber-500",
    text: "text-amber-800",
    badge: "bg-amber-600",
  },
  winter: {
    border: "border-sky-500",
    text: "text-sky-800",
    badge: "bg-sky-600",
  },
};

export default function SpotSeasonGuide({ data }: { data: SpotSeasonGuide }) {
  return (
    <section className="not-prose my-6" aria-label="四季の楽しみ方">
      {/* 見出しは1つに集約（上に本文が多いので簡潔に） */}
      <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">
        四季の{data.name}を、安心して楽しむ。
      </h2>

      {/* 今の旬（現場の"今"）を写真＋解説でしっかり前面に。現在月から動的に。 */}
      {(() => {
        const a = NOW_ACCENT[data.now.season];
        return (
          <div className="mt-4 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm sm:flex">
            <div className="relative h-44 w-full shrink-0 sm:h-auto sm:w-56">
              {data.now.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.now.image}
                  alt={`${data.name}の${data.now.headline}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className={`h-full w-full ${SEASON_GRADIENT[data.now.season]}`}
                />
              )}
              <span
                className={`absolute left-3 top-3 rounded-full ${a.badge} px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white shadow`}
              >
                いまの旬
              </span>
            </div>
            <div className={`border-l-4 ${a.border} p-4 sm:p-5`}>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold tabular-nums text-stone-900">
                  {data.now.month}
                  <span className="text-sm font-bold text-stone-400">月</span>
                </span>
                <span className={`text-lg font-bold ${a.text}`}>
                  {data.now.headline}
                </span>
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-stone-600">
                {data.now.description}
              </p>
              <div className="mt-3">
                <SonaeRow label="いまのそなえ" level={data.now.sonae} />
              </div>
            </div>
          </div>
        );
      })()}

      {/* 現在の季節は上の「いまの旬」で主役として見せるので、ここでは重複を避けて
          "ほかの季節"だけを出す（各季節は1回だけ登場）。 */}
      <p className="mt-6 text-[13px] font-bold text-stone-700">
        ほかの季節も、それぞれに。
      </p>
      <div className="mt-2.5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {data.cards
          .filter((c) => c.key !== data.now.season)
          .map((c) => {
            // その季節の写真があれば使い、無ければ季節の色で（春夏秋冬フォールバック）。
            const photo = c.image;
            return (
              <div
                key={c.key}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                <div className="relative h-36">
                  {photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={photo}
                      alt={`${data.name}（${c.title}）`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div
                      className={`h-full w-full ${SEASON_GRADIENT[c.key]}`}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-[11px] font-bold tracking-wide text-white/90 drop-shadow">
                      {c.when}
                    </p>
                    <h3 className="text-lg font-bold leading-tight text-white drop-shadow-lg">
                      {c.title}
                    </h3>
                  </div>
                </div>
                <div className="px-3.5 py-3">
                  <p className="text-[13px] leading-relaxed text-stone-600">
                    {c.why}
                  </p>
                  <div className="mt-2.5">
                    <SonaeRow label="そなえ" level={c.sonae} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* そなえの目安の凡例（3段階の意味を1度だけ説明。避ける印ではないと明示）。 */}
      <div className="mt-3 rounded-xl border border-stone-200 bg-stone-50/60 p-3.5">
        <p className="mb-2 text-[11px] font-bold text-stone-500">
          「そなえ」の目安（周辺の出没の多さから算出）
        </p>
        <ul className="space-y-1.5">
          {([1, 2, 3] as SonaeLevel[]).map((lv) => (
            <li
              key={lv}
              className="flex items-center gap-2.5 text-[11.5px] text-stone-600"
            >
              <SonaeMeter level={lv} />
              <span
                className={`w-14 shrink-0 whitespace-nowrap font-bold ${SONAE_TEXT[lv]}`}
              >
                {SONAE_NAME[lv]}
              </span>
              <span className="leading-snug">{SONAE_DESC[lv]}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[10px] leading-snug text-stone-400">
          ※ 避ける印ではありません。どの季節も、そなえれば安心して楽しめます。
        </p>
      </div>

      {/* 季節写真の帰属表示（CC ライセンス順守）。ヒーロー figure を隠す代わりに
          ここへ出典をまとめて明示する。 */}
      {data.credits.length > 0 && (
        <p className="mt-2 text-[9px] leading-relaxed text-stone-400">
          写真:{" "}
          {data.credits.map((c, i) => (
            <span key={c.source}>
              {i > 0 && <span className="text-stone-300"> ・ </span>}
              {c.label && <span>{c.label} </span>}
              <a
                href={c.source}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-600 hover:underline"
              >
                {c.by}
              </a>
              <span>（{c.license}）</span>
            </span>
          ))}
          <span className="text-stone-300"> / </span>
          Wikimedia Commons
        </p>
      )}

      <div className="mt-5 rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-4 text-[13px] leading-relaxed text-stone-700">
        <b className="font-semibold text-emerald-700">
          どの季節も、安心して楽しめます。
        </b>{" "}
        春の新緑、夏の沢、秋の紅葉、冬の展望——{data.name}
        にはそれぞれの季節に良さがあります。 山ではクマも暮らしていますが、
        <b className="font-semibold">
          クマ鈴を鳴らし、声やスマホで音を出し、早朝・夕方の単独行動を控える
        </b>
        ——それだけで、四季それぞれを安心して楽しめます。出会っても走らず、静かに距離を取りましょう。
      </div>

      {!data.hasBearData && (
        <p className="mt-2 text-[11px] text-stone-400">
          ※
          周辺の出没データが少ないため、「そなえの目安」は一般的な季節傾向で表示しています。
        </p>
      )}
    </section>
  );
}
