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
 * スマホではそこでピンチ拡大して読む導線になる。左右スワイプでもめくれる。
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

  // 見た目は for-gov.css の .report (夜の地色) に合わせる。
  return (
    <div className="report">
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
        className="frame"
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
            sizes="(max-width: 1040px) 100vw, 1000px"
          />
        </a>
      </div>

      <div className="ctl">
        <span className="ttl">{PAGES[i]}</span>
        <div className="nav">
          <button
            type="button"
            onClick={() => go(i - 1)}
            disabled={i === 0}
            aria-label="前のページ"
          >
            <ChevronLeft size={18} aria-hidden />
          </button>
          <span className="count" aria-live="polite">
            {i + 1} / {TOTAL}
          </span>
          <button
            type="button"
            onClick={() => go(i + 1)}
            disabled={i === TOTAL - 1}
            aria-label="次のページ"
          >
            <ChevronRight size={18} aria-hidden />
          </button>
        </div>
      </div>

      <a href={PDF_HREF} download className="pdf">
        <Download size={14} aria-hidden />
        PDF をダウンロード（全 {TOTAL} ページ・約 0.7MB）
      </a>
    </div>
  );
}
