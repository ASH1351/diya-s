import React, { useState, useEffect } from 'react';
import { salonData } from '../config/salonData';
import { Phone, Calendar, ArrowUp, MessageCircle } from 'lucide-react';

interface FloatingControlsProps {
  onOpenBooking: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Tablet Floating Actions (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white/95 hover:bg-[#DE9E32] text-[#B87B1E] hover:text-white border border-[#DE9E32]/40 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* WhatsApp Floating Button with Pulse Aura */}
        <a
          href={`https://wa.me/${salonData.brand.whatsappNumber}?text=Hi%20Diya's%20World,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
          aria-label="Chat on WhatsApp"
        >
          {/* Tooltip on hover */}
          <span className="hidden sm:block absolute right-16 px-3 py-1.5 rounded-lg bg-white/95 text-[#1F1E1D] border border-[#DE9E32]/35 text-xs font-['Montserrat',sans-serif] whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-medium">
            Chat with Salon • {salonData.brand.phone}
          </span>

          {/* Glowing Animated Ring */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#25D366] to-[#DE9E32] opacity-40 blur-sm group-hover:opacity-80 transition-opacity animate-pulse" />

          {/* WhatsApp Button Badge */}
          <div className="relative w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] group-hover:scale-105 transition-transform duration-300">
            <MessageCircle className="w-7 h-7 fill-white" />
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Visible on screens < 768px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-[#DE9E32]/25 px-4 py-2.5 shadow-[0_-5px_25px_rgba(180,140,80,0.15)]">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          {/* Call Now Button */}
          <a
            href={`tel:${salonData.brand.phone}`}
            className="h-12 rounded-xl bg-[#FAF8F5] border border-[#DE9E32]/40 text-[#1F1E1D] font-['Montserrat',sans-serif] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#DE9E32]" />
            <span>Call Now</span>
          </a>

          {/* Book Appointment Button */}
          <button
            onClick={onOpenBooking}
            className="h-12 rounded-xl gold-foil-btn text-[#1F1E1D] font-['Montserrat',sans-serif] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </>
  );
};
