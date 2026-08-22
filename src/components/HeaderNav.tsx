"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { isLearnHubReleased } from "@/lib/learn-flag";

/**
 * 全ページ共通ヘッダーナビ。探し方を「探す」▼に一本化:
 *  - 「探す」▼: 地図で探す / 市町村で探す / 観光地で探す / キーワードで探す / 出没ニュース
 *  - 「学ぶ」▼: 統一ハブ /learn に集約（学ぶトップ / 身を守る / クマを知る / 最新を追う）
 *  - 「法人」▼ (塗りつぶし CTA): 自治体・観光協会 / 製品掲載 (事業者)
 *  - 地図(トップ)へはロゴで1タップ。モバイルは 🔍 アイコンで検索ハブへクイックアクセス。
 *
 * ドロップダウンは <details> を使い、クリック (タップ) で開閉。
 * モバイルはハンバーガー内で同じグループ見出しを付けて折り返す。
 */

type NavLink = { href: string; label: string; desc?: string };

// 「探す」ドロップダウン = 探し方を1箇所に集約(地図/市町村/観光地/キーワード)。
// 地図はロゴ(→/)でも1タップで戻れる。末尾に速報ニュースも。
const EXPLORE_LINKS: NavLink[] = [
  { href: "/", label: "地図で探す", desc: "全国の出没を地図で見る" },
  {
    href: "/place",
    label: "市町村で探す",
    desc: "都道府県 → 市町村の警戒度マップ",
  },
  {
    href: "/spot",
    label: "観光地で探す",
    desc: "キャンプ場・温泉・登山口・名所ほか",
  },
  {
    href: "/search",
    label: "キーワードで探す",
    desc: "地名・施設名で全文検索・最新情報",
  },
  {
    href: "/news",
    label: "出没ニュース・速報",
    desc: "全国の最新クマ出没情報",
  },
];

// 「学ぶ」= 統一ハブ /learn とその3ドアに集約。公開フラグ ON のあいだは
// 寄せ集めの旧リンク（対策/記事/研究/政策）ではなく、ハブの構造そのものを見せる。
// フラグ OFF 時は従来の平坦リストにフォールバック。
const LEARN_LINKS: NavLink[] = isLearnHubReleased()
  ? [
      {
        href: "/learn",
        label: "学ぶトップ",
        desc: "合言葉・身を守る・知る・最新",
      },
      {
        href: "/learn/safety",
        label: "身を守る",
        desc: "遭遇時の対処・装備・通報",
      },
      {
        href: "/learn/know",
        label: "クマを知る",
        desc: "生態・季節・地域の解説記事",
      },
      {
        href: "/learn/latest",
        label: "最新を追う",
        desc: "出没速報・研究・政策の動き",
      },
    ]
  : [
      {
        href: "/measures",
        label: "クマ対策の総合ガイド",
        desc: "獣医師監修の対策まとめ",
      },
      {
        href: "/articles",
        label: "記事一覧",
        desc: "遭遇時の対処・装備・生態",
      },
      {
        href: "/research",
        label: "研究レポート",
        desc: "日次・月次の時空間分析",
      },
      {
        href: "/policy",
        label: "政府発表・政策動向",
        desc: "環境省・農水省・林野庁",
      },
    ];

const BUSINESS_LINKS: NavLink[] = [
  {
    href: "/for-gov",
    label: "自治体・観光協会の方",
    desc: "出没情報の連携・配信を無料で",
  },
  {
    href: "/for-vendors",
    label: "製品掲載 (事業者の方)",
    desc: "クマ対策製品の掲載・広告",
  },
];

function BellIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="transition-transform group-open:rotate-180"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/** デスクトップ用ドロップダウン (details ベース)。 */
function DesktopDropdown({
  label,
  items,
  variant = "default",
}: {
  label: string;
  items: NavLink[];
  variant?: "default" | "cta";
}) {
  const trigger =
    variant === "cta"
      ? "flex cursor-pointer items-center gap-1 rounded-full bg-stone-900 px-3.5 py-1.5 font-semibold text-white marker:hidden hover:bg-stone-800 [&::-webkit-details-marker]:hidden"
      : "flex cursor-pointer items-center gap-1 rounded-full px-2 py-1.5 hover:text-stone-900 marker:hidden [&::-webkit-details-marker]:hidden";
  return (
    <details className="group relative">
      <summary className={trigger} aria-label={`${label} メニューを開く`}>
        {label}
        <ChevronDown />
      </summary>
      {/* backdrop で外側クリックで閉じる */}
      <div
        className="fixed inset-0 z-[1200]"
        aria-hidden
        onClick={(e) => {
          const det = e.currentTarget
            .parentElement as HTMLDetailsElement | null;
          if (det) det.open = false;
        }}
      />
      <div className="absolute right-0 top-full z-[1300] mt-1.5 w-72 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xl">
        <ul>
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="block border-b border-stone-100 px-4 py-3 last:border-b-0 hover:bg-amber-50"
              >
                <div className="text-sm font-semibold text-stone-900">
                  {it.label}
                </div>
                {it.desc && (
                  <div className="mt-0.5 text-xs text-stone-500">{it.desc}</div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export default function HeaderNav({
  hideMobileSearchIcon = false,
}: {
  /** 地図ページなど、独自の地名検索バーがある画面ではモバイルの 🔍 (→/search) を隠す。 */
  hideMobileSearchIcon?: boolean;
} = {}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  /* モバイルメニューは body 直下に出す (portal)。
     地図ページのヘッダー行は z-[950] の重なりコンテキストの中にあり、その内側で
     いくら z を上げても、外の下シート (RiskPanel: z-[1000]) には勝てない。さらに
     地図ページの外枠は h-[100dvh] + overflow-hidden なので、はみ出した分は
     切り取られて「法人」「English」に指が届かなくなっていた。
     ヘッダー行の z を上げる手もあるが、下シートは最大 94% まで伸びてヘッダーを
     覆う設計なので、そちらが壊れる。メニューだけを外に逃がすのが副作用がない。 */
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null);

  // ボタンの実位置に合わせて開く。ページごとにヘッダーの高さが違うため固定値にしない。
  const measure = useCallback(() => {
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({
      top: Math.round(r.bottom + 6),
      right: Math.round(Math.max(8, window.innerWidth - r.right)),
    });
  }, []);

  // 位置の確定は「開く」操作の中で行う (effect 内の setState を避ける)。
  const toggle = () => {
    if (open) {
      setOpen(false);
      return;
    }
    measure();
    setOpen(true);
  };

  // 回転・アドレスバーの伸縮で座標がずれるので、開いている間だけ追従させる。
  useEffect(() => {
    if (!open) return;
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open, measure]);

  return (
    <>
      {/* デスクトップ: 地図 / 探す▼ / 学ぶ▼ / さがす🔍 / 法人▼ (塗りつぶし) */}
      <nav
        className="hidden shrink-0 items-center gap-3 text-sm font-medium text-stone-600 sm:flex"
        aria-label="主要ナビゲーション (デスクトップ)"
      >
        {/* 一般向けゴール = 通知登録。常設の入口をヘッダーに置く (③)。獲得LP へ。 */}
        <Link
          href="/notify"
          className="flex items-center gap-1 rounded-full px-2 py-1.5 font-semibold text-emerald-700 hover:text-emerald-800"
        >
          <BellIcon />
          通知
        </Link>
        <DesktopDropdown label="探す" items={EXPLORE_LINKS} />
        <DesktopDropdown label="学ぶ" items={LEARN_LINKS} />
        <Link
          href="/products"
          className="flex items-center gap-1 rounded-full px-2 py-1.5 hover:text-stone-900"
        >
          対策グッズ
        </Link>
        <DesktopDropdown label="法人" items={BUSINESS_LINKS} variant="cta" />
        {/* 英語(インバウンド)サイトへの切替。hreflang と併せて相互リンクを担保。 */}
        <Link
          href="/en"
          hrefLang="en"
          className="rounded-full px-2 py-1.5 text-stone-400 hover:text-stone-800"
        >
          English
        </Link>
      </nav>

      {/* モバイル: 検索アイコン + ハンバーガー */}
      <div className="flex items-center gap-1.5 sm:hidden">
        {!hideMobileSearchIcon && (
          <Link
            href="/search"
            aria-label="さがす（検索・最新情報）"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 active:bg-gray-100"
          >
            <SearchIcon size={20} />
          </Link>
        )}
        <div className="relative">
          <button
            ref={btnRef}
            type="button"
            onClick={toggle}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 active:bg-gray-100"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
          {open &&
            pos &&
            createPortal(
              <>
                <div
                  className="fixed inset-0 z-[2000] bg-black/30"
                  onClick={close}
                  aria-hidden
                />
                {/* 画面内に収める。あふれる分はメニュー内スクロールにして、
                    末尾の「法人の方」「English」まで必ず届くようにする。 */}
                <nav
                  className="fixed z-[2010] w-[21rem] max-w-[calc(100vw-1rem)] overflow-y-auto overscroll-contain rounded-2xl border border-gray-200 bg-white shadow-xl"
                  style={{
                    top: pos.top,
                    right: pos.right,
                    maxHeight: `calc(100dvh - ${pos.top + 12}px)`,
                  }}
                  aria-label="主要ナビゲーション (モバイル)"
                >
                  {/* 一般向けゴール = 通知登録。メニュー最上部に常設 (③)。 */}
                  <Link
                    href="/notify"
                    onClick={close}
                    className="flex items-center gap-2 border-b border-gray-100 px-4 py-2.5 text-[15px] font-bold text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100"
                  >
                    <BellIcon size={18} />
                    通知を受け取る
                  </Link>
                  <MobileGroup label="探す">
                    {EXPLORE_LINKS.map((it) => (
                      <MobileItem
                        key={it.href}
                        href={it.href}
                        label={it.label}
                        onClick={close}
                      />
                    ))}
                  </MobileGroup>
                  <MobileGroup label="学ぶ">
                    {LEARN_LINKS.map((it) => (
                      <MobileItem
                        key={it.href}
                        href={it.href}
                        label={it.label}
                        onClick={close}
                      />
                    ))}
                  </MobileGroup>
                  <Link
                    href="/products"
                    onClick={close}
                    className="flex items-center gap-2 border-t border-gray-100 px-4 py-2.5 text-[15px] font-bold text-stone-800 hover:bg-stone-50 active:bg-stone-100"
                  >
                    対策グッズ
                  </Link>
                  <MobileGroup label="法人の方" accent>
                    {BUSINESS_LINKS.map((it) => (
                      <MobileItem
                        key={it.href}
                        href={it.href}
                        label={it.label}
                        onClick={close}
                        accent
                      />
                    ))}
                  </MobileGroup>
                  <Link
                    href="/en"
                    hrefLang="en"
                    onClick={close}
                    className="flex items-center gap-2 border-t border-gray-100 px-4 py-2.5 text-[15px] font-semibold text-stone-600 hover:bg-stone-50 active:bg-stone-100"
                  >
                    English
                  </Link>
                </nav>
              </>,
              document.body,
            )}
        </div>
      </div>
    </>
  );
}

function MobileGroup({
  label,
  accent,
  children,
}: {
  label: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-gray-100 first:border-t-0">
      <div
        className={`px-4 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider ${
          accent ? "text-amber-700" : "text-gray-400"
        }`}
      >
        {label}
      </div>
      {/* 2 列。1 列だと 13 行で画面のほぼ全部を覆い、地図が見えなくなる。
          行数を半分にして、地図を残したまま全項目を出す (スクロール不要)。 */}
      <div className="grid grid-cols-2 gap-x-1 px-2 pb-2">{children}</div>
    </div>
  );
}

function MobileItem({
  href,
  label,
  icon,
  accent,
  onClick,
}: {
  href: string;
  label: string;
  icon?: boolean;
  accent?: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex min-h-11 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13.5px] font-medium leading-tight hover:bg-amber-50 active:bg-amber-100 ${
        accent ? "text-amber-900" : "text-gray-800"
      }`}
    >
      {icon && <SearchIcon size={16} />}
      {label}
    </Link>
  );
}
