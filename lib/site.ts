export const siteConfig = {
  name: "Fairfax Dental Atelier",
  domain: "fairfax.dentist",
  url: "https://fairfax.dentist",
  phone: "(703) 555-0198",
  phoneHref: "+17035550198",
  email: "hello@fairfax.dentist",
  addressLine1: "10321 Main Street, Suite 210",
  cityStateZip: "Fairfax, VA 22030",
  fullAddress: "10321 Main Street, Suite 210, Fairfax, VA 22030",
  description:
    "Premium family, cosmetic, emergency, implant, and restorative dentistry in Fairfax, VA.",
  ogImage:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Implants", href: "#implants" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export const benefits = [
  { value: "4.9/5", label: "Patient rating" },
  { value: "2,800+", label: "Smiles cared for" },
  { value: "Same-day", label: "Emergency visits" },
  { value: "25+", label: "Accepted insurance plans" },
] as const;

export const heroHighlights = [
  {
    title: "Patient-First Care",
    copy: "Gentle visits, clear explanations, and treatment plans that respect your goals.",
  },
  {
    title: "Advanced Technology",
    copy: "Digital imaging, intraoral photography, and modern restorative materials.",
  },
  {
    title: "Locally Owned Practice",
    copy: "Convenient care for Fairfax families, professionals, and nearby communities.",
  },
] as const;

export const clinicImages = {
  operatory:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=85",
  doctor:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85",
  consultation:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=85",
  family:
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=82",
  exterior:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82",
} as const;

export const services = [
  {
    title: "Preventive Cleanings & Exams",
    copy: "Thorough cleanings, digital exams, oral cancer screenings, and practical home-care guidance.",
  },
  {
    title: "Cosmetic Smile Design",
    copy: "Personalized whitening, bonding, veneers, and aesthetic planning for natural-looking results.",
  },
  {
    title: "Invisalign Clear Aligners",
    copy: "Discreet orthodontic planning for adults and teens who want a more confident bite and smile.",
  },
  {
    title: "Porcelain Veneers",
    copy: "Custom ceramic restorations designed for balanced color, shape, symmetry, and facial harmony.",
  },
  {
    title: "Dental Implants",
    copy: "Implant restorations planned around bite stability, gum health, and long-term function.",
  },
  {
    title: "Crowns & Bridges",
    copy: "Durable restorative dentistry for cracked, worn, missing, or heavily treated teeth.",
  },
  {
    title: "Teeth Whitening",
    copy: "Professional whitening options with shade guidance and sensitivity-conscious protocols.",
  },
  {
    title: "Emergency Dentistry",
    copy: "Prompt care for tooth pain, broken teeth, swelling, lost crowns, and urgent dental concerns.",
  },
] as const;

export const featuredTreatments = [
  {
    title: "Dental Implants in Fairfax",
    kicker: "Replace missing teeth",
    copy: "We restore implants with careful attention to bite, gum contours, and long-term maintenance so your replacement tooth feels secure and looks natural.",
    href: "#contact",
  },
  {
    title: "Cosmetic Dentistry",
    kicker: "Smile design",
    copy: "From whitening to veneers, cosmetic recommendations are built around your face, goals, and the details that make a smile look believable.",
    href: "#contact",
  },
  {
    title: "Emergency Dentist",
    kicker: "Same-day help when possible",
    copy: "Dental pain, broken teeth, and swelling should not wait. Call our Fairfax team for the earliest available urgent appointment.",
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    title: "Invisalign Clear Aligners",
    kicker: "Straighten without brackets",
    copy: "Digital aligner planning helps improve crowding, spacing, and bite concerns with a discreet treatment option.",
    href: "#contact",
  },
] as const;

