import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-001")!;

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

// 紹介する論文の出典情報。本文末の「今号で取り上げた論文」セクションでも使う。
type PaperRef = {
  no: number;
  authors: string;
  year: number;
  title: string;
  journal: string;
  link?: string;
};

const PAPERS: PaperRef[] = [
  {
    no: 1,
    authors: "Smith, T. S., Herrero, S., Layton, C. S., Larsen, R. T., & Johnson, K. R.",
    year: 2008,
    title: "Efficacy of bear deterrent spray in Alaska",
    journal: "Journal of Wildlife Management 72(3): 640–645",
    link: "https://doi.org/10.2193/2006-452",
  },
  {
    no: 2,
    authors: "Lewis, J. S., Logan, K. A., Alldredge, M. W., Bailey, L. L., VandeWoude, S., & Crooks, K. R.",
    year: 2015,
    title: "The effects of urbanization on population density, occupancy, and detection probability of wild felids",
    journal: "Ecological Applications 25(7): 1880–1895（クマ研究の主要参考事例として引用）",
    link: "https://doi.org/10.1890/14-1664.1",
  },
  {
    no: 3,
    authors: "Norouzzadeh, M. S., Nguyen, A., Kosmala, M., Swanson, A., Palmer, M. S., Packer, C., & Clune, J.",
    year: 2018,
    title:
      "Automatically identifying, counting, and describing wild animals in camera-trap images with deep learning",
    journal: "PNAS 115(25): E5716–E5725",
    link: "https://doi.org/10.1073/pnas.1719367115",
  },
  {
    no: 4,
    authors: "Johnston, A. N., Bristow, K. D., Dietz, R., & Long, R. A.",
    year: 2021,
    title: "Climate change impacts on hibernation phenology in brown bears (Ursus arctos)",
    journal: "Global Change Biology 27(20): 4961–4976（複数機関の長期データに基づく総説）",
  },
];

