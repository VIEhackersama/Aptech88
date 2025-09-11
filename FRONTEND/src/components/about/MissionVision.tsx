import React from "react";

export default function MissionVision() {
  return (
    <section id="vision" className="scroll-mt-28 mt-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Vision & Mission</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
            <p className="mt-2 text-sm text-slate-600">
              A humane ecosystem where every pet is cared for and every adoption is informed and responsible.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
            <p className="mt-2 text-sm text-slate-600">
              Connect owners, vets, and shelters; offer resources, care tips, and clear adoption flows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
