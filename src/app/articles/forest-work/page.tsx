import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("forest-work")!;

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
        <strong>結論</strong>: 林業・農業・狩猟など業務でクマと隣り合う人は、
        遭遇頻度がレジャー登山者の数十倍。チェーンソー音・伐採地・果樹園作業など
        シーン別のリスクと、現場で使えるスプレー・無線連絡・複数人作業ルールで
        労災・人身事故を防ぐ枠組みを整理します。
      </p>

      <ArticleToc
        items={[
          { id: "scenes", title: "業務シーン別のリスク" },
          { id: "forestry", title: "林業 — チェーンソー音と伐採跡地" },
          { id: "farming", title: "農作業 — 果樹園・畑・養蜂" },
          { id: "hunting", title: "狩猟 — クマと最も近づく職業" },
          { id: "gear", title: "現場装備の核" },
          { id: "safety", title: "安全管理ルール" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="scenes">業務シーン別のリスク</h2>
      <p>業務でクマと接する場面は、レジャーとは性質が違います。</p>
      <ul>
        <li>
          <strong>頻度が高い</strong>:
          毎日同じ山域に入るため、累積遭遇確率が大きい。
        </li>
        <li>
          <strong>機械音で警戒が消える</strong>:
          チェーンソー・トラクター・草刈機の音で、人間がクマを察知する力も大きく落ちる。
        </li>
        <li>
          <strong>作業に集中するため周囲確認が落ちる</strong>:
          山菜採りと同じ「夢中の罠」が業務中も起きる。
        </li>
        <li>
          <strong>1 人作業が多い</strong>:
          特に林業・狩猟は単独作業の場面が多い。
        </li>
      </ul>

      <h2 id="forestry">林業 — チェーンソー音と伐採跡地</h2>
      <ul>
        <li>
          <strong>チェーンソー音は「人間サイン」になりにくい</strong>:
          機械音はクマにとって人間より「不快な音源」程度の認識。
          作業中断の瞬間に至近にクマがいることに気づくケースが多い。
        </li>
        <li>
          <strong>伐採跡地は若芽の宝庫</strong>:
          皆伐後 1〜3 年の伐採跡地は若い植生が密集してクマの好適地に。
          再造林作業中の遭遇事故が多い。
        </li>
        <li>
          <strong>休憩中の食料管理</strong>:
          昼食・おにぎり・お茶は密閉袋で、車内保管が原則。
          地面に置いて食事中に近づかれた事例あり。
        </li>
        <li>
          <strong>作業班の連携</strong>:
          班長へのクマ目撃情報の共有を必須に。1 件目の目撃で全班員に無線連絡。
        </li>
      </ul>

      <h2 id="farming">農作業 — 果樹園・畑・養蜂</h2>
      <ul>
        <li>
          <strong>果樹園</strong>:
          リンゴ・梨・サクランボ・柿などはクマの好物。落果の即日片付け + 電気柵が基本
          (<Link href="/articles/electric-fence">電気柵の張り方</Link>)。
        </li>
        <li>
          <strong>トウモロコシ畑</strong>:
          熟期にクマが集中。背が高くて視界が効かないため、単独入畑は避ける。
        </li>
        <li>
          <strong>養蜂</strong>:
          蜂蜜・蜂児はクマの最大級の誘引源。
          巣箱の電気柵 + 高所設置 + GPS タグ付けが現実的。
        </li>
        <li>
          <strong>家畜飼料・コンポスト</strong>:
          牛・鶏の飼料、コンポストの匂いも誘引。蓋付き保管・距離確保で対応。
        </li>
      </ul>

      <h2 id="hunting">狩猟 — クマと最も近づく職業</h2>
      <ul>
        <li>
          <strong>有害駆除従事者の人身事故</strong>:
          手負いのクマが反撃するケースが代表的な事故パターン。
          <Link href="/articles/historic-incidents">過去の重大事故</Link>でも繰り返されている。
        </li>
        <li>
          <strong>無線通信の徹底</strong>:
          班員位置・発砲予告・捕獲確認を必ず無線で。スマホ電波だけに頼らない。
        </li>
        <li>
          <strong>複数人での追跡 (止め刺し)</strong>:
          手負い個体への接近は単独で絶対に行わない。
        </li>
        <li>
          <strong>法的枠組み</strong>:
          詳細は<Link href="/articles/bear-laws">クマと法律</Link>。
        </li>
      </ul>

      <h2 id="gear">現場装備の核</h2>
      <ul>
        <li>
          <strong>クマよけスプレー (常時携行)</strong>:
          作業着の腰ポケットかチェストハーネス。
          作業中も抜ける位置に。
        </li>
        <li>
          <strong>ホイッスル + 業務無線</strong>:
          無線で班員と即時連絡。
        </li>
        <li>
          <strong>明るい色の作業着</strong>:
          ハンターからの誤射防止 + 視認性。
        </li>
        <li>
          <strong>ヘルメット + 反射バンド</strong>:
          薄暗い時間帯の安全。
          <Link href="/articles/night-gear">夜間装備</Link>。
        </li>
        <li>
          <strong>スマートウォッチ通知</strong>:
          自治体の防災メールを腕時計で受信。
        </li>
      </ul>

      <h2 id="safety">安全管理ルール</h2>
      <p>業務単位で適用するルール例:</p>
      <ol>
        <li>
          <strong>朝礼で当日の出没情報を共有</strong>:
          市町村の防災メール・前日の他班報告を全員に。
        </li>
        <li>
          <strong>1 人作業の禁止</strong>:
          少なくとも見える距離・無線通信距離内に他班員を配置。
        </li>
        <li>
          <strong>クマ目撃の即時報告</strong>:
          軽微でも班長・事務所へ。記録を残す。
        </li>
        <li>
          <strong>作業中断と退避基準</strong>:
          至近距離 (50m 以内) で目撃したら作業中断・全員退避。
        </li>
        <li>
          <strong>危険個体の駆除依頼</strong>:
          市町村経由で猟友会に連絡。事務所と現場で連携。
        </li>
        <li>
          <strong>事故時の応急処置と通報訓練</strong>:
          年 1 回は<Link href="/articles/first-aid">応急処置</Link>のシミュレーションを。
        </li>
      </ol>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "個人でクマよけスプレーを職場に持ち込んでいい?",
            a: (
              <>
                銃刀法対象外なので持ち込めますが、職場規則で防具・武器類の持ち込みを規制している場合は事前承認を。
                スプレーは正当な業務目的があり、人に向けない限り問題なし。労災保険上のリスク低減装備として
                経費計上できる事業所もあります。
              </>
            ),
            aText:
              "持ち込めますが職場規則で武器類規制があれば事前承認を。スプレーは銃刀法対象外で正当な業務目的があれば問題なし。労災対策として経費計上できる事業所もあります。",
          },
          {
            q: "業務中の遭遇は労災になる?",
            a: (
              <>
                業務遂行中・通勤中の襲撃は基本的に労災対象です。林業・農業の現場では発生確率が決して低くないので、
                就業前に労災手続き・事業所の対応フローを確認しておいてください。
              </>
            ),
            aText:
              "業務遂行中の襲撃は基本的に労災対象です。就業前に労災手続きと事業所の対応フローを確認しておいてください。",
          },
          {
            q: "果樹園の落果はどこまで早く片付ければ?",
            a: (
              <>
                出没情報のあったエリアでは「同日中」が原則。クマは夕方〜夜間に来るので、夕方の作業終わりまでに
                落果を撤去できれば翌朝までに学習されにくい。果樹の根元には電気柵設置が望ましい
                (<Link href="/articles/electric-fence">電気柵の張り方</Link>)。
              </>
            ),
            aText:
              "出没情報のあったエリアでは同日中が原則。夕方の作業終わりまでに落果撤去すれば翌朝までに学習されにくい。果樹の根元には電気柵設置が望ましいです。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "業務でのクマ遭遇は累積頻度が高く、機械音と作業集中で警戒が薄れる構造。",
          "林業はチェーンソー音と伐採跡地、農業は落果と養蜂、狩猟は手負い個体が事故主因。",
          "装備の核はスプレー腰携行 + 業務無線 + 蛍光色作業着。",
          "1 人作業を避け、目撃情報の即時共有を朝礼ルールに組み込む。",
          "労災手続き・応急処置訓練を就業前に確認しておく。",
        ]}
        footer="業務でクマと隣り合う人は装備と運用ルールで事故を予防できます。事業所単位での仕組みづくりが鍵です。"
      />
    </ArticleShell>
  );
}
