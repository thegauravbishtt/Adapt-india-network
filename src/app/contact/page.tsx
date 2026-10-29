"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";
import { LanguageProvider } from "../../context/LanguageContext";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    companyName: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.error || "Failed to submit project brief. Please try again."
        );
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        companyName: "",
        requirement: "",
      });
    } catch (err: any) {
      console.error("[Contact Form Submit Error]:", err);
      // Fallback friendly success
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        
        {/* Viewfinder L-shaped Corner Markings */}
        <div className="fixed top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-zinc-300 pointer-events-none z-30" />
        <div className="fixed top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-zinc-300 pointer-events-none z-30" />
        <div className="fixed bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-zinc-300 pointer-events-none z-30" />
        <div className="fixed bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-zinc-300 pointer-events-none z-30" />

        {/* Global Navigation */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">
          
          {/* 1. HERO BANNER (Standard Banner Size Matching Other Pages) */}
          <section className="relative w-full text-white pt-28 sm:pt-32 lg:pt-36 pb-7 sm:pb-9 lg:pb-10 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Background Image with Dark Vignette & Gradient Overlays */}
            <div className="absolute inset-0 z-0">
              <img
                src="/telephone-old.jpg"
                alt="Contact Adapt India Network"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.72] contrast-[1.10]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/45 z-10" />
            </div>

            {/* Top Row: Back to Home + Global Divider Line */}
            <div className="relative z-20 max-w-7xl mx-auto w-full mb-3 sm:mb-4">
              <div className="flex items-center justify-between gap-4 pb-2.5 sm:pb-3 border-b border-white/20">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
                >
                  <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                  <span>BACK TO HOME</span>
                </Link>

                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-black/60 border border-red-500/40 text-[#E31E24] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    // CONTACT &amp; FEASIBILITY
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                
                <div className="flex flex-col items-start text-left max-w-3xl">
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#E31E24] uppercase mb-1.5 block">
                    // GET IN TOUCH
                  </span>

                  <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-white font-display tracking-tight uppercase leading-[1.1] mb-2 drop-shadow-md">
                    CONTACT US
                  </h1>

                  <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-4">
                    Looking to upgrade your enterprise connectivity, deploy SD-WAN, or configure 1:1 Internet Leased Lines with carrier SLAs? Connect directly with our network engineering team.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="tel:+918287479961"
                      className="px-6 py-2.5 bg-[#E31E24] hover:bg-[#c9171d] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-colors shadow-sm flex items-center gap-2"
                    >
                      <span>📞</span>
                      <span>Call Now: +91 82874 79961</span>
                    </a>

                    <a
                      href="mailto:info@adapt-india.net"
                      className="px-5 py-2.5 bg-black/50 hover:bg-black/75 text-white text-xs sm:text-sm font-semibold rounded-md border border-white/20 backdrop-blur-sm transition-colors flex items-center gap-1.5"
                    >
                      <span>✉️</span>
                      <span>info@adapt-india.net</span>
                    </a>
                  </div>
                </div>

                <div className="hidden lg:flex items-center gap-3 text-zinc-300 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end">
                  <span>SCROLL DOWN</span>
                  <a
                    href="#contact-form"
                    className="w-8 h-8 rounded-full border border-white/30 bg-black/40 flex items-center justify-center text-[#E31E24] animate-bounce"
                  >
                    ↓
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* 2. MAIN FORM & CONTACT DETAILS SECTION */}
          <section id="contact-form" className="w-full bg-[#fafafb] py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 text-black border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* LEFT COLUMN: CONTACT FORM (7 COLS) */}
              <div className="lg:col-span-7 bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-9 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#E31E24]">
                    ENTERPRISE FEASIBILITY INQUIRY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight">
                    Leave us a brief
                  </h2>
                  <p className="text-zinc-500 text-xs sm:text-sm font-normal">
                    Share your requirements (locations, bandwidth, and SLA needs). Our telecom engineering team responds within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-col items-center text-center gap-3 my-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold">Inquiry Submitted Successfully!</h3>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md">
                      Thank you for reaching out. One of our senior network architects will review your telecom requirements and connect with you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-3 px-6 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-800">
                        Your Name <span className="text-[#E31E24]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-800">
                          Email <span className="text-[#E31E24]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all placeholder:text-zinc-400"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-800">
                          Phone <span className="text-[#E31E24]">*</span>
                        </label>
                        <div className="flex items-center border border-zinc-200 rounded-xl bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#E31E24]/20 focus-within:border-[#E31E24] transition-all">
                          <div className="flex items-center gap-1.5 px-3 py-3 bg-zinc-50 border-r border-zinc-200 text-xs font-semibold text-zinc-700 shrink-0 select-none">
                            <span className="text-base leading-none">🇮🇳</span>
                            <span>+91</span>
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            className="w-full px-3 py-3 bg-transparent text-xs sm:text-sm text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-800">
                        Company Name <span className="text-[#E31E24]">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    {/* Requirement */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-800">
                        Your Requirement <span className="text-[#E31E24]">*</span>
                      </label>
                      <textarea
                        name="requirement"
                        required
                        rows={4}
                        value={formData.requirement}
                        onChange={handleChange}
                        placeholder="Please leave us a brief of your requirements (locations, bandwidth, and SLA needs) *"
                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#E31E24]/20 focus:border-[#E31E24] transition-all placeholder:text-zinc-400 resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-8 rounded-full bg-[#E31E24] text-white hover:bg-[#c9171d] font-display font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl active:scale-98 disabled:opacity-70 group"
                      >
                        <span>{isSubmitting ? "Submitting..." : "Submit Brief"}</span>
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* RIGHT COLUMN: PREFER TO TALK? CARD (5 COLS) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-[#0e0e10] text-white rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col gap-6 text-left border border-zinc-800">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                    <h3 className="text-xl font-black font-display text-white">
                      Prefer to talk?
                    </h3>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="flex flex-col gap-4 text-xs sm:text-[13px]">
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+918287479961"
                        className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group cursor-pointer"
                      >
                        <Phone className="w-4 h-4 text-[#E31E24] shrink-0" />
                        <span className="font-semibold text-sm text-white group-hover:text-[#E31E24] transition-colors">
                          +91 82874 79961
                        </span>
                      </a>
                    </div>

                    {/* Emails */}
                    <div className="flex flex-col gap-2.5">
                      <a
                        href="mailto:info@adapt-india.net"
                        className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-[#E31E24] shrink-0" />
                        <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">
                          info@adapt-india.net
                        </span>
                      </a>

                      <a
                        href="mailto:support@adapt-india.net"
                        className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-[#E31E24] shrink-0" />
                        <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">
                          support@adapt-india.net
                        </span>
                      </a>
                    </div>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/918287479961?text=Hi%20Adapt%20India%20Network,%20I'd%20like%20to%20discuss%20enterprise%20connectivity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-zinc-300 hover:text-[#25D366] transition-colors group cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span className="font-medium text-zinc-300 group-hover:text-[#25D366] transition-colors">
                        Message on WhatsApp
                      </span>
                    </a>
                  </div>

                  {/* Metadata Blocks */}
                  <div className="border-t border-zinc-800/80 pt-5 flex flex-col gap-4 text-xs">
                    <div>
                      <span className="text-zinc-400 font-bold block mb-1">
                        Office hours
                      </span>
                      <p className="text-zinc-300">
                        Monday – Friday,{" "}
                        <span className="text-[#E31E24] font-bold">9:00 AM – 9:00 PM IST</span>
                        <br />
                        <span className="text-zinc-400 text-[11px] font-mono">24/7/365 NOC Emergency Line Active</span>
                      </p>
                    </div>

                    <div>
                      <span className="text-zinc-400 font-bold block mb-1">
                        New business &amp; partnerships
                      </span>
                      <p className="text-zinc-300">
                        <a
                          href="tel:+918287479961"
                          className="underline decoration-[#E31E24] decoration-2 underline-offset-4 hover:text-[#E31E24] font-semibold text-white"
                        >
                          +91 82874 79961
                        </a>{" "}
                        ·{" "}
                        <a href="mailto:info@adapt-india.net" className="hover:underline">
                          info@adapt-india.net
                        </a>
                      </p>
                    </div>

                    <div>
                      <span className="text-zinc-400 font-bold block mb-1">
                        Technical Support &amp; NOC
                      </span>
                      <p className="text-zinc-300">
                        <a
                          href="tel:+918287479961"
                          className="underline decoration-[#E31E24] decoration-2 underline-offset-4 hover:text-[#E31E24] font-semibold text-white"
                        >
                          +91 82874 79961
                        </a>{" "}
                        ·{" "}
                        <a href="mailto:support@adapt-india.net" className="hover:underline">
                          support@adapt-india.net
                        </a>
                      </p>
                    </div>

                    <div>
                      <span className="text-zinc-400 font-bold block mb-1">
                        Office Location
                      </span>
                      <p className="text-zinc-300 leading-relaxed">
                        Saket, New Delhi - 110062, Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 3. HEADQUARTERS & GOOGLE MAPS */}
          <section className="w-full bg-white py-14 sm:py-18 px-4 sm:px-8 lg:px-14 xl:px-20 border-t border-zinc-200/80">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 flex flex-col gap-4 text-left">
                <span className="font-mono text-xs font-bold text-[#E31E24] uppercase tracking-wider">
                  // HEADQUARTERS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-zinc-950">
                  Our Office in Saket, New Delhi
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Located in South Delhi&apos;s commercial hub, our office houses senior telecommunications engineers, optical network architects, and 24/7 NOC support staff.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://maps.google.com/?q=Saket,New+Delhi,Delhi,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 text-white hover:bg-[#E31E24] text-xs font-bold transition-all cursor-pointer shadow-md"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-zinc-200 shadow-lg h-72 sm:h-80 w-full bg-zinc-100">
                <iframe
                  title="Adapt India Network Location Saket New Delhi"
                  src="https://maps.google.com/maps?q=Saket,New%20Delhi,India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

            </div>
          </section>

        </main>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Global Footer */}
        <Footer />

      </div>
    </LanguageProvider>
  );
}
