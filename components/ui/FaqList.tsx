"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/products";

export function FaqList({ items, openFirst = false }: { items: FaqItem[]; openFirst?: boolean }) {
  const [open, setOpen] = useState<number | null>(openFirst ? 0 : null);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className={index > 0 ? "border-t border-border" : ""}>
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-[15px] font-medium hover:bg-secondary/60"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                {item.question}
                <ChevronDown className={`size-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </h3>
            {isOpen ? (
              <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
