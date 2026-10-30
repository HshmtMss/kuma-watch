import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-compensation")!;

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
        <strong>結論</strong>: クマ被害の救済制度は <strong>4 つの層</strong>に分かれます。
        ①自治体の独自補償、②国の鳥獣被害防止総合対策交付金、③民間損害保険、④損害賠償請求。
        被害の種類（人身・農作物・家屋・自動車）と地域によって適用される制度が異なるため、
        被害が出たら<strong>すぐに市町村役場に連絡</strong>するのが最初の一歩です。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマ被害の救済制度は<strong>4層</strong>（自治体独自・国の交付金・民間保険・損害賠償）。
          </>,
          <>
            <strong>被害の種類と地域で適用制度が異なる</strong>。
          </>,
          <>
            被害が出たら、<strong>まず市町村役場に連絡</strong>するのが最初の一歩。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "救済制度の全体像（4 層構造）" },
          { id: "municipal", title: "自治体の独自補償制度" },
          { id: "national", title: "国の鳥獣被害防止総合対策交付金" },
          { id: "insurance", title: "民間損害保険でカバーできるもの" },
          { id: "lawsuit", title: "損害賠償請求と過去の判例" },
          { id: "process", title: "被害申請の具体的な手順" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="overview">救済制度の全体像（4 層構造）</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">層</th>
              <th className="px-3 py-2 text-left">主体</th>
              <th className="px-3 py-2 text-left">対象</th>
              <th className="px-3 py-2 text-left">特徴</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">①自治体補償</td>
              <td className="px-3 py-2">市町村・都道府県</td>
              <td className="px-3 py-2">主に人身被害・農作物</td>
              <td className="px-3 py-2 text-stone-600">自治体ごとに大きく異なる</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">②国の交付金</td>
              <td className="px-3 py-2">農林水産省</td>
              <td className="px-3 py-2">捕獲・防護柵・調査</td>
              <td className="px-3 py-2 text-stone-600">自治体経由で間接的に支援</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">③損害保険</td>
              <td className="px-3 py-2">民間保険会社</td>
              <td className="px-3 py-2">医療・自動車・家屋</td>
              <td className="px-3 py-2 text-stone-600">契約内容次第</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">④損害賠償</td>
              <td className="px-3 py-2">国・自治体・私人</td>
              <td className="px-3 py-2">管理瑕疵が認められた場合</td>
              <td className="px-3 py-2 text-stone-600">過去判例は限定的</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="municipal">自治体の独自補償制度</h2>
      <p>
        最も身近な救済制度が市町村・都道府県の独自制度です。人身被害への見舞金や、
        電気柵・防護柵の購入補助などを用意している自治体がありますが、
        <strong>制度の有無・金額・対象は自治体ごとに大きく異なります</strong>。
      </p>
      <h3>よくある制度の種類</h3>
      <ul>
        <li>
          <strong>人身被害の見舞金</strong>: 制度がある自治体とない自治体がある
        </li>
        <li>
          <strong>電気柵・防護柵の購入補助</strong>: 農作物被害の予防として、多くの地域で実施されている
        </li>
        <li>
          <strong>農作物被害そのものへの補てん</strong>: 実施している自治体は限られる
        </li>
      </ul>
      <h3>申請の流れ</h3>
      <ol>
        <li>被害発生後 <strong>速やかに市町村役場（農林課・産業振興課）</strong>に連絡</li>
        <li>現場確認（自治体職員・猟友会の立ち会い）</li>
        <li>被害申請書を提出（写真・領収書等を添付）</li>
        <li>査定・支給決定</li>
        <li>振込</li>
      </ol>
      <p>
        通報の具体的な手順は{" "}
        <Link href="/articles/bear-report">クマ目撃時の通報マニュアル</Link>
        を参照してください。
      </p>

      <h2 id="national">国の鳥獣被害防止総合対策交付金</h2>
      <p>
        農林水産省は <strong>「鳥獣被害防止総合対策交付金」</strong>を運用しており、
        全国の自治体が個別事業に活用できます。直接個人に支給される制度ではありませんが、
        間接的に住民の負担を軽減します。
      </p>
      <h3>主な対象事業</h3>
      <ul>
        <li>防護柵（電気柵・ワイヤーメッシュ）の設置補助</li>
        <li>箱罠・くくり罠など捕獲機材の購入</li>
        <li>緩衝帯整備（藪刈り・果樹伐採）</li>
        <li>地域実施隊（駆除実働部隊）の活動経費</li>
        <li>ジビエ加工施設整備</li>
      </ul>
      <h3>2024 年 4 月以降の変化</h3>
      <p>
        2024 年 4 月にクマ（四国の個体群を除く）が <strong>「指定管理鳥獣」</strong>に追加されたことで、
        環境省の指定管理鳥獣対策事業交付金の対象にもなり、捕獲や出没防止対策に国費が投入されやすくなりました。
        詳細は{" "}
        <Link href="/articles/designated-management-2026">
          クマが「指定管理鳥獣」に
        </Link>
        を参照してください。
      </p>

      <h2 id="insurance">民間損害保険でカバーできるもの</h2>
      <p>
        民間損害保険でカバーできる範囲は、契約内容によって大きく変わります。
        人身被害は比較的カバーされやすい一方、農作物・家屋・自動車被害は契約の種類や除外条項に注意が必要です。
      </p>
      <h3>カバーされやすいもの</h3>
      <ul>
        <li>
          <strong>医療費</strong> — 通常の医療保険・傷害保険でカバー
        </li>
        <li>
          <strong>救急搬送・救助費用</strong> — 山岳保険・登山保険で対応
        </li>
        <li>
          <strong>自動車被害（衝突）</strong> — 自動車保険の車両保険（一般型など、動物との衝突を補償するタイプ）で対応
        </li>
      </ul>
      <h3>注意が必要なもの</h3>
      <ul>
        <li>
          <strong>農作物被害</strong> — 通常の損害保険では対象外。農業共済（果樹共済・畑作物共済など）や収入保険で対象になる場合がある
        </li>
        <li>
          <strong>家屋への侵入・損壊</strong> — 火災保険の「破損・汚損」条項で対応する場合もあるが、要確認
        </li>
        <li>
          <strong>家畜被害</strong> — 牛・馬・豚は家畜共済の対象になり得るが、鶏・ヤギ・蜜蜂などは対象外のことが多い
        </li>
      </ul>
      <p>
        詳細は{" "}
        <Link href="/articles/bear-insurance">
          クマ被害は保険でカバーされる？
        </Link>
        を参照してください。
      </p>

      <h2 id="lawsuit">損害賠償請求と過去の判例</h2>
      <p>
        野生のクマによる被害について、行政・自治体への損害賠償請求が認められるハードルは<strong>高い</strong>と考えられます。
        国家賠償法に基づく請求では、
        「予見可能性」「結果回避可能性」や施設の「設置・管理の瑕疵」などを請求する側が示す必要があり、
        野生動物による被害はこれらが認められにくいためです。
      </p>
      <h3>賠償が認められやすい例外</h3>
      <ul>
        <li>動物園・飼育施設からクマが逃走 → 飼い主・管理者の責任（民法 718 条の動物占有者の責任など）</li>
        <li>狩猟事故（誤射・流れ弾）→ 加害ハンターの民事責任</li>
        <li>自治体が事前に把握していたリスクを通知せず被害が出た場合（限定的）</li>
      </ul>
      <h3>賠償が認められにくい例</h3>
      <ul>
        <li>登山・キャンプ中の野生クマ襲撃 → 自然リスクとして扱われる</li>
        <li>農作物・養蜂の被害 → 補償制度は別途あるが、賠償請求は困難</li>
      </ul>

      <h2 id="process">被害申請の具体的な手順</h2>
      <h3>人身被害の場合</h3>
      <ol>
        <li>119 番（救急）+ 110 番（警察）</li>
        <li>応急処置・救急搬送（詳細は <Link href="/articles/first-aid">応急処置と通報</Link>）</li>
        <li>市町村役場に連絡（人身被害見舞金の申請書類取得）</li>
        <li>診断書・医療費領収書を保管</li>
        <li>労災・通勤災害の場合は会社に届出</li>
        <li>加入している医療・傷害保険会社に連絡</li>
      </ol>
      <h3>農作物被害の場合</h3>
      <ol>
        <li>市町村役場（農林課・産業振興課）に連絡</li>
        <li>被害現場の写真撮影（被害状況・面積・収量）</li>
        <li>自治体職員の現場確認</li>
        <li>被害申請書 + 売上見込み資料を提出</li>
        <li>査定後、補助金・見舞金が支給される（自治体による）</li>
      </ol>
      <h3>家屋被害の場合</h3>
      <ol>
        <li>110 番（警察）+ 市町村役場</li>
        <li>火災保険・住宅総合保険会社に連絡</li>
        <li>「破損・汚損」「動物による損害」の特約適用可否を確認</li>
        <li>必要に応じて自治体の独自補助制度を申請</li>
      </ol>

      <ArticleFaq
        items={[
          {
            q: "クマに襲われたとき、医療費は誰が払いますか?",
            a: "通常の健康保険で対応します。仕事中や通勤途中の被害なら労災保険の対象になり得ます。傷害保険・山岳保険に加入していれば、契約に応じて給付金や救助費用も補償されます。自治体に人身被害見舞金制度がある地域では、申請すれば一時金が支給されます。なお、犯罪被害給付制度は人の犯罪行為による被害が対象のため、クマによる被害には使えません。",
            aText:
              "健康保険で対応。仕事中・通勤中なら労災も。傷害保険・山岳保険で給付や救助費用も。自治体の見舞金制度があれば申請可能。犯罪被害給付制度は対象外。",
          },
          {
            q: "農作物被害は誰に申請すればいいですか?",
            a: "市町村役場（農林課・産業振興課）が窓口です。防護柵の設置補助などの制度がある自治体もあります。JA・農業共済組合（NOSAI）も併せて相談すると、共済金や被害申告ルートを案内してくれます。",
            aText:
              "市町村役場（農林課・産業振興課）が窓口。防護柵補助などがある自治体も。JA・NOSAI も併せて相談。",
          },
          {
            q: "自治体に損害賠償請求はできますか?",
            a: "一般に難しいと考えられます。野生動物による被害では、自治体の「予見可能性」「結果回避可能性」「管理の瑕疵」などを示すハードルが高いためです。飼育施設からの逃走事故など、管理者の責任が問える場面とは事情が異なります。",
            aText:
              "一般に困難。野生動物による被害では予見可能性・回避可能性・管理瑕疵を示すハードルが高い。飼育施設からの逃走などとは事情が異なる。",
          },
          {
            q: "通学路や住宅地で被害が出た場合は?",
            a: "クマを見た・被害が出たら、まず 110 番。そのうえで市町村役場が窓口になります。見舞金などの制度の有無は自治体によって異なるので、役場に確認してください。",
            aText:
              "まず 110 番、その後は市町村役場が窓口。見舞金などの制度の有無は自治体による。",
          },
          {
            q: "保険に入っていないと何も補償されない?",
            a: "そんなことはありません。自治体の独自補償制度・国の交付金経由の支援は、保険加入の有無に関係なく利用できます。ただし金額・対象範囲は限定的なので、リスクの高い地域に住む方や農業従事者は損害保険・農業共済への加入も併せて検討してください。",
            aText:
              "自治体補償・国交付金支援は保険無関係で利用可。ただし金額・対象は限定的。リスク高い地域・農家は損害保険・農業共済も検討。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
