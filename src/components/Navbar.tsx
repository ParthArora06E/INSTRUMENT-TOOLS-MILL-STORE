"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Why Choose Us", href: "/#why-choose-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-6 h-6">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              <circle cx="12" cy="12" r="4" />
              <path d="M14 14l6 6" stroke="#c8102e" strokeWidth="3" />
              <path d="M15 9l5-5" stroke="#c8102e" strokeWidth="3" />
            </svg>
          </div>
          <div className="flex flex-col max-w-[160px] sm:max-w-none">
            <span className="font-heading font-bold text-[15px] sm:text-lg leading-tight tracking-tight text-brand-navy break-words">INSTRUMENT</span>
            <span className="font-heading font-bold text-[10px] sm:text-sm leading-tight text-brand-red break-words">TOOLS & MILL STORE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-semibold text-gray-700 hover:text-brand-red transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
            <a href="tel:+917835835742" className="flex items-center gap-2 text-brand-navy hover:text-brand-red font-semibold text-sm transition-colors">
              <Phone className="w-4 h-4" />
              +91 78358 35742
            </a>
            <a 
              href={generateWhatsAppLink("Hi, I want to inquire about your products.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-red hover:bg-brand-red/90 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <button className="md:hidden text-brand-navy flex items-center justify-center min-w-[44px] min-h-[44px]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-base font-semibold text-gray-800 border-b border-gray-50 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:+917835835742" className="flex items-center gap-2 text-brand-navy font-semibold pt-2">
            <Phone className="w-5 h-5" />
            +91 78358 35742
          </a>
          <a 
            href={generateWhatsAppLink("Hi, I want to inquire about your products.")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-red text-white px-4 py-4 rounded-lg text-center font-bold shadow-md w-full mt-2 min-h-[44px] flex items-center justify-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
