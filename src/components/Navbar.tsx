"use client";

import { productMenu } from "../data/productMenu";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SearchItem {
  id: string;
  title: string;
  category: "Service" | "Page" | "Insight";
  description: string;
  link: string;
  keywords: string[];
}

const searchIndex: SearchItem[] = [
  {
    id: "smart-internet",
    title: "Smart Internet (ILL)",
    category: "Service",
    description: "1:1 dedicated leased line bundled with cloud-based DDoS security & 99.999% SLA.",
    link: "/services/smart-internet-ill",
    keywords: ["internet", "leased line", "ill", "bandwidth", "fiber", "sla", "dedicated"],
  },
  {
    id: "internet-leased-line",
    title: "Internet Leased Line",
    category: "Service",
    description: "Dedicated point-to-point symmetric high-speed internet with pan-India carrier reach.",
    link: "/services/internet-leased-line",
    keywords: ["ill", "leased line", "dedicated", "fiber", "symmetrical", "broadband"],
  },
  {
    id: "smartflo-sd-wan",
    title: "Smartflo SD-WAN",
    category: "Service",
    description: "Ultra-flexible, next-gen multi-cloud steering & secure application mesh.",
    link: "/services/smartflo-sd-wan",
    keywords: ["sdwan", "sd-wan", "cloud", "mesh", "steering", "application", "hybrid"],
  },
  {
    id: "managed-sdwan",
    title: "Managed SD-WAN Solutions",
    category: "Service",
    description: "Application-aware dynamic traffic steering with zero-touch provisioning and sub-second failover.",
    link: "/services/sd-wan",
    keywords: ["sdwan", "sd-wan", "routing", "failover", "cisco", "fortinet", "velocloud"],
  },
  {
    id: "managed-mpls",
    title: "Managed MPLS VPN Connectivity",
    category: "Service",
    description: "Secure, reliable, always-on multi-protocol label switching WAN connecting enterprise branches.",
    link: "/services/mpls",
    keywords: ["mpls", "vpn", "wan", "intranet", "dedicated", "private line"],
  },
  {
    id: "enterprise-broadband",
    title: "Enterprise Broadband",
    category: "Service",
    description: "Carrier-grade business broadband with high uptime and priority enterprise routing.",
    link: "/services/enterprise-broadband",
    keywords: ["broadband", "internet", "business", "fiber", "wifi", "branch"],
  },
  {
    id: "managed-wifi",
    title: "Enterprise Managed Wi-Fi & LAN",
    category: "Service",
    description: "High-density Wi-Fi 6/7 access points, Gigabit PoE switching and centralized cloud control.",
    link: "/services/managed-wifi",
    keywords: ["wifi", "wi-fi", "wireless", "lan", "access point", "switch", "poe", "campus"],
  },
  {
    id: "smartoffice-connect",
    title: "SmartOffice® Connect",
    category: "Service",
    description: "Enterprise business starter pack combining high-speed connectivity, voice & security in one box.",
    link: "/services/smartoffice-connect",
    keywords: ["smartoffice", "all in one", "voice", "internet", "starter pack", "bundle"],
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Edge Threat Defense",
    category: "Service",
    description: "Multi-layer edge threat mitigation, volumetric DDoS defense, and 24/7 security monitoring.",
    link: "/services/cyber-security",
    keywords: ["cybersecurity", "security", "firewall", "ddos", "fwaas", "threat", "soc"],
  },
  {
    id: "clean-pipe",
    title: "Clean Pipe DDoS Mitigation",
    category: "Service",
    description: "Carrier-level automated volumetric DDoS scrubbing and real-time malicious packet filtering.",
    link: "/services/smart-ddos-protection",
    keywords: ["clean pipe", "ddos", "scrubbing", "volumetric", "botnet", "attack"],
  },
  {
    id: "cloud-firewall",
    title: "Cloud Next-Gen Firewall (FWaaS)",
    category: "Service",
    description: "Centralized firewall protection with deep packet SSL inspection across remote offices.",
    link: "/services/next-gen-firewall",
    keywords: ["firewall", "fwaas", "ngfw", "ssl", "inspection", "utm"],
  },
  {
    id: "sip-trunk-voice",
    title: "SIP Trunk & PRI Services",
    category: "Service",
    description: "Digital multi-channel voice trunks with guaranteed voice QoS and enterprise PBX integration.",
    link: "/services/data-services",
    keywords: ["sip trunk", "pri", "voice", "telephony", "pbx", "voip", "calling"],
  },
  {
    id: "cloud-telephony",
    title: "Cloud Telephony & Smart IVR",
    category: "Service",
    description: "Scalable cloud contact center, multi-level IVR, virtual receptionist and CRM calling.",
    link: "/services/cloud-telephony",
    keywords: ["cloud telephony", "ivr", "call center", "virtual number", "crm", "recording"],
  },
  {
    id: "toll-free",
    title: "Toll-Free Numbers (1800)",
    category: "Service",
    description: "Pan-India accessible toll-free numbers with intelligent routing and customer call analytics.",
    link: "/services/data-services",
    keywords: ["toll free", "1800", "customer support", "helpline", "inbound"],
  },
  {
    id: "page-about",
    title: "About Us — Adapt India Networks",
    category: "Page",
    description: "Authorized enterprise alliance partner with Tata Teleservices (TTBS) & ACT Enterprise.",
    link: "/about",
    keywords: ["about", "company", "team", "tata", "ttbs", "act", "partners", "overview"],
  },
  {
    id: "page-contact",
    title: "Contact Us & Request Enterprise Quote",
    category: "Page",
    description: "Get in touch with enterprise network engineers for site survey, pricing and SLA proposals.",
    link: "/contact",
    keywords: ["contact", "quote", "sales", "support", "noc", "pricing", "rfp", "phone", "email"],
  },
  {
    id: "page-clients",
    title: "Clients & Enterprise Case Studies",
    category: "Page",
    description: "Explore our enterprise customers across manufacturing, retail, tech, and banking in India.",
    link: "/clients",
    keywords: ["clients", "case studies", "customers", "reviews", "enterprises"],
  },
  {
    id: "page-articles",
    title: "Articles & Knowledge Hub",
    category: "Page",
    description: "Telecom insights, SD-WAN architecture whitepapers, network security guides and articles.",
    link: "/articles",
    keywords: ["articles", "blog", "news", "insights", "knowledge", "guides"],
  },
  {
    id: "page-services-all",
    title: "All Enterprise Solutions",
    category: "Page",
    description: "Comprehensive catalog of enterprise connectivity, cloud, voice, and network security services.",
    link: "/services",
    keywords: ["all services", "solutions", "catalog", "connectivity", "telecom"],
  },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeNavTab, setActiveNavTab] = useState<
    "services" | "about" | "articles" | "clients" | "contact"
  >("services");
  const [activeServiceCategory, setActiveServiceCategory] = useState<string>(productMenu[0].id);

  const [mobileMenuStack, setMobileMenuStack] = useState<string[]>(["root"]);
  const currentMobileLevel = mobileMenuStack[mobileMenuStack.length - 1];

  const getMobileCategoryTitle = (level: string) => {
    if (level.startsWith("p:")) return productMenu.find((c) => "p:" + c.id === level)?.label ?? "Services";
    switch (level) {
      case "services":
        return "Services";
      case "top-services":
        return "Top Services";
      case "business-comm":
        return "Business Communications";
      case "network-conn":
        return "Network & Connectivity";
      case "collab":
        return "Collaboration & Productivity";
      case "cloud":
        return "Cloud Infrastructure";
      case "cybersecurity":
        return "Cybersecurity Solutions";
      case "managed-services":
        return "Managed Services";
      case "bundled":
        return "Bundled Solutions";
      case "solutions":
        return "Solutions";
      case "about":
        return "About Us";
      case "experience-zone":
        return "Experience Zone";
      case "knowledge":
        return "Knowledge";
      case "tools":
        return "Tools";
      case "my-account":
        return "My Account";
      default:
        return "Menu";
    }
  };

  const pathname = usePathname();

  // Filter search results
  const filteredResults =
    searchQuery.trim() === ""
      ? []
      : searchIndex.filter((item) => {
          const q = searchQuery.toLowerCase().trim();
          return (
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.keywords.some((k) => k.toLowerCase().includes(q))
          );
        });

  // Close drawer & search on route change
  useEffect(() => {
    setDrawerOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
    setMobileMenuStack(["root"]);
  }, [pathname]);

  // Handle ESC and Ctrl+K shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setDrawerOpen(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when drawer or search is open
  useEffect(() => {
    if (drawerOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, searchOpen]);

  // Track scroll position to hide announcement bar and blur header
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Fixed Container: Red Announcement Bar + Transparent Floating Header */}
      <div className="fixed top-0 left-0 right-0 w-full select-none z-50">
        
        {/* Top Announcement Bar (Disappears smoothly on scroll or when drawer is open) */}
        <div
          className={`w-full bg-[#E31E24] text-white overflow-hidden select-none transition-all duration-300 ease-in-out ${
            isScrolled || drawerOpen
              ? "max-h-0 opacity-0 -translate-y-full py-0 border-none pointer-events-none"
              : "max-h-12 opacity-100 translate-y-0 py-1.5 sm:py-2 border-b border-red-500/30 shadow-xs"
          }`}
        >
          <div className="overflow-hidden whitespace-nowrap flex items-center">
            <div className="flex gap-5 items-center animate-top-ticker w-max">
              {[0, 1, 2].map((copyIdx) => (
                <div key={copyIdx} className="flex gap-5 items-center text-xs sm:text-[13px] font-sans font-medium text-white/95">
                  <span>Internet Leased Line (ILL)</span>
                  <span className="text-white/40 select-none">•</span>
                  <span>SD-WAN Solutions</span>
                  <span className="text-white/40 select-none">•</span>
                  <span>MPLS VPN Connectivity</span>
                  <span className="text-white/40 select-none">•</span>
                  <span>Enterprise Broadband</span>
                  <span className="text-white/40 select-none">•</span>
                  <span>Managed Wi-Fi Solutions</span>
                  <span className="text-white/40 select-none">•</span>
                  <span>SIP Trunk &amp; VoIP</span>
                  <span className="text-white/40 select-none">•</span>
                  <span>Cloud Telephony</span>
                  <span className="text-white/40 select-none">•</span>
                  <span>Cybersecurity Solutions</span>
                  <span className="text-white/40 select-none">•</span>
                  <span>24/7/365 NOC Support</span>
                  <span className="text-white/40 select-none">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Navigation Header (Becomes black blur on scroll) */}
        <header
          className={`w-full select-none transition-all duration-300 ${
            drawerOpen
              ? "bg-[#050911] border-b border-zinc-800 text-white"
              : isScrolled
              ? "bg-black/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg text-white"
              : "bg-transparent text-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between relative">
            
            {/* Left: Brand Logo (Bigger on mobile, responsive on desktop) */}
            <div className="flex items-center z-10">
              <Link href="/" className="flex items-center group py-1">
                <img
                  src="/logo-nobg.png"
                  alt="Adapt India Networks Logo"
                  className="h-14 sm:h-12 md:h-14 w-auto object-contain transition-all duration-200 group-hover:scale-105 filter drop-shadow-[0_0_2px_rgba(255,255,255,0.85)] drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                />
              </Link>
            </div>

            {/* Right: Menu Toggle FIRST, Search Icon SECOND, Desktop LET'S TALK Action */}
            <div className="flex items-center gap-2 sm:gap-3 z-10">
              
              {/* Menu / Close Button (Positioned BEFORE search like before) */}
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(!drawerOpen);
                  setSearchOpen(false);
                }}
                className="p-1.5 sm:p-2 transition-colors cursor-pointer flex items-center justify-center active:scale-95 text-white hover:text-[#E31E24] rounded-lg"
                aria-label="Toggle navigation menu"
              >
                {drawerOpen ? (
                  <svg className="w-[26px] h-[26px] sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-[26px] h-[26px] sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                  </svg>
                )}
              </button>

              {/* Search Icon Button (Opens Search Dialog) */}
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(true);
                  setDrawerOpen(false);
                }}
                className="p-1.5 sm:p-2 transition-colors cursor-pointer flex items-center justify-center active:scale-95 text-white hover:text-[#E31E24] rounded-lg"
                aria-label="Open search dialog"
              >
                <svg className="w-[26px] h-[26px] sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>

              {/* Action Button: LET'S TALK → */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-5 sm:px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white font-mono font-extrabold text-xs sm:text-[13px] tracking-wider uppercase rounded-xs transition-all duration-150 shadow-lg shadow-red-600/35 hover:shadow-red-600/55 active:scale-95 text-center whitespace-nowrap border border-red-500/40"
              >
                LET&apos;S TALK →
              </Link>

            </div>

          </div>
        </header>
      </div>

      {/* Slide-out / Full Mega-Menu Drawer Navigation (CLEAN WHITE INTERIOR MATCHING TTBS) */}
      {drawerOpen && (
        <>
          {/* ============================================================ */}
          {/* MOBILE ONLY DRILL-DOWN NAVIGATION MENU (MATCHING SCREENSHOTS) */}
          {/* ============================================================ */}
          <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto animate-in fade-in duration-150">
            {/* Top Header matching desktop dark color */}
            <div className="bg-[#050911] text-white flex items-center justify-between px-4 h-16 shrink-0 shadow-xs">
              {mobileMenuStack.length > 1 ? (
                <button
                  type="button"
                  onClick={() => setMobileMenuStack((prev) => prev.slice(0, -1))}
                  className="flex items-center gap-1 text-white font-semibold text-[15px] cursor-pointer hover:text-[#E31E24] transition-colors py-2 pr-4"
                  aria-label="Go back"
                >
                  <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  <span>Back</span>
                </button>
              ) : (
                <div className="flex items-center">
                  <img
                    src="/logo-nobg.png"
                    alt="Adapt India Network"
                    className="h-12 w-auto object-contain"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </div>
              )}

              {/* Close Button on right */}
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  setMobileMenuStack(["root"]);
                }}
                className="p-2 text-white hover:text-red-400 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu List Rows */}
            <div className="flex-1 bg-white overflow-y-auto flex flex-col divide-y divide-gray-100 pb-20">
              {/* Level 0: ROOT — same pages as desktop nav */}
              {currentMobileLevel === "root" && (
                <>
                  <button
                    type="button"
                    onClick={() => setMobileMenuStack(["root", "services"])}
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <span>Services</span>
                    <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMobileMenuStack(["root", "about"])}
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <span>About Us</span>
                    <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>

                  <Link
                    href="/articles"
                    onClick={() => {
                      setDrawerOpen(false);
                      setMobileMenuStack(["root"]);
                    }}
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <span>Articles</span>
                    <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>

                  <Link
                    href="/clients"
                    onClick={() => {
                      setDrawerOpen(false);
                      setMobileMenuStack(["root"]);
                    }}
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <span>Clients</span>
                    <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>

                </>
              )}

              {/* Level 1: SERVICES — product categories */}
              {currentMobileLevel === "services" && (
                <>
                  {productMenu.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setMobileMenuStack((prev) => [...prev, "p:" + cat.id])}
                      className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <span>{cat.label}</span>
                      <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => {
                      setDrawerOpen(false);
                      setMobileMenuStack(["root"]);
                    }}
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-bold text-[#E31E24] hover:bg-red-50 active:bg-red-100 transition-colors cursor-pointer"
                  >
                    <span>View all services</span>
                  </Link>
                </>
              )}

              {/* Level 2: products in one category */}
              {currentMobileLevel.startsWith("p:") && (
                <>
                  {(productMenu.find((c) => "p:" + c.id === currentMobileLevel)?.items ?? []).map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setDrawerOpen(false);
                        setMobileMenuStack(["root"]);
                      }}
                      className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))}
                </>
              )}

              {/* Level 1: SOLUTIONS */}
              {currentMobileLevel === "solutions" && (
                <>
                  {[
                    { label: "Internet Leased Line (ILL 1:1)", link: "/services/internet-leased-line" },
                    { label: "Smart Internet with Clean-Pipe", link: "/services/smart-internet-ill" },
                    { label: "Smartflo SD-WAN Traffic Steering", link: "/services/smartflo-sd-wan" },
                    { label: "Multi-Protocol Label Switching (MPLS)", link: "/services/mpls" },
                    { label: "Enterprise Managed Wi-Fi 6/7", link: "/services/managed-wifi" },
                    { label: "SmartOffice® Connectivity Suite", link: "/services/smartoffice-connect" },
                    { label: "All Enterprise Solutions", link: "/services" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      onClick={() => {
                        setDrawerOpen(false);
                        setMobileMenuStack(["root"]);
                      }}
                      className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))}
                </>
              )}

              {/* Level 1: ABOUT US */}
              {currentMobileLevel === "about" && (
                <>
                  {[
                    { label: "Who We Are", link: "/about/who-we-are" },
                    { label: "How We Work", link: "/about/how-we-work" },
                    { label: "What We Do", link: "/about/what-we-do" },
                    { label: "About Hub Overview", link: "/about" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      onClick={() => {
                        setDrawerOpen(false);
                        setMobileMenuStack(["root"]);
                      }}
                      className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))}
                </>
              )}

              {/* Level 1: EXPERIENCE ZONE */}
              {currentMobileLevel === "experience-zone" && (
                <>
                  {[
                    { label: "24/7 Optical NOC Monitoring", link: "/about/what-we-do" },
                    { label: "Enterprise Alliances (Tata TTBS & ACT)", link: "/about/who-we-are" },
                    { label: "99.999% SLA Carrier Protocol", link: "/about/how-we-work" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      onClick={() => {
                        setDrawerOpen(false);
                        setMobileMenuStack(["root"]);
                      }}
                      className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))}
                </>
              )}

              {/* Level 1: KNOWLEDGE */}
              {currentMobileLevel === "knowledge" && (
                <>
                  {[
                    { label: "Articles & Knowledge Hub", link: "/articles" },
                    { label: "Optical Infrastructure Insights", link: "/articles" },
                    { label: "Enterprise Client Case Studies", link: "/clients" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      onClick={() => {
                        setDrawerOpen(false);
                        setMobileMenuStack(["root"]);
                      }}
                      className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))}
                </>
              )}

              {/* Level 1: TOOLS */}
              {currentMobileLevel === "tools" && (
                <>
                  {[
                    { label: "Request Fiber Feasibility Survey", link: "/contact" },
                    { label: "SLA Bandwidth Estimator", link: "/contact" },
                    { label: "Consult Enterprise Solutions Architect", link: "/contact" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.link}
                      onClick={() => {
                        setDrawerOpen(false);
                        setMobileMenuStack(["root"]);
                      }}
                      className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <svg className="w-4 h-4 text-gray-800 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </Link>
                  ))}
                </>
              )}

              {/* Level 1: MY ACCOUNT */}
              {currentMobileLevel === "my-account" && (
                <>
                  <a
                    href="tel:+918287479961"
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="block font-bold">24/7 NOC Helpline</span>
                      <span className="text-xs text-gray-500 font-mono">+91 82874 79961</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#E31E24]">CALL →</span>
                  </a>

                  <a
                    href="mailto:support@adapt-india.net"
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="block font-bold">Technical Support</span>
                      <span className="text-xs text-gray-500 font-mono">support@adapt-india.net</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#E31E24]">EMAIL →</span>
                  </a>

                  <a
                    href="mailto:info@adapt-india.net"
                    className="w-full px-5 py-4 flex items-center justify-between text-left text-[15px] font-medium text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="block font-bold">Enterprise Sales &amp; Quotes</span>
                      <span className="text-xs text-gray-500 font-mono">info@adapt-india.net</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#E31E24]">EMAIL →</span>
                  </a>
                </>
              )}
            </div>

            {/* Sticky LET'S TALK Button at bottom of mobile drawer */}
            <div className="shrink-0 p-4 border-t border-gray-100 bg-white">
              <Link
                href="/contact"
                onClick={() => {
                  setDrawerOpen(false);
                  setMobileMenuStack(["root"]);
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#E31E24] hover:bg-[#c9171d] active:scale-95 text-white font-mono font-extrabold text-sm tracking-wider uppercase rounded-lg transition-all duration-150 shadow-lg shadow-red-600/30"
              >
                LET&apos;S TALK →
              </Link>
            </div>
          </div>

          {/* ============================================================ */}
          {/* DESKTOP ONLY MEGA-MENU DRAWER (EXISTING)                    */}
          {/* ============================================================ */}
          <div className="hidden md:flex fixed inset-0 top-16 sm:top-20 bg-[#f8f9fa] z-40 overflow-y-auto text-gray-800 animate-in fade-in duration-200 border-t border-gray-300 shadow-2xl flex-col">
          
          {/* Drawer Top Navigation Bar: Home, About Us, Services, Articles, Clients, Contact Us */}
          <div className="border-b border-gray-200 bg-white sticky top-0 z-30 shadow-xs w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
              
              {/* Primary Page Nav Links (Height matched and centered cleanly) */}
              <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0 h-full">
                <Link
                  href="/"
                  onClick={() => setDrawerOpen(false)}
                  className={`h-9 sm:h-10 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors inline-flex items-center ${
                    pathname === "/"
                      ? "bg-[#E31E24] text-white shadow-sm"
                      : "text-gray-700 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  Home
                </Link>

                <div className="relative group inline-flex items-center">
                  <Link
                    href="/about"
                    onClick={() => setDrawerOpen(false)}
                    className={`h-9 sm:h-10 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors inline-flex items-center gap-1 ${
                      pathname.startsWith("/about")
                        ? "bg-[#E31E24] text-white shadow-sm"
                        : "text-gray-700 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    <span>About Us</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </Link>

                  {/* Dropdown for About Us */}
                  <div className="absolute top-full left-0 pt-1 hidden group-hover:block z-50 min-w-[200px]">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-200 py-1.5 flex flex-col text-left">
                      <Link
                        href="/about"
                        onClick={() => setDrawerOpen(false)}
                        className="px-4 py-2 text-xs font-bold text-gray-800 hover:text-[#E31E24] hover:bg-gray-50 flex items-center justify-between"
                      >
                        <span>About Hub Overview</span>
                        <span>→</span>
                      </Link>
                      <Link
                        href="/about/who-we-are"
                        onClick={() => setDrawerOpen(false)}
                        className="px-4 py-2 text-xs font-bold text-gray-800 hover:text-[#E31E24] hover:bg-gray-50 flex items-center justify-between"
                      >
                        <span>Who We Are</span>
                        <span>→</span>
                      </Link>
                      <Link
                        href="/about/how-we-work"
                        onClick={() => setDrawerOpen(false)}
                        className="px-4 py-2 text-xs font-bold text-gray-800 hover:text-[#E31E24] hover:bg-gray-50 flex items-center justify-between"
                      >
                        <span>How We Work</span>
                        <span>→</span>
                      </Link>
                      <Link
                        href="/about/what-we-do"
                        onClick={() => setDrawerOpen(false)}
                        className="px-4 py-2 text-xs font-bold text-gray-800 hover:text-[#E31E24] hover:bg-gray-50 flex items-center justify-between"
                      >
                        <span>What We Do</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/services"
                  onClick={() => setDrawerOpen(false)}
                  className={`h-9 sm:h-10 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors inline-flex items-center gap-1.5 ${
                    pathname.startsWith("/services")
                      ? "bg-[#E31E24] text-white shadow-sm"
                      : "text-gray-700 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  <span>Services</span>
                </Link>

                <Link
                  href="/articles"
                  onClick={() => setDrawerOpen(false)}
                  className={`h-9 sm:h-10 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors inline-flex items-center ${
                    pathname.startsWith("/articles") || pathname.startsWith("/blog")
                      ? "bg-[#E31E24] text-white shadow-sm"
                      : "text-gray-700 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  Articles
                </Link>

                <Link
                  href="/clients"
                  onClick={() => setDrawerOpen(false)}
                  className={`h-9 sm:h-10 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors inline-flex items-center ${
                    pathname.startsWith("/clients")
                      ? "bg-[#E31E24] text-white shadow-sm"
                      : "text-gray-700 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  Clients
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className={`h-9 sm:h-10 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-colors inline-flex items-center ${
                    pathname === "/contact"
                      ? "bg-[#E31E24] text-white shadow-sm"
                      : "text-gray-700 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  Contact Us
                </Link>
              </nav>

              {/* Close Button on far right aligned with header controls */}
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="h-9 sm:h-10 px-2.5 sm:px-3 text-gray-500 hover:text-black rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase cursor-pointer shrink-0"
                aria-label="Close menu"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="hidden sm:inline">Close</span>
              </button>

            </div>
          </div>

          {/* Drawer Body Container (Clean White Background) */}
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 sm:py-8">
            
            {/* 1. SERVICES TAB: product categories on the left, products on the right */}
            {activeNavTab === "services" && (
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row min-h-[420px]">

                {/* Left: categories */}
                <div className="w-full lg:w-80 bg-[#f3f4f6] border-b lg:border-b-0 lg:border-r border-gray-200 py-2 flex lg:flex-col overflow-x-auto lg:overflow-x-visible no-scrollbar shrink-0">
                  {productMenu.map((category) => {
                    const isActive = activeServiceCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setActiveServiceCategory(category.id)}
                        onMouseEnter={() => setActiveServiceCategory(category.id)}
                        aria-pressed={isActive}
                        className={`px-4 sm:px-5 py-3.5 text-xs sm:text-[13px] font-semibold tracking-wide text-left flex items-center justify-between gap-3 whitespace-nowrap lg:whitespace-normal transition-colors relative cursor-pointer ${
                          isActive
                            ? "bg-[#002244] text-white font-bold shadow-md"
                            : "text-gray-700 hover:text-black hover:bg-gray-200/80"
                        }`}
                      >
                        <span>{category.label}</span>
                        <span className={`hidden lg:inline-block text-xs font-bold ${isActive ? "text-white" : "text-gray-400"}`}>›</span>
                      </button>
                    );
                  })}
                </div>

                {/* Right: products in the chosen category */}
                {(() => {
                  const cat = productMenu.find((c) => c.id === activeServiceCategory) ?? productMenu[0];
                  return (
                    <div className="flex-1 p-6 sm:p-8 bg-white overflow-y-auto text-gray-800 text-left">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 pb-2 border-b-2 border-[#E31E24] inline-block">
                        {cat.label}
                      </h4>
                      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cat.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={() => setDrawerOpen(false)}
                              className="group flex items-center justify-between gap-3 h-full px-4 py-3.5 rounded-xl border border-gray-200 hover:border-[#E31E24] hover:bg-red-50/40 transition-colors"
                            >
                              <span className="text-sm font-semibold text-gray-900 group-hover:text-[#E31E24]">{item.name}</span>
                              <svg className="w-4 h-4 text-gray-400 group-hover:text-[#E31E24] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/services"
                        onClick={() => setDrawerOpen(false)}
                        className="inline-block mt-6 text-sm font-bold text-[#E31E24] hover:underline"
                      >
                        View all services
                      </Link>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* 2. ABOUT US TAB (WHITE THEME) */}
            {activeNavTab === "about" && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 text-left shadow-xl text-gray-900">
                <div className="max-w-4xl">
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#E31E24] uppercase block mb-2">
                    About Adapt India Networks
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    Carrier-Grade Telecom &amp; SD-WAN Infrastructure for Modern Enterprises
                  </h3>
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    Adapt India Networks provides mission-critical enterprise internet leased lines, software-defined WAN, and cloud interconnects across India. With our 99.999% SLA uptime guarantee and dedicated 24/7/365 NOC engineering teams, we ensure seamless connectivity for leading brands, BFSI institutions, and large corporate networks.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-gray-900 font-mono">99.999%</span>
                      <span className="text-xs text-gray-500 block mt-1">Guaranteed SLA Uptime</span>
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-[#E31E24] font-mono">100+</span>
                      <span className="text-xs text-gray-500 block mt-1">Metro Cities Covered</span>
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">24/7/365</span>
                      <span className="text-xs text-gray-500 block mt-1">Proactive L3 NOC Support</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/about"
                      onClick={() => setDrawerOpen(false)}
                      className="px-5 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs font-mono font-bold tracking-wider uppercase rounded-md transition-colors"
                    >
                      About Hub →
                    </Link>
                    <Link
                      href="/about/who-we-are"
                      onClick={() => setDrawerOpen(false)}
                      className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-mono font-bold tracking-wider uppercase rounded-md transition-colors border border-gray-300"
                    >
                      Who We Are
                    </Link>
                    <Link
                      href="/about/how-we-work"
                      onClick={() => setDrawerOpen(false)}
                      className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-mono font-bold tracking-wider uppercase rounded-md transition-colors border border-gray-300"
                    >
                      How We Work
                    </Link>
                    <Link
                      href="/about/what-we-do"
                      onClick={() => setDrawerOpen(false)}
                      className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-mono font-bold tracking-wider uppercase rounded-md transition-colors border border-gray-300"
                    >
                      What We Do
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* 3. ARTICLES TAB (WHITE THEME) */}
            {activeNavTab === "articles" && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 text-left shadow-xl text-gray-900">
                <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#E31E24] uppercase block mb-1">
                      Insights &amp; Knowledge
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Featured Telecom &amp; Network Articles</h3>
                  </div>
                  <Link
                    href="/articles"
                    onClick={() => setDrawerOpen(false)}
                    className="text-xs font-mono font-bold text-[#E31E24] hover:underline uppercase hidden sm:inline-block"
                  >
                    View All Articles →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  {[
                    {
                      title: "Enabling Secure and Scalable Networks for AI-Driven Enterprises",
                      category: "Architecture",
                      image: "/resources/ai_network_chip.jpg",
                      link: "/articles",
                    },
                    {
                      title: "Uncertainty is the New Normal: Is Your Network Built to Endure?",
                      category: "POV",
                      image: "/resources/smart_city_grid.jpg",
                      link: "/articles",
                    },
                    {
                      title: "Adapt India Network IP Transit & Dedicated Leased Lines",
                      category: "Whitepaper",
                      image: "/resources/network_engineer_ops.jpg",
                      link: "/articles",
                    },
                  ].map((article, i) => (
                    <Link
                      key={i}
                      href={article.link}
                      onClick={() => setDrawerOpen(false)}
                      className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-[#E31E24] hover:shadow-lg transition-all flex flex-col"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform" />
                        <span className="absolute top-3 left-3 px-2 py-1 bg-black/75 backdrop-blur-md rounded text-[10px] font-mono font-bold text-white uppercase">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#E31E24] transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <span className="text-xs text-[#E31E24] font-mono font-semibold mt-3 flex items-center gap-1">
                          Read Article →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 4. CLIENTS TAB (WHITE THEME) */}
            {activeNavTab === "clients" && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 text-left shadow-xl text-gray-900">
                <div className="pb-6 border-b border-gray-200">
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#E31E24] uppercase block mb-1">
                    Enterprise Trust
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Empowering India&apos;s Leading Brands</h3>
                  <p className="text-xs text-gray-600 mt-2">From hyper-scale logistics and retail to banking and healthcare, we power mission-critical operations.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8 py-4 items-center justify-center">
                  {["Lenskart", "Blue Dart", "Bellavita", "DTDC Express", "ESAF Small Finance Bank"].map((brand) => (
                    <div key={brand} className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center text-xs font-mono font-bold text-gray-800 shadow-2xs">
                      {brand}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-600">Discover how Adapt India delivers 99.999% uptime for multi-site enterprise infrastructure.</span>
                  <Link
                    href="/services"
                    onClick={() => setDrawerOpen(false)}
                    className="px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs font-mono font-bold tracking-wider uppercase rounded-md transition-colors whitespace-nowrap"
                  >
                    Explore Solutions →
                  </Link>
                </div>
              </div>
            )}

            {/* 5. CONTACT US TAB (WHITE THEME) */}
            {activeNavTab === "contact" && (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 text-left shadow-xl text-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#E31E24] uppercase block mb-1">
                      Get In Touch
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">Contact Adapt India Networks</h3>
                    <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                      Need dedicated leased line pricing, an SD-WAN audit, or emergency NOC escalation? Our enterprise network engineers are available 24/7/365.
                    </p>

                    <div className="mt-6 flex flex-col gap-4 text-xs font-mono">
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                        <span className="text-[#E31E24] font-bold block mb-1">24/7 NOC HOTLINE</span>
                        <a href="tel:+918287479961" className="text-lg font-bold text-gray-900 hover:text-red-600 block">
                          +91 82874 79961
                        </a>
                        <a href="mailto:support@adapt-india.net" className="text-xs text-gray-600 hover:text-red-600 block mt-1">
                          support@adapt-india.net
                        </a>
                      </div>
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                        <span className="text-gray-500 font-bold block mb-1">HEADQUARTERS</span>
                        <span className="text-gray-800">Paschim Vihar, New Delhi, India</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#f8fafc] border border-blue-100 text-left">
                    <h4 className="text-base font-bold text-gray-900">Schedule Free Enterprise Network Audit</h4>
                    <p className="text-xs text-gray-600 mt-2">Our certified L3 network architects will analyze your existing latency, bandwidth utilization, and multi-cloud routing to identify optimizations.</p>
                    <Link
                      href="/contact"
                      onClick={() => setDrawerOpen(false)}
                      className="mt-6 inline-block w-full py-3 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs font-mono font-bold tracking-wider uppercase rounded-md text-center transition-colors shadow-md shadow-red-600/30"
                    >
                      Book Comprehensive Audit →
                    </Link>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Drawer Footer Strip */}
          <div className="border-t border-gray-200 bg-white px-4 sm:px-8 py-3 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2 mt-auto">
            <span>© {new Date().getFullYear()} Adapt India Networks. Carrier-Grade Telecom &amp; SD-WAN Infrastructure.</span>
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <Link href="/privacy" onClick={() => setDrawerOpen(false)} className="hover:text-gray-900">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" onClick={() => setDrawerOpen(false)} className="hover:text-gray-900">Terms of Service</Link>
            </div>
          </div>

        </div>
        </>
      )}

      {/* ============================================================ */}
      {/* SIMPLE & CLEAN SEARCH MODAL                                  */}
      {/* ============================================================ */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-start pt-16 sm:pt-24 px-4 sm:px-6 animate-in fade-in duration-150 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSearchOpen(false);
              setSearchQuery("");
            }
          }}
        >
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-150 my-auto sm:my-0">
            
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 sm:py-4 border-b border-zinc-100">
              <svg className="w-5 h-5 text-zinc-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or solutions..."
                className="w-full bg-transparent text-zinc-900 placeholder-zinc-400 text-sm sm:text-base focus:outline-none font-sans"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 transition-colors"
                  aria-label="Clear query"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="p-1.5 text-zinc-400 hover:text-zinc-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Results or Quick Links */}
            <div className="max-h-[60vh] overflow-y-auto">
              {filteredResults.length > 0 ? (
                <div className="p-2 sm:p-3 space-y-1">
                  {filteredResults.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 transition-all cursor-pointer"
                    >
                      <div className="flex-1 pr-3">
                        <h4 className="text-sm font-semibold text-zinc-900 group-hover:text-[#E31E24] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5 font-normal">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-zinc-300 group-hover:text-[#E31E24] group-hover:translate-x-0.5 transition-all text-xs shrink-0">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              ) : searchQuery.trim() !== "" ? (
                <div className="py-12 px-4 text-center">
                  <p className="text-sm text-zinc-600 mb-2">
                    No results found for &ldquo;{searchQuery}&rdquo;
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-[#E31E24] hover:underline font-medium"
                  >
                    Clear search query
                  </button>
                </div>
              ) : (
                <div className="p-4 sm:p-5">
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2 px-2">
                    Popular Services
                  </div>
                  <div className="space-y-1">
                    {[
                      { title: "Internet Leased Line (ILL)", link: "/services/internet-leased-line" },
                      { title: "Managed SD-WAN Solutions", link: "/services/sd-wan" },
                      { title: "Smart Internet (ILL)", link: "/services/smart-internet-ill" },
                      { title: "MPLS VPN Connectivity", link: "/services/mpls" },
                      { title: "Enterprise Broadband", link: "/services/enterprise-broadband" },
                      { title: "Enterprise Managed Wi-Fi", link: "/services/managed-wifi" },
                    ].map((item) => (
                      <Link
                        key={item.title}
                        href={item.link}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-zinc-700 hover:text-[#E31E24] hover:bg-zinc-50 transition-colors"
                      >
                        <span>{item.title}</span>
                        <span className="text-zinc-300 text-xs">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
