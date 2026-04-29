import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("first-aid")!;

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
        <strong>結論</strong>: クマに襲われた直後にやるべきは、<strong>止血と通報</strong>。
        出血と感染症が最大のリスクで、適切な処置で予後が大きく変わります。
        山中では救急隊到着まで 30〜90 分かかるケースが多く、その間の自己・仲間処置が生死を分けます。
      </p>

      <ArticleToc
        items={[
          { id: "priority", title: "優先順位: 安全確保 → 止血 → 通報" },
          { id: "safety", title: "1. 自分の安全を確保" },
          { id: "bleeding", title: "2. 止血" },
          { id: "report", title: "3. 通報" },
          { id: "infection", title: "感染症リスク" },
          { id: "transport", title: "病院への運搬" },
          { id: "psychological", title: "心理的ケア" },
          { id: "kit", title: "持っておくべき応急処置キット" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="priority">優先順位: 安全確保 → 止血 → 通報</h2>
      <p>
        襲われた直後、複数のことを同時にやる時間はありません。優先順位を間違えると致命的になります。
      </p>
      <ol>
        <li><strong>クマがその場を離れたか確認</strong> — まだ近くにいるなら処置中に再襲撃のリスク</li>
        <li><strong>大量出血の止血</strong> — 失血死を防ぐ最優先処置</li>
        <li><strong>119/110 通報</strong> — 救急要請とクマの再出没情報共有</li>
        <li><strong>ショック対応・保温</strong> — 救急隊到着まで状態を保つ</li>
      </ol>

      <h2 id="safety">1. 自分の安全を確保</h2>
      <p>
        クマが立ち去ったか、再襲撃の可能性がないかを確認します。
      </p>
      <ul>
        <li>クマが視界からいなくなったあと、最低 5〜10 分は周囲を警戒</li>
        <li>近くに食料・血の匂いがあると別個体が来る可能性も</li>
        <li>可能なら岩陰・木の下など視界の取れる場所へ移動</li>
        <li>仲間がいる場合は、1 人が見張り、別の 1 人が応急処置</li>
      </ul>

      <h2 id="bleeding">2. 止血</h2>
      <p>
        クマの爪と歯による創傷は深く、太い血管を傷つけることがあります。
      </p>
      <h3>直接圧迫止血</h3>
      <ul>
        <li>清潔な布・タオル・三角巾を傷口に強く押し当てる</li>
        <li>5〜10 分継続して圧迫し続ける (途中で外さない)</li>
        <li>血が滲んでも、その上に新しい布を重ねる</li>
      </ul>
      <h3>四肢の大量出血で圧迫が効かない場合</h3>
      <ul>
        <li>傷口より心臓側を、ベルト・三角巾・パラコードで強く縛る (止血帯)</li>
        <li>縛った時刻を必ずメモ (救急隊への引き継ぎ用)</li>
        <li>30 分以上は壊死リスクが上がるため、定期的に緩めるか速やかに搬送</li>
      </ul>

      <h2 id="report">3. 通報</h2>
      <ul>
        <li>
          <strong>119</strong>: 救急 (人身被害)
        </li>
        <li>
          <strong>110</strong>: 警察 (クマの位置・再出没警戒)
        </li>
        <li>
          <strong>市町村の鳥獣対策窓口</strong>: 平日昼間ならこちらが詳しく対応
        </li>
      </ul>
      <p>
        通報時に伝えるべき情報:
      </p>
      <ul>
        <li>正確な場所 (GPS 座標・ランドマーク)</li>
        <li>負傷者数・負傷部位・出血の程度</li>
        <li>クマの種 (ツキノワグマ / ヒグマ) と立ち去った方向</li>
        <li>到着可能なルート (車道までの距離)</li>
      </ul>

      <h2 id="infection">感染症リスク</h2>
      <p>
        クマの口腔内や爪には細菌・寄生虫が多く、創傷部の感染症が深刻なリスクです。
      </p>
      <ul>
        <li>
          <strong>細菌感染</strong>:
          パスツレラ・連鎖球菌等。早期の抗生剤投与が有効
        </li>
        <li>
          <strong>狂犬病</strong>:
          日本では現在ほぼゼロ。ただしヒグマは保菌の可能性ゼロではないため、医師判断でワクチン
        </li>
        <li>
          <strong>破傷風</strong>:
          土壌由来。ワクチン接種歴を医師に伝える
        </li>
      </ul>
      <p>
        小さな傷でも医師の診察を必ず受け、抗生剤・破傷風トキソイドの投与を判断してもらってください。
      </p>

      <h2 id="transport">病院への運搬</h2>
      <p>
        山中での運搬は時間がかかるため、できる限り救急隊・救助隊を待つのが安全です。
      </p>
      <ul>
        <li>意識があり歩ける → 仲間と肩を借りつつ徒歩</li>
        <li>意識ある・歩けない → 担架・背負い搬送 (バックボード代わりに登山装備を流用)</li>
        <li>意識なし → 自己搬送せず救急隊到着を待つ (頸椎損傷リスク)</li>
        <li>ヘリ要請が必要な状況 (大量出血・意識消失) は通報時に明示</li>
      </ul>

      <h2 id="psychological">心理的ケア</h2>
      <p>
        クマ襲撃は心理的にも深刻なダメージを残します。
      </p>
      <ul>
        <li>本人だけでなく目撃した仲間も PTSD を発症することがある</li>
        <li>事故後数週間〜数ヶ月、フラッシュバック・睡眠障害・不安が出る場合は専門医へ</li>
        <li>「自分の判断ミス」と過剰に自責する被害者が多い。仲間からの心理的支えが重要</li>
      </ul>

      <h2 id="kit">持っておくべき応急処置キット</h2>
      <ul>
        <li>三角巾 2〜3 枚 (大きい創傷の圧迫止血用)</li>
        <li>ガーゼ・滅菌パッド (各種サイズ)</li>
        <li>包帯・テーピング</li>
        <li>止血帯 (CAT 等の専用品 or パラコード)</li>
        <li>はさみ・ピンセット</li>
        <li>消毒液 (ポビドンヨード等)</li>
        <li>非アルコール性ウェットティッシュ</li>
        <li>救急ホイッスル・反射ブランケット</li>
        <li>ニトリル手袋 2〜4 組 (感染防護)</li>
        <li>痛み止め (ロキソニン等)</li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "クマに引っかかれただけだが病院に行くべき?",
            a: (
              <>
                必ず行ってください。表面の傷でも口腔・爪の細菌で感染症を起こすことがあります。抗生剤・破傷風トキソイドの判断は医師に任せるのが安全です。
              </>
            ),
            aText:
              "必ず行ってください。表面の傷でも口腔・爪の細菌で感染症を起こすことがあります。抗生剤・破傷風トキソイドの判断は医師に任せるのが安全です。",
          },
          {
            q: "山中で 119 通報は繋がる?",
            a: (
              <>
                電波があれば繋がります。電波が弱いエリアでは、開けた場所・尾根・峠まで移動して再試行を。3G/4G が圏外でも 緊急 SOS 機能 (iPhone 14+ の衛星通信や AndroidPaR) で繋がる場合があります。事前にスマホの緊急機能を有効化しておくと良いでしょう。
              </>
            ),
            aText:
              "電波があれば繋がります。電波が弱いエリアでは、開けた場所・尾根・峠まで移動して再試行を。緊急 SOS 機能 (iPhone 14+ の衛星通信等) で繋がる場合があります。",
          },
          {
            q: "クマの口の細菌が原因で本当に死亡する?",
            a: (
              <>
                抗生剤の投与が遅れると、敗血症で死亡するケースがあります。海外ではクマ襲撃で「感染症が原因の二次的死亡」が報告されています。創傷の大小に関わらず受診してください。
              </>
            ),
            aText:
              "抗生剤の投与が遅れると、敗血症で死亡するケースがあります。海外ではクマ襲撃で感染症が原因の二次的死亡が報告されています。創傷の大小に関わらず受診してください。",
          },
          {
            q: "止血帯はどう使う?",
            a: (
              <>
                太い動脈からの大量出血で直接圧迫止血が効かない場合のみ使います。傷口より心臓側 5cm に、しっかり締めて完全に出血を止める。締めた時刻を皮膚にメモし、医療機関に必ず伝えてください。誤った使用は四肢壊死につながるので、できれば直接圧迫を優先します。
              </>
            ),
            aText:
              "太い動脈からの大量出血で直接圧迫止血が効かない場合のみ使います。傷口より心臓側 5cm に、しっかり締めて完全に出血を止める。締めた時刻を皮膚にメモし、医療機関に必ず伝えてください。",
          },
        ]}
      />
    </ArticleShell>
  );
}
