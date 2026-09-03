"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";

interface IndustryItem {
  name: string;
  desc: string;
  icon: string;
  href: string;
}

const industriesData: IndustryItem[] = [
  {
    name: "IT & Technology",
    desc: "Enterprise SaaS, AI & Cloud Platforms",
    icon: "laptop",
    href: "/industries/it-technology",
  },
  {
    name: "Healthcare",
    desc: "HealthTech, Clinics & Biotech Systems",
    icon: "activity",
    href: "/industries/healthcare",
  },
  {
    name: "Hospitality",
    desc: "Hotels, Luxury Resorts & Dining",
    icon: "hotel",
    href: "/industries/hospitality",
  },
  {
    name: "Jewellery",
    desc: "High-End Luxury, D2C & Fine Craft",
    icon: "gem",
    href: "/industries/jewellery",
  },
  {
    name: "E-Commerce",
    desc: "Omnichannel Brands & Scaling Stores",
    icon: "shopping",
    href: "/industries/ecommerce",
  },
  {
    name: "Real Estate",
    desc: "PropTech, Commercial & Housing",
    icon: "building",
    href: "/industries/real-estate",
  },
  {
    name: "Food & Beverages",
    desc: "QSR, FMCG & Gourmet Experiences",
    icon: "utensils",
    href: "/industries/food-beverages",
  },
  {
    name: "Education",
    desc: "EdTech, LMS & Virtual Classrooms",
    icon: "education",
    href: "/industries/education",
  },
];

interface ServiceItem {
  name: string;
  icon: string;
  href: string;
}

interface ServiceSection {
  title: string;
  items: ServiceItem[];
}

