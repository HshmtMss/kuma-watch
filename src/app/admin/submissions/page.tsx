import type { Metadata } from "next";
import AdminSubmissions from "./AdminSubmissions";

export const metadata: Metadata = {
  title: "投稿モデレーション｜管理",
  // 管理画面は検索エンジンに載せない
  robots: { index: false, follow: false },
};

export default function AdminSubmissionsPage() {
  return <AdminSubmissions />;
}
