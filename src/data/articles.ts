import type { BlogPost } from "../lib/db";
import { guideArticles } from "./guideArticles";

/**
 * Built-in articles. These pages are linked from the homepage, /blog and
 * /articles, so they are always generated even when the admin blog store is
 * empty. Content format: paragraphs separated by a blank line; a short line
 * without a full stop at the end is shown as a heading.
 */
const coreArticles: BlogPost[] = [
  {
    id: "article-2",
    slug: "why-dedicated-internet-leased-lines-matter",
    title: "Internet Leased Line (ILL) vs Business Broadband: Why Dedicated Bandwidth Matters",
    metaTitle: "Leased Line vs Broadband: Key Differences for Business",
    metaDescription:
      "Leased line vs broadband: the real difference in speed, upload, uptime, static IP and support, and how to tell which one your office needs.",
    focusKeyword: "leased line vs broadband",
    category: "Network Reliability",
    readTime: "6 min read",
    image: "/service-banners/sd-wan-ready-ill.jpg",
    excerpt:
      "What an Internet Leased Line actually is, how it differs from business broadband, and how Indian businesses can decide which one they need.",
    tags: [
      { text: "CONNECTIVITY", variant: "outline" },
      { text: "ILL", variant: "dark" },
    ],
    status: "published",
    publishedAt: "2026-02-18T12:00:00.000Z",
    updatedAt: "2026-11-16T10:00:00.000Z",
    author: "Adapt India Networks",
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

How Adapt India Networks can help

We arrange [Internet Leased Lines](/services/smart-internet-ill/) for offices across [Delhi](/locations/delhi/), [Gurgaon](/locations/gurgaon/), [Noida](/locations/noida/), Ghaziabad, Faridabad and the rest of India on the enterprise networks of Tata Tele Business Services and ACT Fibernet. We check which carriers already reach your building, recommend the right bandwidth, and coordinate installation and support. If you also need to connect two of your own sites privately, read our guide to [point-to-point vs internet leased lines](/blog/point-to-point-leased-line-vs-internet-leased-line/). [Contact us](/contact/) for a feasibility check at your address.`,
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
    title: "SD-WAN vs MPLS: How Indian Businesses Should Choose a WAN",
    metaTitle: "SD-WAN vs MPLS: Which WAN Should Your Business Choose?",
    metaDescription:
      "SD-WAN vs MPLS for Indian businesses with branches: how each works, reliability, cloud access, security, rollout time and when a hybrid WAN makes sense.",
    focusKeyword: "sd-wan vs mpls",
    category: "SD-WAN",
    readTime: "9 min read",
    image: "/services/sdwan_clean.jpg",
    excerpt:
      "A practical comparison of SD-WAN and MPLS for companies with branches across India: how each works, reliability, cloud access, security and when to use both.",
    tags: [
      { text: "NETWORKING", variant: "dark" },
      { text: "SD-WAN", variant: "yellow" },
    ],
    status: "published",
    publishedAt: "2026-02-15T10:00:00.000Z",
    updatedAt: "2026-11-16T10:00:00.000Z",
    author: "Adapt India Networks",
    content: `If your company has offices, plants, stores or warehouses in more than one city, you need a wide area network (WAN) to connect them. For a long time the answer in India was MPLS from one carrier. Today most of the enquiries we get are about SD-WAN, or about running both together. This guide explains how each one works and how to decide which fits your business.

## The short answer

If you have a handful of large sites, strict compliance rules and traffic that must never cross the internet, MPLS is still a safe choice. If you have many branches, most of your applications are in the cloud and you want each site to stay online when one link fails, SD-WAN usually fits better. Many companies end up with a mix: MPLS at the data centre and head office, SD-WAN at the branches.

## What MPLS is

[MPLS](/services/managed-mpls/) (Multiprotocol Label Switching) is a private network run by a telecom carrier. Each of your sites gets a circuit into the carrier's MPLS network, and traffic between your sites travels inside that private network instead of over the public internet. The carrier can give voice and ERP traffic priority over file transfers, and one carrier is responsible for the whole network from end to end.

The catch is that every site has to be on that one carrier's network. If the carrier has no fibre in a branch's building, that branch needs a new fibre run or a slower last-mile option. And if the single MPLS circuit at a branch goes down, that branch is cut off unless you have ordered a second circuit as a backup.

## What SD-WAN is

[SD-WAN](/services/smartflo-sd-wan/) (Software-Defined WAN) puts a small device at each site that builds encrypted tunnels to your other sites over whatever connections that site has: an [internet leased line](/services/smart-internet-ill/), business broadband, or 4G/5G. A central controller watches every link all the time and decides which one each application should use. If the leased line at a branch starts dropping packets, calls and billing traffic move to the broadband or 4G link within seconds, without anyone at the branch doing anything.

Because the devices are set up from a central dashboard, a new branch can be brought online by shipping a pre-configured box and plugging it in. Policies such as "billing traffic first, YouTube last" are written once and pushed to every site.

## Side by side

- **How sites are connected:** MPLS uses private circuits from one carrier. SD-WAN uses any internet links, from one or several carriers.
- **What happens when a link fails:** with MPLS, the site is down unless a second circuit was ordered. With SD-WAN, traffic moves to the other link at that site automatically.
- **Access to cloud apps:** with MPLS, branch internet traffic often goes back to the head office first. With SD-WAN, trusted cloud traffic such as Microsoft 365 can go straight out from the branch.
- **Rollout of a new site:** MPLS depends on the carrier's fibre reaching the building. SD-WAN can start on broadband or 4G and add a leased line later.
- **Visibility:** MPLS reporting comes from the carrier. SD-WAN gives you a dashboard showing every link and application at every site.
- **Encryption:** MPLS keeps traffic private but does not encrypt it by default. SD-WAN encrypts traffic between sites.

## Reliability: the real question

People often assume MPLS is more reliable because it is private. Between two healthy sites, MPLS does give very steady performance. But most branch outages we see in Indian cities are fibre cuts on the last mile: road works, metro construction, building repairs and, in Mumbai and Chennai, monsoon damage. A single MPLS circuit does not protect against that.

SD-WAN's strength is that it expects links to fail. With two connections at a site, ideally from two different carriers that reach the building by different routes, a cut on one simply moves traffic to the other. That is why a branch with a leased line plus a broadband or 4G/5G backup under SD-WAN can stay online through problems that would take a single-circuit MPLS site offline. You can read more on designing this in our guide to [dual-carrier failover](/blog/pan-india-carrier-redundancy-dual-homed-failover/).

## Cloud and SaaS traffic

Ten years ago most business applications ran on servers at the head office, so sending all branch traffic there over MPLS made sense. Now email, files, CRM and ERP often live in Microsoft 365, Google Workspace, Zoho, SAP cloud or AWS. Sending that traffic from a Pune branch to a Delhi head office and then out to the internet adds delay and fills the head office's internet line.

SD-WAN lets each branch send trusted cloud traffic straight to the internet, while internal traffic such as file servers and on-premise ERP still travels over encrypted tunnels. Video calls in particular feel noticeably better when they take the direct route.

## Security

MPLS is private, which is why banks and payment networks have trusted it for years. It is not encrypted by default, though, and it does nothing about threats arriving from the internet at each branch.

SD-WAN encrypts traffic between sites and usually includes a firewall at every branch. It can also be joined with cloud security services so the same web filtering and access rules apply at every site and to people working from home. If branches will use their own internet connections, plan the firewall and web filtering at the same time as the SD-WAN, not afterwards. Our article on [securing multi-branch networks](/blog/securing-multi-branch-enterprise-networks/) covers this in more detail.

## What affects the cost

We don't publish prices because they depend heavily on your sites, but the factors are worth knowing. MPLS cost depends on the bandwidth at each site, the distance between sites and how many sites are on the network, and every branch needs its own carrier circuit. SD-WAN cost depends on the number of sites, the devices and licences, and the internet links at each site, which can be a mix of leased lines and business broadband. For networks with many small branches, SD-WAN usually works out better value because small sites don't each need a private circuit. For a few large sites with heavy traffic between them, the difference is smaller. Ask for a quote for both designs before deciding.

## When MPLS still makes sense

- Banks, NBFCs and payment companies whose auditors or regulators expect inter-site traffic to stay off the internet.
- Two or three large sites, such as a head office, a plant and a data centre, with heavy, steady traffic between them.
- Applications that are very sensitive to delay, such as real-time manufacturing systems or trading links between data centres.
- Companies that already have a working MPLS network and no pressing reason to change it.

For two sites only, also look at a [point-to-point leased line](/blog/point-to-point-leased-line-vs-internet-leased-line/), which is a private link between two addresses and can be simpler than either option.

## When SD-WAN is the better choice

- Retail chains, clinics, schools, showrooms and service centres with many small sites.
- Businesses opening branches often, where waiting for an MPLS circuit at each new site slows things down.
- Companies whose main applications are in the cloud.
- Any network where a branch going offline costs money, because SD-WAN makes two links per site easy to use.

## The hybrid approach

Most medium and large companies we work with don't switch overnight. A common path is to keep MPLS at the data centre and head office, put SD-WAN with dual internet links at the branches, and run both as one network. As MPLS contracts come up for renewal, sites move across one by one. This avoids a risky cut-over and lets you compare performance before committing.

## Questions to ask before you decide

- How many sites do you have now, and how many will you add in the next two years?
- Where do your main applications run: in your own server room, in a data centre, or in the cloud?
- Which carriers already have fibre in each of your buildings? This decides whether a second carrier is possible at each site.
- What happens to the business if one branch is offline for half a day?
- Do your auditors or customers have rules about traffic crossing the internet?
- Who will manage the network day to day, your own IT team or a managed service?

## How Adapt India Networks helps

We design and deliver [managed SD-WAN](/services/smartflo-sd-wan/), [MPLS](/services/managed-mpls/) and hybrid networks through the enterprise networks of Tata Tele Business Services and ACT Fibernet. We check carrier availability at each of your addresses first, then propose a design that matches your sites and applications, whether your head office is in [Delhi](/locations/delhi/) and your branches are spread from [Mumbai](/locations/mumbai/) to [Bengaluru](/locations/bengaluru/), or the other way round. [Talk to us](/contact/) with your list of sites and we'll suggest the right mix.`,
    faqs: [
      {
        question: "Is SD-WAN cheaper than MPLS?",
        answer:
          "For networks with many small branches it usually is, because each branch can use internet links instead of a private carrier circuit. For a few large sites with heavy traffic between them the difference is smaller, so it is worth pricing both designs.",
      },
      {
        question: "Can SD-WAN replace MPLS completely?",
        answer:
          "For many businesses, yes. Companies with strict compliance rules or very delay-sensitive traffic between data centres often keep MPLS for those sites and use SD-WAN at the branches.",
      },
      {
        question: "Is SD-WAN secure enough for business use?",
        answer:
          "SD-WAN encrypts traffic between sites and usually includes a firewall at each branch. It can also be combined with cloud security so the same rules apply at every site and for remote staff.",
      },
      {
        question: "Can we run SD-WAN and MPLS together?",
        answer:
          "Yes. Many companies keep MPLS at the head office and data centre and use SD-WAN at the branches, managed as one network, then move sites across as contracts end.",
      },
      {
        question: "Does SD-WAN work over 4G or 5G?",
        answer:
          "Yes. A 4G/5G link can be the backup at a branch, or the main link at a temporary or remote site until a leased line is installed.",
      },
    ],
  },
  {
    id: "article-5",
    slug: "cloud-telephony-sip-trunking-modern-workforce",
    title: "Cloud Telephony & SIP Trunking: A Guide for Indian Businesses",
    category: "Enterprise Systems",
    readTime: "5 min read",
    image: "/service-banners/toll-free-number-services.jpg",
    excerpt:
      "How SIP trunks and cloud telephony replace PRI lines and on-premise PBX hardware, and what Indian businesses should check before switching.",
    tags: [
      { text: "TELEPHONY", variant: "outline" },
      { text: "SIP TRUNK", variant: "dark" },
    ],
    status: "published",
    publishedAt: "2026-03-01T11:00:00.000Z",
    author: "Adapt India Networks",
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

How Adapt India Networks can help

We provide [SIP trunks](/services/sip-trunk-services/), [cloud telephony](/services/smartflo-ucaas/), toll-free and virtual numbers, and cloud contact centre solutions, together with the [leased line](/services/smart-internet-ill/) or [SD-WAN](/services/smartflo-sd-wan/) connectivity they run on. That gives you one partner for both the network and the voice service. Contact us to plan your move from PRI or legacy PBX.`,
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
    metaTitle: "Multi-Branch Network Security: 8-Step Checklist",
    metaDescription:
      "A practical checklist to secure a business network with branches across India: firewalls, segmentation, VPN, remote access, filtering, logging and training.",
    focusKeyword: "multi branch network security",
    category: "Cyber Defense",
    readTime: "8 min read",
    image: "/services/hero_cybersecurity.jpg",
    excerpt:
      "A practical security checklist for businesses with offices, stores or plants in several cities: firewalls, segmentation, secure remote access and monitoring.",
    tags: [
      { text: "SECURITY", variant: "yellow" },
      { text: "CYBER", variant: "outline" },
    ],
    status: "published",
    publishedAt: "2026-02-22T08:30:00.000Z",
    updatedAt: "2026-11-16T11:00:00.000Z",
    author: "Adapt India Networks",
    content: `Every branch, store, clinic and warehouse you connect is another way into your network. Smaller sites usually have the weakest protection: the router the internet provider left behind, a Wi-Fi password written on the wall, and nobody on site who would notice something odd. Attackers know this, and a branch is often where a breach starts before it spreads to head office. Here is a practical checklist for securing a multi-branch network in India without making it hard to run.

## 1. Put a proper firewall at every site

Each location needs a business-grade firewall, or an SD-WAN device with firewall features built in, not just the provider's router. A next-generation firewall can inspect traffic, block known malware and risky sites, and run the VPN tunnels back to head office.

The important part is central management. When twenty branches each have a firewall configured by hand, rules drift apart and updates get forgotten. Manage them from one console so the same policy applies everywhere and every device gets security updates on time.

## 2. Separate your networks

Keep point-of-sale terminals, CCTV cameras, guest Wi-Fi, staff laptops and servers on separate network segments (VLANs), with rules about which segment can talk to which. If a cheap camera or a visitor's phone is compromised, segmentation stops the attacker from reaching billing or finance systems.

At a minimum, guest Wi-Fi should only reach the internet, and CCTV recorders should only be reachable by the people who need them.

## 3. Encrypt traffic between sites

Traffic between branches and head office should travel over encrypted tunnels, either through [SD-WAN](/services/smartflo-sd-wan/), site-to-site VPNs, or a private [MPLS](/services/managed-mpls/) network. Internal applications such as ERP, file shares and accounting software should never be opened directly to the internet just so branches can reach them.

## 4. Lock down remote access

Open remote desktop (RDP) ports are one of the most common ways into small business networks. Replace them with a VPN or zero-trust access, turn on multi-factor authentication for every remote login, and give each person access only to the applications they actually use.

When staff leave, remove their access on the same day. This sounds obvious, but in businesses with many branches it is often missed.

## 5. Watch the internet links themselves

- **Web and DNS filtering** blocks many phishing and malware sites before anyone reaches them, at every branch and for remote staff.
- **DDoS protection** matters if you host services, run an online store or accept payments over your own connection. Clean-pipe protection on the [leased line](/services/smart-internet-ill/) filters attack traffic before it reaches your office.
- **Static IPs** should only expose the services you mean to expose. Check from outside which ports are open on each office IP.

## 6. Keep devices updated

Firewalls, routers, switches and Wi-Fi access points all get security updates. Branch equipment is the most likely to be forgotten because nobody sees it. Keep an inventory of every network device at every site, with its firmware version, and schedule updates.

## 7. Log everything and have someone look at it

Collect logs from firewalls and key systems in one place, set alerts for unusual activity such as logins at odd hours or traffic to unknown countries, and review them regularly. If you don't have an in-house security team, a managed monitoring service can do this for you.

Good logs also matter for compliance. Under CERT-In's directions, many Indian organisations must report certain cyber incidents within a short deadline and keep logs for a set period, which is very hard to do without central logging.

## 8. Train people

Most attacks still start with a phishing email, a fake invoice or a reused password. Short, regular awareness sessions, a password manager and multi-factor authentication close many of the easiest ways in. Make it easy for staff at any branch to report a suspicious email without being blamed.

## A simple starting point

If you are starting from scratch, do these first: a managed firewall or secure SD-WAN device at every site, separate guest and CCTV networks, multi-factor authentication on email and remote access, and central logging. Then build up from there.

## How Adapt India Networks helps

We supply [firewalls and network security](/services/cybersecurity-solutions/), secure SD-WAN, DDoS protection and monitoring together with the internet and private links for each of your sites, so security is set up the same way at every branch from day one. [Talk to us](/contact/) for a review of your current branch network.`,
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
    author: "Adapt India Networks",
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

How Adapt India Networks can help

We design, install and manage [enterprise Wi-Fi](/services/managed-campus-wifi/) for offices, campuses, hospitals and warehouses, together with the [internet connection](/services/smart-internet-ill/) behind it. Contact us for a Wi-Fi assessment of your premises.`,
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
    title: "Dual ISP Failover for Office: How to Keep Your Business Online in India",
    metaTitle: "Dual ISP Failover for Office: Internet Backup Guide",
    metaDescription:
      "How to set up dual ISP failover for your office in India: two carriers, separate fibre paths, the right backup line, automatic switching and testing.",
    focusKeyword: "dual isp failover for office",
    category: "Network Reliability",
    readTime: "9 min read",
    image: "/service-banners/automated-failover-management.jpg",
    excerpt:
      "How to keep offices and plants online when a fibre is cut: dual carriers, diverse paths, automatic failover and what to test.",
    tags: [
      { text: "FAILOVER", variant: "yellow" },
      { text: "UPTIME", variant: "outline" },
    ],
    status: "published",
    publishedAt: "2026-03-02T09:00:00.000Z",
    updatedAt: "2026-11-16T11:00:00.000Z",
    author: "Adapt India Networks",
    content: `Fibre cuts from road works, metro construction and building repairs happen every week in Indian cities. Even a good leased line will go down sometimes, and when it does the provider's repair clock starts, not yours. If your office stops working when the internet stops, you need a second connection and a way to switch to it on its own. This guide explains how to set up dual ISP failover properly, and the mistakes that make many backups useless when they are finally needed.

## Start with what downtime costs you

Before choosing any equipment, list what stops when the connection fails at each site: billing, dispatch, the call centre, factory systems, CCTV monitoring, video calls with clients. Then estimate roughly what an hour of that costs the business, in lost sales, idle staff and unhappy customers.

That figure decides how much backup each site deserves. A head office or plant where an hour offline is expensive justifies a second leased line. A small branch where staff can manage for a while on phones may only need a 4G/5G router.

## Use two different carriers

The most common mistake we see is a second line from the same provider. It protects against a faulty router, but both lines usually share the same cable route out of the building and the same network upstream. When a trench is dug through that cable, or the provider has a wider outage, both lines go down together.

A backup on a different carrier removes that single point of failure. For example, one link on Tata Tele Business Services and another on ACT Fibernet, each reaching your building on its own fibre.

## Ask how each line reaches your building

Two carriers are only truly separate if their cables take different paths. Ideally the two lines enter your building from different sides and through different ducts, so one digging machine on one road can't cut both.

Ask each carrier how their fibre reaches your premises before you sign. In many commercial towers both carriers share one riser and one entry point. That still protects you against a carrier-wide fault, but not against damage at the building entry, and it is better to know that up front.

## Choose the right type of backup

- **Second leased line.** Same speed, static IPs and SLA as the main line. The right choice for head offices, data rooms, plants and call centres.
- **Business broadband.** A good backup for smaller offices and stores. Speeds are lower and shared, but it keeps billing, email and cloud apps running.
- **4G/5G router.** Needs no new cabling, so it can be set up quickly, even in a building where a second carrier has no fibre. Best for small branches, temporary sites and as a third line of defence.

Many businesses mix these: a leased line plus broadband at the head office, broadband plus 4G/5G at the branches.

## Make the switch automatic

A backup that someone has to plug in by hand won't help at 9 pm on a Saturday. Failover has to happen on its own.

There are three common ways to do it:

- **Dual-WAN router or firewall.** It watches the main link and moves traffic to the backup when the main link stops responding. Simple and reliable for a single office.
- **Load balancing.** Both links carry traffic all the time, so you get use out of the backup instead of paying for an idle line. If one fails, the other carries everything.
- **SD-WAN.** It measures delay and packet loss on every link continuously and sends each application over the healthiest path. Calls can move to the backup line before people notice the main line has a problem. For companies with several sites, [SD-WAN](/services/smartflo-sd-wan/) also gives one dashboard to watch every branch.

Set the failover to check something beyond the provider's own router, such as a public DNS server, so the switch also happens when the line is up but the internet behind it isn't working.

## Plan for static IPs and inbound services

Failover is easy for outgoing traffic: browsing, email and cloud apps simply use whichever line is up. It is harder for anything that has to reach you from outside, such as CCTV viewing, a VPN into the office or a server hosted on site, because those use your main line's [static IP address](/blog/static-ip-address-for-business-india/).

Options include:

- Pointing remote users at a second address, or using DNS that switches when the main line fails.
- Moving VPN access to a cloud gateway, so it doesn't depend on one office line.
- For larger organisations with their own IP block, announcing it over both carriers with BGP.

Decide which inbound services must keep working during an outage, and design for those.

## Don't forget power and Wi-Fi

Two internet lines don't help if the router, switches and Wi-Fi access points go dark in a power cut. Put the network equipment for both lines on a UPS with enough backup time for your usual power outages. And make sure both lines terminate on equipment that is itself not a single point of failure for critical sites.

## Test it, then test it again

Many backups fail the first time they are needed because nobody ever checked them. Once the setup is installed:

1. Unplug the main line during a quiet hour and confirm that calls, billing, VPN and cloud apps keep working.
2. Plug it back in and check that traffic returns as expected.
3. Repeat after any change to the network, and at least every few months.

Also check that alerts reach the right person when a line fails, so the faulty line gets repaired while the backup carries the load.

## A simple setup for most offices

For a typical office of 20 to 100 people, a good starting design is:

- An [internet leased line](/services/smart-internet-ill/) from one carrier as the main connection.
- Business broadband or a second leased line from a different carrier as the backup.
- A firewall or SD-WAN device that uses both and switches automatically.
- Network equipment on a UPS, and a failover test after installation.

For a company with many branches, the same idea is repeated at every site with SD-WAN on top, so every branch is watched from one place.

## How Adapt India Networks helps

We design dual-carrier internet for offices, plants and branches across India using the enterprise networks of Tata Tele Business Services and ACT Fibernet. We first check which carriers already reach your building and how, then suggest the backup that fits each site, coordinate both carriers, and set up and test the failover. Whether you have one office in [Gurgaon](/locations/gurgaon/) or branches from [Mumbai](/locations/mumbai/) to [Chennai](/locations/chennai/), [send us your addresses](/contact/) and we'll tell you what is possible at each one.`,
    faqs: [
      {
        question: "What is dual ISP failover?",
        answer:
          "Two internet connections from different providers at one site, with a router, firewall or SD-WAN device that moves traffic to the second line automatically when the first one fails.",
      },
      {
        question: "Can a 4G or 5G router be the backup for an office?",
        answer:
          "Yes, for small offices and branches it is a practical backup that needs no new cabling. For a head office or call centre, a second wired line from another carrier is the better choice.",
      },
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

/** Newest guides first, then the original articles. */
export const seedArticles: BlogPost[] = [...guideArticles, ...coreArticles];

export function getSeedArticle(slug: string): BlogPost | undefined {
  return seedArticles.find((a) => a.slug === slug || a.id === slug);
}
