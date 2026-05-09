import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("world-bears")!;

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
        <strong>結論</strong>: 北米のグリズリー・ブラックベア、欧州・ロシアのヒグマなど、
        海外のクマ事故事例には日本でも応用できる教訓が多くあります。
        アラスカ・イエローストーンの装備標準化、ルーマニアの市街地侵入対策、
        スカンジナビアの研究知見 — 各国の対応を整理して、日本の対策に活かす視点を提示します。
      </p>

      <ArticleToc
        items={[
          { id: "north-america", title: "北米のクマ事故と対策" },
          { id: "alaska", title: "アラスカ — グリズリーの王国" },
          { id: "yellowstone", title: "イエローストーン国立公園" },
          { id: "europe", title: "欧州 — ルーマニアの市街地問題" },
          { id: "russia", title: "ロシア・カムチャツカのヒグマ" },
          { id: "lessons", title: "日本との比較と応用できる知見" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="north-america">北米のクマ事故と対策</h2>
      <p>
        北米はクマ研究と装備開発のグローバル拠点です。日本の対策の多くは北米の知見をベースにしています。
      </p>
      <ul>
        <li>
          <strong>クマの種類</strong>:
          グリズリー (内陸ヒグマ)・ブラックベア (アメリカクロクマ)・ホッキョクグマの 3 系統。
          グリズリーは日本のヒグマと同種 (Ursus arctos)。
        </li>
        <li>
          <strong>事故統計</strong>:
          北米全体の人身事故は年 40〜50 件、死亡事故は数件レベル。
          観光客とハンター、ハイカーで分布。
        </li>
        <li>
          <strong>装備標準化</strong>:
          国立公園では bear spray (クマよけスプレー) と bear canister (フードコンテナ) の使用が義務化されたエリア多数。
          (<Link href="/articles/bear-spray">スプレー</Link>、
          <Link href="/articles/bear-canister">フードコンテナ</Link>)
        </li>
      </ul>

      <h2 id="alaska">アラスカ — グリズリーの王国</h2>
      <ul>
        <li>
          <strong>個体数</strong>:
          グリズリー約 30,000 頭、ブラックベア約 100,000 頭が生息。
        </li>
        <li>
          <strong>事故事例</strong>:
          2003 年のティモシー・トレッドウェル事件 (アラスカ・カトマイ国立公園で
          動物保護家がグリズリーに襲撃された有名事故) は、慣れた個体・ヒグマ・夜間という
          捕食型攻撃の特徴を示しています。
        </li>
        <li>
          <strong>装備義務</strong>:
          州管轄の公園・連邦管轄の野生地帯ともに bear canister 推奨〜義務化。
        </li>
        <li>
          <strong>観光ルール</strong>:
          ブルックスフォールズ等の観察エリアでは厳格な距離規定 (50yd / 約 45m) と引率ガイド義務。
        </li>
      </ul>

      <h2 id="yellowstone">イエローストーン国立公園</h2>
      <ul>
        <li>
          <strong>1980 年代の方針転換</strong>:
          人馴れ個体の餌付けを完全禁止し、クマの個体群と人身事故を減らした成功事例。
        </li>
        <li>
          <strong>事故事例</strong>:
          2011 年のグリズリー襲撃事件は、防衛攻撃に対する死んだふりの効果と
          捕食攻撃に対する全力抵抗の差を示す典型例として研究対象に
          (<Link href="/articles/playing-dead">死んだふりは効くのか</Link>)。
        </li>
        <li>
          <strong>装備義務</strong>:
          バックカントリーキャンプは bear canister 必須、食料は調理場所と就寝場所を 100yd (90m) 以上離す規定。
        </li>
        <li>
          <strong>クマ管理プロトコル</strong>:
          IGBC (Interagency Grizzly Bear Committee) が研究と政策を統合。
        </li>
      </ul>

      <h2 id="europe">欧州 — ルーマニアの市街地問題</h2>
      <ul>
        <li>
          <strong>ルーマニアのヒグマ個体数</strong>:
          推定 6,000〜8,000 頭で欧州最多。山間部の市街地に頻繁に侵入。
        </li>
        <li>
          <strong>市街地問題</strong>:
          ブカレスト郊外・カルパチア山脈の集落で、ゴミ漁り・住居侵入・人身事故が相次ぐ。
          観光地ブラショフ等でも問題化。
        </li>
        <li>
          <strong>対応</strong>:
          ゴミ管理の強化・電気柵の補助・ハンティング許可の段階的拡大。
          ただし国際的な保護団体との対立もあり、政策は揺れている。
        </li>
        <li>
          <strong>スカンジナビア (スウェーデン・フィンランド)</strong>:
          長期 GPS 追跡研究の知見が世界トップクラス。
          冬眠・行動圏・遺伝的多様性データが日本の研究にも応用されている。
        </li>
      </ul>

      <h2 id="russia">ロシア・カムチャツカのヒグマ</h2>
      <ul>
        <li>
          <strong>カムチャツカヒグマ</strong>:
          世界最大級のヒグマ個体群 (推定 10,000〜15,000 頭)。
          サイズはアラスカのコディアックヒグマに匹敵。
        </li>
        <li>
          <strong>事故事例</strong>:
          1996 年の地質学者襲撃事件 (女性 1 名死亡、捕食型) や
          2000 年代のサーモン漁港でのトラブル。
        </li>
        <li>
          <strong>観光・狩猟</strong>:
          外国人ハンター向けの「ベアハンティングツアー」が産業化、賛否両論。
        </li>
        <li>
          <strong>シベリアのツキノワグマ</strong>:
          ロシア極東〜東シベリアにも生息、北海道・東日本のヒグマと地理的・遺伝的につながる。
        </li>
      </ul>

      <h2 id="lessons">日本との比較と応用できる知見</h2>
      <ul>
        <li>
          <strong>装備の標準化</strong>:
          北米のスプレー・フードコンテナ義務化は、日本の登山・キャンプにも応用すべき。
        </li>
        <li>
          <strong>餌付け禁止の徹底</strong>:
          イエローストーンの 1980 年代方針転換は、日本の里山・観光地にもそのまま応用できる教訓。
          家庭の柿・栗・生ゴミ管理も同じ理屈で対策できます
          (<Link href="/articles/home-protection">家庭でのクマ対策</Link>)。
        </li>
        <li>
          <strong>長期 GPS 追跡研究</strong>:
          スカンジナビアの研究手法を、日本の地域個体群調査に活用する動きあり。
        </li>
        <li>
          <strong>市街地侵入問題への政策</strong>:
          ルーマニアの試行錯誤は、日本の自治体が今後直面する課題の前哨戦。
          ゴミ管理・電気柵・段階的駆除許可の組み合わせが鍵。
        </li>
        <li>
          <strong>観光・狩猟ツアーの倫理</strong>:
          ロシアの議論は、日本の地域経済が今後考えるべき選択肢として参考に。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "アメリカで「死んだふり vs 抵抗」の研究はある?",
            a: (
              <>
                IGBC (Interagency Grizzly Bear Committee) と各大学が長期統計を集めており、
                ヒグマの防衛攻撃には「動かない」、ブラックベアと捕食攻撃には「全力抵抗」が高い生存率を示すと結論。
                日本のツキノワグマでも基本構造は同じです
                (<Link href="/articles/playing-dead">死んだふりは効くのか</Link>)。
              </>
            ),
            aText:
              "IGBC と各大学の長期統計で、ヒグマの防衛攻撃には動かない、ブラックベアと捕食攻撃には全力抵抗が高い生存率を示すと結論されています。",
          },
          {
            q: "クマよけスプレーは欧米製の方がいい?",
            a: (
              <>
                Counter Assault・UDAP・Frontiersman など北米製は射程・容量・霧の広がりで実績があります。
                日本国内でも代理店経由で入手可能。日本製の製品は容量が小さい傾向があるので、
                山岳・キャンプ用途では北米製を選ぶ人が多いです
                (<Link href="/articles/bear-spray">スプレー選び</Link>)。
              </>
            ),
            aText:
              "Counter Assault・UDAP・Frontiersman など北米製は射程・容量で実績があり、日本国内でも代理店経由で入手可能。山岳・キャンプ用途では北米製を選ぶ人が多いです。",
          },
          {
            q: "海外旅行でグリズリーに会うリスクは?",
            a: (
              <>
                アラスカ・カナダ・米国西部・ロッキー山脈・北欧・ロシア東部の樹林帯・国立公園では遭遇可能性あり。
                訪問前に現地の bear country ガイドを必ず読み、レンタルでもよいのでスプレーを携行。
                日本の対策ノウハウも基本構造はほぼ同じなので応用できます。
              </>
            ),
            aText:
              "アラスカ・カナダ・米国西部・北欧・ロシア東部の樹林帯では遭遇可能性あり。訪問前に bear country ガイドを読み、スプレーを携行してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "北米はクマ研究と装備開発のグローバル拠点。日本の対策のベース。",
          "アラスカ・イエローストーンはスプレー + フードコンテナの装備標準化を実装。",
          "ルーマニアの市街地侵入問題は日本の自治体が今後直面する課題の前哨戦。",
          "イエローストーンの餌付け禁止は日本の家庭・観光地に応用できる教訓。",
          "スカンジナビアの長期 GPS 研究は日本の地域個体群調査の参考に。",
        ]}
        footer="海外事例は単なる豆知識ではなく、日本のクマ対策の方向性を考える上で実用的な参考資料です。"
      />
    </ArticleShell>
  );
}
