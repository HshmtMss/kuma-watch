"use client";

// 印刷ダイアログを開くだけの client component。
// ページ本体を Server Component に保つため別ファイルに切り出している。
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-1 rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
    >
      印刷 / PDF 保存
    </button>
  );
}
