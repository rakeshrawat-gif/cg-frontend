import React, { useState } from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";
import downArrow from "../assets/images/Investors/down.png";

const Dividend = () => {
  const [openSection, setOpenSection] = useState("Audited Financial Results");
  const [selectedYear, setSelectedYear] = useState("2024 - 2025");

  const years = ["2024 - 2025", "2023 - 2024", "2022 - 2023"];

  const financialData = {
    "Interim Dividend- FY 2024-25": {
      hasYearDropdown: true,
      items: [
        {
          title:
            "Email Communication to Shareholder",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Annexure 1 - FORM 15G",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Annexure 2 - FORM 15H",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Annexure 3 - Declaration of category of shareholder",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Annexure 4 - TDS Declaration Format under Rule 37BA",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Annexure 5a - Easy Steps to File Online Form 10F for NRIs-PAN CASE",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Annexure 5b - Easy Steps to File Online Form 10F for NRIs-NO PAN CASE",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Annexure 6 - Declaration regarding Tax Residency",
          viewLink: "#",
          downloadLink: "#",
        },
        {
          title:
            "Appendix A for Rule 37BA",
          viewLink: "#",
          downloadLink: "#",
        },
      ],
    },
    "Interim Dividend- FY 2023-24": { items: [] },
    "Interim Dividend- FY 2022-23": { items: [] },
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
}

export default Dividend