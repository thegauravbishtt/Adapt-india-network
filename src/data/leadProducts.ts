/* Products customers can pick in the website enquiry forms ("Service Interested In"). */
export const leadProducts: Array<{ group: string; items: string[] }> = [
  {
    group: "Connectivity Solutions",
    items: ["Internet Leased Line (Optical Fiber – Underground)", "MPLS / ILL VPN", "SD-WAN", "Managed Wi-Fi"],
  },
  {
    group: "Cloud & Data Center Solutions",
    items: [
      "Microsoft Azure",
      "AWS Cloud Solutions",
      "Cloud Connect",
      "Data Center & Colocation",
      "Disaster Recovery (DRaaS)",
      "Cloud Backup",
    ],
  },
  {
    group: "Cyber Security Solutions",
    items: [
      "Firewall & UTM",
      "Endpoint Security",
      "Email Security",
      "VAPT (Vulnerability Assessment & Penetration Testing)",
      "Secure Internet",
    ],
  },
  {
    group: "Collaboration & Productivity",
    items: ["Microsoft 365", "Google Workspace", "Zoom Licenses"],
  },
  {
    group: "Voice & Calling Solutions",
    items: ["Cloud Calling (Smartflo)", "SIP Trunk", "PRI Lines", "Toll-Free & IVR (1800 Series)"],
  },
  {
    group: "Marketing & Communication Solutions",
    items: ["Bulk SMS", "Bulk Email", "WhatsApp Business API", "Truecaller Business"],
  },
];
