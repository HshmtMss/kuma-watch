import type { Metadata } from "next";
import ArticleBody from "./ArticleBody";

export const metadata: Metadata = {
  title: "記事下書き｜管理",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

/**
 * 一般公開向け記事の下書き。まだ公開しないので、記事一覧にも sitemap にも
 * 載せず noindex にしてある。
 *
 * AdminShell（合言葉ログイン）は client component なので、この記事のような
 * async server component をその中では描画できない。中身は公開データの集計で
 * 秘匿性が無いため、noindex + 導線なし で足りると判断した。
 */
export default function ArticlePreviewPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
        <p className="text-sm font-bold text-amber-900">
          公開前の下書きです（記事一覧・検索・sitemap には出ません）
        </p>
        <p className="mt-1 text-xs leading-relaxed text-amber-800">
          数字はすべて実データから計算しているので、内容が固まったら
          src/app/research/avoid-encounter/ へ戻し、metadata と revalidate を付けて
          research-entries.ts に登録すれば公開できます。
        </p>
      </div>
      <ArticleBody />
    </div>
  );
}
