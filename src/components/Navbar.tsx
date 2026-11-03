import React, { useState, useEffect } from 'react';
import { salonData } from '../config/salonData';
import { Phone, Menu, X, Calendar, MapPin, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Signature', href: '#signature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo Left */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Diya's World – Home"
            >
              <div className="relative w-12 h-10 sm:w-14 sm:h-11 flex-shrink-0 flex items-center justify-center">
                <img
                  src="/assets/dw-logo-mark.png"
                  alt="Diya's World Monogram"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_6px_rgba(200,138,38,0.3)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold tracking-[0.12em] text-[#1F1E1D] leading-tight group-hover:text-[#B87B1E] transition-colors">
                  Diya's World
                </span>
                <span className="font-['Montserrat',sans-serif] text-[9px] sm:text-[10px] tracking-[0.25em] text-[#B87B1E] uppercase font-bold">
                  The Family Salon
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="relative font-['Montserrat',sans-serif] text-xs uppercase tracking-[0.15em] text-[#4A4742] hover:text-[#B87B1E] transition-colors py-1 group font-semibold cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C58925] to-[#F7C464] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-4">
              {/* Direct Call Link */}
              <a
                href={`tel:${salonData.brand.phone}`}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6EE] border border-[#DE9E32]/35 hover:border-[#DE9E32]/70 text-xs text-[#1F1E1D] transition-all duration-300 hover:bg-white shadow-sm"
                title="Call Diya's World"
              >
                <Phone className="w-3.5 h-3.5 text-[#B87B1E]" />
                <span className="font-['Montserrat',sans-serif] font-semibold tracking-wider">
                  {salonData.brand.phoneDisplay}
                </span>
              </a>

              {/* Book Appointment CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="gold-foil-btn px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-bold text-[#1F1E1D] flex items-center gap-2 cursor-pointer transition-transform"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{salonData.brand.primaryCta}</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="gold-foil-btn px-3.5 py-2 rounded-full text-[11px] uppercase tracking-wider font-bold text-[#1F1E1D] flex md:hidden items-center gap-1.5"
              >
                <Calendar className="w-3 h-3" />
                <span>Book</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg bg-[#FAF6EE] border border-[#DE9E32]/35 text-[#B87B1E] hover:text-[#1F1E1D] focus:outline-none cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-in Menu */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 xl:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#1F1E1D]/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#FCFBF9] border-l border-[#DE9E32]/30 p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-500 ease-out shadow-2xl ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#DE9E32]/20">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/dw-logo-mark.png"
                  alt="Diya's World"
                  className="w-10 h-8 object-contain"
                />
                <div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-lg font-bold text-[#1F1E1D] leading-none">
                    Diya's World
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[9px] tracking-[0.2em] text-[#B87B1E] uppercase mt-1 font-bold">
                    The Family Salon
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-[#F4F0E8] text-[#1F1E1D] hover:text-[#B87B1E] border border-[#DE9E32]/30 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-6 flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-['Cormorant_Garamond',serif] text-2xl text-[#1F1E1D] hover:text-[#B87B1E] transition-colors flex items-center justify-between py-1 group font-bold"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-['Montserrat',sans-serif] text-[#B87B1E] opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Drawer Footer & Direct Actions */}
          <div className="pt-6 border-t border-[#DE9E32]/20 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full gold-foil-btn py-3.5 rounded-xl font-['Montserrat',sans-serif] text-xs uppercase tracking-[0.2em] font-bold text-[#1F1E1D] flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>{salonData.brand.primaryCta}</span>
            </button>

            <a
              href={`tel:${salonData.brand.phone}`}
              className="w-full py-3 rounded-xl bg-[#FAF6EE] hover:bg-[#F2ECE0] border border-[#DE9E32]/40 font-['Montserrat',sans-serif] text-xs uppercase tracking-wider font-bold text-[#1F1E1D] flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B87B1E]" />
              <span>Call Us: {salonData.brand.phone}</span>
            </a>

            {/* Location & Hours snippet */}
            <div className="bg-white p-3.5 rounded-lg border border-[#DE9E32]/20 text-xs text-[#54504B] space-y-1.5 font-['Montserrat',sans-serif] shadow-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B87B1E] flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight font-medium text-[#1F1E1D]">Prince Anwar Shah Rd, Kolkata</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B87B1E] flex-shrink-0" />
                <span className="text-[11px]">Daily: 10:00 AM – 8:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
