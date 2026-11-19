"use client";

import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuickQuoteForm from "./QuickQuoteForm";
import { LanguageProvider } from "../context/LanguageContext";
import type { ServiceDetail } from "../data/servicesData";

/**
 * Dedicated design for the Smartflo Cloud Telephony page, in the site's
 * black, white and red colours: ring icons, call-flow diagram and rounded cards.
 */

/* Simple line icons (24x24, stroke) so no extra icon names are needed. */
const ICONS: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  incoming: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M16 2v6h6" />
      <path d="M22 2l-6 6" />
    </>
  ),
  outgoing: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M16 2h6v6" />
      <path d="M16 8l6-6" />
    </>
  ),
  missed: (
    <>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M22 2l-6 6" />
      <path d="M16 2l6 6" />
    </>
  ),
  headset: <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />,
  user: (
    <>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  smartphone: (
    <>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </>
  ),
  server: (
    <>
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01" />
      <path d="M6 18h.01" />
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
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  scale: (
    <>
      <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </>
  ),
  zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </>
  ),
  bag: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  cart: (
    <>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </>
  ),
  cap: (
    <>
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
      <path d="M22 10v6" />
    </>
  ),
  truck: (
    <>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </>
  ),
  car: (
    <>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  bank: (
    <>
      <path d="M3 22h18" />
      <path d="M6 18v-7" />
      <path d="M10 18v-7" />
      <path d="M14 18v-7" />
      <path d="M18 18v-7" />
      <path d="M12 2l8 5H4z" />
    </>
  ),
  health: (
    <>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </>
  ),
  factory: (
    <>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </>
  ),
  film: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M7 2v20" />
      <path d="M17 2v20" />
      <path d="M2 12h20" />
      <path d="M2 7h5" />
      <path d="M2 17h5" />
      <path d="M17 17h5" />
      <path d="M17 7h5" />
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
  megaphone: (
    <>
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </>
  ),
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
  rupee: (
    <>
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.67 0 6.67-10 0-10" />
    </>
  ),
  lock: (
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>
  ),
  laptop: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
    </>
  ),
};

function Icon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

