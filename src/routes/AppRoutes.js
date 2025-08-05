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
import SectorWeServe from '../pages/SectorWeServe';
import SwitchGear from '../pages/Switchgear';
import AboutOurPurposeAndValue from '../pages/AboutOurPurposeAndValue';
import CgInTheNews from '../pages/CgInTheNews';
import ConsumerDurable from '../pages/ConsumerDurable';
import ProductDisplay from '../pages/ProductDisplay';

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
      <Route path="/sector-we-serve" element={<SectorWeServe />} />
      <Route path="/switchgear" element={<SwitchGear />} />
      <Route path="/about-our-purpose-and-value" element={<AboutOurPurposeAndValue />} />
      <Route path="/cg-in-the-news" element={<CgInTheNews />} />
      <Route path="/consumer-durable" element={<ConsumerDurable />} />
      <Route path="/product-detail" element={<ProductDisplay />} />
      
    </Routes>
  );
};

export default AppRoutes;
