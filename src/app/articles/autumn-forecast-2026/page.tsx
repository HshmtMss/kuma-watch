import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
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
        <strong>結論</strong>: 秋（9〜11月）は年間出没件数の <strong>6 割</strong> が集中する季節。
        2025 年秋は全国で <strong>24,609 件</strong>（KumaWatch 集計）と歴史的大量年でした。
        2026 年秋がどう転ぶかは <strong>ブナ・ミズナラの結実</strong> で決まりますが、
        春の進行を見るかぎり「平年並み〜やや高め」の備えを推奨します。
      </p>

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
        KumaWatch が全国 47 都道府県の公開情報を統合した集計結果です。
        2023〜2025 年の秋 3 ヶ月は、年間総数の半数以上を占める年が大半でした。
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
        この振れの主因は次節で解説する <strong>ブナ・ミズナラの結実</strong> です。
      </p>

      <h2 id="why-autumn">なぜ秋がピークになるのか</h2>
      <p>
        秋にクマの出没が急増する理由は、冬眠前の <strong>ハイパーフェイジア（過食期）</strong>
        にあります。クマは冬眠中に体重の 20〜40% を消費するため、9〜11 月に通常の数倍のカロリーを摂取する必要があります。
      </p>
      <ul>
        <li>
          <strong>1 日の摂食時間が 20 時間に達する</strong> — 通常期の 2〜3 倍。
          食物を探し続けるため行動範囲も拡大
        </li>
        <li>
          <strong>体重が夏比で 30〜50% 増加</strong> — メスは胎子を抱えて越冬する必要があり、十分に脂肪を蓄えられないと冬眠中に死亡または胎子を再吸収
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
          — 特に秋田・宮城・山形でドングリ類の結実が極端に少なく、クマが越冬に必要な脂肪を山中で確保できなかった
        </li>
        <li>
          <strong>2024 年の餌豊作で個体数が増加</strong>
          — 前年が豊作だったため繁殖成功率と仔グマの生存率が高く、翌年の出没母数自体が大きかった
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
        春の出没件数は秋を予報する指標として完全ではありませんが、過去 3 年の傾向では：
      </p>
      <ul>
        <li>2023 年: 春 635 件 → 秋 4,689 件（秋は春の 7.4 倍）</li>
        <li>2024 年: 春 1,318 件 → 秋 1,470 件（秋は春の 1.1 倍 — 堅果豊作年）</li>
        <li>2025 年: 春 2,587 件 → 秋 24,609 件（秋は春の 9.5 倍 — 大不作年）</li>
      </ul>
      <p>
        2026 年春は 749 件（3〜5月）と中間的な水準。
        単純な比例で予測すれば秋は <strong>1,000〜7,000 件</strong> の幅となり、
        振れが大きいのが正直なところです。決定打は <strong>夏〜初秋のブナ結実調査</strong>
        を待つ必要があります（後述）。
      </p>

      <h2 id="key-indicators">秋の出没規模を決める3つの指標</h2>
      <p>夏が深まる頃から秋を予測するうえで、特に注目すべき指標は次の 3 つです。</p>
      <ol>
        <li>
          <strong>ブナ結実予測（7〜8月発表）</strong>
          — 各県の林業試験場や森林総合研究所が、ブナの花序数や幼果数から秋の結実量を予測します。「凶作」「並作」「豊作」の判定が出ますので、各県の発表をチェックしてください。
        </li>
        <li>
          <strong>夏（6〜8月）の里山出没件数</strong>
          — 通常クマは夏に高山〜中腹に上がりますが、里山での目撃が多い年は山の餌が既に不足しているサインで、秋の里下りが激しくなる傾向があります。
        </li>
        <li>
          <strong>養蜂・果樹被害の早期発生</strong>
          — 8 月時点で養蜂箱・柿・栗の被害報告が増えている地域は、山の餌で満たせていない個体が早めに人里に下りています。
        </li>
      </ol>
      <p>
        KumaWatch では各都道府県・市町村ページで月別件数を可視化していますので、
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
        <Link href="/place">都道府県から探す</Link>
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
          を購入し、有効期限・噴射練習を済ませる（本番直前では遅い）
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
          KumaWatch の{" "}
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
                豊作年なら 2024 年水準（1,500 件程度）に落ち着き、不作年なら 2023 年〜2025 年水準（5,000〜25,000 件）に振れる可能性があります。
                7〜8 月に各県森林総合研究所が発表する結実予測を必ず確認してください。
              </>
            ),
            aText:
              "確定予測は困難。夏のブナ結実調査次第で、豊作年なら 1,500 件程度、不作年なら 5,000〜25,000 件に振れる可能性。7〜8 月の各県結実予測を必ず確認。",
          },
          {
            q: "ハイパーフェイジア期はいつ始まる?",
            a: "個体差・地域差がありますが、目安は 9 月上〜中旬から 11 月末。北海道のヒグマは 8 月後半から始まる場合も。ツキノワグマ域では 10 月がピークです。",
            aText:
              "目安は 9 月上〜中旬から 11 月末。北海道のヒグマは 8 月後半から始まる場合も。ツキノワグマ域では 10 月がピーク。",
          },
          {
            q: "ブナ結実の予測情報はどこで見られる?",
            a: (
              <>
                各県の森林総合研究所・林業試験場が 7〜8 月に発表します（例: 秋田県森林技術センター、新潟県森林研究所、山形県森林研究研修センター等）。
                <Link href="/research">研究・知見ページ</Link>
                でも、注目すべき発表があれば随時取り上げます。
              </>
            ),
            aText:
              "各県の森林総合研究所・林業試験場が 7〜8 月に発表（秋田県森林技術センター、新潟県森林研究所、山形県森林研究研修センター等）。",
          },
          {
            q: "クマ撃退スプレーは秋になってから買えばいい?",
            a: (
              <>
                <strong>遅すぎます。</strong>
                秋は流通が逼迫し、有効期限切れ品しか手に入らないケースも。
                夏のうちに購入し、噴射練習用のインアートで操作を覚えておくのが基本です。
                詳細は <Link href="/articles/bear-spray">クマよけスプレー</Link>
                を参照してください。
              </>
            ),
            aText:
              "秋は流通が逼迫し、有効期限切れ品しか手に入らない場合があります。夏のうちに購入し、噴射練習を済ませるのが基本。",
          },
          {
            q: "出没情報をリアルタイムで知りたい",
            a: (
              <>
                <Link href="/">KumaWatch のトップマップ</Link>
                では全国の出没情報を日次更新で表示しています。
                自分の地域については <Link href="/place">都道府県別ページ</Link>
                から市町村単位の詳細を確認できます。
              </>
            ),
            aText:
              "KumaWatch トップマップで全国の出没情報を日次更新。地域別の詳細は都道府県別ページから市町村単位で確認可能。",
          },
        ]}
      />
    </ArticleShell>
  );
}
