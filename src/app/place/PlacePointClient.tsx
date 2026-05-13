"use client";

import PlaceCard from "@/components/PlaceCard";

/**
 * /place?lat=&lon= でアクセスされた際に PlaceCard をマウントするだけの
 * 薄いクライアントコンポーネント。
 *
 * /place 自体はサーバーコンポーネント (都道府県ディレクトリ + 地点指定の分岐)
 * になったので、地点指定時のみこの client island に切り替える。
 */
export default function PlacePointClient({
  lat,
  lon,
  name,
  src,
}: {
  lat: number;
  lon: number;
  name?: string;
  src?: string;
}) {
  return <PlaceCard lat={lat} lon={lon} initialName={name} src={src} />;
}
