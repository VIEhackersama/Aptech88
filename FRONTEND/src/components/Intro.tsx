export default function Intro() {
  return (
    <section className="bg-white py-24 px-6" id="company">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Nội dung chữ (7 cột) */}
        <div className="md:col-span-7 text-gray-800">
          <p className="text-blue-600 font-semibold text-sm uppercase mb-2 tracking-widest">
            10+ năm kinh nghiệm
          </p>
          <h2 className="text-4xl font-bold mb-4 leading-tight text-blue-800">
            Logistics Swallow Việt Nam
          </h2>
          <div className="w-28 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 rounded-full" />
          <p className="text-lg leading-relaxed mb-4">
            <strong>Swallow Logistics Vietnam</strong> đã hơn 10 năm cung cấp dịch vụ logistics, tư vấn hải quan, quản lý chuỗi cung ứng và vận tải trong nước & quốc tế.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Với đội ngũ nhân sự giỏi và hệ thống kho vận trải dài tại các cảng, khu công nghiệp, cửa khẩu..., chúng tôi cam kết tối ưu hiệu quả logistics cho khách hàng.
          </p>
          <p className="text-lg leading-relaxed">
            <em className="text-blue-700 font-semibold">
              “Mang cả thế giới đến ngôi nhà của bạn”
            </em>{" "}
            không chỉ là slogan – mà là cam kết về chất lượng dịch vụ toàn diện.
          </p>
        </div>

        {/* Hình ảnh (5 cột) */}
        <div className="md:col-span-5">
          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl border border-gray-100">
            <img
              src="/assets/worldwide_log.webp"
              alt="Swallow Logistics"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Hiệu ứng overlay gradient nhẹ */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/0 to-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
