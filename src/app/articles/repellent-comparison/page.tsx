import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("repellent-comparison")!;

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
        <strong>結論</strong>: クマよけグッズは <strong>4 つの軸</strong>で評価するのが現実的です。
        ①ケース別の有効性、②学術的エビデンスの強さ、③コスト対効果、④誤用リスク。
        本記事はスプレー・鈴・ホーン・ラジオ・ライト・電気柵・忌避剤を横断比較し、
        「何にいくら投資するか」の判断材料を提供します。
      </p>

      <ArticleToc
        items={[
          { id: "framework", title: "比較フレームワーク" },
          { id: "table", title: "総合比較表" },
          { id: "spray", title: "クマスプレー" },
          { id: "bell", title: "クマ鈴・ホーン" },
          { id: "radio", title: "ラジオ・人声" },
          { id: "light", title: "センサーライト" },
          { id: "fence", title: "電気柵" },
          { id: "chemical", title: "忌避剤・忌避テープ" },
          { id: "scenario", title: "シナリオ別おすすめ構成" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="framework">比較フレームワーク</h2>
      <p>
        市販のクマよけ製品は、効果の有無を単独で論じても意味がありません。
        「どんな場面で誰が何を防ぎたいか」によって最適解は変わります。
        本記事では以下の 4 軸で評価します。
      </p>
      <ul>
        <li>
          <strong>ケース別の有効性</strong>: 遭遇直前 / 接近防止 / 家屋防御 / 農地防御 など、適用場面の絞り込み
        </li>
        <li>
          <strong>エビデンスの強さ</strong>: 査読論文・行政検証データの有無
        </li>
        <li>
          <strong>コスト対効果</strong>: 初期投資と年間ランニング
        </li>
        <li>
          <strong>誤用リスク</strong>: 間違った使い方をした場合の危険度
        </li>
      </ul>

      <h2 id="table">総合比較表</h2>
      <div className="not-prose my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white">
        <table className="w-full text-sm">
          <thead className="border-b border-stone-200 bg-stone-50 text-xs text-stone-600">
            <tr>
              <th className="px-3 py-2 text-left">製品</th>
              <th className="px-3 py-2 text-left">主用途</th>
              <th className="px-3 py-2 text-left">有効性</th>
              <th className="px-3 py-2 text-left">エビデンス</th>
              <th className="px-3 py-2 text-left">初期費用</th>
              <th className="px-3 py-2 text-left">誤用リスク</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-3 py-2 font-semibold">クマスプレー</td>
              <td className="px-3 py-2">遭遇直前の撃退</td>
              <td className="px-3 py-2 text-green-700 font-bold">◎</td>
              <td className="px-3 py-2 text-green-700">強（北米実証）</td>
              <td className="px-3 py-2 tabular-nums">8,000〜12,000 円</td>
              <td className="px-3 py-2 text-amber-700">中（風向き・誤射）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">クマ鈴</td>
              <td className="px-3 py-2">接近防止（登山）</td>
              <td className="px-3 py-2 text-amber-700">△</td>
              <td className="px-3 py-2 text-amber-700">弱〜中</td>
              <td className="px-3 py-2 tabular-nums">500〜3,000 円</td>
              <td className="px-3 py-2 text-green-700">低</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">エアホーン</td>
              <td className="px-3 py-2">遭遇直前の威嚇</td>
              <td className="px-3 py-2 text-amber-700">△</td>
              <td className="px-3 py-2 text-amber-700">中</td>
              <td className="px-3 py-2 tabular-nums">2,000〜4,000 円</td>
              <td className="px-3 py-2 text-green-700">低</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">携帯ラジオ</td>
              <td className="px-3 py-2">接近防止（作業中）</td>
              <td className="px-3 py-2 text-amber-700">△</td>
              <td className="px-3 py-2 text-amber-700">弱</td>
              <td className="px-3 py-2 tabular-nums">3,000〜8,000 円</td>
              <td className="px-3 py-2 text-green-700">低（騒音問題のみ）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">センサーライト</td>
              <td className="px-3 py-2">家屋接近防止</td>
              <td className="px-3 py-2 text-amber-700">△〜○</td>
              <td className="px-3 py-2 text-amber-700">弱〜中</td>
              <td className="px-3 py-2 tabular-nums">3,000〜15,000 円</td>
              <td className="px-3 py-2 text-green-700">低</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">電気柵</td>
              <td className="px-3 py-2">農地・養蜂・家屋</td>
              <td className="px-3 py-2 text-green-700 font-bold">◎</td>
              <td className="px-3 py-2 text-green-700">強（自治体検証）</td>
              <td className="px-3 py-2 tabular-nums">30,000〜200,000 円</td>
              <td className="px-3 py-2 text-amber-700">中（電圧不足）</td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-semibold">忌避剤・テープ</td>
              <td className="px-3 py-2">家屋周辺・畑</td>
              <td className="px-3 py-2 text-red-700">×〜△</td>
              <td className="px-3 py-2 text-red-700">弱（再現性低い）</td>
              <td className="px-3 py-2 tabular-nums">1,000〜10,000 円</td>
              <td className="px-3 py-2 text-green-700">低</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="spray">クマスプレー — 最強の遭遇直前装備</h2>
      <p>
        北米でのデータでは、クマスプレーの撃退成功率は <strong>90%以上</strong>（Smith et al. 2008）。
        実銃を使った場合より人身被害が低いという統計もあり、登山・トレッキング時の必須装備とされています。
      </p>
      <ul>
        <li><strong>射程</strong>: 5〜8m</li>
        <li><strong>使用時間</strong>: 一気に 6〜9 秒で噴射し切る</li>
        <li><strong>容量</strong>: 225g〜450g（容量が大きいほど信頼性が高い）</li>
        <li><strong>携帯場所</strong>: ホルスター必須。リュック内では間に合わない</li>
      </ul>
      <p>
        詳細は{" "}
        <Link href="/articles/bear-spray">クマスプレー完全ガイド</Link>
        を参照。航空機での持ち込み制限は{" "}
        <Link href="/articles/spray-travel">クマスプレーの持ち運び</Link>
        にまとめています。
      </p>

      <h2 id="bell">クマ鈴・ホーン — 接近防止の心理的安全</h2>
      <p>
        クマ鈴の効果については科学的議論があります。
        <strong>「遭遇を防ぐ」効果は限定的</strong>とする研究もあれば、
        <strong>「人慣れしていない山中のクマには有効」</strong>とする研究もあります。
        いずれにせよ「装備しないより装備する方が安全」ですが、過信は禁物です。
      </p>
      <ul>
        <li>
          有効: 風がない・人気の少ない山中・クマが人を警戒している地域
        </li>
        <li>
          無効: 滝・川沿い・強風・人慣れクマ・市街地のクマ
        </li>
        <li>
          推奨: 鈴 + 大声・拍手・複数人での移動の併用
        </li>
      </ul>
      <p>
        詳細は{" "}
        <Link href="/articles/bear-bell">クマ鈴の効果と使い方</Link>
        を参照。
      </p>

      <h2 id="radio">ラジオ・人声 — 山仕事・農作業向け</h2>
      <p>
        農作業・林業作業中はラジオを大音量で流す慣習があります。
        クマに「人がいる」と知らせる効果は鈴より強い場合がありますが、
        近隣との騒音トラブルや、自然環境保全の観点で議論があります。
      </p>
      <ul>
        <li>有効性: 鈴より明確に「人の存在」を伝えられる</li>
        <li>適用場面: 農作業・林業・キャンプ・果樹園作業</li>
        <li>注意: 国立公園・登山道では他の利用者・野生動物への配慮を</li>
      </ul>

      <h2 id="light">センサーライト — 家屋接近防止</h2>
      <p>
        家屋・倉庫・畜舎の周辺に設置するセンサーライトは、
        クマの夜間侵入を抑制する効果があります。
        ただし「最初は効果があっても、慣れると無視される」という指摘もあり、過信は禁物です。
      </p>
      <ul>
        <li>推奨: 高輝度（1,000lm 以上）の LED、複数台で多方向カバー</li>
        <li>注意: 単独使用では効果が逓減。電気柵・誘引物管理と組み合わせ</li>
      </ul>

      <h2 id="fence">電気柵 — 農地・養蜂・家屋の決定打</h2>
      <p>
        電気柵は <strong>農業・養蜂・家屋防御の最有力手段</strong>です。
        自治体の被害対策補助金の対象になる場合が多く、初期投資が大きい代わりに効果は確実です。
      </p>
      <ul>
        <li>クマ向けの推奨電圧: <strong>5,000〜8,000V</strong></li>
        <li>段数: 4〜5 段（最下段 20cm、上段は 1.2〜1.5m）</li>
        <li>給電: ソーラー or バッテリー or AC</li>
        <li>注意: 「電圧不足の電気柵」は学習されてむしろ逆効果。導入したら週次でテスター測定</li>
      </ul>
      <p>
        詳細は{" "}
        <Link href="/articles/electric-fence">電気柵の設計と運用</Link>
        を参照。果樹園・養蜂・水田での品目別仕様は{" "}
        <Link href="/articles/bear-agriculture">クマと農業</Link>
        にまとめています。
      </p>

      <h2 id="chemical">忌避剤・忌避テープ — エビデンスは弱い</h2>
      <p>
        ホームセンターやネットで売られる忌避剤・忌避テープの多くは、
        <strong>再現性のある効果が確認されていません</strong>。
        コストは安いものの、これだけに頼るのは危険です。
      </p>
      <ul>
        <li>木酢液・唐辛子スプレー: 一時的な効果はあっても雨で流れる</li>
        <li>狼の尿・天敵の匂い: 学習済みクマには効かない</li>
        <li>忌避テープ: 慣れると無視される</li>
      </ul>
      <p>
        これらは「補助的な使用」に留め、メイン対策は電気柵 + 誘引物管理に投資すべきです。
      </p>

      <h2 id="scenario">シナリオ別おすすめ構成</h2>
      <h3>登山・トレッキング</h3>
      <ul>
        <li>必須: クマスプレー（450g・ホルスター付き）</li>
        <li>推奨: クマ鈴 + ホイッスル + ヘッドランプ</li>
        <li>合計目安: 約 15,000 円</li>
      </ul>

      <h3>農業従事者（果樹園・畑）</h3>
      <ul>
        <li>必須: 電気柵（5,000V 以上、4 段以上）</li>
        <li>推奨: 誘引物管理（落果・残渣処理）+ クマスプレー</li>
        <li>合計目安: 30 万円〜（補助金活用で実質負担減）</li>
      </ul>

      <h3>家屋防御（山間部の住宅）</h3>
      <ul>
        <li>必須: 誘引物管理（ゴミ密閉・生ゴミ堆肥不可）+ 柿・栗の早期収穫</li>
        <li>推奨: センサーライト + 電気柵（最大の畑のみ）</li>
        <li>緊急時: クマスプレー（自宅にも 1 本）</li>
        <li>合計目安: 約 5〜20 万円</li>
      </ul>

      <h3>キャンプ・釣り</h3>
      <ul>
        <li>必須: クマスプレー + ベアキャニスター（食料容器）</li>
        <li>推奨: クマ鈴 + ホイッスル + 複数人での行動</li>
        <li>合計目安: 約 2〜3 万円</li>
      </ul>

      <ArticleFaq
        items={[
          {
            q: "1 つだけ買うなら何を選べばいいですか?",
            a: "登山・トレッキングならクマスプレー一択。農業ならまず電気柵。家屋防御なら誘引物管理（ゴミ・果樹）が最優先で、これは費用ゼロでも始められます。",
            aText:
              "登山＝クマスプレー一択。農業＝電気柵。家屋＝誘引物管理（費用ゼロでも始められる）。",
          },
          {
            q: "100 円ショップのクマよけグッズは効きますか?",
            a: "クマ鈴・ホイッスル程度なら最低限の役割は果たします。ただしクマスプレー・電気柵・電池式センサーライトなど「効果が用量・電圧に依存する装備」は安物では危険です。命に関わる装備は専門メーカー品を選んでください。",
            aText:
              "鈴・ホイッスルは可。スプレー・電気柵・センサーライトは安物では危険。命に関わる装備は専門メーカー品を。",
          },
          {
            q: "電気柵を導入すると本当に被害が減りますか?",
            a: "適切な電圧・段数・通電状態を維持すれば、ほぼ確実に減ります。自治体の検証では電気柵設置後の被害が 80〜95% 減少した事例多数。ただし「電圧不足」「破損放置」では学習されて逆効果になる場合もあるため、週次のテスター確認が必須です。",
            aText:
              "適切に維持すれば 80〜95% 減少の事例多数。ただし電圧不足・破損放置は逆効果。週次でテスター確認必須。",
          },
          {
            q: "スプレーと猟銃、どちらが安全ですか?",
            a: "北米の統計では、クマスプレーを使った人の方が実銃を使った人より人身被害が少ないという結果が出ています（Smith et al. 2008）。日本では一般人が銃を携帯することは不可能なので、登山・トレッキングではクマスプレーが事実上の最有力装備です。",
            aText:
              "北米統計ではスプレーの方が銃より人身被害少。Smith et al. 2008。日本では一般人は銃携帯不可で、スプレーが事実上の最有力装備。",
          },
          {
            q: "電気柵の補助金はどこに相談すればいいですか?",
            a: (
              <>
                市町村役場の <strong>農林課・産業振興課</strong>に相談。多くの自治体で電気柵・防護柵設置補助金（半額〜全額補助）があります。詳細は{" "}
                <Link href="/articles/bear-agriculture">クマと農業</Link>
                の補助金セクションを参照してください。
              </>
            ),
            aText:
              "市町村役場の農林課・産業振興課に相談。多くの自治体で電気柵設置補助金（半額〜全額）あり。",
          },
        ]}
      />
    </ArticleShell>
  );
}
