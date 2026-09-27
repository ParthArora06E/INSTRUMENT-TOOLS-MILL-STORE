"use client";

import { products, categories } from "../data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductGrid({ preview = false }: { preview?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);
    
  const displayProducts = preview ? filteredProducts.slice(0, 8) : filteredProducts;

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button 
          onClick={() => setActiveCategory("All")}
          className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === "All" ? "bg-brand-navy text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-brand-navy hover:text-brand-navy"}`}
        >
          All Products
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? "bg-brand-navy text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-brand-navy hover:text-brand-navy"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
        <AnimatePresence>
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {preview && (
        <div className="mt-12 text-center">
          <Link href="/products" className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-red transition-colors text-lg border-b-2 border-transparent hover:border-brand-red pb-1">
            View All Products <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </div>
  );
}
