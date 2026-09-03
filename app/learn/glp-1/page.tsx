import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeStepCard } from "@/components/home/HomeStepCard";
import { ImageBrowseCard, PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { images } from "@/data/images";
import { homeStepCards } from "@/data/home";

export const metadata: Metadata = {
  title: "How Programs Work",
  description: "Learn how weight-management programs work through VitaWellRx telehealth.",
};

const TOPICS = [
  {
    title: "What is a weight-management program?",
    description:
      "VitaWellRx programs are clinician-guided. A licensed provider decides whether treatment is appropriate after reviewing your intake.",
    image: images.wellness,
    href: "/compounded-medications",
    imageFit: "contain" as const,
  },
  {
    title: "Semaglutide vs Tirzepatide",
    description:
      "Two clinician-guided options with different monthly pricing. Which program may suit you is decided by your reviewing provider.",
    image: images.vials.semaglutide,
    href: "/treatments/weight-management",
    imageFit: "contain" as const,
  },
  {
    title: "Safety and side effects",
    description:
      "Common side effects include nausea and gastrointestinal discomfort, especially early in a program. Disclose your full health history during intake.",
    image: images.sectionCards.learnGlp1Safety,
    href: "/safety",
    imageFit: "contain" as const,
  },
];

export default function ProgramsLearnPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/learn", label: "Learn" },
          { label: "Programs" },
        ]}
      />
      <PageHero
        eyebrow="Education"
        title="How weight-management programs work."
        description="General educational information about Semaglutide and Tirzepatide programs offered through VitaWellRx telehealth."
        image={images.pages.learnGlp1}
        imageAlt="Weight management program education"
      />
      <section className="container-page pb-20 pt-10">
        <div className="browse-section">
          <div className="browse-section__header">
            <h2 className="browse-section__title">Key topics</h2>
            <p className="browse-section__description">Explore the guides most patients read before starting.</p>
          </div>
          <div className="browse-section__grid browse-section__grid--3">
            {TOPICS.map((card) => (
              <ImageBrowseCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        <div className="browse-section mt-14">
          <div className="browse-section__header">
            <h2 className="browse-section__title">Your path with VitaWellRx</h2>
          </div>
          <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeStepCards.map((card) => (
              <HomeStepCard key={card.step} card={card} />
            ))}
          </ol>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            This page provides general educational information only. It is not medical advice, dosing guidance, or a
            guarantee of eligibility or outcomes.
          </p>
          <Link href="/treatments" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
            Browse programs <ArrowRight className="size-4" />
          </Link>
        </div>

        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
