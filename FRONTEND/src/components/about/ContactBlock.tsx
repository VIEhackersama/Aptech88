import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactBlock() {
  return (
    <section id="contact" className="scroll-mt-28 mt-16 mb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Contact</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6">
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2"><Mail className="text-emerald-600" size={18}/> hello@furshield.app</li>
              <li className="flex items-start gap-2"><Phone className="text-emerald-600" size={18}/> (+84) 39 320 1068</li>
              <li className="flex items-start gap-2"><MapPin className="text-emerald-600" size={18}/> 123 Pet Street, Ha Noi, Viet Nam</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 h-56 bg-slate-50" />
        </div>
      </div>
    </section>
  );
}
