import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterNav } from "@/components/layout/FooterNav";
import { FooterTrustBadges } from "@/components/layout/FooterTrustBadges";
import { contact, site } from "@/data/site";
import { legalLinks } from "@/data/legal";
import { products } from "@/lib/products";

const semaglutide = products.find((p) => p.slug === "semaglutide")!;
const tirzepatide = products.find((p) => p.slug === "tirzepatide")!;

const careLinks = [
  { href: tirzepatide.path, label: "Tirzepatide" },
  { href: semaglutide.path, label: "Semaglutide" },
  { href: "/treatments/weight-management", label: "Weight Management" },
  { href: "/treatments", label: "All treatments" },
];

const learnLinks = [
  { href: "/learn", label: "Learn center" },
  { href: "/learn/glp-1", label: "GLP-1 programs" },
  { href: "/care", label: "Your care" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/faq", label: "FAQ" },
  { href: "/safety", label: "Safety center" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compounded-medications", label: "Compounded medications" },
];

const supportLinks = [
  { href: "/about", label: `About ${site.dba}` },
  { href: "/get-started", label: "Check eligibility" },
  { href: "/account", label: "Patient portal" },
  { href: "/contact", label: "Contact" },
  { href: "/provider-network", label: "Provider network" },
  { href: `mailto:${contact.email}`, label: contact.email, accent: true },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hims-footer">
      <div className="hims-footer__cta">
        <div className="container-page hims-footer__cta-inner">
          <div>
            <p className="hims-footer__eyebrow">Start your care journey</p>
            <h2 className="hims-footer__cta-title">Ready for provider-guided weight care?</h2>
            <p className="hims-footer__cta-text">
              Complete a short online intake. Charged only if prescribed. No insurance needed.
            </p>
          </div>
          <Link href="/get-started" className="hims-footer__cta-button">
            Check Eligibility Now
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="hims-footer__main">
        <div className="container-page">
          <div className="hims-footer__top">
            <Link href="/" className="hims-footer__logo-link" aria-label={`${site.name} home`}>
              <span className="hims-footer__logo-wrap">
                <Image
                  src="/brand/logo.webp"
                  alt={`${site.name} Logo`}
                  fill
                  sizes="135px"
                  className="object-contain p-1"
                />
              </span>
            </Link>
            <p className="hims-footer__brand-text">
              {site.legalName} d/b/a {site.dba}. Licensed clinical care, clear pricing, and qualified U.S. pharmacy
              fulfillment when prescribed.
            </p>
          </div>

          <FooterNav
            careLinks={careLinks}
            learnLinks={learnLinks}
            supportLinks={supportLinks}
            legalLinks={legalLinks}
          />

          <FooterTrustBadges tone="light" />
        </div>
      </div>

      <div className="hims-footer__bottom">
        <div className="container-page">
          <p className="hims-footer__copyright">
            {site.legalName} d/b/a {site.dba} · © {year} {site.dba}. All rights reserved.
          </p>

          <nav className="hims-footer__legal-row" aria-label="Legal">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hims-footer__disclaimers">
            <p>
              VitaWellRx® is a telehealth platform that connects eligible patients with independent US-licensed
              providers and licensed pharmacy partners. VitaWellRx® is not a pharmacy and does not itself practice
              medicine. Prescription products are provided only if clinically appropriate after review by a US-licensed
              provider. Individual results may vary.
            </p>
            <p>
              <strong>Service availability:</strong> Services may not be available in all states. Availability may vary
              by treatment, provider licensure, pharmacy fulfillment, and patient eligibility.
            </p>
            <p>
              <strong>Pharmacy &amp; fulfillment:</strong> VitaWellRx® is not a pharmacy, drug manufacturer, outsourcing
              facility, or compounding facility, and does not compound, manufacture, dispense, or physically fulfill
              medications. If prescription treatment is clinically appropriate, medication may be fulfilled through a
              licensed dispensing pharmacy pursuant to a patient-specific prescription. Compounded medications are not
              FDA-approved as finished branded products.
            </p>
            <p>
              <strong>Product imagery:</strong> Displayed product imagery is intended solely for illustrative purposes
              and is not intended to imply that VitaWellRx® compounds, manufactures, dispenses, or physically fulfills
              medications. Actual medication packaging and pharmacy labeling may differ.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
