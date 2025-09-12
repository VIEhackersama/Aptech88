import { useState, useEffect } from "react";
import "./HealthRecords.css";

// ===== Types =====
interface TimelineItem {
  id: number;
  date: string;
  type: string;
  description: string;
}

interface DocumentFile {
  id: number;
  name: string;
  url: string;
}

interface InsuranceInfo {
  id: number;
  provider: string;
  policyNumber: string;
  expiration: string;
}

export default function HealthRecords() {
  // ===== Sample Data =====
  const [timeline, setTimeline] = useState<TimelineItem[]>([
    { id: 1, date: "2025-01-12", type: "💉 Tiêm phòng dại", description: "Mũi 1" },
    { id: 2, date: "2025-02-20", type: "🩺 Khám bệnh", description: "Kiểm tra da liễu" },
    { id: 3, date: "2025-03-10", type: "💊 Điều trị", description: "Uống thuốc kháng sinh" },
  ]);

  const [documents, setDocuments] = useState<DocumentFile[]>([
    {
      id: 1,
      name: "X-quang phổi.jpg",
      url: "https://i.ibb.co/vczZBt7/xray-sample.jpg",
    },
  ]);

  const [insurance, setInsurance] = useState<InsuranceInfo[]>([
    {
      id: 1,
      provider: "PetCare Việt Nam",
      policyNumber: "PC-2025-001",
      expiration: "2026-01-01",
    },
  ]);

  // ===== Form States =====
  const [newEvent, setNewEvent] = useState<TimelineItem>({
    id: 0,
    date: "",
    type: "",
    description: "",
  });

  const [newInsurance, setNewInsurance] = useState<InsuranceInfo>({
    id: 0,
    provider: "",
    policyNumber: "",
    expiration: "",
  });

  // ===== Upload documents =====
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const uploaded: DocumentFile[] = Array.from(e.target.files).map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setDocuments((prev) => [...prev, ...uploaded]);
    e.target.value = "";
  };

  useEffect(() => {
    return () => {
      documents.forEach((doc) => URL.revokeObjectURL(doc.url));
    };
  }, [documents]);

  // ===== Add new event =====
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeline((prev) => [...prev, { ...newEvent, id: Date.now() }]);
    setNewEvent({ id: 0, date: "", type: "", description: "" });
  };

  // ===== Add new insurance =====
  const handleAddInsurance = (e: React.FormEvent) => {
    e.preventDefault();
    setInsurance((prev) => [...prev, { ...newInsurance, id: Date.now() }]);
    setNewInsurance({ id: 0, provider: "", policyNumber: "", expiration: "" });
  };

  return (
    <div>
     {/* Banner */}
    <div className="hero-banner d-flex flex-column justify-content-center align-items-center text-center text-white">
        <div className="overlay"></div>
             <h1 className="fw-bold animate-title">🐾 Hồ sơ sức khỏe thú cưng 🐾</h1>
                <p className="animate-subtitle">
                 Theo dõi tiêm chủng, điều trị và bảo hiểm dễ dàng
                </p>
    </div>

      <div className="container py-5">
        {/* Timeline */}
        <section className="mb-5 fade-in">
          <h3 className="mb-4 section-title">📅 Lịch sử tiêm chủng & điều trị</h3>
          <form className="row g-3 align-items-end mb-4" onSubmit={handleAddEvent}>
            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
                value={newEvent.date}
                onChange={(e) => setNewEvent((p) => ({ ...p, date: e.target.value }))}
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Loại sự kiện"
                value={newEvent.type}
                onChange={(e) => setNewEvent((p) => ({ ...p, type: e.target.value }))}
                required
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Mô tả"
                value={newEvent.description}
                onChange={(e) => setNewEvent((p) => ({ ...p, description: e.target.value }))}
                required
              />
            </div>
            <div className="col-md-2 text-end">
              <button className="btn btn-success w-100" type="submit">
                ➕ Thêm
              </button>
            </div>
          </form>

          <div className="row">
            {timeline.map((item) => (
              <div key={item.id} className="col-md-4 mb-3">
                <div className="card shadow-sm p-3 timeline-card fade-in-up">
                  <span className="text-muted small">{item.date}</span>
                  <h5 className="mt-2">{item.type}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Documents */}
        {/* <section className="mb-5 fade-in">
          <h3 className="mb-4 section-title">📂 Tài liệu y tế</h3>
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileUpload}
            className="form-control mb-3"
          />
          <div className="row">
            {documents.map((doc) => (
              <div key={doc.id} className="col-md-4 mb-3">
                <div className="card shadow-sm fade-in-up doc-card">
                  {doc.name.endsWith(".pdf") ? (
                    <div className="p-3">
                      <a href={doc.url} target="_blank" rel="noopener noreferrer">
                        📄 {doc.name}
                      </a>
                    </div>
                  ) : (
                    <img
                      src={doc.url}
                      alt={doc.name}
                      className="card-img-top"
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Insurance */}
        <section className="fade-in">
          <h3 className="mb-4 section-title">🛡️ Bảo hiểm thú cưng</h3>
          <form className="row g-3 align-items-end mb-4" onSubmit={handleAddInsurance}>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Công ty bảo hiểm"
                value={newInsurance.provider}
                onChange={(e) => setNewInsurance((p) => ({ ...p, provider: e.target.value }))}
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Số hợp đồng"
                value={newInsurance.policyNumber}
                onChange={(e) => setNewInsurance((p) => ({ ...p, policyNumber: e.target.value }))}
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
                value={newInsurance.expiration}
                onChange={(e) => setNewInsurance((p) => ({ ...p, expiration: e.target.value }))}
                required
              />
            </div>
            <div className="col-md-3 text-end">
              <button className="btn btn-success w-100" type="submit">
                ➕ Lưu
              </button>
            </div>
          </form>

          <div className="row">
            {insurance.map((ins) => (
              <div key={ins.id} className="col-md-4 mb-3">
                <div className="card shadow-sm p-3 fade-in-up insurance-card">
                  <h5>{ins.provider}</h5>
                  <p>📑 {ins.policyNumber}</p>
                  <p>⏳ Hết hạn: {ins.expiration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
