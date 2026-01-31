// ==========================================
// SITE CONFIGURATION
// Val's Landscape
// ==========================================

const CONFIG = {
  // ================================
  // BRAND IDENTITY
  // ================================
  brand: {
    name: "Val's Landscape",
    companySlug: "vals-landscape",
    tagline: "Professional Landscape Design & Installation",
    phone: "(650) 789-5558",
    phoneRaw: "6507895558",
    email: "NEED_FROM_CLIENT",
    address: "325 Sharon Park Dr Ste 634, Menlo Park, CA 94025",
    addressShort: "Menlo Park, CA 94025",
    hours: "Mon-Sat: 8AM - 6PM",
    license: "Licensed • Insured",
    logo: "/assets/clients/active/logo.png",
    logoIcon: "leaf",
    yearEstablished: "NEED_FROM_CLIENT",
  },

  // ================================
  // THEME & COLORS
  // ================================
  theme: {
    primaryColor: "#2d5a27",
    primaryDark: "#1e3d1a",
    primaryLight: "#4a7c43",
    accentColor: "#8db600",
    accentDark: "#729400",
    accentLight: "#a8d600",
    gold: "#f4c430",
    green: "#2d5a27",
    gradientPrimary: "#2d5a27",
    gradientAccent: "#8db600",
    glassBg: "rgba(255, 255, 255, 1)",
    shadowSoft: "0 4px 20px rgba(0, 0, 0, 0.08)",
    shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
    shadowStrong: "0 15px 50px rgba(0, 0, 0, 0.15)",
  },

  // ================================
  // NAVIGATION
  // ================================
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Our Work", href: "our-work.html" },
    { label: "Services", type: "servicesDropdown" },
    { label: "Service Areas", type: "serviceAreasDropdown" },
    { label: "Contact", href: "contact.html" },
  ],

  // ================================
  // TOP BAR
  // ================================
  topBar: {
    emergencyText: "Serving the Bay Area Peninsula",
    showAddress: true,
    showHours: true,
    hours: "Mon-Sat: 8AM-6PM",
    phoneLabel: "Call Now - Free Estimate",
  },

  // ==========================================
  // PROMO BANNER
  // ==========================================
  promoBanner: {
    enabled: false,
    text: "",
    linkText: "",
    linkHref: "#quote",
  },

  // ==========================================
  // TRUST BADGES (REQUIRED - used in hero)
  // ==========================================
  trustBadges: [
    { icon: "shield", text: "Licensed & Insured" },
    { icon: "star", text: "4.6★ Google Rating" },
    { icon: "clock", text: "Free Estimates" },
    { icon: "check", text: "Satisfaction Guaranteed" },
  ],

  // ==========================================
  // TRUST LOGOS - Certifications bar under nav
  // ==========================================
  trustLogos: {
    enabled: true,
    title: "Trusted & Certified",
    logos: [
      { name: "Google", rating: "4.6" },
      { name: "BBB", rating: "A+" },
      { name: "HomeAdvisor", rating: null },
      { name: "Angi", rating: null },
    ],
  },

  // ==========================================
  // GOOGLE REVIEWS
  // ==========================================
  googleReviews: {
    platform: "Google",
    rating: 4.6,
    count: 9,
    link: "https://www.google.com/maps/place/Val's+Landscape/",
    writeReviewLink: "https://g.page/r/NEED_PLACE_ID/review",
  },

  // ==========================================
  // SEO
  // ==========================================
  seo: {
    home: {
      title: "Val's Landscape | Menlo Park, CA Landscape Designer",
      description: "Professional landscape design and installation in Menlo Park, CA. Lawn care, sod installation, garden design & hardscaping. 4.6★ on Google. Call (650) 789-5558",
    },
    about: {
      title: "About Us | Val's Landscape",
      description: "Menlo Park's trusted landscape designer. We bring beautiful outdoor spaces to homes throughout the Bay Area Peninsula.",
    },
    services: {
      title: "Landscaping Services | Val's Landscape Menlo Park",
      description: "Landscape design, lawn installation, sod laying, garden beds, hardscaping, and outdoor living spaces in Menlo Park and surrounding areas.",
    },
    contact: {
      title: "Contact | Val's Landscape",
      description: "Get a free landscaping estimate today. Call (650) 789-5558 or request a quote online.",
    },
    serviceArea: {
      title: "Service Areas | Val's Landscape",
      description: "Landscaping services in Menlo Park, Palo Alto, Atherton, Redwood City, Los Altos, Mountain View and surrounding Bay Area communities.",
    },
    ourWork: {
      title: "Our Work | Val's Landscape",
      description: "See examples of our landscape design projects in Menlo Park. Lawns, gardens, hardscaping, and outdoor living spaces.",
    },
  },

  // ==========================================
  // IMAGES
  // ==========================================
  images: {
    basePath: "/assets/clients/active/",
    hero: "/assets/clients/active/hero.jpg",
    about: "/assets/clients/active/about.jpg",
    whyUs: "/assets/clients/active/why-us.jpg",
    contact: "/assets/clients/active/contact.jpg",

    services: {
      "landscape-design": "/assets/clients/active/services/landscape-design.jpg",
      "lawn-installation": "/assets/clients/active/services/lawn-installation.jpg",
      "sod-installation": "/assets/clients/active/services/sod-installation.jpg",
      "garden-beds": "/assets/clients/active/services/garden-beds.jpg",
      "hardscaping": "/assets/clients/active/services/hardscaping.jpg",
      "maintenance": "/assets/clients/active/services/maintenance.jpg",
    },

    gallery: {
      enabled: true,
      title: "Recent Work",
      subtitle: "Landscape projects completed for Bay Area homeowners",
      items: [
        { src: "/assets/clients/active/projects/01.jpg", alt: "Front yard landscape design" },
        { src: "/assets/clients/active/projects/02.jpg", alt: "Backyard lawn installation" },
        { src: "/assets/clients/active/projects/03.jpg", alt: "Shrub and plant design" },
        { src: "/assets/clients/active/projects/04.jpg", alt: "Pool area landscaping" },
      ],
    },
    fallback: "/assets/clients/active/fallback.jpg",
  },

  // ==========================================
  // HERO
  // ==========================================
  hero: {
    label: "Landscape Design & Installation",
    badge: "Licensed • Insured • Local",
    headline: "Landscape Design in",
    headlineAccent: "Menlo Park, CA",
    subhead: "Transform your outdoor space with professional landscape design, lawn installation, and garden services. Quality craftsmanship and attention to detail.",
    backgroundImage: "/assets/clients/active/hero.jpg",
    features: [
      "Free Estimates",
      "Custom Designs",
      "Quality Guaranteed"
    ],
    trustStrip: {
      enabled: true,
      items: [
        "Licensed & Insured",
        "4.6 ★ Google Rating",
        "Free Consultations",
        "Quality Guaranteed",
        "Serving the Peninsula"
      ],
    },
    guaranteeBadge: {
      enabled: false,
      text: "",
      subtext: "",
    },
    ctaPrimary: {
      text: "Get Free Estimate",
      href: "#quote",
    },
    ctaSecondary: {
      text: "Call Now",
      href: "tel:6507895558",
    },
  },

  // ==========================================
  // LEAD CAPTURE FORM
  // ==========================================
  form: {
    title: "Request a Free Estimate",
    subtitle: "Tell us about your landscaping project and we'll provide a free, no-obligation estimate.",
    formTitle: "Get Your Free Quote",
    formSubtitle: "No spam, no hassle — just honest pricing",
    responseBadge: "We Respond Within 24 Hours",
    phoneCtaLabel: "Prefer to talk? Call us now:",
    submitText: "Request Estimate",
    privacyText: "Your information is secure and never shared.",
    messagePlaceholder: "Describe your landscaping project (lawn size, design ideas, timeline, budget)...",
    showServiceDropdown: true,
    ghlWebhook: "NEED_FROM_CLIENT",
    successMessage: "Thanks! We'll be in touch within 24 hours.",
    features: [
      "Free Estimates",
      "No Obligation",
      "Licensed & Insured",
      "Quality Guaranteed"
    ],
    fields: [
      { name: "name", type: "text", placeholder: "Your Name", required: true, halfWidth: true },
      { name: "phone", type: "tel", placeholder: "Phone Number", required: true, halfWidth: true },
      { name: "email", type: "email", placeholder: "Email Address", required: false, halfWidth: false },
      { name: "address", type: "text", placeholder: "Property Address", required: false, halfWidth: false },
    ],
    serviceOptions: [
      { value: "", label: "Select a Service" },
      { value: "landscape-design", label: "Landscape Design" },
      { value: "lawn-installation", label: "Lawn Installation" },
      { value: "sod-installation", label: "Sod Installation" },
      { value: "garden-beds", label: "Garden Beds & Planting" },
      { value: "hardscaping", label: "Hardscaping" },
      { value: "maintenance", label: "Landscape Maintenance" },
      { value: "other", label: "Other" },
    ],
  },

  // ==========================================
  // SERVICES
  // ==========================================
  services: {
    label: "What We Do",
    title: "Our Services",
    subtitle: "Professional landscaping services for Bay Area homes",
    items: [
      {
        id: "landscape-design",
        title: "Landscape Design",
        slug: "landscape-design",
        icon: "pencil-ruler",
        shortDesc: "Custom landscape designs tailored to your property and lifestyle.",
        fullDesc: "We create beautiful, functional landscape designs that complement your home and fit your lifestyle. From initial consultation to detailed plans, we bring your vision to life.",
        features: [
          "Custom design consultation",
          "3D renderings available",
          "Plant selection guidance",
          "Phased implementation plans",
        ],
        image: "/assets/clients/active/services/landscape-design.jpg",
      },
      {
        id: "lawn-installation",
        title: "Lawn Installation",
        slug: "lawn-installation",
        icon: "home",
        shortDesc: "New lawn installation with premium grass varieties.",
        fullDesc: "Transform your yard with a lush, healthy lawn. We prepare the soil properly and install premium grass suited to our Bay Area climate.",
        features: [
          "Soil preparation & grading",
          "Premium grass selection",
          "Irrigation system setup",
          "Post-installation care guide",
        ],
        image: "/assets/clients/active/services/lawn-installation.jpg",
      },
      {
        id: "sod-installation",
        title: "Sod Installation",
        slug: "sod-installation",
        icon: "check",
        shortDesc: "Quick, beautiful results with professional sod installation.",
        fullDesc: "Get an instant lawn with our professional sod installation. We handle everything from soil prep to final rolling for a seamless, established lawn.",
        features: [
          "Same-day transformation",
          "Proper soil preparation",
          "Premium sod varieties",
          "Watering schedule provided",
        ],
        image: "/assets/clients/active/services/sod-installation.jpg",
      },
      {
        id: "garden-beds",
        title: "Garden Beds & Planting",
        slug: "garden-beds",
        icon: "heart",
        shortDesc: "Beautiful garden beds with plants suited to our climate.",
        fullDesc: "We design and install stunning garden beds featuring plants that thrive in the Bay Area. From colorful flowers to drought-tolerant natives, we create gardens that look great year-round.",
        features: [
          "Climate-appropriate plants",
          "Drip irrigation available",
          "Mulching included",
          "Seasonal color options",
        ],
        image: "/assets/clients/active/services/garden-beds.jpg",
      },
      {
        id: "hardscaping",
        title: "Hardscaping",
        slug: "hardscaping",
        icon: "home",
        shortDesc: "Patios, walkways, retaining walls and outdoor structures.",
        fullDesc: "Enhance your outdoor living with professional hardscaping. We build patios, walkways, retaining walls, and other structures that add function and beauty to your landscape.",
        features: [
          "Patios & walkways",
          "Retaining walls",
          "Outdoor kitchens",
          "Fire pits & features",
        ],
        image: "/assets/clients/active/services/hardscaping.jpg",
      },
      {
        id: "maintenance",
        title: "Landscape Maintenance",
        slug: "maintenance",
        icon: "settings",
        shortDesc: "Keep your landscape looking its best year-round.",
        fullDesc: "Protect your landscape investment with regular professional maintenance. We offer weekly, bi-weekly, and monthly service plans to keep your outdoor space pristine.",
        features: [
          "Mowing & edging",
          "Pruning & trimming",
          "Seasonal cleanups",
          "Fertilization programs",
        ],
        image: "/assets/clients/active/services/maintenance.jpg",
      },
    ],
  },

  // ==========================================
  // PROCESS / HOW IT WORKS
  // ==========================================
  process: {
    label: "How It Works",
    title: "Simple & Easy Process",
    steps: [
      {
        number: "1",
        title: "Request Estimate",
        desc: "Fill out our form or give us a call to schedule your free consultation."
      },
      {
        number: "2",
        title: "Get Your Plan",
        desc: "We'll visit your property, discuss your vision, and provide a detailed quote."
      },
      {
        number: "3",
        title: "We Transform",
        desc: "Our team brings your landscape vision to life with quality craftsmanship."
      }
    ]
  },

  // ==========================================
  // WHY CHOOSE US
  // ==========================================
  whyUs: {
    title: "Why Choose Val's Landscape",
    subtitle: "Quality craftsmanship and personalized service for every project",
    items: [
      {
        icon: "award",
        title: "Quality Craftsmanship",
        description: "We take pride in every project, using quality materials and proven techniques for lasting results.",
      },
      {
        icon: "users",
        title: "Personalized Service",
        description: "Work directly with our team from design through installation. We listen to your vision and make it reality.",
      },
      {
        icon: "home",
        title: "Local Expertise",
        description: "We know Bay Area soil, climate, and plants. Our designs thrive in our local conditions.",
      },
      {
        icon: "shield",
        title: "Licensed & Insured",
        description: "Full liability coverage and proper licensing for your peace of mind.",
      },
    ],
    image: "/assets/clients/active/why-us.jpg",
  },

  // ==========================================
  // OUR WORK / GALLERY (REQUIRED)
  // ==========================================
  ourWork: {
    label: "Our Work",
    title: "Recent Projects",
    subtitle: "See the quality and care we bring to every landscape",
    images: [
      { src: "/assets/clients/active/projects/01.jpg", alt: "Front yard landscape design" },
      { src: "/assets/clients/active/projects/02.jpg", alt: "Backyard lawn installation" },
      { src: "/assets/clients/active/projects/03.jpg", alt: "Shrub and plant design" },
      { src: "/assets/clients/active/projects/04.jpg", alt: "Pool area landscaping" },
    ],
  },

  // ==========================================
  // REVIEWS (REQUIRED)
  // ==========================================
  reviews: {
    title: "What Our Clients Say",
    subtitle: "See why Bay Area homeowners trust Val's Landscape",
    items: [
      {
        author: "Sarah M.",
        location: "Menlo Park, CA",
        rating: 5,
        text: "Val's team completely transformed our backyard. Professional, on-time, and the results exceeded our expectations. Highly recommend!",
      },
      {
        author: "Michael T.",
        location: "Palo Alto, CA",
        rating: 5,
        text: "Great experience from start to finish. They listened to what we wanted and delivered a beautiful front yard design. Very pleased with the work.",
      },
      {
        author: "Jennifer L.",
        location: "Atherton, CA",
        rating: 5,
        text: "We've used Val's Landscape for both installation and ongoing maintenance. Reliable, fairly priced, and always do quality work.",
      },
    ],
  },

  // ==========================================
  // CTA SECTION (REQUIRED)
  // ==========================================
  cta: {
    title: "Ready to Transform Your Outdoor Space?",
    subtitle: "Get a free estimate and see what's possible for your property",
    buttonText: "Get Free Estimate",
    buttonLink: "#quote",
  },

  // ==========================================
  // FAQ
  // ==========================================
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Answers to common questions about our landscaping services",
    items: [
      {
        question: "How much does landscaping cost?",
        answer: "Every project is unique, so costs vary based on scope, materials, and property size. We provide free, detailed estimates so you know exactly what to expect before work begins."
      },
      {
        question: "How long does a typical project take?",
        answer: "Small projects like garden bed installation may take 1-2 days, while full landscape designs can take 1-2 weeks. We'll give you a timeline during your consultation."
      },
      {
        question: "Do you offer maintenance services?",
        answer: "Yes! We offer weekly, bi-weekly, and monthly maintenance plans to keep your landscape looking its best year-round."
      },
      {
        question: "What areas do you serve?",
        answer: "We serve Menlo Park, Palo Alto, Atherton, Redwood City, Los Altos, Mountain View, and surrounding Bay Area communities."
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes, we are fully licensed and insured for your protection and peace of mind."
      },
    ],
  },

  // ==========================================
  // CONTACT PAGE
  // ==========================================
  contact: {
    title: "Contact Us",
    subtitle: "Ready to transform your outdoor space? Get in touch for a free estimate.",
    address: {
      street: "325 Sharon Park Dr Ste 634",
      city: "Menlo Park",
      state: "CA",
      zip: "94025",
      full: "325 Sharon Park Dr Ste 634, Menlo Park, CA 94025",
      locatedIn: "Sharon Heights Shopping Center",
    },
    phone: "(650) 789-5558",
    email: "NEED_FROM_CLIENT",
    hours: [
      { day: "Monday", hours: "8:00 AM - 6:00 PM" },
      { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
      { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
      { day: "Friday", hours: "8:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5!2d-122.208!3d37.442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb37a93ad145%3A0x5bb3f4a45f7e6e5a!2s325%20Sharon%20Park%20Dr%20%23634%2C%20Menlo%20Park%2C%20CA%2094025!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    formTitle: "Send Us a Message",
    formSubtitle: "We'll get back to you within 24 hours",
    formFields: [
      { name: "name", type: "text", placeholder: "Your Name", required: true, halfWidth: true },
      { name: "phone", type: "tel", placeholder: "Phone Number", required: true, halfWidth: true },
      { name: "email", type: "email", placeholder: "Email Address", required: false, halfWidth: false },
      { name: "address", type: "text", placeholder: "Property Address", required: false, halfWidth: false },
      { name: "message", type: "textarea", placeholder: "Describe your landscaping project...", required: false, halfWidth: false, rows: 4 },
    ],
    formSubmitText: "Request Quote",
  },

  // ==========================================
  // SERVICE AREA PAGE
  // ==========================================
  serviceArea: {
    title: "Areas We Serve",
    subtitle: "Professional landscaping throughout the Bay Area Peninsula",
    description: "We provide landscape design and installation services throughout Menlo Park and the surrounding Bay Area Peninsula communities. If you don't see your area listed, give us a call—we may still be able to help!",
    showMap: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.0!2d-122.25!3d37.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sMenlo%20Park%2C%20CA!5e0!3m2!1sen!2sus",
    primaryAreas: {
      title: "Primary Service Areas",
      subtitle: "Full service availability",
      areas: [
        "Menlo Park",
        "Palo Alto",
        "Atherton",
        "Redwood City",
        "Los Altos",
      ],
    },
    secondaryAreas: {
      title: "Extended Service Areas",
      subtitle: "Service available with advance scheduling",
      areas: [
        "Mountain View",
        "Sunnyvale",
        "Woodside",
        "Portola Valley",
        "San Carlos",
        "Belmont",
      ],
    },
    ctaTitle: "Not Sure If We Service Your Area?",
    ctaSubtitle: "Give us a call and we'll let you know!",
  },

  // ==========================================
  // INDIVIDUAL SERVICE AREA PAGES
  // ==========================================
  serviceAreas: [
    {
      id: "menlo-park",
      name: "Menlo Park",
      slug: "menlo-park",
      headline: "Landscape Design in Menlo Park, CA",
      description: "Professional landscape design and installation services in Menlo Park. Transform your outdoor space with custom designs tailored to your property.",
      features: [
        "Free estimates",
        "Custom designs",
        "Licensed & insured",
        "Quality guaranteed",
      ],
      neighborhoods: [
        "Sharon Heights",
        "Allied Arts",
        "Downtown Menlo Park",
        "The Willows",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Menlo+Park,+CA&output=embed",
    },
    {
      id: "palo-alto",
      name: "Palo Alto",
      slug: "palo-alto",
      headline: "Landscape Design in Palo Alto, CA",
      description: "Expert landscaping services in Palo Alto. From lawn installation to complete landscape transformations.",
      features: [
        "Free estimates",
        "Custom designs",
        "Licensed & insured",
        "Quality guaranteed",
      ],
      neighborhoods: [
        "Old Palo Alto",
        "Crescent Park",
        "College Terrace",
        "Midtown",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Palo+Alto,+CA&output=embed",
    },
    {
      id: "atherton",
      name: "Atherton",
      slug: "atherton",
      headline: "Landscape Design in Atherton, CA",
      description: "Premium landscape design services in Atherton. We create stunning outdoor spaces for discerning homeowners.",
      features: [
        "Free estimates",
        "Custom designs",
        "Licensed & insured",
        "Quality guaranteed",
      ],
      neighborhoods: [
        "Lindenwood",
        "West Atherton",
        "Lloyden Park",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Atherton,+CA&output=embed",
    },
    {
      id: "redwood-city",
      name: "Redwood City",
      slug: "redwood-city",
      headline: "Landscape Design in Redwood City, CA",
      description: "Quality landscaping services in Redwood City. Lawn installation, garden design, and hardscaping.",
      features: [
        "Free estimates",
        "Custom designs",
        "Licensed & insured",
        "Quality guaranteed",
      ],
      neighborhoods: [
        "Downtown",
        "Woodside Plaza",
        "Emerald Hills",
        "Edgewood Park",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Redwood+City,+CA&output=embed",
    },
    {
      id: "los-altos",
      name: "Los Altos",
      slug: "los-altos",
      headline: "Landscape Design in Los Altos, CA",
      description: "Professional landscaping in Los Altos. Beautiful designs for beautiful neighborhoods.",
      features: [
        "Free estimates",
        "Custom designs",
        "Licensed & insured",
        "Quality guaranteed",
      ],
      neighborhoods: [
        "Downtown Los Altos",
        "North Los Altos",
        "Country Club",
        "Loyola Corners",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Los+Altos,+CA&output=embed",
    },
    {
      id: "mountain-view",
      name: "Mountain View",
      slug: "mountain-view",
      headline: "Landscape Design in Mountain View, CA",
      description: "Landscaping services in Mountain View. From small gardens to complete yard transformations.",
      features: [
        "Free estimates",
        "Custom designs",
        "Licensed & insured",
        "Quality guaranteed",
      ],
      neighborhoods: [
        "Old Mountain View",
        "Cuesta Park",
        "Rex Manor",
        "Waverly Park",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Mountain+View,+CA&output=embed",
    },
  ],

  // ==========================================
  // FOOTER
  // ==========================================
  footer: {
    description: "Professional landscape design and installation serving Menlo Park and the Bay Area Peninsula. Quality craftsmanship for beautiful outdoor spaces.",
    copyright: `© ${new Date().getFullYear()} Val's Landscape. All rights reserved.`,
    social: {
      facebook: "NEED_FROM_CLIENT",
      instagram: "NEED_FROM_CLIENT",
      yelp: "NEED_FROM_CLIENT",
      nextdoor: "NEED_FROM_CLIENT",
    },
  },

  // ==========================================
  // UI TEXT
  // ==========================================
  ui: {
    callNow: "Call Now",
    callNowShort: "Call Now",
    freeQuoteShort: "Free Quote",
    phoneLabel: "Call Now - Free Estimate",
    getQuote: "Get Quote",
    learnMore: "Learn More",
    viewAll: "View All",
    readMore: "Read More",
    submitForm: "Submit",
    loading: "Loading...",
    success: "Success!",
    error: "Something went wrong. Please try again.",
    required: "Required",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    emergencyService: "Serving the Bay Area",
    freeEstimate: "Free Estimate",
    satisfactionGuarantee: "Quality Guaranteed",
  },
};

// Make CONFIG globally available
if (typeof window !== "undefined") {
  window.CONFIG = CONFIG;
}

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
