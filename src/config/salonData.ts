export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  tag?: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  iconName: string;
  badge: string;
  description: string;
  image: string;
  services: ServiceItem[];
}

export interface PackagePlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  isPopular?: boolean;
  idealFor: string;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  locality: string;
  service: string;
  rating: number;
  date: string;
  avatar: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'skin' | 'makeup' | 'grooming' | 'nails';
  categoryLabel: string;
  image: string;
  description: string;
}

export const salonData = {
  brand: {
    name: "Diya's World",
    suffix: "The Family Salon",
    fullName: "Diya's World – The Family Salon",
    category: "Luxury Beauty Salon & Family Spa",
    location: "Kolkata, West Bengal, India",
    city: "Kolkata",
    phone: "8017999414",
    phoneDisplay: "+91 80179 99414",
    whatsappNumber: "918017999414",
    whatsappLink: "https://wa.me/918017999414",
    primaryCta: "Book Appointment",
    tagline: "Your Family's Beauty Destination",
    headlinePart1: "Where Every Visit",
    headlineAccent: "Feels Like Luxury",
    subheading: "Kolkata's most cherished boutique family salon. Bespoke hair couture, rejuvenating skin therapies, and artistic grooming tailored for women, men, and children under one welcoming roof.",
    
    // Address & Operational Details
    address: {
      line1: "82/1, Prince Anwar Shah Road",
      locality: "Lake Gardens / South City Enclave",
      landmark: "Opposite South City Mall & Lord's More",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700045",
      fullAddress: "82/1, Prince Anwar Shah Road, Near South City Mall, Kolkata, West Bengal 700045"
    },
    hours: [
      { days: "Monday – Friday", time: "10:00 AM – 8:30 PM" },
      { days: "Saturday & Sunday", time: "09:30 AM – 9:00 PM" },
    ],
    email: "care@diyasworld.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.668744136616!2d88.3546747!3d22.5029801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270d42d38627b%3A0xb3d7c3bc6b931d8!2sPrince%20Anwar%20Shah%20Rd%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    
    socials: {
      instagram: "https://instagram.com/diyasworldsalon",
      facebook: "https://facebook.com/diyasworldsalon",
      whatsapp: "https://wa.me/918017999414?text=Hi%20Diya's%20World,%20I%20would%20like%20to%20book%20an%20appointment.",
    },
    badges: [
      { text: "Family Friendly", icon: "Users" },
      { text: "Premium Products", icon: "Sparkles" },
      { text: "Expert Stylists", icon: "Award" },
      { text: "Hospital-Grade Hygiene", icon: "ShieldCheck" },
    ]
  },

  trustCounters: [
    { value: 18500, suffix: "+", label: "Happy Clients", description: "Across South & Central Kolkata" },
    { value: 12, suffix: "+", label: "Years of Excellence", description: "Trusted artisanal hair & beauty craft" },
    { value: 24, suffix: "+", label: "Certified Stylists", description: "L'Oréal & Kérastase certified experts" },
    { value: 90, suffix: "+", label: "Curated Services", description: "Bespoke therapies for the whole family" },
  ],

  about: {
    badge: "The Diya's World Story",
    title: "A Sanctuary of Care Where",
    titleAccent: "Every Generation Belongs",
    paragraphs: [
      "Founded with the vision to redefine Kolkata's salon landscape, Diya's World – The Family Salon isn't just a beauty stop — it is an intimate escape crafted for the modern family. Here, grandmothers enjoy soothing foot reflexology, fathers unwind with meticulous beard sculpts, mothers indulge in 24K gold facial rituals, and little ones laugh through their gentlest haircuts.",
      "We believe true luxury is warm, respectful, and attentive. Combining the science of world-renowned luxury formulations — from Kérastase and L'Oréal Professionnel to O3+ and Casmara — with the gracious warmth of Bengali hospitality, our certified master stylists deliver transformational experiences with honest transparency."
    ],
    pillars: [
      {
        title: "100% Genuine Luxury Products",
        description: "We use only authentic, top-tier international formulations: Kérastase Paris, L'Oréal Professionnel, O3+, Casmara Spain, and Dyson Supersonic technology.",
        icon: "Sparkles"
      },
      {
        title: "Certified Master Artisans",
        description: "Our senior stylists and aesthetic professionals undergo rigorous, continuous training in Paris & Mumbai trend cycles.",
        icon: "Award"
      },
      {
        title: "5-Star Hygienic Luxury",
        description: "Sterilized medical-grade tools, sealed single-use kits for every client, and dedicated sanitized zones for women, men, and children.",
        icon: "ShieldCheck"
      }
    ],
    image: "/assets/images/about-salon.jpg"
  },

  categories: [
    {
      id: "hair",
      name: "Hair Couture",
      iconName: "Scissors",
      badge: "Couture Styling",
      description: "Precision cuts, bespoke colouring, and nourishing elixirs tailored to Kolkata's tropical climate.",
      image: "/assets/images/service-hair.jpg",
      services: [
        { id: "h1", name: "Bespoke Designer Haircut & Blowout", category: "hair", description: "Face-contour consultation, therapeutic shampoo, customized cut, and signature volume blowout.", duration: "45 mins", price: "₹650", popular: true },
        { id: "h2", name: "Kérastase Fusio-Dose Instant Treatment", category: "hair", description: "Ultra-concentrated micro-targeted ritual for damaged, dull, or frizzy hair with instant mirror shine.", duration: "30 mins", price: "₹1,499" },
        { id: "h3", name: "Global Hair Colour & Balayage", category: "hair", description: "Hand-painted French balayage or root-to-tip ammonia-free L'Oréal Majirel/Inoa infusion.", duration: "120 mins", price: "From ₹2,800", popular: true },
        { id: "h4", name: "Brazilian Keratin Silk Therapy", category: "hair", description: "Intense smoothing & frizz-locking protein therapy lasting up to 5 months.", duration: "150 mins", price: "From ₹4,499" },
        { id: "h5", name: "Moroccan Argan Luxury Hair Spa", category: "hair", description: "Deep steam nourishment, acupressure scalp massage, and cuticle seal.", duration: "60 mins", price: "₹1,250" },
        { id: "h6", name: "Express Blowout & Thermal Waves", category: "hair", description: "Glamorous red-carpet curls, sleek straight or bouncy beach waves.", duration: "35 mins", price: "₹550" },
      ]
    },
    {
      id: "skin",
      name: "Skin & Facials",
      iconName: "Sparkles",
      badge: "Radiance Rituals",
      description: "Dermatologically inspired facial treatments engineered for eternal glow and cellular hydration.",
      image: "/assets/images/service-facial.jpg",
      services: [
        { id: "s1", name: "Diya's 24K Pure Gold Luxury Facial", category: "skin", description: "Royal gold leaf infusion, lymphatic drainage massage, and 24K peel-off firming mask.", duration: "75 mins", price: "₹2,799", popular: true },
        { id: "s2", name: "O3+ Bridal Glow Infusion", category: "skin", description: "Deep dermal oxygenation to diminish pigmentation, sun-tan, and stress marks instantly.", duration: "60 mins", price: "₹2,199" },
        { id: "s3", name: "Hydra-Dew Cellular D-Tan Treatment", category: "skin", description: "Gentle lactic exfoliation with hyaluronic ice globes massage for Kolkata weather.", duration: "45 mins", price: "₹1,199" },
        { id: "s4", name: "Casmara Algae Peel-Off Mask Facial", category: "skin", description: "Imported Spanish algae mask that lowers skin temperature by 6°C, tightening pores.", duration: "60 mins", price: "₹2,499" },
        { id: "s5", name: "Express Herbal Clarifying Clean-up", category: "skin", description: "Comedone extraction, tea tree detox mask, and refreshing rose hydrosol mist.", duration: "35 mins", price: "₹750" }
      ]
    },
    {
      id: "makeup",
      name: "Makeup & Occasions",
      iconName: "Crown",
      badge: "Artistry & Glamour",
      description: "From intimate pujas to grand Bengali wedding spectacles, crafted with MAC and Charlotte Tilbury.",
      image: "/assets/images/service-makeup.jpg",
      services: [
        { id: "m1", name: "Royal Bengali Bridal Makeover", category: "makeup", description: "Traditional Chandan art, HD bridal airbrush base, saree draping, and jewelry setting.", duration: "180 mins", price: "₹9,999", popular: true },
        { id: "m2", name: "High-Definition (HD) Party Glam", category: "makeup", description: "Camera-ready look, smoky or nude cut-crease eyes, lashes, and 12-hour setting.", duration: "75 mins", price: "₹2,999", popular: true },
        { id: "m3", name: "Engagement & Reception Makeover", category: "makeup", description: "Luminous glass-skin finish, intricate hair sculpting with floral accessories.", duration: "100 mins", price: "₹4,999" },
        { id: "m4", name: "Bridal Saree & Dupatta Draping", category: "makeup", description: "Bengali 'Aatpoure' style, modern Gujarati pleating, or royal lehenga setting.", duration: "30 mins", price: "₹650" }
      ]
    },
    {
      id: "nails",
      name: "Nails & Aesthetics",
      iconName: "Feather",
      badge: "Nail Boutique",
      description: "Flawless cuticle care, gel lacquer longevity, and bespoke high-fashion nail artistry.",
      image: "/assets/images/service-nails.jpg",
      services: [
        { id: "n1", name: "Russian Luxury Gel Manicure", category: "nails", description: "E-file meticulous cuticle polishing, strengthening builder gel, and mirror top coat.", duration: "60 mins", price: "₹1,199", popular: true },
        { id: "n2", name: "Floral Aroma Spa Pedicure", category: "nails", description: "Dead Sea mineral soak, calloused heel buffing, lavender scrub, and acupressure massage.", duration: "50 mins", price: "₹999" },
        { id: "n3", name: "Acrylic / Soft Gel Extensions with Art", category: "nails", description: "Full set extensions with French tip, ombre, chrome glazed donut, or 3D crystal accents.", duration: "90 mins", price: "₹1,999" },
        { id: "n4", name: "Express Shape & Gel Polish Change", category: "nails", description: "Nail contouring with 3-week chip-resistant UV gel colour application.", duration: "30 mins", price: "₹599" }
      ]
    },
    {
      id: "men",
      name: "Men's Grooming",
      iconName: "UserCheck",
      badge: "Gentlemen's Suite",
      description: "Old-world barbering precision meets modern styling in our dedicated private lounge.",
      image: "/assets/images/service-men.jpg",
      services: [
        { id: "mg1", name: "Gentleman's Signature Cut & Styling", category: "men", description: "Personalized scissor or fade cut, neck taper, invigorating hair wash, and styling.", duration: "40 mins", price: "₹450", popular: true },
        { id: "mg2", name: "Royal Hot Towel Beard Sculpting", category: "men", description: "Beard trim, hot aromatic towel steam, straight razor boundary shaping, and organic oil.", duration: "30 mins", price: "₹350" },
        { id: "mg3", name: "Men's Charcoal Anti-Pollution Facial", category: "men", description: "Activated carbon blackhead purge, cooling tea tree pack, and neck de-stress massage.", duration: "50 mins", price: "₹1,499" },
        { id: "mg4", name: "Scalp Detox & Hair Fall Control Spa", category: "men", description: "Micro-circulation tonic infusion, scalp steam, and high-frequency hair bulb therapy.", duration: "45 mins", price: "₹999" }
      ]
    },
    {
      id: "kids",
      name: "Kids' Haircuts & Pampering",
      iconName: "Smile",
      badge: "Kids' Corner",
      description: "Patience, warmth, and fun styling with tear-free gentle shampoos and special cartoon chairs.",
      image: "/assets/images/service-kids.jpg",
      services: [
        { id: "k1", name: "Gentle Little Prince / Princess Haircut", category: "kids", description: "Patient, playful haircut with sensory-friendly scissors and gentle styling spray.", duration: "30 mins", price: "₹350", popular: true },
        { id: "k2", name: "Kids' Fun Braid & Hair Tinsel Art", category: "kids", description: "Sparkly fairy tinsel or colorful braided beads — safe and easy to remove.", duration: "25 mins", price: "₹399" },
        { id: "k3", name: "Little Miss Non-Toxic Mini Mani", category: "kids", description: "Gentle nail shaping with water-based peelable pastel nail colours and sweet stickers.", duration: "25 mins", price: "₹350" }
      ]
    },
    {
      id: "waxing",
      name: "Waxing & Threading",
      iconName: "Sparkle",
      badge: "Silky Smooth",
      description: "Gentle Italian Rica liposoluble waxes and painless organic cotton thread contouring.",
      image: "/assets/images/service-waxing.jpg",
      services: [
        { id: "w1", name: "Rica Italian Full Body Waxing", category: "waxing", description: "Colophony-free avocado or white chocolate wax with pre-wax gel and post-soothing lotion.", duration: "75 mins", price: "₹1,899", popular: true },
        { id: "w2", name: "Full Arms + Full Legs Rica Wax", category: "waxing", description: "Painless hair removal that removes tan and leaves skin silky smooth.", duration: "45 mins", price: "₹999" },
        { id: "w3", name: "Precision Eyebrow & Forehead Threading", category: "waxing", description: "Organic antibacterial cotton threading for clean, balanced facial arches.", duration: "20 mins", price: "₹120" },
        { id: "w4", name: "Full Face Liposoluble Wax / Peel", category: "waxing", description: "Delicate peel-off wax for sensitive facial zones with aloe soothing gel.", duration: "25 mins", price: "₹450" }
      ]
    },
    {
      id: "bridal-groom",
      name: "Bridal & Groom Packages",
      iconName: "HeartHandshake",
      badge: "Grand Weddings",
      description: "Holistic multi-session bridal and groom packages curated for Kolkata weddings.",
      image: "/assets/images/service-bridal.jpg",
      services: [
        { id: "bg1", name: "The Shonar Bangla Royal Bride Package", category: "bridal-groom", description: "Full body polishing, Casmara Gold facial, Moroccan hair spa, bridal nail extensions, Rica full body wax, Chandan art, HD Airbrush makeup & saree draping.", duration: "3 Sessions", price: "₹16,999", popular: true },
        { id: "bg2", name: "The Zamindar Groom Royal Package", category: "bridal-groom", description: "Beard styling, hair revitalization, gold glow de-tan facial, manicure, pedicure, and wedding day styling.", duration: "2 Sessions", price: "₹6,999" },
        { id: "bg3", name: "Pre-Wedding Family Radiance (3 Members)", category: "bridal-groom", description: "Includes facials, haircuts, and relaxing spas for mother, sister, and bride.", duration: "Half Day", price: "₹11,499" }
      ]
    }
  ],

  signatureExperience: {
    tag: "Exclusive Signature Ritual",
    title: "The 24K Gold Imperial Hair & Face Elixir",
    subtitle: "A 120-Minute Rejuvenation Journey for Mind, Mane & Skin",
    description: "Our crowning masterpiece combining French hair biotechnology with pure 24-karat gold dermis therapy. Designed for milestone celebrations, pre-wedding rejuvenation, or whenever your spirit craves timeless pampering.",
    highlights: [
      "24K Gold Leaf Dermal Infusion with Rose Quartz Massage",
      "Kérastase Concentré Cellular Scalp & Length Rejuvenation",
      "Aromatic Hot Stone Foot Reflexology & Herbal Hand Mask",
      "Complimentary Artisan Darjeeling Green Tea & Golden Macarons"
    ],
    duration: "120 Minutes",
    price: "₹4,999",
    originalPrice: "₹7,500",
    image: "/assets/images/signature-experience.jpg",
    cta: "Book Signature Experience"
  },

  whyChooseUs: [
    {
      icon: "ShieldCheck",
      title: "100% Genuine Luxury Brands",
      description: "Zero compromises. We stock only sealed original products from Kérastase, L'Oréal Professionnel, O3+, Casmara, and Dyson."
    },
    {
      icon: "Sparkles",
      title: "Hospital-Grade Hygiene",
      description: "Autoclave sterilized instruments, single-use disposable capes, towels, and sealed manicure kits for every individual guest."
    },
    {
      icon: "Heart",
      title: "Warm Family Sanctuary",
      description: "A peaceful environment welcoming mothers, husbands, elderly parents, and toddlers with equal gentleness and dignity."
    },
    {
      icon: "Award",
      title: "Certified Master Artisans",
      description: "Our stylists bring an average of 8+ years of craft experience, continually trained under international beauty educators."
    },
    {
      icon: "Clock",
      title: "Punctual & Relaxing Ambience",
      description: "We honor appointment slots to ensure you never wait, enveloped in soft instrumental melodies and gentle amber lighting."
    },
    {
      icon: "Coins",
      title: "Affordable Luxury",
      description: "World-class salon experience without exorbitant five-star hotel markups. Transparent pricing with no hidden charges."
    }
  ],

  gallery: [
    {
      id: "g1",
      title: "Warm Caramel Balayage",
      category: "hair",
      categoryLabel: "Hair Couture",
      image: "/assets/images/gallery-1.jpg",
      description: "Subtle sun-kissed dimension using L'Oréal French Glossing."
    },
    {
      id: "g2",
      title: "Royal Bengali Bridal Radiance",
      category: "makeup",
      categoryLabel: "Bridal Makeup",
      image: "/assets/images/gallery-2.jpg",
      description: "Traditional Chandan detailing with timeless HD glow."
    },
    {
      id: "g3",
      title: "24K Gold Leaf Cellular Facial",
      category: "skin",
      categoryLabel: "Skin Therapy",
      image: "/assets/images/gallery-3.jpg",
      description: "Pure radiance treatment with cooling lymphatic rollers."
    },
    {
      id: "g4",
      title: "Sculpted Gentleman's Fade & Beard",
      category: "grooming",
      categoryLabel: "Men's Grooming",
      image: "/assets/images/gallery-6.jpg",
      description: "Hot towel straight razor edge and beard conditioning."
    },
    {
      id: "g5",
      title: "Bespoke Chrome Nail Extensions",
      category: "nails",
      categoryLabel: "Nails & Art",
      image: "/assets/images/service-nails.jpg",
      description: "Milky glazed chrome gel nails with floral embellishments."
    },
    {
      id: "g6",
      title: "Gentle Little Star Cut",
      category: "grooming",
      categoryLabel: "Kids Styling",
      image: "/assets/images/service-kids.jpg",
      description: "Tear-free, patient, and joyful haircut session."
    }
  ] as GalleryItem[],

  transformation: {
    title: "Before & After Transformation",
    subtitle: "Real Hair & Glow Transformations at Diya's World",
    beforeImage: "/assets/images/transform-before.jpg",
    afterImage: "/assets/images/transform-after.jpg",
    beforeLabel: "Before Treatment",
    afterLabel: "After Kérastase & Silk Gloss",
    details: "Frizzy, dull, weather-damaged hair transformed into silky, high-shine, resilient tresses in a single 90-minute session."
  },

  packages: [
    {
      id: "p1",
      name: "The Essential Radiance",
      subtitle: "Monthly Refresh Ritual",
      price: "₹1,999",
      originalPrice: "₹2,800",
      idealFor: "Ideal for regular monthly grooming & self-care",
      features: [
        "Designer Haircut & Conditioning Wash",
        "Herbal Glow / De-Tan Clean-up",
        "Aroma Spa Pedicure or Express Manicure",
        "Precision Eyebrow & Upper Lip Threading",
        "Complimentary Scalp Acupressure (10 mins)"
      ],
      ctaText: "Select Essential"
    },
    {
      id: "p2",
      name: "The Signature Luxury",
      subtitle: "Our Most Loved Indulgence",
      price: "₹4,499",
      originalPrice: "₹6,500",
      isPopular: true,
      idealFor: "Perfect before special family events & festivities",
      features: [
        "Kérastase Intensive Hair Spa & Blowout",
        "Diya's 24K Gold Radiant Facial",
        "Rica Italian Full Arms & Full Legs Waxing",
        "Russian Gel Manicure with Crystal Art",
        "Herbal Foot Reflexology Massage",
        "Complimentary Beverage & Sweet Treat"
      ],
      ctaText: "Book Signature Package"
    },
    {
      id: "p3",
      name: "The Royal Imperial Family Suite",
      subtitle: "Bespoke Family Celebration",
      price: "₹8,999",
      originalPrice: "₹13,500",
      idealFor: "Designed for 2 to 3 family members to share",
      features: [
        "2 × Customized High-End Facials (Gold or O3+)",
        "2 × Master Haircuts & Kérastase Treatments",
        "1 × Gentleman's Royal Beard Sculpt & Head Massage",
        "1 × Kids' Gentle Haircut & Fun Styling",
        "2 × Deluxe Floral Spa Pedicures",
        "Flexible appointment slots across the day"
      ],
      ctaText: "Reserve Family Suite"
    }
  ] as PackagePlan[],

  testimonials: [
    {
      id: "t1",
      name: "Soma Banerjee",
      locality: "South City Enclave, Kolkata",
      service: "24K Gold Facial & Balayage",
      rating: 5,
      date: "Last week",
      avatar: "/assets/images/avatar-1.jpg",
      quote: "Diya's World is a breath of fresh air in South Kolkata! The moment you walk in, the aroma, gold aesthetics, and warm greeting make you feel special. The 24K Gold facial gave my skin an unreal glow before my anniversary. My husband also got his beard groomed here and loved it!"
    },
    {
      id: "t2",
      name: "Dr. Aniruddha Sen",
      locality: "Ballygunge Circular Road",
      service: "Men's Cut & Scalp Detox",
      rating: 5,
      date: "2 weeks ago",
      avatar: "/assets/images/avatar-2.jpg",
      quote: "Finding a salon where both my 6-year-old son and I feel comfortable is rare. The staff were unbelievably patient with my son's haircut, and my haircut & scalp massage was crisp and professional. Clean, hygienic, and thoroughly top-class."
    },
    {
      id: "t3",
      name: "Priyanka Roychowdhury",
      locality: "Lake Gardens, Kolkata",
      service: "Bridal Package & Hair Keratin",
      rating: 5,
      date: "1 month ago",
      avatar: "/assets/images/avatar-3.jpg",
      quote: "I chose Diya's World for my pre-wedding bridal care and reception HD makeup. My keratin hair smoothening still looks like silk after two months! Diya and her master artists treat you like royalty. Truly ₹1 lakh+ salon vibes at sensible Kolkata pricing."
    },
    {
      id: "t4",
      name: "Debanjan Mukherjee",
      locality: "Salt Lake Sector V",
      service: "Gentleman's Royal Suite",
      rating: 5,
      date: "3 weeks ago",
      avatar: "/assets/images/avatar-4.jpg",
      quote: "Travelled all the way from Salt Lake on a friend's recommendation for my sister's wedding grooming. The hot towel beard sculpt and de-pollution facial were unmatched. The hygiene standard is hospital-grade. 10/10 recommended!"
    },
    {
      id: "t5",
      name: "Mousumi Chakraborty",
      locality: "New Alipore, Kolkata",
      service: "Family Suite Package",
      rating: 5,
      date: "Last month",
      avatar: "/assets/images/avatar-5.jpg",
      quote: "We booked the Family Suite for Durga Puja preparations. My mother-in-law had a relaxing foot spa while my daughter got cute pastel nail art. Everything was seamless, punctual, and wonderfully luxurious."
    }
  ] as Testimonial[],

  faq: [
    {
      q: "Do I need to book an appointment in advance?",
      a: "While we do accommodate walk-ins when possible, we strongly recommend booking in advance via our website or WhatsApp (8017999414) to guarantee your preferred artist and zero waiting time."
    },
    {
      q: "Are the products used authentic and safe for sensitive skin?",
      a: "Yes, 100%. We exclusively use authentic sealed products from world leaders including Kérastase, L'Oréal Professionnel, O3+, and Casmara. Patch tests are provided for sensitive skin."
    },
    {
      q: "Is Diya's World suitable for men and kids as well?",
      a: "Absolutely! We are proud to be a dedicated family salon with distinct, comfortable grooming zones for gentlemen and playful, sensory-friendly care for kids."
    },
    {
      q: "Can I customize the packages for my family members?",
      a: "Yes! All our packages can be tailored to suit specific family requirements or bridal party needs. Just let us know your preferences when booking."
    }
  ]
};
