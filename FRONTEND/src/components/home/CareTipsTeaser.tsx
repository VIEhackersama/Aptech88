import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export type TipItem = { title: string; tag: string; href: string };

type Props = { tips: TipItem[] };

export default function CareTipsTeaser({ tips }: Props) {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Care Tips</h2>
            <p className="mt-2 text-slate-600">Quick reads for happy, healthy pets.</p>
          </div>
          <Link to="/care-tips" className="hidden sm:inline text-emerald-700 font-semibold hover:underline">
            Explore tips
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((a, i) => (
            <article key={i} className="rounded-2xl border border-slate-200 p-5 hover:shadow-lg transition">
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                {a.tag}
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Short description goes here. Replace with your article summary later.
              </p>
              <Link
                to={a.href}
                className="mt-3 inline-flex items-center gap-1 text-emerald-700 font-semibold hover:underline"
              >
                Read more <ChevronRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link to="/care-tips" className="text-emerald-700 font-semibold hover:underline">
            Explore tips
          </Link>
        </div>
      </div>
    </section>
  );
}
