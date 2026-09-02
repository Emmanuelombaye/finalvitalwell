import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <h1 className="text-4xl">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        That page is not available. Explore Semaglutide and Tirzepatide programs instead.
      </p>
      <Link
        href="/treatments"
        className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
      >
        Explore Treatments
      </Link>
    </section>
  );
}
