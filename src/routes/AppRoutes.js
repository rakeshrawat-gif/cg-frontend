// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About";
import SubsidiariesJointVentures from "../pages/SubsidiariesJointVentures";
import Leadership from "../pages/LeadershipManagement";
import LeadingWithTechnology from "../pages/LeadingWithTechnology";
import Enviormental from "../pages/Enviormental";
import ESGRating from "../pages/ESGRating";
import InvestorHub from "../pages/InvestorHub";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/worldwide_contact" element={<ContactUs />} />
      <Route path="/about_cg" element={<About />} />
      <Route path="/our_leadership" element={<Leadership />} />
      <Route path="/subsidiaries_jv" element={<SubsidiariesJointVentures />} />
      <Route path="/tehcnology" element={<LeadingWithTechnology />} />
      <Route path="/esg" element={<Enviormental />} />
      <Route path="/esg2" element={<ESGRating />} />
      <Route path="/investor" element={<InvestorHub />} />
    </Routes>
  );
};

export default AppRoutes;
