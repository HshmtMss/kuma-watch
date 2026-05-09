import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import ArticleToc from "@/components/ArticleToc";
import ArticleFaq from "@/components/ArticleFaq";
import ArticleSummary from "@/components/ArticleSummary";
import { getArticle } from "@/lib/articles-meta";

const meta = getArticle("trail-running")!;

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
        <strong>結論</strong>: トレイルランは「速さ」がリスク要因。
        時速 10km で走るランナーは、クマが回避するための時間を奪います。
        さらに早朝・薄暮の時間帯と単独行動が重なるため、登山者より遭遇事故率が高い活動。
        装備・ルート計画・複数人走で予防できます。
      </p>

      <ArticleToc
        items={[
          { id: "why-risky", title: "なぜトレランは遭遇率が高いか" },
          { id: "gear", title: "携行装備 — 軽さとの両立" },
          { id: "time", title: "時間帯の選び方" },
          { id: "route", title: "ルート選定 — 避けるべき条件" },
          { id: "group", title: "複数人走と単独走の差" },
          { id: "if-met", title: "走行中に遭遇したら" },
          { id: "faq", title: "よくある質問" },
        ]}
      />

      <h2 id="why-risky">なぜトレランは遭遇率が高いか</h2>
      <ul>
        <li>
          <strong>速度が速い</strong>:
          時速 10km で動くと、クマが「人間がいる」と感知する前に至近距離に到達することがある。
        </li>
        <li>
          <strong>音が出にくい</strong>:
          鈴は揺れで音が消えやすく、走行中の呼吸音はクマには届きにくい。
        </li>
        <li>
          <strong>視界が前方限定</strong>:
          下り坂で地面を見続けるため、横や脇道のクマに気づけない。
        </li>
        <li>
          <strong>早朝に走ることが多い</strong>:
          日の出前後は<Link href="/articles/night-encounter">クマの活動ピーク</Link>。
        </li>
        <li>
          <strong>単独走が多い</strong>:
          複数人より単独が圧倒的に多く、事故率が上がる。
        </li>
      </ul>

      <h2 id="gear">携行装備 — 軽さとの両立</h2>
      <p>
        ランザックの容量制約があるので、対クマ装備は最小構成で。
      </p>
      <ul>
        <li>
          <strong>小型クマよけスプレー</strong>:
          ベスト前面のチェストポケット or ベルトホルスター。
          通常版より小型の Frontiersman Trail Defender 等が現実的。
          <Link href="/articles/bear-spray">使い方</Link>。
        </li>
        <li>
          <strong>ホイッスル</strong>:
          ベスト胸部に常時装着。10 分に 1 回吹くだけで「人間サイン」を継続できる。
        </li>
        <li>
          <strong>クマ鈴</strong>:
          走行中は揺れて消音されがちだが、無いよりはマシ。
          <Link href="/articles/bear-bell">議論あり</Link>。
        </li>
        <li>
          <strong>携帯電話</strong>:
          GPS アプリ + 圏外用にオフラインマップ。Garmin 等のスマートウォッチ併用が理想。
        </li>
      </ul>

      <h2 id="time">時間帯の選び方</h2>
      <ul>
        <li>
          <strong>避ける</strong>:
          日の出前 1 時間 〜 日の出後 1 時間 / 日没前 1 時間 〜 日没後 1 時間。
        </li>
        <li>
          <strong>推奨</strong>:
          日の出後 2 時間以降〜午前 11 時 / 午後 14:00〜16:00 の明るい時間帯。
        </li>
        <li>
          <strong>夏のナイトラン</strong>:
          涼しさ目当てで 19 時以降に走るのは推奨できません。
          ヘッドライトが届かない位置にクマがいる可能性大。
        </li>
      </ul>

      <h2 id="route">ルート選定 — 避けるべき条件</h2>
      <ul>
        <li>
          <strong>ブナ・ナラ凶作年の山</strong>:
          ハイパーフェイジア期 (秋) のクマが集中。<Link href="/articles/autumn">秋のクマ対策</Link>。
        </li>
        <li>
          <strong>沢沿いトレイル</strong>:
          沢音で鈴・声が消える。クマも沢を利用する経路。
          <Link href="/articles/fishing">渓流のクマ対策</Link>と同じ理屈。
        </li>
        <li>
          <strong>初めての山域での単独走</strong>:
          地形が読めない + クマ情報源がないため避ける。
        </li>
        <li>
          <strong>狩猟期 (11/15〜2/15)</strong>:
          ハンターからの誤射防止に蛍光ベスト推奨
          (<Link href="/articles/night-gear">夜間装備</Link>)。
        </li>
      </ul>

      <h2 id="group">複数人走と単独走の差</h2>
      <p>
        2 人以上で走るだけで遭遇率は大きく下がります。
      </p>
      <ul>
        <li>
          <strong>会話の声</strong>:
          走行中の会話は最強の「人間サイン」。
        </li>
        <li>
          <strong>視界の補完</strong>:
          一人が前を見て、もう一人が周辺を警戒。
        </li>
        <li>
          <strong>事故時の通報</strong>:
          単独で意識を失うと通報できない。
        </li>
        <li>
          <strong>SNS グループ参加</strong>:
          同じ山域のランナーをマッチングするコミュニティで仲間を探すのも有効。
        </li>
      </ul>

      <h2 id="if-met">走行中に遭遇したら</h2>
      <ol>
        <li>
          <strong>その場で完全停止</strong>:
          走り続けるのは絶対 NG (<Link href="/articles/bear-speed">逃げ切れない理由</Link>)。
        </li>
        <li>
          <strong>正面を向いたまま立つ</strong>:
          屈まず、ザックを背負ったまま。
        </li>
        <li>
          <strong>ホイッスルを吹く</strong>:
          単発で大きな音を出してクマに注意を引きつつ、自分の存在を示す。
        </li>
        <li>
          <strong>スプレーを構える</strong>:
          ベストから抜き、セーフティ解除。
        </li>
        <li>
          <strong>ゆっくり後退</strong>:
          来た道に戻る。走らない。
        </li>
      </ol>
      <p>
        詳細は<Link href="/articles/encounter">距離別の正しい対処法</Link>と
        <Link href="/articles/bluff-charge">威嚇突進と本気突進の見分け方</Link>。
      </p>

      <h2 id="faq" className="!mt-12">よくある質問</h2>
      <ArticleFaq
        items={[
          {
            q: "音楽イヤホンしながらトレランしてもいい?",
            a: (
              <>
                クマ生息域では避けてください。周囲音が聞こえないと、クマの「フウッ」という鼻息や
                枝を踏む音に気づけません。聴覚は遭遇予防の最重要センサーです。
                どうしても音楽を聴くなら片耳・骨伝導イヤホン・小音量で。
              </>
            ),
            aText:
              "クマ生息域では避けてください。聴覚は遭遇予防の最重要センサー。聴くなら片耳・骨伝導・小音量で。",
          },
          {
            q: "レース大会では大丈夫?",
            a: (
              <>
                大会主催者がコース上のクマ情報を確認・対策していることが多く、ランナー密度も高いので相対的に安全。
                ただし主催者がコース修正・スタッフ警戒を実施している大会を選び、
                単独練習で同じコースを走るのとはリスクが違うことを理解してください。
              </>
            ),
            aText:
              "大会は主催者の対策とランナー密度で相対的に安全ですが、単独練習で同じコースを走るのとはリスクが違うので主催者の対策を確認してください。",
          },
          {
            q: "上り坂でも下り坂でも走り続けるのが基本だが、視界対策は?",
            a: (
              <>
                下り坂は地面に視線が集中しやすいので、5〜10 秒に 1 回顔を上げて 50m 先を確認。
                曲がり角・茂みの陰では一度減速して周囲確認するのが現実解。
                練習として「3 歩走る毎に視線を 1 度上げる」リズムを身につけると、走行中も全周警戒ができます。
              </>
            ),
            aText:
              "下り坂は 5〜10 秒に 1 回顔を上げて 50m 先を確認。曲がり角・茂みの陰では減速して周囲確認してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "トレランは速さがリスク要因。クマの回避時間を奪う構造。",
          "装備の核は小型スプレー (ベスト前面) + ホイッスル + 鈴。",
          "薄明薄暮を避け、日の出後 2 時間〜午前 11 時を中心に走る。",
          "ブナ凶作年・沢沿いトレイル・狩猟期は警戒度を上げる。",
          "単独走を避け、複数人での会話走を基本に。",
        ]}
        footer="トレラン中の遭遇は事故率が高い活動です。装備とルート選定で予防を最大化してください。"
      />
    </ArticleShell>
  );
}
