"use client";

import { FormEvent } from "react";

export default function AccountPage() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Patient login</p>
        <h1 className="mt-3 text-3xl">Sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">Sign in to manage intake, orders, and messages.</p>
        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          <label className="grid gap-1 text-sm font-medium">
            Email
            <input type="email" required placeholder="you@example.com" className="rounded-lg border border-input px-3 py-2.5 font-normal" />
          </label>
          <label className="grid gap-1 text-sm font-medium">
            Password
            <input type="password" required className="rounded-lg border border-input px-3 py-2.5 font-normal" />
          </label>
          <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
