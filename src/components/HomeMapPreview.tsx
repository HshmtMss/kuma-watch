"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const KumaMap = dynamic(() => import("@/components/KumaMap"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-50 via-emerald-50 to-sky-50">
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="inline-block h-3 w-3 animate-pulse rounded-full bg-amber-500" />
        地図を読み込み中...
      </div>
    </div>
  ),
});

export default function HomeMapPreview() {
  return (
    <div className="relative h-56 w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-sm sm:h-72">
      <KumaMap records={[]} showHeatmap={true} center={[37.0, 138.5]} zoom={6} />

      <Link
        href="/map"
        className="absolute right-3 top-3 z-[900] flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-gray-800 shadow backdrop-blur transition hover:bg-white"
      >
        🗺️ 詳しい地図を開く
        <span aria-hidden>→</span>
      </Link>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[900] flex justify-center pb-2">
        <div className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium text-gray-700 shadow backdrop-blur">
          環境省 生息域データ · 全国 9,427 メッシュ
        </div>
      </div>
    </div>
  );
}
