import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("beech-mast-bear")!;

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
        <strong>結論</strong>: クマの大量出没年は、ほぼ例外なく
        <strong>ブナ・ミズナラの堅果不作</strong>と重なります。
        ブナは数年に 1 度しか豊作にならず、しかも東北・北陸など広域で同調する性質があるため、
        凶作年は数県のクマがいっせいに人里に下りるという仕組みです。
        2026 年の秋を見るうえでも、夏のブナ結実予測が最重要のシグナルになります。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            クマの大量出没年は、ほぼ例外なく<strong>ブナ・ミズナラの堅果不作</strong>と重なる。
          </>,
          <>
            ブナは<strong>数年に1度しか豊作にならず、広域で同調</strong>して凶作になる。
          </>,
          <>
            <strong>夏のブナ結実予測</strong>が、秋の出没を読む最重要シグナル。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "why-beech", title: "なぜブナがクマにとって重要か" },
          { id: "masting", title: "ブナの結実周期 — 数年に1度の豊作" },
          { id: "famine", title: "凶作年に山で何が起きるか" },
          { id: "history", title: "過去の凶作年と出没件数の関係" },
          { id: "forecast", title: "結実予測情報の見方" },
          { id: "regions", title: "ブナ依存度の高い地域" },
          { id: "what-to-do", title: "凶作報道を見たら何をすべきか" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-beech">なぜブナがクマにとって重要か</h2>
      <p>
        ブナ（Fagus crenata）とミズナラ（Quercus crispula）は、本州ツキノワグマ域の
        <strong>秋の主食</strong>です。両樹種のドングリ（堅果）は高カロリーで、
        100g あたり 380〜420 kcal、脂質含有率も高く、
        冬眠前に脂肪を蓄えるハイパーフェイジア期のクマに最適な食物です。
      </p>
      <ul>
        <li>
          <strong>カロリー密度が高い</strong> — 同じ重量で野草・果実の数倍の脂肪蓄積効率
        </li>
        <li>
          <strong>森床に大量に落ちる</strong> — 1 ヶ所で長時間効率よく採食可能
        </li>
        <li>
          <strong>木に登れば直接食べられる</strong> — クマは樹上採食も得意
        </li>
        <li>
          <strong>9〜11 月に集中して結実</strong> — ハイパーフェイジア期と完全に一致
        </li>
      </ul>
      <p>
        北海道のヒグマは同じ温帯のブナ依存ではなく、
        サケ・シカ・ヤマブドウ・ハイマツの実など別の食物体系を持ちます。
        本州ツキノワグマ問題は本質的に「ブナ問題」と言えます。
      </p>

      <h2 id="masting">ブナの結実周期 — 数年に1度の豊作</h2>
      <p>
        ブナは <strong>マスティング（masting）</strong>と呼ばれる結実戦略を取ります。
        毎年安定して結実するのではなく、数年に 1 度だけ集中的に大豊作になり、
        それ以外の年は凶作・不作に近い状態が続くという性質です。
      </p>
      <ul>
        <li>
          <strong>豊作年</strong>: 1 本のブナで数万〜数十万個の堅果を生産
        </li>
        <li>
          <strong>凶作年</strong>: ほぼ皆無、または地域内で散発的にしか結実しない
        </li>
        <li>
          <strong>周期</strong>: 3〜7 年に 1 度の豊作。地域差あり
        </li>
        <li>
          <strong>同調性</strong>: 数県にまたがる広域で豊凶が同調する（風媒花の性質と気象条件による）
        </li>
      </ul>
      <p>
        マスティングの進化的意味は「捕食者飽和戦略」と説明されています。
        毎年安定して結実すると、種子を食べる動物（クマ・ネズミ・カケス等）の個体数が一定に保たれ、
        全種子が食べ尽くされます。数年に 1 度の豊作を繰り返すことで、
        豊作年は食べ手より種子のほうが多くなり、一部の種子が発芽に至る — という戦略です。
      </p>

      <h2 id="famine">凶作年に山で何が起きるか</h2>
      <p>
        ブナが凶作の年、山中のクマは深刻なカロリー不足に直面します。
      </p>
      <ol>
        <li>
          <strong>越冬に必要な脂肪を蓄えられない</strong>
          — 通常、クマは秋に体重を 30〜50% 増やすが、これが達成できない
        </li>
        <li>
          <strong>母グマは胎子を維持できなくなる</strong>
          — 妊娠中のメスは胎子を再吸収する、あるいは冬眠中に死亡する個体も
        </li>
        <li>
          <strong>仔グマの生存率が下がる</strong>
          — 母乳の栄養価が低下し、当歳仔の越冬死亡率が上昇
        </li>
        <li>
          <strong>より広い範囲で餌を探す</strong>
          — 行動圏が拡大し、通常は人里に下りない個体まで里に近づく
        </li>
        <li>
          <strong>柿・栗・養蜂・廃棄食品が代替資源に</strong>
          — 人里の餌資源を求めて市街地・住宅地に進出
        </li>
      </ol>
      <p>
        これがクマ大量出没年の基本的なメカニズムです。
        ブナ凶作 → 山で餌がない → 人里に降りる → 人とクマの遭遇増加 → 人身被害増加、
        という連鎖が広域で同時発生します。
      </p>

      <h2 id="history">過去の凶作年と出没件数の関係</h2>
      <p>
        KumaWatch が集計した近年の出没データを、各県のブナ結実状況と並べると、
        凶作年と大量出没年の一致がはっきりわかります。
      </p>
      <ul>
        <li>
          <strong>2023 年</strong>: 東北の一部で凶作 → 全国 7,831 件、秋に集中（59.9%）
        </li>
        <li>
          <strong>2024 年</strong>: ブナ並作〜豊作の地域多し → 全国 7,423 件、
          秋の比率は 19.8% にとどまる
        </li>
        <li>
          <strong>2025 年</strong>: 東北の広域で大凶作 → 全国 <strong>39,801 件</strong>、
          秋に 61.8% が集中。秋田だけで 13,552 件
        </li>
      </ul>
      <p>
        2025 年の詳しい振り返りは{" "}
        <Link href="/articles/bear-2025-retrospective">
          2025年クマ大量出没を振り返る — 過去最多年に何が起きたか
        </Link>
        を参照してください。
      </p>

      <h2 id="forecast">結実予測情報の見方</h2>
      <p>
        各県の森林総合研究所・林業試験場が、毎年 7〜8 月にブナ結実予測を発表します。
        住民・自治体・登山者にとって、この情報が秋を読む最重要シグナルです。
      </p>
      <h3>主な発表元</h3>
      <ul>
        <li>秋田県森林技術センター</li>
        <li>新潟県森林研究所</li>
        <li>山形県森林研究研修センター</li>
        <li>岩手県林業技術センター</li>
        <li>長野県林業総合センター</li>
        <li>富山県農林水産総合技術センター森林研究所</li>
        <li>北海道立総合研究機構 林業試験場（ミズナラ等の調査）</li>
      </ul>
      <h3>判定の見方</h3>
      <p>
        多くの県で <strong>豊作 / 並作 / 不作 / 凶作</strong>の 4 段階判定が出ます。
        花序数や幼果数の調査結果に基づきます。
      </p>
      <ul>
        <li>
          <strong>豊作</strong>: その年の秋は山でクマが満腹に。人里への下りが少ない
        </li>
        <li>
          <strong>並作</strong>: 山で十分。例年並みの出没件数
        </li>
        <li>
          <strong>不作</strong>: 山で部分的に不足。出没件数の増加が予想される
        </li>
        <li>
          <strong>凶作</strong>: 山で深刻に不足。大量出没のリスクが高い
        </li>
      </ul>
      <p>
        広域で凶作判定が出た年は、特に東北・北陸の県で大量出没の備えを早めに進めることを推奨します。
      </p>

      <h2 id="regions">ブナ依存度の高い地域</h2>
      <p>
        ブナ・ミズナラ依存度が高い地域＝凶作年のリスクが大きい地域です。
      </p>
      <ul>
        <li>
          <strong>東北全域</strong>（秋田・青森・岩手・山形・宮城・福島）
          — 本州最大のブナ林帯。凶作年の影響が最も大きい
        </li>
        <li>
          <strong>北陸・甲信越</strong>（新潟・富山・長野）
          — ブナ・ミズナラの優占林が広がる
        </li>
        <li>
          <strong>関東山岳</strong>（群馬・栃木・埼玉北部）
          — 東北ほどではないがブナ林あり
        </li>
        <li>
          <strong>中国地方</strong>（鳥取・島根・広島・岡山）
          — 西日本のブナ依存域。範囲は限定的だがクマ生息地と重なる
        </li>
      </ul>
      <p>
        逆に <strong>九州・四国</strong> はツキノワグマが絶滅または絶滅危惧で、
        ブナ凶作との関連で大量出没が議論される地域ではありません。
        <strong>北海道</strong> は前述のとおりブナ依存ではなく、
        ヒグマ独自の食物体系の影響を受けます。
      </p>

      <h2 id="what-to-do">凶作報道を見たら何をすべきか</h2>
      <p>
        住んでいる地域でブナ凶作・大凶作の発表があった場合の備えチェックリストです。
      </p>
      <h3>個人・登山者</h3>
      <ul>
        <li>
          秋（9〜11月）の登山・キャンプ計画を再検討。可能なら時期をずらす
        </li>
        <li>
          <Link href="/articles/bear-spray">クマ撃退スプレー</Link>・
          <Link href="/articles/bear-bell">クマ鈴</Link>を夏のうちに揃える
        </li>
        <li>
          自宅周辺の{" "}
          <Link href="/articles/home-protection">誘引物管理</Link>
          を見直す（柿・栗・廃棄食品）
        </li>
      </ul>
      <h3>家庭・農家</h3>
      <ul>
        <li>
          果樹園・養蜂場の{" "}
          <Link href="/articles/electric-fence">電気柵</Link>
          を 9 月までに点検・補強
        </li>
        <li>収穫予定のない柿・栗の早期撤去</li>
        <li>家畜飼料・ペットフードの屋外保管をやめる</li>
      </ul>
      <h3>自治体</h3>
      <ul>
        <li>住民への注意喚起を 8 月中に展開</li>
        <li>猟友会・警察との三者連携体制の再点検</li>
        <li>
          AI 検知カメラ・撃退装置の事前配備（
          <Link href="/products?for=gov">自治体向けソリューション</Link>
          ）
        </li>
        <li>
          <Link href="/for-gov">KumaWatch との情報連携</Link>
          で住民・観光客への発信チャネル強化
        </li>
      </ul>
      <p>
        2026 年秋の見通しは{" "}
        <Link href="/articles/autumn-forecast-2026">
          2026年 秋のクマ大量出没予報
        </Link>
        で、市街地進出の備えは{" "}
        <Link href="/articles/urban-bear">アーバン・ベア</Link>
        で詳しく解説しています。
      </p>

      <ArticleFaq
        items={[
          {
            q: "ブナ豊作の年はクマは出ないのですか?",
            a: "出没件数は明確に減りますが、ゼロにはなりません。山中で十分なカロリーを得られるため人里への下りが減りますが、人慣れした個体・住宅地周辺の柿等を覚えた個体は引き続き出没します。",
            aText:
              "出没件数は明確に減るがゼロにはならない。山中で十分なカロリーを得られるため人里への下りが減るが、人慣れした個体・市街地周辺の柿等を覚えた個体は引き続き出没。",
          },
          {
            q: "ブナの結実予測はどこで見られますか?",
            a: (
              <>
                各県の森林総合研究所・林業試験場が 7〜8 月に発表します。
                「{`{県名}`} ブナ 結実 予測」で検索すると見つかります。
                注目すべき結果が出た際は{" "}
                <Link href="/research">研究・知見ページ</Link>
                でも随時取り上げます。
              </>
            ),
            aText:
              "各県の森林総合研究所・林業試験場が7〜8月に発表。「{県名} ブナ 結実 予測」で検索可能。注目結果は研究・知見ページでも取り上げる。",
          },
          {
            q: "ミズナラとブナはどちらがクマにとって重要?",
            a: "両方重要ですが、地域によって優位性が異なります。東北の山岳地帯はブナ優占、本州中部〜西日本はミズナラ優占。両樹種が同年に凶作だと特に深刻な影響が出ます。",
            aText:
              "両方重要だが地域差あり。東北山岳はブナ優占、本州中部〜西日本はミズナラ優占。両樹種が同年に凶作だと特に深刻。",
          },
          {
            q: "なぜブナは毎年結実しないのですか?",
            a: "マスティング（隔年・周期的結実）は捕食者飽和戦略と説明されます。毎年結実すると食害者の個体数が安定して種子をすべて食べ尽くされてしまうため、数年に1度の大豊作で食害者を圧倒し、一部の種子の発芽を可能にする進化的戦略です。",
            aText:
              "マスティングは捕食者飽和戦略。毎年結実すると食害者にすべて食べ尽くされるため、数年に1度の大豊作で食害者を圧倒し一部種子の発芽を可能にする進化的戦略。",
          },
          {
            q: "温暖化はブナ結実に影響しますか?",
            a: (
              <>
                影響は出ています。気温上昇でブナ結実の不安定化や個体数減少が報告されており、
                長期的には本州ツキノワグマの食物環境の悪化要因となります。
                クマ出没増加の背景には、こうした森林環境の変化もあります。
                詳細は <Link href="/articles/why-increasing">クマ出没はなぜ増えているのか</Link>
                を参照してください。
              </>
            ),
            aText:
              "影響は出ている。気温上昇でブナ結実の不安定化や個体数減少が報告されており、長期的には本州ツキノワグマの食物環境の悪化要因となる。",
          },
        ]}
      />
    </ArticleShell>
  );
}
