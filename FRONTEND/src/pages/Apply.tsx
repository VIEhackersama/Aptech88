import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Apply = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <div className="pt-24 pb-10 px-4 md:px-16 bg-white min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto space-y-20">

        {/* CHÍNH SÁCH TUYỂN DỤNG */}
        <section id="policy">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-l-4 border-blue-600 pl-4">
            Chính sách tuyển dụng
          </h2>
          <div className="space-y-4 leading-relaxed">
            <p><strong>1. Nguyên tắc tuyển dụng:</strong> Công ty TNHH Swallow Logistics cam kết tuyển dụng công bằng, minh bạch, và không phân biệt đối xử.</p>
            <p><strong>2. Quy trình tuyển dụng:</strong> Ứng viên nộp hồ sơ qua Website hoặc email. Phòng Nhân sự sẽ sàng lọc hồ sơ, phỏng vấn sơ bộ và gửi lịch phỏng vấn chính thức.</p>
            <p><strong>3. Tiêu chí đánh giá:</strong> Đánh giá dựa trên năng lực chuyên môn, kinh nghiệm, kỹ năng giao tiếp và khả năng phù hợp với văn hóa doanh nghiệp.</p>
            <p><strong>4. Đãi ngộ:</strong> Lương thưởng cạnh tranh, đóng bảo hiểm đầy đủ, thưởng lễ Tết, sinh nhật, du lịch hàng năm.</p>
            <p><strong>5. Môi trường làm việc:</strong> Năng động, chuyên nghiệp, cơ hội thăng tiến rõ ràng.</p>
          </div>
        </section>

        {/* FORM ỨNG TUYỂN */}
        <section id="form">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 border-l-4 border-blue-600 pl-4">
            Gửi hồ sơ ứng tuyển
          </h2>
          <form className="space-y-5 bg-gray-50 p-6 rounded-xl shadow-md">
            <div>
              <label className="block mb-1 font-semibold">Họ và tên</label>
              <input type="text" className="w-full border px-4 py-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input type="email" className="w-full border px-4 py-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Số điện thoại</label>
              <input type="tel" className="w-full border px-4 py-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Vị trí ứng tuyển</label>
              <input type="text" className="w-full border px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Tải CV (PDF hoặc DOCX)</label>
              <input type="file" accept=".pdf,.doc,.docx" className="w-full" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Ghi chú thêm</label>
              <textarea rows={4} className="w-full border px-4 py-2 rounded" />
            </div>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Gửi hồ sơ
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Apply;
