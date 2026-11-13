"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PlatformsScaleSection from "../components/PlatformsScaleSection";
import PartnersMarquee from "../components/PartnersMarquee";
import EndToEndServicesSection from "../components/EndToEndServicesSection";
import DigitalTransformationSection from "../components/DigitalTransformationSection";
import EnterpriseSolutionsTabsSection from "../components/EnterpriseSolutionsTabsSection";
import BlogsSection from "../components/BlogsSection";
import ProvenResultsReviewsSection from "../components/ProvenResultsReviewsSection";
import HomeFAQSection from "../components/HomeFAQSection";
import BuildFoundationCTA from "../components/BuildFoundationCTA";
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
          <DigitalTransformationSection />
          <EnterpriseSolutionsTabsSection />
          <EndToEndServicesSection />
          <BlogsSection />
          <ProvenResultsReviewsSection />
          <HomeFAQSection />
          <BuildFoundationCTA />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}
