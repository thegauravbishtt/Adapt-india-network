"use client";

import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuickQuoteForm from "./QuickQuoteForm";
import { LanguageProvider } from "../context/LanguageContext";
import type { ServiceDetail } from "../data/servicesData";

/**
 * Dedicated layout for the Smartflo Cloud Telephony page, in the site's own
 * black, white and red style.
 */

const PHONE_PATH =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z";

/* Simple line icons (24x24, stroke). */
const ICONS: Record<string, React.ReactNode> = {
  phone: <path d={PHONE_PATH} />,
  hash: (
    <>
      <path d="M4 9h16" />
      <path d="M4 15h16" />
      <path d="M10 3 8 21" />
      <path d="M16 3l-2 18" />
    </>
  ),
  layers: (
    <>
      <path d="M12 2 2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </>
  ),
  click: (
    <>
      <path d={PHONE_PATH} />
      <path d="M16 2h6v6" />
      <path d="M16 8l6-6" />
    </>
  ),
  mic: (
    <>
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <path d="M12 19v3" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  smartphone: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </>
  ),
  missed: (
    <>
      <path d={PHONE_PATH} />
      <path d="M22 2l-6 6" />
      <path d="M16 2l6 6" />
    </>
  ),
};

function Icon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] sm:text-xs font-extrabold tracking-widest text-[#E31E24] uppercase block mb-2">
      // {children}
    </span>
  );
}

const HIGHLIGHTS = [
  { title: "No PBX hardware", desc: "Your phone system runs in the cloud. Nothing to install, repair or replace in the office." },
  { title: "Calls on any device", desc: "Staff take business calls on the mobile app, a laptop or an existing desk phone." },
  { title: "Every call on record", desc: "Call logs, recordings and reports in one dashboard, so no enquiry goes missing." },
];

const FEATURES = [
  { icon: "hash", title: "Toll-free and virtual numbers", desc: "One number for your ads, website and invoices, answered by whichever team is free." },
  { icon: "layers", title: "Multi-level IVR", desc: "\"Press 1 for sales, 2 for support.\" Callers reach the right person without a receptionist." },
  { icon: "click", title: "Click-to-call and number masking", desc: "Call customers from the dashboard or your website, and keep staff and customer numbers private." },
  { icon: "mic", title: "Call recording", desc: "Listen back to calls for training, disputes and quality checks." },
  { icon: "link", title: "CRM integration", desc: "Caller details and call history show up in your CRM through APIs and webhooks." },
  { icon: "smartphone", title: "Mobile app for agents", desc: "Field staff and remote teams stay on the business number wherever they are." },
  { icon: "missed", title: "Missed call follow-up", desc: "Missed calls are logged and can trigger an SMS or a callback, so leads are not lost." },
  { icon: "chart", title: "Live dashboard and reports", desc: "See live calls, queues and agent status, and track how each team is doing." },
];

const STEPS = [
  { title: "Customer calls your number", desc: "A toll-free or virtual number printed on your ads, website or invoices." },
  { title: "IVR greets the caller", desc: "Your welcome message plays and the caller picks an option on the keypad." },
  { title: "Call goes to the right person", desc: "Routed by department, skill or time of day to an agent on mobile, laptop or desk phone." },
  { title: "Everything is logged", desc: "The call, the recording and the outcome appear in the dashboard and your CRM." },
];

const USE_CASES = [
  { title: "Sales teams", desc: "Route enquiries from ads to the right salesperson, and follow up every missed call." },
  { title: "Customer support", desc: "One support number with an IVR, call queues and recordings for quality checks." },
  { title: "Schools and colleges", desc: "Admission enquiries routed to counsellors, with every call tracked through the season." },
  { title: "Delivery and logistics", desc: "Number masking lets drivers and customers talk without sharing personal numbers." },
  { title: "Clinics and hospitals", desc: "Appointment lines with an IVR menu and separate routing for each department." },
  { title: "Multi-branch businesses", desc: "One number for all branches, with calls sent to the nearest or least busy office." },
];

