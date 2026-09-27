import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { ChevronRight, ArrowLeft, MessageSquare, CheckCircle } from "lucide-react";
import { generateWhatsAppLink, getProductEnquiryMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} | Instrument Tools & Mill Store`,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  const whatsappUrl = generateWhatsAppLink(getProductEnquiryMessage(product));

  return (
    <main className="flex min-h-screen flex-col w-full bg-gray-50 pt-28">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-brand-red transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand-navy font-semibold">{product.category}</span>
        </div>
        
        <Link href="/products" className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-red transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Image Gallery */}
            <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-gray-100 relative group aspect-square">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <span className="inline-block py-1 px-3 rounded-md bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider self-start mb-4">
                {product.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-xl text-gray-500 mb-8 font-medium">
                {product.shortDescription}
              </p>
              
              <div className="bg-green-50 text-brand-green px-4 py-3 rounded-lg flex items-center gap-3 font-semibold mb-8 border border-green-100">
                <CheckCircle className="w-5 h-5" /> In Stock & Ready for Delivery
              </div>
              
              <div className="prose prose-lg text-gray-600 mb-10 max-w-none">
                <p>{product.fullDescription}</p>
              </div>
              
              <div className="mt-auto pt-8 border-t border-gray-100">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-navy hover:bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-brand-red/30"
                >
                  <MessageSquare className="w-6 h-6" />
                  Enquire Price on WhatsApp
                </a>
                <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
                  We reply within 15 minutes during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Specifications Table */}
        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100 mb-16">
          <h2 className="text-2xl font-heading font-bold text-brand-navy mb-8">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {product.specs.map((spec, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-500 font-semibold w-1/3 bg-gray-50/50">{spec.name}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>

      <Footer />
      <WhatsAppFloatButton />
    </main>
  );
}
