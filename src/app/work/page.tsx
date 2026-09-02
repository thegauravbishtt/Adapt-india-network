"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import Link from "next/link";

export type WorkCategory =
  | "Websites & Apps"
  | "Social"
  | "Performance Marketing"
  | "SEO / AEO / GEO"
  | "Case Study";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: WorkCategory;
  categoryLabel: string;
  headline: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  clientQuote?: { text: string; author: string; role: string };
  isStealth?: boolean;
}

const caseStudiesData: CaseStudy[] = [
  // -------------------------------------------------------------
  // 1. WEBSITES & APPS (5 Multi-Device Showcase Mockups)
  // -------------------------------------------------------------
  {
    id: "roamora-stays",
    title: "Stay Where Every Moment Feels Special",
    client: "Roamora",
    category: "Websites & Apps",
    categoryLabel: "Luxury Stays · Global",
    headline: "Direct booking engine that eliminated 3rd-party OTA commission fees.",
    description: "A quiet-luxury flagship for global travelers — handpicked stays, boutique chalets, instant multi-currency booking engine, and seamless guest journey designed to convert browsing travelers into direct booked stays.",
    image: "/mockup-roamora.jpg",
    metrics: [
      { label: "Direct Bookings", value: "+215%" },
      { label: "Booking Flow", value: "< 0.6s" },
      { label: "OTA Commission Saved", value: "$420K" },
    ],
    tags: ["Next.js 16", "Stripe Multi-Currency", "Turbopack", "Dynamic Rates"],
    challenge: "The luxury hotel chain was losing over 22% of revenue to third-party travel aggregators due to an outdated, slow booking engine.",
    solution: "Designed a 2-step frictionless booking funnel with instant calendar availability, personalized add-on upsells, and Stripe automated tax engine.",
    results: [
      "Direct room bookings increased by 215% year-over-year.",
      "Average Order Value (AOV) grew by $185 per guest through smart upsell prompts.",
      "Page load speed improved from 4.2s to 0.6s globally.",
    ],
    clientQuote: {
      text: "Our guests expect perfection, and this platform delivers an experience as seamless as our 5-star properties.",
      author: "Julian Chen",
      role: "VP of Hospitality Operations",
    },
  },
  {
    id: "habitat-living",
    title: "Built for Better Living",
    client: "Habitat",
    category: "Websites & Apps",
    categoryLabel: "Architecture · Living Spaces",
    headline: "Architectural web showcase with daylight simulation and unit filters.",
    description: "A minimalist digital experience for luxury architectural developments — interactive blueprints, daylight simulation tours, and high-intent inquiry capture engineered for discerning modern homeowners.",
    image: "/mockup-habitat.jpg",
    metrics: [
      { label: "Qualified Inquiries", value: "3.2x" },
      { label: "Units Pre-Sold", value: "88%" },
      { label: "Lighthouse Score", value: "100/100" },
    ],
    tags: ["Next.js 16", "Interactive 3D", "HubSpot CRM", "TailwindCSS"],
    challenge: "High-net-worth real estate buyers demanded intuitive spatial exploration before committing to private on-site viewings.",
    solution: "Engineered an interactive 3D floorplan selector with unit availability syncing directly from the sales CRM and instant mortgage estimation.",
    results: [
      "88% of luxury residential units were pre-sold prior to construction completion.",
      "Lead-to-viewing conversion rate increased from 11% to 35%.",
      "Ranked #1 on Google for luxury developments in the target metropolitan region.",
    ],
    clientQuote: {
      text: "The portal single-handedly drove our most successful pre-launch campaign to date.",
      author: "Sarah Jenkins",
      role: "Director of Marketing",
    },
  },
  {
    id: "chiseh-groceries",
    title: "Fresh Groceries Delivered with Chi-Seh",
    client: "Chi-Seh",
    category: "Websites & Apps",
    categoryLabel: "Fresh Groceries · Quick-Commerce",
    headline: "Lightning-fast grocery delivery web storefront with 1-click checkout.",
    description: "A lightning-fast grocery delivery web storefront — live inventory synchronization, smart localized search, and 1-click checkout engineered for high-frequency daily household orders.",
    image: "/mockup-chiseh.jpg",
    metrics: [
      { label: "Daily Orders", value: "14K+" },
      { label: "Cart Conversion", value: "8.4%" },
      { label: "Search Speed", value: "< 18ms" },
    ],
    tags: ["Shopify Plus", "Headless Next.js", "Instant Search", "Klaviyo VIP"],
    challenge: "High SKU catalog complexity and slow mobile search queries caused high cart abandonment during peak morning grocery hours.",
    solution: "Implemented an instant Algolia-powered search pipeline, persistent multi-item cart drawer, and geo-targeted delivery slot reserving.",
    results: [
      "Increased daily mobile checkout completion by 42%.",
      "Average Order Value (AOV) expanded by 24% through smart bundle recommendations.",
      "Reduced catalog search latency from 680ms to under 18ms.",
    ],
    clientQuote: {
      text: "Our customers constantly praise how fast and effortless it is to order groceries every day.",
      author: "Zayn Edwards",
      role: "VP of E-Commerce",
    },
  },
  {
    id: "socialrush-platform",
    title: "Your Social Growth, Engineered",
    client: "SocialRUSH",
    category: "Websites & Apps",
    categoryLabel: "Social Growth · Growth SaaS",
    headline: "Unified social order dashboard, campaign launcher, and analytics workspace.",
    description: "A powerful dark-mode social growth and campaign management platform — real-time order tracking dashboard, multi-platform growth score analyzer, and instant WhatsApp support integration.",
    image: "/mockup-socialrush.png",
    metrics: [
      { label: "Orders Managed", value: "45K+" },
      { label: "Delivery SLA", value: "99.9%" },
      { label: "Customer ROI", value: "4.9x" },
    ],
    tags: ["Next.js 16", "SaaS Dashboard", "Stripe Billing", "Real-Time Telemetry"],
    challenge: "Social media marketing clients struggled with fragmented order updates across multiple portals without unified campaign oversight.",
    solution: "Engineered a centralized real-time customer workspace displaying live campaign status, automated refill triggers, and instant growth score reports.",
    results: [
      "Customer repeat order retention rate surged by 65%.",
      "Mitigated 99.9% of customer support ticket inquiries through self-serve order status tracking.",
      "Processed over 45,000 campaign transactions with 100% data integrity.",
    ],
    clientQuote: {
      text: "SocialRUSH gives our clients total visibility and clarity into their marketing growth.",
      author: "Alex Rivera",
      role: "Founder & CEO",
    },
  },
  {
    id: "vivara-wellness",
    title: "Peace of Mind. Every Single Day.",
    client: "Vivara",
    category: "Websites & Apps",
    categoryLabel: "Mental Wellness · Digital Health",
    headline: "24/7 mental wellness companion with encrypted mood telemetry.",
    description: "A calming, science-backed mental wellness web companion — interactive audio mindfulness sessions, mood tracking telemetry, and seamless subscription onboarding.",
    image: "/mockup-vivara.jpg",
    metrics: [
      { label: "Active Members", value: "240K+" },
      { label: "User Retention", value: "78%" },
      { label: "HIPAA Vault", value: "100% Certified" },
    ],
    tags: ["Next.js 16", "Audio Player", "Encrypted EHR", "Stripe Subscriptions"],
    challenge: "Health consumers felt overwhelmed by clinical, sterile mental health portals and abandoned onboarding within the first 60 seconds.",
    solution: "Designed a serene, nature-inspired visual design language with ambient audio previews, frictionless email waitlist, and guided self-assessments.",
    results: [
      "Onboarding conversion rate surged from 14% to 48%.",
      "Over 240,000 active daily audio mindfulness sessions completed.",
      "Achieved a 4.9/5 star satisfaction rating across 10,000+ member reviews.",
    ],
    clientQuote: {
      text: "The serene digital experience immediately puts our users at ease before they begin their mindfulness journey.",
      author: "Dr. Elena Rostova",
      role: "Founder & Clinical Lead",
    },
  },

  // -------------------------------------------------------------
  // 2. SOCIAL
  // -------------------------------------------------------------
  {
    id: "mixology-beverage",
    title: "Signature Drink Deserves Attention",
    client: "Velvet & Smoke Distillery",
    category: "Social",
    categoryLabel: "Social Campaign & Video Production",
    headline: "Craft cocktail digital visual campaign generating 1.2M+ organic impressions.",
    description: "Multi-channel sensory campaign fusing hyper-stylized short-form video content, micro-influencer gifting pipelines, and localized bar locator.",
    image: "/creative6.png",
    metrics: [
      { label: "Social Impressions", value: "1.2M+" },
      { label: "Retail Locator Searches", value: "+450%" },
      { label: "Distributor Sell-Through", value: "98%" },
    ],
    tags: ["Video Production", "Influencer Media", "Store Locator", "TikTok / Reels", "PR"],
    challenge: "New artisanal spirit required immediate brand awareness across premium nightlife venues and high-end liquor retailers.",
    solution: "Executed a mood-lit aesthetic video campaign highlighting bespoke mixology recipes alongside an interactive store and bar locator.",
    results: [
      "Expanded distribution into 280+ top cocktail lounges nationwide.",
      "User-generated content (UGC) campaign generated 4,500+ organic consumer tags.",
      "Initial production run sold out 6 weeks ahead of forecast.",
    ],
    clientQuote: {
      text: "They created a mystique around our brand that people immediately wanted to be part of.",
      author: "Liam O'Connor",
      role: "Master Distiller",
    },
  },
  {
    id: "nightlife-experiential",
    title: "Weekend Personality Lives Here",
    client: "Nocturne Entertainment Group",
    category: "Social",
    categoryLabel: "Social Viral & Nightlife Experience",
    headline: "High-energy event ticketing, table reservations, and VIP membership app.",
    description: "End-to-end ticketing and nightlife booking engine with dynamic QR code access, live table availability maps, and digital VIP loyalty pass.",
    image: "/creative7.png",
    metrics: [
      { label: "Ticket Sales Velocity", value: "< 4 mins Sellout" },
      { label: "VIP Table Revenue", value: "+160%" },
      { label: "App Daily Active Users", value: "45K" },
    ],
    tags: ["Mobile PWA", "Apple Wallet Passes", "Fast QR Scanning", "Stripe Billing", "Node.js"],
    challenge: "Long venue entry queues and manual table reservation phone calls were causing lost weekend revenue and VIP frustration.",
    solution: "Built a progressive web app (PWA) with Apple Wallet NFC/QR pass integration and instant credit card deposit authorization for table bookings.",
    results: [
      "Door entry processing time slashed from 45 seconds to 3 seconds per guest.",
      "Zero fraud chargebacks recorded across over 120,000 ticket transactions.",
      "Repeat VIP table bookings increased by 160% through automated loyalty tiers.",
    ],
    clientQuote: {
      text: "The smoothest nightlife ticketing and table management platform in the industry.",
      author: "Dimitri Rossi",
      role: "Head of Nightlife Experiences",
    },
  },
  {
    id: "creator-launch-social",
    title: "High-Voltage Apparel & Streetwear Social Drop",
    client: "Chiseh Activewear",
    category: "Social",
    categoryLabel: "Influencer Campaign & Product Drop",
    headline: "850K+ organic social engagement and instant product collection sellout.",
    description: "Viral creator marketing blitz featuring micro-influencer seeding, TikTok Spark Ads, and countdown teaser videos for limited sneaker releases.",
    image: "/chiseh.jpg",
    metrics: [
      { label: "Drop Sellout Time", value: "11 Minutes" },
      { label: "Social Engagement", value: "850K+" },
      { label: "Email Waitlist", value: "48K Subscribers" },
    ],
    tags: ["TikTok Spark Ads", "Micro-Influencers", "Drop Funnel", "Reels Creative"],
    challenge: "New streetwear collection needed to generate massive organic FOMO among Gen-Z fitness enthusiasts without exorbitant ad spend.",
    solution: "Seeded products with 50 targeted micro-creators under strict embargo, timing coordinated reveal posts 24 hours prior to cart opening.",
    results: [
      "Entire 10,000-unit capsule collection sold out in 11 minutes.",
      "Gained 48,000 verified email & SMS subscribers during pre-drop teaser.",
      "Earned 850,000+ total social likes and comments across Instagram and TikTok.",
    ],
    clientQuote: {
      text: "The community engagement was insane. We crashed our servers on drop morning in the best way possible.",
      author: "Zayn Edwards",
      role: "Creative Director",
    },
  },

  // -------------------------------------------------------------
  // 3. PERFORMANCE MARKETING
  // -------------------------------------------------------------
  {
    id: "high-velocity-d2c",
    title: "High-Velocity D2C Commerce & Scaling",
    client: "Kivanza Nutrition & Performance",
    category: "Performance Marketing",
    categoryLabel: "Paid Media & Growth Telemetry",
    headline: "4.9x Blended ROAS and $4.2M GMV scale in 9 months.",
    description: "Comprehensive performance acquisition overhaul including Meta Dynamic Creative Testing (DCT), Google Ads PMax, and server-side CAPI telemetry.",
    image: "/creative4.png",
    metrics: [
      { label: "Blended ROAS", value: "4.9x" },
      { label: "Revenue Scaled", value: "$4.2M" },
      { label: "CAC Reduction", value: "-38%" },
    ],
    tags: ["Meta CAPI", "Google PMax", "Dynamic Creative", "Northbeam", "CRO Funnels"],
    challenge: "The brand hit a revenue plateau at $80k/month due to rising Meta CPMs and ad creative fatigue after iOS 14.5 tracking changes.",
    solution: "Deployed server-side conversion API (CAPI), launched 40+ modular video ad variations weekly, and engineered high-converting multi-step landers.",
    results: [
      "Scaled monthly recurring revenue from $80K to over $520K.",
      "Customer acquisition cost (CAC) dropped by 38% across all cold acquisition channels.",
      "Email & SMS flows now drive 34% of total automated revenue.",
    ],
    clientQuote: {
      text: "Owlio Works didn't just run ads; they completely restructured our unit economics for massive profitability.",
      author: "Tariq Mansoor",
      role: "Co-Founder & CEO",
    },
  },
  {
    id: "paid-acquisition-engine",
    title: "Multi-Channel Google Ads & Meta CAPI Engine",
    client: "Verve Supplement Labs",
    category: "Performance Marketing",
    categoryLabel: "Omnichannel Paid Media",
    headline: "$3.4M in profitable ad spend scaled across Google PMax and Meta DCT.",
    description: "High-volume ad testing pipeline combining dynamic creative testing, YouTube video action campaigns, and server-side tracking.",
    image: "/services/google_ads.jpg",
    metrics: [
      { label: "Ad Spend Managed", value: "$3.4M" },
      { label: "New Customer ROAS", value: "3.6x" },
      { label: "Conversion Rate", value: "5.4%" },
    ],
    tags: ["Google Ads PMax", "Meta Ads", "YouTube Action", "Klaviyo Telemetry"],
    challenge: "High cost-per-click on branded health queries made scaling past $100K/month difficult without eroding net margins.",
    solution: "Structured segmented Performance Max asset groups targeting high-intent long-tail keywords combined with custom retention email sequences.",
    results: [
      "Maintained a 3.6x first-order return on ad spend across $3.4M in total spend.",
      "Increased blended store conversion rate from 2.1% to 5.4%.",
      "Customer 90-day lifetime value (LTV) expanded by 45%.",
    ],
    clientQuote: {
      text: "Our media buying is now predictable, profitable, and completely scientific.",
      author: "Nadia Kowalska",
      role: "VP of Growth",
    },
  },
  {
    id: "b2b-pipeline-engine",
    title: "B2B Enterprise Pipeline & Demand Gen Engine",
    client: "CloudScale Nexus B2B SaaS",
    category: "Performance Marketing",
    categoryLabel: "B2B Performance & Account Acquisition",
    headline: "3.8x ROAS on LinkedIn & Google Search with 240+ SQLs generated.",
    description: "Targeted account-based marketing (ABM) campaign targeting CTOs, CISOs, and VP Engineering leads with interactive ROI calculators.",
    image: "/services/meta_ads.jpg",
    metrics: [
      { label: "Sales Qualified Leads", value: "240+ SQLs" },
      { label: "Pipeline Value", value: "$5.2M" },
      { label: "Cost Per SQL", value: "-46%" },
    ],
    tags: ["LinkedIn ABM", "Google Search B2B", "HubSpot Automation", "Interactive Landers"],
    challenge: "Long sales cycles and high cost-per-lead on LinkedIn were straining outbound enterprise sales capacity.",
    solution: "Constructed targeted account lists enriched via Clearbit, paired with personalized interactive migration cost calculators.",
    results: [
      "Generated 240+ enterprise Sales Qualified Leads (SQLs) in two quarters.",
      "Total sales pipeline value created exceeded $5.2M in annual contract value.",
      "Reduced cost per qualified demo booking by 46%.",
    ],
    clientQuote: {
      text: "The lead quality coming from these campaigns is the highest our sales reps have ever seen.",
      author: "David Stern",
      role: "Chief Revenue Officer",
    },
  },

  // -------------------------------------------------------------
  // 4. SEO / AEO / GEO
  // -------------------------------------------------------------
  {
    id: "search-dominance-aeo",
    title: "Algorithmic Search Dominance & AEO Engine",
    client: "OmniFlow Automation",
    category: "SEO / AEO / GEO",
    categoryLabel: "SEO · AEO · GEO Optimization",
    headline: "Captured #1 rankings for 40+ high-intent commercial software queries.",
    description: "Built semantic knowledge graphs, programmatic SEO templates, and AI Answer Engine Optimization (ChatGPT/Perplexity) entity authority.",
    image: "/services/seo_aeo.jpg",
    metrics: [
      { label: "Organic Pipeline", value: "$1.8M ARR" },
      { label: "#1 Keyword Rankings", value: "42 Terms" },
      { label: "Perplexity AI Citations", value: "Top 3 Source" },
    ],
    tags: ["Programmatic SEO", "Schema.org Graphs", "AEO / GEO", "Content Clusters", "SurferSEO"],
    challenge: "High Google Ads CPC costs ($35+/click) made paid acquisition unsustainable for competitive enterprise automation software keywords.",
    solution: "Architected a 300-page semantic topical cluster with JSON-LD schema graphs that establish definitive industry authority for search engines and LLMs.",
    results: [
      "Generated $1.8M in qualified inbound enterprise sales pipeline in 6 months.",
      "Secured featured Google AI Overviews and top citations on Perplexity & Claude.",
      "Reduced overall customer acquisition cost by 62%.",
    ],
    clientQuote: {
      text: "Our organic inbound pipeline now out-produces our entire outbound sales team.",
      author: "Amanda Thorne",
      role: "Head of Growth",
    },
  },
  {
    id: "omnichannel-gmb-local",
    title: "Multi-Location Local SEO & Google Map Pack Dominance",
    client: "Veritas Dental & Orthodontics (32 Clinics)",
    category: "SEO / AEO / GEO",
    categoryLabel: "Local SEO & GMB Domination",
    headline: "+420% increase in Google Map Pack phone calls and booked appointments.",
    description: "Automated review generation pipelines, geo-tagged local landing pages, and verified Google Business Profile optimization across 32 clinical locations.",
    image: "/services/local_seo.jpg",
    metrics: [
      { label: "Map Pack Phone Calls", value: "+420%" },
      { label: "5-Star Google Reviews", value: "4,200+" },
      { label: "Local Search Ranking", value: "Top 3 in all 32 zones" },
    ],
    tags: ["Google Business Profile", "Geo-Targeted Landers", "Automated SMS Reviews", "Schema Markup"],
    challenge: "Patients were choosing competing clinics because individual branch profiles had inconsistent citations and stagnant review counts.",
    solution: "Rolled out synchronized location pages with localized schema, automated review request triggers via patient SMS, and dynamic appointment booking.",
    results: [
      "Over 4,200 verified 5-star Google reviews collected across all clinic branches.",
      "Inbound patient phone calls from Google Maps increased by 420%.",
      "Achieved #1-#3 positions in Google Local 3-Pack for 'orthodontist near me' in every territory.",
    ],
    clientQuote: {
      text: "Our appointment calendar is booked out 6 weeks in advance across every single location.",
      author: "Dr. Sandeep Patel",
      role: "Founder & Chief of Dentistry",
    },
  },
  {
    id: "programmatic-seo-engine",
    title: "Enterprise Programmatic Content & Knowledge Graphs",
    client: "Apex Core SaaS",
    category: "SEO / AEO / GEO",
    categoryLabel: "Programmatic Search & AI Indexing",
    headline: "1.8M monthly organic search impressions across 500+ programmatic entities.",
    description: "Scaled dynamic entity landing pages leveraging next-gen JSON-LD schema graphs, server-side Turbopack static generation, and automated sitemaps.",
    image: "/services/content_marketing.jpg",
    metrics: [
      { label: "Monthly Impressions", value: "1.8M+" },
      { label: "Top 3 Rankings", value: "180+ Terms" },
      { label: "Domain Authority", value: "42 → 68" },
    ],
    tags: ["Programmatic Content", "Entity Mapping", "Next.js SSG", "Semantic SEO"],
    challenge: "Manual content creation was too slow to compete against legacy competitors holding hundreds of authoritative category keywords.",
    solution: "Engineered database-driven programmatic pages populated with verified data, custom comparison tables, and structured data markup.",
    results: [
      "Expanded organic search footprint to 1.8M monthly search impressions.",
      "Top 3 rankings captured across 180+ high-value buyer comparison terms.",
      "Direct organic inbound signups grew by 310% in 9 months.",
    ],
    clientQuote: {
      text: "The programmatic engine turned SEO into our highest-ROI acquisition channel.",
      author: "Felix Zhao",
      role: "Co-Founder",
    },
  },

  // -------------------------------------------------------------
  // 5. CASE STUDY
  // -------------------------------------------------------------
  {
    id: "bold-disruptive",
    title: "Bold. Disruptive. Unforgettable.",
    client: "Pulse Creative Brand",
    category: "Case Study",
    categoryLabel: "Brand Identity & Design System",
    headline: "High-voltage visual storytelling that elevated brand equity.",
    description: "End-to-end digital identity, interactive 3D web experience, and conversion-optimized brand portal built for next-generation audiences.",
    image: "/creative1.png",
    metrics: [
      { label: "Organic Impressions", value: "+340%" },
      { label: "Avg Session Duration", value: "3m 48s" },
      { label: "Design Awards", value: "3x FWA & Awwwards" },
    ],
    tags: ["UI/UX Design", "Interactive 3D", "Brand Guidelines", "Design Tokens"],
    challenge: "The client needed to break through a saturated lifestyle market with an uncompromising visual identity that immediately commanded premium pricing.",
    solution: "We engineered a tokenized Figma design system, 60fps micro-animations, and a bespoke Next.js web application with sub-second page loads.",
    results: [
      "Generated 1.2M+ organic social impressions in the first 60 days.",
      "Doubled conversion rate from social ad traffic to inquiry forms.",
      "100% lighthouse accessibility and design score.",
    ],
    clientQuote: {
      text: "Owlio Works gave us an identity that completely separated us from every legacy competitor in our space.",
      author: "Marcus Vance",
      role: "Founder & Creative Director",
    },
  },
  {
    id: "cybersecurity-shield",
    title: "Zero-Trust Cybersecurity & Threat Mitigation",
    client: "Sovereign Trust Financial",
    category: "Case Study",
    categoryLabel: "Cybersecurity & Security Audit",
    headline: "Bank-grade penetration testing, WAF deployment, and zero-day defense.",
    description: "Conducted deep source-code vulnerability audits, deployed cloud Web Application Firewalls (WAF), and implemented strict MFA token authentication.",
    image: "/services/cybersecurity.jpg",
    metrics: [
      { label: "Threats Blocked/Mo", value: "1.4M+" },
      { label: "Pen-Test Score", value: "100% Clean" },
      { label: "Compliance Pass", value: "SOC2 & ISO 27001" },
    ],
    tags: ["Cloudflare WAF", "Zero-Trust IAM", "Source Code Audit", "Pen-Testing", "SOC2"],
    challenge: "Financial technology client faced sophisticated credential stuffing attacks and required institutional accreditation for enterprise partners.",
    solution: "Deployed Cloudflare Enterprise bot management, rate limiting, automated container vulnerability scanning, and hardened OAuth2 tokens.",
    results: [
      "Successfully mitigated 1.4M malicious bot injection attempts with zero user disruption.",
      "Passed independent third-party penetration testing with zero critical or high vulnerabilities.",
      "Unlocked enterprise tier partnerships requiring strict financial compliance certifications.",
    ],
    clientQuote: {
      text: "Their security engineering gave our banking partners total confidence in our architecture.",
      author: "Raymond Holt",
      role: "Chief Information Security Officer",
    },
  },
  {
    id: "prime-living-architecture",
    title: "Prime Living Real Estate & PropTech Portal",
    client: "Apex Living Developments",
    category: "Case Study",
    categoryLabel: "Real Estate & Interactive Portal",
    headline: "Interactive property exploration engine with high-intent lead qualification.",
    description: "Created an architectural web showcase for premium residential developments with floor plan filters, sunrise/sunset daylight simulations, and CRM sync.",
    image: "/creative5.png",
    metrics: [
      { label: "Qualified Inquiries", value: "3.2x" },
      { label: "Units Pre-Sold", value: "88%" },
      { label: "Avg Engagement", value: "5m 12s" },
    ],
    tags: ["Interactive Map", "HubSpot CRM", "3D Floorplans", "Video Walkthroughs", "SEO"],
    challenge: "High-net-worth real estate buyers demanded intuitive spatial exploration before committing to private on-site viewings.",
    solution: "Engineered an interactive 3D floorplan selector with unit availability syncing directly from the sales CRM and instant mortgage estimation.",
    results: [
      "88% of luxury residential units were pre-sold prior to construction completion.",
      "Lead-to-viewing conversion rate increased from 11% to 35%.",
      "Ranked #1 on Google for luxury developments in the target metropolitan region.",
    ],
    clientQuote: {
      text: "The portal single-handedly drove our most successful pre-launch campaign to date.",
      author: "Sarah Jenkins",
      role: "Director of Marketing",
    },
  },
  {
    id: "fintech-payments-case",
    title: "Next-Gen Liquidity Protocol & Smart Payments",
    client: "Valence Global FinTech",
    category: "Case Study",
    categoryLabel: "FinTech & Real-Time Settlement",
    headline: "$240M+ in cross-border settlement transactions handled securely.",
    description: "Architected multi-ledger currency settlement system with sub-100ms transaction confirmation, automated AML compliance, and biometric authentication.",
    image: "/photo1.png",
    metrics: [
      { label: "Total Volume Handled", value: "$240M+" },
      { label: "Transaction Speed", value: "< 85ms" },
      { label: "PCI-DSS Grade", value: "Level 1" },
    ],
    tags: ["Go Backend", "Kafka Streaming", "PCI-DSS Level 1", "Multi-Sig Security", "Redis"],
    challenge: "High payment settlement latency and cross-border currency conversion friction were causing enterprise drop-offs.",
    solution: "Engineered an event-driven Kafka transaction pipeline with automated multi-bank liquidity balancing and zero-knowledge identity proofs.",
    results: [
      "Settlement speed accelerated from 2 hours to 85 milliseconds.",
      "Processed over $240M in transaction volume without a single security incident.",
      "Secured Tier-1 banking partnerships across North America and Europe.",
    ],
    clientQuote: {
      text: "Owlio Works delivered fintech architecture that rivals the most established global payment gateways.",
      author: "Jonathan Pierce",
      role: "Founder & CEO",
    },
  },

  // -------------------------------------------------------------
  // 5. CASE STUDY (Stealth & Innovation)
  // -------------------------------------------------------------
  {
    id: "project-neuralsync",
    title: "Project NeuralSync — Autonomous AI Interface",
    client: "Stealth AI Research Lab",
    category: "Case Study",
    categoryLabel: "Stealth R&D · Autonomous AI",
    headline: "Next-generation spatial AI reasoning and real-time voice copilot.",
    description: "An unreleased conversational intelligence platform fusing zero-latency localized LLM inference, dynamic canvas rendering, and voice agent architecture.",
    image: "/creative1.png",
    metrics: [
      { label: "Status", value: "Private Alpha" },
      { label: "Latency", value: "< 18ms Edge" },
      { label: "Target Launch", value: "Q4 2026" },
    ],
    tags: ["Autonomous Agents", "WebAssembly LLM", "Spatial Canvas", "Zero-Latency Voice"],
    challenge: "Current AI user interfaces are constrained by static chat boxes and high cloud API roundtrip latencies.",
    solution: "Building an immersive real-time canvas powered by WebAssembly edge models with adaptive UI components that materialize instantly during conversation.",
    results: [
      "Achieved sub-18ms speech-to-speech feedback on client devices.",
      "Patent-pending dynamic spatial interface design.",
      "Private waitlist reached 25,000+ engineers in 72 hours.",
    ],
    clientQuote: {
      text: "A preview into what human-computer interaction will look like for the next decade.",
      author: "Confidential",
      role: "Lead AI Architect",
    },
    isStealth: true,
  },
  {
    id: "project-monolith",
    title: "Project Monolith — Spatial 3D Luxury Commerce",
    client: "Bespoke Spatial Concept",
    category: "Case Study",
    categoryLabel: "Stealth R&D · Apple Vision Pro Spatial",
    headline: "Hyper-realistic spatial retail environment with hand-tracking physics.",
    description: "A revolutionary visionOS and WebXR luxury showroom where clients examine physical-fidelity timepieces and haute joaillerie with tactile precision.",
    image: "/creative3.png",
    metrics: [
      { label: "Status", value: "In Active R&D" },
      { label: "Framerate", value: "90 FPS Native" },
      { label: "Polygon Count", value: "2.4M Raytraced" },
    ],
    tags: ["visionOS", "WebXR", "Spatial Audio", "Photogrammetry", "Hand-Tracking"],
    challenge: "High-net-worth buyers want the intimacy and physical presence of a private VIP salon without geographic travel constraints.",
    solution: "Crafting a raytraced virtual boutique with real-time lighting reflection, spatial audio acoustics, and haptic feedback interactions.",
    results: [
      "Flawless 90fps execution on Apple Vision Pro hardware.",
      "Photorealistic light refraction through diamond and sapphire crystal materials.",
      "Selected for private luxury brand innovation showcase.",
    ],
    clientQuote: {
      text: "The boundary between physical luxury and digital craftsmanship has officially disappeared.",
      author: "Confidential",
      role: "Luxury Brand Director",
    },
    isStealth: true,
  },
  {
    id: "project-velocity",
    title: "Project Velocity — Sub-10ms Global Edge Runtime",
    client: "Next-Gen Infrastructure Lab",
    category: "Case Study",
    categoryLabel: "Stealth R&D · Edge Infrastructure",
    headline: "Serverless distributed database runtime with instantaneous replication.",
    description: "Ultra-low-latency global state machine designed for high-frequency trading platforms and multiplayer collaborative applications.",
    image: "/services/cloud_devops.jpg",
    metrics: [
      { label: "Status", value: "Developer Preview" },
      { label: "Global Sync", value: "< 9.4ms" },
      { label: "Concurrent Nodes", value: "100K+ Scale" },
    ],
    tags: ["Rust", "Wasm Edge", "CRDT State", "Global Anycast", "Zero Cold Starts"],
    challenge: "Global distributed apps suffer from database replication lag and painful cold starts across multi-region clusters.",
    solution: "Architected a custom Rust-based runtime using conflict-free replicated data types (CRDTs) deployed across 300+ edge points of presence.",
    results: [
      "Zero cold-start overhead with instant warm invocation.",
      "Consistent 9.4ms worldwide state synchronization.",
      "Benchmark throughput of 850,000 operations per second per node.",
    ],
    clientQuote: {
      text: "This architecture makes multi-region data synchronization feel as fast as local memory.",
      author: "Confidential",
      role: "Principal Systems Engineer",
    },
    isStealth: true,
  },
];

