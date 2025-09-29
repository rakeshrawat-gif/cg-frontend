import React, { useEffect, useRef, useState } from "react";
import downArrow from "../components/assets/images/Investors/greydnwarw.svg";
import UpArrow from "../components/assets/images/Investors/greyuparw.svg";
import checkArrow from "../components/assets/images/Investors/Check.png";
import bannerImg from "../components/assets/images/Investors/inv.png";
import mobbannerImg from "../components/assets/images/Investors/mobbaner.webp";
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
import Archives from "../components/InvestorSections/Archives.jsx";
import MergeAndDemerger from "../components/InvestorSections/MergeAndDemergers.jsx";
import SmartODR from "../components/InvestorSections/SmartOdr.jsx";
import SharedRelatedInformation from "../components/InvestorSections/SharedRelatedInformation.jsx";
import BuybackOfShares from "../components/InvestorSections/BuybackOfShares.jsx";

import FAQs from "../components/InvestorSections/FAQs.jsx";

const InvestorHub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Investor Realtions Home");
  const [selectedTab, setSelectedTab] = useState("Investor Relations");
  const dropdownRef = useRef(null);

  const options = [
    "Analysts Interactions",
    "Archives",
    "Buyback of shares",
    "CG Cares (CSR)",
    "CG Shares",
    "Dividend",
    "FAQs",
    "Financials",
    "Info Under Regulation 46",
    "Investor Realtions Home",
    "Mergers and De-Mergers",
    // "Other Governance Disclosures",
    // "Shared Related Information",
    "Policies",
    "Qualified Institution Placements",
    "Scheme of Arrangement",
    "Smart ODR",
    "Stock Exchange Disclosures",
    "Unclaimed Dividend and Shares",
  ];

  const sectionComponentMap = {
    "Analysts Interactions": AnalystsInteractions,
    "Archives": Archives,
    "Buyback of shares": BuybackOfShares,
    "CG Cares (CSR)": CGCares,
    "CG Shares": SharedRelatedInformation,
    "Dividend": Dividend,
    "Shared Related Information":SharedRelatedInformation,
    FAQs: FAQs,
    Financials: Financials,
    "Info Under Regulation 46": InfoUnderRegulation46,
    "Investor Realtions Home": InvestorRelationsHome,
    "Mergers and De-Mergers": MergeAndDemerger,
    // Other government disclouser
    "Policies": Policies,
    "Qualified Institution Placements": QualifiedInstitutionPlacements,
    "Scheme of Arrangement": SchemeOfArrangement,
    "Smart ODR":SmartODR,
    "Stock Exchange Disclosures": StockExchangeDisclosures,
    // corporate social responsibility/shared related information ??
    "Unclaimed Dividend and Shares": UnclaimedDividendShares,
  };

  const tabOptions = [
    "Investor Relations",
    "Registrar And Transfer Agents",
    "Materiality Contacts",
    "Calender of Events",
  ];

  const headingMap = {
    "Investor Realtions Home": {
      title: "CG Investor Information Hub",
      description: "",
    },
    "Info Under Regulation 46": {
      title:
        "Information under Regulation 46 SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015",
      description: "",
    },
    "Qualified Institution Placements": {
      title: "Qualified Institution Placements",
      description: "",
    },
    "Scheme of Arrangement": {
      title: "Scheme of Arrangement",
      description: "",
    },
    Financials: {
      title: "Financials",
      description:
        "Get in-depth insights into our financials, including income statements, balance sheets, and cash flow reports.",
    },
    "CG Shares": {
      title: "Shared Related Information",
      description: "Find information related to our shares and stock codes.",
    },
    "Stock Exchange Disclosures": {
      title: "Stock Exchange Disclosures",
      description: "",
    },
    "Analysts Interactions": {
      title: "Analysts Interactions",
      description: "",
    },
    "Archives": {
      title: "Archives",
      description: "",
    },
    "Buyback of shares": {
      title: "Buyback of shares",
      description: "",
    },
    "Policies": {
      title: "Policies",
      description: "",
    },
    "CG Cares (CSR)": {
      title: "Corporate Social Responsibility",
      description: "",
    },
    Dividend: {
      title: "Dividend",
      description: "",
    },
    "Unclaimed Dividend and Shares": {
      title: "Unclaimed Dividend and Shares",
      description: "",
    },
    FAQs: {
      title: "FAQ's",
      description: "",
    },
    "Mergers and De-Mergers":
    {
      title: "Merger and demerger",
      description: "",
    },
    "Smart ODR":
    {
      title: "Smart ODR",
      description: "",
    },
    "Shared Related Information":{
      title: "Shared Related Information",
      description: "Find information related to our shares and stock codes.",
    },
  };

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
    <>
      <section className="inner-comoonbanner">
        <div className="comonban">
          <picture>
            <source media="(min-width:740px)" srcset={bannerImg} />
            <img src={mobbannerImg} alt="" />  {/* Mobile*/}
          </picture>
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

          <div className="investor-heading-row">
            <div className="common-heading-sec">
              <div className="comon-head-inner">
                {/* <h2>CG Investor Information Hub</h2> */}
                <h2>{headingMap[selected]?.title}</h2>
                {headingMap[selected]?.description && (
                  <p>{headingMap[selected].description}</p>
                )}
              </div>
            </div>
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

        </div>
      </section>

      <section className="tech-wrapper-invs">
        <div className="cust-container">

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
        </div>
      </section>
    </>
  );
};

export default InvestorHub;
