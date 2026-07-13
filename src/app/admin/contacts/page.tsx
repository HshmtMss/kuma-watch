import type { Metadata } from "next";
import AdminContacts from "./AdminContacts";

export const metadata: Metadata = {
  title: "問い合わせ｜管理",
  // 管理画面は検索エンジンに載せない
  robots: { index: false, follow: false },
};

export default function AdminContactsPage() {
  return <AdminContacts />;
}
