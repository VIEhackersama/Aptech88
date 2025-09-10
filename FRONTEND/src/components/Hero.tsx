import React, { useEffect, useState } from "react";

const images = ["/assets/home1.jpeg", "/assets/home2.jpg", "/assets/home3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fade-in content mượt khi mount
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Chuyển slide mỗi 8 giây
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Layer tối + gradient dưới */}
      <div className="absolute inset-0 bg-black/45 z-30" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 z-30 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Content */}
      <div className="relative z-40 flex items-center justify-center h-full px-4">
        <div
          className={`max-w-3xl text-center bg-black/35 backdrop-blur-md border border-yellow-300 rounded-2xl p-6 md:p-10 shadow-[0_0_25px_rgba(255,199,44,0.6)] transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white tracking-wide uppercase drop-shadow">
            Swallow Vietnam Logistics., JSC 
          </h1>
          <p className="mt-4 text-base md:text-xl text-white/90">
            Mang cả thế giới đến ngôi nhà của bạn
          </p>

          <a
            href="#services"
            className="mt-6 inline-block bg-[#FFC72C] text-blue-900 font-extrabold uppercase tracking-wide py-3 px-6 rounded-lg shadow hover:brightness-105 transition border border-yellow-300"
          >
            Khám phá dịch vụ
          </a>
        </div>
      </div>
    </section>
  );
}
