import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("camping")!;

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
        <strong>結論</strong>: キャンプ場でのクマ遭遇は、<strong>食料の匂い管理</strong>と<strong>夜間の警戒</strong>でほぼ防げます。
        テント内に食料を持ち込まない、BBQ の油を持ち帰る、就寝時はヘッドライトを枕元に。
        基本ルールを守るだけで、夢のような夜のキャンプが事故にならずに済みます。
      </p>

      <ArticleToc
        items={[
          { id: "site", title: "キャンプ場選び" },
          { id: "tent", title: "テント設営の場所" },
          { id: "food", title: "食料の保管方法" },
          { id: "bbq", title: "BBQ・焚き火の注意" },
          { id: "night", title: "夜間の対応" },
          { id: "wake", title: "目撃時の対処" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="site">キャンプ場選び</h2>
      <p>
        キャンプ予約の段階で、出発地のクマ出没情報を確認しておくと安心です。
      </p>
      <ul>
        <li>KumaWatch の <Link href="/">トップマップ</Link> や 該当エリアの市町村ページで過去 90 日の目撃を確認</li>
        <li>キャンプ場公式サイトの「クマ対策」ページや注意喚起をチェック</li>
        <li>過去にクマ出没があった場合の電気柵・クマ対策設備の有無</li>
        <li>夜間照明・センサーライトの整備状況</li>
        <li>近隣の自治体公式情報も併せて確認</li>
      </ul>

      <h2 id="tent">テント設営の場所</h2>
      <p>
        テントを張る位置選びで、クマ遭遇リスクは大きく変わります。
      </p>
      <ul>
        <li><strong>整地された区画内</strong>: 場外・林の縁は避ける</li>
        <li><strong>炊事場から少し離す</strong>: 食料の匂いがテントに残るリスクを下げる</li>
        <li><strong>水場・沢から離す</strong>: クマが涼みに来る場所</li>
        <li><strong>果樹のある場所は避ける</strong>: 落果がクマを誘引</li>
        <li><strong>夜間に明るい場所</strong>: トイレ・管理棟近くだと警戒できる</li>
      </ul>

      <h2 id="food">食料の保管方法</h2>
      <p>
        キャンプでのクマ対策で、最も重要なのが食料の保管です。
      </p>
      <ul>
        <li>
          <strong>テント内に食料を絶対持ち込まない</strong>:
          チョコ・お菓子・ドリンクの空き缶も NG。匂いで誘引される
        </li>
        <li>
          <strong>車のトランクに保管</strong>:
          オートキャンプならこれが最も簡単で確実
        </li>
        <li>
          <strong>ベアキャニスター (耐久食料容器)</strong>:
          米国で標準。日本でも入手可能
        </li>
        <li>
          <strong>ベアハング</strong>:
          地面から 4m 以上、幹から 1.5m 以上離した枝に食料を吊るす (バックパックキャンプ向け)
        </li>
        <li>
          <strong>食料・調味料・歯磨き粉・日焼け止め まで匂うもの全て</strong>:
          これらをまとめて保管
        </li>
      </ul>

      <h2 id="bbq">BBQ・焚き火の注意</h2>
      <p>
        BBQ や焚き火後の処理は、クマを「次の日もここに来よう」と思わせる引き金になります。
      </p>
      <ul>
        <li>食材の屑・脂・骨は完全にゴミ袋に密閉</li>
        <li>焼き網・鉄板は使用後すぐに洗う (匂い残しを防ぐ)</li>
        <li>洗った水は炊事場の専用排水へ。土に流さない</li>
        <li>焚き火の灰は完全に水で消す + 持ち帰り or 灰捨て場へ</li>
        <li>ゴミ袋は車内 or 専用ゴミステーション (野外に置かない)</li>
      </ul>

      <h2 id="night">夜間の対応</h2>
      <p>
        夜間 (特に夜中〜明け方) はクマの活動が活発な時間帯です。
      </p>
      <ul>
        <li>就寝時はヘッドライトを枕元に置く (即取り出せる)</li>
        <li>クマよけスプレーをテント入り口の足元に (詳細は <Link href="/articles/bear-spray">クマよけスプレー</Link>)</li>
        <li>夜間にトイレに行く場合は複数人で・ライト点灯</li>
        <li>テントの周りに食料・残飯がないことを就寝前に再確認</li>
        <li>子供は中央に寝かせ、大人がテント入り口側</li>
      </ul>

      <h2 id="wake">目撃時の対処</h2>
      <p>
        テント内でクマの気配を感じた・周囲で目撃された場合:
      </p>
      <ul>
        <li>
          <strong>テント内で気配を感じた</strong>: 静かにしてやり過ごす。ライトを点灯し、声を出して人がいることを示す。テントから飛び出さない
        </li>
        <li>
          <strong>テント外でクマを見た</strong>: 即テント内に戻り、テント越しに大きな声・物音を出す。ヘッドライトでテント全体を照らす
        </li>
        <li>
          <strong>テントが破られそう</strong>: クマよけスプレーをテント越しに噴射する判断 (室内噴射は最終手段)
        </li>
        <li>
          <strong>キャンプ場の管理棟・ホテルへ即連絡</strong>: 110 番、自治体の鳥獣窓口にも
        </li>
      </ul>
      <p>
        遭遇後の距離別対処は <Link href="/articles/encounter">クマに遭遇したら</Link> も参照してください。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "テント内で寝るときにクマよけスプレーは必要?",
            a: (
              <>
                持っておくと安心です。ただしテント内噴射は密閉空間で自分も無事ではいられないので、最終手段。基本は食料管理でテントへの接近を防ぐのが最重要。
              </>
            ),
            aText:
              "持っておくと安心です。ただしテント内噴射は密閉空間で自分も無事ではいられないので、最終手段。基本は食料管理でテントへの接近を防ぐのが最重要。",
          },
          {
            q: "車中泊なら食料を車内に置いて大丈夫?",
            a: (
              <>
                車内なら基本 OK ですが、窓を開けて寝る場合は注意。匂いが漏れるとクマが車に来る可能性があり、車のドアを開けるほどの力を持つ個体もいます (北米では報告あり)。窓は閉めるか、ガラスを通る匂いを最小化する密閉容器に入れてください。
              </>
            ),
            aText:
              "車内なら基本 OK ですが、窓を開けて寝る場合は注意。匂いが漏れるとクマが車に来る可能性があり、車のドアを開けるほどの力を持つ個体もいます。窓は閉めるか、密閉容器に入れてください。",
          },
          {
            q: "ペットと一緒のキャンプは大丈夫?",
            a: (
              <>
                ペットフードは食料同様、匂い管理が必要です。屋外の餌皿に放置しない。ペットの吠え声がクマを刺激することもあるので、夜間はテント内で静かに過ごさせてください。
              </>
            ),
            aText:
              "ペットフードは食料同様、匂い管理が必要です。屋外の餌皿に放置しない。ペットの吠え声がクマを刺激することもあるので、夜間はテント内で静かに過ごさせてください。",
          },
          {
            q: "オートキャンプ場と無料キャンプ場、リスクは違う?",
            a: (
              <>
                整備された有料キャンプ場の方がクマ対策設備 (電気柵・ゴミ管理・夜間巡回) が整っていることが多く、無料キャンプ場・河原での野営は対策が利用者個人任せになります。経験が浅い場合は有料キャンプ場の利用を推奨します。
              </>
            ),
            aText:
              "整備された有料キャンプ場の方がクマ対策設備が整っていることが多く、無料キャンプ場・河原での野営は対策が利用者個人任せになります。経験が浅い場合は有料キャンプ場の利用を推奨します。",
          },
        ]}
      />
    </ArticleShell>
  );
}
