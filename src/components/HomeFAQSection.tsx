"use client";

import React, { useState } from "react";
import JsonLd from "./JsonLd";
import { faqSchema } from "../lib/seo";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const homeFaqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is an Internet Leased Line (ILL) and how is it different from broadband?",
    answer:
      "An Internet Leased Line is a dedicated fibre connection reserved only for your business, with the same upload and download speed, static IP addresses and an uptime SLA. Broadband is shared with other users, so speeds drop at busy times and upload is usually much slower.",
  },
  {
    id: "faq-2",
    question: "Do you provide leased lines in Delhi, Gurgaon, Noida and Ghaziabad?",
    answer:
      "Yes. We are based in Saket, New Delhi and deliver leased lines, SD-WAN, MPLS and business broadband across Delhi NCR, including Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad and Faridabad, as well as Lucknow and other cities in Uttar Pradesh.",
  },
  {
    id: "faq-3",
    question: "Can you connect offices and branches in other cities across India?",
    answer:
      "Yes. Through our carrier partners Tata Tele Business Services and ACT Fibernet we deliver connectivity across India, and we connect your branches to the head office securely using SD-WAN, MPLS or point-to-point leased lines.",
  },
  {
    id: "faq-4",
    question: "How long does it take to install a leased line?",
    answer:
      "It depends on whether the carrier's fibre already reaches your building. We check feasibility at your exact address first and give you a realistic delivery timeline before you sign.",
  },
  {
    id: "faq-5",
    question: "Should my business choose SD-WAN or MPLS?",
    answer:
      "SD-WAN works over leased lines, broadband and 4G/5G, is usually more cost-effective and makes cloud access faster. MPLS is a private carrier network suited to banks and businesses with strict compliance needs. Many companies use both, and we help you choose.",
  },
  {
    id: "faq-6",
    question: "How do you keep my office online if a fibre is cut?",
    answer:
      "For critical sites we set up a backup connection on a different carrier, ideally entering your building by a separate route, with automatic failover on your router, firewall or SD-WAN device so your team stays online.",
  },
  {
    id: "faq-7",
    question: "Do you provide static IP addresses?",
    answer:
      "Yes. Leased lines come with static public IP addresses for servers, VPNs, remote CCTV access and whitelisting with banks, ERP vendors and portals.",
  },
  {
    id: "faq-8",
    question: "What support do you provide after installation?",
    answer:
      "Connections are monitored around the clock and our support team coordinates with the carrier to restore service quickly if a fault occurs. You get a single point of contact for every site.",
  },
];
const faqs = homeFaqs;

export default function HomeFAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="w-full bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 border-t border-zinc-200 select-none">
      <JsonLd data={faqSchema(homeFaqs)} />
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
                {/* Always in the HTML (so Google can read it); hidden until opened */}
                <div
                  hidden={!isOpen}
                  className="pb-6 pl-8 pr-2 sm:pr-4 animate-in fade-in slide-in-from-top-1 duration-200"
                >
                  <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
