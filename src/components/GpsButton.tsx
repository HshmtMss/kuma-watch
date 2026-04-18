"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GpsButton({ label = "現在地で確認" }: { label?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onClick = () => {
    setError(null);
    if (!navigator.geolocation) {
      setError("お使いのブラウザは位置情報に対応していません");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const params = new URLSearchParams({
          lat: String(pos.coords.latitude),
          lon: String(pos.coords.longitude),
          src: "gps",
        });
        router.push(`/place?${params.toString()}`);
      },
      (err) => {
        setLoading(false);
        if (err.code === err.PERMISSION_DENIED) {
          setError("位置情報の利用を許可してください");
        } else {
          setError("現在地を取得できませんでした");
        }
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 },
    );
  };

  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        disabled={loading}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-5 text-base font-medium text-gray-800 shadow-sm transition hover:border-amber-400 hover:bg-amber-50 disabled:opacity-60"
      >
        <span aria-hidden className="text-lg">📍</span>
        {loading ? "位置情報を取得中..." : label}
      </button>
      {error && <p className="mt-2 text-center text-xs text-red-600">⚠️ {error}</p>}
    </div>
  );
}
