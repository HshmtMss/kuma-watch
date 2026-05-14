import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-zoonosis")!;

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
        クマに襲われた際、出血そのものよりも危険なのが <strong>感染症</strong> です。
        クマの口腔・爪には多数の細菌が常在し、傷の縫合より<strong>細菌・ウイルス対策が優先</strong>される場面が珍しくありません。
        本記事では、クマと人間の間で起こりうる人獣共通感染症 (ズーノーシス) を獣医学の視点で整理し、
        被害発生後 24 時間以内に何をすべきかをまとめます。
      </p>

      <ArticleToc
        items={[
          { id: "what-is", title: "人獣共通感染症とは" },
          { id: "pasteurella", title: "パスツレラ症 — 最も多い感染症" },
          { id: "tetanus", title: "破傷風 — 致死率の高い古典的感染症" },
          { id: "toxoplasma", title: "トキソプラズマ・寄生虫" },
          { id: "rabies", title: "狂犬病 (リスクは低いが世界では重要)" },
          { id: "tularemia", title: "野兎病 (ツラレミア)" },
          { id: "first-action", title: "被害後の対応 — 24 時間以内に何をすべきか" },
          { id: "hunter", title: "狩猟者・解体者向け注意" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="what-is">人獣共通感染症とは</h2>
      <p>
        <strong>人獣共通感染症 (ズーノーシス、zoonosis)</strong> は、動物から人へ (またはその逆に) 感染する病気の総称です。
        クマは雑食・広域行動性ゆえに多くの病原体を保有しており、咬傷・爪傷・血液・体液・糞便・解体作業など
        複数の経路で人への感染リスクがあります。
      </p>
      <p>
        獣医療・公衆衛生の領域では、ズーノーシス対策は次の 3 段階で考えます。
      </p>
      <ol>
        <li><strong>予防</strong>: 接触機会を減らす (遭遇予防・保護具)</li>
        <li><strong>早期対応</strong>: 暴露直後の傷洗浄・ワクチン</li>
        <li><strong>医療連携</strong>: 感染兆候時の早期受診と病原体特定</li>
      </ol>

      <h2 id="pasteurella">パスツレラ症 — 最も多い感染症</h2>
      <p>
        <strong>パスツレラ菌 (Pasteurella multocida)</strong> はクマ・犬・猫の口腔常在菌で、
        咬傷感染の代表格です。日本人のパスツレラ症の大半はペット由来ですが、
        クマ咬傷でも高い頻度で発症します。
      </p>
      <ul>
        <li>潜伏期間: <strong>数時間〜24 時間</strong>と非常に短い</li>
        <li>症状: 咬傷部の急激な腫脹・発赤・激しい疼痛・発熱</li>
        <li>合併症: 蜂窩織炎、骨髄炎、敗血症 (重症化リスクあり)</li>
        <li>治療: ペニシリン系・第三世代セフェム系抗菌薬が第一選択</li>
      </ul>
      <p>
        咬傷から数時間で急速に腫れる場合は迷わず救急受診を。
        「腫れているだけ」で軽視すると敗血症に進行する例があります。
      </p>

      <h2 id="tetanus">破傷風 — 致死率の高い古典的感染症</h2>
      <p>
        <strong>破傷風菌 (Clostridium tetani)</strong> は土壌中に広く分布する嫌気性菌。
        クマの爪・歯には土壌成分が付着していることが多く、深い創傷では破傷風感染のリスクがあります。
      </p>
      <ul>
        <li>潜伏期間: <strong>3〜21 日</strong>。発症すると致死率 10〜30%</li>
        <li>症状: 咀嚼筋の硬直 (口が開かない)・全身けいれん・呼吸困難</li>
        <li>予防: 破傷風トキソイドワクチン (定期接種 10 年毎の追加が推奨)</li>
        <li>暴露後: 受傷後 24 時間以内に破傷風トキソイド + 抗破傷風ヒト免疫グロブリン</li>
      </ul>
      <p>
        最後の破傷風ワクチン接種から 5 年以上経過している場合、クマ咬傷では追加接種が必要です。
        登山・狩猟・農作業を行う人は、平時からワクチン履歴を確認しておきましょう。
      </p>

      <h2 id="toxoplasma">トキソプラズマ・寄生虫</h2>
      <p>
        クマの肉・内臓には次のような寄生虫リスクがあります。生食 (狩猟肉の刺身・タタキ) は絶対に避けてください。
      </p>
      <ul>
        <li>
          <strong>トリヒナ (Trichinella spp.)</strong>: 筋肉内の幼虫。北海道のヒグマ生食で集団感染歴あり。
          発熱・浮腫・心筋炎を起こす重篤な寄生虫病
        </li>
        <li>
          <strong>サルコシスチス</strong>: 横紋筋に寄生。下痢・腹痛
        </li>
        <li>
          <strong>トキソプラズマ</strong>: 全身性感染。妊婦は特に注意 (胎児への影響)
        </li>
        <li>
          <strong>アニサキス</strong>: クマ肉では稀だが、川魚を多く食べたクマでは可能性
        </li>
      </ul>
      <p>
        クマ肉は<strong>中心温度 75℃以上で 1 分以上加熱</strong>するのが基本。
        冷凍処理 (−20℃ で 7 日以上) でも寄生虫の多くは死滅しますが、トリヒナは耐性があるため加熱が確実です。
      </p>

      <h2 id="rabies">狂犬病 (リスクは低いが世界では重要)</h2>
      <p>
        <strong>日本国内の野生動物には狂犬病はありません</strong> (国内 1957 年以降の感染例なし)。
        しかし<strong>海外遠征 (ロシア・中国・北米・東南アジア)</strong> でクマに咬まれた場合、
        狂犬病暴露として即座にワクチン接種が必要です。
      </p>
      <ul>
        <li>潜伏期間: 1〜3 か月 (長くて 1 年以上)</li>
        <li>発症すると<strong>致死率ほぼ 100%</strong>。発症前の暴露後接種が唯一の救命策</li>
        <li>暴露後は WHO の Post-Exposure Prophylaxis (PEP) プロトコル (4〜5 回の接種)</li>
      </ul>

      <h2 id="tularemia">野兎病 (ツラレミア)</h2>
      <p>
        <strong>野兎病菌 (Francisella tularensis)</strong> はノウサギの病原体ですが、ノウサギを捕食するクマも保菌することがあります。
        北日本・東北では狩猟者・解体者間で散発的に発生。
      </p>
      <ul>
        <li>潜伏期間: 3〜5 日</li>
        <li>症状: 発熱・リンパ節腫脹・潰瘍 (受傷部位)</li>
        <li>治療: ストレプトマイシン・テトラサイクリン系抗菌薬</li>
        <li>予防: 解体時の手袋・マスク着用、傷口の徹底洗浄</li>
      </ul>

      <h2 id="first-action">被害後の対応 — 24 時間以内に何をすべきか</h2>
      <ol>
        <li>
          <strong>大量の流水で創部を 10 分以上洗浄</strong>。石鹸併用が望ましい。
          消毒薬 (ポビドンヨード等) は、洗浄後に補助的に。
        </li>
        <li>
          <strong>圧迫止血</strong>。動脈出血なら救急車を要請。
        </li>
        <li>
          <strong>必ず医療機関を受診</strong>。「軽傷だから」と自宅処置で済ませない。
          抗菌薬の予防的投与 (アモキシシリン・クラブラン酸など) と破傷風ワクチン追加が標準対応。
        </li>
        <li>
          <strong>受傷状況を医療者に伝える</strong>: 場所・クマの種類 (ツキノワ / ヒグマ)・接触時間・他の傷の有無。
          狂犬病疑い (海外) の場合は必ず申告。
        </li>
        <li>
          <strong>役所・警察に通報</strong>。同じクマが他の人を襲う可能性、捕獲・追跡の判断に必要。
        </li>
      </ol>
      <p>
        詳しくは <Link href="/articles/first-aid">クマに襲われた直後の応急処置</Link> も併せて読んでください。
      </p>

      <h2 id="hunter">狩猟者・解体者向け注意</h2>
      <p>
        クマの解体・処理に従事する人は、より広範な感染症対策が必要です。
      </p>
      <ul>
        <li>解体時は<strong>ニトリル手袋・サージカルマスク・ゴーグル</strong>を着用</li>
        <li>傷のある手指は防水テープで保護</li>
        <li>クマ肉は<strong>必ず加熱調理</strong>。生食・タタキ・燻製のみは避ける</li>
        <li>内臓 (特に小腸・横隔膜) はトリヒナ感染部位なので慎重に</li>
        <li>解体後は石鹸・消毒で手洗い徹底</li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "クマに引っかかれただけ (出血は少量) でも医療機関へ？",
            a: "はい。爪の傷でも土壌菌が深部に押し込まれるため、破傷風・パスツレラ症のリスクがあります。受診の上、必要なら抗菌薬・破傷風ワクチンを。",
            aText: "はい。爪の傷でも土壌菌が深部に押し込まれるため、破傷風・パスツレラ症のリスクがあります。受診の上、必要なら抗菌薬・破傷風ワクチンを。",
          },
          {
            q: "感染症の予防的ワクチンは平時から打てる？",
            a: "破傷風トキソイドは定期接種で 10 年毎の追加が推奨。海外遠征 (狂犬病流行国) では出発前の予防接種を。パスツレラ・トキソプラズマには有効なヒトワクチンはなし (暴露後の早期治療が鍵)。",
            aText: "破傷風トキソイドは定期接種で 10 年毎の追加が推奨。海外遠征 (狂犬病流行国) では出発前の予防接種を。パスツレラ・トキソプラズマには有効なヒトワクチンはなし (暴露後の早期治療が鍵)。",
          },
          {
            q: "ペットの犬がクマと遭遇した後、人にうつる？",
            a: "犬がクマの体液・血液に触れた場合、トリヒナ・トキソプラズマなどの寄生虫を運ぶ可能性。獣医師に相談し、必要なら寄生虫検査を。",
            aText: "犬がクマの体液・血液に触れた場合、トリヒナ・トキソプラズマなどの寄生虫を運ぶ可能性。獣医師に相談し、必要なら寄生虫検査を。",
          },
          {
            q: "クマの肉を貰った。生で食べていい？",
            a: "絶対に生で食べないでください。中心温度 75℃ 以上で 1 分以上の加熱が必須。北海道のヒグマ肉刺身でトリヒナ集団感染が発生した事例があります。",
            aText: "絶対に生で食べないでください。中心温度 75℃ 以上で 1 分以上の加熱が必須。北海道のヒグマ肉刺身でトリヒナ集団感染が発生した事例があります。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/first-aid">クマに襲われた直後の応急処置</Link> /{" "}
        <Link href="/articles/bear-insurance">保険・補償の確認</Link> /{" "}
        <Link href="/articles/playing-dead">死んだふりの正しい方法</Link>
      </p>
    </ArticleShell>
  );
}
