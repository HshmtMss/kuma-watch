import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "./PrintButton";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "サービス仕様書｜自治体連携",
  description:
    "KumaWatch（くまウォッチ）の自治体向け詳細仕様書。御自治体が公式ページに出したクマ出没情報と注意喚起を、住民のスマホ・観光客の検索結果・訪日外国人向けの英語ページまでお届け。まず 3 ヶ月無料でお試し。機能・導入フロー・技術仕様・運営体制・FAQ をまとめた庁内稟議用資料。",
  alternates: { canonical: `${SITE_URL}/for-gov/spec` },
  // 印刷／PDF 化を想定した派生ページなので、検索エンジンには /for-gov を見せる。
  robots: { index: false, follow: true },
};

// 庁内稟議用の単一スプレッド型ドキュメント。
// - PageShell のヘッダー/フッターは画面表示時のみ。@media print で非表示にし、
//   A4 1 枚に収まるよう余白とフォントを最適化。
// - 各セクションに print: page-break 制御を入れて自然な改ページを誘導。
export default function MunicipalSpecPage() {
  return (
    <>
      {/* スクリーン: 上部に「印刷 / PDF 保存」ボタンを浮かせる。印刷時は隠す */}
      <div className="bg-stone-50 print:hidden">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div>
            <Link
              href="/for-gov"
              className="text-xs text-stone-600 hover:text-stone-900"
            >
              ← 自治体の方へ
            </Link>
            <h1 className="mt-1 text-lg font-bold text-stone-900">
              KumaWatch 自治体連携 サービス仕様書
            </h1>
          </div>
          <PrintButton />
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-6 py-8 text-stone-800 print:max-w-none print:px-10 print:py-6 print:text-[11pt]">
        {/* 表紙 / 1 枚要約 */}
        <header className="border-b-2 border-stone-900 pb-4">
          <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-700 print:text-[8pt]">
            自治体連携 サービス仕様書 / 庁内稟議用資料
          </div>
          <h1 className="mt-1 text-2xl font-bold text-stone-900 print:text-[16pt]">
            KumaWatch（くまウォッチ）
          </h1>
          <div className="mt-1 text-sm text-stone-600 print:text-[10pt]">
            全国クマ出没情報の集約・可視化サービス／獣医師監修
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-stone-700 print:text-[9pt]">
            <div>
              <span className="font-semibold">運営：</span>獣医工学ラボ
              <br />
              <span className="text-stone-500">
                (リサーチコーディネート株式会社)
              </span>
            </div>
            <div>
              <span className="font-semibold">URL：</span>
              <a href="https://kuma-watch.jp" className="text-blue-700 underline">
                https://kuma-watch.jp
              </a>
              <br />
              <span className="font-semibold">連絡先：</span>
              contact@research-coordinate.co.jp
            </div>
          </div>
        </header>

        {/* 1 枚要約 */}
        <section className="mt-6 rounded-lg border-2 border-amber-200 bg-amber-50 p-4 print:border print:bg-amber-50">
          <h2 className="m-0 text-base font-bold text-amber-900 print:text-[12pt]">
            1 枚要約
          </h2>
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-stone-800 print:text-[10pt]">
            <li>
              <strong>提供価値：</strong>
              御自治体が公式ページに出したクマ出没情報と注意喚起を、住民のスマホ（LINE・プッシュ通知）、観光客が見る検索結果、訪日外国人向けの英語ページまで届けます。届けるのは御自治体の一次情報で、読んだ人は公式ページへ戻る導線です。
            </li>
            <li>
              <strong>自治体側のご対応：</strong>
              これまで通り公式ページに発表していただくだけです。更新の検知・配信はすべて当社で完結します。公式 HP・PDF・SNS など、運用形態は問いません。
            </li>
            <li>
              <strong>費用：</strong>
              まず 3 ヶ月無料でお試しいただけます。以降はご利用規模に応じてご案内します。
            </li>
            <li>
              <strong>既存実績：</strong>
              クマの生息が確認される 35 都道府県を中心に、68 の公式・報道ソースから
              92,000 件超の出没情報を統合済（2026 年 8 月時点）。全国 1,817
              市町村分のページを公開しています。
            </li>
            <li>
              <strong>監修：</strong>
              獣医師。獣医療・公衆衛生・野生動物の専門領域として品質を担保。
            </li>
          </ul>
        </section>

        {/* 機能 */}
        <section className="mt-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-stone-900 print:text-[13pt]">
            1. 提供機能
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Item
              title="① 市町村別の専用ページ（自動生成）"
              body="/place/[県]/[市町村] という独立 URL で市町村ごとの専用ページを自動生成。「○○市 クマ」検索で表示される媒体になり、連携自治体さまの情報をここに集約してリッチに掲載します。"
            />
            <Item
              title="② 公式ページ更新の自動検知・通知配信"
              body="御自治体の公式クマ情報ページの更新を自動で検知し、地域を登録した住民・観光客の通知（LINE・プッシュ通知）へお届けします。発表を見に来ない住民・観光客にも、公式情報が速く届きます。"
            />
            <Item
              title="⑦ 御自治体からの注意喚起の掲載"
              body="出没の記録だけでなく、御自治体がクマ関連ページに掲載している住民向けの注意喚起（入山時の対策・誘引物の管理など）を取り込み、地域のページに出典付きで掲載します。掲載内容のご確認・修正のご依頼はいつでも承ります。"
            />
            <Item
              title="⑧ 訪日外国人への英語配信"
              body="高尾山・富士山・上高地・日光・知床・屋久島をはじめ、全国 405 か所の英語ページを公開。日本語の公式ページだけでは届かない訪日外国人にも、クマの状況と対処法が伝わります。"
            />
            <Item
              title="③ 公式ページへのリンク・送客"
              body="全ての出没情報に自治体名と公式ページへのリンクを併記。住民は最終的に必ず公式サイトに戻れる設計で、自治体側の一次情報源としての権威性も損ないません。"
            />
            <Item
              title="④ 全国クマ出没マップ"
              body="集約データを 5km メッシュで区分表示（警戒 / 注意 / 観察 / 静穏 の 4 段階）。住民・観光客は出発前にスマホで 30 秒チェックでき、登山口・観光地ページから市町村ページへ自然に誘導されます。"
            />
            <Item
              title="⑤ 多様な運用形態への対応"
              body="HP がない、PDF 運用、紙運用、広報誌中心、SNS のみ — 自治体さまの運用は本当に様々で、それで構いません。報道・住民投稿・隣接自治体や県の発表で補完するなど、状況に応じて対応します。後日、公式ページを整備された際は自動でそちらを一次出典に切り替えます。"
            />
            <Item
              title="⑥ 獣医師による監修"
              body="クマの生態・人獣共通感染症・公衆衛生のリスク評価を獣医師が監修。注意喚起の表現・警戒レベル算出の妥当性を担保。"
            />
          </div>
        </section>

        {/* 連携フロー */}
        <section className="mt-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-stone-900 print:text-[13pt]">
            2. 連携の流れ
          </h2>
          <div className="mt-2 overflow-hidden rounded-lg border border-stone-200">
            <ProcessRow
              n={1}
              title="まずはご相談"
              when="メールでお気軽に"
              detail="contact@research-coordinate.co.jp 宛に「連携を検討したい」とご一報ください。公式 HP・PDF・紙運用・SNS など、貴自治体の運用形態は問いません。"
            />
            <ProcessRow
              n={2}
              title="設定"
              when="当社で配信を構築"
              detail="配信元にする公式ページと情報源（HTML / PDF / CSV / KML / ArcGIS / API など）を当社で設定します。御自治体側での実装・新規 API のご用意は不要です。"
            />
            <ProcessRow
              n={3}
              title="配信開始"
              when="まず 3 ヶ月無料でお試し"
              detail="御自治体専用の配信を開始します。以降、御自治体は公式ページに発表するだけで、更新が住民・観光客の通知へ自動で届きます。検知・配信の運用は当社が担当します。"
              last
            />
          </div>
          <p className="mt-2 text-xs text-stone-600 print:text-[9pt]">
            ※ 御自治体ご担当者のご対応は、最初のご相談のみ。以降は公式ページの発表に沿って自動配信され、追加の作業は発生しません。
          </p>
        </section>

        {/* 技術仕様 */}
        <section className="mt-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-stone-900 print:text-[13pt]">
            3. 技術仕様
          </h2>
          <Spec
            rows={[
              ["対応形式", "HTML / PDF / CSV / KML（Google MyMaps 含む）/ ArcGIS / 各種 API。新規 API のご用意は不要。"],
              ["更新頻度", "公式ソースは 4 時間ごと（1 日 6 回）の自動取り込み。報道は数分間隔で巡回。差分のみ反映。"],
              ["反映時間", "公式サイト更新からおおよそ 4 時間以内。報道で先に伝わった場合はそれより早く反映されます。"],
              ["位置精度", "自治体公開時点の粒度を超えない（番地までで公開されていれば番地まで）。緯度経度は OpenStreetMap / Nominatim でジオコーディング。市町村より細かい場所が分からない情報は、地図上に地点として表示しません。"],
              ["カバー範囲", "全国 1,895 市区町村分のページを用意し、うち 1,817 市区町村で出没情報を掲載（2026 年 8 月時点）。"],
              ["インフラ", "Vercel。CDN 配信。SLA は best-effort（Vercel 自体の SLA に準ずる）。"],
              ["データ形式", "JSON API ／ 5km 標準地域メッシュ ／ Schema.org JSON-LD。"],
            ]}
          />
        </section>

        {/* コンプライアンス */}
        <section className="mt-6 print:break-before-page">
          <h2 className="text-lg font-bold text-stone-900 print:text-[13pt]">
            4. 出典・著作権・個人情報
          </h2>
          <Spec
            rows={[
              ["出典明記", "全ての出没情報に「出典: ○○市」のラベルと公式ページへのリンクを併記。"],
              ["著作権", "情報そのものの著作権は自治体に帰属。当社は集約・可視化のみを行います。"],
              ["改変表示", "位置情報の正規化（番地→緯度経度変換）等を行う場合、改変箇所を内部ログに記録し、ご要望時に開示。"],
              ["個人情報", "住民・通報者の個人情報は一切収集しません。公開情報のみ取り扱います。"],
              ["連携停止", "メール 1 通で即時停止可能。停止後速やかに該当自治体の取り込みを停止し、表示を取り下げます。"],
              ["免責", "最終的な一次情報は公式サイトでご確認いただく設計。詳細な免責事項は kuma-watch.jp/disclaimer。"],
            ]}
          />
        </section>

        {/* FAQ */}
        <section className="mt-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-stone-900 print:text-[13pt]">
            5. よくあるご質問
          </h2>
          <div className="mt-2 space-y-2.5">
            <FAQ
              q="費用はかかりますか？"
              a="まず 3 ヶ月無料でお試しいただけます。以降はご利用規模に応じてご案内します。"
            />
            <FAQ
              q="自治体側に作業負担はありますか？"
              a="ありません。これまで通り公式ページに発表していただくだけです。更新の検知・配信はすべて当社で完結し、新しいシステムや専用 API・CSV エクスポートのご準備も不要です。公式 HP がない・PDF 運用・SNS 中心など、御自治体の運用形態に合わせて配信元を組み立てます。"
            />
            <FAQ
              q="情報の更新が遅れたり止まったりする心配はありませんか？"
              a="4 時間ごとの取り込みが正常に動作しているかを監視しており、異常を検知した場合は当社で復旧対応します。自治体側の運用には影響しません。"
            />
            <FAQ
              q="表示内容に誤りがあった場合の責任は？"
              a="本サービスは公開情報の集約・可視化であり、最終的な一次情報は公式サイトでご確認いただく設計です。表示内容の誤りはメールでご連絡いただければ速やかに修正・削除します。"
            />
            <FAQ
              q="自治体名のロゴや特定表現を使ってもよいですか？"
              a="自治体公式ページのリンクと自治体名（テキスト）を表示しますが、ロゴ・印章等の使用には事前許諾をいただきます。"
            />
            <FAQ
              q="住民・観光客へはどのように届きますか？"
              a="LINE やスマホのプッシュ通知でお届けします。公式ページで登録した住民・観光客に、御自治体の公式ページ更新が自動で通知されます。この通知配信が本サービスの中核です。"
            />
          </div>
        </section>

        {/* 運営 */}
        <section className="mt-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-stone-900 print:text-[13pt]">
            6. 運営体制
          </h2>
          <div className="mt-2 rounded-lg border border-stone-200 bg-white p-4 print:p-3">
            <div className="mb-2 flex items-center gap-3">
              <Image
                src="/labs/vet-eng-lab.jpeg"
                alt="獣医工学ラボ ロゴ"
                width={240}
                height={134}
                className="h-auto w-20 shrink-0 print:w-16"
              />
              <div>
                <div className="text-base font-bold text-stone-900 print:text-[11pt]">
                  獣医工学ラボ
                </div>
                <div className="text-xs text-stone-600 print:text-[9pt]">
                  （リサーチコーディネート株式会社が運営する技術プロジェクト）
                </div>
              </div>
            </div>
            <Spec
              rows={[
                ["所在地", "〒160-0023 東京都新宿区西新宿 1-20-3 西新宿高木ビル 8F"],
                ["代表メール", "contact@research-coordinate.co.jp"],
                ["Web", "https://www.research-coordinate.co.jp"],
                ["事業領域", "獣医療・野生動物・公衆衛生領域の研究支援および技術プロジェクト"],
                ["主な実績", "全国クマ出没事案の時空間分析・日次/週次/月次レポート公開（kuma-watch.jp/research）"],
              ]}
              compact
            />
          </div>
        </section>

        {/* お問い合わせ CTA */}
        <section className="mt-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-stone-900 print:text-[13pt]">
            7. お問い合わせ
          </h2>
          <p className="mt-1 text-sm leading-relaxed print:text-[10pt]">
            連携のご相談・追加資料のご請求は下記までご連絡ください。原則 3 営業日以内にご返信いたします。
          </p>
          <div className="mt-3 rounded-lg border border-amber-300 bg-amber-50 p-4 print:p-3">
            <div className="text-sm">
              <strong>Email：</strong>
              <a
                href="mailto:contact@research-coordinate.co.jp?subject=KumaWatch%20%E8%87%AA%E6%B2%BB%E4%BD%93%E9%80%A3%E6%90%BA%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87"
                className="font-semibold text-blue-700 underline"
              >
                contact@research-coordinate.co.jp
              </a>
            </div>
            <div className="mt-1 text-xs text-stone-600 print:text-[9pt]">
              件名は「KumaWatch 自治体連携のご相談」推奨。担当部署名・対象の出没情報ページ URL をお書き添えください。
            </div>
          </div>
        </section>

        {/* フッター */}
        <footer className="mt-8 border-t border-stone-300 pt-3 text-[10px] text-stone-500 print:text-[8pt]">
          KumaWatch / 獣医工学ラボ（リサーチコーディネート株式会社） /
          最終更新: 2026 年 8 月
        </footer>
      </article>
    </>
  );
}

