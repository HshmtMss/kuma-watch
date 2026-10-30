import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/ArticleShell";
import { KeyPoints } from "@/components/ArticleCards";
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
        時速 10km 前後で走るランナーは、クマが人に気づいて離れるための時間を奪います。
        環境省も、徒歩より速いランニングは出会い頭の遭遇リスクが高くなる可能性があると指摘しています。
        早朝・夕方の時間帯や単独走が重なればなおさらです。装備・ルート計画・複数人走でリスクを下げましょう。
      </p>

      <KeyPoints
        label="3行でわかる"
        items={[
          <>
            トレイルランは<strong>「速さ」がリスク</strong>。クマが回避する時間を奪う。
          </>,
          <>
            <strong>早朝・夕方＋単独行動</strong>が重なると、出会い頭の遭遇リスクがさらに上がる。
          </>,
          <>
            <strong>装備・ルート計画・複数人走</strong>でリスクを下げる。
          </>,
        ]}
      />

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
          時速 10km 前後で動くと、クマが「人間がいる」と感知する前に至近距離に到達することがある。
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
          明け方と夕方はクマが特に活発な時間帯 (<Link href="/articles/night-encounter">夜間・薄暗い時間の遭遇</Link>)。
        </li>
        <li>
          <strong>単独走が多い</strong>:
          1 人だと人の気配 (声) が出にくく、襲われたときに通報もできない。
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
          軽さを優先して小型品を選ぶ場合も、環境省の推奨要件 (噴射距離 7.5m 程度以上・噴射時間 6 秒程度以上) を満たすか確認する。
          <Link href="/articles/bear-spray">使い方</Link>。
        </li>
        <li>
          <strong>ホイッスル</strong>:
          ベスト胸部に常時装着。見通しの悪い場所の手前などでこまめに吹き、「人間サイン」を出す。
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
          明け方と夕方の薄暗い時間帯。クマが特に活発で、人身被害も明け方や日の入り前後に多い (環境省、令和 7 年度)。
        </li>
        <li>
          <strong>推奨</strong>:
          十分に明るい日中。ただし日中でも遭遇はあり得るので、備えは続ける。
        </li>
        <li>
          <strong>夏のナイトラン</strong>:
          涼しさ目当てで 19 時以降に走るのは推奨できません。
          暗い中ではクマに気づくのが遅れ、夜に動く個体もいる。
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
          <strong>狩猟期 (原則 11/15〜2/15、北海道は 10/1〜1/31)</strong>:
          ハンターからの誤射防止に蛍光ベスト推奨
          (<Link href="/articles/night-gear">夜間装備</Link>)。
        </li>
      </ul>

      <h2 id="group">複数人走と単独走の差</h2>
      <p>
        2 人以上で走ることは、環境省も対策として挙げています。
      </p>
      <ul>
        <li>
          <strong>会話の声</strong>:
          走行中の会話は有効な「人間サイン」。
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
          <strong>大きな音で威嚇しない</strong>:
          大声やホイッスルで威嚇するとクマを刺激するおそれがある (環境省)。落ち着いた声で人間だと知らせる程度に。
        </li>
        <li>
          <strong>スプレーを構える</strong>:
          ベストから抜き、セーフティ解除。
        </li>
        <li>
          <strong>ゆっくり後退</strong>:
          来た道に戻る。走らない。
        </li>
        <li>
          <strong>突進されたらスプレー、接触が避けられなければ防御姿勢</strong>:
          うつ伏せで両手で首の後ろを守る (ザックは背負ったまま)。つけ回す・伏せても攻撃が続くなど執拗な攻撃なら顔や鼻を狙って反撃。
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
                下り坂は地面に視線が集中しやすいので、こまめに顔を上げて先を確認してください。
                曲がり角・茂みの陰など見通しの悪い場所では一度減速して周囲確認するのが現実解です
                (環境省も、見通しの悪い場所では速度に注意するよう呼びかけています)。
              </>
            ),
            aText:
              "下り坂はこまめに顔を上げて先を確認。曲がり角・茂みの陰など見通しの悪い場所では減速して周囲確認してください。",
          },
        ]}
      />

      <ArticleSummary
        points={[
          "トレランは速さがリスク要因。クマの回避時間を奪う構造。",
          "装備の核は小型スプレー (ベスト前面) + ホイッスル + 鈴。",
          "クマが特に活発な明け方・夕方を避け、明るい日中に走る。",
          "ブナ凶作年・沢沿いトレイル・狩猟期は警戒度を上げる。",
          "単独走を避け、複数人での会話走を基本に。",
        ]}
        footer="トレランは出会い頭の遭遇が起きやすい活動です。装備とルート選定でリスクを下げてください。"
      />

      <p className="text-sm text-stone-500">2026 年 10 月 30 日 改訂：内容を出典と照らし合わせ、事実と異なっていた記述を修正しました。</p>
    </ArticleShell>
  );
}
