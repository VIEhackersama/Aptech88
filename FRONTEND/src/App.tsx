// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// News
import CompanyNews from "./pages/news/CompanyNews";
import IndustryNews from "./pages/news/IndustryNews";

// Careers (Drawer/Modal + form)
import Careers from "./pages/CareersDrawer";

// Services pages
import ServicesOverview from "./components/ServicesOverview";
import Project from "./pages/services/Project";
import Sea from "./pages/services/Sea";
import Air from "./pages/services/Air";
import Customs from "./pages/services/Customs";
import Multimodal from "./pages/services/Multimodal";
import Warehouse from "./pages/services/Warehouse";
import ImportExport from "./pages/services/ImportExport";
import Oversized from "./pages/services/Oversized";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      {/* Spacer tránh bị Header (fixed + cao) che nội dung */}
      <div style={{ paddingTop: "150px" }}></div>

      <Routes>
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* News */}
        <Route path="/news/company" element={<CompanyNews />} />
        <Route path="/news/industry" element={<IndustryNews />} />

        {/* Careers */}
        <Route path="/careers" element={<Careers />} />

        {/* Services */}
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/project" element={<Project />} />
        <Route path="/services/sea" element={<Sea />} />
        <Route path="/services/air" element={<Air />} />
        <Route path="/services/customs" element={<Customs />} />
        <Route path="/services/multimodal" element={<Multimodal />} />
        <Route path="/services/warehouse" element={<Warehouse />} />
        <Route path="/services/importexport" element={<ImportExport />} />
        <Route path="/services/oversized" element={<Oversized />} />
        <Route path="/services/domestic" element={<Oversized />} />
      </Routes>

      <Footer />
    </Router>
  );
}
