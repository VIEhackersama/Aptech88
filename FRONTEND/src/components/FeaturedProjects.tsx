// src/components/FeaturedProjects.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FEATURED_PROJECTS } from "../data/projects";

const gold = "#FFC72C";

// Đường dẫn ảnh mặc định
const BASE: string =
  (import.meta as any)?.env?.BASE_URL && (import.meta as any).env.BASE_URL !== undefined
    ? (import.meta as any).env.BASE_URL
    : "/";
const FALLBACK = `${BASE}assets/home1.jpeg`;

function normalizeImagePath(input?: string): string {
  if (!input || input.trim() === "") return FALLBACK;
  const s = input.trim();
  if (/^https?:\/\//i.test(s)) return s; // URL tuyệt đối
  if (s.startsWith("/")) return s;       // đã absolute
  return `${BASE}assets/${s}`;           // file trong public/assets
}

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-wide uppercase">
              Dự án tiêu biểu
            </h2>
          </div>

          {/* Grid cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FEATURED_PROJECTS.map((p) => {
              const src = normalizeImagePath(p.image);

              return (
                <article
                  key={p.id}
                  className="group bg-white rounded-2xl border-2 overflow-hidden shadow-sm hover:shadow-lg transition"
                  style={{ borderColor: gold }}
                >
                  {/* Ảnh */}
                  <div className="h-44 w-full overflow-hidden bg-blue-50">
                    <img
                      src={src}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        if (!img.src.endsWith(FALLBACK)) img.src = FALLBACK;
                      }}
                    />
                  </div>

                  {/* Nội dung */}
                  <div className="p-5">
                    <h3 className="text-blue-900 font-extrabold text-lg md:text-xl leading-snug line-clamp-2">
                      {p.title}
                    </h3>

                    {(p.date || p.location) && (
                      <p className="mt-1 text-xs text-gray-500">
                        {p.location ? `${p.location}` : ""}
                        {p.location && p.date ? " · " : ""}
                        {p.date ? new Date(p.date).toLocaleDateString("vi-VN") : ""}
                      </p>
                    )}

                    <p className="text-sm text-gray-700 mt-3 line-clamp-3">
                      {p.summary}
                    </p>

                    {/* Hai nút */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedProject(p)}
                          className="inline-block rounded-lg border-2 font-semibold px-4 py-2 hover:bg-[#FFC72C] hover:text-blue-900 transition"
                          style={{ borderColor: gold, color: "#0F2D57" }}
                        >
                          Xem thêm
                        </button>

                        <Link
                          to="/contact"
                          className="inline-block rounded-lg border-2 font-semibold px-4 py-2 hover:bg-[#FFC72C] hover:text-blue-900 transition"
                          style={{ borderColor: gold, color: "#0F2D57" }}
                        >
                          Liên hệ tư vấn
                        </Link>
                      </div>

                      <span
                        className="text-[11px] px-2 py-1 rounded border"
                        style={{ borderColor: gold, color: "#0F2D57" }}
                      >
                        PROJECT
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal xem thêm */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{selectedProject.title}</h2>
            <img
              src={normalizeImagePath(selectedProject.image)}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded mb-4"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (!img.src.endsWith(FALLBACK)) img.src = FALLBACK;
              }}
            />
            <p className="text-gray-700 leading-relaxed">
              {selectedProject.summary || "Nội dung chi tiết sẽ được cập nhật sau."}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
