import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeStepCard } from "@/components/home/HomeStepCard";
import { ImageBrowseCard, PageHero } from "@/components/ui/ImageBrowseCard";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { homeStepCards } from "@/data/home";

export const metadata: Metadata = {
  title: "How GLP-1 Programs Work",
  description: "Learn how GLP-1 and dual-pathway weight-management programs work through VitaWellRx® telehealth.",
};

const TOPICS = [
  {
    title: "What is a GLP-1 program?",
    description:
      "GLP-1 receptor agonists act on pathways involved in appetite signaling and gastric emptying. VitaWellRx® programs are clinician-guided — a licensed provider decides whether treatment is appropriate after reviewing your intake.",
    image: "/images/cards/learn-glp1.webp",
    href: "/compounded-medications",
    badge: "Education",
  },
  {
    title: "Semaglutide vs Tirzepatide",
    description:
      "Semaglutide targets one incretin pathway. Tirzepatide acts on two. Which program may suit you is a clinical judgment made by your reviewing provider, not a purchase decision.",
    image: "/images/cards/shop-weight.webp",
    href: "/treatments/weight-management",
    badge: "Compare",
  },
  {
    title: "Safety & side effects",
    description:
      "Common side effects include nausea and gastrointestinal discomfort, especially early in a program. Serious risks exist — disclose your full health history during intake.",
    image: "/images/cards/learn-safety.webp",
    href: "/safety",
    badge: "Safety",
  },
];

export default function Glp1LearnPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/learn", label: "Learn" },
          { label: "GLP-1 Programs" },
        ]}
      />
      <PageHero
        eyebrow="Education"
        title="How GLP-1 weight-management programs work."
        description="General educational information about GLP-1 and dual-pathway programs offered through VitaWellRx® telehealth."
        image="/images/cards/learn-glp1.webp"
        imageAlt="GLP-1 program education"
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
            <h2 className="browse-section__title">Your path with VitaWellRx®</h2>
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