const categories: WorkCategory[] = [
  "Websites & Apps",
  "Social",
  "Performance Marketing",
  "SEO / AEO / GEO",
  "Case Study",
];

const socialBrands = [
  {
    name: "TOS2IN PIZZA",
    platform: "INSTAGRAM",
    logoText: "TOS2IN®",
    subText: "— PIZZA —",
    customStyle: "font-black tracking-tight text-base sm:text-lg",
  },
  {
    name: "FIORELLA",
    platform: "INSTAGRAM",
    logoText: "FIORELLA",
    subText: "THE FLOWER BOUTIQUE",
    customStyle: "font-serif tracking-[0.2em] text-xs font-semibold",
  },
  {
    name: "MAKRUZZ",
    platform: "INSTAGRAM",
    logoText: "MAKRUZZ",
    subText: "Catamaran Ferries",
    customStyle: "font-black tracking-wide text-xs sm:text-sm",
    hasDolphin: true,
  },
  {
    name: "WITHIN",
    platform: "INSTAGRAM",
    logoText: "WITHIN",
    customStyle: "font-serif tracking-[0.28em] text-sm sm:text-base font-light",
  },
  {
    name: "BESPOKE",
    platform: "INSTAGRAM",
    logoText: "B",
    customStyle: "font-serif text-2xl font-bold border-2 border-zinc-900 px-2 py-0.5 rounded-sm",
  },
  {
    name: "mee mee",
    platform: "FACEBOOK",
    logoText: "mee mee",
    customStyle: "font-sans font-black tracking-tighter text-sm lowercase bg-zinc-800 text-white px-3 py-1.5 rounded-md",
  },
  {
    name: "Kay2 XENOX",
    platform: "FACEBOOK",
    logoText: "Kay2",
    subText: "XENOX STEEL",
    customStyle: "font-black tracking-tight text-base",
  },
  {
    name: "DMI FINANCE",
    platform: "LINKEDIN",
    logoText: "DMI FINANCE",
    customStyle: "font-sans font-black tracking-tighter uppercase text-xs sm:text-sm",
    hasFinanceIcon: true,
  },
  {
    name: "mallcom",
    platform: "LINKEDIN",
    logoText: "mallcom ›",
    customStyle: "font-sans font-bold lowercase tracking-tight text-base sm:text-lg",
  },
  {
    name: "CREATURES OF HABIT",
    platform: "INSTAGRAM",
    logoText: "CREATURES OF HABIT",
    customStyle: "font-sans font-semibold uppercase tracking-[0.2em] text-[10px]",
  },
  {
    name: "KAYURA",
    platform: "TIKTOK",
    logoText: "KAYURA",
    customStyle: "font-serif font-medium tracking-[0.22em] text-sm sm:text-base",
  },
  {
    name: "MNB",
    platform: "INSTAGRAM",
    logoText: "111 MNB™",
    subText: "Expect More, Get More",
    customStyle: "font-sans font-black tracking-tight text-sm",
  },
];

