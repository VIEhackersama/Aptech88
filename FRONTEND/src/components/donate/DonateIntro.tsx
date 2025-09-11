import React from "react";
import { AlertTriangle, Landmark, CreditCard } from "lucide-react";

export default function DonateIntro() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-extrabold text-slate-900">I Want To Donate</h2>
          <div className="mt-3 h-1 w-24 bg-emerald-600 rounded-full" />
          <p className="mt-6 text-slate-700 leading-relaxed">
            The work of our project is funded entirely by public donations. Monthly spending includes rent,
            electricity, water, food, sanitary items, vet bills, and volunteer support. Your gift—whatever the
            amount—helps save animals from suffering and gives them the care they deserve.
          </p>
          <p className="mt-4 text-slate-700">
            You can donate one-time or become a monthly hero. We also accept in-kind donations: used blankets,
            pet diapers, medical gloves, food, litter, etc.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <AlertTriangle className="text-amber-600 mt-0.5" size={20} />
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> Please do not share your bank details or OTP with anyone. If you receive
              a suspicious request, contact us to verify.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <Landmark className="text-emerald-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-slate-900">MB Bank</p>
                <p className="text-sm text-slate-600">0417 — Hanoi Pet Adoption</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="text-emerald-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-slate-900">Paypal</p>
                <p className="text-sm text-slate-600">HanoiPetAdoptionOrg@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: QR / image */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <img
              src="/assets/donate-qr.png"
              alt="Donate QR"
              className="w-full h-[320px] object-contain"
            />
            <p className="mt-3 text-center text-sm text-slate-500">
              Scan to donate quickly via your banking app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
