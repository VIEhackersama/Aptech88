import React, { useEffect, useState } from "react";
import axios from "axios";

interface HealthRecord {
  record_id: number;
  pet: {
    name: string;
  };
  visit_date: string;
  diagnosis: string;
  treatment: string;
}

export default function HealthRecordsPage() {
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state để thêm/sửa
  const [form, setForm] = useState({
    record_id: 0,
    pet_id: "",
    visit_date: "",
    diagnosis: "",
    treatment: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch data từ API
  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    try {
      const res = await axios.get("/api/healthrecords", {
        withCredentials: true,
      });
      setRecords(res.data);
    } catch (err) {
      console.error("Error fetching health records", err);
    } finally {
      setLoading(false);
    }
  };

  // Submit form (add hoặc edit)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isEditing) {
        const res = await axios.put(`/api/healthrecords/${form.record_id}`, {
          visit_date: form.visit_date,
          diagnosis: form.diagnosis,
          treatment: form.treatment,
        });
        setRecords((prev) =>
          prev.map((rec) =>
            rec.record_id === form.record_id ? { ...rec, ...res.data } : rec
          )
        );
      } else {
        const res = await axios.post("/api/healthrecords", form);
        setRecords((prev) => [...prev, res.data]);
      }
      // Reset form
      setForm({
        record_id: 0,
        pet_id: "",
        visit_date: "",
        diagnosis: "",
        treatment: "",
      });
      setIsEditing(false);
    } catch (err) {
      console.error("Error saving record", err);
    }
  };

  // Edit
  const handleEdit = (rec: HealthRecord) => {
    setForm({
      record_id: rec.record_id,
      pet_id: "", // đã có quan hệ pet trong backend
      visit_date: rec.visit_date,
      diagnosis: rec.diagnosis,
      treatment: rec.treatment,
    });
    setIsEditing(true);
  };

  // Delete
  const handleDelete = async (id: number) => {
    if (!window.confirm("Bạn có chắc muốn xóa hồ sơ này?")) return;

    try {
      await axios.delete(`/api/healthrecords/${id}`);
      setRecords((prev) => prev.filter((rec) => rec.record_id !== id));
    } catch (err) {
      console.error("Error deleting record", err);
    }
  };

  if (loading) return <p className="p-6">Đang tải dữ liệu...</p>;

  return (
    <div className="w-full p-6">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">
        🐾 Health Records (Bác sĩ thú y)
      </h1>

      {/* Form thêm/sửa */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        <input
          type="date"
          className="border p-2 rounded"
          value={form.visit_date}
          onChange={(e) => setForm({ ...form, visit_date: e.target.value })}
          required
        />
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Diagnosis"
          value={form.diagnosis}
          onChange={(e) => setForm({ ...form, diagnosis: e.target.value })}
          required
        />
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Treatment"
          value={form.treatment}
          onChange={(e) => setForm({ ...form, treatment: e.target.value })}
        />
        <button
          type="submit"
          className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200 bg-white">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-emerald-600 text-white text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Record ID</th>
              <th className="px-6 py-3">Pet</th>
              <th className="px-6 py-3">Visit Date</th>
              <th className="px-6 py-3">Diagnosis</th>
              <th className="px-6 py-3">Treatment</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, idx) => (
              <tr
                key={rec.record_id}
                className={`hover:bg-emerald-50 transition ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-3 font-medium">{rec.record_id}</td>
                <td className="px-6 py-3">{rec.pet?.name || "N/A"}</td>
                <td className="px-6 py-3">
                  {new Date(rec.visit_date).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">{rec.diagnosis}</td>
                <td className="px-6 py-3">{rec.treatment}</td>
                <td className="px-6 py-3 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(rec)}
                    className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(rec.record_id)}
                    className="px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
