export type BrowseCard = {
  title: string;
  description: string;
  image: string;
  href: string;
  eyebrow?: string;
  badge?: string;
  price?: string;
};

export type BrowseSection = {
  title: string;
  description?: string;
  cards: BrowseCard[];
};

export const shopSections: BrowseSection[] = [
  {
    title: "Weight management",
    description: "Clinician-guided GLP-1 programs with one clear monthly price.",
    cards: [
      {
        eyebrow: "Most popular",
        title: "Semaglutide",
        description: "GLP-1 based program with licensed-provider review and ongoing support.",
        image: "/images/cards/shop-semaglutide.webp",
        href: "/treatments/weight-management/semaglutide",
        price: "From $149/mo",
        badge: "Program",
      },
      {
        eyebrow: "Dual pathway",
        title: "Tirzepatide",
        description: "GIP + GLP-1 program for adults reviewed by a licensed clinician.",
        image: "/images/cards/shop-tirzepatide.webp",
        href: "/treatments/weight-management/tirzepatide",
        price: "From $249/mo",
        badge: "Program",
      },
      {
        title: "Weight Management",
        description: "Compare both programs and choose the plan that fits your goals.",
        image: "/images/cards/shop-weight.webp",
        href: "/treatments/weight-management",
        badge: "Category",
      },
    ],
  },
  {
    title: "Support & access",
    description: "Everything you need before and after you start.",
    cards: [
      {
        title: "Check eligibility",
        description: "See if VitaWellRx® programs are available in your state.",
        image: "/images/cards/get-started.webp",
        href: "/get-started",
        badge: "Start here",
      },
      {
        title: "Patient portal",
        description: "Manage intake, messages, orders, and program status online.",
        image: "/images/cards/care-portal.webp",
        href: "/account",
        badge: "Account",
      },
      {
        title: "Pricing",
        description: "Transparent all-inclusive monthly pricing with no hidden fees.",
        image: "/images/cards/pricing.webp",
        href: "/pricing",
        badge: "Pricing",
      },
    ],
  },
];

export const learnSections: BrowseSection[] = [
  {
    title: "Understand your care",
    description: "Educational guides to help you make informed decisions.",
    cards: [
      {
        title: "How GLP-1 programs work",
        description: "What GLP-1 medicines do, how telehealth review works, and what to expect.",
        image: "/images/cards/learn-glp1.webp",
        href: "/learn/glp-1",
        badge: "Guide",
      },
      {
        title: "Compounded medications",
        description: "How compounded formulations differ from FDA-approved branded products.",
        image: "/images/cards/learn-compounded.webp",
        href: "/compounded-medications",
        badge: "Guide",
      },
      {
        title: "Safety & eligibility",
        description: "Who may qualify, common side effects, and when to seek urgent care.",
        image: "/images/cards/learn-safety.webp",
        href: "/safety",
        badge: "Safety",
      },
    ],
  },
  {
    title: "Your experience",
    cards: [
      {
        title: "How it works",
        description: "From choosing a program to licensed-provider review and fulfillment.",
        image: "/images/cards/step-checkout.webp",
        href: "/how-it-works",
        badge: "Process",
      },
      {
        title: "Shipping & delivery",
        description: "Standard shipping, discreet packaging, and pharmacy fulfillment.",
        image: "/images/cards/delivery.webp",
        href: "/shipping",
        badge: "Fulfillment",
      },
      {
        title: "Provider network",
        description: "Independent US-licensed clinicians and pharmacy partners.",
        image: "/images/cards/consult.webp",
        href: "/provider-network",
        badge: "Clinical",
      },
    ],
  },
];

export const careSections: BrowseSection[] = [
  {
    title: "Your care journey",
    description: "Tools and support at every step of your VitaWellRx® program.",
    cards: [
      {
        title: "Start your intake",
        description: "Complete checkout first, then finish your secure medical questionnaire.",
        image: "/images/cards/get-started.webp",
        href: "/get-started",
        badge: "Step 1",
      },
      {
        title: "Message your care team",
        description: "Secure messaging and follow-up built into every program.",
        image: "/images/cards/care-support.webp",
        href: "/account",
        badge: "Support",
      },
      {
        title: "Track your order",
        description: "View program status, renewals, and shipping from your portal.",
        image: "/images/cards/care-portal.webp",
        href: "/account",
        badge: "Portal",
      },
    ],
  },
];

export const getStartedCards: BrowseCard[] = [
  {
    title: "Semaglutide program",
    description: "From $149/mo · GLP-1 based weight-management program.",
    image: "/images/cards/shop-semaglutide.webp",
    href: "/treatments/weight-management/semaglutide",
    price: "$149/mo",
  },
  {
    title: "Tirzepatide program",
    description: "From $249/mo · Dual-pathway weight-management program.",
    image: "/images/cards/shop-tirzepatide.webp",
    href: "/treatments/weight-management/tirzepatide",
    price: "$249/mo",
  },
  {
    title: "Check state availability",
    description: "See whether VitaWellRx® services are offered where you live.",
    image: "/images/cards/learn-safety.webp",
    href: "/states-we-serve",
    badge: "Required",
  },
  {
    title: "Read how it works",
    description: "Understand checkout, intake, and licensed-provider review.",
    image: "/images/cards/step-review.webp",
    href: "/how-it-works",
    badge: "Learn",
  },
];
