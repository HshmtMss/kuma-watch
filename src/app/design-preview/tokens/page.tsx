import type { Metadata } from "next";
import TokenPreview from "@/components/TokenPreview";

export const metadata: Metadata = {
  title: "UI トーン比較プレビュー",
  robots: { index: false, follow: false },
};

export default function TokenPreviewPage() {
  return <TokenPreview />;
}
