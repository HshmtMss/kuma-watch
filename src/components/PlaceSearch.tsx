"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { GeocodeHit } from "@/app/api/geocode/route";

export default function PlaceSearch({ autofocus = false }: { autofocus?: boolean }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<GeocodeHit[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) inputRef.current?.focus();
  }, [autofocus]);

  useEffect(() => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    const query = q.trim();
    if (query.length < 2) {
      setHits([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    debounceRef.current = window.setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/geocode?q=${encodeURIComponent(query)}`,
        );
        if (!res.ok) throw new Error("geocode failed");
        const data = (await res.json()) as { hits: GeocodeHit[] };
        setHits(data.hits ?? []);
        setOpen(true);
      } catch {
        setHits([]);
      } finally {
        setLoading(false);
      }
    }, 300);
  }, [q]);

  const handlePick = (hit: GeocodeHit) => {
    setOpen(false);
    const params = new URLSearchParams({
      lat: String(hit.lat),
      lon: String(hit.lon),
      name: hit.displayName,
    });
    router.push(`/place?${params.toString()}`);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <span
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-lg text-gray-400"
          aria-hidden
        >
          🔍
        </span>
        <input
          ref={inputRef}
          type="search"
          inputMode="search"
          autoComplete="off"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => hits.length > 0 && setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 150)}
          placeholder="行き先を入力（例: 上高地 / 奥多摩 / 蔵王）"
          className="h-12 w-full rounded-full border border-gray-200 bg-white py-2 pl-11 pr-4 text-base text-gray-900 shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
        />
      </div>

      {open && (hits.length > 0 || loading) && (
        <ul className="absolute left-0 right-0 top-full z-[1100] mt-2 max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white py-1 text-sm shadow-lg">
          {loading && (
            <li className="flex items-center gap-2 px-4 py-2 text-xs text-gray-500">
              <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-amber-600" />
              検索中...
            </li>
          )}
          {!loading &&
            hits.map((hit) => (
              <li key={hit.id}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handlePick(hit)}
                  className="flex w-full items-start gap-2 px-4 py-2.5 text-left hover:bg-amber-50"
                >
                  <span className="text-base" aria-hidden>
                    📍
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-gray-900">
                      {hit.displayName.split(", ").slice(0, 3).join(", ")}
                    </span>
                    {hit.prefecture && (
                      <span className="block truncate text-[11px] text-gray-500">
                        {[hit.prefecture, hit.city].filter(Boolean).join(" / ")}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
