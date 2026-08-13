import type { JapanLandmark } from "@/data/japan-landmarks";

/**
 * 英語スポット用の「四季」セクション（日本語 SpotSeasonGuide の英語版・軽量）。
 * 季節写真があれば使い、無ければ季節色グラデーション（同じ写真の4連発を避ける）。
 * 現在の季節をハイライト。観光の魅せ＋クマのそなえ一言（煽らない）。
 */
type Season = "spring" | "summer" | "autumn" | "winter";

const SEASONS: {
  key: Season;
  when: string;
  title: string;
  body: string;
  months: number[];
}[] = [
  {
    key: "spring",
    when: "Spring · Apr–May",
    title: "Fresh green & blossoms",
    body: "New foliage and comfortable weather — one of the easiest times to hike.",
    months: [3, 4, 5],
  },
  {
    key: "summer",
    when: "Summer · Jul–Aug",
    title: "Cool valleys & forest",
    body: "Shaded trails and streams offer relief from the heat. Bring sun protection and water.",
    months: [6, 7, 8],
  },
  {
    key: "autumn",
    when: "Autumn · Oct–Nov",
    title: "Autumn colors",
    body: "The most scenic season, with brilliant fall foliage. Bears are also most active — carry a bell.",
    months: [9, 10, 11],
  },
  {
    key: "winter",
    when: "Winter · Dec–Feb",
    title: "Clear, quiet views",
    body: "Crisp air and long views; quiet trails (some routes close due to snow).",
    months: [12, 1, 2],
  },
];

const GRADIENT: Record<Season, string> = {
  spring: "bg-gradient-to-br from-lime-200 via-lime-400 to-emerald-600",
  summer: "bg-gradient-to-br from-lime-300 via-green-500 to-teal-700",
  autumn: "bg-gradient-to-br from-amber-200 via-orange-400 to-orange-700",
  winter: "bg-gradient-to-b from-sky-300 via-slate-400 to-slate-700",
};

export default function EnSeasons({
  landmark,
  currentMonth,
  className = "",
}: {
  landmark: JapanLandmark;
  currentMonth: number;
  className?: string;
}) {
  const si = landmark.seasonImages;
  const photoFor = (k: Season): string | undefined =>
    si?.[k as keyof typeof si];

  return (
    <section className={`not-prose ${className}`}>
      <h2 className="text-lg font-bold text-stone-900">Best seasons to visit</h2>
      <p className="mt-1 text-[13.5px] leading-relaxed text-stone-600">
        Each season has its own appeal. Bears live here year-round, so carry a
        bell and stay aware — especially in autumn.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {SEASONS.map((s) => {
          const photo = photoFor(s.key);
          const isNow = s.months.includes(currentMonth);
          return (
            <div
              key={s.key}
              className={`overflow-hidden rounded-2xl border bg-white shadow-sm ${
                isNow ? "border-emerald-400 ring-2 ring-emerald-300" : "border-stone-200"
              }`}
            >
              <div className="relative h-28">
                {isNow && (
                  <span className="absolute left-2 top-2 z-10 rounded-full bg-emerald-600 px-2 py-0.5 text-[9px] font-bold text-white shadow">
                    NOW
                  </span>
                )}
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo}
                    alt={`${landmark.name} in ${s.key}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className={`h-full w-full ${GRADIENT[s.key]}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5">
                  <p className="text-[10px] font-bold tracking-wide text-white/90 drop-shadow">
                    {s.when}
                  </p>
                  <h3 className="text-sm font-bold leading-tight text-white drop-shadow">
                    {s.title}
                  </h3>
                </div>
              </div>
              <p className="px-3 py-2.5 text-[12px] leading-snug text-stone-600">
                {s.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
