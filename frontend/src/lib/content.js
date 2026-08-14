// Real business content for ART Med Spa — Bethlehem, Georgia

export const BUSINESS = {
  name: "ART Med Spa",
  tagline: "Refine, Rejuvenate & Reclaim Your Glow",
  address: "372 Exchange Blvd, Ste 2, Bethlehem, GA 30620",
  addressLine1: "372 Exchange Blvd, Ste 2",
  addressLine2: "Bethlehem, GA 30620",
  phone: "+1 (770) 902-6111",
  phoneHref: "tel:+17709026111",
  email: "info@art-medspa.com",
  emailHref: "mailto:info@art-medspa.com",
  serving:
    "Serving Bethlehem, Winder, Statham, Auburn, Loganville, Braselton & Northeast Georgia",
  promo: "20% Off Your First Treatment",
  mapEmbed:
    "https://www.google.com/maps?q=372+Exchange+Blvd+Bethlehem+GA+30620&output=embed",
};

// Vagaro booking links (live)
export const BOOKING_URL =
  "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVH+Cv5udIOwUZ1t1lHGjaw3Hd1yw2k4bTS3LvvEwnDayrghcIgVKLX+FTiD/B69FoqtGIcetLs7b6ib5DYG5sJyT2fRaIw8DTOvKBfsGaiGrFwt5wnp5rFOG/901XOkHtf2sEEG7ZQvCZwyufuigSO8xb3tojqMvt7fJaKmM/G2O4O5mNcKU1inZLtTCg0S/BfM2SesOTHu65Bz3j0w+qIot32U3HEH7kXowrdEATn3AGuis+6ynaYgXtD/8nRVMl6UThRRXshfbKmZCpfrtf9D4c2cGOymrdo9h9W0Fk6drGPIqLC45mPWG07n+HP2sjDvbJEPug5nU/2UmdxwSVQg0Nj0L/IEY0zH9h9//xUR9C8oLOnWmgzTRu2YuU/pGHBCra+PGo52K75TSfRuoMtLSkCOvv/NdF6AiOb39frUKfZqKnmRlWk1zFoz44f0RfQ==";

export const CONSULT_URL =
  "https://www.vagaro.com/cl/vH1b5aEh3Ee-V4md5axlBCMduA0Mbsr~7GOskcyYzOg=";

export const IMAGES = {
  logo: "/art-logo.webp",
  hero: "/hero.webp",
  injectables:
    "https://images.unsplash.com/photo-1731355771317-b2ab72c79124?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  laser:
    "https://images.unsplash.com/photo-1552693673-1bf958298935?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  wellness:
    "https://images.unsplash.com/photo-1650174378624-c9ab2c99e512?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  facial:
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  body:
    "https://images.unsplash.com/photo-1620733723572-11c53f73a416?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  hair:
    "https://images.unsplash.com/photo-1551184451-76b762941ad6?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  portraitGlow:
    "https://images.unsplash.com/photo-1672794776762-18dddc72982e?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
  spaInterior: "/about.webp",
  wellnessMoment:
    "https://images.unsplash.com/photo-1728727267814-792db55ce678?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export const TRUST = [
  "Licensed Professionals",
  "FDA-Approved Products",
  "Personalized Care",
];

export const MANIFESTO = [
  {
    n: "01",
    title: "Precision",
    body: "Every treatment is results-driven and delivered with medical exactness — designed to rejuvenate the skin, restore vitality, and enhance your natural beauty safely.",
  },
  {
    n: "02",
    title: "Artistry",
    body: "We enhance your features with subtle sophistication. Our certified team trains continuously in the latest techniques, so results are refined, balanced and beautifully natural.",
  },
  {
    n: "03",
    title: "Innovation",
    body: "We blend advanced technology with personalized care. From consultation to aftercare, every detail is delivered with intention, science and genuine warmth.",
  },
];

