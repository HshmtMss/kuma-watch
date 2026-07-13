"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SubmitWizard from "@/components/SubmitWizard";

// 目撃情報の投稿フォーム。本体は SubmitWizard (LINE 内 /line/submit と共有)。
// ここでは URL クエリ (lat/lon・地図ピッカーからの復帰 fromPicker) を読み取って
// 渡すだけ。地図で選ぶ導線は Web でのみ有効 (enableMapPick)。
function SubmitContent() {
  const sp = useSearchParams();

  // URL クエリから lat/lon を読む。`Number(null) === 0` で (0,0) = アフリカ沖に
  // 飛んでしまう既知バグを避けるため、必ず存在チェックしてから Number() に通す。
  const latParam = sp.get("lat");
  const lonParam = sp.get("lon");
  const initLat =
    latParam !== null && latParam !== "" && Number.isFinite(Number(latParam))
      ? Number(latParam)
      : null;
  const initLon =
    lonParam !== null && lonParam !== "" && Number.isFinite(Number(lonParam))
      ? Number(lonParam)
      : null;

  return (
    <SubmitWizard
      initialLat={initLat}
      initialLon={initLon}
      fromPicker={sp.get("fromPicker") === "1"}
      enableMapPick
    />
  );
}

export default function SubmitPage() {
  return (
    <main className="min-h-[100dvh] bg-gray-50">
      <Suspense
        fallback={
          <div className="p-8 text-center text-base text-gray-500">読み込み中...</div>
        }
      >
        <SubmitContent />
      </Suspense>
    </main>
  );
}
