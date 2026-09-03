import Link from "next/link";
import { ArrowRight, Check, Lock, MessageCircle, ShieldCheck, Sparkles, Tag, Truck } from "lucide-react";
import { HomeFeatureCard } from "@/components/home/HomeFeatureCard";
import { HomeStepCard } from "@/components/home/HomeStepCard";
import { ProductCard } from "@/components/product/ProductCard";
import { FaqList } from "@/components/ui/FaqList";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { MediaImage } from "@/components/ui/MediaImage";
import { homeFeatureCards, homeStats, homeStepCards } from "@/data/home";
import { homeFaqs, products } from "@/lib/products";

const TRUST = [
  { icon: ShieldCheck, label: "Licensed U.S. provider review" },
  { icon: Tag, label: "Zero hidden fees" },
  { icon: Truck, label: "U.S. licensed pharmacy fulfillment" },
  { icon: Lock, label: "Secure online intake" },
  { icon: MessageCircle, label: "Ongoing program support" },
];

const WHY = [
  ["One clear price", "A single monthly figure per program, shown before you buy."],
  ["No separate consultation charge", "The online clinical consultation is part of the program price."],
  ["No standard-shipping fee", "Standard shipping is included once a prescription is approved."],
  ["Licensed-provider review", "An independent clinician decides whether treatment is appropriate."],
  ["Secure online experience", "Intake, identification, and messages stay inside your account."],
  ["Ongoing support", "Program support and routine follow-up are included, not upsold."],
  ["Easy program management", "Cancel, review orders, and track status from your account."],
];

const SAFETY_TILES = [
  "Not everyone qualifies for a program.",
  "Licensed-provider review is required before any treatment.",
  "State restrictions may apply, and availability varies by program.",
  "Additional information or laboratory work may be requested.",
  "Some products may be compounded and are not FDA-approved.",
  "Individual results vary; no outcome is promised.",
  "Programs may use formulations that are not FDA-approved branded products.",
  "VitaWellRx® does not provide emergency care. Call 911 in an emergency.",
];

