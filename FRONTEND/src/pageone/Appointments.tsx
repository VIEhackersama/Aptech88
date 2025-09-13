import React, { JSX, useEffect, useMemo, useState } from "react";
import "./Appointments.css";

/**
 * Component Appointments (TypeScript + React)
 *
 * - Trung thành với DB schema:
 *   appointments: appt_id, pet_id, owner_id, vet_id, appointment_time (datetime), status, created_at, updated_at
 *   veterinarians: vet_id, name, email, password_hash, address, note, img_url, phonenumber, created_at, updated_at
 *
 * - API endpoints (Laravel):
 *   GET  /api/veterinarians
 *   GET  /api/appointments
 *   POST /api/appointments
 *   PUT  /api/appointments/{id}
 *   DELETE /api/appointments/{id}
 *
 * Lưu ý: đổi BASE_URL nếu API khác host / port.
 */
declare const process: any;

/* ================== Config ================== */
const BASE_URL = import.meta.env.VITE_API_BASE || "/api";

/* ================== Types (mapping DB fields) ================== */
type Vet = {
  vet_id: string;
  name: string;
  email?: string;
  address?: string;
  note?: string;
  img_url?: string;
  phonenumber?: string;
  created_at?: string;
  updated_at?: string;
};

type AppointmentDB = {
  appt_id: string; // primary id
  pet_id: string;
  owner_id: string;
  vet_id?: string | null;
  appointment_time: string; // ISO datetime string from DB (e.g. "2025-09-10 10:00:00")
  status?: string; // e.g. "pending", "confirmed", "cancelled"
  created_at?: string;
  updated_at?: string;
};

/* ================== Helpers ================== */
const uid = (p = "") => p + Math.random().toString(36).slice(2, 9);

// Convert date (yyyy-mm-dd) + time (HH:MM) -> "YYYY-MM-DD HH:MM:00"
function buildDateTime(date: string, time: string) {
  return `${date} ${time}:00`;
}

// Parse DB datetime "YYYY-MM-DD HH:MM:SS" -> { date: "YYYY-MM-DD", time: "HH:MM" }
function splitDateTime(dt?: string) {
  if (!dt) {
    const d = new Date();
    const iso = d.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:MM"
    const [date, timePart] = iso.split("T");
    return { date, time: timePart.slice(0, 5) };
  }
  const [date, time] = dt.split(" ");
  return { date, time: time ? time.slice(0, 5) : "09:00" };
}

