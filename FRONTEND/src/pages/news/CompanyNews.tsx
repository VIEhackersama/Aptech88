import React from "react";
import NewsPage, { NewsItem } from "./NewsPage";

const COMPANY_NEWS: NewsItem[] = [
  {
    id: "c1",
    title: "Khai trương tuyến dịch vụ mới SEA–EU",
    date: "2025-07-25",
    tag: "Hoạt động",
    excerpt:
      "Swallow Logistics mở tuyến vận chuyển mới từ Đông Nam Á đến châu Âu, tối ưu thời gian giao hàng.",
    image: "/assets/home1.jpeg",
    href: "#",
  },
  {
    id: "c2",
    title: "Swallow đạt chứng nhận ISO 9001:2015",
    date: "2025-06-30",
    tag: "Hoạt động",
    excerpt:
      "Hệ thống quản lý chất lượng của Swallow được công nhận đạt chuẩn quốc tế.",
    image: "/assets/home1.jpeg",
    href: "#",
  },
  {
    id: "c3",
    title: "Tuyển dụng Q3/2025 – nhiều vị trí hấp dẫn",
    date: "2025-06-10",
    tag: "Tuyển dụng",
    excerpt:
      "Mở rộng quy mô kinh doanh, Swallow tìm kiếm Sales Logistics, CS, Điều vận...",
    image: "/assets/home1.jpeg",
    href: "/careers",
  },
  {
    id: "c4",
    title: "Workshop nội bộ về tối ưu chi phí chuỗi cung ứng",
    date: "2025-05-18",
    tag: "Hoạt động",
    excerpt:
      "Chương trình đào tạo nội bộ giúp nâng cao năng lực chuyên môn cho đội ngũ.",
    image: "/assets/home1.jpeg",
    href: "#",
  },
];

export default function CompanyNews() {
  return (
    <NewsPage
      title="Tin tức công ty"
      items={COMPANY_NEWS}
      // có thể truyền tags = ["Tất cả", "Hoạt động", "Tuyển dụng"] nếu muốn cố định
      ctaHref="/contact"
      ctaText="Liên hệ hợp tác"
    />
  );
}
