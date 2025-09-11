import React from "react";

type QA = { q: string; a: string };
type Props = { items: QA[] };

export default function Faq({ items }: Props) {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Frequently asked questions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((f, i) => (
            <details key={i} className="rounded-2xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
