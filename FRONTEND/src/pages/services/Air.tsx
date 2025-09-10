import React from "react";

const Air = () => {
  return (
    <div className="pt-20 pb-10 px-4 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Dịch vụ Vận chuyển hàng hóa đường hàng không
        </h1>
        <img
          src="/assets/home1.jpeg"
          alt="Vận chuyển đường hàng không"
          className="w-full h-64 object-cover rounded-xl shadow mb-6"
        />
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p>
            Swallow Logistics Vietnam cung cấp dịch vụ vận chuyển hàng hóa bằng đường hàng không nhanh chóng và an toàn, đáp ứng mọi nhu cầu về thời gian và đặc thù hàng hóa.
          </p>
          <p>
            Dịch vụ bao gồm:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Vận chuyển hàng hóa từ sân bay đến sân bay hoặc tận nơi.</li>
              <li>Đặt chỗ nhanh với các hãng hàng không uy tín.</li>
              <li>Xử lý chứng từ, thủ tục hải quan đầy đủ.</li>
              <li>Vận chuyển hàng nguy hiểm, dễ vỡ, tươi sống.</li>
              <li>Theo dõi lịch trình và hỗ trợ 24/7.</li>
            </ul>
          </p>
          <p>
            Với sự linh hoạt và chuyên nghiệp, chúng tôi đảm bảo hàng hóa đến đúng nơi, đúng thời gian với chi phí tối ưu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Air;