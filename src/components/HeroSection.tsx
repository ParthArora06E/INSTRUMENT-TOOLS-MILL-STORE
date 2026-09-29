"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { ChevronRight, Settings, ShieldCheck, Ruler } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative pt-16 pb-16 md:pt-24 md:pb-32 overflow-hidden bg-brand-navy text-white">
      {/* Background Decor - Geometric & Technical */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        {/* Engineering grid pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Sharp accent shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red transform skew-x-12 translate-x-32 opacity-90 hidden lg:block"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-1 bg-brand-red"></span>
              <span className="text-brand-yellow font-bold text-sm tracking-widest uppercase">Trusted Industrial Supplier</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black leading-[1.1] mb-6">
              PRECISION MEASUREMENT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">TOOLS & EQUIPMENT</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Your premier B2B supplier for accurate measurement equipment, cutting tools, and electrical testing instruments. Wholesale & retail with guaranteed quality.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/products" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold text-lg flex items-center gap-2 transition-all w-full sm:w-auto justify-center">
              Browse Catalogue <ChevronRight className="w-5 h-5" />
            </Link>
            <a 
              href={generateWhatsAppLink("Hi, I want to get a quote for some tools.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded font-bold text-lg flex items-center gap-2 transition-all w-full sm:w-auto justify-center"
            >
              Request a Quote
            </a>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-brand-red" />
              <div>
                <p className="font-bold text-white text-sm">100% Genuine</p>
                <p className="text-xs text-slate-400">Authentic Equipment</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Ruler className="w-8 h-8 text-brand-red" />
              <div>
                <p className="font-bold text-white text-sm">High Precision</p>
                <p className="text-xs text-slate-400">Industrial Standards</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Settings className="w-8 h-8 text-brand-red" />
              <div>
                <p className="font-bold text-white text-sm">Expert Support</p>
                <p className="text-xs text-slate-400">Technical Assistance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
