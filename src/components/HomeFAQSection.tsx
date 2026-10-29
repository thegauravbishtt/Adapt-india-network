"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are global network services, and why are they essential for enterprises today?",
    answer:
      "Global network services provide reliable, high-speed, and secure connectivity across distributed branch offices, cloud environments, and datacenters. They ensure uninterrupted business continuity, low-latency access to mission-critical workloads, and centralized security policy enforcement across regional and international locations.",
  },
  {
    id: "faq-2",
    question: "How do global connectivity services support business expansion across multiple regions?",
    answer:
      "By leveraging pan-India optical fiber backbones, multi-carrier redundancy, and automated SD-WAN provisioning, enterprises can stand up new branches, logistics hubs, and regional offices in under 48 hours without dealing with fragmented local telcos, backed by single-contract 99.5% SLAs.",
  },
  {
    id: "faq-3",
    question: "What's the importance of visibility and analytics in managing global network services?",
    answer:
      "Real-time network visibility and proactive telemetry allow enterprise IT teams to monitor bandwidth utilization, detect packet jitter or route degradation, and resolve bottlenecks before end users are impacted. Our 24/7/365 active NOC supervises dynamic failovers and strict SLA compliance.",
  },
  {
    id: "faq-4",
    question: "What makes Adapt India Network one of the leading enterprise network service providers?",
    answer:
      "Adapt India Network combines tier-1 carrier fiber access with carrier-neutral orchestration, dedicated 1:1 symmetrical leased lines, intelligent SD-WAN overlays, and guaranteed uptime SLAs—giving enterprise clients a single trusted point of accountability.",
  },
  {
    id: "faq-5",
    question: "How can organisations transition from legacy MPLS networks to modern global connectivity services?",
    answer:
      "We engineer seamless phased hybrid migrations: keeping mission-critical ERP traffic on dedicated private circuits while steering cloud-destined workloads (SaaS, Microsoft 365, AWS, Azure) across high-throughput Internet WAN and SD-WAN. This reduces network costs by 30-45% with zero operational downtime.",
  },
  {
    id: "faq-6",
    question: "How can Adapt India Network's global connectivity services help enterprises accelerate digital transformation?",
    answer:
      "Digital transformation demands agile, cloud-ready networks that adapt dynamically. Our programmable network fabric supports instant bandwidth scaling, zero-trust network access (ZTNA), and multi-cloud interconnects that empower hybrid workforces reliably.",
  },
  {
    id: "faq-7",
    question: "What are the latest trends shaping the future of global network services?",
    answer:
      "Key enterprise trends include AI-driven predictive network operations (AIOps), software-defined cloud networking, automated path steering, and unified SASE/SSE frameworks that merge network performance with zero-trust cyber defense.",
  },
  {
    id: "faq-8",
    question: "How does the Adapt India Network Fabric enable secure, programmable global connectivity?",
    answer:
      "Our Network Fabric decouples physical carrier underlays from intelligent software overlays, allowing dynamic path selection, granular end-to-end encryption, automated QoS prioritization, and centralized portal visibility across all enterprise touchpoints.",
  },
];

export default function HomeFAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-t border-zinc-200 select-none">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Heading matching screenshot */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-zinc-900 tracking-tight leading-[1.12]">
            Frequently asked <br />
            <span className="text-[#E31E24]">questions</span>
          </h2>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed font-normal">
            Everything you need to know about our enterprise connectivity, managed SD-WAN, and nationwide network infrastructure.
          </p>
        </div>

        {/* Right Column: FAQ Accordion List matching screenshot */}
        <div className="lg:col-span-8 flex flex-col">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-zinc-200 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 sm:py-6 flex items-start text-left gap-4 group cursor-pointer"
                >
                  {/* Plus / Minus Icon on Left (matching reference) */}
                  <span
                    className={`shrink-0 text-xl font-light leading-none mt-0.5 transition-transform duration-200 ${
                      isOpen
                        ? "text-[#E31E24] rotate-45"
                        : "text-[#E31E24] group-hover:scale-110"
                    }`}
                  >
                    +
                  </span>

                  {/* Question Text */}
                  <span className="text-base sm:text-lg font-semibold text-zinc-900 leading-snug group-hover:text-[#E31E24] transition-colors">
                    {faq.question}
                  </span>
                </button>

                {/* Expanded Answer */}
                {isOpen && (
                  <div className="pb-6 pl-8 pr-2 sm:pr-4 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
