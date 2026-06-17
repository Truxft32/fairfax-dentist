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
    "Premium family, cosmetic, emergency, and restorative dentistry in Fairfax, VA.",
  ogImage:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctor", href: "#doctor" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export const benefits = [
  { value: "4.9/5", label: "Average patient rating" },
  { value: "2,800+", label: "Fairfax smiles cared for" },
  { value: "Same day", label: "Emergency appointments" },
  { value: "25+", label: "Accepted insurance plans" },
] as const;

export const services = [
  "Preventive Cleanings & Exams",
  "Cosmetic Smile Design",
  "Invisalign Clear Aligners",
  "Porcelain Veneers",
  "Dental Implants",
  "Crowns & Bridges",
  "Teeth Whitening",
  "Emergency Dentistry",
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
    "Premium family, cosmetic, emergency, and restorative dentistry in Fairfax, Virginia.",
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
  areaServed: ["Fairfax", "Vienna", "Oakton", "Burke", "Fairfax County"],
  medicalSpecialty: ["Cosmetic Dentistry", "Family Dentistry", "Restorative Dentistry"],
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

export type Benefit = (typeof benefits)[number];
export type IconTone = "blue" | "teal" | "gold";
