import React, { useState } from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";
import downArrow from "../assets/images/Investors/down.png";

const Financials = () => {
  const [openSection, setOpenSection] = useState("Audited Financial Results");
  const [selectedYear, setSelectedYear] = useState("2024 - 2025");

  const years = ["2024 - 2025", "2023 - 2024", "2022 - 2023"];

  const financialData = {
    "Audited Financial Results": {
      hasYearDropdown: true,
      items: [
        {
          title:
            "Audited Consolidated Financial Results for the Year ended 31st March, 2025",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Audited Standalone Financial Results for the Year ended 31st March, 2025",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Audited Consolidated Financial Statements for the Year ended 31st March, 2025",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Audited Standalone Financial Statements for the Year ended 31st March, 2025",
          viewLink: "#",
          downloadLink: "#",
        },
      ],
    },
    "Annual Report": { 
      hasYearDropdown: true,
      items: [
        {
          title:
            "88th Annual Report",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Notice of 88th Annual General Meeting",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Annual Return",
          viewLink: "#",
          downloadLink: "#",
        },

      ] },
    "10 Years Financial Highlights": { items: [
      {
          title:
            "10 Years Financial Highlights",
          viewLink: "#",
          downloadLink: "#",
        },
    ] },
    "Unaudited Financial Results": { 
      hasYearDropdown: true,
      items: [
        {
          title:
            "Standalone Financial Results for the quarter ended 30th June 2025",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Consolidated Financial Results for the quarter ended 30th June 2025",
          viewLink: "#",
          downloadLink: "#",
        },
      ] },
    "Subsidiaries Financial Statements": { 
      hasYearDropdown: true,
      items: [
          {
          title:
            "CG PPI-Adhesive Products Limited",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "CG Power Solutions Limited",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "CG Power Equipments Limited",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Crompton Greaves Consumer Electricals Limited",
          viewLink: "#",
          downloadLink: "#",
        },
      ] },
    "Restated Financial Statements": { 
      hasYearDropdown: true,
      items: [
      {
          title:
            "CG Power and Industrial Solutions Limited - Standalone Financials",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "CG Power and Industrial Solutions Limited - Consolidated Financials",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "CG PPI-Adhesive Products Limited",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "CG Power Solutions Limited",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "CG Power Equipments Limited",
          viewLink: "#",
          downloadLink: "#",
        },
    ] },
  };

  return (
    <div className="financials-wrapper">
      <h3 className="quick-links-heading">Quick Links</h3>

      {Object.keys(financialData).map((section, idx) => (
        <div
          key={idx}
          className={`financial-section ${
            openSection === section ? "open" : ""
          }`}
        >
          <div
            className="financial-section-header"
            onClick={() =>
              setOpenSection(openSection === section ? "" : section)
            }
          >
            <span>{section}</span>
            <img
              src={downArrow}
              alt="Toggle"
              className={`fn-arrow-icon ${
                openSection === section ? "rotated" : ""
              }`}
            />
          </div>

          {openSection === section && (
            <div className="financial-content">
              {financialData[section].hasYearDropdown && (
                <select
                  className="year-select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  {years.map((year, i) => (
                    <option key={i} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              )}

              {financialData[section].items.length > 0 ? (
                financialData[section].items.map((item, i) => (
                  <div key={i} className="financial-item">
                    <div className="item-title">{item.title}</div>
                    <div className="item-actions">
                      <a
                        href={item.viewLink}
                        className="action-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={viewIcon} alt="View" />
                        View
                      </a>
                      <a
                        href={item.downloadLink}
                        className="action-link"
                        download
                      >
                        <img src={downloadIcon} alt="Download" />
                        Download
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-data">No records found</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Financials;
