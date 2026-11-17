/**
 * Industry landing pages (/industries/<slug>/) and the internet exchange / peering page
 * (/services/internet-exchange-peering/).
 *
 * Each page answers what that kind of business actually needs from its network, in its
 * own words. Rules: no prices, no delivery times, no named clients, no invented figures.
 */
export interface SolutionPage {
  slug: string;
  /** Short name used in links, e.g. "Hospitals". */
  name: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  h1: string;
  /** One line under the H1. */
  lead: string;
  intro: string[];
  needsTitle: string;
  needs: Array<{ title: string; text: string }>;
  setupTitle: string;
  setup: Array<{ title: string; text: string }>;
  services: Array<{ name: string; href: string }>;
  faqs: Array<{ question: string; answer: string }>;
  /** Related guide links. */
  guides: Array<{ name: string; href: string }>;
  image: string;
}

const ILL = { name: "Internet Leased Line", href: "/services/smart-internet-ill/" };
const SDWAN = { name: "Managed SD-WAN", href: "/services/smartflo-sd-wan/" };
const MPLS = { name: "MPLS VPN", href: "/services/managed-mpls/" };
const WIFI = { name: "Managed Wi-Fi", href: "/services/managed-campus-wifi/" };
const P2P = { name: "Point-to-Point Leased Line", href: "/services/point-to-point-leased-line/" };
const SEC = { name: "Firewall & Network Security", href: "/services/cybersecurity-solutions/" };
const VOICE = { name: "SIP Trunk & Business Phone Lines", href: "/services/sip-trunk-services/" };
const BB = { name: "Business Broadband", href: "/services/enterprise-broadband/" };

const G_FAILOVER = { name: "Dual ISP failover for office", href: "/blog/pan-india-carrier-redundancy-dual-homed-failover/" };
const G_WIFI = { name: "Office Wi-Fi 6 design", href: "/blog/high-density-wifi-6-enterprise-office-deployment/" };
const G_LLBB = { name: "Leased line vs broadband", href: "/blog/why-dedicated-internet-leased-lines-matter/" };
const G_SEC = { name: "Multi-branch network security", href: "/blog/securing-multi-branch-enterprise-networks/" };
const G_P2P = { name: "Point-to-point vs internet leased line", href: "/blog/point-to-point-leased-line-vs-internet-leased-line/" };

