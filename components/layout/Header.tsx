"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { useCart } from "@/components/cart/CartProvider";
import { products } from "@/lib/products";

const NAV = [
  { href: "/treatments", label: "Treatments" },
  { href: "/shop", label: "Shop" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export function Header() {
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-6 py-2">
        <Logo />

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-6 md:flex">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[0.95rem] font-semibold text-slate-900 whitespace-nowrap"
              aria-expanded={treatmentsOpen}
              onClick={() => setTreatmentsOpen((open) => !open)}
              onBlur={() => setTimeout(() => setTreatmentsOpen(false), 150)}
            >
              Treatments
              <ChevronDown className="size-4" />
            </button>
            {treatmentsOpen ? (
              <div className="absolute top-full left-0 z-40 mt-2 min-w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-[var(--shadow-lift)]">
                <p className="px-3 pt-1 text-[11px] font-semibold tracking-wider text-gold uppercase">Weight Management</p>
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={product.path}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                  >
                    {product.name}+ <span className="text-muted-foreground">${product.price}/mo</span>
                  </Link>
                ))}
                <Link href="/treatments" className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-secondary">
                  All treatments
                </Link>
              </div>
            ) : null}
          </div>
          {NAV.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.95rem] font-semibold text-slate-900 whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link href="/get-started" className="hidden text-sm font-semibold text-slate-500 md:inline">
            Portal
          </Link>
          <button type="button" className="relative rounded-md p-2 hover:bg-secondary" aria-label="Shopping cart" onClick={openCart}>
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute top-1 right-1 grid min-w-4 place-items-center rounded-full bg-navy px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            ) : null}
          </button>
          <Link
            href="/get-started"
            className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-navy/90 md:inline-block"
          >
            Get Started
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg bg-black/5 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-slate-200 bg-white px-5 py-3 md:hidden">
          <Link href="/treatments" className="block border-b border-slate-200 py-3 font-bold" onClick={() => setMobileOpen(false)}>
            Treatments
          </Link>
          {products.map((product) => (
            <Link
              key={product.slug}
              href={product.path}
              className="block border-b border-slate-200 py-2.5 pl-3 text-sm text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {product.name}+
            </Link>
          ))}
          <Link href="/shop" className="block border-b border-slate-200 py-3 font-bold" onClick={() => setMobileOpen(false)}>
            Shop
          </Link>
          <Link href="/how-it-works" className="block border-b border-slate-200 py-3 font-bold" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="/about" className="block border-b border-slate-200 py-3 font-bold" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="/get-started" className="mt-3 block rounded-full bg-navy py-3 text-center font-bold text-white" onClick={() => setMobileOpen(false)}>
            Get Started →
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
