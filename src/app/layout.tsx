import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/figtree";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Agence web à Abidjan | Sites, boutiques en ligne et SEO local",
    template: "%s | DigiProspect Agency",
  },
  description:
    "DigiProspect Agency crée des sites web professionnels, des boutiques en ligne et accompagne le référencement local des entreprises à Abidjan, Côte d'Ivoire.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: SITE_URL,
    title: "Agence web à Abidjan | DigiProspect Agency",
    description: "Sites web, boutiques en ligne et référencement local pour les entreprises d'Abidjan.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-white">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": `${SITE_URL}/#organization`,
                name: site.name,
                url: SITE_URL,
                description: "Création de sites web, boutiques en ligne et référencement local pour les entreprises d'Abidjan.",
                areaServed: { "@type": "City", name: "Abidjan", containedInPlace: { "@type": "Country", name: "Côte d'Ivoire" } },
                ...(site.comeup ? { sameAs: [site.comeup] } : {}),
              },
              { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: site.name, inLanguage: "fr", publisher: { "@id": `${SITE_URL}/#organization` } },
            ],
          }}
        />
      </body>
    </html>
  );
}
