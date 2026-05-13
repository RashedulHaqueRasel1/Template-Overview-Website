import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export const NewArrivals = () => {
  const newSarees = [
    { id: 1, name: "Midnight Jamdani", price: "14,000", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Peacock Blue Silk", price: "16,500", image: "https://images.unsplash.com/photo-1621539207086-64687bc0029b?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Floral Cotton Handloom", price: "5,200", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <section id="new-arrival" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              New Arrivals
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-lg">
              Fresh from the looms. Be the first to own our latest handcrafted designs.
            </p>
          </div>
          <Link href="#" className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-secondary transition-all">
            See All New Items
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {newSarees.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-secondary text-white text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                  Just In
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                {item.name}
              </h3>
              <p className="font-body text-xl font-bold text-foreground">
                ৳{item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ExclusiveCollection = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block">
            Signature Pieces
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            Exclusive Collection
          </h2>
          <p className="text-cream/70 max-w-xl mx-auto">
            Limited edition masterpieces that define luxury and Bengali heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="group relative h-[600px] md:h-[700px] rounded-[40px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1200&auto=format&fit=crop"
              alt="Bridal Exclusive"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                The Bridal Heirloom
              </h3>
              <p className="text-cream/80 text-lg mb-8 max-w-md">
                An intricate Jamdani masterpiece with real gold-plated threads, taking 6 months to weave.
              </p>
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white hover:text-primary transition-all">
                <ShoppingBag size={20} />
                Inquire Now
              </button>
            </div>
          </div>

          <div className="group relative h-[600px] md:h-[700px] rounded-[40px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"
              alt="Silk Exclusive"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Vintage Silk Revival
              </h3>
              <p className="text-cream/80 text-lg mb-8 max-w-md">
                Experience the magic of pure Rajshahi silk, updated with modern motifs for the contemporary woman.
              </p>
              <button className="bg-secondary text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white hover:text-primary transition-all">
                <ShoppingBag size={20} />
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
