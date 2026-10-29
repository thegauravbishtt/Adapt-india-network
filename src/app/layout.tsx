import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import WelcomeRequirementModal from "../components/WelcomeRequirementModal";
import ScrollAnimationProvider from "../components/ScrollAnimationProvider";

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

export const metadata: Metadata = {
  title: "Adapt India Network - Next-Gen Telecom, SD-WAN & Enterprise Networking Solutions",
  description:
    "ADAPT India Network delivers tailored enterprise IT, SD-WAN, Internet Leased Line (ILL), Managed WiFi, MPLS, and Cloud Telephony solutions with guaranteed 99.5% uptime SLA backend connectivity across India.",
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
      lang="en"
      className={`${manrope.variable} ${spaceMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Outfit:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@700;800&display=swap"
          rel="stylesheet"
        />
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
