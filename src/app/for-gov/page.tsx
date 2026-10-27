import "./for-gov.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronLeft, Factory, Landmark, Sprout, Tent } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import LegalLinks from "@/components/LegalLinks";
import ReportViewer from "./ReportViewer";
import {
  EXHIBITIONS,
  exhibitionStatus,
  formatExhibitionDates,
} from "@/data/exhibitions";
import { jstToday } from "@/lib/jst-date";

const SITE_URL = "https://kuma-watch.jp";
const LAB_URL = "https://www.research-coordinate.co.jp/labs/vet/";
const COMPANY_URL = "https://www.research-coordinate.co.jp";
const META_DESC =
  "クマ・野生動物のお困りごとを、まずはご相談ください。獣医師が中心のチームが、地域の出没傾向を分析し、具体的な対策を立て、実行まで伴走します。自治体・企業・団体の方へ。";

export const metadata: Metadata = {
  title: "野生動物対策支援｜法人・自治体の方へ",
  description: META_DESC,
  alternates: { canonical: `${SITE_URL}/for-gov` },
  openGraph: {
    title: "野生動物対策支援｜くまウォッチ",
    description: META_DESC,
    url: `${SITE_URL}/for-gov`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "野生動物対策支援｜くまウォッチ",
    description: META_DESC,
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

// 日本語の見出し・短文は .fg の keep-all で文節の途中では折らず、｜の位置 (<wbr>) だけで
// 折り返す。文言を変えるときは区切りも一緒に見直す。
function Wbr({ text }: { text: string }) {
  const parts = text.split("｜");
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <wbr />}
        </span>
      ))}
    </>
  );
}

const TROUBLES: { icon: ReactNode; who: string; text: string }[] = [
  {
    icon: <Landmark aria-hidden />,
    who: "自治体",
    text: "出没が増え、｜何から｜手をつければよいか｜分からない",
  },
  {
    icon: <Tent aria-hidden />,
    who: "観光・レジャー施設",
    text: "出没があったとき、｜営業するかどうかの｜判断に迷う",
  },
  {
    icon: <Factory aria-hidden />,
    who: "企業",
    text: "山間部の現場や巡視で、｜従業員の安全を｜守りたい",
  },
  {
    icon: <Sprout aria-hidden />,
    who: "農林業・地域団体",
    text: "作物の被害を、｜集落ぐるみで｜減らしたい",
  },
];

// 支援の流れ。番号は実際の順番だが、どの段階からでも受ける (見出し下の一文で伝える)。
const STEPS = [
  {
    title: "分析する",
    body: "出没データを｜場所・季節・誘引物などで｜分析し、｜どこで・いつ・なぜ出るのかを｜明らかにします。",
  },
  {
    title: "対策を立てる",
    body: "刈り払い、｜電気柵、｜誘引物の管理、｜出没直後の対応ルールまで、｜何を・どこに・いつ行うかを｜ご提案します。",
  },
  {
    title: "専門家につなぐ",
    body: "獣医師・研究者・｜捕獲の担い手・｜対策機器のメーカーなど、｜必要な専門家を｜ご紹介します。",
  },
  {
    title: "実行に伴走する",
    body: "定期レポート、｜研修、｜住民説明会などで、｜対策が根づくまで｜ご一緒します。",
  },
];

// 分析サンプルの数字はレポート (2026 年 7 月 26 日時点・78,029 件) の値そのまま。
// 今のデータで更新しない (レポート本文とずれるため)。
const FINDINGS = [
  {
    value: "23",
    unit: "%",
    text: "1 年の出没のうち、｜10 月に集中する割合",
    act: "→ 対策は｜ 9 月までに前倒し",
  },
  {
    value: "2.28",
    unit: "倍",
    text: "森と人里が｜入り混じる地帯の｜出没率",
    act: "→ 刈り払いは｜境界に集中",
  },
  {
    value: "2.61",
    unit: "倍",
    text: "出没から 7 日以内に、｜同じ場所で｜また出る率",
    act: "→ 7 日間の｜立入制限",
  },
];

