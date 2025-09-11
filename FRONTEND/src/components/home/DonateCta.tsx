import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

type Props = { image: string };

export default function DonateCta({ image }: Props) {
  return (
    <section className="mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50">
          <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-emerald-200/60" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-800">Donate & transform lives</h2>
              <p className="mt-2 text-emerald-900/80">
                Your contribution helps shelters provide food, medicine, and safe homes for animals waiting for a family.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700"
                >
                  Donate now <Heart size={18} />
                </Link>
                <Link
                  to="/volunteer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 px-5 py-3 text-emerald-700 font-semibold hover:bg-white"
                >
                  Become a volunteer
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={image} alt="Shelter volunteers" className="h-56 w-full max-w-md object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
