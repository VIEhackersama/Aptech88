import React, { useEffect, useState } from "react";
import axios from "axios";

interface Pet {
  pet_id: number;
  name: string;
}

interface HealthRecord {
  record_id: number;
  pet: { name: string };
  visit_date: string;
  diagnosis: string;
  treatment: string;
}

export default function HealthRecordsPage() {
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    record_id: 0,
    pet_id: "",
    visit_date: "",
    diagnosis: "",
    treatment: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const fetchRecords = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/healthrecords", { withCredentials: true });
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  const fetchPets = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/pets", { withCredentials: true });
      setPets(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRecords();
    fetchPets();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isEditing) {

        const res = await axios.put(
          `http://127.0.0.1:8000/api/healthrecords/${form.record_id}`,
          form,
          { withCredentials: true }
        );
        setRecords(prev => prev.map(r => r.record_id === form.record_id ? res.data : r));
      } else {
        const res = await axios.post("http://127.0.0.1:8000/api/healthrecords", form, { withCredentials: true });
        setRecords(prev => [...prev, res.data]);
      }
      setForm({ record_id: 0, pet_id: "", visit_date: "", diagnosis: "", treatment: "" });
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (r: HealthRecord) => {
    setForm({
      record_id: r.record_id,

      pet_id: "", // Nếu muốn edit thì cần map lại pet_id từ backend
      visit_date: r.visit_date,
      diagnosis: r.diagnosis,
      treatment: r.treatment,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/healthrecords/${id}`, { withCredentials: true });
      setRecords(prev => prev.filter(r => r.record_id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading health records...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Health Records</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
        {/* chọn pet */}
        <select
          value={form.pet_id}
          onChange={e => setForm({ ...form, pet_id: e.target.value })}
          required
          className="border p-2"
        >
          <option value="">-- Select Pet --</option>
          {pets.map(p => (
            <option key={p.pet_id} value={p.pet_id}>
              {p.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={form.visit_date}
          onChange={e => setForm({ ...form, visit_date: e.target.value })}
          required
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Diagnosis"
          value={form.diagnosis}
          onChange={e => setForm({ ...form, diagnosis: e.target.value })}
          required
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Treatment"
          value={form.treatment}
          onChange={e => setForm({ ...form, treatment: e.target.value })}
          className="border p-2"
        />
        <button type="submit" className="bg-emerald-600 text-white px-3 py-2 rounded">
          {isEditing ? "Update" : "Add"}
        </button>
      </form>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>ID</th>
            <th>Pet</th>
            <th>Visit Date</th>
            <th>Diagnosis</th>
            <th>Treatment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map(r => (
            <tr key={r.record_id} className="text-center border-b">
              <td>{r.record_id}</td>
              <td>{r.pet?.name}</td>
              <td>{new Date(r.visit_date).toLocaleDateString()}</td>
              <td>{r.diagnosis}</td>
              <td>{r.treatment}</td>
              <td className="space-x-2">
                <button onClick={() => handleEdit(r)} className="bg-yellow-200 px-2 rounded">Edit</button>
                <button onClick={() => handleDelete(r.record_id)} className="bg-red-200 px-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
