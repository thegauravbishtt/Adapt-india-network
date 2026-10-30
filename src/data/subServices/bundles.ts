import type { SubService } from "./types";

const B = "bundled-solutions";

export const bundles: SubService[] = [
  {
    slug: "smartoffice-starter-pack",
    name: "SmartOffice Starter Pack",
    parent: B,
    group: "SME Bundles",
    headline: "Internet, Wi-Fi, firewall and phones for a small office, ready in one go",
    summary:
      "SmartOffice Starter Pack for small offices in India: business internet, Wi-Fi, firewall and cloud phone lines in one simple monthly bundle.",
    intro: [
      "A small office needs the same basics as a large one (internet, Wi-Fi, security and phones) but rarely has an IT person to set them up.",
      "The Starter Pack bundles them into one order with one installation visit, one bill and one number to call for support.",
    ],
    features: [
      { title: "Business internet", text: "Broadband or a leased line, sized for your team." },
      { title: "Office Wi-Fi", text: "With a separate network for guests." },
      { title: "Firewall", text: "Basic protection and web filtering." },
      { title: "Cloud phone lines", text: "Extensions on desk phones or mobile apps." },
    ],
    goodFor: ["Offices with 5 to 30 people", "Startups and new branches", "CA, legal and consulting firms", "Clinics and small showrooms"],
    faqs: [
      {
        question: "Can we upgrade parts of the pack later?",
        answer: "Yes. You can increase bandwidth or add users and access points as you grow.",
      },
      {
        question: "Is equipment included?",
        answer: "Equipment can be included in the monthly fee or purchased upfront. We'll show both options.",
      },
    ],
  },
  {
    slug: "branch-in-a-box",
    name: "Branch-in-a-Box Connectivity",
    parent: B,
    group: "Branch Bundles",
    headline: "A standard kit that gets every new branch online the same way",
    summary:
      "Branch-in-a-Box for Indian businesses: a pre-configured connectivity kit with internet, backup, SD-WAN and Wi-Fi to open new branches quickly.",
    intro: [
      "When you open branches regularly, setting up each one from scratch is slow and error-prone. Branch-in-a-Box standardises it: the same internet, backup, SD-WAN device and Wi-Fi at every location.",
      "Equipment arrives pre-configured, so local staff only need to plug it in. The branch connects to your corporate network automatically.",
    ],
    features: [
      { title: "Standard design", text: "Every branch set up the same way." },
      { title: "Pre-configured devices", text: "Plug in and the branch is online." },
      { title: "Primary and backup links", text: "Broadband or leased line plus 4G/5G." },
      { title: "Central management", text: "All branches visible from one dashboard." },
    ],
    goodFor: ["Banks and NBFCs opening branches", "Retail and franchise expansion", "Healthcare and diagnostic chains", "Logistics hubs"],
    faqs: [
      {
        question: "How quickly can a branch go live?",
        answer: "Mainly depends on internet feasibility at the address. Once links are in, the kit itself takes very little time.",
      },
      {
        question: "Can the kit vary by branch size?",
        answer: "Yes. We usually define small, medium and large versions.",
      },
    ],
  },
  {
    slug: "retail-dual-failover-pack",
    name: "Retail Store Dual-Failover Pack",
    parent: B,
    group: "Branch Bundles",
    headline: "Two connections per store so billing and payments never stop",
    summary:
      "Retail store dual-failover connectivity: primary internet plus automatic 4G/5G or second-carrier backup to keep POS, UPI and card payments running.",
    intro: [
      "For a store, an internet outage means queues at the counter and lost sales. The dual-failover pack gives each store two connections with automatic switching, so billing, UPI and card payments keep working.",
      "It's designed for chains: one rollout plan, one support desk and a dashboard showing which stores are on backup.",
    ],
    features: [
      { title: "Two independent links", text: "Primary broadband plus 4G/5G or a second carrier." },
      { title: "Automatic switchover", text: "No staff action needed during an outage." },
      { title: "Store dashboard", text: "See the status of every outlet." },
      { title: "Chain-wide support", text: "One team for all your stores." },
    ],
    goodFor: ["Retail and fashion chains", "Restaurants and QSRs", "Pharmacies and supermarkets", "Fuel stations and franchise outlets"],
    faqs: [
      {
        question: "Does the backup cost extra when not in use?",
        answer: "There's usually a small fixed fee plus usage. We'll recommend the most economical option for your stores.",
      },
      {
        question: "Will card machines keep working during failover?",
        answer: "Yes, as long as they connect through the store network.",
      },
    ],
  },
  {
    slug: "pop-up-event-internet",
    name: "Pop-up Event Internet",
    parent: B,
    group: "Short-term Connectivity",
    headline: "Reliable internet and Wi-Fi for events, exhibitions and temporary sites",
    summary:
      "Temporary event internet in India: reliable connectivity and Wi-Fi for exhibitions, conferences, launches, shoots and pop-up sites.",
    intro: [
      "Events, exhibitions and product launches often depend on internet for registrations, payments, live streaming and presentations, and venue Wi-Fi often isn't up to it.",
      "We provide temporary connectivity (wired, 4G/5G or a mix) with Wi-Fi sized for your attendees, and support on site where needed.",
    ],
    features: [
      { title: "Temporary links", text: "Short-term internet for days or weeks." },
      { title: "Event Wi-Fi", text: "Separate networks for staff, exhibitors and visitors." },
      { title: "Streaming ready", text: "Dedicated capacity for live video." },
      { title: "On-site support", text: "Engineers available during the event if needed." },
    ],
    goodFor: ["Exhibitions and trade fairs", "Conferences and launches", "Film and media shoots", "Construction and project sites"],
    faqs: [
      {
        question: "How far in advance should we book?",
        answer: "As early as possible, ideally a few weeks, to check feasibility at the venue.",
      },
      {
        question: "Can you support live streaming?",
        answer: "Yes. Tell us the stream quality and we'll size dedicated upload capacity.",
      },
    ],
  },
  {
    slug: "ill-sd-wan-hybrid-bundle",
    name: "ILL + SD-WAN Hybrid Bundle",
    parent: B,
    group: "Enterprise Bundles",
    headline: "Leased line at key sites, broadband at smaller ones, managed as one network",
    summary:
      "ILL + SD-WAN hybrid bundle: dedicated leased lines at major sites and broadband at branches, joined by managed SD-WAN on one contract.",
    intro: [
      "Not every site needs the same connection. A hybrid design puts leased lines where reliability matters most, such as head office and plants, and lower-cost broadband at smaller branches.",
      "SD-WAN joins them into one secure network with automatic failover, and the whole thing comes on one contract with one support desk.",
    ],
    features: [
      { title: "Right link per site", text: "Leased line or broadband depending on importance." },
      { title: "Managed SD-WAN", text: "One network across all locations." },
      { title: "Backup everywhere", text: "Secondary links with automatic switching." },
      { title: "One contract", text: "Single bill and support desk." },
    ],
    goodFor: ["Companies with 10+ sites", "Businesses replacing MPLS", "Manufacturers with plants and offices", "Retail head office plus stores"],
    faqs: [
      {
        question: "Is this cheaper than MPLS everywhere?",
        answer: "Usually, yes, especially with many small sites. We'll compare costs for your network.",
      },
      {
        question: "Can we keep MPLS at some sites?",
        answer: "Yes. SD-WAN can include existing MPLS links in the design.",
      },
    ],
  },
  {
    slug: "cloud-interconnect-peering",
    name: "Cloud Interconnect & Direct Peering",
    parent: B,
    group: "Enterprise Bundles",
    headline: "Private connectivity to your cloud providers and key partners, bundled together",
    summary:
      "Cloud interconnect and direct peering bundle: private links from your network to AWS, Azure, Google Cloud and partners, delivered and managed together.",
    intro: [
      "Businesses running across several clouds or exchanging lots of data with partners benefit from private, direct connections instead of relying on the public internet.",
      "This bundle combines connections to your cloud providers and key partners with the network to reach them, designed and supported as one service.",
    ],
    features: [
      { title: "Multi-cloud links", text: "Private paths to AWS, Azure and Google Cloud." },
      { title: "Partner connections", text: "Direct links to key partners or data centres." },
      { title: "Consistent performance", text: "Less variation than internet routes." },
      { title: "Single management", text: "One team for all interconnects." },
    ],
    goodFor: ["Hybrid and multi-cloud companies", "Fintech and payment businesses", "Large data transfer workloads", "Enterprises with partner integrations"],
    faqs: [
      {
        question: "Can we start with one cloud and add more?",
        answer: "Yes. Connections can be added as your needs grow.",
      },
      {
        question: "Where are the interconnects made?",
        answer: "Typically at data centres where cloud providers have presence. We'll plan the best location for you.",
      },
    ],
  },
  {
    slug: "unified-voice-sip-suite",
    name: "Unified Voice & SIP Trunk Suite",
    parent: B,
    group: "Enterprise Bundles",
    headline: "SIP trunks, toll-free numbers and cloud calling in one voice package",
    summary:
      "Unified voice bundle for Indian enterprises: SIP trunks, toll-free and virtual numbers and cloud calling, with the network to carry them, on one contract.",
    intro: [
      "Voice services often come from several vendors: PRI or SIP lines, a toll-free number, a cloud contact centre and mobile plans. Problems bounce between them.",
      "The voice suite brings SIP trunks, numbers and cloud calling together, along with the network that carries them, so call quality issues have one owner.",
    ],
    features: [
      { title: "SIP trunks", text: "Call capacity for your PBX or contact centre." },
      { title: "Numbers", text: "Toll-free, local and virtual numbers in one place." },
      { title: "Cloud calling", text: "Extensions and contact centre seats as needed." },
      { title: "Voice-ready network", text: "Links tuned for clear calls." },
    ],
    goodFor: ["Contact centres", "Multi-office companies", "Businesses replacing PRI", "Firms with many voice vendors"],
    faqs: [
      {
        question: "Can we move our existing numbers into the suite?",
        answer: "In most cases, yes. We check porting eligibility first.",
      },
      {
        question: "Can we add contact centre seats later?",
        answer: "Yes. The suite is designed to grow with you.",
      },
    ],
  },
  {
    slug: "zero-trust-remote-workforce",
    name: "Zero Trust Remote Workforce Pack",
    parent: B,
    group: "Enterprise Bundles",
    headline: "Secure access, protected laptops and safe email for people working from anywhere",
    summary:
      "Zero trust remote workforce pack: secure app access, endpoint protection, email security and multi-factor sign-in for hybrid and remote teams in India.",
    intro: [
      "Remote work moves your security perimeter to every employee's laptop and home Wi-Fi. A VPN alone no longer covers the risk.",
      "This pack combines app-level secure access, endpoint protection, email security and multi-factor sign-in, so remote staff can work safely without slowing them down.",
    ],
    features: [
      { title: "Zero trust access", text: "Users reach only the apps they need." },
      { title: "Endpoint protection", text: "EDR on every laptop." },
      { title: "Email security", text: "Phishing and fake invoice protection." },
      { title: "Multi-factor sign-in", text: "Stolen passwords alone aren't enough." },
    ],
    goodFor: ["Hybrid and remote teams", "Companies using contractors", "Firms handling sensitive data", "Businesses replacing VPNs"],
    faqs: [
      {
        question: "Does this work for staff using personal devices?",
        answer: "Yes, with access policies that check the device before allowing sensitive apps.",
      },
      {
        question: "How long does rollout take?",
        answer: "It depends on users and apps. We roll out in stages, starting with a pilot group.",
      },
    ],
  },
];
