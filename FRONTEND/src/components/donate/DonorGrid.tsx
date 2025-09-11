import React from "react";

type Donor = { name: string; logo: string; note?: string };

const DONORS: Donor[] = [
  { name: "Me-O Vietnam", logo: "/assets/donor1.png" },
  { name: "Smartheart Vietnam", logo: "/assets/donor2.png" },
  { name: "Better World Hanoi", logo: "/assets/donor3.png", note: "Charity events & NGOs" },
  { name: "IELTS Thầy Jim", logo: "/assets/donor4.png" },
];

export default function DonorGrid() {
  return (
    <section className="bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-slate-900">
          Regular Donors
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DONORS.map((d, i) => (
            <article
              key={i}
              className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="h-40 w-full rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src={d.logo} alt={d.name} className="max-h-36 object-contain" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{d.name}</h3>
              {d.note && <p className="text-sm text-slate-600 mt-1">{d.note}</p>}
              <div className="mt-4 h-[2px] w-12 bg-emerald-600 rounded-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
