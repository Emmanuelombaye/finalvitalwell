import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrowseSectionBlock, PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { learnSections } from "@/data/browse-cards";

export const metadata: Metadata = {
  title: "Learn",
  description: "Guides on GLP-1 programs, safety, compounded medications, and the VitaWellRx® care experience.",
};

export default function LearnPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Learn" }]} />
      <PageHero
        eyebrow="Learn"
        title="Understand your care before you begin."
        description="Educational guides on GLP-1 programs, safety, pharmacy fulfillment, and how VitaWellRx® telehealth works."
        image="/images/cards/learn-glp1.webp"
        imageAlt="GLP-1 weight management education"
      />
      <section className="container-page pb-20 pt-10">
        <div className="browse-page-intro">
          <p className="browse-page-intro__text">
            These guides are for general education only and do not replace advice from a licensed clinician.
          </p>
          <Link href="/faq" className="browse-page-intro__cta">
            Read the FAQ <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="browse-page-sections">
          {learnSections.map((section) => (
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
