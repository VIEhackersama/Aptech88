// src/components/about/TeamPortal.tsx
import React from "react";

export default function TeamPortal() {
  return (
    <section id="org" className="scroll-mt-28 mt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Team & Portal</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Briefly introduce the team and provide a portal entry (links to docs/contact). Replace with your real content.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6">
              <div className="h-24 w-24 rounded-full bg-slate-100" />
              <h3 className="mt-4 text-base font-semibold text-slate-900">Member {i}</h3>
              <p className="text-sm text-slate-600">Role / short bio.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
