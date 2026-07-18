import Link from "next/link";
import { Map as MapIcon } from "lucide-react";
import MiniSightingsMap, { type MiniSighting } from "@/components/MiniSightingsMap";

export type SightingsMapBlockProps = {
  /** 見出し。既定は「周辺の目撃マップ」。 */
  heading?: string;
  centerLat: number;
  centerLon: number;
  records: MiniSighting[];
  zoom?: number;
  /** 中央の代表地点マーク（観光地ページで使用）。 */
  showCenterMarker?: boolean;
  /** 中心からの半径円（観光地ページ＝10km 圏を可視化）。 */
  radiusKm?: number;
  /** 行政界 GeoJSON の URL（市町村ページで使用）。 */
  boundaryUrl?: string;
  /** 強調する市町村コード。 */
  boundaryCode?: string;
  /** 行政界を強調する場合の凡例ラベル（例: 「◯◯市の境界」）。
   *  boundaryUrl と併用したときのみ、凡例項目と出典表記を追加する。 */
  boundaryLabel?: string;
  /** 「地図を開く」CTA の href（全国マップを当該地点で開く）。 */
  mapUrl: string;
  /** CTA ラベル（例: 「◯◯ の警戒レベルマップを開く →」）。 */
  ctaLabel: string;
};

/**
 * 周辺の目撃マップ ＋ 凡例 ＋ デスクトップ CTA。/spot と /place/[pref]/[muni] で
 * 共通利用する。以前は両ページに同じマークアップをインライン実装しており、
 * 凡例の文字サイズ（text-xs vs text-[11px]）が片方だけズレていた。ここに一本化する。
 *
 * 凡例は「直近 90 日＝赤 / 1 年以内＝グレー」で統一。行政界（市町村ページのみ）は
 * boundaryUrl と boundaryLabel が揃ったときだけ凡例項目と出典を出す。
 * MiniSightingsMap は Client Component だが、本部品自体は状態を持たないので
 * Server Component のまま合成できる。
 */
export default function SightingsMapBlock({
  heading = "周辺の目撃マップ",
  centerLat,
  centerLon,
  records,
  zoom = 11,
  showCenterMarker,
  radiusKm,
  boundaryUrl,
  boundaryCode,
  boundaryLabel,
  mapUrl,
  ctaLabel,
}: SightingsMapBlockProps) {
  const showBoundary = Boolean(boundaryUrl && boundaryLabel);

  return (
    <>
      <h2>{heading}</h2>
      <div className="not-prose mb-1.5">
        <MiniSightingsMap
          centerLat={centerLat}
          centerLon={centerLon}
          records={records}
          zoom={zoom}
          showCenterMarker={showCenterMarker}
          radiusKm={radiusKm}
          boundaryUrl={boundaryUrl}
          boundaryCode={boundaryCode}
        />
      </div>
      {/* 凡例 — プロット対象は過去 1 年以内。直近 90 日を赤、それ以前（91 日〜1 年）を
          グレーで表示。中央の代表地点マークは利用者の関心と無関係なので凡例から除外。 */}
      <ul className="not-prose mb-2 flex flex-wrap list-none gap-x-4 gap-y-1 text-[11px] text-stone-600">
        <li className="flex items-center gap-1.5">
          <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-red-500" />
          直近 90 日
        </li>
        <li className="flex items-center gap-1.5">
          <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-stone-400" />
          1 年以内
        </li>
        {showBoundary && (
          <li className="flex items-center gap-1.5">
            <span
              aria-hidden
              className="inline-block h-2.5 w-3 rounded-sm border-2 border-blue-600 bg-blue-500/10"
            />
            {boundaryLabel}
          </li>
        )}
      </ul>
      {showBoundary && (
        <p className="not-prose mb-2 text-[10px] text-stone-400">
          行政界データ: 「国土数値情報（行政区域データ）」（国土交通省）を加工して作成
        </p>
      )}
      {/* デスクトップ専用の「マップを開く」CTA — モバイルでは末尾の Sticky CTA が
          同じ役割を担うので hidden sm:block で重複を避ける。ラベルは Sticky CTA と統一。 */}
      <p className="not-prose mb-6 hidden sm:block">
        <Link
          href={mapUrl}
          className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-amber-700"
        >
          <MapIcon size={16} aria-hidden />
          {ctaLabel}
        </Link>
      </p>
    </>
  );
}
