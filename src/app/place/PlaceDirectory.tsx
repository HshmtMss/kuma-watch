"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutGrid, MapPin } from "lucide-react";
import CategoryTiles, {
  type CategoryTileItem,
} from "@/components/CategoryTiles";
import PlacePointClient from "@/app/place/PlacePointClient";

/**
 * /place の地域絞り込み + 地点モードをクライアント側で担うコンポーネント。
 *
 * ページを静的 (ISR) に保つため、サーバー側で searchParams を読まず、ここで
 * 絞り込み状態を持つ。client component も SSR されるので、初期状態 (すべて) の
 * 全都道府県リンクは静的 HTML に含まれる (SEO・網羅リンクは維持)。
 *
 * - 地域タブ: クリックで即フィルタ (ページ遷移なし)。?region= のディープリンクは
 *   マウント時に window.location から復元する。
 * - 地点モード: 既存の共有リンク ?lat=&lon= は、マウント時に検出して PlacePointClient
 *   を全画面オーバーレイで出す (従来のバレ表示に相当)。
 */

export type PrefCell = {
  pref: string;
  count365: number;
  count90: number;
  isHot: boolean;
};
export type RegionData = { label: string; cells: PrefCell[] };

type PointMode = { lat: number; lon: number; name?: string; src?: string };

function isValidLat(n: number) {
  return Number.isFinite(n) && n >= 20 && n <= 50;
}
function isValidLon(n: number) {
  return Number.isFinite(n) && n >= 120 && n <= 150;
}

export default function PlaceDirectory({ regions }: { regions: RegionData[] }) {
  const [active, setActive] = useState<string>("all");
  const [point, setPoint] = useState<PointMode | null>(null);

  // マウント時に URL から状態を復元 (useSearchParams を使うと Suspense 境界の
  // fallback が静的 HTML に出て一覧が SSR されないため、window.location を直接読む)。
  // SSR とクライアントで初期値を一致させる (= 既定値) ためにあえて effect 内で
  // 一度だけ setState する意図的な初期化。
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const lat = Number(p.get("lat"));
    const lon = Number(p.get("lon"));
    if (
      p.get("lat") != null &&
      p.get("lon") != null &&
      isValidLat(lat) &&
      isValidLon(lon)
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPoint({
        lat,
        lon,
        name: p.get("name") ?? undefined,
        src: p.get("src") ?? undefined,
      });
      return;
    }
    const region = p.get("region");
    if (region && regions.some((r) => r.label === region)) setActive(region);
  }, [regions]);

  // 地点モード: 全画面オーバーレイで既存の PlaceCard 表示を出す。
  if (point) {
    return (
      <div className="fixed inset-0 z-[1500] overflow-auto bg-stone-50">
        <PlacePointClient
          lat={point.lat}
          lon={point.lon}
          name={point.name}
          src={point.src}
        />
      </div>
    );
  }

  const selectRegion = (key: string) => {
    setActive(key);
    // 共有できるよう URL も更新する (ページ遷移はしない)。
    const url = key === "all" ? "/place" : `/place?region=${encodeURIComponent(key)}`;
    window.history.replaceState(null, "", url);
  };

  const shown =
    active === "all" ? regions : regions.filter((r) => r.label === active);

  return (
    <>
      <CategoryTiles
        title="地域で絞り込み"
        activeKey={active}
        onSelect={selectRegion}
        items={[
          { key: "all", href: "/place", label: "すべて", icon: LayoutGrid, count: 47 },
          ...regions.map<CategoryTileItem>((r) => ({
            key: r.label,
            href: `/place?region=${encodeURIComponent(r.label)}`,
            label: r.label,
            icon: MapPin,
            count: r.cells.length,
          })),
        ]}
      />

      {shown.map((region) => (
        <section key={region.label} className="not-prose mt-6">
          <h2 className="mb-3 text-lg font-bold text-stone-900 sm:text-xl">
            {region.label}
          </h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {region.cells.map((c) => (
              <li key={c.pref}>
                <Link
                  href={`/place/${encodeURIComponent(c.pref)}`}
                  className={`flex flex-col gap-1.5 rounded-xl border bg-white px-3 py-2.5 hover:border-stone-300 hover:bg-stone-50 ${
                    c.isHot ? "border-red-200" : "border-stone-200"
                  }`}
                >
                  <span className="whitespace-nowrap text-base font-semibold text-stone-900">
                    {c.pref}
                  </span>
                  <span className="flex flex-wrap items-baseline gap-1 text-xs">
                    <span
                      className={`rounded-full px-1.5 py-0.5 font-semibold tabular-nums ${
                        c.count365 > 0
                          ? "bg-amber-100 text-amber-900"
                          : "bg-stone-100 text-stone-400"
                      }`}
                    >
                      1年 {c.count365.toLocaleString()}
                    </span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 font-semibold tabular-nums ${
                        c.count90 > 0
                          ? "bg-red-100 text-red-700"
                          : "bg-stone-100 text-stone-400"
                      }`}
                    >
                      90日 {c.count90.toLocaleString()}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