/* ================== Component ================== */
export default function Appointments(): JSX.Element {
  /* ---------- State ---------- */
  const [vets, setVets] = useState<Vet[]>([]);
  const [appointments, setAppointments] = useState<AppointmentDB[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // form fields (mapping to DB fields)
  const [ownerId, setOwnerId] = useState<string>(""); // owner_id (string input)
  const [petId, setPetId] = useState<string>(""); // pet_id (string input)
  const [vetId, setVetId] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<string>(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [time, setTime] = useState<string>("09:00");
  const [status, setStatus] = useState<string>("pending");

  const [editingApptId, setEditingApptId] = useState<string | null>(null);

  /* ---------- Effects: load vets & appointments ---------- */
  useEffect(() => {
    loadVets();
    loadAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadVets() {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/veterinarians`);
      if (!res.ok) throw new Error(`Failed to fetch vets: ${res.status}`);
      const data = (await res.json()) as Vet[];
      setVets(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Lỗi khi tải danh sách bác sĩ");
    } finally {
      setLoading(false);
    }
  }

  async function loadAppointments() {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/appointments`);
      if (!res.ok)
        throw new Error(`Failed to fetch appointments: ${res.status}`);
      const data = (await res.json()) as AppointmentDB[];
      setAppointments(Array.isArray(data) ? data : []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Lỗi khi tải lịch hẹn");
    } finally {
      setLoading(false);
    }
  }

  /* ---------- Helpers ---------- */
  function resetForm() {
    setOwnerId("");
    setPetId("");
    setVetId(undefined);
    setDate(new Date().toISOString().slice(0, 10));
    setTime("09:00");
    setStatus("pending");
    setEditingApptId(null);
  }

  function openEdit(appt: AppointmentDB) {
    setEditingApptId(appt.appt_id);
    setOwnerId(appt.owner_id);
    setPetId(appt.pet_id);
    setVetId(appt.vet_id || undefined);
    const dt = splitDateTime(appt.appointment_time);
    setDate(dt.date);
    setTime(dt.time);
    setStatus(appt.status || "pending");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function isConflict(
    vetIdToCheck?: string,
    datetime?: string,
    excludeId?: string | null
  ) {
    if (!vetIdToCheck || !datetime) return false;
    return appointments.some(
      (a) =>
        a.vet_id === vetIdToCheck &&
        a.appointment_time === datetime &&
        a.appt_id !== excludeId
    );
  }

  function findVetNameById(id?: string | null) {
    return id ? vets.find((v) => v.vet_id === id)?.name ?? id : "";
  }

  /* ---------- CRUD Handlers ---------- */
  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);

    // basic validation: require owner_id, pet_id, appointment_time
    if (!ownerId.trim() || !petId.trim()) {
      alert("Vui lòng nhập owner_id và pet_id (không được để trống).");
      return;
    }

    const appointment_time = buildDateTime(date, time);

    if (vetId && isConflict(vetId, appointment_time, editingApptId)) {
      alert(
        "Bác sĩ đã có lịch vào thời gian này. Vui lòng chọn thời gian hoặc bác sĩ khác."
      );
      return;
    }

    const payload = {
      pet_id: petId,
      owner_id: ownerId,
      vet_id: vetId ?? null,
      appointment_time,
      status,
    };

    try {
      setLoading(true);
      if (editingApptId) {
        // update
        const res = await fetch(`${BASE_URL}/appointments/${editingApptId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Cập nhật thất bại: ${res.status}`);
        await loadAppointments();
        alert("Cập nhật lịch hẹn thành công.");
      } else {
        // create
        const res = await fetch(`${BASE_URL}/appointments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Tạo thất bại: ${res.status}`);
        await loadAppointments();
        alert("Tạo lịch hẹn thành công.");
      }
      resetForm();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Lỗi khi lưu lịch hẹn");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(appt_id: string) {
    if (!confirm("Bạn có chắc muốn huỷ lịch này?")) return;
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/appointments/${appt_id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`Xoá thất bại: ${res.status}`);
      await loadAppointments();
      alert("Đã huỷ lịch.");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Lỗi khi huỷ lịch");
    } finally {
      setLoading(false);
    }
  }

  /* ---------- Derived UI ---------- */
  // suggested vets: simple ordering — vets in same city as owner_id? DB doesn't provide city for owner, so we just return full list
  const suggestedVets = useMemo(() => vets.slice(0, 20), [vets]); // keep simple

  /* ================== Render ================== */
  return (
    <div className="appt-page">
      <header className="appt-banner">
        <div className="container-lg banner-inner text-center">
          <h1 className="title">🐾 Quản lý Lịch Hẹn (Appointments)</h1>
          <p className="subtitle small">
            Kết nối API Laravel — bảng appointments & veterinarians
          </p>
        </div>
      </header>

      <main className="container-lg main-inner my-4">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row gx-4">
          <div className="col-lg-6">
            <div className="card p-3 mb-4 shadow-sm">
              <h5>{editingApptId ? "Sửa lịch" : "Tạo lịch mới"}</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label small">owner_id</label>
                  <input
                    className="form-control"
                    value={ownerId}
                    onChange={(e) => setOwnerId(e.target.value)}
                    required
                  />
                  <div className="form-text small">
                    Giá trị owner_id theo DB (string/number).
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label small">pet_id</label>
                  <input
                    className="form-control"
                    value={petId}
                    onChange={(e) => setPetId(e.target.value)}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label className="form-label small">Ngày</label>
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().slice(0, 10)}
                    />
                  </div>
                  <div className="col-md-6 mb-2">
                    <label className="form-label small">Giờ</label>
                    <input
                      type="time"
                      className="form-control"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label small">Bác sĩ (vet)</label>
                  <select
                    className="form-select"
                    value={vetId ?? ""}
                    onChange={(e) => setVetId(e.target.value || undefined)}
                  >
                    <option value="">-- Không chọn --</option>
                    {suggestedVets.map((v) => {
                      const dt = buildDateTime(date, time);
                      const conflict = isConflict(v.vet_id, dt, editingApptId);
                      return (
                        <option
                          key={v.vet_id}
                          value={v.vet_id}
                          disabled={conflict}
                        >
                          {v.name} {conflict ? " (Trùng lịch)" : ""}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="mb-2">
                  <label className="form-label small">Trạng thái</label>
                  <select
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="pending">pending</option>
                    <option value="confirmed">confirmed</option>
                    <option value="cancelled">cancelled</option>
                  </select>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {editingApptId ? "Lưu" : "Tạo"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={resetForm}
                  >
                    Làm mới
                  </button>
                </div>
              </form>
            </div>

            <div className="card p-3 shadow-sm">
              <h6>Danh sách bác sĩ (Veterinarians)</h6>
              {vets.length === 0 && (
                <div className="small text-muted">Không có bác sĩ</div>
              )}
              {vets.map((v) => (
                <div
                  key={v.vet_id}
                  className="d-flex justify-content-between align-items-start mb-2"
                >
                  <div>
                    <div className="fw-bold">{v.name}</div>
                    <div className="small text-muted">
                      {v.phonenumber} {v.address ? `• ${v.address}` : ""}
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => {
                        setVetId(v.vet_id);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Chọn
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card p-3 shadow-sm">
              <h5>Lịch hẹn ({appointments.length})</h5>
              {appointments.length === 0 && (
                <div className="small text-muted">Chưa có lịch hẹn.</div>
              )}
              {appointments.map((a) => {
                const { date: d, time: t } = splitDateTime(a.appointment_time);
                const vetName = findVetNameById(a.vet_id);
                return (
                  <div
                    key={a.appt_id}
                    className="list-group-item d-flex justify-content-between align-items-start mb-2"
                  >
                    <div>
                      <div className="fw-bold">
                        pet_id: {a.pet_id} — owner_id: {a.owner_id}
                      </div>
                      <div className="small text-muted">
                        {d} • {t} •{" "}
                        {vetName ? `Bác sĩ: ${vetName}` : "Chưa chỉ định"} •
                        Trạng thái: {a.status}
                      </div>
                    </div>
                    <div className="text-end">
                      <button
                        className="btn btn-sm btn-outline-primary me-1"
                        onClick={() => openEdit(a)}
                      >
                        Sửa
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(a.appt_id)}
                      >
                        Huỷ
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              loadVets();
              loadAppointments();
            }}
          >
            Làm mới danh sách (vets + appointments)
          </button>
        </div>
      </main>
    </div>
  );
}
