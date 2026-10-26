import type { Metadata } from "next";
import {
  ChartLine,
  ClipboardList,
  Factory,
  Handshake,
  Landmark,
  Tent,
  Users,
  Wheat,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import ContactForm from "@/components/ContactForm";
import ReportViewer from "./ReportViewer";
import {
  EXHIBITIONS,
  exhibitionStatus,
  formatExhibitionDates,
} from "@/data/exhibitions";
import { jstToday } from "@/lib/jst-date";

const SITE_URL = "https://kuma-watch.jp";
const META_DESC =
  "クマ・野生動物のお困りごとを、まずはご相談ください。獣医師が中心のチームが、地域に絞った出没傾向の分析から具体的な対策の立案、専門家のご紹介、実行の伴走までお手伝いします。自治体・企業・団体の方へ。";

export const metadata: Metadata = {
  title: "法人・自治体の方へ｜クマ・野生動物対策のご相談",
  description: META_DESC,
  alternates: { canonical: `${SITE_URL}/for-gov` },
  openGraph: {
    title: "法人・自治体の方へ｜くまウォッチ",
    description: META_DESC,
    url: `${SITE_URL}/for-gov`,
    type: "website",
    images: [{ url: `${SITE_URL}/lp/og.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "法人・自治体の方へ｜くまウォッチ",
    description: META_DESC,
    images: [`${SITE_URL}/lp/og.jpg`],
  },
};

// 入口は「サービスの売り込み」ではなく「お困りごと」。読み手が自分の立場を
// 見つけて「うちのことだ」と思えるよう、立場ごとに具体的な悩みを並べる。
const TROUBLES = [
  {
    icon: <Landmark size={18} />,
    who: "自治体",
    items: [
      "出没が増え、何から手をつければよいか分からない",
      "住民への注意喚起が届いているか不安",
      "限られた予算と人手を、どの対策に振り向けるか",
    ],
  },
  {
    icon: <Tent size={18} />,
    who: "観光・レジャー施設",
    items: [
      "キャンプ場・登山口・ゴルフ場などの安全管理",
      "出没があったときに営業するかどうかの判断",
    ],
  },
  {
    icon: <Factory size={18} />,
    who: "企業",
    items: [
      "工場・建設現場・インフラ巡視での従業員の安全",
      "山間部の拠点や現場での出没への備え",
    ],
  },
  {
    icon: <Wheat size={18} />,
    who: "農林業・地域団体",
    items: [
      "作物や果樹への被害",
      "集落ぐるみで取り組む対策の進め方",
    ],
  },
];

const SERVICES = [
  {
    icon: <ChartLine size={18} />,
    title: "地域に絞った傾向分析",
    body: "御地域の出没データを、場所・季節・時間帯・誘引物などの軸で分析し、「どこで、いつ、なぜ出るのか」を明らかにします。",
  },
  {
    icon: <ClipboardList size={18} />,
    title: "具体的な対策の立案",
    body: "誘引物の管理、刈り払い、電気柵、見回り、出没した直後の対応ルールまで。何を・どこに・いつ行うかを具体的にご提案します。",
  },
  {
    icon: <Users size={18} />,
    title: "専門家のご紹介",
    body: "獣医師・野生動物の研究者・捕獲の担い手・対策機器のメーカーなど、必要な専門家をご紹介します。",
  },
  {
    icon: <Handshake size={18} />,
    title: "実行までの伴走",
    body: "対策を立てて終わりにせず、定期的なレポート、職員・従業員向けの研修、住民説明会など、実行と見直しまでご一緒します。",
  },
];

const FLOW = [
  {
    title: "ご相談",
    body: "下のフォームから、お困りのことをそのままお書きください。整理されていなくても構いません。",
  },
  {
    title: "現状の把握",
    body: "御地域の出没状況と、すでに行っている対策を伺い、課題を整理します。",
  },
  {
    title: "対策のご提案",
    body: "分析にもとづき、優先順位をつけた具体的な対策と進め方をご提案します。",
  },
  {
    title: "実行の伴走",
    body: "専門家のご紹介や定期的な見直しを通じて、対策が根づくまでお手伝いします。",
  },
];

const FAQ = [
  {
    q: "相談するだけでも大丈夫ですか？",
    a: "はい。「何に困っているのか自体を整理したい」という段階からご相談いただけます。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "ご相談の内容と範囲を伺ったうえで、お見積りをお出しします。",
  },
  {
    q: "クマ以外の野生動物も対象ですか？",
    a: "はい。シカ・イノシシ・サルなど、地域の野生動物に関するお困りごと全般をご相談ください。",
  },
  {
    q: "どの地域でも対応できますか？",
    a: "全国に対応します。くまウォッチに集まっている全国の出没データをもとに、御地域に絞って分析します。",
  },
];

// 展示会欄の「出展予定/出展中/出展実績」を日付で切り替えるため、1 時間ごとに作り直す。
export const revalidate = 3600;

export default function ForGovPage() {
  const today = jstToday();
  return (
    <PageShell
      title="法人・自治体の方へ"
      lead="クマ・野生動物のお困りごと、まずはご相談ください。"
    >
      <section className="not-prose mb-9 rounded-2xl bg-gradient-to-br from-emerald-50 to-stone-50 p-5 sm:p-6">
        <p className="m-0 text-sm leading-relaxed text-stone-700">
          獣医師が中心のチームが、
          <strong className="text-emerald-800">地域に絞った出没傾向の分析</strong>から
          <strong className="text-emerald-800">具体的な対策の立案</strong>、
          <strong className="text-emerald-800">専門家のご紹介</strong>、
          <strong className="text-emerald-800">実行までの伴走</strong>
          まで、一緒に進めます。自治体・企業・団体のどなたでもご相談いただけます。
        </p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-1 rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          相談する →
        </a>
      </section>

      <h2 id="troubles">こんなお困りごとはありませんか？</h2>
      <div className="not-prose my-5 grid gap-3 sm:grid-cols-2">
        {TROUBLES.map((t) => (
          <div
            key={t.who}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                {t.icon}
              </span>
              <span className="text-sm font-bold text-stone-900">{t.who}</span>
            </div>
            <ul className="m-0 mt-2.5 space-y-1.5 p-0">
              {t.items.map((it) => (
                <li
                  key={it}
                  className="flex gap-2 text-[13px] leading-relaxed text-stone-700"
                >
                  <span className="text-emerald-600">・</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p>
        どれか一つでも当てはまれば、まずはお気軽にご相談ください。
      </p>

      <h2 id="services">お手伝いできること</h2>
      <div className="not-prose my-5 grid gap-3 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="rounded-xl border border-stone-200 bg-white p-4"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
                {s.icon}
              </span>
              <span className="text-sm font-bold text-stone-900">{s.title}</span>
            </div>
            <p className="m-0 mt-2 text-[13px] leading-relaxed text-stone-600">
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <h2 id="flow">ご相談からの流れ</h2>
      <div className="not-prose my-5 space-y-3">
        {FLOW.map((p, i) => (
          <div
            key={p.title}
            className="relative rounded-xl border border-stone-200 bg-white p-4 pl-12"
          >
            <div className="absolute left-3 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
              {i + 1}
            </div>
            <div className="text-sm font-semibold text-stone-900">{p.title}</div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">{p.body}</p>
          </div>
        ))}
      </div>

      {/* 分析例 — 提案 2 の成果物そのもの。要約カードは置かず、レポートを
          全 12 ページそのまま読めるようにする (めくる / PDF ダウンロード)。 */}
      <h2 id="analysis">
        分析例：データ分析レポート 2026
      </h2>
      <p>
        傾向分析の一例です。自社データ <strong>78,029 件</strong>（2026
        年 7 月 26
        日時点）を、空間・時間・行動・誘引物・先行指標の 5 つの軸で分析しています。全 12
        ページをそのまま掲載しています。
      </p>
      <ReportViewer />
      <p className="text-xs leading-relaxed text-stone-500">
        発行：獣医工学ラボ（リサーチコーディネート株式会社）。ご相談の地域に絞った分析、季節・誘引物別の対策カレンダー、出没直後の対応ルールの設計、定期レポートも承ります。
      </p>

      <h2 id="faq">よくあるご質問</h2>
      <div className="not-prose my-4 space-y-2">
        {FAQ.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-stone-200 bg-white open:bg-stone-50"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm font-semibold text-stone-900 marker:hidden [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <span className="shrink-0 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 group-open:bg-emerald-100 group-open:text-emerald-800">
                ＋
              </span>
            </summary>
            <div className="border-t border-stone-200 px-4 py-3 text-xs leading-relaxed text-stone-700">
              {f.a}
            </div>
          </details>
        ))}
      </div>

      {/* 展示会 — 地図の小さな案内 (ExhibitionNotice) の行き先。予定/開催中と
          実績を日付で自動に分ける (revalidate で日をまたいで更新)。 */}
      <h2 id="exhibitions">展示会</h2>
      <p>
        くまウォッチを展示会でご紹介しています。会場でもご相談を承ります。
      </p>
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
          <div key={group} className="not-prose my-4">
            <p className="mb-2 text-sm font-bold text-stone-700">
              {group === "past" ? "出展実績" : "出展予定"}
            </p>
            <ul className="space-y-2">
              {list.map((e) => {
                const status = exhibitionStatus(e, today);
                return (
                  <li
                    key={e.id}
                    className="rounded-xl border border-stone-200 bg-white p-3"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {status === "ongoing" && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                          出展中
                        </span>
                      )}
                      <span className="font-semibold text-stone-900">{e.name}</span>
                    </div>
                    <p className="m-0 mt-1 text-sm text-stone-600">
                      {formatExhibitionDates(e)}・{e.venue}
                      {e.area && `（${e.area}）`}
                      {e.booth
                        ? `・小間 ${e.booth}`
                        : status !== "past" && "・小間番号は決まり次第お知らせします"}
                    </p>
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-medium text-emerald-700 underline"
                    >
                      詳しく見る（運営会社のお知らせ）
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      {/* お問い合わせ */}
      <h2 id="contact">お問い合わせ</h2>
      <p>
        お困りのことを、そのままお書きください。送信ボタンを押すと、そのまま運営に届きます。担当より 3 営業日以内にご返信いたします。
      </p>
      <ContactForm kind="gov" />
    </PageShell>
  );
}
