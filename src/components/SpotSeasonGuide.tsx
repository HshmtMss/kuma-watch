import type { SpotSeasonGuide, SonaeLevel } from "@/lib/spot-season";

/**
 * 観光地ページ「四季の楽しみ方」ブロック。観光(魅せる)を主役に、クマ情報は
 * 「その季節のそなえ」として前向きに添える。写真ゾーンは季節ギャラリー1つに統一
 * （独立ヒーローは持たない＝ページに馴染ませる）。データは spot-season.ts で生成。
 */

const SONAE_LABEL: Record<SonaeLevel, string> = {
  1: "軽めでOK",
  2: "鈴を持って",
  3: "鈴・ラジオ＋時間帯",
};
const SONAE_PILL: Record<SonaeLevel, string> = {
  1: "bg-sky-50 text-sky-700",
  2: "bg-emerald-50 text-emerald-700",
  3: "bg-amber-50 text-amber-700",
};
const METER_ON: Record<SonaeLevel, string> = {
  1: "bg-sky-400",
  2: "bg-emerald-500",
  3: "bg-amber-500",
};
// 季節写真が無い場合のフォールバック（季節の色で表現）。
const SEASON_GRADIENT = {
  spring: "bg-gradient-to-br from-lime-200 via-lime-400 to-emerald-600",
  autumn: "bg-gradient-to-br from-amber-200 via-orange-400 to-orange-700",
  // 冬: 白飛びを避け、空色→濃紺で「澄んだ冬空」を表現。
  winter: "bg-gradient-to-b from-sky-300 via-slate-400 to-slate-700",
} as const;

