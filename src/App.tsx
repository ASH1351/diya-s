import { useState } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { SignatureExperience } from './components/SignatureExperience';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { BookingModal } from './components/BookingModal';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSelectedService, setModalSelectedService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setModalSelectedService(serviceName);
    } else {
      setModalSelectedService('The Signature Luxury Package (₹4,499)');
    }
    setModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1F1E1D] selection:bg-[#DE9E32] selection:text-white overflow-x-hidden">
      {/* Custom Desktop Gold Ambient Cursor */}
      <CustomCursor />

      {/* 1. Loader with Stroke-drawing DW monogram */}
      <Loader />

      {/* 2. Sticky Glassmorphism Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 3. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 4. Trust Bar Counters */}
        <TrustBar />

        {/* 5. About Section with Arched Frame & Offset Gold Border */}
        <About onOpenBooking={() => handleOpenBooking('Family Consultation Visit')} />

        {/* 6. Services Tabbed Menu */}
        <Services onSelectService={(service) => handleOpenBooking(service)} />

        {/* 7. Signature Experience Banner */}
        <SignatureExperience onBookSignature={(name) => handleOpenBooking(name)} />

        {/* 8. Why Choose Us (6 Pillars) */}
        <WhyChooseUs />

        {/* 9. Gallery & Before/After Comparison Slider */}
        <Gallery onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 10. Pricing & Packages */}
        <Pricing onSelectPackage={(pkg) => handleOpenBooking(pkg)} />

        {/* 11. Testimonials Carousel */}
        <Testimonials />

        {/* 12. Booking Section with Form, Map & Direct Contact */}
        <BookingSection initialService={modalSelectedService} />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 13. Luxury Footer */}
      <Footer />

      {/* Floating Controls: WhatsApp, Back to Top & Mobile Sticky Bottom Bar */}
      <FloatingControls onOpenBooking={() => handleOpenBooking()} />

      {/* Reusable Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedService={modalSelectedService}
      />
    </div>
  );
}

export default App;