const PARTNER_POINTS = [
  "Advice on the right setup for your team size and call volume",
  "Numbers and paperwork handled for you",
  "IVR call flows planned around how your business works",
  "Help connecting your CRM",
  "Training for your team and admins",
  "One contact for support after go-live",
];

export default function CloudTelephonyPage({ service, heading }: { service: ServiceDetail; heading?: string }) {
  const title = heading ?? service.name;
  const faqs = service.faqs ?? [];

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col overflow-x-clip relative w-full text-gray-900 font-sans">
        <Navbar />

        {/* HERO: same size as the other service banners */}
        <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/services/smartflo-cloud-telephony-banner.jpg"
              alt="Smartflo cloud telephony dashboard and mobile call screen from Adapt India Networks"
              fetchPriority="high"
              className="w-full h-full object-cover object-[75%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/60 lg:hidden z-10" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto w-full mb-3 sm:mb-4">
            <div className="flex items-center justify-between gap-4 pb-2.5 sm:pb-3 border-b border-white/20">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group"
              >
                <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                <span>BACK TO HOME</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href="/services"
                  className="hidden sm:inline-flex text-xs font-mono font-semibold text-zinc-300 hover:text-white uppercase tracking-wider transition-colors"
                >
                  ALL SERVICES
                </Link>
                <span className="hidden sm:inline-block text-zinc-500">/</span>
                <span className="px-3 py-0.5 rounded-full bg-black/60 border border-[#E31E24]/60 text-[#ff4d52] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // {service.category}
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-20 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <div className="flex flex-col items-start text-left max-w-3xl">
                <span className="font-mono text-[11px] sm:text-xs font-extrabold tracking-widest text-[#ff4d52] uppercase mb-1.5 block">
                  // Cloud phone system for business
                </span>
                <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.08] mb-2.5 drop-shadow-md">
                  {title}
                </h1>
                <p className="text-zinc-200 text-xs sm:text-sm font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                  {service.heroSubtitle}
                </p>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="#contact-quote"
                    className="px-5 py-2 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm"
                  >
                    Request a Quote →
                  </a>
                  <a
                    href="tel:+918287479961"
                    className="px-4 py-2 bg-black/50 hover:bg-black/75 text-white text-xs font-semibold rounded-md border border-white/20 backdrop-blur-sm transition-colors flex items-center gap-1.5"
                  >
                    <span>📞</span>
                    <span>Call: +91 82874 79961</span>
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex items-center gap-2.5 text-zinc-300 font-mono text-[11px] font-bold uppercase tracking-wider select-none shrink-0 self-end">
                <span>SCROLL DOWN</span>
                <a
                  href="#overview"
                  className="w-8 h-8 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#ff4d52] hover:bg-black/70 hover:border-white transition-all animate-bounce"
                >
                  ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK HIGHLIGHTS */}
        <section className="w-full py-10 sm:py-14 px-4 sm:px-8 lg:px-14 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <div key={h.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col gap-2 hover:border-gray-300 transition-all">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-[#E31E24] flex items-center justify-center font-bold text-sm">0{i + 1}</div>
                <h3 className="text-base font-bold text-gray-900 mt-1">{h.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT IS IT */}
        <section id="overview" className="w-full bg-white border-b border-gray-200 px-4 sm:px-8 lg:px-14 py-12 sm:py-16 scroll-mt-24">
          <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
            <div>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What is Smartflo cloud telephony?</h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Smartflo is a cloud phone system for businesses. You get toll-free and virtual numbers, an IVR menu,
                call routing, click-to-call, call recording and CRM integration, all managed from a web dashboard and a
                mobile app. There is no PBX box in your office, and your team can answer business calls from anywhere.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Adapt India Networks sets Smartflo up for you: we plan your numbers and call flows, get everything live,
                train your team and stay with you for support, for offices and contact centres across India.
              </p>
            </div>
            <dl className="rounded-xl border border-gray-200 bg-gray-50 divide-y divide-gray-200 text-sm">
              {[
                ["Numbers", "Toll-free and virtual"],
                ["Answer calls on", "Mobile app, laptop, desk phone"],
                ["Call routing", "IVR, skills, time of day"],
                ["Recording and reports", "Included in the dashboard"],
                ["Integrations", "CRM, APIs, webhooks"],
                ["Set up and support", "Adapt India Networks"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-4 py-2.5">
                  <dt className="text-gray-500">{k}</dt>
                  <dd className="font-semibold text-gray-900 text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* FEATURES */}
        <section className="w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-10">
              <Eyebrow>Features</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">What your business phone system can do</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="group rounded-2xl bg-white border border-gray-200 p-6 hover:border-[#E31E24]/40 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-[#E31E24] flex items-center justify-center mb-4 group-hover:bg-[#E31E24] group-hover:text-white transition-colors">
                    <Icon name={f.icon} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-10">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">How a call reaches the right person</h2>
            </div>
            <ol className="grid gap-6 md:grid-cols-4 relative">
              {STEPS.map((s, i) => (
                <li key={s.title} className="relative rounded-2xl border border-gray-200 p-6 bg-white">
                  <span className="font-mono text-4xl font-black text-[#E31E24]/15 absolute top-4 right-5 select-none">0{i + 1}</span>
                  <span className="w-9 h-9 rounded-full bg-[#E31E24] text-white text-sm font-bold flex items-center justify-center mb-4">{i + 1}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* USE CASES */}
        <section className="w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl mb-10">
              <Eyebrow>Who uses it</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">Cloud telephony for every kind of team</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {USE_CASES.map((u) => (
                <div key={u.title} className="rounded-2xl bg-white border border-gray-200 border-t-4 border-t-[#E31E24] p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{u.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ADAPT INDIA */}
        <section className="w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-16 bg-[#0c0c0d] text-white">
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <Eyebrow>Why Adapt India Networks</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">One team to set it up and support it</h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                We have been working with businesses across India since 2015. You get Smartflo with a local team that
                plans it, sets it up and stays with you after go-live, and the same team can supply your SIP trunk,
                leased line or broadband.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <Link href="/services/business-communications/" className="text-[#ff4d52] hover:underline">SIP trunk and business calling →</Link>
                <Link href="/services/smart-internet-ill/" className="text-[#ff4d52] hover:underline">Internet leased line →</Link>
                <Link href="/blog/cloud-telephony-sip-trunking-modern-workforce/" className="text-[#ff4d52] hover:underline">Cloud telephony vs SIP trunk guide →</Link>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {PARTNER_POINTS.map((p) => (
                <li key={p} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-zinc-200 flex gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E31E24] text-white text-xs font-bold flex items-center justify-center shrink-0">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <QuickQuoteForm
          service="Smartflo cloud telephony"
          heading="Get a free Smartflo cloud telephony quote"
          intro="Tell us how many people take calls, which numbers you need and how calls should be routed. We come back with the right Smartflo setup for your team."
          points={[
            "Free consultation on your call flows",
            "Toll-free, virtual numbers and IVR set up for you",
            "One team for setup, training and support",
          ]}
        />

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 text-center">
                <Eyebrow>FAQs</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Smartflo cloud telephony questions</h2>
              </div>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.question} className="group rounded-xl border border-gray-200 bg-white open:border-[#E31E24]/40">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 text-sm sm:text-base font-semibold text-gray-900">
                      <span>{f.question}</span>
                      <span className="w-7 h-7 rounded-full bg-red-50 text-[#E31E24] flex items-center justify-center shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="px-5 pb-5 text-sm text-gray-700 leading-relaxed">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </LanguageProvider>
  );
}
