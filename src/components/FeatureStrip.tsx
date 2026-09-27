"use client";

import { ShoppingCart, Globe, FileText, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const features = [
    { icon: <ShoppingCart className="w-8 h-8" />, title: "Wholesale & Retail", desc: "Flexible order quantities for all." },
    { icon: <Globe className="w-8 h-8" />, title: "Online Orders", desc: "Easy ordering process via WhatsApp." },
    { icon: <FileText className="w-8 h-8" />, title: "GST Billing", desc: "100% genuine tax invoices provided." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Best Quality", desc: "Genuine products from trusted brands." },
    { icon: <Truck className="w-8 h-8" />, title: "Home Delivery", desc: "Fast shipping all over India." },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-auto snap-center flex flex-col items-center text-center p-4 sm:p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-red/30 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-brand-navy rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-sm group-hover:scale-110 group-hover:text-brand-red transition-all">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2 leading-tight">{feature.title}</h3>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
