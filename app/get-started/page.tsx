import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageBrowseCard, PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { getStartedCards } from "@/data/browse-cards";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Check eligibility and start your VitaWellRx weight-management program.",
};

export default function GetStartedPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Get Started" }]} />
      <PageHero
        eyebrow="Start here"
        title="Check eligibility and choose your program."
        description="VitaWellRx connects you with independent US-licensed providers. Complete checkout first, then finish your secure medical intake for review."
        image={images.hero}
        imageAlt="Start your VitaWellRx eligibility check"
      />
      <section className="container-page pb-20 pt-10">
        <div className="browse-page-intro">
          <p className="browse-page-intro__text">
            Treatment is never guaranteed. A licensed clinician determines whether a program is medically appropriate
            after reviewing your intake. Services may not be available in all states.
          </p>
          <Link href="/states-we-serve" className="browse-page-intro__cta">
            Check state availability <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="browse-section">
          <div className="browse-section__header">
            <h2 className="browse-section__title">Choose a program</h2>
            <p className="browse-section__description">Compare Semaglutide and Tirzepatide, then start checkout.</p>
          </div>
          <div className="browse-section__grid browse-section__grid--2">
            {getStartedCards.map((card) => (
              <ImageBrowseCard key={card.title} card={card} variant="wide" />
            ))}
          </div>
        </div>

        <DemoNotice className="mt-12 max-w-3xl" />
      </section>
    </>
  );
}
