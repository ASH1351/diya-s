import React, { useState, useEffect } from 'react';
import { salonData } from '../config/salonData';
import { X, Calendar, User, Phone, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || 'The Signature Luxury Package (₹4,499)',
    date: '',
    time: '11:30 AM',
    guests: '1 Guest',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const allServices = [
    'The Essential Radiance Package (₹1,999)',
    'The Signature Luxury Package (₹4,499)',
    'The Royal Imperial Family Suite (₹8,999)',
    'The 24K Gold Imperial Hair & Face Elixir (₹4,999)',
    'Bespoke Designer Haircut & Blowout',
    'Kérastase Fusio-Dose Instant Treatment',
    'Global Hair Colour & Balayage',
    'Brazilian Keratin Silk Therapy',
    'Moroccan Argan Luxury Hair Spa',
    "Diya's 24K Pure Gold Luxury Facial",
    'O3+ Bridal Glow Infusion',
    'Hydra-Dew Cellular D-Tan Treatment',
    'Royal Bengali Bridal Makeover',
    'High-Definition (HD) Party Glam',
    'Russian Luxury Gel Manicure',
    'Floral Aroma Spa Pedicure',
    "Gentleman's Signature Cut & Styling",
    "Royal Hot Towel Beard Sculpting",
    "Gentle Little Prince / Princess Haircut",
    'Rica Italian Full Body Waxing',
    'Custom Family Group Consultation'
  ];

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM',
    '06:30 PM',
    '07:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#C58925', '#DE9E32', '#F7C464', '#FAF8F5']
      });
    } catch {
      // fallback
    }

    setSubmitted(true);

    const text = `*New Appointment Request - Diya's World Salon*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `✨ *Service:* ${encodeURIComponent(formData.service)}%0A` +
      `📅 *Preferred Date:* ${encodeURIComponent(formData.date || 'Earliest Slot')}%0A` +
      `⏰ *Preferred Time:* ${encodeURIComponent(formData.time)}%0A` +
      `👥 *Guests:* ${encodeURIComponent(formData.guests)}%0A` +
      (formData.notes ? `💬 *Notes:* ${encodeURIComponent(formData.notes)}%0A%0A` : '%0A') +
      `_Sent from website priority modal_`;

    const whatsappUrl = `https://wa.me/${salonData.brand.whatsappNumber}?text=${text}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white border border-[#DE9E32]/35 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(180,140,80,0.22)] z-10 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF8F5] text-[#54504B] hover:text-[#B87B1E] border border-[#DE9E32]/30 cursor-pointer focus:outline-none transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FAF8F5] border border-[#DE9E32]/30 text-[#B87B1E] text-[10px] font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-[#DE9E32]" />
            <span>Priority Booking</span>
          </div>
          <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#1F1E1D] leading-tight">
            Reserve Your Visit
          </h3>
          <p className="font-['Montserrat',sans-serif] text-xs text-[#54504B] font-light mt-1">
            Instant booking confirmation via WhatsApp with our Kolkata manager.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-['Montserrat',sans-serif] text-[11px] uppercase tracking-wider text-[#1F1E1D] font-medium mb-1">
              Your Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#DE9E32]" />
              <input
                type="text"
                required
                placeholder="e.g. Swati Sen"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#DE9E32] focus:bg-white rounded-xl text-xs text-[#1F1E1D] outline-none transition-all placeholder:text-[#807B74]"
              />
            </div>
          </div>

          <div>
            <label className="block font-['Montserrat',sans-serif] text-[11px] uppercase tracking-wider text-[#1F1E1D] font-medium mb-1">
              Phone / WhatsApp *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#DE9E32]" />
              <input
                type="tel"
                required
                placeholder="e.g. 98301 XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#DE9E32] focus:bg-white rounded-xl text-xs text-[#1F1E1D] outline-none transition-all placeholder:text-[#807B74]"
              />
            </div>
          </div>

          <div>
            <label className="block font-['Montserrat',sans-serif] text-[11px] uppercase tracking-wider text-[#1F1E1D] font-medium mb-1">
              Selected Service
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#DE9E32] focus:bg-white rounded-xl text-xs text-[#1F1E1D] outline-none cursor-pointer"
            >
              {allServices.map((s) => (
                <option key={s} value={s} className="bg-white text-[#1F1E1D]">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-['Montserrat',sans-serif] text-[11px] uppercase tracking-wider text-[#1F1E1D] font-medium mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#DE9E32] focus:bg-white rounded-xl text-xs text-[#1F1E1D] outline-none"
              />
            </div>

            <div>
              <label className="block font-['Montserrat',sans-serif] text-[11px] uppercase tracking-wider text-[#1F1E1D] font-medium mb-1">
                Slot
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#DE9E32] focus:bg-white rounded-xl text-xs text-[#1F1E1D] outline-none cursor-pointer"
              >
                {timeSlots.map((ts) => (
                  <option key={ts} value={ts} className="bg-white text-[#1F1E1D]">
                    {ts}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-['Montserrat',sans-serif] text-[11px] uppercase tracking-wider text-[#1F1E1D] font-medium mb-1">
              Special Requests (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Bringing daughter for kids haircut"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2.5 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#DE9E32] focus:bg-white rounded-xl text-xs text-[#1F1E1D] outline-none placeholder:text-[#807B74]"
            />
          </div>

          <button
            type="submit"
            className="w-full gold-foil-btn py-3.5 rounded-xl font-['Montserrat',sans-serif] text-xs uppercase tracking-[0.2em] font-bold text-[#1F1E1D] flex items-center justify-center gap-2 cursor-pointer shadow-lg mt-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Confirm on WhatsApp (8017999414)</span>
          </button>

          {submitted && (
            <div className="p-2.5 bg-emerald-50 border border-emerald-400 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-['Montserrat',sans-serif]">
              <CheckCircle className="w-4 h-4 flex-shrink-0 text-emerald-600" />
              <span>Redirecting to WhatsApp...</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
