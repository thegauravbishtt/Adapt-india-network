"use client";

import React from "react";

interface ServiceItem {
  number: string;
  title: string;
  src: string;
  slug: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "SD-WAN Solutions",
    src: "/services/broadband_clean.jpg",
    slug: "sd-wan",
  },
  {
    number: "02",
    title: "Internet Leased Line (ILL)",
    src: "/banner-datacenter-racks.jpg",
    slug: "internet-leased-line",
  },
  {
    number: "03",
    title: "Multi-Protocol Label Switching (MPLS)",
    src: "/banner-servers-lights.jpg",
    slug: "mpls",
  },
  {
    number: "04",
    title: "Enterprise Broadband",
    src: "/banner-about-enterprise.jpg",
    slug: "enterprise-broadband",
  },
  {
    number: "05",
    title: "Managed Wi-Fi Solutions",
    src: "/wifi-banner.jpg",
    slug: "managed-wifi",
  },
  {
    number: "06",
    title: "SIP Trunk Services",
    src: "/telephone-studio.jpg",
    slug: "sip-trunk",
  },
  {
    number: "07",
    title: "Cloud Telephony",
    src: "/telephone-banner.jpg",
    slug: "cloud-telephony",
  },
  {
    number: "08",
    title: "Cyber Security",
    src: "/resources/network_engineer_ops.jpg",
    slug: "cyber-security",
  },
  {
    number: "09",
    title: "Data Services & PRI",
    src: "/banner-global-telecom.jpg",
    slug: "data-services",
  },
];

export default function EndToEndServicesSection() {
  return (
    <section id="services" className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-14 xl:px-16 select-none relative overflow-hidden border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header matching Image 1 & typography */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-zinc-900 tracking-tight leading-tight">
            What we deliver, <span className="text-[#E31E24]">end to end</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mt-4">
            From mission-critical leased lines and intelligent SD-WAN to multi-site MPLS and enterprise cyber defense. High-performance connectivity engineered for businesses across India.
          </p>
        </div>

        {/* 3-Column Service Grid matching Image 2 card style & typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group bg-white border border-zinc-200/90 hover:border-[#E31E24]/60 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer relative overflow-hidden no-underline"
            >
              {/* Top red hover accent line matching Image 2 */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#E31E24] transition-colors duration-200" />

              <div>
                {/* Photo Thumbnail with inset frame matching Image 2 */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200/70 mb-4 shadow-xs">
                  <img
                    src={service.src}
                    alt={service.title}
                    loading="eager"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Clean numbered badge */}
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/95 backdrop-blur-xs shadow-xs border border-zinc-200/80 inline-flex items-center justify-center font-bold text-xs text-[#E31E24] font-mono">
                    {service.number}
                  </span>
                </div>

                {/* Card Title matching Image 2 typography */}
                <h3 className="m-0 text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#E31E24] transition-colors duration-200 tracking-tight leading-snug">
                  {service.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
