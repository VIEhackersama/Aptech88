import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu, X, ChevronDown, Mail, MapPin, Phone, User, LogOut, LogIn,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const GREEN = { dark: "#065f46", primary: "#059669", light: "#34d399" };

  const navItems = [
    { name: "Home", path: "/", children: [] },
    {
      name: "Pet's owner",
      path: "/about",
      children: [
        { name: "Pet profiles", path: "/about#profiles" },
        { name: "Track health records", path: "/about#health" },
        { name: "Manage appointments", path: "/about#appointments" },
      ],
    },
    {
      name: "Animal shelters",
      path: "/adopt",
      children: [
        { name: "Adopt", path: "/adopt" },
        { name: "Adopt Detail", path: "/adopt/detail" },
        { name: "Animal Card", path: "/adopt/animal-card" },
        { name: "Event", path: "/adopt/event" },
        { name: "Uploader", path: "/adopt/im-uploader" },
        { name: "Surrender", path: "/adopt/surrender" },
      ],
    },
    {
      name: "Veterinarians",
      path: "/veter",

      children: [],

    },
    { name: "Contact", path: "/contact", children: [] },
  ];

  const initials =
    (user?.name || "")
      .trim()
      .split(/\s+/)
      .map((s) => s[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "U";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Topbar */}
     <div className="h-9 text-white text-xs md:text-sm bg-gradient-to-r from-emerald-900 via-emerald-600 to-emerald-400">
  <div className="mx-auto max-w-7xl h-full px-4 md:px-6 flex items-center justify-between">
    <div className="flex items-center gap-5 whitespace-nowrap overflow-x-auto no-scrollbar">
      <span className="inline-flex items-center gap-1.5">
        <MapPin size={15} /> Ha Noi — Viet Nam
      </span>
      <a href="mailto:hello@furshield.app" className="inline-flex items-center gap-1.5 hover:underline">
        <Mail size={15} /> hello@furshield.app
      </a>
      <a href="tel:+84393201068" className="inline-flex items-center gap-1.5 hover:underline">
        <Phone size={15} /> (+84) 39 320 1068
      </a>
    </div>
  </div>
</div>


      {/* Main header */}
      <div
        className={[
          "border-b transition-shadow bg-white/80 backdrop-blur",
          scrolled ? "shadow-md border-slate-200" : "shadow-sm border-slate-100",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 h-[92px] flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8i-q5Q4ArOxfllfXYErbIhDhOn_uy5ESfw&s"
              alt="Logo"
              className="h-12 w-auto rounded-md"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[22px] font-extrabold text-slate-900">FurShield</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                Every paw deserves a shield
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.children.length === 0 ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      [
                        "px-3 py-2 text-[15px] uppercase tracking-wide text-slate-800 rounded-xl transition-all",
                        "hover:text-emerald-700 hover:bg-emerald-50/70",
                        "relative after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-emerald-600",
                        isActive ? "font-semibold after:opacity-100" : "after:opacity-0 group-hover:after:opacity-70",
                      ].join(" ")
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <>
                    <button className="px-3 py-2 text-[15px] uppercase tracking-wide text-slate-800 rounded-xl inline-flex items-center gap-1 hover:text-emerald-700 hover:bg-emerald-50/70">
                      {item.name}
                      <ChevronDown size={18} />
                    </button>
                    <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all absolute left-0 top-full mt-2 min-w-60 rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl">
                      <ul className="py-1">
                        {item.children.map((child, cidx) => (
                          <li key={cidx}>
                            <NavLink
                              to={child.path}
                              className="block rounded-xl px-3 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700"
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            {!user ? (
              <>
                <button
                  onClick={() => navigate("/register")}
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 px-3 py-2 text-[15px] font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  Register
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-[15px] font-semibold text-white hover:bg-emerald-700"
                >
                  <LogIn size={18} /> Login
                </button>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
                    {initials}
                  </div>
                  <span className="font-semibold">{user.name}</span>
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 min-w-44 rounded-xl border border-slate-100 bg-white p-1 shadow-xl">
                    <button
                      className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                      onClick={() => navigate("/profile")}
                    >
                      <User size={16} /> Profile
                    </button>
                    <button
                      className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                      onClick={logout}
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-1">
            {!user ? (
              <button onClick={() => navigate("/login")} className="rounded-lg p-2 hover:bg-slate-100">
                <LogIn size={22} />
              </button>
            ) : (
              <button
                onClick={() => navigate("/profile")}
                className="rounded-full h-9 w-9 bg-emerald-600 text-white font-bold"
              >
                {initials}
              </button>
            )}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="rounded-lg p-2 hover:bg-slate-100"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black/30" onClick={() => setMenuOpen(false)} />
        )}

        {/* Mobile nav */}
        <nav
          className={[
            "lg:hidden fixed top-[calc(36px+92px)] left-0 right-0 z-50 bg-white border-t border-slate-200",
            "transition-transform duration-300",
            menuOpen ? "translate-y-0" : "-translate-y-2 opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <div className="px-4 pb-4 pt-2">
            {navItems.map((item, idx) => (
              <div key={idx} className="py-2 border-b border-slate-200 last:border-none">
                <NavLink to={item.path} className="block py-1.5 font-semibold" onClick={() => setMenuOpen(false)}>
                  {item.name}
                </NavLink>
                {item.children.length > 0 && (
                  <ul className="pl-4 mt-1 space-y-1 text-sm">
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <NavLink to={child.path} className="block py-1 hover:text-emerald-700" onClick={() => setMenuOpen(false)}>
                          • {child.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="pt-3">
              {!user ? (
                <button onClick={() => navigate("/login")} className="w-full rounded-xl border border-emerald-200 px-4 py-2 font-semibold text-emerald-700 hover:bg-emerald-50">
                  Login
                </button>
              ) : (
                <button onClick={logout} className="w-full rounded-xl border border-slate-200 px-4 py-2 font-semibold hover:bg-slate-50">
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
