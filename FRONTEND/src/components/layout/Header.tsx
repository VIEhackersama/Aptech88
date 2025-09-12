import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu, X, ChevronDown, Mail, MapPin, Phone, Search, User, LogOut, LogIn,
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
    onScroll();
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
        { name: "Pet profiles", path: "/about#history" },
        { name: "Track health records", path: "/about#vision" },
        { name: "Manage appointments", path: "/about#org" },
      ],
    },
    {
      name: "Animal shelters",
      path: "/adopt",
      children: [
        { name: "Adopt", path: "/adopt" },
        { name: "AdoptDetail", path: "/adopt/detail" },
        { name: "AnimalCard", path: "/adopt/animal-card" },
        { name: "Event", path: "/adopt/event" },
        { name: "ImUploader", path: "/adopt/im-uploader" },
        { name: "Surrender", path: "/adopt/surrender" },
      ],
    },
    {
      name: "Veterinarians",
      path: "/veter",
      children: [
        { name: "Appointment", path: "/veter/appointments" },
        { name: "Health records", path: "/veter/health-records" },
      ],
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
      {/* TOPBAR */}
      <div
  className="h-9 text-white text-[12.5px] md:text-[13px] 
             bg-[linear-gradient(90deg,#064e3b_0%,#10b981_50%,#6ee7b7_100%)]"
>
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

    <div className="hidden sm:flex items-center gap-2">
      <button
        onClick={() => navigate("/search")}
        className="inline-flex items-center gap-2 rounded-full px-2.5 py-[5px] hover:bg-white/10"
        aria-label="Search"
      >
        <Search size={16} /> <span className="hidden md:inline">Search</span>
      </button>
    </div>
  </div>
</div>


      {/* MAIN BAR */}
      <div
        className={[
          "border-b transition-shadow",
          "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white",
          scrolled ? "shadow-md border-slate-200" : "shadow-sm border-slate-100",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 h-[92px] flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-3 group">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8i-q5Q4ArOxfllfXYErbIhDhOn_uy5ESfw&s"
              alt="FurShield logo"
              className="h-12 w-auto rounded-md group-hover:scale-[1.02] transition-transform"
            />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[22px] font-extrabold tracking-wide text-slate-900">FurShield</span>
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
                        isActive
                          ? "font-semibold after:opacity-100"
                          : "after:opacity-0 group-hover:after:opacity-70",
                      ].join(" ")
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <>
                    <button className="px-3 py-2 text-[15px] uppercase tracking-wide text-slate-800 rounded-xl hover:text-emerald-700 hover:bg-emerald-50/70 inline-flex items-center gap-1">
                      {item.name} <ChevronDown size={18} />
                    </button>
                    <div className="absolute left-0 top-full mt-2 min-w-60 rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <ul className="py-1">
                        {item.children.map((child, cidx) => (
                          <li key={cidx}>
                            <NavLink
                              to={child.path}
                              className="block rounded-xl px-3 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700"
                              onClick={() => setMenuOpen(false)}
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

          {/* Auth buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {!user ? (
              <button
                onClick={() => navigate("/login")}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 px-3.5 py-2 text-[15px] font-semibold text-emerald-700 hover:bg-emerald-50"
              >
                <LogIn size={18} /> Login
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2"
                >
                  <div className="h-8 w-8 flex items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">
                    {initials}
                  </div>
                  <span className="font-semibold text-slate-800">{user.name}</span>
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 min-w-44 rounded-xl border border-slate-100 bg-white p-1 shadow-xl">
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        navigate("/profile");
                      }}
                      className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                    >
                      <User size={16} /> Profile
                    </button>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        logout();
                      }}
                      className="w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile toggles */}
          <div className="lg:hidden flex items-center gap-1">
            {!user ? (
             <button
  onClick={() => navigate("/login")}
  className="rounded-lg p-2 hover:bg-slate-100"
  aria-label="Đăng nhập"
>
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

        {/* Mobile overlay */}
        <div
          className={[
            "lg:hidden fixed inset-0 z-40 transition",
            menuOpen ? "visible bg-black/30" : "invisible bg-transparent",
          ].join(" ")}
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile sheet */}
        <nav
          id="mobile-nav"
          className={[
            "lg:hidden fixed top-[calc(36px+92px)] left-0 right-0 z-50 bg-white border-t border-slate-200",
            "transition-transform duration-300",
            menuOpen ? "translate-y-0" : "-translate-y-2 pointer-events-none opacity-0",
          ].join(" ")}
        >
          <div className="px-4 pb-4 pt-2">
            {navItems.map((item, idx) => (
              <div key={idx} className="py-2 border-b border-slate-200 last:border-none">
                <NavLink
                  to={item.path}
                  className="block py-1.5 font-semibold text-slate-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
                {item.children.length > 0 && (
                  <details className="mt-1">
                    <summary className="cursor-pointer text-sm text-slate-600">Submenu</summary>
                    <ul className="pl-4 mt-2 space-y-1 text-sm text-slate-700">
                      {item.children.map((child, cidx) => (
                        <li key={cidx}>
                          <NavLink
                            to={child.path}
                            className="block py-1 hover:text-emerald-700"
                            onClick={() => setMenuOpen(false)}
                          >
                            • {child.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            ))}

            {/* Auth actions mobile */}
            <div className="pt-3">
              {!user ? (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/login");
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 px-4 py-2 font-semibold text-emerald-700 hover:bg-emerald-50"
                >
                  <LogIn size={18} /> Login
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    logout();
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <LogOut size={18} /> Logout
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
