// src/pages/CareersDrawer.tsx
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave } from "react-icons/fa";

type Job = {
  id: string;
  title: string;
  type: "Full-time" | "Part-time" | "Intern";
  location: string;
  salary?: string;
  brief: string;
  description: string[];
};

const JOBS: Job[] = [
  {
    id: "ft-sales",
    title: "Nhân viên Kinh doanh (Full-time)",
    type: "Full-time",
    location: "Hà Nội",
    salary: "Thỏa thuận + Hoa hồng",
    brief: "Phát triển khách hàng mới, chăm sóc khách hàng hiện hữu mảng logistics.",
    description: [
      "Tìm kiếm & tư vấn giải pháp vận chuyển phù hợp cho khách hàng.",
      "Chăm sóc, duy trì mối quan hệ với khách hàng doanh nghiệp.",
      "Phối hợp phòng vận hành, chứng từ để đảm bảo KPI dịch vụ.",
      "Yêu cầu: giao tiếp tốt, ưu tiên có kinh nghiệm sales logistics.",
    ],
  },
  {
    id: "pt-sales",
    title: "Nhân viên Kinh doanh (Part-time)",
    type: "Part-time",
    location: "Hà Nội / HCM",
    salary: "Theo giờ + thưởng",
    brief: "Hỗ trợ đội sales liên hệ khách hàng, cập nhật báo giá.",
    description: [
      "Tạo lead, cập nhật CRM, theo dõi phản hồi.",
      "Gửi báo giá theo mẫu, hẹn lịch meeting.",
      "Ưu tiên sinh viên năm 3-4 chuyên ngành liên quan.",
    ],
  },
  {
    id: "hr-lead",
    title: "Trưởng nhóm Nhân sự",
    type: "Full-time",
    location: "Hà Nội",
    salary: "Cạnh tranh",
    brief: "Phụ trách tuyển dụng, C&B, văn hoá doanh nghiệp.",
    description: [
      "Xây dựng kế hoạch tuyển dụng hằng quý.",
      "Đề xuất chính sách C&B, phúc lợi, đào tạo.",
      "Kinh nghiệm 3 năm ở vị trí tương đương.",
    ],
  },
  {
    id: "it-lead",
    title: "Trưởng nhóm IT",
    type: "Full-time",
    location: "Hà Nội",
    salary: "Cạnh tranh",
    brief: "Quản trị hạ tầng, website, hỗ trợ nội bộ.",
    description: [
      "Quản trị hệ thống, bảo mật, backup định kỳ.",
      "Phát triển/duy trì website & công cụ nội bộ.",
      "Ưu tiên có kinh nghiệm cloud, CI/CD.",
    ],
  },
  {
    id: "ops-coordinator",
    title: "Điều phối vận hành Logistics",
    type: "Full-time",
    location: "Hải Phòng",
    salary: "Thỏa thuận",
    brief: "Theo dõi lô hàng, làm việc với hãng tàu/hãng bay/kho bãi.",
    description: [
      "Theo dõi chứng từ, tình trạng lô hàng.",
      "Liên hệ đối tác: hãng tàu, kho bãi, hải quan.",
      "Ưu tiên có kinh nghiệm hiện trường.",
    ],
  },
];

type ApplyForm = {
  name: string;
  email: string;
  phone: string;
  cv?: File | null;
  note: string;
};

