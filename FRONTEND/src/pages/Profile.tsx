import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="mx-auto max-w-md border rounded-xl shadow p-6 bg-slate-50">
          <h1 className="text-2xl font-extrabold text-slate-900 mb-4">
            Profile
          </h1>

          <div className="space-y-3 text-slate-700">
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Role:</span> {user.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
