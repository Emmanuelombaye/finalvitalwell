import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/ui/LegalPage";
import { contact, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing access to and use of the VitaWellRx® websites, assessments, checkout flows, and related non-clinical services.",
};

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

export default function Page() {
  return (
    <LegalPage
      title="Terms of Use"
      lede={`Terms governing access to and use of the ${site.dba} websites, assessments, checkout flows, and related non-clinical services.`}
    >
      <h2>1. Introduction</h2>
      <p>
        These Terms of Use govern your access to and use of the websites, online services, assessments, checkout flows,
        patient-facing technology, communications, and related non-clinical services provided by {site.legalName} d/b/a
        VitaWell RX (the “Company,” “we,” “our,” or “us”) (collectively, the “Services”). By accessing or using the
        Services, you agree to these Terms.
      </p>

      <h2>2. Acceptance of Terms</h2>
      <p>
        By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by
        these Terms, our <Link href="/privacy">Privacy Policy</Link>, and any additional disclosures, consents, or
        policies presented to you. If you do not agree, do not use the Services.
      </p>

      <h2>3. About the Services</h2>
      <p>
        The Company provides a technology and administrative platform that may connect eligible users with independent
        or affiliated U.S.-licensed healthcare providers, licensed pharmacies, laboratories, and other healthcare
        service providers. Unless expressly identified otherwise, the Company is not a medical practice or pharmacy and
        does not itself diagnose, treat, prescribe, dispense, manufacture, or compound medication.
      </p>
      <p>
        Clinical services are provided by licensed healthcare providers practicing through one or more affiliated or
        contracted medical practices. Pharmacy services are provided by appropriately licensed pharmacy partners.
        Prescription treatment is available only after evaluation by a licensed healthcare provider and only when the
        provider determines, in the provider’s independent professional judgment, that treatment is clinically
        appropriate and legally permitted.
      </p>

      <h2>4. Eligibility and Patient Location</h2>
      <p>
        You must be at least 18 years old, be a resident of the United States, be physically located in a jurisdiction
        in which the applicable provider is authorized to provide care at the time clinical services are rendered, and
        be able to form a legally binding contract. By using the Services, you represent that you meet these
        requirements and that all information you provide is accurate, current, and complete.
      </p>

      <h2>5. Nationwide Availability and Service Limitations</h2>
      <p>
        Access to Services may be offered through affiliated or contracted healthcare providers and pharmacy partners
        where legally permitted, subject to applicable law, provider licensure, pharmacy authorization, patient
        eligibility, clinical appropriateness, and operational availability. Availability is not guaranteed in every
        jurisdiction.
      </p>

      <h2>6. Not for Emergencies</h2>
      <p>
        The Services are not designed for medical emergencies. If you are experiencing a medical emergency, call 911 or
        seek emergency medical care immediately. Do not use the Services to communicate urgent or life-threatening
        symptoms.
      </p>

      <h2>7. Separate Medical and Pharmacy Services</h2>
      <p>
        The Company does not control or direct the independent clinical judgment of healthcare providers. Providers are
        solely responsible for evaluating patients, determining whether treatment is appropriate, issuing prescriptions,
        directing care, and providing clinical follow-up. The Company does not control a pharmacy’s professional
        judgment, dispensing decisions, compounding decisions, labeling, counseling, fulfillment practices, or
        compliance obligations.
      </p>

      <h2>8. Telehealth and Asynchronous Care</h2>
      <p>
        Clinical care may be delivered through telehealth, including secure questionnaires, uploaded records or images,
        secure messaging, telephone calls, video visits, remote monitoring, or other legally permitted methods. In some
        circumstances, care may be provided asynchronously. Telehealth and asynchronous care are not appropriate for
        every patient or condition.
      </p>

      <h2>9. Provider Review; No Guarantee of a Prescription</h2>
      <p>
        Completing an assessment, creating an account, submitting payment information, or completing checkout does not
        create a guarantee of treatment or a prescription. No prescription or prescription medication will be issued,
        dispensed, or shipped before the required provider evaluation and issuance of a valid prescription by an
        authorized prescriber.
      </p>

      <h2>10. Prescription and Compounded Medications</h2>
      <p>
        Certain products accessible through the Services require a valid prescription. Some treatment plans may involve
        compounded medications when prescribed for an identified patient and permitted by applicable federal and state
        law. Compounded medications are not approved by the U.S. Food and Drug Administration (“FDA”), and the FDA does
        not review compounded medications for safety, effectiveness, or quality before they are marketed.
      </p>

      <h2>11. Health Information You Provide</h2>
      <p>
        You agree to provide accurate, current, and complete health information through assessments, intake forms,
        uploads, laboratory results, and communications with providers. Providing inaccurate, incomplete, or misleading
        information may result in delayed or declined treatment or risks to your health.
      </p>

      <h2>12. Account Registration and Security</h2>
      <p>
        If you create an account, you are responsible for maintaining the confidentiality of your credentials and for
        activity under your account. You may not share your account, impersonate another person, or create an account
        using false information.
      </p>

      <h2>13. Payment, Billing, and Refunds</h2>
      <p>
        Prescription required. Treatment is not guaranteed. The prices, consultation fees, medication charges, shipping
        charges, taxes, recurring charges, and any other material fees applicable to your purchase will be disclosed
        before you authorize payment. Refund and cancellation terms displayed at checkout are incorporated into these
        Terms.
      </p>

      <h2>14. Shipping and Fulfillment</h2>
      <p>
        Shipping and delivery estimates are not guaranteed. Medications will be shipped only to locations where the
        dispensing pharmacy is authorized to dispense and ship the medication.
      </p>

      <h2>15. Refills, Subscriptions, Pauses, and Cancellations</h2>
      <p>
        If a plan includes recurring billing, the billing cadence, renewal terms, cancellation process, refill
        conditions, and applicable fees will be disclosed at checkout or in your account. Recurring payment does not
        guarantee a prescription or refill.
      </p>

      <h2>16. No Guarantees</h2>
      <p>
        Neither the Company nor any provider or pharmacy guarantees eligibility, treatment approval, issuance of a
        prescription, medication availability, a particular formulation or dose, shipping timing, or any specific
        clinical outcome. Individual results vary.
      </p>

      <h2>17. Site Content Is Informational</h2>
      <p>
        Except for communications from a licensed healthcare provider concerning your individual care, content available
        through the Services is provided for general informational and educational purposes. It is not medical advice,
        diagnosis, treatment, or a substitute for professional medical judgment.
      </p>

      <h2>18. User Conduct and Prohibited Use</h2>
      <p>You agree not to misuse the Services. Prohibited conduct includes:</p>
      <ul>
        <li>submitting false, misleading, incomplete, or fraudulent information</li>
        <li>impersonating another person or misrepresenting your identity, age, location, medical history, or eligibility</li>
        <li>attempting to obtain medication for resale, diversion, misuse, sharing, or any unlawful purpose</li>
        <li>interfering with the security, availability, or integrity of the Services</li>
        <li>scraping, harvesting, copying, or using automated means to access the Services without permission</li>
        <li>uploading viruses, malicious code, or harmful materials</li>
        <li>violating applicable law, third-party rights, or these Terms</li>
      </ul>

      <h2>19. Intellectual Property and Trademarks</h2>
      <p>
        The Services, including names, logos, graphics, product names, designs, software, workflows, and content, are
        owned by or licensed to the Company and may not be copied, modified, distributed, or used without written
        permission.
      </p>

      <h2>20. Third-Party Services, Providers, and Partners</h2>
      <p>
        The Services may link to or integrate with healthcare providers, medical practices, pharmacies, laboratories,
        payment processors, identity-verification vendors, shipping carriers, analytics providers, and other third
        parties. These third parties are responsible for their own services.
      </p>

      <h2>21. Privacy and Security</h2>
      <p>
        Your use of the Services is governed by our <Link href="/privacy">Privacy Policy</Link>. Clinical providers,
        medical practices, laboratories, and pharmacies may also provide separate privacy notices.
      </p>

      <h2>22. Disclaimers</h2>
      <p>
        To the fullest extent permitted by law, the Company’s non-clinical Services are provided on an “as is” and “as
        available” basis without warranties of any kind, whether express or implied.
      </p>

      <h2>23. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, the Company and its officers, directors, employees, contractors,
        affiliates, licensors, and non-clinical service providers will not be liable for indirect, incidental, special,
        consequential, exemplary, or punitive damages arising from use of or inability to use the Company’s non-clinical
        Services. This limitation does not apply where prohibited by law.
      </p>

      <h2>24. Indemnification</h2>
      <p>
        To the fullest extent permitted by law, you agree to indemnify, defend, and hold harmless the Company from
        claims arising from your unlawful use of the Services, material violation of these Terms, or submission of
        fraudulent or intentionally misleading information.
      </p>

      <h2>25. Changes to the Services or Terms</h2>
      <p>
        We may modify, suspend, or discontinue portions of the Services when reasonably necessary. We may update these
        Terms from time to time. The updated Terms will be posted with a revised “Last updated” date.
      </p>

      <h2>26. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the State of Florida, without regard to conflict-of-law principles,
        except where applicable law requires otherwise.
      </p>

      <h2>27. States Served</h2>
      <p>
        Subject to the qualifications and limitations in Section 5, access to at least some Services is offered in each
        of the following 50 states:
      </p>
      <p>{states.join(", ")}.</p>
      <p>
        You must be physically located in the applicable state at the time clinical services are provided. Not every
        treatment, medication, provider, pharmacy, or fulfillment option is available in every listed state.
      </p>

      <h2>28. Important Notices</h2>
      <ul>
        <li>The Company is not a pharmacy, drug manufacturer, outsourcing facility, or compounding facility unless expressly identified otherwise.</li>
        <li>Prescription treatment is provided only when clinically appropriate after an evaluation by a licensed healthcare provider.</li>
        <li>Clinical services are provided through affiliated or contracted medical practices and licensed healthcare providers.</li>
        <li>Prescription medication is dispensed by an appropriately licensed pharmacy pursuant to a valid prescription.</li>
        <li>Compounded medications, when prescribed, are not FDA-approved and are not reviewed by the FDA for safety, effectiveness, or quality before marketing.</li>
        <li>Product imagery is illustrative. Actual packaging and pharmacy labeling may differ.</li>
        <li>In an emergency, call 911 or seek immediate emergency care.</li>
      </ul>

      <h2>29. Contact Us</h2>
      <p>Questions about these Terms may be directed to:</p>
      <p>
        {site.legalName}
        <br />
        {contact.address}
        <br />
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <br />
        {contact.phoneDisplay}
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
