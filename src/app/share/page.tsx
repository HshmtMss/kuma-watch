import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { PawPrint } from "lucide-react";
import ClientRedirect from "./ClientRedirect";
import { reversePlaceName } from "@/lib/reverse-place";

const SITE_URL = "https://kuma-watch.jp";

// label は URL に載せない (共有 URL を短く保つ)。地名はサーバー側で lat/lon から
// 逆ジオコーディングして得る。旧共有リンク互換のため label が来たら尊重する。
type SP = { lat?: string; lon?: string; label?: string };
type Props = { searchParams: Promise<SP> };

// lat/lon のみのクエリ (label は含めない)。
function latLonQuery(sp: SP): string {
  const params = new URLSearchParams();
  if (sp.lat) params.set("lat", sp.lat);
  if (sp.lon) params.set("lon", sp.lon);
  const s = params.toString();
  return s ? `?${s}` : "";
}

async function originFromHeaders(): Promise<string> {
  try {
    const h = await headers();
    const host = h.get("host");
    const proto = h.get("x-forwarded-proto") ?? "https";
    if (host) return `${proto}://${host}`;
  } catch {
    /* fall through */
  }
  return SITE_URL;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams;
  const lat = sp.lat ? Number(sp.lat) : NaN;
  const lon = sp.lon ? Number(sp.lon) : NaN;
  const geo =
    Number.isFinite(lat) && Number.isFinite(lon)
      ? await reversePlaceName(await originFromHeaders(), lat, lon)
      : null;
  // 解決順: 逆ジオコーディング > 旧リンクの label > 「この地点」。
  const label = geo ?? sp.label?.slice(0, 40) ?? "この地点";
  const title = `${label}周辺のクマ情報｜KumaWatch`;
  const description = `${label}周辺のクマ警戒レベル・最新の出没情報を KumaWatch でチェック。散策・登山前のひと確認に。`;

  const q = latLonQuery(sp);
  const sharePath = `/share${q}`;
  const ogPath = `/share/og${q}`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${sharePath}` },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: "KumaWatch",
      url: `${SITE_URL}${sharePath}`,
      title,
      description,
      images: [
        {
          url: ogPath,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogPath],
    },
    robots: { index: false, follow: true },
  };
}

export default async function SharePage({ searchParams }: Props) {
  const sp = await searchParams;
  // リダイレクト先の地図には label を渡さない。渡すと「← <地名> に戻る」戻る
  // ボタンが出て検索バーが隠れ、SNS から来た人に不親切なため。地点名は地図側の
  // 逆ジオコーディングでカードに出る。label は /share の OG カード専用。
  const targetParams = new URLSearchParams();
  if (sp.lat) targetParams.set("lat", sp.lat);
  if (sp.lon) targetParams.set("lon", sp.lon);
  const targetQ = targetParams.toString();
  const target = targetQ ? `/?${targetQ}` : "/";

  return (
    <>
      <ClientRedirect to={target} />
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <PawPrint size={34} className="text-amber-600" aria-hidden />
        <h1 className="mt-3 text-xl font-bold text-stone-900">
          この地点のクマ情報を表示します
        </h1>
        <p className="mt-2 text-sm text-stone-600">
          自動でリダイレクトされない場合は
          <Link href={target} className="ml-1 text-amber-700 underline">
            こちらから地図を開く
          </Link>
        </p>
      </div>
    </>
  );
}
