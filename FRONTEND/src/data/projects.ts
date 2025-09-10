// src/data/projects.ts
export type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  image: string;
  date?: string;           // tùy chọn
  location?: string;       // tùy chọn
  href?: string;           // nếu có trang chi tiết thì thêm, không có thì bỏ
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "expo-hanoi-industrial",
    title: "Triển lãm thiết bị công nghiệp – Hà Nội",
    summary:
      "Vận chuyển trọn gói thiết bị công nghiệp cho triển lãm: thông quan, nâng hạ, dàn dựng & hoàn trả.",
    image: "/assets/projects/expo-hanoi.jpg",
    date: "2024-08-10",
    location: "Hà Nội",
    // href: "/projects/expo-hanoi-industrial"
  },
  {
    id: "sports-international-hcm",
    title: "Sự kiện thể thao quốc tế – TP.HCM",
    summary:
      "Giải pháp logistics end-to-end cho thiết bị thi đấu, đảm bảo tiến độ gắt & tiêu chuẩn an ninh.",
    image: "/assets/projects/sports-hcm.jpg",
    date: "2024-06-22",
    location: "TP.HCM",
  },
  {
    id: "oversize-hp-dungquat",
    title: "Siêu trường siêu trọng: HP → Dung Quất",
    summary:
      "Vận chuyển mô-đun nặng từ Cảng Hải Phòng đến KCN Dung Quất: khảo sát tuyến, giấy phép, escort.",
    image: "/assets/projects/oversize-dungquat.jpg",
    date: "2023-12-05",
    location: "Hải Phòng – Quảng Ngãi",
  },
  {
    id: "pharma-coldchain",
    title: "Chuỗi lạnh dược phẩm",
    summary:
      "Giải pháp kho lạnh & vận chuyển kiểm soát nhiệt, theo dõi realtime & SOP GSP/GDP.",
    image: "/assets/projects/pharma-coldchain.jpg",
    date: "2023-09-18",
    location: "Toàn quốc",
  },
];
