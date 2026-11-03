import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete?: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'drawing' | 'shimmer' | 'fadeOut' | 'hidden'>('drawing');

  useEffect(() => {
    // Stage 1: stroke drawing (0 - 1300ms)
    const t1 = setTimeout(() => {
      setStage('shimmer');
    }, 1300);

    // Stage 2: full golden shimmer & subtitle reveal (1300 - 1900ms)
    const t2 = setTimeout(() => {
      setStage('fadeOut');
    }, 1900);

    // Stage 3: completed fade out
    const t3 = setTimeout(() => {
      setStage('hidden');
      if (onComplete) onComplete();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (stage === 'hidden') return null;

  return (
    <aside
      aria-label="Loading Diya's World"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] transition-opacity duration-600 ease-in-out ${
        stage === 'fadeOut' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient gold aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(222,158,50,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-lg w-full">
        {/* DW Calligraphic SVG Drawing */}
        <div className="relative w-64 h-36 sm:w-80 sm:h-44 md:w-96 md:h-52 flex items-center justify-center">
          <img
            src="/assets/dw-logo-draw.svg"
            alt="Diya's World Monogram"
            className={`w-full h-auto transition-all duration-700 ${
              stage === 'shimmer' ? 'scale-105 drop-shadow-[0_0_20px_rgba(200,138,38,0.5)]' : 'scale-100 drop-shadow-[0_0_10px_rgba(200,138,38,0.25)]'
            }`}
          />
        </div>

        {/* Brand Text Reveal */}
        <div className={`mt-6 text-center transition-all duration-700 transform ${
          stage !== 'drawing' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl tracking-[0.25em] text-[#1F1E1D] uppercase font-bold">
            Diya's World
          </h1>
          <div className="flex items-center justify-center gap-3 mt-2">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#DE9E32]/80" />
            <p className="font-['Montserrat',sans-serif] text-[10px] sm:text-xs tracking-[0.35em] text-[#B87B1E] uppercase font-semibold">
              The Family Salon • Kolkata
            </p>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#DE9E32]/80" />
          </div>
        </div>

        {/* Luxury Progress Bar */}
        <div className="w-40 sm:w-56 h-[2px] bg-[#EAE4D7] rounded-full overflow-hidden mt-8 border border-[#DE9E32]/30">
          <div className="h-full bg-gradient-to-r from-[#C58925] via-[#DE9E32] to-[#F7C464] animate-[shimmer_2s_ease-in-out_infinite] w-full origin-left transition-transform duration-1000" />
        </div>
      </div>
    </aside>
  );
};
