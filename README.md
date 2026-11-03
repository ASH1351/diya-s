# Diya's World – The Family Salon | Kolkata

> **Where Every Visit Feels Like Luxury**  
> Ultra-premium, mobile-first website for *Diya's World – The Family Salon*, Kolkata's premier boutique beauty salon for women, men, and children.

---

## 💎 Brand & Design System

- **Brand Name**: Diya's World – The Family Salon
- **Location**: 82/1, Prince Anwar Shah Road, Lake Gardens, Kolkata 700045 (Opposite South City Mall)
- **Direct Booking Line**: `+91 80179 99414` (8017999414)
- **WhatsApp Integration**: Instant formatted reservation sent directly to `+91 80179 99414`
- **Colors**:
  - Primary Canvas: Alabaster Ivory `#FAF8F5`, alternating with Warm Cashmere Cream `#F4F0E8`
  - Cards & Modals: Pure White `#FFFFFF` with warm gold borders & soft 3D elevation
  - Metallic Gold Foil Gradient: `#C58925` → `#DE9E32` → `#F7C464`
  - Typography: Espresso Charcoal `#1F1E1D` and Truffle Taupe `#54504B`
- **Typography**:
  - Headings: `Cormorant Garamond` & `Playfair Display`
  - Script Monogram & Accent: `Allura` & `Great Vibes`
  - Body & UI: `Montserrat` & `Jost`

---

## 🏛️ Sections & Features Implemented

1. **Loader Screen**:
   - Signature charcoal background (`#3C3C3D`)
   - Calligraphic DW monogram draws itself stroke-by-stroke in gold (SVG stroke animation with glow filter)
   - Shimmer fade-up of *"Diya's World • The Family Salon • Kolkata"*
   - Smooth non-blocking transition into the hero

2. **Sticky Glassmorphism Navbar**:
   - Monogram crest & brand typography
   - Navigation links: Home, About, Services, Signature, Gallery, Pricing, Testimonials, Contact
   - Direct call button (`+91 80179 99414`) and gold shimmer *"Book Appointment"* CTA
   - Mobile: Full-screen luxury slide-in drawer with tap-to-call and quick reservation

3. **Cinematic Hero**:
   - Ambient gold particle and atmospheric gradient overlays
   - Dramatic headline: *"Where Every Visit Feels Like Luxury"* with script calligraphy
   - Two CTAs: *"Book Appointment"* (gold filled foil) & *"Explore Services"* (gold outline)
   - 4 floating luxury info chips: Family Friendly, Premium Products, Expert Stylists, Hospital Hygiene
   - Animated scroll indicator

4. **Trust Bar**:
   - Animated counters on scroll:
     - 18,500+ Happy Clients
     - 12+ Years of Excellence
     - 24+ Certified Stylists
     - 90+ Curated Services

5. **About Section**:
   - Split layout with arched image frame & offset gold filigree border
   - Floating experience stamp: *"12+ Years of Revered Care"*
   - Story of multi-generational pampering for grandmothers, mothers, fathers, and toddlers
   - 3 Pillars: 100% Genuine Luxury Brands (Kérastase, L'Oréal, O3+, Casmara), Certified Master Artisans, 5-Star Hygienic Luxury

6. **Interactive Artisanal Services Menu**:
   - Touch-friendly horizontal category tabs:
     - Hair Couture
     - Skin & Facials
     - Makeup & Occasions
     - Nails & Aesthetics
     - Men's Grooming
     - Kids' Haircuts & Pampering
     - Waxing & Threading
     - Bridal & Groom Packages
   - Each card features duration, starting price, description, and a *"Book Now"* button that pre-selects the item in the booking modal

7. **Signature Experience Banner**:
   - Parallax banner highlighting *"The 24K Gold Imperial Hair & Face Elixir"* (120 Mins)
   - Special luxury pricing callout (₹4,999, Save 33%) and direct booking CTA

8. **Why Choose Us (6 Pillars)**:
   - Genuine Luxury Brands, Hospital-Grade Hygiene, Family First Sanctuary, Certified Artisans, Punctual Relaxing Ambience, Affordable Luxury

9. **Visual Portfolio & Transformation Slider**:
   - Filterable categories: All, Hair, Skincare, Makeup, Men & Kids
   - **Interactive Before & After Transformation Slider** (draggable/touch slider comparing real hair and glow treatments)
   - Lightbox modal with zoom view and next/prev navigation

10. **Pricing & Packages**:
    - 3 luxury cards: *The Essential Radiance* (₹1,999), *The Signature Luxury* (₹4,499 - highlighted with glowing gold border and "Most Popular" ribbon), *The Royal Imperial Family Suite* (₹8,999)
    - Note on 100% customisable packages for family members

11. **Testimonials Carousel**:
    - Verified client reviews from Kolkata neighborhoods (South City, Ballygunge, Lake Gardens, Salt Lake, New Alipore)
    - 5 gold star ratings, decorative quote marks, and autoplay with pause on hover

12. **Priority Reservation & Contact Section**:
    - Form: Name, Phone, Service dropdown, Preferred Date, Preferred Slot, Guests, Special Notes
    - Confetti celebration + automated WhatsApp redirection to `8017999414` with pre-filled message
    - Direct phone number, address opposite South City Mall, working hours, and embedded interactive Kolkata Google Map

13. **FAQ Accordion**:
    - Answers on appointments, authentic products, kids' haircuts, and family customizations

14. **Luxury Footer**:
    - DW monogram logo, tagline *"Your Family's Beauty Destination"*, quick links, social links (Instagram, Facebook, WhatsApp), copyright

15. **Floating Elements**:
    - Sticky floating WhatsApp button with emerald/gold pulse aura
    - Mobile sticky bottom bar with two touch-friendly buttons: *"Call Now"* & *"Book Appointment"*
    - Back-to-top smooth button in gold

16. **Custom Gold Desktop Cursor**:
    - Soft gold radial glow tracking the cursor on desktop (disabled on touch devices and respects `prefers-reduced-motion`)

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + `@tailwindcss/vite` + Custom Luxury CSS Utilities
- **Icons**: Lucide React + custom inline SVG icons
- **Animations**: CSS keyframe animations, SVG stroke-drawing, canvas-confetti
- **SEO & Schema**: LocalBusiness / BeautySalon JSON-LD structured data, Open Graph meta tags, responsive viewport optimizations

---

## 📁 Centralized Configuration (Edit Any Content Here)

All salon details, pricing, services, addresses, phone numbers, and images are stored in a single file:

```
src/config/salonData.ts
```

To update any price, phone number, address, or service description, simply open `src/config/salonData.ts` and edit the values. The changes will instantly reflect throughout the entire website.

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized, minified bundle in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Runs the local preview server on [http://localhost:4173](http://localhost:4173).
