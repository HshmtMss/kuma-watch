import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, References, NextIssue } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-030")!;

export const metadata: Metadata = {
  ...reviewRobots(meta.slug),
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

const SERIES: [string, string, string][] = [
  ["01", "クマスプレーの効果、アラスカ 83 件（Smith ら 2008）", "research-digest-001"],
  ["02", "街のごみとクロクマの暮らし（Beckmann & Berger 2003）", "research-digest-002"],
  ["03", "顔でヒグマを見分ける AI（Clapham ら 2020）", "research-digest-003"],
  ["04", "冬ごもりの始まりと終わり（Pigeon ら 2016）", "research-digest-004"],
  ["05", "嗅覚の遺伝子と風を読むクマ（Niimura ら 2014 ほか）", "research-digest-005"],
  ["06", "ヒグマが選ぶ食事の栄養（Erlenbach ら 2014）", "research-digest-006"],
  ["07", "長野のトウモロコシ畑と電気柵（Huygens & Hayashi 1999）", "research-digest-007"],
  ["08", "冬眠中の体温と代謝（Tøien ら 2011）", "research-digest-008"],
  ["09", "問題グマの捕獲移動を見直す（Linnell ら 1997）", "research-digest-009"],
  ["10", "数の多い・少ないを見分ける実験（Vonk & Beran 2012）", "research-digest-010"],
  ["11", "交尾期と出産期の成り立ち（Spady ら 2007）", "research-digest-011"],
  ["12", "北米クロクマ死亡事故の分析（Herrero ら 2011）", "research-digest-012"],
  ["13", "ヒグマがにおいを残す木（Clapham ら 2013）", "research-digest-013"],
  ["14", "世界のヒグマ人身被害 664 件（Bombieri ら 2019）", "research-digest-014"],
  ["15", "ホッキョクグマとヒグマの分岐（Liu ら 2014）", "research-digest-015"],
  ["16", "冬眠と腸内細菌の季節変化（Sommer ら 2016）", "research-digest-016"],
  ["17", "クマの噛む力の比較（Christiansen & Wroe 2007）", "research-digest-017"],
  ["18", "サケと川岸の植物（Hocking & Reynolds 2011）", "research-digest-018"],
  ["19", "サケの滝での場所の分け合い（Stonorov & Stokes 1972）", "research-digest-019"],
  ["20", "追い払ったクロクマは戻るか（Beckmann ら 2004）", "research-digest-020"],
  ["21", "イタリア・アルプスの再導入（Tosi ら 2015）", "research-digest-021"],
  ["22", "北欧と北アルプスのクマの行動圏（Bjärvall ら 1990 ほか）", "research-digest-022"],
  ["23", "イエローストーンの繁殖と生存（Schwartz ら 2006）", "research-digest-023"],
  ["24", "冬ごもり中のクマと人の活動（Linnell ら 2000）", "research-digest-024"],
  ["25", "子グマの「ハミング」（Peters ら 2007）", "research-digest-025"],
  ["26", "ホッキョクグマのエネルギー消費（Pagano ら 2018）", "research-digest-026"],
  ["27", "ヒグマを「見る観光」の総説（Penteriani ら 2017）", "research-digest-027"],
  ["28", "ルーマニアの家畜被害と経済（Mertens & Promberger 2001）", "research-digest-028"],
  ["29", "オオカミの獲物と腐肉食者（Wilmers ら 2003）", "research-digest-029"],
  ["30", "人と大型肉食獣の共適応（Carter & Linnell 2016）", "research-digest-030"],
  ["31", "ブナの豊凶とクマの有害捕獲（Oka ら 2004）", "research-digest-031"],
  ["32", "クマ鈴とグリズリーの行動（Jope 1985）", "research-digest-032"],
  ["33", "人慣れした母グマの息子の生存（Shimozuru ら 2020）", "research-digest-033"],
];

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        クマと人が同じ土地で暮らしていくには、何が必要なのでしょうか。
        クマの数を減らす、遠ざける、といった「クマの側」への働きかけだけで話が済むのか。
        それとも、人の側の暮らし方やルールも変わる必要があるのか。
      </p>
      <p>
        今号では、この問いを短く整理した Carter &amp; Linnell（2016, Trends in Ecology &amp; Evolution）を取り上げます。
        新しいデータを集めた研究ではなく、誌上の「Science &amp; Society」欄に載った 4 ページの論考です。
        数字で何かを示す論文ではありませんが、「共存」という言葉の中身を考える手がかりになります。
      </p>

      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Co-Adaptation Is Key to Coexisting with Large Carnivores"
        citation={
          <>
            Carter, N. H., &amp; Linnell, J. D. C. (2016).{" "}
            <em className="not-italic">Trends in Ecology &amp; Evolution</em> 31(8): 575–578.
          </>
        }
        href="https://doi.org/10.1016/j.tree.2016.05.006"
        linkText="DOI: 10.1016/j.tree.2016.05.006 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            大型肉食獣を保護区の外、人が使う土地の中でどう受け入れるかが課題になっている
          </>,
          <>
            著者らは共存の中心に <strong>「共適応（co-adaptation）」</strong>＝クマなどの動物と人の双方が互いに合わせて変わること を置いた
          </>,
          <>
            共存は「衝突ゼロ」ではなく、<strong>地域が受け入れられる程度にリスクを保つ</strong>状態として考える
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "background", title: "この論考が書かれた背景" },
          { id: "coadaptation", title: "「共適応」とは何か" },
          { id: "examples", title: "論考が挙げる例" },
          { id: "tolerable", title: "共存は「衝突ゼロ」ではない" },
          { id: "limits", title: "読むときの注意" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "series", title: "シリーズ一覧" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="background">この論考が書かれた背景</h2>
      <p>
        著者は Neil H. Carter と John D. C. Linnell。Linnell は本シリーズ Vol.9（捕獲移動）・Vol.24（冬ごもり中のクマと人の活動）でも取り上げた研究者です。
      </p>
      <p>
        論文の要旨は、次のような問題意識から始まります。
        大型肉食獣を、保護区の外にある「いろいろな用途に使われる土地」に組み込む必要が高まっている。
        ところが「共存」という言葉の意味があいまいなままなので、その目標に近づきにくい。
        そこで著者らは、共存とは何かを整理し直し、その中心に「動物と人の双方による適応」を置きました。
      </p>
      <p>
        大型肉食獣は広い範囲を動き回るため、保護区だけでは収まりきらないことが多く、
        人の暮らす場所と重なれば衝突も起こります。この論考は、北米・ヨーロッパ・アジアの事例を手がかりに、
        その重なりの中でどう折り合うかを考えたものです。
      </p>

      <h2 id="coadaptation">「共適応」とは何か</h2>
      <p>
        論文のキーワード「co-adaptation」は、本記事では <strong>「共適応」</strong>（相互適応）と訳します。
        著者らは、この言葉を純粋に生物の進化という意味で使っているのではない、と断っています。
        遺伝的な変化を何世代もかけて起こす「共進化」とは別の話です。
      </p>
      <p>
        ここでいう共適応は、次の両方を含む考え方です。
      </p>
      <ul>
        <li>
          <strong>動物の側の適応</strong>: 人がいる場所や時間を避けるなど、人の存在に合わせて行動を変えること
        </li>
        <li>
          <strong>人の側の適応</strong>: 家畜の飼い方を変える、地域の慣習や文化の中に「肉食獣のいる暮らし」の作法を持つ、
          といった人の行動や制度の調整
        </li>
      </ul>
      <p>
        著者らは、かつては肉食獣と暮らすための工夫を持っていた地域が多いものの、
        そうした工夫が失われてきた場所も多いと指摘しています。
        また、人と肉食獣の関わり方を決めるルール（制度）がうまく働き、状況に応じて柔軟に変えられることを重視しています。
      </p>

      <h2 id="examples">論考が挙げる例</h2>
      <p>
        短い論考なので、事例は詳しい分析ではなく、考え方を示すための例として紹介されています。
      </p>
      <ul>
        <li>
          <strong>ネパール・チトワンのトラ</strong>: 人と同じ場所を使いながら、人が活動する時間帯を避けるように
          時間をずらして利用している例。動物の側の適応の例として挙げられています。
        </li>
        <li>
          <strong>インド・マハーラーシュトラ州のヒョウ</strong>: 人が密に暮らす農村地帯でも、ヒョウが人のそばで暮らしている例。
        </li>
        <li>
          <strong>スウェーデンのオオカミ</strong>: 違法な殺害がオオカミの死亡の約半分を占めていたという研究が引用され、
          人の側の受け入れ（許容）が揺らぐと、こうした行動につながりうることが示されています。
        </li>
      </ul>
      <p>
        どの例も、個々の数字や対策の効果を評価するものではありません。
        「動物も人も変わりうる」「人の側の受け入れが崩れると共存も崩れる」という論点を示すためのものとして読むのが適切です。
      </p>

      <h2 id="tolerable">共存は「衝突ゼロ」ではない</h2>
      <p>
        この論考のもう一つの大事な点は、共存を「衝突がまったくない状態」とは考えないことです。
        目標は、リスクを <strong>その地域が受け入れられる程度</strong>に保つことだとされます。
      </p>
      <p>
        どこまでなら受け入れられるかは、地域によって違います。
        その動物がもたらす損失と、生態系や文化の面での価値を、人々がどう比べるかによって変わるからです。
        そのため著者らは、立場の異なる人々の声が意思決定に反映される仕組みが大切だと述べています。
        行政への不信が共存を妨げることがある、という指摘もあります。
      </p>

      <h2 id="limits">読むときの注意</h2>
      <ul>
        <li>
          新しい調査データを示した研究ではなく、考え方を整理した短い論考です。
          「この対策で被害が何割減る」といった効果の数字は含まれていません。
        </li>
        <li>
          例として挙がっているのはトラ・ヒョウ・オオカミなど、クマ以外の大型肉食獣が中心です。
          ツキノワグマやヒグマにそのまま当てはまるとは限りません。
        </li>
        <li>
          「どの程度のリスクなら受け入れられるか」は地域ごとに違う、というのが論考の立場です。
          日本の具体的な対策の良し悪しを判断するものではありません。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        日本ではツキノワグマ・ヒグマの出没が人里で相次ぎ、2024 年 4 月にはクマ類が「指定管理鳥獣」に追加されました（
        <Link href="/articles/designated-management-2026">解説記事</Link>
        ）。2025 年 9 月からは、市街地などで条件を満たした場合に市町村の判断で銃猟ができる「緊急銃猟」の制度も始まっています。
        捕獲などクマの側への対応が強化される一方で、この論考の視点からは、人の側の暮らし方を整えることも同じくらい大切だと言えます。
      </p>
      <p>
        論考は日本の対策を直接論じたものではありませんが、人の側でできることとして、たとえば次のようなことが考えられます。
      </p>
      <ul>
        <li>生ごみ・収穫しない果樹・農作物の残りなど、クマを引き寄せるものを人の生活圏に置かない</li>
        <li>出没情報を確かめ、クマが活動しやすい時間帯や場所での行動を見直す</li>
        <li>地域で情報を共有し、どの程度のリスクをどう減らすかを話し合う</li>
      </ul>
      <p>
        万一クマに出会ったときは、走らない・背を向けない・ゆっくり離れる、が基本です。
        突進されたらクマスプレーを使います（環境省が推奨する目安は、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・CRC 1〜2% 程度。
        5〜10m まで近づいたら顔に向けて 1〜2 秒ずつ噴射）。
        防衛的な攻撃で接触が避けられない場合はうつ伏せになって首の後ろを守る防御姿勢をとり、
        執拗な攻撃や捕食的な攻撃であれば反撃します。
      </p>

      <h2 id="series">シリーズ一覧</h2>
      <div className="not-prose my-4 grid grid-cols-1 gap-1.5 text-xs">
        {SERIES.map(([no, title, slug]) => (
          <Link
            key={slug}
            href={`/articles/${slug}`}
            className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white px-3 py-2 hover:border-amber-400 hover:bg-amber-50"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-bold tabular-nums text-stone-700">
              {no}
            </span>
            <span className="text-sm text-stone-900">{title}</span>
          </Link>
        ))}
      </div>

      <NextIssue label="次号">次号も研究ダイジェストをお届けします。</NextIssue>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Co-Adaptation Is Key to Coexisting with Large Carnivores（本号メイン）",
            citation: (
              <>
                Carter, N. H., &amp; Linnell, J. D. C. (2016).{" "}
                <em className="not-italic">Trends in Ecology &amp; Evolution</em> 31(8): 575–578.
              </>
            ),
            href: "https://doi.org/10.1016/j.tree.2016.05.006",
            linkText: "DOI: 10.1016/j.tree.2016.05.006 →",
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。ご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>
    </ArticleShell>
  );
}
