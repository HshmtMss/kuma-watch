import type { Metadata } from "next";
import { Suspense } from "react";
import PageShell from "@/components/PageShell";
import SearchUI from "./SearchUI";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "サイト内検索｜KumaWatch（クマウォッチ）",
  description:
    "全国 1900 以上の市町村・観光地・対策記事・研究レポート・政府発表をまとめて検索。クマ出没情報を地名・キーワードから素早く探せます。",
  alternates: { canonical: `${SITE_URL}/search` },
  robots: { index: true, follow: true },
};

export default function SearchPage() {
  return (
    <PageShell
      title="サイト内検索"
      lead="市町村・観光地・対策記事・研究レポート・政府発表を横断検索します。地名や気になるキーワードを入れてみてください。"
    >
      <Suspense fallback={<p className="text-sm text-stone-500">読み込み中…</p>}>
        <SearchUI />
      </Suspense>
    </PageShell>
  );
}
