import type { SubServiceExtra } from "../types";

export const securityManagedBundleExtras: Record<string, SubServiceExtra> = {
  // ---------------- Security ----------------
  "next-gen-firewall": {
    outcome:
      "You can see which applications are using your bandwidth, block risky ones and stop known attacks at the edge. With central management, every branch follows the same security rules.",
    prep: ["Number of users and internet bandwidth at each site", "Existing firewall model and rules", "Remote access requirements"],
    faqs: [
      { question: "How often do firewall rules need reviewing?", answer: "At least every six months, and whenever you add new applications or sites. Managed plans include regular reviews." },
      { question: "Does an NGFW slow down the internet?", answer: "Not if it's sized correctly. Undersized firewalls cause slowdowns, which is why sizing matters." },
    ],
  },
  "web-application-firewall": {
    outcome:
      "Your website and APIs keep serving genuine users while common attacks and abusive bots are blocked. Developers get breathing room to fix issues properly instead of patching in a hurry.",
    prep: ["Websites, portals and APIs to protect", "Where they're hosted", "Any known security findings or audit reports"],
    faqs: [
      { question: "Does a WAF help with PCI DSS or audits?", answer: "A WAF is often part of meeting security requirements for web applications. Your auditor will confirm what's needed for your case." },
      { question: "Can it block traffic from specific countries?", answer: "Yes. Geographic rules can be applied if that suits your business." },
    ],
  },
  "zero-trust-network-access": {
    outcome:
      "A stolen password no longer opens up your whole network. Remote staff and contractors get to exactly what they need, and access can be removed instantly when someone leaves.",
    prep: ["Applications remote users need", "Your identity provider (Microsoft, Google or other)", "User groups and their access needs"],
    faqs: [
      { question: "Is ZTNA harder for users than a VPN?", answer: "Usually it's easier. Users sign in once and open their apps, without connecting and disconnecting a VPN." },
      { question: "Can it protect on-premise applications?", answer: "Yes. ZTNA can publish internal apps securely without opening inbound firewall ports." },
    ],
  },
  "endpoint-detection-response": {
    outcome:
      "Suspicious activity on a laptop or server is caught early and can be contained before it spreads, which is the difference between one infected machine and a company-wide ransomware incident.",
    prep: ["Number of laptops, desktops and servers", "Operating systems in use", "Who will respond to alerts"],
    faqs: [
      { question: "Does EDR slow down laptops?", answer: "Modern EDR agents are lightweight, and most users don't notice them." },
      { question: "Does it cover servers too?", answer: "Yes. Both workstations and servers can be protected." },
    ],
  },
  "cloud-email-security": {
    outcome:
      "Fewer phishing emails and fake invoices reach staff, impersonation attempts are flagged, and your own domain becomes much harder for scammers to spoof.",
    prep: ["Your email platform (Microsoft 365, Google Workspace or other)", "DNS access for your domain", "Number of mailboxes"],
    faqs: [
      { question: "Can users report suspicious emails?", answer: "Yes. A report button can be added so users flag emails for review." },
      { question: "What is DMARC?", answer: "DMARC is a DNS setting that tells receiving servers how to treat emails pretending to be from your domain. It helps stop spoofing." },
    ],
  },
  "data-loss-prevention": {
    outcome:
      "Sensitive data is much less likely to leave by accident, staff are reminded when they're about to share something risky, and you have logs to show auditors.",
    prep: ["The types of sensitive data you hold", "Where it's stored and how it's shared", "Who needs access and who doesn't"],
    faqs: [
      { question: "Where does DLP work: email, cloud, or laptops?", answer: "It can cover email, cloud storage, web uploads and endpoints, depending on the product. We'll recommend the right coverage." },
      { question: "Can we start with just one area?", answer: "Yes. Many companies start with email, then extend to cloud and devices." },
    ],
  },
  "dns-security-filtering": {
    outcome:
      "Clicks on malicious links are blocked before a page loads, guest and staff Wi-Fi stay free of unwanted content, and protection follows laptops outside the office.",
    prep: ["Number of sites and users", "Content categories you want blocked", "Whether laptops need off-site protection"],
    faqs: [
      { question: "Can we allow a blocked site if needed?", answer: "Yes. Exceptions can be added for specific sites." },
      { question: "Does it work on guest Wi-Fi?", answer: "Yes. Different policies can apply to staff and guest networks." },
    ],
  },

  // ---------------- Managed services ----------------
  "network-monitoring-24x7": {
    outcome:
      "Outages at night are noticed and worked on immediately, not discovered when the first shift arrives. You get a record of every incident and how it was resolved.",
    prep: ["List of sites, links and devices", "Escalation contacts and hours", "Read-only monitoring access to devices"],
    faqs: [
      { question: "Will you call us at night?", answer: "Only for issues you've marked as critical. Others are handled and reported in the morning." },
      { question: "Can we see the monitoring dashboard ourselves?", answer: "Yes. Customer dashboard access can be provided." },
    ],
  },
  "proactive-fault-detection": {
    outcome:
      "Fewer surprise outages, because failing links and hardware are spotted early and fixed during planned windows instead of in the middle of the working day.",
    prep: ["Devices and links to cover", "Maintenance windows that suit you", "Spare hardware arrangements, if any"],
    faqs: [
      { question: "What kinds of early warnings do you watch for?", answer: "Rising error counts, packet loss, high latency, overheating, power supply alarms and resources running out." },
      { question: "Can you arrange replacement hardware?", answer: "Yes, through vendor support contracts or spares we help you plan." },
    ],
  },
  "bgp-routing-optimization": {
    outcome:
      "Traffic is balanced sensibly across your providers, outages on one ISP are routed around quickly, and you have documented routing policies instead of tribal knowledge.",
    prep: ["Your AS number and IP prefixes", "ISPs and link capacities", "Current router configurations"],
    faqs: [
      { question: "Can BGP balance traffic evenly?", answer: "Outbound traffic is easier to control than inbound. Techniques like path prepending and communities help shape inbound traffic." },
      { question: "What is route hijack monitoring?", answer: "It alerts you if someone else on the internet starts announcing your IP addresses, which can divert your traffic." },
    ],
  },
  "automated-failover-management": {
    outcome:
      "When the main link fails, the backup really does take over, because it's been configured properly and tested regularly. Teams keep working through outages that would previously have stopped them.",
    prep: ["Primary and backup links at each site", "Router, firewall or SD-WAN details", "Applications that must keep working"],
    faqs: [
      { question: "Does traffic switch back automatically?", answer: "Yes, once the main link is stable again. A short delay is usually added to avoid flapping." },
      { question: "Can failover work without SD-WAN?", answer: "Yes. Most business routers and firewalls support failover; SD-WAN adds smarter, per-application switching." },
    ],
  },
  "multi-vendor-router-management": {
    outcome:
      "One team understands your whole network, regardless of brand. Changes are made properly and documented, and a failed device can be restored quickly from a saved configuration.",
    prep: ["Device inventory with brands and models", "Access credentials under agreed controls", "Your change approval process"],
    faqs: [
      { question: "How quickly are change requests handled?", answer: "Timelines are agreed in the SLA: urgent changes faster, routine changes in scheduled windows." },
      { question: "Do you document the network?", answer: "Yes. We maintain up-to-date diagrams and configuration records." },
    ],
  },
  "firmware-security-patching": {
    outcome:
      "Known vulnerabilities on your firewalls and routers get closed in good time, without the risk of a careless update taking the office offline.",
    prep: ["Device inventory and current firmware versions", "Preferred maintenance windows", "Change approval contacts"],
    faqs: [
      { question: "What if an update causes a problem?", answer: "We roll back to the saved configuration and previous firmware, then investigate before trying again." },
      { question: "Do you patch Wi-Fi access points too?", answer: "Yes, along with switches, routers and firewalls." },
    ],
  },
  "bandwidth-utilization-audits": {
    outcome:
      "You'll know which links are underused and which are full, so you can cut costs where you're overpaying and upgrade where users are struggling, based on data rather than complaints.",
    prep: ["List of links and their contracted speeds", "Access to router or firewall statistics", "Your telecom invoices"],
    faqs: [
      { question: "Can an audit identify non-work traffic?", answer: "Yes, if your firewall provides application data. It shows which apps use the most bandwidth." },
      { question: "How often should we audit?", answer: "Once a year, or before renewing telecom contracts." },
    ],
  },
  "custom-enterprise-slas": {
    outcome:
      "Everyone knows what to expect: how fast each site gets a response, how quickly faults are fixed and how performance is reported. Vendor reviews are based on numbers, not impressions.",
    prep: ["Your list of sites and how critical each one is", "Business hours and critical periods", "Current SLA pain points"],
    faqs: [
      { question: "Can SLAs cover services from other vendors?", answer: "We can manage and report on multi-vendor environments. Commitments depend on what each vendor provides." },
      { question: "How is performance reported?", answer: "Monthly reports show availability, incidents and response times against the agreed targets." },
    ],
  },

  // ---------------- Bundles ----------------
  "smartoffice-starter-pack": {
    outcome:
      "Your office is up and running in one go: internet, Wi-Fi, security and phones, all working together. You have one bill and one number to call, and you don't need to hire IT staff to manage it.",
    prep: ["Office address and team size", "Move-in or opening date", "Phone numbers you want to keep"],
    faqs: [
      { question: "How long does setup take?", answer: "Mostly depends on internet feasibility at your address. The rest is installed and configured in one visit." },
      { question: "Can we add a backup internet link?", answer: "Yes. A 4G/5G or second broadband backup can be added to the pack." },
    ],
  },
  "branch-in-a-box": {
    outcome:
      "New branches open on schedule with the same reliable setup as every other site. Head office can see and manage all branches without sending engineers on every launch.",
    prep: ["Branch opening plan and addresses", "Standard applications at each branch", "Branch size categories"],
    faqs: [
      { question: "Can branches connect to our head office network?", answer: "Yes. The kit includes SD-WAN or VPN so the branch joins your corporate network automatically." },
      { question: "What if a device fails at a branch?", answer: "A pre-configured replacement can be shipped and plugged in without an engineer on site." },
    ],
  },
  "retail-dual-failover-pack": {
    outcome:
      "Checkouts keep running during internet outages, so you don't lose sales or annoy customers. Head office sees which stores are on backup and can follow up with the carrier.",
    prep: ["List of stores and their current connections", "POS and payment systems used", "Store opening hours"],
    faqs: [
      { question: "Will staff know when a store is on backup?", answer: "They don't need to; it's automatic. Head office can see it on the dashboard." },
      { question: "Can the backup handle CCTV too?", answer: "Backup links are usually sized for billing and payments. CCTV can be limited during failover to save capacity." },
    ],
  },
  "pop-up-event-internet": {
    outcome:
      "Registration desks, payment counters and live streams work reliably throughout the event, and you're not depending on the venue's shared Wi-Fi.",
    prep: ["Venue address and layout", "Event dates, including setup days", "Expected attendees and what they'll use the internet for"],
    faqs: [
      { question: "Can you provide internet in remote locations?", answer: "Often yes, using 4G/5G bonding where fibre isn't available. We'll check coverage at the site." },
      { question: "Do you remove equipment after the event?", answer: "Yes. Removal is part of the service." },
    ],
  },
  "ill-sd-wan-hybrid-bundle": {
    outcome:
      "Critical sites get leased-line reliability, smaller sites get affordable broadband, and everything runs as one secure network. Costs drop compared with leased lines or MPLS everywhere.",
    prep: ["Site list with how critical each one is", "Current links and contract end dates", "Applications that need priority"],
    faqs: [
      { question: "Can we migrate site by site?", answer: "Yes. Phased migration avoids disruption and lets you prove the design early." },
      { question: "Who handles faults on the links?", answer: "We do. One support desk covers the links and the SD-WAN." },
    ],
  },
  "cloud-interconnect-peering": {
    outcome:
      "Traffic between your network, your clouds and your partners takes a direct, private path, which means more consistent performance, lower exposure and simpler routing.",
    prep: ["Cloud providers and regions you use", "Partners or data centres to connect", "Bandwidth for each connection"],
    faqs: [
      { question: "Is peering only for large companies?", answer: "It's most useful when you exchange a lot of traffic with specific clouds or partners, regardless of company size." },
      { question: "Can this replace site-to-site VPNs?", answer: "For high-volume or critical connections, yes. VPNs can remain as backups." },
    ],
  },
  "unified-voice-sip-suite": {
    outcome:
      "All your voice services come from one supplier, so call quality issues are investigated end to end. Numbers, trunks and contact centre seats can be adjusted on one account.",
    prep: ["Current voice services and providers", "Numbers to port", "Number of users, agents and concurrent calls"],
    faqs: [
      { question: "Can we keep some services with our current provider?", answer: "Yes. The suite can be adopted in stages as contracts end." },
      { question: "Do you provide the desk phones?", answer: "Desk phones and headsets can be included or sourced separately." },
    ],
  },
  "zero-trust-remote-workforce": {
    outcome:
      "Remote staff work safely from home or on the move, stolen passwords alone can't get attackers in, and IT can see and protect every company device wherever it is.",
    prep: ["Number of remote users and their devices", "Applications they need", "Your identity provider and current VPN"],
    faqs: [
      { question: "Can it be rolled out without disrupting work?", answer: "Yes. We pilot with a small group, then roll out in waves." },
      { question: "Does it work on Mac and mobile devices?", answer: "Most components support Windows, macOS, iOS and Android." },
    ],
  },
};
