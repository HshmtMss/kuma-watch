import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-anesthesia")!;

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
        野生クマの捕獲・調査・治療・放獣には<strong>適切な麻酔処置</strong>が不可欠です。
        誤った薬剤・用量・処置は、クマの命を奪うだけでなく、施術者にも大きなリスクを生みます。
        本記事は獣医麻酔学の視点で、野生・救護のクマに使われる麻酔薬・体重別の用量目安・
        体温管理・覚醒監視・拮抗薬まで、自治体担当者・獣医師・救護施設従事者の参考になる実践ガイドです。
        ※ 実際の投与は必ず獣医師の監督下で行ってください。
      </p>

      <ArticleToc
        items={[
          { id: "why-anesthesia", title: "なぜクマに麻酔が必要なのか" },
          { id: "drugs", title: "使用される主な麻酔薬" },
          { id: "dosage", title: "体重別の投与量目安" },
          { id: "delivery", title: "投与経路 — 吹き矢・ダート銃" },
          { id: "monitoring", title: "麻酔中のモニタリング" },
          { id: "risks", title: "リスクと合併症" },
          { id: "antagonists", title: "拮抗薬と覚醒管理" },
          { id: "post-op", title: "覚醒後の取り扱い" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-anesthesia">なぜクマに麻酔が必要なのか</h2>
      <p>
        野生クマへの麻酔が必要となる場面は次の通り。
      </p>
      <ul>
        <li>
          <strong>個体捕獲・移送</strong>: 問題個体の罠捕獲後、安全に移送・処分するため
        </li>
        <li>
          <strong>研究調査</strong>: GPS 首輪装着・採血・DNA サンプリング
        </li>
        <li>
          <strong>救護・治療</strong>: 怪我・病気の野生個体の獣医療
        </li>
        <li>
          <strong>動物園・飼育施設</strong>: 健康診断・歯科処置・手術
        </li>
        <li>
          <strong>放獣</strong>: 山奥へ移送して再野生化する際の安全確保
        </li>
      </ul>
      <p>
        いずれの場合も、安全な拘束・処置・覚醒のために<strong>確実で予測可能な麻酔</strong>が求められます。
      </p>

      <h2 id="drugs">使用される主な麻酔薬</h2>
      <p>
        野生大型動物に使われる麻酔薬は、医療用麻酔とは異なる「動物用」が中心です。
        日本国内で流通する主なものは:
      </p>
      <h3>テラゾル® (Telazol / ゾラチル®)</h3>
      <p>
        <strong>チレタミン + ゾラゼパム</strong>の混合剤。野生クマ・大型獣の標準麻酔薬。
      </p>
      <ul>
        <li>解離性麻酔薬 (チレタミン) と抗不安薬 (ゾラゼパム) の組合せ</li>
        <li>注射後 5〜10 分で深い鎮静、30〜60 分の作業時間</li>
        <li>呼吸・循環抑制が比較的少なく、安全マージンが広い</li>
      </ul>
      <h3>キシラジン (Xylazine)</h3>
      <p>
        α2 アドレナリン受容体作動薬。テラゾルと併用して効果を強化・安定化する。
      </p>
      <ul>
        <li>鎮静・筋弛緩・鎮痛作用</li>
        <li>呼吸抑制・体温低下のリスクあり</li>
        <li>拮抗薬 (アチパメゾール・ヨヒンビン) が利用可能</li>
      </ul>
      <h3>メデトミジン / デクスメデトミジン</h3>
      <p>
        α2 作動薬の改良型。キシラジンよりも作用が強く、副作用が少ない。
      </p>
      <h3>BAM® (Butorphanol + Azaperone + Medetomidine)</h3>
      <p>
        北米の野生クマ捕獲で標準化された 3 剤混合。日本でも一部研究機関で使用される。
      </p>

      <h2 id="dosage">体重別の投与量目安</h2>
      <p>
        以下はあくまで<strong>目安</strong>で、個体の状態 (年齢・健康状態・興奮度・気温) で調整が必要です。
        実際の投与は必ず<strong>獣医師の指示</strong>に従ってください。
      </p>
      <h3>テラゾル + キシラジン (標準プロトコル)</h3>
      <ul>
        <li>テラゾル: <strong>4〜6 mg/kg</strong> (筋注)</li>
        <li>キシラジン: <strong>1〜2 mg/kg</strong> (筋注)</li>
      </ul>
      <p>体重別の目安投与量 (テラゾル):</p>
      <ul>
        <li>50 kg (子グマ): テラゾル 200〜300 mg, キシラジン 50〜100 mg</li>
        <li>100 kg (中型ツキノワ): テラゾル 400〜600 mg, キシラジン 100〜200 mg</li>
        <li>200 kg (大型ツキノワ・小型ヒグマ): テラゾル 800〜1,200 mg, キシラジン 200〜400 mg</li>
        <li>300 kg (中型ヒグマ): テラゾル 1,200〜1,800 mg, キシラジン 300〜600 mg</li>
        <li>500 kg (大型ヒグマ): テラゾル 2,000〜3,000 mg, キシラジン 500〜1,000 mg</li>
      </ul>
      <p>
        実際の現場では、目視で体重を推定するため誤差が大きく、テラゾルの安全域の広さが救命に直結します。
        過量投与より過少投与の方がリスクが高い (覚醒・反撃) ため、やや多めに見積もるのが一般的です。
      </p>

      <h2 id="delivery">投与経路 — 吹き矢・ダート銃</h2>
      <p>
        野生個体への筋肉内注射は、安全な距離からの遠隔投与が必要です。
      </p>
      <ul>
        <li>
          <strong>ダート銃 (CO2 式または火薬式)</strong>: 30〜50m まで届く。最も標準的
        </li>
        <li>
          <strong>吹き矢 (blowpipe)</strong>: 10m 程度。室内・狭所での使用
        </li>
        <li>
          <strong>ポール注射器</strong>: 罠で固定された個体への直接投与
        </li>
      </ul>
      <p>
        投与部位は<strong>大腿四頭筋・三角筋・臀筋</strong>などの大筋肉。
        胸部・腹部に当たると重篤な内臓損傷のリスクがあるため、射撃位置の判断は経験が必要です。
      </p>

      <h2 id="monitoring">麻酔中のモニタリング</h2>
      <p>
        麻酔導入後、処置中は以下を継続監視します。
      </p>
      <ul>
        <li>
          <strong>呼吸数</strong>: 通常 8〜15 回/分。5 回未満は危険、20 以上は浅麻酔
        </li>
        <li>
          <strong>心拍数</strong>: 通常 40〜80 回/分
        </li>
        <li>
          <strong>体温</strong>: 通常 37〜38℃。35℃以下で低体温症のリスク
        </li>
        <li>
          <strong>角膜反射</strong>: 麻酔深度の指標
        </li>
        <li>
          <strong>パルスオキシメーター</strong>: 動脈血酸素飽和度 (SpO2)、舌や歯肉にプローブ
        </li>
        <li>
          <strong>毛細血管再充満時間</strong>: 末梢循環の評価
        </li>
      </ul>
      <p>
        野外環境では、外気温・直射日光・降雨が体温管理を難しくします。
        ブランケットや保温材で体を覆い、夏季は逆に涼しい場所に移動するなどの工夫が必要です。
      </p>

      <h2 id="risks">リスクと合併症</h2>
      <p>
        野生クマの麻酔には次のような重大リスクがあります。
      </p>
      <ul>
        <li>
          <strong>低体温症</strong>: 麻酔下では体温調節が低下、特に冬期・寒冷地でリスク高
        </li>
        <li>
          <strong>高体温症</strong>: 夏期・興奮した個体では捕獲ストレスで高熱、横紋筋融解症のリスク
        </li>
        <li>
          <strong>呼吸抑制・無呼吸</strong>: 過量投与・薬剤感受性個体で発生
        </li>
        <li>
          <strong>嘔吐・誤嚥性肺炎</strong>: 食後の捕獲では特に注意
        </li>
        <li>
          <strong>麻酔事故 (覚醒・施術者攻撃)</strong>: 浅麻酔状態での処置は致命的。
          完全な失神を確認してから接近
        </li>
        <li>
          <strong>放獣後の死亡</strong>: 拮抗薬投与後でも数日間は活動低下、外敵・低温で死亡することも
        </li>
      </ul>
      <p>
        北米の研究では、野生クマの麻酔処置全体の死亡率は 1〜3% 程度と報告されています。
      </p>

      <h2 id="antagonists">拮抗薬と覚醒管理</h2>
      <p>
        処置完了後、覚醒を速めるため拮抗薬を投与します。
      </p>
      <ul>
        <li>
          <strong>アチパメゾール (Antisedan®)</strong>: α2 作動薬の拮抗薬。
          キシラジン・メデトミジンの効果を逆転させる
        </li>
        <li>
          <strong>ヨヒンビン</strong>: α2 拮抗薬の代替
        </li>
        <li>
          <strong>テラゾル成分は完全な拮抗薬がない</strong>: ゾラゼパムにはフルマゼニル、
          チレタミンには確立した拮抗薬がない
        </li>
      </ul>
      <p>
        拮抗薬投与後、5〜15 分で覚醒兆候 (頭部の動き・呼吸の変化) が出現。
        完全な歩行までは 30〜60 分かかります。この間は静かな環境で、人は安全な距離を保ちます。
      </p>

      <h2 id="post-op">覚醒後の取り扱い</h2>
      <p>
        覚醒後の数時間〜数日は次の点に注意。
      </p>
      <ul>
        <li>
          静かな観察場所 (檻・大型ケージ・隠れた林) に配置
        </li>
        <li>
          水分補給を確保 (脱水リスクが高い)
        </li>
        <li>
          完全な運動回復 (12〜24 時間) を確認してから放獣
        </li>
        <li>
          GPS 首輪を装着した個体は、初日の活動低下を予想して位置追跡
        </li>
        <li>
          解剖・処分する場合は、薬剤残留の問題があるため食用には不可
        </li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "麻酔薬は誰でも購入できる？",
            a: "テラゾル等の動物用麻酔薬は獣医師・登録獣医療従事者のみが購入・保管可能。一般者は入手不可です。",
            aText: "テラゾル等の動物用麻酔薬は獣医師・登録獣医療従事者のみが購入・保管可能。一般者は入手不可です。",
          },
          {
            q: "クマよけスプレーは麻酔代わりになる？",
            a: "なりません。スプレーは催涙・刺激で一時的に行動を止める効果しかなく、麻酔のように意識を失わせる作用はありません。",
            aText: "なりません。スプレーは催涙・刺激で一時的に行動を止める効果しかなく、麻酔のように意識を失わせる作用はありません。",
          },
          {
            q: "麻酔したクマは食べられない？",
            a: "薬剤残留があるため、麻酔処置後の個体の肉・内臓を食用にすることは禁忌。狩猟駆除と研究捕獲は明確に分けるべきです。",
            aText: "薬剤残留があるため、麻酔処置後の個体の肉・内臓を食用にすることは禁忌。狩猟駆除と研究捕獲は明確に分けるべきです。",
          },
          {
            q: "麻酔処置中にクマが死亡したら？",
            a: "野生個体の麻酔死亡率は数 % あります。獣医師は最善を尽くしますが、完全に防ぐことは不可能。事前のリスク説明と、現場での蘇生処置 (酸素投与・人工呼吸) の準備が標準です。",
            aText: "野生個体の麻酔死亡率は数 % あります。獣医師は最善を尽くしますが、完全に防ぐことは不可能。事前のリスク説明と、現場での蘇生処置 (酸素投与・人工呼吸) の準備が標準です。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-aging">クマの老化と寿命</Link> /{" "}
        <Link href="/articles/bear-laws">クマと法律 — 駆除・所有・狩猟</Link> /{" "}
        <Link href="/articles/culling-debate">クマの駆除・賛否・倫理</Link>
      </p>
    </ArticleShell>
  );
}
