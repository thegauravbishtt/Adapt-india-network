import { ServiceDetail } from "./servicesData";

export const telecomServices: ServiceDetail[] = [
  {
    slug: "smart-internet-ill",
    name: "Smart Internet (ILL)",
    category: "Network & Connectivity",
    tagline: "Carrier-Grade Dedicated Leased Line with 99.999% SLA",
    heroHeadline: "Enterprise Internet Leased Line (ILL) Built for",
    heroHighlight: "Uninterrupted Operations.",
    heroSubtitle:
      "1:1 dedicated, uncompressed symmetrical bandwidth engineered for zero packet loss, sub-15ms inter-metro latency, cloud-based DDoS scrubbing, and 24/7/365 proactive NOC monitoring.",
    image: "/banner-datacenter-racks.jpg",
    galleryImages: ["/banner-network-matrix.jpg", "/banner-servers-lights.jpg", "/banner-global-telecom.jpg"],
    stats: [
      { value: "99.999%", label: "Guaranteed SLA Uptime" },
      { value: "1:1", label: "Symmetric Bandwidth (No Contention)" },
      { value: "< 15ms", label: "Pan-India Tier-1 Latency" },
      { value: "< 4 Hours", label: "Mean Time to Restore (MTTR)" },
    ],
    overview:
      "Modern enterprises run on mission-critical cloud applications, real-time transaction processing, and synchronized data pipelines. Adapt India Network's Smart Internet Leased Line (ILL) delivers dedicated carrier-grade connectivity terminated over redundant optical fiber rings directly into your server room or data center.",
    theChallenge:
      "Shared broadband connections suffer from unpredictable peak-hour throttling, high packet jitter, asymmetrical upload speeds, and sluggish response times that cripple VoIP, video conferencing, and multi-cloud database syncs.",
    ourSolution:
      "We provide unshared, strictly 1:1 symmetrical bandwidth backed by end-to-end Service Level Agreements (SLAs). Our dual-homed BGP routing and automated last-mile optical fiber failover guarantee that your enterprise stays connected around the clock.",
    capabilities: [
      {
        title: "1:1 Dedicated Symmetrical Bandwidth",
        description: "Zero contention ratio. What you pay for is 100% reserved exclusively for your network traffic.",
        deliverables: [
          "Port speeds from 10 Mbps up to 10 Gbps",
          "Equal upload and download throughput",
          "Carrier Ethernet (802.1Q) SFP/RJ45 handoff",
          "Burstable on-demand bandwidth options",
        ],
      },
      {
        title: "Dual-Path Redundant Fiber Ring",
        description: "Protected last-mile fiber routing entering your premises via diverse physical paths to avoid backhoe cuts.",
        deliverables: [
          "Automatic sub-50ms optical switchover",
          "Dual-homed BGP-4 routing across upstream Tier-1 telcos",
          "Secondary cellular 4G/5G backup failover",
          "No single point of failure (N+1 redundancy)",
        ],
      },
      {
        title: "Cloud DDoS Mitigation & Clean Pipe",
        description: "Real-time automated packet scrubbing to filter volumetric DDoS attacks before they reach your gateway.",
        deliverables: [
          "Multi-terabit volumetric traffic scrubbing",
          "Always-on heuristic threat detection",
          "Zero latency penalty for legitimate packets",
          "Real-time SOC attack telemetry dashboard",
        ],
      },
      {
        title: "Enterprise IP Subnets & DNS Management",
        description: "Dedicated static public IPv4 and IPv6 pools with reverse DNS delegation and enterprise routing control.",
        deliverables: [
          "Public IPv4 allocation (/29, /28, /27 or custom)",
          "Dual-stack native IPv6 address space",
          "BGP peering with your existing ASN",
          "Custom rDNS & PTR record management",
        ],
      },
    ],
    techStack: [
      "Optical Fiber (Single Mode)",
      "BGP-4 Multi-Homed Routing",
      "Cisco ASR 9000 & Catalyst",
      "Juniper MX Series",
      "IPv4 & IPv6 Dual-Stack",
      "IEEE 802.1Q VLAN Tagging",
      "Anti-DDoS Scrubbing Cloud",
      "SNMPv3 Telemetry Monitoring",
      "24/7/365 L3 NOC Support",
      "MEF 3.0 Certified Carrier",
    ],
    processSteps: [
      {
        step: "01",
        title: "Site Survey & Last-Mile Feasibility",
        desc: "Our field engineering team audits your facility, verifies optical fiber trenching routes, and designs redundant lead-in paths.",
      },
      {
        step: "02",
        title: "Optical Fiber Pull & Termination",
        desc: "Dedicated single-mode fiber is blown into your server room, spliced into rack-mounted ODFs, and terminated on carrier switches.",
      },
      {
        step: "03",
        title: "RFC 2544 / Y.1564 Throughput Benchmarking",
        desc: "Rigorous 24-hour soak testing measuring throughput, round-trip latency, jitter, and frame loss before official hand-off.",
      },
      {
        step: "04",
        title: "Live Activation & 24/7 NOC Monitoring",
        desc: "Integration with Adapt India Network's 24/7/365 NOC dashboard with automated SNMP polling and instant escalation lines.",
      },
    ],
    caseStudies: [
      {
        title: "Pan-India FinTech Transaction Hub",
        client: "Leading Payment Gateway & Banking Partner",
        impact: "Zero downtime across 180M monthly payment transactions with sub-12ms inter-city latency.",
        image: "/banner-datacenter-racks.jpg",
      },
      {
        title: "Multi-Campus Healthcare Network",
        client: "Apex Hospital Consortium",
        impact: "Seamless real-time DICOM MRI file sync and telemedicine streaming across 14 hospitals.",
        image: "/banner-servers-lights.jpg",
      },
    ],
    faqs: [
      {
        question: "What is the difference between an Internet Leased Line (ILL) and regular broadband?",
        answer:
          "Regular broadband is a shared connection with contention ratios up to 1:30 and asymmetrical speeds (fast download, slow upload). An Internet Leased Line (ILL) is a 100% dedicated, unshared, 1:1 symmetrical connection backed by financial SLAs guaranteeing 99.999% uptime and <4 hour MTTR.",
      },
      {
        question: "How fast is the installation and commissioning turnaround?",
        answer:
          "For on-net buildings (where Adapt India fiber already exists), commissioning is completed in 3 to 5 business days. For greenfield sites requiring fiber trenching, typical deployment takes 10 to 14 business days with temporary 4G/5G bonding provided in the interim.",
      },
      {
        question: "How does the 99.999% SLA uptime guarantee work?",
        answer:
          "Our SLA is backed by contractual service credits. If availability drops below 99.999% or if round-trip latency / packet loss exceeds specified thresholds, credit penalties are automatically deducted from your billing cycle.",
      },
      {
        question: "Do you provide static public IP addresses?",
        answer:
          "Yes. Every ILL circuit includes a dedicated static IPv4 subnet (/29 with 5 usable IPs by default, expandable to /28 or /27 upon justification) along with native IPv6 dual-stack allocation.",
      },
      {
        question: "Can we peer using our own Autonomous System Number (ASN) and BGP?",
        answer:
          "Yes. We support standard BGP-4 peering. You can announce your enterprise IP prefixes, receive default or full Internet routing tables, and establish multi-homed BGP sessions across our Tier-1 upstream peers.",
      },
    ],
    structuredSection: {
      title: "TIER-1 ENTERPRISE INTERNET LEASED LINE INFRASTRUCTURE",
      description:
        "Engineered for modern high-throughput workloads, cloud synchronization, and real-time operations requiring zero latency spikes.",
      checklist: [
        "1:1 Dedicated Symmetrical Speed",
        "99.999% Availability Financial SLA",
        "Dual Last-Mile Physical Fiber Paths",
        "Proactive 24/7/365 NOC Surveillance",
        "Sub-15ms Inter-Metro Round Trip Time",
        "Cloud Anti-DDoS Packet Scrubbing",
        "Static IPv4 & IPv6 Dual-Stack Included",
        "Enterprise MEF 3.0 Carrier Grade",
      ],
      whyChooseTitle: "WHY ADAPT INDIA NETWORK ILL?",
      whyChooseDesc:
        "We are not a reseller. Adapt India Network operates direct optical fiber infrastructure interconnected with India's premier Tier-1 backbones, ensuring low-hop routing and direct peering at NIXI and major cloud exchanges.",
      whyChooseBullets: [
        "100+ Metro Cities Covered Nationwide",
        "Direct On-Ramps to AWS, Azure, Google Cloud",
        "Carrier-Class Cisco & Juniper Hardware",
        "Dedicated Enterprise Account Manager & L3 NOC",
        "Transparent Real-Time MRTG / SNMP Portal",
        "Custom Burstable Bandwidth Contracts",
      ],
    },
  },

  {
    slug: "smartflo-sd-wan",
    name: "Smartflo SD-WAN Solutions",
    category: "Network & Connectivity",
    tagline: "Intelligent Multi-Cloud Traffic Steering & Zero-Trust Edge Security",
    heroHeadline: "Next-Gen Software-Defined WAN Engineered for",
    heroHighlight: "Agile Multi-Cloud Enterprises.",
    heroSubtitle:
      "Centralized cloud orchestration, automated multi-link traffic steering (ILL + MPLS + 4G/5G), application-aware QoS, and integrated zero-trust security perimeters for modern distributed workforces.",
    image: "/services/sdwan_clean.jpg",
    galleryImages: ["/network-sdwan.png", "/banner-network-matrix.jpg", "/banner-datacenter-racks.jpg"],
    stats: [
      { value: "40%", label: "Average WAN Cost Savings" },
      { value: "99.999%", label: "Multi-Link Network Uptime" },
      { value: "< 50ms", label: "Sub-Second Link Failover" },
      { value: "Zero-Touch", label: "Rapid Branch Provisioning" },
    ],
    overview:
      "Legacy hub-and-spoke WAN architectures route all branch cloud traffic back through corporate data centers, causing bandwidth bottlenecks and high latency. Adapt India Network's Smartflo SD-WAN decouples network hardware from software control, enabling intelligent dynamic routing across multiple transport links directly to SaaS and cloud environments.",
    theChallenge:
      "Enterprises managing multiple retail branches, regional offices, and cloud workloads struggle with expensive MPLS circuits, complicated router CLI configurations, slow site turnarounds, and lack of application performance visibility.",
    ourSolution:
      "Smartflo SD-WAN aggregates your existing fiber, broadband, and cellular connections into a single resilient virtual fabric. Traffic is steered in real-time based on jitter, packet loss, and application priority, guaranteeing flawless Zoom calls, ERP transactions, and cloud access.",
    capabilities: [
      {
        title: "Dynamic Multi-Path Traffic Steering",
        description: "Monitors packet loss, jitter, and latency in real-time to route critical apps over the fastest available path.",
        deliverables: [
          "Sub-second packet-level failover",
          "Seamless VoIP and video call preservation",
          "Policy-based path selection by application type",
          "Bandwidth aggregation across multiple ISP links",
        ],
      },
      {
        title: "Zero-Touch Edge Provisioning (ZTP)",
        description: "Ship an edge appliance to any branch location; plug it into internet access and it automatically configures itself.",
        deliverables: [
          "Branch turnup in under 30 minutes",
          "Centralized cloud controller orchestration",
          "Standardized enterprise security baselines",
          "Elimination of on-site CLI configuration needs",
        ],
      },
      {
        title: "Integrated Zero-Trust Security (SASE Ready)",
        description: "Built-in next-generation firewall, intrusion prevention (IPS), and content filtering directly at the network edge.",
        deliverables: [
          "End-to-end IPsec AES-256 data mesh",
          "Integrated Deep Packet Inspection (DPI)",
          "Web application firewall and DNS filtering",
          "Direct secure Internet breakout for SaaS (Office 365)",
        ],
      },
      {
        title: "Single-Pane-of-Glass Cloud Portal",
        description: "Comprehensive visual analytics showing live bandwidth consumption, application health, and device uptime.",
        deliverables: [
          "Real-time Top 10 Application utilization charts",
          "Automated PDF executive SLA compliance reports",
          "Instant alert notifications via Webhook and SMS",
          "Granular user and device policy controls",
        ],
      },
    ],
    techStack: [
      "SD-WAN Controller Mesh",
      "Dynamic Multipath Optimization",
      "IPsec AES-256 Encryption",
      "Next-Gen Firewall (NGFW)",
      "Zero-Touch Provisioning (ZTP)",
      "Deep Packet Inspection (DPI)",
      "Direct Cloud Connect",
      "4G/5G Cellular Bonding",
      "RESTful API Orchestration",
    ],
    processSteps: [
      {
        step: "01",
        title: "WAN Architecture Assessment",
        desc: "We analyze your branch network topology, bandwidth utilization patterns, and critical SaaS application dependencies.",
      },
      {
        step: "02",
        title: "Cloud Controller & Policy Design",
        desc: "We build centralized QoS routing rules, application steering priorities, and zero-trust firewall profiles in our controller.",
      },
      {
        step: "03",
        title: "Edge Appliance Rollout",
        desc: "Pre-configured SD-WAN edge gateways are dispatched to your sites with zero-touch auto-discovery over any active link.",
      },
      {
        step: "04",
        title: "24/7 Managed NOC Optimization",
        desc: "Our NOC actively tracks packet health across all links, fine-tuning path metrics and providing continuous SLA reporting.",
      },
    ],
    caseStudies: [
      {
        title: "National Retail Chain SD-WAN Deployment",
        client: "450+ Store Lifestyle Brand",
        impact: "Cut monthly WAN telecom spend by 48% while boosting POS transaction uptime to 99.999%.",
        image: "/services/sdwan_clean.jpg",
      },
      {
        title: "Distributed Financial Services Firm",
        client: "Equities & Wealth Management Leader",
        impact: "Seamless automated failover between fiber ILL and 5G cellular with zero interrupted trading terminal sessions.",
        image: "/banner-network-matrix.jpg",
      },
    ],
    faqs: [
      {
        question: "Can Smartflo SD-WAN replace our expensive MPLS network?",
        answer:
          "Yes. Many clients replace or augment MPLS by pairing a dedicated Internet Leased Line (ILL) with an affordable secondary broadband connection. SD-WAN delivers equal or superior SLA uptime at up to 40-50% lower monthly recurring cost.",
      },
      {
        question: "How does sub-second failover prevent dropped calls?",
        answer:
          "Traditional routers take 10 to 30 seconds to recognize a dead link, dropping active VoIP calls and VPN sessions. Smartflo SD-WAN injects continuous synthetic probes; when degradation is spotted, packets are mirrored and shifted in under 50ms without disconnecting active calls.",
      },
      {
        question: "Do you supply the edge hardware appliances?",
        answer:
          "Yes. We offer turnkey managed hardware bundles including high-throughput dual-WAN / quad-WAN edge appliances with built-in Wi-Fi and 4G/5G LTE SIM slots.",
      },
    ],
    structuredSection: {
      title: "SOFTWARE-DEFINED WIDE AREA NETWORKING (SD-WAN) ARCHITECTURE",
      description:
        "Unify branch connectivity, accelerate cloud access, and harden edge security with automated multi-path control.",
      checklist: [
        "Intelligent Multi-Path Traffic Steering",
        "Sub-50ms Seamless Application Failover",
        "Zero-Touch Automated Edge Provisioning",
        "AES-256 Encrypted Full-Mesh Overlay",
        "Direct Secure Internet Breakout (SaaS)",
        "Integrated Next-Gen Edge Firewall",
        "Real-Time Centralized Analytics Portal",
        "24/7/365 Managed NOC Supervision",
      ],
      whyChooseTitle: "WHY ADAPT INDIA SMARTFLO SD-WAN?",
      whyChooseDesc:
        "Unlike standalone software vendors who leave you to source and manage multiple ISP circuits yourself, Adapt India Network provides both the Tier-1 underlying fiber and the managed SD-WAN overlay on a single SLA contract.",
      whyChooseBullets: [
        "Single Point of Accountability for Links + Hardware",
        "PAN-India Logistics & Field Engineer Deployment",
        "Direct Peering to Microsoft 365, AWS, and Salesforce",
        "Proactive 24/7 Monitoring with Instant Ticket Dispatch",
        "Flexible Monthly OPEX Subscription Pricing",
        "SOC2 and ISO 27001 Certified Security Practices",
      ],
    },
  },

  {
    slug: "smartoffice-connect",
    name: "SmartOffice® Connect",
    category: "Bundled Solutions",
    tagline: "All-in-One Voice, Data, Cloud Storage & Endpoint Security",
    heroHeadline: "The Complete Enterprise IT & Telecom Starter Pack in",
    heroHighlight: "A Single Box.",
    heroSubtitle:
      "Eliminate vendor chaos with a fully managed branch-in-a-box solution: high-speed dedicated leased line, enterprise Wi-Fi, cloud PBX with SIP voice lines, firewall, and collaborative business tools.",
    image: "/wifi-banner.jpg",
    galleryImages: ["/banner-what-we-do.jpg", "/banner-datacenter-racks.jpg", "/banner-network-matrix.jpg"],
    stats: [
      { value: "1 Device", label: "Consolidated Branch Gateway" },
      { value: "72 Hours", label: "Fast-Track Deployment" },
      { value: "35%", label: "Bundled Cost Reduction" },
      { value: "1 Single SLA", label: "Single Vendor Responsibility" },
    ],
    overview:
      "Setting up a new office branch traditionally means negotiating with separate vendors for internet leased lines, local PBX systems, Wi-Fi access points, router firewalls, and cloud storage. SmartOffice® Connect consolidates all necessary communications and network infrastructure into a unified, plug-and-play solution managed round-the-clock by Adapt India Network.",
    theChallenge:
      "SMEs, growing enterprises, and branch offices waste weeks coordinating between telecom providers, EPABX installers, and IT hardware technicians, leading to finger-pointing whenever outages occur.",
    ourSolution:
      "SmartOffice® Connect provides a single integrated enterprise appliance delivering high-speed internet, multi-extension voice, Wi-Fi, and firewall security backed by a single contractual SLA and dedicated 24/7 support line.",
    capabilities: [
      {
        title: "Dedicated Internet Leased Line & Wi-Fi",
        description: "1:1 symmetric enterprise bandwidth bundled with high-density enterprise Wi-Fi 6 for the entire workplace.",
        deliverables: [
          "Bandwidth options from 25 Mbps to 500 Mbps",
          "Dual-band 802.11ax Wi-Fi 6 coverage",
          "Isolated guest Wi-Fi portal with OTP authentication",
          "Automatic 4G LTE cellular backup failover",
        ],
      },
      {
        title: "Cloud PBX & Business Voice Extensions",
        description: "Enterprise voice system with virtual receptionist (IVR), call recording, and direct SIP extensions for staff.",
        deliverables: [
          "Multi-channel SIP trunk with direct dial numbers",
          "Interactive Voice Response (IVR) auto-attendant",
          "Centralized call recording and analytics",
          "Web & Mobile softphone apps for remote work",
        ],
      },
      {
        title: "Next-Gen Firewall & Content Filtering",
        description: "Protect company data against malware, phishing attacks, and unauthorized browsing with built-in edge defense.",
        deliverables: [
          "Stateful inspection firewall with IPS",
          "Web content and social media filtering",
          "Secure IPsec / SSL VPN for remote workers",
          "Automated security patch and firmware management",
        ],
      },
      {
        title: "Consolidated Billing & Dedicated Support",
        description: "One predictable monthly invoice and one toll-free enterprise helpdesk for all connectivity and voice needs.",
        deliverables: [
          "Zero capital expenditure (OPEX model)",
          "Dedicated relationship manager",
          "24/7/365 NOC hotline (+91 82874 79961)",
          "On-site replacement guarantee for all hardware",
        ],
      },
    ],
    techStack: [
      "SmartOffice Unified Gateway",
      "Cloud PBX / SIP Trunking",
      "Enterprise Wi-Fi 6 (802.11ax)",
      "Next-Gen Edge Firewall",
      "4G/5G Failover Backup",
      "SSL / IPsec VPN Concentrator",
      "Automated Call Recording Cloud",
      "Centralized Admin Web Dashboard",
    ],
    processSteps: [
      {
        step: "01",
        title: "Office Requirement Sizing",
        desc: "We calculate your staff headcount, floor square footage, simultaneous call volume, and bandwidth needs.",
      },
      {
        step: "02",
        title: "Appliance Provisioning",
        desc: "We configure your Wi-Fi SSIDs, voice extensions, IVR greeting messages, and firewall policies prior to delivery.",
      },
      {
        step: "03",
        title: "On-Site Installation & Cabling",
        desc: "Our field engineers install the fiber termination box, position Wi-Fi access points, and test voice phone extensions.",
      },
      {
        step: "04",
        title: "Go-Live & Proactive Support",
        desc: "Your office goes live with high-speed internet and unified communications backed by 24/7 proactive monitoring.",
      },
    ],
    caseStudies: [
      {
        title: "Rapid Expansion for Coworking Provider",
        client: "Leading National Coworking Chain",
        impact: "Deployed SmartOffice Connect across 12 new locations in 3 weeks, supporting 1,800 daily coworker devices.",
        image: "/wifi-banner.jpg",
      },
    ],
    faqs: [
      {
        question: "Can our employees use their office phone extensions on their smartphones?",
        answer:
          "Yes. SmartOffice Connect includes mobile and desktop softphone applications, allowing your team to make and receive business calls using your official office number from anywhere.",
      },
      {
        question: "Is there any upfront hardware cost?",
        answer:
          "No. SmartOffice Connect is offered on a fully managed OPEX subscription model. We supply, install, maintain, and replace all gateway hardware as part of your monthly agreement.",
      },
    ],
    structuredSection: {
      title: "ALL-IN-ONE ENTERPRISE BRANCH TELECOM SUITE",
      description:
        "The fastest, most reliable way to equip a new office with enterprise internet, voice, and network security.",
      checklist: [
        "1:1 Symmetrical Internet Leased Line",
        "Cloud PBX with Custom IVR & Extensions",
        "High-Density Wi-Fi 6 Access Points",
        "Next-Gen Firewall with Content Filter",
        "Automated 4G LTE Backup Failover",
        "Single Monthly Consolidated Invoice",
        "Zero Upfront Hardware Purchase Cost",
        "24/7/365 Dedicated NOC Telephone Support",
      ],
      whyChooseTitle: "WHY CHOOSE SMARTOFFICE CONNECT?",
      whyChooseDesc:
        "Stop managing five different telecom bills and chasing three different vendors during an outage. SmartOffice Connect gives you one enterprise partner with guaranteed 99.999% SLA uptime.",
      whyChooseBullets: [
        "Turnkey Setup in 72 Hours",
        "Scalable from 10 to 500+ Office Users",
        "Cisco & Enterprise Grade Gateway Hardware",
        "Free Hardware Replacement Warranty",
        "Pan-India Service Across 100+ Metro Hubs",
        "Simple Add-On Bandwidth & Phone Lines",
      ],
    },
  },

  {
    slug: "managed-mpls",
    name: "Managed MPLS VPN Networks",
    category: "Network & Connectivity",
    tagline: "Private, Isolated, QoS-Enabled Enterprise Backbone",
    heroHeadline: "Multiprotocol Label Switching (MPLS) Engineered for",
    heroHighlight: "Bank-Grade Network Security.",
    heroSubtitle:
      "Interconnect your corporate headquarters, disaster recovery facilities, branches, and multi-tenant data centers over a fully private, SLA-backed Tier-1 optical backbone with deterministic QoS prioritization.",
    image: "/services/mpls_clean.jpg",
    galleryImages: ["/network-mpls.png", "/banner-datacenter-racks.jpg", "/banner-servers-lights.jpg"],
    stats: [
      { value: "100%", label: "Private & Air-Gapped from Internet" },
      { value: "99.999%", label: "Core Availability SLA" },
      { value: "< 20ms", label: "Inter-City Low-Latency Core" },
      { value: "Class of Service", label: "Hardware-Enforced QoS" },
    ],
    overview:
      "When enterprise data security, regulatory compliance, and deterministic packet delivery cannot be compromised, sending sensitive internal data over the public internet is not an option. Adapt India Network's Managed MPLS VPN delivers fully private, Layer-3 and Layer-2 virtual networks isolated from public cyber threats.",
    theChallenge:
      "BFSI institutions, healthcare conglomerates, and retail operations require secure multi-site interconnectivity with zero packet jitter for core banking, ERP synchronization, and live telemetry without exposure to internet DDoS attacks.",
    ourSolution:
      "We provide private MPLS circuits terminating on enterprise Cisco and Juniper edge routers. Every data packet is labeled with specific Class of Service (CoS) tags, ensuring mission-critical ERP and voice traffic take priority even during peak volume spikes.",
    capabilities: [
      {
        title: "Hardware-Enforced Class of Service (CoS)",
        description: "Prioritize mission-critical traffic into Real-Time, Business-Critical, and Best-Effort queues.",
        deliverables: [
          "Zero jitter for Voice & Video conferencing",
          "Dedicated bandwidth reservation for ERP / Core Banking",
          "Configurable multi-tier QoS queuing policies",
          "Deterministic packet delivery with sub-1ms jitter",
        ],
      },
      {
        title: "Air-Gapped Private Routing Domains",
        description: "Complete physical and logical separation from public Internet routing tables, eliminating volumetric attack surfaces.",
        deliverables: [
          "RFC 2547 / 4364 BGP/MPLS Layer 3 VPNs",
          "VPLS / VPWS Layer 2 point-to-multipoint circuits",
          "Immunity against internet-facing ransomware & DDoS",
          "Direct compliance with RBI, SEBI, and HIPAA mandates",
        ],
      },
      {
        title: "Pan-India Optical Core Coverage",
        description: "Connect branch offices across tier-1, tier-2, and tier-3 locations over our nationwide carrier fiber ring.",
        deliverables: [
          "Presence in 100+ major industrial and metro centers",
          "Dual-ring self-healing optical transport architecture",
          "Redundant last-mile fiber loops to every site",
          "Seamless integration with cloud data center hubs",
        ],
      },
      {
        title: "Full Lifecycle Managed Router Services",
        description: "We supply, configure, patch, and manage the Customer Premises Equipment (CPE) edge routers 24/7.",
        deliverables: [
          "Enterprise Cisco ISR / ASR or Juniper edge hardware",
          "Proactive SNMP telemetry and CPU/memory monitoring",
          "Automated configuration backup and rollback",
          "4-hour on-site hardware replacement SLA",
        ],
      },
    ],
    techStack: [
      "MPLS Core Network (RFC 3031)",
      "BGP / MPLS VPNs (RFC 4364)",
      "L2TPv3 & VPLS Pseudowires",
      "Cisco ASR & ISR Routers",
      "Juniper MX Series Core",
      "Hardware QoS / CoS Prioritization",
      "SNMPv3 Real-Time Telemetry",
      "Optical DWDM Backbone",
    ],
    processSteps: [
      {
        step: "01",
        title: "VPN Topology Design",
        desc: "We define your mesh requirements: full-mesh, hub-and-spoke, or hybrid topologies with custom IP addressing schemes.",
      },
      {
        step: "02",
        title: "QoS Policy Matrix Formulation",
        desc: "We categorize your enterprise applications into specific Class of Service tiers (Voice, Video, ERP, Database, Bulk Data).",
      },
      {
        step: "03",
        title: "Carrier Provisioning & Soak Testing",
        desc: "Each MPLS PE-CE link is commissioned with dedicated fiber and soak-tested for latency, jitter, and automated failover.",
      },
      {
        step: "04",
        title: "24/7 L3 NOC Proactive Management",
        desc: "Our NOC team tracks circuit availability round-the-clock, maintaining sub-4 hour MTTR SLAs nationwide.",
      },
    ],
    caseStudies: [
      {
        title: "Core Banking & ATM Network Interconnect",
        client: "Major Scheduled Commercial Bank",
        impact: "Connected 180 branches and 400 ATMs with 99.999% SLA uptime and zero security breaches.",
        image: "/banner-servers-lights.jpg",
      },
    ],
    faqs: [
      {
        question: "Is MPLS more secure than an IPsec VPN over the public internet?",
        answer:
          "Yes. IPsec VPNs travel over the public internet, leaving them vulnerable to volumetric DDoS attacks, variable ISP routing, and public port scanning. MPLS is a private closed-user-group (CUG) network completely isolated from the internet.",
      },
      {
        question: "Can we connect our cloud infrastructure (AWS/Azure) directly to our MPLS?",
        answer:
          "Yes. Adapt India Network provides direct cloud on-ramps. Your AWS VPCs or Azure Virtual Networks appear as native private MPLS nodes without traversing the public internet.",
      },
    ],
    structuredSection: {
      title: "ENTERPRISE MANAGED MPLS VPN CONNECTIVITY",
      description:
        "Guaranteed throughput, hardware-enforced QoS, and total network isolation for data-critical enterprises.",
      checklist: [
        "100% Private Closed-User-Group (CUG)",
        "Hardware-Enforced Class of Service (QoS)",
        "Contractual 99.999% Core Availability SLA",
        "Sub-20ms Inter-Metro Round-Trip Latency",
        "Direct AWS & Azure Cloud Direct Connect",
        "Fully Managed Cisco / Juniper Edge Routers",
        "Pan-India Coverage Across 100+ Metro Hubs",
        "24/7/365 Dedicated NOC Incident Desk",
      ],
      whyChooseTitle: "WHY ADAPT INDIA MANAGED MPLS?",
      whyChooseDesc:
        "Our robust optical fiber backbone and carrier-grade MPLS core guarantee consistent low-latency delivery, zero packet loss, and immediate L3 engineering support.",
      whyChooseBullets: [
        "Direct Compliance with RBI & SEBI Security Norms",
        "End-to-End SLA with Financial Credit Backing",
        "Single NOC Hotline with < 15 Min Response Time",
        "Hybrid SD-WAN + MPLS Migration Pathways",
        "Comprehensive MRTG / NetFlow Traffic Portal",
        "20+ Years Telecom Engineering Experience",
      ],
    },
  },

  {
    slug: "business-communications",
    name: "Business Communications & SIP Trunk",
    category: "Business Communications",
    tagline: "Smartflo CCaaS, Cloud Telephony, SIP Trunk & WhatsApp Business API",
    heroHeadline: "Scalable Omnichannel Voice & Contact Center Infrastructure for",
    heroHighlight: "High-Growth Brands.",
    heroSubtitle:
      "Modernize customer interactions with carrier-grade SIP trunking, AI-enabled cloud contact centers (CCaaS), 1800 toll-free lines, WhatsApp Business API, and automated outbound dialing.",
    image: "/telephone-banner.jpg",
    galleryImages: ["/banner-network-matrix.jpg", "/banner-what-we-do.jpg", "/banner-datacenter-racks.jpg"],
    stats: [
      { value: "1,500+", label: "Concurrent Channels per Trunk" },
      { value: "99.99%", label: "Voice Call Quality & SLA" },
      { value: "Omnichannel", label: "Voice, WhatsApp, SMS & RCS" },
      { value: "AI Enabled", label: "Real-Time Sentiment & Transcription" },
    ],
    overview:
      "Legacy copper PRI lines and on-premise PBX systems are expensive to scale, fragile during network spikes, and incapable of supporting distributed remote agents. Adapt India Network's Business Communications suite delivers cloud-native voice, programmable SIP trunks, and omnichannel customer engagement APIs built for modern scale.",
    theChallenge:
      "Enterprises face high call-drop rates, rigid line caps, massive telecom bills, and siloed customer communication channels that prevent customer service teams from collaborating effectively.",
    ourSolution:
      "We provide elastic SIP trunking over dedicated fiber links, cloud contact center platforms (CCaaS) with integrated CRM workflows, and verified WhatsApp Business APIs that empower sales and support teams to connect with customers seamlessly.",
    capabilities: [
      {
        title: "Carrier-Grade SIP Trunking",
        description: "Replace physical copper PRI cables with virtual IP channels capable of handling thousands of concurrent calls.",
        deliverables: [
          "Scalable from 10 to 1,500+ simultaneous voice channels",
          "Crystal-clear G.711 / G.729 HD voice codecs",
          "Interoperable with Asterisk, Avaya, Cisco, FreePBX, and Microsoft Teams",
          "Automated disaster recovery failover to backup numbers",
        ],
      },
      {
        title: "Smartflo CCaaS (Cloud Contact Center)",
        description: "Full-featured omnichannel contact center software for inbound support, outbound campaigns, and hybrid agents.",
        deliverables: [
          "Intelligent Skill-Based Call Routing & Multi-Level IVR",
          "Predictive, Progressive, and Power Outbound Dialers",
          "Live agent whisper, barge-in, and call monitoring",
          "Two-way CRM integration (Salesforce, Zoho, HubSpot, LeadSquared)",
        ],
      },
      {
        title: "WhatsApp Business Platform & Enterprise RCS",
        description: "Engage customers on India's most popular messaging channel with verified green badge business profiles.",
        deliverables: [
          "Automated transactional notifications & order alerts",
          "Interactive rich media catalogs and quick-reply buttons",
          "High-volume marketing broadcasts with 98% open rates",
          "Automated chatbot flows with human agent handoff",
        ],
      },
      {
        title: "1800 Toll-Free & Smart Virtual Numbers",
        description: "Memorable national toll-free numbers that build customer trust and provide centralized call attribution.",
        deliverables: [
          "Single vanity number accessible from all telecom operators",
          "Geographic call routing to closest regional offices",
          "Real-time call recording and missed-call capture",
          "Comprehensive marketing campaign analytics",
        ],
      },
    ],
    techStack: [
      "SIP Protocol (RFC 3261)",
      "Smartflo CCaaS Engine",
      "WebRTC Audio Engine",
      "Meta WhatsApp Business Cloud API",
      "Enterprise RCS Platform",
      "G.711 & G.729 Codecs",
      "CRM Webhook Integrations",
      "TLS / SRTP Voice Encryption",
    ],
    processSteps: [
      {
        step: "01",
        title: "Call Flow & Channel Sizing",
        desc: "We analyze your peak concurrent call volume, agent seat count, IVR trees, and integration requirements.",
      },
      {
        step: "02",
        title: "SIP Interconnect & Number Porting",
        desc: "We establish a secure SIP trunk connection to your IP PBX or cloud platform and port your existing numbers with zero downtime.",
      },
      {
        step: "03",
        title: "CRM Integration & IVR Configuration",
        desc: "We configure custom multi-language voice prompts, agent dashboards, and real-time CRM screen-pop webhooks.",
      },
      {
        step: "04",
        title: "Agent Onboarding & Go-Live",
        desc: "Staff training, simulated load testing, and transition to live traffic backed by 24/7 dedicated voice NOC engineering.",
      },
    ],
    caseStudies: [
      {
        title: "High-Volume Customer Support Migration",
        client: "India's Leading Direct-to-Consumer Brand",
        impact: "Handled 25,000+ daily customer inquiries with 99.99% call success rate and 34% reduction in telecom overhead.",
        image: "/telephone-banner.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we connect your SIP trunk to Microsoft Teams?",
        answer:
          "Yes. We support Microsoft Operator Connect and Direct Routing, enabling your employees to make and receive external telephone calls directly inside Microsoft Teams desktop and mobile apps.",
      },
      {
        question: "Can we keep our existing business phone numbers?",
        answer:
          "Yes. We manage full telecom Mobile/Fixed Number Portability (MNP/FNP), allowing you to migrate your existing corporate numbers seamlessly to our SIP trunk infrastructure.",
      },
    ],
    structuredSection: {
      title: "NEXT-GENERATION ENTERPRISE TELEPHONY ARCHITECTURE",
      description:
        "Crystal-clear voice quality, infinite scalability, and modern omnichannel communication tools for growing businesses.",
      checklist: [
        "Elastic High-Concurrency SIP Trunking",
        "HD Voice Codecs with Zero Packet Jitter",
        "Smartflo Cloud Contact Center (CCaaS)",
        "Meta Verified WhatsApp Business API",
        "National 1800 Toll-Free Line Services",
        "Direct Microsoft Teams Calling Integration",
        "Bi-Directional CRM Synchronization",
        "24/7/365 Carrier Voice NOC Monitoring",
      ],
      whyChooseTitle: "WHY CHOOSE ADAPT INDIA VOICE?",
      whyChooseDesc:
        "We terminate voice traffic directly over our Tier-1 telecom interconnects, guaranteeing superior call completion rates, ultra-fast connection times, and competitive per-pulse tariffs.",
      whyChooseBullets: [
        "Interoperable with Any Modern IP-PBX",
        "Direct Carrier SLA for Voice Quality (MOS > 4.2)",
        "Transparent Online Call Detail Records (CDR)",
        "Dedicated Voice Engineering Specialists",
        "Automated Disaster Recovery Routing",
        "Pay-As-You-Grow Scalable Channels",
      ],
    },
  },

  {
    slug: "network-as-a-service",
    name: "Network as a Service (NaaS)",
    category: "Network & Connectivity",
    tagline: "On-Demand Flexible Bandwidth, Elastic Connectivity & Cloud On-Ramps",
    heroHeadline: "Agile, Consumption-Based Network Infrastructure for",
    heroHighlight: "Modern Digital Enterprises.",
    heroSubtitle:
      "Scale bandwidth up or down on demand, interconnect regional offices dynamically, and eliminate rigid capital investments with OPEX-friendly, cloud-managed Network as a Service.",
    image: "/banner-global-telecom.jpg",
    galleryImages: ["/banner-network-matrix.jpg", "/banner-datacenter-racks.jpg", "/banner-servers-lights.jpg"],
    stats: [
      { value: "On-Demand", label: "Instant Bandwidth Scaling" },
      { value: "Zero CAPEX", label: "Pure OPEX Subscription Model" },
      { value: "Direct Peering", label: "AWS, Azure, GCP Cloud Ramps" },
      { value: "99.999%", label: "End-to-End SLA Guarantee" },
    ],
    overview:
      "Static multi-year bandwidth contracts no longer match the elastic reality of cloud computing. Adapt India Network's Network as a Service (NaaS) allows enterprises to consume networking like cloud compute: spin up connections rapidly, burst bandwidth during seasonal peaks, and pay only for active capacity.",
    theChallenge:
      "Traditional enterprise telecom contracts take weeks to modify, lock businesses into rigid multi-year capacity minimums, and require heavy upfront hardware investments that quickly become obsolete.",
    ourSolution:
      "NaaS transforms physical infrastructure into an elastic software-controlled service. Through our customer portal, network managers can adjust bandwidth dynamically, spin up private cloud interconnects, and deploy secure branch mesh in minutes.",
    capabilities: [
      {
        title: "Elastic Bandwidth on Demand",
        description: "Double or quadruple port throughput instantly for product launches, data backups, or seasonal sales peaks.",
        deliverables: [
          "Dynamic bandwidth burst scheduling",
          "Automated usage-based billing options",
          "Self-service portal configuration",
          "Zero service disruption during capacity changes",
        ],
      },
      {
        title: "Direct Multi-Cloud Interconnects",
        description: "Bypasses the public internet with private Layer-2/Layer-3 direct connects into AWS, Microsoft Azure, and GCP.",
        deliverables: [
          "AWS Direct Connect & Azure ExpressRoute peering",
          "Google Cloud Interconnect & Oracle FastConnect",
          "Sub-5ms low latency cloud data replication",
          "Reduced cloud egress bandwidth transfer fees",
        ],
      },
      {
        title: "Zero-CAPEX Managed Infrastructure",
        description: "All routers, switches, optical transceivers, and security gateways are provided and maintained as a service.",
        deliverables: [
          "Complete hardware lifecycle management",
          "Automatic firmware updates and security patching",
          "Immediate hardware replacement under SLA",
          "100% tax-deductible operational expenditure (OPEX)",
        ],
      },
      {
        title: "Programmable APIs & Telemetry",
        description: "Integrate network provisioning and monitoring directly into your internal DevOps and SecOps toolchains.",
        deliverables: [
          "RESTful APIs for automated circuit telemetry",
          "Real-time NetFlow and SNMP performance metrics",
          "Custom Webhook alerts for threshold breaches",
          "Exportable compliance and SLA verification logs",
        ],
      },
    ],
    techStack: [
      "Software-Defined NaaS Architecture",
      "AWS Direct Connect / Azure ExpressRoute",
      "Carrier Ethernet 2.0 (E-Line & E-LAN)",
      "REST API Automation",
      "Automated Optical Bandwidth Provisioning",
      "NetFlow / IPFIX Telemetry",
      "Cisco & Juniper Cloud Fabric",
    ],
    processSteps: [
      {
        step: "01",
        title: "Network Audit & API Mapping",
        desc: "We analyze your baseline traffic, cloud footprint, and seasonal throughput spikes to structure an elastic capacity model.",
      },
      {
        step: "02",
        title: "Physical Fiber On-Ramp Turnup",
        desc: "We commission a high-capacity optical port (1 Gbps or 10 Gbps) at your primary data centers and branch locations.",
      },
      {
        step: "03",
        title: "Portal Access & Cloud Interconnect",
        desc: "We activate self-service portal controls and configure private direct peering to your AWS, Azure, or GCP accounts.",
      },
      {
        step: "04",
        title: "Elastic Operation & Continuous NOC Oversight",
        desc: "Manage bandwidth dynamically with complete confidence backed by Adapt India Network's 24/7/365 NOC team.",
      },
    ],
    caseStudies: [
      {
        title: "E-Commerce Festival Scale-Up",
        client: "Tier-1 Online Marketplace",
        impact: "Burst network capacity by 400% across Big Billion festival week with zero packet drops and automated scale-down.",
        image: "/banner-global-telecom.jpg",
      },
    ],
    faqs: [
      {
        question: "How quickly can we burst our leased line bandwidth under NaaS?",
        answer:
          "Because your physical fiber port is provisioned with high headroom (e.g., 1 Gbps physical line capped at 100 Mbps baseline), bandwidth bursts can be scheduled or activated via portal in under 15 minutes.",
      },
      {
        question: "Are direct cloud interconnects included?",
        answer:
          "Yes. NaaS allows you to provision virtual private connections directly to AWS Direct Connect, Azure ExpressRoute, and Google Cloud Interconnect with a few clicks.",
      },
    ],
    structuredSection: {
      title: "ON-DEMAND NETWORK AS A SERVICE (NaaS)",
      description:
        "The agility of cloud computing brought directly to enterprise telecom and multi-site networking.",
      checklist: [
        "Elastic On-Demand Bandwidth Bursts",
        "Direct AWS, Azure & Google Cloud Connect",
        "Pure OPEX Model with Zero Upfront CAPEX",
        "Fully Managed Enterprise Hardware Included",
        "Carrier-Grade 99.999% SLA Uptime",
        "RESTful API & Webhook Telemetry Integration",
        "Self-Service Bandwidth Management Portal",
        "24/7/365 Proactive NOC Monitoring & Support",
      ],
      whyChooseTitle: "WHY ADAPT INDIA NaaS?",
      whyChooseDesc:
        "We break the mold of rigid traditional telecom contracts. Our NaaS model aligns your telecom expenditure directly with your real-time business growth.",
      whyChooseBullets: [
        "Pay for What You Use, Scale When You Grow",
        "Fast 3-Day Commissioning on On-Net Sites",
        "Significant Cloud Egress Cost Savings",
        "Consolidated Invoice for Local & Cloud Links",
        "Pan-India Tier-1 Carrier Network Backing",
        "Dedicated L3 Network Architect Support",
      ],
    },
  },

  {
    slug: "collaboration-productivity",
    name: "Collaboration & Modern Workplace",
    category: "Collaboration & Productivity",
    tagline: "Microsoft 365, Copilot AI, Google Workspace & Enterprise Video Mesh",
    heroHeadline: "Unified Modern Workplace & AI Collaboration Solutions for",
    heroHighlight: "High-Performance Teams.",
    heroSubtitle:
      "Empower hybrid workforces with enterprise-grade productivity suites (Microsoft 365, Google Workspace), generative AI copilots, secure identity governance, and high-density video conferencing integration.",
    image: "/resources/smart_city_grid.jpg",
    galleryImages: ["/banner-datacenter-racks.jpg", "/banner-network-matrix.jpg", "/resources/ai_network_chip.jpg"],
    stats: [
      { value: "100%", label: "Cloud Workspace Availability" },
      { value: "Zero-Trust", label: "MFA & Conditional Access" },
      { value: "AI Copilot", label: "Integrated Workflow Automation" },
      { value: "Tier-1", label: "Microsoft & Google Cloud Partner" },
    ],
    overview:
      "Modern workplaces demand seamless collaboration between distributed teams without sacrificing data privacy or enterprise security. Adapt India Network delivers turnkey deployment, migration, and management of Microsoft 365, Copilot AI, and Google Workspace backed by enterprise connectivity.",
    theChallenge:
      "Organizations struggle with fragmented communication tools, shadow IT applications, vulnerable remote logins, and complex license management that inflate IT costs.",
    ourSolution:
      "We provide end-to-end modern workplace transformation: email migration with zero data loss, enterprise identity access management (MFA / SSO), and Microsoft Copilot AI integration.",
    capabilities: [
      {
        title: "Microsoft 365 & Copilot AI Deployment",
        description: "Transform daily operations with Word, Excel, Teams, and generative AI automation embedded into workflow apps.",
        deliverables: [
          "Enterprise M365 licensing & tenant architecture",
          "Microsoft Copilot AI deployment and security boundary setup",
          "Automated tenant security compliance baselines",
          "Continuous employee adoption training workshops",
        ],
      },
      {
        title: "Zero-Downtime Email & Data Migration",
        description: "Seamlessly move legacy on-premise Exchange or third-party webmail to modern cloud suites with zero data loss.",
        deliverables: [
          "Full mailbox, calendar, and contact synchronization",
          "Active Directory (AD) / Azure AD hybrid federation",
          "Automated cutover with zero email delivery loss",
          "Complete historical archive migration",
        ],
      },
      {
        title: "Zero-Trust Identity & Endpoint Security",
        description: "Protect sensitive corporate assets across mobile phones, laptops, and remote workstations.",
        deliverables: [
          "Multi-Factor Authentication (MFA) & Conditional Access",
          "Microsoft Intune Mobile Device Management (MDM)",
          "Data Loss Prevention (DLP) and sensitivity labeling",
          "Endpoint vulnerability scanning and compliance enforcement",
        ],
      },
      {
        title: "Enterprise Zoom & Teams Meeting Rooms",
        description: "Equip boardrooms and executive spaces with high-definition audio and video conferencing systems.",
        deliverables: [
          "Certified hardware deployment (Logitech, Poly, Yealink)",
          "One-touch meeting start integration",
          "Dedicated QoS prioritization over Adapt India fiber",
          "Centralized remote room monitoring dashboard",
        ],
      },
    ],
    techStack: [
      "Microsoft 365 Enterprise (E3/E5)",
      "Microsoft Copilot AI",
      "Microsoft Entra ID (Azure AD)",
      "Microsoft Intune & Endpoint Manager",
      "Google Workspace Enterprise",
      "Zoom Rooms & Microsoft Teams Rooms",
      "Zero-Trust Access Control (ZTNA)",
      "Automated Exchange Migration Tools",
    ],
    processSteps: [
      {
        step: "01",
        title: "Security & Licensing Audit",
        desc: "We evaluate existing user licenses, storage consumption, security policies, and third-party SaaS sprawl.",
      },
      {
        step: "02",
        title: "Tenant Architecture & Security Hardening",
        desc: "We configure custom domain DNS, Entra ID policies, MFA enforcement, and data loss prevention baselines.",
      },
      {
        step: "03",
        title: "Pilot Migration & User Verification",
        desc: "A representative sample group is migrated to test mail routing, mobile device profiles, and desktop application sync.",
      },
      {
        step: "04",
        title: "Full Cutover & Ongoing Managed Support",
        desc: "Complete enterprise cutover followed by dedicated 24/7 helpdesk support for password resets and license provisioning.",
      },
    ],
    caseStudies: [
      {
        title: "Enterprise Cloud Workspace Transformation",
        client: "Automotive Component Manufacturer",
        impact: "Migrated 2,400 user accounts from legacy on-premise mail to Microsoft 365 in 48 hours with zero data loss.",
        image: "/resources/smart_city_grid.jpg",
      },
    ],
    faqs: [
      {
        question: "Can you help our company adopt Microsoft Copilot AI securely?",
        answer:
          "Yes. Before enabling Copilot, it is vital to audit your SharePoint and OneDrive permissions to prevent employees from inadvertently accessing confidential executive documents. We configure data governance boundaries and sensitivity labels before rollout.",
      },
      {
        question: "Do you provide 24/7 end-user IT support?",
        answer:
          "Yes. Our managed workplace tier includes dedicated L1/L2/L3 helpdesk support for license provisioning, password unlocks, and desktop troubleshooting.",
      },
    ],
    structuredSection: {
      title: "ENTERPRISE COLLABORATION & MODERN WORKPLACE",
      description:
        "Empower your workforce with AI-driven productivity tools, enterprise email, and zero-trust security.",
      checklist: [
        "Microsoft 365 & Copilot AI Licensing & Setup",
        "Zero-Downtime Mailbox & Data Migration",
        "Microsoft Entra ID (Azure AD) Single Sign-On",
        "Multi-Factor Authentication & Conditional Access",
        "Intune Mobile Device & Laptop Management",
        "Data Loss Prevention & Email Anti-Phishing",
        "Enterprise Zoom & Teams Room Integration",
        "24/7/365 Dedicated Managed IT Helpdesk",
      ],
      whyChooseTitle: "WHY ADAPT INDIA FOR COLLABORATION?",
      whyChooseDesc:
        "Unlike standard software resellers, Adapt India Network provides both the Tier-1 high-speed fiber connection and the cloud workspace platform, ensuring peak video call quality and rapid cloud syncing.",
      whyChooseBullets: [
        "Certified Microsoft & Google Cloud Engineers",
        "Zero-Loss Email Migration Track Record",
        "Complete License Optimization to Lower Monthly Spend",
        "Direct QoS Prioritization for Teams and Zoom",
        "Dedicated Enterprise Account Management",
        "Compliant with Global Data Protection Standards",
      ],
    },
  },

  {
    slug: "cloud-infrastructure",
    name: "Enterprise Cloud Infrastructure",
    category: "Cloud Infrastructure",
    tagline: "Hybrid Multi-Cloud, Azure Virtual Desktop & High-Speed Data Center Mesh",
    heroHeadline: "Resilient Hybrid Multi-Cloud Infrastructure Built for",
    heroHighlight: "Peak Enterprise Performance.",
    heroSubtitle:
      "Architect, migrate, and operate mission-critical workloads across Microsoft Azure, AWS, and private Tier-4 data centers with sub-millisecond cloud interconnects and automated disaster recovery.",
    image: "/resources/globe_connectivity_dc.jpg",
    galleryImages: ["/banner-datacenter-racks.jpg", "/banner-servers-lights.jpg", "/banner-network-matrix.jpg"],
    stats: [
      { value: "Tier-4", label: "Certified Data Center Partner" },
      { value: "< 2ms", label: "Direct Cloud Connect Latency" },
      { value: "30%", label: "Average Cloud Cost Reduction" },
      { value: "99.999%", label: "Virtual Infrastructure SLA" },
    ],
    overview:
      "Enterprise cloud adoption requires more than simply moving virtual machines. Adapt India Network helps organizations engineer resilient hybrid cloud topologies combining private dedicated infrastructure with hyperscale public clouds (Azure, AWS, GCP) interconnected over dedicated optical fiber.",
    theChallenge:
      "Companies struggle with spiraling monthly cloud bills, unexpected egress data charges, sluggish database replication latency, and complex multi-cloud security management.",
    ourSolution:
      "We design right-sized cloud architectures, establish private direct interconnects that slash egress fees by up to 50%, and deploy Azure Virtual Desktop (AVD) environments for secure remote operations.",
    capabilities: [
      {
        title: "Microsoft Azure & AWS Managed Services",
        description: "Full lifecycle cloud architecture, migration, 24/7 management, and FinOps cost optimization.",
        deliverables: [
          "Infrastructure-as-Code (Terraform / ARM / Bicep)",
          "Automated auto-scaling and load balancing",
          "FinOps cloud spend audit and reserved instance management",
          "24/7 SRE telemetry monitoring and incident response",
        ],
      },
      {
        title: "Azure Virtual Desktop (AVD) & Cloud VDI",
        description: "Deliver high-performance Windows 11 virtual desktops to remote workers on any device securely.",
        deliverables: [
          "Multi-session Windows 11 virtual desktops",
          "Centralized data storage preventing local data theft",
          "Optimized for Microsoft Teams audio and video",
          "Rapid provisioning of new employee workstations",
        ],
      },
      {
        title: "Direct Cloud Connect (ExpressRoute & Direct Connect)",
        description: "Private fiber interconnects linking your data center or office directly to cloud regions.",
        deliverables: [
          "Dedicated 1 Gbps to 10 Gbps private cloud links",
          "Bypasses public internet latency and packet jitter",
          "Drastically reduces cloud egress data transfer costs",
          "Dual-homed redundancy for zero downtime",
        ],
      },
      {
        title: "Cloud Disaster Recovery & Business Continuity (DRaaS)",
        description: "Automated continuous replication with guaranteed Recovery Point (RPO) and Recovery Time (RTO) objectives.",
        deliverables: [
          "Sub-15 minute Recovery Time Objective (RTO)",
          "Automated failover and failback orchestration",
          "Regular non-disruptive disaster recovery drills",
          "Encrypted off-site immutable backup storage",
        ],
      },
    ],
    techStack: [
      "Microsoft Azure Enterprise Cloud",
      "Amazon Web Services (AWS)",
      "Azure Virtual Desktop (AVD)",
      "Azure ExpressRoute & AWS Direct Connect",
      "Terraform & Bicep IaC",
      "Kubernetes & Docker Containers",
      "Veeam & Azure Site Recovery (ASR)",
      "CloudMon SRE Telemetry",
    ],
    processSteps: [
      {
        step: "01",
        title: "Cloud Readiness & TCO Assessment",
        desc: "We analyze your on-premise compute workloads, memory profiles, storage IOPS, and network bandwidth to create an ROI roadmap.",
      },
      {
        step: "02",
        title: "Architecture & Direct Connect Setup",
        desc: "We establish private optical connectivity into Azure/AWS and deploy secure virtual network landing zones.",
      },
      {
        step: "03",
        title: "Phased Migration with Zero Downtime",
        desc: "Data replication and incremental synchronization followed by clean cutover during scheduled low-traffic maintenance windows.",
      },
      {
        step: "04",
        title: "24/7 Managed SRE & Cost Optimization",
        desc: "Continuous automated observability, real-time threat detection, and monthly FinOps reviews to keep cloud costs low.",
      },
    ],
    caseStudies: [
      {
        title: "Hybrid Cloud Migration for Logistics Leader",
        client: "Supply Chain & Warehousing Enterprise",
        impact: "Migrated 80+ core database servers to Azure with direct fiber ExpressRoute, trimming monthly IT overhead by 32%.",
        image: "/resources/globe_connectivity_dc.jpg",
      },
    ],
    faqs: [
      {
        question: "How does Direct Cloud Connect save money on cloud bills?",
        answer:
          "Public cloud providers charge steep data egress fees when downloading data over the public internet. Connecting over a private Direct Connect or ExpressRoute port slashes egress bandwidth rates by up to 50% while delivering predictable latency.",
      },
      {
        question: "Is Azure Virtual Desktop fast enough for demanding applications?",
        answer:
          "Yes. AVD sessions can be backed by GPU-accelerated virtual machines and run over dedicated low-latency fiber circuits, providing an experience indistinguishable from a high-end local PC.",
      },
    ],
    structuredSection: {
      title: "SCALABLE HYBRID MULTI-CLOUD INFRASTRUCTURE",
      description:
        "High-performance cloud compute, private fiber interconnects, and automated disaster recovery for growing enterprises.",
      checklist: [
        "Certified Microsoft Azure & AWS Architecture",
        "Direct Optical Cloud Connect (ExpressRoute)",
        "Azure Virtual Desktop (AVD) Deployment",
        "Cloud Disaster Recovery as a Service (DRaaS)",
        "FinOps Cost Optimization (Up to 30% Savings)",
        "Automated Terraform Infrastructure-as-Code",
        "Immutable Ransomware-Proof Cloud Backups",
        "24/7/365 Dedicated Cloud SRE Engineering Team",
      ],
      whyChooseTitle: "WHY ADAPT INDIA FOR CLOUD?",
      whyChooseDesc:
        "Most cloud consultants only know software; most ISPs only know cables. Adapt India Network bridges both worlds with carrier-grade fiber pipes directly linked into hyperscale cloud regions.",
      whyChooseBullets: [
        "Certified Azure & AWS Solutions Architects",
        "Sub-2ms Direct Peering Latency",
        "Single Consolidated SLA for Fiber + Cloud Compute",
        "Hands-On Migration Without Production Downtime",
        "Dedicated Monthly Cloud Spend Optimization",
        "Tier-4 Data Center Physical Colocation Available",
      ],
    },
  },

  {
    slug: "cybersecurity-solutions",
    name: "Cybersecurity Solutions & Managed SOC",
    category: "Cybersecurity Solutions",
    tagline: "Next-Gen Firewalls, Zero Trust (ZTNA), DDoS Scrubbing & 24/7 SOC",
    heroHeadline: "Carrier-Grade Perimeter & Endpoint Defense for",
    heroHighlight: "Modern Threat Environments.",
    heroSubtitle:
      "Protect your enterprise digital perimeter with 24/7/365 security operations center (SOC) monitoring, multi-terabit cloud DDoS scrubbing, Next-Gen Firewalls (NGFW), and Zero Trust Network Access (ZTNA).",
    image: "/banner-network-matrix.jpg",
    galleryImages: ["/banner-datacenter-racks.jpg", "/banner-servers-lights.jpg", "/resources/network_engineer_ops.jpg"],
    stats: [
      { value: "2 Tbps+", label: "DDoS Mitigation Scrubbing Cloud" },
      { value: "24/7/365", label: "Managed SOC Incident Watch" },
      { value: "< 15 Mins", label: "Mean Time to Threat Containment" },
      { value: "Zero Trust", label: "Identity-Driven Access Architecture" },
    ],
    overview:
      "As corporate applications migrate to the cloud and employees work from diverse branch locations, traditional perimeter castle-and-moat security is obsolete. Adapt India Network delivers multi-layered cybersecurity combining carrier-level network defense with 24/7 AI-driven threat intelligence.",
    theChallenge:
      "Enterprises face sophisticated volumetric DDoS attacks, ransomware infiltration via phishing, unpatched edge vulnerabilities, and lack the massive budget needed to hire an internal 24/7 security analyst team.",
    ourSolution:
      "We provide a fully managed Security Operations Center (SOC) combined with upstream carrier DDoS scrubbing and managed Next-Gen Firewalls, giving your enterprise fortress-grade protection on a predictable monthly subscription.",
    capabilities: [
      {
        title: "24/7/365 Managed Security Operations (SOC)",
        description: "Continuous real-time threat hunting, SIEM log analysis, and rapid containment by certified security analysts.",
        deliverables: [
          "Real-time correlation of firewall, endpoint, and server logs",
          "Automated incident alert triage and threat containment",
          "Monthly vulnerability scans and executive risk reports",
          "Dedicated 24/7 emergency incident response hotline",
        ],
      },
      {
        title: "Multi-Terabit Cloud DDoS Scrubbing",
        description: "Upstream carrier-level traffic scrubbing that filters volumetric SYN floods, UDP amplification, and Layer-7 attacks.",
        deliverables: [
          "2+ Tbps global scrubbing capacity",
          "Clean-pipe traffic delivery to your leased line gateway",
          "Sub-second mitigation trigger with zero latency impact",
          "Protection for web servers, DNS, and IP PBX voice trunks",
        ],
      },
      {
        title: "Next-Generation Firewall as a Service (FWaaS)",
        description: "Deploy industry-leading Fortinet and Palo Alto Next-Gen firewalls at your network perimeter without upfront hardware cost.",
        deliverables: [
          "Deep Packet Inspection (DPI) with SSL decryption",
          "Intrusion Prevention System (IPS) signature updates",
          "Application-level visibility and web filtering policies",
          "Zero-day malware sandboxing and antivirus inspection",
        ],
      },
      {
        title: "Zero Trust Network Access (ZTNA)",
        description: "Replace legacy vulnerable open VPNs with micro-segmented, identity-verified application perimeters.",
        deliverables: [
          "Continuous user identity and device health verification",
          "Least-privilege access restricted strictly to authorized apps",
          "Prevents lateral movement in the event of compromised credentials",
          "Seamless clientless browser access for remote contractors",
        ],
      },
    ],
    techStack: [
      "Palo Alto & Fortinet Next-Gen Firewalls",
      "CrowdStrike & Microsoft Defender EDR",
      "Cloud DDoS Scrubbing Mesh",
      "SIEM & SOAR Threat Intelligence",
      "Zero Trust Network Access (ZTNA)",
      "SSL / TLS 1.3 Deep Inspection",
      "Web Application Firewall (WAF)",
      "24/7 SOC Analyst Monitoring",
    ],
    processSteps: [
      {
        step: "01",
        title: "Vulnerability & Attack Surface Audit",
        desc: "We perform comprehensive external port scans, firewall rule audits, and penetration tests to locate security gaps.",
      },
      {
        step: "02",
        title: "Clean Pipe & Perimeter Hardening",
        desc: "We route your public IP prefixes through our automated DDoS scrubbing filters and deploy Next-Gen firewalls.",
      },
      {
        step: "03",
        title: "SIEM Log Integration & Sensor Deployment",
        desc: "Network telemetry, firewall logs, and server events are fed into our 24/7 SOC analytics engine for continuous correlation.",
      },
      {
        step: "04",
        title: "24/7 Threat Hunting & Incident Response",
        desc: "Our certified security team monitors for suspicious activities round-the-clock, containing threats in under 15 minutes.",
      },
    ],
    caseStudies: [
      {
        title: "DDoS Defense for Online FinTech Exchange",
        client: "High-Frequency Financial Trading Platform",
        impact: "Neutralized 140 Gbps distributed volumetric attack in 8 seconds with zero trading downtime or data leakage.",
        image: "/banner-network-matrix.jpg",
      },
    ],
    faqs: [
      {
        question: "How does upstream DDoS scrubbing protect our connection?",
        answer:
          "If an attacker sends 50 Gbps of junk traffic toward a 1 Gbps leased line, the physical cable saturates and crashes regardless of on-premise firewalls. Upstream DDoS scrubbing filters the malicious traffic at our Tier-1 carrier scrubbing centers, forwarding only clean legitimate packets to your line.",
      },
      {
        question: "Can we replace our existing office VPN with Zero Trust?",
        answer:
          "Yes. Traditional VPNs grant users full access to the entire local network once logged in. Zero Trust Network Access (ZTNA) verifies identity and device posture on every request, granting access strictly to the single application the user needs.",
      },
    ],
    structuredSection: {
      title: "CARRIER-GRADE ENTERPRISE CYBERSECURITY",
      description:
        "Comprehensive perimeter protection, 24/7 SOC surveillance, and zero-trust access control for modern businesses.",
      checklist: [
        "2 Tbps+ Multi-Terabit Cloud DDoS Scrubbing",
        "24/7/365 Managed Security Operations Center (SOC)",
        "Next-Gen Firewall as a Service (Fortinet / Palo Alto)",
        "Zero Trust Network Access (ZTNA) Architecture",
        "Automated Threat Intelligence & Log Correlation",
        "Sub-15 Minute Incident Containment SLA",
        "Regular Vulnerability & Compliance Audits",
        "Dedicated Cyber Defense Hotline (+91 82874 79961)",
      ],
      whyChooseTitle: "WHY ADAPT INDIA CYBERSECURITY?",
      whyChooseDesc:
        "Because we control the underlying physical telecom fiber and IP routing, we can block cyber threats at the carrier backbone before they ever reach your office doorstep.",
      whyChooseBullets: [
        "Carrier-Level Network Scrubbing Infrastructure",
        "Certified CISSP & CEH Security Analysts on Duty",
        "Full Compliance with RBI, SEBI, and ISO 27001",
        "Zero Capital Investment: Pure Monthly OPEX",
        "Co-Managed or Fully Managed Security Tiers",
        "Immediate Containment with Zero Bureaucracy",
      ],
    },
  },

  {
    slug: "managed-services",
    name: "24/7/365 Managed NOC & Network Operations",
    category: "Managed Services",
    tagline: "Proactive Monitoring, SLA Management, Multi-Vendor Router Support",
    heroHeadline: "Certified L3 Engineering Surveillance for",
    heroHighlight: "Uninterrupted Network Health.",
    heroSubtitle:
      "Entrust network management to certified Cisco, Juniper, and Fortinet engineers. Real-time SNMP/NetFlow telemetry, proactive fault detection, BGP optimization, and direct hotline to senior NOC architects.",
    image: "/resources/network_engineer_ops.jpg",
    galleryImages: ["/banner-datacenter-racks.jpg", "/banner-servers-lights.jpg", "/banner-network-matrix.jpg"],
    stats: [
      { value: "24/7/365", label: "Uninterrupted Live NOC Watch" },
      { value: "< 15 Mins", label: "Guaranteed L3 Response Time" },
      { value: "100%", label: "Real-Time Telemetry Transparency" },
      { value: "Pan-India", label: "Field Engineer Dispatch Fleet" },
    ],
    overview:
      "Enterprise networks are complex ecosystems of multi-vendor routers, SD-WAN controllers, optical transceivers, and firewalls. Maintaining an internal 24/7 shift of senior L3 network engineers is cost-prohibitive. Adapt India Network provides round-the-clock managed Network Operations Center (NOC) services as an extension of your IT team.",
    theChallenge:
      "Internal IT staff are consumed by daily user troubleshooting, leaving core network telemetry unmonitored. When outages occur at night or on weekends, delayed detection leads to costly downtime and lost business.",
    ourSolution:
      "Our centralized NOC continuously polls your network infrastructure via SNMPv3, NetFlow, and synthetic heartbeats. When anomalies appear, our engineers proactively remediate faults, reroute BGP traffic, or dispatch field teams before users notice.",
    capabilities: [
      {
        title: "Proactive Fault & Performance Monitoring",
        description: "Continuous real-time polling of bandwidth utilization, CPU loads, memory, packet loss, and optical power levels.",
        deliverables: [
          "Automated sub-minute threshold breach alerts",
          "Proactive ticket creation and client notification",
          "Optical fiber dB attenuation tracking to predict cable degradation",
          "Real-time customer dashboard with MRTG graphs",
        ],
      },
      {
        title: "Multi-Vendor Router & Firewall Management",
        description: "End-to-end administration of Cisco, Juniper, Fortinet, and Mikrotik routing appliances.",
        deliverables: [
          "BGP-4 and OSPF dynamic routing optimization",
          "Automated configuration backups and change auditing",
          "Scheduled firmware upgrades and CVE vulnerability patching",
          "Hardware health monitoring and warranty RMA dispatch",
        ],
      },
      {
        title: "Guaranteed SLA Enforcement & Reporting",
        description: "We hold all upstream telecom carriers accountable to your contractual uptime and latency metrics.",
        deliverables: [
          "Automated calculation of monthly availability percentages",
          "Latency and packet loss historical trend analysis",
          "Carrier escalation management on your behalf",
          "Comprehensive monthly executive network health reports",
        ],
      },
      {
        title: "Pan-India Field Engineering Dispatch",
        description: "When physical hardware failures or optical fiber breaks happen, our local technicians deploy directly to site.",
        deliverables: [
          "On-site presence in 100+ major industrial and metro cities",
          "Spare router, SFP module, and patch cord inventory",
          "Optical Time-Domain Reflectometer (OTDR) fiber testing",
          "4-hour Mean Time to Restore (MTTR) SLA commitment",
        ],
      },
    ],
    techStack: [
      "SNMPv3 & NetFlow / IPFIX Monitoring",
      "Cisco IOS-XE / NX-OS Administration",
      "Juniper Junos Core Routing",
      "Fortinet FortiOS Firewall Ops",
      "Automated Configuration Versioning (GitOps)",
      "OTDR Optical Fiber Fault Locators",
      "24/7 Escalation Desk (+91 82874 79961)",
    ],
    processSteps: [
      {
        step: "01",
        title: "Network Topology Discovery & Baseline",
        desc: "We inventory all active routers, switches, circuits, and subnets to establish normal latency and utilization baselines.",
      },
      {
        step: "02",
        title: "SNMP & NetFlow Sensor Integration",
        desc: "Secure telemetry collectors are configured to stream device health and bandwidth metrics into our central NOC engine.",
      },
      {
        step: "03",
        title: "SOP & Escalation Matrix Formulation",
        desc: "We co-author standard operating procedures detailing exact steps, contacts, and automated actions for every incident tier.",
      },
      {
        step: "04",
        title: "24/7/365 Live Operational Surveillance",
        desc: "Our senior L3 engineers assume round-the-clock stewardship of your enterprise network health.",
      },
    ],
    caseStudies: [
      {
        title: "NOC Outsourcing for Nationwide Logistics Chain",
        client: "Logistics Hub with 120 Regional Depots",
        impact: "Reduced average incident resolution time from 3.8 hours to 22 minutes with zero weekend service interruptions.",
        image: "/resources/network_engineer_ops.jpg",
      },
    ],
    faqs: [
      {
        question: "Can your NOC manage hardware we already own?",
        answer:
          "Yes. We support co-managed and fully managed environments across your existing Cisco, Juniper, Fortinet, and Mikrotik hardware, regardless of which ISP provides the circuit.",
      },
      {
        question: "How do we contact the NOC in case of emergency?",
        answer:
          "Every enterprise client is assigned a direct VIP telephone hotline (+91 82874 79961), a dedicated Slack/Teams channel, and priority portal access connecting directly to senior L3 network architects.",
      },
    ],
    structuredSection: {
      title: "PROACTIVE MANAGED NETWORK OPERATIONS CENTER (NOC)",
      description:
        "Senior certified network engineering stewardship around the clock for mission-critical enterprise infrastructure.",
      checklist: [
        "24/7/365 Live Senior L3 Engineering Watch",
        "Sub-15 Minute Incident Response Guarantee",
        "Multi-Vendor Cisco, Juniper & Fortinet Support",
        "Proactive Optical Fiber Attenuation Monitoring",
        "Automated Configuration Backups & Change Audits",
        "Pan-India On-Site Field Technician Dispatch",
        "Carrier SLA Tracking & Credit Enforcement",
        "Direct Engineer VIP Hotline (+91 82874 79961)",
      ],
      whyChooseTitle: "WHY CHOOSE ADAPT INDIA MANAGED NOC?",
      whyChooseDesc:
        "We don't just alert you that your network is down—we fix it. Our senior engineers have direct carrier peering access to reroute traffic and resolve bottlenecks instantly.",
      whyChooseBullets: [
        "Zero Reliance on L1 Script Readers",
        "Comprehensive Knowledge of Indian Telecom Routing",
        "Strict 4-Hour On-Site MTTR Guarantee",
        "Transparent Real-Time Customer Telemetry Portal",
        "Significant Cost Savings vs In-House 24/7 Teams",
        "Proactive Firmware & Security Vulnerability Patching",
      ],
    },
  },

  {
    slug: "bundled-solutions",
    name: "Bundled Enterprise Telecom Solutions",
    category: "Bundled Solutions",
    tagline: "Packaged Connectivity, Security & Voice for Multi-Location Retail & Branches",
    heroHeadline: "Pre-Integrated Turnkey Telecom & IT Bundles for",
    heroHighlight: "Accelerated Enterprise Expansion.",
    heroSubtitle:
      "Rapidly launch retail chains, bank branches, and regional warehouses with packaged fiber leased lines, dual-carrier 4G/5G failover, SD-WAN routing, and cloud telephony on a single predictable bill.",
    image: "/banner-what-we-do.jpg",
    galleryImages: ["/banner-datacenter-racks.jpg", "/wifi-banner.jpg", "/banner-network-matrix.jpg"],
    stats: [
      { value: "72 Hours", label: "Fast-Track Branch Rollout" },
      { value: "Dual-WAN", label: "Fiber + 4G/5G Redundancy" },
      { value: "Up to 35%", label: "Bundled Cost Savings" },
      { value: "1 SLA", label: "Single Point of Accountability" },
    ],
    overview:
      "Opening dozens of regional branches, logistics centers, or retail showrooms requires rapid, predictable IT deployment. Adapt India Network's Bundled Solutions package high-speed leased line connectivity, SD-WAN failover, cloud voice, and security firewalls into standardized, ready-to-deploy enterprise kits.",
    theChallenge:
      "Enterprise expansion slows down when regional managers must negotiate with different local ISPs in every city, coordinate hardware deliveries, and deal with inconsistent service qualities.",
    ourSolution:
      "We provide standardized branch bundles delivered and configured by our nationwide engineering fleet, ensuring every location matches corporate security and connectivity standards under one master contract.",
    capabilities: [
      {
        title: "Branch-in-a-Box Pack",
        description: "The complete connectivity starter package for new retail stores, commercial offices, and regional warehouses.",
        deliverables: [
          "Dedicated 50 Mbps / 100 Mbps fiber leased line",
          "Automated dual-SIM 4G/5G cellular backup gateway",
          "Managed enterprise Wi-Fi 6 access points",
          "Integrated cloud voice extensions with IVR",
        ],
      },
      {
        title: "Retail Dual-Failover POS Continuity Bundle",
        description: "Engineered specifically to prevent retail billing counter downtime during critical shopping weekends.",
        deliverables: [
          "Sub-second automated failover to cellular backup",
          "Isolated PCI-DSS compliant POS payment VLAN",
          "Store footfall Wi-Fi analytics captive portal",
          "Centralized store connectivity dashboard",
        ],
      },
      {
        title: "ILL + SD-WAN Hybrid Enterprise Bundle",
        description: "Combines Tier-1 fiber reliability with intelligent software-defined application steering.",
        deliverables: [
          "1:1 dedicated symmetrical leased line",
          "Managed SD-WAN edge router with cloud controller",
          "Next-Gen Firewall with content filtering",
          "Direct cloud on-ramps to AWS and Azure",
        ],
      },
      {
        title: "Single Consolidated Master SLA",
        description: "One predictable monthly invoice covering all branch locations nationwide with unified NOC escalation.",
        deliverables: [
          "Consolidated billing across all cities and branches",
          "Single contractual SLA guaranteeing 99.999% uptime",
          "Dedicated enterprise national account manager",
          "Online portal showing all branch link statuses",
        ],
      },
    ],
    techStack: [
      "Turnkey Branch Gateway Hardware",
      "Fiber ILL + 4G/5G LTE Bonding",
      "SD-WAN Automated Traffic Steering",
      "Cloud PBX / SIP Calling",
      "Enterprise Wi-Fi 6 Access Points",
      "Centralized Multi-Site Dashboard",
    ],
    processSteps: [
      {
        step: "01",
        title: "Store / Branch Template Standardization",
        desc: "We define standard hardware and bandwidth profiles tailored to your store or branch size.",
      },
      {
        step: "02",
        title: "Pre-Staging & Nationwide Dispatch",
        desc: "Hardware is pre-configured with your corporate SSIDs, firewall rules, and voice extensions before dispatch.",
      },
      {
        step: "03",
        title: "On-Site Installation by Local Engineers",
        desc: "Our local field technicians complete fiber termination, Wi-Fi placement, and POS testing in 72 hours.",
      },
      {
        step: "04",
        title: "Centralized Multi-Store Management",
        desc: "Monitor all store networks from a single portal backed by our 24/7/365 enterprise NOC team.",
      },
    ],
    caseStudies: [
      {
        title: "Turnkey Connectivity for 80 QSR Outlets",
        client: "Fast-Growing Quick Service Restaurant Chain",
        impact: "Rolled out 80 store bundles in 45 days, achieving 100% POS billing continuity during peak holiday rushes.",
        image: "/banner-what-we-do.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we add new branches to our bundle dynamically?",
        answer:
          "Yes. Our master enterprise agreement allows you to add or relocate branch packs across 100+ cities seamlessly with standardized pricing and fast 72-hour turnarounds.",
      },
      {
        question: "What happens if the primary fiber cable is cut?",
        answer:
          "The branch bundle automatically shifts traffic to the integrated high-speed 4G/5G cellular link in under 50 milliseconds, keeping POS payments and VoIP phones operational without human intervention.",
      },
    ],
    structuredSection: {
      title: "STANDARDIZED ENTERPRISE BRANCH BUNDLES",
      description:
        "The fastest, most cost-effective way to power distributed retail stores and branch networks nationwide.",
      checklist: [
        "High-Speed 1:1 Dedicated Fiber Leased Line",
        "Automated Dual-SIM 4G/5G Backup Failover",
        "Integrated SD-WAN Multi-Path Optimization",
        "Managed Enterprise Wi-Fi 6 Access Points",
        "Cloud PBX Voice Extensions & Phone Lines",
        "Single Consolidated National Monthly Invoice",
        "Fast-Track 72-Hour Branch Installation",
        "24/7/365 Proactive NOC Monitoring & Support",
      ],
      whyChooseTitle: "WHY ADAPT INDIA BUNDLED SOLUTIONS?",
      whyChooseDesc:
        "We eliminate the nightmare of managing dozens of local telecom vendors across different states. Adapt India Network gives you one standardized, carrier-grade partner nationwide.",
      whyChooseBullets: [
        "Up to 35% Lower Cost Compared to Separate Services",
        "Rapid Deployment Across 100+ Metro Hubs",
        "Zero-Touch Automated Branch Configuration",
        "Single Master SLA Covering All Locations",
        "Immediate Replacement for Failed Hardware",
        "Dedicated National Account Management",
      ],
    },
  },

  {
    slug: "point-to-point-leased-line",
    name: "Point-to-Point (P2P) Leased Line",
    category: "Network & Connectivity",
    tagline: "Ultra-Low Latency Dedicated Layer-2 Ethernet for Data Centers & HQs",
    heroHeadline: "Dedicated Unshared Point-to-Point Circuits for",
    heroHighlight: "Ultra-High Speed Data Replication.",
    heroSubtitle:
      "Connect primary data centers, disaster recovery facilities, and enterprise headquarters over dedicated Layer-2 optical circuits with zero internet overhead, deterministic latency, and 99.999% SLA availability.",
    image: "/banner-servers-lights.jpg",
    galleryImages: ["/banner-datacenter-racks.jpg", "/banner-network-matrix.jpg", "/banner-global-telecom.jpg"],
    stats: [
      { value: "100%", label: "Dedicated Layer-2 Clear Channel" },
      { value: "10 Gbps+", label: "High-Capacity Optical Wavelengths" },
      { value: "< 5ms", label: "Intra-City Low Latency" },
      { value: "99.999%", label: "Ring Protected Availability" },
    ],
    overview:
      "When enterprises transfer massive database volumes between primary data centers, disaster recovery sites, or corporate campuses, public internet routing is too slow and variable. Adapt India Network's Point-to-Point (P2P) Leased Line delivers transparent, dedicated Layer-2 Ethernet pipes with zero routing overhead.",
    theChallenge:
      "High-frequency financial trading, real-time SAN storage replication, and high-throughput backup transfers require deterministic microsecond latency that standard routed VPNs cannot deliver.",
    ourSolution:
      "We provide clear-channel Point-to-Point connectivity terminated directly on optical DWDM transport rings. Your data travels directly between endpoints with zero third-party visibility and microsecond transit speeds.",
    capabilities: [
      {
        title: "Transparent Layer-2 Ethernet Transport",
        description: "Passes all protocols, VLAN tags (802.1Q/802.1ad QinQ), and jumbo frames transparently between your sites.",
        deliverables: [
          "Bandwidth capacities from 50 Mbps to 10 Gbps and 100 Gbps",
          "Full support for Jumbo Frames (up to 9,000 MTU)",
          "Encapsulation agnostic: MPLS, IP, VLANs, and Fibre Channel",
          "Zero packet inspection or protocol interference",
        ],
      },
      {
        title: "Deterministic Low-Latency Optical Core",
        description: "Direct optical fiber paths chosen for minimal physical distance and zero router hop delays.",
        deliverables: [
          "Sub-5ms intra-city round trip time guarantee",
          "Zero packet jitter for storage replication (SAN/NAS)",
          "Carrier-grade DWDM ring architecture with sub-50ms self-healing",
          "Contractually guaranteed latency SLA metrics",
        ],
      },
      {
        title: "Physical & Logical Ring Protection",
        description: "Dual geographically separated fiber paths ensure continuous transmission even during physical cable cuts.",
        deliverables: [
          "Diverse physical conduit entry into your building",
          "Automated optical protection switching (APS)",
          "Continuous optical power budget telemetry",
          "No single point of failure between connected locations",
        ],
      },
      {
        title: "Complete Air-Gapped Data Privacy",
        description: "Zero connection to public internet infrastructure, providing natural immunity against cyber attacks.",
        deliverables: [
          "Completely private point-to-point optical wavelength",
          "Compliant with the strictest banking and defense security regulations",
          "Optional MACsec Layer-2 hardware encryption",
          "Transparent NetFlow and circuit performance monitoring",
        ],
      },
    ],
    techStack: [
      "DWDM Optical Transport",
      "Carrier Ethernet 2.0 (MEF 3.0)",
      "Layer-2 802.1ad QinQ VLAN Tagging",
      "Jumbo Frames (9000 MTU)",
      "Optical Protection Switching (APS)",
      "MACsec Hardware Encryption",
      "Cisco & Ciena Optical Switches",
    ],
    processSteps: [
      {
        step: "01",
        title: "Feasibility & Optical Path Audits",
        desc: "We verify optical trenching routes between your two endpoint sites to calculate precise path mileage and latency.",
      },
      {
        step: "02",
        title: "Optical Fiber Termination",
        desc: "Single-mode fiber is blown into both facilities and terminated into optical transceivers on dedicated carrier switches.",
      },
      {
        step: "03",
        title: "RFC 2544 Throughput & Jitter Certification",
        desc: "Comprehensive 24-hour soak tests validating full line-rate throughput, frame loss, and microsecond latency.",
      },
      {
        step: "04",
        title: "Hand-Off & 24/7 Optical NOC Surveillance",
        desc: "Circuit is delivered with clean SFP+ optical handoff backed by continuous optical dB monitoring.",
      },
    ],
    caseStudies: [
      {
        title: "Primary to DR Data Center Mirroring",
        client: "National Stock Broking Firm",
        impact: "Connected primary data center to DR facility with 10 Gbps P2P line, achieving real-time database replication with < 2ms latency.",
        image: "/banner-servers-lights.jpg",
      },
    ],
    faqs: [
      {
        question: "Can we run our own VLANs and jumbo frames across the P2P link?",
        answer:
          "Yes. Our P2P leased lines provide transparent Layer-2 transport, allowing you to pass 802.1Q tags, 802.1ad QinQ nested tags, and jumbo frames up to 9,000 MTU without restriction.",
      },
      {
        question: "How is P2P different from MPLS?",
        answer:
          "MPLS is a routed Layer-3 multi-point network managed by routing tables. P2P is a dedicated, clear-channel Layer-2 circuit between two specific locations, providing lower latency, zero router hops, and transparent protocol transport.",
      },
    ],
    structuredSection: {
      title: "HIGH-SPEED POINT-TO-POINT (P2P) LEASED LINE",
      description:
        "Dedicated clear-channel Layer-2 transport engineered for data center replication and low-latency workloads.",
      checklist: [
        "100% Dedicated Layer-2 Clear Channel",
        "Deterministic Microsecond Latency SLA",
        "Full Support for 9,000 MTU Jumbo Frames",
        "Dual-Path Geographically Diverse Optical Rings",
        "Transparent Protocol & VLAN Transmission",
        "Capacities from 50 Mbps to 10 Gbps+",
        "Complete Air-Gapped Privacy from Internet",
        "24/7/365 Dedicated Optical NOC Monitoring",
      ],
      whyChooseTitle: "WHY ADAPT INDIA P2P CIRCUITS?",
      whyChooseDesc:
        "We own and operate high-capacity optical fiber rings across key metro hubs, giving your enterprise direct, low-hop connectivity with guaranteed performance SLAs.",
      whyChooseBullets: [
        "Direct Data Center to Data Center Interconnects",
        "Strict 99.999% Service Level Agreement",
        "Sub-50ms Optical Auto-Switching Protection",
        "Optional End-to-End MACsec Encryption",
        "Fast 5-Day Commissioning on On-Net Sites",
        "Direct Hotline to Senior Optical Engineers",
      ],
    },
  },

  {
    slug: "enterprise-broadband",
    name: "Enterprise Broadband & Campus Wi-Fi",
    category: "Network & Connectivity",
    tagline: "High-Density Secure Business Wi-Fi & Ultra-Fast Fiber Broadband",
    heroHeadline: "High-Density Gigabit Broadband and Managed Wi-Fi 6 for",
    heroHighlight: "Modern Connected Workspaces.",
    heroSubtitle:
      "Equip commercial buildings, campus offices, and retail showrooms with ultra-fast gigabit fiber broadband, high-density Wi-Fi 6 access points, captive guest portals, and cloud-managed security.",
    image: "/wifi-banner.jpg",
    galleryImages: ["/banner-what-we-do.jpg", "/banner-datacenter-racks.jpg", "/banner-servers-lights.jpg"],
    stats: [
      { value: "1 Gbps", label: "Gigabit Fiber Access Speeds" },
      { value: "Wi-Fi 6", label: "High-Concurrency 802.11ax" },
      { value: "Captive Portal", label: "Secure Guest OTP Onboarding" },
      { value: "99.9%", label: "Business-Grade Uptime SLA" },
    ],
    overview:
      "Consumer broadband is inadequate for modern business environments where hundreds of laptops, smartphones, and IoT devices compete for airtime. Adapt India Network delivers business-grade fiber broadband bundled with enterprise-class cloud-managed Wi-Fi 6 networks.",
    theChallenge:
      "Offices suffer from Wi-Fi dead zones, dropped connections during conference calls, slow file downloads, and unmonitored guest access that poses cybersecurity vulnerabilities.",
    ourSolution:
      "We design heat-mapped campus Wi-Fi topologies, deploy commercial-grade Wi-Fi 6 access points with automatic channel management, and connect your premises to high-speed fiber broadband backed by enterprise support.",
    capabilities: [
      {
        title: "Gigabit Business Fiber Broadband",
        description: "Ultra-fast fiber broadband with business-grade routing, low contention, and reliable throughput.",
        deliverables: [
          "Speed plans from 100 Mbps up to 1 Gbps",
          "Optimized peering for cloud SaaS (Zoom, Teams, Google)",
          "Static IPv4 address included for local servers and CCTV",
          "Business-hours priority technical support desk",
        ],
      },
      {
        title: "High-Density Wi-Fi 6 (802.11ax) Access Points",
        description: "Commercial access points supporting 200+ concurrent active wireless devices per AP without slowdown.",
        deliverables: [
          "Seamless roaming between access points without disconnects",
          "Automated RF channel optimization and interference mitigation",
          "Power over Ethernet (PoE) clean ceiling-mounted installation",
          "Centralized cloud dashboard for multi-floor management",
        ],
      },
      {
        title: "Branded Guest Wi-Fi Captive Portal",
        description: "Secure, compliant guest onboarding with custom branding, OTP SMS authentication, and bandwidth throttling.",
        deliverables: [
          "Branded login page with your company logo and offers",
          "SMS OTP verification compliant with Indian telecom regulations",
          "Isolated guest VLAN protecting internal corporate computers",
          "Visitor footfall analytics and return visitor tracking",
        ],
      },
      {
        title: "Turnkey Installation & RF Heat-Mapping",
        description: "Our certified wireless engineers survey your premises to eliminate dead spots and optimize coverage.",
        deliverables: [
          "Predictive RF wireless coverage simulation",
          "Professional Cat6 structured cabling and PoE switches",
          "Zero-touch replacement warranty on all access points",
          "24/7 remote monitoring of AP health and traffic",
        ],
      },
    ],
    techStack: [
      "Wi-Fi 6 (802.11ax) Access Points",
      "Gigabit Fiber Optic Broadband",
      "Cloud Wi-Fi Controller Architecture",
      "WPA3 Enterprise Encryption",
      "SMS OTP Captive Portal Gateway",
      "802.1Q VLAN Isolation",
      "PoE+ Gigabit Network Switches",
    ],
    processSteps: [
      {
        step: "01",
        title: "Site RF Heat-Map & Capacity Survey",
        desc: "We analyze floor plans, wall materials, and user density to determine optimal access point placement.",
      },
      {
        step: "02",
        title: "Fiber Cable Pull & Structured Cabling",
        desc: "We route high-speed fiber into your facility and install clean Cat6 PoE cabling to every access point location.",
      },
      {
        step: "03",
        title: "Captive Portal & SSID Configuration",
        desc: "We configure your corporate private SSID (WPA3 Enterprise) and isolated guest Wi-Fi portal with SMS verification.",
      },
      {
        step: "04",
        title: "Speed Validation & Go-Live",
        desc: "Full walk-through speed and roaming verification ensuring flawless signal coverage in every room and hallway.",
      },
    ],
    caseStudies: [
      {
        title: "High-Density Campus Wi-Fi for Tech Hub",
        client: "Modern 3-Story Technology Office",
        impact: "Deployed 28 Wi-Fi 6 access points supporting 650 simultaneous engineer laptops with zero video call buffering.",
        image: "/wifi-banner.jpg",
      },
    ],
    faqs: [
      {
        question: "Is guest Wi-Fi isolated from our company computers?",
        answer:
          "Yes. We configure dedicated 802.1Q VLANs. Visitors on guest Wi-Fi can only access the public internet and are completely blocked from viewing or accessing corporate printers, servers, or employee laptops.",
      },
      {
        question: "Can this service act as a backup for our leased line?",
        answer:
          "Yes. Many enterprises use our Enterprise Broadband as an affordable, high-speed secondary backup line paired with an SD-WAN gateway for automated failover.",
      },
    ],
    structuredSection: {
      title: "GIGABIT BUSINESS BROADBAND & MANAGED WI-FI 6",
      description:
        "High-density wireless connectivity and ultra-fast fiber broadband tailored for commercial offices and retail spaces.",
      checklist: [
        "Gigabit Fiber Broadband Speeds up to 1 Gbps",
        "High-Density Wi-Fi 6 (802.11ax) Access Points",
        "Seamless Roaming Across Floors and Rooms",
        "Branded Guest Wi-Fi with SMS OTP Authentication",
        "Isolated Corporate & Guest Network VLANs",
        "Professional RF Heat-Mapping & Cat6 Cabling",
        "Cloud-Managed Dashboard with Device Analytics",
        "Business-Grade Priority Technical Support",
      ],
      whyChooseTitle: "WHY ADAPT INDIA ENTERPRISE WI-FI?",
      whyChooseDesc:
        "We eliminate Wi-Fi frustration forever. Our enterprise access points deliver rock-solid, high-speed wireless coverage engineered for high concurrency.",
      whyChooseBullets: [
        "No Dead Zones with Expert RF Engineering",
        "WPA3 Enterprise Encryption for Bank-Grade Security",
        "Zero Hardware Purchasing: Managed Rental Models",
        "Instant Replacement for Any Faulty Equipment",
        "Fast 3-Day Installation Turnaround",
        "Direct Escalation to Wireless Engineers",
      ],
    },
  },
{
  "slug": "internet-leased-line",
  "name": "Internet Leased Line (ILL)",
  "category": "Network & Connectivity",
  "tagline": "Carrier-Grade 1:1 Dedicated Symmetrical Bandwidth with 99.999% SLA",
  "heroHeadline": "Enterprise Internet Leased Line (ILL) Built for",
  "heroHighlight": "Uninterrupted High-Speed Operations.",
  "heroSubtitle": "Dedicated, unshared symmetrical bandwidth engineered for zero packet loss, sub-15ms inter-metro latency, cloud-based DDoS scrubbing, and 24/7/365 proactive NOC monitoring.",
  "image": "/banner-datacenter-racks.jpg",
  "galleryImages": [
    "/banner-network-matrix.jpg",
    "/banner-servers-lights.jpg",
    "/banner-global-telecom.jpg"
  ],
  "stats": [
    {
      "value": "99.999%",
      "label": "Guaranteed SLA Uptime"
    },
    {
      "value": "1:1",
      "label": "Symmetric Bandwidth (No Contention)"
    },
    {
      "value": "< 15ms",
      "label": "Pan-India Tier-1 Latency"
    },
    {
      "value": "< 4 Hours",
      "label": "Mean Time to Restore (MTTR)"
    }
  ],
  "overview": "Adapt India Network's Internet Leased Line (ILL) provides businesses with dedicated, uncontended internet connectivity over optical fiber. Backed by industry-leading SLAs, enterprise-grade routing, and dual-last-mile redundancy, our ILL ensures high availability and lightning-fast speeds for critical cloud applications.",
  "theChallenge": "Standard broadband connections suffer from fluctuating speeds, peak-hour congestion, high latency, and poor upload bandwidth, causing disruptions in VoIP calls, cloud data backups, and video conferencing.",
  "ourSolution": "We deliver 1:1 symmetrical bandwidth over carrier-class optical fiber with guaranteed bandwidth reservation, dual-path fiber redundancy, and 24/7 proactive monitoring from our Network Operations Center.",
  "capabilities": [
    {
      "title": "1:1 Dedicated Bandwidth",
      "description": "Zero contention ratio ensuring 100% of your purchased bandwidth is available at all times.",
      "deliverables": [
        "Speeds from 10 Mbps to 10 Gbps",
        "Equal upload and download speeds",
        "SFP / RJ45 Gigabit handoff",
        "On-demand burstable bandwidth"
      ]
    },
    {
      "title": "Dual Fiber Path Redundancy",
      "description": "Protected last-mile fiber routing entering your premises via diverse physical paths.",
      "deliverables": [
        "Automatic sub-50ms optical switchover",
        "Dual-homed BGP routing",
        "Secondary wireless/LTE failover",
        "N+1 core infrastructure"
      ]
    },
    {
      "title": "Integrated Anti-DDoS Protection",
      "description": "Always-on multi-terabit traffic scrubbing that filters malicious packets before they reach your network.",
      "deliverables": [
        "Volumetric attack mitigation",
        "Real-time threat detection",
        "Zero latency impact on clean traffic",
        "Detailed incident reports"
      ]
    },
    {
      "title": "Static IP Subnets & IPv6 Support",
      "description": "Dedicated static public IP pools with reverse DNS and dual-stack IPv4/IPv6 support.",
      "deliverables": [
        "Public IPv4 blocks (/29 to /24)",
        "Native IPv6 addressing",
        "Custom reverse DNS delegation",
        "BGP peering support"
      ]
    }
  ],
  "techStack": [
    "Single Mode Optical Fiber",
    "BGP-4 Multi-Homed Routing",
    "Cisco ASR / Catalyst",
    "Juniper MX Series",
    "IPv4 & IPv6 Dual-Stack",
    "Anti-DDoS Scrubbing",
    "SNMPv3 NOC Telemetry"
  ],
  "processSteps": [
    {
      "step": "01",
      "title": "Feasibility & Route Survey",
      "desc": "Our field engineers evaluate your location and design redundant optical fiber lead-in paths."
    },
    {
      "step": "02",
      "title": "Fiber Pull & Splicing",
      "desc": "Carrier-grade single-mode fiber is blown into your server room and terminated on managed switches."
    },
    {
      "step": "03",
      "title": "RFC 2544 Soak Testing",
      "desc": "24-hour rigorous testing measuring latency, throughput, and packet jitter before sign-off."
    },
    {
      "step": "04",
      "title": "Go-Live & 24/7 NOC Support",
      "desc": "Live service activation with automated telemetry monitoring and 15-minute SLA response."
    }
  ],
  "caseStudies": [
    {
      "title": "Pan-India Financial Firm Zero Downtime",
      "client": "Top FinTech NBFC",
      "impact": "Eliminated transaction drops across 42 branch locations with 99.99% measured uptime.",
      "image": "/banner-datacenter-racks.jpg"
    },
    {
      "title": "High-Throughput E-Commerce Hub",
      "client": "Leading Retail Logistics",
      "impact": "Upgraded primary hub to 2 Gbps redundant ILL with sub-10ms cloud latency.",
      "image": "/banner-network-matrix.jpg"
    }
  ],
  "faqs": [
    {
      "question": "What is the difference between ILL and standard broadband?",
      "answer": "An Internet Leased Line provides 1:1 dedicated, unshared bandwidth with equal upload and download speeds and a guaranteed 99.9% uptime SLA, whereas broadband is shared and asymmetrical."
    },
    {
      "question": "How fast is service restored in case of a fiber cut?",
      "answer": "Our circuits feature automated dual-path fiber switchover in under 50 milliseconds, with a committed 4-hour MTTR for physical cable restorations."
    },
    {
      "question": "Do you provide static IP addresses with ILL?",
      "answer": "Yes, every Internet Leased Line comes with a dedicated pool of public static IPv4 addresses and native IPv6 subnets."
    }
  ]
},
{
  "slug": "sd-wan",
  "name": "Managed SD-WAN Solutions",
  "category": "Network & Connectivity",
  "tagline": "Intelligent Application-Aware Routing & Cloud-Delivered WAN Optimization",
  "heroHeadline": "Modern Software-Defined WAN (SD-WAN) For",
  "heroHighlight": "Agile Multi-Site Enterprises.",
  "heroSubtitle": "Unify multi-cloud connectivity, automate path steering across ILL, broadband, and 4G/5G, and secure branch traffic with centralized zero-touch policy orchestration.",
  "image": "/adapt-sd-wan-clean.jpg",
  "galleryImages": [
    "/banner-network-matrix.jpg",
    "/fabric-intelligence.jpg",
    "/fabric-resilience.jpg"
  ],
  "stats": [
    {
      "value": "40%",
      "label": "Bandwidth Cost Reduction"
    },
    {
      "value": "< 10ms",
      "label": "Dynamic Path Failover"
    },
    {
      "value": "100%",
      "label": "Centralized Cloud Visibility"
    },
    {
      "value": "Zero-Touch",
      "label": "Remote Branch Provisioning"
    }
  ],
  "overview": "Adapt India Network's Managed SD-WAN transforms rigid legacy networks into flexible, software-driven fabrics. It dynamically steers application traffic across hybrid links (ILL, MPLS, broadband, LTE), ensuring critical applications like ERP, CRM, and video calls always experience peak performance.",
  "theChallenge": "Managing dozens or hundreds of distributed branch offices with traditional routers requires complex manual configurations, expensive MPLS circuits, and offers poor visibility into SaaS application performance.",
  "ourSolution": "Our cloud-managed SD-WAN provides zero-touch branch deployment, intelligent multi-path steering, end-to-end IPsec encryption, and unified single-pane-of-glass telemetry across your entire enterprise.",
  "capabilities": [
    {
      "title": "Application-Aware Dynamic Path Steering",
      "description": "Automatically routes mission-critical traffic over the best-performing link based on real-time jitter, loss, and latency.",
      "deliverables": [
        "Sub-second packet-level failover",
        "Quality of Service (QoS) prioritization",
        "Direct-to-Cloud SaaS breakout",
        "Bandwidth aggregation across hybrid links"
      ]
    },
    {
      "title": "Zero-Touch Provisioning (ZTP)",
      "description": "Deploy new branch locations in minutes by shipping pre-configured edge appliances that pull policies from the cloud.",
      "deliverables": [
        "Centralized cloud portal",
        "Plug-and-play installation",
        "Automated configuration push",
        "Remote firmware updates"
      ]
    },
    {
      "title": "Integrated Edge Security & SASE",
      "description": "Built-in stateful firewall, URL filtering, intrusion prevention, and secure web gateway at every branch edge.",
      "deliverables": [
        "AES-256 IPsec tunnel encryption",
        "Next-Gen Firewall integration",
        "Secure internet breakout (SASE)",
        "Granular application access controls"
      ]
    },
    {
      "title": "Real-Time Telemetry & Analytics",
      "description": "Full visibility into branch utilization, top applications, latency metrics, and link health across India.",
      "deliverables": [
        "Live cloud dashboard",
        "Automated anomaly alerts",
        "Historical capacity planning reports",
        "SLA monitoring logs"
      ]
    }
  ],
  "techStack": [
    "Cisco Meraki & Viptela",
    "Fortinet Secure SD-WAN",
    "VMware VeloCloud",
    "IPsec AES-256 Mesh",
    "BGP / OSPF Integration",
    "Cloud Orchestrator",
    "REST API Automation"
  ],
  "processSteps": [
    {
      "step": "01",
      "title": "Network Architecture Assessment",
      "desc": "We evaluate your branch topology, bandwidth utilization, and cloud workloads to design the optimal SD-WAN overlay."
    },
    {
      "step": "02",
      "title": "Policy & Security Modeling",
      "desc": "Define centralized QoS, firewall, and application prioritization rules in the orchestrator."
    },
    {
      "step": "03",
      "title": "Appliance Rollout & ZTP",
      "desc": "Dispatch edge appliances to branches; devices automatically register and download policies upon power-up."
    },
    {
      "step": "04",
      "title": "Continuous 24/7 Optimization",
      "desc": "Our NOC actively tracks link performance, reroutes traffic, and provides SLA analytics."
    }
  ],
  "caseStudies": [
    {
      "title": "150+ Retail Stores Unified",
      "client": "National Apparel Retailer",
      "impact": "Cut WAN expenditure by 45% while achieving 100% billing counter uptime across India.",
      "image": "/adapt-sd-wan-clean.jpg"
    },
    {
      "title": "Hybrid Cloud Interconnect for Healthcare",
      "client": "Hospital Chain",
      "impact": "Seamlessly connected 12 hospitals with zero packet loss for diagnostic imaging and telemedicine.",
      "image": "/banner-network-matrix.jpg"
    }
  ],
  "faqs": [
    {
      "question": "Can SD-WAN replace my existing MPLS network?",
      "answer": "Yes. SD-WAN can augment or completely replace expensive MPLS circuits by bonding business broadband, leased lines, and 4G/5G connections into a unified, secure overlay."
    },
    {
      "question": "How does SD-WAN improve video conferencing and VoIP quality?",
      "answer": "It actively monitors packet loss and jitter on each link and steers voice/video packets to the cleanest path in real-time, preventing stutter or drops."
    },
    {
      "question": "Is branch traffic encrypted?",
      "answer": "Yes, all inter-branch and branch-to-cloud traffic is encrypted with military-grade AES-256 IPsec tunnels."
    }
  ]
},
{
  "slug": "mpls",
  "name": "MPLS VPN Connectivity",
  "category": "Network & Connectivity",
  "tagline": "Private Carrier-Grade Multi-Branch Mesh Intranet with Strict QoS SLA",
  "heroHeadline": "Private Multi-Protocol Label Switching (MPLS) For",
  "heroHighlight": "Critical Enterprise Intra-Connectivity.",
  "heroSubtitle": "Connect your headquarters, regional data centers, branches, and remote facilities over a closed, highly secure private IP network with strict class-of-service guarantees.",
  "image": "/services/mpls_clean.jpg",
  "galleryImages": [
    "/network-mpls.png",
    "/banner-datacenter-racks.jpg",
    "/banner-servers-lights.jpg"
  ],
  "stats": [
    {
      "value": "99.99%",
      "label": "Intranet Availability SLA"
    },
    {
      "value": "< 25ms",
      "label": "Metro-to-Metro Latency"
    },
    {
      "value": "Strict CoS",
      "label": "Voice / Video / Data Prioritization"
    },
    {
      "value": "100%",
      "label": "Isolated Private Traffic"
    }
  ],
  "overview": "Adapt India Network's Managed MPLS VPN delivers enterprise-grade private connectivity designed for financial institutions, manufacturing chains, and large corporate enterprises that require complete isolation from the public internet.",
  "theChallenge": "Public internet connections carry inherent exposure to external threats, jitter, and congestion that can compromise sensitive ERP databases and intra-company data transfers.",
  "ourSolution": "Our MPLS VPN operates over dedicated label-switched paths completely partitioned from the public internet. We guarantee packet prioritization and latency SLAs across all corporate endpoints.",
  "capabilities": [
    {
      "title": "Private Any-to-Any Mesh Topology",
      "description": "Direct branch-to-branch communication without backhauling through the central head office.",
      "deliverables": [
        "Full mesh and hub-and-spoke topologies",
        "Multi-VRF (Virtual Routing & Forwarding)",
        "Seamless addition of new branch nodes",
        "Scalable bandwidth tiers per site"
      ]
    },
    {
      "title": "Class of Service (CoS) Prioritization",
      "description": "Tag and guarantee bandwidth for voice, video, ERP, and transactional database packets.",
      "deliverables": [
        "Real-time, mission-critical, and best-effort queues",
        "Strict priority queuing for voice",
        "Bandwidth reservation during peaks",
        "Zero jitter impact on critical flows"
      ]
    },
    {
      "title": "Complete Network Isolation",
      "description": "Operates on private IP address spaces entirely insulated from external cyber vulnerabilities.",
      "deliverables": [
        "Carrier-level routing partition",
        "Dedicated routing tables per client",
        "No exposure to internet attacks",
        "Regulatory and banking compliance"
      ]
    },
    {
      "title": "Hybrid Cloud MPLS Interconnect",
      "description": "Direct high-speed interconnects into AWS Direct Connect, Azure ExpressRoute, and Google Cloud.",
      "deliverables": [
        "Private cloud gateway",
        "Bypasses public internet routing",
        "Guaranteed throughput to cloud workloads",
        "Multi-region availability"
      ]
    }
  ],
  "techStack": [
    "Cisco ASR / Catalyst MPLS",
    "Juniper Networks Carrier Edge",
    "BGP-4 & MPLS LDP",
    "RFC 4364 BGP/MPLS IP VPNs",
    "IEEE 802.1p CoS Tagging",
    "24/7/365 NOC Engine"
  ],
  "processSteps": [
    {
      "step": "01",
      "title": "Topology & IP Addressing Design",
      "desc": "Design the WAN mesh structure, VRF partitions, and bandwidth requirements for each site."
    },
    {
      "step": "02",
      "title": "Dedicated Last-Mile Provisioning",
      "desc": "Deploy dedicated optical fiber links at each office location with managed customer edge routers."
    },
    {
      "step": "03",
      "title": "CoS & Routing Configuration",
      "desc": "Implement traffic classification rules, test voice prioritization, and establish routing peering."
    },
    {
      "step": "04",
      "title": "Full-Mesh Activation & Monitoring",
      "desc": "Launch the private network under continuous 24/7 NOC oversight with guaranteed uptime SLAs."
    }
  ],
  "caseStudies": [
    {
      "title": "National Bank Core Banking Network",
      "client": "Leading Private Bank",
      "impact": "Interconnected 85 branches with zero transaction latency and 99.99% network uptime.",
      "image": "/services/mpls_clean.jpg"
    },
    {
      "title": "Automotive Manufacturing Supply Chain",
      "client": "OEM Manufacturer",
      "impact": "Linked 6 manufacturing plants and 24 distribution hubs with real-time SAP ERP sync.",
      "image": "/banner-servers-lights.jpg"
    }
  ],
  "faqs": [
    {
      "question": "How is MPLS different from a regular VPN over the Internet?",
      "answer": "An internet VPN encrypts traffic over the public internet and is subject to latency spikes and outages. MPLS operates on a private carrier backbone with guaranteed SLAs and strict packet prioritization."
    },
    {
      "question": "Can we mix high-speed ILL with MPLS?",
      "answer": "Yes, we frequently implement hybrid networks where MPLS handles private corporate transactions while ILL manages general web traffic and SaaS."
    },
    {
      "question": "What SLAs are provided with MPLS?",
      "answer": "We offer 99.99% availability SLAs, sub-25ms latency guarantees, and 24/7/365 L3 support with a 4-hour restoration commitment."
    }
  ]
},
{
  "slug": "managed-wifi",
  "name": "Enterprise Managed Wi-Fi",
  "category": "Network & Connectivity",
  "tagline": "High-Density Wi-Fi 6/7 Deployments, Cloud Controller & Guest Portal Analytics",
  "heroHeadline": "High-Density Enterprise Managed Wi-Fi For",
  "heroHighlight": "Offices, Retail, Warehouses & Campuses.",
  "heroSubtitle": "Turnkey enterprise wireless solutions featuring carrier-grade Wi-Fi 6/7 access points, centralized cloud management, seamless roaming, and enterprise WPA3 security.",
  "image": "/wifi-banner.jpg",
  "galleryImages": [
    "/banner-network-matrix.jpg",
    "/banner-servers-lights.jpg",
    "/fabric-resilience.jpg"
  ],
  "stats": [
    {
      "value": "Wi-Fi 6/7",
      "label": "Next-Gen Wireless Standards"
    },
    {
      "value": "500+",
      "label": "Concurrent Clients Per Access Point"
    },
    {
      "value": "100%",
      "label": "Seamless Campus Roaming"
    },
    {
      "value": "WPA3",
      "label": "Enterprise Security Protocol"
    }
  ],
  "overview": "Modern workspaces demand dense, high-speed wireless connectivity that supports hundreds of laptops, mobile devices, and IoT hardware without dropouts. Adapt India Network designs, installs, and manages turnkey enterprise Wi-Fi networks.",
  "theChallenge": "Consumer and unmanaged wireless equipment frequently crashes under high client density, suffers from dead zones, lacks rogue AP protection, and provides zero guest analytics.",
  "ourSolution": "We deploy enterprise-grade access points, conduct predictive RF heat mapping, and manage everything through a cloud controller with automated radio resource management and role-based access control.",
  "capabilities": [
    {
      "title": "Predictive RF Site Surveys & Heatmapping",
      "description": "Acoustic and radio frequency modeling to eliminate dead zones and ensure uniform signal coverage.",
      "deliverables": [
        "Ekahau RF 3D heat mapping",
        "Optimal AP density calculations",
        "Interference mitigation design",
        "Spectrum analysis reports"
      ]
    },
    {
      "title": "Cloud-Managed Wi-Fi Controller",
      "description": "Centralized configuration, automated channel tuning, and remote client troubleshooting from one portal.",
      "deliverables": [
        "Single-dashboard management",
        "Automated channel & power optimization",
        "Fast 802.11r/k/v seamless roaming",
        "Detailed client performance telemetry"
      ]
    },
    {
      "title": "Branded Captive Portal & Guest Analytics",
      "description": "Custom guest onboarding portals with SMS OTP verification, social login, and marketing footfall telemetry.",
      "deliverables": [
        "Compliant SMS OTP authentication",
        "Visitor dwell time analytics",
        "Bandwidth throttling per user",
        "Custom corporate splash pages"
      ]
    },
    {
      "title": "WPA3 Enterprise & 802.1X Security",
      "description": "Integrate with Microsoft Active Directory, LDAP, or Google Workspace for secure corporate network access.",
      "deliverables": [
        "Per-user certificate authentication",
        "Automated VLAN assignment by department",
        "Rogue AP detection & containment",
        "Isolated IoT network partitions"
      ]
    }
  ],
  "techStack": [
    "Wi-Fi 6E & Wi-Fi 7",
    "Aruba Networks & Cisco Catalyst",
    "Ruckus Wireless",
    "Cloud Wi-Fi Controller",
    "802.1X RADIUS Authentication",
    "WPA3 Enterprise Encryption"
  ],
  "processSteps": [
    {
      "step": "01",
      "title": "RF Survey & Blueprint Audit",
      "desc": "We evaluate your floor plan and structural materials to map exact access point mounting positions."
    },
    {
      "step": "02",
      "title": "Structured Cabling & Hardware Install",
      "desc": "Installation of Cat6A cabling, PoE+ switches, and enterprise ceiling-mounted access points."
    },
    {
      "step": "03",
      "title": "SSID & Security Provisioning",
      "desc": "Configure corporate SSIDs with RADIUS authentication and isolated guest portals."
    },
    {
      "step": "04",
      "title": "24/7 Managed NOC Oversight",
      "desc": "Automated channel tuning, firmware patching, and rapid hardware replacement guarantees."
    }
  ],
  "caseStudies": [
    {
      "title": "50,000 Sq Ft Corporate Campus Wi-Fi",
      "client": "Global Tech Enterprise",
      "impact": "Deployed 64 Wi-Fi 6 APs supporting 1,800 concurrent devices with zero roaming drops.",
      "image": "/wifi-banner.jpg"
    },
    {
      "title": "High-Throughput Logistics Warehouse",
      "client": "National 3PL Provider",
      "impact": "Guaranteed 100% wireless barcode scanner coverage across 12-meter tall pallet racks.",
      "image": "/banner-network-matrix.jpg"
    }
  ],
  "faqs": [
    {
      "question": "What is the difference between Wi-Fi 6 and older Wi-Fi?",
      "answer": "Wi-Fi 6 (802.11ax) handles 4x more concurrent devices per access point, reduces battery drain on mobile devices, and maintains higher speeds in dense corporate environments."
    },
    {
      "question": "Can we track visitor footfall and guest demographics?",
      "answer": "Yes, our captive portal solution provides compliant SMS OTP login with dwell time, return visitor rates, and device telemetry."
    },
    {
      "question": "Is the hardware managed by your team?",
      "answer": "Yes, our Managed Wi-Fi service includes 24/7 remote monitoring, automated software updates, and next-business-day hardware replacements."
    }
  ]
},
{
  "slug": "cyber-security",
  "name": "Cyber Security & Threat Defense",
  "category": "Security & Compliance",
  "tagline": "Zero-Trust Edge Security, Clean Pipe Anti-DDoS & Next-Gen Cloud Firewall",
  "heroHeadline": "Enterprise Cyber Security & Cloud Defense For",
  "heroHighlight": "Safeguarding Mission-Critical Operations.",
  "heroSubtitle": "Protect your corporate network, cloud infrastructure, and distributed branch workforce with AI-driven threat intelligence, DDoS mitigation, and 24/7 SOC monitoring.",
  "image": "/fabric-intelligence.jpg",
  "galleryImages": [
    "/banner-datacenter-racks.jpg",
    "/banner-network-matrix.jpg",
    "/fabric-future.jpg"
  ],
  "stats": [
    {
      "value": "24/7/365",
      "label": "Active SOC Monitoring"
    },
    {
      "value": "Tbps Scale",
      "label": "DDoS Scrubbing Capacity"
    },
    {
      "value": "< 5 Mins",
      "label": "Threat Incident Response"
    },
    {
      "value": "ISO 27001",
      "label": "Certified Security Standards"
    }
  ],
  "overview": "Cyber threats evolve at breakneck speeds. Adapt India Network provides unified, carrier-grade cybersecurity solutions that protect your physical infrastructure, cloud workloads, and remote employees against ransomware, malware, and volumetric cyber attacks.",
  "theChallenge": "Modern businesses face sophisticated cyber attacks, including volumetric DDoS floods that take websites offline, targeted phishing, and credential compromise across distributed hybrid teams.",
  "ourSolution": "We offer multi-layered defense featuring cloud DDoS scrubbing, Next-Generation Firewall as a Service (FWaaS), secure remote access (Zero Trust Network Access), and continuous SOC threat hunting.",
  "capabilities": [
    {
      "title": "Clean Pipe DDoS Scrubbing",
      "description": "Defend against massive Layer 3/4 and Layer 7 volumetric attacks before they saturate your internet pipes.",
      "deliverables": [
        "Multi-terabit cloud scrubbing centers",
        "Automated BGP diversion within seconds",
        "Protection against SYN, UDP, and HTTP floods",
        "Comprehensive post-attack forensics"
      ]
    },
    {
      "title": "Next-Gen Firewall as a Service (FWaaS)",
      "description": "Deploy deep packet inspection, intrusion prevention (IPS), and web application filtering across all traffic.",
      "deliverables": [
        "Deep SSL/TLS traffic inspection",
        "Automated threat intelligence updates",
        "URL filtering and application control",
        "Malware sandboxing and emulation"
      ]
    },
    {
      "title": "Zero Trust Network Access (ZTNA)",
      "description": "Replace legacy VPNs with identity-aware, least-privilege access for remote employees and contractors.",
      "deliverables": [
        "Continuous device posture checking",
        "Per-application access authorization",
        "MFA and single sign-on integration",
        "Zero lateral attack movement"
      ]
    },
    {
      "title": "24/7 Security Operations Center (SOC)",
      "description": "Real-time SIEM log correlation, automated behavioral alerting, and human security analysts watching your perimeter.",
      "deliverables": [
        "24/7 security analyst monitoring",
        "Rapid containment SLAs (<15 mins)",
        "Vulnerability assessment scans",
        "Compliance reporting (RBI, ISO, SOC2)"
      ]
    }
  ],
  "techStack": [
    "Fortinet FortiGate",
    "Palo Alto Networks",
    "CrowdStrike Falcon",
    "Cloudflare Magic Transit",
    "Splunk / Wazuh SIEM",
    "Zero Trust Architecture (NIST 800-207)"
  ],
  "processSteps": [
    {
      "step": "01",
      "title": "Security Vulnerability Assessment",
      "desc": "Our ethical hackers conduct external perimeter scans and posture audits across your corporate network."
    },
    {
      "step": "02",
      "title": "Defense Architecture Design",
      "desc": "Tailor firewall policies, DDoS threshold triggers, and Zero Trust access groups to your workloads."
    },
    {
      "step": "03",
      "title": "Deployment & SIEM Integration",
      "desc": "Route network traffic through security scrubbers and stream telemetry into our 24/7 SOC."
    },
    {
      "step": "04",
      "title": "Continuous Threat Hunting",
      "desc": "Real-time mitigation of emerging exploits, automated patch alerts, and monthly executive briefings."
    }
  ],
  "caseStudies": [
    {
      "title": "E-Commerce Payment Gateway DDoS Defense",
      "client": "Digital Payments FinTech",
      "impact": "Successfully scrubbed a 180 Gbps volumetric attack with zero transaction latency.",
      "image": "/fabric-intelligence.jpg"
    },
    {
      "title": "Zero Trust Remote Access for 2,500 Staff",
      "client": "Enterprise BPO Firm",
      "impact": "Replaced vulnerable legacy SSL VPNs with ZTNA, slashing connection setup tickets by 70%.",
      "image": "/banner-datacenter-racks.jpg"
    }
  ],
  "faqs": [
    {
      "question": "What is clean pipe DDoS protection?",
      "answer": "Clean pipe protection diverts incoming traffic through scrubbing centers during an attack, removing malicious packets and delivering only genuine traffic to your servers."
    },
    {
      "question": "How does Zero Trust differ from traditional VPN?",
      "answer": "A traditional VPN grants access to the entire corporate network once logged in. Zero Trust grants access only to specific approved applications after continuously validating user identity and device health."
    },
    {
      "question": "Can you help our company meet RBI / ISO 27001 compliance?",
      "answer": "Yes, our cybersecurity architecture and SOC log retention policies are fully aligned with ISO 27001, CERT-In, and RBI IT governance guidelines."
    }
  ]
},
{
  "slug": "data-services",
  "name": "Enterprise Data & SIP Services",
  "category": "Voice & Data Solutions",
  "tagline": "High-Capacity SIP Trunks, PRI Lines, Toll-Free 1800 & Dedicated Data Circuits",
  "heroHeadline": "Scalable Enterprise Voice & Data Infrastructure For",
  "heroHighlight": "Modern Contact Centers & Corporate HQs.",
  "heroSubtitle": "Deliver crystalline enterprise voice and point-to-point data connectivity with unlimited concurrent channels, 99.95% uptime SLAs, and seamless IP-PBX integration.",
  "image": "/banner-global-telecom.jpg",
  "galleryImages": [
    "/banner-servers-lights.jpg",
    "/telephone-banner.jpg",
    "/telephone-studio.jpg"
  ],
  "stats": [
    {
      "value": "1,500+",
      "label": "Concurrent Channels Over Single Link"
    },
    {
      "value": "99.95%",
      "label": "Carrier Voice Uptime SLA"
    },
    {
      "value": "Pan-India",
      "label": "Toll-Free 1800 Coverage"
    },
    {
      "value": "G.711 / G.729",
      "label": "Crystal Clear HD Voice Codecs"
    }
  ],
  "overview": "Effective enterprise communication requires bulletproof voice trunks and high-speed point-to-point data circuits. Adapt India Network provides telecom-grade SIP trunking, PRI interfaces, and Toll-Free solutions backed by Tier-1 carrier agreements.",
  "theChallenge": "Traditional copper PRI lines are rigid, slow to scale, tied to physical server hardware, and prone to cross-talk, while standard VoIP providers suffer from jitter and echo.",
  "ourSolution": "Our enterprise SIP trunks deliver virtual channels over dedicated fiber connections with end-to-end Quality of Service (QoS) guarantees, instant scalability, and built-in disaster recovery rerouting.",
  "capabilities": [
    {
      "title": "High-Density SIP Trunking",
      "description": "Scale from 30 to 1,500+ concurrent audio calls over a single optical connection with zero channel blocking.",
      "deliverables": [
        "Direct IP handoff to IP-PBX (Asterisk, Cisco, Avaya)",
        "Dedicated voice bandwidth allocation",
        "Instant burstable channel scalability",
        "Comprehensive call detail records (CDR)"
      ]
    },
    {
      "title": "Pan-India Toll-Free Services (1800)",
      "description": "Give customers across India a memorable 1800 number with smart regional call routing and IVR integration.",
      "deliverables": [
        "Single national access number",
        "Time-based and geo-location routing",
        "Multi-branch hunt group forwarding",
        "Real-time call volume analytics dashboard"
      ]
    },
    {
      "title": "Primary Rate Interface (PRI) Lines",
      "description": "Reliable 30-channel E1 PRI lines for traditional digital PBX systems and high-volume corporate switchboards.",
      "deliverables": [
        "Standard G.703/E1 interface handoff",
        "Direct Inward Dialing (DID) number blocks",
        "Sub-second call setup time",
        "Full caller ID (CLI) presentation"
      ]
    },
    {
      "title": "Point-to-Point (P2P) Leased Data Circuits",
      "description": "Dedicated Layer 2 clear-channel connectivity connecting two corporate offices with zero public routing.",
      "deliverables": [
        "Speeds from 10 Mbps to 10 Gbps",
        "Lowest possible physical latency",
        "Completely uncompressed protocol transparent throughput",
        "Full hardware encryption compatible"
      ]
    }
  ],
  "techStack": [
    "Session Initiation Protocol (SIP)",
    "E1 / PRI ISDN Interfaces",
    "Cisco Unified Communications",
    "Avaya Aura & IP Office",
    "Session Border Controllers (SBC)",
    "G.711u / G.729 Codecs"
  ],
  "processSteps": [
    {
      "step": "01",
      "title": "Telephony Audit & Channel Sizing",
      "desc": "Calculate your peak concurrent call volumes, DID requirements, and PBX compatibility."
    },
    {
      "step": "02",
      "title": "Dedicated Voice Fiber Lead-in",
      "desc": "Deploy dedicated optical fiber with private IP routing directly into your server room."
    },
    {
      "step": "03",
      "title": "IP-PBX Interoperability Testing",
      "desc": "Configure SIP signaling, test codec negotiation, and verify CLI delivery across all telcos."
    },
    {
      "step": "04",
      "title": "Number Porting & Live Cutover",
      "desc": "Seamlessly port existing DIDs with zero downtime during off-peak windows."
    }
  ],
  "caseStudies": [
    {
      "title": "500-Seat Contact Center Voice Migration",
      "client": "National Customer Support BPO",
      "impact": "Replaced 16 copper PRIs with 500-channel SIP trunk, reducing telephony bills by 38%.",
      "image": "/banner-global-telecom.jpg"
    },
    {
      "title": "National Healthcare Helpline 1800",
      "client": "Hospital Network",
      "impact": "Handled 25,000+ daily patient inquiries with automated regional routing and 99.98% uptime.",
      "image": "/telephone-banner.jpg"
    }
  ],
  "faqs": [
    {
      "question": "What is the difference between SIP Trunk and PRI?",
      "answer": "A PRI line is a physical cable supporting 30 channels. A SIP trunk runs over optical IP fiber and can scale from 30 to thousands of channels without physical wiring changes."
    },
    {
      "question": "Can we retain our existing phone numbers?",
      "answer": "Yes! We support full Mobile Number Portability (MNP) and DID porting so your customers experience no change."
    },
    {
      "question": "What happens if our primary voice connection fails?",
      "answer": "Our SIP service includes automated failover that instantly reroutes incoming calls to a backup data line or mobile hunt group in milliseconds."
    }
  ]
},
{
  "slug": "cloud-telephony",
  "name": "Cloud Telephony & Smart PBX",
  "category": "Voice & Data Solutions",
  "tagline": "AI-Powered Smartflo Cloud Communications, Multilevel IVR & Remote Workforce Calling",
  "heroHeadline": "Next-Gen Cloud Telephony & Virtual PBX For",
  "heroHighlight": "Seamless Remote & Hybrid Customer Engagement.",
  "heroSubtitle": "Replace bulky on-premise hardware with an intelligent cloud communications platform featuring CRM integration, automated call recording, and smart agent routing.",
  "image": "/telephone-banner.jpg",
  "galleryImages": [
    "/telephone-studio.jpg",
    "/banner-servers-lights.jpg",
    "/banner-network-matrix.jpg"
  ],
  "stats": [
    {
      "value": "100%",
      "label": "Cloud Hosted (Zero Hardware)"
    },
    {
      "value": "CRM Ready",
      "label": "Salesforce, Zoho & HubSpot Sync"
    },
    {
      "value": "AI-Powered",
      "label": "Smart Interactive IVR Routing"
    },
    {
      "value": "99.95%",
      "label": "Carrier-Grade Platform Uptime"
    }
  ],
  "overview": "Adapt India Network's Cloud Telephony empowers businesses to manage all business calls, customer inquiries, and agent performance entirely in the cloud. Agents can receive and make calls from laptops, softphones, or mobile apps with full tracking and CRM logging.",
  "theChallenge": "On-premise PBX hardware is expensive to maintain, breaks down during power cuts, cannot support work-from-home agents, and lacks visibility into missed customer calls.",
  "ourSolution": "Our cloud telephony suite provides intelligent multi-level IVRs, automatic call distribution (ACD), call recording, live supervisor whisper/barge-in, and instant CRM popups for every incoming lead.",
  "capabilities": [
    {
      "title": "Intelligent Multi-Level IVR",
      "description": "Greet callers professionally and route them dynamically to the right department based on keypad input.",
      "deliverables": [
        "Custom studio voice prompts",
        "Business hours & holiday routing schedules",
        "Self-service information options",
        "Visual drag-and-drop call flow builder"
      ]
    },
    {
      "title": "CRM CTI & 1-Click Dialing",
      "description": "Seamlessly integrate with Salesforce, Zoho, LeadSquared, and HubSpot to view customer details as the phone rings.",
      "deliverables": [
        "Incoming caller ID screen pop",
        "1-click click-to-call from CRM",
        "Automated call recording attached to contact profile",
        "Real-time call duration and disposition logging"
      ]
    },
    {
      "title": "Virtual Number & Smart Hunt Groups",
      "description": "One single master business phone number that rings across multiple team members simultaneously or sequentially.",
      "deliverables": [
        "Sequential, round-robin, and longest-idle routing",
        "Missed call SMS alerts to customers",
        "Voicemail to email transcription",
        "Custom caller hold music"
      ]
    },
    {
      "title": "Live Supervisor Dashboard & Analytics",
      "description": "Monitor team productivity, track average handle time, listen into live calls, and analyze peak call hours.",
      "deliverables": [
        "Real-time agent status telemetry",
        "Call listening, whispering, and barging",
        "Daily automated call summary emails",
        "Agent performance KPIs and missed call logs"
      ]
    }
  ],
  "techStack": [
    "WebRTC Softphone",
    "REST API & Webhooks",
    "Salesforce & Zoho CTI Integration",
    "AWS High-Availability Cloud",
    "Opus & G.711 Audio Codecs",
    "Automated Speech Synthesis"
  ],
  "processSteps": [
    {
      "step": "01",
      "title": "Call Flow & IVR Blueprinting",
      "desc": "Map your department routing, greeting scripts, and agent working hours."
    },
    {
      "step": "02",
      "title": "Virtual Number & User Setup",
      "desc": "Provision your virtual business numbers and create agent accounts in the cloud portal."
    },
    {
      "step": "03",
      "title": "CRM Integration & Webhooks",
      "desc": "Connect the telephony API to your CRM for automatic lead creation and click-to-dial."
    },
    {
      "step": "04",
      "title": "Agent Onboarding & Training",
      "desc": "Train your team on the browser softphone and launch with live supervisor assistance."
    }
  ],
  "caseStudies": [
    {
      "title": "Real Estate Agency Lead Conversion",
      "client": "Premium Property Developer",
      "impact": "Captured 100% of incoming buyer inquiries with zero missed calls and instant WhatsApp follow-up.",
      "image": "/telephone-banner.jpg"
    },
    {
      "title": "Pan-India D2C Brand Customer Support",
      "client": "E-Commerce Brand",
      "impact": "Cut customer call hold time by 45% using intelligent automated order status IVR.",
      "image": "/telephone-studio.jpg"
    }
  ],
  "faqs": [
    {
      "question": "Do my employees need physical desk phones?",
      "answer": "No! Employees can make and receive calls directly through their laptop browser or our mobile app using internet connectivity."
    },
    {
      "question": "Can all customer calls be recorded for quality audit?",
      "answer": "Yes, 100% of incoming and outgoing calls are recorded securely and stored in encrypted cloud storage with instant playback."
    },
    {
      "question": "How quickly can we set up cloud telephony?",
      "answer": "Our cloud platform can be configured and live with numbers, IVRs, and agent accounts in less than 24 hours."
    }
  ]
},
];
