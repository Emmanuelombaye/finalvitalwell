import type { Metadata } from "next";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";

export const metadata: Metadata = { title: "Safety" };

export default function SafetyPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Safety" }]} />
      <section className="container-page max-w-3xl pt-8 pb-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Safety center</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Safety and eligibility</h1>
        <p className="mt-4 text-muted-foreground">
          Not everyone qualifies. Licensed-provider review is required. This page is educational, not medical advice.
        </p>
        <div className="mt-8 space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
          <p>
            VitaWellRx® programs are only for adults who can be evaluated remotely. A clinician may decline treatment,
            request laboratory work, or refer you to in-person care.
          </p>
          <p>
            Semaglutide and tirzepatide belong to incretin-based medicine classes. Commonly described effects include
            nausea, vomiting, diarrhoea, constipation, and abdominal discomfort.
          </p>
          <p>
            VitaWellRx® does not provide emergency care. Call 911 or go to the nearest emergency department for severe
            abdominal pain, persistent vomiting, trouble breathing, or signs of an allergic reaction.
          </p>
        </div>
        <DemoNotice className="mt-8" />
      </section>
    </>
  );
}
