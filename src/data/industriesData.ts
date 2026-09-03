export interface IndustryDetail {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubtitle: string;
  image: string;
  stats: Array<{ value: string; label: string }>;
  overview: string;
  theChallenge: string;
  ourSolution: string;
  focusAreas?: Array<{
    title: string;
    badge: string;
    desc: string;
    highlights: string[];
  }>;
  capabilities: Array<{
    title: string;
    description: string;
    deliverables: string[];
    image?: string;
  }>;
  solutions: Array<{
    title: string;
    desc: string;
    icon: string;
    tags: string[];
  }>;
  techStack: string[];
  processSteps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  caseStudies: Array<{
    title: string;
    client: string;
    impact: string;
    image: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const allIndustries: IndustryDetail[] = [
  {
    slug: "it-technology",
    name: "IT & Technology",
    badge: "B2B SAAS & SOFTWARE ENGINEERING",
    tagline: "Custom Web Applications, Cloud Infrastructure & Scalable Engineering",
    heroHeadline: "Modern Software Engineering & Cloud Solutions for",
    heroHighlight: "Growing Tech Companies.",
    heroSubtitle:
      "We help software teams, startups, and IT leaders build reliable web applications, clean API integrations, and scalable cloud infrastructure without technical debt.",
    image: "/industries/it-technology.jpg",
    stats: [
      { value: "100%", label: "Source Code Ownership" },
      { value: "< 0.4s", label: "Average Page Load Time" },
      { value: "99.9%", label: "Production System Reliability" },
      { value: "2x", label: "Faster Feature Delivery" },
    ],
    overview:
      "Building software is one thing—building maintainable, scalable software that users love is another. We embed senior full-stack developers and cloud engineers directly with your team to ship robust features, refactor legacy bottlenecks, and automate CI/CD pipelines.",
    theChallenge:
      "Many tech companies struggle with growing pains: slow feature releases, fragile codebases that break under traffic spikes, unexpected cloud bills, and internal engineering teams stretched too thin with maintenance.",
    ourSolution:
      "We provide dedicated software engineering and DevOps support. From building modern web and mobile apps to optimizing database queries and automating AWS deployments, we build clean, well-tested code that your team can easily maintain.",
    focusAreas: [
      {
        title: "Product Teams & SaaS Scaleups",
        badge: "FEATURE ACCELERATION",
        desc: "Add dedicated senior engineering capacity to clear backlog tickets, build complex customer portals, and ship core product roadmap features on time.",
        highlights: [
          "Direct integration into your GitHub, Linear & Slack",
          "Type-safe Next.js, React, Node.js & TypeScript development",
          "Automated unit testing with zero regressions",
          "Weekly demo preview deployments & bi-weekly sprints",
        ],
      },
      {
        title: "Early-Stage Startups & Founders",
        badge: "0-TO-1 MVP LAUNCH",
        desc: "Turn your product concept into a production-grade web or mobile app in 6 to 8 weeks without cutting quality or security corners.",
        highlights: [
          "Clean database schema design with PostgreSQL",
          "Complete auth, role permissions & Stripe billing setup",
          "Mobile-responsive UI with modern design systems",
          "100% intellectual property & source code ownership",
        ],
      },
      {
        title: "IT Operations & Cloud Infrastructure",
        badge: "DEVOPS & FINOPS",
        desc: "Modernize legacy systems, automate CI/CD deployments, fix performance bottlenecks, and eliminate unnecessary cloud hosting expenses.",
        highlights: [
          "AWS, GCP & Cloudflare edge infrastructure setup",
          "Docker & Kubernetes zero-downtime deployments",
          "Database query indexing & latency optimization",
          "25% to 40% typical reduction in monthly cloud spend",
        ],
      },
    ],
    capabilities: [
      {
        title: "Custom SaaS & Web Application Development",
        description: "Full-stack web applications engineered with Next.js, React, and TypeScript. Built for fast customer onboarding, high daily usage, and responsive mobile-first UX.",
        image: "/industries/it_cap_webapp.jpg",
        deliverables: ["SaaS Customer Portals & Dashboards", "Cross-Platform React Native Mobile Apps", "Modern Modular Component Design Systems", "Automated Playwright & Jest Testing Suites"],
      },
      {
        title: "Cloud Infrastructure & FinOps Optimization",
        description: "Declarative AWS and Google Cloud environments with automated CI/CD pipelines, Docker containerization, and zero-downtime blue/green deployments.",
        image: "/industries/it_cap_cloud.jpg",
        deliverables: ["Automated GitHub Actions CI/CD Workflows", "Kubernetes & Docker Container Orchestration", "Cloud Cost Auditing (25-40% AWS Savings)", "Multi-Region Failovers & Datadog APM"],
      },
      {
        title: "API Systems & Third-Party Integrations",
        description: "High-throughput REST and GraphQL endpoints connecting your core platform with payment gateways, enterprise CRMs, and external webhook pipelines.",
        image: "/industries/it_cap_api.jpg",
        deliverables: ["Type-Safe REST & GraphQL APIs", "Stripe & LemonSqueezy Billing Systems", "PostgreSQL Database Schema & Indexing", "Real-Time Webhooks & Message Queues"],
      },
      {
        title: "Codebase Modernization & Dedicated Engineering",
        description: "Senior developers embedded directly into your GitHub and Slack to eliminate technical debt, modernize legacy frameworks, and clear development backlogs.",
        image: "/industries/it_cap_team.jpg",
        deliverables: ["Technical Debt & Security Audits", "Legacy Node/PHP to Next.js Modernization", "Database Query Profiling & Optimization", "Direct Engineer Collaboration in Slack"],
      },
    ],
    solutions: [
      {
        title: "Web & SaaS App Development",
        desc: "Fast, responsive web apps designed for intuitive onboarding and high user engagement.",
        icon: "code",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Cloud Infrastructure & DevOps",
        desc: "Automated build and deployment pipelines with proactive uptime monitoring and backups.",
        icon: "cloud",
        tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      },
      {
        title: "API & Database Systems",
        desc: "Reliable database schemas and secure endpoints built with complete documentation.",
        icon: "server",
        tags: ["PostgreSQL", "Node.js", "Redis", "GraphQL"],
      },
      {
        title: "Performance & Security Audits",
        desc: "Fixing slow database queries, security gaps, and memory leaks before they affect users.",
        icon: "shield",
        tags: ["Performance Profiling", "Security Audits", "Code Review"],
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Tailwind CSS", "GitHub Actions"],
    processSteps: [
      { step: "01", title: "Discovery & Technical Scoping", desc: "Understanding your project goals, user needs, system requirements, and sprint milestones." },
      { step: "02", title: "System Design & Sprint Planning", desc: "Designing the database schema, UI components, and breaking development into clear bi-weekly sprints." },
      { step: "03", title: "Agile Development & Code Review", desc: "Writing clean, type-safe code with automated tests and weekly staging preview deployments." },
      { step: "04", title: "Production Launch & Support", desc: "Seamless zero-downtime deployment with error monitoring, performance logging, and ongoing support." },
    ],
    caseStudies: [
      {
        title: "B2B SaaS Analytics Portal Rebuild",
        client: "DataPulse Systems",
        impact: "Rebuilt the customer dashboard in Next.js, reducing page load time from 3.8s to 0.4s and cutting AWS hosting costs by 35%.",
        image: "/industries/it_case_study.jpg",
      },
    ],
    faqs: [
      {
        question: "How does your team collaborate with our in-house developers?",
        answer:
          "We work directly in your GitHub repositories, join your daily standups or Slack channels, and follow your existing engineering workflows and code review standards.",
      },
      {
        question: "Do we retain 100% ownership of the source code?",
        answer:
          "Yes. You own 100% of all intellectual property, source code, designs, and cloud infrastructure upon project milestones.",
      },
      {
        question: "What tech stack do you recommend for new web applications?",
        answer:
          "For modern web applications, we primarily recommend Next.js and TypeScript on the frontend with PostgreSQL and Node.js on the backend for speed, SEO, and long-term maintainability.",
      },
      {
        question: "How do you handle ongoing maintenance, SLAs, and technical support after launch?",
        answer:
          "We offer tailored post-launch SLA support packages including 24/7 uptime monitoring, critical security patching, dependency updates, and dedicated engineering sprint hours.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    badge: "HEALTH-TECH & CLINICAL SYSTEMS",
    tagline: "HIPAA-Compliant Telehealth, EHR Integrations & Patient Portals",
    heroHeadline: "Empathetic, Secure HealthTech Experiences Built for",
    heroHighlight: "Better Patient Outcomes.",
    heroSubtitle:
      "We design and build secure digital health platforms, HIPAA-compliant patient management portals, telehealth video rooms, and medical appointment booking engines that streamline clinical care.",
    image: "/industries/healthcare.jpg",
    stats: [
      { value: "100%", label: "HIPAA & GDPR Compliance" },
      { value: "< 2 min", label: "Patient Booking Completion" },
      { value: "256-bit", label: "End-to-End Encryption" },
      { value: "98.4%", label: "Patient Satisfaction Score" },
    ],
    overview:
      "Healthcare technology demands an uncompromising commitment to privacy, data security, and accessible human-first UX. We build frictionless digital health platforms that connect patients with practitioners effortlessly.",
    theChallenge:
      "Legacy clinical software is notoriously clunky, difficult for elderly patients to navigate, and vulnerable to data breaches if not engineered with stringent encryption protocols.",
    ourSolution:
      "We engineer accessible WCAG AAA web portals, real-time WebRTC telehealth consult rooms, encrypted HL7/FHIR health record syncs, and automated SMS appointment reminders.",
    focusAreas: [
      {
        title: "Private Practices & Specialty Clinics",
        badge: "PATIENT ACQUISITION & BOOKING",
        desc: "Frictionless online appointment booking with doctor calendar sync, automated SMS reminders, and insurance verification.",
        highlights: [
          "2-click mobile appointment scheduling",
          "Automated SMS/Email appointment confirmations",
          "Local clinic Google Maps 3-Pack placement",
          "Digital patient intake forms & questionnaires",
        ],
      },
      {
        title: "Telehealth & Digital Health Startups",
        badge: "VIRTUAL CARE ROOMS",
        desc: "Browser-based HD video consultation rooms with zero downloads required for patients, instant charting, and prescription refills.",
        highlights: [
          "Low-latency WebRTC encrypted video rooms",
          "Virtual waiting rooms & in-session clinical notes",
          "Prescription refill & lab result delivery workflows",
          "Integrated Stripe health insurance co-pay processing",
        ],
      },
      {
        title: "Hospital Networks & Diagnostics",
        badge: "HIPAA PORTALS & EHR SYNC",
        desc: "Secure patient and physician web portals with role-based access, end-to-end encryption, and standardized EHR synchronization.",
        highlights: [
          "HL7 & FHIR standardized data connectors",
          "AES-256 encrypted health record storage",
          "Strict HIPAA/BAA compliance & immutable audit logs",
          "Doctor, patient & administrator multi-role dashboard",
        ],
      },
    ],
    capabilities: [
      {
        title: "HIPAA-Compliant Web & Mobile Portals",
        description: "Secure patient dashboards with encrypted health records, test results, and direct doctor messaging.",
        deliverables: ["Role-Based Access (Doctor/Patient/Admin)", "End-to-End Encrypted Chat", "Prescription Refill Workflows", "Audit Logs"],
      },
      {
        title: "Telehealth & WebRTC Consultation Rooms",
        description: "Low-latency browser-based video visits with screen sharing, digital whiteboard, and instant charting.",
        deliverables: ["WebRTC Peer-to-Peer Encryption", "Virtual Waiting Rooms", "In-Session Clinical Notes", "Automatic Session Recording"],
      },
      {
        title: "EHR / EMR Integration & FHIR Standards",
        description: "Seamless synchronization with Epic, Cerner, and Athenahealth using standardized HL7 and FHIR protocols.",
        deliverables: ["FHIR API Connectors", "Bi-directional Data Sync", "Automated Billing Extraction", "Insurance Verification Gateways"],
      },
      {
        title: "Patient Acquisition & Local Clinic SEO",
        description: "Capturing high-intent patient queries through geo-targeted medical landing pages and Google Maps optimization.",
        deliverables: ["Condition-Specific Hubs", "Google Business Profile Tuning", "Local Map Pack Placement", "Reputation & Review Capture"],
      },
    ],
    solutions: [
      {
        title: "Patient Management Portals",
        desc: "Streamlined medical record access, appointment scheduling, and lab result delivery.",
        icon: "activity",
        tags: ["HIPAA", "FHIR", "Next.js", "AES-256"],
      },
      {
        title: "Virtual Telemedicine Rooms",
        desc: "Browser-native HD video visits with zero patient downloads required.",
        icon: "video",
        tags: ["WebRTC", "Twilio", "LiveKit", "React"],
      },
      {
        title: "Clinical Appointment Engines",
        desc: "Real-time doctor calendar sync with automated SMS/Email reminders.",
        icon: "calendar",
        tags: ["Cal.com", "Twilio SMS", "Stripe Health", "Postgres"],
      },
      {
        title: "Medical Authority SEO Hubs",
        desc: "Clinically reviewed content hubs designed for search rankings and patient education.",
        icon: "file-text",
        tags: ["SurferSEO", "Schema.org", "Next.js", "Vercel"],
      },
    ],
    techStack: ["Next.js", "React Native", "TypeScript", "WebRTC", "PostgreSQL", "FHIR / HL7", "Twilio", "Stripe", "AWS GovCloud"],
    processSteps: [
      { step: "01", title: "Compliance & Security Scoping", desc: "Establishing HIPAA Business Associate Agreements (BAA) and cryptographic access boundaries." },
      { step: "02", title: "Patient UX & Wireframing", desc: "Designing intuitive, high-contrast, multi-generational user interfaces." },
      { step: "03", title: "Clinical Integration & Encryption", desc: "Connecting EHR backends with end-to-end encrypted databases and audit trails." },
      { step: "04", title: "Penetration Testing & Launch", desc: "Rigorous third-party security audits prior to medical practice rollout." },
    ],
    caseStudies: [
      {
        title: "Multi-Clinic Telehealth & Scheduling Network",
        client: "Vitalis Health Clinics",
        impact: "Reduced patient no-show rates by 42% while serving 120,000 virtual consultations in year 1.",
        image: "/creative5.png",
      },
    ],
    faqs: [
      {
        question: "How do you guarantee HIPAA compliance for custom healthcare apps?",
        answer:
          "We sign BAAs, enforce AES-256 encryption at rest and TLS 1.3 in transit, mandate multi-factor authentication, and implement immutable audit logging for all PHI access.",
      },
      {
        question: "Can you integrate custom patient portals with existing EHR/EMR systems like Epic or Cerner?",
        answer:
          "Yes. We build HL7 FHIR-compliant API bridges and secure middleware that synchronize patient records, lab results, and scheduling data with Epic, Cerner, AthenaHealth, and custom clinical databases.",
      },
      {
        question: "How do you handle data privacy and end-to-end encryption for telehealth video consultations?",
        answer:
          "All video and audio streams are encrypted end-to-end using WebRTC with SRTP/DTLS protocols. No patient consultation media or sensitive clinical metadata is recorded or stored unencrypted on intermediate servers.",
      },
      {
        question: "How do you design intuitive user interfaces for diverse patient age groups and accessibility needs?",
        answer:
          "We design with WCAG 2.1 AA accessibility standards, featuring high-contrast text modes, screen reader compatibility, oversized touch targets, and multi-language support to ensure effortless navigation for all demographics.",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    badge: "LUXURY HOSPITALITY & DINING",
    tagline: "Direct Booking Engines, Experiential Portals & High-ROAS Media",
    heroHeadline: "Experiential Web Platforms That Fill Luxury Rooms &",
    heroHighlight: "Dining Tables.",
    heroSubtitle:
      "We craft immersive digital experiences, direct room reservation engines, high-converting rooftop lounge portals, and performance advertising that bypass OTA commissions.",
    image: "/industries/hospitality.jpg",
    stats: [
      { value: "0%", label: "Third-Party OTA Commission" },
      { value: "+310%", label: "Direct Table Reservations" },
      { value: "4.8x", label: "Paid Campaign ROAS" },
      { value: "< 1s", label: "Instant VIP Booking Experience" },
    ],
    overview:
      "Hospitality brands win through sensory storytelling and effortless direct booking flows. We build captivating web experiences with silky smooth 60fps micro-animations, virtual 3D venue walkthroughs, and automated table management integrations.",
    theChallenge:
      "Hotels and luxury venues lose 15-25% of revenue to Online Travel Agencies (OTAs) and suffer from static, slow websites that fail to evoke the true on-site ambiance.",
    ourSolution:
      "We replace generic templates with custom Next.js experiential portals, integrating seamless direct booking engines, VIP table reservation modules, and hyper-targeted Meta/Google advertising.",
    focusAreas: [
      {
        title: "Boutique Hotels & Luxury Resorts",
        badge: "DIRECT ROOM BOOKINGS",
        desc: "Seamless direct reservation systems integrated with PMS software to capture guest bookings without losing 20% to OTAs.",
        highlights: [
          "Direct integration with Opera, Mews & Cloudbeds",
          "Dynamic room rate comparison & upgrade upsells",
          "Multi-currency international checkout",
          "Automated VIP pre-arrival concierge sequences",
        ],
      },
      {
        title: "Fine Dining & Rooftop Lounges",
        badge: "TABLE & BOTTLE SERVICE",
        desc: "Interactive seating charts, minimum spend locks, VIP bottle service deposits, and live music calendar integration.",
        highlights: [
          "SevenRooms & OpenTable reservation sync",
          "Interactive 3D table floorplans",
          "Special event ticketing & private dining inquiries",
          "Fast mobile QR digital menus",
        ],
      },
      {
        title: "Hospitality Chains & Venues",
        badge: "MULTI-PROPERTY HUBS",
        desc: "Centralized multi-property platforms that showcase individual locations with localized menus, events, and SEO.",
        highlights: [
          "Property switcher & location discoverability",
          "Editorial storytelling with 60fps micro-animations",
          "Geo-targeted Instagram Reels & Google Ads campaigns",
          "Google Business Profile 3-Pack optimization",
        ],
      },
    ],
    capabilities: [
      {
        title: "Bespoke Direct Booking Engines",
        description: "Frictionless room and suite reservation flows with real-time rate comparisons and upgrade upsells.",
        deliverables: ["Direct PMS Integration (Opera/Mews)", "Dynamic Room Upgrades", "Multi-Currency Checkout", "VIP Member Pricing"],
      },
      {
        title: "Experiential Restaurant & Lounge Portals",
        description: "Interactive dining menus, bottle service reservations, and live music calendar integration.",
        deliverables: ["SevenRooms / OpenTable Sync", "Interactive 3D Seating Maps", "Event Ticket Booking", "Mobile QR Menus"],
      },
      {
        title: "High-ROAS Meta & Google Paid Acquisition",
        description: "Visual Dynamic Creative Testing (DCT) on Instagram Reels and high-intent Google Search campaigns.",
        deliverables: ["Reels Video Production", "Geo-Fenced Traveler Ads", "Influencer Content Seeding", "CAPI Telemetry Tracking"],
      },
      {
        title: "Local Map 3-Pack & Reputation Management",
        description: "Dominating local search queries for fine dining, rooftop lounges, and boutique stays.",
        deliverables: ["Google Business Profile Optimization", "Automated Review Capture SMS", "Local Citation Building", "Geo-Targeted Content"],
      },
    ],
    solutions: [
      {
        title: "Direct Hotel Booking Engine",
        desc: "Zero-commission room reservations with PMS integration and instant confirmation.",
        icon: "hotel",
        tags: ["Mews", "Opera", "Next.js", "Stripe"],
      },
      {
        title: "VIP Table & Lounge Reservations",
        desc: "Interactive seating charts, minimum spend locks, and bottle service pre-orders.",
        icon: "utensils",
        tags: ["SevenRooms", "OpenTable", "Micro-Animations"],
      },
      {
        title: "Experiential Brand Websites",
        desc: "Full-bleed video backgrounds, 60fps micro-interactions, and editorial storytelling.",
        icon: "compass",
        tags: ["Three.js", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "Local Map & Event Marketing",
        desc: "Targeting tourists and local high-net-worth patrons actively searching for experiences.",
        icon: "map-pin",
        tags: ["Google Ads", "Meta CAPI", "Local SEO"],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS", "Stripe", "SevenRooms API", "Google Ads", "Meta CAPI"],
    processSteps: [
      { step: "01", title: "Brand Identity & Visual Storytelling", desc: "Curating high-end editorial typography, color palettes, and video assets." },
      { step: "02", title: "Booking Funnel Strategy", desc: "Designing 2-click frictionless room and dining reservation user journeys." },
      { step: "03", title: "PMS & Payment Integration", desc: "Connecting live property management systems and international payment gateways." },
      { step: "04", title: "Multi-Channel Launch Campaign", desc: "Deploying high-impact Instagram Reels and Google Search campaigns for immediate occupancy." },
    ],
    caseStudies: [
      {
        title: "Smokey Rooftop Lounge & Dining Portal",
        client: "Smokey Hospitality Group",
        impact: "Drove 1.4M social impressions and generated +240% direct table bookings in 60 days.",
        image: "/creative1.png",
      },
    ],
    faqs: [
      {
        question: "Can you connect our custom website to our existing PMS (Opera, Mews, Cloudbeds)?",
        answer:
          "Yes. We build custom API bridges directly connecting your PMS for live inventory sync, dynamic room rates, and automated guest confirmations.",
      },
      {
        question: "How does direct room booking eliminate OTA commissions like Booking.com?",
        answer:
          "By providing an intuitive, fast booking engine with live rate parity guarantees and exclusive direct perks (free breakfast, early check-in), guests book directly on your site.",
      },
      {
        question: "Can guests customize room upgrades and reserve dining tables in one checkout?",
        answer:
          "Yes. We build modular cart checkout flows allowing guests to bundle airport transfers, champagne on arrival, spa appointments, and dinner reservations in a single transaction.",
      },
      {
        question: "How do you ensure rapid load speeds for high-resolution resort imagery and video tours?",
        answer:
          "We use edge-cached Next.js image optimization and adaptive bitrate video CDN delivery, ensuring crystal-clear visual tours load in under 800ms globally.",
      },
    ],
  },
  {
    slug: "jewellery",
    name: "Jewellery",
    badge: "HIGH-END LUXURY & FINE CRAFT",
    tagline: "Ultra-Luxury E-Commerce, 3D Customizers & High-Ticket Funnels",
    heroHeadline: "Bespoke Digital Boutiques Engineered for High-Ticket",
    heroHighlight: "Luxury Fine Jewellery.",
    heroSubtitle:
      "We design ultra-luxury digital storefronts, interactive 3D ring customizers, high-converting consultation funnels, and private client portals that elevate brand prestige.",
    image: "/industries/jewellery_overview.jpg",
    stats: [
      { value: "$4,200+", label: "Average Order Value (AOV)" },
      { value: "3.8x", label: "Consultation Booking Lift" },
      { value: "4K 60FPS", label: "Interactive 3D Product Renders" },
      { value: "100%", label: "GIA & IGI Verified Sync" },
    ],
    overview:
      "Luxury jewellery buyers require trust, pristine visual fidelity, and frictionless consultation booking. We build bespoke digital boutiques that showcase fine gemstones, precious metals, and artisanal craftsmanship in breathtaking detail.",
    theChallenge:
      "Selling $5k-$50k luxury jewellery online is challenging with generic Shopify themes that fail to convey high-end exclusivity, craftsmanship, and personalized white-glove advisory.",
    ourSolution:
      "We build custom headless storefronts with 3D diamond inspection viewers, interactive custom ring builders, virtual VIP styling appointments, and private vault client portals.",
    focusAreas: [
      {
        title: "Bespoke Bridal & Custom Jewelers",
        badge: "3D CONFIGURATORS",
        desc: "Interactive 3D WebGL ring builders that let buyers select diamond carats, band metals, and setting styles in real time.",
        highlights: [
          "Real-time 360° diamond rotation & reflection rendering",
          "Dynamic metal & gemstone price calculation",
          "Instant CAD render generation for custom orders",
          "Mobile-optimized 60fps WebGL shaders",
        ],
      },
      {
        title: "D2C Fine Jewelry Brands",
        badge: "HEADLESS SHOPIFY PLUS",
        desc: "High-speed custom storefronts with editorial lookbooks, macro product zoom, and financing options for high-ticket checkout.",
        highlights: [
          "Sub-second page load times with Next.js",
          "Editorial typography & high-definition zoom viewers",
          "Integrated Affirm, Klarna & luxury escrow checkout",
          "Klaviyo VIP collector retention email sequences",
        ],
      },
      {
        title: "Private Vault & Haute Joaillerie",
        badge: "VIP CONCIERGE FUNNELS",
        desc: "Private consultation funnels connecting affluent international buyers directly with master gemologists and stylists.",
        highlights: [
          "1-on-1 virtual styling consultation booking",
          "Password-protected private vault lookbooks",
          "Personalized bridal proposal guides",
          "High-intent Google Search & Meta VIP campaigns",
        ],
      },
    ],
    capabilities: [
      {
        title: "Interactive 3D Ring & Diamond Builders",
        description: "WebGL/Three.js interactive 3D configurators allowing buyers to customize bands, settings, and carats in 4K resolution.",
        image: "/industries/jewellery_cap_ring.jpg",
        deliverables: ["Real-Time Metal & Stone Swapping", "360° Diamond Rotation", "Live Price Calculation", "CAD Model Export"],
      },
      {
        title: "Artisanal Atelier & Fine Craftsmanship",
        description: "Cinematic digital storytelling capturing the heritage, gemstone grading, and bespoke craftsmanship of your atelier.",
        image: "/industries/jewellery_cap_craft.jpg",
        deliverables: ["Macro Gemstone Video Tours", "Heritage Timeline Modules", "Custom Engraving Preview", "Artisan Bio Portfolios"],
      },
      {
        title: "Ultra-Luxury Headless E-Commerce & 4K Zoom",
        description: "Bespoke Shopify Plus and Next.js storefronts with editorial serif typography and pristine ultra-macro gemstone inspection.",
        image: "/industries/jewellery_cap_diamond.jpg",
        deliverables: ["Custom Luxury Theme", "High-Resolution Asset CDN", "Insured Armored Checkout", "Multi-Currency Pricing"],
      },
      {
        title: "Private VIP Vault & Bridal Consultation",
        description: "High-ticket concierge booking flows connecting affluent buyers with dedicated master jewelers and private vault salons.",
        image: "/industries/jewellery_cap_luxury.jpg",
        deliverables: ["Video Consultation Scheduler", "Digital Lookbook Creation", "Private Client Wishlists", "Bespoke Proposal Vault"],
      },
    ],
    solutions: [
      {
        title: "Interactive 3D Ring Builder",
        desc: "360° real-time diamond customization with live metal and carat pricing calculation.",
        icon: "gem",
        tags: ["Three.js", "WebGL", "TypeScript"],
      },
      {
        title: "Headless Luxury Storefront",
        desc: "Sub-second load times, editorial storytelling, and seamless Shopify Plus checkout.",
        icon: "shopping-bag",
        tags: ["Shopify Plus", "Next.js", "Tailwind CSS"],
      },
      {
        title: "VIP Concierge & Consultation",
        desc: "Dedicated appointment funnels for bespoke bridal and private vault clients.",
        icon: "calendar",
        tags: ["Cal.com", "Zoom API", "CRM Sync"],
      },
      {
        title: "Affluent Buyer Growth Engine",
        desc: "Laser-targeted Google Search & Meta campaigns reaching qualified luxury buyers.",
        icon: "target",
        tags: ["Google Ads", "Meta CAPI", "Klaviyo"],
      },
    ],
    techStack: ["Next.js", "Shopify Plus", "Three.js", "TypeScript", "Tailwind CSS", "Klaviyo", "Stripe", "Google Ads"],
    processSteps: [
      { step: "01", title: "Luxury Brand Audit & Moodboard", desc: "Defining editorial aesthetics, serif typography, and premium color palettes." },
      { step: "02", title: "3D Asset Modeling & Interactive UX", desc: "Building 4K gemstone textures, reflections, and intuitive customizer controls." },
      { step: "03", title: "Headless Commerce Strategy", desc: "Pairing Next.js frontend with Shopify Plus backend and international payment gateways." },
      { step: "04", title: "White-Glove Campaign Launch", desc: "Deploying high-intent paid search and luxury video campaigns on Instagram." },
    ],
    caseStudies: [
      {
        title: "D2C Luxury Bridal Storefront & 3D Customizer",
        client: "Kivanza Living & Fine Jewels",
        impact: "Lifted checkout conversion by 42% and increased direct consultation bookings by 3.8x.",
        image: "/creative4.png",
      },
    ],
    faqs: [
      {
        question: "How do 3D ring customizers perform on mobile devices?",
        answer:
          "Our WebGL shaders are optimized for 60fps performance across iOS and Android devices, ensuring instant interaction with zero battery drain or lag.",
      },
      {
        question: "Can we integrate GIA or IGI diamond certificates with live stone inventories?",
        answer:
          "Yes. We build automated API connections to GIA/IGI databases and diamond inventory feeds (RapNet, Virtual Diamond Boutique) showing 360° stone scans and grading specs.",
      },
      {
        question: "How do you handle high-ticket secure checkout and luxury financing options?",
        answer:
          "We integrate multi-currency Stripe, Affirm, Klarna, and wire-transfer escrow checkout workflows designed for transactions exceeding $10,000+.",
      },
      {
        question: "Can buyers schedule 1-on-1 virtual styling appointments directly on product pages?",
        answer:
          "Yes. We embed calendar scheduling and private video consultation links on high-ticket custom jewelry pages with automatic CRM lead routing.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    badge: "SHOPIFY PLUS & CUSTOM COMMERCE",
    tagline: "Custom Shopify 2.0 Themes, Headless Storefronts & 1-Click Checkout Funnels",
    heroHeadline: "Custom Shopify Plus & Headless Storefronts for",
    heroHighlight: "Growing E-Commerce Brands.",
    heroSubtitle:
      "We build custom Shopify themes, headless Next.js digital storefronts, high-converting product pages, and automated Klaviyo retention flows that boost average order value (AOV).",
    image: "/industries/ecommerce.jpg",
    stats: [
      { value: "+34%", label: "Average Mobile Conversion Lift" },
      { value: "< 0.7s", label: "Average Page Load Speed" },
      { value: "42%", label: "60-Day Repeat Purchase Rate" },
      { value: "95+", label: "Google Core Web Vitals Score" },
    ],
    overview:
      "From custom Shopify 2.0 theme builds to enterprise headless storefronts with Next.js, we eliminate checkout friction, improve mobile site speeds, and increase average order value (AOV) without relying on bloated third-party apps.",
    theChallenge:
      "Bloated Shopify themes and slow page builders cause high bounce rates, cart abandonment, and rising customer acquisition costs (CAC) that erode store profitability.",
    ourSolution:
      "We engineer clean, modular Shopify 2.0 themes and Next.js headless storefronts with slide-out cart drawers, dynamic volume bundling, and automated Klaviyo lifecycle retention loops.",
    focusAreas: [
      {
        title: "Custom Shopify Plus & 2.0 Themes",
        badge: "SHOPIFY 2.0 & LIQUID",
        desc: "Bespoke Shopify 2.0 themes engineered with clean Liquid code, custom product page sections, slide-out cart drawers, and 1-click upsells.",
        highlights: [
          "Bespoke Shopify Liquid & Theme App Extensions",
          "Animated slide-out cart with tiered discount upsells",
          "Zero third-party script bloat & 95+ Mobile PageSpeed",
          "Custom product configurators & bundle builders",
        ],
      },
      {
        title: "Headless Commerce & Multi-Market Scale",
        badge: "NEXT.JS & ERP SYNC",
        desc: "Next.js App Router frontends with instantaneous sub-second page transitions, multi-currency checkout, and warehouse ERP syncing.",
        highlights: [
          "Sub-second catalog browsing & instantaneous filtering",
          "Multi-currency, localized tax & global shipping rules",
          "NetSuite, Katana & warehouse inventory connectors",
          "Algolia / Meilisearch instant multi-attribute search",
        ],
      },
      {
        title: "Conversion Optimization & Retention Loops",
        badge: "KLAVIYO & RECHARGE",
        desc: "Automated lifecycle email/SMS marketing, subscription management, and server-side tracking that maximize customer lifetime value (LTV).",
        highlights: [
          "High-converting Abandoned Cart & Browse Recovery flows",
          "Recharge & Smartrr seamless subscription portals",
          "Predictive restock SMS triggers & VIP loyalty rewards",
          "Server-side Meta CAPI & Google Performance Max tracking",
        ],
      },
    ],
    capabilities: [
      {
        title: "Custom Shopify Plus & 2.0 Theme Builds",
        description: "Bespoke Shopify 2.0 themes engineered for fast mobile loading, intuitive product discovery, and friction-free checkout.",
        image: "/industries/ecom_cap_shopify.jpg",
        deliverables: ["Custom Liquid 2.0 Theme", "Slide-Out Cart Drawer", "Dynamic Bundle Engine", "Sticky Mobile Buy Bar"],
      },
      {
        title: "Headless Commerce & Next.js Storefronts",
        description: "High-speed headless storefronts powered by Next.js and Shopify Storefront API with sub-second page transitions.",
        image: "/industries/ecom_cap_mobile.jpg",
        deliverables: ["Next.js App Router Frontend", "Shopify Storefront API Sync", "Global Edge CDN Caching", "Instant Faceted Search"],
      },
      {
        title: "Omnichannel Logistics & ERP Integration",
        description: "Automated warehouse, inventory, and order fulfillment connectors syncing real-time stock across multiple sales channels.",
        image: "/industries/ecom_cap_unboxing.jpg",
        deliverables: ["NetSuite & ERP Connectors", "Multi-Warehouse Inventory Sync", "Automated Return Portals", "Custom Shipping Rules"],
      },
      {
        title: "Klaviyo Lifecycle & Retention Marketing",
        description: "Data-driven email and SMS marketing flows designed to recover lost carts and drive predictable repeat purchases.",
        image: "/industries/ecom_cap_analytics.jpg",
        deliverables: ["Klaviyo Flow Strategy", "VIP Customer Segmentation", "SMS Restock Reminders", "Server-Side Meta CAPI"],
      },
    ],
    solutions: [
      {
        title: "Shopify 2.0 Theme Development",
        desc: "Custom Liquid framework with modular blocks, slide-out carts, and fast page load speeds.",
        icon: "shopping-bag",
        tags: ["Shopify Plus", "Liquid", "Theme 2.0"],
      },
      {
        title: "Headless Next.js Storefronts",
        desc: "Instantaneous page navigation, sub-second product filters, and edge caching.",
        icon: "zap",
        tags: ["Next.js", "Storefront API", "Tailwind CSS"],
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        desc: "Frictionless checkout paths, tiered bundle discounts, and 1-click post-purchase upsells.",
        icon: "trending-up",
        tags: ["A/B Testing", "Stripe", "Rebuy"],
      },
      {
        title: "Automated Email & SMS Retention",
        desc: "Klaviyo lifecycle marketing, abandoned cart recovery, and VIP customer loyalty sequences.",
        icon: "mail",
        tags: ["Klaviyo", "Postscript", "Recharge"],
      },
    ],
    techStack: ["Shopify Plus", "Next.js", "Liquid", "TypeScript", "Tailwind CSS", "Klaviyo", "Recharge", "Meta CAPI"],
    processSteps: [
      { step: "01", title: "Store Audit & Funnel Analytics", desc: "Analyzing conversion drop-offs, mobile page speed bottlenecks, and retention opportunities." },
      { step: "02", title: "Modular Theme & UX Engineering", desc: "Building clean Liquid 2.0 templates with slide-out cart drawers and dynamic upsells." },
      { step: "03", title: "App, Payment & ERP Integration", desc: "Connecting payment gateways, Klaviyo email sequences, and inventory synchronization." },
      { step: "04", title: "A/B Testing & Revenue Scaling", desc: "Iterating on product page conversion rates and launching automated lifecycle retention flows." },
    ],
    caseStudies: [
      {
        title: "Shopify Plus Redesign & Checkout Funnel Re-Engineering",
        client: "Aura Apparel & Lifestyle Store",
        impact: "Increased mobile conversion rate by 34% and lifted 60-day repeat purchase rate to 42%.",
        image: "/industries/ecom_cap_shopify.jpg",
      },
    ],
    faqs: [
      {
        question: "How do you improve mobile conversion rates for Shopify stores?",
        answer:
          "We eliminate bloated third-party apps, implement native slide-out cart drawers with free-shipping progress bars, optimize image compression, and build sticky Add-to-Cart bars for seamless mobile checkout.",
      },
      {
        question: "How do you migrate our store from WooCommerce or Magento to Shopify Plus without SEO loss?",
        answer:
          "We execute 1-to-1 301 URL redirects, preserve canonical tags, migrate customer order histories, and audit structured product schema so your search rankings transfer seamlessly.",
      },
      {
        question: "Can you build custom product bundling and tiered subscription logic?",
        answer:
          "Yes. We build native bundle builders and integrate subscription platforms like Recharge or Smartrr with personalized customer portal controls.",
      },
      {
        question: "How do you optimize checkout speed to achieve a 95+ Google Core Web Vitals score?",
        answer:
          "We write custom vanilla Liquid and lightweight React components, compress all media assets automatically, lazy-load scripts, and eliminate render-blocking third-party apps.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    badge: "PROPTECH & PROPERTY PORTALS",
    tagline: "High-Intent Lead Portals, Interactive Maps & IDX Synchronizations",
    heroHeadline: "High-Performance PropTech Portals Built for",
    heroHighlight: "High-Volume Deals.",
    heroSubtitle:
      "We design and build custom real estate portals, interactive neighborhood map search engines, automated MLS/IDX data synchronization, and high-ticket investor lead funnels.",
    image: "/industries/real-estate.jpg",
    stats: [
      { value: "450k+", label: "Monthly Active Portal Users" },
      { value: "< 50ms", label: "Geo-Spatial Query Speed" },
      { value: "+280%", label: "Qualified Investor Inquiries" },
      { value: "100%", label: "Real-Time MLS/IDX Sync" },
    ],
    overview:
      "In modern real estate, speed and intuitive search interfaces win buyers and investors. We build custom PropTech platforms that deliver instant map filtering, 3D property tours, and automated CRM lead distribution.",
    theChallenge:
      "Off-the-shelf real estate templates are painfully slow when loading thousands of MLS listings, suffer from terrible mobile UX, and fail to filter out low-intent leads.",
    ourSolution:
      "We engineer custom map-based property search engines with Mapbox and PostgreSQL PostGIS, integrated with MLS/IDX feeds, virtual tour players, and automated SMS lead routing.",
    focusAreas: [
      {
        title: "Real Estate Brokerages & Teams",
        badge: "MAP SEARCH & MLS PORTALS",
        desc: "Custom high-speed property search portals with instant map boundary drawing, school ratings, and automated MLS listing sync.",
        highlights: [
          "Sub-50ms Mapbox geo-spatial map clustering",
          "Automated RESO / IDX listing data feed ingestion",
          "Custom polygon neighborhood search filters",
          "Saved property alerts & instant SMS lead routing",
        ],
      },
      {
        title: "Luxury Developments & Communities",
        badge: "3D VIRTUAL SHOWCASES",
        desc: "Immersive development showcase websites featuring interactive floorplans, Matterport 3D walkthroughs, and VIP pre-sales funnels.",
        highlights: [
          "Interactive SVG floorplan unit selectors",
          "Matterport 3D virtual tour integrations",
          "Investor ROI & mortgage calculation widgets",
          "Private brochure download & lead capture forms",
        ],
      },
      {
        title: "Commercial & Investment Portals",
        badge: "HIGH-TICKET INVESTOR FUNNELS",
        desc: "Targeted Google Ads and local SEO campaigns capturing high-net-worth property investors, buyers, and commercial tenants.",
        highlights: [
          "Geo-targeted Google Search acquisition ads",
          "Programmatic neighborhood SEO landing pages",
          "HubSpot & CRM lead scoring workflows",
          "Local Google Business Map 3-Pack placement",
        ],
      },
    ],
    capabilities: [
      {
        title: "Interactive Map-Based Search & Portals",
        description: "Instantaneous property discovery with polygon boundary drawing, school ratings, and price filters.",
        deliverables: ["Mapbox Vector Tile Integration", "PostGIS Geo-Queries", "Polygon Search Tools", "Saved Search Alerts"],
      },
      {
        title: "Real-Time MLS / IDX Data Synchronization",
        description: "Automated ingestion pipelines synchronizing tens of thousands of properties with zero latency.",
        deliverables: ["RETS / Web API Connectors", "Automated Image Optimization", "Price History Tracking", "Sold Listing Archives"],
      },
      {
        title: "Virtual 3D Tours & Floorplan Walkthroughs",
        description: "Embedded Matterport and WebGL 3D walkthroughs optimized for lightning-fast mobile loading.",
        deliverables: ["Matterport Embeds", "Interactive SVG Floorplans", "Video Tour Players", "High-Res Photo Galleries"],
      },
      {
        title: "High-Ticket Investor Lead Generation",
        description: "Targeted Google Ads and local SEO campaigns capturing luxury buyers, commercial investors, and sellers.",
        deliverables: ["Dedicated Development Landing Pages", "Mortgage & ROI Calculators", "Lead Scoring & CRM Routing", "Local SEO Maps 3-Pack"],
      },
    ],
    solutions: [
      {
        title: "PropTech Search Portal",
        desc: "Instantaneous map searching with polygon drawing and custom filters.",
        icon: "map",
        tags: ["Mapbox", "PostgreSQL", "Next.js", "PostGIS"],
      },
      {
        title: "MLS / IDX Data Pipeline",
        desc: "Automated real-time listing sync with deduplication and fast image CDN.",
        icon: "database",
        tags: ["RESO Web API", "Redis", "Node.js"],
      },
      {
        title: "Luxury Development Hubs",
        desc: "Showcasing master-planned luxury developments with 3D renderings.",
        icon: "building",
        tags: ["Three.js", "Tailwind CSS", "Framer"],
      },
      {
        title: "Investor Acquisition Ads",
        desc: "High-intent Google Search and Meta ads capturing qualified property buyers.",
        icon: "dollar-sign",
        tags: ["Google Ads", "Meta CAPI", "HubSpot"],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Mapbox GL", "PostgreSQL (PostGIS)", "Redis", "Tailwind CSS", "HubSpot CRM", "Google Ads"],
    processSteps: [
      { step: "01", title: "Data Model & MLS API Mapping", desc: "Configuring RESO Web API feeds, normalization schemas, and geo-spatial indexing." },
      { step: "02", title: "Map Interface & UX Design", desc: "Designing responsive search controls, map clustering, and listing cards." },
      { step: "03", title: "Lead Routing & CRM Automation", desc: "Connecting lead capture forms to agent routing logic and instant SMS alerts." },
      { step: "04", title: "Local Market SEO Launch", desc: "Deploying thousands of programmatic neighborhood landing pages for organic search dominance." },
    ],
    caseStudies: [
      {
        title: "National PropTech Portal & Geo-Search Engine",
        client: "Prime PropTech Group",
        impact: "Scaled to 450,000 monthly active users and boosted agent lead volume by +280%.",
        image: "/creative1.png",
      },
    ],
    faqs: [
      {
        question: "How fast are map searches with 50,000+ active property listings?",
        answer:
          "We use PostGIS spatial indexing with vector map clustering, delivering sub-50ms map panning and search filtering even with tens of thousands of active pins.",
      },
      {
        question: "How does automated MLS/IDX synchronization update property listings?",
        answer:
          "We build automated RESO Web API pipelines that poll regional MLS databases every 15 minutes, instantly updating prices, pending statuses, and new photo sets.",
      },
      {
        question: "Can we offer 3D virtual walkthroughs and neighborhood demographic data?",
        answer:
          "Yes. We embed Matterport 3D tours, interactive floor plans, school district ratings (GreatSchools API), and walk score metrics directly on property details pages.",
      },
      {
        question: "Can property inquiry leads sync directly to our real estate CRM (Follow Up Boss, Salesforce)?",
        answer:
          "Yes. We configure instant webhook bridges syncing buyer and seller inquiries with Follow Up Boss, LionDesk, HubSpot, or Salesforce with automated round-robin agent distribution.",
      },
    ],
  },
  {
    slug: "food-beverages",
    name: "Food & Beverages",
    badge: "SPECIALTY CAFES, ROASTERIES & DINING",
    tagline: "Direct Online Ordering, Cafe Portals & POS Synchronizations",
    heroHeadline: "Bespoke Digital Systems Built for Specialty Cafes &",
    heroHighlight: "Culinary Brands.",
    heroSubtitle:
      "We design zero-commission direct ordering web apps, multi-location cafe platforms, artisanal coffee subscription funnels, and real-time Toast/Square POS kitchen integrations.",
    image: "/industries/food_beverages_overview.jpg",
    stats: [
      { value: "0%", label: "Third-Party Aggregator Fees" },
      { value: "< 2s", label: "Mobile Menu Load Speed" },
      { value: "+180%", label: "Direct Pickup & Delivery Orders" },
      { value: "100%", label: "Toast & Square POS Sync" },
    ],
    overview:
      "Specialty cafes, artisanal roasteries, and restaurant groups thrive when they own their direct guest relationships. We build custom ordering platforms that bypass costly 30% delivery app commissions, streamline kitchen operations, and build long-term brand loyalty.",
    theChallenge:
      "Food and beverage brands bleed margins to delivery apps like UberEats and DoorDash while struggling with slow menu updates, fragmented customer data, and clunky POS connections.",
    ourSolution:
      "We build custom direct ordering web apps integrated with Toast, Square, and Clover POS systems, automated SMS pickup notifications, and recurring coffee bean subscription portals.",
    focusAreas: [
      {
        title: "Specialty Cafes & Coffee Roasteries",
        badge: "SUBSCRIPTIONS & D2C",
        desc: "Custom eCommerce portals with recurring bean subscriptions, whole/ground selectors, brew guides, and seamless mobile checkout.",
        highlights: [
          "Recharge & Stripe recurring coffee club subscriptions",
          "Custom roast profile & grind size selectors",
          "Sub-second catalog browsing & tasting note filters",
          "Automated restock & subscriber perk email flows",
        ],
      },
      {
        title: "Direct Online Ordering & Takeout",
        badge: "0% COMMISSION ORDERING",
        desc: "Custom web ordering apps sending tickets directly to your kitchen display system (KDS) without 30% marketplace fees.",
        highlights: [
          "Bi-directional Toast, Square & Clover POS sync",
          "Custom menu item modifiers & combo upsells",
          "Apple Pay & Google Pay 1-click mobile checkout",
          "Live order preparation status & SMS notifications",
        ],
      },
      {
        title: "Multi-Location Chains & Dine-In QR",
        badge: "MULTI-STORE MANAGEMENT",
        desc: "Centralized platforms for expanding cafe and restaurant brands with location detection, digital QR table menus, and split-bill payments.",
        highlights: [
          "Automatic location detection & store switcher",
          "Dine-in QR menu ordering with zero app downloads",
          "Split-the-bill checkout & digital tip prompts",
          "Store-specific inventory & operating hours management",
        ],
      },
    ],
    capabilities: [
      {
        title: "Direct Online Ordering & Kitchen POS Sync",
        description: "Zero-commission food and drink ordering web applications connected directly to Toast and Square kitchen display systems.",
        image: "/industries/fb_cap_order.jpg",
        deliverables: ["Toast & Square API Sync", "Live Kitchen Ticket Routing", "Custom Menu Modifiers", "Apple Pay & Google Pay 1-Click"],
      },
      {
        title: "Cafe & Multi-Location Store Management",
        description: "Centralized platforms for cafe chains with location-specific menus, operating hours, and local Google Maps optimization.",
        image: "/industries/fb_cap_pos.jpg",
        deliverables: ["Location Switcher Interface", "Franchise Storefront Portal", "Local Google Business Sync", "Store-Specific Promotions"],
      },
      {
        title: "Coffee Subscriptions & Artisanal D2C Storefronts",
        description: "Custom headless storefronts for roasteries with flexible bean subscriptions, grind selectors, and loyalty rewards.",
        image: "/industries/fb_cap_coffee.jpg",
        deliverables: ["Recurring Bean Subscriptions", "Interactive Roast Profile Filters", "Subscriber Discount Perks", "Klaviyo Replenishment SMS"],
      },
      {
        title: "Private Catering & Dining Reservations",
        description: "Interactive catering inquiry builders, corporate event deposit locks, and private dining group reservations.",
        image: "/industries/fb_cap_catering.jpg",
        deliverables: ["Catering Menu Builder", "Deposit Payment Flow", "Calendar Availability Sync", "Automated SMS Confirmations"],
      },
    ],
    solutions: [
      {
        title: "Direct 0% Commission Ordering",
        desc: "Custom checkout flow with POS kitchen sync and zero delivery aggregator commissions.",
        icon: "shopping-bag",
        tags: ["Toast API", "Square", "Next.js", "Stripe"],
      },
      {
        title: "Artisanal Coffee & Roastery D2C",
        desc: "Recurring bean club subscriptions with custom grind selection and automated shipping.",
        icon: "coffee",
        tags: ["Recharge", "Shopify", "Subscriptions"],
      },
      {
        title: "Smart Table QR & Split Bill",
        desc: "Frictionless dine-in QR menus with instant guest tab splitting and 1-click mobile pay.",
        icon: "smartphone",
        tags: ["QR Ordering", "Apple Pay", "Zero App Download"],
      },
      {
        title: "Multi-Location Cafe Management",
        desc: "Manage 20+ store locations with synchronized menus, pricing, and localized Google Maps profiles.",
        icon: "map-pin",
        tags: ["Multi-Tenant", "PostgreSQL", "Local SEO"],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Toast API", "Square POS", "Tailwind CSS", "Recharge", "Stripe", "Twilio SMS"],
    processSteps: [
      { step: "01", title: "Brand & Menu Design", desc: "Designing mouth-watering menu layouts with high-resolution photography and modifier flows." },
      { step: "02", title: "POS & Hardware Integration", desc: "Connecting cloud order routing to existing kitchen printers and terminal displays." },
      { step: "03", title: "Subscription & SMS Setup", desc: "Configuring automated post-purchase review capture and VIP repeat discount codes." },
      { step: "04", title: "Local Footfall Launch", desc: "Deploying hyper-local Instagram Reels ads and Google Maps 3-Pack optimization." },
    ],
    caseStudies: [
      {
        title: "Artisanal Cafe & Roastery Direct Ordering Portal",
        client: "Broei Specialty Coffee",
        impact: "Grew direct online ordering by +180% and saved over $42,000 annually in third-party aggregator fees.",
        image: "/industries/food_beverages_overview.jpg",
      },
    ],
    faqs: [
      {
        question: "Can orders go directly to our Toast or Square POS kitchen printers?",
        answer:
          "Yes. We integrate directly with Toast and Square Partner APIs so online orders trigger tickets on your kitchen displays and printers instantly in real-time.",
      },
      {
        question: "How does 0% commission direct ordering compare to third-party delivery apps?",
        answer:
          "Third-party apps take 20%-30% of every order. With a custom direct ordering platform, you only pay standard credit card processing (~2.9%), saving tens of thousands annually while owning your customer data.",
      },
      {
        question: "Can customers scan smart QR codes at cafe tables to order and split checks?",
        answer:
          "Yes. We build lightweight mobile web apps where table QR scans open the menu instantly with Apple Pay / Google Pay check splitting without requiring any app downloads.",
      },
      {
        question: "Can we offer recurring coffee bean subscriptions on our website?",
        answer:
          "Yes. We integrate Stripe and Recharge subscription engines allowing your customers to select bag sizes, grind options, and delivery intervals with self-service management portals.",
      },
    ],
  },
  {
    slug: "education",
    name: "Education",
    badge: "DIGITAL GROWTH & STUDENT ENROLLMENT SERVICES",
    tagline: "Institutional Websites, Higher-Ed SEO & Student Enrollment Marketing",
    heroHeadline: "High-Converting Web Experiences & Digital Marketing for",
    heroHighlight: "Educational Institutions.",
    heroSubtitle:
      "We help universities, private schools, academies, and training institutes scale student enrollments through modern institutional websites, high-intent Google Search SEO, and performance-driven paid acquisition campaigns.",
    image: "/industries/education_overview.jpg",
    stats: [
      { value: "+240%", label: "Qualified Student Inquiries" },
      { value: "#1 Rank", label: "Competitive Course Keywords" },
      { value: "3.8x", label: "Ad Campaign ROAS" },
      { value: "100%", label: "Custom Brand IP Ownership" },
    ],
    overview:
      "Educational institutions win students by establishing academic authority, transparent curriculum pathways, and effortless inquiry flows. We engineer high-converting institutional websites, dominate competitive course keywords on Google, and deploy targeted paid enrollment campaigns that fill classroom cohorts.",
    theChallenge:
      "Many educational institutions suffer from outdated, bloated websites with confusing course navigation, poor mobile experience, and zero organic visibility for high-intent search terms.",
    ourSolution:
      "We provide full-service digital solutions: custom high-speed web design, technical higher-ed SEO, interactive program finders, and automated lead nurturing systems that convert prospective students into enrolled applicants.",
    focusAreas: [
      {
        title: "Higher-Ed SEO & Organic Search Dominance",
        badge: "TECHNICAL SEO & CONTENT",
        desc: "Dominate search engine rankings for competitive degree programs, vocational coaching, and regional certification courses.",
        highlights: [
          "Technical site speed & Core Web Vitals optimization",
          "Programmatic course landing page structure",
          "Local Google Business Profile 3-Pack placement",
          "Authority link acquisition & academic content strategy",
        ],
      },
      {
        title: "Institutional Web Design & Program Finders",
        badge: "ACCESSIBLE WEB DESIGN",
        desc: "Fast, WCAG accessible university and academy websites with interactive course finders, faculty directories, and campus virtual tours.",
        highlights: [
          "Next.js high-speed frontend with headless CMS",
          "Interactive multi-filter course & degree finder",
          "WCAG AAA compliance for universal accessibility",
          "Mobile-first prospectus downloads & visit schedulers",
        ],
      },
      {
        title: "Student Enrollment Funnels & Paid Acquisition",
        badge: "PERFORMANCE ADVERTISING",
        desc: "Hyper-targeted Google Search, YouTube, and Meta ad campaigns capturing active students actively looking for courses.",
        highlights: [
          "High-intent Google Search keyword bidding",
          "YouTube & Instagram video enrollment campaigns",
          "Multi-touch conversion tracking & CRM integration",
          "Automated email & SMS inquiry nurture sequences",
        ],
      },
    ],
    capabilities: [
      {
        title: "Higher-Ed SEO & Organic Search Dominance",
        description: "Comprehensive technical SEO audits, course keyword strategy, and content strategies driving sustainable organic student traffic.",
        image: "/industries/edu_cap_lms.jpg",
        deliverables: ["Course Keyword Strategy", "Technical SEO Infrastructure", "Local Campus Map Optimization", "Academic Authority Backlinks"],
      },
      {
        title: "Institutional Web Design & Program Finders",
        description: "Bespoke, high-performance web portals for universities, academies, and schools with frictionless curriculum discovery.",
        image: "/industries/edu_cap_classroom.jpg",
        deliverables: ["Custom Next.js Institutional Theme", "Interactive Course Finder", "Virtual Campus Tour Integration", "WCAG AAA Accessibility Audit"],
      },
      {
        title: "Paid Student Acquisition & Google Ads",
        description: "Performance-driven Google Search, YouTube, and Meta campaigns calibrated for lowest cost-per-enrolled-student.",
        image: "/industries/edu_cap_grading.jpg",
        deliverables: ["High-Intent Google Ads Setup", "YouTube & Meta Video Creatives", "Conversion Landing Page Design", "Server-Side Tracking Telemetry"],
      },
      {
        title: "Enrollment Funnel Optimization & CRM Sync",
        description: "Automated inquiry capture pipelines connected directly to your admissions team's CRM (HubSpot, Salesforce, Zoho).",
        image: "/industries/edu_cap_enroll.jpg",
        deliverables: ["Admissions CRM Integration", "Prospectus Download Funnels", "Automated SMS Nurture Flows", "Admissions Lead Scoring"],
      },
    ],
    solutions: [
      {
        title: "Higher-Ed Organic SEO",
        desc: "Rank on page 1 of Google for high-intent course, degree, and certification queries.",
        icon: "target",
        tags: ["Technical SEO", "Schema.org", "Google Search"],
      },
      {
        title: "Institutional Web Design",
        desc: "Fast, accessible university and school portals with interactive course finders.",
        icon: "globe",
        tags: ["Next.js", "WCAG AAA", "Headless CMS"],
      },
      {
        title: "Paid Student Acquisition",
        desc: "Targeted Google Ads and Instagram campaigns driving qualified admissions applications.",
        icon: "users",
        tags: ["Google Ads", "Meta Ads", "CAPI Tracking"],
      },
      {
        title: "Admissions CRM & Nurturing",
        desc: "Automated SMS and email workflows turning prospective inquiries into enrolled students.",
        icon: "mail",
        tags: ["HubSpot", "Twilio SMS", "Lead Nurturing"],
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Ads", "Meta CAPI", "HubSpot CRM", "WordPress / Headless CMS", "Twilio SMS"],
    processSteps: [
      { step: "01", title: "Admissions & SEO Audit", desc: "Analyzing institutional search visibility, website conversion barriers, and competitor bidding." },
      { step: "02", title: "Institutional Portal & Funnel Build", desc: "Designing responsive course discovery pages, prospectus downloads, and visit booking." },
      { step: "03", title: "Admissions CRM & Lead Pipeline", desc: "Connecting inquiry capture forms to admissions counselor dashboards and automated SMS." },
      { step: "04", title: "Omnichannel Enrollment Launch", desc: "Deploying high-intent Google Search campaigns and technical higher-ed SEO enhancements." },
    ],
    caseStudies: [
      {
        title: "National Academy Enrollment Growth & SEO Dominance",
        client: "Apex Academic Institute",
        impact: "Ranked #1 for 45+ competitive course terms and increased qualified student inquiries by +240% in 90 days.",
        image: "/industries/education_overview.jpg",
      },
    ],
    faqs: [
      {
        question: "Can you connect our website inquiry forms directly to our admissions CRM?",
        answer:
          "Yes. We build secure API integrations syncing all student inquiries, prospectus downloads, and tour bookings directly with your admissions CRM (HubSpot, Salesforce Education Cloud, Zoho, etc.) in real time.",
      },
      {
        question: "How do you ensure institutional websites meet WCAG accessibility standards?",
        answer:
          "We audit and code all color contrast ratios, screen reader ARIA labels, keyboard navigability, and focus outlines to meet WCAG 2.1 AAA compliance standards.",
      },
      {
        question: "What strategies do you use for paid Google Search and Meta student acquisition?",
        answer:
          "We run high-intent exact-match Google Search campaigns targeting active course enrollment terms, coupled with Meta/Instagram video testimonials that drive prospective students to dedicated landing pages.",
      },
      {
        question: "Can you build interactive program finders and downloadable digital prospectuses?",
        answer:
          "Yes. We engineer multi-filter program finders and automated 2-click prospectus download funnels that capture prospective student contact info instantly for admissions follow-up.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return allIndustries.find((i) => i.slug === slug);
}
