import React, { useState, useEffect } from 'react';
import { salonData } from '../config/salonData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = salonData.testimonials;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#F4F0E8] overflow-hidden scroll-mt-28">
      {/* Background soft ambient radial gold */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(222,158,50,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DE9E32]/35 text-[#B87B1E] text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kolkata Client Stories</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl text-[#1F1E1D] leading-tight font-normal">
            Loved Across Kolkata by <br />
            <span className="font-['Great_Vibes',cursive] text-gold-shimmer text-4xl sm:text-6xl italic inline-block mt-1">
              Families & Connoisseurs
            </span>
          </h2>
          <div className="swash-divider">
            <span className="swash-line" />
            <img src="/assets/dw-logo-mark.png" alt="" className="w-6 h-6 object-contain opacity-80" />
            <span className="swash-line-reverse" />
          </div>
          <p className="font-['Montserrat',sans-serif] text-sm sm:text-base text-[#54504B] font-normal">
            Real experiences from clients who trust us with their everyday grooming, bridal milestones, and family bonding.
          </p>
        </div>

        {/* Pure White Testimonials Carousel Card */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-3xl bg-white border border-[#DE9E32]/35 p-8 sm:p-12 lg:p-16 shadow-[0_25px_60px_rgba(180,140,80,0.12)]">
            {/* Huge Decorative Gold Quote Mark */}
            <div className="absolute top-6 right-8 sm:top-10 sm:right-12 text-[#DE9E32]/15 pointer-events-none select-none">
              <Quote className="w-20 h-20 sm:w-28 sm:h-28 rotate-180" />
            </div>

            <div className="relative z-10 flex flex-col justify-between min-h-[280px]">
              <div>
                {/* 5 Gold Stars Rating */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#DE9E32] fill-[#DE9E32] filter drop-shadow-[0_0_6px_rgba(222,158,50,0.35)]"
                    />
                  ))}
                  <span className="ml-2 font-['Montserrat',sans-serif] text-xs font-bold text-[#B87B1E] tracking-wider">
                    5.0 • Verified Guest
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl lg:text-3xl font-normal text-[#1F1E1D] leading-relaxed italic mb-8">
                  "{current.quote}"
                </blockquote>
              </div>

              {/* Client Info Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#DE9E32]/20">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#DE9E32]/50 shadow-md"
                  />
                  <div>
                    <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1F1E1D]">
                      {current.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-[#B87B1E] font-['Montserrat',sans-serif] mt-0.5 font-semibold">
                      <MapPin className="w-3 h-3" />
                      <span>{current.locality}</span>
                    </div>
                    <span className="text-[11px] text-[#6E6A64] font-['Montserrat',sans-serif] block mt-0.5 font-medium">
                      Service: {current.service}
                    </span>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2.5 self-end sm:self-auto">
                  <button
                    onClick={prev}
                    className="p-3 rounded-full bg-[#FAF6EE] hover:bg-[#DE9E32] text-[#B87B1E] hover:text-white border border-[#DE9E32]/40 transition-all cursor-pointer shadow-sm"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-3 rounded-full bg-[#FAF6EE] hover:bg-[#DE9E32] text-[#B87B1E] hover:text-white border border-[#DE9E32]/40 transition-all cursor-pointer shadow-sm"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-[#C58925] to-[#F7C464]'
                    : 'w-2 h-2 bg-[#E2D9C8] hover:bg-[#DE9E32]/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
