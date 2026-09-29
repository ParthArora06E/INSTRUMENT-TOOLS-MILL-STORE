"use client";

import { generateWhatsAppLink } from "@/lib/whatsapp";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function FooterBanner() {
  return (
    <div className="w-full bg-slate-100 py-16 md:py-24 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-brand-navy p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
          {/* Decorative lines */}
          <div className="absolute top-0 right-0 w-32 h-full opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)' }}></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-red"></div>

          <div className="relative z-10 text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white mb-3">
              EQUIP YOUR FACILITY TODAY
            </h2>
            <p className="text-slate-300 text-[15px] md:text-base max-w-lg">
              Contact our procurement team for bulk pricing, technical specifications, and custom requirements.
            </p>
          </div>
          
          <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
            <a 
              href={generateWhatsAppLink("Hi, I want to get a quote for some tools.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-bold transition-transform hover:scale-105 shadow-md w-full md:w-auto"
            >
              <MessageSquare className="w-5 h-5" />
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
