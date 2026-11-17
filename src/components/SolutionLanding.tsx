import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import UpgradeCTA from "./UpgradeCTA";
import { LanguageProvider } from "../context/LanguageContext";
import type { SolutionPage } from "../data/solutionPages";
import { breadcrumbSchema, faqSchema, serviceSchema, BUSINESS } from "../lib/seo";

interface Props {
  page: SolutionPage;
  path: string;
  crumbs: Array<{ name: string; path: string }>;
  serviceType: string;
  related?: Array<{ name: string; href: string }>;
  relatedTitle?: string;
}

/** Shared layout for industry pages and the internet exchange page. Fully server-rendered. */
export default function SolutionLanding({ page, path, crumbs, serviceType, related = [], relatedTitle }: Props) {
  const whatsapp = `https://wa.me/918287479961?text=${encodeURIComponent(
    `Hi Adapt India Networks, I'd like to know about ${page.name.toLowerCase()} connectivity.`
  )}`;

  return (
    <LanguageProvider>
      <JsonLd
        data={[
          serviceSchema({
            name: page.h1,
            description: page.metaDescription,
            path,
            serviceType,
            areaServed: ["India"],
          }),
          breadcrumbSchema(crumbs),
          faqSchema(page.faqs),
        ]}
      />

      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full">
        <Navbar />

        <main className="flex-1 w-full">
          {/* HERO */}
          <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            <div className="absolute inset-0 z-0">
              <img
                fetchPriority="high"
                src={page.image}
                alt={page.h1}
                className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 pb-3 mb-4 border-b border-white/20 text-xs sm:text-[13px] font-mono font-bold tracking-widest uppercase text-zinc-300"
              >
                {crumbs.map((c, i) => (
                  <React.Fragment key={c.path}>
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {i < crumbs.length - 1 ? (
                      <Link href={c.path} className="hover:text-white">{c.name}</Link>
                    ) : (
                      <span className="text-[#E31E24]">{c.name}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>

              <div className="max-w-3xl">
                <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-2 block">
                  {"// "}{page.name}
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-3 drop-shadow-md">
                  {page.h1}
                </h1>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-5">
                  {page.lead} Authorised partner of Tata Tele Business Services and ACT Fibernet.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-colors"
                  >
                    Ask on WhatsApp
                  </a>
                  <a
                    href={`tel:${BUSINESS.phone.replace(/-/g, "")}`}
                    className="px-5 py-2.5 bg-black/50 hover:bg-black/75 text-white text-xs sm:text-sm font-semibold rounded-md border border-white/20 transition-colors"
                  >
                    Call {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* INTRO */}
          <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto flex flex-col gap-5">
              {page.intro.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-zinc-700 leading-relaxed">{p}</p>
              ))}
            </div>
          </section>

          {/* NEEDS */}
          <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 border-y border-zinc-200">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mb-8">{page.needsTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {page.needs.map((n) => (
                  <div key={n.title} className="bg-white border border-zinc-200 rounded-lg p-5">
                    <h3 className="font-bold text-zinc-950 mb-1.5">{n.title}</h3>
                    <p className="text-sm text-zinc-700 leading-relaxed">{n.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SETUP */}
          <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mb-8">{page.setupTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {page.setup.map((s) => (
                  <div key={s.title} className="border-l-2 border-[#E31E24] pl-4">
                    <h3 className="font-bold text-zinc-950 mb-1.5">{s.title}</h3>
                    <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES + GUIDES */}
          <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 border-y border-zinc-200">
            <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-lg sm:text-2xl font-black font-display text-zinc-950 tracking-tight mb-4">Services we use</h2>
                <ul className="flex flex-col gap-2.5">
                  {page.services.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-sm sm:text-base font-semibold text-zinc-900 hover:text-[#E31E24] hover:underline">
                        {s.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-black font-display text-zinc-950 tracking-tight mb-4">Helpful guides</h2>
                <ul className="flex flex-col gap-2.5">
                  {page.guides.map((g) => (
                    <li key={g.href}>
                      <Link href={g.href} className="text-sm sm:text-base text-zinc-800 hover:text-[#E31E24] hover:underline">
                        {g.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mb-6">Frequently asked questions</h2>
              <div className="flex flex-col divide-y divide-zinc-200 border-y border-zinc-200">
                {page.faqs.map((f) => (
                  <details key={f.question} className="group py-4">
                    <summary className="cursor-pointer list-none flex justify-between gap-4 font-bold text-zinc-950">
                      <h3 className="text-sm sm:text-base">{f.question}</h3>
                      <span className="text-[#E31E24] group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {related.length > 0 && (
            <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 border-t border-zinc-200">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-lg sm:text-xl font-black font-display text-zinc-950 mb-3">{relatedTitle}</h2>
                <ul className="flex flex-wrap gap-2.5">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="inline-block px-3.5 py-1.5 rounded-full border border-zinc-300 text-sm text-zinc-800 hover:border-[#E31E24] hover:text-[#E31E24]"
                      >
                        {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </main>

        <UpgradeCTA
          title={`Talk to us about ${page.name.toLowerCase()}`}
          text="Send us your address and what you need. We'll check which carriers reach your site and come back with options."
          secondaryLabel="Call +91 82874 79961"
          secondaryHref="tel:+918287479961"
        />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
