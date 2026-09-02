"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { useCart } from "@/components/cart/CartProvider";
import { treatmentNavCategories } from "@/data/treatments-nav";

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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-6 py-2">
        <Logo />

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-6 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setTreatmentsOpen(true)}
            onMouseLeave={() => setTreatmentsOpen(false)}
          >
            <Link
              href="/treatments"
              className="flex items-center gap-1 text-[0.95rem] font-semibold text-slate-900 whitespace-nowrap"
              aria-expanded={treatmentsOpen}
              aria-haspopup="true"
            >
              Treatments
              <ChevronDown className={`size-4 transition-transform ${treatmentsOpen ? "rotate-180" : ""}`} />
            </Link>
            {treatmentsOpen ? (
              <div className="absolute top-full left-1/2 z-40 mt-2 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-[var(--shadow-lift)]">
                {treatmentNavCategories.map((category) => (
                  <div key={category.href} className="rounded-xl p-1">
                    <Link
                      href={category.href}
                      className="block rounded-lg px-3 py-2 hover:bg-secondary"
                    >
                      <p className="text-[11px] font-semibold tracking-wider text-gold uppercase">{category.label}</p>
                      {category.description ? (
                        <p className="mt-0.5 text-xs text-muted-foreground">{category.description}</p>
                      ) : null}
                    </Link>
                    <div className="mt-1 space-y-0.5">
                      {category.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                        >
                          <span>{item.label}</span>
                          {item.price ? (
                            <span className="text-muted-foreground">${item.price}/mo</span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Link
                  href="/treatments"
                  className="mt-1 block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-secondary"
                >
                  View all treatments
                </Link>
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
              {treatmentNavCategories.map((category) => (
                <div key={category.href}>
                  <Link
                    href={category.href}
                    className="block py-2.5 pl-3 text-sm font-semibold text-slate-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {category.label}
                  </Link>
                  {category.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 pl-6 text-sm text-muted-foreground"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                      {item.price ? ` — $${item.price}/mo` : ""}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/treatments"
                className="block py-2.5 pl-3 text-sm font-semibold text-gold"
                onClick={() => setMobileOpen(false)}
              >
                View all treatments
              </Link>
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
