import React from 'react';
import { salonData } from '../config/salonData';
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  MessageCircle,
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F4EFE6] text-[#1F1E1D] overflow-hidden pt-16 pb-24 sm:pb-16 border-t border-[#DE9E32]/30">
      {/* Decorative Swash Banner at Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="swash-divider">
          <span className="swash-line" />
          <div className="flex items-center gap-3">
            <img
              src="/assets/dw-logo-mark.png"
              alt="Diya's World Monogram"
              className="w-10 h-10 object-contain filter drop-shadow-[0_2px_8px_rgba(197,137,37,0.3)]"
            />
          </div>
          <span className="swash-line-reverse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#DE9E32]/25">
          
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center p-1 bg-white rounded-xl border border-[#DE9E32]/30 shadow-xs">
                <img
                  src="/assets/dw-logo-mark.png"
                  alt="Diya's World Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_1px_4px_rgba(197,137,37,0.3)] group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <span className="font-['Cormorant_Garamond',serif] text-2xl font-bold tracking-[0.12em] text-[#1F1E1D] block leading-tight">
                  Diya's World
                </span>
                <span className="font-['Montserrat',sans-serif] text-[10px] tracking-[0.25em] text-[#B87B1E] uppercase font-semibold">
                  The Family Salon
                </span>
              </div>
            </a>

            <p className="font-['Cormorant_Garamond',serif] text-xl italic text-[#B87B1E] font-normal">
              "{salonData.brand.tagline}"
            </p>

            <p className="font-['Montserrat',sans-serif] text-xs text-[#54504B] font-light leading-relaxed max-w-sm">
              Kolkata's most cherished luxury family salon. Where grandmother, mother, father, and child discover bespoke care and five-star relaxation under one welcoming roof.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={salonData.brand.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#DE9E32]/35 flex items-center justify-center text-[#B87B1E] hover:bg-[#DE9E32] hover:text-white transition-all shadow-xs cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={salonData.brand.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#DE9E32]/35 flex items-center justify-center text-[#B87B1E] hover:bg-[#DE9E32] hover:text-white transition-all shadow-xs cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a
                href={salonData.brand.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-xs cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-['Cormorant_Garamond',serif] text-lg font-bold text-[#1F1E1D] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 font-['Montserrat',sans-serif] text-xs text-[#54504B]">
              <li>
                <a href="#home" className="hover:text-[#B87B1E] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B87B1E] transition-colors">About Diya's World</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B87B1E] transition-colors">Salon Menu</a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#B87B1E] transition-colors">Signature 24K Ritual</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B87B1E] transition-colors">Gallery & Portfolio</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#B87B1E] transition-colors">Family Packages</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#B87B1E] transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B87B1E] transition-colors">Book Appointment</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Cormorant_Garamond',serif] text-lg font-bold text-[#1F1E1D] uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 font-['Montserrat',sans-serif] text-xs text-[#54504B]">
              <li>
                <a href="#services" className="hover:text-[#B87B1E] transition-colors">French Balayage & Highlights</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B87B1E] transition-colors">Kérastase Intensive Hair Spa</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B87B1E] transition-colors">24K Gold Cellular Facial</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B87B1E] transition-colors">Bengali Royal Bridal Makeover</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B87B1E] transition-colors">Russian Gel Nails & Chrome Art</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B87B1E] transition-colors">Gentleman's Hot Towel Beard</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B87B1E] transition-colors">Sensory-Friendly Kids' Haircut</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4 font-['Montserrat',sans-serif] text-xs text-[#54504B]">
            <h4 className="font-['Cormorant_Garamond',serif] text-lg font-bold text-[#1F1E1D] uppercase tracking-wider">
              Salon Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DE9E32] flex-shrink-0 mt-0.5" />
                <span className="leading-snug text-[#54504B]">
                  82/1, Prince Anwar Shah Road, Lake Gardens, Kolkata 700045 (Opp. South City Mall)
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DE9E32] flex-shrink-0" />
                <a href={`tel:${salonData.brand.phone}`} className="text-[#B87B1E] font-bold hover:underline">
                  {salonData.brand.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DE9E32] flex-shrink-0" />
                <a href={`mailto:${salonData.brand.email}`} className="text-[#54504B] hover:text-[#B87B1E]">
                  {salonData.brand.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#DE9E32] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#1F1E1D] font-medium">Monday – Sunday</span>
                  <span className="text-[#807B74]">10:00 AM – 8:30 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Montserrat',sans-serif] text-[#807B74]">
          <p>© {currentYear} {salonData.brand.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#B87B1E] font-medium">Handcrafted for Kolkata's Finest Families</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#B87B1E] hover:text-[#1F1E1D] transition-colors cursor-pointer font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
