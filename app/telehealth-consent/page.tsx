import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/LegalPage";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Telehealth Consent",
  description:
    "How telehealth services may be provided through the VitaWellRx® platform, including asynchronous care and provider review.",
};

export default function Page() {
  return (
    <LegalPage
      title="Telehealth Consent"
      lede="How telehealth services may be provided through the VitaWellRx® platform, including asynchronous care and provider review."
    >
      <p>
        VitaWellRx® is not a pharmacy and does not itself practice medicine. Medical services, if available, are
        provided by independent US-licensed providers or affiliated clinical partners.
      </p>

      <h2>1. What Telehealth Is</h2>
      <p>
        Telehealth is the delivery of health-related services and clinical information through electronic communications
        between a patient and a provider who are in different locations.
      </p>
      <p>
        Telehealth may include online questionnaires, secure messaging, uploaded photos or documents, remote provider
        review, and other electronic communications. A live video or phone visit may not always be required unless
        requested by a provider or required by law.
      </p>

      <h2>2. Asynchronous Care</h2>
      <p>
        Care through VitaWellRx® is often delivered asynchronously, meaning a US-licensed provider reviews your
        information and communicates with you at separate times rather than during a real-time visit.
      </p>
      <p>
        Asynchronous telehealth may not be appropriate for all medical conditions. A provider may request more
        information, require a live consultation, decline treatment, or recommend in-person care.
      </p>

      <h2>3. Provider Review</h2>
      <p>
        The information you submit through assessments, intake forms, secure messages, and uploads is reviewed by an
        independent US-licensed provider to determine whether treatment is clinically appropriate for you.
      </p>

      <h2>4. No Guarantee of Prescription</h2>
      <p>
        Completing an assessment, checkout, payment authorization, or account creation does not guarantee that treatment
        will be prescribed. Prescription treatment, if any, is provided only after a US-licensed provider reviews your
        information and determines that treatment is clinically appropriate.
      </p>

      <h2>5. Potential Benefits of Telehealth</h2>
      <p>
        Potential benefits include more convenient access to licensed providers, the ability to receive care from a
        private location, reduced travel and wait times, and discreet communication about sensitive health concerns.
      </p>

      <h2>6. Potential Risks and Limitations</h2>
      <p>Telehealth has potential risks and limitations, including but not limited to:</p>
      <ul>
        <li>Information transmitted may be insufficient to allow appropriate clinical decision-making</li>
        <li>Delays in evaluation or treatment may occur due to technology failures</li>
        <li>In rare cases, security protocols could fail, causing a breach of privacy of personal health information</li>
      </ul>

      <h2>7. Your Responsibilities</h2>
      <p>
        You are responsible for providing complete, accurate, and current information, including medical history,
        medications, allergies, symptoms, and any changes in your health. You agree to follow provider instructions and
        notify your provider promptly of any new or worsening symptoms or side effects.
      </p>

      <h2>8. Emergency Care</h2>
      <p>
        If you are experiencing a medical emergency, call 911 or seek emergency medical care immediately. VitaWellRx®
        should not be used for emergencies.
      </p>

      <h2>9. Medical Records and Privacy</h2>
      <p>
        Your information may become part of your medical record and may be shared with providers, pharmacies,
        fulfillment partners, payment processors, or service providers as described in the{" "}
        <Link href="/privacy">Privacy Policy</Link> and applicable notices.
      </p>

      <h2>10. Prescriptions and Pharmacy Fulfillment</h2>
      <p>
        If a provider determines that prescription treatment is clinically appropriate, a prescription may be sent to a
        licensed dispensing pharmacy, where permitted by law. Final treatment, dose, formulation, and pricing may vary
        based on provider review, pharmacy availability, and applicable law.
      </p>

      <h2>11. Right to Decline or Withdraw Consent</h2>
      <p>
        You may decline or withdraw consent to telehealth at any time by discontinuing use of the Services or contacting
        support. Withdrawing consent may limit your ability to receive services through VitaWellRx®.
      </p>

      <h2>12. State Availability</h2>
      <p>
        Services may not be available in all states. Available treatments, provider networks, and pharmacy partners may
        vary based on your location and applicable law.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        Questions about this Telehealth Consent can be sent to{" "}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>

      <p className="pt-4">
        <Link href="/get-started" className="font-semibold text-gold">
          Check Eligibility
        </Link>
        {" · "}
        <Link href="/privacy" className="font-semibold text-gold">
          Privacy Policy
        </Link>
      </p>
    </LegalPage>
  );
}
