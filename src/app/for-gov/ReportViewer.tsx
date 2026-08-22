"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

/**
 * データ分析レポートを、要約せずそのまま読ませるビューア。
 *
 * PDF を iframe で埋め込む方法は取らない。iOS の Safari で PDF の埋め込みが
 * 実質的に機能せず (スクロールが効かない/1 ページ目しか出ない)、自治体の閲覧環境で
 * 最も多いスマホで読めなくなるため。ページを webp に書き出して自前で送ることで、
 * 環境差なくめくれるようにする。PDF 本体はダウンロードで別途渡す。
 *
 * スライドは文字が細かいので、画像タップで原寸 (1680px) を別タブに開ける。
 * スマホではそこでピンチ拡大して読む導線になる。
 */

const PDF_HREF = "/for-gov/kumawatch-report-2026.pdf";

// 各ページの見出し。スライド画像は検索エンジンから読めないので、
// 目次相当のテキストをここに持たせる (中身の要約ではなく、原文の見出し)。
const PAGES = [
  "クマ出没の空間動態と秋季ピークに向けたリスク予測（表紙）",
  "01 出没の年間リズム：「10 月の壁」",
  "02 空間分析：危険は奥山ではなく「境界」に潜む",
  "03 「秋型」出没のメカニズム：居住圏への接近",
  "04 出没件数 ≠ 危険度（リスク比較マトリクス）",
  "05 人身被害のコンテキスト：行動別リスク倍率",
  "06 時間的減衰：「一度出た場所」の短期リスク",
  "07 誘引物カレンダー：接触機会の排除",
  "08 予測モデル：ブナ開花指数による「型の事前予測」",
  "09 2026 年 10 月のフォーキャスト（予測と限界）",
  "10 結論：データに基づく 3 つのアクション",
  "本分析について",
];

const TOTAL = PAGES.length;
const src = (i: number) => `/for-gov/report/${String(i + 1).padStart(2, "0")}.webp`;

export default function ReportViewer() {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setI((cur) => {
      const v = next < 0 ? 0 : next > TOTAL - 1 ? TOTAL - 1 : next;
      return v === cur ? cur : v;
    });
  }, []);

  // 次ページを先読みしておく。めくった瞬間に白く抜けるのを防ぐ。
  useEffect(() => {
    if (i + 1 >= TOTAL) return;
    const img = new window.Image();
    img.src = src(i + 1);
  }, [i]);

  // 矢印キーはビューアにフォーカスがある時だけ。ページ全体のスクロールを奪わない。
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(i + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(i - 1);
    }
  };

  return (
    <div className="not-prose my-5">
      <div
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 45) go(dx < 0 ? i + 1 : i - 1);
        }}
        className="overflow-hidden rounded-xl border border-stone-300 bg-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        aria-roledescription="スライドビューア"
        aria-label={`データ分析レポート ${i + 1} / ${TOTAL} ページ`}
      >
        <a
          href={src(i)}
          target="_blank"
          rel="noopener noreferrer"
          title="このページを原寸で開く"
        >
          <Image
            src={src(i)}
            alt={`${i + 1} ページ目：${PAGES[i]}`}
            width={1680}
            height={946}
            priority={i === 0}
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </a>
      </div>

      {/* 操作 */}
      <div className="mt-2 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => go(i - 1)}
          disabled={i === 0}
          className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 disabled:opacity-40 hover:bg-stone-50"
        >
          <ChevronLeft size={14} aria-hidden />前へ
        </button>
        <div className="min-w-0 text-center">
          <div className="text-xs font-semibold text-stone-900">
            {i + 1} / {TOTAL}
          </div>
          <div className="truncate text-[11px] text-stone-500">{PAGES[i]}</div>
        </div>
        <button
          type="button"
          onClick={() => go(i + 1)}
          disabled={i === TOTAL - 1}
          className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 disabled:opacity-40 hover:bg-stone-50"
        >
          次へ<ChevronRight size={14} aria-hidden />
        </button>
      </div>

      {/* ページ番号で直接飛ぶ */}
      <div className="mt-2 flex flex-wrap justify-center gap-1">
        {PAGES.map((t, n) => (
          <button
            key={t}
            type="button"
            onClick={() => go(n)}
            aria-label={`${n + 1} ページ目へ：${t}`}
            aria-current={n === i ? "true" : undefined}
            className={`h-6 w-6 rounded text-[11px] font-semibold ${
              n === i
                ? "bg-emerald-700 text-white"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            {n + 1}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <a
          href={PDF_HREF}
          download
          className="inline-flex items-center gap-1.5 rounded-full bg-stone-800 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-900"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <Download size={14} aria-hidden />
          PDF をダウンロード（全 {TOTAL} ページ・約 0.7MB）
        </a>
      </div>
      <p className="mt-2 text-center text-[11px] text-stone-500">
        画像をタップすると、そのページを原寸で開きます
      </p>
    </div>
  );
}
