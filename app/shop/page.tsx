import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrowseSectionBlock, PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { images } from "@/data/images";
import { shopSections } from "@/data/browse-cards";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse VitaWellRx weight-management programs, pricing, and patient support.",
};

export default function ShopPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Shop" }]} />
      <PageHero
        eyebrow="Shop"
        title="Find the program that fits your goals."
        description="Browse clinician-guided weight-management programs with transparent monthly pricing and licensed-provider review."
        image={images.pages.shop}
        imageAlt="VitaWellRx weight management programs"
      />
      <section className="container-page pb-20 pt-10">
        <div className="browse-page-intro">
          <p className="browse-page-intro__text">
            Every program includes the online clinical consultation, ongoing support, and standard shipping once
            prescribed. Purchase first, then complete your secure intake.
          </p>
          <Link href="/get-started" className="browse-page-intro__cta">
            Check eligibility <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="browse-page-sections">
          {shopSections.map((section) => (
            <BrowseSectionBlock
              key={section.title}
              title={section.title}
              description={section.description}
              cards={section.cards}
              columns={3}
            />
          ))}
        </div>

        <DemoNotice className="mt-12 max-w-3xl" />
      </section>
    </>
  );
}
