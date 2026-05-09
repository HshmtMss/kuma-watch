"use client";

import { useEffect, useState } from "react";

type Props = {
  /** シェア時の文章に使う。記事タイトル想定。 */
  title: string;
  /** シェア対象 URL。記事の絶対 URL。 */
  url: string;
};

/** 画面右下に固定のフローティングシェアバー。
 *  X / LINE / URL コピー / 先頭へ戻る の 4 ボタン。
 *  スクロール 400px 以上で表示、それ以下は隠れる。
 *  スマホでも親指で押せるサイズ感に。 */
export default function ArticleShare({ title, url }: Props) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enc = encodeURIComponent;
  const shareText = `${title} | くまウォッチ`;
  const xUrl = `https://twitter.com/intent/tweet?text=${enc(shareText)}&url=${enc(url)}`;
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${enc(url)}&text=${enc(shareText)}`;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard API 不可な環境では無視 (古いモバイル等)
    }
  };

  const onTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 flex flex-col gap-2 transition-opacity duration-200 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!show}
    >
      <a
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="X でシェア"
        aria-label="X でシェア"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 shadow-md hover:border-amber-400 hover:bg-amber-50"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      </a>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="LINE でシェア"
        aria-label="LINE でシェア"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-[#06C755] shadow-md hover:border-amber-400 hover:bg-amber-50"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      </a>
      <button
        onClick={onCopy}
        title={copied ? "コピーしました" : "URL をコピー"}
        aria-label={copied ? "URL をコピーしました" : "URL をコピー"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 shadow-md hover:border-amber-400 hover:bg-amber-50"
      >
        {copied ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        )}
      </button>
      <button
        onClick={onTop}
        title="先頭へ戻る"
        aria-label="先頭へ戻る"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-amber-500 text-white shadow-md hover:bg-amber-600"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
