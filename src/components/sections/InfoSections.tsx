import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw, Award } from "lucide-react";

export const PromotionalBanner = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
        <Image
          src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"
          alt="Wedding Collection"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center p-8 md:p-20">
          <div className="max-w-lg text-white">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block">
              Special Offer
            </span>
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Flat 40% Off
            </h2>
            <p className="font-heading text-2xl md:text-3xl mb-8 text-cream/90">
              On Wedding Collection
            </p>
            <Link
              href="#"
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 inline-block"
            >
              Shop the Sale
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-secondary" />,
      title: "Premium Quality",
      desc: "Carefully curated fabrics and intricate weaves for a luxury feel.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
      title: "Authentic Handmade",
      desc: "Directly from the looms of skilled Bangladeshi artisans.",
    },
    {
      icon: <Truck className="w-10 h-10 text-secondary" />,
      title: "Fast Delivery",
      desc: "Reliable and quick shipping across Bangladesh and beyond.",
    },
    {
      icon: <RotateCcw className="w-10 h-10 text-secondary" />,
      title: "Easy Exchange",
      desc: "Hassle-free exchange policy if you're not completely satisfied.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose Traditional Haat?
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl border border-border/50 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
