"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Instagram, Facebook, Twitter, Mail, MapPin, 
  Phone, Send, ChevronDown, ChevronUp, Star 
} from "lucide-react";
import { cn } from "@/lib/utils";

// Customer Reviews
export const CustomerReviews = () => {
  const reviews = [
    { id: 1, name: "Sumaiya Ahmed", text: "The Jamdani I bought for my sister's wedding was absolutely stunning. The quality is truly premium.", rating: 5 },
    { id: 2, name: "Farhana Islam", text: "Traditional Haat has the best collection of Tangail sarees. Very fast delivery and beautiful packaging.", rating: 5 },
    { id: 3, name: "Nabila Rahman", text: "I'm impressed by the authenticity. You can feel the craftsmanship in every thread. Highly recommended!", rating: 5 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-16">
          Voices of Elegance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-cream/20 p-10 rounded-[30px] border border-secondary/20 relative">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-body text-lg italic text-foreground/80 mb-8">
                "{review.text}"
              </p>
              <h4 className="font-heading text-xl font-bold text-primary">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Instagram Gallery
export const InstagramGallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1621539207086-64687bc0029b?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
            #TraditionalHaat <span className="text-secondary">on Instagram</span>
          </h2>
          <Link href="#" className="text-primary font-bold hover:text-secondary transition-colors">
            Follow Us
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer">
              <Image src={img} alt="Instagram post" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How do I place an order?", a: "You can order directly through our website or click the WhatsApp button to chat with our representative and place an order there." },
    { q: "What are the payment options?", a: "We accept Cash on Delivery (COD), bKash, Nagad, and all major Debit/Credit cards." },
    { q: "Do you offer international shipping?", a: "Yes, we ship our authentic sarees worldwide via DHL and FedEx. Shipping costs vary by destination." },
    { q: "What is your return/exchange policy?", a: "We offer an easy 7-day exchange policy if the product is unused and in its original packaging." },
  ];

  return (
    <section className="py-24 bg-cream/20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-secondary/10 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-cream/10 transition-colors"
              >
                <span className="font-heading text-xl font-bold text-primary">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-secondary" />}
              </button>
              <div className={cn("px-6 overflow-hidden transition-all duration-300 ease-in-out", openIndex === i ? "max-h-[500px] pb-6" : "max-h-0")}>
                <p className="font-body text-muted-foreground">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div>
          <h2 className="font-heading text-3xl font-bold mb-8">
            Traditional <span className="text-secondary">Haat</span>
          </h2>
          <p className="text-cream/70 mb-8 leading-relaxed">
            Traditional হাট – গ্রামের তাঁতীর ঘর থেকে সরাসরি আপনার ঘরে। Preserving the rich heritage of Bangladeshi handwoven sarees for the modern era.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors"><Twitter size={20} /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-xl font-bold mb-8 text-secondary">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-cream/70 hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#collection" className="text-cream/70 hover:text-white transition-colors">Collection</Link></li>
            <li><Link href="#new-arrival" className="text-cream/70 hover:text-white transition-colors">New Arrival</Link></li>
            <li><Link href="#about" className="text-cream/70 hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl font-bold mb-8 text-secondary">Contact Info</h4>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin className="text-secondary shrink-0" />
              <span className="text-cream/70 text-sm">Dhaka, Bangladesh</span>
            </li>
            <li className="flex gap-4">
              <Phone className="text-secondary shrink-0" />
              <span className="text-cream/70 text-sm">+880 1234 567 890</span>
            </li>
            <li className="flex gap-4">
              <Mail className="text-secondary shrink-0" />
              <span className="text-cream/70 text-sm">hello@traditionalhaat.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl font-bold mb-8 text-secondary">Newsletter</h4>
          <p className="text-cream/70 mb-6 text-sm">Subscribe to get special offers and first looks.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-secondary transition-colors text-white"
            />
            <button className="absolute right-2 top-2 bg-secondary text-white p-2.5 rounded-full hover:bg-white hover:text-primary transition-all">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t border-white/5 text-center">
        <p className="text-cream/40 text-sm">
          © {new Date().getFullYear()} Traditional Haat. All rights reserved. Built with ❤️ in Bangladesh.
        </p>
      </div>
    </footer>
  );
};
