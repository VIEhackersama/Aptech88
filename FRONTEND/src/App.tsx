import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import React from "react";
import Adopt from "./components/adoption/Adopt";
import Adoption from "./pages/Adoption";

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
            <Route path="/adopt" element={<Adoption />}>
</Route>
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}
