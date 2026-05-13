import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Heart, Eye } from "lucide-react";

const products = [
  { id: 1, name: "Gold Border Jamdani", price: "12,500", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop", tag: "New" },
  { id: 2, name: "Tangail Handloom Cotton", price: "4,200", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop", tag: "Featured" },
  { id: 3, name: "Pure Rajshahi Silk", price: "18,000", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop", tag: "Premium" },
  { id: 4, name: "Wedding Special Katan", price: "25,000", image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=600&auto=format&fit=crop", tag: "Limited" },
];

const ProductCard = ({ product }: { product: any }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50">
    <div className="relative h-[450px] overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {product.tag && (
        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full z-10">
          {product.tag}
        </div>
      )}
      <button className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-primary opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-md hover:bg-white">
        <Heart size={18} />
      </button>
      
      {/* Quick Action Overlay */}
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <button className="bg-white text-primary p-4 rounded-full shadow-lg hover:bg-secondary hover:text-white transition-colors transform hover:scale-110">
          <ShoppingCart size={24} />
        </button>
        <button className="bg-white text-primary p-4 rounded-full shadow-lg hover:bg-secondary hover:text-white transition-colors transform hover:scale-110">
          <Eye size={24} />
        </button>
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-heading text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center justify-between">
        <span className="font-body font-bold text-lg text-foreground">
          ৳{product.price}
        </span>
        <button className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-secondary transition-colors">
          Quick Order
        </button>
      </div>
    </div>
  </div>
);

const FeaturedCollection = () => {
  return (
    <section className="py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Exclusive
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Collection
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-block border-2 border-primary text-primary px-12 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
          >
            Explore All Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
