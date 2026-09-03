export const images = {
  hero: "/images/hero.webp",
  category: "/images/category-weight.webp",
  weightManagement: "/images/weight-management-hero.webp",
  wellness: "/images/cards/wellness.webp",
  consult: "/images/cards/consult.webp",
  delivery: "/images/cards/delivery.webp",
  providerNetwork: "/images/cards/provider-network.webp",
  sectionCards: {
    checkEligibility: "/images/cards/shop-check-eligibility.webp",
    patientPortal: "/images/cards/shop-patient-portal.webp",
    pricing: "/images/cards/shop-pricing.webp",
    howItWorks: "/images/cards/learn-how-it-works.webp",
    shipping: "/images/cards/learn-shipping.webp",
    providerNetwork: "/images/cards/learn-provider-network.webp",
    howProgramsWork: "/images/cards/learn-how-programs-work.webp",
    compoundedMeds: "/images/cards/learn-compounded-meds.webp",
    safetyEligibility: "/images/cards/learn-safety-eligibility.webp",
  },
  homeFeatures: {
    licensedCare: "/images/cards/home-feature-licensed-care.webp",
    pricing: "/images/cards/home-feature-pricing.webp",
    fulfillment: "/images/cards/home-feature-fulfillment.webp",
    journey: "/images/cards/home-feature-journey.webp",
  },
  homeSteps: {
    checkout: "/images/cards/home-step-checkout.webp",
  },
  vials: {
    semaglutide: "/images/vials/semaglutide.webp",
    tirzepatide: "/images/vials/tirzepatide.webp",
  },
} as const;

export function vialImage(slug: "semaglutide" | "tirzepatide") {
  return images.vials[slug];
}