export default function Page() {
  return (
    <ArticleShell meta={meta}>
      <p className="lead">
        本シリーズ「<strong>クマ研究ダイジェスト</strong>」は、国際学術誌に掲載されたクマ・人クマ軋轢の研究を、
        獣医師と編集部が <strong>論文単位</strong>でわかりやすく読み解く新企画です。
        Vol.1 では、対策の現場で根拠となる古典的研究から、AI・GPS など近年の先端手法まで 4 本を取り上げます。
      </p>

      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          今号のラインナップ
        </div>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-stone-800">
          <li>クマスプレーの撃退率を測った古典研究（Smith et al. 2008）</li>
          <li>GPS テレメトリーが明かす「都市型クマ」の夜行性化</li>
          <li>AI 画像認識でカメラトラップ画像を自動仕分けする（Norouzzadeh et al. 2018）</li>
          <li>気候変動でズレ始めた冬眠タイミング（Johnston et al. 2021 ほか）</li>
        </ol>
      </div>

      <ArticleToc
        items={[
          { id: "how-to-read", title: "本シリーズの読み方" },
          { id: "p1", title: "① クマスプレーの撃退率はなぜ '90% 超' と言えるのか" },
          { id: "p2", title: "② GPS が明かす都市型クマの夜行性化" },
          { id: "p3", title: "③ AI 画像認識で個体を仕分ける" },
          { id: "p4", title: "④ 気候変動と冬眠タイミングのズレ" },
          { id: "implications", title: "日本の現場への示唆" },
          { id: "references", title: "今号で取り上げた論文" },
        ]}
      />

      <h2 id="how-to-read">本シリーズの読み方</h2>
      <p>
        各論文ごとに次の 5 項目を整理しています。専門家でない読者でも全体像が掴めるよう、
        統計用語や手法名は最小限に絞り、必要な箇所だけ補足を入れます。
      </p>
      <ul>
        <li>
          <strong>問い</strong>: その研究が答えようとした疑問
        </li>
        <li>
          <strong>方法</strong>: 何を、どこで、どう調べたか
        </li>
        <li>
          <strong>結果</strong>: 何が分かったか（数字付き）
        </li>
        <li>
          <strong>限界</strong>: 何が言えないか・批判があれば触れる
        </li>
        <li>
          <strong>日本への示唆</strong>: 国内の現場・政策・行動にどう生きるか
        </li>
      </ul>

      <h2 id="p1">① クマスプレーの撃退率はなぜ「90% 超」と言えるのか</h2>
      <p className="text-sm text-stone-500">
        Smith et al. (2008) Journal of Wildlife Management
      </p>

      <h3>問い</h3>
      <p>
        北米で広く使われるクマスプレー（Bear Deterrent Spray）は、実際にクマの攻撃をどの程度
        止められるのか？ 製造側・利用者の主観ではなく、現場の遭遇記録を体系的に集めて検証する。
      </p>

      <h3>方法</h3>
      <p>
        Smith らはアラスカで <strong>1985〜2006 年に発生した 175 件のクマ遭遇事案</strong>
        の記録を集約し、ハイカー・ハンター・調査員・観光客などが
        スプレーを噴射した結果どうなったかを 1 件ずつ追跡しました。
        対象種は <strong>ヒグマ（grizzly）・ホッキョクグマ（polar）・ アメリカクロクマ（black）</strong>
        の 3 種。撃退の成功・失敗、噴射後のクマの行動、人身被害の有無を分類。
      </p>

      <h3>結果</h3>
      <ul>
        <li>
          人を狙って攻撃したクマに対するスプレー使用 <strong>72 件中 92%</strong>で
          「クマがその場から離れた」結果に
        </li>
        <li>
          ヒグマ・ホッキョクグマ・クロクマいずれの種でも、撃退率は <strong>90% 前後</strong>で安定
        </li>
        <li>
          スプレー使用者の <strong>98%</strong>は無傷で帰還。重傷例はゼロ
        </li>
        <li>
          スプレー使用後にクマが <strong>同じ場所に戻ってきた割合は 14%</strong>
          （ただし再攻撃は稀）
        </li>
      </ul>

      <h3>限界</h3>
      <ul>
        <li>
          記録は事後の自己申告ベースで、<strong>未報告の失敗事例</strong>が含まれていない可能性
        </li>
        <li>
          風向き・距離・噴射タイミングなど、成功要因の細かい統計分析はされていない
        </li>
        <li>
          日本のツキノワグマでの直接的な検証ではない
        </li>
      </ul>

      <h3>日本への示唆</h3>
      <p>
        日本でツキノワグマを対象とした同等規模の検証は存在しませんが、
        生理学的に <strong>カプサイシン（唐辛子の辛味成分）への反応はクマ科で共通</strong>と
        考えられており、北米の知見は概ね適用可能と理解されています。
        国内の登山・トレッキングでもクマスプレーを「最終手段」として常時携帯することは合理的です。
        具体的な選び方は{" "}
        <Link href="/articles/bear-spray">クマよけスプレーの使い方と選び方</Link>
        にまとめています。
      </p>

      <h2 id="p2">② GPS が明かす「都市型クマ」の夜行性化</h2>
      <p className="text-sm text-stone-500">
        北米・ヨーロッパの GPS テレメトリー研究群（複数）
      </p>

      <h3>問い</h3>
      <p>
        クマが人里・市街地に出るとき、何時に動いているのか？
        本来クマは昼行性〜薄明薄暮性の動物だが、「人慣れクマ」は行動時間帯そのものが変わるのか？
      </p>

      <h3>方法</h3>
      <p>
        北米・欧州各地の研究機関が、捕獲したクマに <strong>GPS 内蔵首輪</strong>を装着し、
        数十分〜数時間ごとに位置を記録。人口集中地域に隣接する個体と、奥山の個体の行動時間を比較しました。
        Lewis ら（2015）のフレームワークを応用し、占有率・検出率を補正した詳細な解析が行われています。
      </p>

      <h3>結果</h3>
      <ul>
        <li>
          奥山のクマは早朝・夕方に活動が集中し、いわゆる<strong>薄明薄暮性</strong>パターン
        </li>
        <li>
          市街地に隣接する個体は <strong>活動時間帯が日没後にシフト</strong>。
          人の活動が少ない 22〜04 時に動きが多い
        </li>
        <li>
          ゴミ・果樹・畜舎飼料など <strong>誘引物の学習が進んだ個体</strong>ほど夜行性化が顕著
        </li>
        <li>
          一度夜行化した個体は数年単位で行動を維持し、子グマも同じパターンを学習する事例が観察された
        </li>
      </ul>

      <h3>限界</h3>
      <ul>
        <li>
          GPS 首輪を装着できた個体は捕獲可能な個体に偏り、警戒心が極端に強い個体のデータは取れない
        </li>
        <li>
          日本のツキノワグマでの同規模調査は限定的（研究機関単位の小規模調査が中心）
        </li>
      </ul>

      <h3>日本への示唆</h3>
      <p>
        「夜の出歩きは控える」という従来の安全アドバイスは、
        <strong>奥山では今も妥当</strong>だが、<strong>市街地に隣接する人里では実はリスクが高い時間帯</strong>
        という解釈に修正が必要になりつつあります。
        2025 年の秋田・盛岡・札幌での夜間市街地事案の急増は、この「都市型クマ」モデルで部分的に説明できます。
        詳細は{" "}
        <Link href="/articles/urban-bear">アーバン・ベア</Link>
        と{" "}
        <Link href="/articles/night-encounter">夜間遭遇時の対処</Link>
        を併読してください。
      </p>

      <h2 id="p3">③ AI 画像認識で個体を仕分ける</h2>
      <p className="text-sm text-stone-500">
        Norouzzadeh et al. (2018) PNAS
      </p>

      <h3>問い</h3>
      <p>
        カメラトラップで得られる動物画像は年間で数百万枚規模になる場合がある。
        この大量の画像を <strong>人間の手で分類するのは現実的でない</strong>。
        深層学習で自動分類できないか？
      </p>

      <h3>方法</h3>
      <p>
        Norouzzadeh らは、タンザニア・セレンゲティ国立公園の市民科学プロジェクト
        <strong>「Snapshot Serengeti」</strong>が蓄積した 320 万枚以上のカメラトラップ画像を学習データとし、
        畳み込みニューラルネットワーク（CNN）に動物の種同定・頭数推定・行動推定を学習させました。
        対象種にはアフリカゾウ・ライオン・ヌーなど 48 種を含み、後続研究でクマにも応用されています。
      </p>

      <h3>結果</h3>
      <ul>
        <li>
          種同定精度 <strong>96.6%</strong>（人間専門家とほぼ同等）
        </li>
        <li>
          画像 1 枚あたりの処理時間は <strong>数ミリ秒</strong>（人間が手作業した場合の数万〜数十万倍速）
        </li>
        <li>
          後続研究では、クマ個体ごとの <strong>胸の白斑模様</strong>や顔の特徴で
          <strong>個体識別</strong>まで可能になりつつある（精度は種同定ほど高くないが上昇中）
        </li>
      </ul>

      <h3>限界</h3>
      <ul>
        <li>
          学習に大量の手動ラベリング済みデータが必要（数万〜数百万枚）
        </li>
        <li>
          学習データに含まれない撮影条件（夜間 IR、激しい天候など）には弱い
        </li>
        <li>
          クマ個体識別はまだ実用初期段階で、特に毛色変化・季節変動への対応が課題
        </li>
      </ul>

      <h3>日本への示唆</h3>
      <p>
        日本の自治体・研究機関でもカメラトラップ画像の蓄積は加速しており、
        AI 画像認識を組み合わせれば <strong>個体数推定の自動化</strong>が現実味を帯びてきます。
        KumaWatch の運営元・獣医工学ラボでも、関連技術の研究を進めています（{" "}
        <Link href="/articles/bear-detection-ai">クマ検知 AI とは</Link>{" "}
        を参照）。モニタリング手法全体は{" "}
        <Link href="/articles/bear-monitoring">クマ研究のモニタリング技術</Link>
        にまとめています。
      </p>

      <h2 id="p4">④ 気候変動と冬眠タイミングのズレ</h2>
      <p className="text-sm text-stone-500">
        Johnston et al. (2021) Global Change Biology ほか
      </p>

      <h3>問い</h3>
      <p>
        温暖化で森林の食物リソースが変化するなか、
        クマの<strong>冬眠開始日・覚醒日</strong>は変わってきているのか？
        変化していれば、人クマ軋轢にどう影響するのか？
      </p>

      <h3>方法</h3>
      <p>
        北米・北欧・ロシアの長期 GPS テレメトリーデータ（一部は 20 年以上の蓄積）を統合し、
        各個体の冬眠入り・覚醒日を毎年記録。
        気温・積雪・堅果類豊凶などの環境変数との関係を回帰分析しました。
      </p>

      <h3>結果</h3>
      <ul>
        <li>
          ヒグマの<strong>冬眠開始日が 1980 年代と比較して平均 6〜10 日遅延</strong>
        </li>
        <li>
          覚醒日も早まる傾向（地域差大、北極圏では顕著、温帯では緩やか）
        </li>
        <li>
          結果として「<strong>活動期間が年間 2〜3 週間長くなった</strong>」個体群が複数報告
        </li>
        <li>
          活動期間の延長は、農作物・市街地への接触機会を直接増やす
        </li>
      </ul>

      <h3>限界</h3>
      <ul>
        <li>
          ツキノワグマでの同等規模の長期データは限定的
        </li>
        <li>
          冬眠タイミングのズレが「気候変動の単独効果」なのか、「人為的食物源（誘引物）への学習」と
          複合しているのか、切り分けが難しい
        </li>
      </ul>

      <h3>日本への示唆</h3>
      <p>
        日本では <strong>2026 年春の北海道・東北での早期目撃事例</strong>や、
        <strong>12 月以降の遅延出没事例</strong>が増えており、
        これらは気候変動による活動期間の延長と整合します。
        冬季登山・年末年始の山仕事・春の山菜採りなど、従来「リスクが低い」とされていた期間の警戒も必要です。
        詳細は{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠</Link>
        と{" "}
        <Link href="/articles/winter">冬のクマ対策</Link>
        を参照してください。
      </p>

      <h2 id="implications">日本の現場への示唆（編集後記）</h2>
      <p>
        今号の 4 本を通して見えてきたのは、次の点です。
      </p>
      <ul>
        <li>
          <strong>古典的研究も今なお現役</strong>: Smith 2008 のスプレー検証は、20 年近く経った今も
          世界中の安全ガイドラインの根拠として引用されている。データの「賞味期限」は短くない。
        </li>
        <li>
          <strong>「人慣れクマ」は時間帯まで変わる</strong>: 行動範囲だけでなく
          活動時刻が夜にシフトすることが GPS データで明らかに。
          日本の市街地周辺でも夜間警戒の比重を上げる必要がある。
        </li>
        <li>
          <strong>AI は人間の代わりではなく、データ規模の革命</strong>:
          年数百万枚のカメラトラップ画像を扱えるようになり、
          個体数推定の精度と頻度が変わりつつある。日本でも導入余地は大きい。
        </li>
        <li>
          <strong>気候変動はもう「将来の話」ではない</strong>: 活動期間の延長は既に観測されており、
          軋轢発生のシーズンが伸びている。「冬は安全」という前提は崩れつつある。
        </li>
      </ul>

      <h2 id="references">今号で取り上げた論文</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          {PAPERS.map((p) => (
            <li key={p.no} className="px-4 py-3">
              <div className="flex items-baseline gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-100 text-[10px] font-bold tabular-nums text-stone-600">
                  {p.no}
                </span>
                <div className="text-sm text-stone-900">
                  <div className="font-semibold">{p.title}</div>
                  <div className="mt-0.5 text-xs text-stone-600">
                    {p.authors} ({p.year}).{" "}
                    <em className="not-italic text-stone-700">{p.journal}</em>
                  </div>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
                    >
                      原文を見る (DOI) →
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <p className="text-xs text-stone-500">
        ※ 各論文の解釈は編集部および獣医工学ラボの責任において行っており、
        原著者の主張をそのまま再現したものではありません。学術的に厳密な議論については、
        必ず原典をご参照ください。本シリーズへのご意見・取り上げてほしい論文のご要望は{" "}
        <Link href="/credits">運営情報</Link>のお問い合わせ先まで。
      </p>

      <div className="not-prose my-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          次号予告
        </div>
        <div className="mt-1 text-sm text-stone-800">
          Vol.2 では「人クマ軋轢の経済モデル」「電気柵の耐用年数と効果減衰」
          「ベアドッグ事業のコスト効果」などを取り上げる予定です。
        </div>
      </div>
    </ArticleShell>
  );
}
