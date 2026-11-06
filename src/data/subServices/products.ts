import type { SubService } from "./types";

/* Products in the Services menu that didn't have their own page yet. */
const CL = "cloud-infrastructure";
const SEC = "cybersecurity-solutions";
const C = "collaboration-productivity";

export const products: SubService[] = [
  {
    slug: "aws-cloud-solutions",
    name: "AWS Cloud Solutions",
    parent: CL,
    group: "Cloud & Data Center Solutions",
    headline: "Run your servers and applications on Amazon Web Services, set up and supported locally",
    summary:
      "AWS cloud for Indian businesses: servers, storage, databases and networking in AWS India regions, designed, set up and supported by our team.",
    intro: [
      "Amazon Web Services lets you run servers, storage and databases in Amazon's data centres, including the Mumbai and Hyderabad regions, instead of buying and looking after hardware yourself.",
      "We help you choose the right services and sizes, move your workloads, connect AWS securely to your offices and keep the monthly bill under control.",
    ],
    features: [
      { title: "Servers and storage", text: "EC2 servers and S3 storage sized to your workload." },
      { title: "India regions", text: "Keep data in India where your business needs it." },
      { title: "Secure connection", text: "Link AWS to your offices by VPN or a private connection." },
      { title: "Cost control", text: "Right-sizing, budgets and alerts so there are no surprise bills." },
    ],
    goodFor: ["Companies moving off ageing servers", "Web and mobile apps that need to scale", "Start-ups building on AWS", "Backup and recovery sites"],
    faqs: [
      {
        question: "Can our data stay in India on AWS?",
        answer: "Yes. AWS has regions in Mumbai and Hyderabad, and we set up your account so data stays there if required.",
      },
      {
        question: "Do you bill AWS or do we pay Amazon directly?",
        answer: "Either works. We can bill AWS with our support on one invoice, or support an account you already pay for.",
      },
    ],
  },
  {
    slug: "data-center-colocation",
    name: "Data Center & Colocation",
    parent: CL,
    group: "Cloud & Data Center Solutions",
    headline: "Space, power and cooling for your servers in a professional data centre",
    summary:
      "Data centre colocation in India: rack space, power, cooling and carrier connectivity for your servers in Tier III data centres, with remote hands support.",
    intro: [
      "Keeping servers in an office server room means worrying about power cuts, cooling, physical security and a single internet line. Colocation moves your own servers into a professional data centre built for all of that.",
      "We help you pick a facility and rack size, arrange power and connectivity, plan the move and coordinate support once you're live.",
    ],
    features: [
      { title: "Rack space", text: "From a few rack units to full racks and cages." },
      { title: "Power and cooling", text: "Redundant power with UPS and generator backup." },
      { title: "Carrier choice", text: "Connect with leased lines and MPLS from several carriers." },
      { title: "Remote hands", text: "On-site staff for reboots, cabling and checks." },
    ],
    goodFor: ["Companies with their own servers", "Businesses outgrowing an office server room", "Hosting and SaaS companies", "Disaster recovery sites"],
    faqs: [
      {
        question: "Where are the data centres?",
        answer: "We work with data centres in Delhi NCR, Mumbai and other major cities. We'll suggest the right one for your location and needs.",
      },
      {
        question: "Can you also provide the internet for our rack?",
        answer: "Yes. We can provide internet leased lines and MPLS into the data centre, so connectivity comes from the same partner.",
      },
    ],
  },
  {
    slug: "disaster-recovery-draas",
    name: "Disaster Recovery (DRaaS)",
    parent: CL,
    group: "Cloud & Data Center Solutions",
    headline: "Keep your business running when a server, site or office goes down",
    summary:
      "Disaster Recovery as a Service in India: your critical servers copied to the cloud and ready to start up in another location if your main site fails.",
    intro: [
      "A fire, flood, ransomware attack or hardware failure can stop a business for days. Disaster recovery keeps an up-to-date copy of your critical servers in another location, ready to start if the main one is lost.",
      "We work out which systems matter most and how quickly they must be back, set up replication to the cloud, and test the switch-over with you.",
    ],
    features: [
      { title: "Continuous copies", text: "Critical servers replicated to a secure cloud site." },
      { title: "Fast recovery", text: "Systems started in the cloud in hours, not days." },
      { title: "Agreed targets", text: "Recovery time and data-loss targets set for each system." },
      { title: "Regular drills", text: "Planned tests to prove recovery actually works." },
    ],
    goodFor: ["Businesses that can't afford long downtime", "BFSI and healthcare companies", "Companies with one main server room", "Firms needing audit-ready DR plans"],
    faqs: [
      {
        question: "How is DR different from backup?",
        answer: "Backup keeps copies of data so you can restore it. Disaster recovery keeps whole servers ready to run elsewhere, so the business keeps working while the main site is repaired.",
      },
      {
        question: "Do we need to buy a second data centre?",
        answer: "No. The recovery site runs in the cloud, and you mostly pay for storage until you actually need to switch over.",
      },
    ],
  },
  {
    slug: "cloud-backup",
    name: "Cloud Backup",
    parent: CL,
    group: "Cloud & Data Center Solutions",
    headline: "Automatic, encrypted backups of your servers, laptops and Microsoft 365 data",
    summary:
      "Cloud backup for Indian businesses: automatic, encrypted backups of servers, PCs and Microsoft 365 or Google Workspace, with quick restores when you need them.",
    intro: [
      "Files get deleted, laptops get lost and ransomware locks data. Cloud backup copies your important data off-site every day, automatically, so it can be restored when something goes wrong.",
      "We set up backups for servers, PCs and email, choose how long copies are kept, and check that backups complete and can actually be restored.",
    ],
    features: [
      { title: "Automatic schedules", text: "Daily or more frequent backups without anyone remembering." },
      { title: "Encrypted copies", text: "Data encrypted before it leaves your office." },
      { title: "Microsoft 365 and Google", text: "Mail, OneDrive and Drive data backed up too." },
      { title: "Quick restores", text: "Single files or whole machines brought back." },
    ],
    goodFor: ["Small and mid-sized offices", "Companies worried about ransomware", "Teams on Microsoft 365 or Google Workspace", "Businesses with compliance needs"],
    faqs: [
      {
        question: "Doesn't Microsoft 365 already back up our data?",
        answer: "Microsoft keeps the service running, but deleted or overwritten data is only kept for a limited time. A separate backup lets you restore older data.",
      },
      {
        question: "How long are backups kept?",
        answer: "You choose, for example 30 days, a year or longer, depending on your needs and any compliance rules.",
      },
    ],
  },
  {
    slug: "vapt",
    name: "VAPT (Vulnerability Assessment & Penetration Testing)",
    parent: SEC,
    group: "Cyber Security Solutions",
    headline: "Find the weak spots in your network, website and apps before attackers do",
    summary:
      "VAPT services in India: vulnerability assessment and penetration testing of networks, websites, apps and cloud, with a clear report and fix guidance.",
    intro: [
      "A vulnerability assessment scans your systems for known weaknesses. A penetration test goes further: security testers try to break in the way a real attacker would, with your permission.",
      "You get a plain report ranking each issue by risk, with steps to fix it, and a re-test to confirm the fixes worked.",
    ],
    features: [
      { title: "Network testing", text: "Firewalls, servers and internet-facing systems checked." },
      { title: "Web and app testing", text: "Websites, APIs and mobile apps tested for common flaws." },
      { title: "Clear report", text: "Issues ranked by risk, with steps to fix each one." },
      { title: "Re-test", text: "Fixes checked again so you know they worked." },
    ],
    goodFor: ["Companies preparing for audits", "Businesses with customer-facing websites or apps", "BFSI, healthcare and e-commerce", "Firms after a security incident"],
    faqs: [
      {
        question: "Will testing disrupt our systems?",
        answer: "Tests are planned with you, with agreed times and limits, so day-to-day work isn't affected.",
      },
      {
        question: "How often should we do VAPT?",
        answer: "At least once a year, and after major changes such as a new website, app or network.",
      },
    ],
  },
  {
    slug: "zoom-licenses",
    name: "Zoom Licenses",
    parent: C,
    group: "Collaboration & Productivity",
    headline: "Zoom Meetings, Webinars and Phone licences, billed in India with local support",
    summary:
      "Buy Zoom licences in India: Zoom Workplace, Meetings, Webinars, Rooms and Phone plans with GST invoicing, easy user management and local support.",
    intro: [
      "Free Zoom accounts cut meetings at 40 minutes and lack admin controls. Business licences remove those limits and let you manage every user from one account.",
      "We help you pick the right plan for each team, set up the account and single sign-on, and add or remove licences as your team changes.",
    ],
    features: [
      { title: "Right plan per user", text: "Pro, Business or Enterprise, mixed as needed." },
      { title: "Webinars and events", text: "Licences for large webinars and town halls." },
      { title: "GST invoicing", text: "Billed in rupees with a proper tax invoice." },
      { title: "Admin help", text: "Users, settings and security set up for you." },
    ],
    goodFor: ["Teams that meet clients online", "Companies running webinars", "Training and education", "Businesses moving off free accounts"],
    faqs: [
      {
        question: "Can we mix different Zoom plans?",
        answer: "Yes. Heavy users can have higher plans while others stay on basic licences, all under one account.",
      },
      {
        question: "Can you move our existing Zoom users?",
        answer: "Yes. Existing users and their settings can be brought under the new business account.",
      },
    ],
  },
];
