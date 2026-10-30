import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints, References } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-kidney-nitrogen-recycling")!;

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
        冬眠中のクマは何か月ものあいだ、<strong>食べず、飲まず、排尿も排便もしません</strong>。
        人の腎臓が働かなくなれば、体にたまった老廃物で<strong>尿毒症</strong>になります。
        ところが冬眠中のクマでは、血液中の尿素がむしろ<strong>減る</strong>ことが観察されています。
        クマは、タンパク質の分解で出る窒素を尿として捨てる代わりに、体の中で回収して使い直していると考えられています。
        本記事では、確かめられていることを中心に、クマの腎臓と窒素リサイクルの研究を紹介します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            冬眠中のクマは<strong>数か月排尿しないのに尿毒症にならない</strong>。
          </>,
          <>
            野生のヒグマの調査では、冬眠中に<strong>尿素が約半分に減り</strong>、窒素を再利用していると考えられている。
          </>,
          <>
            この仕組みは<strong>慢性腎臓病の研究のヒント</strong>として注目されているが、治療に使える段階ではない。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "context", title: "なぜ「排尿しない」が問題なのか" },
          { id: "brown-bear", title: "野生ヒグマの血液でわかったこと" },
          { id: "kidney", title: "冬眠中の腎臓と膀胱" },
          { id: "recycling", title: "窒素はどうリサイクルされるのか" },
          { id: "muscle", title: "筋肉の維持" },
          { id: "ckd", title: "人の慢性腎臓病研究とのつながり" },
          { id: "limits", title: "まだわかっていないこと" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="context">なぜ「排尿しない」が問題なのか</h2>
      <p>
        体のタンパク質が分解されると、窒素がアンモニアとして出てきます。
        哺乳類はこれを肝臓で毒性の低い<strong>尿素</strong>に変え、腎臓から尿として捨てています。
        尿が出なければ尿素などの老廃物が血液中にたまり、人では尿毒症になります。
      </p>
      <p>
        冬眠中のクマは、エネルギーの大部分を蓄えた脂肪から得ていますが、
        体のタンパク質も少しずつ入れ替わっています。それでも尿を出さずに冬を越せるのはなぜか、
        というのがこの分野の大きな問いです。
      </p>

      <h2 id="brown-bear">野生ヒグマの血液でわかったこと</h2>
      <p>
        Stenvinkel ら（2013）は、スウェーデンの野生のヒグマ 16 頭から冬眠中と夏の血液を採り、比べました。
      </p>
      <ul>
        <li>腎機能の目安になる<strong>クレアチニンは冬に約 2.5 倍</strong>に上がった</li>
        <li>一方で<strong>尿素は冬に約半分</strong>に下がった</li>
        <li>著者らは、冬眠中のクマには尿素の窒素を再利用する優れた能力があると解釈している</li>
        <li>腎機能が落ち、長く動かない状態なのに、炎症は起きていなかった</li>
      </ul>
      <p>
        つまり、腎臓のろ過は落ちているのに、尿素はたまらずに減っている、ということです。
        なお著者らは、クレアチニンの測定法がヒグマ用に検証されたものではない点も断っています。
      </p>

      <h2 id="kidney">冬眠中の腎臓と膀胱</h2>
      <p>
        冬眠動物の腎臓についての総説（Jani ら 2013）は、クマについての過去の研究を次のようにまとめています。
      </p>
      <ul>
        <li>
          冬眠中は、活動期に比べて<strong>腎血流量が約 36%、糸球体ろ過量（GFR）が約 68% 低下</strong>していた（Brown ら 1971）
        </li>
        <li>
          冬眠中のクマの尿量は、活動期より <strong>95% 少なかった</strong>（Nelson らの研究）
        </li>
        <li>
          クマは、腎臓だけでなく<strong>膀胱でも</strong>ろ過された液を再吸収できる
        </li>
        <li>
          冬眠中に尿素が下がるのは、尿素の生成が減り、再利用が増えるため
        </li>
      </ul>

      <h2 id="recycling">窒素はどうリサイクルされるのか</h2>
      <p>
        考えられている流れは次のとおりです。
      </p>
      <ol>
        <li>体のタンパク質の分解で出た窒素が、肝臓で尿素になる</li>
        <li>尿素の一部が腸に移り、腸内細菌の酵素（ウレアーゼ）で分解される</li>
        <li>出てきた窒素が体に吸収され、アミノ酸やタンパク質の材料に使い直される</li>
      </ol>
      <p>
        この「腸内細菌を介した窒素リサイクル」は、冬眠するジリス（地リス）の研究で、
        尿素の窒素が実際に腸内細菌を経由して体のタンパク質に取り込まれることが確かめられました
        （Regan ら 2022, <em>Science</em>）。同じことがクマでどこまで起きているかは、まだ十分には確かめられていません。
      </p>
      <p>
        冬眠中のヒグマの腸内細菌が季節で入れ替わることは報告されています
        （<Link href="/articles/research-digest-016">研究ダイジェスト Vol.16</Link>）。
        ただしその研究は脂肪の蓄積との関係を調べたもので、窒素リサイクルを直接調べたものではありません。
      </p>

      <h2 id="muscle">筋肉の維持</h2>
      <p>
        何か月も動かなければ、人なら筋肉が大きく衰えます。クマではその衰えが小さいことが知られています。
      </p>
      <ul>
        <li>
          アメリカクロクマの研究では、巣穴で約 110 日過ごした後の筋力の低下は約 29% で、
          同じ期間寝たきりになった人で予想される低下のおよそ半分だった（Lohuis ら 2007, <em>Physiological and Biochemical Zoology</em>）
        </li>
        <li>
          同じグループの別の研究では、冬眠中の筋肉のタンパク質の合成と分解はどちらも夏より下がったが、
          釣り合いが保たれていた（Lohuis ら 2007, <em>Comparative Biochemistry and Physiology B</em>）
        </li>
      </ul>
      <p>
        窒素のリサイクルが、こうした筋肉の維持をどの程度支えているかは、今後の研究課題です。
      </p>

      <h2 id="ckd">人の慢性腎臓病研究とのつながり</h2>
      <p>
        慢性腎臓病（CKD）は世界中で多くの人がかかっている病気で、進行すると透析や腎移植が必要になります。
        スウェーデン・カロリンスカ研究所の Stenvinkel らは、冬眠するクマなど動物たちが
        腎臓の負担や筋肉の衰えにどう対処しているかを調べることが、CKD の新しい治療の考え方につながる可能性があると、
        総説（2018, <em>Nature Reviews Nephrology</em>）で論じています。
      </p>
      <p>
        ただし、これは「研究のヒント」の段階です。クマの仕組みをそのまま人の治療に使えるわけではありません。
      </p>

      <h2 id="limits">まだわかっていないこと</h2>
      <ul>
        <li>
          <strong>クマでの腸内細菌の役割</strong>: 地リスでは確かめられたが、クマで同じ仕組みがどの程度働いているかは未確認
        </li>
        <li>
          <strong>春に腎臓の働きが戻る仕組み</strong>: 冬眠明けに腎機能がどう回復するのかは、くわしくわかっていない
        </li>
        <li>
          <strong>ツキノワグマのデータ</strong>: ここで紹介した研究は主にヒグマとアメリカクロクマ。
          ツキノワグマについてのデータは限られている
        </li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "冬眠中のクマは本当に「全く排尿しない」の？",
            a: "冬眠中のクマは排尿しないとされます。腎臓のろ過自体は止まっておらず（活動期より約 7 割低下）、つくられた尿の成分は膀胱からも再吸収されると考えられています。",
            aText: "冬眠中のクマは排尿しないとされます。腎臓のろ過自体は止まっておらず（活動期より約 7 割低下）、つくられた尿の成分は膀胱からも再吸収されると考えられています。",
          },
          {
            q: "人も同じことができるようになる？",
            a: "今のところできません。クマや地リスの仕組みは、慢性腎臓病や筋肉の衰えの研究のヒントとして注目されている段階です。",
            aText: "今のところできません。クマや地リスの仕組みは、慢性腎臓病や筋肉の衰えの研究のヒントとして注目されている段階です。",
          },
          {
            q: "ツキノワグマもヒグマと同じ仕組み？",
            a: "似た仕組みを持つと考えられますが、ツキノワグマで直接調べたデータは限られています。",
            aText: "似た仕組みを持つと考えられますが、ツキノワグマで直接調べたデータは限られています。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "Metabolic Changes in Summer Active and Anuric Hibernating Free-Ranging Brown Bears (Ursus arctos)",
            citation: (
              <>
                Stenvinkel, P., et al. (2013). <em className="not-italic">PLoS ONE</em> 8(9): e72934.
              </>
            ),
            href: "https://doi.org/10.1371/journal.pone.0072934",
            linkText: "DOI link →",
          },
          {
            title: "Renal adaptation during hibernation",
            citation: (
              <>
                Jani, A., Martin, S. L., Jain, S., Keys, D., &amp; Edelstein, C. L. (2013).{" "}
                <em className="not-italic">American Journal of Physiology – Renal Physiology</em> 305(11): F1521–F1532.
              </>
            ),
            href: "https://doi.org/10.1152/ajprenal.00675.2012",
            linkText: "DOI link →",
          },
          {
            title: "Nitrogen recycling via gut symbionts increases in ground squirrels over the hibernation season",
            citation: (
              <>
                Regan, M. D., et al. (2022). <em className="not-italic">Science</em> 375(6579): 460–463.
              </>
            ),
            href: "https://doi.org/10.1126/science.abh2950",
            linkText: "DOI link →",
          },
          {
            title: "Hibernating Bears Conserve Muscle Strength and Maintain Fatigue Resistance",
            citation: (
              <>
                Lohuis, T. D., Harlow, H. J., Beck, T. D. I., &amp; Iaizzo, P. A. (2007).{" "}
                <em className="not-italic">Physiological and Biochemical Zoology</em> 80(3): 257–269.
              </>
            ),
            href: "https://doi.org/10.1086/513190",
            linkText: "DOI link →",
          },
          {
            title: "Hibernating black bears (Ursus americanus) experience skeletal muscle protein balance during winter anorexia",
            citation: (
              <>
                Lohuis, T. D., Harlow, H. J., &amp; Beck, T. D. I. (2007).{" "}
                <em className="not-italic">Comparative Biochemistry and Physiology Part B</em> 147(1): 20–28.
              </>
            ),
            href: "https://doi.org/10.1016/j.cbpb.2006.12.020",
            linkText: "DOI link →",
          },
          {
            title: "Novel treatment strategies for chronic kidney disease: insights from the animal kingdom",
            citation: (
              <>
                Stenvinkel, P., et al. (2018). <em className="not-italic">Nature Reviews Nephrology</em> 14: 265–284.
              </>
            ),
            href: "https://doi.org/10.1038/nrneph.2017.169",
            linkText: "DOI link →",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠の科学</Link> /{" "}
        <Link href="/articles/bear-fat-metabolism">クマの脂肪蓄積メカニズム</Link> /{" "}
        <Link href="/articles/bear-brain-cognition">クマの脳と認知能力</Link>
      </p>
    </ArticleShell>
  );
}
