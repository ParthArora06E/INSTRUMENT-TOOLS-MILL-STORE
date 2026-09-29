import { CheckCircle2 } from "lucide-react";

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
    <div className="w-full bg-slate-900 text-slate-300 py-3 relative border-y border-brand-red/30 overflow-hidden">
      {/* Mobile Stacked View */}
      <div className="flex flex-col gap-2 px-4 md:hidden">
        {taglines.map((tagline, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span className="font-semibold text-xs tracking-wide">{tagline}</span>
          </div>
        ))}
      </div>

      {/* Desktop Marquee View */}
      <div className="hidden md:flex w-max animate-marquee hover:[animation-play-state:paused]">
        {repeatedTaglines.map((tagline, index) => (
          <div key={index} className="flex items-center gap-3 px-8 whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
            <span className="font-semibold text-sm tracking-widest uppercase">{tagline}</span>
            <div className="h-4 w-px bg-slate-700 ml-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
