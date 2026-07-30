import type { Metadata } from "next";
import OenView from "../../OenView";

const SITE_URL = "https://kuma-watch.jp";

// 通知からの個別着地。任意の市町村を受けるので動的。SEO はハブ /oen に集約
// （このパス版は noindex＋canonical=/oen）。数千の市町村×パラメータを
// インデックスさせない。
export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/oen` },
  robots: { index: false, follow: true },
};

/**
 * /oen/秋田県/秋田市 のクリーンなパス版。LINE 通知の「この地域を応援」導線が
 * ここへ着地し、その市町村の説明（クマ対策枠の有無／使い道）を先頭に出す。
 * 日本語をパスに生で入れられる（既存 /place と同じ）ので通知 URL が綺麗。
 */
export default async function OenMuniPage({
  params,
}: {
  params: Promise<{ pref: string; muni: string }>;
}) {
  const { pref, muni } = await params;
  return (
    <OenView pref={decodeURIComponent(pref)} city={decodeURIComponent(muni)} />
  );
}
