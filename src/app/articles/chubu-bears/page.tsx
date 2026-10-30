import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("chubu-bears")!;

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
        <strong>結論</strong>: 北アルプス・南アルプス・八ヶ岳など中部山岳一帯はツキノワグマの主要生息域。
        登山シーズンの遭遇は決して珍しくなく、<strong>長野・岐阜・富山・新潟</strong>では
        毎年のように人身事故が報告されています。山小屋や登山道のクマ情報を入山前に確認しましょう。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            <strong>北ア・南ア・八ヶ岳など中部山岳一帯</strong>はツキノワグマの主要生息域。
          </>,
          <>
            <strong>長野・岐阜・富山・新潟</strong>で毎年のように人身事故が報告される。
          </>,
          <>
            入山前に<strong>山小屋・登山道のクマ情報を確認</strong>する。
          </>,
        ]}
      />

      <ArticleToc
        items={[
          { id: "overview", title: "中部山岳の概況" },
          { id: "nagano", title: "長野県 — 北アルプス・八ヶ岳・南アルプス" },
          { id: "gifu", title: "岐阜県 — 飛騨・乗鞍・白山連峰" },
          { id: "toyama", title: "富山県 — 立山・剱・薬師" },
          { id: "niigata", title: "新潟県 — 妙高・越後三山・佐渡" },
          { id: "trail-tips", title: "登山道・山小屋でのリスク" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="overview">中部山岳の概況</h2>
      <p>
        中部山岳の主要な山域 (北・南アルプス、八ヶ岳、白山連峰、頸城山塊) はいずれもツキノワグマの良好な生息地です。
        クマは亜高山帯の森まで行動範囲としており、登山道沿いでもたびたび目撃されます。
      </p>
      <ul>
        <li>観光客・登山者が多く訪れるエリア</li>
        <li>標高に伴って生息密度は変わるが、樹林帯ではどこでも遭遇の可能性がある</li>
        <li>森林限界より上ではクマは少ないが、夏場に高山帯まで上がってくる個体も</li>
      </ul>

      <h2 id="nagano">長野県 — 北アルプス・八ヶ岳・南アルプス</h2>
      <ul>
        <li>
          <strong>北アルプス</strong>:
          上高地・涸沢・白馬周辺で目撃多数。涸沢ヒュッテ・上高地ビジターセンターのクマ情報は入山前に確認。
        </li>
        <li>
          <strong>八ヶ岳</strong>:
          赤岳鉱泉・行者小屋・観音平など、樹林帯の登山道で遭遇情報。
        </li>
        <li>
          <strong>南アルプス</strong>:
          仙丈・甲斐駒・北岳の樹林帯。山小屋ベースの長期縦走で警戒。
        </li>
        <li>
          <strong>軽井沢・諏訪地域</strong>:
          観光地でも住宅街への出没が増えている。
        </li>
      </ul>

      <h2 id="gifu">岐阜県 — 飛騨・乗鞍・白山連峰</h2>
      <ul>
        <li>
          <strong>飛騨山地</strong>:
          高山市・飛騨市の山林ではクマ密度が高い。
        </li>
        <li>
          <strong>乗鞍</strong>:
          観光バス利用者も歩く乗鞍観光地で目撃情報。子グマ連れの母グマに注意。
        </li>
        <li>
          <strong>白山連峰</strong>:
          石川県境の白山連峰はツキノワグマの安定した生息域。長距離縦走は装備と複数人。
        </li>
      </ul>

      <h2 id="toyama">富山県 — 立山・剱・薬師</h2>
      <ul>
        <li>
          <strong>立山連峰</strong>:
          室堂周辺の樹林帯で目撃。アルペンルート観光客への警告も。
        </li>
        <li>
          <strong>剱・薬師</strong>:
          縦走路の樹林帯部分。テント場では食料を出しっぱなしにせず、匂いが漏れないよう管理する。
          <Link href="/articles/bear-canister">フードコンテナ・フードハング</Link>。
        </li>
        <li>
          <strong>富山平野</strong>:
          富山市など平野部の市街地近くでも出没がある。
        </li>
      </ul>

      <h2 id="niigata">新潟県 — 妙高・越後三山・佐渡</h2>
      <ul>
        <li>
          <strong>妙高・火打</strong>:
          北信越国境の樹林帯。ハイカー・スキーヤーへの警告。
        </li>
        <li>
          <strong>越後三山</strong>:
          八海山・中ノ岳・越後駒ヶ岳の樹林帯。豪雪明けの母グマに注意。
        </li>
        <li>
          <strong>佐渡</strong>:
          佐渡島はツキノワグマの生息地ではないとされる。
        </li>
        <li>
          <strong>新潟県下越・中越</strong>:
          長岡・新発田・村上などの山間部で里山出没が継続。
        </li>
      </ul>

      <h2 id="trail-tips">登山道・山小屋でのリスク</h2>
      <ul>
        <li>
          <strong>樹林帯での遭遇</strong>:
          森林限界以下の登山道は遭遇可能性が高い。鈴 + 声で常時アピール。
        </li>
        <li>
          <strong>テン場・幕営地</strong>:
          食料管理を徹底 (<Link href="/articles/bear-canister">フードコンテナ・フードハング</Link>)。
        </li>
        <li>
          <strong>山小屋周辺</strong>:
          夜や早朝に小屋の外へ出るときは、周囲に注意しヘッドライトを持つ。
        </li>
        <li>
          <strong>下山路の暗い時間帯</strong>:
          薄暮の樹林帯下山は遭遇率が上がる
          (<Link href="/articles/night-encounter">夜・薄暮にクマと出会ったら</Link>)。
        </li>
      </ul>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "上高地・室堂の観光客レベルでもクマ対策が必要?",
            a: (
              <>
                観光地でもクマとの遭遇例があります。
                バスターミナル周辺の遊歩道で複数人で行動し、鈴の携行・大声で談笑するだけでも有効。
                早朝・夕方の単独散歩は避けてください。
              </>
            ),
            aText:
              "観光地でも子グマ・母グマとの遭遇例があります。複数人での行動・鈴の携行・大声での談笑が有効。早朝・夕方の単独散歩は避けてください。",
          },
          {
            q: "森林限界より上の縦走ならクマはいない?",
            a: (
              <>
                少数ですが、夏期に高山帯まで上がってくる個体は存在します。
                森林限界直下の樹林帯通過時や、テント場では警戒度を上げてください。
              </>
            ),
            aText:
              "少数ですが夏期に高山帯まで上がる個体は存在します。森林限界直下の樹林帯やテン場では警戒度を上げてください。",
          },
          {
            q: "中部山岳に入る前の情報源は?",
            a: (
              <>
                各県の出没マップ + 山小屋の最新情報が二大情報源。
                くまウォッチの<Link href="/">出没マップ</Link>でも統合的に確認できます。
                山小屋は入山前に電話で問い合わせれば、当日のコース上の目撃情報を教えてくれることが多い。
              </>
            ),
            aText:
              "各県の出没マップと山小屋の最新情報。くまウォッチの出没マップでも統合確認可能。山小屋に電話すれば当日の目撃情報を教えてくれることが多いです。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "北アルプス・南アルプス・八ヶ岳・白山・立山連峰すべてツキノワグマの生息域。",
          "亜高山帯の森まで行動範囲。森林限界より上に上がる個体も。",
          "上高地・涸沢・室堂など観光地でも遭遇情報あり。",
          "テント場では食料・ゴミの匂い管理を徹底。",
          "入山前に各県の出没情報と山小屋の最新情報を確認。",
        ]}
        footer="中部山岳の登山者は、入山前に山小屋への電話と各県の出没マップ確認を習慣にしましょう。"
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
