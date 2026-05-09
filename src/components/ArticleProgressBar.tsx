"use client";

import { useEffect, useState } from "react";

/** ページ最上部に固定するスクロール進捗バー。
 *  document.scrollingElement の scrollTop / (scrollHeight - clientHeight) でスムーズに伸びる。
 *  クマ対策の長文記事で、ユーザーが「あとどのくらいか」を判断するための装置。 */
export default function ArticleProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.scrollingElement || document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0;
      setProgress(pct);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
      aria-hidden
    >
      <div
        className="h-full bg-amber-500 transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
