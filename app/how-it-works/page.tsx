import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeStepCard } from "@/components/home/HomeStepCard";
import { ImageBrowseCard, PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { images } from "@/data/images";
import { homeStepCards } from "@/data/home";

export const metadata: Metadata = { title: "How It Works" };

const EXTRA_STEPS = [
  {
    step: 5,
    title: "Create your account",
    description: "Use the same email from checkout so orders, intake, and messages stay in one place.",
    image: images.consult,
  },
  {
    step: 6,
    title: "Fulfilment and support",
    description: "If approved, standard shipping is included. Follow-up stays inside your account.",
    image: images.delivery,
  },
];

export default function HowItWorksPage() {
  const allSteps = [...homeStepCards, ...EXTRA_STEPS];

  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "How It Works" }]} />
      <PageHero
        eyebrow="Onboarding"
        title="How VitaWellRx works."
        description="Purchase first, then complete intake. A licensed clinician decides whether treatment is appropriate."
        image={images.hero}
        imageAlt="VitaWellRx care experience"
      />
      <section className="container-page pb-20 pt-10">
        <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {allSteps.map((card) => (
            <HomeStepCard key={card.step} card={card} />
          ))}
        </ol>

        <div className="browse-section mt-14">
          <div className="browse-section__header">
            <h2 className="browse-section__title">Ready to begin?</h2>
            <p className="browse-section__description">Choose a program or check whether we serve your state.</p>
          </div>
          <div className="browse-section__grid browse-section__grid--2">
            <ImageBrowseCard
              card={{
                title: "Check eligibility",
                description: "Start with a short review of programs and state availability.",
                image: images.hero,
                href: "/get-started",
              }}
              variant="wide"
            />
            <ImageBrowseCard
              card={{
                title: "Browse programs",
                description: "Compare Semaglutide and Tirzepatide with transparent pricing.",
                image: images.vials.semaglutide,
                href: "/shop",
                imageFit: "contain",
              }}
              variant="wide"
            />
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
