/**
 * Plain-language content for each service page, shown under the hero.
 * Each service uses a different layout so pages don't all look the same.
 * Keep the wording simple and specific; avoid buzzwords and unverifiable numbers.
 */
export type GuideLayout = "split" | "cards" | "rows" | "dark";

export interface ServiceGuide {
  layout: GuideLayout;
  eyebrow: string;
  heading: string;
  plain: string[];
  goodFor: string[];
  included: Array<{ title: string; text: string }>;
  priceFactors: string[];
}

export const serviceGuides: Record<string, ServiceGuide> = {
  "smart-internet-ill": {
    layout: "split",
    eyebrow: "Internet Leased Line, explained",
    heading: "Internet that's yours alone, not shared with the building",
    plain: [
      "A leased line is a fibre internet connection reserved only for your business. If you take 100 Mbps, you get 100 Mbps for upload and download, at 11 in the morning and at 7 in the evening. Nobody else's usage slows you down.",
      "It comes with static IP addresses and a written service level agreement, so the provider is committed to how much uptime you get and how quickly faults are fixed. Most businesses move to a leased line when video calls, cloud software or CCTV uploads start struggling on broadband.",
    ],
    goodFor: [
      "Offices with 15 or more people working online",
      "Teams on video calls, VoIP or a call centre",
      "Businesses running cloud ERP, Tally on cloud or CRM",
      "Sites that upload CCTV, backups or large files",
    ],
    included: [
      { title: "Same speed both ways", text: "Upload matches download, so screen shares and uploads don't choke." },
      { title: "Static public IPs", text: "For servers, VPNs, remote CCTV access and bank or ERP whitelisting." },
      { title: "Uptime commitment", text: "A written SLA on availability and repair time from the carrier." },
      { title: "Monitoring and support", text: "Faults are tracked and chased with the carrier by our team." },
    ],
    priceFactors: [
      "Bandwidth you need (for example 20, 50, 100 Mbps or more)",
      "Whether the carrier's fibre already reaches your building",
      "Contract length",
      "Whether you add a backup link from a second carrier",
    ],
  },
  "smartflo-sd-wan": {
    layout: "cards",
    eyebrow: "SD-WAN, explained",
    heading: "One network for all your branches, managed from one screen",
    plain: [
      "SD-WAN connects your offices, stores or plants over any internet link (leased line, broadband or 4G/5G) and manages them as one private network. Traffic between sites is encrypted, and you control it from a single dashboard.",
      "The useful part is what happens when a link has trouble. SD-WAN keeps checking every connection and moves calls, billing or ERP traffic to the healthier one automatically. Staff usually don't notice anything.",
    ],
    goodFor: [
      "Businesses with 5 or more branches or outlets",
      "Retail chains, banks, NBFCs, clinics and dealer networks",
      "Companies paying a lot for MPLS at small sites",
      "Teams that open new locations often",
    ],
    included: [
      { title: "Automatic failover", text: "Traffic moves to the backup link when the main one drops or slows down." },
      { title: "Use any link", text: "Mix leased lines, broadband and 4G/5G at each site to suit the budget." },
      { title: "Central control", text: "Set rules for every branch from one place instead of site by site." },
      { title: "Quick branch setup", text: "New devices are configured from the cloud, so a branch can go live quickly." },
      { title: "Built-in security", text: "Encrypted tunnels between sites and firewall features on the device." },
      { title: "Visibility", text: "See which applications use bandwidth at each branch." },
    ],
    priceFactors: [
      "Number of sites and the device size each one needs",
      "The internet links at each site (new or existing)",
      "Security add-ons you want switched on",
      "Whether we manage it for you or you manage it yourself",
    ],
  },
  "smartoffice-connect": {
    layout: "rows",
    eyebrow: "SmartOffice Connect, explained",
    heading: "Everything a new office needs to get online, in one order",
    plain: [
      "Setting up an office usually means dealing with an internet provider, a Wi-Fi installer, a firewall vendor and a phone company separately. SmartOffice Connect puts all of it into one order, one bill and one support number.",
      "We size it to your team: the internet connection, Wi-Fi access points, a firewall and business phone lines on the cloud. When you grow or move, we change the setup rather than you starting from scratch.",
    ],
    goodFor: [
      "New offices and branch openings",
      "Startups and SMEs without an IT team",
      "Companies moving to a new building",
      "Coworking and managed office operators",
    ],
    included: [
      { title: "Internet", text: "Leased line or business broadband, with an optional backup." },
      { title: "Office Wi-Fi", text: "Access points placed for your floor plan, with separate guest Wi-Fi." },
      { title: "Firewall", text: "Protection and web filtering for every device in the office." },
      { title: "Business phones", text: "Cloud PBX extensions on desk phones, laptops or mobiles." },
    ],
    priceFactors: [
      "Number of people and the size of the office",
      "Leased line or broadband as the main connection",
      "How many Wi-Fi access points and phone extensions you need",
      "One-time setup versus a monthly bundle",
    ],
  },
  "managed-mpls": {
    layout: "dark",
    eyebrow: "MPLS, explained",
    heading: "A private network between your sites that never touches the internet",
    plain: [
      "MPLS is a private network run by a telecom carrier. Your offices, plants and data centres connect to it, and traffic between them stays on the carrier's network instead of crossing the public internet.",
      "It gives steady, predictable performance and lets you prioritise important traffic like voice and core banking. That's why banks, payment networks and companies with strict compliance rules still choose it, often alongside SD-WAN at smaller branches.",
    ],
    goodFor: [
      "Banks, NBFCs and payment networks",
      "Companies with compliance rules on data paths",
      "Data centre to data centre links",
      "Applications sensitive to delay, such as voice and core systems",
    ],
    included: [
      { title: "Private routing", text: "Your traffic is kept separate from other customers and the internet." },
      { title: "Traffic priority", text: "Voice and critical apps get priority over less urgent traffic." },
      { title: "Managed routers", text: "We configure and look after the router at each site." },
      { title: "Single carrier view", text: "One provider is responsible for the network end to end." },
    ],
    priceFactors: [
      "Number of sites and their locations",
      "Bandwidth at each site",
      "How many traffic priority classes you need",
      "Backup links or dual-carrier design for critical sites",
    ],
  },
  "business-communications": {
    layout: "split",
    eyebrow: "SIP trunk and cloud telephony, explained",
    heading: "Business calling that runs on your data network",
    plain: [
      "A SIP trunk brings phone lines into your office over your data connection instead of old copper or PRI lines. You can add more call channels when you need them without new cabling, and usually keep your existing numbers.",
      "Cloud telephony goes a step further and moves the phone system itself online. IVR menus, call queues, recording and reports are set up from a web dashboard, and staff can take calls on a desk phone, laptop or mobile app.",
    ],
    goodFor: [
      "Sales and support teams handling many calls",
      "Businesses replacing PRI lines or an old PBX",
      "Companies with staff in several offices or at home",
      "Teams that want calls linked to their CRM",
    ],
    included: [
      { title: "SIP trunks", text: "Call channels for your existing IP PBX, scaled up or down as needed." },
      { title: "Cloud PBX and IVR", text: "Menus, routing and extensions managed from a dashboard." },
      { title: "Toll-free and virtual numbers", text: "1800 numbers and local numbers for different cities." },
      { title: "WhatsApp Business messaging", text: "Customer messaging alongside your calls." },
    ],
    priceFactors: [
      "Number of simultaneous calls or user licences",
      "Call volumes and destinations",
      "Number types (toll-free, local, mobile)",
      "Features such as recording, CRM integration and analytics",
    ],
  },
  "network-as-a-service": {
    layout: "cards",
    eyebrow: "Network as a Service, explained",
    heading: "Your whole network for a monthly fee instead of a big upfront bill",
    plain: [
      "With Network as a Service, you don't buy routers, switches, Wi-Fi and firewalls yourself. We provide them, set them up and look after them, and you pay a fixed amount each month.",
      "When equipment gets old or you need more capacity, it's replaced as part of the service. It suits companies that would rather spend on their business than on hardware that loses value every year.",
    ],
    goodFor: [
      "Companies growing quickly or opening branches",
      "Businesses without a large IT team",
      "Firms that prefer operating costs to capital spend",
      "Offices with old network equipment due for replacement",
    ],
    included: [
      { title: "Equipment", text: "Routers, switches, Wi-Fi and firewalls sized for each site." },
      { title: "Setup", text: "Design, installation and configuration by our team." },
      { title: "Ongoing care", text: "Monitoring, updates and replacements during the term." },
      { title: "Connectivity", text: "Leased line or broadband included where needed." },
    ],
    priceFactors: [
      "Number of sites and users",
      "Equipment needed at each site",
      "Contract term",
      "Level of monitoring and on-site support",
    ],
  },
  "collaboration-productivity": {
    layout: "rows",
    eyebrow: "Collaboration tools, explained",
    heading: "Meetings, email and file sharing that just work",
    plain: [
      "We set up the tools your team uses every day, such as Microsoft 365, email, Teams or video meeting rooms, and make sure the office network can handle them.",
      "A lot of meeting problems are really network problems. Because we look after the connection as well, we can fix the cause instead of passing you between vendors.",
    ],
    goodFor: [
      "Offices moving email and files to the cloud",
      "Hybrid teams split between office and home",
      "Companies setting up meeting rooms",
      "Businesses wanting one partner for tools and network",
    ],
    included: [
      { title: "Licences and setup", text: "Accounts, mailboxes and permissions configured correctly." },
      { title: "Meeting rooms", text: "Video and audio equipment set up and tested." },
      { title: "Network tuning", text: "Bandwidth and Wi-Fi checked so calls stay clear." },
      { title: "Support", text: "Help for users when something stops working." },
    ],
    priceFactors: [
      "Number of users and licence type",
      "Data migration from old email or file servers",
      "Meeting room equipment",
      "Ongoing support level",
    ],
  },
  "cloud-infrastructure": {
    layout: "dark",
    eyebrow: "Cloud connectivity, explained",
    heading: "A faster, safer path from your office to the cloud",
    plain: [
      "If your business runs on AWS, Azure, Google Cloud or an Indian data centre, the quality of the link between your offices and that cloud matters as much as the cloud itself.",
      "We arrange dedicated or private connections to cloud platforms and data centres, and help set up the cloud side, so applications respond quickly and data doesn't travel further than it needs to.",
    ],
    goodFor: [
      "Businesses running ERP or core apps in the cloud",
      "Companies moving servers out of the office",
      "Teams with large backups or data transfers",
      "Firms with data-location requirements",
    ],
    included: [
      { title: "Private cloud links", text: "Dedicated paths to cloud providers and data centres." },
      { title: "Cloud setup help", text: "Networking and security on the cloud side configured properly." },
      { title: "Backup and recovery planning", text: "So you can get running again quickly after a failure." },
      { title: "Cost checks", text: "Regular review of what you're paying for and using." },
    ],
    priceFactors: [
      "Which cloud or data centre you connect to",
      "Bandwidth and number of connected sites",
      "Managed services you want on the cloud side",
      "Backup and recovery requirements",
    ],
  },
  "cybersecurity-solutions": {
    layout: "split",
    eyebrow: "Network security, explained",
    heading: "Protection for every office, not just the head office",
    plain: [
      "Most attacks start somewhere small: a branch with a basic router, a reused password or a phishing email. Network security means putting the same level of protection at every site and keeping an eye on it.",
      "We provide and manage business firewalls, secure remote access, DDoS protection on your internet links, and monitoring that alerts us when something looks wrong.",
    ],
    goodFor: [
      "Businesses with several branches or stores",
      "Companies handling payments or customer data",
      "Teams with staff working remotely",
      "Firms that need logs for audits or incident reporting",
    ],
    included: [
      { title: "Managed firewalls", text: "Business-grade firewalls at each site, with one set of rules." },
      { title: "Secure remote access", text: "VPN or zero-trust access with multi-factor sign-in." },
      { title: "DDoS protection", text: "Filtering attack traffic before it reaches your connection." },
      { title: "Monitoring", text: "Logs collected and reviewed, with alerts on unusual activity." },
    ],
    priceFactors: [
      "Number of sites and users",
      "Firewall size and features at each site",
      "Monitoring level (alerts only, or a managed SOC)",
      "Compliance and log retention needs",
    ],
  },
  "managed-services": {
    layout: "cards",
    eyebrow: "Managed network support, explained",
    heading: "Someone watching your network when your team isn't",
    plain: [
      "Our network operations team keeps watch on your links and devices around the clock. When a line drops or slows down, we raise it with the carrier and follow it until it's fixed, often before your staff notice.",
      "You get one number to call for every site, and reports showing how each connection has performed.",
    ],
    goodFor: [
      "Companies with many sites and a small IT team",
      "Businesses with links from more than one carrier",
      "Operations that run nights or weekends",
      "IT heads who want fewer vendor calls",
    ],
    included: [
      { title: "Round-the-clock monitoring", text: "Links and devices watched at all hours." },
      { title: "Carrier follow-up", text: "We raise and chase faults with the carrier for you." },
      { title: "One support desk", text: "A single contact for every site and service." },
      { title: "Performance reports", text: "Regular updates on uptime and usage per site." },
      { title: "Change requests", text: "Configuration changes handled by our engineers." },
      { title: "Escalation plan", text: "Clear contacts and timelines when things go wrong." },
    ],
    priceFactors: [
      "Number of sites and devices",
      "Support hours you need",
      "Whether on-site visits are included",
      "Number of carriers and services covered",
    ],
  },
  "bundled-solutions": {
    layout: "rows",
    eyebrow: "Bundled services, explained",
    heading: "Internet, backup, Wi-Fi and voice on one contract",
    plain: [
      "Instead of separate contracts for internet, backup, Wi-Fi, phones and security, a bundle puts them together with one bill and one renewal date.",
      "It's simpler to manage, and because everything comes from one place, there's no argument between vendors about whose fault a problem is.",
    ],
    goodFor: [
      "Businesses tired of juggling several vendors",
      "Branch and store rollouts that need a standard kit",
      "Finance teams that want one predictable bill",
      "Companies without dedicated IT staff",
    ],
    included: [
      { title: "Main internet", text: "Leased line or broadband sized for the site." },
      { title: "Backup link", text: "A second connection with automatic switchover." },
      { title: "Wi-Fi and firewall", text: "Office wireless and protection set up together." },
      { title: "Voice", text: "SIP trunk or cloud phone lines added to the same bill." },
    ],
    priceFactors: [
      "Which services you include",
      "Number of sites",
      "Bandwidth and backup type",
      "Contract term",
    ],
  },
  "point-to-point-leased-line": {
    layout: "dark",
    eyebrow: "Point-to-point leased line, explained",
    heading: "A private line straight between two of your locations",
    plain: [
      "A point-to-point leased line connects two of your sites directly, for example a factory and its head office, or an office and a data centre. It's private, isn't shared, and doesn't go over the internet.",
      "Because it's a dedicated path, speed and delay stay steady. It's often used for moving large files, linking servers, or keeping two offices working as if they were one.",
    ],
    goodFor: [
      "Linking a plant or warehouse to head office",
      "Connecting an office to a data centre",
      "Replicating servers or storage between sites",
      "Two offices that share systems heavily",
    ],
    included: [
      { title: "Dedicated bandwidth", text: "The full capacity reserved between your two sites." },
      { title: "Private path", text: "Traffic stays off the public internet." },
      { title: "Steady performance", text: "Consistent speed and delay for sensitive applications." },
      { title: "Monitoring", text: "The link is watched and faults are followed up." },
    ],
    priceFactors: [
      "Distance between the two sites",
      "Bandwidth required",
      "Fibre availability at both ends",
      "Whether you need a backup path",
    ],
  },
  "enterprise-broadband": {
    layout: "split",
    eyebrow: "Business broadband and Wi-Fi, explained",
    heading: "Fast, affordable internet for smaller sites, with Wi-Fi that covers the whole floor",
    plain: [
      "Not every site needs a leased line. For small offices, shops, clinics and warehouses, business broadband gives good speed at a lower price, and it also works well as a backup to a leased line.",
      "We pair it with properly planned Wi-Fi, so the signal reaches every corner and doesn't slow down when everyone connects at once.",
    ],
    goodFor: [
      "Small offices and retail outlets",
      "Backup connection for a leased line",
      "Warehouses that need Wi-Fi across a large floor",
      "Clinics, showrooms and branch offices",
    ],
    included: [
      { title: "Business broadband", text: "Fibre broadband plans for business use." },
      { title: "Wi-Fi planning", text: "Access points placed for coverage and the number of users." },
      { title: "Guest network", text: "Separate Wi-Fi for visitors, kept apart from staff devices." },
      { title: "Central management", text: "Wi-Fi across sites managed from one dashboard." },
    ],
    priceFactors: [
      "Plan speed and data usage",
      "Number of Wi-Fi access points",
      "Number of sites",
      "Whether it's a main link or a backup",
    ],
  },
};
