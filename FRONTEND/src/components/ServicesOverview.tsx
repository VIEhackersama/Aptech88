// src/components/ServicesOverview.tsx
import React from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";

const gold = "#FFC72C";

/** Chuẩn hoá đường dẫn ảnh để luôn load được trong mọi môi trường (dev/prod, có BASE_URL) */
const BASE: string =
  (import.meta as any)?.env?.BASE_URL && (import.meta as any).env.BASE_URL !== undefined
    ? (import.meta as any).env.BASE_URL
    : "/";

/** Trả về URL hợp lệ cho ảnh:
 * - Nếu truyền URL tuyệt đối (http/https) → giữ nguyên
 * - Nếu bắt đầu bằng "/" → giữ nguyên (vì đang trỏ public gốc)
 * - Nếu chỉ là tên file hoặc path tương đối → ghép với `${BASE}assets/...`
 */
function normalizeImagePath(input?: string, fallbackFile: string = "home1.jpeg"): string {
  if (!input || input.trim() === "") return `${BASE}assets/${fallbackFile}`;
  const s = input.trim();
  if (/^https?:\/\//i.test(s)) return s;
  if (s.startsWith("/")) return s; // ví dụ: /assets/services/sea.jpg (public)
  // path tương đối (ví dụ: services/sea.jpg hoặc sea.jpg) → quy về /assets/...
  return `${BASE}assets/${s.replace(/^assets\//, "")}`;
}

export default function ServicesOverview() {
  return (
    <section id="services" className="pt-28 md:pt-32 pb-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 uppercase tracking-wide">
            Dịch vụ của chúng tôi
          </h2>
          <p className="mt-2 text-gray-600">
            Giải pháp logistics tổng thể – tối ưu chi phí & thời gian
          </p>
        </div>

        {/* Lưới thẻ dịch vụ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon as React.ComponentType<any>;
            const imgSrc = normalizeImagePath(service.image, "home1.jpeg"); // fallback: /assets/home1.jpeg

            return (
              <Link
                key={service.id}
                to={service.path}
                className="group relative block rounded-2xl border-2 bg-white overflow-hidden p-5
                           shadow-sm hover:shadow-lg transition duration-300"
                style={{ borderColor: gold }}
              >
                {/* Ảnh cover */}
                <div
                  className="h-40 w-full rounded-xl overflow-hidden mb-4 border"
                  style={{ borderColor: gold }}
                >
                  <img
                    src={imgSrc}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      const fallback = `${BASE}assets/home1.jpeg`;
                      if (img.src !== fallback) img.src = fallback; // fallback chắc chắn tồn tại trong /public/assets
                    }}
                  />
                </div>

                {/* Icon + tiêu đề */}
                <div className="flex items-center gap-3">
                  <div
                    className="rounded-full p-3 bg-blue-50 border transition
                               group-hover:shadow-[0_0_18px_rgba(255,199,44,0.35)]"
                    style={{ borderColor: gold }}
                  >
                    {Icon && React.createElement(Icon, { className: "w-6 h-6 text-blue-700" })}
                  </div>
                  <h3 className="text-blue-900 font-extrabold text-lg md:text-xl tracking-wide service-card-title">
                    {service.title}
                  </h3>
                </div>

                {/* Mô tả */}
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {service.desc}
                </p>

                {/* Nút CTA nhỏ */}
                <div className="mt-4">
                  <span
                    className="inline-block rounded-lg border-2 font-semibold px-4 py-2
                               hover:bg-[#FFC72C] hover:text-blue-900 transition"
                    style={{ borderColor: gold, color: "#0F2D57" }}
                  >
                    Xem chi tiết
                  </span>
                </div>

                {/* Hiệu ứng glow viền vàng khi hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{ boxShadow: "0 0 0 2px #FFC72C inset" }}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA Liên hệ */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 font-bold
                       border-2 shadow hover:brightness-105 transition"
            style={{ borderColor: gold }}
          >
            Cần tư vấn thêm? Liên hệ ngay
          </Link>
        </div>
      </div>
    </section>
  );
}
