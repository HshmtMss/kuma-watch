import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import DirectorySearch, {
  type DirectoryItem,
} from "@/components/DirectorySearch";
import { isDirectorySearchReleased } from "@/lib/directory-search-flag";
import { JAPAN_LANDMARKS } from "@/data/japan-landmarks";
import SpotDirectory, { type SpotLite } from "./SpotDirectory";

const SITE_URL = "https://kuma-watch.jp";

// ISR: 30 分ごとに再生成。カテゴリ絞り込み・ページ送りはクライアント側
// (SpotDirectory) に持たせ、ページ自体は searchParams を読まず静的に保つ。
export const revalidate = 1800;

export const metadata: Metadata = {
  title: "観光地・登山口から探す｜獣医師監修クマ警戒マップ",
  description:
    "獣医師監修・獣医工学ラボ運営。高尾山・富士山・上高地・知床など、全国の主要な登山口・観光地・国立公園のクマ出没情報を整理。登山・キャンプ・観光の前に、目的地周辺の警戒レベルを確認できます。",
  alternates: { canonical: `${SITE_URL}/spot` },
  openGraph: {
    title: "観光地・登山口から探す｜獣医師監修クマ警戒マップ｜KumaWatch",
    description:
      "獣医師監修・獣医工学ラボ運営。高尾山・富士山・上高地ほか全国の主要観光地・登山口周辺のクマ出没情報を一覧で。",
    url: `${SITE_URL}/spot`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function SpotIndexPage() {
  // 全観光地を軽量投影してクライアントに 1 度だけ渡す (静的ページ + 即時フィルタ)。
  const spots: SpotLite[] = JAPAN_LANDMARKS.map((l) => ({
    slug: l.slug,
    name: l.name,
    prefName: l.prefName,
    muniName: l.muniName,
    category: l.category,
    imageUrl: l.imageUrl,
    blurb: l.blurb,
  }));

  return (
    <PageShell
      title="観光地・登山口から探す"
      lead="高尾山・富士山・上高地・知床など、全国の主要な登山口・観光地・国立公園周辺のクマ出没情報を整理しています。登山・キャンプ・観光の前にご確認ください。"
    >
      <nav
        aria-label="パンくずリスト"
        className="not-prose mb-4 flex flex-wrap items-center gap-1 text-sm text-stone-500"
      >
        <Link href="/" className="hover:text-stone-900">
          ホーム
        </Link>
        <span>›</span>
        <span className="font-semibold text-stone-700">観光地・登山口から探す</span>
      </nav>

      {/* ページ内の絞り込み検索（フラグ裏）。観光地・登山口名で該当ページへ直行。 */}
      {isDirectorySearchReleased() && (
        <DirectorySearch
          placeholder="観光地・登山口名で探す（例: 高尾山）"
          items={JAPAN_LANDMARKS.map<DirectoryItem>((l) => ({
            label: l.name,
            sub: l.muniName ? `${l.prefName}・${l.muniName}` : l.prefName,
            href: `/spot/${encodeURIComponent(l.slug)}`,
          }))}
        />
      )}

      <SpotDirectory spots={spots} />

      {/* /spot はヘッダーナビから直接来られる top-level なので「クマ対策トップに
          戻る」ボタンは画面遷移上のミスマッチ。ヘッダーナビ + パンくず + 各観光地
          内の戻り導線で十分なため、ここでは戻りリンクを置かない。 */}
    </PageShell>
  );
}
