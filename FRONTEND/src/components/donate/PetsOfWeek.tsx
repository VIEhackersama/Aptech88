import React from "react";

type Pet = { name: string; gender: "Male" | "Female"; img: string };

const PETS: Pet[] = [
  { name: "Kimi", gender: "Female", img: "/assets/home1.jpeg" },
  { name: "Momo", gender: "Male", img: "/assets/home1.jpeg" },
  { name: "Sóc", gender: "Male", img: "/assets/home1.jpeg" },
  { name: "Ruby", gender: "Female", img: "/assets/home1.jpeg" },
];

export default function PetsOfWeek() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-slate-900">
          Pets of the Week
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PETS.map((p, i) => (
            <article key={i} className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="text-sm text-slate-600">Gender: {p.gender}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
