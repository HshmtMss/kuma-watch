import type { Metadata } from "next";
import Link from "next/link";
import ClientRedirect from "./ClientRedirect";

const SITE_URL = "https://kuma-watch.jp";

type SP = { lat?: string; lon?: string; label?: string };
type Props = { searchParams: Promise<SP> };

function buildQuery(sp: SP): string {
  const params = new URLSearchParams();
  if (sp.lat) params.set("lat", sp.lat);
  if (sp.lon) params.set("lon", sp.lon);
  if (sp.label) params.set("label", sp.label);
  const s = params.toString();
  return s ? `?${s}` : "";
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams;
  const label = sp.label?.slice(0, 40) || "選択地点";
  const title = `${label}周辺のクマ情報｜KumaWatch`;
  const description = `${label}周辺のクマ警戒レベル・最新の出没情報を KumaWatch でチェック。散策・登山前のひと確認に。`;

  const sharePath = `/share${buildQuery(sp)}`;
  const ogPath = `/share/og${buildQuery(sp)}`;

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
  const target = `/${buildQuery(sp)}`;
  const label = sp.label?.slice(0, 40) || "選択地点";

  return (
    <>
      <ClientRedirect to={target} />
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <div className="text-3xl">🐻</div>
        <h1 className="mt-3 text-xl font-bold text-stone-900">
          {label} のクマ情報を表示します
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
