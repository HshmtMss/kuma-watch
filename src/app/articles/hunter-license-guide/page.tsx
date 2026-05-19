import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("hunter-license-guide")!;

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
        <strong>結論</strong>: 狩猟免許は <strong>4 種類</strong>あります。
        ①第一種銃猟（散弾銃・ライフル）、②第二種銃猟（空気銃）、③わな猟、④網猟。
        クマを実際に捕獲・駆除したい場合は <strong>第一種銃猟免許 + 銃所持許可 + 猟友会加入</strong>
        という長い道のりが必要です。本記事は取得手順・費用・期間を実務目線で整理します。
      </p>

      <ArticleToc
        items={[
          { id: "why", title: "なぜハンターになるのか — 4 つの動機" },
          { id: "types", title: "狩猟免許の 4 種類" },
          { id: "process", title: "免許取得の全体フロー" },
          { id: "cost", title: "費用と期間" },
          { id: "gun", title: "銃所持許可の取得（第一種・第二種）" },
          { id: "after", title: "免許取得後 — 登録・狩猟・実践" },
          { id: "support", title: "自治体の支援制度" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why">なぜハンターになるのか — 4 つの動機</h2>
      <p>
        2024 年時点で全国の狩猟免許所持者は約 <strong>18 万人</strong>。
        1975 年の 50 万人と比べると半分以下まで減少しました。一方で、
        若手・女性ハンターは増加傾向にあり、新しい動機で免許を取る人が出てきています。
      </p>
      <ul>
        <li>
          <strong>地域貢献</strong> — 自治体・猟友会の駆除実働部隊として活動
        </li>
        <li>
          <strong>農業従事者の自衛</strong> — 自分の畑をクマ・イノシシ・シカから守る
        </li>
        <li>
          <strong>ジビエ・自家消費</strong> — 自分で獲った肉を食べる文化的価値
        </li>
        <li>
          <strong>環境・野生動物管理</strong> — 個体数管理を通じた生態系保全
        </li>
      </ul>
      <p>
        クマ対策に関わりたい場合、<strong>銃猟免許 + 銃所持許可</strong>が現実的なルートです。
        わな猟は自治体・農家にニーズが大きく、取得しやすい入り口でもあります。
      </p>

      <h2 id="types">狩猟免許の 4 種類</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">免許種別</th>
              <th className="px-3 py-2 text-left">使える猟具</th>
              <th className="px-3 py-2 text-left">主な対象</th>
              <th className="px-3 py-2 text-left">取得難易度</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">第一種銃猟</td>
              <td className="px-3 py-2">散弾銃・ライフル</td>
              <td className="px-3 py-2">クマ・シカ・イノシシ・鳥類</td>
              <td className="px-3 py-2 text-red-700">高（銃所持許可が別途必要）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">第二種銃猟</td>
              <td className="px-3 py-2">空気銃</td>
              <td className="px-3 py-2">主に鳥類・小型動物</td>
              <td className="px-3 py-2 text-amber-700">中（銃所持許可が別途必要）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">わな猟</td>
              <td className="px-3 py-2">箱罠・くくり罠</td>
              <td className="px-3 py-2">シカ・イノシシ・クマ（要許可）</td>
              <td className="px-3 py-2 text-green-700">低</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">網猟</td>
              <td className="px-3 py-2">かすみ網・むそう網等</td>
              <td className="px-3 py-2">主に鳥類</td>
              <td className="px-3 py-2 text-green-700">低</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="process">免許取得の全体フロー</h2>
      <ol>
        <li>
          <strong>受験申し込み</strong> — 都道府県の鳥獣保護担当課に申請（年 2〜4 回実施）
        </li>
        <li>
          <strong>事前講習会</strong> — 大日本猟友会・各県猟友会主催。1 日（任意だが強く推奨）
        </li>
        <li>
          <strong>適性試験</strong> — 視力・聴力・運動能力の確認
        </li>
        <li>
          <strong>知識試験</strong> — 鳥獣保護管理法・狩猟規制・鳥獣の見分け方など 30 問（マークシート）
        </li>
        <li>
          <strong>技能試験</strong> — 銃の取扱い、わなの設置、鳥獣判別など実技
        </li>
        <li>
          <strong>合格・免許交付</strong> — 通常 1 ヶ月以内
        </li>
      </ol>
      <p>
        受験は <strong>18 歳以上</strong>（第一種銃猟は 20 歳以上）。
        合格率は事前講習を受ければ <strong>80〜90%</strong>と比較的高いです。
      </p>

      <h2 id="cost">費用と期間</h2>
      <h3>狩猟免許のみの場合（わな猟・網猟）</h3>
      <ul>
        <li>受験申請手数料: 5,200 円</li>
        <li>事前講習会: 約 10,000〜15,000 円</li>
        <li>診断書代: 約 5,000 円</li>
        <li><strong>合計: 約 20,000〜25,000 円</strong></li>
        <li>所要期間: 申し込みから免許交付まで <strong>約 2〜3 ヶ月</strong></li>
      </ul>
      <h3>第一種銃猟（クマ駆除に関わりたい場合）</h3>
      <p>狩猟免許 + 銃所持許可の両方が必要です。</p>
      <ul>
        <li>狩猟免許関連: 約 25,000 円（上記）</li>
        <li>銃所持許可関連（後述）: 約 12〜15 万円</li>
        <li>銃本体（中古散弾銃）: 約 5〜15 万円</li>
        <li>装備（ガンロッカー・装弾ロッカー・予備品）: 約 5〜10 万円</li>
        <li><strong>合計: 約 25〜45 万円</strong></li>
        <li>所要期間: <strong>約 6〜9 ヶ月</strong>（銃所持許可の身辺調査が長い）</li>
      </ul>

      <h2 id="gun">銃所持許可の取得（第一種・第二種）</h2>
      <p>
        銃猟免許とは別に、警察に <strong>銃砲所持許可</strong>を申請する必要があります。
        これは銃刀法に基づく厳格な制度で、数ヶ月の身辺調査を経て交付されます。
      </p>
      <h3>銃所持許可の手順</h3>
      <ol>
        <li>初心者講習会受講 → 講習修了証明書（試験あり）</li>
        <li>教習資格認定申請（管轄警察署）</li>
        <li>身辺調査（警察が近隣・職場に聞き込み）</li>
        <li>射撃教習（実弾射撃）→ 教習修了証明書</li>
        <li>銃の購入仮許可申請</li>
        <li>銃の購入・所持許可申請</li>
        <li>所持許可交付</li>
      </ol>
      <h3>所持許可の主な欠格事由</h3>
      <ul>
        <li>精神疾患・アルコール依存・薬物依存</li>
        <li>過去 10 年以内の重大な犯罪歴</li>
        <li>DV・ストーカー規制法違反歴</li>
        <li>暴力団関係者</li>
        <li>同居家族に上記事由がある場合も影響</li>
      </ul>

      <h2 id="after">免許取得後 — 登録・狩猟・実践</h2>
      <p>
        免許を取得しただけでは狩猟はできません。次のステップが必要です。
      </p>
      <ol>
        <li>
          <strong>狩猟者登録</strong> — 都道府県ごとに毎年登録（11 月〜翌年 2 月の狩猟期）。
          狩猟税・登録料が必要
        </li>
        <li>
          <strong>狩猟者保険加入</strong> — 必須。事故時の賠償保険
        </li>
        <li>
          <strong>猟友会加入</strong> — 任意だが強く推奨。情報共有・グループ猟・駆除事業の窓口
        </li>
        <li>
          <strong>実践経験を積む</strong> — 単独で山に入るのは危険。経験者と同行が原則
        </li>
        <li>
          <strong>有害鳥獣捕獲事業への参加</strong> — 自治体・猟友会経由で駆除事業に参加
        </li>
      </ol>
      <p>
        クマ駆除事業は、通常の狩猟期外でも実施される<strong>許可捕獲</strong>です。
        参加するには猟友会経由で自治体に推薦してもらうのが一般的です。
      </p>

      <h2 id="support">自治体の支援制度</h2>
      <p>
        ハンター不足を解消するため、多くの自治体が免許取得を支援しています。
        若手・女性・地域貢献を希望する人ほど活用できます。
      </p>
      <ul>
        <li>
          <strong>受験料・講習料の補助</strong> — 全額または半額補助（多くの県）
        </li>
        <li>
          <strong>銃所持許可関連費の補助</strong> — 一部県（秋田・長野等）で実施
        </li>
        <li>
          <strong>女性ハンター育成プログラム</strong> — 全国数十自治体で運用
        </li>
        <li>
          <strong>新規ハンター向け OJT</strong> — 猟友会と連携して経験者が同行
        </li>
      </ul>
      <p>
        詳細は居住する都道府県の <strong>鳥獣保護担当課</strong>に問い合わせてください。
        2026 年 4 月のクマ「指定管理鳥獣」化により、国の交付金枠も拡大しています（{" "}
        <Link href="/articles/designated-management-2026">
          クマが「指定管理鳥獣」に
        </Link>
        を参照）。
      </p>

      <ArticleFaq
        items={[
          {
            q: "免許を取れば、すぐにクマを駆除できますか?",
            a: "いいえ。狩猟免許 + 銃所持許可 + 狩猟者登録 + 経験積み上げ + 猟友会経由の駆除事業参加 という流れが必要で、現実的にはクマ駆除に関われるまで 1〜2 年かかります。ただし、わな猟であれば自治体の有害鳥獣捕獲事業に比較的早く参加できます。",
            aText:
              "免許のみではNG。銃所持許可・登録・経験・猟友会経由の駆除事業参加が必要。実戦は 1-2 年。わな猟は早期参加可能。",
          },
          {
            q: "費用が高すぎて諦めそうです",
            a: "わな猟免許のみなら 2-3 万円で取得可能。多くの自治体で受験料・講習料の補助があります。第一種銃猟は確かに 25-45 万円かかりますが、自治体の補助制度（秋田・長野など）を活用すれば実質負担は減らせます。まずは居住する都道府県の鳥獣担当課に相談を。",
            aText:
              "わな猟のみなら 2-3 万円。自治体補助あり。第一種銃猟は補助活用で実質負担減。県の鳥獣担当課に相談。",
          },
          {
            q: "女性でも取れますか?",
            a: "もちろん可能です。近年は女性ハンターが急増しており、複数自治体に女性専用の育成プログラムがあります。狩猟雑誌・SNS でも女性ハンターのコミュニティが形成されています。",
            aText:
              "可能。女性ハンター急増中で女性専用育成プログラムある自治体多数。コミュニティも形成。",
          },
          {
            q: "都市部に住んでいても取れますか?",
            a: "取れます。試験は都道府県単位で実施され、東京都も含めて全国どこでも受験可能です。ただし狩猟者登録は都道府県単位で、実際の狩猟・駆除事業は山間部・農村部が中心。週末に近隣県へ通うスタイルの方も多くいます。",
            aText:
              "可能。試験は都道府県単位で全国で受験可。東京も可。実猟・駆除は山間部中心で週末通いスタイルの人も多い。",
          },
          {
            q: "猟友会に入らなくてもいいですか?",
            a: "法的義務はありませんが、強く推奨です。猟友会経由で情報共有・グループ猟・駆除事業参加・経験者からの指導・狩猟者保険の団体加入などのメリットが大きく、特に新人は孤立すると安全面でも不利です。",
            aText:
              "法的義務なしだが強く推奨。情報共有・グループ猟・駆除参加・指導・保険団体加入のメリット大。新人孤立は危険。",
          },
        ]}
      />
    </ArticleShell>
  );
}
