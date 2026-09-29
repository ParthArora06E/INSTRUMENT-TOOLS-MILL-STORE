"use client";

import Image from "next/image";
import { Product } from "../data/products";
import { generateWhatsAppLink, getProductEnquiryMessage } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FileText, ArrowRight } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    setWhatsappUrl(generateWhatsAppLink(getProductEnquiryMessage(product)));
  }, [product]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-white border border-slate-200 hover:border-brand-navy/30 transition-all duration-300 relative rounded-sm h-full"
    >
      {/* Category Badge */}
      <div className="absolute top-3 left-3 right-3 z-10 overflow-hidden">
        <span className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold px-2 py-1 uppercase tracking-wider block truncate w-fit max-w-full">
          {product.category}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full bg-white flex items-center justify-center p-4 overflow-hidden border-b border-slate-100">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Quick View Overlay (Visual only, subtle B2B style) */}
        <div className="absolute inset-0 bg-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-5 flex-grow flex flex-col bg-slate-50/50 group-hover:bg-white transition-colors duration-300">
        <div className="flex flex-col mb-4">
          <span className="text-[11px] text-slate-500 font-mono mb-1 bg-slate-100 w-fit px-1.5 py-0.5 rounded-sm border border-slate-200">SKU: {product.id.padStart(4, '0')}</span>
          <h3 className="text-brand-navy font-heading font-bold text-[14px] sm:text-[15px] leading-tight mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
        
        {/* Footer actions */}
        <div className="mt-auto pt-4 border-t border-slate-200 flex flex-col gap-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-green-700 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> In Stock
            </span>
            <span className="text-xs text-slate-500 font-medium flex items-center gap-1 cursor-help" title="Contact for technical specifications">
              <FileText className="w-3.5 h-3.5" /> Specs
            </span>
          </div>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-slate-800 hover:bg-brand-red text-white text-center py-2 sm:py-2.5 rounded-sm text-[11px] sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 sm:gap-2 group/btn px-1"
          >
            Request Quote <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform flex-shrink-0" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
