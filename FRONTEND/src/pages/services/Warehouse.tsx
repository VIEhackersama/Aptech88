import React from "react";

const Warehouse = () => {
  return (
    <div className="pt-20 pb-10 px-4 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Dịch vụ Kho bãi
        </h1>
        <img
          src="/assets/home1.jpeg"
          alt="Kho bãi"
          className="w-full h-64 object-cover rounded-xl shadow mb-6"
        />
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p>
            Swallow Logistics Vietnam cung cấp hệ thống kho bãi hiện đại và dịch vụ lưu trữ, phân phối hàng hóa chuyên nghiệp, đáp ứng mọi nhu cầu logistics của khách hàng trong và ngoài nước.
          </p>
          <p>
            Dịch vụ bao gồm:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Cho thuê kho ngắn hạn, dài hạn theo yêu cầu.</li>
              <li>Lưu trữ và quản lý hàng hóa bằng phần mềm chuyên dụng.</li>
              <li>Soạn hàng, dán nhãn, đóng gói lại hàng hóa.</li>
              <li>Quản lý xuất nhập kho và vận chuyển kết nối nhanh chóng.</li>
              <li>Hệ thống an ninh 24/7 và điều kiện bảo quản phù hợp.</li>
            </ul>
          </p>
          <p>
            Với cơ sở hạ tầng đạt chuẩn và quy trình vận hành tối ưu, chúng tôi giúp khách hàng giảm thiểu chi phí tồn kho và nâng cao hiệu quả chuỗi cung ứng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
