// src/pages/services/Project.tsx
import React from "react";
import ServiceTemplate from "../../components/ServiceTemplate";

const Project = () => {
  return (
    <ServiceTemplate
      title="Dịch vụ Hàng Dự Án, Triển Lãm"
      image="/assets/home1.jpeg"
      content={
        <>
          <p>
            Swallow Logistics Vietnam chuyên cung cấp dịch vụ vận chuyển hàng dự án, triển lãm với quy trình tối ưu, đảm bảo tiến độ, an toàn và hiệu quả.
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>Khảo sát thực tế, tư vấn giải pháp vận chuyển phù hợp.</li>
            <li>Vận chuyển hàng từ cửa đến cửa (door-to-door).</li>
            <li>Xử lý thủ tục hải quan nhanh chóng.</li>
            <li>Đội ngũ giám sát chuyên nghiệp trong suốt quá trình vận chuyển.</li>
            <li>Bảo hiểm hàng hóa theo yêu cầu.</li>
          </ul>
          <p>
            Với sự am hiểu sâu sắc về yêu cầu đặc thù của từng loại hàng hóa triển lãm và dự án, Swallow Logistics tự tin mang đến giải pháp logistics toàn diện, giúp khách hàng yên tâm tuyệt đối.
          </p>
        </>
      }
    />
  );
};

export default Project;
