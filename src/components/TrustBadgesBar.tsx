"use client";

import { Medal, Wrench, Package, ShieldCheck, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBadgesBar() {
  const badges = [
    { icon: <Medal className="w-8 h-8" />, title: "Accurate Instruments", desc: "Precision measurement tools from certified top-tier global brands." },
    { icon: <Wrench className="w-8 h-8" />, title: "Industrial Supplier", desc: "Trusted by engineers and factories for robust, heavy-duty equipment." },
    { icon: <Package className="w-8 h-8" />, title: "Bulk Orders", desc: "Special pricing and priority fulfillment for B2B wholesale orders." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Verified Quality", desc: "All tools are thoroughly tested for industrial standards before shipping." },
    { icon: <Settings className="w-8 h-8" />, title: "Expert Support", desc: "Comprehensive technical guidance and post-sales support." },
  ];

  return (
    <div id="why-choose-us" className="py-24 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-1 bg-brand-red"></span>
            <span className="text-brand-navy font-bold tracking-widest uppercase text-xs">Our Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
            Engineered for Industrial Excellence
          </h2>
          <p className="mt-4 text-slate-600">
            We provide precision measurement and testing instruments tailored for rigorous B2B applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 flex flex-col items-start gap-5 hover:bg-slate-50 transition-colors group"
            >
              <div className="text-brand-navy group-hover:text-brand-red transition-colors">
                {badge.icon}
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-slate-900 mb-2">{badge.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[13px]">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
