import type { Metadata } from "next";
import AdminLineStats from "./AdminLineStats";

export const metadata: Metadata = {
  title: "LINE登録状況｜管理",
  // 管理画面は検索エンジンに載せない
  robots: { index: false, follow: false },
};

export default function AdminLineStatsPage() {
  return <AdminLineStats />;
}