export default function HomePage() {
  return (
    <>
      <div className="home-announce">
        <div className="container-page home-announce__inner">
          <p>
            No insurance needed. Provider-guided weight care when prescribed.{" "}
            <Link href="/get-started" className="home-announce__link">
              Start medical intake →
            </Link>
          </p>
        </div>
      </div>

      <section className="home-hero">
        <div className="container-page home-hero__grid">
          <div className="min-w-0">
            <p className="home-hero__eyebrow">
              <Sparkles className="size-3.5" aria-hidden />
              Doctor-guided telehealth
            </p>
            <h1 className="home-hero__title">
              Your Care.
              <br />
              Your Way.
            </h1>
            <p className="home-hero__lead">
              Provider-gated weight-management programs — Semaglutide and Tirzepatide reviewed by licensed U.S.
              clinicians and delivered to your door. One clear monthly price. No hidden fees, ever. Complete checkout
              first, then finish your secure medical intake.
            </p>
            <div className="home-hero__actions">
              <Link href="/get-started" className="home-hero__cta-primary">
                Check Eligibility <ArrowRight className="size-4" />
              </Link>
              <Link href="/treatments" className="home-hero__cta-secondary">
                Explore Treatments
              </Link>
            </div>
            <p className="home-hero__note">
              Consultation, program support, and standard shipping included when prescribed. Treatment is never
              guaranteed. <span className="font-medium text-slate-300">Available in eligible states.</span>
              <span className="mt-1 block text-xs text-slate-500">*Review timing not guaranteed.</span>
            </p>
            <div className="home-hero__stats">
              {homeStats.map((stat) => (
                <div key={stat.label} className="home-hero__stat">
                  <p className="home-hero__stat-value">{stat.value}</p>
                  <p className="home-hero__stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="home-hero__visual min-w-0">
            <div className="home-hero__image-shell">
              <MediaImage
                src="/images/hero.webp"
                alt="Confident woman preparing a healthy breakfast in a bright modern kitchen"
                aspect="16 / 11"
                fit="cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="home-hero__image-wrap"
              />
              <div className="home-hero__badge">
                <span className="home-hero__badge-kicker">VitaWellRx®</span>
                <span className="home-hero__badge-title">Provider-guided weight care</span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-trust-bar">
          <ul className="container-page home-trust-bar__list">
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="home-trust-bar__item">
                <Icon className="size-4 text-gold" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">The VitaWellRx® difference</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Care designed to feel like yours</h2>
          <p className="mt-3 text-muted-foreground">
            From your first visit to ongoing support — transparent pricing, licensed review, and pharmacy fulfillment
            when prescribed.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeFeatureCards.map((card) => (
            <HomeFeatureCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section className="border-y border-border surface-sand">
        <div className="container-page py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Programs</p>
              <h2 className="mt-3 text-3xl md:text-4xl">Weight-management programs</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Two clinician-guided programs, each with one all-inclusive monthly price.
              </p>
            </div>
            <Link href="/treatments" className="text-sm font-semibold underline underline-offset-4">
              View all treatments
            </Link>
          </div>
          <div className="home-programs-grid mt-10">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Simple process</p>
          <h2 className="mt-3 text-3xl md:text-4xl">How VitaWellRx® works</h2>
          <p className="mt-3 text-muted-foreground">
            Four clear steps from choosing a program to licensed-provider review.
          </p>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {homeStepCards.map((card) => (
            <HomeStepCard key={card.step} card={card} />
          ))}
        </ol>
        <div className="mt-8 rounded-2xl border border-cat-hair/40 bg-cat-hair/8 p-6">
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">Important. </span>
            Purchasing a program does not guarantee that a prescription will be issued.
          </p>
          <Link href="/refund-policy" className="mt-3 inline-block text-sm font-semibold underline underline-offset-4">
            Read the refund and cancellation policy
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl">Treatment category</h2>
          <Link
            href="/treatments/weight-management"
            className="group mt-10 block overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-lift)]"
          >
            <MediaImage
              src="/images/category-weight.webp"
              alt="Man stretching on a rooftop terrace at sunrise with city skyline behind"
              aspect="2 / 1"
              fit="cover"
              objectPosition="42% 22%"
              sizes="(max-width: 768px) 100vw, 78rem"
              className="category-banner__media transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Weight Management</p>
              <h3 className="mt-2 text-xl">Weight management programs</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Semaglutide and Tirzepatide programs built around your health history — not a one-size plan.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                View programs <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="text-3xl md:text-4xl">Why VitaWellRx®</h2>
            <p className="mt-4 text-muted-foreground">
              A deliberately simple commercial model, described plainly so nothing arrives as a surprise later.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {WHY.map(([title, copy]) => (
              <li key={title} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <h3 className="font-sans text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border surface-sand">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl">Safety and eligibility</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {SAFETY_TILES.map((tile) => (
              <p key={tile} className="rounded-xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
                {tile}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/safety" className="text-sm font-semibold underline underline-offset-4">
              Visit the safety center
            </Link>
            <Link href="/states-we-serve" className="text-sm font-semibold underline underline-offset-4">
              Check state availability
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          <div>
            <h2 className="text-3xl md:text-4xl">Frequently asked</h2>
            <p className="mt-4 text-muted-foreground">The questions people ask most.</p>
            <Link href="/faq" className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">
              Read the full FAQ
            </Link>
          </div>
          <FaqList items={homeFaqs} openFirst />
        </div>
      </section>

      <section className="border-t border-border surface-sand">
        <div className="container-page py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-5xl">Start with the program that fits your goals.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/treatments"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Explore Treatments
            </Link>
            <Link href="/pricing" className="rounded-full border border-input px-6 py-3 text-sm font-semibold hover:bg-secondary">
              See Pricing
            </Link>
          </div>
          <DemoNotice className="mx-auto mt-10 max-w-3xl text-left" />
        </div>
      </section>
    </>
  );
}
