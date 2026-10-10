import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { BUSINESS_NAME, CITY, EMAIL, PHONE_E164, SITE_URL, STATE } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  display: "swap",
});

const defaultTitle = "SimplyAI Studio | AI Voice Agents for Small Businesses";
const defaultDescription =
  "SimplyAI Studio sets up AI voice agents that answer calls, qualify leads, and book appointments 24/7 for small businesses in San Antonio, Texas and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s",
  },
  description: defaultDescription,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_NAME,
  url: SITE_URL,
  telephone: PHONE_E164,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: CITY,
    addressRegion: STATE,
    addressCountry: "US",
  },
  areaServed: `${CITY}, ${STATE}`,
  priceRange: "$$",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Voice Agent Setup" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered Business Automation" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
