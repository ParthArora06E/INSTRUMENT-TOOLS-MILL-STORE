"use client";

import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function WhatsAppFloatButton() {
  const whatsappUrl = generateWhatsAppLink("Hi, I'm interested in your tools & measurement equipment.");

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      {/* Tooltip bubble */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="bg-white border shadow-xl rounded-2xl p-3 text-sm font-semibold w-48 mb-2 origin-bottom-right hidden sm:block text-gray-800"
      >
        Need help or a quote? Chat with us!
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r transform rotate-45"></div>
      </motion.div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-40"></span>
      </a>
    </div>
  );
}
