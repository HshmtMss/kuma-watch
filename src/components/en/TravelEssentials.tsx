/**
 * インバウンド向け高単価アフィリ枠（ツアー/保険/eSIM）。英語ページ用。
 * 各アフィリの遷移先は env で差し込む（アカウント取得後にURLを入れれば有効化）。
 * 未設定の項目は表示しない＝空枠を出さない。国内グッズ(Amazon)より単価が高い層。
 */
const OFFERS = [
  {
    key: "tours",
    url: process.env.NEXT_PUBLIC_AFF_TOURS_URL,
    label: "Guided hikes & tours",
    note: "Explore safely with a local guide",
    cta: "Browse tours",
  },
  {
    key: "insurance",
    url: process.env.NEXT_PUBLIC_AFF_INSURANCE_URL,
    label: "Travel insurance",
    note: "Cover for hiking & the outdoors",
    cta: "Get covered",
  },
  {
    key: "esim",
    url: process.env.NEXT_PUBLIC_AFF_ESIM_URL,
    label: "eSIM / mobile data",
    note: "Stay connected on the trail",
    cta: "Get an eSIM",
  },
] as const;

export default function TravelEssentials({
  className = "",
}: {
  className?: string;
}) {
  const offers = OFFERS.filter((o) => o.url && o.url.length > 0);
  if (offers.length === 0) return null;
  return (
    <section
      className={`rounded-2xl border border-stone-200 bg-white p-4 ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className="text-sm font-bold text-stone-800">
          Plan your trip to Japan
        </span>
        <span className="rounded-sm bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-stone-500">
          PR
        </span>
      </div>
      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {offers.map((o) => (
          <li key={o.key}>
            <a
              href={o.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="flex h-full flex-col rounded-xl border border-stone-200 p-3 transition hover:border-amber-300 hover:bg-amber-50"
            >
              <span className="text-sm font-bold text-stone-900">
                {o.label}
              </span>
              <span className="mt-0.5 text-[11px] leading-snug text-stone-500">
                {o.note}
              </span>
              <span className="mt-2 text-[11px] font-semibold text-amber-700">
                {o.cta} →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