function Meter({ level }: { level: SonaeLevel }) {
  const heights = [7, 11, 15];
  return (
    <div className="flex h-4 items-end gap-[3px]" aria-hidden>
      {heights.map((h, i) => (
        <span
          key={i}
          className={`w-1.5 rounded-sm ${i < level ? METER_ON[level] : "bg-stone-200"}`}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}

export default function SpotSeasonGuide({
  data,
}: {
  data: SpotSeasonGuide;
}) {
  return (
    <section className="not-prose my-6" aria-label="四季の楽しみ方">
      {/* 見出し（テキスト。競合するヒーロー写真は置かない） */}
      <p className="text-[11px] font-bold tracking-wider text-emerald-700">
        四季の楽しみ方
      </p>
      <h2 className="mt-1 text-xl font-bold text-stone-900 sm:text-2xl">
        四季の{data.name}を、安心して楽しむ。
      </h2>

      {/* 今の見頃（現場の"旬"）を前面に。現在月から動的に。 */}
      <div
        className={`mt-3 flex items-center gap-3.5 rounded-xl border-l-4 px-4 py-3 ${
          data.now.peak === "autumn"
            ? "border-amber-500 bg-amber-50"
            : data.now.peak === "spring"
              ? "border-emerald-500 bg-emerald-50"
              : "border-stone-300 bg-stone-50"
        }`}
      >
        <div className="shrink-0 text-center leading-none">
          <div className="text-[9px] font-bold tracking-widest text-stone-400">
            NOW
          </div>
          <div className="mt-0.5 text-2xl font-extrabold tabular-nums text-stone-900">
            {data.now.month}
            <span className="text-xs font-bold text-stone-400">月</span>
          </div>
        </div>
        <div className="min-w-0">
          <div
            className={`text-[15px] font-bold ${
              data.now.peak === "autumn"
                ? "text-amber-800"
                : data.now.peak === "spring"
                  ? "text-emerald-800"
                  : "text-stone-800"
            }`}
          >
            {data.now.peak === "autumn"
              ? "紅葉が見頃です"
              : data.now.peak === "spring"
                ? "新緑が見頃です"
                : `${data.now.label}を楽しめる季節`}
          </div>
          <div className="text-xs leading-relaxed text-stone-500">
            {data.now.peak === "autumn"
              ? "一年で最も美しい季節。鈴を持って、色づく山へ。"
              : data.now.peak === "spring"
                ? "若葉と花、快適な気候。気持ちのいい季節です。"
                : "その季節ならではの見どころを楽しめます。"}
          </div>
        </div>
      </div>

      {/* 季節ギャラリー（写真つきタイル＝このブロックの"顔"） */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {data.cards.map((c) => {
          // その季節の写真があれば使い、無ければ季節の色で（春夏秋冬フォールバック）。
          const photo = c.image;
          // 現在月がその季節に入っていれば「今の季節」として強調（現場の"今"）。
          const nowMonths: Record<string, number[]> = {
            spring: [3, 4, 5],
            autumn: [9, 10, 11],
            winter: [12, 1, 2],
          };
          const isNow = nowMonths[c.key]?.includes(data.now.month);
          return (
            <div
              key={c.key}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${
                isNow
                  ? "border-emerald-400 ring-2 ring-emerald-300"
                  : "border-stone-200"
              }`}
            >
              <div className="relative h-36">
                {isNow && (
                  <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white shadow">
                    今の季節
                  </span>
                )}
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo}
                    alt={`${data.name}（${c.title}）`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className={`h-full w-full ${SEASON_GRADIENT[c.key]}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                {c.popular && (
                  <span className="absolute right-2.5 top-2.5 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
                    一番人気
                  </span>
                )}
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
                <div className="mt-2.5 flex items-center gap-2 text-[11px] text-stone-500">
                  <span className="shrink-0">そなえ</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${SONAE_PILL[c.sonae]}`}
                  >
                    {SONAE_LABEL[c.sonae]}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 12か月カレンダー（写真なし・情報に徹する） */}
      <div className="mt-7 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-stone-800">12か月の見どころ</h3>
        <span className="text-[11px] text-stone-400">
          メーター＝その季節の「そなえの目安」（避ける印ではありません）
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5 sm:grid-cols-4 lg:grid-cols-6">
        {data.months.map((mo) => (
          <div
            key={mo.month}
            className={`relative flex flex-col items-center gap-2 rounded-xl border p-2.5 pt-3 ${
              mo.peak === "spring"
                ? "border-emerald-200 bg-emerald-50/60"
                : mo.peak === "autumn"
                  ? "border-amber-200 bg-amber-50/70"
                  : "border-stone-200 bg-white"
            }`}
          >
            {mo.month === 11 && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-500 px-2 py-px text-[9px] font-bold text-white shadow-sm">
                ★人気
              </span>
            )}
            <div className="text-lg font-bold tabular-nums text-stone-900">
              {mo.month}
              <span className="text-[11px] font-medium text-stone-400">月</span>
            </div>
            <div
              className={`flex min-h-[2.4em] items-center text-center text-[10.5px] leading-tight ${
                mo.peak === "spring"
                  ? "font-bold text-emerald-700"
                  : mo.peak === "autumn"
                    ? "font-bold text-amber-700"
                    : "text-stone-600"
              }`}
            >
              {mo.label}
            </div>
            <Meter level={mo.sonae} />
            <div className="text-[9.5px] text-stone-400">そなえ</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11.5px] text-stone-500">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-4 rounded-sm bg-emerald-500" />
          新緑・見頃
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-4 rounded-sm bg-amber-500" />
          紅葉・見頃
        </span>
        <span className="inline-flex items-center gap-1.5">
          そなえの目安
          <span className="inline-flex items-end gap-[2px]">
            <span className="inline-block h-1 w-1 rounded-sm bg-sky-400" />
            <span className="inline-block h-2 w-1 rounded-sm bg-emerald-500" />
            <span className="inline-block h-3 w-1 rounded-sm bg-amber-500" />
          </span>
          軽め → しっかり
        </span>
      </div>

      <div className="mt-5 rounded-xl border border-emerald-200/70 bg-emerald-50/70 p-4 text-[13px] leading-relaxed text-stone-700">
        <b className="font-semibold text-emerald-700">
          秋こそ来てほしい。だから、そなえを。
        </b>{" "}
        紅葉の{data.name}は格別です。この時期はクマも活発になりますが、避ける必要はありません。
        <b className="font-semibold">
          鈴やラジオで音を出し、早朝・夕方の単独行動を控える
        </b>
        ——それだけで、名シーズンを安心して楽しめます。出会っても走らず、静かに距離を取りましょう。
      </div>

      {!data.hasBearData && (
        <p className="mt-2 text-[11px] text-stone-400">
          ※ 周辺の出没データが少ないため、「そなえの目安」は一般的な季節傾向で表示しています。
        </p>
      )}
    </section>
  );
}
