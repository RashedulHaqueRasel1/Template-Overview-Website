import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Traditional-cover.jpg"
          alt="Traditional Haat Luxury Saree"
          fill
          priority
          className="object-cover object-center scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent md:from-primary/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-2xl text-white">
          <div className="inline-block px-4 py-1.5 bg-secondary/80 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 animate-fade-in-up">
            Premium Bengali Heritage
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 animate-fade-in-up [animation-delay:200ms]">
            বাংলার ঐতিহ্য, <br />
            <span className="text-secondary italic font-medium">আপনার সৌন্দর্যে</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-cream/90 mb-10 max-w-lg animate-fade-in-up [animation-delay:400ms]">
            Discover the elegance of handcrafted sarees, woven with love and tradition from the heart of Bangladesh.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Link
              href="#collection"
              className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Shop Now
            </Link>
            <Link
              href="https://wa.me/+8801234567890"
              target="_blank"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <MessageCircle size={24} className="text-secondary" />
              <span>Order via WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-12 right-12 hidden lg:block animate-bounce-slow">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-secondary to-transparent mx-auto" />
        <span className="text-secondary text-xs tracking-[0.5em] uppercase vertical-text mt-4">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
