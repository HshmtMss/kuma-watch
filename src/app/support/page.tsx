import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { isSupporterReleased } from "@/lib/supporter-flag";
import {
  isSupporterConfigured,
  supporterMonthlyUrl,
  supporterOnceUrl,
} from "@/lib/supporter-links";

const SITE_URL = "https://kuma-watch.jp";

// サポーター募集のランディング。「クマ 出没 支援 / 運営 応援」等の着地点。
// 公開フラグ OFF の間は検証用に見られるが noindex に倒す (公開時に index)。
export function generateMetadata(): Metadata {
  const released = isSupporterReleased();
  return {
    title: "くまウォッチをサポートする｜運営を支える月額サポーター",
    description:
      "クマ出没情報の収集・鮮度維持・通知の運用を、サポーターの皆さまのご支援で支えています。出没情報と地図はこれからも無料。支援は任意で、いつでも解約できます。",
    alternates: { canonical: SITE_URL + "/support" },
    robots: { index: released, follow: released },
    openGraph: {
      title: "くまウォッチをサポートする｜KumaWatch",
      description:
        "情報と地図は無料のまま。運営を支える月額サポーターを募集しています。任意・いつでも解約可。",
      url: SITE_URL + "/support",
    },
  };
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "サポーターにならないと出没情報は見られませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "いいえ。クマ出没の地図と通知はこれからも無料です。サポーターは、その運営を支えるための任意のご支援です。",
      },
    },
    {
      "@type": "Question",
      name: "いつでもやめられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。月額サポーターはいつでも解約できます。解約後も無料の機能はそのままお使いいただけます。",
      },
    },
    {
      "@type": "Question",
      name: "支援金は何に使われますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "出没情報の収集・地図の維持・通知の配信費用など、運営そのものに使います。対象エリアを広げ、情報の鮮度を保つために役立てます。",
      },
    },
  ],
};

export default function SupportPage() {
  const monthly = supporterMonthlyUrl();
  const once = supporterOnceUrl();
  const configured = isSupporterConfigured();

  return (
    <PageShell
      title="くまウォッチをサポートする"
      lead="クマ出没の地図と通知は、これからも無料で守り続けます。その運営を、応援してくださる方の力で支えたいと考えています。"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <h2>なぜサポーターが必要か</h2>
      <p>
        くまウォッチは、全国のクマ出没情報を集め、地図に落とし、危険が近づいた地域に
        通知を届けています。情報を「新しく・正確に」保ち続けるには、データの収集や
        地図・通知の配信に日々コストがかかります。
      </p>
      <p>
        それでも、命に関わる情報を誰かにだけ閉じたくはありません。だから
        <strong>出没情報と地図は無料のまま</strong>にしたい。その運営を、
        「役に立った」と感じてくださる方のご支援で支えるのがサポーターです。
      </p>

      <h2>ご支援でできること</h2>
      <ul>
        <li>対象エリアを広げる（情報の空白地域を減らす）</li>
        <li>情報の鮮度を保つ（新しい出没をより早く反映する）</li>
        <li>地図と通知を、無料のまま提供し続ける</li>
      </ul>

      <h2>サポーターへのお礼</h2>
      <p>見返りのためではなく応援としてお願いしていますが、ささやかなお礼を用意しています。</p>
      <ul>
        <li>サイトの「提供」欄に、希望される方はお名前（ニックネーム可）を掲載</li>
        <li>広告のない、すっきりした表示</li>
        <li>月次のまとめ（出没の傾向）を先行してお届け</li>
      </ul>

      <h2>サポーターになる</h2>
      {configured ? (
        <div className="not-prose my-4 flex flex-col gap-3 sm:flex-row">
          {monthly && (
            <a
              href={monthly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
            >
              月額サポーターになる
            </a>
          )}
          {once && (
            <a
              href={once}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-600 bg-white px-6 py-3.5 text-base font-bold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
            >
              一度だけ支援する
            </a>
          )}
        </div>
      ) : (
        <p className="not-prose my-4 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-600">
          サポーター募集は準備中です。もうしばらくお待ちください。
        </p>
      )}

      <p className="text-sm text-stone-500">
        ご支援は任意です。サポーターにならなくても、これまでどおり無料でお使いいただけます。
      </p>

      <hr />
      <p className="text-sm">
        まずは通知から使ってみたい方は{" "}
        <Link href="/notify" className="font-medium text-emerald-700 hover:underline">
          クマ出没通知を受け取る
        </Link>{" "}
        をご覧ください。
      </p>
    </PageShell>
  );
}
