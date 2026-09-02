import { products } from "@/lib/products";

export type TreatmentNavCategory = {
  label: string;
  href: string;
  description?: string;
  items: { label: string; href: string; price?: number }[];
};

export const treatmentNavCategories: TreatmentNavCategory[] = [
  {
    label: "Weight Management",
    href: "/treatments/weight-management",
    description: "Clinician-guided GLP-1 programs",
    items: products.map((product) => ({
      label: product.name,
      href: product.path,
      price: product.price,
    })),
  },
];
