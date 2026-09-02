import type { Metadata } from "next";
import { ProductCard } from "@/components/product/ProductCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Treatments" };

export default function TreatmentsPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Treatments" }]} />
      <section className="container-page pt-8 pb-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Program catalog</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Weight-management programs</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Two clinician-guided programs, each with one all-inclusive monthly price. Purchase first, then complete the
          secure medical intake.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">Showing 2 programs</p>
        <div className="mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
