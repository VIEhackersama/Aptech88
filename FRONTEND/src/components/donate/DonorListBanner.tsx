import React from "react";
import { Link } from "react-router-dom";

export default function DonorListBanner() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50">
          <div className="absolute inset-x-0 top-0 h-16 bg-[url('/assets/paws.svg')] bg-center opacity-20" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">List Of Donors</h3>
              <p className="mt-2 text-slate-700">
                We keep an updated list of generous donors. Thank you for supporting our mission.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                to="/donors"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700"
              >
                View List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
