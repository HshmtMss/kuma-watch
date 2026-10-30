import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("mushroom-picking")!;

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
        <strong>結論</strong>: 森林など山の中で起きたクマの人身被害で、最も多いのが
        <strong>「山菜・キノコ採り」</strong>の最中です (環境省の分析)。前傾姿勢で地面を見続け、林床に分け入り、
        夢中になって周囲が見えなくなる — クマに気づかないまま近づきやすい状況が揃ってしまいます。
        鈴・ホイッスル・スプレーの携行と、複数人・明け方と夕方を避ける、という基本ルールで
        遭遇の危険は下げられます。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            山の中での人身被害で<strong>最も多いのが「山菜・キノコ採り」の最中</strong> (環境省)。
          </>,
          <>
            前傾で地面を見続け林床に分け入るため、<strong>クマに気づかず近づきやすい状況</strong>が揃う。
          </>,
          <>
            <strong>鈴・ホイッスル・スプレー携行＋複数人・明け方と夕方を避ける</strong>で遭遇の危険を下げる。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "why-risky", title: "なぜきのこ狩りは危険なのか" },
          { id: "stats", title: "どんな行動中に被害が多いか" },
          { id: "preparation", title: "出発前の準備 — 装備と計画" },
          { id: "in-the-field", title: "山に入ってからの立ち回り" },
          { id: "encounter", title: "それでも出会ってしまったら" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-risky">なぜきのこ狩りは危険なのか</h2>
      <p>
        きのこ狩りは、クマと人間が「同じ条件で同じ場所にいる」アクティビティです。
        どこが噛み合ってしまうかを整理します。
      </p>
      <ul>
        <li>
          <strong>季節が重なる</strong>: マツタケ・ナメコ・ムキタケなどの最盛期 (9〜11月) は、
          冬眠前のクマがドングリ・ブナの実を求めて広く動き回る
          <Link href="/articles/autumn">ハイパーフェイジア</Link>の真っ只中。
        </li>
        <li>
          <strong>場所が重なる</strong>: ブナ・ミズナラの林床、倒木のまわり、谷筋の湿地 —
          きのこの好適地はクマの採食地でもあります。
        </li>
        <li>
          <strong>姿勢が悪い</strong>: 前傾で地面を見続けるため周囲が見えず、
          クマの接近に気づくのが遅れます。
        </li>
        <li>
          <strong>音が出ない</strong>: 1 人で黙々と作業し、林床はふかふかで足音が消える。
          鈴を付けていても、立ち止まって作業している間は鳴りません。
        </li>
        <li>
          <strong>夢中になる</strong>: 良いきのこが出ると視野が一気に狭まり、
          「あと 5 分」「もう少し奥へ」と引き返しのタイミングを失います。
        </li>
      </ul>

      <h2 id="stats">どんな行動中に被害が多いか</h2>
      <p>
        環境省が令和 5〜7 年度の全国の人身被害を分析した資料によると、
        森林・河川敷など「クマの生息域」で起きた被害 (172 件) では、被害者の行動は
        「山菜・キノコ採り等」が最も多く、次いで登山・散策、狩猟等、山林でのレジャーの順でした。
      </p>
      <p>
        一方、クマが大量に出没した年の秋は、市街地・人家周辺・農地など「人の生活圏」での被害が高い割合を占め、
        そこでは散歩や自宅周辺での活動など日常生活中の被害が最多です。
        山に入らなくても被害に遭うことがある、という点も覚えておいてください。
        地域ごとの事情は<Link href="/articles/tohoku-bears">東北 6 県のクマ事情</Link>も参照してください。
      </p>

      <h2 id="preparation">出発前の準備 — 装備と計画</h2>
      <p>
        きのこ狩りは「準備したかどうか」で安全度が大きく変わります。
      </p>
      <ul>
        <li>
          <strong>クマよけスプレーを腰に</strong>: ザックの中ではなく腰のホルスター。
          屈んだ姿勢でも 1 秒で抜けることが大事です。詳しくは
          <Link href="/articles/bear-spray">クマよけスプレーの使い方</Link>。
        </li>
        <li>
          <strong>鈴 + ホイッスル + ラジオ</strong>: 一つでは不足。
          <Link href="/articles/bear-bell">鈴は議論があります</Link>が、
          人の声・笛・ラジオを組み合わせれば「人間がいる」サインは届きやすくなります。
        </li>
        <li>
          <strong>明るい色の帽子・ベスト</strong>: 視認性は人間用ですが、
          狩猟者の誤射防止 (秋〜冬の狩猟解禁期間) としても重要です。
        </li>
        <li>
          <strong>2 人以上で行く</strong>: 1 人での入山は事故時に通報も救助も困難。
          採取に夢中になって同行者と距離が開くと、単独で行動しているのと同じ状況になるので注意 (環境省)。
        </li>
        <li>
          <strong>家族に行き先と時間を伝える</strong>: 携帯が圏外でも、
          下山予定時刻を共有しておけば異変時の捜索開始が早まります。
        </li>
        <li>
          <strong>市町村のクマ情報を確認</strong>: 出没情報・目撃箇所を見てから入山。
          くまウォッチの<Link href="/">出没マップ</Link>や、
          自治体の防災メールを当日朝に確認してください。
        </li>
      </ul>

      <h2 id="in-the-field">山に入ってからの立ち回り</h2>
      <p>
        現場での行動でも遭遇率は大きく変わります。
      </p>
      <ul>
        <li>
          <strong>明け方・夕方は山に入らない</strong>: クマは明け方と夕方に特に活発で、
          環境省も「明け方・日の入り前に行動しない」ことを勧めています。ただし日中も遭遇はあり得ます。
        </li>
        <li>
          <strong>目印テープ・既知のルートから外れすぎない</strong>:
          奥に入ると人気が薄れ、クマの採食圏に踏み込みます。
        </li>
        <li>
          <strong>定期的に声を出す・止まって周囲を見る</strong>:
          屈み続けず、こまめに立ち上がって周囲を確認。クマは木登りが得意なので頭上にも目を配る。
        </li>
        <li>
          <strong>痕跡を見たら即引き返す</strong>: 新しい足跡・糞・爪痕は強い警告サイン。
          詳細は<Link href="/articles/bear-tracks">足跡・糞・食痕の見分け方</Link>。
        </li>
        <li>
          <strong>「土まんじゅう」(獲物の埋没) は最危険</strong>:
          落ち葉と土で盛り上がった怪しい山を見たら絶対近づかず、即下山。
          クマが戻ってくる場所です。
        </li>
        <li>
          <strong>食料・収穫物の匂い管理</strong>: ザックは密閉袋で。
          きのこ自体の匂いが強い場合は二重袋に。
          おにぎり・パン・甘い飲み物の匂いはクマを呼びます。
        </li>
      </ul>

      <h2 id="encounter">それでも出会ってしまったら</h2>
      <p>
        遭遇時の基本は<Link href="/articles/encounter">距離別の対処</Link>と同じですが、
        きのこ狩り特有の注意点があります。
      </p>
      <ul>
        <li>
          <strong>カゴやリュックを置いて逃げない</strong>:
          食べ物が入っていると、意図しない餌付けにつながります (環境省)。走らず、クマを見ながらゆっくり離れてください。
        </li>
        <li>
          <strong>子グマを見たらすぐに離れる</strong>:
          可愛いから写真は絶対 NG。母グマが近くにいる可能性が高い
          (<Link href="/articles/cub-handling">子グマを見たら</Link>)。
        </li>
        <li>
          <strong>突進されたらスプレーを構える</strong>:
          屈んだ姿勢からでもすぐ抜けるように、ホルスターは利き手側の腰の前寄りに。
        </li>
        <li>
          <strong>万一襲われたら</strong>: 驚かせた・子連れなど防衛的な攻撃で接触が避けられなければ、
          うつ伏せになり両手で首の後ろを守る (リュックは背負ったまま)。つけ回す・伏せても攻撃が続くなど
          執拗な攻撃なら顔や鼻を狙って反撃します。ツキノワグマでもヒグマでも基本は同じです
          (<Link href="/articles/playing-dead">死んだふりは効くのか</Link>)。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "1 人できのこ狩りに行くのはやめた方がいい?",
            a: (
              <>
                できれば避けてください。1 人では襲われたときに通報も助けを呼ぶこともできません。
                どうしても 1 人で行く場合は、出発時刻と下山予定を家族に必ず伝え、
                スプレーを必ず腰に携行し、明け方・夕方の入山は避けてください。
              </>
            ),
            aText:
              "できれば避けてください。1 人では襲われたときに助けを呼べません。1 人で行く場合は出発・下山予定を家族に伝え、スプレーを腰に携行し、明け方・夕方の入山は避けてください。",
          },
          {
            q: "クマ鈴は屈んでいると効かないと聞きますが本当?",
            a: (
              <>
                鈴は揺れて鳴るものなので、屈んで立ち止まっている間はほとんど鳴りません (環境省も注意を促しています)。
                歩いている間は役に立ちますが、鈴単独では不十分。立ち上がって周囲に声を出す、
                ホイッスルを定期的に吹く、ラジオで人の声を出す、を組み合わせるのが現実的です。
              </>
            ),
            aText:
              "鈴は立ち止まっている間はほとんど鳴りません。鈴単独では不十分で、声・ホイッスル・ラジオを組み合わせるのが現実的です。",
          },
          {
            q: "犬を連れて行くのはアリ?",
            a: (
              <>
                警戒・察知の点では有利ですが、リードを離した犬がクマを見つけて吠え、
                興奮したクマを連れて飼い主の元へ戻ってくる事故が知られています。
                連れて行くなら必ずリード、興奮したら早めに離脱、を徹底してください。
              </>
            ),
            aText:
              "警戒には有利ですが、リードを離した犬が興奮したクマを連れ戻す事故があります。連れて行く場合は必ずリードで、興奮したら早めに離脱してください。",
          },
          {
            q: "収穫したきのこの匂いはクマを呼びますか?",
            a: (
              <>
                ザックに入れたおにぎり・甘い飲料などの食べ物は誘引要因になります。収穫物も含め、密閉袋に入れ、外側の匂いも拭く意識を。
                車に戻ったらすぐに匂いを車内から遠ざけ、可能ならクーラーボックスへ。
              </>
            ),
            aText:
              "食料や甘い飲料は誘引要因になります。密閉袋に入れ、車に戻ったら匂いを車内から遠ざけ、可能ならクーラーボックスへ移してください。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
