"use client";

import { useEffect, useState } from "react";

/**
 * /research/* 配下の長文レポート向けクライアント拡張。
 *
 * 1. 目次 (TOC): <main> 内の <h2> を走査し、本文先頭にカード型 TOC を挿入。
 *    - h2 にスラッグ id を自動付与し、クリックでアンカージャンプ。
 *    - h2 が 2 個以上ある時のみ挿入 (短い記事や /research index では出さない)。
 *    - 「参考文献」「監修・編集」などの非本文 h2 は除外。
 * 2. ↑ 戻るボタン: スクロール 400px 超で右下に表示。
 *    - クリックで `window.scrollTo({ top: 0, behavior: "smooth" })`
 *    - 印刷時 (`print:hidden`) と sticky CTA がある下端を避けるため z-index 控えめ。
 *
 * 設計判断: TOC を JS 挿入にしたのは既存の 30+ 自動生成記事 (page.tsx) を
 * 個別に書き換えずに済むため。冒頭の breadcrumb 直後に挿入する。
 */

const SKIP_HEADINGS = new Set(["参考文献", "監修・編集"]);

function slugify(text: string, idx: number): string {
  // 日本語見出しはアルファベット slug 化が難しいので、英数字以外を除去し
  // 残りが空なら順番で sec-N に fall back。アンカージャンプの安定性を優先。
  const base = text
    .replace(/[\s　]+/g, "-")
    .replace(/[^\w\-ぁ-んァ-ヶ一-龯]/g, "")
    .toLowerCase()
    .slice(0, 40);
  return base || `sec-${idx}`;
}

export default function ResearchEnhance() {
  const [showTop, setShowTop] = useState(false);

  // TOC 挿入: ハイドレート直後に DOM を走査して prepend
  useEffect(() => {
    if (typeof document === "undefined") return;
    // 既存挿入チェック (ホットリロードや戻る遷移で二重挿入しない)
    if (document.querySelector("[data-research-toc]")) return;

    const main = document.querySelector("main");
    if (!main) return;
    // /research インデックスは「種別で絞り込み」タイルがナビを担うため TOC を出さない
    // (タイルと目次で月次/週次/テーマ/日次レポートが二重表示になるのを防ぐ)。
    // 目次は個別レポート記事 /research/<slug> でのみ表示する。
    if (window.location.pathname.replace(/\/+$/, "") === "/research") return;
    const allH2 = Array.from(main.querySelectorAll("h2")) as HTMLHeadingElement[];
    // 「参考文献」「監修・編集」を除外
    const h2s = allH2.filter((h) => {
      const t = (h.textContent ?? "").trim();
      return t && !SKIP_HEADINGS.has(t);
    });
    if (h2s.length < 2) return;

    // id 付与
    const items: { id: string; text: string }[] = [];
    const usedIds = new Set<string>();
    h2s.forEach((h, idx) => {
      let id = h.id;
      if (!id) {
        id = slugify((h.textContent ?? "").trim(), idx);
        let unique = id;
        let n = 2;
        while (usedIds.has(unique) || document.getElementById(unique)) {
          unique = `${id}-${n++}`;
        }
        h.id = unique;
        id = unique;
      }
      usedIds.add(id);
      items.push({ id, text: (h.textContent ?? "").trim() });
    });

    const card = document.createElement("nav");
    card.setAttribute("data-research-toc", "true");
    card.setAttribute("aria-label", "目次");
    card.className =
      "not-prose my-6 overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50/50";
    const summary = document.createElement("div");
    summary.className =
      "border-b border-emerald-100 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-900";
    summary.textContent = "目次";
    card.appendChild(summary);
    const ol = document.createElement("ol");
    ol.className = "space-y-1.5 px-5 py-3 text-sm leading-relaxed";
    items.forEach((it, idx) => {
      const li = document.createElement("li");
      li.className = "flex gap-2";
      const num = document.createElement("span");
      num.className = "shrink-0 text-stone-400 tabular-nums";
      num.textContent = String(idx + 1).padStart(2, "0");
      const a = document.createElement("a");
      a.href = `#${it.id}`;
      a.className = "text-emerald-800 hover:underline";
      a.textContent = it.text;
      li.appendChild(num);
      li.appendChild(a);
      ol.appendChild(li);
    });
    card.appendChild(ol);

    // 最初の h2 の直前 (= breadcrumb / リード文の直後) に挿入
    const firstH2 = h2s[0];
    firstH2.parentNode?.insertBefore(card, firstH2);
  }, []);

  // back-to-top の表示制御
  useEffect(() => {
    if (typeof window === "undefined") return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        setShowTop(window.scrollY > 400);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  if (!showTop) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="ページ上部に戻る"
      className="fixed bottom-6 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-stone-300 bg-white text-stone-700 shadow-lg hover:bg-stone-50 active:scale-95 print:hidden"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polyline points="6 14 12 8 18 14" />
      </svg>
    </button>
  );
}
