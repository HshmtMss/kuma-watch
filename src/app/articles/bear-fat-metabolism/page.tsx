import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-fat-metabolism")!;

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
        秋のクマが食べ続けるのは、冬眠に備えて脂肪を蓄える<strong>ハイパーフェイジア (hyperphagia、過食期)</strong>
        と呼ばれる時期に入るためです。北米の野生生物当局は、この時期のアメリカクロクマが
        1 日 <strong>およそ 1 万 5 千〜2 万 kcal</strong> を食べると説明しています。
        本記事では、クマの脂肪の蓄え方と使い方について分かっていることを、獣医生理学の視点で整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            秋の食欲は<strong>ハイパーフェイジア</strong>という季節的な現象。北米のクロクマでは1日1.5万〜2万kcalとされる。
          </>,
          <>
            ヒグマでは<strong>インスリンの効き方や食欲の調節が季節で変わる</strong>ことが分かってきている。
          </>,
          <>
            秋の食べ物が少ない年は、食べ物を求めて<strong>人里に出てくるクマが増えやすい</strong>。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "hyperphagia", title: "ハイパーフェイジアとは" },
          { id: "hormone", title: "季節で変わるホルモンの働き" },
          { id: "hibernation", title: "冬眠中の脂肪の使い方" },
          { id: "climate", title: "秋の食べ物と出没の関係" },
          { id: "human-health", title: "人間の医学からの関心" },
          { id: "faq", title: "よくある質問" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="hyperphagia">ハイパーフェイジアとは</h2>
      <p>
        ハイパーフェイジア (hyperphagia) は直訳すると「過食」ですが、クマの場合は病気ではなく、
        冬眠前に脂肪を蓄えるための<strong>季節的な正常な現象</strong>です。夏の終わりから秋にかけて、食べる量が大きく増えます。
      </p>
      <ul>
        <li>
          摂取カロリー: 米ノースカロライナ州の野生生物当局は、アメリカクロクマが春〜夏の 1 日 2,000〜3,500 kcal から、
          この時期には<strong>およそ 15,000〜20,000 kcal</strong> に増やすと説明しています
        </li>
        <li>主な食物 (日本): 堅果類 (ブナ・ミズナラ・クリなど) / 果実 (ヤマブドウ・サルナシなど) / 昆虫 など</li>
      </ul>
      <p>
        数字は北米のクロクマについてのもので、日本のツキノワグマやヒグマの値ではありません。
      </p>

      <h2 id="hormone">季節で変わるホルモンの働き</h2>
      <p>
        <strong>レプチン (leptin)</strong> は脂肪細胞が出すホルモンで、脳に働いて食欲を抑えます。
        飼育下のグリズリー (ヒグマ) を調べた研究 (Rigano ら 2017) では、次のような季節変化が報告されています。
      </p>
      <ul>
        <li>脳にレプチンを投与すると、10 月には食べる量が減ったが、8 月には減らなかった</li>
        <li>春と秋の活動期にはインスリンがよく効き、冬眠中はインスリンが効きにくい状態 (インスリン抵抗性) になった。この変化は冬眠明けに元に戻る</li>
        <li>脂肪組織が出すホルモンの値は、脂肪が最も多くなる 10 月中旬に最も高くなった</li>
      </ul>
      <p>
        食欲やインスリンの効き方が季節に合わせて切り替わり、しかも元に戻る点が、クマの特徴として注目されています。
        ただし、その仕組みの細部はまだ研究の途中です。
      </p>

      <h2 id="hibernation">冬眠中の脂肪の使い方</h2>
      <p>
        冬眠中のクマは、食べず飲まず、排尿・排便もせずに数か月を過ごし、そのあいだ主に蓄えた脂肪をエネルギー源にします。
        先の研究でも、冬眠中は脂肪の分解が進んでいることを示す値が高くなっていました。
      </p>
      <ul>
        <li>
          <strong>体温</strong>: 大きくは下げない。アメリカクロクマでは 30〜36℃ の範囲に保たれ、代謝は基礎代謝の約 25% まで下がった
          (<Link href="/articles/research-digest-008">研究ダイジェスト Vol.8</Link>)
        </li>
        <li>
          <strong>窒素の再利用</strong>: 尿素の窒素を体の中で再利用し、筋肉のたんぱく質を保つと考えられている
        </li>
        <li>
          <strong>筋肉・骨</strong>: 何か月も動かずにいても、人の寝たきりに比べて筋肉や骨の衰えがずっと小さいとされる
        </li>
      </ul>

      <h2 id="climate">秋の食べ物と出没の関係</h2>
      <p>
        ブナやミズナラなどの実りは年によって大きく変わります (豊凶)。
        秋の食べ物が少ない年には、食べ物を求めて人里まで出てくるクマが増えやすいとされています。
      </p>
      <p>
        気候変動が実りや出没にどう影響するかは、まだ研究の途中です。
        出没が増える理由については <Link href="/articles/why-increasing">なぜクマ出没が増えているのか</Link> も参照してください。
      </p>

      <h2 id="human-health">人間の医学からの関心</h2>
      <p>
        クマの脂肪代謝は、人の病気を考えるヒントとしても研究されています。
      </p>
      <ul>
        <li>
          <strong>糖尿病・肥満</strong>: インスリン抵抗性を季節的に起こし、元に戻せる仕組み (Rigano ら 2017)
        </li>
        <li>
          <strong>動脈硬化</strong>: スウェーデンのヒグマで、血中の脂質が高いのに動脈硬化の兆候が見られなかったという報告 (Arinell ら 2012)
        </li>
        <li>
          <strong>筋萎縮・骨粗しょう症</strong>: 長く動かなくても筋肉や骨が衰えにくい仕組み
        </li>
      </ul>
      <p>
        いずれも治療法として実用化された段階ではなく、手がかりを探す研究です。
      </p>

      <ArticleFaq
        items={[
          {
            q: "冬眠中はトイレに行かないの？",
            a: "はい。冬眠中のクマは排尿も排便もしません。尿素の窒素は体の中で再利用されると考えられています。",
            aText: "はい。冬眠中のクマは排尿も排便もしません。尿素の窒素は体の中で再利用されると考えられています。",
          },
          {
            q: "冬眠しない「穴持たず」が増えている？",
            a: "冬眠の時期になっても活動している個体は「穴持たず」と呼ばれます。増えているかどうかを示す信頼できるデータは見当たりませんが、実なりの悪い年は冬に入っても出没情報に注意してください。",
            aText: "冬眠の時期になっても活動している個体は「穴持たず」と呼ばれます。増えているかどうかを示す信頼できるデータは見当たりませんが、実なりの悪い年は冬に入っても出没情報に注意してください。",
          },
          {
            q: "ハイパーフェイジア期のクマに会わないコツは？",
            a: "都道府県などが公表するブナ・ミズナラの豊凶 (実なり) 情報を確認し、凶作の年は特に山林・果樹園の周辺で注意する。トップの地図で地域の出没を確認するのも有効です。",
            aText: "都道府県などが公表するブナ・ミズナラの豊凶 (実なり) 情報を確認し、凶作の年は特に山林・果樹園の周辺で注意する。トップの地図で地域の出没を確認するのも有効です。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/autumn">秋のクマ対策 — なぜ秋が最も危険なのか</Link> /{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠の科学</Link> /{" "}
        <Link href="/articles/why-increasing">なぜクマ出没が増えているのか</Link>
      </p>

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="references">参考文献</h2>
      <ul className="text-sm">
        <li>
          Rigano, K. S., et al. (2017). Life in the fat lane: seasonal regulation of insulin sensitivity, food intake, and adipose biology in brown bears.{" "}
          <em>Journal of Comparative Physiology B</em> 187: 649–676.{" "}
          <a href="https://doi.org/10.1007/s00360-016-1050-9" target="_blank" rel="noopener noreferrer">DOI: 10.1007/s00360-016-1050-9</a>
        </li>
        <li>
          Arinell, K., et al. (2012). Brown bears (Ursus arctos) seem resistant to atherosclerosis despite highly elevated plasma lipids during hibernation and active state.{" "}
          <em>Clinical and Translational Science</em> 5: 269–272.{" "}
          <a href="https://doi.org/10.1111/j.1752-8062.2011.00370.x" target="_blank" rel="noopener noreferrer">DOI: 10.1111/j.1752-8062.2011.00370.x</a>
        </li>
        <li>
          Tøien, Ø., et al. (2011). Hibernation in black bears: independence of metabolic suppression from body temperature.{" "}
          <em>Science</em> 331: 906–909.{" "}
          <a href="https://doi.org/10.1126/science.1199435" target="_blank" rel="noopener noreferrer">DOI: 10.1126/science.1199435</a>
        </li>
        <li>
          N.C. Wildlife Resources Commission の生物学者の説明 (WLOS 報道、ハイパーフェイジア期のカロリー){" "}
          <a href="https://wlos.com/news/local/wildlife-officials-warn-black-bears-appetites-now-at-a-seasonal-high-during-fall-months-north-carolina-resources-commission-hyperphagia-phase-birdfeeders-avoid-encounters-safety-tips-gain-weight-hibernation" target="_blank" rel="noopener noreferrer">WLOS →</a>
        </li>
      </ul>
    </ArticleShell>
  );
}
