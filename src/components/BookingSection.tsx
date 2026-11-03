import React, { useState } from 'react';
import { salonData } from '../config/salonData';
import {
  Calendar,
  User,
  Phone,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'The Signature Luxury Package',
    date: '',
    time: '11:00 AM',
    guests: '1 Guest',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

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
    'Other / Custom Family Consultation'
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
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
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
      `📅 *Preferred Date:* ${encodeURIComponent(formData.date || 'Earliest Available')}%0A` +
      `⏰ *Preferred Time:* ${encodeURIComponent(formData.time)}%0A` +
      `👥 *Guests:* ${encodeURIComponent(formData.guests)}%0A` +
      (formData.notes ? `💬 *Special Note:* ${encodeURIComponent(formData.notes)}%0A%0A` : '%0A') +
      `_Sent from diyasworld.in website_`;

    const whatsappUrl = `https://wa.me/${salonData.brand.whatsappNumber}?text=${text}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#FAF8F5] overflow-hidden scroll-mt-28">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(222,158,50,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DE9E32]/35 text-[#B87B1E] text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-sm">
            <Calendar className="w-3.5 h-3.5" />
            <span>Priority Reservation</span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-5xl text-[#1F1E1D] leading-tight font-normal">
            Book Your Bespoke <br />
            <span className="font-['Great_Vibes',cursive] text-gold-shimmer text-4xl sm:text-6xl italic inline-block mt-1">
              Family Experience
            </span>
          </h2>
          <div className="swash-divider">
            <span className="swash-line" />
            <img src="/assets/dw-logo-mark.png" alt="" className="w-6 h-6 object-contain opacity-80" />
            <span className="swash-line-reverse" />
          </div>
          <p className="font-['Montserrat',sans-serif] text-sm sm:text-base text-[#54504B] font-normal">
            Fill in your preferred slot below. Our front desk manager will confirm via WhatsApp within 10 minutes.
          </p>
        </div>

        {/* Split Layout: Booking Form Left | Salon Info & Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Form in Pure White */}
          <div className="lg:col-span-7 bg-white border border-[#DE9E32]/35 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(180,140,80,0.1)]">
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-bold text-[#1F1E1D] mb-2">
              Appointment Details
            </h3>
            <p className="font-['Montserrat',sans-serif] text-xs text-[#6E6A64] font-normal mb-8">
              No prepayment required. Instant WhatsApp confirmation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block font-['Montserrat',sans-serif] text-xs uppercase tracking-wider text-[#3D3A36] font-bold mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B87B1E]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Mukherjee"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#B87B1E] focus:bg-white rounded-xl text-sm text-[#1F1E1D] placeholder-[#948F87] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block font-['Montserrat',sans-serif] text-xs uppercase tracking-wider text-[#3D3A36] font-bold mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B87B1E]" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98301 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#B87B1E] focus:bg-white rounded-xl text-sm text-[#1F1E1D] placeholder-[#948F87] outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection Dropdown */}
              <div>
                <label className="block font-['Montserrat',sans-serif] text-xs uppercase tracking-wider text-[#3D3A36] font-bold mb-1.5">
                  Select Desired Service or Package *
                </label>
                <div className="relative">
                  <Sparkles className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B87B1E]" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-10 pr-8 py-3 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#B87B1E] focus:bg-white rounded-xl text-sm text-[#1F1E1D] outline-none transition-colors cursor-pointer appearance-none"
                  >
                    {allServices.map((svc) => (
                      <option key={svc} value={svc} className="bg-white text-[#1F1E1D]">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date, Time & Number of Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Date */}
                <div>
                  <label className="block font-['Montserrat',sans-serif] text-xs uppercase tracking-wider text-[#3D3A36] font-bold mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#B87B1E] focus:bg-white rounded-xl text-sm text-[#1F1E1D] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block font-['Montserrat',sans-serif] text-xs uppercase tracking-wider text-[#3D3A36] font-bold mb-1.5">
                    Preferred Slot
                  </label>
                  <div className="relative">
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#B87B1E] focus:bg-white rounded-xl text-sm text-[#1F1E1D] outline-none transition-colors cursor-pointer appearance-none"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts} className="bg-white text-[#1F1E1D]">
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block font-['Montserrat',sans-serif] text-xs uppercase tracking-wider text-[#3D3A36] font-bold mb-1.5">
                    Family / Guests
                  </label>
                  <div className="relative">
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-3 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#B87B1E] focus:bg-white rounded-xl text-sm text-[#1F1E1D] outline-none transition-colors cursor-pointer appearance-none"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests (Couple / Friends)">2 Guests (Couple / Duo)</option>
                      <option value="3 Guests (Family Trio)">3 Guests (Family Trio)</option>
                      <option value="4+ Guests (Bridal / Group)">4+ Guests (Bridal / Group)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block font-['Montserrat',sans-serif] text-xs uppercase tracking-wider text-[#3D3A36] font-bold mb-1.5">
                  Special Instructions or Hair/Skin Notes (Optional)
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    placeholder="e.g. Sensitive scalp, bringing my 4-year-old child, preparing for evening wedding..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3.5 bg-[#FAF8F5] border border-[#DE9E32]/30 focus:border-[#B87B1E] focus:bg-white rounded-xl text-sm text-[#1F1E1D] placeholder-[#948F87] outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full gold-foil-btn py-4 px-4 rounded-xl font-['Montserrat',sans-serif] text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] font-bold text-[#1F1E1D] flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <Calendar className="w-4 h-4 text-[#1F1E1D]" />
                <span>Confirm Appointment via WhatsApp</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-500/40 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-['Montserrat',sans-serif]">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Thank you! WhatsApp is opening with your formatted booking to 8017999414.</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Contact Details, Hours & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box (Pure White Card) */}
            <div className="bg-white border border-[#DE9E32]/35 rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(180,140,80,0.08)]">
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1F1E1D] mb-4">
                Visit Our Sanctuary
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-['Montserrat',sans-serif]">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] border border-[#DE9E32]/35 flex items-center justify-center flex-shrink-0 text-[#B87B1E]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6E6A64] block font-semibold">
                      Direct Booking Line
                    </span>
                    <a
                      href={`tel:${salonData.brand.phone}`}
                      className="font-bold text-[#B87B1E] hover:text-[#1F1E1D] text-base tracking-wider transition-colors"
                    >
                      {salonData.brand.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] border border-[#DE9E32]/35 flex items-center justify-center flex-shrink-0 text-[#B87B1E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6E6A64] block font-semibold">
                      Address
                    </span>
                    <p className="text-[#3D3A36] font-normal leading-snug">
                      {salonData.brand.address.fullAddress}
                    </p>
                    <span className="text-[11px] text-[#B87B1E] block mt-0.5 font-bold">
                      {salonData.brand.address.landmark}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] border border-[#DE9E32]/35 flex items-center justify-center flex-shrink-0 text-[#B87B1E]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#6E6A64] block font-semibold">
                      Operating Hours
                    </span>
                    {salonData.brand.hours.map((h, i) => (
                      <p key={i} className="text-[#54504B] font-normal">
                        {h.days}: <span className="text-[#1F1E1D] font-bold">{h.time}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Action Button */}
              <div className="mt-6 pt-5 border-t border-[#DE9E32]/20">
                <a
                  href={`https://wa.me/${salonData.brand.whatsappNumber}?text=Hi%20Diya's%20World,%20I%20have%20an%20inquiry%20regarding%20salon%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#1E7E34] font-['Montserrat',sans-serif] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Chat Directly on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#DE9E32]/35 shadow-[0_10px_35px_rgba(180,140,80,0.08)] h-64 sm:h-72 bg-white relative">
              <iframe
                title="Diya's World Salon Location Map"
                src={salonData.brand.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#DE9E32]/35 text-[11px] text-[#B87B1E] font-['Montserrat',sans-serif] font-bold shadow-md">
                📍 Opposite South City Mall, Kolkata
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
