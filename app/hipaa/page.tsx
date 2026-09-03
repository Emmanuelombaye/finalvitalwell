import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/LegalPage";
import { contact, site } from "@/data/site";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description:
    "How medical information about you may be used and disclosed through VitaWellRx®, and how you can get access to this information.",
};

export default function Page() {
  return (
    <LegalPage
      title="HIPAA Notice of Privacy Practices"
      lede="How medical information about you may be used and disclosed, and how you can get access to this information. Please review it carefully."
    >
      <h2>Uses and Disclosures</h2>
      <p>
        Your protected health information (“PHI”) may be used and disclosed for treatment (including provider review and
        pharmacy dispensing), payment, and healthcare operations, and as otherwise permitted or required by law.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to inspect and request a copy of your PHI, request amendments, request an accounting of
        disclosures, request restrictions and confidential communications, and receive a paper copy of this notice.
      </p>

      <h2>Our Responsibilities</h2>
      <p>
        We are required by law to maintain the privacy and security of your PHI, notify you following a breach of
        unsecured PHI, and follow the terms of the notice currently in effect.
      </p>

      <h2>Complaints and Contact</h2>
      <p>
        If you believe your privacy rights have been violated, you may file a complaint with us or with the US
        Department of Health and Human Services. You will not be retaliated against for filing a complaint.
      </p>
      <p>
        Contact: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        {site.legalName} d/b/a {site.dba}
      </p>

      <p>
        This Notice is provided for informational purposes and should be reviewed by legal counsel before final
        publication.
      </p>

      <p className="pt-4">
        <Link href="/privacy" className="font-semibold text-gold">
          Privacy Policy
        </Link>
        {" · "}
        <Link href="/get-started" className="font-semibold text-gold">
          Check Eligibility
        </Link>
      </p>
    </LegalPage>
  );
}
