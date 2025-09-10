import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

type Branch = {
  title: string;
  address: string;
  telHref: string;
  telText: string;
  email?: string;
  mapSrc: string;
};

const BRANCHES: Branch[] = [
  {
    title: "CHI NHÁNH HẢI PHÒNG",
    address: "Địa chỉ: (Cập nhật)",
    telHref: "tel:+842432242339",
    telText: "+84 243 224 2339",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59608.50862327515!2d106.6390013!3d20.8449112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135d2af3e5a2fd9%3A0x1a59c9a7cd2f9d58!2zSGFpIFBow7NuZywgVmlldG5hbQ!5e0!3m2!1svi!2s!4v1692011111111",
  },
  {
    title: "CHI NHÁNH TP. HỒ CHÍ MINH",
    address: "Địa chỉ: (Cập nhật)",
    telHref: "tel:+842432242339",
    telText: "+84 243 224 2339",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.501906774158!2d106.700423!3d10.772461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f41b2c9e7e7%3A0x5d77a9ac2c3a2a35!2zUXXhuqMgxJHDtG5nLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmggQ2l0eQ!5e0!3m2!1svi!2s!4v1692012222222",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: gửi API / email khi có backend
    setShowToast(true);
    setName("");
    setMail("");
    setPhone("");
    setMessage("");
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    // TĂNG KHOẢNG CÁCH ĐẦU TRANG (fix: md:pt-[40px] thay vì 40x)
    <div className=" bg-white min-h-screen">
      {/* Tiêu đề */}
      <div className="max-w-6xl mx-auto mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-wide">
          LIÊN HỆ SWALLOW VIETNAM LOGISTICS., JSC
        </h1>
        <p className="text-gray-600 mt-1">
          Hãy để lại thông tin – chúng tôi sẽ phản hồi trong giờ làm việc.
        </p>
      </div>

      {/* Khung form + trụ sở chính */}
      <section className="max-w-6xl mx-auto bg-gradient-to-r from-blue-800 to-blue-700 text-white rounded-2xl shadow-xl border border-yellow-300">
        <div className="grid md:grid-cols-2">
          {/* Form */}
          <div className="p-6 md:p-8 relative">
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: "0 0 0 2px #FFC72C inset" }}
            />
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              GỬI YÊU CẦU LIÊN HỆ
            </h2>
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-semibold">HỌ VÀ TÊN</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Nguyễn Văn A"
                  autoComplete="name"
                  className="w-full rounded-lg bg-white text-gray-800 px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-semibold">EMAIL</label>
                <input
                  type="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="w-full rounded-lg bg-white text-gray-800 px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-semibold">SỐ ĐIỆN THOẠI</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="[0-9+\s()-]{8,20}"
                  title="Nhập số điện thoại hợp lệ (8–20 ký tự, có thể gồm +, khoảng trắng, -, ())"
                  placeholder="(+84) 9xx xxx xxx"
                  autoComplete="tel"
                  className="w-full rounded-lg bg-white text-gray-800 px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-semibold">NỘI DUNG</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Mô tả nhu cầu / dịch vụ bạn quan tâm…"
                  className="w-full rounded-lg bg-white text-gray-800 px-4 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center bg-yellow-400 text-blue-900 font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition shadow"
              >
                GỬI LIÊN HỆ
              </button>
            </form>
          </div>

          {/* Trụ sở chính */}
          <div className="bg-blue-900/30 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none p-6 md:p-8 border-t md:border-t-0 md:border-l border-white/10">
            <h2 className="text-xl md:text-2xl font-bold mb-4">TRỤ SỞ CHÍNH</h2>
            <ul className="space-y-3 text-blue-50">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-yellow-300" />
                <div>
                  <div className="font-semibold">AZ Lam Viên Building – Tầng 2</div>
                  <div>107 Nguyễn Phong Sắc, Cầu Giấy Ward, Hà Nội, Việt Nam</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-300" />
                <a href="tel:+842432242339" className="hover:underline">
                  +84 243 224 2339
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-300" />
                <a href="mailto:info@swallowlogistics.vn" className="hover:underline">
                  info@swallowlogistics.vn
                </a>
              </li>
              <li className="text-blue-100">
                <span className="font-semibold">Giờ làm việc:</span> Thứ 2 – Thứ 6
                (08:30 – 17:30), Thứ 7 (08:30 – 12:00)
              </li>
            </ul>

            <div className="mt-5 rounded-lg overflow-hidden shadow border border-yellow-300">
              <iframe
                title="Swallow HQ Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7474083269977!2d105.78747877591865!3d21.003593080637683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3f82b2cce1%3A0x5a55cfecc5acfc93!2s107%20Nguy%E1%BB%85n%20Phong%20S%E1%BA%AFc%2C%20D%C1%BA%A5u%20L%E1%BA%A1c%2C%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vietnam!5e0!3m2!1svi!2s!4v1691994133799!5m2!1svi!2s"
                width="100%"
                height="260"
                loading="lazy"
                className="bg-white"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chi nhánh: Hải Phòng & HCM */}
      <section className="max-w-6xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
        {BRANCHES.map((b, i) => (
          <div
            key={i}
            className="rounded-2xl border border-yellow-300 bg-white shadow-md p-6"
          >
            <h3 className="text-lg md:text-xl font-extrabold text-blue-900 mb-3">
              {b.title}
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-700" />
                <span>{b.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-700" />
                <a href={b.telHref} className="text-blue-700 hover:underline">
                  {b.telText}
                </a>
              </li>
              {b.email && (
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-700" />
                  <a href={`mailto:${b.email}`} className="text-blue-700 hover:underline">
                    {b.email}
                  </a>
                </li>
              )}
            </ul>
            <div className="mt-4 rounded-lg overflow-hidden border border-yellow-200">
              <iframe
                title={b.title}
                src={b.mapSrc}
                width="100%"
                height="220"
                loading="lazy"
                style={{ border: 0 }}
                className="bg-blue-50"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </section>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          ✅ CẢM ƠN BẠN! CHÚNG TÔI ĐÃ NHẬN ĐƯỢC YÊU CẦU LIÊN HỆ.
        </div>
      )}
    </div>
  );
}
