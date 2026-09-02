import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { contact, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VitalWellRx delivers modern, patient-first telehealth for Personalized Tirzepatide and Semaglutide — licensed providers, transparent pharmacies, ongoing support.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
      <section className="container-page max-w-3xl pt-8 pb-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Company</p>
        <h1 className="mt-3 text-4xl md:text-5xl">About {site.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {site.dba} delivers modern, patient-first telehealth for Personalized Tirzepatide and Semaglutide —
          licensed providers, transparent pharmacies, ongoing support.
        </p>
        <div className="mt-8 space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
          <p>
            {site.legalName} d/b/a {site.dba} is a telehealth platform that connects eligible patients with independent
            US-licensed providers and licensed pharmacy partners. {site.dba} is not a pharmacy and does not itself
            practice medicine.
          </p>
          <p>
            We currently offer two clinician-guided weight-care programs — Semaglutide and Tirzepatide. Complete a
            short online intake. You are charged only if prescribed. Treatment is provided only if clinically
            appropriate after review by a US-licensed provider.
          </p>
          <p>
            Questions: <a href={`mailto:${contact.email}`}>{contact.email}</a> · {contact.phoneDisplay}
            <br />
            {contact.address}
          </p>
        </div>
        <Link
          href="/get-started"
          className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90"
        >
          Check Eligibility
        </Link>
        <DemoNotice className="mt-8" />
      </section>
    </>
  );
}