export const industryPages: SolutionPage[] = [
  {
    slug: "hospitals",
    name: "Hospitals & Clinics",
    metaTitle: "Leased Line & Network for Hospitals and Clinics",
    metaDescription:
      "Internet leased line, backup links, Wi-Fi and network security for hospitals, diagnostic centres and clinic chains in India, planned so key systems stay up.",
    focusKeyword: "leased line for hospitals",
    h1: "Internet Leased Line and Network Solutions for Hospitals",
    lead: "Dependable internet, private links and Wi-Fi for hospitals, diagnostic centres and clinic chains.",
    intro: [
      "A hospital's network carries more than email. Billing and the hospital information system, lab reports, radiology images, pharmacy stock, CCTV, nurse call systems and teleconsultations all depend on it, and most of them can't wait for an ISP to fix a fibre cut. Diagnostic chains and multi-clinic groups add another layer: every centre has to reach the same patient records and billing system.",
      "We plan hospital networks around that reality: a dedicated leased line with a backup on a different carrier, private links between sites, separate networks for clinical systems, staff, patients and devices, and Wi-Fi that works across wards, OPDs and basements.",
    ],
    needsTitle: "What hospitals need from their network",
    needs: [
      {
        title: "No single point of failure",
        text: "A main leased line and a backup from a different carrier, ideally entering the building by different routes, with automatic failover so billing and records keep working during a fibre cut.",
      },
      {
        title: "Fast uploads for imaging and reports",
        text: "Radiology images and reports going to doctors, cloud storage or reporting centres need upload speed as much as download, which shared broadband doesn't give.",
      },
      {
        title: "Separate networks",
        text: "Clinical systems, staff devices, patient and visitor Wi-Fi, CCTV and medical devices should each sit on their own network segment, so a problem in one can't reach the others.",
      },
      {
        title: "Wi-Fi across the whole building",
        text: "Wards, ICUs, OPD waiting areas and basements each need planned coverage, with roaming for staff tablets and a simple login for patients and visitors.",
      },
      {
        title: "Links between centres",
        text: "Multi-site groups need every clinic, lab and collection centre on one secure network, through SD-WAN or MPLS.",
      },
      {
        title: "Patient data protection",
        text: "Firewalls, encrypted links between sites and logging help keep patient information private and support India's data protection requirements.",
      },
    ],
    setupTitle: "A typical setup",
    setup: [
      { title: "Main hospital", text: "Internet leased line plus a second line on another carrier, firewall with separate zones, and managed Wi-Fi across all floors." },
      { title: "Clinics and collection centres", text: "Business broadband or a leased line with a 4G/5G backup, joined to the main hospital with SD-WAN." },
      { title: "Imaging and data centre links", text: "A point-to-point leased line or MPLS where large files move every day between fixed sites." },
    ],
    services: [ILL, SDWAN, WIFI, SEC, P2P, VOICE],
    faqs: [
      {
        question: "What internet connection does a hospital need?",
        answer:
          "A dedicated internet leased line with the same upload and download speed, plus a backup line from a different carrier with automatic failover. The right speed depends on the number of users, imaging traffic and cloud systems in use.",
      },
      {
        question: "Can patient Wi-Fi be kept separate from hospital systems?",
        answer:
          "Yes. Patient and visitor Wi-Fi goes on its own network with internet access only, separated by the firewall from clinical systems, staff devices and medical equipment.",
      },
      {
        question: "Can you connect all our clinics and labs to the main hospital?",
        answer:
          "Yes, with SD-WAN or MPLS. We check carrier availability at each address and suggest the right link and backup for each site.",
      },
    ],
    guides: [G_FAILOVER, G_WIFI, G_SEC],
    image: "/banner-network-matrix.jpg",
  },
  {
    slug: "schools-colleges",
    name: "Schools & Colleges",
    metaTitle: "Internet Leased Line & Wi-Fi for Schools and Colleges",
    metaDescription:
      "Leased line internet, campus Wi-Fi and content filtering for schools, colleges and coaching institutes in India, with separate networks for staff, students and labs.",
    focusKeyword: "internet connection for schools",
    h1: "Internet and Campus Wi-Fi for Schools and Colleges",
    lead: "Reliable internet, campus Wi-Fi and safe browsing for schools, colleges, universities and coaching institutes.",
    intro: [
      "Schools and colleges now run on the internet: smart classrooms, online assessments, the school management system, fee payments, video lessons and CCTV. When a whole floor of students connects at once, a home-style broadband connection and a few routers can't keep up.",
      "We set up dedicated internet, campus-wide Wi-Fi and content filtering for schools, colleges and coaching institutes, with separate networks for administration, teachers, students and labs.",
    ],
    needsTitle: "What educational institutions need",
    needs: [
      { title: "Enough bandwidth at peak times", text: "Classes, labs and exams create sudden peaks. A dedicated leased line gives the same speed when everyone logs in together." },
      { title: "Wi-Fi planned for classrooms", text: "Classrooms, labs, libraries, auditoriums and hostels each need access points planned for the number of students, not just signal coverage." },
      { title: "Safe browsing", text: "Content filtering blocks unsafe and distracting sites for students, with different rules for staff." },
      { title: "Separate networks", text: "Administration and accounts, teachers, students, labs and CCTV each on their own network, so student devices can't reach school records." },
      { title: "Online exams without drops", text: "A backup line and automatic failover keep assessments and video lessons running through a fibre cut." },
      { title: "One network for many campuses", text: "School groups and university campuses can be joined with SD-WAN so IT is managed from one place." },
    ],
    setupTitle: "A typical setup",
    setup: [
      { title: "Main campus", text: "Internet leased line with a backup line, firewall with content filtering, and managed Wi-Fi in classrooms, labs and common areas." },
      { title: "Hostels", text: "Separate student Wi-Fi with individual logins and fair-use limits." },
      { title: "Branch schools and centres", text: "Business broadband or a leased line, joined to the main campus with SD-WAN." },
    ],
    services: [ILL, WIFI, SEC, SDWAN, BB],
    faqs: [
      {
        question: "Which internet connection is best for a school?",
        answer:
          "For most schools, an internet leased line, because the speed is dedicated and the same in both directions. Small schools can start with business broadband and a backup, then move up as usage grows.",
      },
      {
        question: "Can you block unsafe websites for students?",
        answer:
          "Yes. A firewall with web filtering applies rules by user group, so students, teachers and administration can each have different access.",
      },
      {
        question: "How many Wi-Fi access points does a school need?",
        answer:
          "It depends on the number of classrooms, students per room and building layout. A site survey gives an accurate plan.",
      },
    ],
    guides: [G_WIFI, G_LLBB, G_SEC],
    image: "/wifi-banner.jpg",
  },
  {
    slug: "hotels",
    name: "Hotels & Hospitality",
    metaTitle: "Hotel Wi-Fi & Internet Leased Line for Hotels in India",
    metaDescription:
      "Guest Wi-Fi with login, internet leased line, backup links and separate networks for hotels, resorts and serviced apartments in India.",
    focusKeyword: "hotel wifi solutions",
    h1: "Hotel Wi-Fi and Internet Solutions",
    lead: "Guest Wi-Fi that works in every room, with the leased line and backup behind it.",
    intro: [
      "Guests judge a hotel's Wi-Fi as quickly as they judge the room. Business travellers expect video calls to work, families stream in the evening, and conference halls fill up with laptops all at once. Behind the scenes, the property management system, POS, door locks, CCTV and online bookings share the same connection.",
      "We design hotel networks with a dedicated internet leased line, a backup line, guest Wi-Fi with a simple login page, and separate networks for guests, staff and hotel systems.",
    ],
    needsTitle: "What hotels need",
    needs: [
      { title: "Coverage in every room", text: "Thick walls and long corridors block signals. Access points planned per floor, often inside rooms or corridors, give steady coverage." },
      { title: "Guest login", text: "A branded login page with OTP verification for guests, which also helps meet Indian rules on authenticating public Wi-Fi users." },
      { title: "Capacity for events", text: "Banquet halls and conference rooms need extra access points and bandwidth for hundreds of devices at once." },
      { title: "Separate guest and hotel networks", text: "Guests should never reach the PMS, POS, CCTV or door lock systems." },
      { title: "A backup line", text: "Reservations, payments and guest Wi-Fi keep working through a fibre cut with a second carrier and automatic failover." },
      { title: "Central management for groups", text: "Hotel chains can manage Wi-Fi and security across properties from one dashboard." },
    ],
    setupTitle: "A typical setup",
    setup: [
      { title: "Internet", text: "Internet leased line sized for rooms and events, plus a backup line on another carrier." },
      { title: "Wi-Fi", text: "Managed Wi-Fi with access points per floor, guest login and bandwidth limits per device." },
      { title: "Security", text: "Firewall separating guest, staff, PMS/POS and CCTV networks." },
    ],
    services: [ILL, WIFI, SEC, SDWAN, VOICE],
    faqs: [
      {
        question: "Do hotels in India need a login page for guest Wi-Fi?",
        answer:
          "Public Wi-Fi in India is expected to verify users, usually by OTP to a mobile number, and keep connection logs. A managed guest login page handles this.",
      },
      {
        question: "How much internet speed does a hotel need?",
        answer:
          "It depends on the number of rooms, typical occupancy, events and how heavily guests stream and call. We size it with you and make sure it can be upgraded on the same line.",
      },
      {
        question: "Can you fix Wi-Fi dead spots in our rooms?",
        answer:
          "Yes. A site survey shows where coverage drops and where to add or move access points.",
      },
    ],
    guides: [{ name: "Hotel Wi-Fi solutions", href: "/blog/hotel-wifi-solutions-india/" }, G_WIFI, G_FAILOVER],
    image: "/wifi-banner.jpg",
  },
  {
    slug: "factories-manufacturing",
    name: "Factories & Manufacturing",
    metaTitle: "Leased Line for Factories & Manufacturing Plants",
    metaDescription:
      "Leased line, point-to-point links, SD-WAN and industrial Wi-Fi for factories and manufacturing plants in India's industrial areas, with backup links.",
    focusKeyword: "internet for factories",
    h1: "Internet Leased Line and Networks for Factories",
    lead: "Connectivity for plants in industrial areas, from the office block to the shop floor.",
    intro: [
      "Factories are often where connectivity is hardest. Plants sit in industrial areas like Manesar, Bawal, Greater Noida, Chakan, Sriperumbudur or Sanand, away from the city fibre, and the network has to cover offices, the shop floor, stores and the security gate. Yet ERP, production reports, dispatch, CCTV and video calls with customers all depend on it.",
      "We connect plants with dedicated leased lines where carriers reach, 4G/5G or a second carrier as backup, private links to head offices and warehouses, and Wi-Fi that works in large sheds.",
    ],
    needsTitle: "What manufacturing plants need",
    needs: [
      { title: "A line that reaches the plant", text: "Feasibility is the first question in industrial areas. We check which carriers can reach your gate and what fibre work is needed." },
      { title: "Backup for remote sites", text: "Where a second carrier isn't available, a 4G/5G backup with automatic failover keeps ERP and dispatch running." },
      { title: "Private links to head office", text: "Point-to-point leased lines, MPLS or SD-WAN carry ERP, file and CCTV traffic between plants, warehouses and offices." },
      { title: "Wi-Fi in large sheds", text: "High roofs, metal structures and machinery need industrial access points placed after a survey." },
      { title: "Separate production networks", text: "Machines and production systems should be separated from office and guest networks to limit the damage from malware." },
      { title: "CCTV viewing from anywhere", text: "Static IPs and enough upload speed let owners and security teams view cameras remotely." },
    ],
    setupTitle: "A typical setup",
    setup: [
      { title: "Plant", text: "Internet leased line with a second carrier or 4G/5G backup, firewall and industrial Wi-Fi." },
      { title: "Plant to head office", text: "Point-to-point leased line for two sites, or SD-WAN/MPLS for several plants and warehouses." },
      { title: "Remote and new sites", text: "4G/5G connectivity to start, moving to a leased line once fibre is laid." },
    ],
    services: [ILL, P2P, SDWAN, MPLS, WIFI, SEC],
    faqs: [
      {
        question: "Can we get a leased line at a factory in an industrial area?",
        answer:
          "In most industrial areas, yes. The key step is checking which carrier can reach your plant and whether new fibre has to be laid to the gate. We do this before quoting.",
      },
      {
        question: "How do we connect our factory to our head office?",
        answer:
          "For two sites, a point-to-point leased line is usually simplest. For several plants, warehouses and offices, SD-WAN or MPLS joins them into one network.",
      },
      {
        question: "What if only one carrier reaches our plant?",
        answer:
          "A 4G/5G router can be the backup, with automatic failover so essential systems keep running if the fibre is cut.",
      },
    ],
    guides: [G_P2P, G_FAILOVER, G_SEC],
    image: "/banner-network-matrix.jpg",
  },
  {
    slug: "warehouses-logistics",
    name: "Warehouses & Logistics",
    metaTitle: "Internet & Wi-Fi for Warehouses and Logistics Parks",
    metaDescription:
      "Leased line internet, warehouse Wi-Fi for handheld scanners, SD-WAN and backup links for warehouses, fulfilment centres and logistics parks in India.",
    focusKeyword: "internet for warehouses",
    h1: "Internet and Wi-Fi for Warehouses and Logistics",
    lead: "Connectivity for warehouses, fulfilment centres and logistics parks, from the dock to the racks.",
    intro: [
      "A modern warehouse stops when its network stops. The warehouse management system, handheld scanners, label printers, dispatch screens and courier integrations all need a live connection, often around the clock. Logistics parks on the edges of cities, such as Bhiwandi, Luhari, Hoskote or Sriperumbudur, are also where carrier fibre is thinnest.",
      "We connect warehouses with leased lines and backup links, Wi-Fi planned for racks and docks, and SD-WAN that joins every warehouse to your head office.",
    ],
    needsTitle: "What warehouses need",
    needs: [
      { title: "Wi-Fi between tall racks", text: "Metal racking and stock block signals. Access points placed down the aisles, after a survey, keep handheld scanners connected everywhere." },
      { title: "Roaming for scanners", text: "Scanners and forklift terminals must move between access points without dropping the session." },
      { title: "Uptime for dispatch", text: "A backup line on a different carrier, or 4G/5G, keeps the WMS and courier systems running through an outage." },
      { title: "Links to head office and stores", text: "SD-WAN joins warehouses, offices and stores into one managed network." },
      { title: "CCTV and gate systems", text: "Cameras and access control on their own network, viewable remotely through a static IP." },
      { title: "Quick setup for new sites", text: "New warehouses can start on 4G/5G while the leased line is installed." },
    ],
    setupTitle: "A typical setup",
    setup: [
      { title: "Internet", text: "Internet leased line plus a second carrier or 4G/5G backup with automatic failover." },
      { title: "Wi-Fi", text: "Managed Wi-Fi designed for racks, docks and offices, with separate networks for scanners, staff and CCTV." },
      { title: "Network", text: "SD-WAN connecting every warehouse to the head office and data centre." },
    ],
    services: [ILL, SDWAN, WIFI, SEC, BB],
    faqs: [
      {
        question: "Why do handheld scanners lose connection in our warehouse?",
        answer:
          "Usually because racks and stock block the signal, or access points are too far apart. A survey of the aisles shows where to place access points so scanners stay connected.",
      },
      {
        question: "Can you connect all our warehouses on one network?",
        answer:
          "Yes, with SD-WAN, which also gives each site automatic failover between its main and backup links.",
      },
      {
        question: "Can a new warehouse start working before the leased line is installed?",
        answer:
          "Yes. A 4G/5G connection can run the site to begin with, then stay on as the backup once the leased line is live.",
      },
    ],
    guides: [G_WIFI, G_FAILOVER, G_LLBB],
    image: "/banner-network-matrix.jpg",
  },
];

