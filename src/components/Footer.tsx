import Link from "next/link";
import { Phone, Mail, MapPin, Wrench } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 pt-20 pb-24 sm:pb-12 border-t-4 border-brand-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-3 mb-6 opacity-90 hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Wrench className="text-brand-red w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-lg leading-none tracking-tight text-white uppercase">INSTRUMENT</span>
                <span className="font-heading font-bold text-xs leading-none text-brand-red mt-1 uppercase tracking-widest">TOOLS & MILL STORE</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-sm">
              Your premier destination for high-quality industrial measurement tools, cutting equipment, and testing instruments. PAN India wholesale and retail supply.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link href="/products" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">All Products</Link></li>
              <li><Link href="/#why-choose-us" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Our Capabilities</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block">Contact & Enquiry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
            <ul className="space-y-5">

              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                <a href="tel:+917835835742" className="text-sm text-slate-400 hover:text-white transition-colors">+91 78358 35742</a>
              </li>
              <li className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="https://wa.me/917289928179" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">+91 72899 28179</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
                <a href="mailto:instutoolmill@gmail.com" className="text-sm text-slate-400 hover:text-white transition-colors">instutoolmill@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 font-medium">
            &copy; {new Date().getFullYear()} Instrument Tools & Mill Store. All rights reserved.
          </p>
          <div className="text-xs text-slate-600 flex gap-6">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
