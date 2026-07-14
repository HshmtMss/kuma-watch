import type { Metadata } from "next";
import AdminAnalytics from "./AdminAnalytics";

export const metadata: Metadata = {
  title: "分析｜管理",
  robots: { index: false, follow: false },
};

export default function AdminAnalyticsPage() {
  return <AdminAnalytics />;
}
