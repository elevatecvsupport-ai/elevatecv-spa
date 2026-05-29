import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }: { items: { q: string; a: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="glass overflow-hidden rounded-2xl border-0 px-5">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-white"
            >
              {it.q}
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && <div className="pb-4 text-sm text-white/70">{it.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
