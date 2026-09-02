import { products } from "@/lib/products";

export type TreatmentNavLink = {
  label: string;
  href: string;
};

export const treatmentNavLinks: TreatmentNavLink[] = [
  { label: "Weight Management", href: "/treatments/weight-management" },
  ...products.map((product) => ({
    label: product.name,
    href: product.path,
  })),
  { label: "All treatments", href: "/treatments" },
];
