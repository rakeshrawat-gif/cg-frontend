import React, { useEffect, useRef, useState } from "react";
import downArrow from "../components/assets/images/Investors/down.png";
import UpArrow from "../components/assets/images/Investors/up.png";
import checkArrow from "../components/assets/images/Investors/Check.png";
import bannerImg from "../components/assets/images/Investors/inv.png";

const InvestorHub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Investor Relations Home");
  const [selectedTab, setSelectedTab] = useState("Investor Relations");
  const dropdownRef = useRef(null);

  const options = [
    "Investor Realtions Home",
    "Info Under Regulation 46",
    "Qualified Institution Placements",
    "Scheme of Arrangement",
    "Financials",
    "CG Shares",
    "Stock Exchange Disclosures",
    "Analysts Interactions",
    "Policies",
    "CG Cares (CSR)",
    "Dividend",
    "Unclaimed Dividend and Shares",
  ];

  const tabOptions = [
    "Investor Relations",
    "Registrar And Transfer Agents",
    "Materiality Contacts",
    "Calender of Events",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
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
    <>
      <section className="inner-comoonbanner">
        <div className="comonban">
          <img src={bannerImg} alt="Leadership and Top Management" />
        </div>
      </section>
      <section className="tech-wrapper commonfrst-sec">
        <div className="breadcrumb">
          Home &nbsp;|&nbsp; <span> Investors </span>
        </div>

        <h1 className="tech-title">CG Investor Information Hub</h1>

        <div className="dropdown-container">
          <div className="custom-dropdown-wrapper" ref={dropdownRef}>
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
                    className={`dropdown-item-sm ${
                      selected === option ? "selected" : ""
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

        <div className="tab-section">
          {tabOptions.map((tab, index) => (
            <button
              key={index}
              className={`tab ${selectedTab === tab ? "active" : ""}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {selectedTab === "Investor Relations" && (
            <p className="tech-subtitle investor-subtitile">
              We invite our valued investors to explore this dedicated space,
              designed to provide comprehensive insights and resources. <br />
              Here, you will find detailed financial information, including
              Annual Reports, shareholding patterns, and key investor
              announcements, among other essential updates.
            </p>
          )}

          {selectedTab === "Registrar And Transfer Agents" && (
            <div>
              <h3>Registrar & Transfer Agents</h3>
              <p className="tech-subtitle investor-subtitile">
                Registrar And Transfer Agents The Company's Registrar and
                Transfer Agent is Datamatics Business Solutions Limited
                (Formerly known as Datamatics Financial Services Limited), which
                is a SEBI-registered Registrar and Transfer Agent. Please click
                here for contact details.
              </p>

              <h3>CG INVESTOR SERVICES DEPARTMENT</h3>
              <p className="tech-subtitle investor-subtitile">
                In addition to the R&T Agent, our Investor Services Department,
                which is located at the Company’s Registered Office, will be
                happy to assist, in case investors experience any difficulties
                in their interaction with Datamatics Business Solutions Limited
                (Formerly known as Datamatics Financial Services Limited).
              </p>
            </div>
          )}

          {selectedTab === "Materiality Contacts" && (
            <div>
              <p className="tech-subtitle investor-subtitile">
                Mr. Amar Kaul, Managing Director & CEO [Key Managerial
                Personnel] is authorised to determine the materiality of an
                event or information for disclosure to the Stock Exchanges under
                the SEBI (Listing Obligations and Disclosure Requirements)
                Regulations, 2015. Mr. Susheel Todi, Chief Financial Officer of
                the Company, shall advise the CEO/MD on the materiality of the
                event or information. The contact details of the said Key
                Managerial Personnel (‘KMP’) are given below:
              </p>
              <p className="tech-subtitle investor-subtitile">
                The contact details of the said Key Managerial Personnel (“KMP”)
                are given below:
              </p>
              <table className="contact-table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name of the KMP</th>
                    <th>Contact Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>
                      Mr. Amar Kaul
                      <br />
                      <span>(Managing Director & CEO)</span>
                    </td>
                    <td>
                      CG House, 6th Floor, Dr. Annie Besant Road,
                      <br />
                      Worli, Mumbai – 400016
                      <br />
                      Telephone: +91 22 24237777
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {selectedTab === "Calender of Events" && (
            <div className="calendar-table">
              <table>
                <thead>
                  <tr>
                    <th>Financial Calendar</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="colored-td">
                      Financial Results for First Quarter
                    </td>
                    <td>On or before 15th of August</td>
                  </tr>
                  <tr>
                    <td className="colored-td">
                      Financial Results for Second Quarter
                    </td>
                    <td>On or before 15th of November</td>
                  </tr>
                  <tr>
                    <td className="colored-td">
                      Financial Results for Third Quarter
                    </td>
                    <td>On or before 15th of February</td>
                  </tr>
                  <tr>
                    <td className="colored-td">
                      Annual Accounts & Financial Results for Fourth quarter
                    </td>
                    <td>On or before 30th of May</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default InvestorHub;
