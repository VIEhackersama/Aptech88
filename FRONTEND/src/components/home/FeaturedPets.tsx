import React from "react";
import { PawPrint, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export type PetCard = { id: string; name: string; age: string; sex: string; badge?: string; img: string };

type Props = { title?: string; subtitle?: string; items: PetCard[] };

export default function FeaturedPets({
  title = "Featured Pets",
  subtitle = "Ready for adoption — update these cards once your data is live.",
  items,
}: Props) {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">{title}</h2>
            <p className="mt-2 text-slate-600">{subtitle}</p>
          </div>
          <Link to="/adopt" className="hidden sm:inline text-emerald-700 font-semibold hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.id} className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition">
              <img src={p.img} alt={p.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {p.age} • {p.sex} {p.badge ? `• ${p.badge}` : ""}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-emerald-700 text-sm font-semibold">
                    <PawPrint size={16} /> Friendly
                  </span>
                  <Link
                    to="/adopt"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:underline"
                  >
                    Details <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link to="/adopt" className="text-emerald-700 font-semibold hover:underline">
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
