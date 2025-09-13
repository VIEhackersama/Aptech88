import React from "react";
<<<<<<< HEAD
import { Outlet, NavLink } from "react-router-dom";

export default function AnimalShelter() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Animal Shelter</h1>
          <nav className="space-x-4">
            <NavLink
              to="adopt"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
            >
              Adopt
            </NavLink>
            <NavLink
              to="surrender"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
            >
              Surrender
            </NavLink>
            <NavLink
              to="howtoadopt"
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
            >
              How To Adopt
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Nội dung page con */}
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
=======
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
>>>>>>> a150ef960c879357bdd87e7d659a1e4bb349b8c7
  );
}
