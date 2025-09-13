import React from "react";
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
  );
}
