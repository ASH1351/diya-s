import React from 'react';
import { salonData } from '../config/salonData';
import { Sparkles, Clock, Check, Calendar, ArrowRight } from 'lucide-react';

interface SignatureProps {
  onBookSignature: (name: string) => void;
}

export const SignatureExperience: React.FC<SignatureProps> = ({ onBookSignature }) => {
  const sig = salonData.signatureExperience;

  return (
    <section id="signature" className="relative py-28 sm:py-36 overflow-hidden bg-[#F2EDE1] scroll-mt-28">
      {/* Background Image with Warm Champagne Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={sig.image}
          alt="Signature Salon Experience"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-95 opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2EDE1] via-[#F2EDE1]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F2EDE1] via-transparent to-[#F2EDE1]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(222,158,50,0.12)_0%,transparent_70%)] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-[#DE9E32]/35 shadow-[0_20px_50px_rgba(180,140,80,0.1)]">
          {/* Top Gold Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DE9E32]/45 text-[#B87B1E] text-xs uppercase tracking-[0.25em] font-bold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{sig.tag}</span>
          </div>

          {/* Heading */}
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl lg:text-6xl text-[#1F1E1D] leading-[1.1] font-normal mb-4">
            {sig.title}
          </h2>

          <p className="font-['Montserrat',sans-serif] text-sm sm:text-base text-[#B87B1E] font-semibold tracking-wide mb-6">
            {sig.subtitle}
          </p>

          <p className="font-['Montserrat',sans-serif] text-sm sm:text-base text-[#54504B] font-normal leading-relaxed mb-8">
            {sig.description}
          </p>

          {/* Ritual Checklist */}
          <div className="space-y-3.5 mb-10">
            {sig.highlights.map((h, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C58925] to-[#F7C464] p-[1px] flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FAF8F5] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#B87B1E]" />
                  </div>
                </div>
                <span className="font-['Montserrat',sans-serif] text-xs sm:text-sm text-[#1F1E1D] font-medium">
                  {h}
                </span>
              </div>
            ))}
          </div>

          {/* Price & Booking Callout */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#DE9E32]/25">
            <div className="flex items-baseline gap-3">
              <span className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-gold-shimmer">
                {sig.price}
              </span>
              <span className="font-['Montserrat',sans-serif] text-sm text-[#807B74] line-through font-semibold">
                {sig.originalPrice}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#FAF6EE] text-[11px] font-bold text-[#B87B1E] border border-[#DE9E32]/40">
                Save 33%
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#54504B] font-['Montserrat',sans-serif] font-medium">
              <Clock className="w-4 h-4 text-[#B87B1E]" />
              <span>{sig.duration}</span>
            </div>
          </div>

          {/* Button CTA */}
          <div className="mt-8">
            <button
              onClick={() => onBookSignature(sig.title)}
              className="gold-foil-btn px-8 py-4 rounded-full font-['Montserrat',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#1F1E1D] flex items-center gap-3 shadow-xl cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-[#1F1E1D]" />
              <span>{sig.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#1F1E1D] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
