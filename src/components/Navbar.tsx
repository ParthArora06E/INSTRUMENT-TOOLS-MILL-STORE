"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Search, Wrench } from "lucide-react";
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
    <>
      {/* Top utility bar */}
      <div className="bg-brand-navy text-white text-xs sm:text-sm py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 opacity-80 font-medium">
            <span className="flex items-center gap-2"><Wrench className="w-4 h-4" /> B2B Industrial Suppliers</span>
            <span>✓ PAN India Delivery</span>
            <span>✓ GST Invoicing</span>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <Link href="/contact" className="hover:text-brand-yellow transition-colors">Support</Link>
            <Link href="/contact" className="hover:text-brand-yellow transition-colors">Request Quote</Link>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4 sm:py-5 border-b border-gray-200'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-navy rounded flex items-center justify-center transform transition-transform group-hover:scale-105 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5 sm:w-6 sm:h-6">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                <circle cx="12" cy="12" r="4" />
                <path d="M14 14l6 6" stroke="var(--color-brand-red)" strokeWidth="3" />
                <path d="M15 9l5-5" stroke="var(--color-brand-red)" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-sm sm:text-xl leading-none tracking-tight text-brand-navy uppercase">Instrument</span>
              <span className="font-heading font-bold text-[10px] sm:text-xs leading-none text-brand-red tracking-widest mt-1 uppercase">Tools & Mill Store</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <ul className="flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[15px] font-semibold text-slate-700 hover:text-brand-red transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4 xl:gap-5 border-l-2 pl-4 xl:pl-6 border-slate-100">
              <div className="flex flex-col gap-1.5">
                <a href="tel:+917835835742" className="flex items-center gap-2 text-brand-navy hover:text-brand-red font-bold text-xs xl:text-sm transition-colors group">
                  <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand-red/10 transition-colors">
                    <Phone className="w-3 h-3 xl:w-3.5 xl:h-3.5" />
                  </div>
                  +91 78358 35742
                </a>
                <a 
                  href={generateWhatsAppLink("Hi, I want to inquire about your products.")}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-brand-navy hover:text-[#25D366] font-bold text-xs xl:text-sm transition-colors group"
                >
                  <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#25D366]/10 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-brand-navy group-hover:text-[#25D366] transition-colors">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  +91 72899 28179
                </a>
              </div>
            </div>
          </div>

          <button className="lg:hidden text-brand-navy p-2 hover:bg-slate-50 rounded" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-200 flex flex-col p-4 space-y-1 z-50">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-base font-semibold text-slate-800 p-3 hover:bg-slate-50 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <a href="tel:+917835835742" className="flex items-center gap-3 text-brand-navy hover:text-brand-red font-bold p-3 transition-colors">
              <Phone className="w-5 h-5 text-slate-400" />
              +91 78358 35742
            </a>
            <a 
              href={generateWhatsAppLink("Hi, I want to inquire about your products.")} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-brand-navy hover:text-[#25D366] font-bold p-3 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              +91 72899 28179
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
