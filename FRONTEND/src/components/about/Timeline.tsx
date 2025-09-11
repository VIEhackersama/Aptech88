import React from "react";

type Milestone = { date: string; title: string; desc: string };

const MILESTONES: Milestone[] = [
  { date: "2024", title: "Project started", desc: "Initial research and scope." },
  { date: "2025", title: "MVP", desc: "Core features and UI released." },
];

export default function Timeline() {
  return (
    <section id="history" className="scroll-mt-28 mt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">History</h2>
        <ol className="mt-6 relative border-l border-slate-200">
          {MILESTONES.map((m, i) => (
            <li key={i} className="ml-6 mb-8">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-emerald-600" />
              <time className="text-xs font-semibold text-emerald-700">{m.date}</time>
              <h3 className="text-base font-semibold text-slate-900">{m.title}</h3>
              <p className="text-sm text-slate-600">{m.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
