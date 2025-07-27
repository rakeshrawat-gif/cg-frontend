// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactUs from '../pages/ContactUs';
import About from '../pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about_cg" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
