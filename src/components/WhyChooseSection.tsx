"use client";

import React from "react";
import Link from "next/link";

interface ValuePoint {
  title: string;
  description: string;
}

const valuePoints: ValuePoint[] = [
  {
    title: "We have engineered from the inside out.",
    description:
      "Our team spent decades inside tier-1 telecom backbones, enterprise SD-WAN fabrics, and optical routing cores. We know what causes packet loss, carrier latency, and downtime before your operations ever feel it.",
  },
  {
    title: "An extension of your network operations.",
    description:
      "Not an anonymous call-center queue with endless ticket handoffs. Every enterprise route is designed around your bandwidth capacity, your multi-cloud architecture, and backed by direct 24/7 NOC engineering support.",
  },
  {
    title: "Deployment is the start, not the finish.",
    description:
      "Pulling fiber to the building is one problem. Sub-millisecond jitter control, automated carrier failover, and strict 99.99% SLA uptime are what protect your business, and they are where most traditional providers come unstuck.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-[#111111] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 text-white relative overflow-hidden select-none">
      <div className="max-w-[1160px] mx-auto">
        
        {/* Main Grid: Left Value Propositions, Right Highlight Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Header */}
            <h2 className="text-[34px] sm:text-[42px] md:text-[48px] font-extrabold text-white tracking-[-0.025em] leading-[1.12] mb-10 sm:mb-12">
              Why enterprises choose<br />
              Adapt India Network
            </h2>

            {/* 3 Core Points */}
            <div className="space-y-8 sm:space-y-9 mb-10 sm:mb-12">
              {valuePoints.map((point, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-white mb-2 leading-snug tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-[#A1A1A6] text-[15px] sm:text-[16px] font-normal leading-[1.6] max-w-[560px]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#E8B923] text-[#111111] font-bold text-[15px] hover:bg-[#d9ab1e] transition-all duration-200 shadow-[0_4px_16px_rgba(232,185,35,0.2)] hover:scale-[1.02] cursor-pointer"
            >
              Talk to Our Team
            </Link>
          </div>

          {/* Right Column: Quote Card (Span 5) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[480px] bg-[#18181B] border border-white/[0.08] rounded-[22px] p-8 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
              <blockquote className="m-0 p-0 text-[#E8B923] text-[20px] sm:text-[23px] lg:text-[25px] font-medium leading-[1.42] tracking-[-0.01em]">
                &ldquo;Getting connected is one problem. Keeping mission-critical branches running at 99.99% uptime across India is a different one, and it is the one that decides whether an enterprise grows.&rdquo;
              </blockquote>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
