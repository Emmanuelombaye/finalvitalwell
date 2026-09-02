export const images = {
  hero: "/images/hero.webp",
  category: "/images/category-weight.webp",
  wellness: "/images/cards/wellness.webp",
  consult: "/images/cards/consult.webp",
  delivery: "/images/cards/delivery.webp",
  providerNetwork: "/images/cards/provider-network.webp",
  vials: {
    semaglutide: "/images/vials/semaglutide.webp",
    tirzepatide: "/images/vials/tirzepatide.webp",
  },
} as const;

export function vialImage(slug: "semaglutide" | "tirzepatide") {
  return images.vials[slug];
}
