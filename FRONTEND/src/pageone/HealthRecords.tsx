import { useState, useEffect } from "react";
import axios from "axios";
import "./HealthRecords.css";

// ===== Types từ API =====
interface HealthRecord {
  id: number;
  pet_id: number;
  vet_id: number;
  visit_date: string;
  diagnosis: string;
  treatment?: string;
  pet?: {
    pet_id: number;
    name: string;
  };
}

export default function HealthRecords() {
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // form thêm record mới
  const [newRecord, setNewRecord] = useState<
    Omit<HealthRecord, "id" | "vet_id">
  >({
    pet_id: 0,
    visit_date: "",
    diagnosis: "",
    treatment: "",
  });

  // Fetch records khi mount
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await axios.get<HealthRecord[]>("/api/healthrecords", {
          withCredentials: true, // cần nếu bạn dùng Sanctum
        });
        setRecords(res.data);
      } catch (err: any) {
        setError(err.response?.data?.error || "Không thể tải dữ liệu");
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  // Submit thêm record mới
  const handleAddRecord = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post<HealthRecord>(
        "/api/healthrecords",
        newRecord,
        { withCredentials: true }
      );
      setRecords((prev) => [...prev, res.data]); // thêm vào danh sách
      setNewRecord({ pet_id: 0, visit_date: "", diagnosis: "", treatment: "" });
    } catch (err: any) {
      alert(err.response?.data?.error || "Thêm thất bại");
    }
  };

  // Xoá record
  const handleDelete = async (id: number) => {
    if (!window.confirm("Bạn có chắc muốn xoá record này?")) return;
    try {
      await axios.delete(`/api/healthrecords/${id}`, { withCredentials: true });
      setRecords((prev) => prev.filter((r) => r.id !== id));
    } catch (err: any) {
      alert(err.response?.data?.error || "Xoá thất bại");
    }
  };

  if (loading) return <p className="text-center">⏳ Đang tải...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;

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
        {/* Form thêm record */}
        <section className="mb-5 fade-in">
          <h3 className="mb-4 section-title">📅 Thêm hồ sơ khám bệnh</h3>
          <form
            className="row g-3 align-items-end mb-4"
            onSubmit={handleAddRecord}
          >
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Pet ID"
                value={newRecord.pet_id}
                onChange={(e) =>
                  setNewRecord((p) => ({
                    ...p,
                    pet_id: Number(e.target.value),
                  }))
                }
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
                value={newRecord.visit_date}
                onChange={(e) =>
                  setNewRecord((p) => ({ ...p, visit_date: e.target.value }))
                }
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Chẩn đoán"
                value={newRecord.diagnosis}
                onChange={(e) =>
                  setNewRecord((p) => ({ ...p, diagnosis: e.target.value }))
                }
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="Điều trị"
                value={newRecord.treatment}
                onChange={(e) =>
                  setNewRecord((p) => ({ ...p, treatment: e.target.value }))
                }
              />
            </div>
            <div className="col-md-1 text-end">
              <button className="btn btn-success w-100" type="submit">
                ➕
              </button>
            </div>
          </form>

          {/* Danh sách record */}
          <div className="row">
            {records.map((item) => (
              <div key={item.id} className="col-md-4 mb-3">
                <div className="card shadow-sm p-3 timeline-card fade-in-up">
                  <span className="text-muted small">{item.visit_date}</span>
                  <h5 className="mt-2">{item.diagnosis}</h5>
                  <p>{item.treatment || "Không có điều trị"}</p>
                  <p className="small text-info">
                    🐶 Pet: {item.pet?.name || item.pet_id}
                  </p>
                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => handleDelete(item.id)}
                  >
                    🗑️ Xoá
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
