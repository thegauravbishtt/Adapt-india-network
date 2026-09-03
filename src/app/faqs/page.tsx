"use client";

import React, { useState, useMemo } from "react";
import Navbar from "../../components/Navbar";
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
  // Services
  {
    id: "services-1",
    category: "Services",
    question: "What services does Owlio Works offer?",
    answer:
      "We provide end-to-end digital services including custom web development (Next.js, React, Node.js), mobile app development, technical SEO, Google & Meta paid advertising (PPC), UI/UX design, and AI automation workflows.",
  },
  {
    id: "services-2",
    category: "Services",
    question: "Do you build custom websites or use templates?",
    answer:
      "All our websites and web applications are custom-built from scratch to match your brand identity, business goals, and performance standards.",
  },
  {
    id: "services-3",
    category: "Services",
    question: "Can you help redesign an existing website or application?",
    answer:
      "Yes. We frequently help companies redesign and modernize their existing web platforms to improve user experience, page speed, and conversion rates.",
  },

  // Process & Timelines
  {
    id: "process-1",
    category: "Process",
    question: "How long does a typical project take?",
    answer:
      "Standard corporate websites typically take 2 to 4 weeks from kickoff to launch. More complex web applications, platforms, or custom software usually range between 6 to 12 weeks depending on scope.",
  },
  {
    id: "process-2",
    category: "Process",
    question: "How will we communicate during the project?",
    answer:
      "You will have direct communication with your project lead via Slack or WhatsApp, along with weekly progress reviews and staging links so you can test updates in real time.",
  },
  {
    id: "process-3",
    category: "Process",
    question: "Will the website be mobile-friendly and optimized for Google?",
    answer:
      "Yes. Every site we build is fully responsive across all screen sizes and built with SEO best practices, including fast load times and clean semantic structure.",
  },

  // Pricing & Payments
  {
    id: "pricing-1",
    category: "Pricing",
    question: "How does your pricing work?",
    answer:
      "We offer milestone-based fixed pricing for specific projects, as well as monthly retainers for ongoing development, SEO, and marketing campaigns. We provide a clear, transparent quote before starting any work.",
  },
  {
    id: "pricing-2",
    category: "Pricing",
    question: "Do you work with clients outside of India?",
    answer:
      "Yes. A significant portion of our clients are based in the US, UK, UAE, Australia, and Europe. We accept payments in USD, EUR, GBP, AED, and INR.",
  },

  // Ownership & Support
  {
    id: "support-1",
    category: "Support",
    question: "Who owns the code and design files once the project is finished?",
    answer:
      "You do. Once the final invoice is paid, full ownership of all source code, design assets, and accounts is transferred completely to you.",
  },
  {
    id: "support-2",
    category: "Support",
    question: "Do you provide support after launch?",
    answer:
      "Yes. We include 30 days of post-launch support and bug fixes with every project. We also offer monthly maintenance plans for updates, backups, and security monitoring.",
  },
];

const CATEGORIES = ["All", "Services", "Process", "Pricing", "Support"];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("services-1");

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
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip">
        <Navbar />

        <main className="flex-1 w-full">
          {/* 1. HERO BANNER (Compact Standard Layout) */}
          <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            {/* Real Photography Background */}
            <div className="absolute inset-0 z-0">
              <img
                src="/banner-faq.jpg"
                alt="Owlio Works Team Collaboration"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.75] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/40 z-10"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto w-full">
              {/* Back to Home & Top Tag */}
              <div className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/20 mb-6 sm:mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
                >
                  <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                  <span>BACK TO HOME</span>
                </Link>

                <span className="px-3.5 py-0.5 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // HELP &amp; SUPPORT
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="flex flex-col items-start text-left max-w-2xl">
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#fbea3d] uppercase mb-2 block">
                    // KNOWLEDGE BASE
                  </span>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-display tracking-tight uppercase leading-none mb-2.5 drop-shadow-md">
                    FREQUENTLY ASKED QUESTIONS
                  </h1>
                  <p className="text-zinc-300 text-xs sm:text-sm font-normal max-w-xl leading-relaxed drop-shadow-sm">
                    Everything you need to know about partnering with Owlio Works — our capabilities, project timelines, pricing models, and ongoing support.
                  </p>
                </div>

                {/* Compact Search Bar */}
                <div className="w-full lg:w-80 relative shrink-0">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions..."
                    className="w-full pl-10 pr-3.5 py-2.5 bg-black/70 border border-zinc-700/80 backdrop-blur-md rounded-xl text-xs sm:text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#fbea3d] focus:border-[#fbea3d] transition-all shadow-md"
                  />
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
                        ? "bg-zinc-950 text-[#fbea3d] shadow-xs"
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

                        {isOpen && (
                          <div className="pt-3 pr-6 text-sm sm:text-[15px] text-zinc-600 leading-relaxed animate-in fade-in duration-200">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="py-12 text-center text-zinc-500 text-sm">
                    No matching questions found. Try another search term.
                  </div>
                )}
              </div>

              {/* Contact CTA Box */}
              <div className="bg-[#fafafb] border border-zinc-200/90 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center gap-3 mt-4 shadow-xs">
                <h3 className="text-lg sm:text-xl font-black font-display text-zinc-950">
                  Still have questions?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-md">
                  We are here to help. Reach out directly and our engineering lead will respond within 24 hours.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 rounded-full bg-zinc-950 text-[#fbea3d] hover:bg-[#fbea3d] hover:text-black text-xs font-bold transition-all shadow-sm"
                  >
                    Leave a Brief →
                  </Link>
                  <a
                    href="mailto:owlioworks@gmail.com"
                    className="px-5 py-2.5 rounded-full border border-zinc-300 text-zinc-800 hover:bg-white text-xs font-semibold transition-all"
                  >
                    owlioworks@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
