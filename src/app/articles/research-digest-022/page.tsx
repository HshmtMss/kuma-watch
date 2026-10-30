import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle, reviewRobots } from "@/lib/articles-meta";

const meta = getArticle("research-digest-022")!;

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

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        1 頭のクマは、1 年でどれくらいの広さを歩き回っているのでしょうか。
        クマがふだん暮らしている範囲を「行動圏」と呼びます。
        行動圏の広さが分かると、1 頭のクマがいくつもの市町村をまたいで動いていることや、
        季節によって居場所が変わることが見えてきます。
      </p>
      <p>
        今号では、北欧（スウェーデン・ノルウェー）のヒグマに電波発信機付きの首輪をつけて追跡し、
        雄と雌の行動圏を測った研究を紹介します。
        あわせて、北アルプスのツキノワグマを追跡した日本の研究も取り上げます。
        数字はどれも論文に書かれているものです。
      </p>

      <PaperCard
        label="今号で読み解く論文"
        papers={[
          {
            title: "Large Home Ranges and Possible Early Sexual Maturity in Scandinavian Bears",
            citation: (
              <>
                Bjärvall, A., Sandegren, F., &amp; Wabakken, P. (1990).{" "}
                <em className="not-italic">Bears: Their Biology and Management</em> 8: 237–241.
              </>
            ),
            href: "https://doi.org/10.2307/3872924",
            linkText: "DOI: 10.2307/3872924 →",
          },
          {
            title:
              "Seasonal changes in elevation and habitat use of the Asiatic black bear (Ursus thibetanus) in the Northern Japan Alps",
            citation: (
              <>
                Izumiyama, S., &amp; Shiraishi, T. (2004).{" "}
                <em className="not-italic">Mammal Study</em> 29(1): 1–8.
              </>
            ),
            href: "https://doi.org/10.3106/mammalstudy.29.1",
            linkText: "DOI: 10.3106/mammalstudy.29.1 →",
          },
        ]}
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            北欧のヒグマでは、雄成獣の年間行動圏は <strong>726〜4,297 km²</strong>、雌成獣は{" "}
            <strong>171〜1,002 km²</strong>。どちらの調査地でも雄のほうが広かった
          </>,
          <>
            ある雌は、ふだん約 185 km² で暮らしていたのに、繁殖の時期に <strong>2 週間で 1,024 km²</strong> まで行動圏を広げた
          </>,
          <>
            北アルプスのツキノワグマ 7 頭の行動圏は <strong>32〜123 km²</strong>。夏は高い所、秋は低い所へ移っていた
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "研究の概要" },
          { id: "findings", title: "分かったこと（北欧のヒグマ）" },
          { id: "dahle", title: "その後の北欧の研究" },
          { id: "japan-study", title: "日本のツキノワグマでは" },
          { id: "limits", title: "限界と注意点" },
          { id: "japan", title: "日本で暮らす私たちへの示唆" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="overview">研究の概要</h2>
      <p>
        論文によると、北ヨーロッパでクマに電波発信機をつけて追跡する研究は、1984 年にスウェーデンで始まりました。
        のちにノルウェーも加わった共同研究です。それまで北欧では、クマの行動圏の広さや移動、
        初めて子を産む年齢などがほとんど分かっていませんでした。
      </p>
      <p>
        調査地は 2 か所です。ひとつは<strong>スウェーデン最北部</strong>、もうひとつは
        <strong>スカンジナビア半島の中央部（スウェーデンとノルウェーの国境の両側）</strong>です。
      </p>
      <ul>
        <li>
          <strong>捕まえ方：</strong>春、冬眠から出たばかりのクマの足跡を雪の上で探し、
          ヘリコプターから麻酔の矢を撃って眠らせ、電波発信機付きの首輪をつけました。
        </li>
        <li>
          <strong>追跡の仕方：</strong>できるかぎり週 1 回、小型飛行機から電波を受信して位置を調べました。
          一部のクマは、地上からも車などで集中的に追跡しました。
        </li>
        <li>
          <strong>頭数：</strong>1984〜88 年に計 48 頭（雄 31 頭、雌 16 頭、性別不明 1 頭）に首輪をつけました。
        </li>
        <li>
          <strong>行動圏の測り方：</strong>見つかった位置のうち一番外側の点を結んだ多角形の面積
          （最外郭法）を、そのクマの行動圏としました。
        </li>
      </ul>

      <h2 id="findings">分かったこと（北欧のヒグマ）</h2>
      <h3>雄の行動圏は雌よりずっと広い</h3>
      <p>
        1987 年と 1988 年に追跡した 25 頭について、年間の行動圏は次のとおりでした（地上からの追跡も含めた値）。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">調査地</th>
              <th className="px-3 py-2 text-left">雌成獣</th>
              <th className="px-3 py-2 text-left">雄成獣</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">北部（スウェーデン最北部）</td>
              <td className="px-3 py-2 tabular-nums">171〜1,002 km²（7 頭）</td>
              <td className="px-3 py-2 tabular-nums">726〜2,634 km²（4 頭）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">南部（半島中央部）</td>
              <td className="px-3 py-2 tabular-nums">254〜531 km²（4 頭）</td>
              <td className="px-3 py-2 tabular-nums">1,200〜4,297 km²（8 頭）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        南部の調査地では、行動圏の平均は雌が <strong>370 km²</strong>、雄が <strong>2,163 km²</strong> でした
        （飛行機からの追跡だけで計算すると、雌 290 km²、雄 1,850 km²）。
        著者らは、これらの雄の行動圏は、北米のヒグマで報告されてきたどの研究の値よりもかなり大きいと述べています。
      </p>
      <p>
        また、南部の 4 歳の雄 1 頭は、1988 年に 4,600 km² を超える範囲を動いていました。
        ただし著者らは、この雄がその場所に定着していたのか、生まれた場所から離れて新しい土地へ移動する途中だったのかは
        分からないとしています。
      </p>

      <h3>雌が行動圏を急に広げた年</h3>
      <p>
        北部で 1 歳のときから追跡された雌は、最初の 2 年間、約 <strong>185 km²</strong> の範囲で暮らしていました。
        ところが 1987 年 7 月、ふだんの範囲の外へ移動し、<strong>2 週間で行動圏を 1,024 km² まで広げました</strong>。
        このとき、雄と思われる大きなクマと一緒にいるところが見られています。
      </p>
      <p>
        その後この雌はもとの範囲に戻り、翌 1988 年の春に 2 頭の子を連れて冬眠穴から出てきました。
        その年は子と一緒に、もとの 185 km² の中で過ごしました。
        著者らは、1987 年に行動圏が広がったのは、初めての発情（繁殖の時期）と関係していると考えています。
      </p>

      <h3>位置を調べる回数で、行動圏の広さは変わる</h3>
      <p>
        著者らは、飛行機からの追跡を「2 週に 1 回」に減らした場合の行動圏も計算しました。
        すると、週 1 回の追跡で得た行動圏のおよそ <strong>60%</strong> の広さにしかなりませんでした。
        著者らは、もっと頻繁に位置を調べれば、行動圏は今回の値よりさらに広くなっただろうと述べています。
      </p>

      <h2 id="dahle">その後の北欧の研究</h2>
      <p>
        同じ北欧のヒグマについては、その後、より多くの個体を使った研究も発表されています。
        Dahle と Swenson（2003）は、スカンジナビア中部と北部の 2 つの調査地で、
        <strong>雄成獣 36 頭・雌成獣 52 頭</strong>の年間行動圏を調べました。論文の要旨によると、
      </p>
      <ul>
        <li>
          雄の行動圏は、体の大きさの違い（必要な食べ物の量の違い）を考えに入れても、子を連れていない雌より広かった。
          著者らは、決まった相手を持たないこの種で、雄が繁殖相手を求めて広く歩き回るためだろうと考えています。
        </li>
        <li>
          子（その年生まれ）を連れた雌の行動圏は、子を連れていない雌や、1 歳の子を連れた雌より狭かった。
        </li>
        <li>
          雄も雌も、クマの生息密度が高い場所ほど行動圏が狭かった。
        </li>
      </ul>

      <h2 id="japan-study">日本のツキノワグマでは</h2>
      <p>
        日本のツキノワグマについては、北アルプスで行われた泉山・白石（2004）の研究があります。
        長野県の北安曇・南安曇地域で、稜線近く（標高 2,400 m と 2,650 m）のわなで捕まえた
        <strong>7 頭（雄 3 頭、雌 4 頭）</strong>に首輪をつけ、1996〜2001 年に地上から電波を受信して追跡しました。
        位置を調べたのは平均 6.1 日に 1 回で、行動圏は北欧の研究と同じ最外郭法で求めています。
      </p>
      <ul>
        <li>
          行動圏は <strong>32〜123 km²</strong> でした。雌 4 頭は 32.7・37.4・53.4・96.0 km²、
          雄 3 頭は 45.1・110.3・123.2 km² です。
        </li>
        <li>
          クマたちの行動圏は大きく重なり合っていました。
        </li>
        <li>
          クマは標高 600〜3,000 m の範囲を使い、<strong>夏（7 月 1 日〜9 月 10 日）は標高 2,100〜2,300 m</strong> の
          亜高山帯のダケカンバ林や雪崩の通り道、高山帯で、<strong>秋は標高 1,000〜1,500 m</strong> の
          ミズナラなどの落葉広葉樹林で過ごしていました。
        </li>
        <li>
          著者らは、それまでの国内の研究では、ツキノワグマの行動圏は数 km² から 100 km² を超えるものまで
          幅があると紹介しています。
        </li>
      </ul>

      <h2 id="limits">限界と注意点</h2>
      <ul>
        <li>
          <strong>頭数が少ない研究です。</strong>北欧の研究の表は 25 頭、北アルプスの研究は 7 頭です。
          北アルプスの 7 頭では、雄の 1 頭（45.1 km²）より広い雌（96.0 km²）もおり、
          この数字から「雄は雌の何倍」といった比べ方はできません。
        </li>
        <li>
          <strong>測り方で値が変わります。</strong>どちらも外側の点を結ぶ方法で、
          位置を調べる回数や追跡した期間によって面積が大きく変わります。
          北欧の研究自身が、追跡の回数を半分にすると行動圏が約 6 割になることを示しています。
          GPS 首輪で頻繁に位置を記録する最近の研究とは、数字をそのまま比べられません。
        </li>
        <li>
          <strong>種と環境が違います。</strong>北欧の研究はヒグマで、生息密度や食べ物の量も日本とは異なります。
          北海道のヒグマや、本州のツキノワグマに数字をそのまま当てはめることはできません。
        </li>
        <li>
          <strong>古い研究です。</strong>北欧の研究は 1980 年代、北アルプスの研究は 1990 年代後半〜2000 年代初めのデータです。
        </li>
      </ul>

      <h2 id="japan">日本で暮らす私たちへの示唆</h2>
      <p>
        これらの研究から、日本のクマについて言えることは限られます。そのうえで、参考になりそうな点を控えめに挙げます。
      </p>
      <ul>
        <li>
          <strong>クマは広い範囲を動く。</strong>北アルプスのツキノワグマでも行動圏は数十〜100 km² 余りありました。
          近くの市町村で出没があれば、自分の住む地域にも来る可能性があると考えておきましょう。
          くまウォッチの{" "}
          <Link href="/place">市町村別ページ</Link>
          で、周りの地域の出没情報も確認できます。
        </li>
        <li>
          <strong>季節で居場所が変わる。</strong>北アルプスでは、夏は高い所、秋は低い所の森へ移っていました。
          季節によってクマと出会いやすい場所が変わることを意識しておくとよいでしょう。
        </li>
        <li>
          <strong>ふだんと違う動きをすることがある。</strong>北欧の雌のように、繁殖の時期などに一時的に遠くまで動く個体もいます。
        </li>
      </ul>
      <p>
        クマに出会ったときは、<strong>走らない・背を向けない・ゆっくり離れる</strong>が基本です。
        突進してきたら、クマスプレーを 5〜10m の距離で顔に向けて 1〜2 秒ずつ噴射します
        （環境省は、噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上・有効成分 CRC 1〜2% 程度の製品を推奨しています）。
        驚いたクマの防衛的な攻撃で接触が避けられないときは、うつ伏せになって首の後ろを手で守る防御姿勢をとります。
        一方、執拗に続く攻撃や、獲物として狙われていると考えられる攻撃では、反撃することが勧められています。
        詳しくは{" "}
        <Link href="/articles/encounter">クマに遭遇したらどうする</Link>
        と{" "}
        <Link href="/articles/bear-spray">クマスプレーの使い方</Link>
        をご覧ください。
      </p>

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告">次号も研究ダイジェストをお届けします。</NextIssue>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：原典と照らし合わせ、論文の内容と異なっていた記述を全面的に書き直しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Large Home Ranges and Possible Early Sexual Maturity in Scandinavian Bears（本号メイン）",
            citation: (
              <>
                Bjärvall, A., Sandegren, F., &amp; Wabakken, P. (1990).{" "}
                <em className="not-italic">Bears: Their Biology and Management</em> 8: 237–241.
              </>
            ),
            href: "https://doi.org/10.2307/3872924",
            linkText: "DOI: 10.2307/3872924 →",
          },
          {
            title:
              "Home ranges in adult Scandinavian brown bears (Ursus arctos): effect of mass, sex, reproductive category, population density and habitat type",
            citation: (
              <>
                Dahle, B., &amp; Swenson, J. E. (2003).{" "}
                <em className="not-italic">Journal of Zoology</em> 260(4): 329–335.
              </>
            ),
            href: "https://doi.org/10.1017/S0952836903003753",
            linkText: "DOI: 10.1017/S0952836903003753 →",
          },
          {
            title:
              "Seasonal changes in elevation and habitat use of the Asiatic black bear (Ursus thibetanus) in the Northern Japan Alps",
            citation: (
              <>
                Izumiyama, S., &amp; Shiraishi, T. (2004).{" "}
                <em className="not-italic">Mammal Study</em> 29(1): 1–8.
              </>
            ),
            href: "https://doi.org/10.3106/mammalstudy.29.1",
            linkText: "DOI: 10.3106/mammalstudy.29.1 →",
          },
        ]}
      />
    </ArticleShell>
  );
}
