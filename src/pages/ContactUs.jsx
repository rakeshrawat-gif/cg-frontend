import React, { useEffect, useState } from "react";
import L from "leaflet";
import bannerImg from "../components/assets/images/contact/contactbaner.jpg";
import addressIcon from "../components/assets/images/contact/addreicn.svg";
import phoneIcon from "../components/assets/images/contact/phoneicn.svg";
import mailIcon from "../components/assets/images/contact/mailicn.svg";
import diagArrow from "../components/assets/images/contact/diagonalarw.svg";
import transformersIcon from "../components/assets/images/contact/transformricn.svg";
import switchgearIcon from "../components/assets/images/contact/switchgearicn.svg";
import motorsIcon from "../components/assets/images/contact/motorsicn.svg";
import drivesIcon from "../components/assets/images/contact/drivesautomationicn.svg";
import consumerIcon from "../components/assets/images/contact/consumer-productsicn.svg";
import railwaysIcon from "../components/assets/images/contact/railwaysicn.svg";

import indiaflag from "../components/assets/images/contact/indiaflag.svg";
import germanflag from "../components/assets/images/contact/germanflag.svg";
import netherflag from "../components/assets/images/contact/netherflag.svg";
import swedenflag from "../components/assets/images/contact/swedenflag.svg";
import mideastafricaflag from "../components/assets/images/contact/mideastafricaflag.svg";

import '../components/assets/css/contactus.css';

const categoryIcons = {
  Transformers: transformersIcon,
  Switchgears: switchgearIcon,
  Motors: motorsIcon,
  "Drives & Automation": drivesIcon,
  "Consumer Products": consumerIcon,
  Railways: railwaysIcon,
};

const countries = [
  { name: "India", flag: indiaflag },
  { name: "Germany", flag: germanflag },
  { name: "The Netherlands", flag: netherflag },
  { name: "Sweden", flag: swedenflag },
  { name: "Middle East and Africa", flag: mideastafricaflag },
];

