import React, { useState, useRef } from 'react';
import { salonData, type GalleryItem } from '../config/salonData';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Sliders, ArrowRight } from 'lucide-react';

interface GalleryProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Before / After Slider state
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'all', label: 'All Creations' },
    { id: 'hair', label: 'Hair Couture' },
    { id: 'makeup', label: 'Bridal Makeup' },
    { id: 'skin', label: 'Skin Radiance' },
    { id: 'grooming', label: 'Men & Kids' },
  ];

  const filteredItems = activeTab === 'all'
    ? salonData.gallery
    : salonData.gallery.filter((item) => item.category === activeTab);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };
  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#F4F0E8] overflow-hidden scroll-mt-28">
      {/* Background radial gold */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(222,158,50,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DE9E32]/35 text-[#B87B1E] text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Portfolio</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl text-[#1F1E1D] leading-tight font-normal">
            Moments of Elegance & <br />
            <span className="font-['Great_Vibes',cursive] text-gold-shimmer text-4xl sm:text-6xl italic inline-block mt-1">
              Flawless Transformations
            </span>
          </h2>
          <div className="swash-divider">
            <span className="swash-line" />
            <img src="/assets/dw-logo-mark.png" alt="" className="w-6 h-6 object-contain opacity-80" />
            <span className="swash-line-reverse" />
          </div>
          <p className="font-['Montserrat',sans-serif] text-sm sm:text-base text-[#54504B] font-normal">
            Every style captured is a testament to personalized artistry, executed with genuine passion by our Kolkata master stylists.
          </p>
        </div>

        {/* ═══ BEFORE & AFTER INTERACTIVE TRANSFORMATION SLIDER (Pure White Card) ═══ */}
        <div className="mb-20">
          <div className="bg-white border border-[#DE9E32]/35 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(180,140,80,0.12)]">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              {/* Slider Viewport */}
              <div
                ref={sliderRef}
                className="relative w-full lg:w-3/5 h-[360px] sm:h-[440px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-[#DE9E32]/45 shadow-xl"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* After Image */}
                <img
                  src={salonData.transformation.afterImage}
                  alt={salonData.transformation.afterLabel}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DE9E32]/40 text-[#B87B1E] font-['Montserrat',sans-serif] text-xs font-bold uppercase tracking-wider shadow-sm">
                  {salonData.transformation.afterLabel}
                </div>

                {/* Before Image */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={salonData.transformation.beforeImage}
                    alt={salonData.transformation.beforeLabel}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      width: sliderRef.current ? `${sliderRef.current.clientWidth}px` : '100%',
                      maxWidth: 'none'
                    }}
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DE9E32]/40 text-[#54504B] font-['Montserrat',sans-serif] text-xs font-bold uppercase tracking-wider shadow-sm">
                    {salonData.transformation.beforeLabel}
                  </div>
                </div>

                {/* Draggable Divider Handle Line */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F7C464] via-[#DE9E32] to-[#C58925] z-20 pointer-events-none shadow-[0_0_15px_rgba(222,158,50,0.8)]"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-r from-[#C58925] via-[#DE9E32] to-[#F7C464] p-0.5 shadow-[0_0_20px_rgba(222,158,50,0.6)] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#B87B1E]">
                      <Sliders className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Touch/Mouse hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#DE9E32]/35 text-[11px] text-[#B87B1E] font-['Montserrat',sans-serif] font-semibold shadow-sm pointer-events-none">
                  ↔ Drag slider to compare transformation
                </div>
              </div>

              {/* Transformation Story Right Column */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#DE9E32]/35 text-[#B87B1E] text-[11px] font-bold tracking-wider uppercase mb-3 w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Real Client Result</span>
                </div>

                <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#1F1E1D] leading-tight mb-3">
                  {salonData.transformation.title}
                </h3>

                <p className="font-['Montserrat',sans-serif] text-xs sm:text-sm text-[#B87B1E] font-semibold mb-4">
                  {salonData.transformation.subtitle}
                </p>

                <p className="font-['Montserrat',sans-serif] text-xs sm:text-sm text-[#54504B] font-normal leading-relaxed mb-6">
                  {salonData.transformation.details}
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onOpenBooking('Kérastase & Silk Gloss')}
                    className="gold-foil-btn px-6 py-3 rounded-full font-['Montserrat',sans-serif] text-xs uppercase tracking-wider font-bold text-[#1F1E1D] flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Book This Transformation</span>
                    <ArrowRight className="w-4 h-4 text-[#1F1E1D]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ═══ FILTER TABS ═══ */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-['Montserrat',sans-serif] text-xs uppercase tracking-[0.12em] font-semibold transition-all duration-300 cursor-pointer shadow-sm ${
                  isActive
                    ? 'gold-foil-btn text-[#1F1E1D] font-bold shadow-md'
                    : 'bg-white text-[#4A4742] hover:text-[#B87B1E] border border-[#DE9E32]/30'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ═══ MASONRY / GRID CREATIONS ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden border border-[#DE9E32]/30 bg-white cursor-pointer shadow-[0_6px_25px_rgba(180,140,80,0.08)] hover:shadow-[0_15px_40px_rgba(180,140,80,0.18)] aspect-[4/5] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Luminous Vignette Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#DE9E32]/70 transition-colors duration-300 rounded-3xl pointer-events-none" />

              {/* Card Meta Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 text-white">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#DE9E32]/40 text-[10px] uppercase font-bold text-[#B87B1E] tracking-wider shadow">
                    {item.categoryLabel}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/90 text-[#B87B1E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 shadow">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-['Montserrat',sans-serif] text-xs text-[#FAF8F5] font-light mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ═══ LIGHTBOX MODAL ═══ */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#1F1E1D] cursor-pointer transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#1F1E1D] cursor-pointer transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#1F1E1D] cursor-pointer transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image & Caption Box */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] rounded-2xl overflow-hidden border border-[#DE9E32]/50 shadow-2xl">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="text-center mt-5 text-white">
              <span className="text-[11px] font-['Montserrat',sans-serif] uppercase tracking-[0.25em] text-[#FFD36B] font-bold">
                {filteredItems[lightboxIndex].categoryLabel}
              </span>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="font-['Montserrat',sans-serif] text-xs text-[#FAF8F5]/85 max-w-lg mx-auto mt-1 font-light">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
