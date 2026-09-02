"use client";

import dynamic from "next/dynamic";
import { CartProvider } from "@/components/cart/CartProvider";
import type { ReactNode } from "react";

const CartDrawer = dynamic(() => import("@/components/cart/CartDrawer").then((m) => m.CartDrawer), {
  ssr: false,
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
