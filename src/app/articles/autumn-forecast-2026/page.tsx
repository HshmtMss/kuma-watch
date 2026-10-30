import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("autumn-forecast-2026")!;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: `https://kuma-watch.jp/articles/${meta.slug}` },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: `https://kuma-watch.jp/articles/${meta.slug}`,
    type: "article",
    publishedTime: meta.publishedAt,
    modifiedTime: meta.updatedAt,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        <strong>結論</strong>: 大量出没の年は、年間出没件数の <strong>約 6 割</strong> が秋（9〜11月）に集中します。
        2025 年秋は全国で <strong>24,609 件</strong>（くまウォッチ集計）と歴史的大量年でした。
        2026 年秋がどう転ぶかは <strong>ブナ・ミズナラの結実</strong> に大きく左右されますが、
        春の進行を見るかぎり「平年並み〜やや高め」の備えを推奨します。
      </p>
      <p className="text-sm text-stone-500">
        ※ この記事は 2026 年 5 月時点のくまウォッチ集計にもとづく<strong>見通し（予報）</strong>で、結果を保証するものではありません。件数はその後の取り込み元の追加により、現在の集計値とは異なります。
        追記（2026 年 10 月）: 林野庁東北森林管理局の調査（10 月 6 日発表）では、2026 年秋のブナの結実は青森県・秋田県が並作、岩手県・宮城県・山形県が豊作でした。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            大量出没の年は<strong>年間出没の約6割が秋（9〜11月）に集中</strong>する。
          </>,
          <>
            2025年秋は全国<strong>24,609件と歴史的大量年</strong>だった。
          </>,
          <>
            2026年秋は<strong>ブナ・ミズナラの結実しだい</strong>。5月時点の見通しは「平年並み〜やや高め」の備えを推奨。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "data", title: "過去3年の秋（9〜11月）出没データ" },
          { id: "why-autumn", title: "なぜ秋がピークになるのか" },
          { id: "2025-record", title: "2025年秋が記録的だった理由" },
          { id: "2026-progress", title: "2026年春の進行状況" },
          { id: "key-indicators", title: "秋の出没規模を決める3つの指標" },
          { id: "prefecture", title: "都道府県別の警戒レベル" },
          { id: "actions", title: "今から準備できる対策" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="data">過去3年の秋（9〜11月）出没データ</h2>
      <p>
        くまウォッチが全国 47 都道府県の公開情報を統合した集計結果です。
        2023〜2025 年の 3 年のうち 2 年は、秋の 3 ヶ月が年間総数の半数以上を占めました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">年</th>
              <th className="px-3 py-2 text-right">秋（9〜11月）</th>
              <th className="px-3 py-2 text-right">年間合計</th>
              <th className="px-3 py-2 text-right">秋の割合</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 tabular-nums">
            <tr>
              <td className="px-3 py-2 font-semibold">2023年</td>
              <td className="px-3 py-2 text-right">4,689 件</td>
              <td className="px-3 py-2 text-right">7,831 件</td>
              <td className="px-3 py-2 text-right text-amber-700">59.9%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">2024年</td>
              <td className="px-3 py-2 text-right">1,470 件</td>
              <td className="px-3 py-2 text-right">7,423 件</td>
              <td className="px-3 py-2 text-right text-stone-600">19.8%</td>
            </tr>
            <tr className="bg-red-50">
              <td className="px-3 py-2 font-semibold text-red-900">2025年</td>
              <td className="px-3 py-2 text-right font-bold text-red-900">
                24,609 件
              </td>
              <td className="px-3 py-2 text-right font-bold text-red-900">
                39,801 件
              </td>
              <td className="px-3 py-2 text-right font-bold text-red-900">
                61.8%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        2023 年と 2025 年は年間の <strong>6 割</strong> が秋に集中していますが、
        2024 年は秋の比率が <strong>2 割弱</strong> にとどまり、年ごとに大きく振れます。
        この振れの大きな要因とされるのが、後で解説する <strong>ブナ・ミズナラの結実</strong> です（東北 5 県のブナは 2023 年・2025 年が大凶作、2024 年は豊作〜並作でした）。
      </p>

      <h2 id="why-autumn">なぜ秋がピークになるのか</h2>
      <p>
        秋にクマの出没が急増する理由は、冬眠前の <strong>ハイパーフェイジア（過食期）</strong>
        にあります。クマは冬眠中ほとんど飲み食いせず、蓄えた脂肪で冬を越すため、秋に大量の食べ物を必要とします。
      </p>
      <ul>
        <li>
          <strong>1 日の多くの時間を採食に費やす</strong> —
          食物を探し続けるため行動範囲も拡大
        </li>
        <li>
          <strong>秋に脂肪を蓄えて体重が大きく増える</strong> — 妊娠したメスは冬眠中に出産するため、十分に脂肪を蓄えられないと出産に至らないことがある
        </li>
        <li>
          <strong>主食はブナ・ミズナラなどの堅果（ドングリ類）</strong>
          — 高カロリーで効率よく脂肪に変換できる
        </li>
        <li>
          <strong>堅果が不作の年は里に降りる</strong> — 柿・栗・養蜂の蜜などを求めて、人里・市街地まで進出
        </li>
      </ul>
      <p>
        ハイパーフェイジア期の詳細は{" "}
        <Link href="/articles/autumn">秋のクマ対策 — なぜ秋が最も危険なのか</Link>
        を参照してください。
      </p>

      <h2 id="2025-record">2025年秋が記録的だった理由</h2>
      <p>
        2025 年秋は全国で 24,609 件、年間 39,801 件と、過去 3 年の平均を大きく上回る歴史的大量年でした。
        要因は複合的ですが、専門家が指摘する主な背景は次の通りです。
      </p>
      <ol>
        <li>
          <strong>東北・北日本のブナ・ミズナラが広域的に不作</strong>
          — 林野庁東北森林管理局の調査では、ブナの結実は東北 5 県（青森・岩手・宮城・秋田・山形）すべてで「大凶作」。クマが越冬に必要な脂肪を山中で確保できなかったと考えられている
        </li>
        <li>
          <strong>2024 年の結実が良く、個体数が増えていた可能性</strong>
          — 前年の東北のブナは豊作〜並作で、子グマが多く生まれて出没の母数が膨らんでいたとの指摘がある
        </li>
        <li>
          <strong>放棄柿・耕作放棄地の拡大</strong>
          — 過疎化で里山の人手が減り、誘引物が放置されて市街地進出を後押し
        </li>
        <li>
          <strong>記録・通報体制の強化</strong>
          — 各自治体が情報発信を強化し、過去より「拾える件数」自体が増えた側面もある
        </li>
      </ol>
      <p>
        2025 年秋の県別 top 5 は <strong>秋田 9,955 / 新潟 2,454 / 宮城 2,446 / 山形 1,866 / 青森 1,625</strong>
        と東北・北陸が突出。北海道のヒグマ域とは別の構造で、本州ツキノワグマの食料事情が直撃した形です。
      </p>

      <h2 id="2026-progress">2026年春の進行状況</h2>
      <p>
        2026 年 1〜5 月の全国出没件数は <strong>1,212 件</strong> です。
        2025 年の同期間（2,829 件）と比べると <strong>43% 程度</strong> に落ち着いており、
        2023 年同期間（656 件）よりは多い、というのが現状の位置です。
      </p>
      <p>
        春の出没件数は秋を予報する指標として完全ではありませんが、過去 3 年の春（3〜5 月）と秋（9〜11 月）を比べると：
      </p>
      <ul>
        <li>2023 年: 春 635 件 → 秋 4,689 件（秋は春の 7.4 倍）</li>
        <li>2024 年: 春 1,318 件 → 秋 1,470 件（秋は春の 1.1 倍 — 堅果豊作年）</li>
        <li>2025 年: 春 2,587 件 → 秋 24,609 件（秋は春の 9.5 倍 — 大不作年）</li>
      </ul>
      <p>
        2026 年春は 749 件（3〜5月）と中間的な水準。
        過去 3 年の秋／春の倍率（1.1〜9.5 倍）を単純に当てはめると、秋は <strong>約 800〜7,000 件</strong> の幅となり、
        振れが大きいのが正直なところです。決定打は <strong>夏〜初秋のブナ結実調査</strong>
        を待つ必要があります（後述）。
      </p>

      <h2 id="key-indicators">秋の出没規模を決める3つの指標</h2>
      <p>夏が深まる頃から秋を予測するうえで、特に注目すべき指標は次の 3 つです。</p>
      <ol>
        <li>
          <strong>ブナの結実予測・結実調査</strong>
          — 東北では林野庁東北森林管理局が 7 月頃に開花状況からの予測を、10 月頃に結実状況の調査結果を発表します（「大凶作」「凶作」「並作」「豊作」の 4 区分）。県の研究機関が独自に予報を出す県もあります。
        </li>
        <li>
          <strong>夏（6〜8月）の里山出没件数</strong>
          — 里山での目撃が多い年は山の餌が不足しているサインの可能性があり、秋の出没にも注意が必要です。
        </li>
        <li>
          <strong>養蜂・果樹被害の早期発生</strong>
          — 8 月時点で養蜂箱・柿・栗の被害報告が増えている地域は、山の餌で満たせていない個体が早めに人里に下りています。
        </li>
      </ol>
      <p>
        くまウォッチでは各都道府県・市町村ページで月別件数を可視化していますので、
        夏が進んだら各地域の <Link href="/place">都道府県別マップ</Link> で実況をご確認ください。
      </p>

      <h2 id="prefecture">都道府県別の警戒レベル</h2>
      <p>
        2025 年秋に大量出没が起きた都道府県は、2026 年も同様の地理的傾向が続くと考えられます。
        特に以下の県は秋の備えを早めに進めることを推奨します。
      </p>
      <ul>
        <li>
          <strong>秋田県</strong> — 2025 年秋に 9,955 件と突出。広域でブナ不作。
          人身被害も多く、市街地侵入が常態化{" "}
          <Link href="/place/秋田県">秋田県の出没マップ →</Link>
        </li>
        <li>
          <strong>新潟県・宮城県・山形県・青森県・福島県</strong> — 東北・北陸の本州ツキノワグマ域。2025 年秋にいずれも 1,000〜2,500 件規模
        </li>
        <li>
          <strong>北海道</strong> — ヒグマ生息域。ツキノワグマとは別の警戒が必要。
          知床・大雪・日高では登山・キャンプでベアスプレー必携{" "}
          <Link href="/place/北海道">北海道の出没マップ →</Link>
        </li>
        <li>
          <strong>富山県・群馬県・長野県</strong> — 中部山岳地域。スキー場・観光地周辺で例年通り注意
        </li>
      </ul>
      <p>
        各市町村の詳細は{" "}
        <Link href="/place">市町村で探す</Link>
        で確認できます。
      </p>

      <h2 id="actions">今から準備できる対策</h2>
      <p>
        秋のピーク（9〜11月）に向けて、夏（6〜8月）のうちにできる準備を時系列で整理します。
      </p>
      <h3>個人・登山者</h3>
      <ul>
        <li>
          <Link href="/articles/bear-spray">クマよけスプレー</Link>
          を購入し、有効期限の確認と練習用スプレーでの操作練習を済ませる（本番直前では遅い）
        </li>
        <li>
          <Link href="/articles/bear-bell">クマ鈴・ホイッスル</Link>
          の予備を確保し、登山前の動作確認
        </li>
        <li>
          食料は <Link href="/articles/bear-canister">ベアキャニスター・防臭袋</Link>
          で密閉。キャンプ・縦走では特に重要
        </li>
        <li>
          単独行は控え、複数人で行動する習慣化
        </li>
      </ul>
      <h3>家庭・自宅周辺</h3>
      <ul>
        <li>
          <Link href="/articles/home-protection">自宅周辺の誘引物管理</Link>
          — 庭の柿・栗・廃棄果実は秋になる前に処分
        </li>
        <li>
          生ゴミの保管は屋外密閉ストッカーへ
        </li>
        <li>
          センサーライト・電気柵を必要に応じて設置（特に農地・果樹園）
        </li>
        <li>
          子どもの通学路は{" "}
          <Link href="/articles/school-route">通学路のクマ対策</Link>
          を参照し、集団登下校・パトロール体制を確認
        </li>
      </ul>
      <h3>自治体・事業者</h3>
      <ul>
        <li>
          猟友会・警察との三者連携体制を 8 月までに再確認
        </li>
        <li>
          AI 検知カメラ・モンスターウルフ等の{" "}
          <Link href="/products?for=gov">自治体向け対策ソリューション</Link>
          の導入検討
        </li>
        <li>
          公式 HP の出没情報ページの更新運用を再点検（更新が止まると住民への通知が遅れる）
        </li>
        <li>
          くまウォッチの{" "}
          <Link href="/for-gov">自治体連携</Link>
          で、住民・観光客に届く情報チャネルを確保
        </li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "2026 年秋は 2025 年と同じくらい大量出没になる?",
            a: (
              <>
                確定的な予測は困難ですが、2025 年級になるかは
                <strong>夏のブナ結実調査の結果次第</strong>です。
                過去 3 年の集計では、ブナの結実が良かった 2024 年の秋は 1,500 件程度、大凶作だった 2023 年・2025 年の秋は約 4,700〜25,000 件でした。
                東北森林管理局などが発表するブナの結実予測・調査結果を確認してください。
              </>
            ),
            aText:
              "確定予測は困難。過去3年の集計では、ブナの結実が良かった2024年秋は1,500件程度、大凶作の2023年・2025年秋は約4,700〜25,000件。東北森林管理局などのブナ結実予測・調査結果を確認。",
          },
          {
            q: "ハイパーフェイジア期はいつ始まる?",
            a: "個体差・地域差がありますが、目安はおおむね晩夏から冬眠に入るまでの秋です。くまウォッチの集計では、2023 年と 2025 年はいずれも 10 月が出没件数のピークでした。",
            aText:
              "目安はおおむね晩夏から冬眠に入るまでの秋。くまウォッチの集計では2023年と2025年はいずれも10月が出没件数のピーク。",
          },
          {
            q: "ブナ結実の予測情報はどこで見られる?",
            a: (
              <>
                東北では林野庁東北森林管理局が 7 月頃（開花状況からの予測）と 10 月頃（結実状況）に発表します。県独自の予報もあり、例えば秋田県林業研究研修センターは前年の秋に翌年の豊凶予報を出しています。
                <Link href="/research">研究・知見ページ</Link>
                でも、注目すべき発表があれば随時取り上げます。
              </>
            ),
            aText:
              "東北では林野庁東北森林管理局が7月頃（開花状況からの予測）と10月頃（結実状況）に発表。県独自の予報もあり、秋田県林業研究研修センターは前年の秋に翌年の豊凶予報を出している。",
          },
          {
            q: "クマ撃退スプレーは秋になってから買えばいい?",
            a: (
              <>
                <strong>遅すぎます。</strong>
                出没が多い年の秋は品薄になることがあります。
                夏のうちに購入し、練習用（Inert・刺激成分なし）スプレーで操作を覚えておくのが基本です。
                詳細は <Link href="/articles/bear-spray">クマよけスプレー</Link>
                を参照してください。
              </>
            ),
            aText:
              "出没が多い年の秋は品薄になることがあります。夏のうちに購入し、練習用（Inert）スプレーで操作を覚えておくのが基本。",
          },
          {
            q: "出没情報をリアルタイムで知りたい",
            a: (
              <>
                <Link href="/">くまウォッチのトップマップ</Link>
                では全国の出没情報を日次更新で表示しています。
                自分の地域については <Link href="/place">都道府県別ページ</Link>
                から市町村単位の詳細を確認できます。
              </>
            ),
            aText:
              "くまウォッチトップマップで全国の出没情報を日次更新。地域別の詳細は都道府県別ページから市町村単位で確認可能。",
          },
        ]}
      />
      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
