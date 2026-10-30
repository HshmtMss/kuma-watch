import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
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
        <strong>結論</strong>: 訪日外国人観光客がクマの生息域を訪れる機会は <strong>増えています</strong>。
        高尾山・上高地・知床・熊野古道・白川郷など人気観光地にもクマが生息していますが、
        多言語の注意喚起・装備案内・遭遇時対応の情報提供は、まだ十分とはいえません。
        本記事は観光業・宿泊施設・ガイド事業者・自治体が提供すべき情報を整理し、
        日本人向けに「外国人客にどう伝えるか」をまとめます。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            訪日客が<strong>クマの生息域を訪れる機会が増加</strong>。高尾山・上高地・知床など人気観光地にもクマは生息する。
          </>,
          <>
            <strong>多言語の注意喚起・装備案内・遭遇時対応</strong>の情報提供はまだ十分とはいえない。
          </>,
          <>
            観光業・宿泊・ガイド・自治体が<strong>「外国人客にどう伝えるか」</strong>が課題。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "context", title: "なぜ今、インバウンド対策が必要か" },
          { id: "hotspots", title: "外国人観光客がいるクマ生息域" },
          { id: "gap", title: "情報提供の現状ギャップ" },
          { id: "guideline", title: "観光業・宿泊施設・ガイドが提供すべき情報" },
          { id: "languages", title: "多言語化の優先順位" },
          { id: "messaging", title: "外国人向けの効果的な伝え方" },
          { id: "case", title: "海外（北米）の参考例" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="context">なぜ今、インバウンド対策が必要か</h2>
      <p>
        日本政府観光局（JNTO）によると、訪日外国人数は 2024 年に約 3,687 万人、2025 年に約 4,268 万人と過去最高を更新し、
        2030 年には 6,000 万人を目指す観光戦略が進んでいます。
        定番の都市観光だけでなく、<strong>「日本の自然」「日本の田舎」</strong>を体験する
        観光客が増えており、これらの目的地の多くはクマ生息域と重なります。
      </p>
      <ul>
        <li>登山・トレッキング目的の訪日客が増加</li>
        <li>地方創生・サスティナブルツーリズム促進で、これまで観光客が少なかった山間部に誘致</li>
        <li>パウダースノー目的の冬季観光（春先のクマ覚醒期に重なる）</li>
        <li>日本の「安全」イメージから、装備を持たずに山に入る観光客もいる</li>
      </ul>
      <p>
        2025 年 10 月には、白川郷で外国人観光客がクマにひっかかれてけがをしたと報じられました。
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
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">高尾山</td>
              <td className="px-3 py-2">東京都八王子市</td>
              <td className="px-3 py-2">ツキノワグマ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">上高地</td>
              <td className="px-3 py-2">長野県松本市</td>
              <td className="px-3 py-2">ツキノワグマ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">知床</td>
              <td className="px-3 py-2">北海道斜里町</td>
              <td className="px-3 py-2">ヒグマ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">熊野古道</td>
              <td className="px-3 py-2">和歌山・三重</td>
              <td className="px-3 py-2">ツキノワグマ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">白川郷・五箇山</td>
              <td className="px-3 py-2">岐阜・富山</td>
              <td className="px-3 py-2">ツキノワグマ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">屋久島</td>
              <td className="px-3 py-2">鹿児島県</td>
              <td className="px-3 py-2">なし</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">立山・剱岳</td>
              <td className="px-3 py-2">富山県</td>
              <td className="px-3 py-2">ツキノワグマ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">日光・奥日光</td>
              <td className="px-3 py-2">栃木県</td>
              <td className="px-3 py-2">ツキノワグマ</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">大雪山</td>
              <td className="px-3 py-2">北海道</td>
              <td className="px-3 py-2">ヒグマ</td>
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
        クマの注意喚起が <strong>日本語のみ</strong>の観光地は少なくありません。
        英語・中国語・韓国語の表示があっても「BEAR WARNING」程度の簡単な看板で、
        具体的な対処法・装備案内・通報先までは案内されていない場所もあります。
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
          <strong>中国語（簡体字・繁体字）</strong> — 中国・台湾・香港からの訪日客が多い
        </li>
        <li>
          <strong>韓国語</strong> — 2024 年の国・地域別訪日客数で 1 位
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
          <strong>教わってきた対処法が国で異なることがある</strong> — 日本ではツキノワグマでもヒグマでも、走らず・背を向けず、クマを見ながらゆっくり離れるのが基本と伝える
        </li>
        <li>
          <strong>クマスプレーの扱いは国によって異なる</strong> — 所持や持ち込みが規制されている国もあり、日本のルールとは違う
        </li>
      </ul>
      <h3>伝えるべき重要メッセージ</h3>
      <ol>
        <li>「日本にもクマがいます（種類）」</li>
        <li>「特に明け方・夕方、秋に注意」</li>
        <li>「装備リスト：鈴・ホーン・スプレー」</li>
        <li>「遭遇時の行動：走らない・背を向けない・クマを見ながらゆっくり離れる」</li>
        <li>「攻撃された場合の対応（種別）」</li>
        <li>「緊急連絡先：110（警察）・119（救急）」</li>
        <li>「目撃情報は宿泊施設・自治体に報告」</li>
      </ol>

      <h2 id="case">海外（北米）の参考例</h2>
      <h3>米国国立公園局（NPS）</h3>
      <p>
        Yellowstone・Yosemite・Grand Teton 等のクマ生息域の国立公園は、
        <strong>「Bear Safety」</strong>として、クマとの遭遇を避ける方法や遭遇時の対応を
        公式サイトや園内の案内で発信しています。
      </p>
      <h3>カナダ・パークス・カナダ</h3>
      <p>
        Banff・Jasper 等の山岳国立公園でも、公式サイトなどでクマへの注意を発信しており、
        Banff などではベアスプレーのレンタルサービスもあります。
      </p>
      <p>
        これらの取り組みは、日本のインバウンド観光地でも段階的に導入する価値があります。
      </p>

      <ArticleFaq
        items={[
          {
            q: "観光業者として、何から始めればいいですか?",
            a: "まずは英語版のクマ注意喚起から。1 枚の A4 サイズで「日本にもクマがいる」「装備」「遭遇時対応」「緊急連絡」をまとめてチェックイン時に手渡すのが第一歩になります。中国語・韓国語版は QR コード経由でリンクするのが効率的。",
            aText:
              "英語版 A4 注意喚起から。クマの存在・装備・遭遇時対応・緊急連絡をまとめてチェックインで手渡し。中国語・韓国語は QR コード経由。",
          },
          {
            q: "ガイドツアーでクマスプレーをガイドが携帯するべき?",
            a: "強く推奨。ガイドは複数の参加者の安全を担うため、クマスプレーの携帯が望ましいです。容量ではなく、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上（環境省の推奨要件）を目安に選びます。使用法の研修も必須で、練習用（無害）スプレーで取り出しと構え方を練習しておきましょう。",
            aText:
              "強く推奨。容量ではなく噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上を目安に選ぶ。使用法研修は必須で、練習用スプレーで取り出しと構えを練習する。",
          },
          {
            q: "外国人観光客に「日本は安全」と伝えすぎていませんか?",
            a: "都市部の治安については正しい一方、山岳・自然観光は別のリスクがあります。「Japan is safe in cities, but the mountains have wildlife including bears」と明確に伝えることが、結果的に観光業の信頼にもつながります。",
            aText:
              "都市部の治安は正しいが山岳は別のリスク。「都市は安全、山には野生動物（クマ含む）」と明確に伝える方が観光業の信頼につながる。",
          },
          {
            q: "クマスプレーは外国人観光客に売っていいですか?",
            a: "国内では一般販売されており購入可能。ただし飛行機は機内持ち込み・預け入れとも不可で、鉄道でも持ち込みに制限がある場合があります。帰国時に困らないよう、宿泊施設などで処分・回収する方法を案内しておきましょう。人に向けないこと、山へ行く目的なく街中で持ち歩くと軽犯罪法に触れるおそれがあることも伝えてください。",
            aText:
              "国内で購入可能。飛行機は持ち込み・預け入れとも不可、鉄道にも制限あり。帰国前の処分方法を案内し、人に向けない・街中で理由なく持ち歩かないことも伝える。",
          },
          {
            q: "民泊運営でクマ対策はどこまで責任があるのか?",
            a: "法的義務は限定的ですが、ホスト責任として「クマ生息域である旨の事前告知」「緊急連絡先の提示」「ゴミ・食料管理ルール」は最低限必要です。Airbnb 等のリスティング説明文に明記するだけでもトラブル予防になります。",
            aText:
              "法的義務は限定的だがホスト責任として事前告知・緊急連絡先・ゴミ管理ルールは最低限必要。Airbnb等のリスティングに明記でトラブル予防。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
