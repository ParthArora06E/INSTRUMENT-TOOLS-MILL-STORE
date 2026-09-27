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
    <main className="flex min-h-screen flex-col justify-between w-full bg-gray-50 pt-32">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy mb-4">
            Our Complete Inventory
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality industrial tools. Use the categories below to filter the products.
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
