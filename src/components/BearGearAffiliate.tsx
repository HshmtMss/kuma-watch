import { affiliateEnabled, amazonSearchUrl, getGearScene } from "@/lib/affiliate";

/**
 * クマ対策グッズ（Amazon 検索リンク・アフィリエイト）。フラグ裏（affiliateEnabled）。
 *
 * 方針: 煽らない。出没件数とは紐づけず「対策の補助」として基本対策の近くに置く。
 * 景表法（ステマ規制）対応で「広告(PR)」を明示し、Amazon アソシエイトの表記を添える。
 * リンクは検索リンク（在庫切れに強い）で rel="sponsored nofollow"。
 * サーバコンポーネント（フックなし・env をビルド時にインライン）。
 *
 * scene で商品セットを出し分ける（trail=登山 / home=暮らし・畑 / camp=キャンプ）。
 * 未指定は汎用(taisaku)＝従来と同一表示。/spot は trail、/place は home を渡す。
 */
export default function BearGearAffiliate({
  className = "",
  compact = false,
  scene,
}: {
  className?: string;
  /** 控えめな1行表示（トップ地図カードなど、主張しすぎたくない場所向け）。 */
  compact?: boolean;
  /** 商品セットのシーン（trail/home/camp）。未指定は汎用。 */
  scene?: string;
}) {
  if (!affiliateEnabled()) return null;

  const gear = getGearScene(scene);

  if (compact) {
    return (
      <div
        className={`rounded-xl border border-stone-200 bg-stone-50/70 px-3 py-2.5 ${className}`}
        aria-label="クマ対策グッズ（広告）"
      >
        <div className="flex items-center gap-1.5">
          <span className="text-[13px] font-bold text-stone-700">
            {gear.title}
          </span>
          <span
            className="rounded-sm bg-stone-200/80 px-1 py-px text-[10px] font-semibold tracking-wider text-stone-500"
            aria-label="広告（アフィリエイトリンク）"
            title="広告（アフィリエイトリンク）"
          >
            PR
          </span>
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-500">
          {gear.items.map((g, i) => (
            <span key={g.key}>
              {i > 0 && <span className="text-stone-300"> ・ </span>}
              <a
                href={amazonSearchUrl(g.keyword)}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="font-medium text-amber-700 hover:underline"
              >
                {g.label}
              </a>
            </span>
          ))}
          <span className="text-stone-400"> — Amazonで探す →</span>
        </div>
        <div className="mt-1 text-[9px] text-stone-400">
          Amazon アソシエイトとして適格販売により収入を得ています
        </div>
      </div>
    );
  }

  return (
    <section
      className={`not-prose rounded-2xl border border-stone-200 bg-white p-4 ${className}`}
      aria-label="クマ対策グッズ（広告）"
    >
      <div className="mb-1.5 flex items-center gap-2">
        {/* カード見出し。グローバルの .article-body h2(上余白+amber下線)を避けるため div */}
        <div className="text-sm font-bold text-stone-800">{gear.title}</div>
        <span
          className="rounded-sm bg-stone-100 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-stone-500"
          aria-label="広告（アフィリエイトリンク）"
          title="広告（アフィリエイトリンク）"
        >
          PR
        </span>
        {/* 対策グッズの一覧(製品アグリゲータ)へ */}
        <a
          href="/gear"
          className="ml-auto shrink-0 text-[11px] font-semibold text-amber-700 hover:underline"
        >
          対策グッズ一覧 →
        </a>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-stone-500">{gear.blurb}</p>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {gear.items.map((g) => (
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