/** Red-ring circle icon. */
function RingIcon({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const box = size === "lg" ? "w-20 h-20" : size === "sm" ? "w-12 h-12" : "w-16 h-16";
  const icon = size === "lg" ? "w-9 h-9" : size === "sm" ? "w-5 h-5" : "w-7 h-7";
  return (
    <span
      className={`${box} shrink-0 rounded-full bg-white border-[3px] border-[#ff4d52] text-[#E31E24] flex items-center justify-center shadow-[0_6px_18px_-6px_rgba(227,30,36,0.45)] ring-4 ring-red-50`}
    >
      <Icon name={name} className={icon} />
    </span>
  );
}

/** Section heading: small red bar, mono eyebrow and title. */
function SectionTitle({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
      <span className="inline-block h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ff4d52] to-[#E31E24] mb-4" />
      <p className="font-mono text-[11px] sm:text-xs font-extrabold tracking-widest uppercase text-[#E31E24] mb-2">// {eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {intro && <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">{intro}</p>}
    </div>
  );
}

/** Light grey swoosh behind sections, echoing the deck backgrounds. */
function Swoosh() {
  return (
    <svg className="pointer-events-none absolute inset-0 w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 420 C 360 300, 720 520, 1440 260 L1440 600 L0 600 Z" fill="#f4f4f5" />
      <path d="M0 470 C 420 360, 820 560, 1440 330" fill="none" stroke="#fecaca" strokeWidth="3" />
    </svg>
  );
}

const CHALLENGES = [
  { icon: "chart", label: "Productivity" },
  { icon: "rupee", label: "Cost optimisation" },
  { icon: "laptop", label: "Remote working" },
  { icon: "scale", label: "Ability to scale" },
  { icon: "users", label: "Business continuity" },
  { icon: "lock", label: "Customer data privacy" },
];

const WHY = [
  {
    icon: "globe",
    title: "Anytime, anywhere communication",
    points: ["Teams take business calls away from their desks", "Agents work from office, home or on the move"],
  },
  {
    icon: "chart",
    title: "Business intelligence",
    points: ["Reports to track agent and project progress", "Call notes, live calls, voice-to-text and sentiment analysis"],
  },
  {
    icon: "server",
    title: "No PBX hardware to maintain",
    points: ["Runs in the cloud, no bulky on-premise equipment", "Works across devices, from landlines to smartphones"],
  },
  {
    icon: "scale",
    title: "Scale up or down on demand",
    points: ["Add or remove users as your team changes", "Adapts quickly when business conditions change"],
  },
  {
    icon: "shield",
    title: "Security and reliability",
    points: ["99.5% platform uptime", "Admin portal with role-based access rights"],
  },
  {
    icon: "headset",
    title: "Better customer experience",
    points: ["Smart IVR menus route each caller to the right person", "Plug-and-play API integration with business apps"],
  },
];

const FLOW = [
  { icon: "user", title: "Customer calls", desc: "From an ad, website, leaflet or invoice" },
  { icon: "hash", title: "Toll-free or virtual number", desc: "One number for the whole business" },
  { icon: "server", title: "Smartflo IVR", desc: "Greeting and menu play, caller chooses an option" },
  { icon: "headset", title: "Right agent answers", desc: "On mobile app, laptop or desk phone" },
  { icon: "chart", title: "Records and reports", desc: "Call logs, recordings and analytics" },
];

const SOLUTIONS = [
  {
    icon: "incoming",
    title: "Inbound solutions",
    points: ["Toll-free number with multi-level IVR", "Virtual numbers", "CRM integration", "Extension-based routing", "Caller input with API lookup"],
  },
  {
    icon: "outgoing",
    title: "Click2Call solutions",
    points: ["Click2Call from the panel or your website", "OTP-based calling", "Number masking", "Cash-on-delivery verification calls"],
  },
  {
    icon: "missed",
    title: "Missed call solutions",
    points: ["SMS-based services", "Missed call with outbound follow-up", "Missed call with an IVR flow"],
  },
  {
    icon: "megaphone",
    title: "Outbound (OBD) solutions",
    points: ["Keypad (DTMF) based outbound campaigns", "Links outbound and inbound call flows", "Text-to-speech reminders"],
  },
];

const FEATURES = [
  { icon: "user", title: "Sticky manager", desc: "Each customer reaches the same agent every time" },
  { icon: "layers", title: "Skill-based routing", desc: "Call flows by department, skill and time zone" },
  { icon: "mic", title: "Sentiment analysis", desc: "Analytics based on customer speech patterns" },
  { icon: "monitor", title: "Live transcription", desc: "Call transcripts visible in the dashboard" },
  { icon: "link", title: "API integration", desc: "Plug-and-play with major CRMs and webhooks" },
];

const SUITE = [
  {
    icon: "headset",
    tag: "Hosted contact centre",
    title: "Run a full call centre from the cloud",
    points: ["Inbound and outbound, progressive and preview dialling", "Built-in CRM integrations", "Sentiment analysis and word-cloud analytics"],
  },
  {
    icon: "megaphone",
    tag: "Outbound marketing",
    title: "One platform for outbound campaigns",
    points: ["Personalised text-to-speech messages", "Campaign responses can feed back into IVR flows", "Keypad inputs linked to your database through an API"],
  },
  {
    icon: "phone",
    tag: "Hosted call connect",
    title: "A complete virtual PBX",
    points: ["Inbound and outbound calling with call patching", "User management with role-based access", "API, webhooks, call logs and a call dashboard"],
  },
  {
    icon: "hash",
    tag: "Multi-level IVR",
    title: "Call routing built around your business",
    points: ["Sticky agent with barge, whisper and transfer", "One pilot number for inbound and outbound", "Number masking for private customer calls"],
  },
];

const INDUSTRIES = [
  { icon: "monitor", label: "IT & ITeS" },
  { icon: "bag", label: "Retail" },
  { icon: "cap", label: "Education" },
  { icon: "film", label: "Entertainment" },
  { icon: "truck", label: "Logistics" },
  { icon: "cart", label: "E-commerce" },
  { icon: "car", label: "Automobile" },
  { icon: "bank", label: "BFSI" },
  { icon: "health", label: "Healthcare" },
  { icon: "factory", label: "Manufacturing" },
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
  "Advice on the right Smartflo setup for your team size and call volume",
  "Number provisioning and paperwork handled for you",
  "IVR call flows planned around how your business actually works",
  "Help connecting Smartflo to your CRM",
  "Training for agents and admins, and one contact for support",
  "Can be paired with a SIP trunk, leased line or broadband from the same partner",
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
              src="/images/services/smartflo-cloud-telephony-business-phone.jpg"
              alt="Business telephone: Smartflo cloud telephony replaces old office phone systems"
              fetchPriority="high"
              className="w-full h-full object-cover object-[center_62%] brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10" />
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
                <span className="px-3 py-0.5 rounded-full bg-black/60 border border-[#ff4d52]/60 text-[#ff4d52] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
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
                    <Icon name="phone" className="w-3.5 h-3.5 text-[#ff4d52]" />
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

        {/* WHAT IS SMARTFLO: quotable answer + quick facts */}
        <section id="overview" className="relative w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-16 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.35fr_1fr] items-start">
            <div>
              <span className="inline-block h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ff4d52] to-[#E31E24] mb-4" />
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
            <dl className="rounded-2xl border border-red-100 bg-gradient-to-b from-red-50/70 to-white divide-y divide-red-100 text-sm overflow-hidden">
              {[
                ["Numbers", "Toll-free and virtual"],
                ["Answer calls on", "Mobile app, laptop, desk phone"],
                ["Call routing", "IVR, skills, time of day"],
                ["Recording and reports", "Included in the dashboard"],
                ["Integrations", "CRM, APIs, webhooks"],
                ["Set up and support", "Adapt India Networks"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-5 py-3">
                  <dt className="text-gray-500">{k}</dt>
                  <dd className="font-semibold text-gray-900 text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* KEY CHALLENGES: ring layout like the deck */}
        <section className="relative w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-white overflow-hidden">
          <Swoosh />
          <div className="relative max-w-6xl mx-auto">
            <SectionTitle
              eyebrow="Common problems"
              title="What Smartflo helps you solve"
              intro="Calls are often the first conversation a customer has with you. These are the problems we hear most from businesses still on desk phones and old PBX systems."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">
              <div className="contents lg:flex lg:flex-col lg:gap-10 lg:items-end">
                {CHALLENGES.slice(0, 3).map((c) => (
                  <div key={c.label} className="flex flex-col lg:flex-row-reverse items-center gap-3 text-center lg:text-right">
                    <RingIcon name={c.icon} />
                    <span className="text-sm sm:text-base font-semibold text-gray-800">{c.label}</span>
                  </div>
                ))}
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-64 h-64 rounded-full p-[10px] bg-gradient-to-br from-[#ff4d52] to-[#E31E24] shadow-[0_20px_60px_-20px_rgba(227,30,36,0.6)]">
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center px-8">
                    <Icon name="phone" className="w-10 h-10 text-[#E31E24] mb-2" />
                    <p className="text-lg font-bold text-gray-900 leading-tight">Smartflo</p>
                    <p className="text-xs text-gray-500 mt-1">Cloud telephony for every team</p>
                  </div>
                </div>
              </div>
              <div className="contents lg:flex lg:flex-col lg:gap-10 lg:items-start">
                {CHALLENGES.slice(3).map((c) => (
                  <div key={c.label} className="flex flex-col lg:flex-row items-center gap-3 text-center lg:text-left">
                    <RingIcon name={c.icon} />
                    <span className="text-sm sm:text-base font-semibold text-gray-800">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY SMARTFLO: pill cards with circle icon on the edge */}
        <section className="w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <SectionTitle eyebrow="Why Smartflo" title="Why businesses move their calls to Smartflo" />
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {WHY.map((w) => (
                <div key={w.title} className="relative pl-10">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                    <RingIcon name={w.icon} />
                  </div>
                  <div className="ml-4 rounded-r-full rounded-l-2xl bg-white border border-gray-200 shadow-sm pl-10 pr-8 py-5 hover:border-red-200 transition-colors">
                    <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.15em] uppercase text-[#E31E24] mb-2">{w.title}</h3>
                    <ul className="space-y-1">
                      {w.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-gray-700">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff4d52] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL FLOW DIAGRAM */}
        <section className="relative w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionTitle
              eyebrow="How it works"
              title="How a customer call flows through Smartflo"
              intro="The same flow works for a toll-free number, a virtual number on your ads, or extension-based routing inside your office."
            />
            <div className="relative">
              <div className="hidden md:block absolute left-[10%] right-[10%] top-10 h-[3px] bg-gradient-to-r from-[#ff4d52] via-[#E31E24] to-[#ff4d52]" />
              <ol className="relative grid gap-8 md:grid-cols-5">
                {FLOW.map((f, i) => (
                  <li key={f.title} className="flex md:flex-col items-center md:text-center gap-4">
                    <div className="relative">
                      <RingIcon name={f.icon} size="lg" />
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#ff4d52] to-[#E31E24] text-white text-[11px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900">{f.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* KEY SOLUTIONS */}
        <section className="w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <SectionTitle eyebrow="Solutions" title="Inbound, outbound, click-to-call and missed call" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SOLUTIONS.map((s) => (
                <div key={s.title} className="rounded-2xl bg-white border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <RingIcon name={s.icon} />
                  <h3 className="mt-4 mb-3 text-xs sm:text-[13px] font-bold tracking-[0.15em] uppercase text-gray-900">{s.title}</h3>
                  <ul className="space-y-1.5 text-left w-full">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-gray-700">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff4d52] shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["CPaaS", "Communication platform as a service"],
                ["CCaaS", "Contact centre as a service"],
                ["OBD", "Outbound campaigns"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-gradient-to-r from-[#ff4d52] to-[#E31E24] text-white px-5 py-3 flex items-center gap-3">
                  <span className="text-lg font-black">{k}</span>
                  <span className="text-xs sm:text-sm text-white/90">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-red-100 bg-white p-6 sm:p-8">
              <h3 className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#E31E24] mb-6">Special features</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {FEATURES.map((f) => (
                  <div key={f.title} className="flex flex-col items-center text-center gap-2">
                    <RingIcon name={f.icon} size="sm" />
                    <p className="text-sm font-bold text-gray-900">{f.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION SUITE */}
        <section className="relative w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-white overflow-hidden">
          <Swoosh />
          <div className="relative max-w-6xl mx-auto">
            <SectionTitle eyebrow="Solution suite" title="Contact centre, campaigns, virtual PBX and IVR" />
            <div className="grid gap-8 md:grid-cols-2">
              {SUITE.map((s) => (
                <div key={s.tag} className="relative pl-12">
                  <div className="absolute left-0 top-8 z-10">
                    <RingIcon name={s.icon} size="lg" />
                  </div>
                  <div className="ml-4 h-full rounded-[2rem] bg-white border border-gray-200 shadow-sm pl-14 pr-6 py-6">
                    <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E31E24]">{s.tag}</p>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-1 mb-3 pb-3 border-b border-red-100">{s.title}</h3>
                    <ul className="space-y-1.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-gray-700">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff4d52] shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <SectionTitle eyebrow="Industries" title="Cloud telephony for every industry" />
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-y-10 gap-x-4">
              {INDUSTRIES.map((ind) => (
                <div key={ind.label} className="flex flex-col items-center gap-3">
                  <RingIcon name={ind.icon} size="lg" />
                  <span className="text-sm font-semibold text-gray-800">{ind.label}</span>
                </div>
              ))}
            </div>

            <h3 className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#E31E24] mt-16 mb-6">Who uses it</h3>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {USE_CASES.map((u) => (
                <div key={u.title} className="rounded-2xl bg-white border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#ff4d52] to-[#E31E24] px-5 py-2.5 text-white text-sm font-bold">{u.title}</div>
                  <p className="p-5 text-sm text-gray-700 leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY BUY THROUGH ADAPT INDIA */}
        <section className="w-full px-4 sm:px-8 lg:px-14 py-14 sm:py-16 bg-[#111214] text-white">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
            <div>
              <span className="inline-block h-1.5 w-16 rounded-full bg-gradient-to-r from-[#ff4d52] to-[#E31E24] mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Get Smartflo through Adapt India Networks</h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                We have been working with businesses across India since 2015. You get Smartflo with a local team that
                plans it, sets it up and stays with you after go-live, and the same team can supply your SIP trunk,
                leased line or broadband.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <Link href="/services/business-communications/" className="text-[#ff4d52] hover:underline">SIP trunk and business calling →</Link>
                <Link href="/services/smart-internet-ill/" className="text-[#ff4d52] hover:underline">Internet leased line →</Link>
                <Link href="/blog/cloud-telephony-sip-trunking-modern-workforce/" className="text-[#ff4d52] hover:underline">Cloud telephony vs SIP trunk guide →</Link>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {PARTNER_POINTS.map((p) => (
                <li key={p} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-zinc-200 flex gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-[#ff4d52] to-[#E31E24] text-white text-xs font-bold flex items-center justify-center shrink-0">✓</span>
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
              <SectionTitle eyebrow="FAQs" title="Smartflo cloud telephony questions" />
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.question} className="group rounded-2xl border border-gray-200 bg-white open:border-red-200 open:shadow-sm">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 text-sm sm:text-base font-semibold text-gray-900">
                      <span>{f.question}</span>
                      <span className="w-7 h-7 rounded-full border-2 border-[#ff4d52] text-[#E31E24] flex items-center justify-center shrink-0 transition-transform group-open:rotate-45">+</span>
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

