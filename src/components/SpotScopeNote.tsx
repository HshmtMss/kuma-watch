import { Info } from "lucide-react";

export type SpotScopeNoteProps = {
  /** 地点名。「◯◯を中心とした半径 N km」「◯◯の敷地内」の主語になる。 */
  name: string;
  /** 集計半径 (km)。ページ側の NEAR_RADIUS_KM と必ず揃える。 */
  radiusKm: number;
  /** 表示言語。既定は日本語。 */
  lang?: "ja" | "en";
};

/**
 * このページが何を集めたものかを、状況カードの直下で明示する注記。
 *
 * 背景 (2026-09-04): /spot は OSM の公開地点データから約 2 万地点を自動生成して
 * おり、その中にはキャンプ場・温泉・宿といった民間事業者が 1,400 件超含まれる。
 * ページ表題・H1・状況カードには「周辺 10 km」と明記していたが、紹介文
 * (blurb) の中に出没件数が混ざっていたため、施設紹介と危険情報がひと続きに読め、
 * 「その施設自体が危険」と受け取られうる構造になっていた。実際に施設運営者から
 * その旨の指摘を受けている。
 *
 * 対応は 2 つで、(1) 紹介文から件数を外す (scripts/strip-blurb-counts.mjs)、
 * (2) この注記を全スポットページに常設する。件数そのものは RiskBanner・地図・
 * 一覧に出ており安全情報としては失われない。ここで断つのは「施設名と件数が地の
 * 文で隣り合う」という誤読の経路だけ。
 *
 * 特定の申し出への個別対応ではなく全 /spot 共通の仕様にしているのは、同じ構造の
 * ページが 2 万件あり、申し出のあったページだけ直しても基準が保てないため。
 *
 * 煽らない配色にする (feedback: マップ表示は煽らない)。RiskBanner の警戒色と
 * 競合しないよう、注記は無彩色の stone で置く。
 */
export default function SpotScopeNote({
  name,
  radiusKm,
  lang = "ja",
}: SpotScopeNoteProps) {
  const ja = lang === "ja";
  return (
    <aside className="not-prose mb-6 rounded-xl border border-stone-200 bg-stone-50 p-4">
      <div className="flex items-start gap-2.5">
        <Info
          size={17}
          className="mt-0.5 shrink-0 text-stone-400"
          aria-hidden
        />
        <div className="min-w-0">
          <p className="text-[13px] font-bold text-stone-700">
            {ja ? "このページの見方" : "How to read this page"}
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-stone-600">
            {ja ? (
              <>
                ここに集めているのは、{name} を中心とした半径 {radiusKm} km
                以内で記録されたクマの目撃・痕跡情報です。記録された場所は山林・農地・市街地などさまざまで、
                {name}
                の敷地内で起きたことを示すものではありません。施設や場所そのものの安全性を評価するものでもありません。現地での対策や運営状況は、各施設・自治体の公式情報をご確認ください。
              </>
            ) : (
              <>
                This page collects bear sightings and signs recorded within{" "}
                {radiusKm} km of {name}. They come from forests, farmland and
                towns across that area, and do not indicate incidents inside{" "}
                {name} itself, nor are they an assessment of how safe the site
                or facility is. For on-site precautions, please check the
                official information published by the facility or the local
                government.
              </>
            )}
          </p>
        </div>
      </div>
    </aside>
  );
}
