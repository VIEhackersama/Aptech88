import React from "react";

const Oversized = () => {
  return (
    <div className="pt-20 pb-10 px-4 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Dịch vụ Vận chuyển hàng quá khổ, quá tải
        </h1>
        <img
          src="/assets/home1.jpeg"
          alt="Vận chuyển hàng quá khổ"
          className="w-full h-64 object-cover rounded-xl shadow mb-6"
        />
        <div className="text-gray-800 leading-relaxed space-y-4">
          <p>
            Swallow Logistics Vietnam chuyên cung cấp dịch vụ vận chuyển hàng quá khổ, quá tải với giải pháp vận tải chuyên biệt, đảm bảo an toàn tuyệt đối và tuân thủ quy định pháp luật.
          </p>
          <p>
            Dịch vụ bao gồm:
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>Khảo sát lộ trình, thiết kế phương án vận chuyển tối ưu.</li>
              <li>Cung cấp thiết bị chuyên dụng như mooc lùn, xe siêu trường, siêu trọng.</li>
              <li>Hỗ trợ xin cấp phép lưu hành cho phương tiện và hàng hóa.</li>
              <li>Bố trí xe dẫn đường, cảnh báo an toàn trong quá trình vận chuyển.</li>
              <li>Giám sát và cập nhật liên tục cho khách hàng.</li>
            </ul>
          </p>
          <p>
            Với kinh nghiệm dày dạn và đội ngũ chuyên gia giàu chuyên môn, chúng tôi cam kết thực hiện mọi yêu cầu vận chuyển hàng hóa quá khổ, quá tải một cách an toàn và hiệu quả.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Oversized;