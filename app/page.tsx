import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Lock, MessageCircle, ShieldCheck, Tag, Truck } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { FaqList } from "@/components/ui/FaqList";
import { DemoNotice } from "@/components/ui/DemoNotice";
import { homeFaqs, products } from "@/lib/products";

const TRUST = [
  { icon: ShieldCheck, label: "Licensed-provider review" },
  { icon: Tag, label: "Clear pricing" },
  { icon: Truck, label: "Standard shipping included" },
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
      <section className="border-b border-border">
        <div className="container-page grid items-center gap-10 py-14 md:gap-12 md:py-20 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
              National telehealth programs
            </p>
            <h1 className="mt-4 max-w-[11.5ch] text-4xl leading-[1.08] md:text-6xl">
              Personalized care. One clear monthly price.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Explore clinician-guided weight-management programs designed around your goals. Complete your purchase
              first, then finish a secure medical intake for licensed-provider review.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Explore Treatments <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-full border border-input px-6 py-3 text-sm font-semibold hover:bg-secondary"
              >
                See How It Works
              </Link>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Your price includes the online clinical consultation, ongoing program support, standard shipping, and all
              ordinary program fees. Treatment is never guaranteed.{" "}
              <span className="font-medium text-foreground">Available in eligible states.</span>
            </p>
          </div>
          <div className="min-w-0">
            <Image
              src="/images/hero.webp"
              alt="Two people walking outdoors on a tree-lined path in morning light"
              width={1600}
              height={1000}
              priority
              className="h-72 w-full rounded-3xl object-cover object-[70%_30%] shadow-[var(--shadow-lift)] md:h-[26rem] lg:h-[28rem]"
            />
          </div>
        </div>
        <div className="border-t border-border surface-sand">
          <ul className="container-page flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm">
                <Icon className="size-4 text-gold" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl">Weight-management programs</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Two clinician-guided programs, each with one all-inclusive monthly price.
            </p>
          </div>
          <Link href="/treatments" className="text-sm font-semibold underline underline-offset-4">
            View treatments
          </Link>
        </div>
        <div className="mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-border surface-sand">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl">How VitaWellRx® works</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ["Choose a program", "Review Semaglutide or Tirzepatide with transparent pricing."],
              ["Complete checkout", "Purchase your VitaWellRx® program securely."],
              ["Complete your medical intake", "After checkout, finish the required secure health intake."],
              ["Licensed-provider review", "A licensed provider reviews your information. Treatment is provided only if appropriate."],
            ].map(([title, copy], index) => (
              <li key={title} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </li>
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
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl">Treatment category</h2>
        <Link
          href="/treatments/weight-management"
          className="group mt-10 block overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-lift)]"
        >
          <Image
            src="/images/category-weight.webp"
            alt="Couple walking together outdoors"
            width={1600}
            height={900}
            className="aspect-[16/7] w-full object-cover object-[70%_30%] transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="p-6">
            <h3 className="text-xl">Weight Management</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Clinician-guided Semaglutide and Tirzepatide programs built around your health history.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
              View programs <ArrowRight className="size-4" />
            </span>
          </div>
        </Link>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-page grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <h2 className="text-3xl md:text-4xl">Why VitaWellRx®</h2>
            <p className="mt-4 text-muted-foreground">
              A deliberately simple commercial model, described plainly so nothing arrives as a surprise later.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {WHY.map(([title, copy]) => (
              <li key={title} className="flex gap-3">
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

      <section className="container-page py-16 md:py-20">
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
      </section>

      <section className="border-t border-border surface-sand">
        <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
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

      <section className="container-page py-20 text-center">
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
      </section>
    </>
  );
}
