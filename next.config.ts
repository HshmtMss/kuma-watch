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
  allowedDevOrigins: ["192.168.11.57", "192.168.11.0/24"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdnjs.cloudflare.com" },
    ],
  },
  outputFileTracingIncludes: {
    "/api/kuma": ["public/data/sightings.json"],
    "/api/ask": ["public/data/sightings.json"],
    "/api/summary": ["public/data/sightings.json"],
  },
  async redirects() {
    return [
      ...SEO_REDIRECT_SLUGS.map((slug) => ({
        source: `/${slug}`,
        destination: "/",
        permanent: true,
      })),
      { source: "/map", destination: "/", permanent: true },
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
