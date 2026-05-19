import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("inbound-tourism")!;

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
        <strong>結論</strong>: 訪日外国人観光客のクマ遭遇リスクは <strong>増加傾向</strong>です。
        高尾山・上高地・知床・熊野古道・白川郷など人気観光地にもクマが生息していますが、
        多言語の注意喚起・装備案内・遭遇時対応の情報提供が追いついていません。
        本記事は観光業・宿泊施設・ガイド事業者・自治体が提供すべき情報を整理し、
        日本人向けに「外国人客にどう伝えるか」をまとめます。
      </p>

      <ArticleToc
        items={[
          { id: "context", title: "なぜ今、インバウンド対策が必要か" },
          { id: "hotspots", title: "外国人観光客がいるクマ生息域" },
          { id: "gap", title: "情報提供の現状ギャップ" },
          { id: "guideline", title: "観光業・宿泊施設・ガイドが提供すべき情報" },
          { id: "languages", title: "多言語化の優先順位" },
          { id: "messaging", title: "外国人向けの効果的な伝え方" },
          { id: "case", title: "海外（北米・欧州）の参考例" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="context">なぜ今、インバウンド対策が必要か</h2>
      <p>
        2024 年の訪日外国人数は約 3,500 万人と過去最高を更新し、
        2030 年には 6,000 万人を目指す観光戦略が進んでいます。
        定番の都市観光だけでなく、<strong>「日本の自然」「日本の田舎」</strong>を体験する
        観光客が増えており、これらの目的地の多くはクマ生息域と重なります。
      </p>
      <ul>
        <li>登山・トレッキング目的の訪日客が増加</li>
        <li>地方創生・サスティナブルツーリズム促進で、これまで観光客が少なかった山間部に誘致</li>
        <li>パウダースノー目的の冬季観光（春先のクマ覚醒期に重なる）</li>
        <li>Studio Ghibli の世界観を求めて訪れる「里山ツーリズム」</li>
        <li>日本の「安全」イメージで装備を持たずに山に入る観光客が多い</li>
      </ul>
      <p>
        実際、近年は登山中の外国人観光客がクマと遭遇する報道も増えています。
        多言語化された注意喚起・装備案内は <strong>もはや「あれば良い」ではなく「必須」</strong>です。
      </p>

      <h2 id="hotspots">外国人観光客がいるクマ生息域</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">観光地</th>
              <th className="px-3 py-2 text-left">エリア</th>
              <th className="px-3 py-2 text-left">クマ種</th>
              <th className="px-3 py-2 text-left">遭遇リスク</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">高尾山</td>
              <td className="px-3 py-2">東京都八王子市</td>
              <td className="px-3 py-2">ツキノワグマ</td>
              <td className="px-3 py-2 text-amber-700">中</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">上高地</td>
              <td className="px-3 py-2">長野県松本市</td>
              <td className="px-3 py-2">ツキノワグマ</td>
              <td className="px-3 py-2 text-amber-700">中</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">知床</td>
              <td className="px-3 py-2">北海道斜里町</td>
              <td className="px-3 py-2">ヒグマ</td>
              <td className="px-3 py-2 text-red-700">高</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">熊野古道</td>
              <td className="px-3 py-2">和歌山・三重</td>
              <td className="px-3 py-2">ツキノワグマ</td>
              <td className="px-3 py-2 text-amber-700">中</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">白川郷・五箇山</td>
              <td className="px-3 py-2">岐阜・富山</td>
              <td className="px-3 py-2">ツキノワグマ</td>
              <td className="px-3 py-2 text-amber-700">中</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">屋久島</td>
              <td className="px-3 py-2">鹿児島県</td>
              <td className="px-3 py-2">なし</td>
              <td className="px-3 py-2 text-green-700">低（クマ生息なし）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">立山・剱岳</td>
              <td className="px-3 py-2">富山県</td>
              <td className="px-3 py-2">ツキノワグマ</td>
              <td className="px-3 py-2 text-amber-700">中〜高</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">日光・奥日光</td>
              <td className="px-3 py-2">栃木県</td>
              <td className="px-3 py-2">ツキノワグマ</td>
              <td className="px-3 py-2 text-amber-700">中</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">大雪山・利尻</td>
              <td className="px-3 py-2">北海道</td>
              <td className="px-3 py-2">ヒグマ</td>
              <td className="px-3 py-2 text-red-700">高</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        観光地別の出没傾向は{" "}
        <Link href="/spot">観光地ページ</Link>
        で個別に確認できます。
      </p>

      <h2 id="gap">情報提供の現状ギャップ</h2>
      <p>
        多くの観光地でクマ注意喚起は <strong>日本語のみ</strong>です。
        英語・中国語・韓国語の表示があっても「BEAR WARNING」程度の簡単な看板で、
        具体的な対処法・装備案内・通報先までは案内されていないのが現状です。
      </p>
      <h3>現状の主な問題</h3>
      <ul>
        <li>多言語注意喚起の不足（特に登山口・トレイルヘッド）</li>
        <li>クマスプレー・鈴の購入場所・使用法の案内不足</li>
        <li>110/119/自治体専用窓口の多言語対応不足</li>
        <li>宿泊施設・ツアー会社の事前説明不足</li>
        <li>「日本は安全」イメージで装備を持たない傾向</li>
        <li>遭遇時の対応（プレイデッド・スプレー）が国・文化で異なる認識</li>
      </ul>

      <h2 id="guideline">観光業・宿泊施設・ガイドが提供すべき情報</h2>
      <h3>宿泊施設（旅館・ホテル・民泊）</h3>
      <ul>
        <li>多言語でのクマ注意喚起（チェックイン時の説明）</li>
        <li>近隣登山口・ハイキングルートのクマ出没状況</li>
        <li>クマ鈴の貸出・販売（簡単な装備）</li>
        <li>夜間・早朝の散歩自粛の案内</li>
        <li>ゴミ・食べ残しの管理方法</li>
        <li>緊急時の連絡先（多言語）</li>
      </ul>
      <h3>ツアー会社・登山ガイド</h3>
      <ul>
        <li>事前ブリーフィングでクマリスクを明示</li>
        <li>ガイドがクマスプレー携帯</li>
        <li>複数人グループでの行動推奨</li>
        <li>遭遇時の対応手順を多言語で配布</li>
        <li>クマ出没情報の毎日チェック</li>
      </ul>
      <h3>自治体・観光協会</h3>
      <ul>
        <li>多言語版クマ対策パンフレット・看板</li>
        <li>観光案内所での装備案内</li>
        <li>多言語ウェブサイトでのリアルタイム情報</li>
        <li>ガイドツアーへの補助（公式ガイド同行を促進）</li>
      </ul>

      <h2 id="languages">多言語化の優先順位</h2>
      <p>
        全言語を同時に整備するのは困難です。訪日客の出身国比率と緊急性を考慮した
        優先順位は以下の通りです。
      </p>
      <ol>
        <li>
          <strong>英語</strong> — 国際語、欧米・アジア全域でカバー
        </li>
        <li>
          <strong>中国語（簡体字・繁体字）</strong> — 訪日客最多
        </li>
        <li>
          <strong>韓国語</strong> — 訪日客 2 位、登山客も多い
        </li>
        <li>
          <strong>ベトナム語・タイ語</strong> — 東南アジア観光客の増加
        </li>
        <li>
          <strong>フランス語・ドイツ語・スペイン語</strong> — 欧州観光客
        </li>
      </ol>
      <p>
        英語版は最優先で、その他言語は QR コード経由で各国語版にリンクする
        多言語ハブを 1 つ作るのが効率的です。
      </p>

      <h2 id="messaging">外国人向けの効果的な伝え方</h2>
      <p>
        単に翻訳するだけでなく、<strong>文化的背景の違い</strong>を考慮することが重要です。
      </p>
      <h3>日本人向けと違うポイント</h3>
      <ul>
        <li>
          <strong>「クマがいる」ことを驚かない国の人もいる</strong> — 北米・欧州はクマと共存する文化があり、過度に怖がらない人も
        </li>
        <li>
          <strong>逆に「日本にクマがいる」事自体を知らない人も</strong> — アジア・オセアニアでは知識ゼロの場合も
        </li>
        <li>
          <strong>遭遇時対応の常識が国で異なる</strong> — 北米のヒグマ対応（プレイデッド）と日本のツキノワグマ対応（離れる）は同じではない
        </li>
        <li>
          <strong>クマスプレーは多くの国で銃刀法的に規制対象</strong> — 海外では入手・携帯ルールが日本と異なる
        </li>
      </ul>
      <h3>伝えるべき重要メッセージ</h3>
      <ol>
        <li>「日本にもクマがいます（種類）」</li>
        <li>「特に夕方〜早朝・秋に注意」</li>
        <li>「装備リスト：鈴・ホーン・スプレー」</li>
        <li>「遭遇時の行動：走らない・後退する・大きく見せる」</li>
        <li>「攻撃された場合の対応（種別）」</li>
        <li>「緊急連絡先：110（警察）・119（救急）」</li>
        <li>「目撃情報は宿泊施設・自治体に報告」</li>
      </ol>

      <h2 id="case">海外（北米・欧州）の参考例</h2>
      <h3>米国国立公園局（NPS）</h3>
      <p>
        Yellowstone・Yosemite・Grand Teton 等のクマ生息域国立公園は、
        多言語の <strong>「Bear Safety」</strong>パンフレットを完備し、
        入園時に必ず手渡しで配布されています。
      </p>
      <h3>カナダ・パークス・カナダ</h3>
      <p>
        Banff・Jasper 等の山岳国立公園では、レンタカー会社で「Bear Aware」
        パンフレットが配布され、ベアスプレーのレンタル制度もあります。
      </p>
      <h3>欧州（フィンランド・スウェーデン）</h3>
      <p>
        ツーリストインフォメーション・国立公園で多言語版安全ガイドを配布。
        商用ガイドツアーには専門訓練を義務化している国もあります。
      </p>
      <p>
        これらの取り組みは、日本のインバウンド観光地でも段階的に導入する価値があります。
      </p>

      <ArticleFaq
        items={[
          {
            q: "観光業者として、何から始めればいいですか?",
            a: "まずは英語版のクマ注意喚起から。1 枚の A4 サイズで「日本にもクマがいる」「装備」「遭遇時対応」「緊急連絡」をまとめてチェックイン時に手渡せば、最低限の責任は果たせます。中国語・韓国語版は QR コード経由でリンクするのが効率的。",
            aText:
              "英語版 A4 注意喚起から。クマの存在・装備・遭遇時対応・緊急連絡をまとめてチェックインで手渡し。中国語・韓国語は QR コード経由。",
          },
          {
            q: "ガイドツアーでクマスプレーをガイドが携帯するべき?",
            a: "強く推奨。ガイドは複数の参加者の安全を担うため、最低限クマスプレー（450g）の携帯が必要です。同時に使用法の研修も必須で、空撃ち訓練を定期的に実施することが望ましいです。",
            aText:
              "強く推奨。ガイドは複数参加者の安全を担うため最低 450g スプレー携帯。使用法研修必須、空撃ち訓練も定期実施。",
          },
          {
            q: "外国人観光客に「日本は安全」と伝えすぎていませんか?",
            a: "都市部の治安については正しい一方、山岳・自然観光は別のリスクがあります。「Japan is safe in cities, but the mountains have wildlife including bears」と明確に伝えることが、結果的に観光業の信頼にもつながります。",
            aText:
              "都市部の治安は正しいが山岳は別のリスク。「都市は安全、山には野生動物（クマ含む）」と明確に伝える方が観光業の信頼につながる。",
          },
          {
            q: "クマスプレーは外国人観光客に売っていいですか?",
            a: "国内では一般販売されており購入可能。ただし航空機・新幹線への持ち込み制限があるため、観光客が帰国時に困らないよう「使い切り or 宿泊施設に置いていく」を案内する必要があります。詳細は《クマスプレーの持ち運び》を参照。",
            aText:
              "国内で購入可能。ただし航空機・新幹線持込制限あり。帰国時に困らないよう「使い切り or 宿に置く」を案内。",
          },
          {
            q: "民泊運営でクマ対策はどこまで責任があるのか?",
            a: "法的義務は限定的ですが、ホスト責任として「クマ生息域である旨の事前告知」「緊急連絡先の提示」「ゴミ・食料管理ルール」は最低限必要です。Airbnb 等のリスティング説明文に明記するだけでもトラブル予防になります。",
            aText:
              "法的義務は限定的だがホスト責任として事前告知・緊急連絡先・ゴミ管理ルールは最低限必要。Airbnb等のリスティングに明記でトラブル予防。",
          },
        ]}
      />
    </ArticleShell>
  );
}
