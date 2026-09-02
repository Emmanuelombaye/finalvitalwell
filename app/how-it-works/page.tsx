import type { Metadata } from "next";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";

export const metadata: Metadata = { title: "How It Works" };

const STEPS = [
  ["Choose a program", "Review Semaglutide or Tirzepatide, including the monthly price and product-status language."],
  ["Complete checkout", "Pay the all-inclusive monthly program price. There is no separate consultation line."],
  ["Create your account", "Use the same email from checkout so orders, intake, and messages stay in one place."],
  ["Complete medical intake", "Answer health history questions and complete identity verification after you pay."],
  ["Licensed-provider review", "A clinician reviews your information independently. Approval is never guaranteed."],
  ["Fulfilment and support", "If approved, standard shipping is included. Follow-up stays inside your account."],
];

export default function HowItWorksPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "How It Works" }]} />
      <section className="container-page pt-8 pb-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Onboarding</p>
        <h1 className="mt-3 text-4xl md:text-5xl">How VitaWellRx® works</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Purchase first, then complete intake. A licensed clinician decides whether treatment is appropriate.
        </p>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([title, copy], index) => (
            <li key={title} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid size-9 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground">
                {index + 1}
              </span>
              <h2 className="mt-4 text-lg">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </li>
          ))}
        </ol>
        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
