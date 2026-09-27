"use client";

import { Medal, Wrench, Package, Home, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBadgesBar() {
  const badges = [
    { icon: <Medal className="w-8 h-8 text-brand-yellow" />, title: "Accurate Instruments", desc: "Precision measurement tools from certified top-tier global brands." },
    { icon: <Wrench className="w-8 h-8 text-brand-red" />, title: "Industrial Supplier", desc: "Trusted by engineers and factories for robust, heavy-duty equipment." },
    { icon: <Package className="w-8 h-8 text-brand-green" />, title: "Bulk Orders Accepted", desc: "Special pricing and priority fulfillment for B2B wholesale orders." },
    { icon: <Home className="w-8 h-8 text-orange-500" />, title: "Fast Delivery Service", desc: "Reliable and fully insured PAN India shipping directly to your site." },
    { icon: <Settings className="w-8 h-8 text-purple-500" />, title: "Repair & Service", desc: "Comprehensive after-sales support and calibration services available." },
  ];

  return (
    <div id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Dedicated to Industrial Quality
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center md:items-start md:text-left gap-3 md:gap-4 hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="p-3 md:p-4 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform">
                {badge.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm sm:text-base md:text-xl text-gray-900 mb-1 md:mb-2">{badge.title}</h3>
                <p className="text-gray-500 leading-snug md:leading-relaxed text-[11px] sm:text-xs md:text-sm">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
