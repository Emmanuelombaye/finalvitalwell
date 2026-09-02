"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type ProductSlug } from "@/lib/products";

export type CartLine = {
  slug: ProductSlug;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (slug: ProductSlug) => void;
  setQty: (slug: ProductSlug, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const STORAGE_KEY = "vitalwell.cart";
const CartContext = createContext<CartContextValue | null>(null);

function loadLines(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    return parsed.filter((line) => line.slug === "semaglutide" || line.slug === "tirzepatide");
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(loadLines());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const addItem = useCallback((slug: ProductSlug) => {
    setLines((current) => {
      const existing = current.find((line) => line.slug === slug);
      if (existing) {
        return current.map((line) =>
          line.slug === slug ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...current, { slug, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const setQty = useCallback((slug: ProductSlug, qty: number) => {
    setLines((current) => {
      if (qty <= 0) return current.filter((line) => line.slug !== slug);
      return current.map((line) => (line.slug === slug ? { ...line, qty } : line));
    });
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = lines.reduce((sum, line) => sum + line.qty, 0);
  const subtotal = lines.reduce((sum, line) => {
    const product = getProduct(line.slug);
    return sum + (product?.price ?? 0) * line.qty;
  }, 0);

  const value = useMemo(
    () => ({
      lines,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      setQty,
      clear,
      count,
      subtotal,
    }),
    [addItem, clear, count, isOpen, lines, setQty, subtotal],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
