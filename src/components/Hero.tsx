import React from 'react';
import { salonData } from '../config/salonData';
import { Calendar, Sparkles, Users, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Cinematic Luminous Background Image with Soft Cream & Champagne Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/images/hero-salon.jpg"
          alt="Diya's World Salon Interior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-110 contrast-95 opacity-25"
        />
        {/* Layered White, Cream & Gold Atmospheric Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/60 via-[#FAF8F5]/85 to-[#FAF8F5]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,rgba(250,248,245,0.95)_100%)]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(222,158,50,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      {/* Subtle Background Watermark DW Monogram */}
      <div className="absolute right-[-8%] top-1/3 -translate-y-1/2 pointer-events-none opacity-[0.045] w-[750px] h-[750px] select-none hidden lg:block">
        <img
          src="/assets/dw-logo-mark.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Luxury Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#DE9E32]/45 backdrop-blur-md mb-6 shadow-[0_4px_18px_rgba(180,140,80,0.1)]">
          <Sparkles className="w-3.5 h-3.5 text-[#B87B1E]" />
          <span className="font-['Montserrat',sans-serif] text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#B87B1E] font-bold">
            Kolkata's Premier Family Beauty Sanctuary
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#1F1E1D] leading-[1.08] tracking-tight mb-4">
          Where Every Visit <br />
          <span className="font-['Great_Vibes',cursive] text-gold-shimmer font-normal italic inline-block mt-1 sm:mt-2 text-5xl sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_4px_15px_rgba(197,137,37,0.25)]">
            Feels Like Luxury
          </span>
        </h1>

        {/* Subheading & Story Snippet */}
        <p className="font-['Montserrat',sans-serif] text-sm sm:text-base md:text-lg text-[#54504B] max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
          {salonData.brand.subheading}
        </p>

        {/* Two CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 sm:mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto gold-foil-btn px-8 py-4 rounded-full font-['Montserrat',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#1F1E1D] flex items-center justify-center gap-3 cursor-pointer group shadow-lg"
          >
            <Calendar className="w-4 h-4 text-[#1F1E1D]" />
            <span>{salonData.brand.primaryCta}</span>
            <ArrowRight className="w-4 h-4 text-[#1F1E1D] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto gold-outline-btn px-8 py-4 rounded-full font-['Montserrat',sans-serif] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#B87B1E] flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
          >
            <span>Explore Services</span>
          </button>
        </div>

        {/* Floating Info Chips (Pure White with Gold Accent) */}
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#DE9E32]/25">
          <div className="glass-card px-4 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-transform hover:-translate-y-1 bg-white shadow-sm border border-[#DE9E32]/20">
            <Users className="w-4 h-4 text-[#B87B1E] flex-shrink-0" />
            <span className="font-['Montserrat',sans-serif] text-xs sm:text-sm font-semibold text-[#1F1E1D] tracking-wide">
              Family Friendly
            </span>
          </div>

          <div className="glass-card px-4 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-transform hover:-translate-y-1 bg-white shadow-sm border border-[#DE9E32]/20">
            <Sparkles className="w-4 h-4 text-[#B87B1E] flex-shrink-0" />
            <span className="font-['Montserrat',sans-serif] text-xs sm:text-sm font-semibold text-[#1F1E1D] tracking-wide">
              Premium Products
            </span>
          </div>

          <div className="glass-card px-4 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-transform hover:-translate-y-1 bg-white shadow-sm border border-[#DE9E32]/20">
            <Award className="w-4 h-4 text-[#B87B1E] flex-shrink-0" />
            <span className="font-['Montserrat',sans-serif] text-xs sm:text-sm font-semibold text-[#1F1E1D] tracking-wide">
              Expert Stylists
            </span>
          </div>

          <div className="glass-card px-4 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-transform hover:-translate-y-1 bg-white shadow-sm border border-[#DE9E32]/20">
            <ShieldCheck className="w-4 h-4 text-[#B87B1E] flex-shrink-0" />
            <span className="font-['Montserrat',sans-serif] text-xs sm:text-sm font-semibold text-[#1F1E1D] tracking-wide">
              Hospital Hygiene
            </span>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center">
          <a
            href="#trust"
            className="flex flex-col items-center text-[#807B74] hover:text-[#B87B1E] transition-colors group cursor-pointer"
            aria-label="Scroll down to trust section"
          >
            <span className="font-['Montserrat',sans-serif] text-[10px] tracking-[0.25em] uppercase mb-1 font-semibold">
              Scroll Down
            </span>
            <div className="w-6 h-9 rounded-full border border-[#DE9E32]/50 flex items-start justify-center p-1.5 shadow-[0_0_10px_rgba(200,138,38,0.1)] bg-white/70">
              <div className="w-1.5 h-2 bg-[#B87B1E] rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
