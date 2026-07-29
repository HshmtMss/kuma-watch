import { affiliateEnabled, amazonSearchUrl, BEAR_GEAR } from "@/lib/affiliate";

/**
 * クマ対策グッズ（Amazon 検索リンク・アフィリエイト）。フラグ裏（affiliateEnabled）。
 *
 * 方針: 煽らない。出没件数とは紐づけず「対策の補助」として基本対策の近くに置く。
 * 景表法（ステマ規制）対応で「広告(PR)」を明示し、Amazon アソシエイトの表記を添える。
 * リンクは検索リンク（在庫切れに強い）で rel="sponsored nofollow"。
 * サーバコンポーネント（フックなし・env をビルド時にインライン）。
 */
export default function BearGearAffiliate({
  className = "",
  compact = false,
}: {
  className?: string;
  /** 控えめな1行表示（トップ地図カードなど、主張しすぎたくない場所向け）。 */
  compact?: boolean;
}) {
  if (!affiliateEnabled()) return null;

  if (compact) {
    return (
      <div
        className={`text-[11px] leading-relaxed text-stone-400 ${className}`}
        aria-label="クマ対策グッズ（広告）"
      >
        <span className="font-medium text-stone-500">クマ対策グッズ</span>
        <span
          className="ml-1 rounded-sm bg-stone-100 px-1 py-px text-[9px] font-semibold tracking-wider text-stone-500"
          aria-label="広告（アフィリエイトリンク）"
          title="広告（アフィリエイトリンク）"
        >
          PR
        </span>
        <span className="ml-1.5">
          {BEAR_GEAR.map((g, i) => (
            <span key={g.key}>
              {i > 0 && <span className="text-stone-300"> ・ </span>}
              <a
                href={amazonSearchUrl(g.keyword)}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="text-amber-700 hover:underline"
              >
                {g.label}
              </a>
            </span>
          ))}
          <span className="text-stone-300"> — Amazonで探す</span>
        </span>
        <div className="mt-0.5 text-[9px] text-stone-300">
          Amazon アソシエイトとして適格販売により収入を得ています
        </div>
      </div>
    );
  }

  return (
    <section
      className={`rounded-2xl border border-stone-200 bg-white p-4 ${className}`}
      aria-label="クマ対策グッズ（広告）"
    >
      <div className="mb-1.5 flex items-center gap-2">
        <h2 className="text-sm font-bold text-stone-800">
          クマ対策グッズをそろえる
        </h2>
        <span
          className="rounded-sm bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-stone-500"
          aria-label="広告（アフィリエイトリンク）"
          title="広告（アフィリエイトリンク）"
        >
          PR
        </span>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-stone-500">
        山や畑に入るときの基本の備え。音で存在を知らせ、薄暗い時間帯を避けるのが第一です。
      </p>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {BEAR_GEAR.map((g) => (
          <li key={g.key}>
            <a
              href={amazonSearchUrl(g.keyword)}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="flex h-full flex-col rounded-xl border border-stone-200 p-2.5 transition hover:border-amber-300 hover:bg-amber-50"
            >
              <span className="text-sm font-bold text-amber-800">
                {g.label}
              </span>
              <span className="mt-0.5 text-[11px] leading-snug text-stone-500">
                {g.blurb}
              </span>
              <span className="mt-2 text-[11px] font-semibold text-amber-700">
                Amazonで探す →
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[10px] leading-relaxed text-stone-400">
        当サイトは Amazon アソシエイト・プログラムの参加者であり、適格販売により収入を得ています。
        「Amazon」等は Amazon.com, Inc. またはその関連会社の商標です。
      </p>
    </section>
  );
}
