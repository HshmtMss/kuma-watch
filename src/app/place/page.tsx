"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PlaceCard from "@/components/PlaceCard";

function PlaceContent() {
  const sp = useSearchParams();
  const lat = Number(sp.get("lat"));
  const lon = Number(sp.get("lon"));
  const name = sp.get("name") ?? undefined;
  const src = sp.get("src") ?? undefined;

  if (
    !Number.isFinite(lat) ||
    !Number.isFinite(lon) ||
    lat < 20 ||
    lat > 50 ||
    lon < 120 ||
    lon > 150
  ) {
    return (
      <div className="mx-auto w-full max-w-xl px-4 py-8">
        <div className="rounded-xl bg-red-50 p-4 text-sm text-red-800">
          地点情報が正しくありません。トップから検索し直してください。
        </div>
        <div className="mt-4">
          <Link
            href="/"
            className="inline-block rounded-full bg-amber-600 px-4 py-2 text-xs font-medium text-white hover:bg-amber-700"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    );
  }

  return <PlaceCard lat={lat} lon={lon} initialName={name} src={src} />;
}

export default function PlacePage() {
  return (
    <main className="min-h-[100dvh] bg-gray-50">
      <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">読み込み中...</div>}>
        <PlaceContent />
      </Suspense>
    </main>
  );
}
