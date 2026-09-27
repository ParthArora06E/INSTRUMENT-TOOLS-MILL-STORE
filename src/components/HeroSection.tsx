"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { ChevronRight, ShieldCheck, Truck } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gray-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-navy/10 text-brand-navy font-semibold text-sm mb-6 border border-brand-navy/20">
              Trusted by Top Industries & Engineers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 leading-tight mb-6">
              Precision Measurement Tools for <span className="text-brand-red">Industrial Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Your premier B2B supplier for accurate measurement equipment, cutting tools, and electrical testing instruments. Wholesale & retail with PAN India delivery.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/products" className="bg-brand-navy hover:bg-brand-navy/90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-transform hover:scale-105 shadow-xl shadow-brand-navy/20 w-full sm:w-auto justify-center">
              Browse Products <ChevronRight className="w-5 h-5" />
            </Link>
            <a 
              href={generateWhatsAppLink("Hi, I want to get a quote for some tools.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border-2 border-brand-navy/10 hover:border-brand-navy text-brand-navy px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-transform hover:scale-105 shadow-sm w-full sm:w-auto justify-center"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
