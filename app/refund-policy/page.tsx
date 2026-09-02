import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/LegalPage";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund and billing information for VitaWellRx® telehealth services. Charged only if prescribed, where applicable.",
};

export default function Page() {
  return (
    <LegalPage
      title="Refund Policy"
      lede="Refund and billing information for VitaWellRx® telehealth services. Charged only if prescribed, where applicable."
    >
      <h2>1. Charged only if prescribed</h2>
      <p>
        For protocols that state “charged only if prescribed,” payment authorization may be collected during intake,
        but you are not charged for the medication plan unless a U.S.-licensed provider issues a prescription.
      </p>

      <h2>2. If you are not prescribed</h2>
      <p>
        If a provider determines treatment is not clinically appropriate, you will not be charged for that medication
        plan under a “charged only if prescribed” offer. You may still be notified of the determination by email or
        through your account.
      </p>

      <h2>3. After a prescription is issued</h2>
      <p>
        Once a prescription is issued and pharmacy fulfillment begins, refund eligibility may be limited because
        medication preparation and shipping are handled by licensed pharmacies under patient-specific prescriptions.
        Requests are reviewed case by case in accordance with applicable law and pharmacy policies.
      </p>

      <h2>4. Cancel or pause</h2>
      <p>
        Plans are generally month-to-month. You may request to cancel or pause future refills through the patient
        portal or by contacting support. Cancellation does not automatically refund prior fulfilled shipments.
      </p>

      <h2>5. How to request help</h2>
      <p>
        For billing or refund questions, email <a href={`mailto:${contact.email}`}>{contact.email}</a> or call{" "}
        {contact.phoneDisplay}. Include your full name, email used at intake, and a brief description of the issue.
      </p>

      <h2>6. Related policies</h2>
      <p>
        See also our <Link href="/shipping">Shipping & Fulfillment</Link> page, <Link href="/terms">Terms of Use</Link>,
        and <Link href="/medical-disclaimer">Medical Disclaimer</Link>.
      </p>

      <p className="pt-4">
        <Link href="/get-started" className="font-semibold text-gold">
          Check Eligibility
        </Link>
        {" · "}
        <Link href="/shipping" className="font-semibold text-gold">
          Shipping & Fulfillment
        </Link>
      </p>
    </LegalPage>
  );
}
