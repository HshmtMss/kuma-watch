import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints, References } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-aging")!;

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
        野生のクマは何年くらい生きるのでしょうか。環境省は捕獲個体の記録から、
        野生下の寿命を<strong>ツキノワグマで 15〜20 歳、ヒグマで 20 歳程度</strong>と見ています。
        北米では 30 歳を超えた野生個体も記録されていますが、それは例外的な長寿です。
        本記事では、クマの年齢の調べ方、高齢のクマに見られる変化、
        そして「高齢のクマが人里に出てくるのか」という疑問について、確かめられていることを整理します。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            野生下の寿命は<strong>ツキノワグマ 15〜20 歳、ヒグマ 20 歳程度</strong>（環境省）。
          </>,
          <>
            年齢は<strong>歯のセメント質の層</strong>を数えて調べる。30 歳を超える野生個体は例外的。
          </>,
          <>
            人里への出没は<strong>高齢個体に限らない</strong>。若いオスの分散や秋の木の実の不作が大きな要因。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "lifespan", title: "クマの寿命" },
          { id: "age-estimate", title: "野生クマの年齢の調べ方" },
          { id: "old-age", title: "高齢のクマに見られる変化" },
          { id: "behavior", title: "高齢のクマは人里に出やすいのか" },
          { id: "hibernation", title: "冬眠と筋肉 — 研究が注目する点" },
          { id: "death", title: "野生のクマはどう死ぬか" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="lifespan">クマの寿命</h2>
      <ul>
        <li>
          <strong>野生のツキノワグマ</strong>: 捕獲個体の記録から 15〜20 歳程度（環境省）。
          本州の捕獲個体では、メスで 23 歳、オスで 25 歳の記録がある（環境省 中国四国地方環境事務所）
        </li>
        <li>
          <strong>野生のヒグマ</strong>: 捕獲個体の記録から 20 歳程度（環境省）
        </li>
        <li>
          <strong>海外の長寿記録</strong>: 米ミネソタ州の野生のアメリカクロクマ（メス）が推定 39 歳半で死亡（ミネソタ州天然資源局、2013 年）。
          米イエローストーン周辺では、34 歳のグリズリー（ヒグマ）が地域の最高齢記録とされた（2021 年）
        </li>
      </ul>
      <p>
        野生では、ここに挙げた年齢まで生きる個体は多くありません。
        子グマのうちに死ぬ個体や、捕獲される個体も多いためです。
        飼育下では食べ物や治療が保証されるため、野生より長生きする個体もいます。
      </p>

      <h2 id="age-estimate">野生クマの年齢の調べ方</h2>
      <p>
        野生のクマの年齢は、見た目だけでは正確にわかりません。よく使われるのは次の方法です。
      </p>
      <ul>
        <li>
          <strong>歯のセメント質の層を数える</strong>: 歯の根を覆うセメント質には、
          樹木の年輪のような層が 1 年に 1 本ずつできる。抜いた小さな前臼歯を薄く切って数える。
          日本でも海外でも、捕獲個体の年齢を調べる標準的な方法
        </li>
        <li>
          <strong>歯のすり減り・頭骨の状態</strong>: おおよその目安にはなるが、セメント質ほど正確ではない
        </li>
      </ul>
      <p>
        捕獲個体の年齢を積み重ねることで、地域のクマの年齢構成や、繁殖を始める年齢などがわかります。
      </p>

      <h2 id="old-age">高齢のクマに見られる変化</h2>
      <p>
        高齢になると、ほかの哺乳類と同じように、歯のすり減りや欠け、関節の衰えなどが起きると考えられます。
        たとえばイエローストーンで最高齢とされた 34 歳のグリズリーは、捕獲時に歯が 3 本しか残っていなかったと報じられています。
      </p>
      <p>
        ただし、野生の高齢クマがどんな病気をどのくらいの割合で抱えているかを示した国内のまとまったデータは、
        ほとんどありません。飼育下の高齢個体では、動物園で健康管理や食事の工夫が行われています。
      </p>

      <h2 id="behavior">高齢のクマは人里に出やすいのか</h2>
      <p>
        「年を取って山で食べ物を取れなくなったクマが人里に下りてくる」という話を聞くことがありますが、
        人里に出てくるクマが高齢個体に偏っていることを示すデータは、少なくとも本記事の調べた範囲ではありません。
      </p>
      <p>
        環境省は、人の生活圏への出没が増える要因として次のようなことを挙げています。
      </p>
      <ul>
        <li>
          <strong>若いオスの分散</strong>: 6〜7 月ごろ、親から離れた若いオスが生まれた場所から離れて移動する。
          春から夏の出没が増える要因になる
        </li>
        <li>
          <strong>秋の木の実の不作</strong>: ブナ・ミズナラなどの堅果類が不作の年は行動圏が広がり、
          クリやカキなどを求めて人里への出没が増える
        </li>
      </ul>
      <p>
        つまり、人里に出てくるクマは高齢個体とは限りません。年齢にかかわらず、
        市街地でクマを見たら距離にかかわらず 110 番してください。詳しくは{" "}
        <Link href="/articles/urban-encounter">アーバンベアと市街地遭遇</Link> を参照してください。
      </p>

      <h2 id="hibernation">冬眠と筋肉 — 研究が注目する点</h2>
      <p>
        クマは冬眠中に何か月も食べず動かずに過ごしますが、筋肉の衰えは比較的小さいことがわかっています。
        アメリカクロクマの研究では、巣穴で約 110 日過ごした後の筋力の低下は約 29% で、
        同じ期間寝たきりになった人で予想される低下より小さいと報告されています（Lohuis ら 2007）。
        この仕組みは、寝たきりの人の筋力低下を防ぐ研究のヒントとして注目されています
        （詳しくは <Link href="/articles/bear-kidney-nitrogen-recycling">クマの腎機能と窒素リサイクル</Link>）。
      </p>

      <h2 id="death">野生のクマはどう死ぬか</h2>
      <p>
        野生のクマの死因には、捕獲（有害捕獲や狩猟）、交通事故、餌不足による衰弱、
        オスによる子グマの子殺しなどがあります。どの死因がどのくらいの割合を占めるかは、
        地域や年、調査方法によって大きく変わり、日本全体の割合を示したデータはありません。
      </p>
      <p>
        ミネソタ州の 39 歳半のクマは老衰とみられる自然死でしたが、
        野生で寿命いっぱいまで生きるクマは多くないと考えられます。
      </p>

      <ArticleFaq
        items={[
          {
            q: "野生で 30 歳を超えるクマはいる？",
            a: "北米では記録があります。ミネソタ州の野生のアメリカクロクマは推定 39 歳半まで生き、イエローストーン周辺では 34 歳のグリズリーが確認されています。国内の捕獲個体の記録では、ツキノワグマでメス 23 歳・オス 25 歳があります（環境省 中国四国地方環境事務所）。",
            aText: "北米では記録があります。ミネソタ州の野生のアメリカクロクマは推定 39 歳半まで生き、イエローストーン周辺では 34 歳のグリズリーが確認されています。国内の捕獲個体の記録では、ツキノワグマでメス 23 歳・オス 25 歳があります（環境省 中国四国地方環境事務所）。",
          },
          {
            q: "クマの年齢はどうやって調べる？",
            a: "歯の根を覆うセメント質にできる年輪のような層を数える方法が標準的です。歯のすり減りでもおおよその見当はつきますが、正確さは劣ります。",
            aText: "歯の根を覆うセメント質にできる年輪のような層を数える方法が標準的です。歯のすり減りでもおおよその見当はつきますが、正確さは劣ります。",
          },
          {
            q: "人里に出てくるクマは高齢のクマが多い？",
            a: "そう示すデータは見当たりません。環境省は、若いオスの分散（6〜7 月ごろ）や秋の木の実の不作を出没増加の要因に挙げています。年齢にかかわらず、市街地でクマを見たら 110 番してください。",
            aText: "そう示すデータは見当たりません。環境省は、若いオスの分散（6〜7 月ごろ）や秋の木の実の不作を出没増加の要因に挙げています。年齢にかかわらず、市街地でクマを見たら 110 番してください。",
          },
        ]}
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title: "クマの生態",
            citation: <>環境省 自然環境局</>,
            href: "https://www.env.go.jp/nature/choju/effort/effort12/kuma-habitat.pdf",
            linkText: "環境省（PDF）→",
          },
          {
            title: "ツキノワグマ四国個体群の保護対策",
            citation: <>環境省 中国四国地方環境事務所</>,
            href: "https://chushikoku.env.go.jp/content/900119255.pdf",
            linkText: "環境省（PDF）→",
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
            title: "World's oldest wild black bear dies of old age（ミネソタ州の 39 歳半のクマ）",
            citation: <>MPR News（2013 年 8 月 27 日）</>,
            href: "https://www.mprnews.org/story/2013/08/27/oldest-black-bear-dies",
            linkText: "MPR News →",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-fat-metabolism">クマの脂肪蓄積メカニズム</Link> /{" "}
        <Link href="/articles/bear-anesthesia">クマの麻酔と捕獲時の獣医処置</Link> /{" "}
        <Link href="/articles/urban-encounter">アーバンベアと市街地遭遇</Link>
      </p>
    </ArticleShell>
  );
}
