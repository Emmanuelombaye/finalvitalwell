import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HowItWorksStepCard } from "@/components/how-it-works/HowItWorksStepCard";
import { MediaImage } from "@/components/ui/MediaImage";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { howItWorksCtaCards, howItWorksImages, howItWorksSteps } from "@/data/how-it-works";

export const metadata: Metadata = { title: "How It Works" };

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "How It Works" }]} />

      <section className="hiw-hero">
        <div className="container-page hiw-hero__grid">
          <div className="hiw-hero__copy">
            <p className="hiw-hero__eyebrow">Onboarding</p>
            <h1 className="hiw-hero__title">How VitaWellRx works.</h1>
            <p className="hiw-hero__description">
              Purchase first, then complete intake. A licensed clinician decides whether treatment is appropriate.
            </p>
            <Link href="/get-started" className="hiw-hero__cta">
              Get started <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="hiw-hero__visual">
            <MediaImage
              src={howItWorksImages.hero}
              alt="VitaWellRx care experience"
              aspect="16 / 10"
              fit="contain"
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="hiw-hero__image"
            />
          </div>
        </div>
      </section>

      <section className="hiw-board">
        <div className="container-page">
          <div className="hiw-steps-intro">
            <p className="hiw-steps-intro__eyebrow">The process</p>
            <h2 className="hiw-steps-intro__title">Six clear steps</h2>
            <p className="hiw-steps-intro__text">
              From choosing a program to discreet fulfillment — each step stays simple, transparent, and easy to follow.
            </p>
          </div>

          <ol className="hiw-steps">
            {howItWorksSteps.map((card) => (
              <HowItWorksStepCard key={card.step} card={card} />
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page pb-20 pt-4">
        <div className="hiw-cta">
          <div className="hiw-cta__header">
            <p className="hiw-cta__eyebrow">Next</p>
            <h2 className="hiw-cta__title">Ready to begin?</h2>
            <p className="hiw-cta__description">Choose a program or check whether we serve your state.</p>
          </div>
          <div className="hiw-cta__grid">
            {howItWorksCtaCards.map((card) => (
              <Link key={card.href} href={card.href} className="hiw-cta-card group">
                <div className="hiw-cta-card__media-wrap">
                  <MediaImage
                    src={card.image}
                    alt={card.title}
                    aspect="16 / 10"
                    fit="contain"
                    objectPosition="center"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="hiw-cta-card__media"
                  />
                </div>
                <div className="hiw-cta-card__body">
                  <h3 className="hiw-cta-card__title">{card.title}</h3>
                  <p className="hiw-cta-card__text">{card.description}</p>
                  <span className="hiw-cta-card__link">
                    Continue <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
