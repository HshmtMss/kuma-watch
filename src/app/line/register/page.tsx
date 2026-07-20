import Link from "next/link";
import { notFound } from "next/navigation";
import { isLineReleased } from "@/lib/line-flag";
import LineRegisterClient from "@/components/LineRegisterClient";
import HeaderNav from "@/components/HeaderNav";

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

  // 登録後に「地図や他の画面へどう戻るか分からない」を解消するため、サイト共通の
  // ヘッダー(ロゴ=地図へ + メニュー)を常設する。LIFF/Web どちらで開いても、上部の
  // ロゴやメニューから地図・探す・対策などへ移動できる。
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <header className="flex items-center justify-between gap-2 border-b border-stone-200 bg-white px-3 py-2.5 shadow-sm sm:px-5 sm:py-3">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2"
          aria-label="くまウォッチ ホーム（地図）"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="KumaWatch"
            className="block h-8 w-auto sm:h-9"
          />
          <span className="relative top-[2px] truncate text-base font-bold tracking-tight text-stone-900 sm:text-lg">
            くまウォッチ
          </span>
          <span className="relative top-[2px] shrink-0 rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-amber-900">
            BETA
          </span>
        </Link>
        <HeaderNav />
      </header>
      <LineRegisterClient target={target} />
    </div>
  );
}
