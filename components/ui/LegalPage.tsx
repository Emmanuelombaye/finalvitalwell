import type { ReactNode } from "react";
import Link from "next/link";
import { legalLastUpdated, legalLinks } from "@/data/legal";

export function LegalPage({
  kicker = "Legal",
  title,
  lede,
  children,
  updated = legalLastUpdated,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  children: ReactNode;
  updated?: string;
}) {
  return (
    <section className="container-page py-12 md:py-16">
      <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">{kicker}</p>
      <h1 className="mt-3 max-w-4xl text-4xl md:text-5xl">{title}</h1>
      {lede ? <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{lede}</p> : null}
      <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside>
          <p className="text-xs font-bold tracking-[0.16em] text-foreground uppercase">Documents</p>
          <nav className="mt-3 grid gap-2" aria-label="Legal documents">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-gold">
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="max-w-3xl space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground [&_a]:font-semibold [&_a]:text-gold [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:text-foreground [&_h2]:first:mt-0 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </section>
  );
}
