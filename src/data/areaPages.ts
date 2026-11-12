/**
 * Business-area landing pages (/locations/<city>/<area>/).
 *
 * People search for leased lines by business district ("leased line Okhla",
 * "internet leased line Udyog Vihar"), not only by city. Each page here has its own
 * local content: what businesses are there, what the buildings are like and what
 * that means for getting a line in. Never clone a page and swap the area name.
 *
 * Rules: no prices, no delivery times, no claims about specific buildings having fibre.
 */
export interface AreaPage {
  slug: string;
  /** Slug of the parent city page in locationsData.ts. */
  citySlug: string;
  /** Area name as people search for it. */
  area: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  /** Sub-areas, blocks and sectors covered by this page. */
  localities: string[];
  /** What is different about connecting a site in this area. */
  siteNotes: Array<{ title: string; text: string }>;
  /** Who needs connectivity here and why. */
  segments: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
  /** Other area slugs to link to. */
  nearbyAreas: string[];
}

export const areaPages: AreaPage[] = [
  {
    slug: "west-delhi",
    citySlug: "delhi",
    area: "West Delhi",
    metaTitle: "Leased Line in West Delhi: Paschim Vihar, Naraina",
    metaDescription:
      "Internet leased line, SD-WAN and business broadband in West Delhi: Paschim Vihar, Peeragarhi, Udyog Nagar, Naraina, Mayapuri and Kirti Nagar. Local Delhi team.",
    h1: "Internet Leased Line in West Delhi",
    intro: [
      "Our head office is in Paschim Vihar, so West Delhi is the area we know best. Within a few kilometres you have showrooms on the main roads, small factories in Udyog Nagar and Mundka, workshops in Mayapuri, printing and packaging units in Naraina, and the furniture trade in Kirti Nagar. Most of them still run on shared broadband, and most of them feel it when billing, video calls and CCTV uploads all happen at once.",
      "We supply dedicated Internet Leased Lines, SD-WAN, MPLS and business broadband across West Delhi on the enterprise networks of Tata Tele Business Services and ACT Fibernet. Because we are close by, site surveys and visits for faults or changes are quick to arrange.",
    ],
    localities: [
      "Paschim Vihar",
      "Peeragarhi",
      "Udyog Nagar",
      "Mundka Industrial Area",
      "Naraina Industrial Area",
      "Mayapuri Industrial Area",
      "Kirti Nagar",
      "Moti Nagar",
      "Rajouri Garden",
      "Punjabi Bagh",
      "Janakpuri",
      "Vikaspuri",
    ],
    siteNotes: [
      {
        title: "Industrial plots and sheds",
        text: "Factories in Naraina, Mayapuri and Udyog Nagar often sit some distance back from the road, so the fibre route from the nearest carrier point matters more than the speed you choose. We check the route at the survey, before any paperwork.",
      },
      {
        title: "Showrooms on busy roads",
        text: "Shops and showrooms on the main roads usually need a reliable line for billing, card machines and CCTV more than raw speed. A modest leased line or business broadband with a 4G/5G backup is often the right fit.",
      },
      {
        title: "Older commercial buildings",
        text: "Many West Delhi buildings have crowded cable risers. Getting permission from the owner or society for a new fibre run early saves the most time.",
      },
    ],
    segments: [
      {
        title: "Small manufacturers and workshops",
        text: "Units in Mayapuri, Naraina and Mundka run Tally or ERP, file GST and talk to buyers on video. A leased line keeps those working when the whole street is online in the evening.",
      },
      {
        title: "Retail and showrooms",
        text: "Furniture, apparel and electronics stores need card payments and billing to work all day. We set up a main line and a backup so a single fault doesn't stop sales.",
      },
      {
        title: "Offices, clinics and schools",
        text: "Professional offices, diagnostic centres and schools in Paschim Vihar, Janakpuri and Punjabi Bagh need steady uploads for cloud software, reports and online classes.",
      },
    ],
    faqs: [
      {
        question: "Do you provide leased lines in Paschim Vihar?",
        answer:
          "Yes. Our office is in Paschim Vihar, so we cover it and the surrounding areas like Peeragarhi, Punjabi Bagh, Janakpuri and Vikaspuri. We check which carriers already reach your building before sending a quote.",
      },
      {
        question: "Can you connect a factory in Naraina or Mayapuri Industrial Area?",
        answer:
          "Yes. Industrial plots are usually feasible, but the fibre route from the road into your shed decides how the line is laid. We look at that during the site survey and tell you what the carrier will need on site.",
      },
      {
        question: "Is business broadband enough for a small shop or office in West Delhi?",
        answer:
          "For a small team that mainly browses, bills and sends email, good business broadband with a 4G/5G backup is often enough. Once you have 15 or more people online, regular video calls or CCTV uploads, a leased line is worth it.",
      },
      {
        question: "How quickly can you visit our site in West Delhi?",
        answer:
          "Because our team is based in Paschim Vihar, site surveys and visits in West Delhi are easy to schedule. Call or WhatsApp us with your address and we'll arrange a time.",
      },
    ],
    nearbyAreas: ["okhla", "nehru-place", "udyog-vihar"],
  },
  {
    slug: "okhla",
    citySlug: "delhi",
    area: "Okhla",
    metaTitle: "Leased Line in Okhla Industrial Area, Delhi",
    metaDescription:
      "Internet leased line, SD-WAN and MPLS for factories, export houses and offices in Okhla Industrial Area Phase 1, 2 and 3 and Okhla Industrial Estate, Delhi.",
    h1: "Internet Leased Line in Okhla Industrial Area",
    intro: [
      "Okhla is one of Delhi's busiest industrial and office districts. Garment export houses, printing presses, pharma distributors, e-commerce warehouses and corporate offices sit side by side across Phase 1, 2 and 3. Many of these businesses send large design files to buyers abroad, run ERP across several units and keep CCTV on every floor, which is more than shared broadband can carry reliably.",
      "We provide dedicated Internet Leased Lines, SD-WAN and MPLS in Okhla through Tata Tele Business Services and ACT Fibernet Enterprise, with one team handling the survey, order, installation and support.",
    ],
    localities: [
      "Okhla Industrial Area Phase 1",
      "Okhla Industrial Area Phase 2",
      "Okhla Industrial Area Phase 3",
      "Okhla Industrial Estate",
      "Jasola",
      "Mohan Cooperative Industrial Estate",
      "Kalkaji",
      "Govindpuri",
    ],
    siteNotes: [
      {
        title: "Mixed buildings",
        text: "Okhla has old factory buildings, converted units and newer office blocks in the same lane. Newer blocks are usually quicker to connect; older ones may need a fresh fibre run, so we check the building first.",
      },
      {
        title: "Several units, one business",
        text: "Many exporters and manufacturers have two or three units in Okhla plus an office elsewhere. Point-to-point links or SD-WAN can join them into one network instead of separate connections.",
      },
      {
        title: "Upload matters",
        text: "Sending tech packs, artwork and photos to overseas buyers is upload-heavy. A leased line gives the same speed up as down, which is where broadband usually falls short.",
      },
    ],
    segments: [
      {
        title: "Garment and textile exporters",
        text: "Export houses exchange large files and hold video calls with buyers in other time zones. A dedicated line keeps those calls clear in the evening, when broadband slows down.",
      },
      {
        title: "Printing and packaging",
        text: "Print units receive heavy artwork files and run machines linked to office software. Steady bandwidth and a static IP for remote access help keep jobs moving.",
      },
      {
        title: "Warehouses and distributors",
        text: "Pharma distributors and e-commerce warehouses depend on WMS, scanners and dispatch portals. A main line plus a backup on a different network keeps dispatch going.",
      },
      {
        title: "Corporate offices",
        text: "Offices in the newer Okhla blocks need the same as any corporate floor: fast internet, Wi-Fi for everyone and secure links to branches.",
      },
    ],
    faqs: [
      {
        question: "Do you provide leased lines in Okhla Phase 1, 2 and 3?",
        answer:
          "Yes. We cover all three phases of Okhla Industrial Area, Okhla Industrial Estate and nearby areas like Jasola and Mohan Cooperative. We check carrier availability at your exact building before quoting.",
      },
      {
        question: "Can you connect two of our units in Okhla to each other?",
        answer:
          "Yes. Units can be joined with a point-to-point leased line for a private link, or with SD-WAN if you also want to bring in an office or warehouse in another part of Delhi NCR.",
      },
      {
        question: "Our factory building is old. Can it still get a leased line?",
        answer:
          "Usually, yes. Older buildings sometimes need a new fibre run from the road and permission from the owner. We find that out at the survey so you know what is needed before you commit.",
      },
      {
        question: "Do you provide a static IP for remote access and CCTV?",
        answer:
          "Yes. Leased lines come with static public IP addresses, which you can use for remote CCTV viewing, VPN access for staff and connecting to buyer or bank portals that need a fixed IP.",
      },
    ],
    nearbyAreas: ["nehru-place", "west-delhi", "sector-62-63"],
  },
  {
    slug: "nehru-place",
    citySlug: "delhi",
    area: "Nehru Place",
    metaTitle: "Leased Line in Nehru Place, Delhi",
    metaDescription:
      "Internet leased line and business broadband for IT firms, CA offices and small businesses in Nehru Place, Kalkaji and nearby South Delhi commercial areas.",
    h1: "Internet Leased Line in Nehru Place",
    intro: [
      "Nehru Place is packed with small and mid-sized offices: IT service companies, software firms, travel agencies, CA and legal practices, and the hardware traders the market is known for. Most offices are 5 to 50 people in older commercial towers where every floor shares the same broadband providers. Afternoons and evenings are when the slowdowns show up.",
      "We supply dedicated Internet Leased Lines and business broadband in Nehru Place on Tata Tele Business Services and ACT Fibernet Enterprise networks, sized to the office rather than to a sales target.",
    ],
    localities: [
      "Nehru Place",
      "Kalkaji",
      "Greater Kailash",
      "Saket District Centre",
      "Lajpat Nagar",
      "Okhla Phase 1",
    ],
    siteNotes: [
      {
        title: "Shared risers in older towers",
        text: "Many towers have cable ducts that are already crowded. The building management's permission and the route for a new fibre are usually the main things to sort out.",
      },
      {
        title: "Small offices, honest sizing",
        text: "Not every office here needs a big leased line. For a 10-person office, good business broadband with a 4G/5G backup can be enough. We'll tell you if that is the case.",
      },
    ],
    segments: [
      {
        title: "IT and software companies",
        text: "Developers and support teams depend on Git, cloud consoles, remote desktops and video calls. Same speed up and down and a static IP make a noticeable difference.",
      },
      {
        title: "CA, legal and finance offices",
        text: "Practices handling GST, audits and client files need reliable access to portals and cloud software, especially near filing deadlines.",
      },
      {
        title: "Travel agencies and BPOs",
        text: "Booking systems and voice calls suffer first on a congested line. A leased line with SIP trunks keeps calls clear.",
      },
    ],
    faqs: [
      {
        question: "Can I get a leased line in an older Nehru Place building?",
        answer:
          "Generally, yes. Older towers may need permission from building management for a new fibre run, which is the step that takes the most time. We check this at the start.",
      },
      {
        question: "Do I need a leased line or is broadband enough for my office?",
        answer:
          "It depends on how many people work online at once and what they do. A small team on email and browsing can manage with business broadband and a backup. Teams on video calls, cloud ERP or VoIP all day usually need a leased line.",
      },
      {
        question: "Can you also set up Wi-Fi and phone lines in our Nehru Place office?",
        answer:
          "Yes. We can add managed office Wi-Fi and SIP trunk or cloud phone lines along with the internet connection, with one point of contact for all of it.",
      },
    ],
    nearbyAreas: ["okhla", "west-delhi"],
  },
  {
    slug: "udyog-vihar",
    citySlug: "gurgaon",
    area: "Udyog Vihar",
    metaTitle: "Leased Line in Udyog Vihar, Gurgaon",
    metaDescription:
      "Internet leased line, SD-WAN and SIP trunks for BPOs, export houses and offices in Udyog Vihar Phase 1 to 6, Gurgaon. Building-by-building feasibility check.",
    h1: "Internet Leased Line in Udyog Vihar, Gurgaon",
    intro: [
      "Udyog Vihar started as an industrial area and is now a mix of BPOs, IT companies, garment export houses and corporate offices, many of them in older plots that have been rebuilt or converted. Voice-heavy operations and international clients make reliable internet and calling the first thing these businesses ask about.",
      "We provide dedicated Internet Leased Lines, SD-WAN, MPLS and SIP trunks in Udyog Vihar through Tata Tele Business Services and ACT Fibernet Enterprise.",
    ],
    localities: [
      "Udyog Vihar Phase 1",
      "Udyog Vihar Phase 2",
      "Udyog Vihar Phase 3",
      "Udyog Vihar Phase 4",
      "Udyog Vihar Phase 5",
      "Udyog Vihar Phase 6",
      "Sector 18 Gurgaon",
      "Dundahera",
    ],
    siteNotes: [
      {
        title: "Converted and older plots",
        text: "Older blocks in Udyog Vihar often need landlord permission and sometimes new ducting for fibre entry. This, more than the carrier, is what decides how long a new line takes, so we check it first.",
      },
      {
        title: "Two networks for voice operations",
        text: "Contact centres can't afford a dead line during a shift. We plan the main and backup links on different carriers wherever the building allows.",
      },
    ],
    segments: [
      {
        title: "BPOs and contact centres",
        text: "Hundreds of simultaneous calls need steady bandwidth, low jitter and SIP trunks. A leased line with a second-carrier backup keeps the floor working.",
      },
      {
        title: "Garment exporters",
        text: "Export houses in the older phases send design files and samples photos to buyers and hold regular video calls.",
      },
      {
        title: "IT and corporate offices",
        text: "Offices here often link to a head office or branches in other cities. SD-WAN or MPLS joins them into one managed network.",
      },
    ],
    faqs: [
      {
        question: "Do you cover all phases of Udyog Vihar?",
        answer:
          "Yes, Phase 1 to Phase 6, plus nearby Sector 18 and Dundahera. Feasibility depends on the building, so we check your address before quoting.",
      },
      {
        question: "Why do some Udyog Vihar buildings take longer to connect?",
        answer:
          "Older or converted plots may not have spare ducts for fibre, and the landlord has to approve the work. Newer buildings that already have carrier fibre inside are much quicker.",
      },
      {
        question: "Can you provide SIP trunks for our call centre in Udyog Vihar?",
        answer:
          "Yes. We provide SIP trunks and cloud telephony alongside the leased line, so your voice and data come from one partner with one support desk.",
      },
    ],
    nearbyAreas: ["imt-manesar", "west-delhi", "okhla"],
  },
  {
    slug: "imt-manesar",
    citySlug: "gurgaon",
    area: "IMT Manesar",
    metaTitle: "Leased Line in IMT Manesar for Factories",
    metaDescription:
      "Internet leased line, point-to-point links and SD-WAN for factories and warehouses in IMT Manesar. Connect plants, offices and suppliers on one network.",
    h1: "Internet Leased Line for Factories in IMT Manesar",
    intro: [
      "IMT Manesar is home to automobile plants, component suppliers, logistics parks and warehouses. Production runs in shifts around the clock, and ERP, MES, supplier portals and CCTV all depend on the network staying up. A slow or dead line here stops more than email.",
      "We provide Internet Leased Lines, point-to-point links and SD-WAN for plants and warehouses in IMT Manesar on the networks of Tata Tele Business Services and ACT Fibernet Enterprise, with 24/7 monitoring.",
    ],
    localities: [
      "IMT Manesar",
      "Manesar",
      "Bilaspur",
      "Pataudi Road",
      "Binola",
      "NH-48 corridor",
    ],
    siteNotes: [
      {
        title: "Large campuses",
        text: "Plants are spread out, so the internet line is only half the job. Production halls, stores and offices need wired links or Wi-Fi that reach every building on the campus.",
      },
      {
        title: "Backup that doesn't share the same cable",
        text: "A second line on the same cable route won't help when a road is dug up. We plan the backup on a different carrier or use 4G/5G where a second fibre isn't available.",
      },
      {
        title: "Plant to office links",
        text: "Many Manesar plants report to an office in Gurgaon or Delhi. A point-to-point leased line or SD-WAN gives a private, steady link between them.",
      },
    ],
    segments: [
      {
        title: "Auto and component manufacturers",
        text: "Supplier portals, ERP and MES need to be available on every shift. Monitoring around the clock means faults are raised before the line manager calls.",
      },
      {
        title: "Warehouses and logistics parks",
        text: "WMS, handheld scanners and dispatch systems need a reliable line plus Wi-Fi that covers the whole floor.",
      },
    ],
    faqs: [
      {
        question: "Can you connect our Manesar plant to our Gurgaon office?",
        answer:
          "Yes. A point-to-point leased line gives a private link between the two sites. If you have more locations, SD-WAN can join them all into one network.",
      },
      {
        question: "What backup do you recommend for a plant in Manesar?",
        answer:
          "Ideally a second leased line on a different carrier. Where a second fibre route isn't available, a 4G/5G backup through an SD-WAN device keeps critical systems connected.",
      },
      {
        question: "Can you also set up Wi-Fi across the plant?",
        answer:
          "Yes. We plan and install managed Wi-Fi for production areas, stores and offices, sized to the campus.",
      },
    ],
    nearbyAreas: ["udyog-vihar", "west-delhi"],
  },
  {
    slug: "sector-62-63",
    citySlug: "noida",
    area: "Noida Sector 62 & 63",
    metaTitle: "Leased Line in Noida Sector 62 & Sector 63",
    metaDescription:
      "Internet leased line, SD-WAN and SIP trunks for IT offices in Noida Sector 62 and factories and export units in Sector 63. Feasibility check at your building.",
    h1: "Internet Leased Line in Noida Sector 62 and Sector 63",
    intro: [
      "Sector 62 and Sector 63 sit next to each other but serve different businesses. Sector 62 is mostly IT and ITeS offices, institutes and corporate buildings. Sector 63 is full of electronics makers, garment exporters and small factories. Both depend on the internet all day, just for different reasons.",
      "We provide dedicated Internet Leased Lines, SD-WAN and SIP trunks in both sectors through Tata Tele Business Services and ACT Fibernet Enterprise.",
    ],
    localities: [
      "Sector 62",
      "Sector 63",
      "Sector 64",
      "Sector 59",
      "Sector 58",
      "Noida Electronic City",
    ],
    siteNotes: [
      {
        title: "IT buildings in Sector 62",
        text: "Many office buildings here already have fibre from more than one carrier, which makes a dual-carrier setup practical. We confirm which carriers are inside before quoting.",
      },
      {
        title: "Factory units in Sector 63",
        text: "Industrial plots may need a fibre run from the road into the unit. Production and packing areas often need Wi-Fi or wired points as well.",
      },
    ],
    segments: [
      {
        title: "IT, ITeS and support teams",
        text: "Developers and support desks need symmetrical bandwidth, static IPs and clear VoIP. A leased line with a backup on a second network keeps the team working.",
      },
      {
        title: "Electronics and garment manufacturers",
        text: "Factories in Sector 63 run ERP, GST and export documentation online and talk to buyers on video. A dedicated line keeps uploads moving.",
      },
    ],
    faqs: [
      {
        question: "Do you provide leased lines in Noida Sector 62 and 63?",
        answer:
          "Yes, along with nearby Sectors 58, 59 and 64. We check which carriers reach your building and send options.",
      },
      {
        question: "Can we have two leased lines from different carriers?",
        answer:
          "Yes. Where your building has fibre from two carriers, we can set up a main and a backup line on different networks and switch automatically between them.",
      },
      {
        question: "Can you connect our Noida office with our Delhi or Gurgaon office?",
        answer:
          "Yes, with a point-to-point leased line or SD-WAN, depending on how many sites you have and what runs between them.",
      },
    ],
    nearbyAreas: ["okhla", "nehru-place"],
  },
  {
    slug: "andheri",
    citySlug: "mumbai",
    area: "Andheri",
    metaTitle: "Leased Line in Andheri East & MIDC, Mumbai",
    metaDescription:
      "Internet leased line and SD-WAN for offices, studios and factories in Andheri East, MIDC, Marol, Chakala and SEEPZ, Mumbai. Monsoon-ready backup planning.",
    h1: "Internet Leased Line in Andheri East and MIDC",
    intro: [
      "Andheri East is one of Mumbai's busiest business areas, with corporate parks around Chakala and Marol, industrial units in MIDC, the SEEPZ zone near the airport, and media and production houses along the western side. Large file transfers, video calls and multi-branch networks are routine here.",
      "We provide Internet Leased Lines and SD-WAN in Andheri through the enterprise networks of Tata Tele Business Services and ACT Fibernet, with planning and support handled by our team as your single point of contact.",
    ],
    localities: [
      "Andheri East",
      "MIDC Andheri",
      "Marol",
      "Chakala",
      "SEEPZ",
      "Saki Naka",
      "JB Nagar",
      "Andheri West",
    ],
    siteNotes: [
      {
        title: "Plan for the monsoon",
        text: "Fibre cuts are more common in the rains, especially in older industrial lanes. For important sites we put the backup link on a different carrier or on 4G/5G, not on the same cable route.",
      },
      {
        title: "Corporate parks vs. older units",
        text: "Newer business parks usually have fibre from several carriers. Older MIDC units may need a fresh run, so we check the building first.",
      },
    ],
    segments: [
      {
        title: "Media and production houses",
        text: "Studios move large video files every day. Same speed up and down makes uploads as fast as downloads.",
      },
      {
        title: "Corporate and regional offices",
        text: "Offices here often connect branches across western India. SD-WAN joins them into one network with automatic failover.",
      },
      {
        title: "Manufacturing and export units",
        text: "Units in MIDC and SEEPZ run ERP and export systems that need a reliable line and a fixed IP.",
      },
    ],
    faqs: [
      {
        question: "Do you provide leased lines in Andheri East and MIDC?",
        answer:
          "Yes, including Marol, Chakala, SEEPZ and Saki Naka. Feasibility depends on the building, so we confirm which carriers can deliver at your address.",
      },
      {
        question: "How do you keep our Andheri office online during the monsoon?",
        answer:
          "We put the backup on a different carrier or on 4G/5G, and use SD-WAN or automatic failover so traffic moves to the working link on its own.",
      },
      {
        question: "Can you connect our Andheri office with branches in other cities?",
        answer:
          "Yes. SD-WAN or MPLS can link your Mumbai office with branches anywhere in India, managed as one network.",
      },
    ],
    nearbyAreas: ["whitefield"],
  },
  {
    slug: "whitefield",
    citySlug: "bengaluru",
    area: "Whitefield",
    metaTitle: "Leased Line in Whitefield, Bengaluru",
    metaDescription:
      "Internet leased line, SD-WAN and dual-carrier internet for tech offices in Whitefield, ITPL, Brookefield and Mahadevapura, Bengaluru (Bangalore).",
    h1: "Internet Leased Line in Whitefield, Bengaluru",
    intro: [
      "Whitefield and the ITPL area are home to software companies, global capability centres, startups and the offices that support them. Teams here push code, run cloud workloads and join calls with clients worldwide, often across time zones, so the internet has to hold up late into the night as well as during the day.",
      "We provide dedicated Internet Leased Lines and SD-WAN in Whitefield through the enterprise networks of Tata Tele Business Services and ACT Fibernet, with our team managing the order and support end to end.",
    ],
    localities: [
      "Whitefield",
      "ITPL",
      "Brookefield",
      "Mahadevapura",
      "Hoodi",
      "Kundalahalli",
      "Marathahalli",
      "KR Puram",
    ],
    siteNotes: [
      {
        title: "Tech parks with several carriers",
        text: "Most tech parks in Whitefield already have fibre from more than one carrier, which makes it practical to run a main and backup line on different networks.",
      },
      {
        title: "Standalone buildings and startups",
        text: "Smaller buildings off the main roads may need a new fibre run. We check feasibility at your exact address before quoting.",
      },
    ],
    segments: [
      {
        title: "Software and product teams",
        text: "Git, CI pipelines, cloud consoles and video calls all need symmetrical bandwidth and a static IP.",
      },
      {
        title: "Global capability centres",
        text: "GCCs often need dual-carrier internet and private links back to the parent company's network.",
      },
      {
        title: "Startups moving off broadband",
        text: "Teams that have outgrown shared broadband can start with a modest leased line and upgrade the speed later on the same circuit.",
      },
    ],
    faqs: [
      {
        question: "Do you provide leased lines in Whitefield and ITPL?",
        answer:
          "Yes, along with Brookefield, Mahadevapura, Hoodi and Marathahalli. We check which carriers reach your building and send options.",
      },
      {
        question: "Can we have two internet lines from different carriers in Whitefield?",
        answer:
          "Yes. Most tech parks here have more than one carrier, so a main and backup on different networks with automatic failover is usually possible.",
      },
      {
        question: "Can you connect our Bengaluru office to our office in Delhi or Mumbai?",
        answer:
          "Yes, with SD-WAN, MPLS or a point-to-point link, managed as one network by our team.",
      },
    ],
    nearbyAreas: ["andheri"],
  },
];

export function getAreaPage(citySlug: string, slug: string): AreaPage | undefined {
  return areaPages.find((a) => a.citySlug === citySlug && a.slug === slug);
}

export function areasForCity(citySlug: string): AreaPage[] {
  return areaPages.filter((a) => a.citySlug === citySlug);
}

/** WhatsApp link with a message that already names the area, so leads arrive with context. */
export function areaWhatsAppLink(area: string): string {
  const text = `Hi Adapt India Networks, I need a leased line / business internet in ${area}. Please check feasibility.`;
  return `https://wa.me/918287479961?text=${encodeURIComponent(text)}`;
}
