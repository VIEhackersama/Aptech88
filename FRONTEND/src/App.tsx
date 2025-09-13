import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
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
import AnimalShelter from "./pages/AnimalShelter";
import AdoptDetail from "./pages/adoption/AdoptDetail";
import Adopt from "./pages/adoption/Adopt";
import HowToAdopt from "./pages/adoption/HowToAdopt";
import VeterinariansPage from "./pages/Veterinarians";
import Appointments from "./pageone/Appointments";
// import Surrender from "./components/adoption/Surrender";


import Surrender from "./pages/adoption/Surrender";
import Events from "./pages/adoption/Event";
import contact from "./pages/Contact";


export default function App() {
  return (
    <div id="top">
      <AuthProvider>
        <Header />
        <main id="content" className="pt-[144px] md:pt-[144px] lg:pt-[168px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />

            <Route path="/veter" element={<VeterinariansPage />} />
            <Route path="/veter/appointments" element={<AppointmentsPage />} />
            <Route path="/veter/health-records" element={<HealthRecordsPage />} />



            <Route path="/veter" element={<VeterinariansPage />} />

            <Route path="/veter/appointments" element={<AppointmentsPage />} />
            <Route
              path="/veter/health-records"
              element={<HealthRecordsPage />}
            />

             <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/petowner" element={<PetOwners></PetOwners>}></Route>

            <Route
              path="/petappointment"
              element={<Appointments></Appointments>}
            ></Route>
            <Route path="/pethealth" element={<PetHealt></PetHealt>}></Route>
           
  <Route path="/adopt" element={<AnimalShelter />}>
    <Route path="adopt" element={<Adopt />} />
    <Route path="adopt/:id" element={<AdoptDetail />} />
    <Route path="surrender" element={<Surrender />} />
    <Route path="howtoadopt" element={<HowToAdopt />} />
  </Route> 
</Routes>

        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}