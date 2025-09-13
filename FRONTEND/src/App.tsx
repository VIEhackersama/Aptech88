import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import AppointmentsPage from "./pages/AppointmentsPage";
import HealthRecordsPage from "./pages/HealthRecordsPage";
import PetOwners from "./pageone/PetOwners";
import PetHealt from "./pageone/HealthRecords";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import React from "react";

// Shelter
import AnimalShelter from "./pages/AnimalShelter";
import AdoptDetail from "./pages/adoption/AdoptDetail";
import Adopt from "./pages/adoption/Adopt";
import HowToAdopt from "./pages/adoption/HowToAdopt";
import Events from "./pages/adoption/Event";
import Surrender from "./pages/adoption/Surrender";

// Veterinarians
import VeterinariansPage from "./pages/Veterinarians";
import Appointments from "./pageone/Appointments";

export default function App() {
  return (
    <div id="top">
      <AuthProvider>
        <Header />
        <main id="content" className="pt-[144px] md:pt-[144px] lg:pt-[168px]">
          <Routes>
            {/* Trang chính */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Liên hệ & Quyên góp */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />

            {/* Veterinarians */}
            <Route path="/veter" element={<VeterinariansPage />} />
            <Route path="/veter/appointments" element={<AppointmentsPage />} />
            <Route path="/veter/health-records" element={<HealthRecordsPage />} />

            {/* Chủ nuôi thú cưng */}
            <Route path="/petowner" element={<PetOwners />} />
            <Route path="/petappointment" element={<Appointments />} />
            <Route path="/pethealth" element={<PetHealt />} />

            {/* Animal Shelter + Subpages */}
            <Route path="/shelter" element={<AnimalShelter />}>
              <Route path="adopt" element={<Adopt />} />
              <Route path="adopt/:id" element={<AdoptDetail />} />
              <Route path="surrender" element={<Surrender />} />
              <Route path="events" element={<Events />} />
              <Route path="howtoadopt" element={<HowToAdopt />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}
