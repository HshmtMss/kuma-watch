import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "サービス仕様書｜KumaWatch 自治体連携",
  description:
    "KumaWatch（くまウォッチ）の自治体向け詳細仕様書。機能・連携フロー・技術仕様・運営体制・FAQ をまとめた庁内稟議用資料。",
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
              貴自治体の公式サイトに掲載されているクマ出没情報を、住民・観光客・登山者に届ける Web サービス。
            </li>
            <li>
              <strong>自治体作業：</strong>
              ゼロ。これまで通り公式サイトを更新いただくだけで自動取り込み。
            </li>
            <li>
              <strong>費用：</strong>
              自治体・住民ともに完全無料。広告なし。
            </li>
            <li>
              <strong>既存実績：</strong>
              全国 47 都道府県・70 以上の公式ソースから 70,000 件超を統合済（2026 年 5 月時点）。
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
              title="① 全国クマ出没マップ"
              body="自治体公式サイトの情報を 5km メッシュ単位で警戒レベル化（5 段階）。住民・観光客は出発前にスマホで 30 秒チェックできる。"
            />
            <Item
              title="② 市町村別 SEO ページ"
              body="/place/[県]/[市町村] という独立 URL で各市町村専用ページを自動生成。「○○市 クマ」検索で表示される媒体になる。"
            />
            <Item
              title="③ 公式情報への送客"
              body="全ての出没情報に自治体名と公式ページへのリンクを併記。住民は最終的に必ず公式サイトに戻る設計。"
            />
            <Item
              title="④ 獣医師による監修"
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
              title="メールでご連絡"
              when="即日"
              detail="contact@research-coordinate.co.jp 宛に「連携希望」とご連絡ください。対象の出没情報ページ URL をご共有いただきます。"
            />
            <ProcessRow
              n={2}
              title="情報源の確認"
              when="30 分のオンライン MTG"
              detail="現在の公開ページ・更新頻度・ファイル形式 (HTML / PDF / CSV / KML / ArcGIS / API) を確認。技術的な擦り合わせは当社で対応します。"
            />
            <ProcessRow
              n={3}
              title="試験取り込み"
              when="1〜2 週間"
              detail="当社で自動取り込みを設定し、表示を確認いただきます。位置情報の精度・表示文言・リンク先を貴自治体のご希望に合わせて調整します。"
            />
            <ProcessRow
              n={4}
              title="本番反映"
              when="ご確認次第"
              detail="住民・観光客への配信を開始。以降は公式サイトの更新に追従して自動反映されます。運用作業は発生しません。"
              last
            />
          </div>
          <p className="mt-2 text-xs text-stone-600 print:text-[9pt]">
            ※ 自治体ご担当者の作業時間は通算で MTG 30 分 + メール数往復 + 表示確認 30 分程度を見込んでいます。
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
              ["更新頻度", "1 日 2 回（早朝 03:00 / 午後 15:00 JST）の自動取り込み。差分のみ反映。"],
              ["反映時間", "公式サイト更新からおおよそ 12 時間以内。"],
              ["位置精度", "自治体公開時点の粒度を超えない（番地までで公開されていれば番地まで）。緯度経度は OpenStreetMap / Nominatim でジオコーディング。"],
              ["カバー範囲", "全国 47 都道府県・約 2,500 市町村（公開情報のある自治体）。"],
              ["インフラ", "Vercel（東京リージョン）。CDN 配信。SLA は best-effort（Vercel 自体の SLA に準ずる）。"],
              ["データ形式", "公開 API（JSON）／ 5km 標準地域メッシュ ／ Schema.org JSON-LD。"],
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
              q="費用は本当に無料ですか？"
              a="はい、自治体・住民ともに完全無料です。広告も掲載していません。基本機能は今後も無償提供を継続する方針です。"
            />
            <FAQ
              q="自治体側の作業は本当にゼロですか？"
              a="現状の公式サイトを更新いただくだけで KumaWatch 側で自動取り込みします。専用 API や CSV エクスポートのご用意も不要です。"
            />
            <FAQ
              q="情報の更新が遅れたり止まったりする心配はありませんか？"
              a="毎日 2 回の取り込みが正常に動作しているかを監視しており、異常を検知した場合は当社で復旧対応します。自治体側の運用には影響しません。"
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
              q="プッシュ通知や LINE 連携の予定は？"
              a="開発中です。連携自治体向けに、住民の自宅・職場周辺で新規出没があれば iOS/Android プッシュ通知を行う機能を順次提供予定です。"
            />
          </div>
        </section>

        {/* 運営 */}
        <section className="mt-6 print:break-inside-avoid">
          <h2 className="text-lg font-bold text-stone-900 print:text-[13pt]">
            6. 運営体制
          </h2>
          <div className="mt-2 rounded-lg border border-stone-200 bg-white p-4 print:p-3">
            <div className="text-base font-bold text-stone-900 print:text-[11pt]">
              獣医工学ラボ
            </div>
            <div className="text-xs text-stone-600 print:text-[9pt]">
              （リサーチコーディネート株式会社が運営する技術プロジェクト）
            </div>
            <Spec
              rows={[
                ["所在地", "〒160-0023 東京都新宿区西新宿 1-20-3 西新宿高木ビル 8F"],
                ["代表メール", "contact@research-coordinate.co.jp"],
                ["Web", "https://www.research-coordinate.co.jp"],
                ["事業領域", "獣医療・野生動物・公衆衛生領域の研究支援および技術プロジェクト"],
                ["主な実績", "全国クマ出没事案の時空間分析・日次/月次レポート公開（kuma-watch.jp/research）"],
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
          最終更新: 2026 年 5 月
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
