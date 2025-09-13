import React, { useEffect, useState } from "react";
import axios from "axios";

interface Appointment {
  appt_id: number;
  pet: {
    name: string;
  };
  owner: {
    name: string;
  };
  appointment_time: string;
  status: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  // Load data từ API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("/api/appointments", {
          withCredentials: true, // nếu backend dùng session/cookie
        });
        setAppointments(res.data);
      } catch (err) {
        console.error("Error fetching appointments", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  // Bác sĩ cập nhật trạng thái
  const handleUpdateStatus = async (id: number, status: string) => {
    try {
      const res = await axios.put(`/api/appointments/${id}`, { status });
      setAppointments((prev) =>
        prev.map((appt) =>
          appt.appt_id === id ? { ...appt, status: res.data.status } : appt
        )
      );
    } catch (err) {
      console.error("Error updating appointment", err);
    }
  };

  if (loading) {
    return <p className="p-6">Đang tải dữ liệu...</p>;
  }

  return (
    <div className="w-full p-6">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700">
        📅 Appointments (Bác sĩ thú y)
      </h1>
      <div className="overflow-x-auto w-full rounded-2xl shadow-md border border-gray-200 bg-white">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-emerald-600 text-white text-sm uppercase">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Pet</th>
              <th className="px-6 py-3">Owner</th>
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
                <td className="px-6 py-3">{appt.pet?.name || "N/A"}</td>
                <td className="px-6 py-3">{appt.owner?.name || "N/A"}</td>
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
                    onClick={() =>
                      handleUpdateStatus(appt.appt_id, "Scheduled")
                    }
                    className="px-3 py-1 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    Scheduled
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateStatus(appt.appt_id, "Completed")
                    }
                    className="px-3 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
                  >
                    Completed
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateStatus(appt.appt_id, "Cancelled")
                    }
                    className="px-3 py-1 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Cancelled
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
