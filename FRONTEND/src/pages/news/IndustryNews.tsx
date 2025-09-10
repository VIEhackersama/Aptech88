import React from "react";
import NewsPage, { NewsItem } from "./NewsPage";

const INDUSTRY_NEWS: NewsItem[] = [
  {
    id: "i1",
    title: "Biến động giá cước vận tải biển toàn cầu",
    date: "2025-08-05",
    tag: "Thị trường",
    excerpt:
      "Cước vận tải biển tăng 12% so với tháng trước do nhu cầu từ châu Á sang châu Âu tăng mạnh.",
    image: "/assets/home1.jpeg",
    href: "#",
  },
  {
    id: "i2",
    title: "Chính sách thuế xuất nhập khẩu mới từ Bộ Tài chính",
    date: "2025-07-20",
    tag: "Chính sách",
    excerpt:
      "Ưu đãi thuế mới cho doanh nghiệp xuất khẩu nông sản sang thị trường châu Âu.",
    image: "/assets/home1.jpeg",
    href: "#",
  },
  {
    id: "i3",
    title: "Ứng dụng AI trong quản lý kho thông minh",
    date: "2025-06-15",
    tag: "Công nghệ",
    excerpt:
      "Giải pháp AI giúp tối ưu hoá quản lý kho, giảm chi phí và nâng cao hiệu suất.",
    image: "/assets/home1.jpeg",
    href: "#",
  },
  {
    id: "i4",
    title: "Phân tích xu hướng thương mại từ góc nhìn chuyên gia",
    date: "2025-05-28",
    tag: "Chuyên gia",
    excerpt:
      "Dự báo xuất khẩu sang Mỹ tăng trưởng trong quý 3/2025 với các mặt hàng công nghiệp.",
    image: "/assets/home1.jpeg",
    href: "#",
  },
  {
    id: "i5",
    title: "Triển lãm Logistics Quốc tế 2025",
    date: "2025-04-10",
    tag: "Sự kiện",
    excerpt:
      "Hơn 200 doanh nghiệp tham gia triển lãm nhằm tìm kiếm cơ hội hợp tác mới.",
    image: "/assets/home1.jpeg",
    href: "#",
  },
];

export default function IndustryNews() {
  return (
    <NewsPage
      title="Tin tức chuyên ngành – xã hội"
      items={INDUSTRY_NEWS}
      // tags sẽ tự suy ra, hoặc bạn có thể cố định:
      // tags={["Tất cả", "Thị trường", "Chính sách", "Công nghệ", "Chuyên gia", "Sự kiện"]}
      ctaHref="/contact"
      ctaText="Liên hệ với chúng tôi"
    />
  );
}
