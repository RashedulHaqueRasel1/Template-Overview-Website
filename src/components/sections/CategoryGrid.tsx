import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Tangail", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop", count: "120+ Products" },
  { name: "Jamdani", image: "https://images.unsplash.com/photo-1621539207086-64687bc0029b?q=80&w=600&auto=format&fit=crop", count: "85+ Products" },
  { name: "Silk", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop", count: "150+ Products" },
  { name: "Cotton", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop", count: "200+ Products" },
  { name: "Party Wear", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=600&auto=format&fit=crop", count: "95+ Products" },
  { name: "Bridal", image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=600&auto=format&fit=crop", count: "50+ Products" },
];

const CategoryGrid = () => {
  return (
    <section id="collection" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Shop by Category
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              Explore our diverse collection of traditional handwoven sarees, each telling a unique story of Bengali heritage.
            </p>
          </div>
          <Link href="#" className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
            View All Categories
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={cat.name}
              href={`#${cat.name.toLowerCase()}`}
              className="group relative h-[400px] overflow-hidden rounded-2xl bg-muted"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <span className="text-secondary font-medium text-sm mb-2 block transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {cat.count}
                </span>
                <h3 className="font-heading text-3xl font-bold text-white mb-2">
                  {cat.name}
                </h3>
                <div className="w-12 h-1 bg-secondary rounded-full transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
