import React from 'react';
import { salonData } from '../config/salonData';
import { Sparkles, Award, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#FAF8F5] overflow-hidden scroll-mt-28">
      {/* Background delicate radial gold glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(222,158,50,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(197,137,37,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Arched Image Frame with Offset Gold Border */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Offset Decorative Gold Border */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[160px] rounded-b-3xl border-2 border-[#DE9E32]/45 -z-0 pointer-events-none transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

            {/* Main Arched Image Container */}
            <div className="relative z-10 w-full max-w-md h-[460px] sm:h-[520px] rounded-t-[160px] rounded-b-3xl overflow-hidden shadow-[0_20px_50px_rgba(180,140,80,0.16)] border border-[#DE9E32]/35 bg-white">
              <img
                src={salonData.about.image}
                alt="Diya's World Salon Hospitality"
                className="w-full h-full object-cover object-center filter brightness-100 contrast-100 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Luxury Stamp / Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#DE9E32]/35 shadow-xl flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C58925] to-[#F7C464] p-0.5 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FAF8F5] flex items-center justify-center">
                    <img
                      src="/assets/dw-logo-mark.png"
                      alt="DW"
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#1F1E1D] leading-tight">
                    12+ Years of Revered Care
                  </h4>
                  <p className="font-['Montserrat',sans-serif] text-[10px] text-[#B87B1E] tracking-wider uppercase font-semibold">
                    Trusted by 18,500+ Kolkata Families
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Three Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DE9E32]/40 text-[#B87B1E] text-xs uppercase tracking-[0.2em] font-bold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{salonData.about.badge}</span>
            </div>

            {/* Editorial Heading with Script Accent */}
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl text-[#1F1E1D] leading-[1.15] font-normal mb-6">
              {salonData.about.title} <br />
              <span className="font-['Great_Vibes',cursive] text-gold-shimmer text-4xl sm:text-5xl md:text-6xl inline-block mt-1 font-normal italic">
                {salonData.about.titleAccent}
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 font-['Montserrat',sans-serif] text-sm sm:text-base text-[#54504B] font-normal leading-relaxed mb-8">
              {salonData.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Three Pillars (Pure White Cards with Soft Shadow) */}
            <div className="w-full space-y-4 mb-8">
              {salonData.about.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-white border border-[#DE9E32]/25 hover:border-[#DE9E32]/60 shadow-[0_4px_20px_rgba(180,140,80,0.06)] hover:shadow-[0_8px_30px_rgba(180,140,80,0.12)] transition-all flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FAF6EE] border border-[#DE9E32]/35 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#B87B1E]">
                    {pillar.icon === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                    {pillar.icon === 'Award' && <Award className="w-5 h-5" />}
                    {pillar.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1F1E1D] leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="font-['Montserrat',sans-serif] text-xs text-[#6E6A64] leading-relaxed mt-1 font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="gold-foil-btn px-7 py-3.5 rounded-full font-['Montserrat',sans-serif] text-xs uppercase tracking-[0.2em] font-bold text-[#1F1E1D] flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Book a Family Visit</span>
                <ArrowRight className="w-4 h-4 text-[#1F1E1D]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
