import React, { useEffect, useState } from "react";

interface Appointment {
  appt_id: string;
  pet_id: string;
  owner_id: string;
  vet_id: string;
  appointment_time: string;
  status: string;
}

const AppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetch("/api/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        📅 Appointments
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Pet ID</th>
              <th className="border p-2">Owner</th>
              <th className="border p-2">Vet ID</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.appt_id} className="hover:bg-gray-50">
                <td className="border p-2">{appt.appt_id}</td>
                <td className="border p-2">{appt.pet_id}</td>
                <td className="border p-2">{appt.owner_id}</td>
                <td className="border p-2">{appt.vet_id}</td>
                <td className="border p-2">
                  {new Date(appt.appointment_time).toLocaleString()}
                </td>
                <td
                  className={`border p-2 font-medium ${
                    appt.status === "Confirmed"
                      ? "text-green-600"
                      : appt.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {appt.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentsPage;
