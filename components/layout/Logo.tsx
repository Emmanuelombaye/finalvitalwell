import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type LogoProps = {
  href?: string;
  variant?: "nav" | "mark";
};

export function Logo({ href = "/", variant = "nav" }: LogoProps) {
  const src = variant === "nav" ? "/brand/logo-nav.webp" : "/brand/logo.webp";
  const mark = (
    <span className="relative block h-11 w-[148px] overflow-hidden rounded-lg bg-white md:h-12 md:w-40">
      <Image src={src} alt={`${site.name} Logo`} fill sizes="160px" className="object-contain p-0.5" priority />
    </span>
  );

  if (!href) return mark;

  return (
    <Link href={href} aria-label={`${site.name} home`} className="shrink-0">
      {mark}
    </Link>
  );
}
