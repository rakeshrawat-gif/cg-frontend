import React, { useEffect, useRef, useState } from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";
import downArrow from "../assets/images/Investors/greydnwarw.svg";
import UpArrow from "../assets/images/Investors/greyuparw.svg";
import checkArrow from "../assets/images/Investors/Check.png";

const Archives = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("2021- 2022");
  const dropdownRef = useRef(null);


  const documents = [
    { title: "Disclosure under Reg 30 auditors appointment", viewLink: "#", downloadLink: "#" },
    { title: "PR-Cofely Fabricom lemants & CG win EBWHohe See contract", viewLink: "#", downloadLink: "#" },
    { title: "Proceedings of 79th AGM", viewLink: "#", downloadLink: "#" },
    { title: "Sharecapital-Reco-30June2016", viewLink: "#", downloadLink: "#" },
    { title: "Change in date of AGM", viewLink: "#", downloadLink: "#" },
    { title: "Regulation 30 - SPA", viewLink: "#", downloadLink: "#" },
    { title: "PR-CG-wins-35mil-USD-Indonesia", viewLink: "#", downloadLink: "#" },
    { title: "Analyst Call-Sale of T & D Business Outside India", viewLink: "#", downloadLink: "#" },
    { title: "PR-Cofely Fabricom lemants & CG win EBWHohe See contract", viewLink: "#", downloadLink: "#" },
    { title: "Outcome of BM -Record Date", viewLink: "#", downloadLink: "#" },
    { title: "Clarification Binding Offer", viewLink: "#", downloadLink: "#" },
    { title: "Appt_Secretarial_Auditor", viewLink: "#", downloadLink: "#" },
    { title: "BSE NSE - ROC Submission", viewLink: "#", downloadLink: "#" },
    { title: "NSE Disclosure-SMT", viewLink: "#", downloadLink: "#" },
    { title: "Disclosure - APIL", viewLink: "#", downloadLink: "#" },
    { title: "NSE Disclosure-Suresh Prabhu", viewLink: "#", downloadLink: "#" },
    { title: "Dividend Ad-9th Oct, 2014", viewLink: "#", downloadLink: "#" },
    { title: "Dividend Ad-21st May, 2014", viewLink: "#", downloadLink: "#" },
    { title: "Clause 30 &47 of the listing agreement & buy back", viewLink: "#", downloadLink: "#" },
    { title: "Clause 20- Listing agreement", viewLink: "#", downloadLink: "#" },
    { title: "Crompton Greaves enters into a Joint Venture", viewLink: "#", downloadLink: "#" },
    { title: "App-SApte-&-CGZIV-amalgamation", viewLink: "#", downloadLink: "#" },
    { title: "BSE-CL35A-AGMresults-03Aug12", viewLink: "#", downloadLink: "#" },
    { title: "BSE-Letter-Cl36-29Jun12", viewLink: "#", downloadLink: "#" },
  ];

  const options = [
    "2021- 2022",
    "2023- 2024",
    "2024- 2025"
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="analy-list-sec">
      <div className="analytics-inter-year">
        <div className="dropdown-container">
          <div className="custom-dropdown-wrapper analystyeardropdnw" ref={dropdownRef}>
            <div
              className="dropdown-toggle-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{selected}</span>
              <img src={isOpen ? UpArrow : downArrow} alt="toggle" />
            </div>
            {isOpen && (
              <ul className="dropdown-list">
                {options.map((option, idx) => (
                  <li
                    key={idx}
                    className={`dropdown-item-sm ${selected === option ? "selected" : ""
                      }`}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                    {selected === option && (
                      <img
                        src={checkArrow}
                        alt="selected"
                        className="check-icon"
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="scheme-wrapper">
        {documents.map((doc, index) => (
          <div className="scheme-row" key={index}>
            <div className={`scheme-title ${index === 0 ? "highlighted" : ""}`}>
              {doc.title}
            </div>
            <div className="scheme-actions">
              <a
                href={doc.viewLink}
                className="action-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={viewIcon} alt="View" />
                View
              </a>
              <a href={doc.downloadLink} className="action-link" download>
                <img src={downloadIcon} alt="Download" />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Archives