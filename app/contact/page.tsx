"use client";

import { FormEvent, useState } from "react";
import { Breadcrumbs, DemoNotice } from "@/components/ui/DemoNotice";
import { contact, site } from "@/data/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
      <section className="container-page max-w-xl pt-8 pb-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Company</p>
        <h1 className="mt-3 text-4xl">Contact</h1>
        <p className="mt-4 text-muted-foreground">
          {site.legalName} d/b/a {site.dba}
          <br />
          {contact.address}
          <br />
          <a href={`mailto:${contact.email}`} className="font-semibold text-gold">
            {contact.email}
          </a>
          <br />
          {contact.phoneDisplay}
        </p>
        {sent ? (
          <p className="mt-8 rounded-2xl border border-border bg-card p-6 text-sm">
            Message received. Our team will follow up at the email you provided.
          </p>
        ) : (
          <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1 text-sm font-medium">
                First name
                <input required className="rounded-lg border border-input px-3 py-2.5 font-normal" />
              </label>
              <label className="grid gap-1 text-sm font-medium">
                Last name
                <input required className="rounded-lg border border-input px-3 py-2.5 font-normal" />
              </label>
            </div>
            <label className="grid gap-1 text-sm font-medium">
              Email
              <input type="email" required className="rounded-lg border border-input px-3 py-2.5 font-normal" />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Message
              <textarea required className="min-h-32 rounded-lg border border-input px-3 py-2.5 font-normal" />
            </label>
            <button type="submit" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">
              Send message
            </button>
          </form>
        )}
        <DemoNotice className="mt-8" />
      </section>
    </>
  );
}
