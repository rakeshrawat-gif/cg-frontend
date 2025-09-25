import React, { useState } from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";
import downArrow from "../assets/images/Investors/down.png";

const Shares = () => {
  const [openSection, setOpenSection] = useState("Audited Financial Results");
  const [selectedYear, setSelectedYear] = useState("2024 - 2025");

  const years = ["2024 - 2025", "2023 - 2024", "2022 - 2023"];

  const financialData = {
    "Share Holding Pattern": {
      hasYearDropdown: true,
      items: [
        {
          title: "Quarter ended 31st December 2024",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title: "Quarter ended 30th September 2024",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title: "Quarter ended 30th June 2024",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title: "Quarter ended 31st March 2025",
          viewLink: "#",
          downloadLink: "#",
        },
      ],
    },
    "Listing Information": { items: [] },
    "10 Years Financial Highlights": { items: [] },
    "Stock Codes": { items: [] },
    "R&T Agent": { items: [] },
    "Co-ordinates": { items: [] },
    "Share Price Information": { items: [] },
    "SEBI Norms on KYC": { items: [] },
    ESOP: { items: [] },
    "Postal Ballot": { items: [] },
  };

  return (
    <div className="shares-wrapper">
      <h3 className="shares-links-heading">Quick Links</h3>

      {Object.keys(financialData).map((section, idx) => (
        <div
          key={idx}
          className={`shares-section ${openSection === section ? "open" : ""}`}
        >
          <div
            className="shares-section-header"
            onClick={() =>
              setOpenSection(openSection === section ? "" : section)
            }
          >
            <span>{section}</span>
            <img
              src={downArrow}
              alt="Toggle"
              className={`sh-arrow-icon ${
                openSection === section ? "rotated" : ""
              }`}
            />
          </div>

          {openSection === section && (
            <div className="shares-content">
              {financialData[section].hasYearDropdown && (
                <select
                  className="shares-year-select"
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
                  <div key={i} className="shares-item">
                    <div className="sh-item-title">{item.title}</div>
                    <div className="sh-item-actions">
                      <a
                        href={item.viewLink}
                        className="sh-action-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={viewIcon} alt="View" />
                        View
                      </a>
                      <a
                        href={item.downloadLink}
                        className="sh-action-link"
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

export default Shares;
