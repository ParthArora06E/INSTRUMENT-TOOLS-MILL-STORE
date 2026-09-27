import { Check } from "lucide-react";

export default function HindiTaglineStrip() {
  const taglines = [
    "All Types of Measuring Tools Available",
    "Wholesale & Retail Facility Available",
    "Good Quality at Reasonable Prices",
    "Online Orders Accepted"
  ];

  // We duplicate the array to create a seamless infinite scrolling effect
  const repeatedTaglines = [...taglines, ...taglines, ...taglines, ...taglines];

  return (
    <div className="w-full bg-brand-yellow text-brand-navy border-y-2 border-brand-red py-4 md:py-3 relative">
      {/* Mobile Stacked View */}
      <div className="flex flex-col gap-3 px-4 md:hidden">
        {taglines.map((tagline, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="bg-brand-green rounded-full p-0.5 shadow-sm flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="font-bold text-sm leading-tight">{tagline}</span>
          </div>
        ))}
      </div>

      {/* Desktop Marquee View */}
      <div className="hidden md:flex w-max animate-marquee hover:[animation-play-state:paused] overflow-hidden">
        {repeatedTaglines.map((tagline, index) => (
          <div key={index} className="flex items-center gap-3 px-6 whitespace-nowrap">
            <div className="bg-brand-green rounded-full p-0.5 shadow-sm">
              <Check className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="font-bold text-base tracking-wide">{tagline}</span>
            <div className="h-5 w-[2px] bg-brand-navy/20 ml-6"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
