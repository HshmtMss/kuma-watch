import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-009")!;

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
        ニュースでクマの捕獲事案が報じられるたびに、SNS で必ず見かけるコメントがあります。
      </p>
      <p className="text-center text-sm italic text-stone-600">
        「殺さずに、山奥に放してあげればいいのに」
      </p>
      <p>
        感情としてはよく分かります。実際、世界中の野生動物管理機関も同じことを考え、
        過去 50 年間で <strong>何千頭ものクマ</strong>を捕獲して別の場所に放してきました。
        その結果、何が分かったのか —
        ノルウェーの研究者 John Linnell が、この問いに正面から向き合った
        論文があります。1997 年発表、今も世界中で引用される野生動物管理の必修文献です。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          Translocation of carnivores as a method for managing problem animals: a review
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Linnell, J. D. C., Aanes, R., Swenson, J. E., Odden, J., &amp; Smith, M. E. (1997).{" "}
          <em className="not-italic">Biodiversity &amp; Conservation</em> 6: 1245–1257.
        </div>
        <a
          href="https://doi.org/10.1023/A:1018392013758"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          DOI: 10.1023/A:1018392013758 →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            食肉目 12 種・100 件以上の捕獲移動事例をレビューし、その結果を集約
          </li>
          <li>
            クマでは <strong>50% 以上が元の場所に戻る</strong>、<strong>30% は死亡</strong>
          </li>
          <li>
            問題行動の解消率は <strong>30% 程度</strong>。「捕獲移動」だけで解決はほぼ不可能
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intuition", title: "「捕獲して山奥へ」という直感の落とし穴" },
          { id: "review", title: "12 種・100 件超のレビューが示したこと" },
          { id: "return", title: "なぜクマは元の場所に戻ってくるのか" },
          { id: "mortality", title: "30% の死亡率 — その理由" },
          { id: "success", title: "成功する 30% は何が違うのか" },
          { id: "alternatives", title: "代替策 — 何が本当に効くのか" },
          { id: "japan", title: "日本では捕獲移動が採用されにくい理由" },
          { id: "oso", title: "OSO18 が示した「移動できない個体」の壁" },
          { id: "ethics", title: "それでも考えるべき倫理の問題" },
          { id: "action", title: "今日からあなたができる 3 つのこと" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intuition">「捕獲して山奥へ」という直感の落とし穴</h2>
      <p>
        クマを「殺さずに移動させる」という発想は、世界中の市民から支持されてきました。
        野生動物保護団体、SNS の声、メディアの論調、そして政治家の声明 —
        どれもが「<strong>非致死的解決</strong>」を求めます。
      </p>
      <p>
        野生動物管理機関も、これに応える形で各地で実験を行いました。
        米国・カナダ・ノルウェー・スウェーデン・ロシア・日本でも、
        過去半世紀で <strong>数千頭のクマが捕獲・移動</strong>されてきました。
      </p>
      <p>
        しかし、その結果はあまり報道されません。Linnell らはこのギャップに気づき、
        過去 40 年間の論文・行政記録を <strong>世界中から集約</strong>して、
        ようやく事実を明らかにしました。
      </p>

      <h2 id="review">12 種・100 件超のレビューが示したこと</h2>
      <p>
        Linnell らは食肉目（カーニボラ）12 種の捕獲移動事例 <strong>116 件</strong>を集めました。
      </p>
      <ul>
        <li>クマ類（ヒグマ・クロクマ・ホッキョクグマ）</li>
        <li>大型ネコ科（ピューマ・ヒョウ・ジャガー）</li>
        <li>イヌ科（オオカミ・コヨーテ・ハイイロギツネ）</li>
        <li>その他（カワウソ・タヌキ・ワシントンクマアライグマ等）</li>
      </ul>
      <p>
        各事例について、移動距離・移動後の追跡期間・帰巣行動・死亡・問題行動の再発を集約しました。
        結論は、種を超えて似たパターンを示しました。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">事後の結末</th>
              <th className="px-3 py-2 text-left">クマでの割合（平均）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">元の捕獲地点に戻った</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">50% 以上</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">死亡（移動後 1 年以内）</td>
              <td className="px-3 py-2 text-red-700 font-bold tabular-nums">30%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">追跡不能（行方不明）</td>
              <td className="px-3 py-2 text-amber-700 tabular-nums">10〜20%</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">問題行動が解消した「成功」</td>
              <td className="px-3 py-2 text-green-700 font-bold tabular-nums">30% 程度</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ここで重要なのは <strong>「捕獲移動の成功」をどう定義するか</strong>。
        Linnell らは「移動後 1 年以上、元の場所での問題行動が再発しなかった」を基準にしました。
        これでも 30% 程度しか成功していない。一般的な対策手段としての効果は限定的、というのが冷徹な結論でした。
      </p>

      <h2 id="return">なぜクマは元の場所に戻ってくるのか</h2>
      <p>
        クマが戻ってくる理由は、複数あります。
      </p>
      <h3>① 強力な帰巣本能</h3>
      <p>
        クマは <strong>「生まれた場所」「育った場所」</strong>に強い愛着を持ち、
        移動先からでも自力で戻ろうとします。GPS テレメトリーで追跡された個体の中には、
        <strong>500 km 以上を歩いて帰った</strong>ヒグマが記録されています。
      </p>
      <h3>② 嗅覚で「自分の縄張りの匂い」を辿る</h3>
      <p>
        Vol.5（{" "}
        <Link href="/articles/research-digest-005">クマの嗅覚</Link>
        ）で見たように、クマの嗅覚は人間の数万倍。自分の糞・尿・体臭の痕跡を遠方からでも辿れます。
        移動先で迷子になっても、徐々に「自分の匂い」の方向に戻る行動が観察されています。
      </p>
      <h3>③ 移動先での食料・住処の不足</h3>
      <p>
        移動先は <strong>「他のクマの縄張り」</strong>であることが多く、新参のクマは追い出されます。
        食料も住処も確保できないため、馴染みのある元の場所に戻る方が生存戦略として有利になる。
      </p>
      <h3>④ 学習済みの「食物源」の魅力</h3>
      <p>
        市街地で人為的食料を学習した個体は、元の場所の <strong>「楽な食物源」</strong>を覚えています。
        奥山で苦労して採餌するより、街のゴミ箱に戻る方が効率が高い、と判断する個体が多い。
      </p>

      <h2 id="mortality">30% の死亡率 — その理由</h2>
      <p>
        さらに悲しい数字が、移動後 1 年以内の死亡率 <strong>30%</strong>。
      </p>
      <ul>
        <li>
          <strong>他個体との競合</strong>: 移動先の縄張り個体に攻撃される
        </li>
        <li>
          <strong>未知の環境でのストレス</strong>: 食物が見つからず餓死
        </li>
        <li>
          <strong>長距離移動による疲弊</strong>: 帰巣中に体力を使い果たす
        </li>
        <li>
          <strong>自動車衝突</strong>: 知らない地形で道路に出てしまう
        </li>
        <li>
          <strong>他のハンターに撃たれる</strong>: 移動先で「新顔のクマ」として駆除対象に
        </li>
      </ul>
      <p>
        皮肉なことに、<strong>「殺さずに移動させる」が、結果的にクマを死なせる</strong>ことになるケースが
        相当多い、というのが本論文の重要な指摘でした。
        市民の感情と、科学的事実が真逆の結果を示すという、複雑な現実です。
      </p>

      <h2 id="success">成功する 30% は何が違うのか</h2>
      <p>
        では、捕獲移動が成功するクマと失敗するクマの違いは何でしょうか。Linnell らは複数の要因を挙げています。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">要因</th>
              <th className="px-3 py-2 text-left">成功しやすい条件</th>
              <th className="px-3 py-2 text-left">失敗しやすい条件</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">年齢</td>
              <td className="px-3 py-2 text-stone-700">若い個体（1〜3 歳）</td>
              <td className="px-3 py-2 text-stone-700">成獣（5 歳以上）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">学習度</td>
              <td className="px-3 py-2 text-stone-700">人為的食料未経験</td>
              <td className="px-3 py-2 text-stone-700">「都市型クマ」</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">移動距離</td>
              <td className="px-3 py-2 text-stone-700">100 km 以上</td>
              <td className="px-3 py-2 text-stone-700">数十 km</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">移動先</td>
              <td className="px-3 py-2 text-stone-700">他クマが少ない奥山</td>
              <td className="px-3 py-2 text-stone-700">既存縄張りに重なる</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">季節</td>
              <td className="px-3 py-2 text-stone-700">春〜初夏（食料豊富）</td>
              <td className="px-3 py-2 text-stone-700">秋〜冬眠前</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        つまり、<strong>若くて学習が浅い個体を、十分遠くの低密度地帯に、適切な季節に放す</strong>と
        成功率が上がる。条件はかなり限定的です。
      </p>

      <h2 id="alternatives">代替策 — 何が本当に効くのか</h2>
      <p>
        では「捕獲移動」が万能でないなら、何が効くのか。本論文と後続研究が示す効果的な対策は次の通り。
      </p>
      <ol className="my-4 list-decimal space-y-2 pl-5">
        <li>
          <strong>誘引物管理</strong>: 都市型クマの根本原因は「街の食物」。除去できれば来なくなる。
          {" "}<Link href="/articles/research-digest-006">Erlenbach 2014（Vol.6）</Link>{" "}と{" "}
          <Link href="/articles/research-digest-005">Niimura 2014（Vol.5）</Link>を参照。
        </li>
        <li>
          <strong>電気柵</strong>: 物理的バリアと痛みによる学習で「来ない」を作る。
          {" "}<Link href="/articles/research-digest-007">Huygens 2001（Vol.7）</Link>。
        </li>
        <li>
          <strong>非致死的撃退</strong>: ベアドッグ・ゴム弾・大音響で「街に来ると嫌な目に遭う」を学習させる。
        </li>
        <li>
          <strong>住民教育</strong>: 個別対策ではなく地域全体での誘引物排除を実現する。
        </li>
        <li>
          <strong>計画的捕獲（致死含む）</strong>: 学習しきった個体は移動しても戻るので、最終的にやむを得ない場合も。
        </li>
      </ol>
      <p>
        Linnell らの本論文は、<strong>「捕獲移動を全否定する」</strong>ものではありません。
        ただし「単独の解決策にはならない」「条件が揃った場合の限定的な手段」と位置づける必要がある、
        というのが結論です。
      </p>

      <h2 id="japan">日本では捕獲移動が採用されにくい理由</h2>
      <p>
        実は日本でも、過去にクマの捕獲移動が試されたケースはあります。
        しかし、現在は <strong>ほとんど採用されていません</strong>。
      </p>
      <ul>
        <li>
          <strong>地形的制約</strong>: 国土が狭く、「十分遠くの低密度地帯」が現実的に存在しにくい
        </li>
        <li>
          <strong>個体群密度の高さ</strong>: 移動先が必ず別の個体群と重なってしまう
        </li>
        <li>
          <strong>追跡コスト</strong>: GPS 首輪・調査体制の維持に大きな予算が必要
        </li>
        <li>
          <strong>事後の責任問題</strong>: 移動したクマが別地域で人身被害を起こした場合の責任所在が不明
        </li>
        <li>
          <strong>住民感情</strong>: 「自分の地域に放されては困る」という反発
        </li>
      </ul>
      <p>
        2026 年 4 月のクマ「指定管理鳥獣」化（{" "}
        <Link href="/articles/designated-management-2026">解説記事</Link>
        ）では、捕獲移動より <strong>「現地での捕獲駆除 + 誘引物管理 + 電気柵」</strong>を中心に据えています。
        Linnell ら 1997 の論文が示した知見が、日本の政策設計にも反映されていると言えます。
      </p>

      <h2 id="oso">OSO18 が示した「移動できない個体」の壁</h2>
      <p>
        日本で最も有名な「移動できなかった個体」が、北海道標茶町の <strong>OSO18</strong> です。
      </p>
      <p>
        2019〜2023 年に乳牛 66 頭を襲い続けたこの巨大ヒグマは、何度も追跡され、捕獲を試みられました。
        当時、SNS や一部メディアでは「捕獲して山奥に放すべき」という意見も出ましたが、
        実務的には選択肢として検討されませんでした。理由は明白です。
      </p>
      <ul>
        <li>
          OSO18 は <strong>大型成獣（推定 400kg 超）</strong>で、移動条件「若い個体」を満たさない
        </li>
        <li>
          <strong>「乳牛 = 食物」の強烈な学習</strong>を完了していた（成功条件「学習浅い」を満たさない）
        </li>
        <li>
          北海道のヒグマ密度が高く、十分遠くの低密度地帯がない
        </li>
        <li>
          再発した場合、別地域の畜産業に致命的被害が出るリスクが高い
        </li>
      </ul>
      <p>
        結局 OSO18 は 2023 年 7 月に駆除されました。
        この決断には議論がありましたが、Linnell らの研究を踏まえれば、
        <strong>「捕獲移動でも解決しなかった可能性が高い」</strong>事案だったと言えます。
      </p>

      <h2 id="ethics">それでも考えるべき倫理の問題</h2>
      <p>
        Linnell らの論文が冷徹に「捕獲移動はあまり効かない」と示しても、
        それで「では駆除すべき」という結論には直結しません。
        ここには <strong>科学を超えた倫理の問題</strong>があります。
      </p>
      <ul>
        <li>
          人間と動物の <strong>生命価値の比較</strong>
        </li>
        <li>
          地域固有個体群の <strong>保全価値</strong>
        </li>
        <li>
          人と野生動物の <strong>共存可能性</strong>
        </li>
        <li>
          子グマ・母グマへの <strong>個別の配慮</strong>
        </li>
      </ul>
      <p>
        これらは科学だけでは答えが出ない問いです。
        捕獲移動を「効くか効かないか」のレイヤーで議論することと、
        「するかしないか」の倫理的レイヤーで議論することは別物だと、
        本論文を読み終えて改めて感じます。
      </p>
      <p>
        詳しくは{" "}
        <Link href="/articles/culling-debate">駆除をめぐる議論</Link>
        も合わせてご覧ください。
      </p>

      <h2 id="action">今日からあなたができる 3 つのこと</h2>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>「捕獲移動 = 簡単な解決」と思い込まない</strong> — SNS で「殺さずに山奥へ」と
          意見を述べる前に、その手段の効果と副作用を理解する。
        </li>
        <li>
          <strong>「予防」に投資する</strong> — 誘引物管理・電気柵が、捕獲移動より遥かに効きます。
          特に農家・畜舎経営者・果樹園所有者は{" "}
          <Link href="/articles/research-digest-007">電気柵研究（Vol.7）</Link>{" "}
          を参考に。
        </li>
        <li>
          <strong>「学習させない」を最優先</strong> — 一度ゴミに味を覚えたクマは、その後どんな
          手段でも管理が難しい。最初の接触を「させない」ことが、結局は人にもクマにも優しい。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Translocation of carnivores as a method for managing problem animals: a review（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Linnell, J. D. C., et al. (1997).{" "}
              <em className="not-italic">Biodiversity &amp; Conservation</em> 6: 1245–1257.
            </div>
            <a
              href="https://doi.org/10.1023/A:1018392013758"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              DOI: 10.1023/A:1018392013758 →
            </a>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Translocation of grizzly bears in British Columbia
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Milligan, S., et al. (2018).{" "}
              <em className="not-italic">Ursus</em> 29(1).
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Predator translocation outcomes review
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Massei, G., et al. (2010).{" "}
              <em className="not-italic">Wildlife Research</em> 37(5): 428–439.
            </div>
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
          次号予告 — Vol.10
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマは『数』を理解している」</strong> —
          アメリカクロクマ 3 頭にタッチスクリーンで「多い方を選ぶ」課題を出した動物認知研究。
          クマがイルカやサル並みの数量理解能力を持つことを示した Vonk &amp; Beran 2012 を精読します。
        </div>
      </div>
    </ArticleShell>
  );
}
