"use client";

import { useState, useSyncExternalStore } from "react";
import GeoPushButton from "@/components/GeoPushButton";
import { isPushSupported } from "@/lib/push-support";
import { isGeoPushReleased } from "@/lib/push-flag";
import { isLineEntryReleased } from "@/lib/line-flag";
import { isLiffConfigured, lineRegisterUrl } from "@/lib/line-links";
import { trackNotifyClick, trackEvent, type NotifySurface } from "@/lib/analytics";

/**
 * 地図カード (RiskPanel) の「この場所の出没通知」タイル。
 *
 * NotifyCard (/place・/spot) と同じ思想を、カードの半分の幅に収めた版:
 * LINE を主役に、ブラウザ通知 (Web Push) は「LINE を使っていない方へ」の
 * 控えとして裏に置く。素の iPhone では PushManager が無いので控えの行ごと
 * 消え、LINE 一択になる。
 *
 * 対象は市町村でも観光地でもなく、カードで選ばれた任意座標 (geo)。LIFF へは
 * lat/lon/radiusKm/label をクエリで渡すだけで、購読の実体は /line/register が
 * idToken 検証込みで作る。
 *
 * 表示条件:
 *   - LINE 導線が公開 (isLineEntryReleased) かつ LIFF_ID がある → LINE タイル
 *   - そうでなければ従来どおり GeoPushButton (isGeoPushReleased のとき)
 *   - どちらも無ければ何も出さない
 */

const LINE_GREEN = "#06C755";

/**
 * タイルを出せるか。呼び出し側 (RiskPanel) は 2 列グリッドの片側を
 * このタイルに割り当てるので、出せないときは空セルを作らないよう
 * レンダリング前に判定する。
 */
export function isGeoNotifyAvailable(): boolean {
  return (isLineEntryReleased() && isLiffConfigured()) || isGeoPushReleased();
}

/** Push 対応可否は実行環境で不変なので、購読不要のスナップショットとして読む。 */
const noopSubscribe = () => () => {};
const serverSnapshot = () => false;

export default function GeoNotifyTile({
  lat,
  lon,
  label,
  radiusKm = 10,
  surface = "map_card",
}: {
  lat: number;
  lon: number;
  label?: string;
  radiusKm?: number;
  /** GA 計測用。この CTA がどの面に置かれているか (地図カード / 常設ナッジ)。 */
  surface?: NotifySurface;
}) {
  const pushSupported = useSyncExternalStore(
    noopSubscribe,
    isPushSupported,
    serverSnapshot,
  );
  // 「LINE を使っていない方」を開くとブラウザ通知に切り替わる。切り替えた地点を
  // 覚えておき、カードが別の地点に変わったら既定 (LINE) に戻す。
  const point = `${lat},${lon}`;
  const [pushFor, setPushFor] = useState<string | null>(null);
  const showPush = pushFor === point;

  const pushReleased = isGeoPushReleased();
  const lineHref = isLineEntryReleased()
    ? lineRegisterUrl({ kind: "geo", lat, lon, radiusKm, label })
    : null;

  if (!lineHref) {
    return pushReleased ? (
      <GeoPushButton
        lat={lat}
        lon={lon}
        label={label}
        radiusKm={radiusKm}
        compact
        surface={surface}
      />
    ) : null;
  }
  if (showPush) {
    return (
      <GeoPushButton
        lat={lat}
        lon={lon}
        label={label}
        radiusKm={radiusKm}
        compact
        surface={surface}
      />
    );
  }

  return (
    <div className="not-prose flex flex-col justify-center rounded-xl border border-emerald-200 bg-emerald-50/70 px-3 py-2.5">
      <div className="mb-1.5 text-sm font-semibold text-emerald-800 sm:text-xs">
        この場所の出没通知
      </div>
      <a
        href={lineHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackNotifyClick({ channel: "line", target: "geo", surface })
        }
        className="flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90"
        style={{ backgroundColor: LINE_GREEN }}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        LINEで受け取る
      </a>
      {pushReleased && pushSupported && (
        <button
          type="button"
          onClick={() => {
            setPushFor(point);
            trackEvent("notify_expand_push", { target: "geo", surface });
          }}
          className="mt-1.5 text-[11px] leading-snug text-emerald-800/70 underline decoration-dotted underline-offset-2 hover:text-emerald-900"
        >
          LINE を使っていない方
        </button>
      )}
    </div>
  );
}
