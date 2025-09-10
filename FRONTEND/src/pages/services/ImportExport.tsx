import React from "react";

const ImportExport = () => {
  return (
    <div className="pt-20 pb-10 px-4 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Dịch vụ Xuất nhập khẩu ủy thác
        </h1>
        <img
          src="/assets/home1.jpeg"
          alt="Xuất nhập khẩu ủy thác"
          className="w-full h-64 object-cover rounded-xl shadow mb-6"
        />
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p>
            Swallow Logistics Vietnam cung cấp dịch vụ xuất nhập khẩu ủy thác chuyên nghiệp, hỗ trợ khách hàng thực hiện toàn bộ quy trình từ mua bán quốc tế đến thủ tục hải quan, logistics và thanh toán quốc tế.
          </p>
          <p>
            Dịch vụ bao gồm:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Ký kết hợp đồng ủy thác và tư vấn pháp lý.</li>
              <li>Thay mặt khách hàng thực hiện giao dịch với đối tác nước ngoài.</li>
              <li>Thanh toán quốc tế và bảo lãnh thanh toán.</li>
              <li>Làm thủ tục hải quan, vận chuyển, kiểm định hàng hóa.</li>
              <li>Bàn giao hàng hóa đúng hẹn, đầy đủ chứng từ.</li>
            </ul>
          </p>
          <p>
            Với năng lực tài chính vững vàng và uy tín trong ngành logistics, Swallow Logistics là đối tác tin cậy giúp khách hàng mở rộng hoạt động thương mại quốc tế một cách an toàn và hiệu quả.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportExport;