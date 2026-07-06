"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { GeocodeHit } from "@/app/api/geocode/route";

type Props = {
  autofocus?: boolean;
  onPick?: (hit: GeocodeHit) => void;
  compact?: boolean;
};

// 地図検索から観光地(/spot)ページへ橋渡しするための軽量ルックアップ。
// public/spots-lookup.json (build-search-index.ts が生成) を初回入力時に取得。
type SpotLite = { s: string; n: string; p: string; c: string; a?: string };

const SPOT_CAT_EMOJI: Record<string, string> = {
  mountain: "⛰️",
  national_park: "🏞️",
  resort: "♨️",
  gorge: "💦",
  campground: "🏕️",
  sightseeing: "📸",
  onsen: "♨️",
  waterfall: "🌊",
  trailhead: "🥾",
  lake: "🪷",
};

function matchSpots(list: SpotLite[], query: string): SpotLite[] {
  const ql = query.toLowerCase();
  const scored: { s: SpotLite; score: number }[] = [];
  for (const sp of list) {
    const nl = sp.n.toLowerCase();
    let score = 0;
    if (nl === ql) score = 4;
    else if (nl.startsWith(ql)) score = 3;
    else if (nl.includes(ql)) score = 2;
    else if (sp.a && sp.a.toLowerCase().includes(ql)) score = 1;
    if (score > 0) scored.push({ s: sp, score });
  }
  scored.sort((a, b) => b.score - a.score || a.s.n.length - b.s.n.length);
  return scored.slice(0, 4).map((x) => x.s);
}

export default function PlaceSearch({ autofocus = false, onPick, compact = false }: Props) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [hits, setHits] = useState<GeocodeHit[]>([]);
  const [spotHits, setSpotHits] = useState<SpotLite[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const spotsRef = useRef<SpotLite[] | null>(null);

  // 観光地ルックアップを一度だけ取得（初回入力時に遅延ロード）。
  async function ensureSpots(): Promise<SpotLite[]> {
    if (spotsRef.current) return spotsRef.current;
    try {
      const res = await fetch("/spots-lookup.json");
      spotsRef.current = (await res.json()) as SpotLite[];
    } catch {
      spotsRef.current = [];
    }
    return spotsRef.current;
  }

  useEffect(() => {
    if (autofocus) inputRef.current?.focus();
  }, [autofocus]);

  useEffect(() => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    const query = q.trim();
    if (query.length < 2) {
      setHits([]);
      setSpotHits([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    // 観光地マッチはローカルで即時に反映（ジオコーダを待たない）。
    ensureSpots().then((list) => {
      setSpotHits(matchSpots(list, query));
      setOpen(true);
    });
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

  const handleSpotPick = (slug: string) => {
    setOpen(false);
    setQ("");
    inputRef.current?.blur();
    router.push(`/spot/${encodeURIComponent(slug)}`);
  };

  const handlePick = (hit: GeocodeHit) => {
    setOpen(false);
    setQ("");
    inputRef.current?.blur();
    if (onPick) {
      onPick(hit);
      return;
    }
    const params = new URLSearchParams({
      lat: String(hit.lat),
      lon: String(hit.lon),
      name: hit.displayName,
    });
    router.push(`/place?${params.toString()}`);
  };

  // iOS Safari の「検索」キー / Enter 送信時のハンドラ。
  // - 候補があれば先頭を採用（ユーザーは候補を再タップする必要がない）
  // - 候補が無い場合は同期で /api/geocode を再呼び出して最上位を採用
  // - いずれにせよ blur してキーボードを閉じる
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    inputRef.current?.blur();
    if (hits.length > 0) {
      handlePick(hits[0]);
      return;
    }
    // debounce 中で hits が空のときは即座に同期取得
    setLoading(true);
    try {
      const res = await fetch(`/api/geocode?q=${encodeURIComponent(query)}`);
      const data = (await res.json()) as { hits: GeocodeHit[] };
      const top = data.hits?.[0];
      if (top) handlePick(top);
    } catch {
      /* ignore */
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full" role="search">
      <div className="relative">
        <span
          className={`pointer-events-none absolute ${compact ? "left-2.5 text-sm" : "left-3.5 text-lg"} top-1/2 -translate-y-1/2 text-gray-400`}
          aria-hidden
        >
          🔍
        </span>
        <input
          ref={inputRef}
          type="search"
          inputMode="search"
          enterKeyHint="search"
          autoComplete="off"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => (hits.length > 0 || spotHits.length > 0) && setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 150)}
          placeholder={compact ? "地名を入力" : "行き先を入力（例: 上高地 / 奥多摩 / 蔵王）"}
          className={
            compact
              ? // text-base = 16px。iOS Safari は input の font-size が 16px 未満
                // だとフォーカス時に自動拡大し、戻らない。compact でも 16px を死守する。
                "h-10 w-full rounded-full border border-gray-200 bg-white py-1 pl-9 pr-3 text-base text-gray-900 shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              : "h-12 w-full rounded-full border border-gray-200 bg-white py-2 pl-11 pr-4 text-base text-gray-900 shadow-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
          }
        />
      </div>

      {open && (spotHits.length > 0 || hits.length > 0 || loading) && (
        <ul className="absolute left-0 right-0 top-full z-[1100] mt-2 max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white py-1 text-sm shadow-lg">
          {spotHits.length > 0 && (
            <>
              <li className="px-4 pt-1.5 pb-1 text-[11px] font-medium text-gray-400">
                観光地ページ
              </li>
              {spotHits.map((sp) => (
                <li key={`spot-${sp.s}`}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSpotPick(sp.s)}
                    className="flex w-full items-start gap-2 px-4 py-2.5 text-left hover:bg-amber-50"
                  >
                    <span className="text-base" aria-hidden>
                      {SPOT_CAT_EMOJI[sp.c] ?? "📍"}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-gray-900">
                        {sp.n}
                        <span className="ml-1.5 align-middle text-[10px] text-amber-700">
                          観光地 →
                        </span>
                      </span>
                      <span className="block truncate text-[11px] text-gray-500">
                        {sp.p}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
              {(hits.length > 0 || loading) && (
                <li className="mx-4 my-1 border-t border-gray-100" aria-hidden />
              )}
            </>
          )}
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
    </form>
  );
}
