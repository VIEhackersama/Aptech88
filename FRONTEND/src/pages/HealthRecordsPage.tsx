import React, { useEffect, useState } from "react";
import { mockHealthRecords } from "../data/mockData";

interface HealthRecord {
  record_id: string;
  pet_id: string;
  vet_id: string;
  visit_date: string;
  diagnosis: string;
  treatment: string;
}

export default function HealthRecordsPage() {
  const [records, setRecords] = useState<HealthRecord[]>([]);

  useEffect(() => {
    setRecords(mockHealthRecords);
  }, []);

  const handleEdit = (id: string) => {
    alert(`Edit health record ${id}`);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa?")) {
      setRecords((prev) => prev.filter((rec) => rec.record_id !== id));
    }
  };

  return (
    <div className="w-full p-6">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">
        🐾 Health Records
      </h1>
      <div className="overflow-x-auto w-full rounded-2xl shadow-md border border-gray-200 bg-white">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-emerald-600 text-white text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Record ID</th>
              <th className="px-6 py-3">Pet</th>
              <th className="px-6 py-3">Vet</th>
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
                <td className="px-6 py-3">{rec.pet_id}</td>
                <td className="px-6 py-3">{rec.vet_id}</td>
                <td className="px-6 py-3">
                  {new Date(rec.visit_date).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">{rec.diagnosis}</td>
                <td className="px-6 py-3">{rec.treatment}</td>
                <td className="px-6 py-3 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(rec.record_id)}
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
