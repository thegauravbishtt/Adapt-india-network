"use client";

import UpgradeCTA from "@/components/UpgradeCTA";
import JsonLd from "../../components/JsonLd";
import { faqSchema } from "../../lib/seo";
import React, { useState, useMemo } from "react";
import Navbar from "../../components/Navbar";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import Link from "next/link";
import { Search, ChevronDown, ArrowRight, MessageCircle } from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  // Internet Leased Line (ILL)
  {
    id: "ill-1",
    category: "Internet Leased Line (ILL)",
    question: "What is the key technical difference between Adapt India ILL and standard business broadband?",
    answer:
      "Adapt India ILL delivers an uncompressed 1:1 symmetrical connection over underground single-mode optical fiber with zero contention. Unlike commercial broadband which multiplexes bandwidth across dozens of local subscribers (ratios of 1:8 to 1:20), your committed throughput is 100% reserved 24/7/365 and backed by a strict contractual 99.999% SLA.",
  },
  {
    id: "ill-2",
    category: "Internet Leased Line (ILL)",
    question: "Do you allocate static public IPv4 and IPv6 subnet pools?",
    answer:
      "Yes. We provision clean, unblacklisted /29 (8 IPs) or /28 (16 IPs) public IPv4 pools by default, expandable to /27 or /26 upon justification under APNIC/IRINN compliance. IPv6 /48 or /64 dual-stack routing with native BGP peering is fully supported.",
  },
  {
    id: "ill-3",
    category: "Internet Leased Line (ILL)",
    question: "How is physical last-mile fiber redundancy delivered to our building?",
    answer:
      "We engineer true dual-homed optical physical diversity: Path-A enters through the eastern street riser, while Path-B enters through an independent western trench. In case of physical fiber severance due to municipal road excavations, traffic auto-switches in under 50ms via ITU-T G.8032 Ethernet Ring Protection Switching (ERPS).",
  },

  // SD-WAN & MPLS
  {
    id: "sdwan-1",
    category: "SD-WAN & MPLS",
    question: "Can Adapt India Next-Gen SD-WAN replace or augment our legacy MPLS circuits?",
    answer:
      "Yes. Our managed SD-WAN overlays combine your legacy MPLS with high-capacity dedicated fiber and cloud links, executing dynamic packet-by-packet steering. Latency-sensitive traffic (VoIP, SAP ERP, Citrix virtual desktops) automatically routes over the lowest-jitter path, cutting enterprise WAN operational spend by 40-60% while eliminating branch bottlenecks.",
  },
  {
    id: "sdwan-2",
    category: "SD-WAN & MPLS",
    question: "Which hardware firewalls and CPE routers do you deploy and manage?",
    answer:
      "We provide enterprise hardware options from Cisco (Catalyst 9300, ISR 4000/1000 series), Fortinet (FortiGate 100F/200F with unified ZTNA and next-gen firewalls), and Juniper MX series. Customers may also leverage Zero-Touch Provisioning (ZTP) to integrate pre-existing customer premises equipment (CPE).",
  },

  // SLA & Guarantees
  {
    id: "sla-1",
    category: "SLA & Guarantees",
    question: "How is the 99.999% uptime guarantee measured and credited?",
    answer:
      "Availability is tracked continuously via automated NOC telemetry polling at 60-second intervals. Any unplanned downtime exceeding 5.26 minutes across an annual billing cycle triggers contractual billing credits: 10% credit for 99.5%-99.9% availability, 25% credit for 99.0%-99.5%, and 50% service credit for < 99.0% availability.",
  },
  {
    id: "sla-2",
    category: "SLA & Guarantees",
    question: "What is your Mean Time to Repair (MTTR) for fiber optic cuts?",
    answer:
      "We provide a contractual MTTR of under 4 hours across 85+ Tier-1 and Tier-2 industrial clusters. Our regional field vans carry OTDR test equipment, fusion splicers, and armored single-mode spare cable spools on standby 24/7/365.",
  },

  // NOC & Support
  {
    id: "noc-1",
    category: "NOC & Support",
    question: "Who responds when our IT department calls the NOC emergency desk?",
    answer:
      "You are connected directly to Level-2 and Level-3 Cisco/Juniper certified network engineers (CCNA/CCNP/CCIE). We do not route enterprise customers through non-technical customer service scripts or IVR queue delays.",
  },
  {
    id: "noc-2",
    category: "NOC & Support",
    question: "Do clients receive access to live MRTG bandwidth utilization and jitter graphs?",
    answer:
      "Yes. Every client is provisioned with a secure enterprise telemetry portal showing live SNMP MRTG graphs (inbound/outbound throughput), 95th-percentile billing utilization, round-trip latency, jitter histograms, and historical uptime logs.",
  },
];

