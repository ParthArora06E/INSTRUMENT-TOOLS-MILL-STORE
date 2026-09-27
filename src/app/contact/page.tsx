"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `*New Enquiry from Website*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Interested In:* ${formData.product}\n*Message:* ${formData.message}`;
    const url = generateWhatsAppLink(whatsappMsg);
    window.open(url, "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col w-full bg-gray-50 pt-32">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-4">
            Contact & Enquiry
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for bulk pricing, technical specifications, or to place an order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="bg-brand-navy rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
            
            <h2 className="text-3xl font-heading font-bold mb-8 relative z-10">Get In Touch</h2>
            
            <ul className="space-y-8 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Office Address</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Bharat city<br/>
                    Ghazibad,<br/>
                    Uttar Pardesh
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-300">
                    <a href="tel:+917835835742" className="hover:text-white transition-colors block mb-1">Call: +91 78358 35742</a>
                    <a href="https://wa.me/917289928179" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">WhatsApp: +91 72899 28179</a>
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Support</h4>
                  <p className="text-gray-300">
                    <a href="mailto:instutoolmill@gmail.com" className="hover:text-white transition-colors">instutoolmill@gmail.com</a>
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                  <p className="text-gray-300">
                    Monday - Saturday<br/>
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">Send an Enquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="product" className="block text-sm font-bold text-gray-700 mb-2">Product Interested In</label>
                <input 
                  type="text" 
                  id="product"
                  value={formData.product}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors"
                  placeholder="e.g. Digital Micrometer, Bulk Order"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy transition-colors resize-none"
                  placeholder="Please let us know your requirements..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl"
              >
                Send Enquiry via WhatsApp <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloatButton />
    </main>
  );
}
