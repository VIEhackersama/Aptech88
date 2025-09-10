// src/pages/Home.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import CompanyIntro from "../components/Intro";
import PartnersSection from "../components/PartnersSection";
import ServicesOverview from "../components/ServicesOverview";
import FeaturedProjects from "../components/FeaturedProjects";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-white font-sans">
      {/* Hero sát Header */}
      <Hero />
      <SearchBar />

      {/* GIỚI THIỆU CÔNG TY */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-wide mb-8 uppercase">
            {t("HOME.INTRO_TITLE")}
          </h2>
          <div className="rounded-xl border border-yellow-400 shadow-[0_10px_30px_rgba(255,199,44,0.15)] p-4 md:p-6">
            <CompanyIntro />
          </div>
        </div>
      </section>

      {/* DỊCH VỤ NỔI BẬT */}
      <section className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-wide uppercase">
              {t("HOME.SERVICES_TITLE")}
            </h2>
            <Link
              to="/services"
              className="text-sm md:text-base font-semibold text-blue-800 hover:text-[#FFC72C] transition underline underline-offset-4"
            >
              {t("HOME.VIEW_ALL")}
            </Link>
          </div>

          <div className="rounded-xl border border-yellow-400 shadow-[0_10px_30px_rgba(255,199,44,0.15)] p-3 md:p-4">
            {/* Gợi ý: trong ServicesOverview, đặt class 'service-card-title' cho tiêu đề card để tăng styling từ đây */}
            <div
              id="services"
              className="[&_.service-card-title]:uppercase [&_.service-card-title]:text-lg [&_.service-card-title]:md:text-xl [&_.service-card-title]:font-extrabold [&_.service-card-title]:tracking-wide"
            >
              <ServicesOverview />
            </div>
          </div>
        </div>
      </section>

      {/* DỰ ÁN TIÊU BIỂU */}
      <FeaturedProjects />

      {/* CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-2xl border border-yellow-400 shadow-[0_10px_30px_rgba(255,199,44,0.18)] p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
              {t("HOME.CTA_TITLE")}
            </h2>
            <p className="mt-3 text-lg md:text-xl text-white/90">
              {t("HOME.CTA_SUB")}
            </p>
            <Link
              to="/contact"
              className="inline-block mt-7 px-8 py-3 bg-white text-blue-700 font-extrabold rounded shadow hover:bg-gray-100 transition uppercase tracking-wide border border-yellow-300"
            >
              {t("HOME.CTA_BTN")}
            </Link>
          </div>
        </div>
      </section>

      {/* ĐỐI TÁC & LIÊN KẾT HỮU ÍCH */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Đối tác */}
          <div className="md:col-span-2">
            <div className="rounded-xl border border-yellow-400 shadow-[0_10px_30px_rgba(255,199,44,0.15)] p-5">
              <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-wide mb-6 uppercase">
                {t("PARTNERS")}
              </h3>
              <div className="bg-white rounded-lg border border-yellow-200">
                <PartnersSection />
              </div>
            </div>
          </div>

          {/* Bạn cần biết */}
          <aside className="bg-blue-50 rounded-xl p-6 border border-yellow-400 shadow-[0_10px_30px_rgba(255,199,44,0.15)]">
            <h3 className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-wide mb-4 uppercase">
              {t("HOME.LINKS_TITLE")}
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-blue-800 list-disc list-inside">
              {[
                { name: "Tổng cục Hải Quan Việt Nam", link: "http://www.customs.gov.vn" },
                { name: "Tổng cục thuế", link: "http://www.gdt.gov.vn/wps/portal" },
                { name: "Bộ Tài Chính", link: "http://www.mof.gov.vn/portal/page/portal/mof_vn" },
                { name: "Cục Hàng Không Việt Nam", link: "http://www.caa.gov.vn/" },
                { name: "Cục Hàng Hải Việt Nam", link: "http://www.vinamarine.gov.vn/" },
                { name: "Tổng cục Đường Bộ Việt Nam", link: "http://www.drvn.gov.vn/webdrvn/" },
                { name: "Cục Đường Thủy Nội Địa VN", link: "http://www.viwa.gov.vn/" },
                { name: "Phòng Thương Mại & CN VN (VCCI)", link: "http://www.vcci.com.vn/" },
                { name: "Bộ Công Thương", link: "http://www.moit.gov.vn/web/guest/home" },
                { name: "Bộ Giao Thông Vận Tải", link: "http://www.mt.gov.vn/default.aspx" },
                { name: "Hiệp hội Đại lý & Môi giới hàng hải VN (VISABA)", link: "http://www.visaba.org.vn/vn/" },
                { name: "Hiệp hội Cảng biển VN (VPA)", link: "http://www.vpa.org.vn/vn/hdong/ac_report2002.htm" },
                { name: "Tổ chức Hàng Hải Quốc Tế (IMO)", link: "http://www.imo.org/Pages/home.aspx" },
                { name: "Tổ chức BIMCO", link: "https://www.bimco.org/" },
                { name: "FIATA – Hiệp hội giao nhận quốc tế", link: "http://www.fiata.com/" },
                { name: "FONASBA – Hiệp hội môi giới hàng hải", link: "http://www.fonasba.com/main.html" },
                { name: "FASA – Chủ tàu Đông Nam Á", link: "http://www.fasa.net/" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
