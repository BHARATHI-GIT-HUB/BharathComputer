import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Layouts/Header/header";
import Footer from "./Layouts/Footer/footer";
import MainBody from "./Layouts/MainBody/main-body";
import ContactUs from "./Routes/ContactUs/contact-us";
import AboutUs from "./Routes/AboutUs/about-us";
import ComputerRepair from "./Routes/ComputerRepair/computer-service";
import CustomDesktop from "./Routes/CustomDesktop/computer-desktop";
import DataRecovery from "./Routes/DataRecovery/data-recovery";
import LaptopService from "./Routes/LaptopService/laptop-service";
import MakeAppoiment from "./Routes/MakeAppoinment/make-appoinment";
import ChipService from "./Routes/ChipService/chip-service";
import LiquidDamage from "./Routes/LiquidDamage/liquid-damage";
import WindowsRepair from "./Routes/Pages/WindowsRepair/windows-repair";
import ViruseMalware from "./Routes/Pages/ViruseMalware/viruse-malware";
import PageScrollTop from "./PageScrollTop";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Fragment>
      <PageScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/Computer-Repair" element={<ComputerRepair />} />
        <Route path="/Custom-Desktop" element={<CustomDesktop />} />
        <Route path="/Data-Recovery" element={<DataRecovery />} />
        <Route path="/Laptop-Service" element={<LaptopService />} />
        <Route path="/Make-Appoinment" element={<MakeAppoiment />} />
        <Route path="/Chip-Service" element={<ChipService />} />
        <Route path="/Liquid-Damage" element={<LiquidDamage />} />
        <Route path="/Windows-Repair" element={<WindowsRepair />} />
        <Route path="/Viruse-Malware" element={<ViruseMalware />} />
      </Routes>
      <Footer />
    </Fragment>
  </Router>
);
