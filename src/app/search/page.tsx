import type { Metadata } from "next";
import { Suspense } from "react";
import PageShell from "@/components/PageShell";
import SearchUI from "./SearchUI";
import DiscoverHub from "./DiscoverHub";
import BearGearAffiliate from "@/components/BearGearAffiliate";

const SITE_URL = "https://kuma-watch.jp";

// 最新出没セクションを news-flash の更新頻度 (5 分) に合わせて再生成する。
export const revalidate = 300;

export const metadata: Metadata = {
  title: "検索・最新情報",
  description:
    "全国の市町村・観光地・対策記事・研究レポート・政府発表をまとめて検索。最新のクマ出没情報や国の発表もこのページから一覧できます。",
  alternates: { canonical: `${SITE_URL}/search` },
  robots: { index: true, follow: true },
};

export default function SearchPage() {
  return (
    <PageShell
      title="検索・最新情報"
      lead="地名やキーワードで横断検索できます。下では、最新の出没情報・国の発表・対策記事・観光地・研究レポートもまとめてご覧いただけます。"
    >
      <Suspense fallback={<p className="text-sm text-stone-500">読み込み中…</p>}>
        <SearchUI hub={<DiscoverHub />} />
      </Suspense>

      {/* 定番の対策グッズ（Amazon検索リンク・アフィリエイト、フラグ裏） */}
      <BearGearAffiliate className="not-prose mt-8" />
    </PageShell>
  );
}
