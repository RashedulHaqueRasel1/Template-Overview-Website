import React from "react";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

const bestSellers = [
  { id: 1, name: "Elegant Dhakai Jamdani", price: "15,000", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Tangail Silk Saree", price: "8,500", image: "https://images.unsplash.com/photo-1621539207086-64687bc0029b?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Classic Cotton Print", price: "3,200", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Bridal Banarasi Red", price: "35,000", image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Blue Silk Elegance", price: "12,000", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Party Wear Net Saree", price: "9,800", image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Green Handloom Cotton", price: "4,500", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Golden Jamdani Pure", price: "22,000", image: "https://images.unsplash.com/photo-1621539207086-64687bc0029b?q=80&w=600&auto=format&fit=crop" },
];

const BestSellers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Best Sellers
          </h2>
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Our most loved sarees, chosen by women who appreciate authentic Bengali craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {bestSellers.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                <button className="absolute bottom-4 left-4 right-4 bg-white text-primary font-bold py-3 rounded-lg opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg hover:bg-secondary hover:text-white flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-primary opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white">
                  <Heart size={18} />
                </button>
              </div>
              <h3 className="font-heading text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-1">
                {product.name}
              </h3>
              <p className="font-body font-bold text-foreground">
                ৳{product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
