import type { MetadataRoute } from "next";

const SITE_URL = "https://kuma-watch.jp";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // クロール予算を実ページに集中させるため、ページではない配信物を除外する。
        //   /api/            … データ API (インデックス対象外)
        //   /design-preview  … 内部プレビュー
        //   /data/boundaries/… 地図描画用の行政界 GeoJSON (47件・クライアント fetch 専用。
        //                       /data ページ本体は前方一致しないので巻き込まない)
        // 注: /_next/static (JS/CSS) と /place/*/opengraph-image は意図的に許可のまま。
        //   前者はレンダリングに必要、後者は SNS シェア時のプレビュー取得に必要なため。
        disallow: ["/api/", "/design-preview", "/data/boundaries/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
