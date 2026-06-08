import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import NotificationManager from "@/components/NotificationManager";
import { isPushReleased } from "@/lib/push-flag";

// 個人設定ページなので検索インデックスはさせない。
export const metadata: Metadata = {
  title: "通知設定 | KumaWatch",
  description: "登録中のクマ出没通知（市町村・観光地）の確認と解除。",
  robots: { index: false, follow: false },
};

export default function NotificationsPage() {
  // 通知機能自体が未公開のときはページも出さない。
  if (!isPushReleased()) notFound();

  return (
    <PageShell
      title="通知設定"
      lead="この端末で登録中のクマ出没通知を確認・解除できます。"
    >
      <NotificationManager />
    </PageShell>
  );
}