export const SERVICES = [
  {
    n: "01",
    title: "Injectables",
    tag: "Botox · Fillers · Kybella",
    desc: "Restore volume and smooth fine lines with Botox, dermal fillers and Kybella treatments for a refreshed, natural look.",
    image: IMAGES.injectables,
  },
  {
    n: "02",
    title: "Laser Treatments",
    tag: "Hair Removal · Skin",
    desc: "Achieve long-lasting hair reduction and visible skin improvements with advanced, comfortable laser technology.",
    image: IMAGES.laser,
  },
  {
    n: "03",
    title: "Wellness Services",
    tag: "IV Vitamin Therapy",
    desc: "Support your vitality with IV vitamin therapy, delivering essential nutrients directly into your system for maximum absorption.",
    image: IMAGES.wellness,
  },
  {
    n: "04",
    title: "Facial Services",
    tag: "Anti-Aging · Chemical Peels",
    desc: "Rejuvenating facials and chemical peels that target fine lines, dullness and texture for a radiant, healthy glow.",
    image: IMAGES.facial,
  },
  {
    n: "05",
    title: "Body Contouring",
    tag: "Non-Surgical Sculpting",
    desc: "Non-surgical fat reduction and skin tightening to sculpt and refine your natural shape — with little to no downtime.",
    image: IMAGES.body,
  },
  {
    n: "06",
    title: "PRP Hair Restoration",
    tag: "Natural Regrowth",
    desc: "Stimulate natural hair growth using your body's own platelet-rich plasma for thicker, fuller, healthier hair.",
    image: IMAGES.hair,
  },
];

export const MORE_SERVICES = [
  "Weight Loss Management",
  "Hormone Optimization Therapy",
  "Eyebrow Threading & Tinting",
  "Chemical Peel",
];

export const GALLERY = [
  { src: IMAGES.spaInterior, label: "Our Space", span: "tall" },
  { src: IMAGES.facial, label: "Facial Services" },
  { src: IMAGES.injectables, label: "Injectables" },
  { src: IMAGES.wellnessMoment, label: "IV Wellness", span: "tall" },
  { src: IMAGES.laser, label: "Laser Treatments" },
  { src: IMAGES.body, label: "Body Contouring" },
  { src: IMAGES.portraitGlow, label: "Real Radiance" },
  { src: IMAGES.hair, label: "Hair Restoration" },
];

export const TESTIMONIALS = [
  {
    quote:
      "The staff at ART Med Spa made me feel comfortable from the moment I walked in. They took time to explain everything and answer all my questions. I appreciated their honest approach about what to expect.",
    name: "Sarah M.",
    city: "Bethlehem, GA",
  },
  {
    quote:
      "I was nervous about my first med spa visit, but the team here was incredibly professional and put me at ease. They were thorough in their consultation and never pressured me into anything.",
    name: "Jennifer K.",
    city: "Winder, GA",
  },
  {
    quote:
      "Great experience overall. The facility is clean and modern, and the staff is knowledgeable. They were upfront about realistic expectations, which I really appreciated.",
    name: "Michael R.",
    city: "Loganville, GA",
  },
];

export const HOURS = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 5:00 PM" },
  { day: "Thursday", time: "10:00 AM – 7:00 PM" },
  { day: "Friday", time: "10:00 AM – 4:00 PM" },
  { day: "Saturday", time: "11:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export const FAQS = [
  {
    q: "Where can I find a med spa in Bethlehem, GA?",
    a: "ART Med Spa is located at 372 Exchange Boulevard, Suite 2, Bethlehem, Georgia 30620 — conveniently serving clients throughout Barrow County, Winder, Auburn, Statham, Loganville and surrounding Northeast Georgia communities. Our space was thoughtfully designed to feel calm, refined and welcoming.",
  },
  {
    q: "What injectable services do you offer?",
    a: "We offer Botox to temporarily relax facial muscles and soften wrinkles, dermal fillers to restore volume and smooth deeper lines in the cheeks, lips and nasolabial folds, and Kybella to reduce a double chin. Every treatment begins with a consultation so our expert injectors can recommend the best approach for your goals.",
  },
  {
    q: "Do you offer laser hair removal?",
    a: "Yes! Our laser hair removal achieves long-lasting hair reduction on nearly any area — face, underarms, bikini, legs, back and more. Most clients need 6–8 sessions as hair grows in cycles, with 70–90% permanent reduction. Treatments are quick with minimal discomfort.",
  },
  {
    q: "How long does Botox last?",
    a: "Botox results typically last 3–4 months. Effects gradually wear off as muscle activity returns. Regular maintenance every 3–4 months keeps your look smooth and may extend results over time. Your consultation will map out a personalized treatment schedule.",
  },
  {
    q: "What is IV vitamin therapy?",
    a: "IV vitamin therapy delivers essential vitamins and nutrients directly into your bloodstream for 100% absorption. Benefits include increased energy, enhanced immunity, improved hydration, faster recovery and better skin health. Sessions take just 30–60 minutes with formulas tailored to your needs.",
  },
  {
    q: "What areas of Georgia do you serve?",
    a: "Located in Bethlehem, GA (Barrow County), we proudly serve Bethlehem, Winder, Statham, Auburn, Loganville, Braselton, Hoschton, Jefferson and throughout Northeast Georgia — conveniently between Athens and Atlanta.",
  },
];
