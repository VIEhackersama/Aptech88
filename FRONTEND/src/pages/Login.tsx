import React, { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (user) return <Navigate to="/" replace />;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await login(email, password); // login từ AuthContext (mock)
      navigate("/", { replace: true });
    } catch (e: any) {
      setErr(e?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10">
        <div className="mx-auto max-w-md">
          <h1 className="text-3xl font-extrabold text-slate-900">Sign in</h1>
          <p className="mt-2 text-slate-600">
            Demo only: Use any email & password. We’ll just save session in localStorage.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <div className="mt-1 flex items-center rounded-xl border border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20">
                <span className="pl-3 pr-2 text-slate-400">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-r-xl px-2 py-2 outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-1 flex items-center rounded-xl border border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20">
                <span className="pl-3 pr-2 text-slate-400">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-r-xl px-2 py-2 outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {err && <p className="text-sm text-red-600">{err}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
            >
              <LogIn size={18} />
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className="text-sm text-slate-600 text-center">
              Don’t have an account?{" "}
              <Link to="/register" className="text-emerald-700 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
