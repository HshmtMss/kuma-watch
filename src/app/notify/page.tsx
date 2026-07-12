import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import NotifyLandingCta from "@/components/NotifyLandingCta";
import { isLineEntryReleased } from "@/lib/line-flag";
import { isPushReleased } from "@/lib/push-flag";
import { isLiffConfigured, lineAddFriendUrl } from "@/lib/line-links";

const SITE_URL = "https://kuma-watch.jp";

// 通知獲得用のランディング。/notifications (設定・解除, noindex) とは別に、
// 「クマ 通知 / 熊 アラート」等の検索・SNS/自治体からの共有の着地点として
// インデックスさせる (④)。ここは新規登録の入口に徹する。
export const metadata: Metadata = {
  title: "クマ出没の通知を受け取る｜LINE・ブラウザ通知",
  description:
    "お住まいの地域や登山・キャンプの目的地でクマの新しい出没情報が入ったら、LINE またはブラウザ通知でお届けします。アカウント登録は不要・無料。iPhone でも設定は要りません。解除はいつでもできます。",
  alternates: { canonical: SITE_URL + "/notify" },
  openGraph: {
    title: "クマ出没の通知を受け取る｜KumaWatch",
    description:
      "地域や目的地で新しいクマ出没情報が入ったら LINE・ブラウザ通知でお届け。無料・iPhone 設定不要・いつでも解除。",
    url: SITE_URL + "/notify",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "クマ出没の通知は無料ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、無料です。LINE 通知はアプリを入れたままで受け取れ、アカウント登録も不要です。ブラウザ通知もアカウント登録は要りません。",
      },
    },
    {
      "@type": "Question",
      name: "iPhone でも受け取れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。LINE 通知なら iPhone でも特別な設定は不要です。公式アカウントを友だち追加し、通知を受け取りたい地域や場所を登録するだけです。",
      },
    },
    {
      "@type": "Question",
      name: "通知はいつでも解除できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。LINE 通知はトーク画面から、ブラウザ通知は通知設定ページからいつでも解除できます。",
      },
    },
  ],
};

export default function NotifyLandingPage() {
  const lineHref =
    isLineEntryReleased() && isLiffConfigured() ? lineAddFriendUrl() : null;
  const pushReleased = isPushReleased();

  return (
    <PageShell
      title="クマ出没の通知を受け取る"
      lead="地域や目的地で新しい出没情報が入ったら、その場所に絞ってお知らせします。"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 価値の要点 — 「登録の障壁が低い」ことを最初に伝える。 */}
      <div className="not-prose mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { t: "無料", d: "アカウント登録も不要" },
          { t: "iPhone もOK", d: "特別な設定は要りません" },
          { t: "トークに直接", d: "LINE にそのまま届く" },
          { t: "いつでも解除", d: "手続きは数タップ" },
        ].map((f) => (
          <div
            key={f.t}
            className="rounded-xl border border-stone-200 bg-white px-3 py-3 text-center"
          >
            <div className="text-sm font-bold text-stone-900">{f.t}</div>
            <div className="mt-0.5 text-xs leading-snug text-stone-500">
              {f.d}
            </div>
          </div>
        ))}
      </div>

      {/* 登録 CTA */}
      <div className="not-prose mb-8 rounded-2xl border border-stone-200 bg-stone-50 p-5">
        <p className="mb-3 text-sm leading-relaxed text-stone-700">
          新しいクマの出没情報が入ると、登録した地域・場所の周辺に絞ってお知らせします。
          まずは受け取り方を選んでください。
        </p>
        <NotifyLandingCta lineHref={lineHref} />
        <p className="mt-3 text-xs leading-relaxed text-stone-500">
          LINE の場合、初回は公式アカウントの友だち追加が必要です。追加後のメッセージから、
          受け取りたい地域や場所を登録できます。
        </p>
      </div>

      {/* 仕組み */}
      <h2>受け取りまでの流れ</h2>
      <ol>
        <li>
          <strong>受け取り方を選ぶ</strong> —
          LINE なら公式アカウントを友だち追加、ブラウザ通知なら地図や地域ページで「通知する」を押します。
        </li>
        <li>
          <strong>場所を登録する</strong> —
          お住まいの市町村、登山・キャンプの目的地、地図で選んだ任意の地点など、通知したい場所を登録します。
        </li>
        <li>
          <strong>新しい出没が入ると届く</strong> —
          報道・自治体の公式情報から新たに登録された出没を、登録地点の周辺に絞ってお知らせします。
        </li>
      </ol>

      {pushReleased && (
        <>
          <h2>LINE を使っていない方へ</h2>
          <p>
            ブラウザ通知でも受け取れます。各地域のページや地図で選んだ地点の「通知する」から登録してください。
            アカウント登録は不要・無料です（iPhone は Safari の共有メニューから「ホーム画面に追加」したうえでご利用いただけます）。
          </p>
        </>
      )}

      <p className="text-sm text-stone-500">
        すでに登録している通知の確認・解除は{" "}
        <Link href="/notifications">通知設定ページ</Link> から行えます。
      </p>
    </PageShell>
  );
}
