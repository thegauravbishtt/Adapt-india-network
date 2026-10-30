import type { SubService } from "./types";

export const network: SubService[] = [
  {
    slug: "ill-burstable-bandwidth",
    name: "ILL Burstable Bandwidth",
    parent: "smart-internet-ill",
    group: "Internet Leased Line",
    headline: "Pay for the bandwidth you normally use, with room to go higher on busy days",
    summary:
      "Burstable Internet Leased Line in India: a committed base speed plus extra headroom for peak days, so you don't overpay for bandwidth you rarely use.",
    intro: [
      "Most businesses don't use the same amount of bandwidth every day. Month-end processing, large uploads or sale days push usage up, while normal days need much less.",
      "With burstable bandwidth you commit to a base speed and can go above it when needed, up to an agreed ceiling. You pay for the base plus what you actually burst, instead of paying for the peak all year.",
    ],
    features: [
      { title: "Committed base speed", text: "A guaranteed level of bandwidth for everyday work." },
      { title: "Headroom for peaks", text: "Use more when you need it, up to the burst limit." },
      { title: "Usage-based billing", text: "Extra usage is billed on agreed terms." },
      { title: "Same leased line benefits", text: "Dedicated fibre, static IPs and SLA as standard ILL." },
    ],
    goodFor: ["E-commerce with sale-day spikes", "Firms with month-end or quarter-end peaks", "Media teams with occasional large uploads", "Growing companies unsure of future needs"],
    faqs: [
      {
        question: "How is burst usage measured?",
        answer: "Usually with the 95th percentile method, which ignores short spikes. We'll explain the exact terms in your proposal.",
      },
      {
        question: "Can we change the base speed later?",
        answer: "Yes. If your normal usage grows, the committed base can be upgraded.",
      },
    ],
  },
  {
    slug: "sd-wan-ready-ill",
    name: "SD-WAN Ready ILL",
    parent: "smart-internet-ill",
    group: "Internet Leased Line",
    headline: "A leased line delivered ready to plug into your SD-WAN network",
    summary:
      "SD-WAN Ready Internet Leased Line: dedicated ILL delivered with the right handoff, IPs and settings to join your SD-WAN from day one.",
    intro: [
      "If you're running SD-WAN, or planning to, each site's internet link needs to be set up to work with it: the right handoff, IP addressing and routing.",
      "An SD-WAN ready leased line is delivered with these details agreed in advance, so the SD-WAN device can be connected and brought online without back-and-forth between vendors.",
    ],
    features: [
      { title: "Pre-agreed handoff", text: "Port type, IPs and settings planned with your SD-WAN design." },
      { title: "Faster site go-live", text: "Less troubleshooting on installation day." },
      { title: "Dedicated bandwidth", text: "A reliable primary link for your SD-WAN overlay." },
      { title: "Pairs with backup links", text: "Combine with broadband or 4G/5G for failover." },
    ],
    goodFor: ["Companies rolling out SD-WAN", "Retail and banking branch networks", "Multi-site manufacturers", "IT teams standardising branch links"],
    faqs: [
      {
        question: "Does it work with any SD-WAN vendor?",
        answer: "Yes. We agree the handoff details with your SD-WAN design, whatever the vendor.",
      },
      {
        question: "Can we use it as a normal leased line too?",
        answer: "Yes. It's a full leased line; it's simply delivered with SD-WAN in mind.",
      },
    ],
  },
  {
    slug: "secured-leased-line",
    name: "Secured Leased Line",
    parent: "smart-internet-ill",
    group: "Internet Leased Line",
    headline: "Leased line internet with security built in before traffic reaches your office",
    summary:
      "Secured Leased Line in India: dedicated ILL with network-level protection such as DDoS filtering and threat blocking, plus optional managed firewall.",
    intro: [
      "A secured leased line combines dedicated internet with protection in the network, so attack traffic and many known threats are filtered before they reach your office.",
      "It's a simpler way for smaller IT teams to get a safer connection without managing several security products separately.",
    ],
    features: [
      { title: "Dedicated internet", text: "All the standard benefits of an ILL: symmetrical speed, static IPs, SLA." },
      { title: "Network-level filtering", text: "Unwanted and malicious traffic blocked upstream." },
      { title: "DDoS protection", text: "Help keeping your link up during attack traffic." },
      { title: "Optional managed firewall", text: "Add an on-site firewall managed by us." },
    ],
    goodFor: ["Offices hosting servers or VPNs", "Finance and healthcare businesses", "SMEs without security staff", "Companies with compliance requirements"],
    faqs: [
      {
        question: "Do we still need a firewall in the office?",
        answer: "Usually yes, for internal segmentation and user policies. Network security reduces the load and risk; it doesn't replace everything.",
      },
      {
        question: "Can we add security to an existing leased line?",
        answer: "Often, yes. We'll check what's possible on your current connection.",
      },
    ],
  },
  {
    slug: "standard-carrier-ill",
    name: "Standard Carrier ILL",
    parent: "smart-internet-ill",
    group: "Internet Leased Line",
    headline: "A straightforward dedicated internet connection from a tier-1 carrier",
    summary:
      "Standard carrier Internet Leased Line: simple dedicated fibre internet with static IPs and SLA for offices in Delhi NCR and across India.",
    intro: [
      "Not every office needs extra features. A standard carrier ILL is a plain, dedicated internet connection with equal upload and download speeds, static IPs and an uptime commitment.",
      "It's the right choice when you want reliable business internet and will manage your own firewall and network.",
    ],
    features: [
      { title: "Dedicated fibre", text: "Bandwidth reserved for your business only." },
      { title: "Symmetrical speed", text: "Upload matches download." },
      { title: "Static IPs", text: "For servers, VPNs and whitelisting." },
      { title: "Carrier SLA", text: "Written commitments on uptime and repair." },
    ],
    goodFor: ["Offices with their own IT team", "Cost-conscious businesses", "Single-site companies", "Backup link for a primary ILL"],
    faqs: [
      {
        question: "What bandwidth should we start with?",
        answer: "It depends on users and applications. We'll recommend a size you can upgrade later without changing the circuit.",
      },
      {
        question: "Which carriers do you offer?",
        answer: "We work with Tata Tele Business Services and ACT Fibernet, subject to feasibility at your address.",
      },
    ],
  },
  {
    slug: "smart-ddos-protection",
    name: "Smart DDoS Protection",
    parent: "cybersecurity-solutions",
    group: "Network Security",
    headline: "Keep your internet link and online services up during a DDoS attack",
    summary:
      "DDoS protection for Indian businesses: detect and filter attack traffic in the network so your leased line, website and services stay online.",
    intro: [
      "A DDoS (Distributed Denial of Service) attack floods your internet connection or servers with junk traffic until genuine users can't get through. Even a short attack can take a website, payment system or VPN offline.",
      "DDoS protection watches traffic heading to your network and filters attack traffic in the carrier's network, so clean traffic still reaches you.",
    ],
    features: [
      { title: "Traffic monitoring", text: "Unusual spikes are detected automatically." },
      { title: "Upstream filtering", text: "Attack traffic is removed before it reaches your link." },
      { title: "Clean traffic delivery", text: "Genuine users keep reaching your services." },
      { title: "Attack reports", text: "See what happened and how it was handled." },
    ],
    goodFor: ["E-commerce and payment sites", "Banks and fintech", "Gaming and media platforms", "Businesses hosting public services"],
    faqs: [
      {
        question: "Can a firewall stop DDoS attacks?",
        answer: "Not large ones. A big attack fills your internet link before the firewall can act, which is why filtering happens upstream.",
      },
      {
        question: "Is it always on?",
        answer: "Options include always-on protection or on-demand mitigation when an attack is detected.",
      },
    ],
  },
  {
    slug: "sd-wan-iflx-edge-gateway",
    name: "SD-WAN iFLX Edge Gateway",
    parent: "smartflo-sd-wan",
    group: "Enterprise WAN",
    headline: "The SD-WAN device at each branch that connects it to your network",
    summary:
      "SD-WAN iFLX edge gateway for branches: the on-site device that combines links, fails over automatically and connects each site to your SD-WAN.",
    intro: [
      "Every site in an SD-WAN network has an edge gateway, a small device that connects the local network to the internet links and to your other sites.",
      "It decides which link each application should use, switches over when a link fails, and is configured centrally, so branch staff don't need technical skills.",
    ],
    features: [
      { title: "Multiple link support", text: "Leased line, broadband and 4G/5G on one device." },
      { title: "Automatic failover", text: "Moves traffic to the working link in seconds." },
      { title: "Zero-touch setup", text: "Plug it in at the branch and it downloads its settings." },
      { title: "Built-in security", text: "Encrypted tunnels and firewall features." },
    ],
    goodFor: ["Retail outlets and franchise stores", "Bank and NBFC branches", "Warehouses and depots", "Small offices joining a corporate network"],
    faqs: [
      {
        question: "Does someone technical need to be at the branch?",
        answer: "No. With zero-touch provisioning, the device is plugged in and configures itself from the central controller.",
      },
      {
        question: "What size gateway does a branch need?",
        answer: "It depends on users, bandwidth and features. We size each site individually.",
      },
    ],
  },
  {
    slug: "ez-cloud-connect",
    name: "EZ Cloud Connect (AWS/Azure)",
    parent: "cloud-infrastructure",
    group: "Enterprise WAN",
    headline: "A private connection from your offices to AWS and Azure",
    summary:
      "EZ Cloud Connect: private, dedicated connectivity from your offices and data centres to AWS and Microsoft Azure, off the public internet.",
    intro: [
      "When important applications run in AWS or Azure, reaching them over the public internet means variable speed and delay. A private cloud connection gives your offices a dedicated path into the cloud instead.",
      "It's typically used for ERP, databases and backups where steady performance and security matter.",
    ],
    features: [
      { title: "Private path to cloud", text: "Traffic to AWS or Azure stays off the public internet." },
      { title: "Steady performance", text: "More consistent speed and delay than internet access." },
      { title: "Works with MPLS or SD-WAN", text: "Connect all your sites to the cloud through one link." },
      { title: "Scalable bandwidth", text: "Increase capacity as cloud use grows." },
    ],
    goodFor: ["ERP and core apps in the cloud", "Hybrid cloud setups", "Large backups and data transfers", "Regulated industries"],
    faqs: [
      {
        question: "Is this the same as AWS Direct Connect or Azure ExpressRoute?",
        answer: "It uses those cloud services. We provide the connection from your network to them and help with the setup.",
      },
      {
        question: "Can we connect to both AWS and Azure?",
        answer: "Yes. Multi-cloud connections are possible.",
      },
    ],
  },
  {
    slug: "ultra-low-latency",
    name: "Ultra Low Latency (Ultra-LOLA)",
    parent: "point-to-point-leased-line",
    group: "Enterprise WAN",
    headline: "The shortest, fastest route between two locations, for time-critical traffic",
    summary:
      "Ultra low latency point-to-point connectivity in India for trading, exchanges and real-time systems where every millisecond matters.",
    intro: [
      "For some businesses, delay matters more than bandwidth. Trading firms, exchanges and real-time systems need data to travel between sites as quickly as possible.",
      "Ultra low latency links use carefully chosen fibre routes to keep the path short and the delay consistently low between two points.",
    ],
    features: [
      { title: "Optimised fibre routes", text: "Shorter physical paths mean less delay." },
      { title: "Consistent latency", text: "Low variation for predictable performance." },
      { title: "Dedicated capacity", text: "No sharing with other traffic." },
      { title: "Monitoring", text: "Latency and availability watched continuously." },
    ],
    goodFor: ["Brokers and trading firms", "Exchange connectivity", "Real-time financial systems", "Data centre interconnects"],
    faqs: [
      {
        question: "What latency can we expect?",
        answer: "It depends on the two locations and the available routes. We'll share figures for your specific path.",
      },
      {
        question: "Is a backup route available?",
        answer: "Yes, usually on a separate path, though the backup may have slightly higher latency.",
      },
    ],
  },
  {
    slug: "retail-branch-broadband",
    name: "Retail & Branch Broadband",
    parent: "enterprise-broadband",
    group: "Broadband & Wi-Fi",
    headline: "Reliable, affordable internet for stores, outlets and small branches",
    summary:
      "Business broadband for retail stores and branches across India: billing, UPI and inventory stay online with backup options and central support.",
    intro: [
      "A store doesn't need a leased line, but it can't afford to lose billing, UPI payments or inventory sync either. Retail and branch broadband gives each outlet a business-grade connection at a sensible price.",
      "For chains, we handle ordering, installation and support for every store through one team, and can add a 4G/5G backup where needed.",
    ],
    features: [
      { title: "Business-grade broadband", text: "Fibre broadband suited to billing and payments." },
      { title: "Backup options", text: "Add 4G/5G failover for critical stores." },
      { title: "Multi-store rollout", text: "One team for orders, installs and support across locations." },
      { title: "Central billing", text: "One invoice for all your outlets." },
    ],
    goodFor: ["Retail chains and franchises", "Restaurants and QSRs", "Pharmacy and diagnostic outlets", "Bank and NBFC branches"],
    faqs: [
      {
        question: "Can you install across many cities?",
        answer: "Yes. We coordinate installations across locations, subject to feasibility at each address.",
      },
      {
        question: "What if broadband isn't available at a store?",
        answer: "We can offer 4G/5G or another carrier as the primary link.",
      },
    ],
  },
  {
    slug: "managed-campus-wifi",
    name: "Managed Campus Wi-Fi",
    parent: "enterprise-broadband",
    group: "Broadband & Wi-Fi",
    headline: "Wi-Fi across buildings and floors, planned, installed and looked after for you",
    summary:
      "Managed campus Wi-Fi for offices, colleges, hospitals and factories in India: surveyed design, installation, central management and ongoing support.",
    intro: [
      "Covering a campus with Wi-Fi (several floors, buildings or open areas) takes more than adding access points. Coverage, capacity, roaming and security all need planning.",
      "We survey the site, design the network, install it and manage it centrally, so users can walk from building to building without dropping their connection.",
    ],
    features: [
      { title: "Site survey and design", text: "Access points placed for coverage and user numbers." },
      { title: "Seamless roaming", text: "Stay connected while moving between areas." },
      { title: "Separate networks", text: "Staff, students or patients, guests and devices kept apart." },
      { title: "Central management", text: "Monitoring, updates and support handled by us." },
    ],
    goodFor: ["Colleges and schools", "Hospitals", "Corporate campuses", "Factories and warehouses"],
    faqs: [
      {
        question: "Can you reuse our existing access points?",
        answer: "Sometimes. We check their age and compatibility during the survey.",
      },
      {
        question: "Do you provide outdoor Wi-Fi?",
        answer: "Yes, with outdoor-rated equipment where needed.",
      },
    ],
  },
  {
    slug: "high-density-public-wifi",
    name: "High-Density Public Wi-Fi",
    parent: "enterprise-broadband",
    group: "Broadband & Wi-Fi",
    headline: "Wi-Fi that keeps working when hundreds of people connect at once",
    summary:
      "High-density public Wi-Fi for malls, hotels, stadiums, events and transit in India: capacity planning, guest login and secure, managed access.",
    intro: [
      "Wi-Fi in busy public spaces often fails because too many people connect at once, not because the signal is weak. High-density design plans for the number of users, not just the floor area.",
      "We add a guest login page, usage limits and separation from your internal network, so the public network stays fast and safe.",
    ],
    features: [
      { title: "Capacity planning", text: "Designed around expected crowd sizes." },
      { title: "Guest login", text: "Branded login page with OTP or voucher access." },
      { title: "Fair usage controls", text: "Limits so a few users can't slow everyone down." },
      { title: "Kept separate", text: "Public users can't reach your internal systems." },
    ],
    goodFor: ["Malls and retail centres", "Hotels and banquet halls", "Stadiums and event venues", "Airports, stations and transit hubs"],
    faqs: [
      {
        question: "Do public Wi-Fi users need to log in?",
        answer: "Typically yes, through an OTP or voucher login, which also helps with record-keeping requirements.",
      },
      {
        question: "How many users can it support?",
        answer: "It depends on the design and number of access points. We plan for your expected peak crowd.",
      },
    ],
  },
];
