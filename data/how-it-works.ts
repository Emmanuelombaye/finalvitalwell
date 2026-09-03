import type { HomeStepCard } from "@/data/home";
import type { BrowseCard } from "@/data/browse-cards";

const base = "/images/how-it-works";

export const howItWorksImages = {
  hero: `${base}/hero.webp`,
  steps: {
    choose: `${base}/step-1-choose.webp`,
    checkout: `${base}/step-2-checkout.webp`,
    intake: `${base}/step-3-intake.webp`,
    review: `${base}/step-4-review.webp`,
    account: `${base}/step-5-account.webp`,
    delivery: `${base}/step-6-delivery.webp`,
  },
  cta: {
    eligibility: `${base}/cta-eligibility.webp`,
    programs: `${base}/cta-programs.webp`,
  },
} as const;

export const howItWorksSteps: HomeStepCard[] = [
  {
    step: 1,
    title: "Choose your program",
    description: "Compare Semaglutide and Tirzepatide with transparent all-inclusive pricing.",
    image: howItWorksImages.steps.choose,
    imageFit: "contain",
  },
  {
    step: 2,
    title: "Complete checkout",
    description: "Purchase your VitaWellRx program securely online in minutes.",
    image: howItWorksImages.steps.checkout,
    imageFit: "contain",
  },
  {
    step: 3,
    title: "Finish your intake",
    description: "Submit your secure health questionnaire and identification after checkout.",
    image: howItWorksImages.steps.intake,
    imageFit: "contain",
  },
  {
    step: 4,
    title: "Provider review",
    description: "A licensed clinician determines whether treatment is medically appropriate for you.",
    image: howItWorksImages.steps.review,
    imageFit: "contain",
  },
  {
    step: 5,
    title: "Create your account",
    description: "Use the same email from checkout so orders, intake, and messages stay in one place.",
    image: howItWorksImages.steps.account,
    imageFit: "contain",
  },
  {
    step: 6,
    title: "Fulfilment and support",
    description: "If approved, standard shipping is included. Follow-up stays inside your account.",
    image: howItWorksImages.steps.delivery,
    imageFit: "contain",
  },
];

export const howItWorksCtaCards: BrowseCard[] = [
  {
    title: "Check eligibility",
    description: "Start with a short review of programs and state availability.",
    image: howItWorksImages.cta.eligibility,
    href: "/get-started",
    imageFit: "contain",
  },
  {
    title: "Browse programs",
    description: "Compare Semaglutide and Tirzepatide with transparent pricing.",
    image: howItWorksImages.cta.programs,
    href: "/shop",
    imageFit: "contain",
  },
];
