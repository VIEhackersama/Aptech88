import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";

export default function AnimalShelter() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="pt-[120px] px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Animal Shelter Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={() => navigate("/animalshelter/adopt")}
            className="p-6 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition"
          >
            Adopt a Pet
          </button>
          <button
            onClick={() => navigate("/animalshelter/events")}
            className="p-6 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition"
          >
            View Events
          </button>
          <button
            onClick={() => navigate("/animalshelter/surrender")}
            className="p-6 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition"
          >
            Surrender a Pet
          </button>
        </div>
      </div>
    </>
  );
}
