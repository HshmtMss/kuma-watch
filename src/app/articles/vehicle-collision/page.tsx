import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("vehicle-collision")!;

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
        <strong>結論</strong>: クマとの自動車衝突は <strong>「シカ衝突よりも危険」</strong>です。
        体重 100〜300kg の塊が時速 60km で衝突すると、車も人もクマも重大なダメージを受けます。
        さらに衝突後に <strong>クマが車外で生きていて運転者を襲う事例</strong>もあり、
        対応を誤ると二次被害に発展します。
      </p>

      <ArticleToc
        items={[
          { id: "stats", title: "クマ衝突事故の実態" },
          { id: "where", title: "どこで起きやすいか" },
          { id: "prevention", title: "回避運転の基本" },
          { id: "if-collision", title: "衝突してしまった場合" },
          { id: "after", title: "通報・保険・現場対応" },
          { id: "night", title: "夜間運転の特別な注意" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="stats">クマ衝突事故の実態</h2>
      <p>
        警察庁・損害保険会社の統計では、クマと自動車の衝突事故は
        年間で <strong>数百件〜千件規模</strong>と推定されます
        （シカ衝突はその 10〜20 倍）。報告されないケースも多く、
        実数はさらに大きいと考えられます。
      </p>
      <h3>事故の特徴</h3>
      <ul>
        <li>北海道（ヒグマ）・東北・北陸・長野で多発</li>
        <li>夕方〜夜間〜早朝に集中</li>
        <li>秋（9〜11 月）に件数のピーク</li>
        <li>高速道路の山間部区間・国道のカーブ区間</li>
        <li>車側の損傷: フロントガラス破損・ボンネット凹み・ラジエーター破損</li>
        <li>人身被害: 運転者の頭部・首・胸部の打撲が多い</li>
      </ul>
      <h3>シカ衝突との違い</h3>
      <ul>
        <li>クマは <strong>体重が重い</strong>（成獣 100〜300kg、シカは 50〜100kg）</li>
        <li>クマは <strong>背が低く</strong>、ライト直射が当たりにくい</li>
        <li>クマは <strong>衝突後も活動可能</strong>な場合があり、二次被害リスクが高い</li>
        <li>クマは <strong>群れでなく単独行動</strong>が多い（複数突進は少ない）</li>
      </ul>

      <h2 id="where">どこで起きやすいか</h2>
      <p>
        クマ衝突は <strong>「クマの生息域 × 自動車の高速移動」</strong>が重なる場所で起きます。
      </p>
      <ul>
        <li>
          <strong>高速道路の山間部区間</strong> — 道東道・道央道（北海道）、東北道・山形道、中央道・上信越道など
        </li>
        <li>
          <strong>国道・県道の峠区間</strong> — 山越えのカーブ・トンネル前後
        </li>
        <li>
          <strong>道路沿いの果樹園・トウモロコシ畑</strong> — 秋期の誘引源
        </li>
        <li>
          <strong>河川・林道との交差点</strong> — クマの移動経路
        </li>
        <li>
          <strong>夜間営業の道の駅・SA 周辺</strong> — ゴミ箱の誘引
        </li>
      </ul>
      <p>
        全国の市町村別出没傾向は{" "}
        <Link href="/place/ranking">全国クマ警戒マップ</Link>
        で、観光地周辺の傾向は{" "}
        <Link href="/spot">観光地ページ</Link>で確認できます。
      </p>

      <h2 id="prevention">回避運転の基本</h2>
      <h3>速度と車間距離</h3>
      <ul>
        <li>山間部の夕方〜夜間は <strong>制限速度の 8 割以下</strong>を意識</li>
        <li>カーブ前で減速し、出口の路面を必ず視認</li>
        <li>前車との車間を通常の 1.5 倍に</li>
      </ul>
      <h3>視認性の確保</h3>
      <ul>
        <li>ハイビーム積極活用（対向車のないときは常時）</li>
        <li>フォグランプ活用</li>
        <li>フロントガラス・ヘッドライトの清掃</li>
        <li>ドライブレコーダー前面録画</li>
      </ul>
      <h3>クマを発見したとき</h3>
      <ol>
        <li>急ブレーキ + ハザード点灯（後続車に警告）</li>
        <li>クラクションを長めに鳴らす（クマに警告）</li>
        <li>道路上に居続けるなら、停車して通過を待つ</li>
        <li>急ハンドルでの回避は <strong>絶対にしない</strong>（対向車線突入・横転リスク）</li>
        <li>後続車にクマの存在を伝える（パッシング・ハザード）</li>
      </ol>
      <p>
        急ハンドルが最も危険です。直進ブレーキ → ハザード → クラクション の順序を意識してください。
      </p>

      <h2 id="if-collision">衝突してしまった場合</h2>
      <h3>衝突直後の対応</h3>
      <ol>
        <li>
          <strong>車を停めて、絶対に降りない</strong> — クマが車外で生きている可能性
        </li>
        <li>
          <strong>ハザード点灯 + 110 番</strong>（人身被害ありなら 119 番も）
        </li>
        <li>
          <strong>後続車に注意喚起</strong> — 三角表示板を車内から見せる
        </li>
        <li>
          <strong>クマの状態を窓から目視確認</strong> — 動いている・呼吸している・出血しているかを確認
        </li>
        <li>
          <strong>負傷したクマが暴れている場合は警察・自治体の到着を車内で待つ</strong>
        </li>
        <li>
          <strong>クマが既に死亡している場合も死体に近づかない</strong> — 個体収容は猟友会・自治体の業務
        </li>
      </ol>
      <p>
        衝突後にクマを移動させたり、写真を近距離で撮ろうとした人が負傷した事例があります。
        絶対に車外に降りないことが原則です。
      </p>

      <h2 id="after">通報・保険・現場対応</h2>
      <h3>通報の流れ</h3>
      <ol>
        <li>110 番（警察）→ 状況・場所・けがの有無を伝える</li>
        <li>119 番（必要な場合）→ 救急要請</li>
        <li>道路管理者（NEXCO・国交省・自治体）にも連絡が回る</li>
        <li>猟友会・自治体担当者が現場へ</li>
        <li>クマ個体の収容・現場検証</li>
      </ol>
      <h3>保険対応</h3>
      <p>
        自動車のクマ衝突被害は、<strong>車両保険（一般型）</strong>でカバーされます。
        ただし「エコノミー型」「車対車型」では対象外のことが多いので、契約内容を確認してください。
      </p>
      <ul>
        <li>車両保険（一般型）— カバー対象</li>
        <li>車両保険（エコノミー型）— 多くは対象外</li>
        <li>対人賠償・対物賠償 — クマは野生動物のため賠償義務なし</li>
        <li>人身傷害補償 — 運転者・同乗者のけがをカバー</li>
        <li>搭乗者傷害 — 同上</li>
      </ul>
      <p>
        詳細は{" "}
        <Link href="/articles/bear-insurance">クマ被害は保険でカバーされる？</Link>
        を参照してください。
      </p>

      <h2 id="night">夜間運転の特別な注意</h2>
      <p>
        クマ衝突の多くは夕暮れ〜深夜〜早朝に起こります。
        この時間帯は <strong>視認性・反応時間・疲労</strong>の三重苦が重なります。
      </p>
      <h3>夜間運転のチェックリスト</h3>
      <ul>
        <li>ヘッドライト・テールランプの点検（玉切れ・くもり）</li>
        <li>視野の確保（フロントガラス・サイドミラー清掃）</li>
        <li>ハイビーム積極使用</li>
        <li>2 時間ごとの休憩で疲労蓄積を避ける</li>
        <li>クマ出没情報の事前確認 →{" "}
          <Link href="/">クマウォッチ・マップ</Link>
        </li>
        <li>急ブレーキ可能な車間距離維持</li>
        <li>カーブ前は必ず減速</li>
      </ul>
      <h3>レンタカー・カーシェア利用時</h3>
      <ul>
        <li>クマ衝突時の補償オプションを確認（追加料金で範囲拡張可能）</li>
        <li>慣れない車両は急ブレーキ感覚が異なる — 山道での速度をより抑える</li>
        <li>北海道・東北・北陸でのレンタカー長距離走行は特に注意</li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "クマが道路上で動かなくなった場合、車を降りて確認していい?",
            a: "絶対に降りないでください。気絶しているクマが起き上がって攻撃する事例があります。窓越しに状態確認し、警察・自治体の到着を車内で待ちます。",
            aText:
              "絶対に降りない。気絶していたクマが起き上がって攻撃する事例あり。窓越しに状態確認、警察・自治体到着を車内で待つ。",
          },
          {
            q: "クマを轢いた場合、運転者の責任になりますか?",
            a: "野生動物との衝突は通常、運転者の過失責任は問われません。ただし「夜間ハイビーム不使用」「制限速度超過」「居眠り運転」など明らかな過失があれば一部責任を問われることもあります。事故後は警察に詳細を報告してください。",
            aText:
              "通常、運転者過失責任は問われない。ただしハイビーム不使用・速度超過・居眠りなど明らか過失があれば一部責任あり。",
          },
          {
            q: "車両保険に入っていないとクマ衝突の修理費は自己負担?",
            a: "はい。野生動物の衝突に対して相手から賠償を取ることはできないため、車両保険（一般型）に入っていない場合は全額自己負担となります。山間部・北海道を運転する機会が多い方は加入推奨。",
            aText:
              "車両保険なしは全額自己負担。野生動物に賠償請求不可。山間部・北海道走行が多い方は車両保険一般型推奨。",
          },
          {
            q: "ハイビームは必ず使った方がいい?",
            a: "対向車・先行車がいない場面では積極使用が推奨です。視認距離が伸び、クマ・シカの目が反射して発見しやすくなります。対向車が来たらすぐにロービームに切り替えるマナーも忘れずに。",
            aText:
              "対向車・先行車なしの場面では積極使用推奨。視認距離が伸び動物の目反射で発見しやすい。対向車来たら即ロー切替。",
          },
          {
            q: "高速道路でクマを目撃したらどう通報する?",
            a: "走行中は安全確保が最優先。SA・PA で停車してから 110 番、または非常電話を利用。NEXCO 各社にも報告が回ります。停車中にハザードを点灯し、後続車に注意喚起することも重要です。",
            aText:
              "安全確保最優先。SA・PA で停車後 110 番か非常電話。NEXCO にも報告。停車中はハザード点灯で後続車に注意喚起。",
          },
        ]}
      />
    </ArticleShell>
  );
}
