/* The product list shown in the website's Services menu (desktop and phone). */
export interface ProductItem {
  name: string;
  href: string;
}
export interface ProductCategory {
  id: string;
  label: string;
  items: ProductItem[];
}

export const productMenu: ProductCategory[] = [
  {
    id: "connectivity",
    label: "Connectivity Solutions",
    items: [
      { name: "Internet Leased Line (Optical Fiber – Underground)", href: "/services/internet-leased-line" },
      { name: "MPLS / ILL VPN", href: "/services/mpls" },
      { name: "SD-WAN", href: "/services/sd-wan" },
      { name: "Managed Wi-Fi", href: "/services/managed-wifi" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Data Center Solutions",
    items: [
      { name: "Microsoft Azure", href: "/services/microsoft-azure" },
      { name: "AWS Cloud Solutions", href: "/services/aws-cloud-solutions" },
      { name: "Cloud Connect", href: "/services/ez-cloud-connect" },
      { name: "Data Center & Colocation", href: "/services/data-center-colocation" },
      { name: "Disaster Recovery (DRaaS)", href: "/services/disaster-recovery-draas" },
      { name: "Cloud Backup", href: "/services/cloud-backup" },
    ],
  },
  {
    id: "security",
    label: "Cyber Security Solutions",
    items: [
      { name: "Firewall & UTM", href: "/services/next-gen-firewall" },
      { name: "Endpoint Security", href: "/services/endpoint-detection-response" },
      { name: "Email Security", href: "/services/cloud-email-security" },
      { name: "VAPT (Vulnerability Assessment & Penetration Testing)", href: "/services/vapt" },
      { name: "Secure Internet", href: "/services/secured-leased-line" },
    ],
  },
  {
    id: "collab",
    label: "Collaboration & Productivity",
    items: [
      { name: "Microsoft 365", href: "/services/microsoft-365-enterprise" },
      { name: "Google Workspace", href: "/services/google-workspace" },
      { name: "Zoom Licenses", href: "/services/zoom-licenses" },
    ],
  },
  {
    id: "voice",
    label: "Voice & Calling Solutions",
    items: [
      { name: "Cloud Calling (Smartflo)", href: "/services/cloud-telephony" },
      { name: "SIP Trunk", href: "/services/sip-trunk-services" },
      { name: "PRI Lines", href: "/services/pri-lines" },
      { name: "Toll-Free & IVR (1800 Series)", href: "/services/toll-free-number-services" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & Communication Solutions",
    items: [
      { name: "Bulk SMS", href: "/services/sms-solutions" },
      { name: "Bulk Email", href: "/services/smartflo-email-platform" },
      { name: "WhatsApp Business API", href: "/services/whatsapp-business-platform" },
      { name: "Truecaller Business", href: "/services/truecaller-business-verified" },
    ],
  },
];