export const practiceFeatures = [
  {
    title: "Digital-first diagnosis",
    copy: "Low-radiation imaging, intraoral cameras, and clear visual treatment plans.",
    tone: "teal",
  },
  {
    title: "Comfort-focused visits",
    copy: "Noise reduction, gentle anesthesia, cozy amenities, and unhurried appointments.",
    tone: "teal",
  },
  {
    title: "Cosmetic detail",
    copy: "Natural tooth shapes, balanced proportions, and shade-matched ceramics.",
    tone: "gold",
  },
  {
    title: "Transparent care",
    copy: "No-pressure recommendations with fees, timelines, and alternatives explained up front.",
    tone: "teal",
  },
] as const;

export const doctorCredentials = [
  "AACD continuing education",
  "Implant restoration training",
  "Invisalign provider",
] as const;

export const testimonials = [
  {
    quote:
      "The experience felt calm from the first call. The doctor explained every option clearly and the results look natural, not overdone.",
    name: "Megan R.",
    detail: "Cosmetic dentistry patient",
  },
  {
    quote:
      "I needed a dentist in Fairfax, VA who could see me quickly for a broken tooth. They handled it the same day with real care.",
    name: "Anthony B.",
    detail: "Emergency visit",
  },
  {
    quote:
      "Beautiful office, gentle hygienists, and no pressure. It feels like a premium practice with a very human approach.",
    name: "Priya S.",
    detail: "Family care patient",
  },
] as const;

export const whyChooseItems = [
  "Private treatment rooms with advanced imaging",
  "Conservative dentistry before complex treatment",
  "Natural-looking cosmetic materials",
  "Online scheduling and digital forms",
  "Same-day emergency care when possible",
  "Easy access from Old Town Fairfax and Route 50",
] as const;

export const financingOptions = [
  "PPO insurance support",
  "Phased treatment plans",
  "Monthly payment options",
] as const;

export const faqs = [
  {
    q: "Are you accepting new patients in Fairfax?",
    a: "Yes. We welcome adults, teens, and families from Fairfax, Oakton, Vienna, Burke, and nearby Northern Virginia communities.",
  },
  {
    q: "Do you take dental insurance?",
    a: "We work with many PPO plans and provide clear estimates before treatment. Our team also helps file claims on your behalf.",
  },
  {
    q: "Can I book an emergency dental appointment?",
    a: "Same-day emergency visits are available whenever the schedule allows for tooth pain, broken teeth, swelling, or lost restorations.",
  },
  {
    q: "Do you offer cosmetic dentistry consultations?",
    a: "Yes. Smile design consultations include photos, goals, treatment options, timelines, and transparent pricing.",
  },
] as const;

export const dentistJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "LocalBusiness"],
  "@id": `${siteConfig.url}/#dentist`,
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phoneHref,
  email: siteConfig.email,
  priceRange: "$$",
  image: siteConfig.ogImage,
  description:
    "Premium family, cosmetic, emergency, implant, and restorative dentistry in Fairfax, Virginia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine1,
    addressLocality: "Fairfax",
    addressRegion: "VA",
    postalCode: "22030",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.8462,
    longitude: -77.3064,
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=Fairfax%20Dental%20Atelier%20Fairfax%20VA",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "187",
  },
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      areaServed: "Fairfax, VA",
    },
  })),
  areaServed: ["Fairfax", "Vienna", "Oakton", "Burke", "Fairfax County"],
  medicalSpecialty: [
    "Cosmetic Dentistry",
    "Family Dentistry",
    "Restorative Dentistry",
    "Dental Implants",
    "Emergency Dentistry",
  ],
  sameAs: [`https://${siteConfig.domain}`],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
} as const;

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "en-US",
  publisher: {
    "@id": `${siteConfig.url}/#dentist`,
  },
} as const;

export type Benefit = (typeof benefits)[number];
export type HeroHighlight = (typeof heroHighlights)[number];
export type Service = (typeof services)[number];
export type FeaturedTreatment = (typeof featuredTreatments)[number];
export type IconTone = "blue" | "teal" | "gold";
