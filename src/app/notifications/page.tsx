import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import NotificationManager from "@/components/NotificationManager";
import { isPushReleased } from "@/lib/push-flag";
import { isLineEntryReleased } from "@/lib/line-flag";
import { lineManageUrl } from "@/lib/line-links";

// 個人設定ページなので検索インデックスはさせない。
export const metadata: Metadata = {
  title: "通知設定 | KumaWatch",
  description: "登録中のクマ出没通知（LINE・ブラウザ通知）の確認と解除。",
  robots: { index: false, follow: false },
};

const LINE_GREEN = "#06C755";

export default function NotificationsPage() {
  const lineHref = isLineEntryReleased() ? lineManageUrl() : null;

  // ブラウザ通知も LINE も未公開なら、確認・解除するものが無いのでページを出さない。
  if (!isPushReleased() && !lineHref) notFound();

  return (
    <PageShell title="通知設定" lead="登録中のクマ出没通知を確認・解除できます。">
      {/* LINE の登録は端末ではなく LINE アカウントに紐づくため、この端末の一覧
          (NotificationManager) には出てこない。解除は LINE 内で開く LIFF ページ
          から行う。ここに導線が無いと、ユーザは解除手段をブロックしか見つけられない。 */}
      {lineHref && (
        <section className="not-prose mb-8 rounded-xl border border-stone-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-stone-900">LINE の通知</h2>
          <p className="mt-1 text-xs leading-relaxed text-stone-600">
            LINE で受け取っている通知は、この端末ではなく LINE
            アカウントに紐づいています。登録した地域の確認と解除は、LINE
            内の設定ページから行ってください。
          </p>
          <a
            href={lineHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: LINE_GREEN }}
          >
            LINE で登録を確認・解除
          </a>
          <p className="mt-2 text-xs leading-relaxed text-stone-500">
            公式アカウントをブロックすると、すべての通知が止まります。
          </p>
        </section>
      )}

      {isPushReleased() && (
        <section>
          <h2 className="not-prose mb-2 text-sm font-semibold text-stone-900">
            ブラウザ通知
          </h2>
          <NotificationManager />
        </section>
      )}
    </PageShell>
  );
}
