"use client";

import React from "react";

const webSolutions = [
  {
    title: "Custom Next.js & React Websites",
    icon: (
      <svg className="w-6 h-6 text-brand-red fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  },
  {
    title: "Customer Portals & Client Dashboards",
    icon: (
      <svg className="w-6 h-6 text-brand-red fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: "Omnichannel E-Commerce Platforms",
    icon: (
      <svg className="w-6 h-6 text-brand-red fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    )
  }
];

const softwareSolutions = [
  {
    title: "Registration & Booking Systems",
    icon: (
      <svg className="w-6 h-6 text-brand-red fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  },
  {
    title: "Custom Enterprise Operations Software",
    icon: (
      <svg className="w-6 h-6 text-brand-red fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M4 17h6v4H4zM14 3h6v4h-6zM14 13h6v4h-6zM4 5h6v4H4z" />
        <path d="M7 9v4m10-6v6" />
      </svg>
    )
  },
  {
    title: "AI Workflows & Smart CRM Triggers",
    icon: (
      <svg className="w-6 h-6 text-brand-red fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:pl-12 lg:pl-16 sm:pr-8 py-20 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        
        {/* Left Column: High-Performance Web Platforms */}
        <div className="flex flex-col">
          <div className="mb-10 text-left select-none">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2 block font-mono">
              DIGITAL EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-black leading-tight tracking-tight mb-3 font-display">
              High-Converting Websites
            </h2>
            <p className="text-[14px] sm:text-[15px] text-zinc-600 leading-relaxed font-normal max-w-lg">
              We engineer scalable, high-speed platforms designed to dominate search rankings and turn visitors into loyal customers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {webSolutions.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-5 p-5 bg-white border-[2px] border-zinc-200 rounded-2xl shadow-xs hover:border-black hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                {/* Badge Icon */}
                <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm sm:text-[15px] font-medium text-zinc-900 group-hover:text-black">
                  {item.title}
                </span>
                {/* Arrow */}
                <svg className="w-5 h-5 text-zinc-400 ml-auto group-hover:text-black group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Custom SaaS & Software */}
        <div className="flex flex-col">
          <div className="mb-10 text-left select-none">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-zinc-400 uppercase mb-2 block font-mono">
              ENGINEERING & AUTOMATION
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-black leading-tight tracking-tight mb-3 font-display">
              Smart Enterprise Software
            </h2>
            <p className="text-[14px] sm:text-[15px] text-zinc-600 leading-relaxed font-normal max-w-lg">
              Custom SaaS applications, API architectures, and automated CRM workflows that streamline complex business operations.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {softwareSolutions.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-5 p-5 bg-white border-[2px] border-zinc-200 rounded-2xl shadow-xs hover:border-black hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                {/* Badge Icon */}
                <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm sm:text-[15px] font-medium text-zinc-900 group-hover:text-black">
                  {item.title}
                </span>
                {/* Arrow */}
                <svg className="w-5 h-5 text-zinc-400 ml-auto group-hover:text-black group-hover:translate-x-1 transition-all shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