export default function CareersDrawer() {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Tab lọc đơn giản
  const [tab, setTab] = useState<"All" | "Full-time" | "Part-time" | "Intern">(
    "All"
  );

  // Job đang xem
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Form state
  const [form, setForm] = useState<ApplyForm>({
    name: "",
    email: "",
    phone: "",
    cv: null,
    note: "",
  });

  // Prefill từ query ?apply=1
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("apply") === "1") {
      setSelectedJob({
        id: "general",
        title: "Ứng tuyển chung",
        type: "Full-time",
        location: "Hà Nội",
        brief: "Gửi hồ sơ ứng tuyển chung cho Swallow Logistics.",
        description: [
          "Chúng tôi sẽ liên hệ khi có vị trí phù hợp.",
          "Vui lòng đính kèm CV và ghi rõ mảng bạn quan tâm.",
        ],
      });
      setModalOpen(true);
    }
  }, [location.search]);

  const filteredJobs = useMemo(() => {
    if (tab === "All") return JOBS;
    return JOBS.filter((j) => j.type === tab);
  }, [tab]);

  const openJob = (job: Job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
    setForm({ name: "", email: "", phone: "", cv: null, note: "" });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call API gửi mail/lưu DB
    setShowToast(true);
    closeModal();
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="px-4 md:px-8 max-w-7xl mx-auto pb-20">
      {/* Tiêu đề */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-wide">
          CƠ HỘI NGHỀ NGHIỆP
        </h1>
        <p className="text-gray-600 mt-1">
          Tham gia cùng Swallow Logistics Vietnam — môi trường chuyên nghiệp, đãi ngộ hấp dẫn.
        </p>
      </div>

      {/* Tabs lọc */}
      <div className="flex flex-wrap gap-3 mb-8">
        {(["All", "Full-time", "Part-time", "Intern"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full border transition ${
              tab === t
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white text-blue-700 border-blue-200 hover:border-blue-400"
            }`}
          >
            {t === "All" ? "Tất cả" : t}
          </button>
        ))}
        <button
          onClick={() => {
            setSelectedJob({
              id: "general",
              title: "Ứng tuyển chung",
              type: "Full-time",
              location: "Hà Nội",
              brief: "Gửi hồ sơ ứng tuyển chung cho Swallow Logistics.",
              description: [
                "Chúng tôi sẽ liên hệ khi có vị trí phù hợp.",
                "Vui lòng đính kèm CV và ghi rõ mảng bạn quan tâm.",
              ],
            });
            setModalOpen(true);
          }}
          className="ml-auto px-4 py-2 rounded-lg bg-yellow-400 text-blue-900 font-bold border border-yellow-300 hover:bg-yellow-300"
        >
          ỨNG TUYỂN NGAY
        </button>
      </div>

      {/* Danh sách job */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="group rounded-2xl border border-yellow-300 bg-white p-5 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-blue-900 font-extrabold text-lg">
                {job.title}
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {job.type}
              </span>
            </div>

            <div className="text-sm text-gray-600 mt-2">{job.brief}</div>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-700">
              <span className="inline-flex items-center gap-1">
                <FaMapMarkerAlt className="text-blue-700" /> {job.location}
              </span>
              {job.salary && (
                <span className="inline-flex items-center gap-1">
                  <FaMoneyBillWave className="text-blue-700" /> {job.salary}
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <FaClock className="text-blue-700" /> {job.type}
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => openJob(job)}
                className="px-4 py-2 rounded-lg border border-blue-200 text-blue-700 hover:bg-blue-50 transition"
              >
                Xem thêm
              </button>
              <button
                onClick={() => openJob(job)}
                className="px-4 py-2 rounded-lg bg-yellow-400 text-blue-900 font-bold border border-yellow-300 hover:bg-yellow-300 transition"
              >
                Ứng tuyển
              </button>
            </div>

            {/* viền glow nhè nhẹ khi hover */}
            <div className="pointer-events-none rounded-2xl mt-4 h-[2px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>

      {/* Modal mô tả + form apply */}
      {modalOpen && selectedJob && (
        <div
          className="fixed inset-0 z-[60] flex items-end md:items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
          />

          {/* panel */}
          <div className="relative w-full md:max-w-4xl bg-white rounded-t-2xl md:rounded-2xl shadow-2xl border border-yellow-300 overflow-hidden">
            {/* Header modal */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
              <div>
                <div className="text-sm opacity-90">{selectedJob.type} • {selectedJob.location}</div>
                <h2 className="text-xl md:text-2xl font-bold">{selectedJob.title}</h2>
              </div>
              <button
                onClick={closeModal}
                className="px-3 py-1 rounded border border-white/40 hover:bg-white/10"
                aria-label="Đóng"
              >
                ✕
              </button>
            </div>

            {/* Nội dung + Form */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Mô tả công việc */}
              <div className="p-5 md:p-6">
                <h3 className="font-semibold text-blue-900 mb-2">Mô tả / Yêu cầu</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  {selectedJob.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>

              {/* Form apply */}
              <div className="p-5 md:p-6 bg-blue-50 border-t md:border-t-0 md:border-l border-yellow-200">
                <h3 className="font-semibold text-blue-900 mb-3">Gửi hồ sơ</h3>
                <form
                  onSubmit={submit}
                  className="space-y-3"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-1">Vị trí</label>
                    <input
                      value={selectedJob.title}
                      readOnly
                      className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Họ và tên</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                      required
                      className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-gray-800"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold mb-1">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                        required
                        className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-gray-800"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">Số điện thoại</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                        required
                        pattern="[0-9]{8,15}"
                        title="Vui lòng nhập số điện thoại hợp lệ (8-15 chữ số)"
                        className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-gray-800"
                        placeholder="0912345678"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Đính kèm CV (PDF/DOCX)</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setForm((s) => ({ ...s, cv: e.target.files?.[0] ?? null }))
                      }
                      className="w-full text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Ghi chú</label>
                    <textarea
                      rows={3}
                      value={form.note}
                      onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
                      className="w-full rounded-lg border border-blue-200 bg-white px-3 py-2 text-gray-800"
                      placeholder="Ví dụ: Mong muốn làm Part-time tại HN, có thể đi onsite..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center bg-yellow-400 text-blue-900 font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition shadow border border-yellow-300"
                  >
                    GỬI HỒ SƠ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-[70]">
          ✅ CẢM ƠN BẠN! HỒ SƠ ĐÃ ĐƯỢC GỬI THÀNH CÔNG.
        </div>
      )}
    </div>
  );
}
