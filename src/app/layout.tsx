import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import WelcomeRequirementModal from "../components/WelcomeRequirementModal";
import ScrollAnimationProvider from "../components/ScrollAnimationProvider";
import JsonLd from "../components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, organizationSchema, websiteSchema } from "../lib/seo";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["monospace"],
  display: "swap",
});

const HOME_TITLE =
  "Leased Line & SD-WAN Provider in Delhi NCR & India | Adapt India";
const HOME_DESCRIPTION =
  "Internet Leased Line (ILL), SD-WAN, MPLS & business broadband in Delhi, Gurgaon, Noida & across India. Tata Tele & ACT partner. Call +91 82874 79961.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Adapt India Network",
  },
  description: HOME_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "internet leased line Delhi",
    "leased line provider in Delhi NCR",
    "ILL connection Gurgaon",
    "leased line Noida",
    "SD-WAN provider India",
    "MPLS service provider India",
    "enterprise broadband Delhi",
    "SIP trunk provider India",
    "Tata Tele Business Services partner",
    "ACT Fibernet enterprise partner",
  ],
  alternates: {
    canonical: "/",
    languages: { "en-IN": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_IN",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "Eit2xn2_l8ZQiNMgsLU8ICkdJM_7IgHvAHyl4tw08y0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${manrope.variable} ${spaceMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Outfit:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="min-h-screen bg-transparent text-black font-sans flex flex-col">
        <LanguageProvider>
          <ScrollAnimationProvider />
          {children}
          <WelcomeRequirementModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
