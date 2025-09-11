import React from "react";

export default function Newsletter() {
  return (
    <section className="mt-20 mb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-3xl bg-emerald-600 text-white p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Join our community updates</h3>
            <p className="mt-2 opacity-90">Get adoption stories, care tips, and volunteer events in your inbox.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-xl gap-3">
            <input
              type="email"
              className="w-full rounded-xl border-0 px-4 py-3 text-slate-900 placeholder:text-slate-400"
              placeholder="Your email"
              aria-label="Email address"
            />
            <button className="rounded-xl bg-white px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
