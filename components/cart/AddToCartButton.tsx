"use client";

import { useCart } from "@/components/cart/CartProvider";
import type { ProductSlug } from "@/lib/products";

type Props = {
  slug: ProductSlug;
  label?: string;
  className?: string;
};

export function AddToCartButton({ slug, label = "Select Program", className }: Props) {
  const { addItem } = useCart();

  return (
    <button type="button" className={className} onClick={() => addItem(slug)}>
      {label}
    </button>
  );
}
