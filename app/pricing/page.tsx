import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { PROGRAM_INCLUDES, formatUsd, products } from "@/lib/products";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Pricing" }]} />
      <section className="container-page pt-8 pb-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Pricing</p>
        <h1 className="mt-3 text-4xl md:text-5xl">One clear monthly price.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          No surprise consultation fees. No hidden membership charges. No standard shipping charges.
        </p>
        <p className="mt-3 text-sm">Programs from $149/month</p>

        <div className="mt-10 space-y-4">
          {products.map((product) => (
            <article
              key={product.slug}
              className="grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[1.4fr_0.8fr_auto] md:items-center"
            >
              <div>
                <p className="text-xs font-semibold tracking-wide text-cat-weight uppercase">{product.category}</p>
                <h2 className="mt-1 text-2xl">{product.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{product.short}</p>
                <ul className="mt-3 grid gap-1 text-sm text-muted-foreground">
                  {PROGRAM_INCLUDES.slice(0, 4).map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display text-3xl">{formatUsd(product.price)}/month</p>
                <p className="text-xs text-muted-foreground">Billed every 30 days</p>
              </div>
              <div className="flex min-w-40 flex-col gap-2">
                <Link
                  href={product.path}
                  className="rounded-full border border-input px-4 py-2.5 text-center text-sm font-semibold hover:bg-secondary"
                >
                  View Program
                </Link>
                <AddToCartButton
                  slug={product.slug}
                  className="rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                />
              </div>
            </article>
          ))}
        </div>
        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
