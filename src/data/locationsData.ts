/**
 * City landing pages (/locations/<slug>/).
 *
 * Each city has its own written content: Google ignores pages where only the
 * city name changes. When adding a city, write fresh copy about its business
 * areas and the kind of customers there.
 */
export interface CityPage {
  slug: string;
  city: string;
  /** Other spellings people search for, e.g. Gurugram for Gurgaon. */
  altNames: string[];
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  businessAreas: string[];
  /** Who typically needs connectivity here and what for. */
  segments: Array<{ title: string; text: string }>;
  localNote: string;
  faqs: Array<{ question: string; answer: string }>;
  nearby: string[];
}

export const cityPages: CityPage[] = [
  {
    slug: "delhi",
    city: "Delhi",
    altNames: ["New Delhi", "Delhi NCR"],
    state: "Delhi",
    metaTitle: "Internet Leased Line Provider in Delhi | ILL, SD-WAN, MPLS",
    metaDescription:
      "Dedicated Internet Leased Line, SD-WAN and MPLS for offices in Delhi: Connaught Place, Nehru Place, Okhla, Saket & more. Delhi-based team. Call +91 82874 79961.",
    h1: "Internet Leased Line Provider in Delhi",
    intro: [
      "Adapt India Network is headquartered in Saket, New Delhi, so Delhi is where our team works every day. We arrange dedicated Internet Leased Lines (ILL), business broadband, SD-WAN and MPLS for offices, clinics, showrooms and warehouses across the city, delivered on the enterprise fibre networks of Tata Tele Business Services and ACT Fibernet.",
      "Delhi buildings vary a lot, from glass towers in Connaught Place to older commercial blocks in Nehru Place and industrial sheds in Okhla and Naraina. Before we quote, we check which carrier already has fibre in or near your building, so you get a realistic delivery date and the option of a second carrier for backup.",
    ],
    businessAreas: [
      "Connaught Place",
      "Nehru Place",
      "Saket & Saket District Centre",
      "Okhla Industrial Area",
      "Jasola & Mohan Cooperative",
      "Karol Bagh",
      "Rajendra Place",
      "Naraina Industrial Area",
      "Mayapuri",
      "Wazirpur & Mangolpuri",
      "Netaji Subhash Place",
      "Aerocity",
    ],
    segments: [
      {
        title: "Corporate & professional offices",
        text: "CA firms, law offices, consultancies and corporate branches in central and south Delhi need stable video calls, cloud apps and secure remote access. A 1:1 leased line removes the evening slowdowns common on shared broadband.",
      },
      {
        title: "Retail, restaurants & showrooms",
        text: "Billing, UPI and card payments stop when the internet stops. For multi-outlet brands we pair a primary link with a backup and can manage all outlets from one SD-WAN dashboard.",
      },
      {
        title: "Industrial units & warehouses",
        text: "Units in Okhla, Naraina, Mayapuri and Wazirpur run ERP, CCTV and e-way bill systems that need steady upload speeds. Symmetrical leased lines carry camera feeds and cloud backups without choking.",
      },
      {
        title: "Healthcare & diagnostics",
        text: "Labs and clinics move large scan files and patient records to the cloud. Dedicated bandwidth with low latency keeps uploads fast and reports on time.",
      },
    ],
    localNote:
      "Because our office is in Saket, we can visit your site in Delhi for the survey, coordinate directly with the carrier's field team, and help you through installation and testing.",
    faqs: [
      {
        question: "How long does a new leased line take to install in Delhi?",
        answer:
          "It depends on whether the carrier's fibre already reaches your building. Where fibre is present, delivery is usually quick; where new fibre must be laid, permissions and civil work add time. We confirm feasibility and a realistic timeline before you sign.",
      },
      {
        question: "Can I get a backup connection from a second provider in Delhi?",
        answer:
          "Yes. We can arrange a primary link on one carrier and a backup on another, entering the building through a different path where possible, with automatic failover on your router or SD-WAN device.",
      },
      {
        question: "Do you provide static IP addresses with leased lines in Delhi?",
        answer:
          "Yes. Leased lines come with static public IP addresses, which you need for servers, VPNs, CCTV access and many accounting and ERP tools.",
      },
      {
        question: "Which areas of Delhi do you cover?",
        answer:
          "We serve all of Delhi, including Connaught Place, Nehru Place, Saket, Okhla, Jasola, Karol Bagh, Naraina, Mayapuri, Wazirpur and Aerocity, subject to carrier feasibility at your exact address.",
      },
    ],
    nearby: ["gurgaon", "noida", "ghaziabad", "faridabad"],
  },
  {
    slug: "gurgaon",
    city: "Gurgaon",
    altNames: ["Gurugram"],
    state: "Haryana",
    metaTitle: "Leased Line Provider in Gurgaon (Gurugram) | ILL & SD-WAN",
    metaDescription:
      "Internet Leased Line, SD-WAN and MPLS for offices in Gurgaon: Cyber City, Golf Course Road, Udyog Vihar, Sohna Road & Manesar. Tata Tele & ACT partner.",
    h1: "Internet Leased Line Provider in Gurgaon (Gurugram)",
    intro: [
      "Gurgaon is home to corporate headquarters, IT and ITeS companies, startups and a large manufacturing belt stretching to Manesar. Adapt India Network supplies dedicated Internet Leased Lines, SD-WAN, MPLS and business voice to these offices and plants, using the enterprise networks of Tata Tele Business Services and ACT Fibernet.",
      "Many Gurgaon towers already have fibre from several carriers, which makes a dual-carrier setup practical. For offices that cannot afford downtime, we design a primary and backup link on different networks so a single fibre cut does not take your team offline.",
    ],
    businessAreas: [
      "DLF Cyber City",
      "Udyog Vihar",
      "Golf Course Road",
      "Golf Course Extension Road",
      "Sohna Road",
      "MG Road",
      "Sector 44 & Sector 32",
      "Udyog Vihar Phase 1 to 5",
      "IMT Manesar",
      "Sector 18 & Sector 34 industrial zones",
      "Dwarka Expressway",
      "Badshahpur",
    ],
    segments: [
      {
        title: "IT, ITeS & tech startups",
        text: "Development teams, BPOs and SaaS companies depend on video calls, Git, cloud consoles and VoIP. Symmetrical bandwidth gives the same upload speed as download, so large pushes and screen shares stay smooth.",
      },
      {
        title: "Corporate headquarters",
        text: "Regional HQs on Golf Course Road and in Cyber City often connect to branches across India. SD-WAN or MPLS links every site to the head office securely, with central control of traffic and security.",
      },
      {
        title: "Automotive & manufacturing in Manesar",
        text: "Plants in IMT Manesar run ERP, MES and supplier portals around the clock. Proactive monitoring and redundant links keep production systems connected through every shift.",
      },
      {
        title: "Coworking & managed offices",
        text: "Operators need high-capacity links shared across many tenants, with managed Wi-Fi and separate networks per client. We size bandwidth and Wi-Fi for dense occupancy.",
      },
    ],
    localNote:
      "Our Delhi team is a short drive from Gurgaon, so site surveys, installation coordination and support visits across Gurgaon and Manesar are straightforward.",
    faqs: [
      {
        question: "Do you provide leased lines in Cyber City and Udyog Vihar?",
        answer:
          "Yes. Both areas are well served by enterprise fibre. We check which carriers are already present in your building to speed up delivery.",
      },
      {
        question: "Is Gurugram covered as well as Gurgaon?",
        answer:
          "Gurgaon and Gurugram are the same city. We cover all sectors, from Cyber City and Golf Course Road to Sohna Road, Dwarka Expressway and IMT Manesar.",
      },
      {
        question: "Can SD-WAN connect my Gurgaon head office with branches in other cities?",
        answer:
          "Yes. SD-WAN connects your Gurgaon office with branches anywhere in India over leased lines, broadband or 4G/5G, with central policy and automatic failover.",
      },
      {
        question: "What bandwidth does an office in Gurgaon usually need?",
        answer:
          "It depends on headcount and how much you use video calls, cloud apps and backups. We review your users and applications and suggest a size you can upgrade later without changing the circuit.",
      },
    ],
    nearby: ["delhi", "faridabad", "noida"],
  },
  {
    slug: "noida",
    city: "Noida",
    altNames: ["Greater Noida", "Noida Extension"],
    state: "Uttar Pradesh",
    metaTitle: "Internet Leased Line Provider in Noida & Greater Noida",
    metaDescription:
      "Dedicated leased line, SD-WAN and business broadband for offices, IT parks and factories in Noida, Greater Noida & Noida Expressway. Get a feasibility check.",
    h1: "Internet Leased Line Provider in Noida & Greater Noida",
    intro: [
      "Noida has grown into one of Uttar Pradesh's biggest business hubs, with IT parks along the Noida–Greater Noida Expressway, electronics and garment manufacturing in its industrial sectors, and a fast-growing commercial belt in Greater Noida. Adapt India Network delivers dedicated Internet Leased Lines, SD-WAN, MPLS and business broadband across both cities.",
      "Noida's planned sector layout makes fibre access easier than in many cities, but availability still differs from one building to the next. We check carrier presence at your exact address and plan backup routing where your operations need it.",
    ],
    businessAreas: [
      "Sector 62",
      "Sector 63",
      "Sector 16 & Film City",
      "Sector 125 to 132 (Expressway)",
      "Sector 135 to 144",
      "Phase 2 & Hosiery Complex",
      "Sector 57 to 60",
      "Noida Extension",
      "Greater Noida Knowledge Park",
      "Ecotech industrial areas",
      "Kasna",
      "Yamuna Expressway",
    ],
    segments: [
      {
        title: "IT parks & software companies",
        text: "Expressway campuses and Sector 62 offices host large development and support teams. Leased lines with static IPs support VPNs, client connectivity and cloud workloads without contention.",
      },
      {
        title: "Electronics & export manufacturing",
        text: "Factories in Phase 2, Ecotech and Greater Noida exchange orders and shipping data with buyers abroad. Reliable uplinks keep ERP and export documentation moving.",
      },
      {
        title: "Media & broadcast",
        text: "Production houses around Film City move large video files every day. High symmetrical bandwidth cuts upload times for rushes and finished content.",
      },
      {
        title: "Education & institutions",
        text: "Colleges in Knowledge Park need campus-wide Wi-Fi for thousands of users. We combine high-capacity internet with managed Wi-Fi sized for dense, busy spaces.",
      },
    ],
    localNote:
      "Noida is next door to our Delhi office, so we can be on site for surveys and handle installation coordination in person.",
    faqs: [
      {
        question: "Do you cover Greater Noida and Noida Extension?",
        answer:
          "Yes. We serve Noida, Greater Noida, Noida Extension and the Yamuna Expressway belt, subject to fibre feasibility at your site.",
      },
      {
        question: "What is the difference between a leased line and broadband for a Noida office?",
        answer:
          "Broadband is shared and usually gives much lower upload speed than download. A leased line is dedicated to you, with equal upload and download, static IPs and an uptime SLA.",
      },
      {
        question: "Can you link our Noida factory with our Delhi office?",
        answer:
          "Yes. We can connect the sites with a point-to-point leased line, MPLS or SD-WAN, depending on how many locations you have and what applications you run.",
      },
      {
        question: "Do you provide office Wi-Fi along with the internet connection?",
        answer:
          "Yes. We design, install and manage business Wi-Fi so coverage and performance match your floor plan and number of users.",
      },
    ],
    nearby: ["delhi", "ghaziabad", "gurgaon", "lucknow"],
  },
  {
    slug: "ghaziabad",
    city: "Ghaziabad",
    altNames: ["Sahibabad", "Indirapuram"],
    state: "Uttar Pradesh",
    metaTitle: "Leased Line Provider in Ghaziabad | Business Internet & SD-WAN",
    metaDescription:
      "Internet Leased Line and business broadband for factories, warehouses and offices in Ghaziabad: Sahibabad, Meerut Road, Loni, Indirapuram & Raj Nagar Extension.",
    h1: "Internet Leased Line Provider in Ghaziabad",
    intro: [
      "Ghaziabad is a major industrial and logistics city on the eastern edge of Delhi, with manufacturing at Sahibabad, Meerut Road and Loni, and commercial growth in Indirapuram, Vaishali and Raj Nagar Extension. Adapt India Network provides dedicated Internet Leased Lines, business broadband, SD-WAN and MPLS for these businesses.",
      "Industrial areas often have older cabling and fewer carriers than central business districts. We check which networks reach your site, and for plants that run around the clock we suggest a backup on a separate network so a single fault does not stop production.",
    ],
    businessAreas: [
      "Sahibabad Industrial Area",
      "Site 4 Sahibabad",
      "Meerut Road Industrial Area",
      "Loni Road",
      "Kavi Nagar Industrial Area",
      "Bulandshahr Road Industrial Area",
      "Indirapuram",
      "Vaishali",
      "Kaushambi",
      "Raj Nagar Extension",
      "Mohan Nagar",
      "Modinagar",
    ],
    segments: [
      {
        title: "Manufacturing plants",
        text: "Engineering, packaging and FMCG units run ERP, attendance systems and CCTV that need dependable connectivity. Leased lines keep plant systems and head-office links stable.",
      },
      {
        title: "Warehousing & logistics",
        text: "Distribution centres track inventory, dispatch and e-way bills in real time. A primary link with automatic backup keeps scanning and shipping running.",
      },
      {
        title: "Offices in Indirapuram, Vaishali & Kaushambi",
        text: "Growing commercial towers house professional firms and regional offices that rely on video calls and cloud software. Dedicated bandwidth avoids peak-hour slowdowns.",
      },
      {
        title: "Schools, hospitals & institutions",
        text: "Campuses need wide Wi-Fi coverage and secure connections for administration systems. We pair internet with managed Wi-Fi and firewall protection.",
      },
    ],
    localNote:
      "Ghaziabad is close to our Delhi office, which lets us visit for site surveys and stay involved through installation.",
    faqs: [
      {
        question: "Can I get a leased line in Sahibabad or Meerut Road Industrial Area?",
        answer:
          "Yes, subject to feasibility at your exact plot. We check carrier fibre near your unit and give you an honest timeline before you commit.",
      },
      {
        question: "Do you provide backup internet for factories in Ghaziabad?",
        answer:
          "Yes. We can add a second connection on a different network, such as another leased line, broadband or 4G/5G, with automatic switchover.",
      },
      {
        question: "Do you serve residential-commercial areas like Indirapuram and Raj Nagar Extension?",
        answer:
          "Yes. We provide business connectivity to offices, clinics and shops in Indirapuram, Vaishali, Kaushambi and Raj Nagar Extension.",
      },
    ],
    nearby: ["noida", "delhi", "lucknow"],
  },
  {
    slug: "faridabad",
    city: "Faridabad",
    altNames: ["Ballabgarh"],
    state: "Haryana",
    metaTitle: "Leased Line Provider in Faridabad | ILL for Factories & Offices",
    metaDescription:
      "Dedicated Internet Leased Line, SD-WAN and broadband for manufacturing units and offices in Faridabad: Sector 24, 25, 58, NIT, Ballabgarh & Mathura Road.",
    h1: "Internet Leased Line Provider in Faridabad",
    intro: [
      "Faridabad is one of the oldest industrial cities in the NCR, with auto parts, engineering and electrical manufacturers spread across its industrial sectors and along Mathura Road. Adapt India Network supplies dedicated Internet Leased Lines, SD-WAN, MPLS and business broadband to these plants and to the offices that support them.",
      "Many Faridabad companies run several units in different sectors, or connect to buyers and head offices in Gurgaon and Delhi. We link those sites securely and keep monitoring them, so issues are picked up early.",
    ],
    businessAreas: [
      "Sector 24 & Sector 25",
      "Sector 27 & Sector 31",
      "Sector 58 & Sector 59",
      "NIT Industrial Area",
      "Mathura Road",
      "Ballabgarh",
      "Prithla",
      "Neharpar (Greater Faridabad)",
      "Old Faridabad",
      "Sector 15 & Sector 16",
    ],
    segments: [
      {
        title: "Auto components & engineering",
        text: "Suppliers to vehicle makers share schedules and quality data with their customers' portals. Steady, dedicated links keep these systems available on every shift.",
      },
      {
        title: "Multi-unit manufacturers",
        text: "Companies with plants in several sectors need one connected network. SD-WAN or MPLS joins the units with the head office and gives central control over traffic and security.",
      },
      {
        title: "Offices & showrooms",
        text: "Corporate offices, dealerships and clinics need dependable internet for billing, cloud software and video meetings, with a backup for busy days.",
      },
    ],
    localNote:
      "We cover Faridabad from our Delhi office and coordinate site surveys and installation with the carrier's local teams.",
    faqs: [
      {
        question: "Do you provide leased lines in Faridabad industrial sectors?",
        answer:
          "Yes. We serve the main industrial sectors, NIT, Mathura Road and Ballabgarh, subject to carrier feasibility at your exact address.",
      },
      {
        question: "Can you connect our Faridabad and Gurgaon units on one network?",
        answer:
          "Yes. SD-WAN, MPLS or point-to-point leased lines can join multiple plants and offices into one secure private network.",
      },
      {
        question: "Do you monitor the connection after installation?",
        answer:
          "Yes. Lines are monitored around the clock, and our support desk coordinates with the carrier to restore service if a fault occurs.",
      },
    ],
    nearby: ["delhi", "gurgaon", "noida"],
  },
  {
    slug: "lucknow",
    city: "Lucknow",
    altNames: ["Uttar Pradesh"],
    state: "Uttar Pradesh",
    metaTitle: "Internet Leased Line Provider in Lucknow & Uttar Pradesh",
    metaDescription:
      "Dedicated Internet Leased Line, SD-WAN and MPLS for businesses in Lucknow and across Uttar Pradesh: Gomti Nagar, Hazratganj, Amausi & more. Get a quote.",
    h1: "Internet Leased Line Provider in Lucknow & Uttar Pradesh",
    intro: [
      "Lucknow is the administrative and commercial capital of Uttar Pradesh, with corporate offices in Gomti Nagar and Hazratganj, industrial units near Amausi and Chinhat, and a growing IT and education sector. Adapt India Network provides dedicated Internet Leased Lines, SD-WAN, MPLS and business broadband here, and across UP cities including Kanpur, Agra, Varanasi and Meerut.",
      "For companies with branches spread across Uttar Pradesh, such as banks, NBFCs, retail chains, hospitals and dealer networks, we connect every site to the head office through SD-WAN or MPLS, with a single point of contact for delivery and support.",
    ],
    businessAreas: [
      "Gomti Nagar & Gomti Nagar Extension",
      "Hazratganj",
      "Vibhuti Khand",
      "Aliganj",
      "Alambagh",
      "Amausi Industrial Area",
      "Chinhat Industrial Area",
      "Talkatora Industrial Area",
      "Shaheed Path",
      "Kanpur, Agra, Varanasi & Meerut",
    ],
    segments: [
      {
        title: "Banks, NBFCs & financial branches",
        text: "Branch networks across UP need secure, always-on links to core banking and payment systems. MPLS or SD-WAN with backup links keeps every branch connected.",
      },
      {
        title: "Corporate & regional offices",
        text: "Regional offices in Gomti Nagar and Hazratganj rely on cloud software, ERP and video meetings with head offices elsewhere in India.",
      },
      {
        title: "Hospitals & education",
        text: "Hospitals, colleges and coaching institutes need high-capacity internet and campus Wi-Fi for staff and students.",
      },
      {
        title: "Retail & dealer networks",
        text: "Chains with outlets in several UP cities manage billing and inventory centrally. SD-WAN lets you manage every store's connection from one place.",
      },
    ],
    localNote:
      "We deliver in Lucknow and other UP cities through the networks of our carrier partners, with planning and support managed by our Delhi team.",
    faqs: [
      {
        question: "Do you provide leased lines in Lucknow?",
        answer:
          "Yes. We arrange dedicated leased lines in Lucknow, including Gomti Nagar, Hazratganj, Vibhuti Khand and the main industrial areas, subject to fibre feasibility.",
      },
      {
        question: "Can you connect branches across different cities in Uttar Pradesh?",
        answer:
          "Yes. We connect branches in Lucknow, Kanpur, Agra, Varanasi, Meerut, Noida, Ghaziabad and other UP cities using SD-WAN or MPLS.",
      },
      {
        question: "Which other cities in India do you cover?",
        answer:
          "Through our carrier partners we deliver connectivity across India. Share your locations and we will check feasibility for each site.",
      },
    ],
    nearby: ["noida", "ghaziabad", "delhi"],
  },
];

export function getCityBySlug(slug: string): CityPage | undefined {
  return cityPages.find((c) => c.slug === slug);
}

/** Core services linked from every city page. */
export const cityServiceLinks = [
  {
    name: "Internet Leased Line (ILL)",
    href: "/services/smart-internet-ill/",
    text: "Dedicated 1:1 symmetrical internet with static IPs and an uptime SLA.",
  },
  {
    name: "SD-WAN",
    href: "/services/smartflo-sd-wan/",
    text: "Connect all branches, combine links and fail over automatically.",
  },
  {
    name: "MPLS VPN",
    href: "/services/managed-mpls/",
    text: "Private, secure connectivity between offices, plants and data centres.",
  },
  {
    name: "Point-to-Point Leased Line",
    href: "/services/point-to-point-leased-line/",
    text: "A private circuit directly linking two of your locations.",
  },
  {
    name: "Enterprise Broadband & Wi-Fi",
    href: "/services/enterprise-broadband/",
    text: "Fast business broadband and managed office Wi-Fi.",
  },
  {
    name: "SIP Trunk & Cloud Telephony",
    href: "/services/business-communications/",
    text: "Business calling, toll-free numbers and cloud contact centre.",
  },
];
