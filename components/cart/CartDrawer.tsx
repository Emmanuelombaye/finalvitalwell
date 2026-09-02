"use client";

import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { VialArt } from "@/components/product/VialArt";
import { formatUsd, getProduct, products } from "@/lib/products";

export function CartDrawer() {
  const { lines, isOpen, closeCart, setQty, addItem, count, subtotal } = useCart();
  const suggested = products.find((product) => !lines.some((line) => line.slug === product.slug));

  return (
    <div className={`fixed inset-0 z-[100] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <button
        type="button"
        className={`absolute inset-0 bg-foreground/35 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
        aria-label="Close cart"
        onClick={closeCart}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute top-0 right-0 flex h-full w-full max-w-[440px] flex-col bg-background shadow-[var(--shadow-lift)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div>
            <h2 className="font-display text-xl">Your Cart</h2>
            <p className="mt-0.5 text-xs text-muted-foreground">{count ? `${count} item${count === 1 ? "" : "s"}` : ""}</p>
          </div>
          <button type="button" className="rounded-md p-2 hover:bg-secondary" aria-label="Close cart" onClick={closeCart}>
            <X className="size-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5">
          {lines.length === 0 ? (
            <div className="py-14 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-secondary">
                <ShoppingBag className="size-6 text-muted-foreground" />
              </span>
              <p className="mt-5 font-display text-lg">Your cart is empty</p>
              <p className="mt-1.5 text-sm text-muted-foreground">Choose Semaglutide+ or Tirzepatide+ to get started.</p>
              <button
                type="button"
                className="mt-6 rounded-full border border-input px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
                onClick={closeCart}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              return (
                <div key={line.slug} className="flex gap-3 border-b border-border py-4">
                  <div className="size-16 overflow-hidden rounded-lg border border-border bg-secondary p-1">
                    <VialArt product={product} showGlow={false} className="size-full" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {product.category} · {formatUsd(product.price)}/mo
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        className="size-6 rounded-full border border-border"
                        onClick={() => setQty(line.slug, line.qty - 1)}
                      >
                        −
                      </button>
                      <span className="text-sm">{line.qty}</span>
                      <button
                        type="button"
                        className="size-6 rounded-full border border-border"
                        onClick={() => setQty(line.slug, line.qty + 1)}
                      >
                        +
                      </button>
                      <button type="button" className="ml-2 text-xs text-muted-foreground" onClick={() => setQty(line.slug, 0)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">{formatUsd(product.price * line.qty)}</p>
                </div>
              );
            })
          )}

          {suggested ? (
            <section className="border-t border-border py-5">
              <h3 className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">You may also like</h3>
              <div className="mt-3 flex items-center gap-3 rounded-xl border border-border p-3">
                <div className="size-12 overflow-hidden rounded-lg border border-border bg-secondary p-0.5">
                  <VialArt product={suggested} showGlow={false} className="size-full" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{suggested.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{suggested.category}</p>
                </div>
                <p className="text-sm font-semibold">{formatUsd(suggested.price, 2)}</p>
                <button
                  type="button"
                  className="rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground"
                  onClick={() => addItem(suggested.slug)}
                >
                  Add
                </button>
              </div>
            </section>
          ) : null}
        </div>

        <footer className="border-t border-border px-5 py-5">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold">Subtotal</span>
            <span className="font-display text-xl">{formatUsd(subtotal, 2)}</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Taxes are calculated at checkout.</p>
          <Link
            href="/checkout"
            onClick={closeCart}
            className={`mt-4 block rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground ${
              lines.length ? "hover:bg-primary/90" : "pointer-events-none opacity-40"
            }`}
          >
            Checkout
          </Link>
          <button type="button" className="mt-2 w-full py-2.5 text-sm text-muted-foreground" onClick={closeCart}>
            Continue Shopping
          </button>
        </footer>
      </div>
    </div>
  );
}