const servicesData: Record<string, ServiceSection> = {
  development: {
    title: "Development",
    items: [
      { name: "Enterprise Software", icon: "cog", href: "/services/enterprise-software" },
      { name: "Web Development", icon: "monitor", href: "/services/web-development" },
      { name: "App Development", icon: "smartphone", href: "/services/app-development" },
      { name: "Cloud & DevOps", icon: "cloud", href: "/services/cloud-devops" },
      { name: "IT Consulting", icon: "message", href: "/services/it-consulting" },
    ],
  },
  design: {
    title: "Design",
    items: [
      { name: "UI/UX Design", icon: "heart", href: "/services/ui-ux-design" },
      { name: "Web Design", icon: "monitor", href: "/services/web-development" },
      { name: "App Design", icon: "smartphone", href: "/services/app-development" },
    ],
  },
  marketing: {
    title: "Marketing",
    items: [
      { name: "SEO Services", icon: "chart", href: "/services/seo-services" },
      { name: "Google Ads / PPC", icon: "target", href: "/services/google-ads" },
      { name: "Meta Ads", icon: "users", href: "/services/meta-ads" },
      { name: "Social Media Marketing", icon: "star", href: "/services/social-media" },
      { name: "Content Marketing", icon: "file", href: "/services/content-marketing" },
      { name: "Local SEO & GMB", icon: "pin", href: "/services/local-seo-gmb" },
    ],
  },
  security: {
    title: "Security",
    items: [
      { name: "Cybersecurity & Systems", icon: "lock", href: "/services/cybersecurity" },
    ],
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"industries" | "services" | "about" | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll position to apply dynamic frosted glass blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuType: "industries" | "services" | "about") => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setActiveMegaMenu(menuType);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "laptop":
        return (
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="18" height="12" x="3" y="4" rx="2" />
            <line x1="2" x2="22" y1="20" y2="20" strokeLinecap="round" />
          </svg>
        );
      case "activity":
        return (
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      case "hotel":
        return (
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 8h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
          </svg>
        );
      case "gem":
        return (
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 6-10 12L2 9z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 3 8 9l4 12 4-12-3-6M2 9h20" />
          </svg>
        );
      case "shopping":
        return (
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M16 10a4 4 0 0 1-8 0" />
          </svg>
        );
      case "building":
        return (
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14M2 20h20M14 12v.01M14 16v.01M10 12v.01M10 16v.01" />
          </svg>
        );
      case "utensils":
        return (
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2M15 11v11M5 2v14a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2M8 2v6" />
          </svg>
        );
      case "education":
        return (
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
          </svg>
        );
      case "cog":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case "monitor":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
          </svg>
        );
      case "smartphone":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="14" height="20" x="5" y="2" rx="2" />
            <line x1="12" x2="12.01" y1="18" y2="18" strokeWidth="2.5" />
          </svg>
        );
      case "cloud":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        );
      case "message":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        );
      case "heart":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
      case "chart":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path strokeLinecap="round" d="M7 16v-4m5 4v-8m5 8v-6" />
          </svg>
        );
      case "target":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="16" />
            <line x1="8" x2="16" y1="12" y2="12" />
          </svg>
        );
      case "users":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case "star":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      case "file":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3L22 4" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        );
      case "pin":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8 8 0 0 0 8-8c0-5-8-11-8-11s-8 6-8 11a8 8 0 0 0 8 8Z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        );
      case "lock":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path strokeLinecap="round" d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header
        className={`w-full select-none transition-all duration-300 z-40 ${
          !isHomePage
            ? "sticky top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] py-3 sm:py-3.5 px-6 sm:px-10 lg:px-16"
            : isScrolled
            ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-zinc-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-3 px-6 sm:px-10 lg:px-16"
            : "absolute top-0 left-0 right-0 bg-transparent border-none shadow-none pt-4 sm:pt-6 lg:pt-8 pb-2 sm:pb-3 px-5 sm:px-10 lg:px-16"
        }`}
      >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 select-none shrink-0">
          <Link href="/" className="flex items-center gap-1 xs:gap-1.5 sm:gap-3 group cursor-pointer">
            <img
              src="/logo.png"
              alt="Owlio Works Logo"
              className="h-9 xs:h-10 sm:h-10 lg:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
            <span className="text-[21px] xs:text-[23px] sm:text-2xl lg:text-[26px] font-black text-zinc-950 tracking-tighter uppercase font-display whitespace-nowrap">
              OWLIO <span className="text-zinc-600 font-bold group-hover:text-black transition-colors">WORKS</span>
            </span>
          </Link>
        </div>

        {/* Single Unified Desktop Navigation Bar on Right */}
        <div className="hidden md:flex items-center gap-3.5 lg:gap-5 xl:gap-6">
          {/* 1. Home */}
          <a
            href="/"
            className="text-[14px] lg:text-[15px] font-bold text-zinc-950 hover:text-black transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>{t.navbar.home || "Home"}</span>
          </a>

          {/* 2. About Us with Submenu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="/about"
              className={`text-[14px] lg:text-[15px] font-semibold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                activeMegaMenu === "about"
                  ? "text-black font-bold"
                  : "text-zinc-900 hover:text-black"
              }`}
            >
              <span>{t.navbar.about || "About Us"}</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMegaMenu === "about" ? "rotate-180 text-black" : "text-zinc-600"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>

          {/* 3. Our Services with Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="/services"
              className={`text-[14px] lg:text-[15px] font-semibold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                activeMegaMenu === "services"
                  ? "text-black font-bold"
                  : "text-zinc-900 hover:text-black"
              }`}
            >
              <span>{t.navbar.services || "Our Services"}</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMegaMenu === "services" ? "rotate-180 text-black" : "text-zinc-600"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>

          {/* 4. Our Work */}
          <a
            href="/work"
            className="text-[14px] lg:text-[15px] font-semibold text-zinc-900 hover:text-black transition-colors cursor-pointer whitespace-nowrap"
          >
            {t.navbar.work || "Our Work"}
          </a>

          {/* 5. Industries */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="/industries"
              className={`text-[14px] lg:text-[15px] font-semibold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                activeMegaMenu === "industries"
                  ? "text-black font-bold"
                  : "text-zinc-900 hover:text-black"
              }`}
            >
              <span>{t.navbar.industries || "Industries"}</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  activeMegaMenu === "industries" ? "rotate-180 text-black" : "text-zinc-600"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </a>
          </div>

          {/* 6. Blog */}
          <a
            href="/blog"
            className="text-[14px] lg:text-[15px] font-semibold text-zinc-900 hover:text-black transition-colors cursor-pointer whitespace-nowrap"
          >
            Blog
          </a>

          {/* 7. Let's Talk Button */}
          <a
            href="/contact"
            className={`px-5 py-2 text-xs font-extrabold rounded-full transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 ${
              !isHomePage || isScrolled
                ? "bg-black text-white hover:bg-zinc-800 shadow-xs border border-zinc-800"
                : "bg-white text-zinc-950 hover:bg-zinc-100 hover:shadow-md shadow-[0_2px_12px_rgba(0,0,0,0.15)] border border-zinc-200/90"
            }`}
          >
            Let&apos;s Talk →
          </a>
        </div>

        {/* Mobile Menu Button (< md) */}
        <button 
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer transition-all active:scale-95 ${
            !isHomePage || isScrolled
              ? "border border-zinc-200 text-black bg-white shadow-2xs hover:bg-zinc-50"
              : "border border-white/30 text-white bg-black/60 backdrop-blur-md hover:bg-black/80 shadow-xs"
          }`}
        >
          {mobileMenuOpen ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          {t.navbar.menu}
        </button>
      </div>

      {/* Mega Menu Dropdowns (Desktop) */}
      {activeMegaMenu && (
        <div
          className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[94vw] max-w-[1040px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          onMouseEnter={() => {
            if (megaMenuTimeoutRef.current) {
              clearTimeout(megaMenuTimeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          {/* 1. INDUSTRIES MEGA MENU (without bottom bar) */}
          {activeMegaMenu === "industries" && (
            <div
              style={{ backgroundColor: "#ffffff", color: "#000000" }}
              className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)] text-black select-none"
            >
              
              {/* Header Tag */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fbea3d] border border-black/20 inline-block animate-pulse"></span>
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-900 uppercase">
                    Industries We Serve
                  </span>
                </div>
                <span className="font-sans text-xs text-zinc-400 font-medium hidden sm:inline-block">
                  Domain Growth Frameworks
                </span>
              </div>

              {/* 7 Industries Multi-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3.5 items-stretch">
                {industriesData.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-start gap-3.5 p-3 rounded-2xl bg-zinc-50/70 hover:bg-zinc-100/90 border border-zinc-200/60 hover:border-zinc-300 transition-all duration-200 group/item cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 text-zinc-700 group-hover/item:text-black group-hover/item:border-black group-hover/item:bg-[#fbea3d] flex items-center justify-center transition-all shrink-0 mt-0.5 shadow-2xs">
                      {renderIcon(item.icon)}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-sans font-semibold text-[13px] sm:text-sm text-zinc-900 group-hover/item:text-black transition-colors leading-snug">
                        {item.name}
                      </span>
                      <span className="font-sans text-xs text-zinc-500 font-normal group-hover/item:text-zinc-600 transition-colors leading-tight mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Bottom Bar: View All Industries Link */}
              <div className="mt-6 pt-3.5 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span>8 Specialized Industry Sectors · Compliance & ROI Focused</span>
                </div>
                <a
                  href="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-[#dfcc23] transition-colors font-sans group/all"
                >
                  <span>View All Industries</span>
                  <span className="inline-block transition-transform duration-200 group-hover/all:translate-x-1 font-normal">→</span>
                </a>
              </div>

            </div>
          )}

          {/* 2. SERVICES MEGA MENU (without bottom bar) */}
          {activeMegaMenu === "services" && (
            <div
              style={{ backgroundColor: "#ffffff", color: "#000000" }}
              className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)] text-black select-none"
            >
              
              {/* 4 Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
                
                {/* Column 1: Development */}
                <div className="flex flex-col items-start text-left w-full">
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-400 uppercase pb-2.5 mb-3 border-b border-zinc-100 w-full block">
                    {servicesData.development.title}
                  </span>
                  <ul className="flex flex-col gap-1 w-full">
                    {servicesData.development.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="flex items-center gap-2.5 py-2 px-2.5 rounded-xl text-zinc-700 hover:text-black hover:bg-zinc-100 font-sans text-[13px] font-medium transition-all group/item"
                        >
                          <span className="text-zinc-400 group-hover/item:text-black transition-colors">
                            {renderIcon(item.icon)}
                          </span>
                          <span className="leading-snug">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Design */}
                <div className="flex flex-col items-start text-left w-full">
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-400 uppercase pb-2.5 mb-3 border-b border-zinc-100 w-full block">
                    {servicesData.design.title}
                  </span>
                  <ul className="flex flex-col gap-1 w-full">
                    {servicesData.design.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="flex items-center gap-2.5 py-2 px-2.5 rounded-xl text-zinc-700 hover:text-black hover:bg-zinc-100 font-sans text-[13px] font-medium transition-all group/item"
                        >
                          <span className="text-zinc-400 group-hover/item:text-black transition-colors">
                            {renderIcon(item.icon)}
                          </span>
                          <span className="leading-snug">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Marketing */}
                <div className="flex flex-col items-start text-left w-full">
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-400 uppercase pb-2.5 mb-3 border-b border-zinc-100 w-full block">
                    {servicesData.marketing.title}
                  </span>
                  <ul className="flex flex-col gap-1 w-full">
                    {servicesData.marketing.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="flex items-center gap-2.5 py-2 px-2.5 rounded-xl text-zinc-700 hover:text-black hover:bg-zinc-100 font-sans text-[13px] font-medium transition-all group/item"
                        >
                          <span className="text-zinc-400 group-hover/item:text-black transition-colors">
                            {renderIcon(item.icon)}
                          </span>
                          <span className="leading-snug">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4: Security */}
                <div className="flex flex-col items-start text-left w-full">
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-400 uppercase pb-2.5 mb-3 border-b border-zinc-100 w-full block">
                    {servicesData.security.title}
                  </span>
                  <ul className="flex flex-col gap-1 w-full">
                    {servicesData.security.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.href}
                          className="flex items-center gap-2.5 py-2 px-2.5 rounded-xl text-zinc-700 hover:text-black hover:bg-zinc-100 font-sans text-[13px] font-medium transition-all group/item"
                        >
                          <span className="text-zinc-400 group-hover/item:text-black transition-colors">
                            {renderIcon(item.icon)}
                          </span>
                          <span className="leading-snug">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Bar: View All Services Link */}
              <div className="mt-6 pt-3.5 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-500 font-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>13 Core Practice Areas · Senior Engineering Teams</span>
                </div>
                <a
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-[#dfcc23] transition-colors font-sans group/all"
                >
                  <span>View All Services</span>
                  <span className="inline-block transition-transform duration-200 group-hover/all:translate-x-1 font-normal">→</span>
                </a>
              </div>

            </div>
          )}

          {/* 3. ABOUT SUBMENU */}
          {activeMegaMenu === "about" && (
            <div
              style={{ backgroundColor: "#ffffff", color: "#000000" }}
              className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.08)] text-black select-none max-w-2xl mx-auto"
            >
              {/* Header Tag */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fbea3d] border border-black/20 inline-block animate-pulse"></span>
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-900 uppercase">
                    About Owlio Works
                  </span>
                </div>
                <span className="font-sans text-xs text-zinc-400 font-medium hidden sm:inline-block">
                  Identity, Culture &amp; Capabilities
                </span>
              </div>

              {/* 3 Submenu Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-stretch">
                <a
                  href="/about/who-we-are"
                  className="flex flex-col gap-2.5 p-4 rounded-2xl bg-zinc-50/70 hover:bg-zinc-100/90 border border-zinc-200/60 hover:border-zinc-300 transition-all duration-200 group/item cursor-pointer text-left"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 text-zinc-700 group-hover/item:text-black group-hover/item:border-black group-hover/item:bg-[#fbea3d] flex items-center justify-center transition-all shrink-0 shadow-2xs font-mono font-bold text-xs">
                    01
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm text-zinc-900 group-hover/item:text-black transition-colors leading-snug">
                      Who We Are
                    </span>
                    <span className="font-sans text-xs text-zinc-500 group-hover/item:text-zinc-600 transition-colors leading-tight mt-1">
                      Our mission, leadership &amp; core philosophy
                    </span>
                  </div>
                </a>

                <a
                  href="/about/how-we-work"
                  className="flex flex-col gap-2.5 p-4 rounded-2xl bg-zinc-50/70 hover:bg-zinc-100/90 border border-zinc-200/60 hover:border-zinc-300 transition-all duration-200 group/item cursor-pointer text-left"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 text-zinc-700 group-hover/item:text-black group-hover/item:border-black group-hover/item:bg-[#fbea3d] flex items-center justify-center transition-all shrink-0 shadow-2xs font-mono font-bold text-xs">
                    02
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm text-zinc-900 group-hover/item:text-black transition-colors leading-snug">
                      How We Work
                    </span>
                    <span className="font-sans text-xs text-zinc-500 group-hover/item:text-zinc-600 transition-colors leading-tight mt-1">
                      Agile sprints, zero tech-debt &amp; QA standards
                    </span>
                  </div>
                </a>

                <a
                  href="/about/what-we-do"
                  className="flex flex-col gap-2.5 p-4 rounded-2xl bg-zinc-50/70 hover:bg-zinc-100/90 border border-zinc-200/60 hover:border-zinc-300 transition-all duration-200 group/item cursor-pointer text-left"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-zinc-200 text-zinc-700 group-hover/item:text-black group-hover/item:border-black group-hover/item:bg-[#fbea3d] flex items-center justify-center transition-all shrink-0 shadow-2xs font-mono font-bold text-xs">
                    03
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-sm text-zinc-900 group-hover/item:text-black transition-colors leading-snug">
                      What We Do ?
                    </span>
                    <span className="font-sans text-xs text-zinc-500 group-hover/item:text-zinc-600 transition-colors leading-tight mt-1">
                      End-to-end engineering, design &amp; marketing
                    </span>
                  </div>
                </a>
              </div>

            </div>
          )}
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-zinc-100 flex flex-col gap-2.5 text-sm font-medium animate-fadeIn">
          {/* 1. Home */}
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="py-1 px-2 text-zinc-800 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors font-semibold">
            {t.navbar.home || "Home"}
          </a>

          {/* 2. Mobile About Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full py-1 px-2 text-left text-zinc-800 hover:text-black flex items-center justify-between rounded-lg transition-colors font-semibold"
            >
              <span>{t.navbar.about}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  mobileAboutOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {mobileAboutOpen && (
              <div className="bg-zinc-50 border border-zinc-200/90 text-black p-3 rounded-xl mt-1.5 flex flex-col gap-2 text-xs font-sans">
                <a
                  href="/about/who-we-are"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-zinc-700 hover:text-black hover:bg-zinc-200/70 font-medium transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-zinc-200 text-zinc-800 flex items-center justify-center font-mono text-[10px] font-bold">
                    1
                  </span>
                  <div>
                    <span className="font-bold block text-zinc-900">Who We Are</span>
                    <span className="text-[10px] text-zinc-500">Our mission &amp; core philosophy</span>
                  </div>
                </a>

                <a
                  href="/about/how-we-work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-zinc-700 hover:text-black hover:bg-zinc-200/70 font-medium transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-zinc-200 text-zinc-800 flex items-center justify-center font-mono text-[10px] font-bold">
                    2
                  </span>
                  <div>
                    <span className="font-bold block text-zinc-900">How We Work</span>
                    <span className="text-[10px] text-zinc-500">Agile sprints &amp; QA standards</span>
                  </div>
                </a>

                <a
                  href="/about/what-we-do"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-zinc-700 hover:text-black hover:bg-zinc-200/70 font-medium transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-zinc-200 text-zinc-800 flex items-center justify-center font-mono text-[10px] font-bold">
                    3
                  </span>
                  <div>
                    <span className="font-bold block text-zinc-900">What We Do ?</span>
                    <span className="text-[10px] text-zinc-500">Full capability matrix</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* 3. Mobile Services Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full py-1 px-2 text-left text-zinc-800 hover:text-black flex items-center justify-between rounded-lg transition-colors font-semibold"
            >
              <span>{t.navbar.services || "Services"}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="bg-zinc-50 border border-zinc-200/90 text-black p-4 rounded-xl mt-1.5 flex flex-col gap-4 text-xs font-sans">
                <div>
                  <span className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider block mb-1.5 border-b border-zinc-200 pb-1">
                    Development
                  </span>
                  <ul className="flex flex-col gap-1 text-zinc-700">
                    {servicesData.development.items.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-black block py-0.5">
                          • {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider block mb-1.5 border-b border-zinc-200 pb-1">
                    Design
                  </span>
                  <ul className="flex flex-col gap-1 text-zinc-700">
                    {servicesData.design.items.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-black block py-0.5">
                          • {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider block mb-1.5 border-b border-zinc-200 pb-1">
                    Marketing
                  </span>
                  <ul className="flex flex-col gap-1 text-zinc-700">
                    {servicesData.marketing.items.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-black block py-0.5">
                          • {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-zinc-900 uppercase tracking-wider block mb-1.5 border-b border-zinc-200 pb-1">
                    Security
                  </span>
                  <ul className="flex flex-col gap-1 text-zinc-700">
                    {servicesData.security.items.map((item, idx) => (
                      <li key={idx}>
                        <a href={item.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-black block py-0.5">
                          • {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 4. Mobile Industries Accordion */}
          <div>
            <button
              type="button"
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              className="w-full py-1 px-2 text-left text-zinc-800 hover:text-black flex items-center justify-between rounded-lg transition-colors font-semibold"
            >
              <span>{t.navbar.industries || "Industries"}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  mobileIndustriesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {mobileIndustriesOpen && (
              <div className="bg-zinc-50 border border-zinc-200/90 text-black p-3 rounded-xl mt-1.5 flex flex-col gap-2 text-xs font-sans">
                {industriesData.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 py-1.5 px-2 rounded-lg text-zinc-700 hover:text-black hover:bg-zinc-200/70 font-medium transition-colors"
                  >
                    <span className="text-zinc-500">{renderIcon(item.icon)}</span>
                    <span>{item.name}</span>
                  </a>
                ))}

                <a
                  href="/industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-lg bg-black text-[#fbea3d] font-bold text-xs mt-1"
                >
                  <span>View All Industries</span>
                  <span>→</span>
                </a>
              </div>
            )}
          </div>

          {/* 5. Work */}
          <a href="/work" onClick={() => setMobileMenuOpen(false)} className="py-1 px-2 text-zinc-800 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors font-semibold">
            Work
          </a>

          {/* 6. Blog */}
          <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="py-1 px-2 text-zinc-800 hover:text-black hover:bg-zinc-50 rounded-lg transition-colors font-semibold">
            Blog
          </a>

          <a 
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-2 bg-[#fbea3d] text-black py-2.5 text-xs font-extrabold rounded-full flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all"
          >
            Let&apos;s Talk
            <span>→</span>
          </a>
        </div>
      )}
      </header>
    </>
  );
}
