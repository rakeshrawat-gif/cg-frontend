// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactUs from '../pages/ContactUs';
import About from '../pages/About';
import SubsidiariesJointVentures from '../pages/SubsidiariesJointVentures';
import Leadership from '../pages/LeadershipManagement';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/worldwide_contact" element={<ContactUs />} />
      <Route path="/about_cg" element={<About />} />
      <Route path="/our_leadership" element={<Leadership />} />
      <Route path="/subsidiaries_jv" element={<SubsidiariesJointVentures />} />
    </Routes>
  );
};

export default AppRoutes;