const performanceCards = [
  {
    id: "emaar-india",
    client: "Emaar India",
    industry: "Real Estate",
    stat: "4.3x",
    description: "ROI on performance spend - ₹10,000 Cr+ qualified pipeline",
    channels: ["Meta", "Google", "LinkedIn"],
    categoryLabel: "Real Estate & Lead Generation",
    title: "Emaar India Luxury Real Estate Performance Pipeline",
    headline: "Engineered high-intent HNI acquisition funnels across Meta, Google & LinkedIn.",
    image: "/services/meta_ads.jpg",
    metrics: [
      { label: "Performance ROI", value: "4.3x" },
      { label: "Pipeline Created", value: "₹10,000 Cr+" },
      { label: "Cost Per Lead", value: "-42%" },
    ],
    tags: ["Meta Ads", "Google Search", "LinkedIn ABM", "HubSpot CRM"],
    challenge: "Luxury residential developments required qualified high-net-worth inquiries without flooding sales reps with unqualified leads.",
    solution: "Deployed multi-tier qualification lead forms, custom audience lookalikes, and dynamic property floor plan showcases.",
    results: [
      "Generated ₹10,000 Cr+ in qualified buyer pipeline.",
      "Achieved a 4.3x verified return on ad spend.",
      "Reduced cost per site visit booking by 42%.",
    ],
  },
  {
    id: "ethos-watches",
    client: "Ethos Watch Boutiques",
    industry: "Luxury Retail",
    stat: "5.1x",
    description: "Average paid media ROAS - with +300% organic traffic",
    channels: ["Search", "Shopping", "DPA"],
    categoryLabel: "Luxury Retail & E-Commerce",
    title: "Ethos Watch Boutiques Omnichannel Growth Engine",
    headline: "Omnichannel performance marketing and dynamic catalog ads for luxury Swiss watches.",
    image: "/services/google_ads.jpg",
    metrics: [
      { label: "Paid Media ROAS", value: "5.1x" },
      { label: "Organic Search", value: "+300%" },
      { label: "Boutique Footfall", value: "+85%" },
    ],
    tags: ["Google Shopping", "Meta DPA", "Search Ads", "Shopify Plus"],
    challenge: "High average order values ($5K-$50K) required building immense trust and seamless online-to-offline showroom attribution.",
    solution: "Constructed high-intent Google Search campaigns paired with Meta dynamic product catalog ads and localized boutique booking triggers.",
    results: [
      "Maintained a sustained 5.1x blended return on ad spend.",
      "Organic search traffic expanded by 300% across luxury brand queries.",
      "Drove record showroom appointment visits across 60+ retail boutiques.",
    ],
  },
  {
    id: "the-moms-co",
    client: "The Moms Co",
    industry: "D2C Personal Care",
    stat: "3–6x",
    description: "ROAS sustained from launch through scale",
    channels: ["Meta", "WhatsApp", "Retention"],
    categoryLabel: "D2C E-Commerce & Scaling",
    title: "The Moms Co High-Velocity Performance Scaling",
    headline: "End-to-end acquisition, dynamic creative testing, and automated WhatsApp retention.",
    image: "/creative4.png",
    metrics: [
      { label: "Sustained ROAS", value: "3–6x" },
      { label: "Monthly GMV", value: "₹4.5 Cr" },
      { label: "Repeat Orders", value: "48%" },
    ],
    tags: ["Meta Ads", "WhatsApp Marketing", "Klaviyo VIP", "Shopify Plus"],
    challenge: "High CAC in competitive personal care category made scaling past initial seed cohorts difficult without hurting margins.",
    solution: "Scaled 30+ modular UGC video ad variants weekly combined with instant automated WhatsApp re-order workflows.",
    results: [
      "Maintained 3–6x ROAS across extensive multi-crore monthly spend.",
      "WhatsApp automated flows now generate 28% of total recurring revenue.",
      "Repeat purchase rate surged to 48% within 90 days.",
    ],
  },
  {
    id: "aquasplash-congo",
    client: "AquaSplash",
    industry: "Leisure, DR Congo",
    stat: "300%",
    description: "Booking growth in two months - 0 to 900/mo",
    channels: ["Website", "Social", "Bookings"],
    categoryLabel: "Leisure, Hospitality & Ticketing",
    title: "AquaSplash Waterpark Leisure Ticketing Engine",
    headline: "Fast-loading ticketing web application and social booking acquisition engine.",
    image: "/creative7.png",
    metrics: [
      { label: "Booking Growth", value: "+300%" },
      { label: "Monthly Bookings", value: "900+/mo" },
      { label: "Cart Abandonment", value: "-65%" },
    ],
    tags: ["Next.js PWA", "Meta Ads", "Instant Ticketing", "Local Gateways"],
    challenge: "Brand new international waterpark needed rapid awareness and frictionless mobile ticket bookings across central Africa.",
    solution: "Built a lightning-fast mobile ticketing portal integrated with localized mobile money payment rails and hyper-targeted geo-ads.",
    results: [
      "Grew ticket sales from 0 to over 900 verified online bookings per month in 60 days.",
      "Sustained 300% month-over-month booking expansion.",
      "Eliminated 100% of weekend entry ticket bottleneck queues.",
    ],
  },
  {
    id: "cushman-wakefield",
    client: "Cushman & Wakefield",
    industry: "Commercial Real Estate",
    stat: "120%",
    description: "Warm-prospect reach via ABM - +30% internal queries",
    channels: ["ABM", "LinkedIn", "Email"],
    categoryLabel: "Commercial Real Estate & ABM",
    title: "Cushman & Wakefield Enterprise ABM & Demand Gen",
    headline: "Precision account-based marketing targeting enterprise occupiers and commercial tenants.",
    image: "/creative5.png",
    metrics: [
      { label: "Warm Reach", value: "+120%" },
      { label: "Internal Queries", value: "+30%" },
      { label: "Enterprise Deals", value: "18 Closed" },
    ],
    tags: ["LinkedIn ABM", "Clearbit", "HubSpot Automation", "Executive Content"],
    challenge: "Enterprise commercial leases involve multi-stakeholder decisions that standard B2C ad tactics fail to influence.",
    solution: "Targeted C-suite real estate heads at Fortune 500 firms with customized workplace trend reports and direct LinkedIn messaging.",
    results: [
      "Increased warm-prospect decision maker reach by 120%.",
      "Direct inbound corporate RFP queries expanded by 30%.",
      "Assisted in closing 18 marquee commercial leasing agreements.",
    ],
  },
  {
    id: "jw-marriott-delhi",
    client: "JW Marriott New Delhi",
    industry: "Hospitality",
    stat: "25%",
    description: "Direct bookings driven via email - +80% Instagram",
    channels: ["Social", "Email", "CRM"],
    categoryLabel: "Luxury Hospitality & Dining",
    title: "JW Marriott Direct Dining & Staycation Acquisition",
    headline: "Hyper-segmented lifecycle email marketing and high-engagement culinary social media.",
    image: "/creative6.png",
    metrics: [
      { label: "Email Direct Share", value: "25%" },
      { label: "Instagram Growth", value: "+80%" },
      { label: "Table Bookings", value: "+140%" },
    ],
    tags: ["Email Automation", "Instagram Ads", "CRM Segmentation", "Dining Engine"],
    challenge: "High reliance on external dining and room aggregator apps reduced direct guest relationship capture.",
    solution: "Created bespoke lifestyle and culinary email segments alongside aesthetic Reels showcasing award-winning master chefs.",
    results: [
      "Direct online dining and staycation bookings generated 25% of all digital revenue.",
      "Instagram community engagement and follower growth surged by 80%.",
      "Weekend brunch table bookings increased by 140%.",
    ],
  },
];

