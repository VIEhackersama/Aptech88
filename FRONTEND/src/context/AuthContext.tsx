import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (role: string, data: any) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // lấy user từ localStorage khi load lại trang
  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // giả lập login (frontend-only)
  const login = async (email: string, password: string) => {
    // ở đây chưa check password, chỉ demo
    const fakeUser: User = {
      id: Date.now(),
      name: email.split("@")[0],
      email,
      role: "owners",
    };
    setUser(fakeUser);
    localStorage.setItem("auth_user", JSON.stringify(fakeUser));
  };

  // giả lập register (frontend-only)
  const register = async (role: string, data: any) => {
    const fakeUser: User = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      role,
    };
    setUser(fakeUser);
    localStorage.setItem("auth_user", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
