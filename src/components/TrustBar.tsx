import React, { useState, useEffect, useRef } from 'react';
import { salonData } from '../config/salonData';

export const TrustBar: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(salonData.trustCounters.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const frameRate = 1000 / 60;
          const totalFrames = Math.round(duration / frameRate);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              salonData.trustCounters.map((counter) =>
                Math.round(counter.value * easeProgress)
              )
            );

            if (frame >= totalFrames) {
              clearInterval(timer);
              setCounts(salonData.trustCounters.map((c) => c.value));
            }
          }, frameRate);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="trust" ref={containerRef} className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Luxury Pure White Floating Card */}
      <div className="bg-white/95 backdrop-blur-xl border border-[#DE9E32]/35 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(180,140,80,0.12)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#DE9E32]/20">
          {salonData.trustCounters.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col items-center text-center px-4 ${
                idx > 0 && idx % 2 === 0 ? 'pt-6 sm:pt-0' : ''
              } ${idx === 1 ? 'pt-6 sm:pt-0' : ''}`}
            >
              {/* Counter Number */}
              <div className="flex items-baseline justify-center">
                <span className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-shimmer tracking-tight">
                  {counts[idx].toLocaleString()}
                </span>
                <span className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#DE9E32] ml-0.5">
                  {item.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="font-['Montserrat',sans-serif] text-xs sm:text-sm font-bold text-[#1F1E1D] uppercase tracking-[0.15em] mt-2">
                {item.label}
              </h3>

              {/* Descriptive subtitle */}
              <p className="font-['Montserrat',sans-serif] text-[11px] text-[#6E6A64] mt-1 font-medium max-w-[180px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
