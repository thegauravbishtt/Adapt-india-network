"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PlatformsScaleSection from "../components/PlatformsScaleSection";
import PartnersMarquee from "../components/PartnersMarquee";
import WhatWeDoSection from "../components/WhatWeDoSection";
import AboutUsSection from "../components/AboutUsSection";
import FeaturedWorkSection from "../components/FeaturedWorkSection";
import BlogsSection from "../components/BlogsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col relative pt-0 px-0 pb-0 w-full">
        {/* Header Navigation */}
        <Navbar />

        {/* Main Sections Flow */}
        <main className="flex flex-col justify-center relative z-10 w-full">
          <Hero />
          <PlatformsScaleSection />
          <PartnersMarquee />
          <AboutUsSection />
          <WhatWeDoSection />
          <FeaturedWorkSection />
          <BlogsSection />
          <TestimonialsSection />
          <NewsletterSection />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}
