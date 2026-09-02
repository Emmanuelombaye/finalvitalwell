import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/LegalPage";
import { contact, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Supplement Terms",
  description: `Terms applicable to dietary supplements, wellness products, or non-prescription items offered through ${site.dba}.`,
};

export default function SupplementTermsPage() {
  return (
    <LegalPage
      title="Supplement Terms"
      lede={`Terms applicable to dietary supplements and non-prescription wellness products that may be offered through ${site.dba}.`}
    >
      <h2>1. Scope</h2>
      <p>
        These Supplement Terms apply to any dietary supplement, vitamin, mineral, botanical, or other non-prescription
        wellness product made available through the {site.dba} website or platform (each, a &ldquo;Supplement&rdquo;).
        These terms supplement, and do not replace, our{" "}
        <Link href="/terms">Terms of Use</Link>, <Link href="/privacy">Privacy Policy</Link>, and other applicable
        policies.
      </p>

      <h2>2. Not Prescription Treatment</h2>
      <p>
        Supplements are not prescription drugs and are not intended to diagnose, treat, cure, or prevent any disease.
        Prescription weight-management programs, including compounded GLP-1 therapies when prescribed, are governed
        separately by provider review, pharmacy fulfillment, and applicable clinical policies.
      </p>

      <h2>3. FDA Disclaimer</h2>
      <p>
        Statements regarding Supplements have not been evaluated by the U.S. Food and Drug Administration. Supplements are
        not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.
      </p>

      <h2>4. Consult a Provider</h2>
      <p>
        Before starting any Supplement, consult a licensed healthcare provider—especially if you are pregnant,
        breastfeeding, taking prescription medication, managing a chronic condition, or under active clinical care
        through {site.dba}. A provider may advise against certain Supplements based on your health history.
      </p>

      <h2>5. Purchases and Billing</h2>
      <p>
        Supplement pricing, taxes, shipping charges, and renewal terms will be disclosed before you authorize payment.
        Unless expressly stated at checkout, Supplements are separate from prescription medication plans and may not be
        eligible for the same refund or cancellation terms as prescription programs.
      </p>

      <h2>6. Shipping and Returns</h2>
      <p>
        Supplements ship according to the fulfillment method disclosed at checkout. Return eligibility may be limited
        once a product has shipped, subject to applicable law and the refund terms displayed at purchase. See our{" "}
        <Link href="/refund-policy">Refund Policy</Link> and <Link href="/shipping">Shipping & Fulfillment</Link> pages
        for related information.
      </p>

      <h2>7. No Medical Relationship</h2>
      <p>
        Purchasing a Supplement does not create a doctor-patient relationship with {site.dba}. {site.dba} is not a
        pharmacy and does not itself practice medicine. Clinical services, when available, are provided by independent
        licensed providers through our <Link href="/provider-network">Provider Network</Link>.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about these Supplement Terms may be sent to{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a> or {contact.phoneDisplay}.
      </p>
      <p>
        {site.legalName} d/b/a {site.dba}
      </p>

      <p className="pt-4">
        <Link href="/terms" className="font-semibold text-gold">
          Terms of Use
        </Link>
        {" · "}
        <Link href="/provider-network" className="font-semibold text-gold">
          Provider Network
        </Link>
      </p>
    </LegalPage>
  );
}
