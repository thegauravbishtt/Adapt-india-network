import React from "react";
import UpgradeCTA from "@/components/UpgradeCTA";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { LanguageProvider } from "../../context/LanguageContext";
import { cityPages } from "../../data/locationsData";
import { pageMetadata, breadcrumbSchema } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Leased Line Provider Across India | All Locations | Adapt India",
  description:
    "Pan-India Internet Leased Line, SD-WAN and MPLS: Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, Lucknow & more. Check feasibility.",
  path: "/locations/",
  image: "/banner-network-matrix.jpg",
});

export default function LocationsPage() {
  return (
    <LanguageProvider>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/" },
        ])}
      />
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full">
        <Navbar />
        <main className="flex-1 w-full">
          <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            <div className="absolute inset-0 z-0">
              <img
                src="/halftone-globe.jpg"
                alt="Pan-India enterprise network coverage"
                className="w-full h-full object-cover object-center filter brightness-[0.55]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15 z-10" />
            </div>
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-2 block">
                {"// "}Where we deliver
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-3">
                Leased Line &amp; SD-WAN Locations Across India
              </h1>
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                Our team is based in Saket, New Delhi, and we deliver enterprise connectivity across Delhi NCR,
                Uttar Pradesh and the rest of India through the networks of Tata Tele Business Services and ACT Fibernet.
              </p>
            </div>
          </section>

          <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mb-8">
                Choose your city
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cityPages.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/locations/${c.slug}/`}
                      className="block h-full border border-zinc-200 rounded-lg p-5 hover:border-[#E31E24] transition-colors group"
                    >
                      <h3 className="font-bold text-lg text-zinc-950 group-hover:text-[#E31E24]">
                        Leased line in {c.city}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">{c.state}</p>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {c.businessAreas.slice(0, 4).join(", ")} and more.
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-12 max-w-3xl">
                <h2 className="text-lg sm:text-xl font-black font-display text-zinc-950 mb-2">
                  Your city not listed?
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-4">
                  We deliver leased lines, SD-WAN and MPLS pan-India, including tier-2 and tier-3 cities, industrial
                  estates and remote branch locations. Send us your site addresses and we will check feasibility for each one.
                </p>
                <Link
                  href="/contact/"
                  className="inline-block px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-sm font-bold uppercase tracking-wider rounded-md"
                >
                  Check feasibility
                </Link>
              </div>
            </div>
          </section>
        </main>
        <UpgradeCTA title="Connecting offices in several cities?" text="We handle every location through one team, with one contract and one support desk." />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
