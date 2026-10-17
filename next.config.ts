import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    const cacheImages = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];
    return [
      { source: "/images/:path*", headers: cacheImages },
      { source: "/projets/:path*", headers: cacheImages },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [{ source: "/zones-intervention-abidjan", destination: "/zones-intervention", permanent: true }];
  },
  // Redirections : ajouter ici les anciennes URL de digiprospectagency.com
  // si elles doivent être conservées. Exemple :
  // async redirects() { return [{ source: "/ancienne-page", destination: "/creation-site-web-abidjan", permanent: true }]; },
};

export default nextConfig;
