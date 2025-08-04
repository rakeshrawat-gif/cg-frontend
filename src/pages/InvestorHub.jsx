import React, { useEffect, useRef, useState } from "react";
import downArrow from "../components/assets/images/Investors/down.png";
import UpArrow from "../components/assets/images/Investors/up.png";
import checkArrow from "../components/assets/images/Investors/Check.png";
import bannerImg from "../components/assets/images/Investors/inv.png";
import InvestorRelationsHome from "../components/InvestorSections/InvestorRelationsHome.jsx";
import InfoUnderRegulation46 from "../components/InvestorSections/InfoUnderRegulation46.jsx";
import QualifiedInstitutionPlacements from "../components/InvestorSections/QualifiedInstitutionPlacements.jsx";
import SchemeOfArrangement from "../components/InvestorSections/SchemeOfArrangement.jsx";
import Financials from "../components/InvestorSections/Financials.jsx";
import CGShares from "../components/InvestorSections/CGShares";
import StockExchangeDisclosures from "../components/InvestorSections/StockExchangeDisclosures.jsx";
import AnalystsInteractions from "../components/InvestorSections/AnalystsInteractions.jsx";
import Policies from "../components/InvestorSections/Policies.jsx";
import CGCares from "../components/InvestorSections/CGCares.jsx";
import Dividend from "../components/InvestorSections/Dividend.jsx";
import UnclaimedDividendShares from "../components/InvestorSections/UnclaimedDividendShares.jsx";

const InvestorHub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Investor Realtions Home");
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

  const sectionComponentMap = {
    "Investor Realtions Home": InvestorRelationsHome,
    "Info Under Regulation 46": InfoUnderRegulation46,
    "Qualified Institution Placements": QualifiedInstitutionPlacements,
    "Scheme of Arrangement": SchemeOfArrangement,
    Financials: Financials,
    "CG Shares": CGShares,
    "Stock Exchange Disclosures": StockExchangeDisclosures,
    "Analysts Interactions": AnalystsInteractions,
    Policies: Policies,
    "CG Cares (CSR)": CGCares,
    Dividend: Dividend,
    "Unclaimed Dividend and Shares": UnclaimedDividendShares,
  };

  const tabOptions = [
    "Investor Relations",
    "Registrar And Transfer Agents",
    "Materiality Contacts",
    "Calender of Events",
  ];

  const headingMap = {
    "Investor Realtions Home": "CG Investor Information Hub",
    "Info Under Regulation 46":
      "Information under Regulation 46 SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
    "Qualified Institution Placements": "Qualified Institution Placements",
    "Scheme of Arrangement": "Scheme of Arrangement",
    Financials: "Financials",
    "CG Shares": "CG Shares",
    "Stock Exchange Disclosures": "Stock Exchange Disclosures",
    "Analysts Interactions": "Analysts Interactions",
    Policies: "Policies",
    "CG Cares (CSR)": "CG Cares (CSR)",
    Dividend: "Dividend",
    "Unclaimed Dividend and Shares": "Unclaimed Dividend and Shares",
  };

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

      <section className="commonfrst-sec">
        <div className="cust-container">
          <div className="breadcr-inner">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">About CG</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Investors
              </li>
            </ol>
          </div>

          <div className="common-heading-sec">
            <div className="comon-head-inner">
              {/* <h2>CG Investor Information Hub</h2> */}
              <h2>{headingMap[selected]}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-wrapper-invs ">
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
        {/* Dynamic Content Rendering */}
        {selected === "Investor Realtions Home" ? (
          <InvestorRelationsHome />
        ) : (
          <div className="tab-content">
            {sectionComponentMap[selected] ? (
              React.createElement(sectionComponentMap[selected])
            ) : (
              <p>Please select a valid section.</p>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default InvestorHub;
