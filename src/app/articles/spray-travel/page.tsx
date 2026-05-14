import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("spray-travel")!;

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
        <strong>結論</strong>: クマよけスプレーは
        <strong>飛行機への持ち込み・預け入れともに原則禁止</strong> (航空法・圧縮ガス扱い)。
        <strong>新幹線・JR 在来線は持ち込み可</strong>だが、容量・噴射圧の規定を超えると断られることも。
        遠征時は<strong>現地のアウトドアショップ・登山口で購入</strong>するか、
        <strong>陸送 (宅配便) で事前送付</strong>するのが現実的です。
      </p>

      <ArticleToc
        items={[
          { id: "why-strict", title: "なぜスプレーは持ち運びに厳しいのか" },
          { id: "airline", title: "飛行機 — 持ち込み・預け入れともに NG" },
          { id: "shinkansen", title: "新幹線・JR 在来線 — 持ち込み可" },
          { id: "bus-taxi", title: "高速バス・タクシー・レンタカー" },
          { id: "ferry", title: "フェリー" },
          { id: "ship-mail", title: "宅配便で送る方法" },
          { id: "local", title: "現地調達のコツ" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-strict">なぜスプレーは持ち運びに厳しいのか</h2>
      <p>
        クマよけスプレーは <strong>OC スプレー (オレオレジン・カプシカム)</strong> を高圧ガスで噴射する装置で、
        次の 2 つの理由から多くの公共交通機関で規制対象になります。
      </p>
      <ul>
        <li>
          <strong>圧縮ガス</strong> — 容器内が高圧。気圧・温度変化で破裂・噴射の危険があるため、
          航空法では「危険物」に分類される。
        </li>
        <li>
          <strong>催涙性</strong> — 暴発・誤噴射した場合、車内で人を行動不能にさせる威力を持つ。
          鉄道・バス各社は防犯上もリスクを警戒。
        </li>
      </ul>
      <p>
        市販のクマよけスプレーは威力が強い (有効射程 8〜10m、唐辛子成分 2% 以上) ため、
        日常用の防犯スプレーよりさらに規制が厳しくなる傾向です。
      </p>

      <h2 id="airline">飛行機 — 持ち込み・預け入れともに NG</h2>
      <p>
        ANA・JAL・LCC を含むすべての国内航空会社で、クマよけスプレー (OC スプレー) は
        <strong>機内持ち込み・受託手荷物 (預け入れ) ともに不可</strong>です。
        航空法の危険物規定で「圧縮ガスを含むエアロゾル類」として運送禁止に該当します。
      </p>
      <p>
        護身用スプレーであっても、唐辛子成分・催涙成分を含むものは同じ扱い。
        空港の保安検査で発見されると没収のうえ、悪意があると判断された場合は警察に通報されることもあります。
      </p>
      <p>
        国際線も同様に NG。海外で買ったクマよけスプレーを日本へ持ち込む際にも空港で没収されるので、
        北米遠征から帰国するときは現地で処分してから帰るのが基本です。
      </p>

      <h2 id="shinkansen">新幹線・JR 在来線 — 持ち込み可</h2>
      <p>
        新幹線・JR 在来線・私鉄・地下鉄は、いずれも<strong>持ち込み可</strong>です。
        ただし JR 各社の「旅客営業規則」では次の制限があります。
      </p>
      <ul>
        <li>持ち込み総量は<strong>2kg まで</strong></li>
        <li>1 容器あたり <strong>500g (約 500ml) まで</strong></li>
        <li>噴霧装置の<strong>暴発を防ぐ安全装置 (セーフティクリップ等) が必要</strong></li>
      </ul>
      <p>
        市販のクマよけスプレー (UDAP, Counter Assault, Frontiersman など) は容量 225〜400g
        が一般的なので、通常 1〜2 本までであれば規定内に収まります。
      </p>
      <p>
        万一のトラブル回避のため:
      </p>
      <ul>
        <li>専用ホルスター・密閉ケースに入れて目立たない形で運ぶ</li>
        <li>誤噴射しないよう、安全クリップは必ず装着</li>
        <li>気温が高い真夏は車内放置を避ける (中央スルー席に持ち込み)</li>
      </ul>

      <h2 id="bus-taxi">高速バス・タクシー・レンタカー</h2>
      <p>
        高速バスは事業者により異なります。JR バスや WILLER などの主要事業者は
        「危険物・引火物の持ち込み禁止」のため、クマよけスプレーは持ち込み不可とされるケースが多いです。
        利用前に各社の利用案内・問い合わせで確認してください。
      </p>
      <p>
        タクシー・レンタカーは原則持ち込み可ですが、運転手・貸主への一言と
        「セーフティクリップ装着」「直射日光が当たらない位置」が必須マナーです。
      </p>

      <h2 id="ferry">フェリー</h2>
      <p>
        国内フェリー (新日本海フェリー・太平洋フェリー・東日本フェリー等) は、
        客室持ち込み・車両搭載いずれも可能なケースが多いです。
        ただし「<strong>危険物届出書</strong>」が必要な事業者・航路もあるので、予約時に確認を。
        車両搭載の場合、トランクへの収納が条件になることがあります。
      </p>

      <h2 id="ship-mail">宅配便で送る方法</h2>
      <p>
        遠征先・登山口の山小屋・宿泊先へ事前に宅配便で送るのが、
        最も確実で安全な方法です。
      </p>
      <ul>
        <li>
          <strong>陸送限定</strong>: ヤマト運輸・佐川急便・日本郵便いずれも陸送 (トラック輸送) は対応。
          航空便 (沖縄離島など航空輸送が必須の地域) は NG。
        </li>
        <li>
          <strong>申告必須</strong>: 受付時に「クマよけスプレー (圧縮ガス含む) 1 本」と申告する。
          隠して送ると違法 (運送法違反) になる場合あり。
        </li>
        <li>
          <strong>商品ラベル明記</strong>: 「クマよけスプレー / 動物撃退用 / 圧縮ガス含む」など明記された
          正規メーカー品はスムーズ。自家詰め替えは原則 NG。
        </li>
      </ul>
      <p>
        登山シーズンの山小屋宛発送は混み合うので、入山予定の 1 週間前には到着するよう手配を。
      </p>

      <h2 id="local">現地調達のコツ</h2>
      <p>
        飛行機での遠征 (北海道・東北の登山等) では、現地調達が最もスムーズです。
      </p>
      <ul>
        <li>札幌・旭川・盛岡・仙台などの<strong>大手アウトドアショップ</strong> (好日山荘・モンベル・ICI・石井スポーツ) で取り扱い</li>
        <li>登山口の<strong>ビジターセンター・山小屋・観光案内所</strong>でレンタル・販売がある場合も</li>
        <li>北海道は ヒグマ対策スプレー (大型用・8m 噴射) の在庫が比較的多い</li>
      </ul>
      <p>
        ピークシーズンは品薄になることがあるので、宿泊予約時に取り扱い有無を確認しておくと安心です。
      </p>

      <ArticleFaq
        items={[
          {
            q: "国内で買ったクマよけスプレーを米国・カナダの遠征に持って行ける？",
            a: "出国時の航空便で持ち込み NG。現地調達が標準。ナショナルパーク (Yellowstone, Glacier 等) のビジターセンターで購入できます。",
            aText: "出国時の航空便で持ち込み NG。現地調達が標準。ナショナルパーク (Yellowstone, Glacier 等) のビジターセンターで購入できます。",
          },
          {
            q: "使用期限切れのスプレーを処分するには？",
            a: "中身を屋外 (風下に人がいない場所) で空打ちして空にしてから自治体の不燃ゴミ・ガス缶として出す。空打ち時は催涙性があるため必ず屋外で。",
            aText: "中身を屋外 (風下に人がいない場所) で空打ちして空にしてから自治体の不燃ゴミ・ガス缶として出す。空打ち時は催涙性があるため必ず屋外で。",
          },
          {
            q: "ホテル・旅館に持ち込む場合、フロントに預けるべき？",
            a: "施設のルールに従うこと。客室の冷蔵庫など低温で保管できる場所が理想。直射日光が当たる窓際は避ける。",
            aText: "施設のルールに従うこと。客室の冷蔵庫など低温で保管できる場所が理想。直射日光が当たる窓際は避ける。",
          },
          {
            q: "釣り場・キャンプ場で借りられないの？",
            a: "登山口・キャンプ場でレンタルを提供しているケースが増えています (1 泊 500〜1,000 円程度)。事前に施設に確認すると確実。",
            aText: "登山口・キャンプ場でレンタルを提供しているケースが増えています (1 泊 500〜1,000 円程度)。事前に施設に確認すると確実。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-spray">クマよけスプレーの効果と使い方</Link> /{" "}
        <Link href="/articles/bear-bell">クマ鈴は効くのか</Link> /{" "}
        <Link href="/articles/camping">キャンプ場でのクマ対策</Link>
      </p>
    </ArticleShell>
  );
}
