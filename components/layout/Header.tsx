"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { useCart } from "@/components/cart/CartProvider";
import { treatmentNavLinks } from "@/data/treatments-nav";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/learn", label: "Learn" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export function Header() {
  const { count, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openTreatments = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setTreatmentsOpen(true);
  };

  const closeTreatments = () => {
    closeTimer.current = setTimeout(() => setTreatmentsOpen(false), 120);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-6 py-2">
        <Logo />

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-6 md:flex">
          <div className="relative" onMouseEnter={openTreatments} onMouseLeave={closeTreatments}>
            <button
              type="button"
              className="flex items-center gap-1 text-[0.95rem] font-semibold text-slate-900 whitespace-nowrap"
              aria-expanded={treatmentsOpen}
              aria-haspopup="true"
              onClick={() => setTreatmentsOpen((open) => !open)}
            >
              Treatments
              <ChevronDown className={`size-4 transition-transform ${treatmentsOpen ? "rotate-180" : ""}`} />
            </button>
            {treatmentsOpen ? (
              <div className="absolute top-full left-1/2 z-40 w-56 -translate-x-1/2 pt-2">
                <div className="rounded-xl border border-slate-200 bg-white py-2 shadow-[var(--shadow-lift)]">
                  {treatmentNavLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-slate-900 hover:bg-secondary"
                      onClick={() => setTreatmentsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {NAV.map((item) => (
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
          <button
            type="button"
            className="flex w-full items-center justify-between border-b border-slate-200 py-3 text-left font-bold"
            aria-expanded={mobileTreatmentsOpen}
            onClick={() => setMobileTreatmentsOpen((open) => !open)}
          >
            Treatments
            <ChevronDown className={`size-4 transition-transform ${mobileTreatmentsOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileTreatmentsOpen ? (
            <div className="border-b border-slate-200 pb-2">
              {treatmentNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2.5 pl-3 text-sm text-slate-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-slate-200 py-3 font-bold"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/get-started" className="mt-3 block rounded-full bg-navy py-3 text-center font-bold text-white" onClick={() => setMobileOpen(false)}>
            Get Started →
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
