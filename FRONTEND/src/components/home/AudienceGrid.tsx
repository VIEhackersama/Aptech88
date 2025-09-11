import React from "react";
import { PawPrint } from "lucide-react";

const ITEMS = [
  { title: "Pet Owners", desc: "Create profiles, track health, find nearby vets and shelters." },
  { title: "Veterinarians", desc: "Share care guidelines and maintain pet medical history." },
  { title: "Shelters", desc: "Publish adoption profiles and manage inquiries effectively." },
];

export default function AudienceGrid() {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Made for everyone</h2>
        <p className="mt-2 text-slate-600">Three roles — one ecosystem.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {ITEMS.map((c, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <PawPrint size={18} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
