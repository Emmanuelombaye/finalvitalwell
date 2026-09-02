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
        className="hims-footer__section-toggle md:hidden"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {title}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <h4 className="hims-footer__section-title hidden md:block">{title}</h4>
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
    <div className="hims-footer__nav-grid">
      <FooterAccordionSection title="Treatments">
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
          <FooterLink key={item.href} href={item.href} accent={item.accent}>
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
    </div>
  );
}
