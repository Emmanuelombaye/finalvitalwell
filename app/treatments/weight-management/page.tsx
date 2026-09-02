import type { Metadata } from "next";
import Image from "next/image";
import { ProductCard } from "@/components/product/ProductCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
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
        <Image
          src="/images/hero.webp"
          alt="Couple walking together outdoors"
          width={1600}
          height={900}
          className="mt-8 h-64 w-full rounded-3xl object-cover object-[70%_30%] shadow-[var(--shadow-lift)] md:h-80"
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
