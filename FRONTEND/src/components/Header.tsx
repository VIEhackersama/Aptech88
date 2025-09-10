import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [language, setLanguage] = useState<"vi" | "en">(
    (i18n.language as "vi" | "en") || "vi"
  );
  const navigate = useNavigate();

  const navItems = [
    { name: t("NAV.HOME"), path: "/", children: [] },
    {
      name: t("NAV.ABOUT"),
      path: "/about",
      children: [
        { name: t("NAV.ABOUT_SECTIONS.HISTORY"), path: "/about#history" },
        { name: t("NAV.ABOUT_SECTIONS.VISION"), path: "/about#vision" },
        { name: t("NAV.ABOUT_SECTIONS.BUSINESS"), path: "/about#business" },
        { name: t("NAV.ABOUT_SECTIONS.ORG"), path: "/about#org" },
        { name: t("NAV.ABOUT_SECTIONS.CULTURE"), path: "/about#culture" },
        { name: t("NAV.ABOUT_SECTIONS.PROJECTS"), path: "/about#projects" }
      ],
    },
    {
      name: t("NAV.SERVICES"),
      path: "/services",
      children: [
        { name: t("NAV.SERVICES_SECTIONS.CUSTOMS"), path: "/services/customs" },
        { name: t("NAV.SERVICES_SECTIONS.SEA"), path: "/services/sea" },
        { name: t("NAV.SERVICES_SECTIONS.AIR"), path: "/services/air" },
        { name: t("NAV.SERVICES_SECTIONS.OVERSIZED"), path: "/services/oversized" },
        { name: t("NAV.SERVICES_SECTIONS.MULTIMODAL"), path: "/services/multimodal" },
        { name: t("NAV.SERVICES_SECTIONS.WAREHOUSE"), path: "/services/warehouse" },
        { name: t("NAV.SERVICES_SECTIONS.PROJECT"), path: "/services/project" }
      ],
    },
    {
      name: t("NAV.NEWS"),
      path: "/news",
      children: [
        { name: t("NAV.NEWS_SECTIONS.COMPANY"), path: "/news/company" },
        { name: t("NAV.NEWS_SECTIONS.INDUSTRY"), path: "/news/industry" },
      ],
    },
    { name: t("NAV.CAREERS"), path: "/careers", children: [] },
    { name: t("NAV.CONTACT"), path: "/contact", children: [] },
  ];

  const toggleLanguage = () => {
    const next = language === "vi" ? "en" : "vi";
    setLanguage(next);
    i18n.changeLanguage(next);
  };

  return (
    <header
      className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b-4"
      style={{ borderColor: "#FFC72C" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer transition-transform duration-300 hover:brightness-110"
          onClick={() => navigate("/")}
        >
          <img src="/assets/logo_swallow.jpg" alt="Logo" className="h-24 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center uppercase">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {item.children.length === 0 ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FFC72C] after:transition-all after:duration-300 hover:after:w-full ${
                      isActive
                        ? "text-[#FFC72C] font-semibold after:w-full"
                        : "text-gray-700 hover:text-[#FFC72C]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ) : (
                <span className="relative text-gray-700 hover:text-[#FFC72C] pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#FFC72C] after:transition-all after:duration-300 group-hover:after:w-full cursor-default flex items-center gap-1">
                  {item.name}
                  <ChevronDown size={16} />
                </span>
              )}

              {item.children.length > 0 && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-100 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                  <ul className="py-2">
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <a
                          href={child.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFF4CC] hover:text-[#FFC72C] hover:underline transition"
                        >
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Phone & Language */}
        <div className="hidden md:flex items-center gap-4 text-blue-800 font-semibold uppercase">
          {t("PHONE")}
          <button
            onClick={toggleLanguage}
            className="border border-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition"
          >
            🌐 {language === "vi" ? "EN" : "VI"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-blue-800">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 border-t border-gray-200 uppercase">
          {navItems.map((item, idx) => (
            <div key={idx} className="py-2">
              <NavLink
                to={item.path}
                className="font-semibold block mb-1 hover:text-[#FFC72C] hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
              {item.children.length > 0 && (
                <ul className="pl-4 space-y-1 text-sm text-gray-700">
                  {item.children.map((child, cidx) => (
                    <li key={cidx}>
                      <a
                        href={child.path}
                        className="block hover:text-[#FFC72C] hover:underline"
                        onClick={() => setMenuOpen(false)}
                      >
                        - {child.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <div className="mt-4 text-blue-800 font-semibold">{t("PHONE")}</div>
          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className="mt-2 border border-blue-700 text-blue-800 px-3 py-1 rounded w-full"
          >
            🌐 {language === "vi" ? "EN" : "VI"}
          </button>
        </div>
      )}
    </header>
  );
}
