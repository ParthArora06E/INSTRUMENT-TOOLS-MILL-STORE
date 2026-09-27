import { Phone, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b-4 border-brand-red">
      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Logo and Branding */}
        <div className="flex items-center gap-4">
          {/* Logo Placeholder */}
          <div className="relative w-16 h-16 flex-shrink-0 bg-brand-navy rounded-full flex items-center justify-center">
            {/* Gear + Wrench icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-8 h-8">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              <circle cx="12" cy="12" r="4" />
              <path d="M14 14l6 6" stroke="#c8102e" strokeWidth="3" />
              <path d="M15 9l5-5" stroke="#c8102e" strokeWidth="3" />
            </svg>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight">
              <span className="text-brand-navy">Instrument</span>{" "}
              <span className="text-brand-red">Tools & Mill Store</span>
            </h1>
            <div className="bg-brand-navy text-white text-xs md:text-sm font-semibold uppercase px-3 py-1 inline-block mt-1 self-start rounded-r-md rounded-bl-md relative">
              <span className="absolute -left-1 top-0 bottom-0 w-1 bg-brand-red"></span>
              ALL TYPE TOOLS & MEASUREMENT EQUIPMENT
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-start text-sm font-medium">
          <a href="https://wa.me/917289928179" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500 font-bold uppercase">WhatsApp</span>
              <span className="font-bold">+91 72899 28179</span>
            </div>
          </a>
          
          <a href="tel:+917835835742" className="flex items-center gap-2 text-brand-navy hover:text-brand-red transition-colors">
            <Phone className="w-5 h-5" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500 font-bold uppercase">Call Us</span>
              <span className="font-bold">+91 78358 35742</span>
            </div>
          </a>
          
          <a href="mailto:instutoolmill@gmail.com" className="flex items-center gap-2 text-brand-navy hover:text-brand-red transition-colors">
            <Mail className="w-5 h-5" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500 font-bold uppercase">Email</span>
              <span className="font-bold">instutoolmill@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
