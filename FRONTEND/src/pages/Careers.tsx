import React, { useMemo, useState } from "react";

type Job = {
  id: string;
  title: string;
  location: "Hà Nội" | "Hồ Chí Minh" | "Hải Phòng" | "Remote";
  type: "Full-time" | "Part-time" | "Intern";
  dept: string;
  summary: string;
  details: string[];
};

const GOLD = "#FFC72C";

// Dữ liệu mẫu – sau này bạn có thể thay bằng API
const JOBS: Job[] = [
  {
    id: "sale-pt",
    title: "Nhân viên Kinh doanh (Part-time)",
    location: "Hà Nội",
    type: "Part-time",
    dept: "Sales",
    summary: "Tìm kiếm khách mới, chăm sóc khách hiện hữu, hỗ trợ chốt deal.",
    details: [
      "Yêu cầu: giao tiếp tốt, chủ động, yêu thích sales.",
      "Ưu tiên hiểu biết cơ bản về logistics/xuất nhập khẩu.",
      "Thời gian linh hoạt tối thiểu 20h/tuần.",
    ],
  },
  {
    id: "sale-ft",
    title: "Nhân viên Kinh doanh (Full-time)",
    location: "Hồ Chí Minh",
    type: "Full-time",
    dept: "Sales",
    summary: "Phát triển thị trường, tư vấn giải pháp logistics, đạt KPI.",
    details: [
      "Kinh nghiệm sales B2B 1-2 năm là lợi thế.",
      "Quen tuyến SEA/AIR, giá cước, Incoterms.",
      "Thu nhập cạnh tranh: lương + % doanh số.",
    ],
  },
  {
    id: "docs-ft",
    title: "Nhân viên Chứng từ XNK",
    location: "Hải Phòng",
    type: "Full-time",
    dept: "Documentation",
    summary: "Soạn & xử lý chứng từ, khai báo hải quan, phối hợp hãng tàu.",
    details: [
      "Thành thạo quy trình XNK, phần mềm khai báo.",
      "Cẩn thận, tỉ mỉ, chịu áp lực thời gian.",
      "Ưu tiên từng làm tại forwarder/đại lý hải quan.",
    ],
  },
  {
    id: "ops-ft",
    title: "Điều phối Vận tải (Operations)",
    location: "Hà Nội",
    type: "Full-time",
    dept: "Operations",
    summary: "Bố trí phương tiện, theo dõi timeline, cập nhật trạng thái.",
    details: [
      "Kỹ năng sắp xếp, giao tiếp & xử lý tình huống tốt.",
      "Quen tuyến nội địa, vendor, kho bãi.",
      "Ca làm linh hoạt theo nhu cầu vận hành.",
    ],
  },
  {
    id: "intern",
    title: "Thực tập sinh Logistics",
    location: "Remote",
    type: "Intern",
    dept: "General",
    summary:
      "Hỗ trợ Sales/Docs/Ops; đào tạo bài bản, cơ hội lên chính thức.",
    details: [
      "Không yêu cầu kinh nghiệm, được đào tạo cầm tay chỉ việc.",
      "Hỗ trợ phụ cấp và chứng nhận thực tập.",
      "Ưu tiên SV năm 3-4 các ngành liên quan.",
    ],
  },
];

