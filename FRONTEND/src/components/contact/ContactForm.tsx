import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    // TODO: call API here
    try {
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
      setSent(true);
      setForm({ name: "", email: "", title: "", message: "" });
    } catch {
      setErr("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900">Have A Feedback?</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name" value={form.name} onChange={handleChange} required placeholder="Full name *"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
          <input
            type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email *"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>
        <input
          name="title" value={form.title} onChange={handleChange} required placeholder="Title *"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        />
        <textarea
          name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Your feedback *"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
        />
        {err && <p className="text-sm text-red-600">{err}</p>}
        {sent && <p className="text-sm text-emerald-700">Thank you! Your feedback has been sent.</p>}
        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700 transition"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
