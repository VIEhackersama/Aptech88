import React, { useEffect, useState } from "react";

interface HealthRecord {
  record_id: string;
  pet_id: string;
  vet_id: string;
  visit_date: string;
  diagnosis: string;
  treatment: string;
}

const HealthRecordsPage: React.FC = () => {
  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>([]);

  useEffect(() => {
    fetch("/api/health-records")
      .then((res) => res.json())
      .then((data) => setHealthRecords(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        🩺 Health Records
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-green-100">
            <tr>
              <th className="border p-2">Record ID</th>
              <th className="border p-2">Pet ID</th>
              <th className="border p-2">Vet ID</th>
              <th className="border p-2">Visit Date</th>
              <th className="border p-2">Diagnosis</th>
              <th className="border p-2">Treatment</th>
            </tr>
          </thead>
          <tbody>
            {healthRecords.map((rec) => (
              <tr key={rec.record_id} className="hover:bg-gray-50">
                <td className="border p-2">{rec.record_id}</td>
                <td className="border p-2">{rec.pet_id}</td>
                <td className="border p-2">{rec.vet_id}</td>
                <td className="border p-2">
                  {new Date(rec.visit_date).toLocaleDateString()}
                </td>
                <td className="border p-2">{rec.diagnosis}</td>
                <td className="border p-2">{rec.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthRecordsPage;
