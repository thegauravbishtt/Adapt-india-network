import type { SubService } from "./types";

const S = "cybersecurity-solutions";
const M = "managed-services";

export const securityManaged: SubService[] = [
  // ---------------- Cybersecurity ----------------
  {
    slug: "next-gen-firewall",
    name: "Next-Gen Firewall (NGFW)",
    parent: S,
    group: "Network Security",
    headline: "A firewall that understands applications and users, not just ports",
    summary:
      "Next-generation firewall (NGFW) for offices and branches in India: application control, intrusion prevention and web filtering, supplied and managed.",
    intro: [
      "Older firewalls only open or close ports. A next-generation firewall can see which applications and users are generating traffic, block known attacks and filter risky websites.",
      "We size the firewall for each site, configure sensible rules, keep it updated and can manage it for you so it doesn't become a forgotten box in the rack.",
    ],
    features: [
      { title: "Application control", text: "Allow, limit or block apps rather than just ports." },
      { title: "Intrusion prevention", text: "Stops known exploit attempts." },
      { title: "Web filtering", text: "Block malicious and unwanted site categories." },
      { title: "VPN", text: "Secure connections for remote staff and branches." },
    ],
    goodFor: ["Head offices and data rooms", "Branches handling payments", "Companies with remote staff", "Firms replacing old firewalls"],
    faqs: [
      {
        question: "Which brands do you supply?",
        answer: "We work with leading firewall vendors and recommend one based on your size, budget and existing setup.",
      },
      {
        question: "Can you manage our existing firewall?",
        answer: "Often, yes, if the model is still supported by the vendor.",
      },
    ],
  },
  {
    slug: "web-application-firewall",
    name: "Web Application Firewall (WAF)",
    parent: S,
    group: "Application Security",
    headline: "Protect your website, portal and APIs from common web attacks",
    summary:
      "Web Application Firewall (WAF) for Indian businesses: protect websites, customer portals and APIs from SQL injection, bots and other web attacks.",
    intro: [
      "Websites, customer portals and APIs are constantly probed for weaknesses. A web application firewall sits in front of them and blocks common attacks such as SQL injection, cross-site scripting and malicious bots.",
      "It adds protection even while your developers fix underlying issues, and it can be deployed in the cloud without changing your hosting.",
    ],
    features: [
      { title: "Blocks common attacks", text: "Protection against the most frequent web exploits." },
      { title: "Bot management", text: "Stop scrapers and credential-stuffing bots." },
      { title: "Rate limiting", text: "Prevent abuse of login and API endpoints." },
      { title: "Attack logs", text: "See what's being blocked and why." },
    ],
    goodFor: ["E-commerce websites", "Banking and fintech portals", "Public APIs", "Government and education portals"],
    faqs: [
      {
        question: "Will a WAF slow our website down?",
        answer: "A well-configured WAF adds very little delay; cloud WAFs can even speed delivery with caching.",
      },
      {
        question: "Do we need to change our hosting?",
        answer: "No. Cloud WAFs usually work by changing DNS to route traffic through the protection layer.",
      },
    ],
  },
  {
    slug: "zero-trust-network-access",
    name: "Zero Trust Network Access (ZTNA)",
    parent: S,
    group: "Access Security",
    headline: "Give remote staff access to specific apps, not your whole network",
    summary:
      "Zero Trust Network Access (ZTNA) for Indian businesses: secure remote access to specific applications with identity checks, replacing open VPNs.",
    intro: [
      "A traditional VPN puts remote users onto your network, where they can often reach far more than they need. Zero trust access works differently: each user gets access only to the specific applications they're approved for, after their identity and device are checked.",
      "It reduces the damage a stolen password can do and is easier to manage for hybrid teams and contractors.",
    ],
    features: [
      { title: "App-level access", text: "Users reach only the apps they need." },
      { title: "Identity checks", text: "Multi-factor sign-in and device checks every time." },
      { title: "No open VPN ports", text: "Applications aren't exposed to the internet." },
      { title: "Easy contractor access", text: "Grant and remove access quickly." },
    ],
    goodFor: ["Hybrid and remote teams", "Companies using contractors", "Firms replacing old VPNs", "Businesses with sensitive data"],
    faqs: [
      {
        question: "Does ZTNA replace our VPN?",
        answer: "For most remote access to business apps, yes. Some specialised uses may still need a VPN.",
      },
      {
        question: "Does it work with Microsoft or Google sign-in?",
        answer: "Yes. ZTNA usually connects to your existing identity provider.",
      },
    ],
  },
  {
    slug: "endpoint-detection-response",
    name: "Endpoint Detection & Response (EDR)",
    parent: S,
    group: "Endpoint Security",
    headline: "Spot and stop attacks on laptops and servers, not just known viruses",
    summary:
      "Endpoint Detection and Response (EDR) for businesses in India: detect suspicious activity on laptops and servers, isolate threats and investigate incidents.",
    intro: [
      "Traditional antivirus looks for known malware. EDR watches what's happening on each laptop and server, such as unusual processes or file encryption, and can stop an attack in progress, including ones never seen before.",
      "When something is detected, an infected device can be isolated from the network with one click while the issue is investigated.",
    ],
    features: [
      { title: "Behaviour detection", text: "Catches suspicious activity, not just known files." },
      { title: "Device isolation", text: "Cut an infected device off from the network instantly." },
      { title: "Investigation tools", text: "See how an attack started and what it touched." },
      { title: "Ransomware protection", text: "Detects and stops mass file encryption." },
    ],
    goodFor: ["Companies worried about ransomware", "Firms with remote laptops", "Regulated businesses", "IT teams needing visibility"],
    faqs: [
      {
        question: "Does EDR replace antivirus?",
        answer: "Most EDR products include antivirus features, so they usually replace it.",
      },
      {
        question: "Who responds to alerts?",
        answer: "Your IT team, or our managed monitoring service if you prefer us to watch alerts.",
      },
    ],
  },
  {
    slug: "cloud-email-security",
    name: "Cloud Email Security",
    parent: S,
    group: "Email Security",
    headline: "Stop phishing and fake invoices before they reach your inbox",
    summary:
      "Cloud email security for Microsoft 365 and Google Workspace: block phishing, malware, spoofing and fake invoice scams before they reach users.",
    intro: [
      "Most attacks start with an email: a fake invoice, a 'reset your password' link or a message pretending to be the CEO. Built-in filters catch a lot, but not everything.",
      "Cloud email security adds another layer in front of Microsoft 365 or Google Workspace, checking links and attachments and flagging impersonation attempts.",
    ],
    features: [
      { title: "Phishing protection", text: "Detects fake login pages and suspicious links." },
      { title: "Attachment scanning", text: "Opens risky files in a safe sandbox first." },
      { title: "Impersonation alerts", text: "Flags emails pretending to be your executives or vendors." },
      { title: "Domain protection", text: "SPF, DKIM and DMARC set up to stop spoofing of your domain." },
    ],
    goodFor: ["Finance and accounts teams", "Companies paying vendors by bank transfer", "Microsoft 365 and Google Workspace users", "Any business receiving invoices by email"],
    faqs: [
      {
        question: "Does it work with Microsoft 365 and Google Workspace?",
        answer: "Yes. It's designed to sit in front of or alongside both.",
      },
      {
        question: "Will genuine emails be blocked?",
        answer: "Settings are tuned to minimise false positives, and quarantined emails can be released easily.",
      },
    ],
  },
  {
    slug: "data-loss-prevention",
    name: "Data Loss Prevention (DLP)",
    parent: S,
    group: "Data Security",
    headline: "Stop sensitive data leaving the company by email, upload or USB",
    summary:
      "Data Loss Prevention (DLP) for Indian businesses: detect and block sensitive data such as customer records and financials leaving via email, cloud or USB.",
    intro: [
      "Customer lists, financial files and personal data can leave a company by mistake or on purpose, through email, cloud uploads or USB drives.",
      "DLP tools recognise sensitive information, such as Aadhaar or PAN numbers, card details or confidential documents, and warn, block or log when it's being sent out. It also helps with obligations under India's data protection law.",
    ],
    features: [
      { title: "Sensitive data detection", text: "Recognises IDs, financial data and labelled documents." },
      { title: "Email and upload control", text: "Warn or block when data is sent outside." },
      { title: "USB and device control", text: "Limit copying to removable drives." },
      { title: "Audit logs", text: "Records for investigations and compliance." },
    ],
    goodFor: ["Banks, NBFCs and insurers", "Healthcare providers", "Companies handling customer personal data", "Businesses with valuable IP"],
    faqs: [
      {
        question: "Will DLP stop people working normally?",
        answer: "Policies usually start in 'monitor' mode, then move to warnings and blocks once tuned to avoid disruption.",
      },
      {
        question: "Does it help with the DPDP Act?",
        answer: "It can support your data protection obligations as part of a wider compliance programme.",
      },
    ],
  },
  {
    slug: "dns-security-filtering",
    name: "DNS Security & Filtering",
    parent: S,
    group: "Network Security",
    headline: "Block malicious and unwanted websites for every device on your network",
    summary:
      "DNS security and filtering for businesses: block phishing, malware and unwanted websites at the DNS level for all office and remote devices.",
    intro: [
      "Before any device visits a website, it looks up the address through DNS. DNS filtering checks each lookup and blocks known phishing, malware and unwanted categories of sites, often before a connection is even made.",
      "It's lightweight, covers every device on the network including phones and IoT, and can protect laptops when they're off-site too.",
    ],
    features: [
      { title: "Threat blocking", text: "Stops access to known phishing and malware domains." },
      { title: "Content categories", text: "Block categories you don't want on company networks." },
      { title: "Covers all devices", text: "Works for laptops, phones, printers and IoT." },
      { title: "Simple reports", text: "See which threats were blocked." },
    ],
    goodFor: ["Offices with guest Wi-Fi", "Schools and colleges", "Small businesses without a firewall team", "Companies with many branches"],
    faqs: [
      {
        question: "Is DNS filtering enough on its own?",
        answer: "It's a strong, simple first layer. Most businesses combine it with a firewall and email security.",
      },
      {
        question: "Does it slow down browsing?",
        answer: "No noticeable difference for users in most cases.",
      },
    ],
  },

  // ---------------- Managed services ----------------
  {
    slug: "network-monitoring-24x7",
    name: "24/7/365 L3 Network Monitoring",
    parent: M,
    group: "Proactive Monitoring",
    headline: "Experienced engineers watching your network around the clock",
    summary:
      "24/7 network monitoring for Indian businesses: L3 engineers watch your links, routers and firewalls day and night, and act on problems quickly.",
    intro: [
      "Network problems don't keep office hours. Round-the-clock monitoring means someone notices a down link, a failing router or a slowdown at 2 a.m., not when staff arrive in the morning.",
      "Alerts go to experienced (L3) engineers who can diagnose routing and configuration issues, not just log a ticket.",
    ],
    features: [
      { title: "Always watching", text: "Links and devices monitored every minute of the year." },
      { title: "Skilled engineers", text: "L3 staff who can fix, not just forward." },
      { title: "Clear escalation", text: "You know who is handling what, and when you'll hear back." },
      { title: "Incident reports", text: "What happened, why, and how it was fixed." },
    ],
    goodFor: ["Businesses running nights or weekends", "Multi-site companies", "E-commerce and online services", "Small IT teams"],
    faqs: [
      {
        question: "What does L3 mean?",
        answer: "Level 3 support: senior engineers who handle complex network issues, rather than first-line ticket logging.",
      },
      {
        question: "Can you monitor equipment from other vendors?",
        answer: "Yes. We monitor multi-vendor networks.",
      },
    ],
  },
  {
    slug: "proactive-fault-detection",
    name: "Proactive Fault Detection",
    parent: M,
    group: "Proactive Monitoring",
    headline: "Catch failing links and devices before they cause an outage",
    summary:
      "Proactive network fault detection: spot rising errors, packet loss and failing hardware early, so problems are fixed before users are affected.",
    intro: [
      "Many outages give warning signs first: rising errors on a fibre, increasing packet loss, a router running hot or a disk filling up.",
      "Proactive fault detection tracks these early signals and raises them before they turn into downtime, so repairs can be scheduled instead of rushed.",
    ],
    features: [
      { title: "Early warnings", text: "Alerts on trends, not just failures." },
      { title: "Link health checks", text: "Packet loss, latency and error rates tracked continuously." },
      { title: "Hardware health", text: "Temperature, power and resource usage monitored." },
      { title: "Planned fixes", text: "Repairs scheduled at a convenient time." },
    ],
    goodFor: ["Sites where downtime is costly", "Plants and warehouses", "Banks and branch networks", "Data rooms"],
    faqs: [
      {
        question: "How is this different from normal monitoring?",
        answer: "Normal monitoring tells you when something is down. Proactive detection tells you when something is likely to go down.",
      },
      {
        question: "Do we get notified too?",
        answer: "Yes. You choose who receives alerts and reports.",
      },
    ],
  },
  {
    slug: "bgp-routing-optimization",
    name: "BGP Routing Optimization",
    parent: M,
    group: "Proactive Monitoring",
    headline: "Better routing for businesses with multiple internet providers",
    summary:
      "BGP routing optimisation for enterprises in India: design and tune BGP across multiple ISPs for faster failover, balanced traffic and better performance.",
    intro: [
      "Companies with their own IP addresses and more than one internet provider use BGP to decide how traffic enters and leaves their network. Poorly tuned BGP can mean slow failover or one link overloaded while another sits idle.",
      "We review and tune your BGP setup so traffic is balanced sensibly and failover between providers happens quickly.",
    ],
    features: [
      { title: "Multi-ISP design", text: "Use two or more providers effectively." },
      { title: "Traffic balancing", text: "Spread inbound and outbound traffic across links." },
      { title: "Faster failover", text: "Tune timers so outages are routed around quickly." },
      { title: "Route monitoring", text: "Watch for routing problems and hijacks." },
    ],
    goodFor: ["Companies with their own IP ranges", "Data centres and hosting", "Large enterprises with multiple ISPs", "Online businesses needing high availability"],
    faqs: [
      {
        question: "Do we need our own IP addresses for BGP?",
        answer: "Typically yes, along with an AS number. We can guide you through obtaining them.",
      },
      {
        question: "Can you work with our existing ISPs?",
        answer: "Yes. We coordinate with your current providers.",
      },
    ],
  },
  {
    slug: "automated-failover-management",
    name: "Automated Failover Management",
    parent: M,
    group: "Proactive Monitoring",
    headline: "Make sure your backup link actually takes over when the main one fails",
    summary:
      "Automated failover management: design, configure and regularly test backup internet links so your offices switch over automatically during outages.",
    intro: [
      "Many businesses pay for a backup connection that doesn't work when it's needed, because failover was never configured properly or never tested.",
      "We set up automatic switchover on your routers, firewalls or SD-WAN, test it on a schedule, and check that the backup link is healthy even when it isn't in use.",
    ],
    features: [
      { title: "Failover design", text: "Choose the right backup type for each site." },
      { title: "Automatic switching", text: "Traffic moves without anyone touching anything." },
      { title: "Scheduled tests", text: "Regular checks that failover still works." },
      { title: "Backup link health", text: "Monitoring of standby connections too." },
    ],
    goodFor: ["Retail and banking branches", "Offices with VoIP", "Plants with 24/7 operations", "Any site with a backup link"],
    faqs: [
      {
        question: "How often should failover be tested?",
        answer: "At least quarterly, and after any network change. We schedule tests outside busy hours.",
      },
      {
        question: "Will calls drop during a switchover?",
        answer: "Basic failover may drop active calls; SD-WAN can often keep them going. We'll explain what to expect for your setup.",
      },
    ],
  },
  {
    slug: "multi-vendor-router-management",
    name: "Multi-Vendor Router Management",
    parent: M,
    group: "Device Management",
    headline: "One team to manage routers and switches from different brands",
    summary:
      "Multi-vendor router and switch management: configuration, backups, changes and troubleshooting for mixed-brand networks across your sites.",
    intro: [
      "Most networks end up with a mix of brands: one at head office, another at branches, a third supplied by a carrier. Managing them needs different skills and tools.",
      "We take over day-to-day management of routers and switches across brands: configuration backups, change requests and troubleshooting, all through one support desk.",
    ],
    features: [
      { title: "Mixed-brand support", text: "Major router and switch vendors handled by one team." },
      { title: "Config backups", text: "Regular backups so a failed device can be replaced quickly." },
      { title: "Change requests", text: "Raise a change; our engineers implement and document it." },
      { title: "Documentation", text: "Up-to-date records of how your network is set up." },
    ],
    goodFor: ["Companies with inherited networks", "Multi-site businesses", "IT teams short on network skills", "Firms after a merger"],
    faqs: [
      {
        question: "Which brands do you support?",
        answer: "Most major enterprise brands. Share your device list and we'll confirm.",
      },
      {
        question: "Do we keep admin access?",
        answer: "Yes. Access is agreed with you and all changes are logged.",
      },
    ],
  },
  {
    slug: "firmware-security-patching",
    name: "Firmware & Security Patching",
    parent: M,
    group: "Device Management",
    headline: "Keep routers, firewalls and switches up to date without breaking things",
    summary:
      "Firmware and security patching for network devices: planned, tested updates for routers, firewalls and switches to close known vulnerabilities.",
    intro: [
      "Network devices regularly receive security fixes, and attackers actively look for unpatched firewalls and routers. But careless updates can also cause outages.",
      "We track vendor advisories, plan updates, back up configurations, apply patches in agreed maintenance windows and confirm everything works afterwards.",
    ],
    features: [
      { title: "Advisory tracking", text: "We watch for security notices affecting your devices." },
      { title: "Planned windows", text: "Updates scheduled outside working hours." },
      { title: "Backup before change", text: "Configurations saved so we can roll back." },
      { title: "Post-update checks", text: "Services tested after every update." },
    ],
    goodFor: ["Businesses with internet-facing firewalls", "Regulated industries", "Companies with audit requirements", "Teams that fall behind on updates"],
    faqs: [
      {
        question: "How quickly are critical patches applied?",
        answer: "Critical security fixes are prioritised and scheduled as soon as practical, in agreement with you.",
      },
      {
        question: "What about devices the vendor no longer supports?",
        answer: "We'll flag them and recommend replacements, since they no longer receive security fixes.",
      },
    ],
  },
  {
    slug: "bandwidth-utilization-audits",
    name: "Bandwidth Utilization Audits",
    parent: M,
    group: "Device Management",
    headline: "Find out if you're paying for too much bandwidth, or too little",
    summary:
      "Bandwidth utilisation audits for Indian businesses: see how each link is used, what's consuming it and whether to upgrade, downgrade or rebalance.",
    intro: [
      "Many companies either pay for bandwidth they never use or struggle with links that are constantly full. Without data, it's guesswork.",
      "A utilisation audit measures how each link is actually used over time, what applications are consuming it, and recommends whether to upgrade, downgrade or change policies.",
    ],
    features: [
      { title: "Usage over time", text: "Peaks, averages and trends for every link." },
      { title: "Top applications", text: "See what's consuming bandwidth." },
      { title: "Cost recommendations", text: "Right-size links across your sites." },
      { title: "Policy suggestions", text: "Prioritise business traffic over non-essential use." },
    ],
    goodFor: ["Companies reviewing telecom costs", "Multi-branch networks", "Offices with frequent slowdowns", "Before contract renewals"],
    faqs: [
      {
        question: "How long does an audit take?",
        answer: "Usually a few weeks of data collection to capture normal and peak patterns, followed by a report.",
      },
      {
        question: "Do you need to install equipment?",
        answer: "Often we can use data from your existing routers or firewalls.",
      },
    ],
  },
  {
    slug: "custom-enterprise-slas",
    name: "Custom Enterprise SLAs",
    parent: M,
    group: "Device Management",
    headline: "Service commitments written around how your business actually runs",
    summary:
      "Custom enterprise SLAs: uptime, response and repair commitments tailored to your sites, hours and critical services, with clear reporting.",
    intro: [
      "A standard SLA treats every site the same. In reality, a head office, a factory running three shifts and a small branch need different levels of support.",
      "We agree service commitments per site and service (response times, repair targets, support hours and reporting) so expectations are clear on both sides.",
    ],
    features: [
      { title: "Per-site commitments", text: "Critical sites get faster response." },
      { title: "Support hours to match", text: "Business hours, extended hours or 24/7." },
      { title: "Clear escalation", text: "Named contacts and timelines." },
      { title: "Monthly reporting", text: "Performance against the agreed targets." },
    ],
    goodFor: ["Large and multi-site enterprises", "Businesses with critical operations", "Companies with formal vendor management", "Regulated industries"],
    faqs: [
      {
        question: "Can different sites have different SLAs?",
        answer: "Yes. That's the point of a custom SLA.",
      },
      {
        question: "What happens if targets are missed?",
        answer: "Remedies such as service credits are agreed in the contract.",
      },
    ],
  },
];
