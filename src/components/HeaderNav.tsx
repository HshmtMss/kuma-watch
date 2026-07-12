"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * 全ページ共通ヘッダーナビ。探し方を「探す」▼に一本化:
 *  - 「探す」▼: 地図で探す / 市町村で探す / 観光地で探す / キーワードで探す / 出没ニュース
 *  - 「学ぶ」▼: クマ対策 / 記事 / 研究レポート / 政府発表
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
  { href: "/place", label: "市町村で探す", desc: "都道府県 → 市町村の警戒度マップ" },
  { href: "/spot", label: "観光地で探す", desc: "キャンプ場・温泉・登山口・名所ほか" },
  { href: "/search", label: "キーワードで探す", desc: "地名・施設名で全文検索・最新情報" },
  { href: "/news", label: "出没ニュース・速報", desc: "全国の最新クマ出没情報" },
];

const LEARN_LINKS: NavLink[] = [
  { href: "/measures", label: "クマ対策の総合ガイド", desc: "獣医師監修の対策まとめ" },
  { href: "/articles", label: "記事一覧", desc: "遭遇時の対処・装備・生態" },
  { href: "/research", label: "研究レポート", desc: "日次・月次の時空間分析" },
  { href: "/policy", label: "政府発表・政策動向", desc: "環境省・農水省・林野庁" },
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
      <div className="fixed inset-0 z-[1200]" aria-hidden onClick={(e) => {
        const det = (e.currentTarget.parentElement as HTMLDetailsElement | null);
        if (det) det.open = false;
      }} />
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
        <DesktopDropdown label="法人" items={BUSINESS_LINKS} variant="cta" />
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
            type="button"
            onClick={() => setOpen((v) => !v)}
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
          {open && (
            <>
              <div
                className="fixed inset-0 z-[1200] bg-black/30"
                onClick={close}
                aria-hidden
              />
              <nav
                className="absolute right-0 top-12 z-[1300] w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
                aria-label="主要ナビゲーション (モバイル)"
              >
                {/* 一般向けゴール = 通知登録。メニュー最上部に常設 (③)。 */}
                <Link
                  href="/notify"
                  onClick={close}
                  className="flex items-center gap-2 border-b border-gray-100 px-5 py-3 text-base font-bold text-emerald-700 hover:bg-emerald-50 active:bg-emerald-100"
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
              </nav>
            </>
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
        className={`px-5 pt-3 pb-1 text-[10px] font-bold uppercase tracking-wider ${
          accent ? "text-amber-700" : "text-gray-400"
        }`}
      >
        {label}
      </div>
      {children}
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
      className={`flex items-center gap-2 px-5 py-3 text-base font-medium hover:bg-amber-50 active:bg-amber-100 ${
        accent ? "text-amber-900" : "text-gray-800"
      }`}
    >
      {icon && <SearchIcon size={16} />}
      {label}
    </Link>
  );
}