const CATEGORIES = [
  "All",
  "Internet Leased Line (ILL)",
  "SD-WAN & MPLS",
  "SLA & Guarantees",
  "NOC & Support",
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("ill-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <LanguageProvider>
      <JsonLd data={faqSchema(FAQS_DATA)} />
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip">
        <Navbar />

        <main className="flex-1 w-full">
          {/* 1. HERO BANNER (Full-Bleed Photographic Background - Sleek Compact Ribbon) */}
          <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Full Background Image with Directional Dark Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-faq.jpg"
                alt="Adapt India Networks Technical Support Helpdesk & Knowledge Base"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.72] contrast-[1.10]"
              />
              {/* Directional gradient to keep photo vibrant on right while text is super legible on left */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10"></div>
            </div>

            {/* Top Row: Back to Home + Global Divider Line */}
            <div className="relative z-20 max-w-7xl mx-auto w-full mb-3 sm:mb-4">
              <div className="flex items-center justify-between gap-4 pb-2.5 sm:pb-3 border-b border-white/20">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
                >
                  <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                  <span>BACK TO HOME</span>
                </Link>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-0.5 rounded-full bg-black/60 border border-sky-500/40 text-[#38bdf8] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    // KNOWLEDGE BASE
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content: Title, Description & Search Bar */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                
                <div className="flex flex-col items-start text-left max-w-3xl">
                  {/* Category Tagline */}
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#38bdf8] uppercase mb-1.5 block">
                    // HELP &amp; ESCALATION PROTOCOLS
                  </span>

                  {/* Display Title */}
                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                    FREQUENTLY ASKED QUESTIONS
                  </h1>

                  <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                    Quick answers regarding enterprise leased lines, SD-WAN SLAs, SIP Trunk routing, cloud interconnects, and 24/7/365 NOC technical escalation protocols.
                  </p>

                  {/* Search Bar in Banner */}
                  <div className="w-full max-w-md relative">
                    <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search questions by topic, SLA, hardware..."
                      className="w-full pl-10 pr-4 py-2.5 bg-black/60 border border-white/20 backdrop-blur-md rounded-xl text-xs sm:text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-[#38bdf8] transition-all shadow-md"
                    />
                  </div>
                </div>

                {/* Right Side: Scroll Down Indicator */}
                <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                  <span>SCROLL DOWN</span>
                  <a
                    href="#faqs-list"
                    className="w-9 h-9 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#38bdf8] hover:bg-black/70 hover:border-white transition-all animate-bounce"
                  >
                    ↓
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* 2. FAQS LIST SECTION */}
          <section className="w-full py-12 sm:py-18 px-4 sm:px-8 lg:px-14 xl:px-20 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col gap-8">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      activeCategory === cat
                        ? "bg-[#0066FF] text-white shadow-xs"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-black"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Accordion List */}
              <div className="divide-y divide-zinc-200 border-y border-zinc-200 text-left">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => {
                    const isOpen = openId === faq.id;
                    return (
                      <div key={faq.id} className="py-5 sm:py-6">
                        <button
                          type="button"
                          onClick={() => toggleItem(faq.id)}
                          className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                        >
                          <span className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-black">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-zinc-900" : ""
                            }`}
                          />
                        </button>

                        <div hidden={!isOpen} className="pt-3 pr-6 text-sm sm:text-[15px] text-zinc-600 leading-relaxed animate-in fade-in duration-200">
                            <p>{faq.answer}</p>
                          </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="py-12 text-center text-zinc-500 text-sm">
                    No matching questions found. Try another search term.
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>

        <UpgradeCTA title="Still have a question?" text="Speak to our team directly. We'll answer honestly, including when a cheaper option will do the job." />
        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
