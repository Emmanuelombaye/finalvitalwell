import type { Metadata } from "next";
import { ProductCard } from "@/components/product/ProductCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { MediaImage } from "@/components/ui/MediaImage";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Weight Management" };

export default function WeightManagementPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/treatments", label: "Treatments" },
          { label: "Weight Management" },
        ]}
      />
      <section className="container-page pt-8 pb-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Weight Management</p>
        <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">Clinician-guided programs built around your health history.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Semaglutide and Tirzepatide, each with one all-inclusive monthly price.
        </p>
        <MediaImage
          src="/images/category-weight.webp"
          alt="Smiling couple jogging together on a sunlit tree-lined path"
          aspect="16 / 7"
          fit="cover"
          sizes="(max-width: 768px) 100vw, 78rem"
          className="mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]"
        />
        <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
