import type { Metadata } from "next";
import { Poppins, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";
import MobileBottomBar from "../components/MobileBottomBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Owlio Works - Full-Stack Digital Marketing, Branding & Growth Agency",
  description:
    "Owlio Works is an integrated digital marketing, branding, and growth agency building creative, performance-driven digital solutions and search systems for ambitious brands worldwide.",
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
      className={`${poppins.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-transparent text-black font-sans flex flex-col">
        <LanguageProvider>
          {children}
          <MobileBottomBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
