import React from "react";
import { Mail, Phone, MapPin, Landmark, CreditCard } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900">Contact Info</h2>
      <ul className="mt-4 space-y-4 text-slate-700">
        <li className="flex items-center gap-3">
          <Mail className="text-emerald-600" size={20} />
          <a href="mailto:hello@furshield.app" className="hover:underline">hello@furshield.app</a>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="text-emerald-600" size={20} />
          <a href="tel:+84393201068" className="hover:underline">(+84) 39 320 1068</a>
        </li>
        <li className="flex items-center gap-3">
          <MapPin className="text-emerald-600" size={20} /> Ha Noi — Viet Nam
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">Donation Bank Accounts</h2>
      <p className="mt-2 text-slate-600 text-sm">
        Donations support vet bills and shelter operation, except Online Adoption.
      </p>

      <div className="mt-4 space-y-4">
        <div className="flex items-start gap-3">
          <Landmark className="text-emerald-600 mt-1" size={20} />
          <div>
            <p className="font-semibold">MB Bank</p>
            <p className="text-sm">0417 — Hanoi Pet Adoption</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <CreditCard className="text-emerald-600 mt-1" size={20} />
          <div>
            <p className="font-semibold">Paypal</p>
            <p className="text-sm">HanoiPetAdoptionOrg@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
