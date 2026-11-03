import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          window.getComputedStyle(target).cursor === 'pointer')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Soft Gold Radial Ambient Glow Halo */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out pointer-events-none ${
          isPointer
            ? 'w-16 h-16 bg-[radial-gradient(circle,rgba(197,137,37,0.30)_0%,transparent_75%)] scale-125'
            : 'w-12 h-12 bg-[radial-gradient(circle,rgba(197,137,37,0.18)_0%,transparent_70%)]'
        }`}
      />
      {/* Precision Micro Dot */}
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C58925] shadow-xs transition-transform duration-150 pointer-events-none ${
          isPointer ? 'w-2.5 h-2.5 scale-125' : 'w-1.5 h-1.5 opacity-85'
        }`}
      />
    </div>
  );
};
