/**
 * Keyword-named hero images and alt text for the main service pages.
 * Google Images reads the file name and alt text, so these describe the service
 * the way people search for it. The pictures are the same as before.
 */
export const SERVICE_SEO_IMAGES: Record<string, { src: string; alt: string; alternateNames: string[] }> = {
  "smart-internet-ill": {
    src: "/images/services/internet-leased-line-provider-india.jpg",
    alt: "Internet leased line (ILL) connection for business offices in India",
    alternateNames: ["Internet Leased Line", "ILL", "Leased Line Connection", "Dedicated Internet Access", "Business Leased Line"],
  },
  "smartflo-sd-wan": {
    src: "/images/services/managed-sd-wan-service-provider-india.jpg",
    alt: "Managed SD-WAN connecting business branches across India",
    alternateNames: ["Managed SD-WAN", "SD-WAN Service", "Software-Defined WAN", "Smartflo SD-WAN"],
  },
  "managed-mpls": {
    src: "/images/services/mpls-vpn-service-provider-india.jpg",
    alt: "MPLS VPN network linking offices, plants and data centres in India",
    alternateNames: ["Managed MPLS", "MPLS VPN", "MPLS Network", "Private WAN"],
  },
  "business-communications": {
    src: "/images/services/sip-trunk-cloud-telephony-india.jpg",
    alt: "SIP trunk and cloud telephony for business calling in India",
    alternateNames: ["SIP Trunk", "Cloud Telephony", "Business Phone Lines", "Cloud PBX", "Toll-Free Number"],
  },
  "cloud-telephony": {
    src: "/images/services/smartflo-cloud-telephony-call-centre.jpg",
    alt: "Call centre agent with a headset answering business calls on Smartflo cloud telephony",
    alternateNames: ["Smartflo", "Smartflo Cloud Telephony", "Cloud Telephony", "Cloud PBX", "Virtual PBX", "IVR Service", "Toll-Free Number"],
  },
  "enterprise-broadband": {
    src: "/images/services/business-broadband-connection-office.jpg",
    alt: "Business broadband connection and office Wi-Fi",
    alternateNames: ["Business Broadband", "Office Broadband", "Business Internet Connection", "Office Wi-Fi"],
  },
  "point-to-point-leased-line": {
    src: "/images/services/point-to-point-leased-line-india.jpg",
    alt: "Point-to-point leased line linking two business sites",
    alternateNames: ["Point-to-Point Leased Line", "P2P Leased Line", "Private Leased Circuit", "Data Leased Line"],
  },
};
