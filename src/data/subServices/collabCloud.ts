import type { SubService } from "./types";

const C = "collaboration-productivity";
const CL = "cloud-infrastructure";

export const collabCloud: SubService[] = [
  // ---------------- Collaboration & productivity ----------------
  {
    slug: "microsoft-365-enterprise",
    name: "Microsoft 365 Enterprise",
    parent: C,
    group: "Collaboration & Productivity",
    headline: "Email, Office apps, Teams and file sharing, set up properly for your company",
    summary:
      "Microsoft 365 for businesses in India: licences, email migration, Teams, OneDrive and security set up and supported by a local partner.",
    intro: [
      "Microsoft 365 brings Outlook email, Word, Excel, PowerPoint, Teams and OneDrive together under one subscription. Most businesses buy it; fewer set it up well.",
      "We help you choose the right licences, move email and files from your old system, set up security such as multi-factor sign-in, and support your users afterwards.",
    ],
    features: [
      { title: "Right licences", text: "Choose plans by role so you don't pay for unused features." },
      { title: "Email and file migration", text: "Move mailboxes and files with minimal disruption." },
      { title: "Security basics", text: "Multi-factor sign-in, device policies and email protection." },
      { title: "User support", text: "Help when people get stuck." },
    ],
    goodFor: ["Companies moving from other email systems", "Growing SMEs", "Hybrid workforces", "Businesses wanting one support partner"],
    faqs: [
      {
        question: "Can you move our existing email to Microsoft 365?",
        answer: "Yes. We migrate mailboxes from most email systems and plan the switchover to avoid lost mail.",
      },
      {
        question: "Can we mix licence types?",
        answer: "Yes. Different users can have different plans based on what they need.",
      },
    ],
  },
  {
    slug: "microsoft-copilot",
    name: "Microsoft Copilot AI",
    parent: C,
    group: "Collaboration & Productivity",
    headline: "AI help inside Word, Excel, Outlook and Teams, set up with the right access",
    summary:
      "Microsoft 365 Copilot for Indian businesses: licensing, readiness checks, permissions clean-up and user training so AI assistance is useful and safe.",
    intro: [
      "Microsoft 365 Copilot is an AI assistant inside the Office apps. It can draft emails and documents, summarise Teams meetings, and help analyse data in Excel, using your company's information.",
      "Because it can see what each user has access to, it's important to tidy up file permissions first. We help you check readiness, roll it out to the right people and train them to use it well.",
    ],
    features: [
      { title: "Readiness check", text: "Review licences, data and permissions before rollout." },
      { title: "Permission clean-up", text: "Make sure people only see what they should." },
      { title: "Pilot rollout", text: "Start with a group that will benefit most." },
      { title: "Training", text: "Practical sessions on everyday use." },
    ],
    goodFor: ["Microsoft 365 organisations", "Teams with heavy email and document work", "Managers summarising meetings", "Companies exploring AI safely"],
    faqs: [
      {
        question: "Does Copilot use our data to train public AI models?",
        answer: "Microsoft states that Microsoft 365 Copilot doesn't use your organisation's data to train its foundation models. We can share the latest documentation.",
      },
      {
        question: "Do all users need Copilot?",
        answer: "No. Many companies start with a smaller group and expand based on results.",
      },
    ],
  },
  {
    slug: "google-workspace",
    name: "Google Workspace",
    parent: C,
    group: "Collaboration & Productivity",
    headline: "Gmail with your company domain, plus Drive, Meet and Docs for the whole team",
    summary:
      "Google Workspace for businesses in India: professional Gmail on your domain, Drive, Meet and Docs, with migration, setup and support.",
    intro: [
      "Google Workspace gives your team Gmail on your own domain, shared Drive storage, Google Meet for video calls and Docs, Sheets and Slides for working together in real time.",
      "We set up your domain, move existing email, organise shared drives and apply sensible security settings, then help when users have questions.",
    ],
    features: [
      { title: "Email on your domain", text: "name@yourcompany.com on Gmail." },
      { title: "Migration", text: "Move existing email and files across." },
      { title: "Shared drives", text: "Team folders that don't disappear when someone leaves." },
      { title: "Security settings", text: "2-step verification and admin controls set up." },
    ],
    goodFor: ["Startups and SMEs", "Schools and colleges", "Teams already used to Gmail", "Companies wanting simple collaboration"],
    faqs: [
      {
        question: "Can we switch from Microsoft 365 to Google Workspace?",
        answer: "Yes. We migrate email, calendars and files and plan the cut-over date with you.",
      },
      {
        question: "Which plan should we choose?",
        answer: "It depends on storage, meeting size and security needs. We'll compare plans for your team.",
      },
    ],
  },
  {
    slug: "zoom-rooms",
    name: "Enterprise Zoom Rooms",
    parent: C,
    group: "Collaboration & Productivity",
    headline: "Meeting rooms where a video call starts with one tap",
    summary:
      "Zoom Rooms setup for offices in India: cameras, microphones, displays and controllers installed and configured so meetings start with one tap.",
    intro: [
      "Many meeting rooms waste the first ten minutes of every call on cables, adapters and audio problems. Zoom Rooms turns a meeting room into a dedicated video setup that joins scheduled calls with one tap.",
      "We advise on equipment for your room size, install it, connect it to your calendar and make sure the network can carry clear video.",
    ],
    features: [
      { title: "Right equipment", text: "Cameras, microphones and displays sized for each room." },
      { title: "One-tap join", text: "Meetings appear on the room controller from the calendar." },
      { title: "Content sharing", text: "Share laptop screens without cables." },
      { title: "Network check", text: "Bandwidth and Wi-Fi tuned for video." },
    ],
    goodFor: ["Boardrooms and meeting rooms", "Training rooms", "Companies with regular client calls", "Multi-office teams"],
    faqs: [
      {
        question: "Can Zoom Rooms join Teams or Google Meet calls?",
        answer: "Zoom Rooms supports joining some other platforms' meetings, depending on configuration. We'll confirm for your setup.",
      },
      {
        question: "Do we need a separate licence per room?",
        answer: "Yes, Zoom Rooms is licensed per room.",
      },
    ],
  },
  {
    slug: "international-bridging-service",
    name: "International Bridging Service",
    parent: C,
    group: "Collaboration & Productivity",
    headline: "Audio conference calls that participants can join from around the world",
    summary:
      "International audio conference bridging for businesses: dial-in numbers across countries, moderator controls and clear audio for global calls.",
    intro: [
      "Not every participant can join by app. An audio conference bridge gives people dial-in numbers so they can join from a normal phone, wherever they are.",
      "It's useful for calls with international clients, investors or teams on the move, where a reliable phone line matters more than video.",
    ],
    features: [
      { title: "Dial-in numbers", text: "Local or toll-free access numbers in multiple countries." },
      { title: "Moderator controls", text: "Mute, lock and manage participants." },
      { title: "Recording", text: "Record calls for minutes and compliance." },
      { title: "Reliable audio", text: "Works even on weak mobile data." },
    ],
    goodFor: ["Investor and board calls", "Global client calls", "Sales and leadership teams", "Companies with travelling staff"],
    faqs: [
      {
        question: "Which countries have dial-in numbers?",
        answer: "Coverage varies; we'll share the list of available countries for your needs.",
      },
      {
        question: "Can participants join from mobile phones?",
        answer: "Yes, from any phone that can dial the access number.",
      },
    ],
  },

  // ---------------- Cloud infrastructure ----------------
  {
    slug: "microsoft-azure",
    name: "Microsoft Azure",
    parent: CL,
    group: "Cloud Infrastructure",
    headline: "Run servers, databases and applications on Microsoft's cloud, with local support",
    summary:
      "Microsoft Azure for Indian businesses: virtual servers, databases, backup and networking in Azure India regions, set up and supported locally.",
    intro: [
      "Azure lets you run servers, databases and applications in Microsoft's data centres, including regions in India, instead of buying and maintaining hardware in your office.",
      "We help you design the setup, connect it securely to your offices, keep costs under control and support it day to day.",
    ],
    features: [
      { title: "Virtual servers", text: "Windows and Linux servers sized to your workload." },
      { title: "Indian regions", text: "Keep data in India where required." },
      { title: "Secure connection", text: "Link Azure to your offices by VPN or private connection." },
      { title: "Cost control", text: "Right-sizing and reservations to avoid waste." },
    ],
    goodFor: ["Companies replacing ageing servers", "Microsoft-based businesses", "Growing apps needing scale", "Disaster recovery sites"],
    faqs: [
      {
        question: "Can our data stay in India?",
        answer: "Yes. Azure has Indian regions, and we design the setup to keep data there if required.",
      },
      {
        question: "How do we avoid unexpected Azure bills?",
        answer: "With proper sizing, budgets, alerts and regular reviews, which we include in our managed service.",
      },
    ],
  },
  {
    slug: "azure-virtual-desktop",
    name: "Azure Virtual Desktop",
    parent: CL,
    group: "Cloud Infrastructure",
    headline: "Secure Windows desktops in the cloud, available from any device",
    summary:
      "Azure Virtual Desktop in India: cloud-hosted Windows desktops and apps for remote, branch and contract staff, with data kept off local devices.",
    intro: [
      "Azure Virtual Desktop gives users a full Windows desktop running in the cloud. They connect from a laptop, thin client or even a tablet, and company data stays in Azure rather than on their device.",
      "It's useful for remote and contract staff, call centres and branches, where IT wants control and security without shipping and maintaining many PCs.",
    ],
    features: [
      { title: "Desktop from anywhere", text: "The same Windows desktop at office, home or branch." },
      { title: "Data stays central", text: "Less risk if a device is lost or stolen." },
      { title: "Quick onboarding", text: "New users get a desktop in minutes." },
      { title: "Scales up and down", text: "Pay for capacity as you need it." },
    ],
    goodFor: ["Remote and hybrid teams", "BPOs and contact centres", "Contractors and temporary staff", "Branches with low-end devices"],
    faqs: [
      {
        question: "What internet speed do users need?",
        answer: "A stable broadband connection is usually enough for office work. We size for your applications.",
      },
      {
        question: "Can we run our existing Windows apps?",
        answer: "Most standard Windows applications run on Azure Virtual Desktop. We test critical apps first.",
      },
    ],
  },
  {
    slug: "azure-ai-services",
    name: "Azure Cognitive AI",
    parent: CL,
    group: "Cloud Infrastructure",
    headline: "Add speech, language, vision and document reading to your business apps",
    summary:
      "Azure AI services for Indian businesses: speech-to-text, translation, document data extraction and chatbots built into your applications.",
    intro: [
      "Azure AI services (formerly Cognitive Services) provide ready-made AI for common tasks: turning speech into text, translating languages, reading data from scanned documents and powering chatbots.",
      "We help you pick the right services, build them into your apps or workflows, and keep the data within your Azure environment.",
    ],
    features: [
      { title: "Speech", text: "Transcribe calls and meetings, or generate spoken responses." },
      { title: "Language and translation", text: "Understand and translate text, including Indian languages where supported." },
      { title: "Document reading", text: "Extract data from invoices, forms and IDs." },
      { title: "Chatbots", text: "Answer common questions on your website or app." },
    ],
    goodFor: ["Contact centres", "Finance teams processing documents", "Customer-facing apps", "Businesses automating manual data entry"],
    faqs: [
      {
        question: "Do we need data scientists?",
        answer: "No. These are pre-built services; we integrate them into your applications and processes.",
      },
      {
        question: "Where is our data processed?",
        answer: "In the Azure region you choose, and we design with your data policies in mind.",
      },
    ],
  },
  {
    slug: "cloud-migration-services",
    name: "Cloud Migration Services",
    parent: CL,
    group: "Cloud Infrastructure",
    headline: "Move your servers and applications to the cloud without breaking anything",
    summary:
      "Cloud migration services in India: assessment, planning and step-by-step migration of servers, databases and apps to Azure, AWS or Indian clouds.",
    intro: [
      "Moving to the cloud is more than copying servers. Applications, licences, network connections and data all need to be checked so nothing stops working on the day you switch.",
      "We assess what you have, decide what should move and how, migrate in stages and test each step, with a way back if something goes wrong.",
    ],
    features: [
      { title: "Assessment", text: "Inventory of servers, apps and dependencies." },
      { title: "Migration plan", text: "What moves, in what order, and when." },
      { title: "Staged moves", text: "Migrate in phases with testing at each step." },
      { title: "Rollback plan", text: "A clear way back if problems appear." },
    ],
    goodFor: ["Companies with ageing on-site servers", "Data centre exits", "Businesses consolidating IT", "Firms moving ERP to the cloud"],
    faqs: [
      {
        question: "How long does a migration take?",
        answer: "It depends on the number of systems and their complexity. After the assessment we give you a timeline.",
      },
      {
        question: "Will there be downtime?",
        answer: "We plan moves to keep downtime short and schedule them outside working hours where possible.",
      },
    ],
  },
  {
    slug: "managed-cloud-services",
    name: "Managed Cloud Services",
    parent: CL,
    group: "Cloud Infrastructure",
    headline: "We look after your cloud: monitoring, backups, patching and costs",
    summary:
      "Managed cloud services in India: day-to-day management of your Azure, AWS or private cloud, including monitoring, backups, security patching and cost reviews.",
    intro: [
      "After moving to the cloud, someone still needs to watch the servers, apply updates, check backups and keep an eye on the bill. Many companies don't have the people for this.",
      "With managed cloud services, our team handles these routine tasks and responds when something goes wrong, so your staff can focus on the business.",
    ],
    features: [
      { title: "Monitoring", text: "Servers and services watched with alerts on problems." },
      { title: "Backups", text: "Scheduled backups and regular restore tests." },
      { title: "Patching", text: "Security updates applied on a planned schedule." },
      { title: "Monthly cost review", text: "Find and remove waste." },
    ],
    goodFor: ["Companies without a cloud team", "SMEs on Azure or AWS", "Businesses with compliance needs", "Firms wanting predictable support"],
    faqs: [
      {
        question: "Which clouds do you manage?",
        answer: "Microsoft Azure, AWS and Indian cloud providers. Tell us your setup and we'll confirm.",
      },
      {
        question: "Do we keep access to our cloud account?",
        answer: "Yes. The account stays yours; we work within it under agreed permissions.",
      },
    ],
  },
  {
    slug: "cloudmon-performance",
    name: "CloudMon Performance",
    parent: CL,
    group: "Cloud Infrastructure",
    headline: "See how your cloud apps are performing from each of your offices",
    summary:
      "Cloud application performance monitoring: track availability and response times of your SaaS and cloud apps from every office location.",
    intro: [
      "When users say 'the system is slow', it's hard to tell whether the problem is the application, the cloud provider or your own network. Performance monitoring shows where the delay actually is.",
      "We track availability and response times of your key cloud and SaaS applications from your office locations and alert you when they degrade.",
    ],
    features: [
      { title: "App availability", text: "Know when key applications go down." },
      { title: "Response times", text: "Track speed from each office location." },
      { title: "Fault isolation", text: "See if the issue is the app, the cloud or the network." },
      { title: "Reports", text: "Trends to support upgrades and vendor discussions." },
    ],
    goodFor: ["Businesses relying on SaaS apps", "Multi-branch companies", "IT teams handling 'it's slow' complaints", "Firms with cloud ERP"],
    faqs: [
      {
        question: "Which applications can be monitored?",
        answer: "Most web-based and cloud applications, such as Microsoft 365, ERP and CRM systems.",
      },
      {
        question: "Does it need software on every PC?",
        answer: "Not usually. Monitoring can run from small probes or devices at key locations.",
      },
    ],
  },
  {
    slug: "adapt-smart-cloud",
    name: "Adapt Smart Cloud",
    parent: CL,
    group: "Cloud Infrastructure",
    headline: "Cloud servers, connectivity and backup from one partner, managed end to end",
    summary:
      "Adapt Smart Cloud: cloud servers, secure connectivity to your offices and backup, delivered and managed as one service for Indian businesses.",
    intro: [
      "Many businesses want the benefits of the cloud without dealing with a cloud provider, a network provider and a backup vendor separately.",
      "Adapt Smart Cloud brings cloud servers, the connection from your offices and backup together as one managed service, with one point of contact for support.",
    ],
    features: [
      { title: "Cloud servers", text: "Sized for your applications, with room to grow." },
      { title: "Secure office connectivity", text: "Private or VPN links from each site." },
      { title: "Backup included", text: "Regular backups with restore testing." },
      { title: "One support desk", text: "No passing problems between vendors." },
    ],
    goodFor: ["SMEs moving off on-site servers", "Businesses without IT staff", "Multi-branch companies", "Firms wanting one bill for cloud and network"],
    faqs: [
      {
        question: "Where are the servers hosted?",
        answer: "We'll confirm hosting options and locations based on your requirements, including keeping data in India.",
      },
      {
        question: "Can we start small?",
        answer: "Yes. Start with a few servers and add capacity as you need it.",
      },
    ],
  },
];
