import type { ReactNode } from "react";
import ResearchEnhance from "@/components/ResearchEnhance";

/**
 * /research/* 配下の全ページに目次 + 「上に戻る」ボタンを差し込むレイアウト。
 * ResearchEnhance はクライアントコンポーネントで、DOM をスキャンして
 * <h2> が 2 個以上ある場合のみ TOC を挿入する。/research index など
 * 長文記事でないページでは何も追加されない。
 */
export default function ResearchLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ResearchEnhance />
    </>
  );
}
