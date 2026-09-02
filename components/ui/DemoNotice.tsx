import Link from "next/link";
import { site } from "@/data/site";

export function DemoNotice({ className = "" }: { className?: string }) {
  return (
    <p className={`rounded-lg border border-border bg-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground ${className}`}>
      <span className="font-semibold text-foreground">{site.dba} notice. </span>
      {site.dba} is a telehealth platform that connects eligible patients with independent US-licensed providers and
      licensed pharmacy partners. {site.dba} is not a pharmacy and does not itself practice medicine. Prescription
      products are provided only if clinically appropriate after review by a US-licensed provider.
    </p>
  );
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav className="container-page flex flex-wrap gap-1.5 pt-5 text-sm text-muted-foreground" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-1.5">
          {index > 0 ? <span>/</span> : null}
          {item.href && index < items.length - 1 ? (
            <Link href={item.href} className="hover:text-foreground hover:underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
