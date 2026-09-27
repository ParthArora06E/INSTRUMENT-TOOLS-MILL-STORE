export interface ProductSpec {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  specs: ProductSpec[];
}

export const products: Product[] = [
  { 
    id: "1", 
    name: "Digital Micrometer", 
    category: "Measuring Instruments",
    image: "/images/digital_micrometer.jpg", 
    slug: "digital-micrometer",
    shortDescription: "High-precision digital micrometer with LCD display.",
    fullDescription: "Ensure ultimate accuracy in your machining and engineering tasks with this premium digital micrometer. It features a large, easy-to-read LCD screen, absolute/incremental measurement modes, and a durable carbide-tipped measuring face.",
    specs: [
      { name: "Range", value: "0-25mm" },
      { name: "Resolution", value: "0.001mm" },
      { name: "Material", value: "Stainless Steel & Carbide" },
      { name: "Battery", value: "SR44/LR44 1.5V" }
    ]
  },
  { 
    id: "2", 
    name: "Vernier Caliper", 
    category: "Measuring Instruments",
    image: "/images/vernier_caliper.jpg", 
    slug: "vernier-caliper",
    shortDescription: "Classic stainless steel manual vernier caliper.",
    fullDescription: "A staple in any workshop, this manual vernier caliper provides reliable inside, outside, depth, and step measurements. Constructed from hardened stainless steel for long-lasting durability.",
    specs: [
      { name: "Range", value: "0-150mm" },
      { name: "Accuracy", value: "±0.02mm" },
      { name: "Material", value: "Hardened Stainless Steel" },
      { name: "Measurement Types", value: "Inside, Outside, Depth, Step" }
    ]
  },
  { 
    id: "3", 
    name: "Digital Vernier Caliper", 
    category: "Measuring Instruments",
    image: "/images/digital_vernier_caliper.jpg", 
    slug: "digital-vernier-caliper",
    shortDescription: "Digital caliper with high-contrast screen for quick readings.",
    fullDescription: "Combine the versatility of a traditional caliper with the speed of digital readout. Features zero setting at any position, metric/inch conversion, and smooth sliding action.",
    specs: [
      { name: "Range", value: "0-150mm / 0-6 inch" },
      { name: "Resolution", value: "0.01mm / 0.0005 inch" },
      { name: "Display", value: "LCD Screen" },
      { name: "Material", value: "Stainless Steel" }
    ]
  },
  { 
    id: "4", 
    name: "Digital Coating Thickness Gauge", 
    category: "Testing & Inspection",
    image: "/images/coating_thickness_gauge.jpg", 
    slug: "digital-coating-thickness-gauge",
    shortDescription: "Accurately measure paint and coating thickness.",
    fullDescription: "Ideal for automotive and industrial applications, this gauge instantly measures the thickness of non-magnetic coatings on steel or non-conductive coatings on non-ferrous metals.",
    specs: [
      { name: "Measuring Principle", value: "Magnetic Induction & Eddy Current" },
      { name: "Range", value: "0~1500um" },
      { name: "Resolution", value: "0.1um" },
      { name: "Calibration", value: "Zero calibration supported" }
    ]
  },
  { 
    id: "5", 
    name: "Lux Meter", 
    category: "Environmental Testing",
    image: "/images/lux_meter.jpg", 
    slug: "lux-meter",
    shortDescription: "Digital light intensity measuring instrument.",
    fullDescription: "Accurately measure illumination in workplaces, schools, and industrial environments. This lux meter features high accuracy, fast response time, and a detachable sensor.",
    specs: [
      { name: "Measuring Range", value: "0 to 200,000 Lux" },
      { name: "Accuracy", value: "±4% rdg ±0.5% f.s" },
      { name: "Sampling Rate", value: "2 times/second" },
      { name: "Sensor", value: "Silicon photoelectric diode" }
    ]
  },
  { 
    id: "6", 
    name: "Dial Thickness Gauge", 
    category: "Measuring Instruments",
    image: "/images/dial_thickness_gauge.jpg", 
    slug: "dial-thickness-gauge",
    shortDescription: "Mechanical dial gauge for fast thickness measurement.",
    fullDescription: "Perfect for measuring the thickness of paper, film, wire, sheet metal, and similar materials. The easy-to-read dial indicator provides quick and accurate readings.",
    specs: [
      { name: "Range", value: "0-10mm" },
      { name: "Graduation", value: "0.01mm" },
      { name: "Throat Depth", value: "30mm" },
      { name: "Anvil", value: "Flat ceramic/steel" }
    ]
  },
  { 
    id: "7", 
    name: "Wire Gauge", 
    category: "Measuring Instruments",
    image: "/images/wire_gauge.jpg", 
    slug: "wire-gauge",
    shortDescription: "Standard round metal wire and sheet gauge.",
    fullDescription: "A durable, round steel gauge used for determining the thickness of sheet metal and the diameter of wire. Markings are deeply etched for easy reading and longevity.",
    specs: [
      { name: "Standard", value: "SWG (Standard Wire Gauge)" },
      { name: "Range", value: "0-36 SWG" },
      { name: "Material", value: "Stainless Steel" },
      { name: "Markings", value: "Laser Etched" }
    ]
  },
  { 
    id: "8", 
    name: "Clamp Meter", 
    category: "Electrical Testing",
    image: "/images/clamp_meter.jpg", 
    slug: "clamp-meter",
    shortDescription: "Digital clamp meter for safe AC/DC current measurement.",
    fullDescription: "An essential tool for electricians and technicians. Allows for non-contact measurement of AC/DC current, plus voltage, resistance, and continuity testing.",
    specs: [
      { name: "AC Current", value: "Up to 400A / 600A" },
      { name: "AC/DC Voltage", value: "Up to 600V" },
      { name: "Jaw Opening", value: "30mm" },
      { name: "Safety Rating", value: "CAT III 600V" }
    ]
  },
  { 
    id: "9", 
    name: "Multimeter", 
    category: "Electrical Testing",
    image: "/images/multimeter.jpg", 
    slug: "multimeter",
    shortDescription: "Versatile digital multimeter for all electrical diagnostics.",
    fullDescription: "A robust and reliable digital multimeter designed for troubleshooting electrical issues. Features auto-ranging, data hold, and a backlit LCD display for dark environments.",
    specs: [
      { name: "DC Voltage", value: "Up to 1000V" },
      { name: "AC Voltage", value: "Up to 750V" },
      { name: "Resistance", value: "Up to 40MΩ" },
      { name: "Features", value: "Auto-range, True RMS, Diode Test" }
    ]
  },
  { 
    id: "10", 
    name: "HSS Round Die", 
    category: "Cutting & Threading",
    image: "/images/hss_round_die.jpg", 
    slug: "hss-round-die",
    shortDescription: "High-speed steel round die for external threading.",
    fullDescription: "Manufactured from premium High-Speed Steel (HSS) for superior hardness and wear resistance. Ideal for cutting new external threads or repairing damaged ones.",
    specs: [
      { name: "Material", value: "High-Speed Steel (HSS)" },
      { name: "Thread Standard", value: "Metric / UNC / UNF" },
      { name: "Usage", value: "External Threading" },
      { name: "Tolerance", value: "6g / 6e" }
    ]
  },
  { 
    id: "11", 
    name: "HSS Tap", 
    category: "Cutting & Threading",
    image: "/images/hss_tap.jpg", 
    slug: "hss-tap",
    shortDescription: "High-speed steel tap for internal threading.",
    fullDescription: "Precision-ground HSS taps designed for creating accurate internal threads in a variety of materials including steel, aluminum, and cast iron.",
    specs: [
      { name: "Material", value: "High-Speed Steel (HSS)" },
      { name: "Type", value: "Straight Flute / Spiral Flute" },
      { name: "Usage", value: "Internal Threading" },
      { name: "Coating", value: "Uncoated / TiN Coated options" }
    ]
  }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
