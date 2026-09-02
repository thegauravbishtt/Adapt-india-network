"use client";

import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import NewsletterSection from "../../../components/NewsletterSection";
import Footer from "../../../components/Footer";
import { LanguageProvider } from "../../../context/LanguageContext";
import { ServiceDetail } from "../../../data/servicesData";

interface ServiceDetailClientProps {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeSimulatorTab, setActiveSimulatorTab] = useState<"push" | "chat" | "biometrics" | "sync">("push");
  const [activeIndustryTab, setActiveIndustryTab] = useState<"retail" | "health" | "fintech">("retail");
  const [activeDevopsTab, setActiveDevopsTab] = useState<"k8s" | "cicd" | "cost">("k8s");
  const [activeCloudSimulatorTab, setActiveCloudSimulatorTab] = useState<"autoscaling" | "failover" | "security" | "finops">("autoscaling");
  const [activeItConsultingTab, setActiveItConsultingTab] = useState<"fractional" | "duediligence" | "migration" | "techdebt">("fractional");
  const [activeUiUxSimulatorTab, setActiveUiUxSimulatorTab] = useState<"tokens" | "prototype" | "accessibility" | "handoff">("tokens");
  const [activeGoogleAdsTab, setActiveGoogleAdsTab] = useState<"pmax" | "search" | "shopping" | "fraud">("pmax");
  const [activeGoogleCampaignTab, setActiveGoogleCampaignTab] = useState<"search" | "display" | "shopping">("search");
  const [activeMetaProcessTab, setActiveMetaProcessTab] = useState<"dct" | "capi" | "asc">("dct");
  const [metaPlacement, setMetaPlacement] = useState<"facebook" | "instagram">("facebook");
  const [metaHeadline, setMetaHeadline] = useState<string>("Smarter Tech for Business Growth");
  const [metaPrimaryText, setMetaPrimaryText] = useState<string>(
    "Owlio Works builds high-performance custom applications, web platforms, and marketing campaigns to help your brand grow."
  );
  const [metaCta, setMetaCta] = useState<string>("Learn More");
  const [activeSocialMediaTab, setActiveSocialMediaTab] = useState<"video" | "carousel" | "community" | "ugc">("video");
  const [activeSocialProcessTab, setActiveSocialProcessTab] = useState<"calendar" | "syndication" | "listening">("calendar");
  const [activeContentPill, setActiveContentPill] = useState<"clarity" | "growth" | "rankings" | "resonance">("resonance");
  const [copyOptimizerMode, setCopyOptimizerMode] = useState<"raw" | "intent" | "keywords" | "readability">("raw");
  const [activeWhySeoIndex, setActiveWhySeoIndex] = useState<number>(0);
  const [activeGmbTab, setActiveGmbTab] = useState<"visibility" | "engagements" | "reviews">("visibility");
  const [seoMainTab, setSeoMainTab] = useState<"onpage" | "content" | "local">("onpage");
  const [seoParameter, setSeoParameter] = useState<"headings" | "metatags" | "linking">("headings");
  const [seoIsOptimized, setSeoIsOptimized] = useState<boolean>(true);
  const [activePillIndex, setActivePillIndex] = useState<number>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col overflow-x-clip relative w-full select-none">
        <Navbar />

        {/* 1. HERO BANNER (Compact, Sleek Service Background Banner) */}
        <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          
          {/* Background Image with Clear Directional Gradient (Photo clearly visible) */}
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover object-center scale-100 filter brightness-[0.78] contrast-[1.08]"
            />
            {/* Directional gradient to keep photo vibrant on right while left text is readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/40 z-10"></div>
          </div>

          {/* Top Row: Back to Home + Global Divider Line */}
          <div className="relative z-20 max-w-7xl mx-auto w-full mb-6 sm:mb-8">
            <div className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/20">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
              >
                <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                <span>BACK TO HOME</span>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="/services"
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-semibold text-zinc-400 hover:text-zinc-200 uppercase tracking-wider transition-colors"
                >
                  <span>ALL SERVICES</span>
                </a>
                <span className="hidden sm:inline-block text-zinc-600">/</span>
                <span className="px-3 py-0.5 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // {service.category}
                </span>
              </div>
            </div>
          </div>

          {/* Center Content: Clean Title + Scroll Down Indicator */}
          <div className="relative z-20 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="flex flex-col items-start text-left max-w-3xl">
                {/* Category Pill Tagline */}
                <span className="font-mono text-xs font-extrabold tracking-widest text-[#fbea3d] uppercase mb-2 block">
                  // {service.tagline}
                </span>

                {/* Compact Display Title */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                  {service.name}
                </h1>

                <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                  {service.heroSubtitle}
                </p>
              </div>

              {/* Right Side: Scroll Down Indicator */}
              <div className="hidden lg:flex items-center gap-3 text-zinc-400 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end lg:self-center">
                <span>SCROLL DOWN</span>
                <span className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-[#fbea3d] animate-bounce">
                  ↓
                </span>
              </div>

            </div>
          </div>

        </section>

        {/* 2. SECTION 2: LIVE DEVICE SIMULATOR (Only for App Development) / STRATEGIC OVERVIEW (All other services) */}
        {service.slug === "app-development" ? (
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-6">
                  MOBILE APP DEVELOPMENT COMPANY{" "}
                  <span className="text-zinc-400 font-black block">FOR MODERN BUSINESSES</span>
                </h2>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal mb-5">
                  In today&apos;s digital world, your business needs more than just a website. A powerful mobile application helps you connect with customers faster, improve engagement, and increase sales. At Owlio Works, we create scalable and user-focused apps that help brands grow in competitive markets.
                </p>

                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-normal">
                  As a trusted mobile app development company, we build custom solutions for startups, enterprises, and growing businesses. Our team combines strategy, creativity, and technology to deliver applications that perform smoothly across devices and platforms.
                </p>
              </div>

              {/* Right Column: Dark Live Device Simulator Container */}
              <div className="lg:col-span-6 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-2xl">
                
                {/* Left Controls Inside Simulator Box */}
                <div className="flex flex-col items-start text-left w-full sm:w-[48%]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">📱</span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      LIVE DEVICE SIMULATOR
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                    Select different native app capabilities to see how we build micro-interactions:
                  </p>

                  {/* 4 Interactive Tab Buttons */}
                  <div className="flex flex-col gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setActiveSimulatorTab("push")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeSimulatorTab === "push"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🔔</span>
                      <span>Push Notifications</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSimulatorTab("chat")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeSimulatorTab === "chat"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>💬</span>
                      <span>Real-Time Chat</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSimulatorTab("biometrics")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeSimulatorTab === "biometrics"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🔒</span>
                      <span>Secure Biometrics</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSimulatorTab("sync")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeSimulatorTab === "sync"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>☁️</span>
                      <span>Cloud Caching Sync</span>
                    </button>
                  </div>
                </div>

                {/* Right Realistic Smartphone Mockup */}
                <div className="w-[230px] sm:w-[245px] h-[360px] sm:h-[390px] rounded-[38px] border-[5px] border-zinc-700/90 bg-zinc-950 relative p-3.5 flex flex-col justify-between overflow-hidden shadow-2xl shrink-0">
                  {/* Phone Status Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1 pt-0.5">
                    <span>9:41 AM</span>
                    <div className="w-16 h-3 bg-zinc-900 rounded-full mx-auto border border-zinc-800"></div>
                    <span>5G 98%</span>
                  </div>

                  {/* Dynamic Interactive Simulator Screen Content */}
                  <div className="flex-1 flex flex-col justify-center items-center my-3 relative w-full">
                    {activeSimulatorTab === "push" && (
                      <div className="w-full bg-zinc-900/95 border border-zinc-700/90 rounded-2xl p-3 shadow-lg flex flex-col gap-1.5 animate-fadeIn text-left">
                        <div className="flex items-center justify-between text-[10px] text-zinc-400">
                          <span className="font-bold text-[#fbea3d] flex items-center gap-1">
                            📦 Shipping Alert
                          </span>
                          <span className="text-[9px]">now</span>
                        </div>
                        <p className="text-[11px] text-white leading-snug font-medium">
                          Owlio Works App: Your order #2847 has been processed and is out for local delivery!
                        </p>
                      </div>
                    )}

                    {activeSimulatorTab === "chat" && (
                      <div className="w-full flex flex-col gap-2 text-left animate-fadeIn">
                        <div className="bg-zinc-800 text-zinc-200 text-[10px] p-2 rounded-xl rounded-tl-none self-start max-w-[85%]">
                          Hey team! Does offline mode sync automatically?
                        </div>
                        <div className="bg-[#fbea3d] text-black font-semibold text-[10px] p-2 rounded-xl rounded-tr-none self-end max-w-[85%]">
                          Yes! Instant sync with &lt;15ms socket latency 🚀
                        </div>
                        <div className="text-[9px] font-mono text-emerald-400 self-start flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>Socket Connected</span>
                        </div>
                      </div>
                    )}

                    {activeSimulatorTab === "biometrics" && (
                      <div className="flex flex-col items-center gap-2.5 text-center animate-fadeIn">
                        <div className="w-14 h-14 rounded-full border-2 border-[#fbea3d] flex items-center justify-center text-xl text-[#fbea3d] shadow-[0_0_20px_rgba(251,234,61,0.3)] animate-pulse">
                          🔒
                        </div>
                        <span className="text-xs font-bold text-white font-mono">Face ID Verified</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800">
                          ✓ Access Granted
                        </span>
                      </div>
                    )}

                    {activeSimulatorTab === "sync" && (
                      <div className="w-full bg-zinc-900/90 border border-zinc-800 rounded-2xl p-3 flex flex-col gap-2 animate-fadeIn text-left">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-mono text-zinc-300 font-bold">Cloud Sync</span>
                          <span className="text-[#fbea3d] font-mono font-bold">100%</span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#fbea3d] w-full animate-pulse"></div>
                        </div>
                        <span className="text-[10px] text-zinc-400">
                          1,420 items cached locally in SQLite with zero latency.
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Phone Bottom Home Bar */}
                  <div className="w-20 h-1 bg-zinc-700 rounded-full mx-auto mb-1"></div>
                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "cloud-devops" ? (
          /* Cloud & DevOps Custom Live Topology & SRE Telemetry Simulator */
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-6">
                  HIGH-AVAILABILITY CLOUD ARCHITECTURE{" "}
                  <span className="text-zinc-400 font-black block">FOR MODERN ENTERPRISES</span>
                </h2>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal mb-5">
                  In today&apos;s 24/7 digital economy, modern enterprises cannot afford downtime, security vulnerabilities, or sluggish deployments. A resilient cloud infrastructure ensures your applications scale seamlessly during peak traffic bursts while maintaining strict 99.99% uptime.
                </p>

                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-normal">
                  As a premier cloud & DevOps engineering partner, we eliminate infrastructure bottlenecks through automated Terraform IaC, multi-region Kubernetes clusters, and zero-trust security perimeters tailored for scale.
                </p>
              </div>

              {/* Right Column: Dark Live Cloud Simulator Container */}
              <div className="lg:col-span-6 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-2xl">
                
                {/* Left Controls Inside Simulator Box */}
                <div className="flex flex-col items-start text-left w-full sm:w-[48%]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">☁️</span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      LIVE CLUSTER SIMULATOR
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                    Select different cloud topologies to see automated failover & scaling in action:
                  </p>

                  {/* 4 Interactive Tab Buttons */}
                  <div className="flex flex-col gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setActiveCloudSimulatorTab("autoscaling")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeCloudSimulatorTab === "autoscaling"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🚀</span>
                      <span>Auto-Scaling Surge</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveCloudSimulatorTab("failover")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeCloudSimulatorTab === "failover"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🛡️</span>
                      <span>Multi-Region Failover</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveCloudSimulatorTab("security")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeCloudSimulatorTab === "security"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🔒</span>
                      <span>Zero-Trust Security</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveCloudSimulatorTab("finops")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeCloudSimulatorTab === "finops"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>💰</span>
                      <span>FinOps Cost Optimizer</span>
                    </button>
                  </div>
                </div>

                {/* Right Visual Console Mockup */}
                <div className="w-full sm:w-[50%] bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-xl min-h-[340px]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 border-b border-zinc-800 pb-2">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Cluster Active</span>
                    </span>
                    <span className="text-[#fbea3d]">SLA 99.99%</span>
                  </div>

                  {/* Dynamic Interactive Simulator Screen Content */}
                  <div className="my-auto py-2">
                    {activeCloudSimulatorTab === "autoscaling" && (
                      <div className="flex flex-col gap-2.5 text-left animate-fadeIn">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                          <span className="text-[10px] text-zinc-400 block font-mono">TRAFFIC LOAD</span>
                          <span className="text-xl font-mono font-black text-[#fbea3d]">120,400 req/s</span>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-zinc-300">Pod Auto-Scale</span>
                            <span className="text-emerald-400 font-bold">8 → 24 Nodes</span>
                          </div>
                          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[85%] animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                          <span>P99 Latency: 9ms</span>
                          <span>0 Dropped Packets ✓</span>
                        </div>
                      </div>
                    )}

                    {activeCloudSimulatorTab === "failover" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-red-950/40 border border-red-800/60 p-2.5 rounded-xl">
                          <span className="text-[10px] text-red-400 block font-bold">PRIMARY: AWS us-east-1</span>
                          <span className="text-zinc-400 text-[11px]">Simulated Region Outage</span>
                        </div>
                        <div className="bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-xl">
                          <span className="text-[10px] text-emerald-400 block font-bold">SECONDARY: GCP eu-west3</span>
                          <span className="text-zinc-200 text-[11px]">Instant Failover in &lt; 0.4s</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 text-center font-bold bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
                          100% Traffic Preserved · Zero Data Loss ✓
                        </div>
                      </div>
                    )}

                    {activeCloudSimulatorTab === "security" && (
                      <div className="flex flex-col gap-2 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">ENCRYPTION ENGINE</span>
                          <span className="text-[#fbea3d] font-bold">HashiCorp Vault AES-256</span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">RBAC IDENTITY ROTATION</span>
                          <span className="text-zinc-200">Ephemeral Token every 60s</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 font-bold flex items-center justify-between pt-1">
                          <span>SOC2 Type II Compliant</span>
                          <span>HIPAA Ready ✓</span>
                        </div>
                      </div>
                    )}

                    {activeCloudSimulatorTab === "finops" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-zinc-400 block">FINOPS SAVINGS</span>
                            <span className="text-xl font-black text-[#fbea3d] font-display">44.6% CUT</span>
                          </div>
                          <span className="text-[10px] bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-md">
                            Spot Arbitrage
                          </span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 text-[11px] text-zinc-300">
                          Auto-purged 18 zombie clusters · -$18,400/mo spend saved.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Console Footer */}
                  <div className="pt-2 border-t border-zinc-800 text-[9px] font-mono text-zinc-500 flex justify-between">
                    <span>Grafana / Datadog Telemetry</span>
                    <span className="text-emerald-400">Sync: Live</span>
                  </div>
                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "it-consulting" ? (
          /* IT Consulting Custom Strategic Advisory & CTO Engine */
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-6">
                  STRATEGIC IT CONSULTING &amp; FRACTIONAL CTO LEADERSHIP{" "}
                  <span className="text-zinc-400 font-black block">FOR HIGH-GROWTH ENTERPRISES</span>
                </h2>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal mb-5">
                  Technology choices dictate your business velocity, valuation, and security. We provide executive-level technical leadership, unbiased architecture audits, and enterprise digital transformation blueprints that prevent multi-million dollar engineering rewrites.
                </p>

                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-normal">
                  Whether preparing for Series A/B technical due diligence, migrating away from legacy monoliths, or selecting high-leverage cloud stacks, our battle-tested CTO advisors guide your team with precision.
                </p>
              </div>

              {/* Right Column: Dark CTO Advisory Simulator Container */}
              <div className="lg:col-span-6 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-2xl">
                
                {/* Left Controls Inside Simulator Box */}
                <div className="flex flex-col items-start text-left w-full sm:w-[48%]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🧠</span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      CTO ADVISORY ENGINE
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                    Explore our strategic advisory frameworks and risk mitigation diagnostics:
                  </p>

                  {/* 4 Interactive Tab Buttons */}
                  <div className="flex flex-col gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setActiveItConsultingTab("fractional")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeItConsultingTab === "fractional"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🧭</span>
                      <span>Fractional CTO Strategy</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveItConsultingTab("duediligence")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeItConsultingTab === "duediligence"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>📊</span>
                      <span>Technical Due Diligence</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveItConsultingTab("migration")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeItConsultingTab === "migration"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🏗️</span>
                      <span>Monolith to Microservices</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveItConsultingTab("techdebt")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeItConsultingTab === "techdebt"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🛡️</span>
                      <span>Tech Debt &amp; FinOps Audit</span>
                    </button>
                  </div>
                </div>

                {/* Right Visual Advisory Output Monitor */}
                <div className="w-full sm:w-[50%] bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-xl min-h-[340px]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 border-b border-zinc-800 pb-2">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Advisory Diagnostic: Active</span>
                    </span>
                    <span className="text-[#fbea3d]">Confidential</span>
                  </div>

                  {/* Dynamic Interactive Simulator Screen Content */}
                  <div className="my-auto py-2">
                    {activeItConsultingTab === "fractional" && (
                      <div className="flex flex-col gap-2.5 text-left animate-fadeIn">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                          <span className="text-[10px] text-zinc-400 block font-mono">EXECUTIVE ROADMAP</span>
                          <span className="text-xl font-mono font-black text-[#fbea3d]">Q3-Q4 Sprint Delivery</span>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                          <div className="flex justify-between text-xs font-mono mb-1">
                            <span className="text-zinc-300">Engineering Velocity</span>
                            <span className="text-emerald-400 font-bold">+240% Team Output</span>
                          </div>
                          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[92%] animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                          <span>Execution Risk: -85%</span>
                          <span>Zero Lock-in ✓</span>
                        </div>
                      </div>
                    )}

                    {activeItConsultingTab === "duediligence" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-xl">
                          <span className="text-[10px] text-emerald-400 block font-bold">SERIES B DUE DILIGENCE AUDIT</span>
                          <span className="text-zinc-200 text-[11px]">Architecture Score: 94/100 (Tier 1)</span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block font-bold">COMPLIANCE READINESS</span>
                          <span className="text-zinc-200 text-[11px]">SOC2 Type II + GDPR Verified</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 text-center font-bold bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
                          +$4.2M Clean IP Enterprise Valuation Impact ✓
                        </div>
                      </div>
                    )}

                    {activeItConsultingTab === "migration" && (
                      <div className="flex flex-col gap-2 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">MIGRATION PATTERN</span>
                          <span className="text-[#fbea3d] font-bold">Strangler Fig Pattern (Zero Downtime)</span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">DECOUPLED DOMAINS</span>
                          <span className="text-zinc-200">Auth, Billing, Core Engine, Webhooks</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 font-bold flex items-center justify-between pt-1">
                          <span>Uptime: 99.99% Guaranteed</span>
                          <span>Sub-ms Event Mesh ✓</span>
                        </div>
                      </div>
                    )}

                    {activeItConsultingTab === "techdebt" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-zinc-400 block">ANNUAL SAVINGS</span>
                            <span className="text-xl font-black text-[#fbea3d] font-display">$320,000 / YR</span>
                          </div>
                          <span className="text-[10px] bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-md">
                            FinOps Audited
                          </span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 text-[11px] text-zinc-300">
                          Eliminated 3 redundant SaaS tools &amp; unblocked 43 developer bottlenecks.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Console Footer */}
                  <div className="pt-2 border-t border-zinc-800 text-[9px] font-mono text-zinc-500 flex justify-between">
                    <span>Executive Advisory Deliverable</span>
                    <span className="text-emerald-400">Governance: Weekly</span>
                  </div>
                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "ui-ux-design" ? (
          /* UI/UX Design Custom Interactive Figma Canvas & Design System Simulator */
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-6">
                  HUMAN-CENTERED UI/UX DESIGN &amp; PROTOTYPING{" "}
                  <span className="text-zinc-400 font-black block">FOR HIGH-CONVERTING PRODUCTS</span>
                </h2>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal mb-5">
                  Design is not merely visual decoration—it is commercial strategy. We blend behavioral psychology, rapid usability testing, and tokenized Figma component libraries to design interfaces that eliminate user friction and convert effortlessly.
                </p>

                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-normal">
                  From responsive SaaS web applications to consumer mobile apps, our design system frameworks establish pixel-perfect visual consistency and accelerate developer velocity by 3x.
                </p>
              </div>

              {/* Right Column: Dark Figma Canvas Simulator Container */}
              <div className="lg:col-span-6 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-2xl">
                
                {/* Left Controls Inside Simulator Box */}
                <div className="flex flex-col items-start text-left w-full sm:w-[48%]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🎨</span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      FIGMA CANVAS SIMULATOR
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                    Explore different design system tokens &amp; live interactive prototypes:
                  </p>

                  {/* 4 Interactive Tab Buttons */}
                  <div className="flex flex-col gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setActiveUiUxSimulatorTab("tokens")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeUiUxSimulatorTab === "tokens"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>✨</span>
                      <span>Design System Tokens</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveUiUxSimulatorTab("prototype")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeUiUxSimulatorTab === "prototype"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>📱</span>
                      <span>Micro-Interaction Flow</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveUiUxSimulatorTab("accessibility")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeUiUxSimulatorTab === "accessibility"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>👁️</span>
                      <span>WCAG 2.1 AAA Contrast</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveUiUxSimulatorTab("handoff")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeUiUxSimulatorTab === "handoff"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>⚡</span>
                      <span>Developer Handoff Specs</span>
                    </button>
                  </div>
                </div>

                {/* Right Visual Output Monitor */}
                <div className="w-full sm:w-[50%] bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-xl min-h-[340px]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 border-b border-zinc-800 pb-2">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Figma Component Library</span>
                    </span>
                    <span className="text-[#fbea3d]">Auto-Layout v5</span>
                  </div>

                  {/* Dynamic Interactive Simulator Screen Content */}
                  <div className="my-auto py-2">
                    {activeUiUxSimulatorTab === "tokens" && (
                      <div className="flex flex-col gap-2.5 text-left animate-fadeIn">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                          <span className="text-[10px] text-zinc-400 block font-mono">TOKENIZED SYSTEM</span>
                          <span className="text-sm font-mono font-black text-[#fbea3d]">Primary: #FBEA3D · Obsidian: #0C0C0D</span>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center justify-between">
                          <div>
                            <span className="text-zinc-300 text-xs font-bold block">140+ Component Variants</span>
                            <span className="text-zinc-400 text-[10px]">Button, Modal, Input, Cards</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800">
                            100% Synced
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                          <span>Auto-Layout: 100%</span>
                          <span>Zero Manual Spacing ✓</span>
                        </div>
                      </div>
                    )}

                    {activeUiUxSimulatorTab === "prototype" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">
                          <span className="text-[10px] text-zinc-400 block font-bold">ANIMATED FLOW</span>
                          <span className="text-zinc-200 text-[11px]">Onboarding Wireframe → Cart Drawer</span>
                        </div>
                        <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between">
                          <span className="text-zinc-300 text-[11px]">Spring Easing (0.24s)</span>
                          <span className="text-[#fbea3d] font-bold">60 FPS Fluid</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 text-center font-bold bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
                          Usability Task Completion: 98.4% ✓
                        </div>
                      </div>
                    )}

                    {activeUiUxSimulatorTab === "accessibility" && (
                      <div className="flex flex-col gap-2 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">CONTRAST RATIO</span>
                          <span className="text-[#fbea3d] font-bold">14.8:1 (AAA Rating on Dark &amp; Light)</span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">SCREEN READER TESTING</span>
                          <span className="text-zinc-200">Semantic ARIA Labels &amp; Focus Traps</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 font-bold flex items-center justify-between pt-1">
                          <span>100% WCAG 2.1 AA Compliant</span>
                          <span>Inclusive UX ✓</span>
                        </div>
                      </div>
                    )}

                    {activeUiUxSimulatorTab === "handoff" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-zinc-400 block">DEV VELOCITY BOOST</span>
                            <span className="text-xl font-black text-[#fbea3d] font-display">3.2x FASTER</span>
                          </div>
                          <span className="text-[10px] bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-md">
                            Tailwind Ready
                          </span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 text-[11px] text-zinc-300">
                          Exports annotated spacing tokens, CSS class maps, and React props.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Console Footer */}
                  <div className="pt-2 border-t border-zinc-800 text-[9px] font-mono text-zinc-500 flex justify-between">
                    <span>Export: React / Tailwind v4</span>
                    <span className="text-emerald-400">Tokens: Published</span>
                  </div>
                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "seo-services" ? (
          /* SEO Services Googlebot Indexing & Crawler Simulator (Compact & Sleek) */
          <section className="w-full bg-[#111215] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              
              {/* Section Headline */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-display tracking-tight uppercase leading-tight mb-5">
                GOOGLEBOT INDEXING &amp; CRAWLER SIMULATOR
              </h2>

              {/* Main Top Category Navigation Tabs */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 mb-5 border-b border-zinc-800/80 pb-2 w-full max-w-md mx-auto">
                <button
                  type="button"
                  onClick={() => {
                    setSeoMainTab("onpage");
                    setSeoParameter("headings");
                  }}
                  className={`font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer relative pb-1.5 ${
                    seoMainTab === "onpage"
                      ? "text-[#fbea3d]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  ON-PAGE SEO
                  {seoMainTab === "onpage" && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fbea3d] shadow-[0_0_6px_#fbea3d]"></span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSeoMainTab("content");
                    setSeoParameter("headings");
                  }}
                  className={`font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer relative pb-1.5 ${
                    seoMainTab === "content"
                      ? "text-[#fbea3d]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  CONTENT STRATEGY
                  {seoMainTab === "content" && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fbea3d] shadow-[0_0_6px_#fbea3d]"></span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSeoMainTab("local");
                    setSeoParameter("headings");
                  }}
                  className={`font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer relative pb-1.5 ${
                    seoMainTab === "local"
                      ? "text-[#fbea3d]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  LOCAL SEO
                  {seoMainTab === "local" && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fbea3d] shadow-[0_0_6px_#fbea3d]"></span>
                  )}
                </button>
              </div>

              {/* Main Debugger Terminal Window Box */}
              <div className="w-full bg-[#18191c] border border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col gap-3.5 text-left">
                
                {/* Top Window Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest font-semibold ml-1.5">
                      GOOGLEBOT INDEX SIMULATOR V2.1
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live Debugger</span>
                  </div>
                </div>

                {/* Parameter Selection Row */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 border-b border-zinc-800/60 pb-2 text-[11px] font-mono">
                  <span className="text-zinc-500 font-bold uppercase tracking-wider">
                    SELECT PARAMETER:
                  </span>

                  <button
                    type="button"
                    onClick={() => setSeoParameter("headings")}
                    className={`uppercase font-bold tracking-wider transition-all cursor-pointer relative pb-0.5 ${
                      seoParameter === "headings"
                        ? "text-[#fbea3d]"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {seoMainTab === "onpage"
                      ? "HEADINGS"
                      : seoMainTab === "content"
                      ? "KEYWORD CLUSTERS"
                      : "NAP CITATIONS"}
                    {seoParameter === "headings" && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fbea3d]"></span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSeoParameter("metatags")}
                    className={`uppercase font-bold tracking-wider transition-all cursor-pointer relative pb-0.5 ${
                      seoParameter === "metatags"
                        ? "text-[#fbea3d]"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {seoMainTab === "onpage"
                      ? "META TAGS"
                      : seoMainTab === "content"
                      ? "SEMANTIC SCHEMA"
                      : "GEO COORDINATES"}
                    {seoParameter === "metatags" && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fbea3d]"></span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setSeoParameter("linking")}
                    className={`uppercase font-bold tracking-wider transition-all cursor-pointer relative pb-0.5 ${
                      seoParameter === "linking"
                        ? "text-[#fbea3d]"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {seoMainTab === "onpage"
                      ? "LINKING"
                      : seoMainTab === "content"
                      ? "TOPIC MESH"
                      : "MAP 3-PACK"}
                    {seoParameter === "linking" && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fbea3d]"></span>
                    )}
                  </button>
                </div>

                {/* State Label & RAW HTML / OPTIMIZED Toggle Pill Switch */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        seoIsOptimized ? "bg-[#fbea3d] animate-pulse" : "bg-red-400"
                      }`}
                    ></span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                      {seoIsOptimized ? "OPTIMIZED PAGE STATE" : "RAW UNOPTIMIZED HTML"}
                    </span>
                  </div>

                  {/* Toggle Pill Buttons */}
                  <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-full p-0.5">
                    <button
                      type="button"
                      onClick={() => setSeoIsOptimized(false)}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                        !seoIsOptimized
                          ? "bg-red-500/20 text-red-400 border border-red-500/40"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      RAW HTML
                    </button>
                    <button
                      type="button"
                      onClick={() => setSeoIsOptimized(true)}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                        seoIsOptimized
                          ? "bg-[#fbea3d] text-black shadow-md"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      OPTIMIZED
                    </button>
                  </div>
                </div>

                {/* Code Terminal Display Area */}
                <div className="w-full bg-[#0a0a0c] border border-zinc-800 rounded-xl p-3.5 sm:p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto min-h-[90px] flex flex-col justify-center">
                  {seoMainTab === "onpage" && seoParameter === "headings" && (
                    seoIsOptimized ? (
                      <div className="text-sky-300 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;h1&gt;Web Design &amp; SEO Services | Revelar&lt;/h1&gt;</p>
                        <p>&lt;h2&gt;Full-Scale SEO Management&lt;/h2&gt;</p>
                        <p>&lt;h3&gt;Delhi NCR &amp; Global SEO Campaigns&lt;/h3&gt;</p>
                      </div>
                    ) : (
                      <div className="text-red-400 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;div class=&quot;header-text&quot;&gt;Web Design &amp; SEO&lt;/div&gt; <span className="text-zinc-600">// Missing H1</span></p>
                        <p>&lt;span style=&quot;font-size:20px&quot;&gt;Full-Scale SEO Management&lt;/span&gt; <span className="text-zinc-600">// Skipped hierarchy</span></p>
                        <p>&lt;h4&gt;Delhi NCR &amp; Global Campaigns&lt;/h4&gt; <span className="text-zinc-600">// Broken H3 level</span></p>
                      </div>
                    )
                  )}

                  {seoMainTab === "onpage" && seoParameter === "metatags" && (
                    seoIsOptimized ? (
                      <div className="text-sky-300 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;title&gt;Enterprise SEO Agency &amp; Rank Optimization | Owlio Works&lt;/title&gt;</p>
                        <p>&lt;meta name=&quot;description&quot; content=&quot;Dominate search results with data-backed technical SEO, keyword clusters, and high-authority backlinks.&quot; /&gt;</p>
                        <p>&lt;link rel=&quot;canonical&quot; href=&quot;https://owlioworks.com/services/seo-services&quot; /&gt;</p>
                      </div>
                    ) : (
                      <div className="text-red-400 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;title&gt;Home&lt;/title&gt; <span className="text-zinc-600">// Generic title tag</span></p>
                        <p>&lt;!-- Missing meta description --&gt; <span className="text-zinc-600">// Penalty in SERP CTR</span></p>
                        <p>&lt;!-- Missing canonical link tag --&gt; <span className="text-zinc-600">// Duplicate index penalty</span></p>
                      </div>
                    )
                  )}

                  {seoMainTab === "onpage" && seoParameter === "linking" && (
                    seoIsOptimized ? (
                      <div className="text-sky-300 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;a href=&quot;/services/web-development&quot; rel=&quot;noopener&quot;&gt;Internal Web Dev Cluster&lt;/a&gt;</p>
                        <p>&lt;a href=&quot;/case-studies/fintech-scale&quot; rel=&quot;noopener&quot;&gt;Authority Conversion Case Study&lt;/a&gt;</p>
                        <p className="text-emerald-400">&lt;!-- Deep semantic topic mesh with anchor text optimization --&gt;</p>
                      </div>
                    ) : (
                      <div className="text-red-400 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;a href=&quot;javascript:void(0)&quot;&gt;Click Here&lt;/a&gt; <span className="text-zinc-600">// Uncrawlable javascript link</span></p>
                        <p>&lt;a href=&quot;/page-2&quot;&gt;Read More&lt;/a&gt; <span className="text-zinc-600">// Non-descriptive anchor text</span></p>
                        <p>&lt;!-- 14 orphan subpages detected without internal links --&gt;</p>
                      </div>
                    )
                  )}

                  {seoMainTab === "content" && (
                    seoIsOptimized ? (
                      <div className="text-sky-300 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;script type=&quot;application/ld+json&quot;&gt;</p>
                        <p className="pl-4">&#123; &quot;@context&quot;: &quot;https://schema.org&quot;, &quot;@type&quot;: &quot;Service&quot;, &quot;name&quot;: &quot;SEO Optimization&quot;, &quot;provider&quot;: &quot;Owlio Works&quot; &#125;</p>
                        <p>&lt;/script&gt;</p>
                      </div>
                    ) : (
                      <div className="text-red-400 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;!-- Missing Schema.org JSON-LD structured data --&gt;</p>
                        <p>&lt;!-- Low keyword semantic density &amp; cannibalized queries --&gt;</p>
                      </div>
                    )
                  )}

                  {seoMainTab === "local" && (
                    seoIsOptimized ? (
                      <div className="text-sky-300 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;div itemscope itemtype=&quot;https://schema.org/LocalBusiness&quot;&gt;</p>
                        <p className="pl-4">&lt;meta itemprop=&quot;geo&quot; content=&quot;28.6139, 77.2090&quot; /&gt;</p>
                        <p className="pl-4">&lt;span itemprop=&quot;telephone&quot;&gt;+91 9999-OWLIO&lt;/span&gt;</p>
                        <p>&lt;/div&gt;</p>
                      </div>
                    ) : (
                      <div className="text-red-400 flex flex-col gap-1 animate-fadeIn">
                        <p>&lt;!-- Inconsistent NAP (Name, Address, Phone) detected --&gt;</p>
                        <p>&lt;!-- Missing LocalBusiness geo coordinates --&gt;</p>
                      </div>
                    )
                  )}
                </div>

                {/* Bottom Score & Status Explanation */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono pt-1.5 border-t border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 font-bold uppercase">INDEX SCORE:</span>
                    {seoIsOptimized ? (
                      <span className="text-zinc-400">
                        <span className="text-red-400 line-through">60%</span>{" "}
                        <span className="text-emerald-400 font-black text-xs">→ 98%</span>
                      </span>
                    ) : (
                      <span className="text-red-400 font-bold text-xs">60% (Indexing Risks)</span>
                    )}
                  </div>

                  <p className="text-zinc-400 text-[11px] sm:text-right">
                    {seoIsOptimized
                      ? "Corrected skipped heading levels to resolve accessibility tree crawling issues."
                      : "Unresolved syntax bottlenecks are throttling crawl budget."}
                  </p>
                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "google-ads" ? (
          /* Google Ads Performance Live Auction & ROAS Optimizer */
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-6">
                  PRECISION GOOGLE ADS BIDDING &amp; CONVERSION ENGINE{" "}
                  <span className="text-zinc-400 font-black block">FOR SCALE-READY ENTERPRISES</span>
                </h2>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal mb-5">
                  Broad match clicks and generic bidding deplete marketing budgets with zero ROI. We engineer high-intent Google Ads campaigns with negative keyword trees, Performance Max (PMax) asset groups, and server-side conversion tracking that guarantee maximum ROAS.
                </p>

                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-normal">
                  Our data-backed bidding models continuously capture bottom-of-funnel search intent while lowering Cost Per Acquisition (CPA) by up to 45%.
                </p>
              </div>

              {/* Right Column: Dark Live Auction Simulator Container */}
              <div className="lg:col-span-6 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-2xl">
                
                {/* Left Controls Inside Simulator Box */}
                <div className="flex flex-col items-start text-left w-full sm:w-[48%]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🎯</span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      LIVE ADS AUCTION ENGINE
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                    Select different ad campaigns to see bid strategy &amp; ROAS simulation:
                  </p>

                  {/* 4 Interactive Tab Buttons */}
                  <div className="flex flex-col gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setActiveGoogleAdsTab("pmax")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeGoogleAdsTab === "pmax"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🚀</span>
                      <span>Performance Max (PMax)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveGoogleAdsTab("search")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeGoogleAdsTab === "search"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🔍</span>
                      <span>High-Intent Search Alpha</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveGoogleAdsTab("shopping")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeGoogleAdsTab === "shopping"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🛒</span>
                      <span>Google Shopping &amp; SKU</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveGoogleAdsTab("fraud")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeGoogleAdsTab === "fraud"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🛡️</span>
                      <span>Click Fraud &amp; Negative Scrub</span>
                    </button>
                  </div>
                </div>

                {/* Right Visual Output Monitor */}
                <div className="w-full sm:w-[50%] bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-xl min-h-[340px]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 border-b border-zinc-800 pb-2">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Smart Bidding: Live</span>
                    </span>
                    <span className="text-[#fbea3d]">Target ROAS: 480%</span>
                  </div>

                  {/* Dynamic Interactive Simulator Screen Content */}
                  <div className="my-auto py-2">
                    {activeGoogleAdsTab === "pmax" && (
                      <div className="flex flex-col gap-2.5 text-left animate-fadeIn">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                          <span className="text-[10px] text-zinc-400 block font-mono">CONVERSION VALUE</span>
                          <span className="text-xl font-mono font-black text-[#fbea3d]">$42,850 Generated</span>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center justify-between">
                          <div>
                            <span className="text-zinc-300 text-xs font-bold block">Omni-Channel Asset Group</span>
                            <span className="text-zinc-400 text-[10px]">YouTube, Search, Discover, Gmail</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800">
                            4.8x ROAS
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                          <span>Quality Score: 10/10</span>
                          <span>Ad Rank: #1 Position ✓</span>
                        </div>
                      </div>
                    )}

                    {activeGoogleAdsTab === "search" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">
                          <span className="text-[10px] text-zinc-400 block font-bold">KEYWORD STRATEGY</span>
                          <span className="text-[#fbea3d] text-[11px]">[Exact Match] High Purchase Intent</span>
                        </div>
                        <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between">
                          <span className="text-zinc-300 text-[11px]">Avg CPC: $4.80 → $2.10</span>
                          <span className="text-emerald-400 font-bold">CTR: 18.4%</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 text-center font-bold bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
                          100% Negative Keyword Guardrail Active ✓
                        </div>
                      </div>
                    )}

                    {activeGoogleAdsTab === "shopping" && (
                      <div className="flex flex-col gap-2 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">MERCHANT CENTER SYNC</span>
                          <span className="text-[#fbea3d] font-bold">Top Performing SKU: 6.2x ROAS</span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">INVENTORY AUTOMATION</span>
                          <span className="text-zinc-200">Auto-pauses out-of-stock SKUs in real-time</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 font-bold flex items-center justify-between pt-1">
                          <span>Zero Ad Budget Waste</span>
                          <span>Live Catalog Sync ✓</span>
                        </div>
                      </div>
                    )}

                    {activeGoogleAdsTab === "fraud" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-zinc-400 block">BUDGET PROTECTED</span>
                            <span className="text-xl font-black text-[#fbea3d] font-display">+$3,400 SAVED</span>
                          </div>
                          <span className="text-[10px] bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-md">
                            Bot Shield Active
                          </span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 text-[11px] text-zinc-300">
                          Auto-blacklisted 1,240 invalid click farms &amp; competitor scraper IPs.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Console Footer */}
                  <div className="pt-2 border-t border-zinc-800 text-[9px] font-mono text-zinc-500 flex justify-between">
                    <span>Google Ads Enhanced Conversions</span>
                    <span className="text-emerald-400">Attribution: Data-Driven</span>
                  </div>
                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "meta-ads" ? (
          /* Meta Ads Custom "WITH STRATEGIC META ADVERTISING, GROW FASTER" + Social Feed Ad Previewer */
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-6">
                  WITH STRATEGIC META ADVERTISING,{" "}
                  <span className="text-zinc-400 font-black block">GROW FASTER</span>
                </h2>

                <p className="text-zinc-700 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-5">
                  Attracting the right traffic, selling quality leads, and growing sales are what you can expect to achieve with result-driven social media advertising at Owlio Works. We develop bespoke campaigns attentive to the goal of visibility, engagement, and conversions, on Facebook and Instagram.
                </p>

                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-normal">
                  Looking to achieve genuine growth rather than just a few clicks? Our advertising professionals can help your brand grow with precision-driven strategies. We are a trusted meta ads agency that can develop campaigns based on performance and customer action. Each strategy is tailored to your business objectives, user actions, and competitors.
                </p>
              </div>

              {/* Right Column: Dark Social Feed Ad Previewer Container */}
              <div className="lg:col-span-7 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col gap-6">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🔮</span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      SOCIAL FEED AD PREVIEWER
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-sky-400 font-semibold">
                    Interactive Customizer
                  </span>
                </div>

                {/* 2-Column Split: Controls on Left, Ad Mockup on Right */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Controls (Inputs) */}
                  <div className="md:col-span-6 flex flex-col gap-4 text-left">
                    
                    {/* Placement Preview */}
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        PLACEMENT PREVIEW
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setMetaPlacement("facebook")}
                          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            metaPlacement === "facebook"
                              ? "bg-[#1877f2] text-white shadow-[0_0_12px_rgba(24,119,242,0.4)]"
                              : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                          }`}
                        >
                          Facebook
                        </button>
                        <button
                          type="button"
                          onClick={() => setMetaPlacement("instagram")}
                          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            metaPlacement === "instagram"
                              ? "bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-[0_0_12px_rgba(225,48,108,0.4)]"
                              : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                          }`}
                        >
                          Insta Story
                        </button>
                      </div>
                    </div>

                    {/* Ad Headline Input */}
                    <div>
                      <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        AD HEADLINE
                      </label>
                      <input
                        type="text"
                        value={metaHeadline}
                        onChange={(e) => setMetaHeadline(e.target.value)}
                        placeholder="Ad headline..."
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    {/* Primary Text Textarea */}
                    <div>
                      <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        PRIMARY TEXT
                      </label>
                      <textarea
                        rows={3}
                        value={metaPrimaryText}
                        onChange={(e) => setMetaPrimaryText(e.target.value)}
                        placeholder="Primary post copy..."
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-sky-500 resize-none leading-relaxed"
                      />
                    </div>

                    {/* Call To Action (CTA) */}
                    <div>
                      <label className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1.5">
                        CALL TO ACTION (CTA)
                      </label>
                      <select
                        value={metaCta}
                        onChange={(e) => setMetaCta(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-sky-500 cursor-pointer"
                      >
                        <option value="Learn More">Learn More</option>
                        <option value="Shop Now">Shop Now</option>
                        <option value="Sign Up">Sign Up</option>
                        <option value="Get Offer">Get Offer</option>
                        <option value="Book Now">Book Now</option>
                      </select>
                    </div>

                  </div>

                  {/* Right Live Ad Mockup Card */}
                  <div className="md:col-span-6 flex justify-center w-full">
                    {metaPlacement === "facebook" ? (
                      <div className="w-full bg-white text-black rounded-2xl p-4 shadow-xl border border-zinc-200 text-left flex flex-col gap-3 animate-fadeIn">
                        {/* Profile Row */}
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-amber-500 text-black font-black text-sm flex items-center justify-center font-display">
                            O
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1">
                              <span className="font-bold text-xs text-zinc-900">Owlio Works</span>
                              <span className="text-sky-500 text-[10px]">✓</span>
                            </div>
                            <span className="text-[10px] text-zinc-400">Sponsored · 🌐</span>
                          </div>
                        </div>

                        {/* Primary Text Display */}
                        <p className="text-xs text-zinc-800 leading-relaxed line-clamp-3">
                          {metaPrimaryText || "Owlio Works builds high-performance digital products and profitable growth campaigns."}
                        </p>

                        {/* Creative Box */}
                        <div className="w-full h-36 bg-[#16171b] rounded-xl flex flex-col items-center justify-center p-4 text-center border border-zinc-800 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-sky-500/10 pointer-events-none"></div>
                          <span className="text-base font-black font-display text-white tracking-wider mb-1">
                            OWLIO WORKS
                          </span>
                          <span className="text-[10px] text-zinc-400 font-mono">
                            High-Converting Meta Creative Engine
                          </span>
                        </div>

                        {/* Bottom Link Preview Row */}
                        <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-2.5 flex items-center justify-between gap-2">
                          <div className="flex flex-col truncate">
                            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">
                              OWLIOWORKS.COM
                            </span>
                            <span className="text-xs font-bold text-zinc-900 truncate">
                              {metaHeadline || "Smarter Tech for Business Growth"}
                            </span>
                          </div>
                          <button
                            type="button"
                            className="bg-zinc-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shrink-0"
                          >
                            {metaCta}
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Instagram Story 9:16 Vertical Mockup */
                      <div className="w-[200px] h-[340px] rounded-[32px] border-4 border-zinc-700 bg-zinc-950 text-white relative p-3 flex flex-col justify-between overflow-hidden shadow-2xl animate-fadeIn text-left">
                        {/* Story Top Progress Bar */}
                        <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mb-2">
                          <div className="bg-white h-full w-[65%] animate-pulse"></div>
                        </div>

                        {/* Story Header */}
                        <div className="flex items-center gap-2 z-10">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 to-pink-600 p-[1.5px]">
                            <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-[10px] font-bold">
                              O
                            </div>
                          </div>
                          <span className="text-[10px] font-bold truncate">owlioworks</span>
                          <span className="text-[9px] text-zinc-400">Sponsored</span>
                        </div>

                        {/* Center Graphic */}
                        <div className="my-auto flex flex-col items-center text-center p-2">
                          <span className="text-xs font-black font-display text-[#fbea3d] uppercase mb-1">
                            {metaHeadline || "Scale Faster"}
                          </span>
                          <p className="text-[10px] text-zinc-300 line-clamp-3 leading-snug">
                            {metaPrimaryText}
                          </p>
                        </div>

                        {/* Story Bottom Swipe Up Pill */}
                        <div className="flex flex-col items-center gap-1 z-10">
                          <span className="text-[9px] font-mono text-zinc-400 animate-bounce">▲</span>
                          <div className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-[10px] py-1.5 px-3 rounded-full text-center">
                            {metaCta}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "social-media" ? (
          /* Social Media Marketing Custom Viral Content Engine & Engagement Simulator */
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-6">
                  ORGANIC SOCIAL MEDIA ARCHITECTURE{" "}
                  <span className="text-zinc-400 font-black block">&amp; VIRAL AUDIENCE LOOPS</span>
                </h2>

                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal mb-5">
                  Posting generic corporate stock graphics leads to zero reach and wasted resources. We engineer high-retention short-form video formats (Reels, TikTok, Shorts), custom editorial carousels, and proactive community engagement that turn passive scrollers into passionate brand evangelists.
                </p>

                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-normal">
                  Our content frameworks tap into cultural zeitgeists and algorithm-friendly pacing to achieve 3x+ engagement rates and consistent monthly viral breakout loops.
                </p>
              </div>

              {/* Right Column: Dark Live Social Engine Simulator Container */}
              <div className="lg:col-span-6 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-2xl">
                
                {/* Left Controls Inside Simulator Box */}
                <div className="flex flex-col items-start text-left w-full sm:w-[48%]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🔥</span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      VIRAL CONTENT ENGINE
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5">
                    Select content formats to simulate social reach &amp; engagement:
                  </p>

                  {/* 4 Interactive Tab Buttons */}
                  <div className="flex flex-col gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setActiveSocialMediaTab("video")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeSocialMediaTab === "video"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🎬</span>
                      <span>Short-Form Video (Reels)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSocialMediaTab("carousel")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeSocialMediaTab === "carousel"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>📸</span>
                      <span>High-Save Carousels</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSocialMediaTab("community")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeSocialMediaTab === "community"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>💬</span>
                      <span>Community Moderation</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSocialMediaTab("ugc")}
                      className={`w-full py-2.5 px-3.5 rounded-xl border text-left text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                        activeSocialMediaTab === "ugc"
                          ? "bg-zinc-900 border-[#fbea3d] text-[#fbea3d] shadow-[0_0_15px_rgba(251,234,61,0.15)]"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>🤝</span>
                      <span>Creator &amp; UGC Seeding</span>
                    </button>
                  </div>
                </div>

                {/* Right Visual Output Monitor */}
                <div className="w-full sm:w-[50%] bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between overflow-hidden shadow-xl min-h-[340px]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 border-b border-zinc-800 pb-2">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Algorithm State: Trending</span>
                    </span>
                    <span className="text-[#fbea3d]">Reach: +320%</span>
                  </div>

                  {/* Dynamic Interactive Simulator Screen Content */}
                  <div className="my-auto py-2">
                    {activeSocialMediaTab === "video" && (
                      <div className="flex flex-col gap-2.5 text-left animate-fadeIn">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                          <span className="text-[10px] text-zinc-400 block font-mono">ORGANIC VIRAL REACH</span>
                          <span className="text-xl font-mono font-black text-[#fbea3d]">2.4M Views (Loop)</span>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 flex items-center justify-between">
                          <div>
                            <span className="text-zinc-300 text-xs font-bold block">Hook Pacing &amp; Audio</span>
                            <span className="text-zinc-400 text-[10px]">Top 1% Trending Audio Alignment</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-800">
                            84% Retention
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                          <span>Algorithm: For You Page #1</span>
                          <span>Shares: 42,000+ ✓</span>
                        </div>
                      </div>
                    )}

                    {activeSocialMediaTab === "carousel" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl">
                          <span className="text-[10px] text-zinc-400 block font-bold">SAVE &amp; BOOKMARK RATE</span>
                          <span className="text-[#fbea3d] text-sm font-bold">18,400 Saves (High Authority)</span>
                        </div>
                        <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between">
                          <span className="text-zinc-300 text-[11px]">Editorial 10-Slide Deck</span>
                          <span className="text-emerald-400 font-bold">+420% Share Velocity</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 text-center font-bold bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
                          100% Brand Token System Matched ✓
                        </div>
                      </div>
                    )}

                    {activeSocialMediaTab === "community" && (
                      <div className="flex flex-col gap-2 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">COMMENT RESPONSE SPEED</span>
                          <span className="text-[#fbea3d] font-bold">&lt; 8 Mins Average Reply</span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                          <span className="text-[10px] text-zinc-400 block">INBOUND CONVERSIONS</span>
                          <span className="text-zinc-200">320 Inbound Leads Converted via DM</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 font-bold flex items-center justify-between pt-1">
                          <span>Sentiment: 99.2% Positive</span>
                          <span>Active 24/7 ✓</span>
                        </div>
                      </div>
                    )}

                    {activeSocialMediaTab === "ugc" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900 p-3 rounded-xl border border-zinc-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-zinc-400 block">CREATOR ACTIVATION</span>
                            <span className="text-xl font-black text-[#fbea3d] font-display">15 CREATORS</span>
                          </div>
                          <span className="text-[10px] bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-md">
                            5.4x Organic ROI
                          </span>
                        </div>
                        <div className="bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 text-[11px] text-zinc-300">
                          $0.003 effective CPV with complete whitelist rights for paid social ads.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Console Footer */}
                  <div className="pt-2 border-t border-zinc-800 text-[9px] font-mono text-zinc-500 flex justify-between">
                    <span>Multi-Platform Publishing Hub</span>
                    <span className="text-emerald-400">Sync: Instagram · TikTok · LinkedIn</span>
                  </div>
                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "content-marketing" || service.slug === "content-writing" ? (
          /* Content Writing Custom "CONTENT WRITING SERVICES FOR BUSINESS GROWTH" + Editorial Manuscript Studio */
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-6">
                  CONTENT WRITING SERVICES FOR{" "}
                  <span className="text-zinc-400 font-black block">BUSINESS GROWTH</span>
                </h2>

                <p className="text-zinc-700 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-5">
                  Business growth and development rely on best SEO content and content marketing services. Here at Owlio Works, we develop high converting content that can help businesses rank higher, bring in targeted traffic, and create quality leads.
                </p>

                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-normal">
                  Our website content writers create content that is optimized for your business goals and objectives, is engaging, informative and helps to achieve measurable results, be it articles for blogs, landing pages or a full content marketing campaign.
                </p>
              </div>

              {/* Right Column: Layered Editorial Manuscript Showcase with Floating Pills */}
              <div className="lg:col-span-6 flex items-center justify-center relative p-4 sm:p-8 min-h-[380px]">
                
                {/* Floating Pills */}
                {/* Top Left: CLARITY */}
                <button
                  type="button"
                  onClick={() => setActiveContentPill("clarity")}
                  className={`absolute top-4 left-6 sm:left-12 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm z-20 ${
                    activeContentPill === "clarity"
                      ? "bg-black text-[#fbea3d] border border-black ring-2 ring-amber-300"
                      : "bg-white/90 border border-zinc-200 text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  CLARITY
                </button>

                {/* Top Right: GROWTH */}
                <button
                  type="button"
                  onClick={() => setActiveContentPill("growth")}
                  className={`absolute top-6 right-6 sm:right-12 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm z-20 ${
                    activeContentPill === "growth"
                      ? "bg-black text-[#fbea3d] border border-black ring-2 ring-amber-300"
                      : "bg-white/90 border border-zinc-200 text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  GROWTH
                </button>

                {/* Bottom Left: RANKINGS */}
                <button
                  type="button"
                  onClick={() => setActiveContentPill("rankings")}
                  className={`absolute bottom-6 left-4 sm:left-10 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm z-20 ${
                    activeContentPill === "rankings"
                      ? "bg-black text-[#fbea3d] border border-black ring-2 ring-amber-300"
                      : "bg-white/90 border border-zinc-200 text-zinc-500 hover:text-zinc-800"
                  }`}
                >
                  RANKINGS
                </button>

                {/* Bottom Right: RESONANCE */}
                <button
                  type="button"
                  onClick={() => setActiveContentPill("resonance")}
                  className={`absolute bottom-8 right-4 sm:right-10 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm z-20 ${
                    activeContentPill === "resonance"
                      ? "bg-[#fbea3d] text-black border border-amber-300 font-black shadow-md ring-2 ring-amber-400"
                      : "bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100"
                  }`}
                >
                  RESONANCE
                </button>

                {/* Layered Document Cards */}
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[340px] flex items-center justify-center">
                  
                  {/* Layer 1 (Backmost) */}
                  <div className="absolute w-[88%] h-[280px] bg-zinc-100 border border-zinc-200 rounded-3xl -rotate-6 transform translate-y-3 opacity-50 shadow-md pointer-events-none"></div>

                  {/* Layer 2 (Middle) */}
                  <div className="absolute w-[94%] h-[290px] bg-zinc-50 border border-zinc-200/90 rounded-3xl -rotate-3 transform translate-y-1.5 opacity-80 shadow-lg pointer-events-none"></div>

                  {/* Layer 3 (Front Editorial Document) */}
                  <div className="relative w-full bg-white border border-zinc-200 rounded-3xl p-6 sm:p-7 shadow-2xl flex flex-col justify-between z-10 text-left">
                    
                    {/* Top Accent & Golden Quill */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-24 h-2 bg-[#e2ce1c] rounded-full"></div>
                      <span className="text-2xl -mt-2 -mr-1 transform rotate-12 drop-shadow-sm select-none" title="Golden Quill">
                        🖋️
                      </span>
                    </div>

                    {/* Headline and Preview Text depending on selected Pillar */}
                    <div className="flex flex-col gap-2.5 my-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-black uppercase text-[#e2ce1c] bg-zinc-900 px-2 py-0.5 rounded-md">
                          {activeContentPill.toUpperCase()}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 font-semibold">
                          Editorial Standard
                        </span>
                      </div>

                      {activeContentPill === "clarity" && (
                        <div className="flex flex-col gap-1.5 animate-fadeIn">
                          <h4 className="text-sm font-black text-zinc-900 font-display">
                            Zero Fluff &amp; High Cognitive Readability
                          </h4>
                          <p className="text-[11px] text-zinc-600 leading-relaxed">
                            Crafted with crisp sentence structures, scannable bullet architectures, and clear value propositions that retain reader focus.
                          </p>
                        </div>
                      )}

                      {activeContentPill === "growth" && (
                        <div className="flex flex-col gap-1.5 animate-fadeIn">
                          <h4 className="text-sm font-black text-zinc-900 font-display">
                            High-Intent Conversion Copywriting
                          </h4>
                          <p className="text-[11px] text-zinc-600 leading-relaxed">
                            Embedding seamless call-to-action pathways and commercial hooks that guide qualified decision-makers straight to sales demos.
                          </p>
                        </div>
                      )}

                      {activeContentPill === "rankings" && (
                        <div className="flex flex-col gap-1.5 animate-fadeIn">
                          <h4 className="text-sm font-black text-zinc-900 font-display">
                            SurferSEO &amp; Semantic Entity Optimization
                          </h4>
                          <p className="text-[11px] text-zinc-600 leading-relaxed">
                            In-depth topical clustering, keyword NLP integration, and structured markup engineered to dominate competitive SERP rankings.
                          </p>
                        </div>
                      )}

                      {activeContentPill === "resonance" && (
                        <div className="flex flex-col gap-1.5 animate-fadeIn">
                          <h4 className="text-sm font-black text-zinc-900 font-display">
                            Authoritative Executive Thought Leadership
                          </h4>
                          <p className="text-[11px] text-zinc-600 leading-relaxed">
                            Deep industry perspectives, proprietary data teardowns, and actionable insights that buyers bookmark, reference, and share.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Footer Watermark & Status */}
                    <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>Owlio Editorial Protocol</span>
                      <div className="w-5 h-5 rounded-full border border-zinc-300 flex items-center justify-center text-[9px] text-zinc-500 font-bold">
                        ✓
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "local-seo-gmb" || service.slug === "local-seo" ? (
          /* Local SEO & GMB Custom "HOW GMB SEO BENEFITS LOCAL BUSINESSES" + Local 3-Pack Telemetry Simulator */
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Detailed Description */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-6">
                  HOW GMB SEO BENEFITS{" "}
                  <span className="text-zinc-400 font-black block">LOCAL BUSINESSES</span>
                </h2>

                <p className="text-zinc-700 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-5">
                  When customers see businesses at the top of local search results, they have confidence in those businesses. If you don&apos;t have the right gmb seo, you can end up losing leads to your competitors who have a better local presence.
                </p>

                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                  Solid gmb optimization offers businesses a way to speak to their customers right when they&apos;re prepared to buy.
                </p>

                <div className="bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-5 shadow-sm text-xs sm:text-[13px] font-semibold text-zinc-800 leading-relaxed">
                  A properly optimized Google Business Profile drives higher calls, visits, and physical walk-ins.
                </div>
              </div>

              {/* Right Column: Interactive Optimized Profile Outcomes & Local 3-Pack Container */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-800">
                    OPTIMIZED PROFILE OUTCOMES:
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Filter Tabs Bar */}
                <div className="flex items-center gap-1.5 bg-zinc-100/90 p-1.5 rounded-2xl border border-zinc-200/80">
                  <button
                    type="button"
                    onClick={() => setActiveGmbTab("visibility")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeGmbTab === "visibility"
                        ? "bg-white text-zinc-900 shadow-sm border border-amber-300 font-extrabold"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    🔍 Visibility Boost
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveGmbTab("engagements")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeGmbTab === "engagements"
                        ? "bg-white text-zinc-900 shadow-sm border border-amber-300 font-extrabold"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    📱 Engagements
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveGmbTab("reviews")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeGmbTab === "reviews"
                        ? "bg-white text-zinc-900 shadow-sm border border-amber-300 font-extrabold"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    ⭐ Trust &amp; Reviews
                  </button>
                </div>

                {/* Inner White Card Screen */}
                <div className="bg-white border border-zinc-200/90 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col gap-3 text-left">
                  
                  {/* Local 3-Pack Title Bar */}
                  <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                    <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                      LOCAL 3-PACK RANKING PROGRESS
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      +240% Click Rate
                    </span>
                  </div>

                  {/* Dynamic Tab Outcomes */}
                  {activeGmbTab === "visibility" && (
                    <div className="flex flex-col gap-2.5 animate-fadeIn">
                      {/* Competitor #5 */}
                      <div className="bg-zinc-50 border border-zinc-200/70 rounded-xl p-3 flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-zinc-400 text-xs">#5</span>
                          <div>
                            <span className="font-bold text-zinc-700 block">Competitor Business</span>
                            <span className="text-[11px] text-amber-500">★★★★☆ <span className="text-zinc-400 text-[10px]">(12 reviews)</span></span>
                          </div>
                        </div>
                      </div>

                      {/* Owlio Works Optimized #1 */}
                      <div className="bg-emerald-50/40 border-2 border-emerald-500/80 rounded-xl p-3.5 flex items-center justify-between text-xs shadow-sm">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-black text-emerald-700 text-sm">#1</span>
                          <div>
                            <span className="font-bold text-zinc-900 text-sm block">Owlio Works (Optimized)</span>
                            <span className="text-[11px] text-amber-500">★★★★★ <span className="text-emerald-700 font-bold text-[10px]">(48 reviews) · IT Services</span></span>
                          </div>
                        </div>
                        <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                          ✓
                        </span>
                      </div>

                      {/* Other Competitor #2 */}
                      <div className="bg-zinc-50 border border-zinc-200/70 rounded-xl p-3 flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-zinc-400 text-xs">#2</span>
                          <div>
                            <span className="font-bold text-zinc-700 block">Other Competitor Shop</span>
                            <span className="text-[11px] text-amber-500">★★★★☆ <span className="text-zinc-400 text-[10px]">(34 reviews)</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeGmbTab === "engagements" && (
                    <div className="flex flex-col gap-2.5 animate-fadeIn text-xs">
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-3 flex items-center justify-between">
                        <span className="font-bold text-zinc-800">📞 Direct Phone Calls</span>
                        <span className="text-emerald-600 font-mono font-bold">+180% Increase</span>
                      </div>
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-3 flex items-center justify-between">
                        <span className="font-bold text-zinc-800">📍 Google Maps Direction Requests</span>
                        <span className="text-emerald-600 font-mono font-bold">+220% Growth</span>
                      </div>
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-3 flex items-center justify-between">
                        <span className="font-bold text-zinc-800">🌐 Local Geo Landing Page Visits</span>
                        <span className="text-emerald-600 font-mono font-bold">+140% Conversions</span>
                      </div>
                    </div>
                  )}

                  {activeGmbTab === "reviews" && (
                    <div className="flex flex-col gap-2.5 animate-fadeIn text-xs">
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-3 flex items-center justify-between">
                        <span className="font-bold text-zinc-800">Verified Rating</span>
                        <span className="text-amber-500 font-bold font-mono">4.9 ★ (120+ Reviews)</span>
                      </div>
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-3 flex items-center justify-between">
                        <span className="font-bold text-zinc-800">Owner Response Rate</span>
                        <span className="text-emerald-600 font-mono font-bold">100% (&lt; 2 Hours)</span>
                      </div>
                      <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-3 flex items-center justify-between">
                        <span className="font-bold text-zinc-800">Automated Review Request Funnel</span>
                        <span className="text-emerald-600 font-mono font-bold">Active SMS/Email ✓</span>
                      </div>
                    </div>
                  )}

                  {/* Bottom Checklist Features */}
                  <div className="pt-2 border-t border-zinc-100 flex flex-wrap items-center justify-between text-[11px] font-medium text-zinc-600">
                    <span className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span> Active Maps Tracker
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span> Increase customer calls
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : (
          /* For all other services: Strategic Overview */
          <section className="w-full bg-[#fafafb] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
              
              <div className="max-w-3xl flex flex-col items-start text-left gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500">
                  STRATEGIC OVERVIEW
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight leading-tight">
                  Why Standard Solutions Fall Short & How We Re-engineer It.
                </h2>
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                  {service.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Challenge Card */}
                <div className="bg-white border-2 border-red-200/80 p-7 sm:p-9 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 font-black text-xs flex items-center justify-center">
                      ✕
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-600">
                      The Industry Failure
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 font-display">
                    Fragile Implementations & Disconnected Teams
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {service.theChallenge}
                  </p>
                </div>

                {/* Solution Card */}
                <div className="bg-[#fbea3d] border-2 border-black/10 p-7 sm:p-9 rounded-3xl shadow-sm flex flex-col gap-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-black text-[#fbea3d] font-black text-xs flex items-center justify-center">
                      ✓
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                      The Owlio Standard
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black font-display">
                    Architectural Integrity & Commercial Impact
                  </h3>
                  <p className="text-black/90 text-sm leading-relaxed font-medium">
                    {service.ourSolution}
                  </p>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* 3. CORE CAPABILITIES & DELIVERABLES (Custom Yellow Section for UI/UX Design) */}
        {service.slug === "ui-ux-design" ? (
          <section id="capabilities" className="w-full bg-[#fbea3d] text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-black/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Headings & Paragraphs */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-black font-display tracking-tight uppercase leading-[1.05] mb-6">
                  UI UX WEB DESIGN: AESTHETICS &amp; PEAK PERFORMANCE
                </h2>

                <p className="text-black/85 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-5">
                  A website needs to make it easy for visitors to find the information they are looking for and then take the actions they want. Our ui ux web design solutions are crafted to enhance the user experience and foster better interactions with the customer.
                </p>

                <p className="text-black/75 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                  We create efficient and responsive digital interfaces, which function on desktops, smartphones and tablets. Each section is well-organized for ease of reading, navigation and usability.
                </p>

                <p className="text-black text-xs sm:text-sm font-black uppercase tracking-tight leading-snug">
                  We combine creativity and strategy to develop interfaces that are designed to contribute to long-term business success.
                </p>
              </div>

              {/* Right Column: 6 Dark Cards Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  {
                    num: "01",
                    title: "WEBSITE USABILITY",
                    desc: "Creating intuitive pathways for seamless browsing and lower bounce rates.",
                  },
                  {
                    num: "02",
                    title: "CUSTOMER ENGAGEMENT",
                    desc: "Retaining visitors with modern interactions that encourage exploration.",
                  },
                  {
                    num: "03",
                    title: "OPTIMIZED SPEED",
                    desc: "Enhancing user interactions to ensure immediate actions without lag.",
                  },
                  {
                    num: "04",
                    title: "RESPONSIVE LAYOUTS",
                    desc: "Guaranteed flawless display across all tablet and smartphone screens.",
                  },
                  {
                    num: "05",
                    title: "BRAND PRESENTATION",
                    desc: "High-end visual aesthetics that reflect corporate authority and build trust.",
                  },
                  {
                    num: "06",
                    title: "INTUITIVE NAVIGATION",
                    desc: "Guiding customers straight to key contact forms and action points.",
                  },
                ].map((card, cIdx) => (
                  <div
                    key={cIdx}
                    className="bg-[#18191c] border border-zinc-800 text-white p-5 sm:p-6 rounded-3xl shadow-xl flex flex-col justify-between gap-3 text-left hover:border-zinc-700 transition-all group"
                  >
                    <div>
                      <span className="font-mono text-xs sm:text-sm font-extrabold text-[#fbea3d] block mb-1.5">
                        {card.num}
                      </span>
                      <h3 className="text-sm sm:text-base font-black font-display uppercase tracking-wider text-white mb-2 group-hover:text-[#fbea3d] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        ) : (
          /* For all other services: Standard Core Capabilities */
          <section id="capabilities" className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-100 pb-6 text-left">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-1">
                    DETAILED DELIVERABLES
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                    Core Capabilities
                  </h2>
                </div>
                <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-sm">
                  Each capability is executed with complete transparency and weekly sprint milestones.
                </p>
              </div>

              {/* Capabilities Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
                {service.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="bg-[#fafafb] border border-zinc-200/90 p-7 sm:p-8 rounded-3xl hover:border-zinc-400 transition-all flex flex-col justify-between gap-6 group"
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-black text-[#e2ce1c] bg-zinc-900 px-2.5 py-0.5 rounded-md">
                          0{idx + 1}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 font-bold uppercase tracking-wider">
                          {service.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-zinc-900 font-display group-hover:text-black transition-colors">
                        {cap.title}
                      </h3>

                      <p className="text-zinc-600 text-sm leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    {/* Deliverables Bullet List */}
                    <div className="pt-4 border-t border-zinc-200/80">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 block mb-2">
                        Included Deliverables:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-medium text-zinc-800">
                        {cap.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-1.5">
                            <span className="text-[#e2ce1c] font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        )}

        {/* 4. TECH STACK & TOOLS ECOSYSTEM */}
        <section
          className={`w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-b ${
            service.slug === "seo-services"
              ? "bg-[#fbea3d] text-black border-black/10"
              : "bg-[#0c0c0d] text-white border-zinc-900"
          }`}
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-8 text-left">
            <div>
              <span
                className={`font-mono text-xs font-bold uppercase tracking-widest block mb-2 ${
                  service.slug === "seo-services" ? "text-zinc-900 font-extrabold" : "text-[#fbea3d]"
                }`}
              >
                // ARCHITECTURE &amp; TOOLING
              </span>
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight ${
                  service.slug === "seo-services" ? "text-black" : "text-white"
                }`}
              >
                Modern Technology Stack
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {service.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                    service.slug === "seo-services"
                      ? "bg-black text-white border border-black/20 shadow-md hover:scale-[1.02]"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-200 hover:border-[#fbea3d] hover:text-[#fbea3d]"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fbea3d]"></span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 4-STEP DELIVERY PROCESS / COLLABORATE WITH PROS (App Development Custom) */}
        {service.slug === "app-development" ? (
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading + Descriptive Text + 6 Numbered Pill Cards */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-5">
                  COLLABORATE WITH MOBILE APP DEVELOPER PROS
                </h2>

                <p className="text-zinc-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-8 max-w-2xl">
                  The technology partner you select makes all the difference in your success. We have highly experienced mobile app developer pros who strive for innovation, performance and usability. Before development begins, we analyze your industry, target audience and business goals.
                </p>

                {/* 2-Column Grid of 6 Numbered Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                  {[
                    "INDUSTRY-FOCUSED STRATEGIES",
                    "IT INCLUDES THE MODERN PRINCIPLES OF UI/UX DESIGN",
                    "AGILE DEVELOPMENT PROCESS",
                    "TRANSPARENT COMMUNICATION",
                    "TIMELY PROJECT DELIVERY",
                    "LONG-TERM TECHNICAL SUPPORT",
                  ].map((text, pIdx) => {
                    const isActive = activePillIndex === pIdx;
                    return (
                      <button
                        type="button"
                        key={pIdx}
                        onClick={() => setActivePillIndex(pIdx)}
                        className={`px-4 py-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          isActive
                            ? "bg-white border-[#fbea3d] shadow-[0_2px_15px_rgba(251,234,61,0.2)] ring-1 ring-[#fbea3d]"
                            : "bg-[#fafafb] border-zinc-200/90 hover:border-zinc-300"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-mono font-black flex items-center justify-center shrink-0 ${
                            isActive
                              ? "bg-[#e2ce1c] text-black"
                              : "bg-zinc-200 text-zinc-700"
                          }`}
                        >
                          {pIdx + 1}
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-zinc-800 uppercase tracking-tight leading-snug">
                          {text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Interactive Smartphone Mockup with Positioning Engine */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-[260px] sm:w-[280px] h-[460px] sm:h-[490px] rounded-[42px] border-[5px] border-zinc-800 bg-black relative p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
                  
                  {/* Status Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 px-1 pt-0.5">
                    <span>9:41 AM</span>
                    <div className="w-16 h-3 bg-zinc-900 rounded-full mx-auto border border-zinc-800"></div>
                    <span>5G 100%</span>
                  </div>

                  {/* Positioning Engine Header & Tabs */}
                  <div className="flex flex-col gap-3 mt-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-extrabold text-white tracking-wider">
                        POSITIONING ENGINE
                      </span>
                      <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                        SIMULATED
                      </span>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setActiveIndustryTab("retail")}
                        className={`px-3 py-1 rounded-lg text-[11px] font-bold font-mono transition-all cursor-pointer ${
                          activeIndustryTab === "retail"
                            ? "bg-[#fbea3d] text-black"
                            : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                        }`}
                      >
                        Retail
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveIndustryTab("health")}
                        className={`px-3 py-1 rounded-lg text-[11px] font-bold font-mono transition-all cursor-pointer ${
                          activeIndustryTab === "health"
                            ? "bg-[#fbea3d] text-black"
                            : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                        }`}
                      >
                        Health
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveIndustryTab("fintech")}
                        className={`px-3 py-1 rounded-lg text-[11px] font-bold font-mono transition-all cursor-pointer ${
                          activeIndustryTab === "fintech"
                            ? "bg-[#fbea3d] text-black"
                            : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                        }`}
                      >
                        Fintech
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Mockup Preview Card Inside Phone */}
                  <div className="my-auto">
                    {activeIndustryTab === "retail" && (
                      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-5 flex flex-col items-center text-center gap-2.5 animate-fadeIn">
                        <span className="text-2xl">🛒</span>
                        <h4 className="text-white font-display font-bold text-base">
                          Owlio Shop Mockup
                        </h4>
                        <p className="text-zinc-400 text-xs font-normal">
                          Cart friction minimized
                        </p>
                        <div className="w-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 py-2 px-3 rounded-xl text-xs font-bold font-mono mt-1">
                          +45% Conversion Rate
                        </div>
                      </div>
                    )}

                    {activeIndustryTab === "health" && (
                      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-5 flex flex-col items-center text-center gap-2.5 animate-fadeIn">
                        <span className="text-2xl">🩺</span>
                        <h4 className="text-white font-display font-bold text-base">
                          HealthPulse Telemed
                        </h4>
                        <p className="text-zinc-400 text-xs font-normal">
                          HIPAA compliant biometric sync
                        </p>
                        <div className="w-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 py-2 px-3 rounded-xl text-xs font-bold font-mono mt-1">
                          +68% Active Daily Users
                        </div>
                      </div>
                    )}

                    {activeIndustryTab === "fintech" && (
                      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-5 flex flex-col items-center text-center gap-2.5 animate-fadeIn">
                        <span className="text-2xl">💳</span>
                        <h4 className="text-white font-display font-bold text-base">
                          QuantPay Vault
                        </h4>
                        <p className="text-zinc-400 text-xs font-normal">
                          Sub-10ms ledger settlement
                        </p>
                        <div className="w-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 py-2 px-3 rounded-xl text-xs font-bold font-mono mt-1">
                          99.99% Fraud Prevention
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Home Indicator */}
                  <div className="w-20 h-1 bg-zinc-700 rounded-full mx-auto mb-1"></div>
                </div>
              </div>

            </div>
          </section>
        ) : service.slug === "cloud-devops" ? (
          /* Cloud & DevOps Custom Live Telemetry Console */
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading + Descriptive Text + 6 Numbered DevOps Strategy Cards */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.08] mb-5">
                  ENTERPRISE CLOUD ARCHITECTURE & GITOPS RELIABILITY
                </h2>

                <p className="text-zinc-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-8 max-w-2xl">
                  Modern engineering organizations require zero-downtime deployments, bulletproof Kubernetes orchestration, and proactive real-time observability. We engineer automated infrastructure that scales effortlessly under extreme traffic surges.
                </p>

                {/* 2-Column Grid of 6 Numbered Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                  {[
                    "ZERO-DOWNTIME GITOPS PIPELINES",
                    "MULTI-CLOUD KUBERNETES ORCHESTRATION",
                    "REAL-TIME APM TELEMETRY & OBSERVABILITY",
                    "INFRASTRUCTURE AS CODE (TERRAFORM/ANSIBLE)",
                    "AUTOMATED DISASTER RECOVERY & BACKUPS",
                    "24/7 SRE SECURITY & COMPLIANCE POLICIES",
                  ].map((text, pIdx) => {
                    const isActive = activePillIndex === pIdx;
                    return (
                      <button
                        type="button"
                        key={pIdx}
                        onClick={() => setActivePillIndex(pIdx)}
                        className={`px-4 py-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          isActive
                            ? "bg-white border-[#fbea3d] shadow-[0_2px_15px_rgba(251,234,61,0.2)] ring-1 ring-[#fbea3d]"
                            : "bg-[#fafafb] border-zinc-200/90 hover:border-zinc-300"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-mono font-black flex items-center justify-center shrink-0 ${
                            isActive
                              ? "bg-[#e2ce1c] text-black"
                              : "bg-zinc-200 text-zinc-700"
                          }`}
                        >
                          {pIdx + 1}
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-zinc-800 uppercase tracking-tight leading-snug">
                          {text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Interactive DevOps Terminal Console */}
              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="w-full max-w-[480px] bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-5 sm:p-6 text-white flex flex-col justify-between overflow-hidden shadow-2xl">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400">
                      owlio-cloud // telemetry-v4
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                      ONLINE
                    </span>
                  </div>

                  {/* Interactive View Tabs */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <button
                      type="button"
                      onClick={() => setActiveDevopsTab("k8s")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                        activeDevopsTab === "k8s"
                          ? "bg-[#fbea3d] text-black"
                          : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                      }`}
                    >
                      K8s Clusters
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDevopsTab("cicd")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                        activeDevopsTab === "cicd"
                          ? "bg-[#fbea3d] text-black"
                          : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                      }`}
                    >
                      CI/CD Pipeline
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDevopsTab("cost")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                        activeDevopsTab === "cost"
                          ? "bg-[#fbea3d] text-black"
                          : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                      }`}
                    >
                      Cost & FinOps
                    </button>
                  </div>

                  {/* Dynamic Console View */}
                  <div className="min-h-[200px] flex flex-col justify-center">
                    {activeDevopsTab === "k8s" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-zinc-300 font-bold">us-east-1 (Primary)</span>
                            <span className="text-emerald-400">99.99% Healthy</span>
                          </div>
                          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-[99%]"></div>
                          </div>
                        </div>

                        <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-zinc-300 font-bold">eu-central-1 (Replica)</span>
                            <span className="text-emerald-400">100% Synced</span>
                          </div>
                          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full w-full"></div>
                          </div>
                        </div>

                        <div className="text-[11px] text-zinc-400 flex items-center justify-between pt-1">
                          <span>Auto-scaler: Active (32 Pods)</span>
                          <span className="text-[#fbea3d]">P99 Latency: 11ms</span>
                        </div>
                      </div>
                    )}

                    {activeDevopsTab === "cicd" && (
                      <div className="flex flex-col gap-2 text-left font-mono text-xs animate-fadeIn">
                        <div className="flex items-center justify-between bg-zinc-900/70 p-2 rounded-lg border border-zinc-800">
                          <span className="text-zinc-300">01. Lint & Security Scan</span>
                          <span className="text-emerald-400 font-bold">Passed (12s) ✓</span>
                        </div>
                        <div className="flex items-center justify-between bg-zinc-900/70 p-2 rounded-lg border border-zinc-800">
                          <span className="text-zinc-300">02. Multi-Arch Container</span>
                          <span className="text-emerald-400 font-bold">SHA:8f31b2 ✓</span>
                        </div>
                        <div className="flex items-center justify-between bg-zinc-900/70 p-2 rounded-lg border border-zinc-800">
                          <span className="text-zinc-300">03. Canary Traffic (10%)</span>
                          <span className="text-emerald-400 font-bold">0 Errors ✓</span>
                        </div>
                        <div className="flex items-center justify-between bg-emerald-950/80 p-2 rounded-lg border border-emerald-800 text-emerald-400 font-bold">
                          <span>04. Edge Global Rollout</span>
                          <span>Live 280+ POPs 🚀</span>
                        </div>
                      </div>
                    )}

                    {activeDevopsTab === "cost" && (
                      <div className="flex flex-col gap-2.5 text-left font-mono text-xs animate-fadeIn">
                        <div className="bg-zinc-900/90 border border-zinc-800 p-3.5 rounded-2xl flex items-center justify-between">
                          <div>
                            <span className="text-zinc-400 text-[10px] block">MONTHLY SPEND CUT</span>
                            <span className="text-2xl font-black text-[#fbea3d] font-display">-42.8%</span>
                          </div>
                          <span className="text-xs bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-2.5 py-1 rounded-lg">
                            FinOps Optimized
                          </span>
                        </div>
                        <div className="text-[11px] text-zinc-300 bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80">
                          ✓ Automated spot instance arbitrage & idle pod cleanup active across AWS & GCP.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Terminal Footer */}
                  <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>SRE Observability: 24/7 Enabled</span>
                    <span className="text-emerald-400">● Real-time sync</span>
                  </div>

                </div>
              </div>

            </div>
          </section>
        ) : service.slug === "google-ads" ? (
          /* Google Ads Custom "OUR GOOGLE ADS CAMPAIGNS" Visualizer Section (Compact & Sleek) */
          <section className="w-full bg-[#fafafb] text-black py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
              
              {/* Header Title & Subtitle */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 font-display tracking-tight uppercase leading-tight mb-2">
                OUR GOOGLE ADS CAMPAIGNS
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
                We are certified PPC experts that build scalable strategies across google marketing networks. Click campaign networks to explore live visual previews.
              </p>

              {/* 2-Column Interactive Simulator Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
                
                {/* Left Column: 3 Selectable Network Cards */}
                <div className="lg:col-span-5 flex flex-col gap-3 text-left">
                  {[
                    {
                      id: "search",
                      num: "01",
                      title: "MANAGE SEARCH ADS CAMPAIGNS",
                      desc: "Be seen as a top result on Google when customers search for your services.",
                    },
                    {
                      id: "display",
                      num: "02",
                      title: "DISPLAY ADVERTISING CAMPAIGNS",
                      desc: "Deliver highly engaging display ads to potential customers on millions of websites and apps.",
                    },
                    {
                      id: "shopping",
                      num: "03",
                      title: "SHOPPING ADS FOR ECOMMERCE",
                      desc: "Optimize product campaigns to directly advertise products on Google Shopping.",
                    },
                  ].map((card) => {
                    const isActive = activeGoogleCampaignTab === card.id;
                    return (
                      <button
                        type="button"
                        key={card.id}
                        onClick={() => setActiveGoogleCampaignTab(card.id as "search" | "display" | "shopping")}
                        className={`p-4 sm:p-4.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col gap-1 relative ${
                          isActive
                            ? "bg-white border-amber-300 shadow-md border-l-[4px] border-l-[#fbea3d]"
                            : "bg-white/80 border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <span className="font-mono text-[11px] font-black text-[#e2ce1c] block">
                          {card.num}
                        </span>
                        <h3 className="text-xs sm:text-sm font-black font-display uppercase tracking-tight text-zinc-900">
                          {card.title}
                        </h3>
                        <p className="text-zinc-600 text-[11px] leading-relaxed">
                          {card.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Realistic Light Browser Preview Window */}
                <div className="lg:col-span-7 bg-[#f2f3f5] border border-zinc-200 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col justify-between min-h-[290px] w-full text-left">
                  {/* Window Bar */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>

                  {/* Dynamic Mockup Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {activeGoogleCampaignTab === "search" && (
                      <div className="bg-white border border-zinc-200/90 rounded-xl p-4 sm:p-5 shadow-sm flex flex-col gap-2.5 animate-fadeIn">
                        {/* Search Input Bar Mockup */}
                        <div className="flex items-center gap-2 bg-zinc-100/90 rounded-full px-3.5 py-1.5 text-[11px] text-zinc-600 mb-1">
                          <span>🔍</span>
                          <span className="font-medium text-zinc-800">best agency to scale business online</span>
                        </div>

                        {/* Search Ad Result Item */}
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-bold text-zinc-800 uppercase tracking-wider">Sponsored</span>
                          <h4 className="text-sm sm:text-base font-bold text-[#1a0dab] hover:underline cursor-pointer leading-snug">
                            Owlio Works | #1 Google Ads Growth Agency
                          </h4>
                          <p className="text-[11px] text-zinc-600 leading-relaxed">
                            Certified Google PPC experts driving real revenue growth. We optimize bidding parameters, structure campaign bidding, and lower customer acquisition costs. Get a free digital campaign audit today!
                          </p>
                          <div className="flex flex-wrap gap-3 text-[11px] font-semibold text-[#1a0dab] pt-1">
                            <span className="hover:underline cursor-pointer">Free Audit</span>
                            <span className="hover:underline cursor-pointer">Bidding Strategies</span>
                            <span className="hover:underline cursor-pointer">ROI Reports</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeGoogleCampaignTab === "display" && (
                      <div className="bg-gradient-to-r from-zinc-950 to-zinc-900 text-white rounded-xl p-5 sm:p-6 shadow-lg flex flex-col justify-between gap-3 animate-fadeIn border border-zinc-800">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#fbea3d]">
                          <span>GOOGLE DISPLAY NETWORK AD</span>
                          <span>300x250 Responsive</span>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-black font-display text-white mb-1.5 leading-snug">
                            SCALE YOUR REVENUE WITH HIGH-ROAS GOOGLE ADS
                          </h4>
                          <p className="text-[11px] text-zinc-300 leading-relaxed">
                            Targeting in-market buyers across 2M+ publisher websites and premium YouTube channels.
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                          <span className="text-[11px] text-emerald-400 font-mono font-bold">✓ 4.8x Avg ROAS</span>
                          <button
                            type="button"
                            className="bg-[#fbea3d] text-black font-bold text-[11px] px-3 py-1.5 rounded-lg shadow-md cursor-pointer hover:bg-yellow-300 transition-colors"
                          >
                            Claim Strategy →
                          </button>
                        </div>
                      </div>
                    )}

                    {activeGoogleCampaignTab === "shopping" && (
                      <div className="flex flex-col gap-2.5 animate-fadeIn">
                        <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                          GOOGLE SHOPPING ADS CAROUSEL
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {[
                            { title: "Enterprise Cloud Hub", price: "$499.00", rating: "5.0 ★" },
                            { title: "Growth SaaS Toolkit", price: "$299.00", rating: "4.9 ★" },
                            { title: "Bespoke Mobile App", price: "$899.00", rating: "4.9 ★" },
                          ].map((prod, pIdx) => (
                            <div key={pIdx} className="bg-white border border-zinc-200 rounded-xl p-2.5 shadow-sm flex flex-col gap-1">
                              <div className="w-full h-16 bg-zinc-100 rounded-lg flex items-center justify-center text-lg font-bold text-zinc-400">
                                📦
                              </div>
                              <span className="text-[10px] font-bold text-zinc-900 truncate">{prod.title}</span>
                              <span className="text-[11px] font-black text-black font-display">{prod.price}</span>
                              <div className="flex items-center justify-between text-[9px] text-zinc-500">
                                <span>{prod.rating}</span>
                                <span className="text-emerald-600 font-semibold">Free Delivery</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "meta-ads" ? (
          /* Meta Ads Custom "PROPRIETARY META CREATIVE TESTING & ATTRIBUTION ENGINE" (Compact & Sleek) */
          <section className="w-full bg-[#fafafb] text-black py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
              
              {/* Header Title & Subtitle */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 font-display tracking-tight uppercase leading-tight mb-2">
                META CREATIVE TESTING (DCT) &amp; CAPI ENGINE
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
                Explore how our Dynamic Creative Testing (DCT) frameworks, Advantage+ AI bidding, and Server-Side CAPI tracking unlock predictable ROAS scaling.
              </p>

              {/* 2-Column Interactive Simulator Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
                
                {/* Left Column: 3 Selectable Strategy Cards */}
                <div className="lg:col-span-5 flex flex-col gap-3 text-left">
                  {[
                    {
                      id: "dct",
                      num: "01",
                      title: "DYNAMIC CREATIVE TESTING (DCT)",
                      desc: "Isolating winning hooks, visual scroll-stoppers, and CTAs across 20+ automated matrix combinations.",
                    },
                    {
                      id: "capi",
                      num: "02",
                      title: "SERVER-SIDE CAPI & FIRST-PARTY TRACKING",
                      desc: "Bypassing iOS 14.5+ ad blockers with cloud endpoints to restore 100% conversion signal fidelity.",
                    },
                    {
                      id: "asc",
                      num: "03",
                      title: "ADVANTAGE+ SHOPPING CAMPAIGNS (ASC)",
                      desc: "Machine-learning budget allocation that scales winning creatives with sub-$15 acquisition costs.",
                    },
                  ].map((card) => {
                    const isActive = activeMetaProcessTab === card.id;
                    return (
                      <button
                        type="button"
                        key={card.id}
                        onClick={() => setActiveMetaProcessTab(card.id as "dct" | "capi" | "asc")}
                        className={`p-4 sm:p-4.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col gap-1 relative ${
                          isActive
                            ? "bg-white border-amber-300 shadow-md border-l-[4px] border-l-[#fbea3d]"
                            : "bg-white/80 border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <span className="font-mono text-[11px] font-black text-[#e2ce1c] block">
                          {card.num}
                        </span>
                        <h3 className="text-xs sm:text-sm font-black font-display uppercase tracking-tight text-zinc-900">
                          {card.title}
                        </h3>
                        <p className="text-zinc-600 text-[11px] leading-relaxed">
                          {card.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Dark Meta Telemetry Console */}
                <div className="lg:col-span-7 bg-[#0c0c0d] border border-zinc-800 rounded-2xl p-4 sm:p-6 text-white shadow-xl flex flex-col justify-between min-h-[290px] w-full text-left">
                  {/* Console Bar */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400">
                      Meta Graph API v19.0 // CAPI
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                      SIGNAL: 100%
                    </span>
                  </div>

                  {/* Dynamic Console Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {activeMetaProcessTab === "dct" && (
                      <div className="flex flex-col gap-2 animate-fadeIn font-mono text-xs">
                        <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-zinc-400 block font-bold">HOOK VARIANT A</span>
                            <span className="text-zinc-200 text-[11px]">&quot;Stop Wasting Spend on Generic Retainers&quot;</span>
                          </div>
                          <span className="text-[10px] bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-bold px-2 py-0.5 rounded-md">
                            44.8% Thumbstop 🏆
                          </span>
                        </div>
                        <div className="bg-zinc-900/60 border border-zinc-800/80 p-2 rounded-xl flex items-center justify-between text-zinc-400 text-[11px]">
                          <span>Hook Variant B (28.2% Thumbstop)</span>
                          <span className="text-zinc-500">Auto-deprioritized</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 text-center font-bold bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
                          Auto-scaled to $5,000/day primary pool · 3.8x Blended ROAS ✓
                        </div>
                      </div>
                    )}

                    {activeMetaProcessTab === "capi" && (
                      <div className="flex flex-col gap-2 animate-fadeIn font-mono text-xs">
                        <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between">
                          <span className="text-zinc-300">Server CAPI Events</span>
                          <span className="text-emerald-400 font-bold">1,980 Verified Purchases</span>
                        </div>
                        <div className="bg-zinc-900/60 border border-zinc-800 p-2 rounded-xl flex items-center justify-between text-zinc-400 text-[11px]">
                          <span>Standard Browser Pixel</span>
                          <span className="text-red-400">28% Dropped by iOS 14+</span>
                        </div>
                        <div className="text-[10px] text-[#fbea3d] font-bold flex items-center justify-between px-1">
                          <span>Match Quality Score: 9.4/10.0</span>
                          <span className="text-emerald-400">Signal Restored ✓</span>
                        </div>
                      </div>
                    )}

                    {activeMetaProcessTab === "asc" && (
                      <div className="flex flex-col gap-2 animate-fadeIn font-mono text-xs">
                        <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-zinc-400 block">ADVANTAGE+ AI BUDGET</span>
                            <span className="text-sm font-black text-[#fbea3d] font-display">+$12,400 Optimized</span>
                          </div>
                          <span className="text-[10px] bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-md">
                            -38.4% CPA
                          </span>
                        </div>
                        <div className="text-[11px] text-zinc-300 bg-zinc-900/60 p-2 rounded-xl border border-zinc-800">
                          Algorithmic budget shift toward top 3 UGC creative winners delivering 4.2x ROAS.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Console Footer */}
                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[9px] font-mono text-zinc-500 mt-2">
                    <span>Triple Whale / Northbeam Multi-Touch</span>
                    <span className="text-emerald-400">Sync: Real-time</span>
                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "social-media" ? (
          /* Social Media Marketing Custom Content Cadence & Publishing Studio */
          <section className="w-full bg-[#fafafb] text-black py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
              
              {/* Header Title & Subtitle */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 font-display tracking-tight uppercase leading-tight mb-2">
                OUR SOCIAL CONTENT CADENCE &amp; STUDIO ENGINE
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
                Explore our editorial batch production workflows, multi-platform publishing schedule, and real-time community engagement frameworks.
              </p>

              {/* 2-Column Interactive Simulator Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
                
                {/* Left Column: 3 Selectable Publishing Framework Cards */}
                <div className="lg:col-span-5 flex flex-col gap-3 text-left">
                  {[
                    {
                      id: "calendar",
                      num: "01",
                      title: "30-DAY CONTENT CALENDAR & BATCHING",
                      desc: "Pre-scheduling 20-30 high-impact posts with multi-channel creative variation testing.",
                    },
                    {
                      id: "syndication",
                      num: "02",
                      title: "MULTI-PLATFORM SYNDICATION MATRIX",
                      desc: "Optimizing native aspect ratios, captions, and audio for Instagram, TikTok, LinkedIn & Shorts.",
                    },
                    {
                      id: "listening",
                      num: "03",
                      title: "COMMUNITY ADVOCACY & SOCIAL LISTENING",
                      desc: "Active monitoring of brand mentions, sentiment tracking, and viral trend hijacking within 60 minutes.",
                    },
                  ].map((card) => {
                    const isActive = activeSocialProcessTab === card.id;
                    return (
                      <button
                        type="button"
                        key={card.id}
                        onClick={() => setActiveSocialProcessTab(card.id as "calendar" | "syndication" | "listening")}
                        className={`p-4 sm:p-4.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col gap-1 relative ${
                          isActive
                            ? "bg-white border-amber-300 shadow-md border-l-[4px] border-l-[#fbea3d]"
                            : "bg-white/80 border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <span className="font-mono text-[11px] font-black text-[#e2ce1c] block">
                          {card.num}
                        </span>
                        <h3 className="text-xs sm:text-sm font-black font-display uppercase tracking-tight text-zinc-900">
                          {card.title}
                        </h3>
                        <p className="text-zinc-600 text-[11px] leading-relaxed">
                          {card.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Dark Social Studio Hub Console */}
                <div className="lg:col-span-7 bg-[#0c0c0d] border border-zinc-800 rounded-2xl p-4 sm:p-6 text-white shadow-xl flex flex-col justify-between min-h-[290px] w-full text-left">
                  {/* Console Bar */}
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400">
                      Studio Hub // Multi-Channel Content
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800">
                      LIVE CADENCE: 30 DAYS
                    </span>
                  </div>

                  {/* Dynamic Console Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {activeSocialProcessTab === "calendar" && (
                      <div className="flex flex-col gap-2 animate-fadeIn font-mono text-xs">
                        <div className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-zinc-400 block font-bold">MON / WED / FRI BATCH</span>
                            <span className="text-zinc-200 text-[11px]">Reels, Authority Carousels &amp; Culture</span>
                          </div>
                          <span className="text-[10px] bg-emerald-950/80 border border-emerald-800 text-emerald-400 font-bold px-2 py-0.5 rounded-md">
                            12 Posts / Mo
                          </span>
                        </div>
                        <div className="bg-zinc-900/60 border border-zinc-800/80 p-2 rounded-xl flex items-center justify-between text-zinc-400 text-[11px]">
                          <span>Client Approval Portal</span>
                          <span className="text-emerald-400 font-bold">Approved 7 Days Ahead ✓</span>
                        </div>
                        <div className="text-[10px] text-[#fbea3d] text-center font-bold bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
                          Automated publishing queues &amp; sound syncing active across all platforms
                        </div>
                      </div>
                    )}

                    {activeSocialProcessTab === "syndication" && (
                      <div className="flex flex-col gap-2 animate-fadeIn font-mono text-xs">
                        <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between">
                          <span className="text-zinc-300">Instagram &amp; TikTok</span>
                          <span className="text-emerald-400 font-bold">9:16 Short-Form + Trending Audio</span>
                        </div>
                        <div className="bg-zinc-900/60 border border-zinc-800 p-2 rounded-xl flex items-center justify-between text-zinc-400 text-[11px]">
                          <span>LinkedIn &amp; X / Twitter</span>
                          <span className="text-zinc-200">Editorial Document Slides + Text Hooks</span>
                        </div>
                        <div className="text-[10px] text-emerald-400 font-bold flex items-center justify-between px-1">
                          <span>Cross-Platform Reach: Max</span>
                          <span>Zero Duplicate Formatting ✓</span>
                        </div>
                      </div>
                    )}

                    {activeSocialProcessTab === "listening" && (
                      <div className="flex flex-col gap-2 animate-fadeIn font-mono text-xs">
                        <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-zinc-400 block">VIRAL TREND HIJACKING</span>
                            <span className="text-sm font-black text-[#fbea3d] font-display">&lt; 45 MIN WINDOW</span>
                          </div>
                          <span className="text-[10px] bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-2 py-0.5 rounded-md">
                            +48% Lead Lift
                          </span>
                        </div>
                        <div className="text-[11px] text-zinc-300 bg-zinc-900/60 p-2 rounded-xl border border-zinc-800">
                          Real-time brand listening and comment conversations converting scrollers into buyers.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Console Footer */}
                  <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[9px] font-mono text-zinc-500 mt-2">
                    <span>Sprout Social / Buffer Enterprise</span>
                    <span className="text-emerald-400">Status: Active &amp; Syncing</span>
                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : service.slug === "content-marketing" || service.slug === "content-writing" ? (
          /* Content Writing Custom "WHY SEO CONTENT MATTERS" + Interactive Copy Optimizer */
          <section className="w-full bg-[#fafafb] text-black py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
              
              {/* Header Title & Subtitle */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-zinc-900 font-display tracking-tight uppercase leading-tight mb-2">
                WHY SEO CONTENT <span className="text-zinc-400 font-black">MATTERS</span>
              </h2>
              <p className="text-zinc-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
                Good web content writing is not only great for users, but also great for your website&apos;s search engine optimization. By using effective content, you can convert site traffic into active customer signups.
              </p>

              {/* 2-Column Interactive Simulator Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
                
                {/* Left Column: 5 Selectable Benefit Cards */}
                <div className="lg:col-span-5 flex flex-col gap-2.5 text-left">
                  {[
                    { icon: "🔍", text: "Rank for targeted keywords" },
                    { icon: "👤", text: "Communicate with prospect customers" },
                    { icon: "⏱️", text: "Boost your website's engagement time" },
                    { icon: "📈", text: "Improve conversion rates" },
                    { icon: "📊", text: "Promote online marketing efforts" },
                  ].map((item, idx) => {
                    const isActive = activeWhySeoIndex === idx;
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setActiveWhySeoIndex(idx)}
                        className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 relative ${
                          isActive
                            ? "bg-white border-amber-300 shadow-md border-l-[4px] border-l-[#fbea3d]"
                            : "bg-white/80 border-zinc-200 hover:border-zinc-300"
                        }`}
                      >
                        <span className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center text-sm shrink-0">
                          {item.icon}
                        </span>
                        <span className="text-xs sm:text-[13px] font-bold text-zinc-900 leading-snug">
                          {item.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Live Copy Optimizer Container */}
                <div className="lg:col-span-7 bg-white border border-zinc-200/90 rounded-3xl p-5 sm:p-6 shadow-xl flex flex-col justify-between min-h-[360px] w-full text-left">
                  
                  {/* Window Bar Header */}
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="font-mono text-xs font-black uppercase tracking-wider text-zinc-900">
                        OWLIO COPY OPTIMIZER V1.0
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 font-bold bg-zinc-100 px-2.5 py-0.5 rounded-full">
                      LIVE EDITOR
                    </span>
                  </div>

                  {/* Formatting Toolbar */}
                  <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-xl border border-zinc-200/60 mb-3">
                    <span className="font-bold text-zinc-700">B</span>
                    <span className="italic text-zinc-700">I</span>
                    <span className="underline text-zinc-700">U</span>
                    <span className="text-zinc-300">|</span>
                    <span>Arial</span>
                    <span className="text-zinc-300">|</span>
                    <span>Normal</span>
                  </div>

                  {/* Text Editor Window with Line Numbers */}
                  <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3.5 flex gap-3 font-mono text-xs text-zinc-800 min-h-[110px] mb-3">
                    <div className="flex flex-col text-zinc-400 text-right select-none pr-2 border-r border-zinc-200 text-[11px] leading-relaxed">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                    </div>
                    <div className="flex-1 text-[11px] leading-relaxed">
                      {copyOptimizerMode === "raw" && (
                        <p className="text-zinc-700 animate-fadeIn">
                          We sell software. Software is good for business. If you need software, we are a software development company that sells software. Software helps you work.
                        </p>
                      )}
                      {copyOptimizerMode === "intent" && (
                        <p className="text-zinc-900 font-medium animate-fadeIn">
                          Empower your enterprise with scalable cloud software engineered for high velocity. Transform legacy bottlenecks into automated digital workflows that drive measurable revenue growth.
                        </p>
                      )}
                      {copyOptimizerMode === "keywords" && (
                        <p className="text-zinc-900 font-medium animate-fadeIn">
                          Discover custom enterprise software solutions designed to scale your operations. Our expert software development architects engineer secure, high-load web applications tailored to your business goals.
                        </p>
                      )}
                      {copyOptimizerMode === "readability" && (
                        <p className="text-zinc-900 font-medium animate-fadeIn">
                          Build better software, faster. We design and deliver custom web apps that help your team work smarter, automate repetitive tasks, and scale without technical debt.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Action Filters Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setCopyOptimizerMode("intent")}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                          copyOptimizerMode === "intent"
                            ? "bg-black text-[#fbea3d] shadow-sm"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                        }`}
                      >
                        Target Intent
                      </button>
                      <button
                        type="button"
                        onClick={() => setCopyOptimizerMode("keywords")}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                          copyOptimizerMode === "keywords"
                            ? "bg-black text-[#fbea3d] shadow-sm"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                        }`}
                      >
                        🔍 Inject Keywords
                      </button>
                      <button
                        type="button"
                        onClick={() => setCopyOptimizerMode("readability")}
                        className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                          copyOptimizerMode === "readability"
                            ? "bg-black text-[#fbea3d] shadow-sm"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                        }`}
                      >
                        📄 Simplify Readability
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCopyOptimizerMode("raw")}
                      className="text-[11px] font-bold font-mono text-red-500 hover:text-red-700 px-2.5 py-1 rounded-lg border border-red-200 hover:bg-red-50 transition-colors cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>

                  {/* Bottom Telemetry Gauges */}
                  <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-zinc-100">
                    {/* Readability */}
                    <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-2.5 text-center">
                      <span className="text-[9px] font-mono text-zinc-400 font-bold block uppercase">READABILITY</span>
                      <span
                        className={`text-xs sm:text-sm font-black font-mono ${
                          copyOptimizerMode === "raw" ? "text-red-500" : "text-emerald-600"
                        }`}
                      >
                        {copyOptimizerMode === "raw" ? "Grade F" : "Grade A+"}
                      </span>
                    </div>

                    {/* Keywords */}
                    <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-2.5 text-center">
                      <span className="text-[9px] font-mono text-zinc-400 font-bold block uppercase">KEYWORDS</span>
                      <span
                        className={`text-xs sm:text-sm font-black font-mono ${
                          copyOptimizerMode === "raw" ? "text-red-500" : "text-emerald-600"
                        }`}
                      >
                        {copyOptimizerMode === "raw" ? "12.5% Stuffing" : "2.4% Natural"}
                      </span>
                    </div>

                    {/* SEO Index */}
                    <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-2.5 flex flex-col justify-center gap-1">
                      <div className="flex items-center justify-between text-[9px] font-mono">
                        <span className="text-zinc-400 font-bold uppercase">SEO INDEX</span>
                        <span
                          className={`font-black ${
                            copyOptimizerMode === "raw" ? "text-red-500" : "text-emerald-600"
                          }`}
                        >
                          {copyOptimizerMode === "raw" ? "20%" : "96%"}
                        </span>
                      </div>
                      <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            copyOptimizerMode === "raw" ? "w-[20%] bg-red-500" : "w-[96%] bg-emerald-500"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>
        ) : (
          /* For all other services: 4-Phase Delivery Framework */
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16 text-left">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-2">
                  HOW WE EXECUTE
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  Our 4-Phase Delivery Framework
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-[#fafafb] border border-zinc-200 p-6 sm:p-7 rounded-3xl flex flex-col justify-between gap-4"
                  >
                    <div className="flex flex-col gap-3">
                      <span className="text-3xl font-black font-mono text-[#e2ce1c]">
                        {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-zinc-900 font-display">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. STRUCTURED FOR SEARCH ENGINE VISIBILITY / WHY CHOOSE OWLIO WORKS (Replaces Featured Case Studies) */}
        <section className="w-full bg-[#f4f4f5] text-black py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            
            {/* Left Column: Heading + Paragraph + 8 Capsule Checklist Cards */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-zinc-900 font-display tracking-tight uppercase leading-[1.1] mb-5">
                  {service.structuredSection?.title || "STRUCTURED FOR SEARCH ENGINE VISIBILITY"}
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal mb-8 max-w-2xl">
                  {service.structuredSection?.description ||
                    "Smart optimization techniques to enhance reach online whilst keeping users engaged in an interesting layout. We implement modern, semantic code architectures that make it simple for Google crawlers to index key business sections."}
                </p>
              </div>

              {/* 2-Column Grid of 8 White Pill Checklist Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                {(
                  service.structuredSection?.checklist || [
                    "Responsive page structure",
                    "Mobile-ready framework",
                    "Fast-loading content",
                    "Keyword-focused architecture",
                    "Search-friendly coding",
                    "Easy navigation flow",
                    "Structured content placement",
                    "Conversion-focused pages",
                  ]
                ).map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200/80 px-4 py-3 sm:py-3.5 rounded-2xl shadow-xs flex items-center gap-3 text-xs sm:text-[13px] font-medium text-zinc-800 hover:border-zinc-400 transition-colors"
                  >
                    <span className="text-black font-bold text-sm leading-none">✓</span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dark Modern Card "WHY CHOOSE OWLIO WORKS?" */}
            <div className="lg:col-span-5 bg-[#0c0c0d] border border-zinc-800 rounded-3xl p-7 sm:p-9 text-white flex flex-col justify-between text-left shadow-xl">
              <div>
                <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-white uppercase pb-3.5 mb-5 border-b border-zinc-800">
                  {service.structuredSection?.whyChooseTitle || "WHY CHOOSE OWLIO WORKS?"}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                  {service.structuredSection?.whyChooseDesc ||
                    "The problem many companies face is having a website that looks good, but doesn't work. Creativity and Digital Strategy are the comfort of our team that is helping businesses to achieve measurable results."}
                </p>

                {/* Bullets with glowing yellow dots */}
                <ul className="flex flex-col gap-3 text-xs sm:text-[13px] text-zinc-200 font-medium">
                  {(
                    service.structuredSection?.whyChooseBullets || [
                      "Business-focused solutions",
                      "Performance-driven development",
                      "Search optimized framework",
                      "Customer-first approach",
                      "Scalable digital platforms",
                      "Professional project execution",
                    ]
                  ).map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2.5">
                      <span className="text-[#fbea3d] text-lg leading-none select-none">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* 7. FREQUENTLY ASKED QUESTIONS (Accordion) */}
        {service.faqs.length > 0 && (
          <section className="w-full bg-white text-black py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 text-left">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 block mb-2">
                  QUESTIONS & ANSWERS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 font-display tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="flex flex-col border-t border-zinc-200">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="border-b border-zinc-200">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-5 sm:py-6 flex items-center justify-between text-left cursor-pointer group"
                      >
                        <span className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-black font-display">
                          {faq.question}
                        </span>
                        <span className="text-xl font-light text-zinc-500 ml-4 shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-6 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 8. FINAL CTA STRIP & NEWSLETTER */}
        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
