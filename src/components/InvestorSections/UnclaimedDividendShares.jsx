import React, { useEffect, useRef, useState } from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";
import downArrow from "../assets/images/Investors/greydnwarw.svg";
import UpArrow from "../assets/images/Investors/greyuparw.svg";
import checkArrow from "../assets/images/Investors/Check.png";

const UnclaimedDividendShares = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("2021- 2022");
  const dropdownRef = useRef(null);


  const documents = [
    { title: "2nd Interim Dividend 2014-2015", viewLink: "#", downloadLink: "#" },
    { title: "1st Interim Dividend 2014-2015", viewLink: "#", downloadLink: "#" },
    { title: "List of shareholders whose equity shares are due to be transferred<br/> to IEPF Authority on 02nd March, 2022", viewLink: "#", downloadLink: "#" },
    { title: "List of shareholders whose equity shares are due to be transferred to IEPF<br/> Authority on November 2021", viewLink: "#", downloadLink: "#" },
    { title: "List of shareholders whose equity shares are due to be transferred<br/> to IEPF Authority on September 2021", viewLink: "#", downloadLink: "#" },
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
    <section className="analy-list-sec unclaimed-dividers">
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
            <div className={`scheme-title ${index === 0 ? "highlighted" : ""}`} dangerouslySetInnerHTML={{ __html: doc.title }} />
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

      <div className="unclaimtable">


        <table className="contact-table">
          <thead>
            <tr>
              <th>Nodal Officer</th>
              <th>Contact Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Mr Sanjay Kumar Chowdhary<br />
                (Company Secretary and<br /> Compliance Officer)
                <br />
              </td>
              <td>
                CG Power and Industrial Solutions Limited
                <br />
                10th Floor, CG House,
                <br />
                Dr Annie Beasant Road,
                <br />
                Worli, Mumbai - 400 030
                <br />
                E-mail ID : investorservices@cgglobal.com
                <br />
                Tel No.: +91 22 2423 7777
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default UnclaimedDividendShares