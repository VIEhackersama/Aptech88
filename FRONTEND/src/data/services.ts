// src/data/services.ts
import {
  FaShip,
  FaPlane,
  FaTruck,
  FaWarehouse,
  FaProjectDiagram,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";

// Kiểu dữ liệu dịch vụ
export type ServiceItem = {
  id: string;                // dùng cho url
  title: string;             // tiêu đề hiển thị
  desc: string;              // mô tả ngắn
  icon: React.ComponentType; // icon component (react-icons)
  image: string;             // đường dẫn ảnh thumb
  path: string;              // route link tới trang dịch vụ chi tiết
};

export const SERVICES: ServiceItem[] = [
  {
    id: "customs",
    title: "Thủ tục hải quan",
    desc: "Khai báo & kiểm tra chứng từ nhanh, chính xác.",
    icon: FaFileAlt,
    image: "/assets/services/customs.jpg",
    path: "/services/customs",
  },
  {
    id: "sea",
    title: "Vận chuyển đường biển",
    desc: "Giải pháp quốc tế an toàn, tối ưu chi phí.",
    icon: FaShip,
    image: "/assets/services/sea.jpg",
    path: "/services/sea",
  },
  {
    id: "air",
    title: "Vận chuyển đường hàng không",
    desc: "Tốc độ – đúng hạn – theo dõi realtime.",
    icon: FaPlane,
    image: "/assets/services/air.jpg",
    path: "/services/air",
  },
  {
    id: "domestic",
    title: "Vận chuyển nội địa",
    desc: "Đường bộ linh hoạt, phủ rộng toàn quốc.",
    icon: FaTruck,
    image: "/assets/services/domestic.jpg",
    path: "/services/domestic", // nếu chưa có trang, có thể tạm trỏ /services/oversized
  },
  {
    id: "multimodal",
    title: "Đa phương thức",
    desc: "Kết hợp thông minh giữa các loại hình vận tải.",
    icon: FaArrowRight,
    image: "/assets/services/multimodal.jpg",
    path: "/services/multimodal",
  },
  {
    id: "project",
    title: "Hàng dự án, triển lãm",
    desc: "Chuyên trị hàng cồng kềnh, timeline gắt.",
    icon: FaProjectDiagram,
    image: "/assets/services/project.jpg",
    path: "/services/project",
  },
  {
    id: "warehouse",
    title: "Dịch vụ kho bãi",
    desc: "Kho hiện đại, WMS minh bạch, bảo quản tối ưu.",
    icon: FaWarehouse,
    image: "/assets/services/warehouse.jpg",
    path: "/services/warehouse",
  },
  // ĐÃ BỎ: importexport (XNK ủy thác)
];
