import React, { useEffect, useState } from "react";
import { mockAppointments } from "../data/mockData";

interface Appointment {
  appt_id: string;
  pet_id: string;
  owner_id: string;
  vet_id: string;
  appointment_time: string;
  status: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    setAppointments(mockAppointments);
  }, []);

  const handleEdit = (id: string) => {
    alert(`Edit appointment ${id}`);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xóa?")) {
      setAppointments((prev) => prev.filter((appt) => appt.appt_id !== id));
    }
  };

  return (
    <div className="w-full p-6">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">
        📅 Appointments
      </h1>
      <div className="overflow-x-auto w-full rounded-2xl shadow-md border border-gray-200 bg-white">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-emerald-600 text-white text-sm uppercase">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Pet</th>
              <th className="px-6 py-3">Owner</th>
              <th className="px-6 py-3">Vet</th>
              <th className="px-6 py-3">Time</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt, idx) => (
              <tr
                key={appt.appt_id}
                className={`hover:bg-emerald-50 transition ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-3 font-medium">{appt.appt_id}</td>
                <td className="px-6 py-3">{appt.pet_id}</td>
                <td className="px-6 py-3">{appt.owner_id}</td>
                <td className="px-6 py-3">{appt.vet_id}</td>
                <td className="px-6 py-3">
                  {new Date(appt.appointment_time).toLocaleString()}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      appt.status === "Scheduled"
                        ? "bg-blue-100 text-blue-700"
                        : appt.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {appt.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(appt.appt_id)}
                    className="px-3 py-1 rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(appt.appt_id)}
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
