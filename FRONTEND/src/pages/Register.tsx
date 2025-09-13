import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { user, register } = useAuth();
  const navigate = useNavigate();

  const [role, setRole] = useState("owners");
const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
  confirm: "",
  address: "",
  phonenumber: "",
  note:"",
  img_url: "",
});
  const [err, setErr] = useState<string | null>(null);

  if (user) return <Navigate to="/" replace />;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "role") setRole(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setErr("All fields are required");
      return;
    }
    if (form.password !== form.confirm) {
      setErr("Passwords do not match");
      return;
    }
    await register(role, form);
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="mx-auto max-w-md">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Create account
          </h1>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <select
              name="role"
              value={role}
              onChange={onChange}
              className="w-full border rounded-xl px-3 py-2"
            >
              <option value="owners">Pet Owner</option>
              <option value="veterinarians">Veterinarian</option>
              <option value="animalshelters">Animal Shelter</option>
            </select>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Name"
              className="w-full border rounded-xl px-3 py-2"
            />
            <input
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="Address"
              className="w-full border rounded-xl px-3 py-2"
            />
            <input
              name="phonenumber"
              value={form.phonenumber}
              onChange={onChange}
              placeholder="Phone number"
              className="w-full border rounded-xl px-3 py-2"
            />
            <input
              name="img_url"
              value={form.img_url}
              onChange={onChange}
              placeholder="Name"
              className="w-full border rounded-xl px-3 py-2"
            />
            <input
              name="note"
              value={form.note}
              onChange={onChange}
              placeholder="Note"
              className="w-full border rounded-xl px-3 py-2"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              className="w-full border rounded-xl px-3 py-2"
            />

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="Password"
              className="w-full border rounded-xl px-3 py-2"
            />
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={onChange}
              placeholder="Confirm password"
              className="w-full border rounded-xl px-3 py-2"
            />
            {err && <p className="text-sm text-red-600">{err}</p>}
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-xl"
            >
              Register
            </button>
            <p className="text-sm text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="text-emerald-700 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
