import React from "react";

export default function ContactHero() {
  return (
    <section className="relative h-56 md:h-64 bg-[url('/assets/home1.jpeg')] bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">Contact</h1>
        <p className="mt-2 text-white/90">Home / Contact</p>
      </div>
    </section>
  );
}
