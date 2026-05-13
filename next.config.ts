import type { NextConfig } from "next";

const SEO_REDIRECT_SLUGS = [
  "bear-map",
  "kuma-map",
  "kumamori-map",
  "kumamorimap",
  "camping-safety",
  "hiking-safety",
  "mountain-safety",
  "outdoor-safety",
];

const nextConfig: NextConfig = {
  // dev サーバーに LAN (実機スマホ) からアクセスする際の許可ホスト。
  // 本番ビルドには影響しない。
  allowedDevOrigins: ["192.168.11.57", "192.168.11.27", "192.168.11.0/24"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdnjs.cloudflare.com" },
      // Wikipedia REST API 経由で取得した観光地画像のホスト。
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  // sightings.json は public/data/ から CDN 経由で runtime fetch する設計に
  // 切り替えたため、API 関数バンドルへの同梱は廃止。
  // これにより
  //   1. Vercel の関数バンドルが軽くなり cold start が短縮
  //   2. sharp9110-flash / news-flash の高頻度 commit でも
  //      関数を再ビルドせず最新 sightings.json を使える
  // 動作: src/lib/sightings-cache.ts の readBundledSnapshot が
  // ${VERCEL_URL}/data/sightings.json を fetch する。
  async redirects() {
    return [
      ...SEO_REDIRECT_SLUGS.map((slug) => ({
        source: `/${slug}`,
        destination: "/",
        permanent: true,
      })),
      { source: "/map", destination: "/", permanent: true },
      // /sources は /credits に統合済み。Search Console の
      // 「代替ページ」検出を抑えるため permanent (308) で渡す。
      // 旧バックリンクからのアクセスを正規 URL (/credits) に集約する。
      { source: "/sources", destination: "/credits", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Robots-Tag", value: "index, follow" },
        ],
      },
      {
        source: "/icons/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/data/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
