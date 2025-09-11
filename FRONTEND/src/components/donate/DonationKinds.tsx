import React from "react";
import { Baby, Shirt, UtensilsCrossed, Syringe, Bone } from "lucide-react";

const ITEMS = [
  { icon: Baby, label: "Diapers" },
  { icon: Shirt, label: "Clothes" },
  { icon: UtensilsCrossed, label: "Food" },
  { icon: Syringe, label: "Medicine" },
  { icon: Bone, label: "Toys & Others" },
];

export default function DonationKinds() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Other Kinds of Donation</h2>
        <p className="mt-2 text-slate-600">Supplies are always appreciated ♥</p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border-2 border-emerald-200 p-6 hover:shadow-md transition flex flex-col items-center"
              >
                <div className="h-16 w-16 rounded-full border-2 border-emerald-500/60 flex items-center justify-center">
                  <Icon size={28} className="text-emerald-700" />
                </div>
                <p className="mt-3 font-semibold text-slate-800">{it.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
