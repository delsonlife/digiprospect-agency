import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
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
  // Redirections : ajouter ici les anciennes URL de digiprospectagency.com
  // si elles doivent être conservées. Exemple :
  // async redirects() { return [{ source: "/ancienne-page", destination: "/creation-site-web-abidjan", permanent: true }]; },
};

export default nextConfig;
