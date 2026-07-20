import type { Metadata } from "next";
import AdminOps from "./AdminOps";

export const metadata: Metadata = {
  title: "運用｜管理",
  robots: { index: false, follow: false },
};

export default function AdminOpsPage() {
  return <AdminOps />;
}
