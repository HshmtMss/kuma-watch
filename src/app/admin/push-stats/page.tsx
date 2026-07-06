import type { Metadata } from "next";
import AdminPushStats from "./AdminPushStats";

export const metadata: Metadata = {
  title: "通知登録状況｜管理",
  // 管理画面は検索エンジンに載せない
  robots: { index: false, follow: false },
};

export default function AdminPushStatsPage() {
  return <AdminPushStats />;
}
