import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import JsonLd from "../../../components/JsonLd";
import { LanguageProvider } from "../../../context/LanguageContext";
import { cityPages, getCityBySlug, cityServiceLinks } from "../../../data/locationsData";
import {
  pageMetadata,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  BUSINESS,
} from "../../../lib/seo";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cityPages.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getCityBySlug(city);
  if (!page) return { title: "Location Not Found", robots: { index: false, follow: true } };

  return pageMetadata({
    title: `${page.metaTitle} | Adapt India`,
    description: page.metaDescription,
    path: `/locations/${page.slug}/`,
    image: "/banner-network-matrix.jpg",
    keywords: [
      `leased line ${page.city}`,
      `internet leased line ${page.city}`,
      `ILL provider ${page.city}`,
      `SD-WAN ${page.city}`,
      `MPLS ${page.city}`,
      `business broadband ${page.city}`,
      ...page.altNames.map((n) => `leased line ${n}`),
    ],
  });
}

export default async function CityLandingPage({ params }: CityPageProps) {
  const { city } = await params;
  const page = getCityBySlug(city);
  if (!page) notFound();

  const path = `/locations/${page.slug}/`;
  const nearby = page.nearby
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <LanguageProvider>
      <JsonLd
        data={[
          serviceSchema({
            name: `Internet Leased Line & Enterprise Connectivity in ${page.city}`,
            description: page.metaDescription,
            path,
            serviceType: "Internet Leased Line",
            areaServed: [page.city, ...page.altNames, page.state],
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations/" },
            { name: page.city, path },
          ]),
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
                src="/banner-network-matrix.jpg"
                alt={`Enterprise fibre network for businesses in ${page.city}`}
                className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 pb-3 mb-4 border-b border-white/20 text-xs sm:text-[13px] font-mono font-bold tracking-widest uppercase text-zinc-300"
              >
                <Link href="/" className="hover:text-white">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/locations/" className="hover:text-white">Locations</Link>
                <span aria-hidden="true">/</span>
                <span className="text-[#E31E24]">{page.city}</span>
              </nav>

              <div className="max-w-3xl">
                <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-2 block">
                  {"// "}{page.city}, {page.state}
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-3 drop-shadow-md">
                  {page.h1}
                </h1>
                <p className="text-zinc-200 text-sm sm:text-base leading-relaxed mb-5">
                  Dedicated leased lines, SD-WAN, MPLS and business broadband for businesses in {page.city},
                  from a Delhi-based team working with Tata Tele Business Services and ACT Fibernet.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact/"
                    className="px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-colors"
                  >
                    Check feasibility in {page.city}
                  </Link>
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
              <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight">
                Business internet and networking in {page.city}
              </h2>
              {page.intro.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                  {p}
                </p>
              ))}
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">{page.localNote}</p>
            </div>
          </section>

          {/* SERVICES */}
          <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 border-y border-zinc-200">
            <div className="max-w-6xl mx-auto">
              <span className="font-mono text-xs font-bold text-[#E31E24] uppercase tracking-wider">
                {"// "}Services
              </span>
              <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mt-1 mb-8">
                Connectivity services available in {page.city}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cityServiceLinks.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="block h-full bg-white border border-zinc-200 rounded-lg p-5 hover:border-[#E31E24] transition-colors group"
                    >
                      <h3 className="font-bold text-zinc-950 mb-1.5 group-hover:text-[#E31E24]">
                        {s.name} in {page.city}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">{s.text}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* WHO WE SERVE */}
          <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mb-8">
                Who we connect in {page.city}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {page.segments.map((s) => (
                  <div key={s.title} className="border-l-2 border-[#E31E24] pl-4">
                    <h3 className="font-bold text-zinc-950 mb-1.5">{s.title}</h3>
                    <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AREAS */}
          <section className="w-full bg-[#0c0c0d] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-black font-display tracking-tight mb-2">
                Areas we cover in {page.city}
              </h2>
              <p className="text-sm text-zinc-400 mb-6">
                Availability depends on carrier fibre at your exact address. We confirm feasibility before you commit.
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {page.businessAreas.map((a) => (
                  <li
                    key={a}
                    className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs sm:text-sm text-zinc-200"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight mb-6">
                Leased line questions from {page.city} businesses
              </h2>
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

          {/* NEARBY + CTA */}
          <section className="w-full bg-[#f8f9fa] py-12 sm:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 border-t border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-black font-display text-zinc-950 mb-3">
                  We also serve
                </h2>
                <ul className="flex flex-wrap gap-2.5">
                  {nearby.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/locations/${c.slug}/`}
                        className="inline-block px-3.5 py-1.5 rounded-full border border-zinc-300 text-sm text-zinc-800 hover:border-[#E31E24] hover:text-[#E31E24]"
                      >
                        Leased line in {c.city}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/locations/"
                      className="inline-block px-3.5 py-1.5 rounded-full border border-zinc-300 text-sm text-zinc-800 hover:border-[#E31E24] hover:text-[#E31E24]"
                    >
                      All locations
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="max-w-md">
                <h2 className="text-lg sm:text-xl font-black font-display text-zinc-950 mb-2">
                  Get a quote for your {page.city} office
                </h2>
                <p className="text-sm text-zinc-700 mb-4">
                  Share your address and bandwidth needs. We will check which carriers reach your building and send options.
                </p>
                <Link
                  href="/contact/"
                  className="inline-block px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-sm font-bold uppercase tracking-wider rounded-md"
                >
                  Request a quote
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
