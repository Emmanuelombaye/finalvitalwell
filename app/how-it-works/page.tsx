import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeStepCard } from "@/components/home/HomeStepCard";
import { ImageBrowseCard, PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { howItWorksCtaCards, howItWorksImages, howItWorksSteps } from "@/data/how-it-works";

export const metadata: Metadata = { title: "How It Works" };

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "How It Works" }]} />
      <PageHero
        eyebrow="Onboarding"
        title="How VitaWellRx works."
        description="Purchase first, then complete intake. A licensed clinician decides whether treatment is appropriate."
        image={howItWorksImages.hero}
        imageAlt="VitaWellRx care experience"
      />
      <section className="container-page pb-20 pt-10">
        <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {howItWorksSteps.map((card) => (
            <HomeStepCard key={card.step} card={card} />
          ))}
        </ol>

        <div className="browse-section mt-14">
          <div className="browse-section__header">
            <h2 className="browse-section__title">Ready to begin?</h2>
            <p className="browse-section__description">Choose a program or check whether we serve your state.</p>
          </div>
          <div className="browse-section__grid browse-section__grid--2">
            {howItWorksCtaCards.map((card) => (
              <ImageBrowseCard key={card.href} card={card} variant="wide" />
            ))}
          </div>
        </div>

        <Link href="/get-started" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
          Get started now <ArrowRight className="size-4" />
        </Link>

        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
