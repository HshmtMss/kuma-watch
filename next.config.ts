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
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdnjs.cloudflare.com" },
    ],
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
