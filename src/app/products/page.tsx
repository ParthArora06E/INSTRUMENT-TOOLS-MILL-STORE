import ProductGrid from "@/components/ProductGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterBanner from "@/components/FooterBanner";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export const metadata = {
  title: "All Products | Instrument Tools & Mill Store",
  description: "Browse our complete catalog of precision measurement tools, electrical testing equipment, and industrial hardware.",
};

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full bg-slate-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-heading font-black text-brand-navy mb-4 tracking-tight uppercase">
            Product Catalogue
          </h1>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality industrial tools. Use the search or categories below to find specific items.
          </p>
        </div>
        
        <ProductGrid preview={false} />
      </div>

      <FooterBanner />
      <Footer />
      <WhatsAppFloatButton />
    </main>
  );
}
