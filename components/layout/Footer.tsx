import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { FooterTrustBadges } from "@/components/layout/FooterTrustBadges";
import { contact, site, trustBadges } from "@/data/site";
import { legalLinks } from "@/data/legal";
import { products } from "@/lib/products";

const semaglutide = products.find((p) => p.slug === "semaglutide")!;
const tirzepatide = products.find((p) => p.slug === "tirzepatide")!;

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="footer-column">
      <h4 className="footer-column__title">{title}</h4>
      <div className="footer-column__links">{children}</div>
    </div>
  );
}

function FooterLink({ href, children, accent }: { href: string; children: ReactNode; accent?: boolean }) {
  return (
    <Link href={href} className={accent ? "footer-link footer-link--accent" : "footer-link"}>
      {children}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__cta">
        <div className="container-page site-footer__cta-inner">
          <div className="site-footer__cta-copy">
            <p className="site-footer__eyebrow">
              <Sparkles className="size-3.5" aria-hidden />
              Start your care journey
            </p>
            <h2 className="site-footer__cta-title">Ready for provider-guided weight care?</h2>
            <p className="site-footer__cta-text">
              Complete a short online intake. Charged only if prescribed. No insurance needed.
            </p>
          </div>
          <Link href="/get-started" className="btn-primary site-footer__cta-button">
            Check Eligibility Now
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="site-footer__main">
        <div className="container-page">
          <div className="footer-main-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-brand__logo-link" aria-label={`${site.name} home`}>
                <span className="footer-brand__logo-wrap">
                  <Image
                    src="/brand/logo.webp"
                    alt={`${site.name} Logo`}
                    fill
                    sizes="135px"
                    className="object-contain p-1"
                  />
                </span>
              </Link>
              <p className="footer-brand__text">
                {site.legalName} d/b/a {site.dba}. Licensed clinical care. Clear pricing. Qualified U.S. pharmacy
                fulfillment.
              </p>
              <ul className="footer-brand__checks">
                {trustBadges.map((badge) => (
                  <li key={badge}>
                    <CheckCircle2 className="size-4 shrink-0" aria-hidden />
                    {badge}
                  </li>
                ))}
              </ul>
            </div>

            <FooterColumn title="Care">
              <FooterLink href={tirzepatide.path}>Tirzepatide+</FooterLink>
              <FooterLink href={semaglutide.path}>Semaglutide+</FooterLink>
              <FooterLink href="/treatments">All treatments</FooterLink>
              <FooterLink href="/how-it-works">How it works</FooterLink>
              <FooterLink href="/shop">Shop</FooterLink>
            </FooterColumn>

            <FooterColumn title="Legal">
              {legalLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Support">
              <FooterLink href="/about">About {site.dba}</FooterLink>
              <FooterLink href="/get-started">Check Eligibility</FooterLink>
              <FooterLink href="/account">Patient portal</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href={`mailto:${contact.email}`} accent>
                {contact.email}
              </FooterLink>
            </FooterColumn>
          </div>

          <FooterTrustBadges tone="dark" />
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container-page footer-bottom-block">
          <p className="footer-bottom-copy">
            {site.legalName} d/b/a {site.dba} · © {year} {site.dba}. All rights reserved.
          </p>

          <nav className="footer-legal-links" aria-label="Legal">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <p className="footer-legal-note">
            VitaWellRx® is a telehealth platform that connects eligible patients with independent US-licensed providers
            and licensed pharmacy partners. VitaWellRx® is not a pharmacy and does not itself practice medicine.
            Prescription products are provided only if clinically appropriate after review by a US-licensed provider.
            Individual results may vary.
          </p>
          <p className="footer-legal-note">
            <strong>Service availability:</strong> Services may not be available in all states. Availability may vary by
            treatment, provider licensure, pharmacy fulfillment, and patient eligibility.
          </p>
          <p className="footer-legal-note">
            <strong>Pharmacy &amp; fulfillment:</strong> VitaWellRx® is not a pharmacy, drug manufacturer, outsourcing
            facility, or compounding facility, and does not compound, manufacture, dispense, or physically fulfill
            medications. If prescription treatment is clinically appropriate, medication may be fulfilled through a
            licensed dispensing pharmacy pursuant to a patient-specific prescription. Compounded medications are not
            FDA-approved as finished branded products. *Timing not guaranteed.
          </p>
          <p className="footer-legal-note">
            <strong>Product imagery:</strong> Displayed product imagery is intended solely for illustrative purposes and
            is not intended to imply that VitaWellRx® compounds, manufactures, dispenses, or physically fulfills
            medications. Actual medication packaging and pharmacy labeling may differ.
          </p>
        </div>
      </div>
    </footer>
  );
}
