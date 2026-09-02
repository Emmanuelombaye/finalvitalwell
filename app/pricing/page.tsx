import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { PROGRAM_INCLUDES, formatUsd, products } from "@/lib/products";

export const metadata: Metadata = { title: "Pricing" };

const pricingImages: Record<string, string> = {
  semaglutide: "/images/cards/shop-semaglutide.webp",
  tirzepatide: "/images/cards/shop-tirzepatide.webp",
};

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Pricing" }]} />
      <PageHero
        eyebrow="Pricing"
        title="One clear monthly price."
        description="No surprise consultation fees. No hidden membership charges. No standard shipping charges."
        image="/images/cards/pricing.webp"
        imageAlt="VitaWellRx transparent program pricing"
      />
      <section className="container-page pb-20 pt-10">
        <p className="browse-page-intro__text mb-8">Programs from $149/month</p>

        <div className="browse-section__grid browse-section__grid--2">
          {products.map((product) => (
            <article key={product.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={pricingImages[product.slug] ?? "/images/cards/pricing.webp"}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="browse-card__price">{formatUsd(product.price)}/mo</span>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-wide text-cat-weight uppercase">{product.category}</p>
                <h2 className="mt-1 text-2xl">{product.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{product.short}</p>
                <ul className="mt-4 grid gap-1 text-sm text-muted-foreground">
                  {PROGRAM_INCLUDES.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-2">
                  <Link
                    href={product.path}
                    className="flex-1 rounded-full border border-input px-4 py-2.5 text-center text-sm font-semibold hover:bg-secondary"
                  >
                    View Program
                  </Link>
                  <AddToCartButton
                    slug={product.slug}
                    className="flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
