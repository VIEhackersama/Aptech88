import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

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
            {/* Route o day nhe ae: /profile, /contact, /adopt, ... */}
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}
