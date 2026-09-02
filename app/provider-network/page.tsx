import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/LegalPage";
import { contact, site } from "@/data/site";
import { providerNetwork } from "@/data/provider-network";

export const metadata: Metadata = {
  title: "Provider Network",
  description:
    "Information about the independent licensed healthcare professionals and medical provider network supporting VitaWellRx® clinical services.",
};

export default function ProviderNetworkPage() {
  return (
    <LegalPage
      title="Provider Network"
      lede={`Medical provider network information for ${site.dba} telehealth services.`}
    >
      <h2>Medical Provider Network</h2>
      <p>
        Clinical services available through this website are provided by independent licensed healthcare professionals
        through our provider network:
      </p>
      <p>
        <strong>{providerNetwork.company}</strong>
        <br />
        Provider Network Website:{" "}
        <a href={providerNetwork.website} target="_blank" rel="noopener noreferrer">
          {providerNetwork.website}
        </a>
      </p>
      <p>
        {providerNetwork.company} provides access to licensed healthcare professionals who evaluate patients, determine
        medical appropriateness, provide clinical services, and, when appropriate, issue prescriptions based on their
        independent professional judgment.
      </p>
      <p>
        All medical decisions, including whether a prescription or treatment is appropriate, are made solely by the
        treating licensed healthcare professional. {site.dba} does not direct, control, or interfere with the independent
        clinical judgment of healthcare providers.
      </p>
      <p>
        Availability of medical services may vary based on the patient&apos;s location, provider licensure, applicable law,
        and the specific treatment or service requested.
      </p>
      <p>
        For additional information regarding the provider network, please visit {providerNetwork.company} at{" "}
        <a href={providerNetwork.website} target="_blank" rel="noopener noreferrer">
          {providerNetwork.website}
        </a>
        .
      </p>

      <p className="pt-4">
        <Link href="/get-started" className="font-semibold text-gold">
          Check Eligibility
        </Link>
        {" · "}
        <Link href="/terms" className="font-semibold text-gold">
          Terms of Use
        </Link>
        {" · "}
        <a href={`mailto:${contact.email}`} className="font-semibold text-gold">
          {contact.email}
        </a>
      </p>
    </LegalPage>
  );
}
