import React from "react";

const Multimodal = () => {
  return (
    <div className="pt-20 pb-10 px-4 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Dịch vụ Vận chuyển đa phương thức
        </h1>
        <img
          src="/assets/home1.jpeg"
          alt="Vận chuyển đa phương thức"
          className="w-full h-64 object-cover rounded-xl shadow mb-6"
        />
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p>
            Swallow Logistics Vietnam cung cấp dịch vụ vận chuyển đa phương thức kết hợp linh hoạt giữa đường biển, đường hàng không, đường bộ và đường sắt nhằm tối ưu thời gian và chi phí cho khách hàng.
          </p>
          <p>
            Dịch vụ bao gồm:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Lên kế hoạch và lộ trình vận chuyển tích hợp nhiều phương thức.</li>
              <li>Kết nối các điểm giao nhận trong và ngoài nước.</li>
              <li>Quản lý vận hành xuyên suốt, đảm bảo lịch trình.</li>
              <li>Thủ tục hải quan, kho bãi, đóng gói chuyên nghiệp.</li>
              <li>Cập nhật trạng thái hàng hóa theo thời gian thực.</li>
            </ul>
          </p>
          <p>
            Với mạng lưới đối tác rộng khắp và đội ngũ điều phối chuyên nghiệp, chúng tôi cam kết mang đến giải pháp logistics toàn diện, linh hoạt và hiệu quả cao.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Multimodal;