import type { Metadata } from "next";
import { ProductCard } from "@/components/product/ProductCard";
import { PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { images } from "@/data/images";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Pricing" }]} />
      <PageHero
        eyebrow="Pricing"
        title="One clear monthly price."
        description="No surprise consultation fees. No hidden membership charges. No standard shipping charges."
        image={images.hero}
        imageAlt="VitaWellRx weight management care"
      />
      <section className="container-page pb-20 pt-10">
        <p className="browse-page-intro__text mb-8">Programs from $149 per month</p>
        <div className="home-programs-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
