import React from "react";
import Link from "next/link";
import {
  Network,
  Waypoints,
  Wifi,
  Router,
  Phone,
  PhoneCall,
  ShieldCheck,
  Cable,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "SD-WAN",
    text: "Connect every branch on one network, with automatic failover.",
    href: "/services/smartflo-sd-wan/",
    Icon: Network,
  },
  {
    title: "MPLS VPN",
    text: "Private, secure links between offices, plants and data centres.",
    href: "/services/managed-mpls/",
    Icon: Waypoints,
  },
  {
    title: "Enterprise Broadband",
    text: "Fast, affordable internet for smaller offices and stores.",
    href: "/services/enterprise-broadband/",
    Icon: Router,
  },
  {
    title: "Managed Wi-Fi",
    text: "Office and campus Wi-Fi, planned, installed and looked after.",
    href: "/services/managed-campus-wifi/",
    Icon: Wifi,
  },
  {
    title: "SIP Trunk",
    text: "Phone lines for your PBX over your data connection.",
    href: "/services/sip-trunk-services/",
    Icon: Phone,
  },
  {
    title: "Cloud Telephony",
    text: "Business numbers and extensions on desk, laptop and mobile.",
    href: "/services/smartflo-ucaas/",
    Icon: PhoneCall,
  },
  {
    title: "Cyber Security",
    text: "Firewalls, DDoS protection and secure remote access.",
    href: "/services/cybersecurity-solutions/",
    Icon: ShieldCheck,
  },
  {
    title: "PRI & Point-to-Point",
    text: "Digital voice lines and private links between two sites.",
    href: "/services/point-to-point-leased-line/",
    Icon: Cable,
  },
];

export default function EndToEndServicesSection() {
  return (
    <section
      id="services"
      className="w-full bg-[#f7f7f8] py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-16 relative overflow-hidden border-t border-zinc-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold text-[#E31E24] uppercase tracking-wider">
              {"// "}Our services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-zinc-900 tracking-tight leading-tight mt-2">
              What we deliver, <span className="text-[#E31E24]">end to end</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mt-4">
              Internet, private networks, Wi-Fi, business voice and security for offices across India, from one team
              that handles the carrier, the installation and the support.
            </p>
          </div>
          <Link
            href="/services/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 hover:text-[#E31E24] transition-colors shrink-0"
          >
            View all services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Featured: Internet Leased Line */}
          <Link
            href="/services/smart-internet-ill/"
            className="group lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[420px] flex flex-col justify-end p-6 sm:p-8 text-white"
          >
            <img
              src="/banner-datacenter-racks.jpg"
              alt="Fibre network equipment for Internet Leased Line connections"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
            <div className="relative">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#E31E24] text-[11px] font-bold uppercase tracking-wider mb-4">
                Most popular
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">Internet Leased Line (ILL)</h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mt-2 max-w-md">
                Dedicated fibre internet that's yours alone, with the same upload and download speed.
              </p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {["1:1 symmetrical bandwidth", "Static IP addresses", "Uptime SLA and round-the-clock monitoring"].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 bg-white text-zinc-950 text-sm font-bold rounded-full px-5 py-2.5 group-hover:bg-[#E31E24] group-hover:text-white transition-colors">
                Explore leased lines <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Service grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map(({ title, text, href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white border border-zinc-200 hover:border-[#E31E24]/60 rounded-2xl p-5 flex gap-4 items-start transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="w-11 h-11 shrink-0 rounded-xl bg-red-50 text-[#E31E24] flex items-center justify-center group-hover:bg-[#E31E24] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#E31E24] transition-colors">{title}</h3>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#E31E24] transition-colors shrink-0" />
                  </span>
                  <span className="block text-sm text-zinc-600 leading-relaxed mt-1">{text}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-5 rounded-2xl bg-zinc-950 text-white px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm sm:text-base">
            <span className="font-bold">Not sure what you need?</span>{" "}
            <span className="text-zinc-400">Tell us about your sites and we&apos;ll recommend the right setup, not the most expensive one.</span>
          </p>
          <Link
            href="/contact/"
            className="shrink-0 inline-flex items-center gap-1.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-sm font-bold rounded-full px-5 py-2.5 transition-colors"
          >
            Talk to our team <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
