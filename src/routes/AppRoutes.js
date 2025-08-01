// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactUs from '../pages/ContactUs';
import About from '../pages/About';
import SubsidariAndJointVenture from '../pages/SubsidiariesJointVentures';
import SectorWeServe from '../pages/SectorWeServe';
import SwitchGear from '../pages/Switchgear';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about_cg" element={<About />} />
      <Route path="/subsidiaries-joint-ventures" element={<SubsidariAndJointVenture />} />
      <Route path="/sector-we-serve" element={<SectorWeServe />} />
      <Route path="/switchgear" element={<SwitchGear />} />
    </Routes>
  );
};

export default AppRoutes;