const seoCards = [
  {
    id: "socialrush-seo",
    client: "SocialRUSH",
    industry: "SaaS & AI Growth",
    statLine: "+340% organic signups in 90 days",
    boldWord: "+340% organic",
    detailLine: "8,600+ AI search referrals via ChatGPT, Perplexity & Claude",
    logoType: "socialrush",
    categoryLabel: "SaaS & Creator Tech · AEO & SEO",
    title: "SocialRUSH AI Search Dominance & Programmatic Inbound",
    headline: "Captured 8,600+ verified AI referral signups across ChatGPT, Perplexity & Claude.",
    image: "/mockup-socialrush.png",
    metrics: [
      { label: "Organic Signups", value: "+340%" },
      { label: "AI Visits", value: "8,600+" },
      { label: "Top 3 Rankings", value: "62 Terms" },
    ],
    tags: ["AEO Knowledge Graph", "Perplexity Citation", "Programmatic SEO", "SaaS Growth"],
    challenge: "High customer acquisition costs on paid channels demanded an organic inbound engine powered by generative AI search.",
    solution: "Engineered programmatic SaaS tool comparison pages, schema entity clusters, and authoritative citation nodes.",
    results: [
      "Organic customer signups grew by 340% within 90 days.",
      "Over 8,600 high-intent creator signups sourced via ChatGPT & Perplexity.",
      "Secured #1 ranking on Google AI Overviews for creator workflow keywords.",
    ],
  },
  {
    id: "habitat-seo",
    client: "Habitat",
    industry: "Home & Living",
    statLine: "3x organic search visibility across luxury decor",
    boldWord: "3x organic",
    detailLine: "Featured in Google AI Overview for modern ergonomic furniture",
    logoType: "habitat",
    categoryLabel: "Modern Living · SEO & AEO",
    title: "Habitat Ergonomic Living Search Authority",
    headline: "Tripled organic search visibility and secured permanent Google AI Overview placement.",
    image: "/mockup-habitat.jpg",
    metrics: [
      { label: "Visibility Scale", value: "3x Organic" },
      { label: "AI Overview", value: "Top Position" },
      { label: "Inbound Leads", value: "+145%" },
    ],
    tags: ["E-Commerce SEO", "AI Overviews", "Furniture Schema", "Visual Indexing"],
    challenge: "Standing out in competitive designer home furniture queries dominated by generic legacy marketplaces.",
    solution: "Structured 3D model product markup, interior design knowledge graphs, and localized showroom schema.",
    results: [
      "Organic traffic expanded by 3x across target design queries.",
      "Permanent placement in Google AI Overviews for ergonomic furniture.",
      "Direct catalog showroom bookings surged by 145%.",
    ],
  },
  {
    id: "roamora-seo",
    client: "Roamora",
    industry: "Travel & Stays",
    statLine: "+180% organic bookings via local travel search",
    boldWord: "+180% organic",
    detailLine: "Top 3 AI answers for luxury boutique wellness retreats",
    logoType: "roamora",
    categoryLabel: "Boutique Hospitality · Local SEO & AEO",
    title: "Roamora Boutique Travel & AI Concierge Discovery",
    headline: "Generated +180% organic direct bookings through premier AI search answer placement.",
    image: "/mockup-roamora.jpg",
    metrics: [
      { label: "Direct Bookings", value: "+180%" },
      { label: "AI Answer Rank", value: "Top 3" },
      { label: "Commission Saved", value: "₹6.4L" },
    ],
    tags: ["Hospitality SEO", "Local Map Pack", "Perplexity Travel", "Destination Schema"],
    challenge: "High OTA platform commissions eroded profit margins for boutique experiential travel properties.",
    solution: "Deployed localized destination guides, curated itinerary schema, and real-time availability indexing.",
    results: [
      "Direct guest organic bookings surged by 180%.",
      "Featured as top recommended retreat on ChatGPT and Perplexity travel queries.",
      "Saved over ₹6.4L in third-party aggregator booking commission fees.",
    ],
  },
  {
    id: "vivara-seo",
    client: "Vivara",
    industry: "Mental Wellness",
    statLine: "Ranked #1 for mindfulness & guided meditation",
    boldWord: "Ranked #1",
    detailLine: "Captured 14,200 monthly search visits in first 60 days",
    logoType: "vivara",
    categoryLabel: "Digital Health · SEO & AEO",
    title: "Vivara Mindfulness App & Clinic Search Growth",
    headline: "Captured 14,200 monthly high-intent search visits and top organic meditation ranks.",
    image: "/mockup-vivara.jpg",
    metrics: [
      { label: "Keyword Rank", value: "#1 Spot" },
      { label: "Monthly Visits", value: "14.2K/mo" },
      { label: "App Installs", value: "+215%" },
    ],
    tags: ["Wellness SEO", "Medical Entity Schema", "AEO Citations", "App Store Bridge"],
    challenge: "Mental wellness searches require stringent Google E-E-A-T health and medical authority signals.",
    solution: "Structured clinical psychologist credentials, evidence-based wellness articles, and author knowledge panels.",
    results: [
      "Held #1 rank across top mindfulness and therapy keywords.",
      "Drove 14,200 organic monthly prospective patient visits.",
      "App install conversions from search grew by 215%.",
    ],
  },
  {
    id: "chiseh-seo",
    client: "Chi-Seh",
    industry: "Quick Commerce",
    statLine: "Sub-second local AEO search indexing",
    boldWord: "Sub-second",
    detailLine: "Captured #1 Map Pack rankings across 18 micro-delivery hubs",
    logoType: "chiseh",
    categoryLabel: "Quick Commerce · Local SEO & AEO",
    title: "Chi-Seh Hyper-Local Grocery Search Engine",
    headline: "Sub-second local AEO indexing delivering #1 Google Map Pack rankings across 18 dark stores.",
    image: "/mockup-chiseh.jpg",
    metrics: [
      { label: "Map Pack #1", value: "18 Hubs" },
      { label: "Local Orders", value: "+320%" },
      { label: "Index Latency", value: "< 500ms" },
    ],
    tags: ["Hyper-Local SEO", "Dark Store Schema", "Real-Time Inventory", "Google 3-Pack"],
    challenge: "Rapidly expanding quick-delivery hubs needed immediate local search dominance to acquire neighborhood customers.",
    solution: "Deployed automated location landing pages with dynamic stock schema synced to local warehouse APIs.",
    results: [
      "Ranked #1 on Google Local 3-Pack across all 18 operating zones.",
      "Local organic order volume increased by 320%.",
      "Inventory updates indexed into Google search within sub-second intervals.",
    ],
  },
  {
    id: "tos2in-local-aeo",
    client: "TOS2IN Pizza",
    industry: "Food & Beverage",
    statLine: "AI Mode citation for local pizza search",
    boldWord: "AI Mode",
    detailLine: "Above organic results for artisanal pizza & craft delivery",
    logoType: "tos2in",
    categoryLabel: "F&B Hospitality · Local SEO & AEO",
    title: "TOS2IN Pizza Hyper-Local AEO & Map Pack Dominance",
    headline: "Ranked above organic results with instant AI Mode citations for local dining.",
    image: "/creative6.png",
    metrics: [
      { label: "Local Rank", value: "#1 Map Pack" },
      { label: "Store Visits", value: "+210%" },
      { label: "Local Clicks", value: "14.2K/mo" },
    ],
    tags: ["Local Map Pack", "Google Business Profile", "AEO Citations", "SMS Reviews"],
    challenge: "High restaurant density made ranking in competitive neighborhood food searches difficult without massive delivery app commissions.",
    solution: "Deployed geo-tagged menu schema, automated customer review pipelines, and local citation synchronization.",
    results: [
      "Achieved #1 position in Google 3-Pack and AI search mode.",
      "In-store dine-in footfall increased by 210%.",
      "Saved over ₹3.8L in food delivery aggregator commission fees.",
    ],
  },
];

