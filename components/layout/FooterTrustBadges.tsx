import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const BADGES = [
  {
    href: "/provider-network",
    image: "/images/trust/provider-network.webp",
    kicker: "Clinical services via",
    title: "Provider Network",
    alt: "Provider network shield badge",
  },
  {
    href: undefined,
    image: "/images/trust/usa-pharmacy.webp",
    kicker: "Dispensed by",
    title: "Licensed Pharmacies in the USA",
    alt: "Licensed US pharmacy shield badge",
  },
  {
    href: "/hipaa",
    image: "/images/trust/hipaa.webp",
    kicker: "Data protected",
    title: "HIPAA",
    sub: "Notice",
    alt: "HIPAA compliance shield badge",
  },
] as const;

type FooterTrustBadgesProps = {
  tone?: "dark" | "light";
};

function TrustBadge({
  badge,
  tone,
}: {
  badge: (typeof BADGES)[number];
  tone: "dark" | "light";
}) {
  const body = (
    <>
      <span className="brand-footer-trust__icon-wrap">
        <Image
          src={badge.image}
          alt={badge.alt}
          width={56}
          height={56}
          sizes="56px"
          className="brand-footer-trust__image"
        />
      </span>
      <span className="brand-footer-trust__copy">
        <span className="brand-footer-trust__kicker">{badge.kicker}</span>
        <span className="brand-footer-trust__title">
          {badge.title}
          {"sub" in badge && badge.sub ? <span className="brand-footer-trust__sub"> {badge.sub}</span> : null}
        </span>
      </span>
    </>
  );

  const className = `brand-footer-trust__item${tone === "light" ? " brand-footer-trust__item--light" : ""}${badge.href ? " brand-footer-trust__item--link" : ""}`;

  if (badge.href) {
    return (
      <Link href={badge.href} className={className}>
        {body}
      </Link>
    );
  }

  return <div className={className}>{body}</div>;
}

export function FooterTrustBadges({ tone = "dark" }: FooterTrustBadgesProps) {
  return (
    <div className={`brand-footer-trust brand-footer-trust--${tone}`} aria-label="Compliance and care partners">
      {BADGES.map((badge) => (
        <TrustBadge key={badge.kicker} badge={badge} tone={tone} />
      ))}
    </div>
  );
}
