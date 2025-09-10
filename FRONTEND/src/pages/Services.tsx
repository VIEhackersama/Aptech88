import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Dịch vụ hải quan",
    slug: "hai-quan",
    image: "/assets/home1.jpeg",
    desc: "Khai báo hải quan nhanh chóng, chính xác."
  },
  {
    title: "Vận chuyển đường biển",
    slug: "duong-bien",
    image: "/assets/home1.jpeg",
    desc: "Dịch vụ vận tải quốc tế bằng đường biển."
  },
  {
    title: "Vận chuyển hàng không",
    slug: "hang-khong",
    image: "/assets/home1.jpeg",
    desc: "Nhanh chóng, an toàn với hàng không."
  },
  {
    title: "Vận chuyển đa phương thức",
    slug: "da-phuong-thuc",
    image: "/assets/home1.jpeg",
    desc: "Tối ưu chi phí bằng hình thức kết hợp."
  },
  {
    title: "Hàng quá khổ, quá tải",
    slug: "qua-kho",
    image: "/assets/home1.jpeg",
    desc: "Giải pháp đặc biệt cho hàng hóa lớn."
  },
  {
    title: "Kho bãi",
    slug: "kho-bai",
    image: "/assets/home1.jpeg",
    desc: "Lưu trữ, bảo quản chuyên nghiệp."
  },
  {
    title: "Ủy thác xuất nhập khẩu",
    slug: "uy-thac",
    image: "/assets/home1.jpeg",
    desc: "Dịch vụ hỗ trợ xuất nhập khẩu toàn diện."
  },
  {
    title: "Hàng dự án, triển lãm",
    slug: "du-an",
    image: "/assets/home1.jpeg",
    desc: "Xử lý chuyên nghiệp cho hàng triển lãm."
  },
];

const Services = () => {
  return (
    <div className="pt-20 pb-10 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
          Dịch vụ của Swallow Logistics
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <Link to={`/services/${item.slug}`} key={index} className="group block border rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-blue-700 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;