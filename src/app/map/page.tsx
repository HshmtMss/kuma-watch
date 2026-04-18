import type { Metadata } from "next";
import KumaClient from "@/components/KumaClient";

export const metadata: Metadata = {
  title: "全国マップ｜出没ピンと生息域ヒートマップ",
  description:
    "全国のクマ出没情報と 5km メッシュの危険度ヒートマップを地図上で確認できます。ピンをタップで詳細、地図をタップで任意地点の予測を表示。",
  alternates: { canonical: "/map" },
};

export default function MapPage() {
  return <KumaClient />;
}
