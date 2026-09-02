import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { ProductCategoryLabel } from "@/components/product/ProductCategoryLabel";
import { VialArt } from "@/components/product/VialArt";
import { formatUsd, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex min-w-0 flex-col rounded-2xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-lift)]">
      <Link
        href={product.path}
        tabIndex={-1}
        aria-hidden
        className="grid h-52 place-items-center overflow-hidden rounded-t-2xl border-b border-border bg-gradient-to-b from-secondary to-white px-4 py-3"
      >
        <VialArt product={product} className="max-h-44 transition-transform duration-300 group-hover:scale-[1.03]" />
      </Link>
      <div className="flex min-w-0 flex-1 flex-col p-5">
        <ProductCategoryLabel category={product.category} />        <h3 className="mt-2 text-xl">
          <Link href={product.path} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.short}</p>
        <div className="mt-4">
          <p className="font-display text-2xl">{formatUsd(product.price)}/month</p>
          <p className="text-xs text-muted-foreground">All-inclusive program price · Illustrative pricing</p>
        </div>
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
  );
}
