import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { BrowseSectionBlock, PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { images } from "@/data/images";
import { shopSections } from "@/data/browse-cards";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Treatments" };

export default function TreatmentsPage() {
  const weightSection = shopSections[0];

  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Treatments" }]} />
      <PageHero
        eyebrow="Treatments"
        title="Clinician-guided weight-management programs."
        description="Two programs, each with one all-inclusive monthly price. Purchase first, then complete the secure medical intake for licensed-provider review."
        image={images.pages.treatments}
        imageAlt="VitaWellRx weight management care"
      />
      <section className="container-page pb-20 pt-10">
        <div className="browse-page-intro">
          <p className="browse-page-intro__text">Showing {products.length} programs · Available in eligible states</p>
          <Link href="/shop" className="browse-page-intro__cta">
            Browse shop <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="home-programs-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {weightSection ? (
          <div className="browse-page-sections mt-14">
            <BrowseSectionBlock
              title="Explore by topic"
              description={weightSection.description}
              cards={weightSection.cards}
              columns={3}
            />
          </div>
        ) : null}

        <DemoNotice className="mt-12 max-w-3xl" />
      </section>
    </>
  );
}
