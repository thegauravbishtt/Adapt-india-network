import type { SubServiceExtra } from "../types";

export const networkCloudExtras: Record<string, SubServiceExtra> = {
  // ---------------- Network ----------------
  "ill-burstable-bandwidth": {
    outcome:
      "You stop paying all year for a peak you only hit a few days a month, and busy days no longer slow the office down. Finance gets a lower fixed cost; IT gets headroom without a new order every time usage spikes.",
    prep: ["Your current usage pattern, or a month of router graphs", "Expected peaks: sale days, month-end, large transfers", "Installation address"],
    faqs: [
      { question: "What happens if we hit the burst ceiling?", answer: "Traffic is limited at the ceiling. If you reach it often, it's a sign to raise the base or the ceiling." },
      { question: "Is burstable more expensive per Mbps?", answer: "Burst usage is often priced higher than the base rate, which is why the base should cover your normal needs." },
    ],
  },
  "sd-wan-ready-ill": {
    outcome:
      "Branch go-lives stop getting stuck on installation day because the link and the SD-WAN device don't match. Every site follows the same standard, which makes rollouts faster and troubleshooting simpler.",
    prep: ["Your SD-WAN design or vendor", "Site list with addresses", "Preferred handoff and IP details per site"],
    faqs: [
      { question: "Do we need a separate router with the leased line?", answer: "The SD-WAN device usually takes over routing at the site. We confirm the handoff so you don't pay for equipment you won't use." },
      { question: "Can each site get a backup link too?", answer: "Yes. Broadband or 4G/5G backups are commonly added at each site." },
    ],
  },
  "secured-leased-line": {
    outcome:
      "Many attacks are filtered before they ever reach your office, which reduces load on your firewall and the risk of downtime. Smaller IT teams get a safer connection without having to run several security tools themselves.",
    prep: ["Bandwidth requirement and site address", "Services you expose to the internet (VPN, servers, portals)", "Your current firewall setup"],
    faqs: [
      { question: "Does a secured leased line slow down the connection?", answer: "Network-level filtering is designed to have little effect on normal traffic speed." },
      { question: "Will we see what has been blocked?", answer: "Reports on blocked threats and attacks can be shared, depending on the service level." },
    ],
  },
  "standard-carrier-ill": {
    outcome:
      "You get dependable dedicated internet at a sensible price, with nothing you don't need. Your IT team stays in full control of firewall, routing and security choices.",
    prep: ["Site address and floor", "Bandwidth you need", "Number of static IPs required"],
    faqs: [
      { question: "How many static IPs come with a leased line?", answer: "A small block is usually included; larger blocks can be requested with justification." },
      { question: "Can we upgrade bandwidth later?", answer: "Yes. Upgrades on the same circuit are usually straightforward." },
    ],
  },
  "smart-ddos-protection": {
    outcome:
      "An attack no longer means your website, payment gateway or VPN goes dark. Clean traffic keeps flowing while attack traffic is filtered, and you get a report afterwards showing what happened.",
    prep: ["The IP ranges and services to protect", "Normal traffic levels for each", "Contacts for attack alerts"],
    faqs: [
      { question: "How quickly is an attack detected?", answer: "Detection is automatic and typically fast. Mitigation timing depends on the service mode you choose." },
      { question: "Can it protect a website hosted in the cloud?", answer: "Cloud-hosted sites are usually protected by cloud DDoS or WAF services. Leased-line DDoS protection covers your own IP ranges." },
    ],
  },
  "sd-wan-iflx-edge-gateway": {
    outcome:
      "Branches stay online when one link fails, and you can roll out new sites without sending engineers to each one. IT sees every branch's health from one screen.",
    prep: ["Number of users and bandwidth at each branch", "Links available at each site", "Applications that need priority"],
    faqs: [
      { question: "Does the gateway include Wi-Fi?", answer: "Some models include Wi-Fi; otherwise separate access points are used. We size this per site." },
      { question: "Is the device purchased or rented?", answer: "Both options are possible. Many companies prefer a monthly service model." },
    ],
  },
  "ez-cloud-connect": {
    outcome:
      "Cloud ERP and databases respond consistently, large backups finish on time, and sensitive traffic stays off the public internet.",
    prep: ["Your cloud provider, region and account details", "Bandwidth required", "Sites or data centres that need access"],
    faqs: [
      { question: "Do we still need internet access to the cloud?", answer: "Usually yes, for public services and management. The private link carries your critical business traffic." },
      { question: "Is a backup connection recommended?", answer: "For critical workloads, yes: a second private link or a VPN over the internet as a fallback." },
    ],
  },
  "ultra-low-latency": {
    outcome:
      "Orders, market data or real-time feeds reach the other end faster and with less variation, which can matter more than raw bandwidth for time-sensitive systems.",
    prep: ["The two locations to connect", "Latency targets you're working to", "Bandwidth and resilience requirements"],
    faqs: [
      { question: "Is ultra low latency the same as higher bandwidth?", answer: "No. Bandwidth is how much data fits; latency is how fast it arrives. These links are optimised for delay." },
      { question: "Can latency be guaranteed?", answer: "Latency commitments depend on the route. We'll share what can be committed for your path." },
    ],
  },
  "retail-branch-broadband": {
    outcome:
      "Stores keep billing and taking payments, head office sees which outlets have connection issues, and new stores get connected through the same process every time.",
    prep: ["List of store addresses", "Systems each store runs (POS, UPI, CCTV)", "Opening dates for new stores"],
    faqs: [
      { question: "Can store staff manage the connection?", answer: "They don't need to. Monitoring and support are handled centrally, and staff only call one number if needed." },
      { question: "Can CCTV be viewed remotely over store broadband?", answer: "Yes, with enough upload speed. We size each store's plan with this in mind." },
    ],
  },
  "managed-campus-wifi": {
    outcome:
      "People stay connected as they move between floors and buildings, and IT stops firefighting dead zones. You get a clear view of how the Wi-Fi is used across the campus.",
    prep: ["Floor plans or a site walk-through", "Expected number of users and devices per area", "Security requirements for each user group"],
    faqs: [
      { question: "Can students or guests log in with an OTP?", answer: "Yes. Guest and student networks can use OTP, voucher or credential-based login." },
      { question: "Do you handle cabling too?", answer: "Yes. Structured cabling to access points can be included in the project." },
    ],
  },
  "high-density-public-wifi": {
    outcome:
      "Visitors get usable Wi-Fi even at your busiest times, your brand appears on the login page, and your internal systems stay safely separate from the public network.",
    prep: ["Venue layout and peak crowd sizes", "Login method you prefer (OTP, voucher, social)", "Any data you want to collect from users, with consent"],
    faqs: [
      { question: "Can the login page carry our branding?", answer: "Yes. The captive portal can show your logo, terms and promotions." },
      { question: "Is usage logging required for public Wi-Fi?", answer: "Public Wi-Fi operators in India have record-keeping obligations. The login system helps meet them." },
    ],
  },

  // ---------------- Collaboration ----------------
  "microsoft-365-enterprise": {
    outcome:
      "Everyone works from the same email, calendar and files, and IT can enforce sign-in security and device rules from one place. Licence costs match what each person actually uses.",
    prep: ["Number of users and their roles", "Your current email provider and domain access", "Files and mailboxes to migrate"],
    faqs: [
      { question: "Do you provide Microsoft licences directly?", answer: "Yes. We can supply licences and manage renewals, or work with licences you already have." },
      { question: "Can you help with OneDrive and SharePoint setup?", answer: "Yes. We organise team sites and permissions so files are easy to find and properly shared." },
    ],
  },
  "microsoft-copilot": {
    outcome:
      "People spend less time writing first drafts, summarising long email threads and catching up on missed meetings. Because permissions are cleaned up first, Copilot only surfaces what each person is meant to see.",
    prep: ["Your Microsoft 365 licence types", "The teams you'd like to start with", "Any sensitive SharePoint sites or files we should review first"],
    faqs: [
      { question: "Does Copilot work in Indian languages?", answer: "Microsoft supports a growing list of languages. We'll check current support for the ones you need." },
      { question: "How do we measure whether it's worth it?", answer: "Start with a pilot group, set simple goals like time saved on reports, and review usage reports before expanding." },
    ],
  },
  "google-workspace": {
    outcome:
      "Your team collaborates in shared documents instead of emailing attachments back and forth, and company files stay with the company when people leave.",
    prep: ["Your domain and DNS access", "Number of users", "Email and files to migrate"],
    faqs: [
      { question: "Can we keep our website on the same domain?", answer: "Yes. Only the email records change; your website stays where it is." },
      { question: "Do you provide training?", answer: "Yes. Short sessions help users get comfortable with Gmail, Drive and Meet." },
    ],
  },
  "zoom-rooms": {
    outcome:
      "Meetings start on time instead of ten minutes late, remote participants can see and hear everyone in the room, and staff stop carrying laptops and dongles to every meeting.",
    prep: ["Room sizes and photos", "Your calendar system (Microsoft 365 or Google)", "Number of rooms to equip"],
    faqs: [
      { question: "Which camera do we need for a small room?", answer: "Small rooms usually work well with an all-in-one video bar. Larger rooms may need separate cameras and microphones." },
      { question: "Can we use existing TVs?", answer: "Often yes, if they have suitable inputs and size for the room." },
    ],
  },
  "international-bridging-service": {
    outcome:
      "Important calls start on time with everyone connected, even participants on patchy mobile data or in another country. Recordings make it easy to share minutes afterwards.",
    prep: ["Countries your participants dial from", "Typical number of participants", "Whether you need recording"],
    faqs: [
      { question: "Can we schedule recurring conferences?", answer: "Yes. Recurring bridges can be set up with the same dial-in details." },
      { question: "Is there a limit on participants?", answer: "Limits depend on the plan. Tell us your largest call and we'll size it." },
    ],
  },

  // ---------------- Cloud ----------------
  "microsoft-azure": {
    outcome:
      "You stop buying servers every few years and can scale up for busy periods and down afterwards. Backups, recovery and security tools are built in rather than bolted on.",
    prep: ["List of servers and applications", "Data residency or compliance requirements", "Current backup and recovery arrangements"],
    faqs: [
      { question: "Can we run Tally or other on-premise software on Azure?", answer: "Many Windows applications run on Azure virtual machines. We test your specific software before moving it." },
      { question: "Do you help with Azure billing?", answer: "Yes. We can provide Azure through our partnership and help you understand and control the bill." },
    ],
  },
  "azure-virtual-desktop": {
    outcome:
      "New joiners get a working desktop in minutes, lost laptops don't mean lost data, and branches can use low-cost devices because the heavy work happens in the cloud.",
    prep: ["Number of users and the apps they use", "Where users work from", "Your Microsoft licences"],
    faqs: [
      { question: "Can users print from a virtual desktop?", answer: "Yes. Local and network printing can be configured." },
      { question: "Is it suitable for call centre agents?", answer: "Yes, with the right setup for headsets and softphones." },
    ],
  },
  "azure-ai-services": {
    outcome:
      "Manual tasks like typing data from invoices, transcribing calls or answering the same questions repeatedly can be automated, so staff spend time on work that needs judgement.",
    prep: ["The task you want to automate", "Sample documents, recordings or questions", "Where the results should go (ERP, CRM, spreadsheet)"],
    faqs: [
      { question: "How accurate is document data extraction?", answer: "Accuracy depends on document quality and layout. We test with your real samples before rollout." },
      { question: "Can we start with a small pilot?", answer: "Yes. A focused pilot on one task is the best way to prove value." },
    ],
  },
  "cloud-migration-services": {
    outcome:
      "Your systems move to the cloud with a plan, tests and a fallback, not a weekend of crossed fingers. Old hardware can be retired, and you have a clear picture of what runs where.",
    prep: ["Server and application inventory", "Business-critical systems and acceptable downtime", "Target cloud, if already chosen"],
    faqs: [
      { question: "Should everything move to the cloud?", answer: "Not always. Some systems are better retired, replaced with SaaS, or kept on-premise. The assessment decides." },
      { question: "Do you migrate databases?", answer: "Yes. Databases are migrated with data validation to confirm nothing is lost." },
    ],
  },
  "managed-cloud-services": {
    outcome:
      "Someone is responsible for your cloud every day: patches are applied, backups are tested and the bill is reviewed. Problems are spotted and fixed before they become outages.",
    prep: ["Cloud account access under agreed permissions", "List of critical services", "Support hours you need"],
    faqs: [
      { question: "Do you provide 24/7 cloud support?", answer: "Yes, depending on the plan. Support hours are agreed in the contract." },
      { question: "Can you take over an environment someone else built?", answer: "Yes. We start with a review and fix any urgent issues before taking over day-to-day management." },
    ],
  },
  "cloudmon-performance": {
    outcome:
      "When someone says 'the system is slow', you can see straight away whether it's the application, the cloud provider or your own network, and you have data to back up conversations with vendors.",
    prep: ["List of key applications and URLs", "Office locations to monitor from", "Who should receive alerts"],
    faqs: [
      { question: "Can we see historical performance?", answer: "Yes. Trends over weeks and months help with planning and vendor reviews." },
      { question: "Will we be alerted at night?", answer: "Alerts can be sent at any time, or only during business hours, as you prefer." },
    ],
  },
  "adapt-smart-cloud": {
    outcome:
      "You get cloud servers, the network to reach them and backups from one partner, with one bill. When something goes wrong, there's one team to call and no finger-pointing between vendors.",
    prep: ["Applications you want to run and their requirements", "Number of offices that need access", "Backup and retention needs"],
    faqs: [
      { question: "Can we move from Adapt Smart Cloud to a public cloud later?", answer: "Yes. Your data and servers can be migrated if your needs change." },
      { question: "Is Adapt Smart Cloud suitable for ERP?", answer: "Yes, when sized correctly. We review your ERP vendor's requirements first." },
    ],
  },
};
