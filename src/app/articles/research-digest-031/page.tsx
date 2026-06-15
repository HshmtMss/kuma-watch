import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-031")!;

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
      {/* オープニングフック */}
      <p className="lead">
        「今年はクマが多い」「いや、去年は静かだった」——
        毎年のように振れるこの差は、気のせいでも偶然でもありません。
        その正体の多くは、<strong>山の木の実が「なったか・ならなかったか」</strong>にあります。
        ブナの豊凶とクマの里への出没を、北日本の長期データで初めて正面から結びつけた古典が、
        今回読む Oka 2004 です。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Relationship between changes in beechnut production and Asiatic black
          bears in northern Japan
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Oka, T., Miura, S., Masaki, T., Suzuki, W., Osumi, K., &amp; Saitoh, S.
          (2004). <em className="not-italic">Journal of Wildlife Management</em>{" "}
          68(4): 979–986.
        </div>
        <a
          href="https://scholar.google.com/scholar?q=Relationship+between+changes+in+beechnut+production+and+Asiatic+black+bears+in+northern+Japan"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          Google Scholar で原典を探す →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            ブナの実は<strong>「豊作 → 翌年は凶作」</strong>を広い範囲で同調して繰り返す
          </li>
          <li>
            <strong>堅果が凶作の年</strong>に、クマの里への出没と有害捕獲が<strong>急増</strong>した
          </li>
          <li>
            だから今は各県が<strong>「堅果豊凶調査」で出没を事前予測</strong>している
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intro", title: "「クマ当たり年」は、なぜ起きるのか" },
          { id: "masting", title: "ブナは「気まぐれ」に実をつける — マスティング" },
          { id: "finding", title: "凶作の年、クマは里に降りてくる" },
          { id: "mechanism", title: "なぜ凶作だと出てくるのか" },
          { id: "legacy", title: "この論文が変えた日本のクマ対策" },
          { id: "modern", title: "近年の「大量出没」と重ねて読む" },
          { id: "limits", title: "この研究の限界" },
          { id: "action", title: "私たちにできること" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">「クマ当たり年」は、なぜ起きるのか</h2>
      <p>
        クマの出没件数は、年によって何倍も変わります。
        ある年は全国のニュースがクマ一色になり、翌年は驚くほど静か——。
        この「振れ」の主因として、古くから現場の経験則として語られてきたのが
        <strong>「山の木の実の出来」</strong>でした。
      </p>
      <p>
        ツキノワグマは秋、冬眠に向けて大量のカロリーを蓄えます。
        その主食が、<strong>ブナ・ミズナラ・コナラといったブナ科の堅果（どんぐり）</strong>。
        この実が山で十分にとれれば、クマはわざわざ里に出てくる理由がありません。
        逆に山が「不作」なら——。Oka らは、この経験則を<strong>長期データで検証</strong>しました。
      </p>

      <h2 id="masting">ブナは「気まぐれ」に実をつける — マスティング</h2>
      <p>
        ブナ（<em>Fagus crenata</em>）には、独特の性質があります。
        毎年コンスタントに実をつけるのではなく、<strong>豊作の年と凶作の年が激しく入れ替わる</strong>。
        しかもこの豊凶が、<strong>広い地域で同調して起こる</strong>のです。
        これを<strong>マスティング（masting／豊凶現象）</strong>と呼びます。
      </p>
      <p>
        ある年、東北一帯のブナが一斉に大豊作になる。すると翌年あたりは一斉に凶作になる。
        山全体で「今年は実が無い」という状態が、広域で同時に発生しうる——
        ここがクマ問題にとって決定的に重要な点です。
        局所的な不作なら、クマは隣の谷へ移動すれば済む。
        しかし<strong>広域同調の凶作</strong>では、逃げ場が無く、行き着く先が<strong>人里</strong>になります。
      </p>

      <h2 id="finding">凶作の年、クマは里に降りてくる</h2>
      <p>
        Oka らは北日本（東北地方）を対象に、
        <strong>ブナ堅果の生産量の年変動</strong>と、
        <strong>クマの出没・有害捕獲（駆除）数の年変動</strong>を突き合わせました。
      </p>
      <p>
        結論はシンプルかつ強力です。
        <strong>堅果が凶作だった年に、クマの里への出没と有害捕獲が大きく増えた</strong>。
        逆に豊作の年は、相対的に静かだった。
        「木の実の出来」と「クマが人の生活圏に現れる頻度」が、
        年単位でしっかり連動していたのです。
      </p>
      <div className="not-prose my-4 rounded-2xl border border-stone-200 bg-white p-5">
        <div className="text-xs font-semibold uppercase tracking-widest text-stone-500">
          論文が示した関係（要約）
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>ブナ豊作の年 → クマは山にとどまる → 出没・捕獲は少ない</li>
          <li>
            ブナ凶作の年 → 餌を求めて行動圏が広がる → 里への出没・捕獲が<strong>急増</strong>
          </li>
        </ul>
      </div>

      <h2 id="mechanism">なぜ凶作だと出てくるのか</h2>
      <p>
        メカニズムは「お腹が空いたから」だけではありません。
        冬眠を控えた秋のクマにとって、堅果は<strong>脂肪を一気に蓄えられる高効率の食料</strong>です。
        これが無いと、クマは<strong>より広い範囲を歩き回って代替の餌を探す</strong>ことになります。
      </p>
      <p>
        その「代替の餌」が、しばしば人里にあります。
        収穫されずに残った<strong>柿・栗・クリ</strong>、
        生ゴミ、放置された果樹、墓地の供物——。
        山に実が無い年ほど、こうした<strong>里の誘引物</strong>の相対的な価値が上がり、
        クマを人の生活圏へ引き寄せます。
        「凶作 → 行動圏拡大 → 里の誘引物に到達 → 出没・事故・捕獲」という連鎖です。
      </p>

      <h2 id="legacy">この論文が変えた日本のクマ対策</h2>
      <p>
        Oka 2004 の最大の功績は、<strong>「クマの出没は予測できる」</strong>という発想を
        データで裏づけたことです。
        山の堅果の出来を秋の早い段階で調べれば、その年の出没リスクを<strong>事前に</strong>見積もれる。
      </p>
      <p>
        この考え方は、いま日本各地で実装されています。
        多くの県が秋に<strong>「ブナ科堅果類の豊凶調査」</strong>を行い、
        「今年は凶作なので出没多発の恐れ」といった<strong>注意報・予報</strong>を発表する。
        KumaWatch が参照している京都府の「どんぐり豊凶調査」もその一つです。
        現場の経験則を、科学と行政の意思決定につないだ——それがこの論文の遺産です。
      </p>

      <h2 id="modern">近年の「大量出没」と重ねて読む</h2>
      <p>
        近年、日本では数年おきに<strong>「過去最多」級の大量出没</strong>が報じられます。
        その多くの年に共通するのが、<strong>ブナ・ミズナラの広域凶作</strong>でした。
        Oka 2004 が東北で示した関係は、20 年を経てもなお、
        全国のクマ問題を読み解く<strong>基本の物差し</strong>であり続けています。
      </p>
      <p>
        ただし注意したいのは、堅果の凶作は<strong>「引き金」ではあっても「すべて」ではない</strong>こと。
        近年は、過疎・耕作放棄で<strong>里と山の境界（緩衝帯）が曖昧</strong>になり、
        クマの生息域そのものが人里へ拡大しています。
        「凶作という年ごとの波」と「生息域拡大という長期トレンド」が重なって、
        出没の規模が底上げされている——というのが今の理解です。
      </p>

      <h2 id="limits">この研究の限界</h2>
      <ul>
        <li>
          <strong>相関であって、単純な因果の証明ではない</strong>: 凶作年に出没が増える関係は強いが、
          気象・個体数・人側の記録の変化なども背景で絡む
        </li>
        <li>
          <strong>対象は北日本のブナ帯</strong>: ミズナラ・コナラ主体の地域や西日本にそのまま当てはめるには注意が要る
        </li>
        <li>
          <strong>「出没＝捕獲数」で測る難しさ</strong>: 捕獲数は人の対応や制度にも左右されるため、クマの行動そのものの指標としては間接的
        </li>
      </ul>

      <h2 id="action">私たちにできること</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>秋は「豊凶情報」を確認する</strong> — お住まいの県の堅果豊凶調査・出没注意報をチェック。
          凶作の年は、例年より警戒レベルを一段上げる。
        </li>
        <li>
          <strong>里の誘引物を断つ</strong> — 収穫しない柿・栗は早めに処理、生ゴミは前夜に出さない。
          山が不作の年ほど、これがクマを呼ぶ「最後の一押し」になります。
        </li>
        <li>
          <strong>「静かな年」に油断しない</strong> — 豊作の翌年は凶作になりやすい。
          静かだった年の翌秋こそ、出没が跳ねる可能性があります。
        </li>
      </ol>
      <p>
        柿や生ゴミなど里の誘引物の管理は{" "}
        <Link href="/measures">クマ対策の総合ガイド</Link>
        にもまとめています。
      </p>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Relationship between changes in beechnut production and Asiatic
              black bears in northern Japan（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Oka, T., Miura, S., Masaki, T., Suzuki, W., Osumi, K., &amp;
              Saitoh, S. (2004).{" "}
              <em className="not-italic">Journal of Wildlife Management</em>{" "}
              68(4): 979–986.
            </div>
            <a
              href="https://scholar.google.com/scholar?q=Relationship+between+changes+in+beechnut+production+and+Asiatic+black+bears+in+northern+Japan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              Google Scholar で原典を探す →
            </a>
          </li>
        </ol>
      </div>

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <div className="not-prose my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
          次号予告 — Vol.32
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマ鈴は本当に効くのか？」</strong> —
          古典 Jope 1985 を起点に、鈴・声・音の何がクマに「人の接近」を伝えるのか、
          その有効性と限界を冷静に精読します。
        </div>
      </div>
    </ArticleShell>
  );
}