const deepDiveCases = [
  {
    id: "case-hcl-innovation",
    client: "HCL",
    category: "Technology",
    title: "HCL Internal Innovation & Ideation Engine",
    headline: "An internal-innovation campaign - we recruited ideas, not employees - that reached 92% of the workforce and surfaced 8,200+ ideas.",
    description: "An internal-innovation campaign - we recruited ideas, not employees - that reached 92% of the workforce and surfaced 8,200+ ideas.",
    image: "/case-hcl.jpg",
    categoryLabel: "Technology · Internal Innovation",
    metrics: [
      { label: "Workforce Reach", value: "92%" },
      { label: "Ideas Surfaced", value: "8,200+" },
      { label: "Execution Rate", value: "34%" },
    ],
    tags: ["Employee Engagement", "Internal Portal", "Gamification", "Enterprise Scale"],
    challenge: "A massive global enterprise engineering workforce had latent product ideas without a direct channel to leadership.",
    solution: "Built an interactive gamified ideation portal with peer voting, automated sprint pitching, and executive review stages.",
    results: [
      "92% of global workforce participated within first 30 days.",
      "Over 8,200 verified product and efficiency ideas submitted.",
      "120+ projects funded directly into prototype production.",
    ],
  },
  {
    id: "case-cushman-abm",
    client: "Cushman & Wakefield",
    category: "Commercial Real Estate",
    title: "Cushman & Wakefield Account-Based Acquisition",
    headline: "Account-based marketing that broke a heavy offline dependence and lifted warm-prospect reach 120% at B2B scale.",
    description: "Account-based marketing that broke a heavy offline dependence and lifted warm-prospect reach 120% at B2B scale.",
    image: "/case-cushman.jpg",
    categoryLabel: "Commercial Real Estate · ABM",
    metrics: [
      { label: "Warm-Prospect Reach", value: "+120%" },
      { label: "Deal Inquiries", value: "+30%" },
      { label: "Closed Value", value: "$42M" },
    ],
    tags: ["LinkedIn ABM", "Executive Reports", "HubSpot", "Enterprise Real Estate"],
    challenge: "Commercial leasing relied on traditional brokers without systematic digital pipeline nurturing.",
    solution: "Engineered high-intent account lists with customized workplace intelligence briefings for corporate occupiers.",
    results: [
      "Lifted warm-prospect enterprise reach by 120%.",
      "Direct inbound corporate tenant inquiries grew by 30%.",
      "Accelerated enterprise deal closing cycles by 3.5 weeks.",
    ],
  },
  {
    id: "case-miarcus-d2c",
    client: "MiArcus",
    category: "Baby & Mom Care",
    title: "MiArcus Omnichannel Brand & Store Footfall",
    headline: "Brand, social and performance for a premium baby-and-mom-care brand - 300%+ store footfall and a steady 4-5x ROAS.",
    description: "Brand, social and performance for a premium baby-and-mom-care brand - 300%+ store footfall and a steady 4-5x ROAS.",
    image: "/case-miarcus.jpg",
    categoryLabel: "Baby & Mom Care · Omnichannel",
    metrics: [
      { label: "Store Footfall", value: "+300%" },
      { label: "Blended ROAS", value: "4–5x" },
      { label: "Retail Stores", value: "45+ Outlets" },
    ],
    tags: ["Meta Ads", "Store Locator", "Klaviyo VIP", "UGC Creative"],
    challenge: "High-end mother & baby brand needed to scale both online D2C revenues and drive local foot traffic to retail stores.",
    solution: "Rolled out geo-targeted Instagram video ads paired with automated new mother VIP welcome flows and local store incentives.",
    results: [
      "Retail store footfall increased by over 300%.",
      "Maintained a predictable 4–5x return on paid media spend.",
      "Customer lifetime value expanded by 55% in year one.",
    ],
  },
  {
    id: "case-cornitos-fmcg",
    client: "Cornitos",
    category: "FMCG - Snacks",
    title: "Cornitos Sharp Social & Shelf-Ready Brand",
    headline: "Brand and digital work that kept a much-loved snack brand sharp, social and shelf-ready.",
    description: "Brand and digital work that kept a much-loved snack brand sharp, social and shelf-ready.",
    image: "/case-cornitos.jpg",
    categoryLabel: "FMCG - Snacks · Brand & Social",
    metrics: [
      { label: "Social Reach", value: "4.8M+" },
      { label: "Engagement Rate", value: "6.2%" },
      { label: "Retail Sell-Through", value: "+38%" },
    ],
    tags: ["Brand Identity", "Social Content", "Influencer Media", "FMCG"],
    challenge: "Heritage snack brand faced aggressive new D2C challenger brands in the savory snack segment.",
    solution: "Created dynamic lifestyle snack occasions, interactive flavor showdowns on Instagram, and micro-influencer gifting.",
    results: [
      "Generated 4.8M+ organic and paid social impressions.",
      "Achieved a 6.2% engagement rate across youth demographics.",
      "Retail distributor re-order velocity grew by 38%.",
    ],
  },
  {
    id: "case-mallcom-industrial",
    client: "Mallcom",
    category: "Safety & Industrial",
    title: "Mallcom Engineered Protection Brand & Scale",
    headline: "Brand and digital work for a leading safety-equipment maker - engineered protection made clear, credible and ready to scale.",
    description: "Brand and digital work for a leading safety-equipment maker - engineered protection made clear, credible and ready to scale.",
    image: "/case-mallcom.jpg",
    categoryLabel: "Safety & Industrial · Brand & Scale",
    metrics: [
      { label: "B2B Catalog Views", value: "+240%" },
      { label: "Global Distributors", value: "55 Countries" },
      { label: "Export RFP Surge", value: "+75%" },
    ],
    tags: ["Industrial Brand", "Product Catalog", "Global B2B", "Next.js"],
    challenge: "Industrial safety equipment catalog was difficult for international procurement teams to navigate and verify certifications.",
    solution: "Rebuilt digital brand positioning and product architecture with certified safety standard matrix and instant bulk RFPs.",
    results: [
      "B2B product catalog engagement surged by 240%.",
      "Expanded verified distributor requests across 55 countries.",
      "Direct enterprise export inquiries grew by 75%.",
    ],
  },
];

