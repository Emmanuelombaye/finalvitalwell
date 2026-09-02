import type { Metadata } from "next";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { FaqList } from "@/components/ui/FaqList";
import { homeFaqs } from "@/lib/products";

export const metadata: Metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "FAQ" }]} />
      <section className="container-page pt-8 pb-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Resources</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Frequently asked questions</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Intake, review, shipping, pricing, and cancellation.
        </p>
        <div className="mt-10 max-w-3xl">
          <FaqList items={homeFaqs} openFirst />
        </div>
        <DemoNotice className="mt-10 max-w-3xl" />
      </section>
    </>
  );
}
