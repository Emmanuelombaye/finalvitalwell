"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { VialArt } from "@/components/product/VialArt";
import { Breadcrumbs } from "@/components/ui/DemoNotice";
import { formatUsd, getProduct } from "@/lib/products";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    clear();
    setPlaced(true);
  }

  if (placed) {
    return (
      <section className="container-page py-20">
        <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-8">
          <p className="rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-navy uppercase w-fit">
            Intake next
          </p>
          <h1 className="mt-4 text-3xl">Order received</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Complete your secure medical intake next. A licensed clinician will review your information. Treatment is
            never guaranteed.
          </p>
          <Link
            href="/account"
            className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Go to patient login
          </Link>
        </div>
      </section>
    );
  }

  if (lines.length === 0) {
    return (
      <section className="container-page py-20">
        <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-8">
          <h1 className="text-3xl">Your cart is empty</h1>
          <p className="mt-3 text-sm text-muted-foreground">Add Semaglutide+ or Tirzepatide+ to continue.</p>
          <Link
            href="/treatments"
            className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Explore Treatments
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Checkout" }]} />
      <section className="container-page grid gap-10 py-10 lg:grid-cols-2">
        <form className="grid gap-4" onSubmit={onSubmit}>
          <h1 className="text-3xl">Complete your purchase</h1>
          <p className="text-sm text-muted-foreground">Pay first. Medical intake comes next. A prescription is never guaranteed.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-1 text-sm font-medium">
              First name
              <input required className="rounded-lg border border-input px-3 py-2.5 font-normal" />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Last name
              <input required className="rounded-lg border border-input px-3 py-2.5 font-normal" />
            </label>
          </div>
          <label className="grid gap-1 text-sm font-medium">
            Email
            <input type="email" required className="rounded-lg border border-input px-3 py-2.5 font-normal" />
          </label>
          <label className="grid gap-1 text-sm font-medium">
            Shipping address
            <input required className="rounded-lg border border-input px-3 py-2.5 font-normal" />
          </label>
          <p className="text-xs text-muted-foreground">Charged only if prescribed. A prescription is never guaranteed.</p>
          <button type="submit" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
            Complete checkout — {formatUsd(subtotal, 2)}
          </button>
        </form>
        <div className="rounded-2xl border border-border bg-card p-6 h-fit">
          <h2 className="font-sans text-sm font-semibold tracking-wide uppercase">Order summary</h2>
          {lines.map((line) => {
            const product = getProduct(line.slug);
            if (!product) return null;
            return (
              <div key={line.slug} className="mt-4 flex gap-3 border-b border-border pb-4">
                <div className="size-14 overflow-hidden rounded-lg border border-border bg-secondary p-0.5">
                  <VialArt product={product} showGlow={false} className="size-full" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {product.category} × {line.qty}
                  </p>
                </div>
                <p className="text-sm font-semibold">{formatUsd(product.price * line.qty)}</p>
              </div>
            );
          })}
          <div className="mt-4 flex justify-between text-sm">
            <span>Subtotal</span>
            <strong>{formatUsd(subtotal, 2)}</strong>
          </div>
        </div>
      </section>
    </>
  );
}
