import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrowseSectionBlock, PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { careSections } from "@/data/browse-cards";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Care",
  description: "Your VitaWellRx care journey — intake, support, portal access, and ongoing follow-up.",
};

export default function CarePage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Care" }]} />
      <PageHero
        eyebrow="Your care"
        title="Support at every step of your program."
        description="From intake to follow-up, VitaWellRx keeps your care experience in one secure online account."
        image={images.pages.care}
        imageAlt="VitaWellRx patient care support"
      />
      <section className="container-page pb-20 pt-10">
        <div className="browse-page-intro">
          <p className="browse-page-intro__text">
            Message your care team, track orders, and manage renewals from your patient portal after checkout.
          </p>
          <Link href="/account" className="browse-page-intro__cta">
            Open patient portal <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="browse-page-sections">
          {careSections.map((section) => (
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
