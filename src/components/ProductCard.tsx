"use client";

import Image from "next/image";

import { Product } from "../data/products";
import { generateWhatsAppLink, getProductEnquiryMessage } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    setWhatsappUrl(generateWhatsAppLink(getProductEnquiryMessage(product)));
  }, [product]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300"
    >
      <div className="relative aspect-square w-full bg-white flex items-center justify-center p-6 overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-navy/5 text-brand-navy text-xs font-bold px-2 py-1 rounded-md">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col border-t border-gray-50">
        <div className="flex flex-col min-h-[4rem]">
          <h3 className="text-gray-900 font-heading font-bold text-[13px] sm:text-base md:text-lg leading-tight mb-1 sm:mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-[11px] sm:text-sm text-gray-500 mb-3 sm:mb-6 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
        
        <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-100 flex flex-col">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-center py-3 rounded-lg text-sm font-bold transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
