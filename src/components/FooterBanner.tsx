"use client";

import { generateWhatsAppLink } from "@/lib/whatsapp";
import { MessageSquare } from "lucide-react";

export default function FooterBanner() {
  return (
    <div className="w-full bg-brand-navy py-16 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-6">
          Ready to equip your facility with<br className="hidden md:block"/> the best industrial tools?
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Contact our team today for a custom quote, bulk discounts, or technical support.
        </p>
        
        <a 
          href={generateWhatsAppLink("Hi, I want to get a quote for some tools.")}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex sm:inline-flex justify-center items-center gap-3 bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl shadow-brand-red/30 w-full sm:w-auto"
        >
          <MessageSquare className="w-6 h-6" />
          Get a Quote on WhatsApp
        </a>
      </div>
    </div>
  );
}