export default function Careers() {
  // Lọc
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("Tất cả");
  const [typ, setTyp] = useState("Tất cả");

  // Card mở chi tiết
  const [openId, setOpenId] = useState<string | null>(null);

  // State form cho từng job
  const [form, setForm] = useState<
    Record<string, { name: string; email: string; phone: string; note: string }>
  >({});

  const [toast, setToast] = useState<string | null>(null);

  const locations = useMemo(
    () => ["Tất cả", ...Array.from(new Set(JOBS.map((j) => j.location)))],
    []
  );
  const types = useMemo(
    () => ["Tất cả", ...Array.from(new Set(JOBS.map((j) => j.type)))],
    []
  );

  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    return JOBS.filter((j) => {
      const okQ =
        !k ||
        j.title.toLowerCase().includes(k) ||
        j.summary.toLowerCase().includes(k) ||
        j.dept.toLowerCase().includes(k);
      const okL = loc === "Tất cả" || j.location === (loc as Job["location"]);
      const okT = typ === "Tất cả" || j.type === (typ as Job["type"]);
      return okQ && okL && okT;
    });
  }, [q, loc, typ]);

  const onChangeForm = (
    id: string,
    key: "name" | "email" | "phone" | "note",
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [id]: {
        name: "",
        email: "",
        phone: "",
        note: "",
        ...(prev[id] || {}),
        [key]: value,
      },
    }));
  };

  const submitApply = (id: string, e: React.FormEvent) => {
    e.preventDefault();
    const data = form[id];
    if (!data?.name || !data?.email || !data?.phone || !data?.note) {
      setToast("Vui lòng điền đầy đủ thông tin.");
      setTimeout(() => setToast(null), 2500);
      return;
    }
    // TODO: Gửi API/Email thật tại đây
    setToast("✅ Đã nhận hồ sơ! Chúng tôi sẽ liên hệ sớm.");
    setForm((prev) => ({ ...prev, [id]: { name: "", email: "", phone: "", note: "" } }));
    setTimeout(() => setToast(null), 3000);
  };

  return (
    
    <div className="pt-28 pb-16 px-4 md:px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10 text-gray-800 leading-relaxed">
        {/* Tiêu đề */}
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-wide">
            CƠ HỘI NGHỀ NGHIỆP
          </h1>
          <p className="max-w-3xl mx-auto mt-3">
            Chọn vị trí phù hợp và gửi hồ sơ trực tiếp tại từng thẻ. (Không dùng trang “chính sách tuyển dụng”.)
          </p>
        </section>

        {/* Bộ lọc */}
        <section
          className="rounded-2xl bg-white shadow p-4 md:p-6 border"
          style={{ borderColor: GOLD }}
        >
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Tìm theo vị trí/phòng ban/mô tả…"
              className="flex-1 rounded-lg border px-4 py-2 focus:ring-2 focus:ring-yellow-300 outline-none"
            />
            <select
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="rounded-lg border px-3 py-2 focus:ring-2 focus:ring-yellow-300 outline-none"
            >
              {locations.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
            <select
              value={typ}
              onChange={(e) => setTyp(e.target.value)}
              className="rounded-lg border px-3 py-2 focus:ring-2 focus:ring-yellow-300 outline-none"
            >
              {types.map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Danh sách Job */}
        <section className="grid md:grid-cols-2 gap-6">
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              Không tìm thấy vị trí phù hợp.
            </div>
          )}

          {filtered.map((job) => {
            const opened = openId === job.id;
            const f = form[job.id] || {
              name: "",
              email: "",
              phone: "",
              note: "",
            };
            return (
              <article
                key={job.id}
                className="relative rounded-2xl bg-white border shadow-sm hover:shadow-lg transition p-5"
                style={{ borderColor: GOLD }}
              >
                {/* Header card */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-extrabold text-blue-900">
                      {job.title}
                    </h3>
                    <div className="mt-1 text-sm text-gray-600">
                      <span className="font-semibold">Địa điểm:</span> {job.location} ·{" "}
                      <span className="font-semibold">Loại hình:</span> {job.type} ·{" "}
                      <span className="font-semibold">Phòng ban:</span> {job.dept}
                    </div>
                  </div>
                  <span
                    className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded border h-fit"
                    style={{ borderColor: GOLD }}
                  >
                    MỞ TUYỂN
                  </span>
                </div>

                {/* Tóm tắt */}
                <p className="mt-3 text-gray-700">{job.summary}</p>

                {/* Nút Xem thêm / Thu gọn */}
                <button
                  onClick={() => setOpenId(opened ? null : job.id)}
                  className="mt-3 text-blue-800 font-semibold hover:underline"
                >
                  {opened ? "Thu gọn ▲" : "Xem thêm ▼"}
                </button>

                {/* Chi tiết + form */}
                {opened && (
                  <div
                    className="mt-4 rounded-xl border p-4 bg-blue-50/40"
                    style={{ borderColor: GOLD }}
                  >
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      {job.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>

                    <form
                      onSubmit={(e) => submitApply(job.id, e)}
                      className="mt-4 grid grid-cols-1 gap-3"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <input
                          value={f.name}
                          onChange={(e) =>
                            onChangeForm(job.id, "name", e.target.value)
                          }
                          placeholder="Họ và tên"
                          required
                          className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                        <input
                          type="email"
                          value={f.email}
                          onChange={(e) =>
                            onChangeForm(job.id, "email", e.target.value)
                          }
                          placeholder="Email"
                          required
                          className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                        <input
                          type="tel"
                          value={f.phone}
                          onChange={(e) =>
                            onChangeForm(job.id, "phone", e.target.value)
                          }
                          placeholder="Số điện thoại"
                          required
                          pattern="[0-9]{8,15}"
                          title="Nhập số điện thoại 8–15 chữ số"
                          className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                      </div>

                      <textarea
                        rows={4}
                        value={f.note}
                        onChange={(e) =>
                          onChangeForm(job.id, "note", e.target.value)
                        }
                        placeholder="Thư giới thiệu / câu hỏi cho bộ phận tuyển dụng…"
                        required
                        className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-300"
                      />

                      <div className="flex items-center gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center bg-yellow-400 text-blue-900 font-bold px-5 py-2 rounded-lg hover:bg-yellow-300 transition shadow"
                        >
                          GỬI ỨNG TUYỂN
                        </button>
                        <a
                          href="/contact"
                          className="text-sm text-blue-800 hover:underline"
                        >
                          Cần hỗ trợ? Liên hệ ngay →
                        </a>
                      </div>
                    </form>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-blue-900 text-white px-4 py-2 rounded shadow-lg z-50">
          {toast}
        </div>
      )}
    </div>
  );
}
