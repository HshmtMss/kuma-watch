import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
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
        最も身近な救済制度が市町村・都道府県の独自補償です。多くの自治体で人身被害・農作物被害への
        見舞金・補助金が用意されていますが、<strong>金額・対象は自治体ごとに大きく異なります</strong>。
      </p>
      <h3>代表的な事例</h3>
      <ul>
        <li>
          <strong>秋田県</strong>: クマによる人身被害見舞金（最大数十万円）、農作物被害補助
        </li>
        <li>
          <strong>富山県</strong>: 人身被害支援金、医療費の一部補助
        </li>
        <li>
          <strong>長野県</strong>: 鳥獣被害対策事業として電気柵・防護柵の購入補助
        </li>
        <li>
          <strong>北海道</strong>: ヒグマ被害見舞金・農作物被害補助（市町村ごと）
        </li>
      </ul>
      <h3>申請の流れ</h3>
      <ol>
        <li>被害発生後 <strong>速やかに市町村役場（農林課・産業振興課）</strong>に連絡</li>
        <li>現場確認（自治体職員・猟友会の立ち会い）</li>
        <li>被害申請書を提出（写真・領収書等を添付）</li>
        <li>査定・支給決定</li>
        <li>振込（通常 1〜3 ヶ月後）</li>
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
      <h3>2026 年 4 月以降の変化</h3>
      <p>
        クマが <strong>「指定管理鳥獣」</strong>に追加されたことで、
        指定管理鳥獣捕獲等事業交付金として国費がさらに投入されやすくなりました。
        詳細は{" "}
        <Link href="/articles/designated-management-2026">
          クマが「指定管理鳥獣」に
        </Link>
        を参照してください。
      </p>

      <h2 id="insurance">民間損害保険でカバーできるもの</h2>
      <p>
        民間損害保険でカバーできる範囲は、契約内容によって大きく変わります。
        人身被害は比較的カバーされやすい一方、農作物・家屋・自動車被害は除外条項に注意が必要です。
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
          <strong>自動車被害（衝突）</strong> — 自動車保険の車両保険（オプション）で対応
        </li>
      </ul>
      <h3>除外されることが多いもの</h3>
      <ul>
        <li>
          <strong>農作物被害</strong> — 通常の損害保険では対象外。農業共済（NOSAI）の対応も限定的
        </li>
        <li>
          <strong>家屋への侵入・損壊</strong> — 火災保険の「破損・汚損」条項で対応する場合もあるが、要確認
        </li>
        <li>
          <strong>家畜被害（鶏・ヤギ・蜂等）</strong> — 通常は対象外
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
        クマ被害について、行政・自治体に対する損害賠償請求が認められた事例は<strong>極めて限定的</strong>です。
        国家賠償法・民法 717 条（土地工作物責任）に基づく請求は、
        「予見可能性」「結果回避可能性」「管理瑕疵」のハードルが高く、
        基本的に <strong>自然災害的な扱い</strong>を受けます。
      </p>
      <h3>賠償が認められやすい例外</h3>
      <ul>
        <li>動物園・施設の管理瑕疵によりクマが逃走 → 飼育者責任</li>
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
            a: "通常の医療保険・健康保険で対応します。さらに傷害保険・山岳保険に加入していれば自己負担分の補填や救助費用もカバー可能。自治体に人身被害見舞金制度がある地域では、申請すれば一時金が支給されます。",
            aText:
              "通常の医療保険・健康保険で対応。傷害保険・山岳保険で補填と救助費用も。自治体の人身被害見舞金も申請可能。",
          },
          {
            q: "農作物被害は誰に申請すればいいですか?",
            a: "市町村役場（農林課・産業振興課）が窓口です。多くの自治体で被害補償・防護柵設置補助があります。JA・農業共済組合（NOSAI）も併せて相談すると、共済金や被害申告ルートを案内してくれます。",
            aText:
              "市町村役場（農林課・産業振興課）が窓口。被害補償・防護柵補助あり。JA・NOSAI も併せて相談。",
          },
          {
            q: "自治体に損害賠償請求はできますか?",
            a: "原則として困難です。クマは野生動物として「自然災害的に扱う」のが司法の基本姿勢で、自治体に「予見可能性」「結果回避可能性」「管理瑕疵」を立証するハードルが高いです。例外的に動物園の管理瑕疵による逃走事故などに限られます。",
            aText:
              "原則困難。野生動物は自然災害扱い。予見・回避・管理瑕疵の立証ハードルが高い。動物園逃走など例外限定。",
          },
          {
            q: "通学路や住宅地で被害が出た場合は?",
            a: "市町村役場が最初の窓口。多くの自治体で通学路・住宅地での出没は重大事案として扱われ、見舞金や緊急対策の対象になります。学校経由で家庭にも連絡が回ることが多いです。",
            aText:
              "市町村役場が最初の窓口。通学路・住宅地は重大事案として見舞金・緊急対策の対象。学校経由でも連絡。",
          },
          {
            q: "保険に入っていないと何も補償されない?",
            a: "そんなことはありません。自治体の独自補償制度・国の交付金経由の支援は、保険加入の有無に関係なく利用できます。ただし金額・対象範囲は限定的なので、リスクの高い地域に住む方や農業従事者は損害保険・農業共済への加入も併せて検討してください。",
            aText:
              "自治体補償・国交付金支援は保険無関係で利用可。ただし金額・対象は限定的。リスク高い地域・農家は損害保険・農業共済も検討。",
          },
        ]}
      />
    </ArticleShell>
  );
}
