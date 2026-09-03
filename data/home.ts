import { images } from "@/data/images";

export type HomeFeatureCard = {
  title: string;
  description: string;
  image: string;
  href: string;
  eyebrow: string;
  imageFit?: "cover" | "contain";
};

export type HomeStepCard = {
  step: number;
  title: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
};

export const homeFeatureCards: HomeFeatureCard[] = [
  {
    eyebrow: "Licensed care",
    title: "Provider review on your schedule",
    description:
      "Complete your secure intake after checkout. An independent US-licensed clinician reviews your health history remotely.",
    image: images.homeFeatures.licensedCare,
    href: "/how-it-works",
  },
  {
    eyebrow: "Clear pricing",
    title: "One monthly program price",
    description:
      "Semaglutide from $149 per month and Tirzepatide from $249 per month. Consultation, support, and standard shipping included.",
    image: images.homeFeatures.pricing,
    href: "/pricing",
  },
  {
    eyebrow: "Fulfillment",
    title: "Discreet pharmacy delivery",
    description:
      "When prescribed, medication is fulfilled through licensed US pharmacies with standard shipping included.",
    image: images.homeFeatures.fulfillment,
    href: "/shipping",
  },
  {
    eyebrow: "Your journey",
    title: "Support beyond the first visit",
    description:
      "Message your care team, manage your program, and stay on track with ongoing follow-up built into every plan.",
    image: images.homeFeatures.journey,
    href: "/account",
  },
];

export const homeStepCards: HomeStepCard[] = [
  {
    step: 1,
    title: "Choose your program",
    description: "Compare Semaglutide and Tirzepatide with transparent all-inclusive pricing.",
    image: images.vials.semaglutide,
    imageFit: "contain",
  },
  {
    step: 2,
    title: "Complete checkout",
    description: "Purchase your VitaWellRx program securely online in minutes.",
    image: images.consult,
  },
  {
    step: 3,
    title: "Finish your intake",
    description: "Submit your secure health questionnaire and identification after checkout.",
    image: images.hero,
  },
  {
    step: 4,
    title: "Provider review",
    description: "A licensed clinician determines whether treatment is medically appropriate for you.",
    image: images.delivery,
  },
];

export const homeStats = [
  { value: "$149", label: "Semaglutide from /mo" },
  { value: "$249", label: "Tirzepatide from /mo" },
  { value: "24–48h", label: "Typical medical review*" },
  { value: "0", label: "Hidden fees" },
] as const;
