import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ProductCard } from "@/components/product/ProductCard";
import { VialArt } from "@/components/product/VialArt";
import { FaqList } from "@/components/ui/FaqList";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { PROGRAM_INCLUDES, formatUsd, getProduct, otherProduct, products, type ProductSlug } from "@/lib/products";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.headline ?? "Program" };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = otherProduct(product.slug as ProductSlug);

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/treatments", label: "Treatments" },
          { href: "/treatments/weight-management", label: "Weight Management" },
          { label: product.name },
        ]}
      />
      <section className="container-page grid gap-10 py-10 lg:grid-cols-2 lg:items-start">
        <div className="min-w-0">
          <div className="grid min-h-[22rem] place-items-center rounded-3xl border border-border bg-gradient-to-b from-secondary to-white p-8">
            <VialArt product={product} className="max-w-sm" priority />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Product imagery is intended solely for illustrative purposes. Actual medication packaging and pharmacy labeling may differ.
          </p>
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-cat-weight uppercase">
            <span className="size-1.5 rounded-full bg-cat-weight" />
            {product.category}
          </p>
          <h1 className="mt-2 text-4xl">{product.headline}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{product.tagline}</p>
          <p className="font-display mt-6 text-3xl">{formatUsd(product.price)}/month</p>
          <p className="text-xs text-muted-foreground">All-inclusive program price · Illustrative pricing</p>
          <ul className="mt-5 grid gap-2">
            {PROGRAM_INCLUDES.map((item) => (
              <li key={item} className="flex gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 inline-block rounded-lg border border-cat-hair/40 bg-cat-hair/10 px-3 py-1.5 text-sm font-semibold">
            May be compounded — not FDA-approved
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{product.availability}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <AddToCartButton
              slug={product.slug}
              label={`Select Program — ${formatUsd(product.price)}/mo`}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            />
            <Link href="/treatments" className="rounded-full border border-input px-6 py-3 text-sm font-semibold hover:bg-secondary">
              View programs
            </Link>
          </div>
          <DemoNotice className="mt-6" />
        </div>
      </section>

      <section className="container-page max-w-3xl pb-8 text-[0.95rem] leading-relaxed text-muted-foreground">
        <h2 className="text-2xl text-foreground">About this program</h2>
        {product.about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mt-4">
            {paragraph}
          </p>
        ))}
        <h3 className="mt-8 text-xl text-foreground">How it may work</h3>
        {product.how.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mt-4">
            {paragraph}
          </p>
        ))}
        <h3 className="mt-8 text-xl text-foreground">Product status</h3>
        <ul className="mt-3 grid gap-2">
          {product.status.map((item) => (
            <li key={item.slice(0, 40)} className="relative pl-4 before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-gold">
              {item}
            </li>
          ))}
        </ul>
        <h3 className="mt-8 text-xl text-foreground">Eligibility and provider review</h3>
        <p className="mt-4">{product.eligibility}</p>
        <p className="mt-4 font-medium text-foreground">Prescription required. Licensed-provider review required. Not everyone qualifies.</p>
        <h2 className="mt-10 text-2xl text-foreground">Safety summary</h2>
        <ul className="mt-3 grid gap-2">
          {product.safety.map((item) => (
            <li key={item.slice(0, 40)} className="relative pl-4 before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full before:bg-gold">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page pb-16">
        <h2 className="text-3xl">Program questions</h2>
        <div className="mt-6">
          <FaqList items={product.faqs} />
        </div>
      </section>

      <section className="container-page pb-20">
        <h2 className="text-3xl">Related programs</h2>
        <div className="mt-6 max-w-sm">
          <ProductCard product={related} />
        </div>
      </section>
    </>
  );
}
