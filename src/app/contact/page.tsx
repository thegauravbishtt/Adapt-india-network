"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
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
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    companyName: "",
    service: "",
    budget: "",
    requirement: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const servicesList = [
    "Choose Service",
    "SEO & Search Optimization",
    "Google & Meta Ads (PPC)",
    "Marketing & Workflow Automation",
    "AI & Data Automation",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design & Branding",
    "Cloud & DevOps Infrastructure",
    "Enterprise Software",
    "Content Marketing & Social Media",
    "Others / Custom Requirements",
  ];

  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const inrBudgetList = [
    "Select Budget (Optional)",
    "₹50,000 – ₹1 Lakh",
    "₹1 Lakh – ₹3 Lakhs",
    "₹3 Lakhs – ₹5 Lakhs",
    "₹5 Lakhs – ₹10 Lakhs",
    "₹10 Lakhs – ₹25 Lakhs",
    "₹25 Lakhs+",
  ];

  const usdBudgetList = [
    "Select Budget (Optional)",
    "$600 – $1,200",
    "$1,200 – $3,500",
    "$3,500 – $7,000",
    "$7,000 – $15,000",
    "$15,000 – $30,000",
    "$30,000+",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

      const data = await res.json();

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
        service: "",
        budget: "",
        requirement: "",
      });
    } catch (err: any) {
      console.error("[Contact Form Submit Error]:", err);
      setErrorMessage(
        err.message ||
          "An unexpected error occurred. Please try again or reach out directly at owlioworks@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-clip relative w-full select-none">
        {/* Viewfinder L-shaped Corner Markings */}
        <div className="fixed top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-zinc-300 pointer-events-none z-30"></div>
        <div className="fixed top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-zinc-300 pointer-events-none z-30"></div>
        <div className="fixed bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-zinc-300 pointer-events-none z-30"></div>
        <div className="fixed bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-zinc-300 pointer-events-none z-30"></div>

        {/* Global Navigation */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 w-full">
          
          {/* 1. HERO BANNER (Clean Standard Layout) */}
          <section className="relative w-full text-white pt-7 sm:pt-10 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden border-b border-zinc-800">
            
            {/* Background Image: Old Vintage Telephone with Clear Directional Gradient */}
            <div className="absolute inset-0 z-0">
              <img
                src="/telephone-old.jpg"
                alt="Contact Owlio Works Vintage Telephone"
                className="w-full h-full object-cover object-center scale-100 filter brightness-[0.78] contrast-[1.08]"
              />
              {/* Directional gradient to keep photo vibrant on right while left text is readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-black/40 z-10"></div>
            </div>

            {/* Top Row: Back to Home + Global Divider Line */}
            <div className="relative z-20 max-w-7xl mx-auto w-full mb-6 sm:mb-8">
              <div className="flex items-center justify-between gap-4 pb-3 sm:pb-4 border-b border-white/20">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-mono font-bold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors group cursor-pointer"
                >
                  <span className="transition-transform group-hover:-translate-x-1 duration-200">←</span>
                  <span>BACK TO HOME</span>
                </Link>

                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-black/60 border border-zinc-700/80 text-[#fbea3d] font-mono text-[11px] sm:text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                    // CONTACT
                  </span>
                </div>
              </div>
            </div>

            {/* Center Content: Clean Title + Scroll Down Indicator */}
            <div className="relative z-20 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                <div className="flex flex-col items-start text-left max-w-3xl">
                  {/* Category Pill Tagline */}
                  <span className="font-mono text-xs font-extrabold tracking-widest text-[#fbea3d] uppercase mb-2.5 block">
                    // GET IN TOUCH
                  </span>

                  {/* Display Title */}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase leading-[0.98] mb-3.5 drop-shadow-md">
                    CONTACT US
                  </h1>

                  <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-normal max-w-2xl leading-relaxed drop-shadow-sm">
                    Have a project in mind, need technical SEO consulting, or looking to scale your engineering? Connect directly with our team in Saket, New Delhi.
                  </p>
                </div>

                {/* Right Side: Scroll Down Indicator */}
                <div className="hidden lg:flex items-center gap-3 text-zinc-400 font-mono text-xs font-bold uppercase tracking-wider select-none shrink-0 self-end lg:self-center">
                  <span>SCROLL DOWN</span>
                  <span className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-[#fbea3d] animate-bounce">
                    ↓
                  </span>
                </div>

              </div>
            </div>

          </section>

          {/* 2. MAIN FORM & CONTACT DETAILS SECTION */}
          <section className="w-full bg-[#fafafb] py-14 sm:py-20 px-4 sm:px-8 lg:px-14 xl:px-20 text-black border-b border-zinc-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* LEFT COLUMN: THE WHITE FORM CARD (7 COLS) */}
              <div className="lg:col-span-7 bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-9 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col gap-6 text-left">
                
                {/* Header */}
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-2xl sm:text-3xl font-black font-display text-zinc-950 tracking-tight">
                    Leave us a brief
                  </h2>
                  <p className="text-zinc-500 text-xs sm:text-sm font-normal">
                    Share your requirements and the services you&apos;re interested in.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center gap-4 animate-in fade-in zoom-in-95 duration-200 my-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-black font-display text-emerald-950">
                        Brief Received!
                      </h3>
                      <p className="text-emerald-800 text-xs sm:text-sm max-w-md">
                        Thank you for reaching out! Our engineering lead will review your project and get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2 px-5 py-2.5 bg-zinc-950 hover:bg-[#fbea3d] text-white hover:text-black text-xs font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                    {errorMessage && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-800 text-xs sm:text-sm flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <div className="flex-1 flex flex-col gap-1">
                          <p className="font-bold text-red-950">Unable to submit brief</p>
                          <p className="text-red-800 font-normal">{errorMessage}</p>
                          <p className="text-xs text-red-700 mt-1">
                            You can also email us directly at{" "}
                            <a
                              href="mailto:owlioworks@gmail.com"
                              className="font-bold underline hover:text-black"
                            >
                              owlioworks@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* 1. Your Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-800">
                        Your Name <span className="text-[#dfcc23]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-hidden focus:ring-2 focus:ring-[#fbea3d] focus:border-black transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    {/* 2. Email & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-800">
                          Email <span className="text-[#dfcc23]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-hidden focus:ring-2 focus:ring-[#fbea3d] focus:border-black transition-all placeholder:text-zinc-400"
                        />
                      </div>

                      {/* Phone with India Flag Selector */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-800">
                          Phone <span className="text-[#dfcc23]">*</span>
                        </label>
                        <div className="flex items-center border border-zinc-200 rounded-xl bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#fbea3d] focus-within:border-black transition-all">
                          <div className="flex items-center gap-1.5 px-3 py-3 bg-zinc-50 border-r border-zinc-200 text-xs font-semibold text-zinc-700 shrink-0 select-none">
                            <span className="text-base leading-none">🇮🇳</span>
                            <span>+91</span>
                            <span className="text-[10px] text-zinc-400">▾</span>
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

                    {/* 3. Company Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-800">
                        Company Name <span className="text-[#dfcc23]">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-hidden focus:ring-2 focus:ring-[#fbea3d] focus:border-black transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    {/* 4. Service & Estimated Budget Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-zinc-800">
                          Service
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-hidden focus:ring-2 focus:ring-[#fbea3d] focus:border-black transition-all appearance-none cursor-pointer pr-10"
                          >
                            {servicesList.map((svc, idx) => (
                              <option key={idx} value={idx === 0 ? "" : svc}>
                                {svc}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-500 text-xs">
                            ▾
                          </div>
                        </div>
                      </div>

                      {/* Estimated Budget with Currency Toggle */}
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-bold text-zinc-800 flex items-center gap-1">
                            <span>Estimated Budget</span>
                            <span className="text-[10px] sm:text-[11px] font-normal text-zinc-400">(Optional)</span>
                          </label>
                          {/* Currency Toggle (₹ INR / $ USD) */}
                          <div className="flex items-center bg-zinc-100 p-0.5 rounded-lg border border-zinc-200 text-[10px] sm:text-[11px] font-bold">
                            <button
                              type="button"
                              onClick={() => {
                                setCurrency("INR");
                                setFormData((p) => ({ ...p, budget: "" }));
                              }}
                              className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                                currency === "INR"
                                  ? "bg-zinc-950 text-[#fbea3d] shadow-2xs font-extrabold"
                                  : "text-zinc-600 hover:text-black"
                              }`}
                            >
                              ₹ INR
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setCurrency("USD");
                                setFormData((p) => ({ ...p, budget: "" }));
                              }}
                              className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                                currency === "USD"
                                  ? "bg-zinc-950 text-[#fbea3d] shadow-2xs font-extrabold"
                                  : "text-zinc-600 hover:text-black"
                              }`}
                            >
                              $ USD
                            </button>
                          </div>
                        </div>

                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-hidden focus:ring-2 focus:ring-[#fbea3d] focus:border-black transition-all appearance-none cursor-pointer pr-10"
                          >
                            {(currency === "INR" ? inrBudgetList : usdBudgetList).map((b, idx) => (
                              <option key={idx} value={idx === 0 ? "" : b}>
                                {b}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-500 text-xs">
                            ▾
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5. Your Requirement */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-zinc-800">
                        Your Requirement <span className="text-[#dfcc23]">*</span>
                      </label>
                      <textarea
                        name="requirement"
                        required
                        rows={4}
                        value={formData.requirement}
                        onChange={handleChange}
                        placeholder="Please leave us a brief of your requirements and the services you are interested in *"
                        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-hidden focus:ring-2 focus:ring-[#fbea3d] focus:border-black transition-all placeholder:text-zinc-400 resize-y"
                      ></textarea>
                    </div>

                    {/* 6. Submit Button (Direct 1-Click Submission, No Captcha) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-8 rounded-full bg-black text-[#fbea3d] hover:bg-[#fbea3d] hover:text-black border-2 border-black font-display font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 disabled:opacity-70 group"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-[#fbea3d] border-t-transparent rounded-full animate-spin"></span>
                            <span>Submitting Brief...</span>
                          </span>
                        ) : (
                          <>
                            <span>Submit Brief</span>
                            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>

              {/* RIGHT COLUMN: PREFER TO TALK & WHY BRANDS BUZZ (5 COLS) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* 1. DARK CARD: "Prefer to talk?" */}
                <div className="bg-[#0e0e10] text-white rounded-3xl p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col gap-6 text-left border border-zinc-800">
                  
                  <h3 className="text-xl font-black font-display text-white">
                    Prefer to talk?
                  </h3>

                  {/* Contact Methods List */}
                  <div className="flex flex-col gap-4 text-xs sm:text-[13px]">
                    {/* Phone */}
                    <a
                      href="tel:+917838240941"
                      className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-[#fbea3d] shrink-0" />
                      <span className="font-semibold text-sm text-white group-hover:text-[#fbea3d] transition-colors">
                        +91 78382 40941
                      </span>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:owlioworks@gmail.com"
                      className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-[#fbea3d] shrink-0" />
                      <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">
                        owlioworks@gmail.com
                      </span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/917838240941?text=Hi%20Owlio%20Works%20team,%20I'd%20like%20to%20discuss%20a%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-zinc-300 hover:text-[#25D366] transition-colors group cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">
                        Message on WhatsApp
                      </span>
                    </a>
                  </div>

                  <div className="border-t border-zinc-800/80 pt-5 flex flex-col gap-4 text-xs">
                    {/* Office Hours */}
                    <div>
                      <span className="text-zinc-400 font-bold block mb-1">
                        Office hours
                      </span>
                      <p className="text-zinc-300">
                        Monday – Friday, <span className="text-[#fbea3d] font-bold">9:00 AM – 9:00 PM IST</span>
                      </p>
                    </div>

                    {/* New Business & Partnerships */}
                    <div>
                      <span className="text-zinc-400 font-bold block mb-1">
                        New business &amp; partnerships
                      </span>
                      <p className="text-zinc-300">
                        <a href="tel:+917838240941" className="underline decoration-[#fbea3d] decoration-2 underline-offset-4 hover:text-[#fbea3d] font-semibold text-white">
                          +91 78382 40941
                        </a>{" "}
                        ·{" "}
                        <a href="mailto:owlioworks@gmail.com" className="hover:underline">
                          owlioworks@gmail.com
                        </a>
                      </p>
                    </div>

                    {/* Office Location */}
                    <div>
                      <span className="text-zinc-400 font-bold block mb-1">
                        Office Location
                      </span>
                      <p className="text-zinc-300 leading-relaxed">
                        Saket, New Delhi - 110062, Delhi, India
                      </p>
                    </div>

                    {/* Careers */}
                    <div>
                      <span className="text-zinc-400 font-bold block mb-1">
                        Careers
                      </span>
                      <p className="text-zinc-300">
                        <a href="tel:+917838240941" className="underline decoration-[#fbea3d] decoration-2 underline-offset-4 hover:text-[#fbea3d] font-semibold text-white">
                          +91-7838240941
                        </a>{" "}
                        ·{" "}
                        <a href="mailto:owlioworks@gmail.com" className="hover:underline">
                          owlioworks@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* 3. LOCATION & GOOGLE MAPS */}
          <section className="w-full bg-white py-14 sm:py-18 px-4 sm:px-8 lg:px-14 xl:px-20 border-t border-zinc-200/80">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4 text-left">
                <span className="font-mono text-xs font-bold text-[#8f7d00] uppercase tracking-wider">
                  // HEADQUARTERS
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-zinc-950">
                  Our Office in Saket, New Delhi
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Located in South Delhi's creative hub, our office is home to senior full-stack developers, SEO engineers, and brand strategists.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://maps.google.com/?q=Saket,New+Delhi,Delhi,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 text-[#fbea3d] text-xs font-bold hover:bg-[#fbea3d] hover:text-black border border-black transition-all cursor-pointer shadow-md"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-zinc-200 shadow-lg h-72 sm:h-80 w-full bg-zinc-100">
                <iframe
                  title="Owlio Works Location Saket New Delhi"
                  src="https://maps.google.com/maps?q=Saket,New%20Delhi,India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
