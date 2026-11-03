import React from 'react';
import { salonData } from '../config/salonData';
import { ShieldCheck, Sparkles, Heart, Award, Clock, Coins } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#B87B1E]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#B87B1E]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#B87B1E]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#B87B1E]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#B87B1E]" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-[#B87B1E]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#B87B1E]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#FAF8F5] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(222,158,50,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DE9E32]/35 text-[#B87B1E] text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Diya's World Promise</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl text-[#1F1E1D] leading-tight font-normal">
            Why Kolkata Families <br />
            <span className="font-['Great_Vibes',cursive] text-gold-shimmer text-4xl sm:text-6xl italic inline-block mt-1">
              Trust Our Salon
            </span>
          </h2>
          <div className="swash-divider">
            <span className="swash-line" />
            <img src="/assets/dw-logo-mark.png" alt="" className="w-6 h-6 object-contain opacity-80" />
            <span className="swash-line-reverse" />
          </div>
          <p className="font-['Montserrat',sans-serif] text-sm sm:text-base text-[#54504B] font-normal">
            We don't believe in generic assembly-line salon chairs. Every detail of our sanctuary is engineered around dignity, comfort, and uncompromising results.
          </p>
        </div>

        {/* 6 Grid Feature Cards in Pure White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {salonData.whyChooseUs.map((feature, idx) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-3xl bg-white hover:bg-[#FFFEFC] border border-[#DE9E32]/25 hover:border-[#DE9E32]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_6px_25px_rgba(180,140,80,0.07)] hover:shadow-[0_15px_40px_rgba(180,140,80,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with Warm Gold Glow */}
                <div className="w-14 h-14 rounded-2xl bg-[#FAF6EE] border border-[#DE9E32]/35 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-[#DE9E32] transition-all duration-300">
                  {getFeatureIcon(feature.icon)}
                </div>

                {/* Feature Title */}
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1F1E1D] group-hover:text-[#B87B1E] transition-colors leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-['Montserrat',sans-serif] text-xs sm:text-sm text-[#54504B] font-normal leading-relaxed mt-3">
                  {feature.description}
                </p>
              </div>

              {/* Bottom decorative subtle indicator */}
              <div className="mt-6 pt-4 border-t border-[#DE9E32]/15 flex items-center justify-between text-[11px] text-[#807B74] font-['Montserrat',sans-serif]">
                <span>0{idx + 1} // Standard</span>
                <span className="text-[#B87B1E] font-semibold group-hover:translate-x-1 transition-transform">
                  ★ Guaranteed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
