import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "このサイトについて｜KumaWatch（クマウォッチ）",
  description:
    "KumaWatch は、全国 47 都道府県のクマ出没情報を 70 以上の公式ソースから自動集約し、5km メッシュ単位で警戒レベルを予報する無料の Web アプリです。登録不要・スマホ対応。登山・キャンプ・通勤前の安全確認に。",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "KumaWatch — 全国クマ出没予報",
    description:
      "70+ の公式ソースから集約した 7 万件のクマ出没情報を 5km メッシュで可視化。47 都道府県・2,500 以上の市町村に対応。登録不要・無料。",
    url: `${SITE_URL}/about`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KumaWatch — 全国クマ出没予報",
    description:
      "70+ の公式ソースから集約した 7 万件のクマ出没情報を 5km メッシュで可視化。",
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

export default function AboutPage() {
  return (
    <PageShell
      title="KumaWatch（クマウォッチ）について"
      lead="全国のクマ出没情報を 1 つの地図に。登山・キャンプ・通勤前の「行く前 30 秒チェック」を支える無料の予報サービスです。"
    >
      {/* Hero: 地図のスクリーンショット + CTA */}
      <section className="not-prose mb-10 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <div className="relative aspect-[16/10] w-full bg-stone-100">
          <Image
            src="/lp/hero.jpg"
            alt="KumaWatch のメイン画面。日本地図上に5km メッシュの警戒レベルが色分けで表示されている。"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 bg-stone-50 px-5 py-4">
          <div className="text-sm text-stone-700">
            位置情報を許可すると、現在地の警戒レベルがすぐ見られます。
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            地図を開く →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="not-prose mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { v: "70,000+", l: "出没情報を集約" },
          { v: "47", l: "都道府県をカバー" },
          { v: "2,500+", l: "市町村ページ" },
          { v: "毎日", l: "自動更新" },
        ].map((s) => (
          <div
            key={s.l}
            className="rounded-xl border border-stone-200 bg-white px-3 py-4 text-center"
          >
            <div className="text-2xl font-bold text-stone-900">{s.v}</div>
            <div className="mt-1 text-[11px] leading-tight text-stone-500">
              {s.l}
            </div>
          </div>
        ))}
      </section>

      {/* 3 ステップ */}
      <h2 id="how-to-use">使い方は 3 ステップ</h2>
      <p>
        ダウンロードや会員登録は不要です。スマホやパソコンのブラウザで開いて、すぐに使えます。
      </p>
      <div className="not-prose my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            n: "1",
            title: "地図を開く",
            desc: "kuma-watch.jp にアクセス。現在地周辺の警戒レベルが自動で表示されます。",
            img: "/lp/step1.png",
          },
          {
            n: "2",
            title: "場所を調べる",
            desc: "検索ボックスに地名を入力、または地図をタップ。登山口や旅先の状況を確認できます。",
            img: "/lp/step2.png",
          },
          {
            n: "3",
            title: "詳細を確認",
            desc: "周辺の出没履歴・最新事案・気象条件を踏まえた警戒レベルが表示されます。",
            img: "/lp/step3.png",
          },
        ].map((s) => (
          <div
            key={s.n}
            className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm"
          >
            <div className="relative aspect-[3/4] w-full bg-stone-100">
              <Image
                src={s.img}
                alt={`Step ${s.n}: ${s.title}`}
                fill
                sizes="(max-width: 640px) 100vw, 240px"
                className="object-cover"
              />
            </div>
            <div className="border-t border-stone-200 p-3">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                  {s.n}
                </span>
                <div className="text-sm font-semibold text-stone-900">
                  {s.title}
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-stone-600">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 誰の役に立つか */}
      <h2>こんな方に使われています</h2>
      <div className="not-prose my-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          {
            icon: "🥾",
            who: "登山・キャンプ・山菜採り",
            why: "出発前に登山口周辺の出没状況を確認。クマ鈴・スプレーの携行判断に。",
          },
          {
            icon: "🏠",
            who: "地域住民・通勤通学",
            why: "近所での目撃情報を地図で確認。市町村ページで最新の動向を追跡。",
          },
          {
            icon: "🚗",
            who: "観光・出張・ドライブ",
            why: "旅先の警戒レベルを事前チェック。県境を超えた情報も統合表示。",
          },
        ].map((p) => (
          <div
            key={p.who}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="text-2xl">{p.icon}</div>
            <div className="mt-2 text-sm font-semibold text-stone-900">
              {p.who}
            </div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">
              {p.why}
            </p>
          </div>
        ))}
      </div>

      {/* メッシュ説明（既存ヒートマップ画像活用） */}
      <h2>5km メッシュで「面」として見る</h2>
      <p>
        点としての目撃情報だけでは、リスクの高低を直感的に把握しにくいものです。KumaWatch
        は地形・植生・過去の出没頻度を踏まえ、<strong>5km
          メッシュ単位の 5 段階警戒レベル</strong>
        として可視化します。地図を拡大すると個別の事案位置も合わせて確認できます。
      </p>
      <div className="not-prose my-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
        <div className="relative aspect-[7/5] w-full bg-stone-100">
          <Image
            src="/lp/heatmap.jpg"
            alt="5km メッシュの警戒レベル表示。安全（緑）から しっかり対策を（赤）まで5段階で色分けされている。"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>

      <h2>サービスの目的</h2>
      <p>
        近年、全国でクマの出没件数が増加し、登山・キャンプ・山菜採りなどアウトドア活動のリスクが高まっています。
        KumaWatch は、分散して公開されているクマ出没情報を統合し、「いつ」「どこが」「どれくらい危険か」を
        誰でも直感的に確認できる形で提供することを目指しています。
      </p>

      <h2 id="data-sources">データソース・出典</h2>
      <p>
        KumaWatch は、国・自治体・各オープンデータプロジェクトが公開する情報を組み合わせて
        警戒レベルを算出しています。主な出典は以下のとおりです。
      </p>

      <h3>クマ出没・分布情報</h3>
      <ul>
        <li>
          <a
            href="https://public.sharp9110.com/view/allposts/bear"
            target="_blank"
            rel="noopener noreferrer"
          >
            全国クマ出没情報（Sharp9110）
          </a>
          <span className="text-gray-500"> / Sharp9110 / </span>
          <a
            href="https://creativecommons.org/licenses/by/4.0/deed.ja"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY 4.0
          </a>
        </li>
        <li>
          <a
            href="https://www.biodic.go.jp/kiso/fnd_list_h.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            自然環境保全基礎調査（哺乳類分布調査）
          </a>
          <span className="text-gray-500"> / 環境省 生物多様性センター</span>
        </li>
        <li>
          全国 70 以上の自治体公式サイト（各自治体の出没情報ページ・PDF・CSV/KML
          公開データを自動取り込み）
        </li>
      </ul>

      <h3>気象情報</h3>
      <ul>
        <li>
          <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">
            Open-Meteo Weather API
          </a>
          <span className="text-gray-500"> / Open-Meteo / </span>
          <a
            href="https://open-meteo.com/en/features#terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY 4.0
          </a>
        </li>
      </ul>

      <h3>地図・位置情報</h3>
      <ul>
        <li>
          <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">
            OpenStreetMap
          </a>
          <span className="text-gray-500"> / OpenStreetMap contributors / </span>
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
          >
            ODbL 1.0
          </a>
        </li>
        <li>
          <a
            href="https://nominatim.openstreetmap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nominatim
          </a>
          <span className="text-gray-500"> / OpenStreetMap Foundation / ODbL 1.0</span>
        </li>
      </ul>

      <h2>スコアの考え方</h2>
      <p>
        警戒レベルは <strong>5 段階（安全 / 念のため注意 / 基本対策を / 対策を強化 / しっかり対策を）</strong> で表示します。
        基本となるのは <strong>クマの生息域</strong> で、生息記録のない地域は「安全」と扱います。
        生息域内では、<strong>過去の出没履歴を中心に、季節・気象・時間帯などを補正要素として加味</strong>し、
        現時点で意識しておきたいレベルを表します。
      </p>
      <p>
        各要素の具体的な重み付けや、内部で利用しているデータソースの粒度・更新頻度などは、
        サービスの中核ノウハウのため公開しておりません。
        自治体・事業者向けの詳細な仕様や連携については
        <Link href="/for-gov">自治体の方へ</Link> よりお問い合わせください。
      </p>
      <p>
        本スコアは統計的な参考情報であり、実際のクマ出没を保証するものではありません。
        現地の最新情報と合わせてご活用ください。
      </p>

      <h2>研究・知見の発信</h2>
      <p>
        獣医工学ラボでは、KumaWatch のデータと運営知見をもとに、全国のクマ出没事案の時空間分析やテーマ解説を
        <Link href="/research">研究・知見</Link>ページで日次・月次で公開しています。自治体・研究機関・専門家の皆様向けの内容です。
      </p>

      <h2>旧「くまもりマップ」との関係</h2>
      <p>
        KumaWatch は「くまもりマップ」のリブランド後継サービスです。他社サービスとの名称重複を避けるため、
        2026 年 4 月にサービス名・ドメインを変更しました。機能は刷新され、予報機能と自治体連携の基盤が強化されています。
      </p>

      <h2>運営者情報</h2>
      <p>
        本サイトは <strong>獣医工学ラボ</strong> によって運営されています。
        獣医工学ラボは <strong>リサーチコーディネート株式会社</strong> が運営する、
        獣医療・野生動物・公衆衛生領域の技術プロジェクトです。
      </p>
      <div>
        <p>
          <strong>リサーチコーディネート株式会社</strong>
          <br />
          〒160-0023 東京都新宿区西新宿1-20-3 西新宿高木ビル8F
          <br />
          Web: <a href="https://www.research-coordinate.co.jp" target="_blank" rel="noopener noreferrer">research-coordinate.co.jp</a>
          <br />
          Email: <a href="mailto:contact@research-coordinate.co.jp">contact@research-coordinate.co.jp</a>
        </p>
      </div>

      {/* Final CTA */}
      <div className="not-prose mt-10 flex flex-wrap gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex-1 min-w-[12rem] text-sm text-amber-900">
          <div className="font-semibold">いま地図で確認する</div>
          <div className="text-xs text-amber-800/90">
            登録不要・無料。スマホでもそのまま使えます。
          </div>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          地図を開く →
        </Link>
        <Link
          href="/for-gov"
          className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-white px-5 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100"
        >
          自治体の方はこちら
        </Link>
      </div>
    </PageShell>
  );
}
