import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("electric-fence")!;

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
        <strong>結論</strong>:
        家庭・果樹園・畑のクマ対策で、最も実効性が高い物理障壁が
        <strong>電気柵</strong>です。電圧 5,000V 以上、5 段以上の張り、
        確実なアース、定期的な草刈りの 4 点が揃えば撃退率は飛躍的に上がります。
        ホームセンターで揃う機材で、果樹園 1 反 (10a) 規模なら 5〜10 万円から始められます。
      </p>

      <ArticleToc
        items={[
          { id: "why", title: "なぜ電気柵がクマに効くのか" },
          { id: "components", title: "電気柵の構成 — 必要な機材" },
          { id: "spec", title: "クマ用の必須スペック" },
          { id: "layout", title: "張り方の基本 — 5 段張り" },
          { id: "ground", title: "アース (接地) が一番の落とし穴" },
          { id: "maintenance", title: "草刈りと点検の習慣" },
          { id: "subsidy", title: "補助金と申請" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why">なぜ電気柵がクマに効くのか</h2>
      <p>
        クマは学習能力の高い動物です。電気柵に一度触れて電気ショックを受けた個体は、
        その柵を二度と越えようとしないのが基本的な反応です。
      </p>
      <ul>
        <li>
          <strong>痛覚学習が長期に残る</strong>: 1 回の経験で柵全体を「触ってはいけないもの」と学習。
        </li>
        <li>
          <strong>侵入経路が物理的に塞がれる</strong>: 圧倒的な力でも、感電を恐れて踏み越えない。
        </li>
        <li>
          <strong>自宅周辺の餌場化を防ぐ</strong>:
          <Link href="/articles/home-protection">自宅・果樹園のクマ対策</Link>と組み合わせれば、
          匂い管理 + 物理障壁の二重防御になります。
        </li>
      </ul>
      <p>
        逆に「電圧不足」「アース不良」「草が触れて漏電」のいずれかが起きると、
        クマは「触っても痛くない柵」と学習し、以降は無視されます。
      </p>

      <h2 id="components">電気柵の構成 — 必要な機材</h2>
      <ul>
        <li>
          <strong>電源装置 (本機)</strong>: 太陽光パネル付き / バッテリー式 / コンセント式。
          山間部の畑では太陽光が現実的。
        </li>
        <li>
          <strong>支柱 (FRP / グラスファイバー製)</strong>:
          1.2〜1.8m の長さ。クマ用は 5 段張りで 1.5m 以上を推奨。
        </li>
        <li>
          <strong>電線 (ワイヤー / 樹脂線)</strong>:
          ステンレス線か導電性樹脂線。距離があるならステンレスの方が電圧降下が少ない。
        </li>
        <li>
          <strong>アース棒 (接地棒)</strong>: 1m 以上の銅・亜鉛メッキ棒。
          深く打ち込むことが命。
        </li>
        <li>
          <strong>がいし・止め金具</strong>: 支柱と電線の絶縁を取る部品。
        </li>
        <li>
          <strong>テスター (電圧計)</strong>: 5,000V を計れるクマ用テスター。
          点検に必須。
        </li>
        <li>
          <strong>警告看板</strong>: 「電気柵注意」表示は法令上の義務 (人体感電事故対策)。
        </li>
      </ul>

      <h2 id="spec">クマ用の必須スペック</h2>
      <p>
        シカ・イノシシ用と<strong>同じ機材で済まない</strong>のがクマ用の特徴です。
      </p>
      <ul>
        <li>
          <strong>電圧 5,000V 以上 (推奨 7,000V)</strong>:
          クマの分厚い毛皮越しに痛覚を与えるため。シカ用 3,000〜4,000V では不十分。
        </li>
        <li>
          <strong>5 段張り</strong>: 地上から 20、40、60、90、120cm の 5 段。
          子グマ・成獣のどちらにも通電する高さ配置。
        </li>
        <li>
          <strong>外周長に余裕がある電源出力</strong>:
          1km あたりの抵抗を計算し、実効電圧 5,000V を維持できる本機を選ぶ。
        </li>
        <li>
          <strong>パルス出力 (連続通電不可)</strong>:
          人体への安全のため、約 1 秒間隔のパルス送電になる仕様 (法令準拠)。
        </li>
      </ul>

      <h2 id="layout">張り方の基本 — 5 段張り</h2>
      <ol>
        <li>
          <strong>外周を測って支柱位置を決める</strong>:
          支柱間隔は 4〜5m。曲がり角は 1m 以内に。
        </li>
        <li>
          <strong>支柱を打ち込む</strong>: 地中 30cm 以上。揺れない深さ。
        </li>
        <li>
          <strong>電線を 5 段に張る</strong>:
          地上 20cm / 40cm / 60cm / 90cm / 120cm。たるみが出ないよう張力を調整。
        </li>
        <li>
          <strong>角と中間に張力調整器</strong>:
          季節で張力が変わるので調整できる構造に。
        </li>
        <li>
          <strong>各段を本機の正極に接続</strong>:
          全段が活線。地面 (アース) との電位差で感電させる仕組み。
        </li>
        <li>
          <strong>外周入口にゲート</strong>: 出入りに開閉できる絶縁ハンドル付きゲート。
        </li>
      </ol>

      <h2 id="ground">アース (接地) が一番の落とし穴</h2>
      <p>
        電気柵が効かない原因の <strong>7 割はアース不良</strong>と言われます。
        ここを軽視すると 10 万円かけた柵が機能しません。
      </p>
      <ul>
        <li>
          <strong>アース棒は 1m 以上を 3 本</strong>: 並列に打ち、相互距離 2m 以上。
        </li>
        <li>
          <strong>湿った土壌に打つ</strong>:
          乾燥した砂地・岩盤では効きません。湿地のそば・湧水脇が理想。
        </li>
        <li>
          <strong>銅線で本機のアース端子に接続</strong>: 8 番線 (8mm²) 以上の太さ。
        </li>
        <li>
          <strong>定期的に水をまく</strong>:
          梅雨明け・冬期はアース棒周辺に水を撒くと電位差が安定。
        </li>
        <li>
          <strong>テスターで実電圧を確認</strong>:
          設定値ではなく、現場の最遠端での実電圧 5,000V を満たすかを確認。
        </li>
      </ul>

      <h2 id="maintenance">草刈りと点検の習慣</h2>
      <p>
        電気柵は「張ったら終わり」ではなく、保守が前提の設備です。
      </p>
      <ul>
        <li>
          <strong>草刈り (週 1 回〜月 1 回)</strong>:
          下段 (20cm) に草が触れると漏電し、電圧が下がります。
          柵の内側 + 外側 30cm の草を常に刈る。
        </li>
        <li>
          <strong>テスター点検 (週 1 回)</strong>:
          5,000V を切っていないか。最遠端で測ること。
        </li>
        <li>
          <strong>支柱の倒れ・電線のたるみチェック</strong>:
          雨・雪・倒木で破損している箇所を補修。
        </li>
        <li>
          <strong>バッテリー残量・太陽光パネルの汚れ</strong>:
          月 1 回点検。冬季は日照時間に応じてバッテリー併用。
        </li>
        <li>
          <strong>越冬準備</strong>:
          積雪地帯では 10 月までに点検済ませる。雪に埋もれた状態でも漏電しない設計に。
        </li>
      </ul>

      <h2 id="subsidy">補助金と申請</h2>
      <p>
        電気柵の設置は多くの自治体で補助対象です。
      </p>
      <ul>
        <li>
          <strong>市町村の有害鳥獣対策補助金</strong>:
          材料費の 1/2〜2/3 補助が一般的。事前申請が必須。
        </li>
        <li>
          <strong>農林水産省「鳥獣被害防止総合対策交付金」</strong>:
          集落単位の取り組みに対して国費が出る制度。集落協議会経由。
        </li>
        <li>
          <strong>申請の窓口</strong>: 市町村の農林課・産業振興課。
          着工前に必ず相談を。
        </li>
      </ul>
      <p>
        制度の根拠については
        <Link href="/articles/bear-laws">クマと法律</Link>もあわせて参照してください。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "シカ用の電気柵をそのまま使ってもクマに効きますか?",
            a: (
              <>
                効きません。シカ用は電圧 3,000〜4,000V、3 段張りが標準ですが、
                クマには電圧不足で痛覚を感じにくく、段数も足りません。
                クマ用には 5,000V 以上 + 5 段張りに増強する必要があります。
                既存の本機の出力電圧を上げる調整 / 段数追加で対応可能なケースもあります。
              </>
            ),
            aText:
              "シカ用 (3,000〜4,000V、3 段張り) はクマには電圧不足です。クマ用には 5,000V 以上、5 段張りに増強してください。",
          },
          {
            q: "人や犬が触ったら危険?",
            a: (
              <>
                法令準拠の電気柵はパルス送電 (約 1 秒間隔の瞬間通電) なので、
                健常者が触っても怪我には至りません。ただし強い痛みは感じ、
                心臓疾患のある人・小児・電気を流すペットには注意が必要。
                警告看板の設置は法令上の義務で、未設置だと事故時に責任を問われます。
              </>
            ),
            aText:
              "法令準拠の電気柵はパルス送電なので健常者が触っても怪我には至りませんが、強い痛みは感じます。警告看板の設置は法令上の義務です。",
          },
          {
            q: "張ったのに効かなかった。何を確認すれば?",
            a: (
              <>
                確認順は (1) 最遠端のテスター電圧が 5,000V を超えているか、
                (2) 草が下段に触れていないか、(3) アース棒の埋設深度と本数、
                (4) 電線にゆるみ・断線がないか、です。
                7 割の不調はアース不良なので、まずアース棒を 1〜2 本追加してみてください。
              </>
            ),
            aText:
              "確認順は最遠端の電圧、草の漏電、アース棒の本数と深さ、電線のゆるみ・断線です。多くの不調はアース不良なので、アース棒を追加してみてください。",
          },
          {
            q: "果樹園 1 反 (10a) だといくらかかる?",
            a: (
              <>
                外周約 130m 程度の規模で、太陽光本機 + 5 段張り資材で 5〜10 万円から。
                自治体の補助金で 1/2〜2/3 が戻ることが多いので、自己負担はもっと小さくなります。
                着工前に市町村の農林課・産業振興課に相談してください。
              </>
            ),
            aText:
              "外周約 130m 規模で太陽光本機 + 5 段張り資材が 5〜10 万円から。自治体補助で 1/2〜2/3 が戻ることが多いので、着工前に農林課に相談してください。",
          },
        ]}
      />
    </ArticleShell>
  );
}
