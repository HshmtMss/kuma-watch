import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("bear-reproduction")!;

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
        クマは哺乳類の中でもユニークな繁殖戦略を持っています。
        交尾は <strong>初夏 (6〜7 月)</strong>、ところが出産は <strong>翌年 1〜2 月</strong>。
        受精卵は子宮に着床せずに半年も「待機」し、母グマの栄養状態が十分と判断されたときだけ着床して胎児が発達する
        <strong>「着床遅延 (delayed implantation)」</strong>という仕組みを持っています。
        さらに、出産は冬眠の真っ最中、巣穴の中で行われる — クマの繁殖生理は獣医学的にも生物学的にもきわめて興味深いテーマです。
      </p>

      <ArticleToc
        items={[
          { id: "cycle", title: "クマの繁殖サイクル — 1 年と少しの動き" },
          { id: "delayed", title: "着床遅延 — 半年間「待機」する受精卵" },
          { id: "birth", title: "冬眠中の出産 — 巣穴の中で何が起きているか" },
          { id: "newborn", title: "新生児クマ — 200g から始まる急成長" },
          { id: "mother-cub", title: "母子関係と子別れ" },
          { id: "vet-implication", title: "獣医・保全からの含意" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="cycle">クマの繁殖サイクル — 1 年と少しの動き</h2>
      <p>
        ツキノワグマ・ヒグマの繁殖サイクルはおおむね次の流れです (北日本基準)。
      </p>
      <ul>
        <li><strong>5〜7 月</strong>: 発情・交尾期 (オスが広範囲を歩き回る)。複数のオスと交尾することも</li>
        <li><strong>7〜11 月</strong>: 受精卵は子宮内で発達せずに浮遊 (着床遅延)</li>
        <li><strong>11〜12 月</strong>: 母グマの脂肪量が十分なら着床。冬眠開始</li>
        <li><strong>1〜2 月</strong>: 冬眠中の巣穴で出産 (1〜3 頭)</li>
        <li><strong>4〜5 月</strong>: 親子で巣穴から出る</li>
        <li><strong>翌年〜翌々年</strong>: 子別れまで母子で行動</li>
      </ul>
      <p>
        ヒグマの方がツキノワグマより繁殖周期がやや長く、子別れまで 2〜3 年。
        ツキノワグマは 1.5〜2 年で子別れする傾向があります。
      </p>

      <h2 id="delayed">着床遅延 — 半年間「待機」する受精卵</h2>
      <p>
        <strong>着床遅延 (delayed implantation / embryonic diapause)</strong> は、
        受精卵が分裂を一時停止して子宮腔内に浮遊し続ける現象です。
        クマ以外にもイタチ科 (テン・ミンク)、アザラシ・トド、カンガルーなど 100 種以上の哺乳類で確認されています。
      </p>
      <p>
        クマの場合、受精卵は <strong>胚盤胞 (blastocyst)</strong> の段階で発達を止め、
        子宮内で数か月浮遊します。母グマがこの期間に十分な脂肪を蓄えられなければ、
        受精卵そのものが吸収され、その年の妊娠は成立しません。
      </p>
      <p>
        この機構は <strong>母体の生存と子の生存を同時最適化する自然の保険</strong>と言えます。
        飢餓状態で出産しても授乳できないので、妊娠を「キャンセル」して母体を守る、というわけです。
        ホルモン制御では、エストロゲン・プロゲステロンのほかに <strong>プロラクチン</strong>
        の上昇が着床のトリガーであると考えられています。
      </p>

      <h2 id="birth">冬眠中の出産 — 巣穴の中で何が起きているか</h2>
      <p>
        クマの出産は<strong>冬眠の真っ最中、巣穴の中で行われる</strong>のが特徴です。
        母グマは体温・心拍数を下げた半覚醒状態のまま陣痛を経験し、出産後は再び浅い冬眠に戻り、
        子グマに授乳しながら春まで巣穴に留まります。
      </p>
      <p>
        このタイミングの妙は、次のような利点を持っています:
      </p>
      <ul>
        <li>巣穴は捕食者から守られ、安全に出産できる</li>
        <li>母グマは活動せず代謝が低いため、エネルギーを授乳に集中できる</li>
        <li>春に親子で出てくる頃には子グマも歩行可能なサイズに育っている</li>
      </ul>
      <p>
        ヒグマの冬眠中の体温は 30〜35℃ (人間より 3〜7℃ 低い程度) で、完全な体温低下ではない<strong>「浅い冬眠」</strong>に分類されます。
        この浅さが、出産・授乳・新生児ケアを冬眠中に可能にする鍵です。
      </p>

      <h2 id="newborn">新生児クマ — 200g から始まる急成長</h2>
      <p>
        生まれたばかりのクマの子は体重わずか <strong>200〜500g</strong> (種にもよる)。
        母グマの体重比で 0.2〜0.3% という、哺乳類の中でも極端に小さな新生児比率です。
        これは「冬眠中の母体への負担を最小化する」進化の結果と考えられています。
      </p>
      <p>
        新生児クマの特徴:
      </p>
      <ul>
        <li>目はまだ開いていない (生後 4〜6 週で開眼)</li>
        <li>毛はまばらで体温調節は母体依存</li>
        <li>母乳の脂質含有量は 20〜30% と極めて濃厚</li>
        <li>巣穴を出る頃 (4〜5 月) には体重 4〜6kg と<strong>10〜20 倍以上</strong>に成長</li>
      </ul>
      <p>
        母グマは飲まず食わずで授乳し続けるため、春に巣穴から出てくる頃には自身の体重が 30〜40% 落ちることもあります。
      </p>

      <h2 id="mother-cub">母子関係と子別れ</h2>
      <p>
        子グマは母グマから 1.5〜3 年間、生存に必要な技術 (食物の探し方・巣穴の作り方・人や他のオスを避ける行動) を学びます。
      </p>
      <p>
        母子関係の特徴:
      </p>
      <ul>
        <li>母グマは子に強い保護本能を持ち、子の近くに人や他のクマが現れると攻撃的になる</li>
        <li>子グマ同士は遊びを通じて社会行動・狩猟技術を学習</li>
        <li>母グマが次の発情期 (子グマ 1.5〜2 歳) になると、子別れを促す</li>
        <li>子別れ直後の若いクマは食物・縄張りが定まらず、市街地に出やすい (アーバンベア化の一因)</li>
      </ul>
      <p>
        この時期の母グマに近づくことは絶対に避けるべきです。詳しくは{" "}
        <Link href="/articles/cub-handling">子グマを見たら何をすべきか</Link> と{" "}
        <Link href="/articles/spring">春のクマ対策 — 母グマの保護本能</Link> も参照。
      </p>

      <h2 id="vet-implication">獣医・保全からの含意</h2>
      <p>
        着床遅延・冬眠出産の仕組みは、保全生物学・獣医学に重要な示唆を与えます。
      </p>
      <ul>
        <li>
          <strong>気候変動の影響</strong>: 暖冬で冬眠が中断されると着床のホルモン制御が乱れ、流産率が上がる可能性
        </li>
        <li>
          <strong>栄養と繁殖</strong>: 山の堅果類 (ブナ・ナラ・クリ) の凶作年は妊娠率が大きく下がる。
          山と人里の境界での餌管理が、クマ個体群の出生率を左右する
        </li>
        <li>
          <strong>個体管理</strong>: 母子グマの捕獲・駆除は次世代の生産に直接影響する。
          自治体の駆除政策では「単独成獣」と「母子グマ」の扱いを分けることが重要
        </li>
        <li>
          <strong>飼育・治療</strong>: 動物園・救護施設での妊娠管理にも、この着床遅延の知識が活きる
        </li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "クマは何頭子供を産む？",
            a: "通常 1〜3 頭。北米のヒグマは平均 2〜3 頭、ツキノワグマは平均 1〜2 頭。栄養状態の良い母グマほど多産になる傾向。",
            aText: "通常 1〜3 頭。北米のヒグマは平均 2〜3 頭、ツキノワグマは平均 1〜2 頭。栄養状態の良い母グマほど多産になる傾向。",
          },
          {
            q: "なぜクマは冬眠中に出産するの？",
            a: "巣穴の安全性、母体の代謝低下による省エネ、春先の活動シーズン直前に子グマが歩けるサイズに育つタイミング — の 3 つが噛み合った進化の結果と考えられています。",
            aText: "巣穴の安全性、母体の代謝低下による省エネ、春先の活動シーズン直前に子グマが歩けるサイズに育つタイミング — の 3 つが噛み合った進化の結果と考えられています。",
          },
          {
            q: "母グマが死んだら子グマはどうなる？",
            a: "授乳期の幼獣は単独では生存できません。野生では他のクマからの捕食リスクも高い。動物園や鳥獣保護施設で人工哺育される事例もあります。",
            aText: "授乳期の幼獣は単独では生存できません。野生では他のクマからの捕食リスクも高い。動物園や鳥獣保護施設で人工哺育される事例もあります。",
          },
          {
            q: "オスのクマは子育てに関わる？",
            a: "ほぼ関与しません。むしろ自分の子でない子グマを襲うこと (子殺し・infanticide) があるため、母グマはオスの近くを避けます。",
            aText: "ほぼ関与しません。むしろ自分の子でない子グマを襲うこと (子殺し・infanticide) があるため、母グマはオスの近くを避けます。",
          },
        ]}
      />

      <p className="mt-6">
        <strong>関連リンク:</strong>{" "}
        <Link href="/articles/bear-hibernation">クマの冬眠の科学</Link> /{" "}
        <Link href="/articles/cub-handling">子グマを見たら何をすべきか</Link> /{" "}
        <Link href="/articles/spring">春のクマ対策</Link>
      </p>
    </ArticleShell>
  );
}
