import React, { useEffect, useRef, useState } from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";
import downArrow from "../assets/images/Investors/greydnwarw.svg";
import UpArrow from "../assets/images/Investors/greyuparw.svg";
import checkArrow from "../assets/images/Investors/Check.png";

const BuybackOfShares = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("2013- 2014");
  const dropdownRef = useRef(null);


  const documents = [
    { title: "Public Advertisement regarding completion of Buy-back offer", viewLink: "#", downloadLink: "#" },
    { title: "Corrigendum to Public Announcement & Letter to BSE", viewLink: "#", downloadLink: "#" },
    { title: "Press Release - Update on buy-back of Equity Shares of Crompton<br/> Greaves Limited", viewLink: "#", downloadLink: "#" },
    { title: "Buy Back of CG Shares - Letter to BSE", viewLink: "#", downloadLink: "#" },
    { title: "Public Announcement & Letter to BSE", viewLink: "#", downloadLink: "#" },
    { title: "Buy - Back of Shares & Amalgamation of CG - ZIV Power<br/> Automation Solutions Limited", viewLink: "#", downloadLink: "#" },
  ];

  const options = [
    "2013- 2014",
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
    </section>
  )
}

export default BuybackOfShares