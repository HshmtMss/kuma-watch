import type { Metadata } from "next";
import DesignPreview from "@/components/DesignPreview";

export const metadata: Metadata = {
  title: "デザイン比較プレビュー",
  robots: { index: false, follow: false },
};

export default function DesignPreviewPage() {
  return <DesignPreview />;
}
