import React, { useEffect, useRef, useState } from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";
import downArrow from "../assets/images/Investors/greydnwarw.svg";
import UpArrow from "../assets/images/Investors/greyuparw.svg";
import checkArrow from "../assets/images/Investors/Check.png";

const MergeAndDemergers = () => {
  const documents = [
    { title: "Certificate from CA- Non applicability of conditions specified<br/> under Para 5.16(a) of Sebi Circular", viewLink: "#", downloadLink: "#" },
    { title: "Compliance Report as per Part - A", viewLink: "#", downloadLink: "#" },
    { title: "Compliance Report as per Clause 49", viewLink: "#", downloadLink: "#" },
    { title: "Audited Financials", viewLink: "#", downloadLink: "#" },
    { title: "Pre & Post Shareholding Pattern", viewLink: "#", downloadLink: "#" },
    { title: "Fairness Opinion by MB", viewLink: "#", downloadLink: "#" },
    { title: "Audit Committee Report", viewLink: "#", downloadLink: "#" },
    { title: "Auditor Certificate 10(b) undertaking", viewLink: "#", downloadLink: "#" },
    { title: "Valuation Report from CA", viewLink: "#", downloadLink: "#" },
    { title: "Draft Scheme of Amalgamation", viewLink: "#", downloadLink: "#" },
    { title: "BSE Observation Letter", viewLink: "#", downloadLink: "#" },
    { title: "NSE Observation Letter", viewLink: "#", downloadLink: "#" },
    { title: "BSE and SEBI letter - Post approval of High Court", viewLink: "#", downloadLink: "#" },
    { title: "CG 5.16 (a)", viewLink: "#", downloadLink: "#" },
    { title: "Auditor's Certificate 5.16 (a)", viewLink: "#", downloadLink: "#" },
    { title: "Compliance report clause 49", viewLink: "#", downloadLink: "#" },
    { title: "CGCEL financials", viewLink: "#", downloadLink: "#" },
    { title: "Post shareholding pattern CGCEL", viewLink: "#", downloadLink: "#" },
    { title: "Pre shareholding pattern CGCEL", viewLink: "#", downloadLink: "#" },
    { title: "Post shareholding pattern CG", viewLink: "#", downloadLink: "#" },
    { title: "Pre shareholding pattern CG", viewLink: "#", downloadLink: "#" },
    { title: "Fairness opinion", viewLink: "#", downloadLink: "#" },
    { title: "Audit committee report", viewLink: "#", downloadLink: "#" },
    { title: "Valuation report", viewLink: "#", downloadLink: "#" },
    { title: "Scheme of Arrangement", viewLink: "#", downloadLink: "#" },
    { title: "No Objection Certificate - BSE", viewLink: "#", downloadLink: "#" },
    { title: "No Objection Certificate - NSE", viewLink: "#", downloadLink: "#" },
    { title: "Court Convened Meeting of the Equity Shareholders of Crompton<br/> Greaves Limited", viewLink: "#", downloadLink: "#" },
    { title: "Court Convened Meeting – Voting Results", viewLink: "#", downloadLink: "#" },
    { title: "Stock Exchange Disclosure - Approval of Scheme by Bombay High Court", viewLink: "#", downloadLink: "#" },
    { title: "Synopsis of the Scheme - Crompton Greaves", viewLink: "#", downloadLink: "#" },
    { title: "Letter to SE for Record date", viewLink: "#", downloadLink: "#" },
    { title: "Demeger - Cost of Acquisition", viewLink: "#", downloadLink: "#" },

  ];


  return (
    <section className="analy-list-sec">
      
      <div className="scheme-wrapper">
        {documents.map((doc, index) => (
          <div className="scheme-row" key={index}>
            <div className={`scheme-title ${index === 0 ? "highlighted" : ""}`} dangerouslySetInnerHTML={{ __html: doc.title }} />
              {/* {doc.title} */}
            {/* </div> */}
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

export default MergeAndDemergers