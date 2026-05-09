import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
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
        <strong>結論</strong>: 秋のクマ人身事故で最多のシーンが
        <strong>「きのこ狩り中」</strong>。前傾姿勢で地面を見続け、林床に分け入り、
        夢中になって周囲が見えなくなる — クマが一番接近しやすい状況が揃ってしまいます。
        鈴・ホイッスル・スプレーの携行と、複数人・短時間・午前中という基本ルールで
        遭遇率は大きく下げられます。
      </p>

      <ArticleToc
        items={[
          { id: "why-risky", title: "なぜきのこ狩りは危険なのか" },
          { id: "stats", title: "秋の人身事故とアクティビティ別件数" },
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
          子供サイズに見えるシルエットがクマの「捕食動機」を刺激することもあります。
        </li>
        <li>
          <strong>音が出ない</strong>: 1 人で黙々と作業し、林床はふかふかで足音が消える。
          鈴を付けていても、屈むと地面に近づき音が拡散しません。
        </li>
        <li>
          <strong>夢中になる</strong>: 良いきのこが出ると視野が一気に狭まり、
          「あと 5 分」「もう少し奥へ」と引き返しのタイミングを失います。
        </li>
      </ul>

      <h2 id="stats">秋の人身事故とアクティビティ別件数</h2>
      <p>
        環境省・各県の集計では、9〜11 月のクマ人身事故のおおむね 3〜5 割が
        「山菜採り・きのこ採り中」に集中しています (年・地域で変動)。
        登山・通勤・農作業を上回る最多シーンであることは多くの年で共通しています。
      </p>
      <p>
        とくに東北・北陸・甲信越でこの傾向が強く、
        <Link href="/articles/tohoku-bears">東北 6 県のクマ事情</Link>でも、
        秋田・岩手・山形のきのこ狩り事故は毎年のように報じられています。
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
          人の声・笛・ラジオを組み合わせれば「人間がいる」サインは確実に届きます。
        </li>
        <li>
          <strong>明るい色の帽子・ベスト</strong>: 視認性は人間用ですが、
          狩猟者の誤射防止 (秋〜冬の狩猟解禁期間) としても重要です。
        </li>
        <li>
          <strong>2 人以上で行く</strong>: 1 人での入山は事故時に通報も救助も困難。
          単独行動の事故率は集団の数倍と各県の集計が示しています。
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
          <strong>午前中に切り上げる</strong>: クマは早朝・夕方の薄明薄暮で動きが活発です。
          日の出後 2 時間〜午前 11 時頃が比較的安全帯。
        </li>
        <li>
          <strong>目印テープ・既知のルートから外れすぎない</strong>:
          奥に入ると人気が薄れ、クマの採食圏に踏み込みます。
        </li>
        <li>
          <strong>定期的に声を出す・止まって周囲を見る</strong>:
          屈み続けず、5〜10 分に 1 回は立ち上がって 360° 確認。
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
          <strong>収穫物のカゴを置いて静かに後退</strong>:
          匂いを残せばクマの関心は人間からカゴに移りやすい。命は最優先、収穫物は捨てる前提で。
        </li>
        <li>
          <strong>子グマを見たら 0.5 秒で離れる</strong>:
          可愛いから写真は絶対 NG。母グマが必ず近くにいます
          (<Link href="/articles/cub-handling">子グマを見たら</Link>)。
        </li>
        <li>
          <strong>突進されたらスプレーを構える</strong>:
          屈んだ姿勢からの抜き打ちが間に合うように、ホルスターは右腰前面に。
        </li>
        <li>
          <strong>万一襲われたら</strong>: ツキノワグマの場合は頭と首を守り
          うつ伏せ。ヒグマなら抵抗の有効性が高まる場面もあり、対応が変わります
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
                できれば避けてください。秋の人身事故は単独行動中に集中しています。
                どうしても 1 人で行く場合は、出発時刻と下山予定を家族に必ず伝え、
                スプレーを必ず腰に携行し、入山時間を午前中に絞ってください。
              </>
            ),
            aText:
              "できれば避けてください。秋の人身事故は単独行動中に集中しています。1 人で行く場合は出発・下山予定を家族に伝え、スプレーを腰に携行し、入山時間を午前中に絞ってください。",
          },
          {
            q: "クマ鈴は屈んでいると効かないと聞きますが本当?",
            a: (
              <>
                屈むと音源が地面に近くなり、林床に音が吸われて遠くに届きにくくなります。
                完全に効かないわけではありませんが、鈴単独では不十分。立ち上がって周囲に声を出す、
                ホイッスルを定期的に吹く、ラジオで人の声を出す、を組み合わせるのが現実的です。
              </>
            ),
            aText:
              "屈むと音源が地面に近くなり遠くに届きにくくなります。鈴単独では不十分で、声・ホイッスル・ラジオを組み合わせるのが現実的です。",
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
                強い匂いのきのこ (アミタケ、サクラシメジ等) や、ザックに入れたおにぎり・甘い飲料は
                確実に誘引要因です。密閉袋に入れ、外側の匂いも拭く意識を。
                車に戻ったらすぐに匂いを車内から遠ざけ、可能ならクーラーボックスへ。
              </>
            ),
            aText:
              "強い匂いのきのこや食料・甘い飲料は誘引要因です。密閉袋に入れ、車に戻ったら匂いを車内から遠ざけ、可能ならクーラーボックスへ移してください。",
          },
        ]}
      />
    </ArticleShell>
  );
}