export const ixPage: SolutionPage = {
  slug: "internet-exchange-peering",
  name: "Internet Exchange & Peering",
  metaTitle: "Internet Exchange (IX) & Peering Services in India",
  metaDescription:
    "Internet exchange and peering in Mumbai, Delhi NCR, Chennai, Hyderabad, Bengaluru and Kolkata: IX ports, transport links, BGP setup and IP transit.",
  focusKeyword: "internet exchange point india",
  h1: "Internet Exchange and Peering Services in India",
  lead: "IX connectivity, transport links and BGP peering for ISPs, content networks and enterprises with their own ASN.",
  intro: [
    "An internet exchange point (IXP) is a place where networks connect directly to swap traffic with each other, instead of sending it through upstream transit providers. Peering at an exchange keeps traffic local, lowers delay to the networks your users reach most often, and reduces how much you depend on, and pay for, IP transit.",
    "We help ISPs, content and gaming platforms, hosting companies and enterprises with their own ASN connect to internet exchanges in India's major hubs, including Mumbai, Delhi NCR, Chennai, Hyderabad, Bengaluru and Kolkata. That includes the port at the exchange, the transport link from your data centre or PoP, BGP setup, and IP transit for the traffic that can't be peered.",
  ],
  needsTitle: "Who uses internet exchange peering",
  needs: [
    { title: "ISPs and broadband operators", text: "Local peering keeps subscribers' traffic to popular content and other networks short, which improves speed and reduces transit needs." },
    { title: "Content, video and gaming platforms", text: "Delivering traffic directly to access networks lowers latency and makes performance more consistent for users." },
    { title: "Hosting and cloud providers", text: "Direct routes to Indian networks give customers faster access to hosted services." },
    { title: "Enterprises with their own ASN", text: "Banks, fintechs and large companies running their own IP space can peer for faster, more controlled routes." },
  ],
  setupTitle: "How we set it up",
  setup: [
    { title: "1. Choose the exchange and city", text: "We look at where your users and servers are and which exchanges and member networks matter most to you." },
    { title: "2. Port and transport link", text: "We arrange the exchange port and a dedicated link from your data centre or PoP, with feasibility checked first." },
    { title: "3. BGP and peering", text: "We help configure BGP sessions with the route servers and with bilateral peers, and filter routes correctly." },
    { title: "4. Transit and backup", text: "IP transit for everything that isn't peered, ideally from more than one upstream, so you're never relying on one path." },
  ],
  services: [ILL, P2P, MPLS, { name: "DDoS Protection", href: "/services/smart-ddos-protection/" }],
  faqs: [
    {
      question: "What is an internet exchange point?",
      answer:
        "A shared switching facility where networks connect to exchange traffic directly with each other (peering), instead of sending it through a transit provider.",
    },
    {
      question: "What is the difference between peering and IP transit?",
      answer:
        "Peering exchanges traffic directly between two networks for their own customers. IP transit is a paid service that carries your traffic to the whole internet. Most networks use both: peering where they can, transit for the rest.",
    },
    {
      question: "What do we need before connecting to an internet exchange?",
      answer:
        "Usually your own Autonomous System Number (ASN), your own IP prefixes, a router that supports BGP, and a presence or link at a data centre where the exchange is available. We can guide you through each step.",
    },
    {
      question: "Which cities can you connect to an internet exchange?",
      answer:
        "We work with exchange locations in India's major hubs, including Mumbai, Delhi NCR, Chennai, Hyderabad, Bengaluru and Kolkata. Availability depends on your data centre and route, so we confirm feasibility first.",
    },
    {
      question: "Is peering useful for an enterprise without its own ASN?",
      answer:
        "Usually not directly. Most businesses are better served by a good internet leased line from a well-peered carrier. If you're planning your own ASN and IP space, we can help you decide whether peering makes sense.",
    },
  ],
  guides: [G_FAILOVER, G_LLBB],
  image: "/banner-network-matrix.jpg",
};

export function getIndustryPage(slug: string): SolutionPage | undefined {
  return industryPages.find((p) => p.slug === slug);
}
