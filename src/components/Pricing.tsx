import React from 'react';
import { salonData, type PackagePlan } from '../config/salonData';
import { Sparkles, Check, Crown, Flame, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPackage: (packageName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#FAF8F5] overflow-hidden scroll-mt-28">
      {/* Background glow behind center card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(222,158,50,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DE9E32]/35 text-[#B87B1E] text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-sm">
            <Crown className="w-3.5 h-3.5" />
            <span>Curated Spa Journeys</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl text-[#1F1E1D] leading-tight font-normal">
            Signature Bundles & <br />
            <span className="font-['Great_Vibes',cursive] text-gold-shimmer text-4xl sm:text-6xl italic inline-block mt-1">
              Family Packages
            </span>
          </h2>
          <div className="swash-divider">
            <span className="swash-line" />
            <img src="/assets/dw-logo-mark.png" alt="" className="w-6 h-6 object-contain opacity-80" />
            <span className="swash-line-reverse" />
          </div>
          <p className="font-['Montserrat',sans-serif] text-sm sm:text-base text-[#54504B] font-normal">
            Indulge in holistic therapies bundled together for maximum rejuvenation and unmatched value.
          </p>
        </div>

        {/* 3 Pure White Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {salonData.packages.map((pkg: PackagePlan) => {
            const isPop = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPop
                    ? 'bg-white border-2 border-[#DE9E32] shadow-[0_25px_60px_rgba(197,137,37,0.18)] lg:-translate-y-4'
                    : 'bg-white border border-[#DE9E32]/30 hover:border-[#DE9E32]/60 shadow-[0_10px_35px_rgba(180,140,80,0.08)]'
                }`}
              >
                {/* Most Popular Floating Ribbon */}
                {isPop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#C58925] via-[#DE9E32] to-[#F7C464] text-[11px] font-bold text-[#1F1E1D] uppercase tracking-[0.2em] shadow-lg flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-[#1F1E1D]" />
                    <span>Most Loved in Kolkata</span>
                  </div>
                )}

                <div>
                  {/* Package Title & Subtitle */}
                  <span className="font-['Montserrat',sans-serif] text-[11px] uppercase tracking-[0.2em] text-[#B87B1E] font-bold block mb-2">
                    {pkg.subtitle}
                  </span>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#1F1E1D] leading-tight">
                    {pkg.name}
                  </h3>

                  {/* Ideal For Snippet */}
                  <p className="font-['Montserrat',sans-serif] text-xs text-[#6E6A64] font-normal mt-2 pb-4 border-b border-[#DE9E32]/20">
                    {pkg.idealFor}
                  </p>

                  {/* Price Block */}
                  <div className="py-6 flex items-baseline gap-3">
                    <span className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-bold text-gold-shimmer">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="font-['Montserrat',sans-serif] text-sm text-[#807B74] line-through font-semibold">
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#FAF6EE] border border-[#DE9E32]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#B87B1E]" />
                        </div>
                        <span className="font-['Montserrat',sans-serif] text-xs sm:text-sm text-[#54504B] font-medium leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-4 rounded-full font-['Montserrat',sans-serif] text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 shadow-md ${
                      isPop
                        ? 'gold-foil-btn text-[#1F1E1D]'
                        : 'bg-[#FAF6EE] hover:bg-[#DE9E32] text-[#B87B1E] hover:text-[#1F1E1D] border border-[#DE9E32]/40'
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Callout Banner (Pure White) */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-[#DE9E32]/35 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#FAF6EE] border border-[#DE9E32]/40 flex items-center justify-center flex-shrink-0 text-[#B87B1E]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1F1E1D]">
              Prices Are 100% Customisable
            </h4>
            <p className="font-['Montserrat',sans-serif] text-xs text-[#54504B] font-normal mt-0.5">
              Need to substitute a facial, add a grandparent's foot reflexology, or curate an intimate bridal party? Our salon manager will craft a bespoke quote for you over WhatsApp.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
