"use client";

import { ShoppingCart, Globe, FileText, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const features = [
    { icon: <ShoppingCart className="w-6 h-6" />, title: "Wholesale & Retail", desc: "Flexible order quantities." },
    { icon: <Globe className="w-6 h-6" />, title: "Online Orders", desc: "Easy ordering process." },
    { icon: <FileText className="w-6 h-6" />, title: "GST Billing", desc: "100% genuine tax invoices." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Best Quality", desc: "Genuine trusted brands." },
    { icon: <Truck className="w-6 h-6" />, title: "Home Delivery", desc: "Fast shipping all over India." },
  ];

  return (
    <div className="bg-brand-navy border-y border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto snap-x snap-mandatory divide-x divide-slate-800 lg:grid lg:grid-cols-5 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-[60vw] sm:w-[40vw] lg:w-auto snap-center flex items-center gap-4 p-6 group hover:bg-white/5 transition-colors"
            >
              <div className="text-brand-red group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-white tracking-wide">{feature.title}</h3>
                <p className="text-[11px] text-slate-400 mt-1">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
