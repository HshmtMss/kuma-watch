import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-003")!;

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
        虎には縞があります。チーターには斑点があります。パンダには白黒模様があります。
        でも <strong>クマには、これといった目印がありません</strong>。
        全身がほぼ均一な毛色で、研究者でさえ「この個体は昨日見たあのクマと同じか？」
        を判定するのに何時間も悩むことがあります。
      </p>
      <p>
        ところが 2020 年、その常識を覆す研究が発表されました。
        <strong>AI が、ヒグマの「顔」だけで個体を見分けられる</strong>ようになったのです。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Automated facial recognition for wildlife that lack unique markings: A deep learning approach for brown bears
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Clapham, M., Miller, E., Nguyen, M., &amp; Darimont, C. T. (2020).{" "}
          <em className="not-italic">Ecology and Evolution</em> 10(23): 12883–12892.
        </div>
        <a
          href="https://doi.org/10.1002/ece3.6840"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1002/ece3.6840 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            ヒグマ <strong>132 個体・4,674 枚</strong>の画像を学習し、AI が顔だけで個体識別
          </li>
          <li>
            人間専門家とほぼ同等の <strong>84% 精度</strong>を達成
          </li>
          <li>
            個体数推定の <strong>「自動化」</strong>がついに視野に入った
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "problem", title: "クマの個体識別は、なぜ難しいのか" },
          { id: "story", title: "カナダの大学院生と、4,674 枚のクマ画像" },
          { id: "method", title: "AI はクマのどこを見ているのか" },
          { id: "results", title: "結果 — 専門家を追い抜く寸前まで来た" },
          { id: "why-matter", title: "なぜ「個体識別」がそんなに重要なのか" },
          { id: "japan", title: "日本のツキノワグマで使えるのか" },
          { id: "limits", title: "AI の弱点 — まだできないこと" },
          { id: "future", title: "次の 10 年で起こりそうなこと" },
          { id: "action", title: "今日からあなたができる 3 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="problem">クマの個体識別は、なぜ難しいのか</h2>
      <p>
        まず素朴な疑問。なぜクマの個体識別はそんなに大事なんでしょうか？
      </p>
      <p>
        野生動物の管理には <strong>「何頭いるのか」</strong>を知ることが、何より基本になります。
        頭数が分からなければ、捕獲枠も、保護目標も、人クマ軋轢の予測も、何も決められない。
      </p>
      <p>
        でも、クマを 1 頭ずつ追いかけて数えることはできません。じゃあどうするか？
        定番の方法が <strong>「カメラトラップで撮影して、個体識別する」</strong>です。
        同じ個体を何回も撮ったら、それを「2 頭」と数え間違えてはいけない。
        だからこそ、撮った写真の中で「これとこれは同じクマ」を判定する作業が要となるわけです。
      </p>
      <p>
        ここで困るのが、<strong>クマには分かりやすい目印がない</strong>こと。
      </p>
      <ul>
        <li>
          🐅 トラなら縞模様で識別可能（縞は指紋並みに個体固有）
        </li>
        <li>
          🦒 キリンなら斑点模様
        </li>
        <li>
          🐆 ヒョウもチーターも斑点
        </li>
        <li>
          🐻 クマは…<strong>毛がほぼ均一</strong>
        </li>
      </ul>
      <p>
        ツキノワグマには胸の三日月模様がありますが、これも個体差が小さく、撮影角度によっては全く写りません。
        ヒグマに至っては <strong>これといった目印が皆無</strong>です。
      </p>
      <p>
        だから今まで、ヒグマの個体識別は <strong>「経験を積んだ専門家が、目の特徴・耳の形・体の大きさを総合して判定する」</strong>
        という、極めて職人的な作業でした。1 枚の写真の判定に数十分かかることもある。
        年間で何万枚も撮れるカメラトラップ画像に対して、これでは人手が圧倒的に足りません。
      </p>

      <h2 id="story">カナダの大学院生と、4,674 枚のクマ画像</h2>
      <p>
        ブリティッシュコロンビア大学（ビクトリア校）の博士課程の学生、
        <strong>メラニー・クラップハム（Melanie Clapham）</strong>。
        野生のヒグマ研究に長年携わってきた彼女は、ある日こう考えました。
      </p>
      <p className="text-center text-sm italic text-stone-600">
        「人間の顔認証 AI が iPhone のロックを解除できるなら、クマの顔だって認識できるんじゃないか？」
      </p>
      <p>
        彼女が組んだチームには、コンピュータビジョンの専門家 Ed Miller と Mary Nguyen、
        野生動物保全学の Chris Darimont が参加。<strong>BearID Project</strong> という非営利チームが立ち上がりました。
      </p>
      <p>
        必要なのは大量のヒグマ画像です。彼らはアラスカの <strong>カトマイ国立公園</strong>と
        ブリティッシュコロンビア州の <strong>クニソンインレット保護区</strong>から、
        計 <strong>132 個体・4,674 枚</strong>のヒグマ顔写真を集めました。
      </p>
      <p>
        これは大変な作業でした。何しろ <strong>「この写真とこの写真は同じクマ」</strong>と
        ラベル付けされたデータが必要。最初の段階で、人間の専門家チームが
        全 4,674 枚を見比べて 132 個体に分類しました。これだけで数ヶ月の労力。
      </p>

      <h2 id="method">AI はクマのどこを見ているのか</h2>
      <p>
        Clapham らが使ったのは <strong>畳み込みニューラルネットワーク（CNN）</strong>という、
        画像認識で最も実績のある AI 技術。Apple や Google の顔認証アプリと同じ仕組みです。
      </p>
      <p>
        ただし、人間の顔とクマの顔では「特徴の出方」が違います。
        人間の顔認証 AI は目・鼻・口の位置関係を主に学習しますが、クマの場合は何が決め手なのか？
      </p>
      <p>
        Clapham らは AI が「どこを見ているか」を可視化する <strong>Grad-CAM</strong> という技術を使って解析しました。
        すると AI は、人間専門家とは少し違う特徴に注目していることが分かりました。
      </p>
      <ul>
        <li>
          <strong>目の周りの皮膚の質感</strong>（ヒトの目尻のしわのような）
        </li>
        <li>
          <strong>鼻の形・鼻孔の位置関係</strong>
        </li>
        <li>
          <strong>耳の形と毛束の生え方</strong>
        </li>
        <li>
          <strong>顔全体のシルエット</strong>
        </li>
      </ul>
      <p>
        「人間の経験的判断」と「AI が見つけた特徴」は微妙にズレており、これが研究者を驚かせました。
        AI は人間が言語化できていない、しかし統計的には有効な特徴を発見していた、と言えます。
      </p>

      <h2 id="results">結果 — 専門家を追い抜く寸前まで来た</h2>
      <p>
        論文で報告された主な結果は次の通りです。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">指標</th>
              <th className="px-3 py-2 text-left">精度</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">個体識別の正答率</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">84%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">「同じ個体ペア」の判定精度</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">94%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">「違う個体ペア」の判定精度</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">98%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">処理時間（1 枚あたり）</td>
              <td className="px-3 py-2 text-green-700 font-bold">数ミリ秒</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ヒグマ専門家の判定精度は <strong>論文中で 80〜85%</strong>と報告されており、
        AI はそれと <strong>ほぼ並んだ</strong>と言える結果でした。
        「並んだ」ことに大きな意味があります。なぜなら AI は、専門家が数十分かかる判定を
        <strong>数ミリ秒</strong>で行えるからです。
      </p>
      <p>
        これにより、年間数十万枚のカメラトラップ画像を <strong>1 日で全件処理</strong>することが現実的になりました。
        ヒグマの個体数推定の労力が、文字通り桁違いに軽くなったのです。
      </p>

      <h2 id="why-matter">なぜ「個体識別」がそんなに重要なのか</h2>
      <p>
        個体識別ができると、何が変わるのか。実は、これは野生動物管理の <strong>核心中の核心</strong>です。
      </p>
      <h3>① 個体数の推定が正確になる</h3>
      <p>
        「カメラに 100 回写った」を「100 頭」と数え間違えるか、「20 頭がそれぞれ 5 回ずつ写った」と
        正確に把握できるかは、政策判断に直結します。捕獲上限・保護計画の前提が変わります。
      </p>
      <h3>② 行動の時系列追跡ができる</h3>
      <p>
        「あの個体は去年は山にいて、今年は街に下りた」「子グマを連れていた母グマが翌年は単独」
        など、個体単位の物語を追えるようになります。
      </p>
      <h3>③ 危険個体の特定</h3>
      <p>
        <strong>「人を襲ったクマ」と「同じ場所をうろつくクマ」が同一個体か</strong>を判定できれば、
        管理計画が大きく変わります。北海道の OSO18 のように、特定個体を識別して追跡するケースで威力を発揮します。
      </p>
      <h3>④ 遺伝的多様性の評価</h3>
      <p>
        絶滅危惧個体群（兵庫・西中国地域など）で、誰と誰が血縁関係にあるかが分かれば、
        近親交配の警戒・保護介入の優先順位を判断できます。
      </p>

      <h2 id="japan">日本のツキノワグマで使えるのか</h2>
      <p>
        Clapham らの研究はヒグマが対象でしたが、日本のツキノワグマでも同じ AI が使えるでしょうか？
      </p>
      <h3>① 技術的にはほぼ可能</h3>
      <p>
        ツキノワグマには <strong>胸の白い三日月模様</strong>という、ヒグマにはない目印があります。
        これは大きな利点で、模様の形・大きさ・濃淡が個体ごとに微妙に異なります。
        ヒグマで 84% を達成した AI は、ツキノワグマでは <strong>さらに高い精度</strong>が出る可能性があります。
      </p>
      <h3>② すでに国内でも研究が進行中</h3>
      <p>
        環境省・各都道府県の研究機関で、ツキノワグマの個体識別 AI の開発が進められています。
        KumaWatch を運営する獣医工学ラボでも、関連技術の研究を進めています（{" "}
        <Link href="/articles/bear-detection-ai">クマ検知 AI とは</Link>{" "}
        を参照）。
      </p>
      <h3>③ 課題はデータの量</h3>
      <p>
        AI 学習にはラベル付きデータが大量に必要です（Clapham らは 4,674 枚を使用）。
        日本では公的に蓄積されたカメラトラップ画像のオープンデータが乏しく、これが普及のボトルネックです。
        自治体・研究機関・市民科学が連携する仕組みが求められています。
      </p>

      <h2 id="limits">AI の弱点 — まだできないこと</h2>
      <p>
        84% という数字は素晴らしいですが、AI には正直に向き合うべき<strong>限界</strong>もあります。
      </p>
      <ul>
        <li>
          <strong>夜間 IR 撮影に弱い</strong>: 学習データが日中の自然光画像中心で、赤外線映像では精度が落ちる
        </li>
        <li>
          <strong>季節変化に弱い</strong>: 春に痩せた個体と秋に太った同じ個体を「別」と判定することも
        </li>
        <li>
          <strong>幼齢個体の追跡が難しい</strong>: 子グマは成長で顔つきが急変する
        </li>
        <li>
          <strong>「学習データに無い顔」に弱い</strong>: 新しい個体を「既知の誰か」と誤判定することがある
        </li>
        <li>
          <strong>地域個体群を超えた汎化が未確認</strong>: アラスカで学習した AI が、日本のツキノワグマでそのまま動く保証はない
        </li>
      </ul>

      <h2 id="future">次の 10 年で起こりそうなこと</h2>
      <p>
        Clapham 論文が発表されてから 5 年が経った 2026 年現在、技術はさらに進化しています。
      </p>
      <ul>
        <li>
          <strong>顔だけでなく、体型・歩行パターン・耳の傷など複数特徴の統合</strong>で精度向上
        </li>
        <li>
          <strong>少数データで学習できる few-shot learning</strong>で、地域個体群への適用が容易に
        </li>
        <li>
          <strong>リアルタイム識別</strong>: スマートカメラに AI を内蔵し、現場で即座に個体識別
        </li>
        <li>
          <strong>市民科学への展開</strong>: 一般市民がスマホで撮った画像を送り、AI が自動で個体識別する仕組み
        </li>
        <li>
          <strong>クマ以外への展開</strong>: シカ・イノシシ・タヌキなどの個体識別にも応用が広がる
        </li>
      </ul>

      <h2 id="action">今日からあなたができる 3 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>クマの目撃情報を「写真付き」で投稿する</strong> — 個体識別 AI の学習に貢献できます。
          KumaWatch の{" "}
          <Link href="/submit">出没情報の投稿</Link>
          や、各自治体の専用フォームから写真投稿が可能。
        </li>
        <li>
          <strong>カメラトラップ研究を応援する</strong> — 自治体・大学・NPO のカメラトラップ事業に
          市民として関与（土地の貸出、視察・寄付）することで、AI 学習用データの蓄積が進みます。
        </li>
        <li>
          <strong>「同じクマが何度も来る」現象に注意</strong> — 個体識別 AI が普及すれば、
          「あなたの家の周辺に来るあのクマは、隣町でも目撃されているあの個体」と分かるようになります。
          詳細は{" "}
          <Link href="/articles/bear-monitoring">クマ研究のモニタリング技術</Link>
          を参照してください。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Automated facial recognition for wildlife that lack unique markings: A deep learning approach for brown bears（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Clapham, M., Miller, E., Nguyen, M., &amp; Darimont, C. T. (2020).{" "}
              <em className="not-italic">Ecology and Evolution</em> 10(23): 12883–12892.
            </div>
            <a
              href="https://doi.org/10.1002/ece3.6840"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1002/ece3.6840 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Automatically identifying, counting, and describing wild animals in camera-trap images with deep learning（カメラトラップ AI の基礎論文）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Norouzzadeh, M. S., Nguyen, A., Kosmala, M., et al. (2018).{" "}
              <em className="not-italic">PNAS</em> 115(25): E5716–E5725.
            </div>
            <a
              href="https://doi.org/10.1073/pnas.1719367115"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1073/pnas.1719367115 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              BearID Project — Clapham らの非営利開発プロジェクト
            </div>
            <a
              href="https://bearid.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              bearid.org →
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
          次号予告 — Vol.4
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「気候変動でクマの冬眠は短くなっている？」</strong> —
          ヨーロッパヒグマの 22 年分の冬眠データを分析した Pigeon 2016 を精読。
          冬眠開始が 2 週間遅れ、覚醒が早まり、活動期間が年 1 ヶ月以上延びる現象を解説します。
        </div>
      </div>
    </ArticleShell>
  );
}
