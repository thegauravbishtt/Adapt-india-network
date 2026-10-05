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
      { name: "Content Marketing", icon: "file", href: "/services/content-marketing" },
    ],
  },
  marketing: {
    title: "Marketing",
    items: [
      { name: "SEO Services", icon: "chart", href: "/services/seo-services" },
      { name: "Google Ads / PPC", icon: "target", href: "/services/google-ads" },
      { name: "Meta Ads", icon: "users", href: "/services/meta-ads" },
      { name: "Social Media Marketing", icon: "star", href: "/services/social-media" },
      { name: "Local SEO & GMB", icon: "pin", href: "/services/local-seo-gmb" },
    ],
  },
  automation: {
    title: "AI & Automation",
    items: [
      { name: "AI & Automation", icon: "sparkles", href: "/services/ai-automation" },
      { name: "Email Marketing", icon: "mail", href: "/services/email-marketing" },
      { name: "WhatsApp Marketing", icon: "whatsapp", href: "/services/whatsapp-marketing" },
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
  const headerRef = useRef<HTMLElement | null>(null);

  // Track scroll position to apply dynamic frosted glass blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menus on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
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
    }, 300);
  };

  const toggleMegaMenu = (menuType: "industries" | "services" | "about") => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setActiveMegaMenu(prev => (prev === menuType ? null : menuType));
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
      case "mail":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        );
      case "whatsapp":
        return (
          <svg className="w-3.5 h-3.5 shrink-0 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        );
      case "sparkles":
        return (
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
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
    <header
      ref={headerRef}
      className={`fixed md:sticky top-0 left-0 right-0 w-full select-none transition-all duration-300 z-50 md:bg-white/95 md:backdrop-blur-md md:border-b md:border-zinc-200 shadow-xs ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200 text-zinc-900"
          : "bg-[#121212] border-b border-[#222222]"
      }`}
    >
      <div className="py-2.5 sm:py-3 px-5 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 select-none shrink-0">
            <Link href="/" className="flex items-center group cursor-pointer py-0.5">
              {/* Mobile: White logo at top, Black logo when scrolled onto white blurred background */}
              <img
                src={isScrolled || mobileMenuOpen ? "/logo.png" : "/logo-white.png"}
                alt="Owlio Works Logo"
                className="h-7.5 xs:h-8 w-auto object-contain md:hidden transition-all duration-200 group-hover:scale-105"
              />
              {/* Desktop: Always black logo */}
              <img
                src="/logo.png"
                alt="Owlio Works Logo"
                className="hidden md:block h-7.5 xs:h-8 sm:h-9 lg:h-10.5 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
            </Link>
          </div>

            {/* Centered Desktop Navigation Bar */}
            <nav className="hidden md:flex items-center justify-center gap-3 lg:gap-4 xl:gap-5 flex-1 mx-3 lg:mx-6">
              {/* 1. Home */}
              <a
                href="/"
                className="text-[14px] lg:text-[15px] font-bold transition-colors cursor-pointer whitespace-nowrap text-zinc-900 hover:text-amber-500"
              >
                <span>{t.navbar.home || "Home"}</span>
              </a>

              {/* 2. About Us with Submenu Trigger */}
              <div
                className="relative py-1.5"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleMegaMenu("about")}
                  className={`text-[14px] lg:text-[15px] font-bold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap bg-transparent border-0 p-0 relative ${
                    activeMegaMenu === "about"
                      ? "text-zinc-900 after:absolute after:-bottom-2.5 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#fbea3d] after:rounded-full"
                      : "text-zinc-900 hover:text-amber-500"
                  }`}
                >
                  <span>{t.navbar.about || "About Us"}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 text-zinc-900 ${
                      activeMegaMenu === "about" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>

              {/* 3. Our Services with Mega Menu Trigger */}
              <div
                className="relative py-1.5"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleMegaMenu("services")}
                  className={`text-[14px] lg:text-[15px] font-bold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap bg-transparent border-0 p-0 relative ${
                    activeMegaMenu === "services"
                      ? "text-zinc-900 after:absolute after:-bottom-2.5 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#fbea3d] after:rounded-full"
                      : "text-zinc-900 hover:text-amber-500"
                  }`}
                >
                  <span>{t.navbar.services || "Our Services"}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 text-zinc-900 ${
                      activeMegaMenu === "services" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>

              {/* 4. Our Work */}
              <a
                href="/work"
                className="text-[14px] lg:text-[15px] font-bold transition-colors cursor-pointer whitespace-nowrap text-zinc-900 hover:text-amber-500"
              >
                {t.navbar.work || "Our Work"}
              </a>

              {/* 5. Industries */}
              <div
                className="relative py-1.5"
                onMouseEnter={() => handleMouseEnter("industries")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => toggleMegaMenu("industries")}
                  className={`text-[14px] lg:text-[15px] font-bold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap bg-transparent border-0 p-0 relative ${
                    activeMegaMenu === "industries"
                      ? "text-zinc-900 after:absolute after:-bottom-2.5 after:left-0 after:right-0 after:h-[2.5px] after:bg-[#fbea3d] after:rounded-full"
                      : "text-zinc-900 hover:text-amber-500"
                  }`}
                >
                  <span>{t.navbar.industries || "Industries"}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 text-zinc-900 ${
                      activeMegaMenu === "industries" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>

              {/* 6. Blog */}
              <a
                href="/blog"
                className="text-[14px] lg:text-[15px] font-bold transition-colors cursor-pointer whitespace-nowrap text-zinc-900 hover:text-amber-500"
              >
                Blog
              </a>
            </nav>

            {/* Right Action: Let's Talk Button & Mobile Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              {/* 7. Let's Talk Button (Desktop) */}
              <a
                href="/contact"
                className="hidden md:inline-flex items-center justify-center px-6 lg:px-7 py-2.5 lg:py-3 text-[13.5px] lg:text-[14.5px] font-extrabold rounded-full transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 whitespace-nowrap bg-[#fac917] text-black hover:bg-[#eab308] shadow-md hover:shadow-lg shadow-[#fac917]/25"
              >
                Let&apos;s Talk →
              </a>

              {/* Mobile Menu Button (< md) */}
              <button 
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-1.5 transition-colors cursor-pointer active:scale-95 ${
                  isScrolled || mobileMenuOpen
                    ? "text-zinc-900 hover:text-amber-600"
                    : "text-white hover:text-amber-400"
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
        </div>
      </div>

      {/* Mega Menu Dropdowns (Desktop) - Exact Full Width Panel Matching Reference */}
      {activeMegaMenu && (
        <div
          className="hidden md:block absolute top-full left-0 right-0 w-full bg-white border-b border-zinc-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150 pointer-events-auto"
          onMouseEnter={() => {
            if (megaMenuTimeoutRef.current) {
              clearTimeout(megaMenuTimeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-8">
            {/* 1. OUR SERVICES MEGA MENU */}
            {activeMegaMenu === "services" && (
              <div>
                {/* 3 Full-Width Columns of Categorized Services */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start text-left">
                  
                  {/* Column 1: Strategy & Development */}
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase pb-2 mb-4 border-b border-zinc-200 w-full block">
                      Strategy &amp; Dev
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/services/enterprise-software" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Enterprise Software
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Custom SaaS &amp; enterprise operations.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/web-development" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Web Development
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            High-speed, scalable Next.js platforms.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/app-development" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            App Development
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Native iOS &amp; Android applications.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/cloud-devops" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Cloud &amp; DevOps
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Cloud architecture &amp; CI/CD automation.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/it-consulting" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            IT Consulting
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Strategic digital roadmap &amp; audit.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Identity & Design */}
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase pb-2 mb-4 border-b border-zinc-200 w-full block">
                      Identity &amp; Design
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/services/ui-ux-design" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            UI/UX Design
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            High-converting, user-first interfaces.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/web-development" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Web Design
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Distinctive aesthetics that command attention.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/app-development" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            App Design
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Intuitive mobile UX &amp; design systems.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/content-marketing" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Content Marketing
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Words and visuals that drive customer sales.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Growth & Performance */}
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase pb-2 mb-4 border-b border-zinc-200 w-full block">
                      Growth &amp; Comms
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/services/seo-services" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            SEO Services
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Dominating high-intent search rankings.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/google-ads" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Google Ads / PPC
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Paid search engineered for maximum ROI.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/meta-ads" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Meta &amp; Social Ads
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Full-funnel customer acquisition campaigns.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/ai-automation" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            AI &amp; Automation
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Custom AI workflows &amp; smart CRM triggers.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Bottom Row: Only Contact Us Button */}
                <div className="mt-8 pt-5 border-t border-zinc-200/80 flex items-center justify-end">
                  <a
                    href="/contact"
                    className="px-5 py-2 text-xs font-semibold rounded-full bg-[#fac917] text-black hover:bg-[#eab308] transition-all shadow-md shadow-[#fac917]/25"
                  >
                    Contact Us →
                  </a>
                </div>
              </div>
            )}

            {/* 2. ABOUT US MEGA MENU */}
            {activeMegaMenu === "about" && (
              <div>
                {/* 3 Full-Width Columns: Who We Are, How We Work, What We Do */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left">
                  {/* Item 1: Who We Are */}
                  <a href="/about/who-we-are" className="group flex flex-col text-left">
                    <span className="font-medium text-[15px] text-zinc-900 group-hover:text-amber-600 transition-colors leading-snug">
                      Who We Are
                    </span>
                    <span className="text-xs text-zinc-500 font-normal leading-relaxed mt-1.5">
                      Our mission, leadership, core culture &amp; philosophy driving high-impact digital growth.
                    </span>
                  </a>

                  {/* Item 2: How We Work */}
                  <a href="/about/how-we-work" className="group flex flex-col text-left">
                    <span className="font-medium text-[15px] text-zinc-900 group-hover:text-amber-600 transition-colors leading-snug">
                      How We Work
                    </span>
                    <span className="text-xs text-zinc-500 font-normal leading-relaxed mt-1.5">
                      Agile sprints, zero tech-debt, transparent roadmaps &amp; QA engineering standards.
                    </span>
                  </a>

                  {/* Item 3: What We Do */}
                  <a href="/about/what-we-do" className="group flex flex-col text-left">
                    <span className="font-medium text-[15px] text-zinc-900 group-hover:text-amber-600 transition-colors leading-snug">
                      What We Do
                    </span>
                    <span className="text-xs text-zinc-500 font-normal leading-relaxed mt-1.5">
                      End-to-end engineering, custom web applications, UI/UX design &amp; performance marketing.
                    </span>
                  </a>
                </div>

                {/* Bottom Row: Only Contact Us Button */}
                <div className="mt-8 pt-5 border-t border-zinc-200/80 flex items-center justify-end">
                  <a
                    href="/contact"
                    className="px-5 py-2 text-xs font-semibold rounded-full bg-[#fac917] text-black hover:bg-[#eab308] transition-all shadow-md shadow-[#fac917]/25"
                  >
                    Contact Us →
                  </a>
                </div>
              </div>
            )}

            {/* 3. INDUSTRIES MEGA MENU */}
            {activeMegaMenu === "industries" && (
              <div>
                {/* 3 Full-Width Columns of Categorized Industries */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start text-left">
                  
                  {/* Column 1: Tech & Enterprise */}
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase pb-2 mb-4 border-b border-zinc-200 w-full block">
                      Tech &amp; Enterprise
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/industries/it-technology" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            IT &amp; Technology
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Enterprise SaaS, AI &amp; Cloud Platforms.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/real-estate" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Real Estate
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            PropTech, Commercial &amp; Housing systems.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/education" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Education
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            EdTech, LMS &amp; virtual learning.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Commerce & Lifestyle */}
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase pb-2 mb-4 border-b border-zinc-200 w-full block">
                      Commerce &amp; Luxury
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/industries/ecommerce" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            E-Commerce
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Omnichannel Brands &amp; scaling stores.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/jewellery" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Jewellery
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            High-End Luxury, D2C &amp; Fine Craft.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/food-beverages" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Food &amp; Beverages
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            QSR, FMCG &amp; Gourmet brands.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Health & Care */}
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase pb-2 mb-4 border-b border-zinc-200 w-full block">
                      Care &amp; Stays
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/industries/healthcare" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Healthcare
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            HealthTech, Clinics &amp; Biotech systems.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/hospitality" className="group/link flex flex-col text-left">
                          <span className="font-medium text-[15px] text-zinc-900 group-hover/link:text-amber-500 transition-colors leading-snug">
                            Hospitality
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Hotels, Luxury Resorts &amp; Dining.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Bottom Row: Only Contact Us Button */}
                <div className="mt-8 pt-5 border-t border-zinc-200/80 flex items-center justify-end">
                  <a
                    href="/contact"
                    className="px-5 py-2 text-xs font-semibold rounded-full bg-[#fac917] text-black hover:bg-[#eab308] transition-all shadow-md shadow-[#fac917]/25"
                  >
                    Contact Us →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navigation Full-Screen Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-14 bottom-0 h-[calc(100dvh-56px)] bg-white z-[100] overflow-y-auto px-5 pt-4 pb-28 flex flex-col justify-between text-zinc-900 border-t border-zinc-100">
          <div className="flex flex-col divide-y divide-zinc-100">
            {/* 1. Home Link */}
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3.5 text-zinc-900 hover:text-amber-500 font-semibold text-[17px] transition-colors"
            >
              {t.navbar.home || "Home"}
            </a>

            {/* 2. About Us Accordion */}
            <div className="py-3.5">
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full text-left text-zinc-900 flex items-center justify-between font-semibold text-[17px] cursor-pointer"
              >
                <span>{t.navbar.about || "About Us"}</span>
                <svg
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180 text-amber-500" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {mobileAboutOpen && (
                <div className="pt-4 pl-1 flex flex-col gap-4">
                  <ul className="flex flex-col gap-3.5 w-full">
                    <li>
                      <a href="/about/who-we-are" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                        <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                          Who We Are
                        </span>
                        <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                          Our mission, leadership, core culture &amp; philosophy.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/about/how-we-work" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                        <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                          How We Work
                        </span>
                        <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                          Agile sprints, zero tech-debt &amp; QA engineering standards.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/about/what-we-do" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                        <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                          What We Do
                        </span>
                        <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                          End-to-end engineering, custom web platforms &amp; growth.
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* 3. Our Services Accordion matching RetailMark style */}
            <div className="py-3.5">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full text-left text-zinc-900 flex items-center justify-between font-semibold text-[17px] cursor-pointer"
              >
                <span>{t.navbar.services || "Our Services"}</span>
                <svg
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-amber-500" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="pt-4 pl-1 flex flex-col gap-6">
                  {/* Category 1: STRATEGY & DEV */}
                  <div className="flex flex-col items-start text-left w-full">
                    <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase pb-2 mb-3 border-b border-zinc-200/80 w-full block">
                      Strategy &amp; Dev
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/services/enterprise-software" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Enterprise Software
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Custom SaaS &amp; enterprise operations.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/web-development" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Web Development
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            High-speed, scalable Next.js platforms.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/app-development" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            App Development
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Native iOS &amp; Android applications.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/cloud-devops" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Cloud &amp; DevOps
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Cloud architecture &amp; CI/CD automation.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/it-consulting" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            IT Consulting
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Strategic digital roadmap &amp; audit.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2: IDENTITY & DESIGN */}
                  <div className="flex flex-col items-start text-left w-full">
                    <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase pb-2 mb-3 border-b border-zinc-200/80 w-full block">
                      Identity &amp; Design
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/services/ui-ux-design" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            UI/UX Design
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            High-converting, user-first interfaces.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/web-development" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Web Design
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Distinctive aesthetics that command attention.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/app-development" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            App Design
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Intuitive mobile UX &amp; design systems.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/content-marketing" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Content Marketing
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Words and visuals that drive customer sales.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Category 3: GROWTH & COMMS */}
                  <div className="flex flex-col items-start text-left w-full">
                    <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase pb-2 mb-3 border-b border-zinc-200/80 w-full block">
                      Growth &amp; Comms
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/services/seo-services" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            SEO Services
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Dominating high-intent search rankings.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/google-ads" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Google Ads / PPC
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Paid search engineered for maximum ROI.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/meta-ads" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Meta &amp; Social Ads
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Full-funnel customer acquisition campaigns.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/services/ai-automation" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            AI &amp; Automation
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Custom AI workflows &amp; smart CRM triggers.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Industries Accordion matching RetailMark style */}
            <div className="py-3.5">
              <button
                type="button"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full text-left text-zinc-900 flex items-center justify-between font-semibold text-[17px] cursor-pointer"
              >
                <span>{t.navbar.industries || "Industries"}</span>
                <svg
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180 text-amber-500" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {mobileIndustriesOpen && (
                <div className="pt-4 pl-1 flex flex-col gap-6">
                  {/* Category 1: Tech & Enterprise */}
                  <div className="flex flex-col items-start text-left w-full">
                    <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase pb-2 mb-3 border-b border-zinc-200/80 w-full block">
                      Tech &amp; Enterprise
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/industries/it-technology" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            IT &amp; Technology
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Enterprise SaaS, AI &amp; Cloud Platforms.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/real-estate" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Real Estate
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            PropTech, Commercial &amp; Housing systems.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/education" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Education
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            EdTech, LMS &amp; virtual learning.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Category 2: Commerce & Luxury */}
                  <div className="flex flex-col items-start text-left w-full">
                    <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase pb-2 mb-3 border-b border-zinc-200/80 w-full block">
                      Commerce &amp; Luxury
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/industries/ecommerce" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            E-Commerce
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Omnichannel Brands &amp; scaling stores.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/jewellery" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Jewellery
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            High-End Luxury, D2C &amp; Fine Craft.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/food-beverages" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Food &amp; Beverages
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            QSR, FMCG &amp; Gourmet brands.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Category 3: Care & Stays */}
                  <div className="flex flex-col items-start text-left w-full">
                    <span className="text-[11px] font-bold tracking-wider text-zinc-400 uppercase pb-2 mb-3 border-b border-zinc-200/80 w-full block">
                      Care &amp; Stays
                    </span>
                    <ul className="flex flex-col gap-3.5 w-full">
                      <li>
                        <a href="/industries/healthcare" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Healthcare
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            HealthTech, Clinics &amp; Biotech systems.
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/industries/hospitality" onClick={() => setMobileMenuOpen(false)} className="group/link flex flex-col text-left">
                          <span className="font-bold text-[15px] text-zinc-900 group-hover/link:text-amber-600 transition-colors leading-snug">
                            Hospitality
                          </span>
                          <span className="text-xs text-zinc-500 font-normal leading-snug mt-0.5">
                            Hotels, Luxury Resorts &amp; Dining.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Work Link */}
            <a
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3.5 text-zinc-900 hover:text-amber-500 font-semibold text-[17px] transition-colors"
            >
              {t.navbar.work || "Our Work"}
            </a>

            {/* 6. Blog Link */}
            <a
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3.5 text-zinc-900 hover:text-amber-500 font-semibold text-[17px] transition-colors"
            >
              Blog
            </a>
          </div>

          {/* Bottom Action Button */}
          <div className="pt-6 mt-4">
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-[#fac917] hover:bg-[#eab308] text-black font-bold text-[15px] rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md shadow-[#fac917]/20 text-center"
            >
              <span>Let&apos;s Talk</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}
      </header>
  );
}
