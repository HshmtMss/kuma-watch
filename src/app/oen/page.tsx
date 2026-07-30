import type { Metadata } from "next";
import OenView from "./OenView";
import { isOenReleased } from "@/lib/oen-flag";

const SITE_URL = "https://kuma-watch.jp";

export const metadata: Metadata = {
  title: "地域を応援する｜クマ・獣害に向き合う地域へ、ふるさと納税で｜KumaWatch",
  description:
    "クマの出没は、地域が抱える課題の入り口です。獣害・里山・生物多様性に向き合う地域を、ふるさと納税で応援できます。KumaWatch は「知る・備える・支える」をつなぎます。",
  alternates: { canonical: `${SITE_URL}/oen` },
  // 段階公開の間は検索に出さない。
  robots: isOenReleased() ? undefined : { index: false, follow: false },
};

function first(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

/**
 * /oen 汎用ハブ（ヘッダー導線）。?pref=&city= が付けば地域固有の説明も出す。
 * 出没通知からのクリーンな着地はパス版 /oen/[pref]/[muni] を使う。
 */
export default async function OenPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  return <OenView pref={first(sp.pref)} city={first(sp.city)} />;
}
