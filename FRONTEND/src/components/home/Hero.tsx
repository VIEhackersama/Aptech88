import React from "react";
import { PawPrint, Shield, MapPin, Clock, ChevronRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";

type Props = { image: string };

export default function Hero({ image }: Props) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-semibold">
            <PawPrint size={14} /> Animal Care Platform
          </span>
          <h1 className="mt-4 text-4xl/tight md:text-5xl/tight font-extrabold text-slate-900">
            Every paw deserves a <span className="text-emerald-600">shield</span> of love
          </h1>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            We connect pet owners, veterinarians, and shelters to make adoption and daily care easier.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <li className="flex items-center gap-2"><Shield className="text-emerald-600" size={18}/>Verified info</li>
            <li className="flex items-center gap-2"><MapPin className="text-emerald-600" size={18}/>Nearby shelters</li>
            <li className="flex items-center gap-2"><Clock className="text-emerald-600" size={18}/>Quick & simple</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/adopt" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">
              Explore Adoptions <ChevronRight size={18}/>
            </Link>
            <Link to="/care-tips" className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 px-5 py-3 text-emerald-700 font-semibold hover:bg-emerald-50">
              Care Tips
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src={image} alt="Happy adopted pets" className="w-full h-[320px] md:h-[420px] object-cover rounded-3xl shadow-xl"/>
          <div className="hidden md:flex absolute -bottom-6 left-6 right-6 md:right-auto">
            <div className="rounded-2xl backdrop-blur bg-white/70 border border-slate-200 p-4 shadow-lg">
              <div className="flex items-center gap-3 text-slate-700">
                <Heart className="text-emerald-600"/>
                <div>
                  <p className="text-sm">Community impact</p>
                  <p className="text-base font-semibold">2,300+ adoptions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
