import { notFound } from "next/navigation";
import { isLineReleased } from "@/lib/line-flag";
import LineRegisterClient from "@/components/LineRegisterClient";

export const dynamic = "force-dynamic";

/**
 * LINE 内 (LIFF) で開く通知登録ページ。
 *
 * 友だち追加後のメッセージや、Web 側の「LINEで通知を受け取る」導線から
 * https://liff.line.me/{LIFF_ID}?... で開かれる。クエリで登録対象を渡す:
 *   ?pref=東京都&city=八王子市       … 市町村
 *   ?slug=takao&name=高尾山          … 観光地
 *   ?lat=35.6&lon=139.2&label=自宅&radiusKm=10 … 任意地点
 * クエリが無ければ「現在の登録一覧」だけを表示する (管理用)。
 *
 * 実際の LIFF 初期化・idToken 取得・購読 API 呼び出しはクライアント側
 * (LineRegisterClient) で行う。
 */

type SearchParams = {
  pref?: string;
  city?: string;
  slug?: string;
  name?: string;
  lat?: string;
  lon?: string;
  label?: string;
  radiusKm?: string;
};

export default async function LineRegisterPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  if (!isLineReleased()) notFound();
  const sp = await searchParams;

  // 登録対象を 1 つに正規化 (muni / spot / geo の排他)。
  let target: React.ComponentProps<typeof LineRegisterClient>["target"] = null;
  if (sp.pref && sp.city) {
    target = { kind: "muni", pref: sp.pref, city: sp.city };
  } else if (sp.slug) {
    target = { kind: "spot", slug: sp.slug, name: sp.name };
  } else if (sp.lat && sp.lon) {
    const lat = Number(sp.lat);
    const lon = Number(sp.lon);
    const radiusKm = sp.radiusKm ? Number(sp.radiusKm) : 10;
    if (Number.isFinite(lat) && Number.isFinite(lon)) {
      target = { kind: "geo", lat, lon, radiusKm, label: sp.label };
    }
  }

  return <LineRegisterClient target={target} />;
}
