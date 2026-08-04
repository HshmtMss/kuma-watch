import type { SpotSeasonGuide, SonaeLevel } from "@/lib/spot-season";

/**
 * 観光地ページ「四季の楽しみ方」ブロック。煽らず・観光自粛を招かず、見頃を主役に、
 * クマ情報は「その季節のそなえ」として前向きに添える。データは spot-season.ts で生成。
 * サーバコンポーネント（画像は装飾のため素の img で遅延読み込み）。
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
// メーターの塗り色（レベルに応じて 1本目から level 本を塗る）。
const METER_ON: Record<SonaeLevel, string> = {
  1: "bg-sky-400",
  2: "bg-emerald-500",
  3: "bg-amber-500",
};
const SEASON_THUMB = {
  spring: "bg-gradient-to-br from-lime-100 via-lime-300 to-emerald-500",
  autumn: "bg-gradient-to-br from-amber-100 via-amber-400 to-orange-700",
  winter: "bg-gradient-to-br from-slate-100 via-slate-300 to-slate-500",
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
      {/* ヒーロー */}
      <div className="relative overflow-hidden rounded-2xl bg-stone-200 shadow-sm">
        {data.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.imageUrl}
            alt={`${data.name}の風景`}
            loading="lazy"
            className="h-44 w-full object-cover sm:h-56"
          />
        ) : (
          <div className="h-44 w-full bg-gradient-to-br from-amber-200 via-orange-300 to-orange-700 sm:h-56" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <p className="mb-1 text-[11px] font-bold tracking-wider text-white/90 drop-shadow">
            {data.name} · {data.area} · 四季の楽しみ方
          </p>
          <h2 className="text-2xl font-bold leading-tight text-white drop-shadow-lg sm:text-3xl">
            四季の{data.name}を、安心して楽しむ。
          </h2>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-stone-600">
        四季それぞれに見どころがあります。クマと同じ山を楽しむコツは、鈴やラジオで存在を知らせ、
        早朝・夕方の単独行動を避けること。
        <b className="font-semibold text-stone-800">
          季節に合ったそなえがあれば、いつ訪れても安心して満喫できます。
        </b>
      </p>

      {/* 季節カード */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {data.cards.map((c) => (
          <div
            key={c.key}
            className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
          >
            <div className={`h-20 ${SEASON_THUMB[c.key]}`} />
            <div className="flex flex-1 flex-col p-3.5">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-wide">
                <span
                  className={
                    c.key === "spring"
                      ? "text-emerald-600"
                      : c.key === "autumn"
                        ? "text-amber-600"
                        : "text-slate-500"
                  }
                >
                  {c.when}
                </span>
                {c.popular && (
                  <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white">
                    一番人気
                  </span>
                )}
              </div>
              <div className="mt-1 text-lg font-bold text-stone-900">
                {c.title}
              </div>
              <p className="mb-3 mt-0.5 text-[13px] leading-relaxed text-stone-500">
                {c.why}
              </p>
              <div className="mt-auto flex items-center gap-2 text-xs text-stone-500">
                <span>そなえ</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 font-bold ${SONAE_PILL[c.sonae]}`}
                >
                  {SONAE_LABEL[c.sonae]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 12か月カレンダー */}
      <div className="mt-7 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-stone-800">12か月の見どころ</h3>
        <span className="text-[11px] text-stone-400">
          メーター＝その季節の「そなえの目安」（避ける印ではありません）
        </span>
      </div>
      <div
        className="mt-3 grid gap-1.5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(68px, 1fr))" }}
      >
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

      {/* 凡例 */}
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

      {/* 前向きな一言 */}
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
