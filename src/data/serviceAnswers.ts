/**
 * Short, direct answers shown near the top of the main service pages.
 * Written so search engines and AI assistants can quote them as they are:
 * one plain question, a 40 to 60 word answer, and a few checkable facts.
 */
export const SERVICE_ANSWERS: Record<
  string,
  { question: string; answer: string; facts: Array<[string, string]> }
> = {
  "smart-internet-ill": {
    question: "What is an internet leased line?",
    answer:
      "An internet leased line (ILL) is a dedicated fibre internet connection for a business. The bandwidth is not shared with other users, upload and download speeds are the same, and it comes with static public IP addresses and an uptime SLA. Adapt India Networks provides leased line connections for businesses across India on Tata Tele Business Services and ACT Fibernet networks.",
    facts: [
      ["Bandwidth", "Dedicated, same speed up and down"],
      ["Uptime SLA", "99.5% in writing"],
      ["IP addresses", "Static public IPs included"],
      ["Networks", "Tata Tele Business Services, ACT Fibernet"],
      ["Coverage", "Delhi NCR and cities across India"],
    ],
  },
  "smartflo-sd-wan": {
    question: "What is managed SD-WAN?",
    answer:
      "Managed SD-WAN connects all of a company's branches into one network over any mix of links, such as leased lines, broadband and 4G/5G. It moves traffic to a working link automatically when one fails and is controlled from one dashboard. Adapt India Networks provides managed SD-WAN services across India, including cellular SD-WAN on 4G/5G for sites without fibre.",
    facts: [
      ["Links per site", "Leased line, broadband or 4G/5G"],
      ["Failover", "Automatic between links"],
      ["Management", "One dashboard for all branches"],
      ["Best for", "Businesses with several branches"],
      ["Coverage", "Branches across India"],
    ],
  },
  "managed-mpls": {
    question: "What is an MPLS VPN?",
    answer:
      "An MPLS VPN is a private network run by a telecom carrier that links a company's offices, plants and data centres. Traffic stays on the carrier's network instead of the public internet, and voice or core applications can be given priority. As an MPLS service provider, Adapt India Networks designs and manages MPLS networks for businesses across India.",
    facts: [
      ["Network", "Private, separate from the internet"],
      ["Traffic priority", "Class of Service for voice and core apps"],
      ["Availability SLA", "99.5%"],
      ["Routers", "Configured and managed at every site"],
      ["Best for", "Banks, regulated firms, data centre links"],
    ],
  },
  "business-communications": {
    question: "What is a SIP trunk?",
    answer:
      "A SIP trunk delivers business phone lines over a data connection instead of copper or PRI lines. It connects an office phone system (IP PBX) to the telephone network, and call channels can be added or reduced without new cabling. Adapt India Networks also provides cloud telephony, toll-free numbers and WhatsApp Business API.",
    facts: [
      ["SIP trunk", "Phone lines for your existing PBX"],
      ["Cloud telephony", "Cloud PBX, IVR and call queues"],
      ["Numbers", "Local and toll-free (1800)"],
      ["Messaging", "WhatsApp Business API"],
      ["Platform", "Tata Tele Business Services"],
    ],
  },
  "enterprise-broadband": {
    question: "What is business broadband?",
    answer:
      "Business broadband is a fibre internet connection for small offices, shops, clinics and branch sites. It is shared with other users, so it costs less than a leased line, and it also works well as a backup to a leased line. Adapt India Networks provides business broadband with Wi-Fi planned for the office.",
    facts: [
      ["Best for", "Small offices, shops, branches"],
      ["Also used as", "Backup line for a leased line"],
      ["Wi-Fi", "Access points planned for your floor"],
      ["Guest Wi-Fi", "Separate network with OTP login"],
      ["Upgrade path", "Move to a leased line as you grow"],
    ],
  },
};