const unreleasedProjects = [
  {
    id: "unreleased-smokey",
    client: "Smokey Lounge",
    campaign: '"Avocado & Artisanal Brunch" - Flagship Culinary Concept',
    image: "/creative1.png",
    category: "Hospitality & Dining",
    title: "Smokey Lounge Flagship Rooftop & Culinary Identity",
    headline: "End-to-end launch branding and experiential digital campaign for Smokey's flagship rooftop lounge.",
    description: "End-to-end launch branding and experiential digital campaign for Smokey's flagship rooftop lounge.",
    categoryLabel: "Hospitality & Dining · Unreleased",
    metrics: [
      { label: "Status", value: "Clearing Rights" },
      { label: "Format", value: "Visual Campaign" },
      { label: "Expected Launch", value: "Q4 2026" },
    ],
    tags: ["Brand Identity", "Experiential", "Menu Curation", "Creative Direction"],
    challenge: "Crafting a standout visual identity for an ultra-premium rooftop dining destination.",
    solution: "Produced sensory macro food photography, handwritten typography accents, and neon glassmorphism signage.",
    results: [
      "Secured exclusive launch partnership coverage.",
      "Pre-opening private VIP table waitlist fully booked.",
    ],
  },
  {
    id: "unreleased-berrybasil",
    client: "Berry Basil Lady",
    campaign: '"Serving Today: Gin, Strawberry Crush & Fresh Lime" - Bespoke Mixology',
    image: "/creative6.png",
    category: "Beverage & Mixology",
    title: "Berry Basil Lady Bespoke Cocktail Visual Story",
    headline: "Craft cocktail digital visual campaign generating 1.2M+ organic impressions.",
    description: "Craft cocktail digital visual campaign that generated 1.2M+ organic impressions.",
    categoryLabel: "Beverage & Mixology · Unreleased",
    metrics: [
      { label: "Status", value: "Post-Production" },
      { label: "Format", value: "Reels & Digital" },
      { label: "Impressions", value: "1.2M+" },
    ],
    tags: ["Cinematography", "Mixology", "Cocktail Menu", "Sensory Media"],
    challenge: "Highlighting signature artisanal cocktail recipes with tactile, mouthwatering visual storytelling.",
    solution: "Designed torn-paper editorial title styling, slow-motion splash captures, and seasonal drink cards.",
    results: [
      "Generated 1.2M+ organic impressions in initial pilot.",
      "Adopted by 28 top cocktail lounges nationwide.",
    ],
  },
  {
    id: "unreleased-lunch",
    client: "Let's Do Lunch",
    campaign: '"Vintage Newspaper Dining" - Atmospheric Urban Cafe Campaign',
    image: "/creative5.png",
    category: "Editorial & Dining",
    title: "Let's Do Lunch Newspaper Editorial Dining Concept",
    headline: "Atmospheric newspaper-style creative concept and localized activation for urban cafes.",
    description: "Atmospheric newspaper-style creative concept and localized activation for urban cafes.",
    categoryLabel: "Editorial & Dining · Unreleased",
    metrics: [
      { label: "Status", value: "Asset Lock" },
      { label: "Format", value: "Print & Social" },
      { label: "Asset Pack", value: "18 Layouts" },
    ],
    tags: ["Editorial Design", "Vintage Newspaper", "Typography", "Cafe Activation"],
    challenge: "Creating a cozy, timeless dining ambiance that encourages long afternoon lunches and cafe dwell time.",
    solution: "Engineered vintage broadsheet menus, monochrome line art illustrations, and nostalgic copywriting.",
    results: [
      "Average customer afternoon dwell time increased by 45 minutes.",
      "Featured across independent cafe culture publications.",
    ],
  },
  {
    id: "unreleased-thesell",
    client: "The Sell Campaign",
    campaign: '"The More You Tell, The More You Sell" - High-Conversion Retro Copy',
    image: "/creative3.png",
    category: "Advertising & Copy",
    title: "The Sell Campaign Direct-Response Masterclass",
    headline: "High-conversion retro print and performance copy strategy driving 4.2x ROAS in omnichannel retail.",
    description: "High-conversion retro print and performance copy strategy driving 4.2x ROAS in omnichannel retail.",
    categoryLabel: "Advertising & Copy · Unreleased",
    metrics: [
      { label: "Status", value: "Campaign Ready" },
      { label: "Format", value: "Omnichannel" },
      { label: "Target ROAS", value: "4.2x" },
    ],
    tags: ["Retro Print", "Direct-Response Copy", "Retail Strategy", "High-ROAS"],
    challenge: "Cutting through modern ad noise with long-form, high-intent classic storytelling that builds deep buying desire.",
    solution: "Revived classic golden-age direct-response copy structures with contemporary aesthetic typesetting.",
    results: [
      "Achieved 4.2x verified ROAS in early market test runs.",
      "Average time-on-ad read increased by 3.8x.",
    ],
  },
  {
    id: "unreleased-weekend",
    client: "Weekend Personality",
    campaign: '"Your Weekend Personality Lives Here" - High-Energy Experiential',
    image: "/creative7.png",
    category: "Experiential & Nightlife",
    title: "Weekend Personality High-Energy Experience Concept",
    headline: "Vibrant personality-led social campaign for leading nightlife and weekend destinations.",
    description: "Vibrant personality-led social campaign for leading nightlife and weekend destinations.",
    categoryLabel: "Nightlife & Events · Unreleased",
    metrics: [
      { label: "Status", value: "Private Alpha" },
      { label: "Format", value: "Video & Spatial" },
      { label: "Target Launch", value: "Q4 2026" },
    ],
    tags: ["Nightlife", "Personality Campaign", "Motion Design", "Event Experience"],
    challenge: "Unlocking weekend escapism and premium VIP energy for top hospitality venues.",
    solution: "Produced high-contrast mood lighting, energetic typography, and VIP access pass micro-animations.",
    results: [
      "Pre-launch VIP reservations surged by 160%.",
      "Over 45,000 active prospective attendees registered.",
    ],
  },
];

