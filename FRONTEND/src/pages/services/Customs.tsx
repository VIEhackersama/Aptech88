import React from "react";

const Customs = () => {
  return (
    <div className="pt-20 pb-10 px-4 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Dịch vụ Thủ tục hải quan
        </h1>
        <img
          src="/assets/home1.jpeg"
          alt="Thủ tục hải quan"
          className="w-full h-64 object-cover rounded-xl shadow mb-6"
        />
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p>
            Swallow Logistics Vietnam cung cấp dịch vụ khai báo và xử lý thủ tục hải quan chuyên nghiệp, nhanh chóng, giúp khách hàng thông quan hàng hóa thuận tiện, giảm thiểu rủi ro và chi phí phát sinh.
          </p>
          <p>
            Dịch vụ bao gồm:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Tư vấn mã HS code, chính sách mặt hàng, thuế suất.</li>
              <li>Chuẩn bị và kiểm tra chứng từ xuất nhập khẩu.</li>
              <li>Khai báo hải quan điện tử.</li>
              <li>Đại diện làm việc với cơ quan hải quan, xử lý phát sinh.</li>
              <li>Giám sát quá trình thông quan và bàn giao hàng hóa.</li>
            </ul>
          </p>
          <p>
            Với đội ngũ nhân sự am hiểu luật hải quan và nhiều năm kinh nghiệm thực tế, chúng tôi cam kết mang đến dịch vụ minh bạch, đúng luật và hiệu quả tối ưu cho khách hàng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customs;
