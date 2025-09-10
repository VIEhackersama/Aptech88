import React, { useState } from "react";
import { FaSearch, FaTruckMoving } from "react-icons/fa";

export default function SearchBar() {
  const [openBook, setOpenBook] = useState(false);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement & { keyword: { value: string } };
    const keyword = form.keyword.value.trim();
    if (!keyword) return;
    // TODO: điều hướng sang trang tracking thật sự nếu đã có
    // navigate(`/tracking?query=${encodeURIComponent(keyword)}`);
    alert(`Tìm kiếm tracking: ${keyword}`);
    form.reset();
  };

  return (
    <section className="bg-white/90 backdrop-blur border-b border-gray-200 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hàng nút & tracking */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
          {/* Nút bật form BOOK */}
          <button
            onClick={() => setOpenBook((s) => !s)}
            className={`group flex items-center justify-center gap-3 rounded-xl border-2 px-4 py-3 font-bold tracking-wide uppercase transition
            ${openBook
                ? "border-[#FFC72C] bg-[#FFF4CC] text-[#C48C00] shadow-md"
                : "border-[#FFC72C] bg-white text-gray-800 hover:bg-[#FFF4CC] hover:text-[#C48C00] hover:shadow-md"
              }`}
            aria-expanded={openBook}
            aria-controls="book-panel"
          >
            {React.createElement(FaTruckMoving, { size: 18 })}
            Đặt dịch vụ
          </button>

          {/* Tracking form */}
          <form
            onSubmit={onSearch}
            className="flex items-stretch rounded-xl border-2 border-[#FFC72C] bg-white shadow-sm overflow-hidden"
            role="search"
            aria-label="Tra cứu vận đơn"
          >
            <div className="hidden md:flex items-center px-3 border-r border-[#FFE28C]">
              {React.createElement(FaSearch, { size: 16 })}
            </div>
            <input
              name="keyword"
              type="text"
              placeholder="Nhập mã tracking / email của bạn…"
              className="w-full px-4 py-3 outline-none"
              aria-label="Mã tracking hoặc email"
            />
            <button
              type="submit"
              className="px-5 py-3 font-semibold uppercase bg-[#FFC72C] text-blue-900 hover:brightness-105 transition"
            >
              Tra cứu
            </button>
          </form>
        </div>

        {/* Panel BOOK (accordion) */}
        <div
          id="book-panel"
          className={`transition-all duration-300 ease-out overflow-hidden ${openBook ? "max-h-[900px] mt-4" : "max-h-0"
            }`}
        >
          <div className="rounded-2xl border-2 border-[#FFC72C] bg-gradient-to-br from-white to-blue-50 p-6 shadow-md">
            <h3 className="text-lg md:text-xl font-extrabold text-blue-900 uppercase mb-4">
              Gửi yêu cầu đặt dịch vụ
            </h3>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget as HTMLFormElement);
                alert(
                  `Đã gửi yêu cầu:
- Họ tên: ${fd.get("fullname")}
- Email: ${fd.get("email")}
- SĐT: ${fd.get("phone")}
- Dịch vụ: ${fd.get("service")}
- Ghi chú: ${fd.get("note")}`
                );
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              {/* Fullname */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Họ và tên
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-[#FFE28C] bg-white px-3">
                  <input
                    required
                    name="fullname"
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full py-2 outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-[#FFE28C] bg-white px-3">
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full py-2 outline-none"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Số điện thoại
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-[#FFE28C] bg-white px-3">
                  <input
                    required
                    name="phone"
                    type="tel"
                    pattern="[0-9]{8,15}"
                    title="Vui lòng nhập 8–15 chữ số"
                    placeholder="0123456789"
                    className="w-full py-2 outline-none"
                  />
                </div>
              </div>

              {/* Service */}
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Dịch vụ cần đặt
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-[#FFE28C] bg-white px-3">
                  <input
                    name="service"
                    type="text"
                    placeholder="VD: Vận chuyển đường biển / Hải quan…"
                    className="w-full py-2 outline-none"
                  />
                </div>
              </div>

              {/* Note */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Ghi chú
                </label>
                <textarea
                  name="note"
                  rows={3}
                  placeholder="Mô tả yêu cầu, tuyến đường, thời gian dự kiến…"
                  className="w-full rounded-lg border border-[#FFE28C] bg-white px-3 py-2 outline-none"
                />
              </div>

              {/* Submit */}
              <div className="col-span-1 md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FFC72C] px-6 py-2 font-semibold text-blue-900 uppercase shadow hover:brightness-105"
                >
                  {React.createElement(FaTruckMoving, { size: 16 })}
                  Gửi yêu cầu
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