function Item({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-3 print:p-2.5">
      <div className="text-sm font-semibold text-stone-900 print:text-[10pt]">
        {title}
      </div>
      <p className="mt-1 text-xs leading-relaxed text-stone-700 print:text-[9pt]">
        {body}
      </p>
    </div>
  );
}

function ProcessRow({
  n,
  title,
  when,
  detail,
  last,
}: {
  n: number;
  title: string;
  when: string;
  detail: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-[2.5rem_1fr] gap-3 px-3 py-2.5 print:py-2 ${
        last ? "" : "border-b border-stone-200"
      }`}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white print:h-7 print:w-7 print:text-[10pt]">
        {n}
      </div>
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="text-sm font-semibold text-stone-900 print:text-[10pt]">
            {title}
          </div>
          <div className="text-xs text-stone-500 print:text-[9pt]">{when}</div>
        </div>
        <p className="mt-0.5 text-xs leading-relaxed text-stone-700 print:text-[9pt]">
          {detail}
        </p>
      </div>
    </div>
  );
}

function Spec({
  rows,
  compact,
}: {
  rows: [string, string][];
  compact?: boolean;
}) {
  return (
    <dl
      className={`mt-2 overflow-hidden rounded-lg border border-stone-200 ${
        compact ? "" : "bg-white"
      }`}
    >
      {rows.map(([k, v], i) => (
        <div
          key={k}
          className={`grid grid-cols-[8rem_1fr] gap-3 px-3 py-2 print:py-1.5 ${
            i < rows.length - 1 ? "border-b border-stone-200" : ""
          }`}
        >
          <dt className="text-xs font-semibold text-stone-600 print:text-[9pt]">
            {k}
          </dt>
          <dd className="text-xs text-stone-800 print:text-[9pt]">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-white p-3 print:break-inside-avoid print:p-2.5">
      <div className="text-sm font-semibold text-stone-900 print:text-[10pt]">
        Q. {q}
      </div>
      <p className="mt-1 text-xs leading-relaxed text-stone-700 print:text-[9pt]">
        A. {a}
      </p>
    </div>
  );
}
