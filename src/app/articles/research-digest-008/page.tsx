import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { PaperCard, KeyPoints, NextIssue, References } from "@/components/ArticleCards";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-008")!;

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
        クマは <strong>5 ヶ月、食べず・飲まず・排泄せず</strong>に過ごします。
        人間なら 1 週間も続かないこの状態を、クマはなぜ毎年生き延びられるのか？
      </p>
      <p>
        2011 年、アラスカ大学フェアバンクス校の研究チームが、
        野生のアメリカクロクマに <strong>小型センサーを装着</strong>して冬眠を 24 時間モニターしました。
        その結果は、生理学の教科書を書き直す内容だっただけでなく、
        <strong>人類の医学</strong>にまで波及する驚きの発見になりました。
      </p>

      {/* 論文カード */}
      <PaperCard
        label="今号で読み解く 1 本の論文"
        title="Hibernation in black bears: independence of metabolic suppression from body temperature"
        citation={
          <>
            Tøien, Ø., Blake, J., Edgar, D. M., Grahn, D. A., Heller, H. C., &amp; Barnes, B. M. (2011).{" "}
            <em className="not-italic">Science</em> 331(6019): 906–909.
          </>
        }
        href="https://doi.org/10.1126/science.1199435"
        linkText="DOI: 10.1126/science.1199435 →"
      />

      <KeyPoints
        label="時間がない人向けの 3 行"
        items={[
          <>
            冬眠中のクマの心拍数は <strong>55 → 14 bpm</strong>（4 分の 1）に低下
          </>,
          <>
            代謝率は <strong>75% も低下</strong>、なのに体温はたった 5°C しか下がらない
          </>,
          <>
            この仕組みは <strong>脳卒中・心臓外科・宇宙旅行</strong>への応用が研究されている
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "intro", title: "クマの冬眠は「ただ眠っている」じゃない" },
          { id: "method", title: "野生のクマに付ける、世界で一番細密なセンサー" },
          { id: "heart", title: "心拍数 14 bpm — そのとき何が起きているのか" },
          { id: "body-temp", title: "体温はなぜほとんど下がらないのか" },
          { id: "metabolism", title: "代謝 25% という奇跡" },
          { id: "implication", title: "なぜ筋肉や骨が萎縮しないのか" },
          { id: "medicine", title: "人類医学への応用 — 脳卒中・宇宙旅行" },
          { id: "japan", title: "日本のクマでも同じことが起きている" },
          { id: "today", title: "クマから学ぶ、人間の生き方" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">クマの冬眠は「ただ眠っている」じゃない</h2>
      <p>
        小学校の教科書には「クマは冬の間眠っている」と書かれています。
        でも、これは正確な記述ではありません。
      </p>
      <p>
        クマの冬眠は、生物学的には <strong>「擬似冬眠（torpor）」</strong>に近い状態とされます。
        体温は完全には下がらず、刺激を与えれば <strong>数分以内に起きる</strong>。
        ヤマネやリスのような<strong>「真の冬眠」</strong>とは違うのです。
      </p>
      <p>
        ところがクマの冬眠の本当のすごさは、別のところにあります。
        体温があまり下がらないのに、<strong>代謝（エネルギー消費）が劇的に低下する</strong>こと。
        この「<strong>体温と代謝の切り離し</strong>」は、長らく生理学の大きな謎でした。
      </p>
      <p>
        Tøien らはこの謎に、世界で初めて <strong>「野生のクマで連続記録」</strong>することで挑みました。
      </p>

      <h2 id="method">野生のクマに付ける、世界で一番細密なセンサー</h2>
      <p>
        この研究の凄さは、装備にあります。研究チームはアラスカで捕獲したアメリカクロクマ
        <strong>5 個体</strong>に、次のような小型機器を装着しました。
      </p>
      <ul>
        <li>
          🫀 <strong>体内埋込型 ECG（心電図）レコーダー</strong> — 心拍数を 1 秒単位で記録
        </li>
        <li>
          🌡️ <strong>体温センサー</strong> — 1 分ごとに核心温度を測定
        </li>
        <li>
          💨 <strong>呼吸数センサー</strong> — 胸部の動きから算出
        </li>
        <li>
          ⚡ <strong>動作センサー</strong> — 体動を 24 時間記録
        </li>
        <li>
          🌬️ <strong>巣穴用酸素センサー</strong> — クマが呼吸でどれだけ酸素を消費するかを記録
        </li>
      </ul>
      <p>
        この装備で、<strong>冬眠開始（10〜11 月）から覚醒（4 月）までの 5 ヶ月間</strong>、
        クマたちの身体機能を秒単位で連続記録しました。
        野生動物でこれほど詳細な生理データを取得した研究は、それまで存在しませんでした。
      </p>

      <h2 id="heart">心拍数 14 bpm — そのとき何が起きているのか</h2>
      <p>
        まず最も衝撃的だったデータが、心拍数の変化です。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">状態</th>
              <th className="px-3 py-2 text-left">心拍数（bpm）</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">活動中（夏）</td>
              <td className="px-3 py-2 tabular-nums">55〜80</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">休息中（夏）</td>
              <td className="px-3 py-2 tabular-nums">30〜40</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">冬眠中（深い時）</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">14（最低）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">冬眠中（呼吸時）</td>
              <td className="px-3 py-2 tabular-nums">35〜40（短時間）</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        通常の心拍数は人間（60〜100 bpm）と似たレベルですが、冬眠時は
        <strong>分速 14 回</strong>。つまり <strong>4 秒に 1 回しか心臓が動いていない</strong>計算です。
      </p>
      <p>
        さらに面白い発見が <strong>「呼吸性洞性不整脈」</strong>でした。
        クマは呼吸するとき（数十秒に 1 回）、その間だけ心拍が一時的に上がる。
        呼吸していないときは心拍がほぼ止まる、というパターンです。
      </p>
      <p>
        これは「<strong>呼吸時にだけ酸素を循環させ、無呼吸時は最低限の代謝のみ</strong>」という
        極限まで効率を上げた省エネ運転。あえて言えば <strong>「心臓のアイドリングストップ機能」</strong>です。
      </p>

      <h2 id="body-temp">体温はなぜほとんど下がらないのか</h2>
      <p>
        ここで「真の冬眠」と「クマの冬眠」の違いが浮き彫りになります。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">動物</th>
              <th className="px-3 py-2 text-left">通常体温</th>
              <th className="px-3 py-2 text-left">冬眠体温</th>
              <th className="px-3 py-2 text-left">代謝低下率</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">ジリス</td>
              <td className="px-3 py-2 tabular-nums">37°C</td>
              <td className="px-3 py-2 tabular-nums">-3〜0°C</td>
              <td className="px-3 py-2 tabular-nums">95% 減</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">マーモット</td>
              <td className="px-3 py-2 tabular-nums">37°C</td>
              <td className="px-3 py-2 tabular-nums">5〜10°C</td>
              <td className="px-3 py-2 tabular-nums">95% 減</td>
            </tr>
            <tr className="bg-amber-50/50">
              <td className="px-3 py-2 font-semibold">クロクマ</td>
              <td className="px-3 py-2 tabular-nums">38°C</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">33°C</td>
              <td className="px-3 py-2 text-amber-800 font-bold tabular-nums">75% 減</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        ジリスやマーモットは <strong>体温を限界まで下げる</strong>ことで代謝を抑えます。
        この方法だと代謝は 95% も落ちますが、体温を急激に変えるため、起きるのに長時間（数時間）かかり、
        その間は <strong>無防備</strong>です。
      </p>
      <p>
        クマは違います。<strong>体温は 5°C しか下げない</strong>のに、代謝は 75% 落ちる。
        このやり方なら、危険を感じたときに <strong>数分で活動可能な状態に戻れる</strong>。
        実際、冬眠中の母グマが巣穴を侵入された場合、即座に反応して身を守る行動が観察されています。
      </p>
      <p>
        Tøien らの発見の核心はここ。<strong>「代謝の抑制は体温低下に依存しない」</strong>という
        新しい生理学のパラダイムを示した、というのが本論文がサイエンス誌掲載に値する理由でした。
      </p>

      <h2 id="metabolism">代謝 25% という奇跡</h2>
      <p>
        冬眠中のクマの代謝（基礎エネルギー消費量）は、活動時の <strong>25%</strong>まで落ちます。
      </p>
      <p>
        分かりやすく言えば、<strong>1 日 2,000 kcal 消費していたものが 500 kcal で済む</strong>状態。
        人間に置き換えると、絶食状態で寝たきりでいるのに、エネルギーを消費しない 1 日を 5 ヶ月続けるイメージ。
      </p>
      <p>
        この 75% の節約があるからこそ、クマは秋に蓄えた脂肪だけで冬を乗り切れます。
        100kg のクマが冬眠中に消費する脂肪は <strong>約 20〜30kg</strong>。冬眠覚醒時には <strong>20〜30% 痩せる</strong>けれど、
        死なずに春を迎えられる、というギリギリの計算が成り立っています。
      </p>

      <h2 id="implication">なぜ筋肉や骨が萎縮しないのか</h2>
      <p>
        本論文の発見の「もう一つの不思議」は、<strong>クマは寝たきりなのに筋肉や骨が萎縮しない</strong>こと。
      </p>
      <p>
        人間が寝たきりになると、<strong>1 週間で筋力の 5〜10%</strong>を失います。
        宇宙飛行士は無重力空間で <strong>月に 1〜2% の骨密度</strong>を失います。
        ところがクマは 5 ヶ月寝たきりなのに、覚醒時の筋力・骨密度がほぼ維持されている。
      </p>
      <p>
        この謎は <strong>関連研究</strong>で部分的に解明されつつあります。
      </p>
      <ul>
        <li>
          冬眠中のクマは <strong>「シバリング様の微細振動」</strong>で筋肉に刺激を与えている可能性
        </li>
        <li>
          骨の代謝因子（PTH、カルシトニン）の動態が活動時と違う
        </li>
        <li>
          冬眠特異的なタンパク質「HP（hibernation protein）」が筋肉を保護
        </li>
        <li>
          尿素を腸内細菌に分解させて再利用する <strong>尿素サイクル再循環</strong>でタンパク質を温存
        </li>
      </ul>

      <h2 id="medicine">人類医学への応用 — 脳卒中・宇宙旅行</h2>
      <p>
        この発見は、医学界にも大きな波紋を投げかけました。
        クマの冬眠メカニズムは、人類が直面する複数の問題への <strong>「ヒント」</strong>を秘めています。
      </p>
      <h3>① 脳卒中・心筋梗塞の救命延長</h3>
      <p>
        脳卒中・心筋梗塞は <strong>「血流が止まった組織が酸素不足で壊死する」</strong>病気。
        もしクマのように代謝を 25% まで落とせれば、組織損傷を抑えながら治療時間を稼げます。
        北米では「<strong>治療的低体温療法</strong>」がすでに一部実用化されており、その理論基盤の一つが本論文です。
      </p>
      <h3>② 心臓外科手術での組織保護</h3>
      <p>
        開胸手術中の<strong>「臓器を一時的に停止させる」</strong>場面で、クマ式の代謝抑制が応用研究中。
      </p>
      <h3>③ 宇宙旅行と長期睡眠</h3>
      <p>
        NASA・ESA（欧州宇宙機関）が <strong>火星行きの長期飛行</strong>での乗組員「人工冬眠」を研究中。
        食料と廃棄物の量を激減できれば、宇宙船重量を大幅削減できます。
        モデルケースとして真っ先に参照されるのが、クマの冬眠です。
      </p>
      <h3>④ ICU の長期昏睡管理</h3>
      <p>
        重篤患者の<strong>長期人工昏睡</strong>で、筋萎縮を防ぐ手法の研究にも応用されています。
      </p>

      <h2 id="japan">日本のクマでも同じことが起きている</h2>
      <p>
        ツキノワグマでも本論文と同様の生理学的特徴が観察されています。
      </p>
      <ul>
        <li>
          冬眠中の体温は <strong>32〜34°C</strong>（通常 38°C から低下幅 4〜6°C）
        </li>
        <li>
          心拍数は <strong>10〜20 bpm</strong>まで低下
        </li>
        <li>
          5 ヶ月で <strong>20〜25%</strong> 痩せて覚醒
        </li>
        <li>
          冬眠中の出産・授乳もアメリカクロクマと同様に発生
        </li>
      </ul>
      <p>
        北海道大学・京都大学・東京農業大学などで、ツキノワグマの冬眠生理研究は継続中です。
        Tøien らの方法論を応用して、ツキノワグマ独自のデータも蓄積されつつあります。
      </p>

      <h2 id="today">クマから学ぶ、人間の生き方</h2>
      <p>
        この論文を読み終えて、ふと考えるのです。
      </p>
      <p>
        私たちは「<strong>身体機能の低下</strong>」を恐れて生きています。寝たきりになると筋肉が落ちる、
        運動しないと骨が弱る、絶食すれば 1 週間で命の危険がある。だから毎日食べ、毎日動く。
      </p>
      <p>
        ところがクマは <strong>5 ヶ月の停止</strong>を毎年繰り返しながら、何も失わず生き延びる。
        進化の中でクマが見つけた「<strong>身体を止める技術</strong>」は、
        私たち人間が <strong>これから学べる最大の生物学的レッスン</strong>の一つかもしれません。
      </p>
      <p>
        冬眠する動物は、特別な存在です。彼らから学ぶことは、まだまだたくさんあります。
      </p>
      <p>
        関連記事として{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠</Link>
        と{" "}
        <Link href="/articles/research-digest-004">Vol.4 気候変動と冬眠の短縮</Link>
        も合わせてご覧ください。
      </p>

      <h2 id="references">参考文献</h2>
      <References
        items={[
          {
            title:
              "Hibernation in black bears: independence of metabolic suppression from body temperature（本号メイン）",
            citation: (
              <>
                Tøien, Ø., Blake, J., Edgar, D. M., Grahn, D. A., Heller, H. C., &amp; Barnes, B. M. (2011).{" "}
                <em className="not-italic">Science</em> 331(6019): 906–909.
              </>
            ),
            href: "https://doi.org/10.1126/science.1199435",
            linkText: "DOI: 10.1126/science.1199435 →",
          },
          {
            title: "Bear-omics: unraveling the molecular basis of hibernation physiology",
            citation: (
              <>
                Mohr, S. M., et al. (2020).{" "}
                <em className="not-italic">Annual Review of Animal Biosciences</em>.
              </>
            ),
          },
          {
            title: "Hibernating squirrels and bears as biomedical models — レビュー論文",
            citation: (
              <>
                Andrews, M. T. (2019).{" "}
                <em className="not-italic">Annual Review of Physiology</em>.
              </>
            ),
          },
        ]}
      />

      <p className="text-xs text-stone-500">
        ※ 本記事の解釈は獣医工学ラボ編集部の責任において行ったもので、原著者の主張を完全に再現したものではありません。
        学術的に厳密な議論が必要な場合は必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <NextIssue label="次号予告 — Vol.9">
        <strong>「クマを移動させても元の場所に戻ってくる？」</strong> —
        欧米で長年議論される「<strong>クマの捕獲移動（translocation）</strong>」の効果と限界について、
        Linnell ら（1997）の総説とその後の追跡研究を精読します。
      </NextIssue>
    </ArticleShell>
  );
}
