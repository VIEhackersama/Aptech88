import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import AppointmentsPage from "./pages/AppointmentsPage";
import HealthRecordsPage from "./pages/HealthRecordsPage";
import Contact from "./pages/";
import Donate from "./pages/Donate";
import React from "react";


export default function App() {
  return (
    <div id="top">
      <AuthProvider>
        <Header />
        
        <main id="content" className="pt-[144px] md:pt-[144px] lg:pt-[168px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/care-tips/appointments" element={<AppointmentsPage />} />
            <Route path="/care-tips/health-records" element={<HealthRecordsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />

            {/* TODO: /profile, /contact, /adopt, ... */}
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}
