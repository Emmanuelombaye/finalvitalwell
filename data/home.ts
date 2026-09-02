export type HomeFeatureCard = {
  title: string;
  description: string;
  image: string;
  href: string;
  eyebrow: string;
};

export type HomeStepCard = {
  step: number;
  title: string;
  description: string;
  image: string;
};

export const homeFeatureCards: HomeFeatureCard[] = [
  {
    eyebrow: "Licensed care",
    title: "Provider review on your schedule",
    description:
      "Complete your secure intake after checkout. An independent US-licensed clinician reviews your health history remotely.",
    image: "/images/cards/consult.webp",
    href: "/how-it-works",
  },
  {
    eyebrow: "Clear pricing",
    title: "One monthly program price",
    description:
      "Semaglutide from $149/mo and Tirzepatide from $249/mo — consultation, support, and standard shipping included.",
    image: "/images/cards/pricing.webp",
    href: "/pricing",
  },
  {
    eyebrow: "Fulfillment",
    title: "Discreet pharmacy delivery",
    description:
      "When prescribed, medication is fulfilled through licensed US pharmacies with standard shipping included.",
    image: "/images/cards/delivery.webp",
    href: "/shipping",
  },
  {
    eyebrow: "Your journey",
    title: "Support beyond the first visit",
    description:
      "Message your care team, manage your program, and stay on track with ongoing follow-up built into every plan.",
    image: "/images/cards/wellness.webp",
    href: "/account",
  },
];

export const homeStepCards: HomeStepCard[] = [
  {
    step: 1,
    title: "Choose your program",
    description: "Compare Semaglutide and Tirzepatide with transparent all-inclusive pricing.",
    image: "/images/cards/step-choose.webp",
  },
  {
    step: 2,
    title: "Complete checkout",
    description: "Purchase your VitaWellRx® program securely online in minutes.",
    image: "/images/cards/step-checkout.webp",
  },
  {
    step: 3,
    title: "Finish your intake",
    description: "Submit your secure health questionnaire and identification after checkout.",
    image: "/images/cards/consult.webp",
  },
  {
    step: 4,
    title: "Provider review",
    description: "A licensed clinician determines whether treatment is medically appropriate for you.",
    image: "/images/cards/step-review.webp",
  },
];

export const homeStats = [
  { value: "$149", label: "Semaglutide from /mo" },
  { value: "$249", label: "Tirzepatide from /mo" },
  { value: "100%", label: "Online intake & review" },
  { value: "2", label: "Clinician-guided programs" },
] as const;
