// src/pages/VeterinariansPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";

export default function VeterinariansPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="pt-[120px] px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Veterinarians Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/veter/appointments")}
            className="p-6 bg-emerald-600 text-white rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Manage Appointments
          </button>
          <button
            onClick={() => navigate("/veter/health-records")}
            className="p-6 bg-emerald-600 text-white rounded-xl shadow-lg hover:bg-emerald-700 transition"
          >
            Track Health Records
          </button>
        </div>
      </div>
    </>
  );
}
