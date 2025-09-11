import React from "react";

type Product = { name: string; note?: string; img: string };
type Props = { products: Product[] };

export default function ProductsShowcase({ products }: Props) {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Popular Products</h2>
        <p className="mt-2 text-slate-600">Display only (no checkout yet).</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition">
              <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                {p.note && <p className="mt-1 text-sm text-slate-600">{p.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
