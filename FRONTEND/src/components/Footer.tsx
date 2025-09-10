// src/components/Footer.tsx
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";

const quickLinks = [
  { label: "Giới thiệu", href: "/about" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Đối tác", href: "/partners" },
  { label: "Liên hệ", href: "/contact" },
];

const services = [
  { label: "Thủ tục hải quan", href: "/services/customs" },
  { label: "Vận tải đường biển", href: "/services/sea" },
  { label: "Vận tải đường hàng không", href: "/services/air" },
  { label: "Vận tải đường bộ", href: "/services/domestic" },
  { label: "Hàng quá khổ, quá tải", href: "/services/oversized" },
  { label: "Đa phương thức", href: "/services/multimodal" },
  // { label: "XNK ủy thác", href: "/services/importexport" },
  { label: "Hàng dự án & triển lãm", href: "/services/project" },
];

const gold = "#FFC72C";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setShowToast(true);
    setEmail("");
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <footer className="relative bg-blue-900 text-white">
      {/* Dải viền vàng trên cùng */}
      <div className="h-1.5 w-full" style={{ backgroundColor: gold }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* 1) Logo + giới thiệu */}
          <div className="pr-2">
            <a
              href="/"
              aria-label="Về trang chủ"
              className="inline-flex items-center gap-3 group"
            >
              <img
                src="/assets/logo_swallow.jpg"
                alt="Swallow Logistics"
                className="h-14 w-auto rounded transition-transform duration-200 group-hover:scale-105 group-hover:brightness-110"
              />
              <span className="text-xl font-bold leading-tight">
                SWALLOW VIETNAM <br /> LOGISTICS., JSC
              </span>
            </a>

            <p className="mt-4 text-base leading-relaxed text-blue-50/90">
              Đối tác đáng tin cậy trong lĩnh vực logistics với hơn 10 năm
              kinh nghiệm. Tối ưu chuỗi cung ứng – giảm chi phí – nâng cao hiệu
              quả vận hành.
            </p>

            <p className="mt-3 text-base">
              Hotline: <strong className="text-white">024 3224 2339</strong>
            </p>

            <div className="mt-5">
              <h4 className="text-lg font-semibold uppercase tracking-wide border-l-4 pl-3"
                  style={{ borderColor: gold }}>
                Kết nối với chúng tôi
              </h4>
              <div className="mt-2">
                <a
                  href="https://www.facebook.com/swallowvietnamlogistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Swallow Logistics"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-full border transition
                             hover:shadow-lg"
                  style={{ borderColor: gold }}
                >
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* 2) Liên kết nhanh */}
          <div>
            <h4
              className="text-lg md:text-xl font-semibold uppercase tracking-wide mb-4 border-l-4 pl-3"
              style={{ borderColor: gold }}
            >
              Trang
            </h4>
            <ul className="space-y-3 text-base">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:underline hover:text-yellow-300 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3) Dịch vụ */}
          <div>
            <h4
              className="text-lg md:text-xl font-semibold uppercase tracking-wide mb-4 border-l-4 pl-3"
              style={{ borderColor: gold }}
            >
              Dịch vụ
            </h4>
            <ul className="space-y-3 text-base">
              {services.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:underline hover:text-yellow-300 transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4) Đăng ký email + Bản đồ */}
          <div>
            <h4
              className="text-lg md:text-xl font-semibold uppercase tracking-wide mb-4 border-l-4 pl-3"
              style={{ borderColor: gold }}
            >
              Đăng ký nhận tin
            </h4>

            <form
              onSubmit={handleSubmit}
              className="bg-white/5 rounded-xl p-3 border"
              style={{ borderColor: gold }}
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 rounded-lg bg-white text-gray-800 outline-none
                             focus:ring-2"
                  style={{ boxShadow: `0 0 0 1px ${gold} inset` }}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg font-semibold text-blue-900 bg-yellow-400
                             hover:bg-yellow-300 transition shadow"
                >
                  Đăng ký
                </button>
              </div>
              <p className="mt-2 text-xs text-blue-100">
                Bằng việc đăng ký, bạn đồng ý nhận thông tin ưu đãi & bản tin từ
                Swallow Logistics.
              </p>
            </form>

            <h4
              className="mt-6 text-lg md:text-xl font-semibold uppercase tracking-wide mb-2 border-l-4 pl-3"
              style={{ borderColor: gold }}
            >
              Địa chỉ
            </h4>
            <div
              className="w-full h-44 rounded-xl overflow-hidden border"
              style={{ borderColor: gold }}
            >
              <iframe
                title="Swallow Vietnam Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7474083269977!2d105.78747877591865!3d21.003593080637683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3f82b2cce1%3A0x5a55cfecc5acfc93!2s107%20Nguy%E1%BB%85n%20Phong%20S%E1%BA%AFc%2C%20D%C1%BA%A5u%20L%E1%BA%A1c%2C%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1691994133799!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <p className="text-sm mt-2 text-blue-100">
              2nd Floor, AZ Lam Vien Building, 107 Nguyen Phong Sac, Cau Giay,
              Hanoi, Vietnam
            </p>
          </div>
        </div>

        {/* Toast */}
        {showToast && (
          <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
            ✅ Cảm ơn bạn đã đăng ký!
          </div>
        )}

        {/* Logo dưới cùng (click về Home) */}
        <div className="flex justify-center mt-12">
          <a
            href="/"
            className="inline-block transition-transform hover:scale-105 hover:brightness-110"
            aria-label="Về trang chủ"
          >
            <img
              src="/assets/logo_swallow2.webp"
              alt="Swallow Vietnam Logo"
              className="h-16 w-auto"
            />
          </a>
        </div>
      </div>

      {/* Dải viền vàng + bản quyền dưới cùng */}
      <div className="h-px w-full opacity-60" style={{ backgroundColor: gold }} />
      <div className="text-center text-sm md:text-base text-blue-100 py-5">
        © {new Date().getFullYear()} Swallow Vietnam Logistics., JSC. All rights
        reserved.
      </div>
    </footer>
  );
}
