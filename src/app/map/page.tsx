import type { Metadata } from "next";
import KumaClient from "@/components/KumaClient";

export const metadata: Metadata = {
  title: "全国クマ出没マップ",
  description:
    "全国のクマ出没情報を地図で確認できます。都道府県・年度で絞り込み、ヒートマップとピン表示を切り替えて危険度を俯瞰。登山・キャンプ前の安全確認にどうぞ。",
  alternates: { canonical: "https://kuma-watch.jp/map" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "KumaWatch",
    url: "https://kuma-watch.jp/map",
    title: "全国クマ出没マップ｜KumaWatch",
    description:
      "全国のクマ出没情報を地図で確認。ヒートマップ・ピン・フィルタ機能つき。",
  },
};

export default function MapPage() {
  return <KumaClient />;
}
