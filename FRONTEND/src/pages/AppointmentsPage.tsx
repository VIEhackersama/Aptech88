import React, { useEffect, useState } from "react";
import axios from "axios";

interface Appointment {
  appt_id: number;
  pet: { name: string };
  owner: { name: string };

  veterinarian?: { name: string };

  appointment_time: string;
  status: string;
}

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<"owner" | "vet" | null>(null);

  const fetchAppointments = async () => {
    try {

   
      const res = await axios.get("http://127.0.0.1:8000/api/appointments", {
        withCredentials: true,
      });
      setAppointments(res.data);

     
      const role = res.headers["x-user-role"];
      if (role === "vet" || role === "owner") {
        setUserRole(role);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {

      const res = await axios.put(
        `http://127.0.0.1:8000/api/appointments/${id}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prev) =>
        prev.map((a) => (a.appt_id === id ? res.data : a))
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  if (loading) return <p>Loading appointments...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>ID</th>
            <th>Pet</th>
            <th>Owner</th>

            <th>Vet</th>
            <th>Time</th>
            <th>Status</th>
            {userRole && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.appt_id} className="text-center border-b">
              <td>{a.appt_id}</td>
              <td>{a.pet?.name}</td>
              <td>{a.owner?.name}</td>

              <td>{a.veterinarian?.name ?? "-"}</td>
              <td>{new Date(a.appointment_time).toLocaleString()}</td>
              <td>{a.status}</td>
              {userRole && (
                <td className="space-x-2">
                  {userRole === "vet" ? (
                    <>
                      <button
                        onClick={() => updateStatus(a.appt_id, "Scheduled")}
                        className="bg-blue-200 px-2 rounded"
                      >
                        Scheduled
                      </button>
                      <button
                        onClick={() => updateStatus(a.appt_id, "Completed")}
                        className="bg-green-200 px-2 rounded"
                      >
                        Completed
                      </button>
                      <button
                        onClick={() => updateStatus(a.appt_id, "Cancelled")}
                        className="bg-red-200 px-2 rounded"
                      >
                        Cancelled
                      </button>
                    </>
                  ) : (
                    userRole === "owner" && (
                      <button
                        onClick={() => updateStatus(a.appt_id, "Cancelled")}
                        className="bg-red-200 px-2 rounded"
                      >
                        Cancel
                      </button>
                    )
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
