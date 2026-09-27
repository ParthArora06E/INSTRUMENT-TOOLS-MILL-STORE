"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function AlsoAvailableBox() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    "Bore Gauge", "Height Gauge", "Feeler Gauge", "Thread Gauge", 
    "Dial Indicator", "Measuring Tape", "Magnetic Stand", "Pressure Gauge", 
    "Torque Wrench", "Cutting Tools", "Power Tools", "Industrial Tools"
  ];

  return (
    <div className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mb-6 md:mb-8 text-center">
          Also Available in Our Inventory
        </h2>
        
        {/* Mobile Accordion Toggle */}
        <div className="md:hidden text-center mb-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-navy/5 text-brand-navy font-bold rounded-lg w-full min-h-[44px]"
          >
            {isOpen ? (
              <>View Less <ChevronUp className="w-5 h-5" /></>
            ) : (
              <>View all {items.length} items <ChevronDown className="w-5 h-5" /></>
            )}
          </button>
        </div>

        {/* List Container */}
        <div className={`md:block ${isOpen ? 'block' : 'hidden md:block'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                className="flex items-start gap-2 px-4 py-3 md:px-5 md:py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-semibold text-sm md:hover:bg-brand-navy md:hover:text-white md:hover:border-brand-navy md:hover:-translate-y-1 transition-all cursor-default shadow-sm group"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0 mt-[-1px] group-hover:text-white transition-colors md:hidden md:group-hover:block" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
