"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CategoryGrid from "@/components/sections/CategoryGrid";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import BestSellers from "@/components/sections/BestSellers";
import { PromotionalBanner, WhyChooseUs } from "@/components/sections/InfoSections";
import { NewArrivals, ExclusiveCollection } from "@/components/sections/Collections";
import { CustomerReviews, InstagramGallery, FAQ, Footer } from "@/components/sections/FooterAndSocial";
import { MessageCircle, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      
      <div className="space-y-0">
        <CategoryGrid />
        <FeaturedCollection />
        <BestSellers />
        <PromotionalBanner />
        <NewArrivals />
        <ExclusiveCollection />
        <WhyChooseUs />
        <CustomerReviews />
        <InstagramGallery />
        <FAQ />
      </div>
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+8801948422901"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute left-16 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-border">
          Order via WhatsApp
        </span>
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-2xl transition-all duration-500 hover:bg-secondary",
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </main>
  );
}
