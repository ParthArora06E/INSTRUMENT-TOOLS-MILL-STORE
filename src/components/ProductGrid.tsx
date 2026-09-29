"use client";

import { products, categories } from "../data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Filter } from "lucide-react";

export default function ProductGrid({ preview = false }: { preview?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const displayProducts = preview ? filteredProducts.slice(0, 8) : filteredProducts;

  return (
    <div className="w-full">
      {/* Catalogue Controls - B2B Industrial Style */}
      <div className="bg-slate-50 border border-slate-200 p-4 sm:p-6 rounded-sm mb-10 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search */}
          <div className="w-full lg:w-1/3">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Search Catalogue</label>
            <div className="relative">
              <input 
                type="text"
                placeholder="Enter product name or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy shadow-inner bg-white text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            </div>
          </div>
          
          {/* Categories */}
          <div className="w-full lg:w-2/3">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" /> Filter by Category
            </label>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveCategory("All")}
                className={`px-4 py-2 rounded-sm text-[13px] font-bold transition-all border ${activeCategory === "All" ? "bg-brand-navy text-white border-brand-navy" : "bg-white text-slate-600 border-slate-300 hover:border-brand-navy hover:text-brand-navy"}`}
              >
                All Products
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-sm text-[13px] font-semibold transition-all border ${activeCategory === cat ? "bg-brand-navy text-white border-brand-navy" : "bg-white text-slate-600 border-slate-300 hover:border-brand-navy hover:text-brand-navy"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Header */}
      <div className="flex justify-between items-center mb-6 pb-2 border-b-2 border-slate-100">
        <h3 className="font-heading font-bold text-xl text-brand-navy">
          {activeCategory === "All" ? "Full Catalogue" : activeCategory}
        </h3>
        <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-sm">
          {filteredProducts.length} Results
        </span>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        <AnimatePresence>
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProducts.length === 0 && (
        <div className="w-full py-20 text-center border-2 border-dashed border-slate-200 rounded-sm">
          <p className="text-slate-500 font-semibold mb-2">No matching products found.</p>
          <button onClick={() => {setSearchQuery(""); setActiveCategory("All");}} className="text-brand-red font-bold hover:underline">Clear all filters</button>
        </div>
      )}
      
      {preview && (
        <div className="mt-12 text-center">
          <Link href="/products" className="inline-flex items-center gap-2 bg-brand-navy hover:bg-slate-800 text-white px-8 py-4 rounded-sm font-bold transition-colors shadow-sm">
            View Complete Catalogue <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  );
}
