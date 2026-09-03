export interface ServiceDetail {
  slug: string;
  name: string;
  category: "Development" | "Design" | "Marketing" | "Security";
  tagline: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubtitle: string;
  image: string;
  galleryImages: string[];
  stats: Array<{ value: string; label: string }>;
  overview: string;
  theChallenge: string;
  ourSolution: string;
  capabilities: Array<{
    title: string;
    description: string;
    deliverables: string[];
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
  structuredSection?: {
    title: string;
    description: string;
    checklist: string[];
    whyChooseTitle: string;
    whyChooseDesc: string;
    whyChooseBullets: string[];
  };
}

export const allServices: ServiceDetail[] = [
  {
    slug: "enterprise-software",
    name: "Enterprise Software",
    category: "Development",
    tagline: "High-Performance Systems & Technical Integrity",
    heroHeadline: "Scalable Enterprise Software Built for",
    heroHighlight: "Enduring Growth.",
    heroSubtitle:
      "We design, engineer, and deploy mission-critical enterprise systems that eliminate technical debt, automate complex workflows, and handle high-throughput operations with 99.99% availability.",
    image: "/services/enterprise_software.jpg",
    galleryImages: ["/gro.png", "/image1.png", "/studio-photo.png"],
    stats: [
      { value: "99.99%", label: "Uptime SLA Guarantee" },
      { value: "10x", label: "Workflow Throughput" },
      { value: "0", label: "Legacy Technical Debt" },
      { value: "SOC2", label: "Compliance-Ready Code" },
    ],
    overview:
      "Modern enterprises cannot afford fragile frameworks or slow execution. Owlio Works builds modular, microservices-driven backend systems and bespoke SaaS platforms designed for seamless integrations, low-latency performance, and massive scale.",
    theChallenge:
      "Traditional enterprise software is slow to develop, riddled with legacy dependencies, and requires massive maintenance overhead. Off-the-shelf software rarely fits proprietary workflows, leading to costly workarounds.",
    ourSolution:
      "We build clean, robust custom platforms using modern cloud primitives, event-driven pipelines, and type-safe systems that your engineering team can easily maintain, extend, and scale for the next decade.",
    capabilities: [
      {
        title: "Bespoke SaaS & Internal Tools",
        description: "Tailor-made portals, admin dashboards, and operational engines built for team productivity.",
        deliverables: ["Custom Web Dashboards", "Role-Based Access Control", "Automated Reporting", "Audit Logs"],
      },
      {
        title: "Distributed Microservices & APIs",
        description: "High-concurrency GraphQL and RESTful microservices designed for sub-millisecond response times.",
        deliverables: ["API Gateway Setup", "GraphQL Federation", "Rate Limiting & Caching", "Webhook Infrastructure"],
      },
      {
        title: "Legacy Modernization & Rescues",
        description: "Extracting monolithic legacy codebases into clean, decoupled modern services with zero downtime.",
        deliverables: ["Database Normalization", "Zero-Downtime Migration", "Automated Test Suites", "Security Hardening"],
      },
      {
        title: "Enterprise Integrations",
        description: "Seamless synchronization between CRMs, ERPs, payment gateways, and third-party SaaS stacks.",
        deliverables: ["Salesforce / HubSpot Sync", "Stripe / Razorpay Pipelines", "Real-Time Event Streams", "Data Warehousing"],
      },
    ],
    techStack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "GraphQL",
      "Kafka",
    ],
    processSteps: [
      {
        step: "01",
        title: "Technical Discovery & Schema Design",
        desc: "We analyze your data models, user flows, and enterprise constraints to craft a resilient system framework.",
      },
      {
        step: "02",
        title: "Interactive Prototype & Core Engine",
        desc: "We build core database structures, foundational APIs, and frontend interfaces for rapid feedback.",
      },
      {
        step: "03",
        title: "Security Auditing & Load Testing",
        desc: "Automated regression tests, penetration testing, and load simulations to verify multi-million user stability.",
      },
      {
        step: "04",
        title: "Production Rollout & CI/CD",
        desc: "Zero-downtime deployment pipelines with proactive observability, APM metrics, and 24/7 monitoring.",
      },
    ],
    caseStudies: [
      {
        title: "Centralized Global Supply Logistics",
        client: "PM GatiShakti Partner",
        impact: "Reduced order processing latency by 84% across 12,000 daily shipments.",
        image: "/creative2.png",
      },
      {
        title: "High-Volume Real Estate Booking Engine",
        client: "Prime PropTech",
        impact: "Scaled to 450k monthly active users with zero downtime during peak launches.",
        image: "/creative1.png",
      },
    ],
    faqs: [
      {
        question: "How do you ensure enterprise-grade security?",
        answer:
          "We follow OWASP security standards, implement strict RBAC, encrypt all data in-transit (TLS 1.3) and at-rest (AES-256), and perform static/dynamic vulnerability scans on every commit.",
      },
      {
        question: "Can you take over and refactor an existing codebase?",
        answer:
          "Yes. A significant portion of our work involves technical rescues—auditing flawed legacy systems, establishing automated testing, and systematically modernizing without halting live operations.",
      },
      {
        question: "Who owns the intellectual property and code?",
        answer:
          "You own 100% of all intellectual property, source code, repositories, and documentation from day one.",
      },
      {
        question: "What development methodology and sprint cadence do you follow?",
        answer:
          "We run agile 2-week sprint cycles with weekly video demos, shared Jira/GitHub boards, daily asynchronous Slack updates, and continuous integration deployments to dedicated staging environments.",
      },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    category: "Development",
    tagline: "Blazing-Fast, High-Converting Digital Platforms",
    heroHeadline: "Modern Web Platforms That Turn Traffic Into",
    heroHighlight: "Measurable Revenue.",
    heroSubtitle:
      "We design and engineer bespoke web platforms with Next.js, Headless CMS platforms, and interactive 3D/micro-animations that score 95+ on Core Web Vitals and outperform competitors.",
    image: "/services/web_development.jpg",
    galleryImages: ["/services/enterprise_software.jpg", "/wed.png", "/image2.png"],
    stats: [
      { value: "98+", label: "Google PageSpeed Score" },
      { value: "< 0.8s", label: "Average First Contentful Paint" },
      { value: "3.4x", label: "Conversion Rate Boost" },
      { value: "100%", label: "Responsive & Accessible" },
    ],
    overview:
      "Your website is your most valuable digital asset. We combine cutting-edge frontend engineering with editorial storytelling to craft lightning-fast web experiences that captivate buyers and dominate search rankings.",
    theChallenge:
      "Most agency websites are slow, bloated with heavy page builders, fragile on mobile screens, and difficult for internal marketing teams to update without breaking layouts.",
    ourSolution:
      "We build custom headless platforms powered by Next.js and Tailwind CSS. Marketing teams get intuitive CMS workflows while visitors experience app-like instant loading speeds.",
    capabilities: [
      {
        title: "Headless CMS & Custom Frontends",
        description: "Modular content systems with Sanity, Strapi, or Contentful connected to blazing Next.js frontends.",
        deliverables: ["Dynamic Component Blocks", "Live Preview Workflows", "Structured Schema Markup", "Global CDN Caching"],
      },
      {
        title: "Interactive Web Apps & Portals",
        description: "Rich browser experiences with stateful dashboards, interactive calculators, and client portals.",
        deliverables: ["Real-Time State Sync", "Interactive 3D Elements", "Micro-Animations", "Offline PWA Support"],
      },
      {
        title: "High-Converting E-Commerce",
        description: "Bespoke Shopify Plus and Headless Commerce setups engineered for frictionless checkout journeys.",
        deliverables: ["Custom Cart Drawers", "1-Click Checkout Integration", "Personalized Product Bundles", "ERP Inventory Sync"],
      },
      {
        title: "Technical SEO & Speed Optimization",
        description: "Technical optimization for Google Core Web Vitals, SSR, structured JSON-LD, and crawler indexing.",
        deliverables: ["Sub-Second TTFB", "Asset Minification", "Automated Image Optimization", "Robots & Sitemap Generation"],
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Sanity.io",
      "Shopify Plus",
      "Vercel",
      "PostgreSQL",
    ],
    processSteps: [
      {
        step: "01",
        title: "UX Strategy & Wireframing",
        desc: "Mapping conversion funnels, user navigation hierarchy, and technical requirements before writing code.",
      },
      {
        step: "02",
        title: "Interactive High-Fidelity UI",
        desc: "Designing responsive interfaces with modern aesthetics, bespoke typography, and subtle micro-animations.",
      },
      {
        step: "03",
        title: "Modern Component Engineering",
        desc: "Building clean, reusable React/Next.js components with strict TypeScript types and accessible semantic HTML.",
      },
      {
        step: "04",
        title: "Speed Audits & Production Deploy",
        desc: "Vitals benchmarking, cross-browser validation, and global edge network deployment with automated CI/CD.",
      },
    ],
    caseStudies: [
      {
        title: "Smokey Rooftop Lounge Experiential Portal",
        client: "Smokey Hospitality",
        impact: "Generated 1.4M impressions and +240% table reservations in the first 60 days.",
        image: "/creative1.png",
      },
      {
        title: "High-End D2C Luxury Brand Experience",
        client: "Kivanza Living",
        impact: "Reduced page load time by 68% and lifted checkout completion rate by 42%.",
        image: "/creative4.png",
      },
    ],
    faqs: [
      {
        question: "Can our marketing team update content without developers?",
        answer:
          "Absolutely. We set up an intuitive Headless CMS (like Sanity or Strapi) where your team can edit text, swap images, publish blogs, and launch landing pages with zero coding required.",
      },
      {
        question: "How do you achieve 95+ Core Web Vitals scores?",
        answer:
          "We utilize Next.js server-side rendering, automatic image conversion to AVIF/WebP, minimal JavaScript payloads, clean critical CSS, and edge caching on global CDNs.",
      },
      {
        question: "Do you build custom responsive designs or rely on pre-made templates?",
        answer:
          "Every web platform we build is 100% custom-designed in Figma and coded from scratch with Next.js and Tailwind CSS, tailored specifically to your brand identity, user journeys, and conversion goals.",
      },
      {
        question: "How do you ensure SEO best practices are baked into the development process?",
        answer:
          "We implement semantic HTML5 structures, dynamic JSON-LD schema markup, automated XML sitemaps, OpenGraph social meta tags, and edge-rendered server-side caching for instant crawler indexing.",
      },
    ],
    structuredSection: {
      title: "STRUCTURED FOR SEARCH ENGINE VISIBILITY",
      description:
        "Smart optimization techniques to enhance reach online whilst keeping users engaged in an interesting layout. We implement modern, semantic code structures that make it simple for Google crawlers to index key business sections.",
      checklist: [
        "Responsive page structure",
        "Mobile-ready framework",
        "Fast-loading content",
        "Keyword-focused site structure",
        "Search-friendly coding",
        "Easy navigation flow",
        "Structured content placement",
        "Conversion-focused pages",
      ],
      whyChooseTitle: "WHY CHOOSE OWLIO WORKS?",
      whyChooseDesc:
        "The problem many companies face is having a website that looks good, but doesn't work. Creativity and Digital Strategy are the comfort of our team that is helping businesses to achieve measurable results.",
      whyChooseBullets: [
        "Business-focused solutions",
        "Performance-driven development",
        "Search optimized framework",
        "Customer-first approach",
        "Scalable digital platforms",
        "Professional project execution",
      ],
    },
  },
  {
    slug: "app-development",
    name: "App Development",
    category: "Development",
    tagline: "Cross-Platform iOS & Android Engineering",
    heroHeadline: "Native-Grade Mobile Experiences Built for",
    heroHighlight: "Millions of Users.",
    heroSubtitle:
      "We develop fluid, intuitive, and secure mobile applications for iOS and Android using React Native and Flutter, backed by resilient cloud infrastructure and offline-first data sync.",
    image: "/services/app_development.jpg",
    galleryImages: ["/image3.png", "/creative3.png", "/gro.png"],
    stats: [
      { value: "60 FPS", label: "Smooth Animation Fidelity" },
      { value: "4.8★", label: "Average App Store Rating" },
      { value: "1 Codebase", label: "Full iOS & Android Parity" },
      { value: "< 50ms", label: "API Sync Latency" },
    ],
    overview:
      "From consumer D2C mobile apps to enterprise field utilities, we engineer high-performance mobile experiences with buttery-smooth interactions, instant push notifications, and rock-solid offline reliability.",
    theChallenge:
      "Building separate native apps for iOS and Android is expensive and slow. Poorly built hybrid apps suffer from laggy frame rates, high battery consumption, and frequent crashes.",
    ourSolution:
      "We leverage production-hardened React Native and Flutter frameworks combined with native bridge modules to deliver 60 FPS performance, shared business logic, and rapid release cycles.",
    capabilities: [
      {
        title: "Cross-Platform iOS & Android Apps",
        description: "Unified cross-platform engineering that looks, feels, and performs like pure native code.",
        deliverables: ["Single Codebase Framework", "Native UI Component Bridges", "Biometric Authentication", "Deep Linking"],
      },
      {
        title: "Offline-First Data Synchronization",
        description: "Local databases (WatermelonDB / SQLite) that synchronize in real-time when connection is restored.",
        deliverables: ["Conflict Resolution", "Optimistic UI Updates", "Background Data Sync", "Encrypted Local Storage"],
      },
      {
        title: "In-App Subscriptions & Commerce",
        description: "Seamless Apple In-App Purchases, Google Play Billing, and payment gateway SDK integrations.",
        deliverables: ["RevenueCat Setup", "Receipt Validation", "Paywall Optimization", "One-Click Checkout"],
      },
      {
        title: "App Store Optimization & Release CI/CD",
        description: "Automated builds with Fastlane, TestFlight distribution, and App Store guidelines compliance.",
        deliverables: ["Fastlane Deployment Pipeline", "Crashlytics & Telemetry", "Automated Screenshot Generation", "Store Approval Prep"],
      },
    ],
    techStack: [
      "React Native",
      "Flutter",
      "TypeScript",
      "Expo",
      "Swift",
      "Kotlin",
      "Node.js",
      "Firebase",
      "RevenueCat",
      "Fastlane",
    ],
    processSteps: [
      {
        step: "01",
        title: "Mobile System Design & Flow Mapping",
        desc: "Designing ergonomic screen flows, state machines, and API contracts optimized for mobile devices.",
      },
      {
        step: "02",
        title: "Native Prototype & Micro-Interactions",
        desc: "Crafting gesture-driven interfaces, haptic feedback, and fluid transitions with Reanimated.",
      },
      {
        step: "03",
        title: "Backend Sync & Stress Testing",
        desc: "Integrating push notifications, offline caches, battery consumption profiling, and automated unit tests.",
      },
      {
        step: "04",
        title: "Store Submission & Launch Support",
        desc: "Managing Apple App Store and Google Play reviews with ongoing telemetry and hot-patch updates.",
      },
    ],
    caseStudies: [
      {
        title: "Lifestyle & VIP Hospitality Booking App",
        client: "Weekend Personality",
        impact: "Achieved 85,000 downloads in month 1 with 99.8% crash-free session stability.",
        image: "/creative7.png",
      },
    ],
    faqs: [
      {
        question: "Should we build with React Native or Native Swift/Kotlin?",
        answer:
          "For 95% of modern consumer and business apps, React Native or Flutter provides identical 60 FPS performance, cuts development time by half, and allows synchronized feature rollouts on both platforms.",
      },
      {
        question: "How do you handle offline functionality and data synchronization?",
        answer:
          "We engineer offline-first data systems using local encrypted databases (WatermelonDB/SQLite) with background sync engines that automatically resolve data conflicts when the device reconnects to the network.",
      },
      {
        question: "Can you assist with App Store and Google Play submission and approval?",
        answer:
          "Yes. We manage the entire store submission lifecycle—from generating compliance assets, privacy manifests, and TestFlight builds to resolving review inquiries and ensuring seamless public launch approval.",
      },
      {
        question: "How do you handle push notifications and user engagement tracking?",
        answer:
          "We integrate enterprise push notification engines (OneSignal, Firebase Cloud Messaging) with granular user segmentation, deep-linking, automated lifecycle triggers, and real-time analytics dashboards.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    category: "Development",
    tagline: "Resilient Infrastructure & Automated Pipelines",
    heroHeadline: "Cloud Infrastructure Engineered for Zero Downtime &",
    heroHighlight: "Uncapped Scale.",
    heroSubtitle:
      "We design, automate, and manage cloud environments on AWS and GCP with Terraform, Kubernetes, and automated CI/CD pipelines to guarantee high availability and reduced cloud spend.",
    image: "/services/cloud_devops.jpg",
    galleryImages: ["/gro.png", "/image4.png", "/studio-photo.png"],
    stats: [
      { value: "99.99%", label: "System Availability" },
      { value: "-40%", label: "Average Cloud Bill Reduction" },
      { value: "< 5 min", label: "Automated Deploy Cycle" },
      { value: "Zero", label: "Single Points of Failure" },
    ],
    overview:
      "Infrastructure should never be a bottleneck. We build self-healing, auto-scaling cloud infrastructure with Infrastructure-as-Code (IaC), zero-trust security perimeters, and continuous delivery pipelines.",
    theChallenge:
      "Unoptimized cloud setups bleed money, suffer from deployment downtime, and lack proactive alerting—meaning issues are discovered by users rather than engineers.",
    ourSolution:
      "We implement declarative Terraform configs, Kubernetes container orchestration, and automated CI/CD pipelines with comprehensive Grafana/Datadog monitoring and multi-region failovers.",
    capabilities: [
      {
        title: "Infrastructure as Code (IaC)",
        description: "Reproducible, version-controlled cloud environments managed through Terraform and Pulumi.",
        deliverables: ["Terraform Modules", "Multi-Environment Staging/Prod", "Automated Drift Detection", "State Locking"],
      },
      {
        title: "Containerization & Kubernetes",
        description: "Dockerized microservices deployed on managed Kubernetes (EKS / GKE) with auto-scaling pods.",
        deliverables: ["Helm Charts", "Ingress Controller Setup", "Horizontal Pod Autoscaling", "Service Mesh Networking"],
      },
      {
        title: "CI/CD Pipeline Automation",
        description: "GitHub Actions and GitLab CI workflows that run automated linting, test suites, and canary deployments.",
        deliverables: ["Zero-Downtime Blue/Green Deploys", "Automated Image Scanning", "Rollback Mechanisms", "Slack Deployment Bots"],
      },
      {
        title: "Cloud Cost Optimization & Security",
        description: "FinOps audits, reserved instance planning, and zero-trust IAM security frameworks.",
        deliverables: ["Cost Optimization Audits", "VPC & Security Groups Setup", "Secret Management with Vault", "Automated Daily Backups"],
      },
    ],
    techStack: [
      "AWS",
      "Google Cloud",
      "Terraform",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Datadog",
      "Prometheus",
      "Grafana",
      "PostgreSQL",
    ],
    processSteps: [
      {
        step: "01",
        title: "Infrastructure Audit & Cost Analysis",
        desc: "Inspecting current infrastructure, network topologies, bottlenecks, and security vulnerabilities.",
      },
      {
        step: "02",
        title: "IaC Blueprinting & Staging Setup",
        desc: "Writing modular Terraform scripts to spin up mirrored, isolated staging and production environments.",
      },
      {
        step: "03",
        title: "Pipeline Automation & Containerization",
        desc: "Building automated CI/CD deployment pipelines with automated security scans and smoke tests.",
      },
      {
        step: "04",
        title: "Live Migration & Observability",
        desc: "Zero-downtime DNS cutover with custom Datadog dashboards and automated PagerDuty on-call escalation.",
      },
    ],
    caseStudies: [
      {
        title: "Multi-Region Cloud Infrastructure for FinTech",
        client: "FinTech Scaleup",
        impact: "Cut monthly AWS cloud spend by 48% while increasing peak request throughput by 5x.",
        image: "/creative3.png",
      },
    ],
    faqs: [
      {
        question: "How do you handle zero-downtime deployments?",
        answer:
          "We use Blue/Green and Canary deployment strategies with Kubernetes and load balancers. Traffic is only shifted to new containers once health checks pass 100%.",
      },
      {
        question: "How do you help us reduce and optimize monthly AWS/GCP cloud costs?",
        answer:
          "We conduct comprehensive FinOps audits—identifying idle resources, rightsizing compute instances, implementing automated auto-scaling policies, and transitioning workloads to reserved instances or spot fleets for 30-50% savings.",
      },
      {
        question: "Can you migrate our on-premise or legacy servers to modern cloud infrastructure?",
        answer:
          "Yes. We engineer phased cloud migration blueprints using Infrastructure-as-Code (Terraform), containerizing legacy services with Docker and Kubernetes to ensure uninterrupted business operations throughout the migration.",
      },
      {
        question: "What monitoring, logging, and alert systems do you implement?",
        answer:
          "We configure centralized observability suites using Datadog, Prometheus, Grafana, and AWS CloudWatch with automated error telemetry, performance tracing, and 24/7 PagerDuty escalation policies.",
      },
    ],
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    category: "Development",
    tagline: "Strategic Technology Leadership & System Strategy",
    heroHeadline: "Fractional CTO & Strategic Guidance for",
    heroHighlight: "High-Growth Companies.",
    heroSubtitle:
      "We provide high-IQ technical guidance, technology stack reviews, technical due diligence, and roadmap execution to eliminate costly engineering mistakes and accelerate time-to-market.",
    image: "/services/it_consulting.jpg",
    galleryImages: ["/studio-photo.png", "/gro.png", "/image1.png"],
    stats: [
      { value: "100+", label: "Technology Audits Completed" },
      { value: "3x", label: "Faster Engineering Velocity" },
      { value: "Zero", label: "Vendor Lock-In Traps" },
      { value: "$2M+", label: "Client Technical Debt Saved" },
    ],
    overview:
      "Making the wrong technical decision early on can cost millions in rewrites. We act as your high-IQ technical advisors, guiding tech stack selection, scalability planning, team structuring, and security compliance.",
    theChallenge:
      "Founders and executives often face technical crossroads without unbiased, battle-tested expertise, leading to bloated vendor contracts and systems that fail to scale.",
    ourSolution:
      "We step in with objective, senior-level engineering experience to audit codebases, define technology strategy, optimize software licensing, and lead high-stakes technical implementations.",
    capabilities: [
      {
        title: "Fractional CTO & Technology Strategy",
        description: "Executive technical leadership without the overhead of a full-time hire.",
        deliverables: ["Engineering Roadmap", "Tech Stack Decision Matrices", "Vendor Evaluations", "Hiring & Team Audits"],
      },
      {
        title: "Technical Due Diligence",
        description: "In-depth code quality, security, and scalability audits for investors, M&A, and founders.",
        deliverables: ["Technical Assessment Report", "Security Risk Scoring", "Technical Debt Valuation", "Remediation Playbook"],
      },
      {
        title: "System Design & Scalability Planning",
        description: "Blueprints for high-load data pipelines, microservices, and database scaling.",
        deliverables: ["System Design Documents", "Capacity Planning Models", "Disaster Recovery Protocols", "API Standards"],
      },
    ],
    techStack: [
      "System Design",
      "Cloud Strategy",
      "Security Audits",
      "API Design",
      "FinOps",
      "Compliance (SOC2 / ISO)",
    ],
    processSteps: [
      {
        step: "01",
        title: "Deep Technical Assessment",
        desc: "Reviewing codebases, cloud infrastructure, team structure, and current operational bottlenecks.",
      },
      {
        step: "02",
        title: "Strategic Blueprint & Recommendations",
        desc: "Delivering an actionable roadmap prioritized by business impact, risk reduction, and velocity.",
      },
      {
        step: "03",
        title: "Hands-On Guidance & Review",
        desc: "Pair programming with leadership, reviewing PRs, and supervising mission-critical system shifts.",
      },
      {
        step: "04",
        title: "Continuous Governance & Milestones",
        desc: "Monthly system reviews, SLA benchmarking, and ongoing technical advisory support.",
      },
    ],
    caseStudies: [
      {
        title: "Enterprise Technology Transformation",
        client: "Global Logistics Network",
        impact: "Identified and resolved 43 critical bottlenecks before peak seasonal volume.",
        image: "/creative2.png",
      },
    ],
    faqs: [
      {
        question: "How does fractional CTO consulting work?",
        answer:
          "We integrate directly into your leadership meetings, Slack channels, and code review processes for a fixed weekly or monthly allocation, providing immediate executive-level engineering guidance.",
      },
      {
        question: "How do you assess technical debt and codebase health in existing systems?",
        answer:
          "We perform rigorous static code analysis, test coverage reviews, system dependency mapping, and security vulnerability scans to provide a prioritized technical remediation scorecard.",
      },
      {
        question: "Can you assist with technical due diligence for M&A or fundraising rounds?",
        answer:
          "Yes. We deliver comprehensive due diligence reports for venture capital firms and acquirers, assessing codebase scalability, IP risks, cloud infrastructure costs, and engineering team capabilities.",
      },
      {
        question: "How do you help our team choose the right tech stack for new products?",
        answer:
          "We evaluate your expected traffic scale, team expertise, time-to-market constraints, and long-term operating costs to recommend modern, vendor-neutral frameworks that avoid premature optimization and lock-in.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    category: "Design",
    tagline: "Conversion-Focused Product & Experience Design",
    heroHeadline: "Digital Product Experiences Engineered for",
    heroHighlight: "Maximum User Adoption.",
    heroSubtitle:
      "We design intuitive, high-converting digital products, web apps, and design systems in Figma that captivate users, lower churn, and turn complex workflows into delightful simplicity.",
    image: "/services/ui_ux_design.jpg",
    galleryImages: ["/creative5.png", "/image3.png", "/gro.png"],
    stats: [
      { value: "4.2x", label: "User Task Completion Rate" },
      { value: "65%", label: "Reduction in User Onboarding Drop-off" },
      { value: "100%", label: "Figma Tokenized Design Systems" },
      { value: "Pixel-Perfect", label: "Developer Handoff Specs" },
    ],
    overview:
      "Design is not just how it looks—it is how it converts. We fuse behavioral psychology, meticulous UX research, and cutting-edge visual aesthetics to design web and mobile interfaces that users love.",
    theChallenge:
      "Cluttered interfaces, confusing navigation, and inconsistent styling confuse prospective customers, drive high support tickets, and severely hurt conversion rates.",
    ourSolution:
      "We build user-tested wireframes, interactive prototypes, and modular design systems that make complex products effortless to understand and enjoyable to use.",
    capabilities: [
      {
        title: "SaaS & Web App UI/UX Design",
        description: "Dashboard structures, data visualizations, and ergonomic workflow interfaces.",
        deliverables: ["Figma Interactive Prototypes", "Component Design Libraries", "User Journey Maps", "Responsive Layouts"],
      },
      {
        title: "Design Systems & Token Frameworks",
        description: "Scalable design token systems (colors, typography, spacing) mapped 1:1 to Tailwind CSS and code.",
        deliverables: ["Figma Design System File", "Design Tokens JSON", "Component States & Variants", "Accessibility Guides (WCAG)"],
      },
      {
        title: "Conversion Rate UX Optimization",
        description: "Data-driven redesigns targeting checkout funnels, landing pages, and onboarding flows.",
        deliverables: ["Heuristic Usability Audits", "Friction Point Heatmaps", "A/B Test Design Variations", "Micro-Copy Optimization"],
      },
    ],
    techStack: [
      "Figma",
      "Design Tokens",
      "Tailwind CSS",
      "Framer",
      "Storybook",
      "Protopie",
      "WCAG 2.1 AA",
    ],
    processSteps: [
      {
        step: "01",
        title: "User Research & Information Hierarchy",
        desc: "Uncovering user pain points, competitor gaps, and structuring clean conceptual hierarchy.",
      },
      {
        step: "02",
        title: "Low-Fidelity Wireframing & Validation",
        desc: "Prototyping core task flows quickly to test usability before investing in visual polish.",
      },
      {
        step: "03",
        title: "High-Fidelity Visual Design & Polish",
        desc: "Applying brand identities, custom typography, micro-interactions, and dark/light modes.",
      },
      {
        step: "04",
        title: "Developer Handoff & Quality Assurance",
        desc: "Tokenized Figma exports, annotated spacing specs, and direct pairing with frontend engineers.",
      },
    ],
    caseStudies: [
      {
        title: "FinTech Trading Dashboard Overhaul",
        client: "QuantEdge Analytics",
        impact: "Cut onboarding time from 14 minutes down to 3 minutes, boosting trial conversions by 72%.",
        image: "/creative6.png",
      },
    ],
    faqs: [
      {
        question: "Do you provide Figma files ready for developers?",
        answer:
          "Yes. Our Figma files are built with strict Auto-Layout, variant properties, and tokenized variables directly matching frontend frameworks like Tailwind CSS for frictionless implementation.",
      },
      {
        question: "What is your design process from initial concept to final sign-off?",
        answer:
          "Our iterative design process spans discovery and user research, low-fidelity wireframing, clickable interactive Figma prototypes, usability testing, and final high-fidelity visual design tokenization.",
      },
      {
        question: "How do you validate design decisions and user experience before coding?",
        answer:
          "We conduct moderated and unmoderated user testing sessions with clickable Figma prototypes, mapping task completion times, confusion heatmaps, and qualitative feedback before engineering begins.",
      },
      {
        question: "Do you create full design systems and component libraries?",
        answer:
          "Yes. We engineer enterprise-grade design systems with modular component variants, strict auto-layout, typography hierarchies, and tokenized variables mapped directly to Tailwind CSS or React component libraries.",
      },
    ],
    structuredSection: {
      title: "STRUCTURED FOR USER CONVERSION & VISUAL IMPACT",
      description:
        "Smart UX optimization techniques to enhance user retention whilst keeping visitors engaged in an intuitive layout. We implement modern, tokenized design systems that make product interaction effortless across all device viewports.",
      checklist: [
        "Responsive component layout",
        "Mobile-first design system",
        "Frictionless user onboarding",
        "Conversion-focused wireframes",
        "High-contrast readability",
        "Intuitive navigation hierarchy",
        "Interactive micro-animations",
        "Developer-ready tokens",
      ],
      whyChooseTitle: "WHY CHOOSE OWLIO WORKS?",
      whyChooseDesc:
        "The problem many companies face is having an interface that looks artistic, but fails to convert. Creativity and UX engineering are the core focus of our team that is helping brands achieve scalable growth.",
      whyChooseBullets: [
        "User-centered product design",
        "Conversion-driven interfaces",
        "Tokenized Figma design systems",
        "Rapid high-fidelity prototyping",
        "Interactive micro-interactions",
        "Seamless engineering handoff",
      ],
    },
  },
  {
    slug: "seo-services",
    name: "SEO Services",
    category: "Marketing",
    tagline: "Algorithmic Search Dominance & Organic Revenue",
    heroHeadline: "Data-Driven Search Engine Optimization for",
    heroHighlight: "Sustainable Revenue.",
    heroSubtitle:
      "We engineer technical search frameworks, programmatic content engines, and high-authority link acquisition strategies that capture high-intent buyers and dominate Google, ChatGPT, and AI Search engines.",
    image: "/services/seo_services.jpg",
    galleryImages: ["/image1.png", "/creative5.png", "/gro.png"],
    stats: [
      { value: "100%", label: "Average Organic Traffic Growth" },
      { value: "#1", label: "Rankings for High-Intent Commercial Queries" },
      { value: "100%", label: "White-Hat Algorithmic Strategies" },
      { value: "AEO/GEO", label: "Optimized for AI Search & Gemini" },
    ],
    overview:
      "SEO is no longer just keywords and meta tags—it is a technical engineering discipline. We build high-authority organic pipelines that establish market authority and outpace algorithmic shifts.",
    theChallenge:
      "Traditional SEO agencies focus on vanity traffic metrics that fail to produce pipeline or revenue, while ignoring critical technical indexing and semantic content structures.",
    ourSolution:
      "We combine deep technical website audits, intent-based content silos, schema markup, and AI Engine Optimization (AEO/GEO) to position your brand as the definitive authority in your niche.",
    capabilities: [
      {
        title: "Technical SEO & Core Framework",
        description: "Resolving crawl budget, rendering issues, canonicalization, and Core Web Vitals performance.",
        deliverables: ["Complete Technical Crawl Audit", "JSON-LD Rich Schema Setup", "Dynamic XML Sitemaps", "Log File Analysis"],
      },
      {
        title: "Programmatic SEO & Content Silos",
        description: "Building scalable keyword frameworks and programmatic landing pages targeting long-tail queries.",
        deliverables: ["Topic Cluster Framework", "Programmatic Page Templates", "Semantic Keyword Mapping", "Entity Optimization"],
      },
      {
        title: "AI Search Optimization (AEO & GEO)",
        description: "Structuring authoritative content so ChatGPT, Gemini, and Google SGE cite your brand as the primary source.",
        deliverables: ["Knowledge Graph Seeding", "Direct-Answer Structuring", "Citation Network Building", "AI Search Tracking"],
      },
      {
        title: "High-Authority Digital PR & Backlinks",
        description: "Editorial outreach and data-driven studies that earn editorial backlinks from Tier-1 publications.",
        deliverables: ["Data-Led PR Campaigns", "High-DR Industry Backlinks", "Unlinked Brand Mention Reclamation", "Competitor Link Intersects"],
      },
    ],
    techStack: [
      "Ahrefs",
      "Semrush",
      "Screaming Frog",
      "Google Search Console",
      "Schema.org",
      "BrightEdge",
      "SurferSEO",
      "BigQuery",
    ],
    processSteps: [
      {
        step: "01",
        title: "Comprehensive Technical & Keyword Audit",
        desc: "Analyzing site structure, indexation bottlenecks, and lucrative high-intent competitor keywords.",
      },
      {
        step: "02",
        title: "Structural Remediation & Schema Setup",
        desc: "Fixing crawl errors, enhancing speed metrics, and implementing rich structured data across all templates.",
      },
      {
        step: "03",
        title: "Content Production & Cluster Execution",
        desc: "Publishing authoritative, expert-led content mapped directly to search intent and topic authority.",
      },
      {
        step: "04",
        title: "Authority Scaling & Revenue Tracking",
        desc: "Executing digital PR outreach and tying organic search traffic directly to closed CRM revenue.",
      },
    ],
    caseStudies: [
      {
        title: "B2B SaaS Organic Pipeline Multiplication",
        client: "Enterprise Cloud Analytics",
        impact: "Grew qualified monthly organic demo requests from 18 to 240+ within 9 months.",
        image: "/creative3.png",
      },
    ],
    faqs: [
      {
        question: "How long does it take to see tangible SEO results?",
        answer:
          "While technical fixes and quick-win keyword updates often produce indexation and ranking gains within 30 to 60 days, compounded revenue growth typically accelerates strongly between months 3 and 6.",
      },
      {
        question: "How do you optimize websites for AI Search engines like ChatGPT, Perplexity, and Gemini?",
        answer:
          "We structure your content for AI Engine Optimization (AEO/GEO) using direct-answer formatting, comprehensive entity schema, authoritative citation networks, and knowledge graph seeding so AI models cite your brand.",
      },
      {
        question: "What is your approach to white-hat backlink acquisition and digital PR?",
        answer:
          "We build authoritative editorial backlinks through proprietary industry studies, data-driven infographics, thought-leadership guest columns, and targeted digital PR outreach to high-domain-authority publications.",
      },
      {
        question: "How do you prevent search traffic drops during website redesigns or migrations?",
        answer:
          "We execute meticulous URL mapping, implement 1-to-1 301 redirects, preserve existing metadata and canonical tags, and monitor search console indexation daily post-launch to maintain existing ranking equity.",
      },
    ],
  },
  {
    slug: "google-ads",
    name: "Google Ads / PPC",
    category: "Marketing",
    tagline: "High-Intent Performance Advertising & ROAS",
    heroHeadline: "Paid Search Campaigns Engineered for Maximum",
    heroHighlight: "Return on Ad Spend.",
    heroSubtitle:
      "We design, manage, and scale high-converting Google Search, Performance Max, and YouTube ad campaigns with precision audience targeting, negative keyword sculpting, and conversion API tracking.",
    image: "/services/google_ads.jpg",
    galleryImages: ["/image4.png", "/creative6.png", "/hotel.png"],
    stats: [
      { value: "3.8x", label: "Average Client ROAS" },
      { value: "-35%", label: "Reduction in Cost Per Acquisition (CPA)" },
      { value: "$5M+", label: "Ad Spend Managed Profitably" },
      { value: "100%", label: "Server-Side Conversion Tracking" },
    ],
    overview:
      "Every dollar spent on paid search should produce measurable pipeline. We eliminate wasted ad spend through granular campaign structure, dedicated high-converting landing pages, and relentless A/B testing.",
    theChallenge:
      "Most Google Ads accounts waste 30-50% of their budget on broad irrelevant search queries, bad bidding algorithms, and sending traffic to slow, non-optimized homepages.",
    ourSolution:
      "We build tight Single-Theme Ad Groups (STAGs), implement exact negative keyword filters, setup First-Party Server-Side tracking, and build custom high-speed landing pages that convert clicks into buyers.",
    capabilities: [
      {
        title: "Google Search & Shopping (PMax)",
        description: "Capturing high-intent bottom-of-funnel buyers searching actively for your solutions.",
        deliverables: ["Account Structure Overhaul", "Negative Keyword Scrubbing", "Asset Group Optimization", "Product Feed Enhancement"],
      },
      {
        title: "Server-Side Conversion Tracking (CAPI)",
        description: "Enhanced conversion tracking configured with Google Tag Manager and Cloud Run to bypass ad-blockers.",
        deliverables: ["First-Party Data Pipelines", "Offline Conversion Imports", "Enhanced Conversions Setup", "GA4 Attribution Models"],
      },
      {
        title: "Bespoke PPC Landing Page Design",
        description: "Ultra-fast dedicated landing pages engineered specifically for high paid conversion rates.",
        deliverables: ["Custom Dynamic Headlines", "1-Step Lead Capture Forms", "A/B Split Testing", "Micro-Copy Friction Reductions"],
      },
    ],
    techStack: [
      "Google Ads",
      "Google Tag Manager",
      "Google Analytics 4",
      "Looker Dashboards",
      "Optmyzr",
      "Unbounce / Next.js",
    ],
    processSteps: [
      {
        step: "01",
        title: "Account & Conversion Audit",
        desc: "Identifying budget leaks, search query anomalies, and conversion tracking discrepancies.",
      },
      {
        step: "02",
        title: "Campaign Restructuring & Negative Keyword Matrix",
        desc: "Reorganizing into high-intent thematic clusters with strict bid strategies and quality score optimization.",
      },
      {
        step: "03",
        title: "Landing Page Creation & Conversion Tagging",
        desc: "Deploying high-converting dedicated pages with full Server-Side GTM attribution.",
      },
      {
        step: "04",
        title: "Daily Bid Optimization & Scaling",
        desc: "Pruning underperforming targets, scaling high-ROAS ad groups, and running weekly ad creative split tests.",
      },
    ],
    caseStudies: [
      {
        title: "National Hospitality Launch Paid Campaign",
        client: "Smokey Rooftop",
        impact: "Delivered 4.2x ROAS with over 3,200 direct reservation inquiries in 45 days.",
        image: "/creative1.png",
      },
    ],
    faqs: [
      {
        question: "Do you require long-term lock-in contracts?",
        answer:
          "No. We believe our performance should earn your business every month. We work on clear monthly retainer models with transparent weekly reporting.",
      },
      {
        question: "How do you prevent wasted ad spend on irrelevant search terms?",
        answer:
          "We employ strict Single-Theme Ad Groups (STAGs), rigorous negative keyword sculpting, daily search term audits, and exact-match bidding strategies to ensure your budget is spent exclusively on high-intent buyers.",
      },
      {
        question: "What is server-side conversion tracking and why is it necessary for Google Ads?",
        answer:
          "Server-side tagging streams conversion data directly from your cloud server to Google Ads, bypassing ad-blockers and browser cookie restrictions to restore 100% conversion attribution and improve smart bidding accuracy.",
      },
      {
        question: "Do you design custom landing pages for paid search campaigns?",
        answer:
          "Yes. We build ultra-fast, dedicated landing pages engineered specifically for high paid conversion rates, featuring dynamic headline insertion, persuasive micro-copy, and frictionless 1-step lead capture forms.",
      },
    ],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    category: "Marketing",
    tagline: "Scalable Paid Social & Creative Performance",
    heroHeadline: "High-Impact Meta Ad Campaigns That Drive Direct",
    heroHighlight: "Customer Acquisition.",
    heroSubtitle:
      "We scale Facebook and Instagram advertising through iterative creative testing, UGC production, custom audience segmentation, and Conversions API (CAPI) infrastructure.",
    image: "/services/meta_ads.jpg",
    galleryImages: ["/creative7.png", "/image2.png", "/wed.png"],
    stats: [
      { value: "4.5x", label: "Top Funnel ROAS" },
      { value: "50+", label: "Creative Variations Tested Monthly" },
      { value: "9.2/10", label: "Meta Event Quality Match Score" },
      { value: "$10M+", label: "Generated in Client Revenue" },
    ],
    overview:
      "Creative is the new targeting on Meta. We produce high-converting video ads, static carousels, and compelling hooks combined with scientific media buying to scale customer acquisition profitably.",
    theChallenge:
      "Ad fatigue, iOS tracking restrictions, and boring generic creative cause customer acquisition costs (CAC) to skyrocket on Facebook and Instagram.",
    ourSolution:
      "We establish a continuous creative production engine, test dozens of distinct hooks each month, and install Meta Conversions API (CAPI) on dedicated cloud endpoints to restore maximum tracking fidelity.",
    capabilities: [
      {
        title: "High-Performance Creative Production",
        description: "Direct-response video ads, UGC creator content, and visual carousel assets engineered for high thumb-stop rates.",
        deliverables: ["Video Hook Variations", "Static Ad Carousels", "UGC Creator Scripting", "Dynamic Creative Testing (DCT)"],
      },
      {
        title: "Meta Conversions API (CAPI) Integration",
        description: "Server-side event streaming that captures 100% of purchase and lead data despite ad blockers.",
        deliverables: ["AWS / Cloud Run Gateway", "Event Deduplication", "Advanced Matching Data", "Custom Conversion Events"],
      },
      {
        title: "Full-Funnel Campaign Scaling",
        description: "Broad targeting with Advantage+ campaigns, retargeting funnels, and customer lifetime value optimization.",
        deliverables: ["Advantage+ Setup", "Lookalike Modeling", "LTV Retention Loops", "Cross-Selling Sequences"],
      },
    ],
    techStack: [
      "Meta Ads Manager",
      "Meta CAPI",
      "Figma",
      "Adobe Premiere / After Effects",
      "Triple Whale",
      "Northbeam",
    ],
    processSteps: [
      {
        step: "01",
        title: "Customer Persona & Creative Research",
        desc: "Analyzing customer reviews, competitor ads, and top buying motivations to build a creative angle bank.",
      },
      {
        step: "02",
        title: "Creative Batching & CAPI Infrastructure",
        desc: "Producing 20+ hook and visual variations while configuring server-side tracking pipelines.",
      },
      {
        step: "03",
        title: "Dynamic Creative Testing (DCT)",
        desc: "Isolating winning hooks, headlines, and call-to-actions with statistical significance.",
      },
      {
        step: "04",
        title: "Scale Winning Ads & Audience Refresh",
        desc: "Scaling winning creative into primary budget pools while iterating fresh creative variations weekly.",
      },
    ],
    caseStudies: [
      {
        title: "Craft Beverage Direct Acquisition Campaign",
        client: "Berry Basil Lady",
        impact: "Scaled monthly ad spend from $5k to $65k while maintaining a 3.9x blended ROAS.",
        image: "/creative6.png",
      },
    ],
    faqs: [
      {
        question: "How often do you refresh ad creatives?",
        answer:
          "We produce and launch new creative batches weekly or bi-weekly to proactively combat ad fatigue and continually lower customer acquisition costs.",
      },
      {
        question: "How do you combat iOS tracking limitations and data loss on Facebook & Instagram?",
        answer:
          "We configure the Meta Conversions API (CAPI) on dedicated cloud endpoints with automatic event deduplication and advanced customer matching, restoring full attribution fidelity and lowering customer acquisition costs.",
      },
      {
        question: "What types of ad creatives do you produce for paid social campaigns?",
        answer:
          "We script, design, and edit high-converting direct-response video ads, user-generated content (UGC), high-retention motion graphics, and editorial product carousels tested with varying hooks and angles.",
      },
      {
        question: "How do you scale ad spend without driving up Cost Per Acquisition (CPA)?",
        answer:
          "We use systematic Dynamic Creative Testing (DCT) to identify statistically validated winning combinations of hooks, visuals, and copy, gradually scaling winning assets into broad Advantage+ budget pools.",
      },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media Marketing",
    category: "Marketing",
    tagline: "Organic Community Building & Brand Buzz",
    heroHeadline: "Organic Social Media That Builds Brand Equity &",
    heroHighlight: "Active Advocates.",
    heroSubtitle:
      "We craft compelling social narratives, high-engagement short-form videos (Reels & Shorts), and community engagement strategies that turn casual followers into loyal brand evangelists.",
    image: "/services/social_media.jpg",
    galleryImages: ["/creative1.png", "/creative4.png", "/hotel.png"],
    stats: [
      { value: "5.8M+", label: "Organic Social Impressions" },
      { value: "+320%", label: "Average Engagement Rate Growth" },
      { value: "Daily", label: "Community Management" },
      { value: "Viral", label: "Short-Form Video Production" },
    ],
    overview:
      "Social media is your brand’s daily conversation with the world. We combine culture-first creative, authentic community interaction, and data-backed content calendars to elevate your brand presence.",
    theChallenge:
      "Posting generic corporate stock graphics leads to zero engagement, low reach, and wasted internal marketing resources.",
    ourSolution:
      "We design bespoke social visual identities, shoot and edit captivating short-form video content, and proactively engage in trending industry conversations to drive real affinity.",
    capabilities: [
      {
        title: "Short-Form Video Production (Reels & TikTok)",
        description: "End-to-end scripting, shooting, editing, and publishing for viral reach and audience retention.",
        deliverables: ["Weekly Video Batches", "Custom Sound Design", "Captions & Hooks", "Trend Analysis"],
      },
      {
        title: "Visual Brand Identity & Carousel Design",
        description: "Striking editorial carousels and visual assets aligned with modern aesthetic standards.",
        deliverables: ["Editorial Grid Layouts", "Infographic Carousels", "Story Templates", "Brand Asset Toolkits"],
      },
      {
        title: "Community Management & Influencer Outreach",
        description: "Active comment moderation, direct message engagement, and micro-influencer product seeding.",
        deliverables: ["Daily Response Management", "Influencer Roster Building", "Product Seeding Campaigns", "Sentiment Tracking"],
      },
    ],
    techStack: [
      "Instagram",
      "LinkedIn",
      "TikTok",
      "YouTube Shorts",
      "Figma",
      "Adobe After Effects",
      "Sprout Social",
    ],
    processSteps: [
      {
        step: "01",
        title: "Social Brand Strategy & Pillars",
        desc: "Defining unique brand voice, visual aesthetics, and 4-5 high-performing content pillars.",
      },
      {
        step: "02",
        title: "Monthly Content Calendar & Production",
        desc: "Batch shooting and designing 30 days of high-quality assets with client review workflows.",
      },
      {
        step: "03",
        title: "Daily Publishing & Community Moderation",
        desc: "Strategic scheduling, hashtag research, and actively interacting with prospects in comment sections.",
      },
      {
        step: "04",
        title: "Performance Analytics & Iteration",
        desc: "Monthly analytics reports tracking saves, shares, inbound inquiries, and follower growth.",
      },
    ],
    caseStudies: [
      {
        title: "Viral Dining Experiential Campaign",
        client: "Pasta Delizioso",
        impact: "Generated 2.8M views on Instagram Reels and grew organic followers by +18,000 in 3 months.",
        image: "/creative4.png",
      },
    ],
    faqs: [
      {
        question: "Do you handle shooting and video editing?",
        answer:
          "Yes! We handle the entire creative pipeline—from conceptual scripting and on-location shooting to high-energy motion editing and audio mastering.",
      },
      {
        question: "How do you develop a consistent brand voice and visual aesthetic across social channels?",
        answer:
          "We establish comprehensive social brand guidelines covering visual moodboards, typographic styles, color palettes, tone-of-voice playbooks, and 4-5 high-performing content pillars tailored to your target demographic.",
      },
      {
        question: "How do you measure ROI and business impact from organic social media?",
        answer:
          "We track meaningful business KPIs including website referral traffic, qualified direct message inquiries, audience retention rates, saves, shares, and assisted conversion value rather than superficial follower metrics.",
      },
      {
        question: "How do you manage community engagement and customer comments?",
        answer:
          "Our dedicated community managers monitor your social feeds daily—responding promptly to inquiries, sparking thoughtful conversations, moderating comments, and escalating customer service tickets in real time.",
      },
    ],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    category: "Marketing",
    tagline: "Thought Leadership & High-Intent Conversion Content",
    heroHeadline: "Authoritative Content That Educates, Ranks, and",
    heroHighlight: "Converts Buyers.",
    heroSubtitle:
      "We produce in-depth technical whitepapers, SEO-optimized articles, case studies, and editorial journalism that position your leadership as industry titans and drive inbound enterprise deals.",
    image: "/services/content_marketing.jpg",
    galleryImages: ["/image1.png", "/hotel.png", "/creative3.png"],
    stats: [
      { value: "100%", label: "Subject-Matter Expert Written" },
      { value: "3.2x", label: "Longer Average Time on Page" },
      { value: "#1", label: "Thought Leadership Authority" },
      { value: "Zero", label: "Generic AI Fluff" },
    ],
    overview:
      "In a world flooded with shallow AI-generated text, insightful and well-researched content wins. We produce deeply researched articles, case studies, and industry playbooks that earn backlinks and build buyer trust.",
    theChallenge:
      "Generic content fails to rank, fails to demonstrate expertise, and bounces visitors immediately without capturing leads.",
    ourSolution:
      "We employ technical writers and subject matter researchers to create high-value content with original diagrams, data charts, and actionable frameworks that readers bookmark and share.",
    capabilities: [
      {
        title: "Thought Leadership & Industry Playbooks",
        description: "Comprehensive guides and strategic industry essays that establish market dominance.",
        deliverables: ["Long-Form Editorial Guides", "Original Infographics", "Executive Ghostwriting", "PDF Whitepapers"],
      },
      {
        title: "Customer Case Studies & Stories",
        description: "Story-driven customer transformation stories complete with metrics, quotes, and visual assets.",
        deliverables: ["Customer Interviews", "Formatted Case Study Pages", "PDF Sales One-Pagers", "Video Case Study Scripts"],
      },
      {
        title: "SEO-Led Content Hubs",
        description: "Interlinked knowledge bases and programmatic content hubs designed for search engines and humans.",
        deliverables: ["Topic Cluster Content", "Glossaries & Calculators", "Internal Link Structure", "Conversion CTAs"],
      },
    ],
    techStack: [
      "Notion",
      "SurferSEO",
      "Grammarly Enterprise",
      "Figma (Infographics)",
      "Clearscope",
      "Google Docs",
    ],
    processSteps: [
      {
        step: "01",
        title: "Topic Ideation & SME Interviews",
        desc: "Interviewing your internal subject matter experts to extract proprietary insights and real-world data.",
      },
      {
        step: "02",
        title: "In-Depth Research & Drafting",
        desc: "Writing comprehensive, engaging drafts complete with custom charts, code snippets, and diagrams.",
      },
      {
        step: "03",
        title: "Editing, SEO Optimization & Layout",
        desc: "Refining tone, checking semantic keyword coverage, and designing rich visual pull-quotes.",
      },
      {
        step: "04",
        title: "Publishing & Multi-Channel Repurposing",
        desc: "Publishing to CMS and slicing the article into LinkedIn carousels, newsletters, and Twitter threads.",
      },
    ],
    caseStudies: [
      {
        title: "B2B Cloud Infrastructure Playbook",
        client: "DevOps Infrastructure Firm",
        impact: "Shared by 1,400+ senior engineers, driving 35 enterprise RFP inquiries.",
        image: "/creative3.png",
      },
    ],
    faqs: [
      {
        question: "Do you write technical and complex B2B topics?",
        answer:
          "Yes. Our content team specializes in B2B SaaS, FinTech, cloud infrastructure, and technical domains, ensuring every piece reflects deep domain accuracy.",
      },
      {
        question: "How do you ensure content is original, accurate, and free of generic AI fluff?",
        answer:
          "Our content is crafted by experienced technical writers who conduct 1-on-1 interviews with your internal subject-matter experts, integrating proprietary data, custom diagrams, and real-world case studies.",
      },
      {
        question: "How do you repurpose long-form content across multiple marketing channels?",
        answer:
          "Every cornerstone article or whitepaper is sliced into high-engagement LinkedIn carousel decks, Twitter/X threads, executive newsletter snippets, and downloadable lead-magnet PDFs to maximize content ROI.",
      },
      {
        question: "How do you align content strategy with pipeline revenue rather than just pageviews?",
        answer:
          "We map content topics directly to buyer search intent stages—creating problem-aware educational guides, product comparison tables, and customer case studies designed to drive demo bookings and sales inquiries.",
      },
    ],
  },
  {
    slug: "local-seo-gmb",
    name: "Local SEO & GMB",
    category: "Marketing",
    tagline: "Local Map Pack Dominance & Foot Traffic",
    heroHeadline: "Dominate Google Maps & Drive Local High-Intent",
    heroHighlight: "Customer Footfall.",
    heroSubtitle:
      "We optimize Google Business Profiles (GMB), local citation networks, localized landing pages, and geo-targeted schema markup to capture top 3 Map Pack rankings and phone calls.",
    image: "/services/local_seo_gmb.jpg",
    galleryImages: ["/hotel.png", "/gro.png", "/creative1.png"],
    stats: [
      { value: "Top 3", label: "Google Map Pack Placements" },
      { value: "+180%", label: "Direct Phone Call Actions" },
      { value: "100%", label: "NAP Citation Consistency" },
      { value: "5★", label: "Reputation Review Strategy" },
    ],
    overview:
      "When customers search for local services, 70% of clicks go to the Google Map 3-Pack. We optimize your local presence to guarantee your business appears first when nearby buyers search.",
    theChallenge:
      "Inconsistent NAP (Name, Address, Phone) citations, unoptimized GMB categories, and sparse review generation cause local businesses to lose customers to competitors.",
    ourSolution:
      "We execute a complete local optimization program: geotagged photos, weekly GMB posts, citation cleanup across 80+ directories, review automation, and local geo-landing pages.",
    capabilities: [
      {
        title: "Google Business Profile Optimization",
        description: "Optimizing primary/secondary categories, product catalogs, service menus, and geotagged imagery.",
        deliverables: ["GMB Category Tuning", "Weekly Posts & Promotions", "Q&A Pre-seeding", "Service Area Mapping"],
      },
      {
        title: "Local Citations & Directory Sync",
        description: "Claiming and synchronizing consistent NAP listings across Yelp, Apple Maps, Bing, and local portals.",
        deliverables: ["80+ Directory Listings", "Duplicate Listing Suppression", "NAP Verification", "Local Data Aggregators"],
      },
      {
        title: "Geo-Targeted Landing Pages & Schema",
        description: "Building dedicated local city/neighborhood landing pages with LocalBusiness structured data.",
        deliverables: ["City Landing Pages", "LocalBusiness JSON-LD", "Embedded Google Maps", "Local Testimonial Blocks"],
      },
    ],
    techStack: [
      "Google Business Profile",
      "BrightLocal",
      "Whitespark",
      "Schema.org",
      "Google Maps API",
    ],
    processSteps: [
      {
        step: "01",
        title: "Local Presence & Competitor Audit",
        desc: "Auditing current rankings, citation inconsistencies, and local competitor ranking factors.",
      },
      {
        step: "02",
        title: "GMB Optimization & Category Alignment",
        desc: "Overhauling profile descriptions, uploading high-res photos, and populating complete service menus.",
      },
      {
        step: "03",
        title: "Citation Cleanup & Review Generation System",
        desc: "Standardizing listings across all major directories and installing automated review request flows.",
      },
      {
        step: "04",
        title: "Geo-Grid Rank Tracking & Optimization",
        desc: "Monitoring local rankings across exact neighborhood coordinates and adjusting keywords weekly.",
      },
    ],
    caseStudies: [
      {
        title: "Multi-Location Luxury Lounge GMB Optimization",
        client: "Smokey Hospitality",
        impact: "Captured #1 Map Pack rankings across 4 metro regions, increasing direct map directions by +310%.",
        image: "/creative1.png",
      },
    ],
    faqs: [
      {
        question: "Can you manage multiple locations across different cities?",
        answer:
          "Yes. We specialize in both single-location authority and multi-location enterprise chains with centralized reporting and location-specific optimization.",
      },
      {
        question: "How long does it take to rank in Google's local 3-Pack Map results?",
        answer:
          "With complete profile optimization, category alignment, citation standardization, and targeted local review acquisition, businesses typically see significant Map Pack ranking improvements within 30 to 90 days.",
      },
      {
        question: "How do you handle NAP (Name, Address, Phone) citation consistency?",
        answer:
          "We audit and synchronize your business information across 80+ authoritative local directories, aggregators, and map networks (Google, Apple Maps, Bing, Yelp), automatically suppressing duplicate or incorrect listings.",
      },
      {
        question: "What is your strategy for generating authentic positive customer reviews?",
        answer:
          "We implement automated SMS and email review request workflows, QR code review cards for physical storefronts, and proactive review monitoring with custom response templates that enhance local search authority.",
      },
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Systems",
    category: "Security",
    tagline: "Zero-Trust Security & Threat Defense",
    heroHeadline: "Fortify Your Digital Infrastructure Against Modern",
    heroHighlight: "Cyber Threats.",
    heroSubtitle:
      "We conduct penetration testing, cloud vulnerability assessments, OWASP compliance auditing, and secure infrastructure engineering to protect your proprietary data and customer trust.",
    image: "/services/cybersecurity.jpg",
    galleryImages: ["/image1.png", "/hotel.png", "/gro.png"],
    stats: [
      { value: "Zero", label: "Security Breaches on Client Systems" },
      { value: "OWASP", label: "Top 10 Compliant Code Audits" },
      { value: "24/7", label: "Automated Threat Monitoring" },
      { value: "SOC2 / ISO", label: "Audit Readiness Preparation" },
    ],
    overview:
      "Security is not an afterthought—it is foundational. We engineer multi-layered security defenses across web apps, APIs, cloud environments, and internal company workflows.",
    theChallenge:
      "Cyberattacks and automated bot attacks are more sophisticated than ever. Unpatched dependencies, open API endpoints, and weak authentication can ruin business reputations overnight.",
    ourSolution:
      "We perform rigorous white-hat penetration tests, set up Web Application Firewalls (WAF), enforce zero-trust authentication, and secure your CI/CD pipelines.",
    capabilities: [
      {
        title: "Web Application & API Penetration Testing",
        description: "Simulating real-world cyberattacks to uncover vulnerabilities in business logic, auth, and data stores.",
        deliverables: ["Full Pen-Test Report", "Vulnerability Severity Matrix", "Step-by-Step Remediation Guides", "Post-Fix Re-testing"],
      },
      {
        title: "Cloud Security & Zero-Trust Infrastructure",
        description: "Hardening AWS and GCP perimeters with IAM least-privilege policies, VPC peering, and KMS encryption.",
        deliverables: ["IAM Policy Audit", "KMS Encryption at Rest", "WAF Rules & Rate Limiting", "DDoS Mitigation Layer"],
      },
      {
        title: "Compliance & SOC2 Readiness",
        description: "Preparing your infrastructure, policies, and engineering practices for SOC2 Type II and ISO 27001 audits.",
        deliverables: ["Security Policy Documentation", "Audit Evidence Collection", "Automated Compliance Monitoring", "Vendor Risk Assessments"],
      },
    ],
    techStack: [
      "OWASP ZAP",
      "Burp Suite",
      "Cloudflare Enterprise WAF",
      "AWS GuardDuty",
      "HashiCorp Vault",
      "Snyk",
      "Trivy",
    ],
    processSteps: [
      {
        step: "01",
        title: "Threat Modeling & Surface Mapping",
        desc: "Mapping all external endpoints, cloud resources, data pipelines, and third-party dependencies.",
      },
      {
        step: "02",
        title: "Active Penetration Testing & Vulnerability Scan",
        desc: "Executing automated scans and manual exploit tests to uncover critical security vulnerabilities.",
      },
      {
        step: "03",
        title: "Remediation & Hardening Implementation",
        desc: "Patching code vulnerabilities, tightening firewall rules, and enforcing strict cryptographic standards.",
      },
      {
        step: "04",
        title: "Continuous Observability & Monitoring",
        desc: "Installing automated secret scanners, SIEM log monitoring, and real-time security alert triggers.",
      },
    ],
    caseStudies: [
      {
        title: "Enterprise FinTech API Hardening",
        client: "Global Payments Platform",
        impact: "Achieved 100% SOC2 Type II compliance audit pass with zero critical findings.",
        image: "/creative2.png",
      },
    ],
    faqs: [
      {
        question: "How often should an enterprise perform security penetration testing?",
        answer:
          "We recommend quarterly penetration tests or immediately following major software releases and significant infrastructure changes.",
      },
      {
        question: "What is the difference between automated vulnerability scanning and manual penetration testing?",
        answer:
          "Automated scanners check for known CVE signatures, while our manual penetration testers simulate real-world human adversary tactics to uncover complex business logic flaws, authorization bypasses, and chained exploits.",
      },
      {
        question: "Can you help our company achieve SOC2 Type II or ISO 27001 compliance?",
        answer:
          "Yes. We guide organizations through end-to-end audit readiness—establishing security policies, configuring access control boundaries, automating continuous compliance monitoring, and assembling audit evidence packages.",
      },
      {
        question: "How do you secure cloud infrastructure and API endpoints against data breaches?",
        answer:
          "We enforce zero-trust security perimeters, least-privilege IAM policies, Web Application Firewall (WAF) rate-limiting rules, KMS database encryption, and automated secret detection across your CI/CD pipelines.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return allServices.find((s) => s.slug === slug);
}
