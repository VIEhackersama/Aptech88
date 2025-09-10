// src/pages/services/Sea.tsx
import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";

const Sea = () => {
  return (
    <ServiceTemplate
      title="Dịch vụ Vận chuyển hàng hóa đường biển"
      image="/assets/home1.jpeg"
      content={
        <>
          <p>
            Swallow Logistics Vietnam cung cấp dịch vụ vận chuyển hàng hóa đường biển với mạng lưới đối tác vận tải quốc tế rộng khắp, đảm bảo hiệu quả và tối ưu chi phí cho khách hàng.
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>Giao nhận hàng hóa nguyên container (FCL) và lẻ (LCL).</li>
            <li>Đặt chỗ, lấy booking nhanh chóng và chính xác.</li>
            <li>Vận chuyển door-to-door, cảng-to-cảng linh hoạt.</li>
            <li>Xử lý chứng từ, thủ tục hải quan, kiểm hóa.</li>
            <li>Theo dõi và cập nhật lịch trình hàng hóa liên tục.</li>
          </ul>
          <p>
            Với kinh nghiệm và năng lực thực tế, chúng tôi tự hào là đối tác tin cậy cho mọi hoạt động logistics quốc tế của quý khách hàng.
          </p>
        </>
      }
    />
  );
};

export default Sea;
