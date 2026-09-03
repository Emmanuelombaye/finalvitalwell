"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type FooterAccordionSectionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

function FooterAccordionSection({ title, children, defaultOpen = false }: FooterAccordionSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="hims-footer__section">
      <button
        type="button"
        className="hims-footer__section-toggle"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{title}</span>
        <ChevronDown className={`hims-footer__chevron ${open ? "is-open" : ""}`} aria-hidden />
      </button>
      <h4 className="hims-footer__section-title">{title}</h4>
      <div className={`hims-footer__section-links ${open ? "is-open" : ""}`}>{children}</div>
    </div>
  );
}

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  accent?: boolean;
};

function FooterLink({ href, children, accent }: FooterLinkProps) {
  return (
    <Link href={href} className={accent ? "hims-footer__link hims-footer__link--accent" : "hims-footer__link"}>
      {children}
    </Link>
  );
}

type FooterNavProps = {
  careLinks: readonly { href: string; label: string }[];
  learnLinks: readonly { href: string; label: string }[];
  supportLinks: readonly { href: string; label: string; accent?: boolean }[];
  legalLinks: readonly { href: string; label: string }[];
};

export function FooterNav({ careLinks, learnLinks, supportLinks, legalLinks }: FooterNavProps) {
  return (
    <nav className="hims-footer__nav-grid" aria-label="Footer">
      <FooterAccordionSection title="Treatments" defaultOpen>
        {careLinks.map((item) => (
          <FooterLink key={item.href} href={item.href}>
            {item.label}
          </FooterLink>
        ))}
      </FooterAccordionSection>

      <FooterAccordionSection title="Learn">
        {learnLinks.map((item) => (
          <FooterLink key={item.href} href={item.href}>
            {item.label}
          </FooterLink>
        ))}
      </FooterAccordionSection>

      <FooterAccordionSection title="Support">
        {supportLinks.map((item) => (
          <FooterLink key={`${item.href}-${item.label}`} href={item.href} accent={item.accent}>
            {item.label}
          </FooterLink>
        ))}
      </FooterAccordionSection>

      <FooterAccordionSection title="Legal">
        {legalLinks.map((item) => (
          <FooterLink key={item.href} href={item.href}>
            {item.label}
          </FooterLink>
        ))}
      </FooterAccordionSection>
    </nav>
  );
}
