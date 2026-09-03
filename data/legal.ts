export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/provider-network", label: "Provider Network" },
  { href: "/supplement-terms", label: "Supplement Terms" },
  { href: "/states-we-serve", label: "States We Serve" },
  { href: "/telehealth-consent", label: "Telehealth Consent" },
  { href: "/hipaa", label: "HIPAA Notice" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
  { href: "/patient-safety", label: "Patient Safety" },
  { href: "/shipping", label: "Shipping & Fulfillment" },
  { href: "/refund-policy", label: "Refund Policy" },
] as const;

export const footerLegalLinks = legalLinks.filter(
  (link) => !["/provider-network", "/supplement-terms"].includes(link.href),
);

export const legalLastUpdated = "August 15, 2026";
