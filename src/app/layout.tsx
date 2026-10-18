import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { MobileQuoteBar } from "@/components/MobileQuoteBar";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/content/services";
import { comeup } from "@/content/comeup";
import { SITE_URL, site } from "@/lib/site";

// Polices hébergées avec le site, préchargées automatiquement, sous-ensemble latin (couvre le français).
const display = localFont({
  src: "./fonts/bricolage-grotesque-latin-wght-normal.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-bricolage",
  adjustFontFallback: "Arial",
});
const body = localFont({
  src: "./fonts/crimson-pro-latin-wght-normal.woff2",
  weight: "200 900",
  display: "swap",
  variable: "--font-crimson",
  adjustFontFallback: "Times New Roman",
});

// À passer à "true" dans Vercel uniquement quand l'activité est réellement installée à Abidjan.
const basedInAbidjan = process.env.NEXT_PUBLIC_BASED_IN_ABIDJAN === "true";
// Le numéro provisoire contient des X : il n'est jamais publié dans les données structurées.
const hasRealWhatsapp = !/X/i.test(site.whatsapp);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Agence web à Abidjan | Sites, boutiques en ligne, SEO local",
    template: "%s | DigiProspect Agency",
  },
  description:
    "DigiProspect Agency crée des sites web professionnels, des boutiques en ligne et accompagne le référencement local des entreprises en Côte d'Ivoire et à l'international.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    url: SITE_URL,
    title: "Agence web à Abidjan et en Côte d'Ivoire | DigiProspect Agency",
    description: "Sites web, boutiques en ligne et référencement local pour les entreprises de Côte d'Ivoire et d'ailleurs.",
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
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-white">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <MobileQuoteBar />
        <WhatsAppFloat />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfessionalService",
                "@id": `${SITE_URL}/#organization`,
                name: site.name,
                alternateName: site.shortName,
                url: SITE_URL,
                logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-icon.png`, width: 180, height: 180 },
                image: `${SITE_URL}/opengraph-image`,
                description: "Création de sites web, boutiques en ligne et optimisation de fiche Google Business Profile pour les entreprises de Côte d'Ivoire et d'ailleurs.",
                knowsLanguage: "fr",
                areaServed: [
                  { "@type": "City", name: "Abidjan" },
                  { "@type": "Country", name: "Côte d'Ivoire" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Services de DigiProspect Agency",
                  itemListElement: services.map((s) => ({
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}${s.path}` },
                  })),
                },
                sameAs: Array.from(new Set([comeup.url, site.comeup].filter(Boolean))),
                ...(site.email ? { email: site.email } : {}),
                ...(hasRealWhatsapp
                  ? { contactPoint: { "@type": "ContactPoint", contactType: "customer service", url: `https://wa.me/${site.whatsapp}`, availableLanguage: "fr" } }
                  : {}),
                // Aucune adresse n'est publiée tant que NEXT_PUBLIC_BASED_IN_ABIDJAN n'est pas "true".
                ...(basedInAbidjan ? { address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" } } : {}),
              },
              { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: site.name, inLanguage: "fr", publisher: { "@id": `${SITE_URL}/#organization` } },
            ],
          }}
        />
      </body>
    </html>
  );
}
