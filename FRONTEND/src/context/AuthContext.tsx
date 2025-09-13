import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

type User = { id: number; name: string; email: string; role: string };

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (role: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const STORAGE_KEY = "furshield_auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      setUser(parsed.user);
      setToken(parsed.token);
    }
  }, []);

  const login = async (role: string, email: string, password: string) => {
    const res = await axios.post(`http://localhost:8000/api/${role}/login`, {
      email,
      password,
    });

    const { user, token } = res.data;
    setUser({ ...user, role });
    setToken(token);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ user: { ...user, role }, token })
    );
  };

  const logout = async () => {
    if (token) {
      await axios.post(
        `http://localhost:8000/api/logout`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
    }
    setUser(null);
    setToken(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const value = useMemo(() => ({ user, token, login, logout }), [user, token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