const FAQ = [
  {
    q: "相談するだけでも｜大丈夫ですか？",
    a: "はい。｜何に困っているのかを｜整理したい、｜という段階から｜ご相談いただけます。",
  },
  {
    q: "分析だけ、｜といった依頼も｜できますか？",
    a: "はい。｜ご相談の内容に合わせて、｜どの段階からでも｜お手伝いします。",
  },
  {
    q: "費用は｜どのくらいですか？",
    a: "ご相談の内容と範囲を｜伺ったうえで、｜お見積りをお出しします。",
  },
  {
    q: "クマ以外の｜野生動物も対象ですか？",
    a: "はい。｜シカ・イノシシ・サルなど、｜野生動物のお困りごと全般を｜承ります。",
  },
  {
    q: "どの地域でも｜対応できますか？",
    a: "全国に対応します。",
  },
];

// 展示会欄の「出展予定/出展中/出展実績」を日付で切り替えるため、1 時間ごとに作り直す。
export const revalidate = 3600;

export default function ForGovPage() {
  const today = jstToday();
  return (
    <div className="fg" lang="ja">
      {/* 一般向けの共通ヘッダーは使わず、このページ専用のバーにする。
          名乗りを「野生動物対策支援」1 つにして、くまウォッチの名乗りと重ねないため。 */}
      <header className="bar">
        <div className="wrap">
          {/* くまウォッチから来た人がすぐ戻れるよう、パンくずの形で左上に置く。 */}
          <div className="crumb">
            <Link href="/" className="home">
              <ChevronLeft size={16} aria-hidden />
              くまウォッチ
            </Link>
            <span className="sep" aria-hidden>
              /
            </span>
            <a className="name" href="#top">
              野生動物対策支援
            </a>
          </div>
          <nav aria-label="ページ内">
            <a className="t" href="#support">
              支援の流れ
            </a>
            <a className="t" href="#sample">
              分析サンプル
            </a>
            <a className="t" href="#faq">
              よくあるご質問
            </a>
            <a className="btn sm" href="#contact">
              相談する
            </a>
          </nav>
        </div>
      </header>

      <div className="hero" id="top">
        <div className="map" aria-hidden />
        <div className="wrap">
          <div className="body">
            <p className="who">自治体・企業・団体の方へ</p>
            <h1>
              クマ・野生動物の
              <wbr />
              <em>お困りごと</em>、<wbr />
              まずは
              <wbr />
              ご相談ください。
            </h1>
            <p className="lead">
              <Wbr text="獣医師が中心のチームが、｜地域の出没傾向を分析し、｜具体的な対策を立て、｜実行まで伴走します。" />
            </p>
            <div className="actions">
              <a className="btn" href="#contact">
                相談する →
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="wrap">
        <section id="troubles">
          <div className="head">
            <p className="label">こんなとき</p>
            <h2>
              <Wbr text="こんな｜お困りごとは｜ありませんか？" />
            </h2>
          </div>
          <div className="troubles">
            {TROUBLES.map((t) => (
              <div key={t.who} className="card">
                <div className="top">
                  <span className="icon">{t.icon}</span>
                  <b>{t.who}</b>
                </div>
                <p>
                  <Wbr text={t.text} />
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="support">
          <div className="head">
            <p className="label">支援の流れ</p>
            <h2>
              <Wbr text="分析から実行まで、｜一緒に進めます" />
            </h2>
            <p>
              <Wbr text="ご相談の内容に合わせて、｜どの段階からでも｜お手伝いします。" />
            </p>
          </div>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.title} className="card">
                <h3>{s.title}</h3>
                <p>
                  <Wbr text={s.body} />
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="sample">
          <div className="head">
            <p className="label">分析サンプル</p>
            <h2>
              <Wbr text="分析レポートの｜サンプル" />
            </h2>
            <p>
              <Wbr text="全国の出没データ｜（78,029 件・｜2026 年 7 月 26 日時点）で｜作成した例です。" />
            </p>
          </div>
          <div className="stack">
            <div className="finds">
              {FINDINGS.map((f) => (
                <div key={f.value} className="card">
                  <span className="v">
                    {f.value}
                    <small>{f.unit}</small>
                  </span>
                  <p>
                    <Wbr text={f.text} />
                  </p>
                  <span className="act">
                    <Wbr text={f.act} />
                  </span>
                </div>
              ))}
            </div>
            <ReportViewer />
            <p className="note">
              <Wbr text="このページの数字とレポートは｜サンプルです。｜実際のご相談では、｜地域に絞って分析します。" />
            </p>
          </div>
        </section>

        <section id="faq">
          <div className="head">
            <p className="label">よくあるご質問</p>
            <h2>ご相談の前に</h2>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>
                  <span>
                    <Wbr text={f.q} />
                  </span>
                </summary>
                <p>
                  <Wbr text={f.a} />
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 展示会 — 地図の小さな案内 (ExhibitionNotice) の行き先。予定/開催中と
            実績を日付で自動に分ける (revalidate で日をまたいで更新)。 */}
        <section id="exhibitions">
          <div className="head">
            <p className="label">展示会</p>
            <h2>
              <Wbr text="展示会でも｜ご相談を承ります" />
            </h2>
          </div>
          <div className="expo">
            {(["upcoming", "past"] as const).map((group) => {
              const list = EXHIBITIONS.filter((e) =>
                group === "past"
                  ? exhibitionStatus(e, today) === "past"
                  : exhibitionStatus(e, today) !== "past",
              ).sort((a, b) =>
                group === "past"
                  ? a.start < b.start ? 1 : -1
                  : a.start < b.start ? -1 : 1,
              );
              if (list.length === 0) return null;
              return (
                <div key={group} className="expo">
                  <p className="group">
                    {group === "past" ? "出展実績" : "出展予定"}
                  </p>
                  {list.map((e) => {
                    const status = exhibitionStatus(e, today);
                    return (
                      <div key={e.id} className="card">
                        {status === "ongoing" && <span className="tag">出展中</span>}
                        <b>{e.name}</b>
                        <span className="when">
                          {formatExhibitionDates(e)}・{e.venue}
                          {e.area && `（${e.area}）`}
                          {e.booth
                            ? `・小間 ${e.booth}`
                            : status !== "past" && "・小間番号は決まり次第お知らせします"}
                        </span>
                        <a href={e.url} target="_blank" rel="noopener noreferrer">
                          詳しく見る ↗
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <div className="contact" id="contact">
        <div className="wrap">
          <div className="head">
            <p className="label">ご相談</p>
            <h2>
              <Wbr text="まずは、｜お困りのことを｜お聞かせください。" />
            </h2>
          </div>
          <ContactForm kind="gov" />
        </div>
      </div>

      {/* 運営元への導線はここ 1 か所にまとめる (ラボ = 誰がやるか、会社 = 運営法人)。 */}
      <div className="wrap">
        <section id="operator">
          <div className="head">
            <p className="label">運営</p>
          </div>
          <div className="org card">
            <Image
              src="/labs/vet-eng-lab.jpeg"
              alt="獣医工学ラボ ロゴ"
              width={480}
              height={267}
            />
            <div className="txt">
              <b>獣医工学ラボ</b>
              <p>
                <Wbr text="リサーチコーディネート株式会社の、｜獣医師が中心のチームです。｜獣医師開発のクマ警戒レベルマップ｜「くまウォッチ」を｜開発・運営しています。" />
              </p>
              <div className="links">
                <a href={LAB_URL} target="_blank" rel="noopener noreferrer">
                  獣医工学ラボ ↗
                </a>
                <a href={COMPANY_URL} target="_blank" rel="noopener noreferrer">
                  リサーチコーディネート株式会社 ↗
                </a>
                <Link href="/">くまウォッチに戻る</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="wrap">
          <LegalLinks />
        </div>
      </footer>
    </div>
  );
}
