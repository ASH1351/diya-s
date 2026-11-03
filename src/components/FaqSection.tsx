import React, { useState } from 'react';
import { salonData } from '../config/salonData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden border-t border-[#DE9E32]/20">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(222,158,50,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DE9E32]/35 text-[#B87B1E] text-xs uppercase tracking-[0.2em] font-semibold mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#DE9E32]" />
            <span>Client Inquiries</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl text-[#1F1E1D] font-normal tracking-wide">
            Frequently Asked <span className="text-gold-gradient font-semibold">Questions</span>
          </h2>
          <p className="mt-3 font-['Montserrat',sans-serif] text-xs sm:text-sm text-[#54504B] font-light max-w-lg mx-auto">
            Everything you need to know about our luxury salon experience in Kolkata.
          </p>
        </div>

        <div className="space-y-4">
          {salonData.faq.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#DE9E32]/25 shadow-[0_4px_20px_rgba(180,140,80,0.06)] overflow-hidden transition-all duration-300 hover:border-[#DE9E32]/50 hover:shadow-[0_8px_25px_rgba(180,140,80,0.1)]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-bold text-[#1F1E1D] hover:text-[#B87B1E] transition-colors leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#DE9E32]/35 flex items-center justify-center text-[#B87B1E] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#DE9E32] text-white border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#54504B] font-['Montserrat',sans-serif] font-light leading-relaxed border-t border-[#DE9E32]/15 pt-4 bg-[#FCFBF9]/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
