export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  slug: string;
  shortDescription: string;
}

export const products: Product[] = [
  { 
    id: "1", 
    name: "Digital Micrometer", 
    category: "Measuring Instruments",
    image: "/images/digital_micrometer.jpg", 
    slug: "digital-micrometer",
    shortDescription: "High-precision digital micrometer with LCD display."
  },
  { 
    id: "2", 
    name: "Vernier Caliper", 
    category: "Measuring Instruments",
    image: "/images/vernier_caliper.jpg", 
    slug: "vernier-caliper",
    shortDescription: "Classic stainless steel manual vernier caliper."
  },
  { 
    id: "3", 
    name: "Digital Vernier Caliper", 
    category: "Measuring Instruments",
    image: "/images/digital_vernier_caliper.jpg", 
    slug: "digital-vernier-caliper",
    shortDescription: "Digital caliper with high-contrast screen for quick readings."
  },
  { 
    id: "4", 
    name: "Digital Coating Thickness Gauge", 
    category: "Testing & Inspection",
    image: "/images/coating_thickness_gauge.jpg", 
    slug: "digital-coating-thickness-gauge",
    shortDescription: "Accurately measure paint and coating thickness."
  },
  { 
    id: "5", 
    name: "Lux Meter", 
    category: "Environmental Testing",
    image: "/images/lux_meter.jpg", 
    slug: "lux-meter",
    shortDescription: "Digital light intensity measuring instrument."
  },
  { 
    id: "6", 
    name: "Dial Thickness Gauge", 
    category: "Measuring Instruments",
    image: "/images/dial_thickness_gauge.jpg", 
    slug: "dial-thickness-gauge",
    shortDescription: "Mechanical dial gauge for fast thickness measurement."
  },
  { 
    id: "7", 
    name: "Wire Gauge", 
    category: "Measuring Instruments",
    image: "/images/wire_gauge.jpg", 
    slug: "wire-gauge",
    shortDescription: "Standard round metal wire and sheet gauge."
  },
  { 
    id: "8", 
    name: "Clamp Meter", 
    category: "Electrical Testing",
    image: "/images/clamp_meter.jpg", 
    slug: "clamp-meter",
    shortDescription: "Digital clamp meter for safe AC/DC current measurement."
  },
  { 
    id: "9", 
    name: "Multimeter", 
    category: "Electrical Testing",
    image: "/images/multimeter.jpg", 
    slug: "multimeter",
    shortDescription: "Versatile digital multimeter for all electrical diagnostics."
  },
  { 
    id: "10", 
    name: "HSS Round Die", 
    category: "Cutting & Threading",
    image: "/images/hss_round_die.jpg", 
    slug: "hss-round-die",
    shortDescription: "High-speed steel round die for external threading."
  },
  { 
    id: "11", 
    name: "HSS Tap", 
    category: "Cutting & Threading",
    image: "/images/hss_tap.jpg", 
    slug: "hss-tap",
    shortDescription: "High-speed steel tap for internal threading."
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