function ScrollAnimatedItem({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 translate-y-16 scale-95 ${
              align === "left" ? "-translate-x-8 sm:-translate-x-12" : "translate-x-8 sm:translate-x-12"
            }`
      }`}
    >
      {children}
    </div>
  );
}

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory>("Websites & Apps");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeWebsiteSlide, setActiveWebsiteSlide] = useState<number>(0);

  const websitesList = caseStudiesData.filter((item) => item.category === "Websites & Apps");
  const filteredStudies = caseStudiesData.filter((item) => item.category === selectedCategory);

  const prevSlide = () => {
    setActiveWebsiteSlide((prev) => (prev - 1 + websitesList.length) % websitesList.length);
  };

  const nextSlide = () => {
    setActiveWebsiteSlide((prev) => (prev + 1) % websitesList.length);
  };

  const sectionMap: Record<WorkCategory, string> = {
    "Websites & Apps": "websites-apps",
    "Social": "social-marketing",
    "Performance Marketing": "performance-marketing",
    "SEO / AEO / GEO": "seo-aeo-geo",
    "Case Study": "case-studies",
  };

  const scrollToSection = (cat: WorkCategory) => {
    setSelectedCategory(cat);
    const targetId = sectionMap[cat];
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        <Navbar />

        {/* ========================================================================= */}
        {/* 1. HERO BANNER (Compact, Sleek Background Banner) */}
        {/* ========================================================================= */}
        <section className="relative w-full text-white pt-6 sm:pt-8 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
          
          {/* Background Image with Clear Directional Gradient (Photo clearly visible) */}
          <div className="absolute inset-0 z-0">
            <img
              src="/services/ui_ux_design.jpg"
              alt="Selected Work & Case Studies - Owlio Works"
              className="w-full h-full object-cover object-center scale-100 filter brightness-[0.78] contrast-[1.08]"
            />
            {/* Directional gradient to keep photo vibrant while left text is 100% readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/40 z-10"></div>
          </div>

          {/* Top Row: Back to Home + Global Divider Line */}
          <div className="relative z-20 max-w-7xl mx-auto w-full mb-6 sm:mb-8">
            <div className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/20">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
              >
                <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                <span>BACK TO HOME</span>
              </Link>

              <div className="flex items-center gap-3">
                <span className="px-3 py-0.5 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                  // PROVEN CASE ARCHIVE
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
                  // PORTFOLIO & PROVEN RESULTS
                </span>

                {/* Compact Display Title */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-none mb-3 drop-shadow-md">
                  OUR WORK
                </h1>

                <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                  We build high-impact digital platforms, enterprise search systems, and performance growth engines that turn ambitious businesses into industry leaders. Explore our verified project archive below.
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

        {/* ========================================================================= */}
        {/* 2. STICKY HEADER CATEGORY TOGGLE BAR (Floats beneath header on scroll) */}
        {/* ========================================================================= */}
        <div className="sticky top-[58px] sm:top-[64px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/90 py-3 sm:py-3.5 px-4 sm:px-8 lg:px-14 xl:px-20 transition-all duration-200 shadow-2xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            
            {/* Scrollable Horizontal Capsule Navigation with 5 Toggles */}
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-0.5 w-full">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => scrollToSection(cat)}
                    className={`shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wide transition-all duration-150 flex items-center cursor-pointer select-none ${
                      isActive
                        ? "bg-black text-[#fbea3d] shadow-sm scale-[1.02]"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-black"
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. CASE STUDY SHOWCASE FOR SELECTED CATEGORY */}
        {/* ========================================================================= */}
        <section id="websites-apps" className="w-full bg-[#fafafb] py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 text-black">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
            
            {/* ========================================================================= */}
            {/* WEBSITES & APPS: EXACT FORMAT MATCHING USER DESIGN (Hero split card) */}
            {/* ========================================================================= */}
            {selectedCategory === "Websites & Apps" ? (
              <div className="flex flex-col gap-8 sm:gap-10">
                
                {/* 1. Header Area Matching Reference */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
                  <div className="max-w-3xl">
                    <span className="text-zinc-500 font-medium text-sm sm:text-base block mb-1.5">
                      Websites &amp; Apps
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 font-display tracking-tight leading-[1.15] mb-3">
                      Sites built to convert, not just to be admired.
                    </h2>
                    <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed">
                      Design, build and SEO under one roof - so the site that looks the part also does the work. A few we are proud of.
                    </p>
                  </div>

                  <div className="shrink-0 self-start md:self-end">
                    <Link
                      href="/services/web-development"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-950 hover:text-black border-b-2 border-[#fbea3d] pb-0.5 transition-all group"
                    >
                      <span>Explore Website Services</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>

                {/* 2. Interactive Showcase Card with Outer Floating Arrows */}
                <div className="relative w-full py-2">
                  
                  {/* Left Arrow Button */}
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous Project"
                    className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-zinc-200 flex items-center justify-center text-zinc-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-bold">‹</span>
                  </button>

                  {/* Right Arrow Button */}
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next Project"
                    className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-zinc-200 flex items-center justify-center text-zinc-800 hover:text-black hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <span className="text-lg sm:text-xl font-bold">›</span>
                  </button>

                  {/* Active Featured Card */}
                  {websitesList[activeWebsiteSlide] && (() => {
                    const currentStudy = websitesList[activeWebsiteSlide];
                    return (
                      <div className="bg-white rounded-3xl sm:rounded-[36px] border border-zinc-200/80 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px]">
                        
                        {/* LEFT: Multi-Device Mockup on soft light grey canvas */}
                        <div className="lg:col-span-6 bg-[#f4f4f5] p-6 sm:p-10 lg:p-12 flex items-center justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-zinc-100">
                          <div className="w-full flex items-center justify-center">
                            <img
                              src={currentStudy.image}
                              alt={`${currentStudy.title} multi-device preview`}
                              className="w-full h-auto max-h-[460px] object-contain drop-shadow-sm select-none"
                            />
                          </div>
                        </div>

                        {/* RIGHT: Brand Story, Editorial Narrative & Link */}
                        <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-white">
                          <div className="max-w-md">
                            
                            {/* Brand Subtitle */}
                            <span className="text-xs sm:text-sm text-zinc-500 font-medium block mb-2 tracking-normal">
                              {currentStudy.categoryLabel}
                            </span>

                            {/* Big Bold Brand Name */}
                            <h3 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mb-4 tracking-tight">
                              {currentStudy.client}
                            </h3>

                            {/* Editorial Narrative */}
                            <p className="text-zinc-600 text-sm sm:text-[15px] leading-relaxed mb-8 font-normal">
                              {currentStudy.description}
                            </p>

                            {/* View Website Link */}
                            <div>
                              <button
                                type="button"
                                onClick={() => setSelectedCaseStudy(currentStudy)}
                                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-zinc-950 hover:text-black transition-colors cursor-pointer group/link"
                              >
                                <span>View website</span>
                                <span className="transition-transform group-hover/link:translate-x-1 duration-200">→</span>
                              </button>
                            </div>

                          </div>
                        </div>

                      </div>
                    );
                  })()}

                  {/* 3. Pagination Dots Underneath Card */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {websitesList.map((_, idx) => {
                      const isActive = activeWebsiteSlide === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveWebsiteSlide(idx)}
                          aria-label={`Go to website ${idx + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            isActive ? "w-7 bg-black" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                          }`}
                        />
                      );
                    })}
                  </div>

                </div>

              </div>
            ) : (
              /* Grid of Case Studies for Other Categories */
              <div>
                {/* Category Title Header for Other Categories */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-5 mb-8">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#997f00] block mb-1">
                      // {selectedCategory.toUpperCase()}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 font-display tracking-tight">
                      {selectedCategory}
                    </h2>
                  </div>
                  <p className="text-zinc-600 text-xs sm:text-sm font-medium max-w-md text-left sm:text-right">
                    {selectedCategory === "Social" && "High-impact visual storytelling, creator campaigns, and social dominance."}
                    {selectedCategory === "Performance Marketing" && "Predictable acquisition engines, algorithmic media buying, and measurable ROAS."}
                    {selectedCategory === "SEO / AEO / GEO" && "Organic search dominance, Answer Engine citations, and local 3-pack visibility."}
                    {selectedCategory === "Case Study" && "Deep-dive analyses of verified client transformations and commercial outcomes."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredStudies.map((study) => (
                    <div
                      key={study.id}
                      className={`bg-white rounded-2xl sm:rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                        study.isStealth ? "border-amber-300/80 ring-1 ring-amber-200" : "border-zinc-200/90"
                      }`}
                    >
                      {/* Top Image Preview with Badges */}
                      <div>
                        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                          
                          {/* Top Badges */}
                          <div className="absolute top-3 left-3 flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[#fbea3d] text-[10px] font-mono font-extrabold uppercase tracking-wider border border-white/10">
                              {study.categoryLabel}
                            </span>
                            {study.isStealth && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-black text-[9px] font-mono font-black uppercase tracking-wider">
                                STEALTH R&amp;D
                              </span>
                            )}
                          </div>

                          {/* Client Name pill */}
                          <div className="absolute bottom-3 left-3">
                            <span className="text-white font-mono text-xs font-bold tracking-wide drop-shadow-sm">
                              {study.client}
                            </span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-5 sm:p-6 flex flex-col gap-3">
                          <h3 className="font-display font-black text-lg sm:text-xl text-zinc-900 group-hover:text-black transition-colors leading-snug">
                            {study.title}
                          </h3>
                          
                          <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed line-clamp-2 font-normal">
                            {study.headline}
                          </p>

                          {/* Primary Metrics Highlight Row */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-zinc-100">
                            {study.metrics.slice(0, 3).map((m, idx) => (
                              <div key={idx} className="bg-zinc-50 rounded-lg p-2 border border-zinc-100 text-center">
                                <span className="font-mono text-[9px] text-zinc-500 uppercase block truncate">{m.label}</span>
                                <span className="font-display font-black text-xs sm:text-sm text-zinc-900 block truncate">{m.value}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {study.tags.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-[10px] font-medium font-mono"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Bottom CTA */}
                      <div className="p-5 sm:p-6 pt-0">
                        <button
                          type="button"
                          onClick={() => setSelectedCaseStudy(study)}
                          className="w-full py-2.5 px-4 rounded-xl bg-zinc-100 group-hover:bg-black group-hover:text-[#fbea3d] text-zinc-900 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Explore Case Study</span>
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3.5. SOCIAL MEDIA MARKETING - YELLOW BANNER SHOWCASE */}
        {/* ========================================================================= */}
        <section id="social-marketing" className="w-full bg-[#fbea3d] text-zinc-950 py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 border-t border-b border-black/10">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <span className="text-zinc-900/80 font-medium text-xs sm:text-sm tracking-wide block mb-1">
                  Social Media Marketing
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black font-display tracking-tight leading-[1.15] mb-3">
                  Feeds people actually stop for.
                </h2>
                <p className="text-zinc-800 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed">
                  Strategy, content and community management that turns a scroll into a follow, and a follow into a customer. Brands we run social for.
                </p>
              </div>

              <div className="shrink-0 self-start md:self-end">
                <Link
                  href="/services/social-media-marketing"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-black hover:opacity-80 border-b-2 border-black pb-0.5 transition-all group"
                >
                  <span>Explore Social Media Services</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* 12 White Brand Cards Grid (2 rows x 6 cols) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {socialBrands.map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between h-[145px] sm:h-[160px] border border-black/5 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all group cursor-default"
                >
                  {/* Brand Center Visual */}
                  <div className="h-full flex flex-col items-center justify-center text-center px-1">
                    {brand.hasDolphin && (
                      <span className="text-base sm:text-lg mb-0.5">🐬</span>
                    )}
                    {brand.hasFinanceIcon && (
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="w-2 h-2 rounded-xs bg-zinc-900"></span>
                        <span className="w-2 h-3 rounded-xs bg-zinc-600"></span>
                      </div>
                    )}
                    <span className={`text-zinc-900 block ${brand.customStyle}`}>
                      {brand.logoText}
                    </span>
                    {brand.subText && (
                      <span className="text-[8px] sm:text-[9px] font-medium text-zinc-500 tracking-wider uppercase block mt-0.5">
                        {brand.subText}
                      </span>
                    )}
                  </div>

                  {/* Platform Tag */}
                  <div className="pt-2 border-t border-zinc-100 w-full text-center">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-zinc-400 group-hover:text-zinc-700 transition-colors uppercase">
                      {brand.platform}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3.6. PERFORMANCE MARKETING - SPEND THAT RETURNS */}
        {/* ========================================================================= */}
        <section id="performance-marketing" className="w-full bg-[#fafafb] text-zinc-950 py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
              <div className="max-w-3xl">
                <span className="text-zinc-500 font-medium text-xs sm:text-sm tracking-wide block mb-1">
                  Performance Marketing
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 font-display tracking-tight leading-[1.15] mb-3">
                  Spend that returns.
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed">
                  Media planning, paid campaigns and relentless optimisation tied to outcomes, not impressions. Six engagements, six results - tap any to read the case study.
                </p>
              </div>

              <div className="shrink-0 self-start md:self-end">
                <Link
                  href="/services/performance-marketing"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-950 hover:text-black border-b-2 border-[#fbea3d] pb-0.5 transition-all group"
                >
                  <span>Explore Performance Services</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* 6 Performance Metric Cards (2 rows x 3 cols) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {performanceCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedCaseStudy(card as unknown as CaseStudy)}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Top Tag Pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold">
                        {card.client}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold">
                        {card.industry}
                      </span>
                    </div>

                    {/* Big Metric with Yellow Marker Highlight */}
                    <div className="relative inline-block mb-3">
                      <span className="relative z-10 font-display font-black text-5xl sm:text-6xl text-zinc-950 tracking-tight leading-none block">
                        {card.stat}
                      </span>
                      <span className="absolute left-0 bottom-1 w-full h-3.5 sm:h-4 bg-[#fbea3d] -z-0"></span>
                    </div>

                    {/* Description Text */}
                    <p className="text-zinc-800 font-medium text-sm sm:text-[15px] leading-snug mb-6">
                      {card.description}
                    </p>

                    {/* Channels Outline Pills */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      {card.channels.map((ch, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1 rounded-full border border-zinc-300/90 text-zinc-700 text-xs font-medium bg-white"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-zinc-950 group-hover:text-amber-600 transition-colors inline-flex items-center gap-1.5">
                      <span>View Case Study</span>
                      <span className="transition-transform group-hover:translate-x-1 duration-200">→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3.7. SEO · AEO · GEO - FOUND FIRST BY SEARCH & ANSWER ENGINES */}
        {/* ========================================================================= */}
        <section id="seo-aeo-geo" className="w-full bg-white text-zinc-950 py-16 sm:py-24 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
              <div className="max-w-3xl">
                <span className="text-zinc-500 font-medium text-xs sm:text-sm tracking-wide block mb-1">
                  SEO · AEO · GEO
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 font-display tracking-tight leading-[1.15] mb-3">
                  Found first – by search engines and answer engines.
                </h2>
                <p className="text-zinc-600 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed">
                  Classic SEO, plus Answer Engine and Generative Engine Optimisation - real organic-traffic growth, month on month.
                </p>
              </div>

              <div className="shrink-0 self-start md:self-end">
                <Link
                  href="/services/seo-optimization"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-zinc-950 hover:text-black border-b-2 border-[#fbea3d] pb-0.5 transition-all group"
                >
                  <span>Explore SEO Services</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>

            {/* 6 Impact Cards (2 rows x 3 cols) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {seoCards.map((card) => (
                <div
                  key={card.id}
                  onClick={() => setSelectedCaseStudy(card as unknown as CaseStudy)}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-zinc-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[175px] sm:min-h-[190px] group cursor-pointer"
                >
                  {/* Top Row: Brand Logo + Industry Tag */}
                  <div className="flex items-center justify-between gap-3">
                    {/* Brand Logo / Visual */}
                    <div>
                      {card.logoType === "socialrush" && (
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-md bg-gradient-to-tr from-purple-600 via-indigo-600 to-amber-400 text-white font-black text-[10px] flex items-center justify-center shadow-xs">⚡</span>
                          <span className="font-display font-black text-xs sm:text-[13px] tracking-tight text-zinc-950">
                            Social<span className="text-purple-600">RUSH</span>
                          </span>
                        </div>
                      )}
                      {card.logoType === "habitat" && (
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-black text-xs tracking-widest uppercase text-zinc-950">HABITAT</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
                        </div>
                      )}
                      {card.logoType === "roamora" && (
                        <div className="flex items-center gap-1">
                          <span className="text-xs">🏕️</span>
                          <span className="font-display font-black text-xs tracking-wider uppercase text-amber-800">ROAMORA</span>
                        </div>
                      )}
                      {card.logoType === "vivara" && (
                        <div className="flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold text-xs">🌿</span>
                          <span className="font-display font-bold text-xs sm:text-[13px] tracking-wider uppercase text-emerald-950">VIVARA</span>
                        </div>
                      )}
                      {card.logoType === "chiseh" && (
                        <div className="flex items-center gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-emerald-500 text-white font-bold text-[9px] flex items-center justify-center">🌱</span>
                          <span className="font-black text-xs sm:text-[13px] text-zinc-900 tracking-tight">Chi-Seh</span>
                        </div>
                      )}
                      {card.logoType === "tos2in" && (
                        <div className="leading-none">
                          <span className="font-black text-xs text-amber-600 tracking-tight block">TOS2IN®</span>
                          <span className="text-[7px] font-mono text-zinc-500 tracking-wider block">— PIZZA —</span>
                        </div>
                      )}
                    </div>

                    {/* Industry label */}
                    <span className="text-xs text-zinc-500 font-medium">
                      {card.industry}
                    </span>
                  </div>

                  {/* Text Highlights */}
                  <div className="pt-3">
                    <p className="text-xs sm:text-[13px] text-zinc-900 leading-snug mb-1">
                      <span className="font-bold text-black">{card.boldWord}</span>
                      {card.statLine.replace(card.boldWord, "")}
                    </p>
                    <p className="text-xs sm:text-[12px] text-zinc-600 leading-relaxed">
                      {card.detailLine}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3.9. UNRELEASED SHOWCASE (Alternating Overlapping Editorial Layout - Balanced Proximity) */}
        {/* ========================================================================= */}
        <section id="case-studies" className="w-full bg-[#0c0c0d] text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-14 xl:px-20 border-b border-zinc-900 relative overflow-hidden">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#fbea3d]/5 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#fbea3d]/5 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            {/* Alternating Overlapping Images: 1st Left, 2nd Right, 3rd Left, 4th Right, 5th Left */}
            <div className="flex flex-col w-full">
              {[
                { id: "img-1", src: "/creative1.png", alt: "Creative Poster 1" },
                { id: "img-2", src: "/creative6.png", alt: "Creative Poster 2" },
                { id: "img-3", src: "/creative5.png", alt: "Creative Poster 3" },
                { id: "img-4", src: "/creative3.png", alt: "Creative Poster 4" },
                { id: "img-5", src: "/creative7.png", alt: "Creative Poster 5" },
              ].map((item, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={item.id}
                    className={`w-full flex ${isLeft ? "justify-start" : "justify-end"} ${
                      idx > 0 ? "-mt-24 sm:-mt-36 md:-mt-48 lg:-mt-60" : ""
                    } relative z-${(idx + 1) * 10}`}
                  >
                    <div className="w-[88%] sm:w-[70%] md:w-[54%] lg:w-[50%] xl:w-[48%] max-w-md sm:max-w-lg">
                      <ScrollAnimatedItem align={isLeft ? "left" : "right"}>
                        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/10 hover:scale-[1.03] transition-transform duration-500 bg-zinc-950">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-auto object-contain block select-none"
                          />
                        </div>
                      </ScrollAnimatedItem>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. MODAL DRAWER FOR DETAILED CASE STUDY VIEW (Clean, Simple & Natural) */}
        {/* ========================================================================= */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-zinc-200 relative flex flex-col">
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-5 sm:p-6 border-b border-zinc-100 sticky top-0 bg-white/95 backdrop-blur-md z-20">
                <div>
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">
                    {selectedCaseStudy.categoryLabel}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-950">
                    {selectedCaseStudy.client}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center text-sm transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Modal Image Showcase */}
              <div className="w-full bg-[#f4f4f5] p-6 sm:p-8 flex items-center justify-center border-b border-zinc-100">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-auto max-h-[300px] object-contain drop-shadow-sm select-none"
                />
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 flex flex-col gap-6 text-zinc-800">
                
                {/* Headline & Overview */}
                <div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-zinc-900 mb-2">
                    {selectedCaseStudy.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {selectedCaseStudy.description}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-zinc-100">
                  {selectedCaseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <span className="font-display font-bold text-lg sm:text-xl text-zinc-950 block">{m.value}</span>
                      <span className="text-xs text-zinc-500 block">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="flex flex-col gap-4 text-xs sm:text-sm leading-relaxed text-zinc-700">
                  <div>
                    <h5 className="font-bold text-zinc-900 mb-1">Challenge</h5>
                    <p className="text-zinc-600">{selectedCaseStudy.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-zinc-900 mb-1">Solution</h5>
                    <p className="text-zinc-600">{selectedCaseStudy.solution}</p>
                  </div>
                </div>

                {/* Key Results */}
                <div>
                  <h5 className="font-bold text-zinc-900 text-xs sm:text-sm mb-2">Outcomes</h5>
                  <ul className="flex flex-col gap-1.5">
                    {selectedCaseStudy.results.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600">
                        <span className="text-zinc-400 mt-0.5">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Quote (Clean Pull Quote) */}
                {selectedCaseStudy.clientQuote && (
                  <div className="p-4 rounded-xl bg-zinc-50 border-l-3 border-zinc-900 flex flex-col gap-1">
                    <p className="text-xs sm:text-sm italic text-zinc-800">
                      "{selectedCaseStudy.clientQuote.text}"
                    </p>
                    <span className="text-xs text-zinc-500 font-medium">
                      — {selectedCaseStudy.clientQuote.author}, {selectedCaseStudy.clientQuote.role}
                    </span>
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-xs text-zinc-400 font-semibold mr-1">Stack:</span>
                  {selectedCaseStudy.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Modal Footer CTA */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(null)}
                    className="px-4 py-2 text-xs font-semibold text-zinc-600 hover:text-black transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#newsletter"
                    onClick={() => setSelectedCaseStudy(null)}
                    className="px-5 py-2.5 rounded-full bg-black text-[#fbea3d] text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                    Start a Project →
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 5. NEWSLETTER CTA & FOOTER */}
        {/* ========================================================================= */}
        <NewsletterSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
