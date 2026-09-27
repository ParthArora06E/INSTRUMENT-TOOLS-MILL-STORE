import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureStrip from "@/components/FeatureStrip";
import ProductGrid from "@/components/ProductGrid";
import AlsoAvailableBox from "@/components/AlsoAvailableBox";
import HindiTaglineStrip from "@/components/HindiTaglineStrip";
import TrustBadgesBar from "@/components/TrustBadgesBar";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full bg-white">
      <Navbar />
      
      <HeroSection />
      <FeatureStrip />
      
      {/* Featured Products Section */}
      <div id="products" className="w-full py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">Our Inventory</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Featured Industrial Products
            </h2>
          </div>
          <ProductGrid preview={true} />
        </div>
      </div>
      
      <HindiTaglineStrip />
      
      <TrustBadgesBar />
      
      <AlsoAvailableBox />
      
      <FooterBanner />
      
      <Footer />
      
      <WhatsAppFloatButton />
    </main>
  );
}
