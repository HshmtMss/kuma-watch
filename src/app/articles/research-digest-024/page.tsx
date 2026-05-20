import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("research-digest-024")!;

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
        晩秋、クマは <strong>「冬の家」</strong>を探します。
        次の春まで 5 ヶ月間こもる場所、出産・子育てまで行う場所、自分の命を預ける場所。
        どこを選ぶかで、生死が分かれます。
      </p>
      <p>
        ノルウェーとスウェーデンの研究チームが、ヒグマの巣穴 <strong>100 か所以上</strong>を実測し、
        クマがどんな基準で「冬の家」を選んでいるかを解析しました。
        その結果は、人クマの距離関係について重要な示唆を与えるものでした。
      </p>

      {/* 論文カード */}
      <div className="not-prose my-4 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-blue-700">
          今号で読み解く 1 本の論文
        </div>
        <div className="mt-2 text-sm font-semibold text-stone-900">
          How vulnerable are denning bears to disturbance?
        </div>
        <div className="mt-1 text-xs leading-relaxed text-stone-700">
          Linnell, J. D. C., Swenson, J. E., Andersen, R., &amp; Barnes, B. (2000).{" "}
          <em className="not-italic">Wildlife Society Bulletin</em> 28(2): 400–413.
        </div>
        <a
          href="https://www.jstor.org/stable/3783698"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xs text-amber-700 underline hover:text-amber-900"
        >
          JSTOR で見る →
        </a>
      </div>

      <div className="not-prose my-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
          時間がない人向けの 3 行
        </div>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone-800">
          <li>
            北欧の <strong>100 か所超</strong>のヒグマ巣穴を測定し人家・道路との距離を分析
          </li>
          <li>
            クマは <strong>人家から平均 2 km 以上、道路から 200m 以上</strong>離れた場所を選ぶ
          </li>
          <li>
            撹乱で <strong>巣穴放棄</strong>すると母グマと仔が危険にさらされる
          </li>
        </ul>
      </div>

      <ArticleToc
        items={[
          { id: "intro", title: "クマにとっての「家選び」" },
          { id: "team", title: "スカンジナビアン・ベア・プロジェクト" },
          { id: "method", title: "100 巣穴の現地踏査" },
          { id: "selection", title: "クマが選ぶ巣穴の条件" },
          { id: "distance", title: "人家・道路からどれだけ離れるか" },
          { id: "disturbance", title: "撹乱されたクマはどうなるか" },
          { id: "mother", title: "母グマと仔の特別な脆弱性" },
          { id: "ski", title: "スキー場・林業活動との衝突" },
          { id: "japan", title: "日本のクマの巣穴選定" },
          { id: "winter", title: "冬期の登山・スノーシューでの配慮" },
          { id: "references", title: "参考文献" },
        ]}
      />

      <h2 id="intro">クマにとっての「家選び」</h2>
      <p>
        クマの冬眠は、Vol.8（{" "}
        <Link href="/articles/research-digest-008">Tøien 2011</Link>
        ）と Vol.16（{" "}
        <Link href="/articles/research-digest-016">Sommer 2016</Link>
        ）で見たように、生理学的に極めて精密な現象です。
        この 5 ヶ月間を生き延びるには、適切な <strong>「冬眠地（den site）」</strong>が必要不可欠です。
      </p>
      <p>
        巣穴は単なる寝場所ではありません。気温・湿度を一定に保ち、捕食者から身を隠し、
        母グマの場合は <strong>「出産と子育ての場」</strong>にもなります。
        間違った選択は、文字通り命取りになる。
      </p>
      <p>
        では、クマはどんな基準で巣穴を選ぶのか？
        野生動物の習性として極めて重要なこの問いに、Linnell らが初めて系統的な答えを出しました。
      </p>

      <h2 id="team">スカンジナビアン・ベア・プロジェクト</h2>
      <p>
        研究の舞台は、Vol.4（{" "}
        <Link href="/articles/research-digest-004">気候変動と冬眠</Link>
        ）でも登場した <strong>「スカンジナビアン・ベア・プロジェクト（SBBRP）」</strong>。
        スウェーデン中部とノルウェー南東部のヒグマを長期追跡している、欧州最大のクマ研究プロジェクトです。
      </p>
      <p>
        筆頭著者の <strong>John Linnell</strong>（ノルウェー自然研究所、Vol.9 でも登場）は、
        食肉目の管理研究の世界的権威。
        この論文では、SBBRP が蓄積した <strong>1985〜1999 年の 100 か所以上の巣穴データ</strong>
        を体系的に解析しました。
      </p>

      <h2 id="method">100 巣穴の現地踏査</h2>
      <p>
        GPS テレメトリーでクマの位置をフォローし、巣穴と確認された地点を 1 つずつ <strong>現地踏査</strong>。
        次のデータを記録しました。
      </p>
      <ul>
        <li>
          🏞️ <strong>地形</strong>: 標高・斜面の方向・傾斜・地質
        </li>
        <li>
          🌳 <strong>植生</strong>: 周囲の樹種・被覆度
        </li>
        <li>
          🏠 <strong>人家との距離</strong>: 最も近い人家まで何 m か
        </li>
        <li>
          🛣️ <strong>道路との距離</strong>: 主要道路・林道・歩道との距離
        </li>
        <li>
          🎿 <strong>レクリエーション施設との距離</strong>: スキー場・キャンプ場・登山道
        </li>
        <li>
          📏 <strong>巣穴の物理的特性</strong>: サイズ・形状・出入口の向き
        </li>
        <li>
          🐻 <strong>使用パターン</strong>: 単独 vs 母子、初冬眠 vs 再利用
        </li>
      </ul>
      <p>
        積雪期に GPS で巣穴位置を特定し、雪解け後（5〜6 月）に研究者が <strong>徒歩で現地に到達</strong>
        して測定する地道な作業を 15 年続けたデータでした。
      </p>

      <h2 id="selection">クマが選ぶ巣穴の条件</h2>
      <p>
        分析の結果、ヒグマは <strong>明確な選好</strong>を持って巣穴を選んでいることが分かりました。
      </p>
      <h3>地形・植生</h3>
      <ul>
        <li>
          ⛰️ <strong>標高 600〜900m</strong>（中標高山地）
        </li>
        <li>
          🧭 <strong>北向き〜東向きの斜面</strong>（雪が長期間保持される）
        </li>
        <li>
          📐 <strong>斜面傾斜 30〜45°</strong>（巣穴の天井が安定）
        </li>
        <li>
          🌲 <strong>針葉樹林の被覆</strong>（視覚的な遮蔽）
        </li>
        <li>
          🏚️ <strong>岩盤の窪み・倒木の下</strong>（自然の構造物を利用）
        </li>
      </ul>
      <h3>物理的特性</h3>
      <ul>
        <li>
          🚪 <strong>出入口は狭く</strong>（外気の流入を最小化）
        </li>
        <li>
          🏞️ <strong>奥行きは 2〜3m</strong>（体を完全に入れて方向転換できる）
        </li>
        <li>
          ⬇️ <strong>下向き斜面</strong>（雨水が侵入しない）
        </li>
        <li>
          🌿 <strong>内側に枝・草の寝床</strong>（断熱材としてクマ自身が運び込む）
        </li>
      </ul>

      <h2 id="distance">人家・道路からどれだけ離れるか</h2>
      <p>
        本論文の最も重要な発見が、<strong>「人間活動との距離」</strong>でした。
      </p>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">人間活動</th>
              <th className="px-3 py-2 text-left">巣穴までの平均距離</th>
              <th className="px-3 py-2 text-left">最低距離</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">人家</td>
              <td className="px-3 py-2 tabular-nums">2.4 km</td>
              <td className="px-3 py-2 tabular-nums">300 m</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">主要道路</td>
              <td className="px-3 py-2 tabular-nums">1.2 km</td>
              <td className="px-3 py-2 tabular-nums">200 m</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">林道</td>
              <td className="px-3 py-2 tabular-nums">350 m</td>
              <td className="px-3 py-2 tabular-nums">50 m</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">スキー場</td>
              <td className="px-3 py-2 tabular-nums">5.0 km</td>
              <td className="px-3 py-2 tabular-nums">1.5 km</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        クマは「<strong>人がいる場所から離れた</strong>」場所を明確に選んでいました。
        この選択は <strong>偶然ではなく統計的に有意</strong>。
        近隣の利用可能な場所と比較すると、クマは <strong>明らかに人家・道路を避けて</strong>巣穴を作っていました。
      </p>
      <p>
        この知見は、後の野生動物保護政策において <strong>「クマの巣穴周辺の保護バッファ」</strong>を
        定める根拠となりました。
      </p>

      <h2 id="disturbance">撹乱されたクマはどうなるか</h2>
      <p>
        では、もし冬眠中のクマが <strong>人間に発見・撹乱</strong>されたらどうなるか。
        Linnell らは過去のデータから、撹乱されたクマの行動を解析しました。
      </p>
      <ul>
        <li>
          🏃 <strong>巣穴を放棄</strong>: 35% が <strong>新しい巣穴を探す</strong>
        </li>
        <li>
          😨 <strong>冬眠中断・覚醒</strong>: 真冬に活動を始め、エネルギーを消耗
        </li>
        <li>
          👶 <strong>仔グマの放棄</strong>: 母グマが仔を残して逃げる → 仔が死亡
        </li>
        <li>
          ⚠️ <strong>人への攻撃</strong>: 巣穴近くを侵入されると母グマは即攻撃
        </li>
        <li>
          ❄️ <strong>新巣穴で生存リスク</strong>: 真冬に新巣穴を作る余裕はなく、簡素な仮巣穴で過ごす
        </li>
      </ul>
      <p>
        最も深刻なのが <strong>「母グマの仔グマ放棄」</strong>。
        母グマがパニックで巣穴を離れた場合、生まれて間もない仔（生後 1〜3 ヶ月）が
        <strong>1 時間ほどで凍死</strong>します。これは保全的に非常に深刻な事態。
      </p>

      <h2 id="mother">母グマと仔の特別な脆弱性</h2>
      <p>
        Linnell らは、特に <strong>母グマ + 仔グマの巣穴</strong>での撹乱リスクが大きいことを強調しました。
      </p>
      <ul>
        <li>
          母グマは仔を守るために <strong>攻撃的</strong>になる（人身被害リスク）
        </li>
        <li>
          仔は <strong>低体温・低栄養</strong>に極めて弱い
        </li>
        <li>
          一度母から離れた仔の生存率は <strong>ほぼゼロ</strong>
        </li>
        <li>
          母も冬眠中の体力消耗で <strong>春までに死亡</strong>するリスク
        </li>
      </ul>
      <p>
        このため、北米・北欧の野生動物管理機関は、<strong>「冬眠中のクマと巣穴は最大限保護」</strong>
        という原則を確立しています。これは Vol.23（{" "}
        <Link href="/articles/research-digest-023">仔グマ生存率</Link>
        ）の研究と整合的で、人為要因が母子に与えるダメージの大きさを物語ります。
      </p>

      <h2 id="ski">スキー場・林業活動との衝突</h2>
      <p>
        北欧・北米では、<strong>「冬期のレクリエーション・林業活動」</strong>とクマ巣穴の衝突が
        実際の問題になっています。
      </p>
      <ul>
        <li>
          🎿 <strong>スキー場拡張</strong>: 新しいリフト・コース建設で巣穴が破壊される事案
        </li>
        <li>
          🏂 <strong>バックカントリースキー</strong>: スキーヤーが巣穴の上を滑り、クマを驚かせる
        </li>
        <li>
          🌲 <strong>冬期林業</strong>: 雪深い時期の伐採作業で巣穴を発見・破壊
        </li>
        <li>
          ❄️ <strong>スノーモービル</strong>: 振動・音でクマを覚醒させる
        </li>
      </ul>
      <p>
        Linnell ら 2000 以降、これらの活動については <strong>「クマ巣穴回避ガイドライン」</strong>が
        整備されるようになりました。スウェーデン・ノルウェーでは、林業・観光業者に対し
        <strong>「冬期は既知の巣穴から 500m 以上離れる」</strong>といった指針が公布されています。
      </p>

      <h2 id="japan">日本のクマの巣穴選定</h2>
      <p>
        日本のヒグマ（北海道）・ツキノワグマ（本州）も、巣穴選定の基本パターンは同じです。
      </p>
      <h3>ヒグマ（北海道）</h3>
      <ul>
        <li>
          標高 500〜1,000m の中標高山地
        </li>
        <li>
          北向き〜東向きの斜面
        </li>
        <li>
          倒木の下・岩盤の窪み
        </li>
        <li>
          人家から平均 1〜3 km
        </li>
      </ul>
      <h3>ツキノワグマ（本州）</h3>
      <ul>
        <li>
          標高 500〜1,500m の山岳地帯
        </li>
        <li>
          樹洞・岩盤の窪み・倒木の下
        </li>
        <li>
          人家から平均 0.5〜2 km
        </li>
      </ul>
      <p>
        日本では <strong>「天然の樹洞」</strong>を巣穴として利用するツキノワグマが多いのが特徴です。
        大木の中の空洞、太い枝の分かれ目、岩棚など、自然の構造物を巧みに利用します。
        日本のクマの巣穴に関する研究は{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠</Link>
        にもまとめています。
      </p>

      <h2 id="winter">冬期の登山・スノーシューでの配慮</h2>
      <p>
        本論文の知見を踏まえ、冬期の山岳活動では次の配慮が推奨されます。
      </p>
      <ol className="my-4 list-decimal space-y-3 pl-5">
        <li>
          <strong>「冬は安全」と決めつけない</strong> — Vol.4（{" "}
          <Link href="/articles/research-digest-004">気候変動と冬眠</Link>
          ）で見たように、近年は冬眠しない個体も増えています。
        </li>
        <li>
          <strong>巣穴と思われる場所には近づかない</strong> — 雪面に「クマが入った穴」を見つけても、
          覗き込んだり、雪の上を歩いて近くを通ったりしない。
        </li>
        <li>
          <strong>母子グマの巣穴近くで撹乱しない</strong> — 春先（3〜4 月）の覚醒期は特に注意。
          仔連れの母グマと遭遇すれば最も危険な状況の一つです。
        </li>
        <li>
          <strong>冬期の山岳活動でも基本装備を</strong> —
          冬眠していないクマや、覚醒間際のクマと遭遇する可能性があります。
          スプレー・ホーン・複数人行動が基本。
        </li>
      </ol>

      <h2 id="references">参考文献</h2>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <ol className="m-0 list-none divide-y divide-stone-100 p-0">
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              How vulnerable are denning bears to disturbance?（本号メイン）
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Linnell, J. D. C., et al. (2000).{" "}
              <em className="not-italic">Wildlife Society Bulletin</em> 28(2): 400–413.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Variation in brown bear (Ursus arctos) den site characteristics
            </div>
            <div className="mt-0.5 text-xs text-stone-600">
              Manchi, S., &amp; Swenson, J. E. (2005).{" "}
              <em className="not-italic">Ursus</em> 16(2): 145–155.
            </div>
          </li>
          <li className="px-4 py-3 text-sm">
            <div className="font-semibold text-stone-900">
              Scandinavian Brown Bear Research Project（プロジェクト公式）
            </div>
            <a
              href="https://www.scandinavianbearproject.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-xs text-amber-700 underline hover:text-amber-900"
            >
              scandinavianbearproject.org →
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
          次号予告 — Vol.25
        </div>
        <div className="mt-1 text-sm text-stone-800">
          <strong>「クマの『鳴き声』を AI で識別する」</strong> —
          クマの 12 種類以上の鳴き声・うなり声を機械学習で分類した
          最新の音響識別研究を精読します。
        </div>
      </div>
    </ArticleShell>
  );
}
