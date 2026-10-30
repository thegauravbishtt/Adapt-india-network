import type { BlogPost } from "../lib/db";

/**
 * Built-in articles. These pages are linked from the homepage, /blog and
 * /articles, so they are always generated even when the admin blog store is
 * empty. Content format: paragraphs separated by a blank line; a short line
 * without a full stop at the end is shown as a heading.
 */
export const seedArticles: BlogPost[] = [
  {
    id: "article-2",
    slug: "why-dedicated-internet-leased-lines-matter",
    title: "Internet Leased Line (ILL) vs Business Broadband: Why Dedicated Bandwidth Matters",
    category: "Network Reliability",
    readTime: "6 min read",
    image: "/banner-datacenter-racks.jpg",
    excerpt:
      "What an Internet Leased Line actually is, how it differs from business broadband, and how Indian businesses can decide which one they need.",
    tags: [
      { text: "CONNECTIVITY", variant: "outline" },
      { text: "ILL", variant: "dark" },
    ],
    status: "published",
    publishedAt: "2026-02-18T12:00:00.000Z",
    author: "Adapt India Network",
    content: `Most offices in India start on broadband. It is cheap, quick to install and fine for a few people browsing and sending email. As a business grows, video calls freeze, cloud software slows down in the evening, and uploads take far longer than downloads. That is usually the point where an Internet Leased Line (ILL) is worth a serious look.

What is an Internet Leased Line

An Internet Leased Line is a dedicated internet connection reserved for one customer. The bandwidth you buy is not shared with other subscribers in your building or area, and upload speed is the same as download speed. It is delivered over fibre, comes with static public IP addresses, and is backed by a Service Level Agreement (SLA) that commits the provider to uptime and repair targets.

How broadband is different

Business broadband is a shared service. Many customers use the same network capacity, so speeds drop when everyone is online at once. Broadband plans are usually asymmetric, meaning upload is much slower than download. Static IPs may cost extra or be unavailable, and support is typically best effort rather than bound by an SLA.

Why symmetrical bandwidth matters

Modern offices send almost as much data as they receive. Video meetings, cloud backups, CCTV streams to the cloud, uploading files to Google Drive or SharePoint, and VoIP calls all depend on upload speed. On a leased line a 100 Mbps connection means 100 Mbps both ways, so these tasks stop competing with each other.

Static IPs, SLAs and support

Static IP addresses let you host servers, run site-to-site VPNs, access CCTV recorders remotely and whitelist your office with banks, ERP vendors and government portals. The SLA gives you a written commitment on availability and on how quickly faults are fixed, which matters when downtime stops billing, dispatch or customer support. Leased lines are also monitored by the provider's network operations centre, so many problems are spotted before you notice them.

When a business should move to a leased line

Consider a leased line if your team has more than about 15 to 20 people working online, if you rely on cloud ERP, CRM or accounting software, if you run VoIP or a call centre, if you upload large files or CCTV footage, or if any downtime costs you sales. Offices that need guaranteed performance for clients, such as IT services firms, labs and financial businesses, usually need one regardless of size.

How to make a leased line resilient

A single connection can still fail if the fibre is cut. For critical sites, the best practice is a second link from a different carrier, ideally entering the building through a separate path, with automatic failover on your router, firewall or SD-WAN device. Some businesses use broadband or 4G/5G as a lower-cost backup.

How Adapt India Network can help

We arrange Internet Leased Lines for offices across Delhi, Gurgaon, Noida, Ghaziabad, Faridabad and the rest of India on the enterprise networks of Tata Tele Business Services and ACT Fibernet. We check which carriers already reach your building, recommend the right bandwidth, and coordinate installation and support. Contact us for a feasibility check at your address.`,
    faqs: [
      {
        question: "Is a leased line faster than broadband?",
        answer:
          "A leased line gives you the full bandwidth you pay for in both directions at all times. Broadband headline speeds can be high, but they are shared and upload is usually much slower, so real-world performance for business use is often lower.",
      },
      {
        question: "Does a leased line include static IP addresses?",
        answer: "Yes. Internet Leased Lines are normally supplied with a block of static public IP addresses.",
      },
      {
        question: "Can I use broadband as a backup for my leased line?",
        answer:
          "Yes. Many businesses pair a leased line with broadband or 4G/5G as a backup, with automatic failover on the router or SD-WAN device.",
      },
    ],
  },
  {
    id: "article-1",
    slug: "sd-wan-vs-traditional-mpls-enterprise-guide",
    title: "SD-WAN vs MPLS: How Indian Businesses Should Choose a WAN in 2026",
    category: "SD-WAN",
    readTime: "6 min read",
    image: "/services/sdwan_clean.jpg",
    excerpt:
      "A practical comparison of SD-WAN and MPLS for companies with branches across India: cost, performance, security and when to use both.",
    tags: [
      { text: "NETWORKING", variant: "dark" },
      { text: "SD-WAN", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-02-15T10:00:00.000Z",
    author: "Adapt India Network",
    content: `Companies with offices, plants, stores or warehouses in several cities need a wide area network (WAN) to connect them. For years the default in India was MPLS. Today many businesses are moving to SD-WAN, or combining the two. Here is how to decide what fits your network.

What MPLS is

MPLS (Multiprotocol Label Switching) is a private network run by a telecom carrier. Your branches connect to the carrier's MPLS cloud and traffic between them never touches the public internet. It offers predictable latency, built-in quality of service for voice and critical applications, and a single carrier responsible for the whole network.

What SD-WAN is

SD-WAN (Software-Defined WAN) builds an encrypted overlay network on top of any internet connection: leased lines, broadband or 4G/5G. A central controller decides which link each application should use, combines multiple links, and moves traffic automatically when a link degrades. New branches can be brought online quickly because devices are configured from the cloud.

Cost

MPLS circuits generally cost more per Mbps than internet links, especially for small branches. SD-WAN lets you use lower-cost internet connections and still get resilience by combining two of them. The saving grows as the number of branches increases.

Performance and reliability

MPLS gives consistent performance between sites because traffic stays on one carrier's private backbone. SD-WAN performance depends on the quality of the underlying links, but it compensates by monitoring every path in real time and steering voice, video and ERP traffic to the best one. With a leased line plus a broadband or 4G/5G backup at each branch, SD-WAN can match or exceed single-link MPLS availability.

Cloud and SaaS access

Most applications now live in Microsoft 365, Google Workspace, AWS, Azure or SaaS tools. With traditional MPLS, branch internet traffic is often sent back to the head office first, which adds delay. SD-WAN can send trusted cloud traffic straight to the internet from each branch while keeping internal traffic on secure tunnels.

Security

MPLS is private but not encrypted by default. SD-WAN encrypts traffic between sites and usually integrates firewalling, and can be extended to a SASE model where security policies apply to every branch and remote user from the cloud.

When MPLS still makes sense

MPLS remains a good fit for banks, payment networks and businesses with strict compliance needs, latency-sensitive applications between data centres, or a policy of keeping all inter-site traffic off the internet.

The hybrid approach

Many Indian enterprises run a hybrid: MPLS at data centres and large sites, and SD-WAN with internet links at smaller branches, all managed as one network. This lets you migrate gradually without a risky cut-over.

How Adapt India Network can help

We design and deliver SD-WAN, MPLS and hybrid WANs for businesses headquartered in Delhi NCR with branches across India. We assess your current network and applications, recommend a design, and coordinate links and devices at every site. Get in touch to plan your migration.`,
    faqs: [
      {
        question: "Is SD-WAN cheaper than MPLS?",
        answer:
          "Usually, yes. SD-WAN can run over lower-cost internet links, and combining two links per site gives resilience without paying MPLS prices for every branch.",
      },
      {
        question: "Can SD-WAN replace MPLS completely?",
        answer:
          "For many businesses it can. Organisations with strict compliance or very latency-sensitive inter-site traffic often keep MPLS for core sites and use SD-WAN elsewhere.",
      },
      {
        question: "Is SD-WAN secure?",
        answer:
          "SD-WAN encrypts traffic between sites and typically includes firewall features. It can be combined with cloud security services for a full SASE setup.",
      },
    ],
  },
  {
    id: "article-5",
    slug: "cloud-telephony-sip-trunking-modern-workforce",
    title: "Cloud Telephony & SIP Trunking: A Guide for Indian Businesses",
    category: "Enterprise Systems",
    readTime: "5 min read",
    image: "/services/enterprise_partnership.jpg",
    excerpt:
      "How SIP trunks and cloud telephony replace PRI lines and on-premise PBX hardware, and what Indian businesses should check before switching.",
    tags: [
      { text: "TELEPHONY", variant: "outline" },
      { text: "SIP TRUNK", variant: "dark" },
    ],
    status: "published",
    publishedAt: "2026-03-01T11:00:00.000Z",
    author: "Adapt India Network",
    content: `Business phone systems in India have changed quickly. PRI lines and boxes of PBX hardware in the server room are being replaced by SIP trunks and cloud telephony that run over your data network. Here is what each option does and how to choose.

What a SIP trunk is

A SIP trunk delivers phone lines to your business over an internet or private data connection instead of copper or PRI circuits. Your existing IP PBX connects to the SIP trunk, and you can scale the number of simultaneous calls up or down without new physical lines. Your existing numbers can usually be retained.

What cloud telephony is

Cloud telephony moves the phone system itself to the cloud. Call routing, IVR menus, call recording, queues and reporting are managed from a web dashboard, and employees can take calls on desk phones, a softphone app on their laptop, or a mobile app. There is no PBX hardware to maintain.

Benefits for growing businesses

Cloud telephony and SIP trunking make it easy to add users and channels as you grow, connect staff in different offices and at home on one system, and integrate calling with your CRM so agents see customer details when the phone rings. Toll-free numbers, virtual numbers, call recording and analytics are available without extra hardware.

What to check before switching

Voice quality depends on your network. A dedicated leased line or a well-managed SD-WAN with quality-of-service rules gives the best results, because calls need low latency and little jitter. Confirm compliance with Indian telecom regulations for your use case, check number porting timelines, plan for emergency calling, and make sure call recordings are stored in line with your data policies.

Contact centres and customer engagement

For sales and support teams, cloud contact centre platforms add features such as automatic call distribution, outbound dialling, live dashboards and WhatsApp Business messaging alongside voice, all managed from one place.

How Adapt India Network can help

We provide SIP trunks, cloud telephony, toll-free and virtual numbers, and cloud contact centre solutions, together with the leased line or SD-WAN connectivity they run on. That gives you one partner for both the network and the voice service. Contact us to plan your move from PRI or legacy PBX.`,
    faqs: [
      {
        question: "Can I keep my existing business numbers when moving to SIP?",
        answer: "In most cases, yes. Number porting depends on the current provider and number type, and we can check this for you.",
      },
      {
        question: "Do I need a leased line for cloud telephony?",
        answer:
          "Not always, but a dedicated, stable connection gives the best call quality, especially for call centres or offices with many simultaneous calls.",
      },
    ],
  },
  {
    id: "article-3",
    slug: "securing-multi-branch-enterprise-networks",
    title: "How to Secure a Multi-Branch Business Network in India",
    category: "Cyber Defense",
    readTime: "6 min read",
    image: "/services/cybersecurity.jpg",
    excerpt:
      "A practical security checklist for businesses with offices, stores or plants in several cities: firewalls, segmentation, secure remote access and monitoring.",
    tags: [
      { text: "SECURITY", variant: "yellow" },
      { text: "CYBER", variant: "outline" },
    ],
    status: "published",
    publishedAt: "2026-02-22T08:30:00.000Z",
    author: "Adapt India Network",
    content: `Every branch, store and warehouse you connect is another way into your network. Smaller sites often have the weakest protection: a basic router, a shared Wi-Fi password and no one on site to notice problems. Here is how to secure a distributed network without making it hard to run.

Put a proper firewall at every site

Each location should have a business-grade firewall or a secure SD-WAN device with firewall features, not just the router supplied with the internet connection. Manage them centrally so that the same rules apply everywhere and updates are not forgotten.

Separate your networks

Keep point-of-sale systems, CCTV, guest Wi-Fi, staff devices and servers on separate network segments. If a guest device or camera is compromised, segmentation stops the attacker from reaching billing or finance systems.

Encrypt traffic between sites

Traffic between branches and the head office should travel over encrypted tunnels, whether through SD-WAN, site-to-site VPNs or a private MPLS network. Avoid exposing internal applications directly to the internet.

Secure remote access

Replace open remote desktop ports with VPN or zero-trust network access, use multi-factor authentication for every remote login, and give each person access only to the applications they need.

Protect against DDoS and web threats

Businesses that host services or accept online payments should consider DDoS protection on their internet links. Web filtering and DNS security block many phishing and malware sites before users reach them.

Monitor and log

Security is not set-and-forget. Collect firewall and system logs, alert on unusual activity, and review them regularly, or use a managed security operations centre (SOC) if you do not have an in-house team. Indian organisations also need to be ready to report certain cyber incidents to CERT-In within prescribed timelines, which is much easier with good logging.

Keep people in the loop

Most attacks start with a phishing email or a reused password. Regular awareness training, password managers and multi-factor authentication close many of the easiest routes in.

How Adapt India Network can help

We provide next-generation firewalls, secure SD-WAN, DDoS protection and managed monitoring alongside the connectivity for each of your sites, so security policies are consistent across Delhi NCR and every branch in India. Speak to us for a review of your current setup.`,
    faqs: [
      {
        question: "Is the router from my internet provider enough for a branch office?",
        answer:
          "Usually not. A business-grade firewall or secure SD-WAN device adds traffic inspection, segmentation, VPN and central management that basic routers lack.",
      },
      {
        question: "What is network segmentation?",
        answer:
          "Dividing your network into separate zones, such as staff, guests, CCTV and payment systems, so a problem in one zone cannot spread to the others.",
      },
    ],
  },
  {
    id: "article-4",
    slug: "high-density-wifi-6-enterprise-office-deployment",
    title: "Office Wi-Fi 6 Design: Fast, Reliable Wireless for Busy Workplaces",
    category: "Wireless Systems",
    readTime: "5 min read",
    image: "/wifi-banner.jpg",
    excerpt:
      "Why office Wi-Fi slows down when the floor fills up, and how Wi-Fi 6, proper surveys and central management fix it.",
    tags: [
      { text: "WI-FI 6", variant: "dark" },
      { text: "OFFICE", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-02-27T14:00:00.000Z",
    author: "Adapt India Network",
    content: `A fast internet connection does not help if the Wi-Fi inside the office cannot keep up. Many offices in India still run on a few consumer routers placed wherever there was a socket, and performance collapses when everyone arrives. Good wireless design fixes this.

Why office Wi-Fi slows down

Each access point can only serve so many devices well, and every person now brings a laptop, a phone and often a tablet. Walls, glass partitions and lift shafts block signals, neighbouring offices crowd the same channels, and older devices slow the network for everyone.

What Wi-Fi 6 changes

Wi-Fi 6 (802.11ax) is designed for crowded spaces. Technologies such as OFDMA and MU-MIMO let one access point talk to many devices at the same time instead of one after another, and target wake time improves battery life on phones and laptops. Wi-Fi 6E and Wi-Fi 7 add more spectrum where devices support it.

Start with a site survey

The right number and placement of access points depends on your floor plan, building materials and how many people sit in each area. A survey identifies dead zones and interference before installation, so you are not guessing.

Plan for capacity, not just coverage

Meeting rooms, training areas and open-plan floors need more access points than a signal map alone suggests, because the limit is the number of users, not distance. Wired backhaul with PoE switches keeps each access point fed with enough bandwidth.

Separate staff and guests

Use separate wireless networks for employees, guests and devices such as printers and cameras, each on its own network segment with appropriate security. Guests should never be able to reach internal systems.

Manage it centrally

Cloud-managed access points let you see every device, change settings across floors or sites at once, and get alerts when something goes wrong, which is especially useful for businesses with several offices.

How Adapt India Network can help

We design, install and manage enterprise Wi-Fi for offices, campuses, hospitals and warehouses, together with the internet connection behind it. Contact us for a Wi-Fi assessment of your premises.`,
    faqs: [
      {
        question: "How many access points does my office need?",
        answer:
          "It depends on floor area, walls and especially the number of users. A site survey gives an accurate answer; capacity usually matters more than coverage.",
      },
      {
        question: "Do I need Wi-Fi 6?",
        answer:
          "For offices with many users and modern laptops and phones, Wi-Fi 6 noticeably improves performance in busy areas. Most new business access points support it.",
      },
    ],
  },
  {
    id: "article-6",
    slug: "pan-india-carrier-redundancy-dual-homed-failover",
    title: "Building Internet Redundancy with Dual-Carrier Failover in India",
    category: "Network Reliability",
    readTime: "6 min read",
    image: "/banner-global-telecom.jpg",
    excerpt:
      "How to keep offices and plants online when a fibre is cut: dual carriers, diverse paths, automatic failover and what to test.",
    tags: [
      { text: "FAILOVER", variant: "yellow" },
      { text: "UPTIME", variant: "outline" },
    ],
    status: "published",
    publishedAt: "2026-03-02T09:00:00.000Z",
    author: "Adapt India Network",
    content: `Fibre cuts from road works, metro construction and building repairs are a fact of life in Indian cities. Even the best single connection will go down sometimes. If your business cannot stop when the internet does, you need redundancy designed in from the start.

Start with what downtime costs

List what stops when the connection fails: billing, dispatch, call centre, factory systems, CCTV monitoring. Estimate the cost per hour. That figure tells you how much redundancy is worth paying for at each site.

Use two different carriers

A second line from the same provider often shares the same cable route and the same network, so one fault can take out both. A backup on a different carrier, for example one link on Tata Tele Business Services and another on ACT Fibernet, removes that single point of failure.

Ask for diverse paths

Where possible, the two connections should enter your building from different directions and through different ducts. A single trench being dug up should not cut both. Ask each carrier how their fibre reaches your premises.

Automatic failover

Redundancy only helps if switching is automatic. Routers, firewalls and SD-WAN devices can detect a failed or degraded link and move traffic in seconds. SD-WAN goes further by using both links at once and sending each application over the healthier path, so users often notice nothing.

Choose the right backup type

For critical sites, a second leased line gives the same performance as the primary. For smaller branches, business broadband or a 4G/5G router can be a cost-effective backup that keeps essential systems such as billing and email running.

Public IPs and inbound services

If you host servers or receive VPN connections, plan how they stay reachable when the primary link fails. Options include DNS failover, cloud-based access, or provider-independent routing for larger organisations.

Test it

Unplug the primary link during a quiet period and confirm that everything keeps working. Repeat after any change to your network. Many backups fail because they were never tested.

How Adapt India Network can help

We design dual-carrier connectivity for offices, plants and branches across Delhi NCR and India, coordinate both carriers, and configure automatic failover. Contact us to review the resilience of your current setup.`,
    faqs: [
      {
        question: "Is a second connection from the same provider enough?",
        answer:
          "It protects against equipment faults, but often not against fibre cuts or network-wide issues. A backup from a different carrier on a different path is more resilient.",
      },
      {
        question: "How quickly does failover happen?",
        answer:
          "With a properly configured router, firewall or SD-WAN device, traffic typically switches within seconds. SD-WAN can avoid noticeable interruption for most applications.",
      },
    ],
  },
];

export function getSeedArticle(slug: string): BlogPost | undefined {
  return seedArticles.find((a) => a.slug === slug || a.id === slug);
}
