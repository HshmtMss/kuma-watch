import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
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

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            海外のクマ事故事例には<strong>日本でも応用できる教訓</strong>が多い。
          </>,
          <>
            <strong>アラスカ・イエローストーンの装備標準化、ルーマニアの市街地対策</strong>など。
          </>,
          <>
            各国の対応を<strong>日本の対策に活かす視点</strong>を提示する。
          </>,
        ]}
      />

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
        北米はクマの研究や、クマよけスプレー・フードコンテナなどの装備の普及が進んだ地域です。
        日本のクマ対策でも、北米の知見が多く参考にされています。
      </p>
      <ul>
        <li>
          <strong>クマの種類</strong>:
          グリズリー (内陸のヒグマ)・ブラックベア (アメリカクロクマ)・ホッキョクグマの 3 種。
          グリズリーは日本のヒグマと同種 (Ursus arctos)。
        </li>
        <li>
          <strong>装備</strong>:
          国立公園などではクマよけスプレー (bear spray) の携行が強く勧められ、
          フードコンテナ (bear canister) による食料保管が義務になっている地域もあります
          (<Link href="/articles/bear-spray">スプレー</Link>、
          <Link href="/articles/bear-canister">フードコンテナ</Link>)。
        </li>
      </ul>

      <h2 id="alaska">アラスカ — グリズリーの王国</h2>
      <ul>
        <li>
          <strong>個体数</strong>:
          アラスカ州魚類野生生物局によると、ブラウンベア (ヒグマ) 約 30,000 頭、ブラックベア約 100,000 頭と推定されています。
        </li>
        <li>
          <strong>事故事例</strong>:
          2003 年、カトマイ国立公園で長年クマに近づいて撮影を続けていた男性 (ティモシー・トレッドウェル) と
          同行者がヒグマに襲われ死亡しました。野生のクマに近づきすぎることの危険を示す事例としてよく知られています。
        </li>
        <li>
          <strong>観察ルール</strong>:
          ブルックス滝などクマ観察で知られるカトマイ国立公園では、クマから 50 ヤード (約 46m) 以上離れるよう定められています。
        </li>
      </ul>

      <h2 id="yellowstone">イエローストーン国立公園</h2>
      <ul>
        <li>
          <strong>1970 年の方針転換</strong>:
          かつては公園内のゴミ捨て場でクマが餌をあさり、1931〜1969 年には年平均 48 件の人身被害が起きていました。
          1970〜71 年にゴミ捨て場を閉鎖し、クマよけゴミ箱の設置や餌やり禁止の徹底を進めました。
          ただし移行期には人とのトラブルが増え、多くのグリズリーが命を落とすという代償もありました。
        </li>
        <li>
          <strong>事故事例</strong>:
          2011 年には、トレイルで子連れの母グマに遭遇したハイカーが死亡する事故が起きています
          (<Link href="/articles/playing-dead">死んだふりは効くのか</Link>)。
        </li>
        <li>
          <strong>食料の管理</strong>:
          バックカントリーでは、食料やにおいの出るものをクマが届かないように保管することが求められます。
        </li>
        <li>
          <strong>管理体制</strong>:
          IGBC (Interagency Grizzly Bear Committee) を通じて、連邦・州などの機関がグリズリーの保全と管理を連携して進めています。
        </li>
      </ul>

      <h2 id="europe">欧州 — ルーマニアの市街地問題</h2>
      <ul>
        <li>
          <strong>ルーマニアのヒグマ個体数</strong>:
          2025 年に公表された政府の調査で約 10,700〜12,800 頭と推定され、ロシアを除く欧州で最大の個体群とされています。
        </li>
        <li>
          <strong>市街地問題</strong>:
          カルパチア山脈周辺の町や集落で、ゴミをあさるクマや人身事故が問題になっています。観光地ブラショフ周辺でも知られています。
        </li>
        <li>
          <strong>対応</strong>:
          2024 年の死亡事故を受けて駆除の上限頭数が引き上げられました。
          一方、保護団体は「駆除だけでは市街地への出没は解決しない」と指摘しており、議論が続いています。
        </li>
        <li>
          <strong>スカンジナビア (スウェーデン・ノルウェー)</strong>:
          1980 年代から続くヒグマの長期追跡研究があり、冬眠や行動圏などの知見が蓄積されています。
        </li>
      </ul>

      <h2 id="russia">ロシア・カムチャツカのヒグマ</h2>
      <ul>
        <li>
          <strong>カムチャツカのヒグマ</strong>:
          大型のヒグマが多く生息する地域として知られ、サケの遡上する川にクマが集まります。
        </li>
        <li>
          <strong>観光・狩猟</strong>:
          クマ観察ツアーのほか、外国人向けのクマ狩猟ツアーもあり、賛否があります。
        </li>
        <li>
          <strong>極東のツキノワグマ</strong>:
          ロシア極東 (沿海地方など) にはヒグマに加えてツキノワグマも生息しています。
        </li>
      </ul>

      <h2 id="lessons">日本との比較と応用できる知見</h2>
      <ul>
        <li>
          <strong>装備の標準化</strong>:
          北米のスプレー携行やフードコンテナ使用の考え方は、日本の登山・キャンプにも参考になります。
        </li>
        <li>
          <strong>人の食べ物を与えない</strong>:
          イエローストーンのゴミ捨て場閉鎖は、人の食べ物をクマに覚えさせないことの大切さを示しています。
          家庭の柿・栗・生ゴミ管理も同じ理屈で対策できます
          (<Link href="/articles/home-protection">家庭でのクマ対策</Link>)。
        </li>
        <li>
          <strong>市街地出没への政策</strong>:
          ルーマニアの議論は、市街地に出るクマへの対応を考えるうえで日本の自治体にも参考になります。
          ゴミ管理・電気柵・捕獲の組み合わせをどうするかが共通の課題です。
        </li>
      </ul>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "襲われたときの対処は海外と日本で違う?",
            a: (
              <>
                基本は同じです。走らず、クマを見ながらゆっくり離れる。突進されたらクマスプレー。驚かせた・子連れなどの防衛的な攻撃で接触が避けられなければ、うつ伏せで両手で首の後ろを守る防御姿勢をとり、つけ回す・伏せても攻撃が続くなど執拗・捕食的な攻撃なら顔や鼻を狙って反撃します。北米の国立公園局の案内も、この考え方に沿っています
                (<Link href="/articles/playing-dead">死んだふりは効くのか</Link>)。
              </>
            ),
            aText:
              "基本は同じです。走らず、クマを見ながらゆっくり離れる。突進されたらクマスプレー。防衛的な攻撃で接触が避けられなければうつ伏せで首の後ろを守る防御姿勢、執拗・捕食的な攻撃なら顔や鼻を狙って反撃します。",
          },
          {
            q: "クマよけスプレーは欧米製の方がいい?",
            a: (
              <>
                製造国ではなく性能で選びます。環境省の推奨要件 (2026 年 8 月) では、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・刺激成分 (CRC) 1〜2% 程度が目安で、容量では選びません。
                なおスプレーは飛行機への持ち込み・預け入れとも不可なので、海外では現地で入手します
                (<Link href="/articles/bear-spray">スプレー選び</Link>)。
              </>
            ),
            aText:
              "製造国ではなく性能で選びます。環境省の推奨要件では噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・刺激成分 (CRC) 1〜2% 程度が目安で、容量では選びません。飛行機への持ち込み・預け入れは不可です。",
          },
          {
            q: "海外旅行でグリズリーに会うリスクは?",
            a: (
              <>
                アラスカ・カナダ・米国西部のロッキー山脈周辺などの国立公園や森林では遭遇の可能性があります。
                訪問前に現地の公園などが出しているクマ対策の案内を読み、スプレーは現地で入手して携行してください。
                遭遇時の基本の対処は日本と同じです。
              </>
            ),
            aText:
              "アラスカ・カナダ・米国西部のロッキー山脈周辺などでは遭遇の可能性があります。訪問前に現地のクマ対策の案内を読み、スプレーは現地で入手して携行してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "北米はクマ研究と装備の普及が進んだ地域で、日本の対策でも参考にされている。",
          "アラスカ・イエローストーンでは、スプレー携行や食料の保管が重視されている。",
          "イエローストーンのゴミ捨て場閉鎖は、人の食べ物をクマに与えないことの大切さを示す。",
          "ルーマニアの市街地出没をめぐる議論は、日本の自治体にも参考になる。",
          "襲われたときの基本の対処は、海外でも日本でも同じ。",
        ]}
        footer="海外事例は単なる豆知識ではなく、日本のクマ対策の方向性を考える上で実用的な参考資料です。"
      />
    </ArticleShell>
  );
}
