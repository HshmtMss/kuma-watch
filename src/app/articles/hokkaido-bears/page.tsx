import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("hokkaido-bears")!;

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
        <strong>結論</strong>: 北海道のヒグマは個体数 1.2 万頭、全道域に分布。
        本州のツキノワグマと比べて<strong>体格が 3〜4 倍</strong>、攻撃性も高く、対処法も異なります。
        近年は札幌・旭川など都市近郊への出没も増えており、通勤・通学・観光のいずれでも基本知識が必要です。
      </p>

      <ArticleToc
        items={[
          { id: "ezohiguma", title: "エゾヒグマとは" },
          { id: "population", title: "個体数と分布の現状" },
          { id: "urban", title: "都市近郊への出没" },
          { id: "attack-pattern", title: "ヒグマの襲撃パターン" },
          { id: "ki-spots", title: "北海道で特に注意するエリア" },
          { id: "tourist", title: "観光・登山での備え" },
          { id: "different", title: "ツキノワグマとの対処の違い" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="ezohiguma">エゾヒグマとは</h2>
      <p>
        北海道に生息するヒグマは正式には「エゾヒグマ」と呼ばれ、ロシア・サハリンのヒグマと同種です。
        日本最大の陸上哺乳類で、オス成獣の体重は 150〜400kg、体長 2.0〜2.3m に達します。
        立ち上がると 2.5m を超え、人間の身長を圧倒します。
      </p>
      <p>
        本州・四国のツキノワグマ (体重 80〜120kg) と比べて、サイズも攻撃性も「別物」と考えてください。詳細は <Link href="/articles/species-difference">ツキノワグマとヒグマの違い</Link>。
      </p>

      <h2 id="population">個体数と分布の現状</h2>
      <p>
        北海道環境局・道立総合研究機構の推計によれば、エゾヒグマの個体数は 2020 年時点で約 1.2 万頭。
        1990 年代の倍以上に増加しています。
      </p>
      <ul>
        <li>分布: 北海道全域 (人口集中地区も例外でない)</li>
        <li>密度が高い: 道東 (知床・羅臼)、道北 (天塩)、日高山脈、大雪山系</li>
        <li>密度が低めだが出没増加: 札幌郊外、旭川郊外、函館近郊</li>
        <li>人身被害: 年 5〜15 件で推移、近年は増加傾向</li>
      </ul>

      <h2 id="urban">都市近郊への出没</h2>
      <p>
        2010 年代以降、札幌・旭川・函館などの大都市近郊への出没が顕著に増えています。
      </p>
      <ul>
        <li>2021 年 6 月の札幌東区市街地出没事件 (4 名負傷) は記憶に新しい</li>
        <li>住宅街・公園・大学キャンパスでの目撃</li>
        <li>河川を伝って市街地に進入するルートが特定されている</li>
        <li>子グマを連れた母グマの市街地侵入も</li>
      </ul>
      <p>
        「都市部だから安全」とは言えない時代になっています。札幌市民でも通勤・散歩でヒグマに遭遇する可能性があります。
      </p>

      <h2 id="attack-pattern">ヒグマの襲撃パターン</h2>
      <p>
        ヒグマの襲撃には大きく 2 つのパターンがあります。
      </p>
      <ul>
        <li>
          <strong>防衛襲撃</strong>:
          子グマや餌の防御目的。最も多いパターン。「動かないフリ」が有効
        </li>
        <li>
          <strong>捕食襲撃</strong>:
          人間を食料として襲う。福岡大ワンゲル事件 (1970)、三毛別事件 (1915) などが該当。<strong>反撃必須</strong>
        </li>
      </ul>
      <p>
        判別が難しいため、初手は「動かないフリ」、それで効果がなければ反撃に切り替える判断が必要です。
        歴史的事件は <Link href="/articles/historic-incidents">過去の重大事故から学ぶ</Link> を参照。
      </p>

      <h2 id="ki-spots">北海道で特に注意するエリア</h2>
      <ul>
        <li><strong>知床半島</strong>: ヒグマ密度が世界有数。観光・トレッキングで遭遇率高い</li>
        <li><strong>大雪山系・十勝岳</strong>: 登山者の遭遇報告多数</li>
        <li><strong>日高山脈</strong>: 福岡大ワンゲル事件の現場。今もヒグマ集中エリア</li>
        <li><strong>札幌南区・西区の郊外</strong>: 河川沿いに市街地進入</li>
        <li><strong>旭川郊外・神居古潭</strong>: 山と市街地の境界</li>
        <li><strong>道東 (羅臼・標津・別海)</strong>: サケ漁の時期に活発化</li>
      </ul>

      <h2 id="tourist">観光・登山での備え</h2>
      <ul>
        <li>クマよけスプレーは登山口でレンタル or 購入 (本州から空輸不可)</li>
        <li>知床のクルーズ・トレッキングはガイド付きツアーを推奨</li>
        <li>キャンプ場での食料管理は本州以上に厳しく (<Link href="/articles/camping">キャンプ場のクマ対策</Link>)</li>
        <li>ホテル・ロッジでも生ゴミ・コンポスト管理が重要</li>
        <li>レンタカー利用時は車外駐車中の食料放置 NG</li>
      </ul>

      <h2 id="different">ツキノワグマとの対処の違い</h2>
      <p>
        本州での経験は北海道では一部しか通用しません。
      </p>
      <ul>
        <li>
          <strong>体格差で抵抗が困難</strong>:
          本州ではナイフ・ストックでの最終抵抗があり得たが、ヒグマでは体力差が大きすぎる
        </li>
        <li>
          <strong>捕食襲撃の比率が高い</strong>:
          ツキノワグマでは稀、ヒグマでは現実的なリスク
        </li>
        <li>
          <strong>「動かないフリ」が万能ではない</strong>:
          捕食襲撃なら反撃必須
        </li>
        <li>
          <strong>クマよけスプレーの重要度が極めて高い</strong>:
          本州よりも携行率を上げるべき
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "札幌に住んでいるが、ヒグマと遭う可能性はある?",
            a: (
              <>
                あります。南区・西区・手稲区の山際や河川沿いでは目撃情報が定期的に出ます。出勤前や日課の散歩時間にも注意し、早朝・夕方の薄暗い時間帯は警戒度を上げてください。
              </>
            ),
            aText:
              "あります。南区・西区・手稲区の山際や河川沿いでは目撃情報が定期的に出ます。出勤前や日課の散歩時間にも注意し、早朝・夕方の薄暗い時間帯は警戒度を上げてください。",
          },
          {
            q: "知床観光ではどのくらい警戒すべき?",
            a: (
              <>
                ヒグマ密度が世界トップクラスのエリアです。観光客向けトレッキングは原則ガイド同行で、ガイド無しでの単独登山は推奨されません。クルーズ船での海上観察は安全な選択肢です。
              </>
            ),
            aText:
              "ヒグマ密度が世界トップクラスのエリアです。観光客向けトレッキングは原則ガイド同行で、ガイド無しでの単独登山は推奨されません。クルーズ船での海上観察は安全な選択肢です。",
          },
          {
            q: "本州でのクマ対策の知識は北海道で通用する?",
            a: (
              <>
                予防策 (鈴・スプレー・出没情報確認) は基本的に通用します。ただし遭遇後の対処はツキノワグマと違う部分があり、特に「捕食襲撃の場合は反撃が必要」という点は重要な違いです。
              </>
            ),
            aText:
              "予防策 (鈴・スプレー・出没情報確認) は基本的に通用します。ただし遭遇後の対処はツキノワグマと違う部分があり、特に捕食襲撃の場合は反撃が必要という点は重要な違いです。",
          },
          {
            q: "ヒグマの個体数は今後どうなる?",
            a: (
              <>
                現状の管理 (狩猟・捕獲) を続けても、当面は緩やかな増加が続くと予測されています。生息環境の改善・人里との棲み分けの徹底が重要で、地域住民・観光客双方の意識改革が必要です。
              </>
            ),
            aText:
              "現状の管理 (狩猟・捕獲) を続けても、当面は緩やかな増加が続くと予測されています。生息環境の改善・人里との棲み分けの徹底が重要で、地域住民・観光客双方の意識改革が必要です。",
          },
        ]}
      />
    </ArticleShell>
  );
}
