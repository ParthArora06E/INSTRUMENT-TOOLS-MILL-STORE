"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Settings2 } from "lucide-react";

export default function AlsoAvailableBox() {
  const items = [
    "Bore Gauge", "Height Gauge", "Feeler Gauge", "Thread Gauge", 
    "Dial Indicator", "Measuring Tape", "Magnetic Stand", "Pressure Gauge", 
    "Torque Wrench", "Cutting Tools", "Power Tools", "Industrial Tools"
  ];

  return (
    <div className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <Settings2 className="w-8 h-8 text-slate-300 mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-navy tracking-tight">
            Complete Industrial Supply
          </h2>
          <p className="text-slate-500 mt-2 max-w-lg">
            Beyond our featured products, we maintain a vast inventory of specialized tools.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02, duration: 0.3 }}
              className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 border border-slate-200 hover:border-brand-navy hover:bg-white transition-all group cursor-default gap-2"
            >
              <span className="font-semibold text-[12px] sm:text-[13px] text-slate-700 group-hover:text-brand-navy leading-tight break-words">{item}</span>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-red transition-colors flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
