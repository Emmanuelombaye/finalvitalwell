import { images } from "@/data/images";

export type BrowseCard = {
  title: string;
  description: string;
  image: string;
  href: string;
  imageFit?: "cover" | "contain";
};

export type BrowseSection = {
  title: string;
  description?: string;
  cards: BrowseCard[];
};

export const shopSections: BrowseSection[] = [
  {
    title: "Weight management",
    description: "Clinician-guided programs with one clear monthly price.",
    cards: [
      {
        title: "Semaglutide",
        description: "Weight-management program with licensed-provider review and ongoing support.",
        image: images.vials.semaglutide,
        href: "/treatments/weight-management/semaglutide",
        imageFit: "contain",
      },
      {
        title: "Tirzepatide",
        description: "Weight-management program for adults reviewed by a licensed clinician.",
        image: images.vials.tirzepatide,
        href: "/treatments/weight-management/tirzepatide",
        imageFit: "contain",
      },
      {
        title: "Weight Management",
        description: "Compare both programs and choose the plan that fits your goals.",
        image: images.category,
        href: "/treatments/weight-management",
      },
    ],
  },
  {
    title: "Support and access",
    description: "Everything you need before and after you start.",
    cards: [
      {
        title: "Check eligibility",
        description: "See if VitaWellRx programs are available in your state.",
        image: images.hero,
        href: "/get-started",
      },
      {
        title: "Patient portal",
        description: "Manage intake, messages, orders, and program status online.",
        image: images.consult,
        href: "/account",
      },
      {
        title: "Pricing",
        description: "Transparent all-inclusive monthly pricing with no hidden fees.",
        image: images.vials.semaglutide,
        href: "/pricing",
        imageFit: "contain",
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
        title: "How programs work",
        description: "What to expect from telehealth review and ongoing care.",
        image: images.wellness,
        href: "/learn/glp-1",
      },
      {
        title: "Compounded medications",
        description: "How compounded formulations differ from FDA-approved branded products.",
        image: images.vials.semaglutide,
        href: "/compounded-medications",
        imageFit: "contain",
      },
      {
        title: "Safety and eligibility",
        description: "Who may qualify, common side effects, and when to seek urgent care.",
        image: images.category,
        href: "/safety",
      },
    ],
  },
  {
    title: "Your experience",
    cards: [
      {
        title: "How it works",
        description: "From choosing a program to licensed-provider review and fulfillment.",
        image: images.consult,
        href: "/how-it-works",
        imageFit: "contain",
      },
      {
        title: "Shipping and delivery",
        description: "Standard shipping, discreet packaging, and pharmacy fulfillment.",
        image: images.delivery,
        href: "/shipping",
        imageFit: "contain",
      },
      {
        title: "Provider network",
        description: "Independent US-licensed clinicians and pharmacy partners.",
        image: images.providerNetwork,
        href: "/provider-network",
        imageFit: "contain",
      },
    ],
  },
];

export const careSections: BrowseSection[] = [
  {
    title: "Your care journey",
    description: "Tools and support at every step of your VitaWellRx program.",
    cards: [
      {
        title: "Start your intake",
        description: "Complete checkout first, then finish your secure medical questionnaire.",
        image: images.hero,
        href: "/get-started",
      },
      {
        title: "Message your care team",
        description: "Secure messaging and follow-up built into every program.",
        image: images.consult,
        href: "/account",
      },
      {
        title: "Track your order",
        description: "View program status, renewals, and shipping from your portal.",
        image: images.delivery,
        href: "/account",
      },
    ],
  },
];

export const getStartedCards: BrowseCard[] = [
  {
    title: "Semaglutide",
    description: "From $149 per month. Weight-management program.",
    image: images.vials.semaglutide,
    href: "/treatments/weight-management/semaglutide",
    imageFit: "contain",
  },
  {
    title: "Tirzepatide",
    description: "From $249 per month. Weight-management program.",
    image: images.vials.tirzepatide,
    href: "/treatments/weight-management/tirzepatide",
    imageFit: "contain",
  },
  {
    title: "Check state availability",
    description: "See whether VitaWellRx services are offered where you live.",
    image: images.category,
    href: "/states-we-serve",
  },
  {
    title: "How it works",
    description: "Understand checkout, intake, and licensed-provider review.",
    image: images.consult,
    href: "/how-it-works",
  },
];