const locations = [
  {
    title: "Sales Office – Noida",
    category: "Transformers",
    jobtitle: "Distribution Transformer & Power Transformer Division",
    country: "India",
    address: "CG Power and Industrial Solutions Limited Unit No. 123, 2nd Floor, Tower A, The Corenthum Tower, Sector 62, Noida-201301, Uttar Pradesh, India.",
    phone: "+91 9654443350, +91 8373902334",
    email: "sundeep.sharotri@cgglobal.com, jaiprakash.sharma@cgglobal.com",
    coords: [28.5355, 77.3910],
  },
  {
    title: "Sales Office – ",
    category: "Switchgears",
    jobtitle: "Distribution Transformer & Power Transformer Division",
    country: "India",
    address: "CG Power and Industrial Solutions Limited Unit No. 123, 2nd Floor, Tower A, The Corenthum Tower, Sector 62, Noida-201301, Uttar Pradesh, India.",
    phone: "+91 9654443350, +91 8373902334",
    email: "sundeep.sharotri@cgglobal.com, jaiprakash.sharma@cgglobal.com",
    coords: [28.5355, 77.3910],
  },
  {
    title: "Sales Office – ",
    category: "Motors",
    jobtitle: "-",
    country: "India",
    address: "-",
    phone: "-",
    email: "-",
    coords: [28.5355, 77.3910],
  },
  {
    title: "Sales Office – New York",
    category: "Drives & Automation",
    jobtitle: "Distribution Transformer & Power Transformer Division",
    country: "USA",
    address: "100 Park Avenue, New York, NY 10017",
    phone: "+1-212-456-7890",
    email: "ny@cgglobal.com",
    coords: [40.7128, -74.0060],
  },
  {
    title: "Sales Office – ",
    category: "Consumer Products",
    jobtitle: "-",
    country: "India",
    address: "-",
    phone: "-",
    email: "-",
    coords: [28.5355, 77.3910],
  },
  {
    title: "Sales Office – Bavaria",
    category: "Railways",
    jobtitle: "Power Transformer Division",
    country: "Germany",
    address: "Franz-Josef-Strauß-Ring 1, 80539 Munich, Germany",
    phone: "+49 (0) 9972 94 01",
    email: "bavaria@cgglobal.com",
    coords: [48.1436, 11.5777],
  },
  // ... Add more entries
];

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCategory, setSelectedCategory] = useState("Transformers");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [map, setMap] = useState(null);
  const [markersLayer, setMarkersLayer] = useState(null);

  const categories = [...new Set(locations.map((l) => l.category))];

  useEffect(() => {
    if (!map) {
      const existingMap = L.DomUtil.get("map");
      if (existingMap._leaflet_id) {
        existingMap._leaflet_id = null; // Force remove if already initialized
      }

      const leafletMap = L.map("map").setView([20.5937, 78.9629], 4);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(leafletMap);

      const markerGroup = L.layerGroup().addTo(leafletMap);
      setMap(leafletMap);
      setMarkersLayer(markerGroup);
    }
  }, []);

  useEffect(() => {
    if (map && markersLayer) {
      markersLayer.clearLayers();
      const filtered = locations.filter(
        (loc) => loc.category === selectedCategory && loc.country === selectedCountry
      );

      filtered.forEach((loc) => {
        L.marker(loc.coords).addTo(markersLayer).bindPopup(`<b>${loc.title}</b><br>${loc.address}`);
      });

      if (filtered.length > 0) {
        map.setView(filtered[0].coords, 5);
      }
    }
  }, [selectedCategory, selectedCountry, map, markersLayer]);

  const filteredLocations = locations.filter(
    (loc) => loc.category === selectedCategory && loc.country === selectedCountry
  );

  return (
    <>
      {/* Banner */}
      <section className="inner-comoonbanner">
        <div className="comonban">
          <img src={bannerImg} alt="banner" />
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="commonfrst-sec">
        <div className="cust-container">
          <div className="breadcr-inner">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </div>
          <div className="common-heading-sec">
            <div className="comon-head-inner">
              <h2>Reach Us Worldwide</h2>
              <p>Explore CG’s extensive network of operations spanning worldwide. Reach out to our global offices for support, partnerships, or inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map, Filter, Cards */}
      <section className="mapfilter-sec">
        <div className="cust-container">
          {/* Tabs */}
          <div className="contacttabs">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`tab ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <img src={categoryIcons[cat]} alt={cat} /> {cat}
              </button>
            ))}
          </div>

          {/* Country Dropdown */}
          <div className="mapfiltercontrols">
            <div className="custom-select-wrapper">
              <div
                className={`custom-select-country ${dropdownOpen ? "open" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <div className="selected-option">
                  <img
                    src={countries.find((c) => c.name === selectedCountry).flag}
                    alt={selectedCountry}
                  />
                  <span>{selectedCountry}</span>
                  <i className="fas fa-chevron-down dropdown-arrow"></i>
                </div>
                <ul
                  className="select-options"
                  style={{ display: dropdownOpen ? "block" : "none" }}
                >
                  {countries.map((c, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setSelectedCountry(c.name);
                        setDropdownOpen(false);
                      }}
                    >
                      <img src={c.flag} alt={c.name} /> {c.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map */}
          <div id="map" style={{ height: "400px", width: "100%", margin: "20px 0" }}></div>

          {/* Cards */}
          <div className="locitem-card-grid">
            {filteredLocations.map((loc, idx) => (
              <div className="loc-card" key={idx}>
                <div className="loc-card-header">
                  <span>{loc.title}</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direction"
                  >
                    Get Directions <img src={diagArrow} alt="arrow" />
                  </a>
                </div>
                <div className="loc-card-desc">
                  <h4>{loc.jobtitle}</h4>
                  <p><img src={addressIcon} alt="address" /><span>{loc.address}</span></p>
                  <p><img src={phoneIcon} alt="phone" /><span>{loc.phone.split(",").join(" / ")}</span></p>
                  <p><img src={mailIcon} alt="mail" /><span>{loc.email.split(",").join(" / ")}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
