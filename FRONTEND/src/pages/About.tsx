import React from "react";
import { Link } from "react-router-dom";

const gold = "#FFC72C";

export default function About() {
  return (
    <div className=" bg-white text-gray-800">
      {/* Banner ngắn */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="rounded-2xl overflow-hidden shadow-md border"
               style={{ borderColor: gold }}>
            <div
              className="h-40 md:h-56 w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(2,25,70,.55),rgba(2,25,70,.55)), url(/assets/home1.jpeg)",
              }}
            />
            <div className="px-6 md:px-10 py-6 bg-blue-900 text-white">
              <p className="uppercase tracking-widest text-yellow-300 text-xs md:text-sm">
                About Swallow Logistics
              </p>
              <h1 className="text-2xl md:text-4xl font-extrabold">
                Về Swallow Logistics
              </h1>
              <p className="mt-2 text-white/90">
                Nhà cung cấp giải pháp logistics trọn gói – an toàn – hiệu quả.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="sticky top-20 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ul className="flex flex-wrap gap-2 md:gap-3 py-3">
            {[
              { id: "history", label: "Lịch sử" },
              { id: "vision", label: "Tầm nhìn & Sứ mệnh" },
              { id: "business", label: "Lĩnh vực" },
              { id: "org", label: "Bộ máy" },
              { id: "culture", label: "Nhân sự & Văn hóa" },
              { id: "projects", label: "Hình ảnh & Dự án" },
            ].map((it) => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  className="inline-block text-sm md:text-base px-3 md:px-4 py-2 rounded-full border transition hover:shadow-sm"
                  style={{ borderColor: gold }}
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[1px] w-full" style={{ backgroundColor: gold }} />
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16 mt-10 leading-relaxed">
        {/* Lịch sử hình thành */}
        <section id="history" className="scroll-mt-28">
          <Header title="Lịch sử hình thành và phát triển" />
          <p className="text-[15.5px]">
            Công ty TNHH Swallow Logistics được thành lập năm 2012 với sứ mệnh
            cung cấp dịch vụ logistics chất lượng cao cho thị trường nội địa và
            quốc tế. Qua hơn một thập kỷ, chúng tôi xây dựng mạng lưới đối tác
            rộng khắp, năng lực vận hành vững mạnh và trở thành một trong những
            doanh nghiệp logistics uy tín tại Việt Nam.
          </p>
        </section>

        {/* Tầm nhìn & Sứ mệnh */}
        <section id="vision" className="scroll-mt-28">
          <Header title="Tầm nhìn & Sứ mệnh" />
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Tầm nhìn">
              Trở thành nhà cung cấp dịch vụ logistics hàng đầu tại Đông Nam Á,
              tiên phong đổi mới, cung cấp trải nghiệm minh bạch – đáng tin cậy
              – bền vững cho khách hàng.
            </Card>
            <Card title="Sứ mệnh">
              Cung cấp giải pháp logistics trọn gói, an toàn, đúng hạn và hiệu
              quả; đồng hành tối ưu chi phí – nâng cao năng lực chuỗi cung ứng
              cho doanh nghiệp.
            </Card>
          </div>
        </section>

        {/* Lĩnh vực kinh doanh */}
        <section id="business" className="scroll-mt-28">
          <Header title="Lĩnh vực kinh doanh" />
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 list-disc list-inside text-[15.5px]">
              <li>Vận tải quốc tế: đường biển, đường hàng không</li>
              <li>Vận chuyển nội địa: đường bộ, đường sắt</li>
              <li>Thủ tục hải quan, khai báo điện tử</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside text-[15.5px]">
              <li>Dịch vụ kho bãi, phân phối hàng hóa</li>
              <li>Xuất nhập khẩu ủy thác</li>
              <li>Logistics cho triển lãm, sự kiện & dự án đặc biệt</li>
            </ul>
          </div>
        </section>

        {/* Bộ máy tổ chức */}
        <section id="org" className="scroll-mt-28">
          <Header title="Bộ máy tổ chức" />
          <p className="text-[15.5px]">
            Swallow Logistics vận hành theo mô hình chuyên nghiệp với các phòng
            ban chức năng phối hợp chặt chẽ:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[
              "Phòng Điều hành",
              "Phòng Kinh doanh",
              "Phòng Dịch vụ Khách hàng",
              "Phòng Kế toán",
              "Phòng Nhân sự",
              "Ban Giám đốc & Cố vấn",
            ].map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </section>

        {/* Nhân sự & Văn hóa */}
        <section id="culture" className="scroll-mt-28">
          <Header title="Nhân sự & Văn hóa doanh nghiệp" />
          <p className="text-[15.5px]">
            Đội ngũ Swallow được đào tạo bài bản, tận tâm và linh hoạt. Văn hóa
            doanh nghiệp dựa trên 4 trụ cột:
            <strong> Chuyên nghiệp – Tận tâm – Đoàn kết – Hiệu quả</strong>.
          </p>
        </section>

        {/* Hình ảnh & Dự án */}
        <section id="projects" className="scroll-mt-28">
          <Header title="Hình ảnh & Dự án tiêu biểu" />
          <p className="text-[15.5px]">
            Chúng tôi đã thực hiện nhiều dự án triển lãm, siêu trường siêu
            trọng và sự kiện quy mô lớn:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2 text-[15.5px]">
            <li>Vận chuyển thiết bị công nghiệp cho triển lãm Expo tại Hà Nội</li>
            <li>Logistics trọn gói cho sự kiện thể thao quốc tế tại TP. HCM</li>
            <li>Dự án hàng siêu trọng từ Cảng Hải Phòng đến KCN Dung Quất</li>
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition"
                style={{ borderColor: gold }}
              >
                <img
                  src="/assets/home1.jpeg"
                  alt={`Hình ảnh ${i + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl shadow-md bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 md:px-10 py-10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Bạn cần được tư vấn thêm?
            </h3>
            <p className="mt-3 text-white/90">
              Liên hệ ngay với đội ngũ chuyên gia của Swallow Logistics để được
              hỗ trợ nhanh chóng và tận tâm.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-6 px-6 py-3 rounded-lg font-semibold bg-white text-blue-700 hover:bg-gray-100 shadow transition"
            >
              LIÊN HỆ VỚI CHÚNG TÔI
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

/* ------------ Sub components ------------- */

function Header({ title }: { title: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <span
          className="inline-block h-7 w-1.5 rounded"
          style={{ backgroundColor: gold }}
        />
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900">
          {title}
        </h2>
      </div>
      <div
        className="mt-2 h-[1px] w-full"
        style={{ backgroundColor: gold, opacity: 0.7 }}
      />
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-5 md:p-6 bg-white border shadow-sm hover:shadow-md transition"
      style={{ borderColor: gold }}
    >
      <h4 className="text-xl font-bold text-blue-800 mb-2">{title}</h4>
      <p className="text-[15.5px]">{children}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block px-3 py-2 rounded-full text-sm bg-blue-50 border"
      style={{ borderColor: gold }}
    >
      {children}
    </span>
  );
}
