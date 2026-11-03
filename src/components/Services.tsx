import React, { useState } from 'react';
import { salonData, type ServiceItem } from '../config/salonData';
import {
  Scissors,
  Sparkles,
  Crown,
  Feather,
  UserCheck,
  Smile,
  HeartHandshake,
  Clock,
  ArrowRight,
  Flame
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(salonData.categories[0].id);

  const activeCategory = salonData.categories.find((c) => c.id === activeCategoryId) || salonData.categories[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Crown':
        return <Crown className="w-4 h-4" />;
      case 'Feather':
        return <Feather className="w-4 h-4" />;
      case 'UserCheck':
        return <UserCheck className="w-4 h-4" />;
      case 'Smile':
        return <Smile className="w-4 h-4" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#F4F0E8] overflow-hidden scroll-mt-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(222,158,50,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(197,137,37,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DE9E32]/35 text-[#B87B1E] text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Salon Menu</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl text-[#1F1E1D] leading-tight font-normal">
            Bespoke Services for <br />
            <span className="font-['Great_Vibes',cursive] text-gold-shimmer text-4xl sm:text-6xl italic inline-block mt-1">
              Women, Men & Children
            </span>
          </h2>
          <div className="swash-divider">
            <span className="swash-line" />
            <img src="/assets/dw-logo-mark.png" alt="" className="w-6 h-6 object-contain opacity-80" />
            <span className="swash-line-reverse" />
          </div>
          <p className="font-['Montserrat',sans-serif] text-sm sm:text-base text-[#54504B] font-normal">
            Each ritual is designed using certified international formulations, uncompromised sterilization, and meticulous care.
          </p>
        </div>

        {/* Horizontal Category Navigation Tabs */}
        <div className="relative mb-12">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none no-scrollbar justify-start lg:justify-center">
            {salonData.categories.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full font-['Montserrat',sans-serif] text-xs uppercase tracking-[0.12em] font-semibold transition-all duration-300 flex-shrink-0 cursor-pointer shadow-sm ${
                    isActive
                      ? 'gold-foil-btn text-[#1F1E1D] font-bold shadow-[0_4px_20px_rgba(197,137,37,0.35)] scale-105'
                      : 'bg-white text-[#4A4742] hover:text-[#B87B1E] border border-[#DE9E32]/30 hover:border-[#DE9E32]/60'
                  }`}
                >
                  <span className={isActive ? 'text-[#1F1E1D]' : 'text-[#B87B1E]'}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Intro Banner */}
        <div className="rounded-2xl p-6 sm:p-8 mb-10 border border-[#DE9E32]/30 flex flex-col md:flex-row items-center justify-between gap-6 bg-white shadow-[0_10px_35px_rgba(180,140,80,0.08)]">
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-[#DE9E32]/40 flex-shrink-0 shadow-md">
              <img
                src={activeCategory.image}
                alt={activeCategory.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#DE9E32]/10" />
            </div>
            <div>
              <span className="font-['Montserrat',sans-serif] text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B87B1E] font-bold">
                {activeCategory.badge}
              </span>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#1F1E1D] mt-0.5">
                {activeCategory.name}
              </h3>
              <p className="font-['Montserrat',sans-serif] text-xs sm:text-sm text-[#6E6A64] font-normal mt-1 max-w-xl">
                {activeCategory.description}
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <button
              onClick={() => onSelectService(activeCategory.name)}
              className="w-full md:w-auto gold-outline-btn px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-[#B87B1E] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Consult an Artist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Services Grid for Active Category (Pure White Cards with Warm Shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.services.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-white hover:bg-[#FFFEFC] border border-[#DE9E32]/25 hover:border-[#DE9E32]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(180,140,80,0.06)] hover:shadow-[0_12px_35px_rgba(180,140,80,0.14)]"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#C58925] to-[#F7C464] text-[10px] font-bold text-[#1F1E1D] uppercase tracking-wider shadow">
                  <Flame className="w-3 h-3 fill-[#1F1E1D]" />
                  <span>Popular</span>
                </div>
              )}

              <div>
                {/* Header: Service Title */}
                <h4 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-[#1F1E1D] group-hover:text-[#B87B1E] transition-colors pr-16 leading-snug">
                  {service.name}
                </h4>

                {/* Duration & Tag info */}
                <div className="flex items-center gap-3 mt-2 text-xs text-[#6E6A64] font-['Montserrat',sans-serif]">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-[#B87B1E]" />
                    {service.duration}
                  </span>
                  <span>•</span>
                  <span className="text-[#B87B1E] font-semibold">{activeCategory.name}</span>
                </div>

                {/* Description */}
                <p className="font-['Montserrat',sans-serif] text-xs sm:text-sm text-[#54504B] font-normal leading-relaxed mt-3">
                  {service.description}
                </p>
              </div>

              {/* Card Footer: Price & Book Now CTA */}
              <div className="mt-6 pt-4 border-t border-[#DE9E32]/15 flex items-center justify-between">
                <div>
                  <span className="font-['Montserrat',sans-serif] text-[10px] uppercase text-[#807B74] tracking-wider block font-semibold">
                    Starting from
                  </span>
                  <span className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-bold text-gold-shimmer">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service.name)}
                  className="px-4 py-2 rounded-full bg-[#FAF6EE] hover:bg-[#DE9E32] text-[#B87B1E] hover:text-[#1F1E1D] border border-[#DE9E32]/35 hover:border-transparent font-['Montserrat',sans-serif] text-xs uppercase tracking-wider font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-sm group-hover:bg-[#DE9E32] group-hover:text-[#1F1E1D]"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Family Consultation Note */}
        <div className="mt-14 text-center">
          <p className="font-['Montserrat',sans-serif] text-xs sm:text-sm text-[#6E6A64]">
            Looking for a customized service or bridal party quote?{' '}
            <button
              onClick={() => onSelectService('Custom Consultation')}
              className="text-[#B87B1E] underline underline-offset-4 hover:text-[#1F1E1D] font-bold cursor-pointer"
            >
              Speak directly with our Master Stylist on WhatsApp
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
