import { Product } from "@/data/products";

export const WHATSAPP_NUMBER = "917208358851";

export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getProductEnquiryMessage(product: Product): string {
  return `Hi, I want to buy the *${product.name}*. Please share details like price and availability.`;
}
