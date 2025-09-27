import React, { useState } from "react";
import downangl from "../assets/images/Investors/greydnwarw.svg";
import upangl from "../assets/images/Investors/greyuparw.svg";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";
import downArrow from "../assets/images/Investors/down.png";

const SharedRelatedInformation = () => {
  const [openSection, setOpenSection] = useState("Audited Financial Results");
  const [selectedYear, setSelectedYear] = useState("2024 - 2025");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const years = ["2024 - 2025", "2023 - 2024", "2022 - 2023"];

  const financialData = {
    "Share Holding Pattern": {
      items: [
        <div className="accoritem">
            <select className="year-select" value="">
              <option value="">2024 - 2025</option>
              <option value="">2023 - 2024</option>
              <option value="">2022 - 2023</option>
            </select>
          <div className="financial-item">
            <div className="item-title">
              Quarter ended 31st December 2024
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
          <div className="financial-item">
            <div className="item-title">
              Quarter ended 30th September 2024
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
          <div className="financial-item">
            <div className="item-title">
              Quarter ended 30th June 2024
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
          <div className="financial-item">
            <div className="item-title">
              Quarter ended 31st March 2025
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
        </div>
      ]
    },
    "Listing Information": {
      items: [
        <div className="accoritem">
          <p>The Company's shares are listed and traded on BSE Limited and the National Stock Exchange of India Limited.</p>
          <p>The details of the stock exchanges on which the Company's shares are listed are :</p>
          <div class="totablescrollonmob">
            <table class="contact-table">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>ADDRESS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BSE Limited</td>
                  <td>Phiroze Jeejeebhoy Towers,Dalal Street, Mumbai 400 001</td>
                </tr>
                <tr>
                  <td>National Stock Exchange of India Ltd</td>
                  <td>Exchange Plaza, Bandra-Kurla Complex, Bandra (E), Mumbai 400 05</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>The Company's payment of listing fees are up to date.</p>
        </div>
      ]
    },
    "Stock Codes": {
      items: [
        <div className="accoritem">
          <div class="totablescrollonmob">
            <table class="contact-table">
              <thead>
                <tr>
                  <th></th>
                  <th>CODE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BSE, Mumbai</td>
                  <td>500093</td>
                </tr>
                <tr>
                  <td>National Stock Exchange</td>
                  <td>CGPOWER</td>
                </tr>
                <tr>
                  <td>ISIN</td>
                  <td>INE067A01029 (NSDL & CDSL)</td>
                </tr>
                <tr>
                  <td>Corporate Identifi cation Number</td>
                  <td>L99999MH1937PLC002641</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ]
    },
    "R&T Agent": {
      items: [
        <div className="accoritem">
          <h3>SHARE REGISTRY AGENT</h3>
          <p>In compliance with SEBI’s guidelines vide Circular No. D&CC/FITTC/CIR-5/2002 dated December 27, 2002 and Circular No. D&CC/FITTC/CIR-18/2003 dated February 12 2003, the Company has appointed DATAMATICS FINANCIAL SERVICES LIMITED as its Share Transfer Agent with effect from 1st December, 2007 to handle the entire share registry work, in terms of both physical and electronic records.</p>
          <p>The investors can send all documents related to transfer, demat requests, share certificates and all communication directly to DATAMATICS BUSINESS SOLUTIONS LIMITED at the address given below :</p>
          <p><b>Regd Office:</b></p>
          <p>DATAMATICS BUSINESS SOLUTIONS LIMITED<br />
            (Formerly known as Datamatics Financial Services Limited)<br />
            Unit : CG Power and Industrial Solutions Limited.<br />
            Plot No A-16 & 17, Part B, Cross Lane,<br />
            MIDC, Marol,<br />
            Andheri (E), Mumbai 400 093</p>
          <p><b>Tel. No.</b>: +91 22 6671 2151 to 6671 2160<br />
            <b>Fax No.</b>: +91 22 6671 2230<br />
            <b>Email</b> : cginvestors@datamaticsbpm.com</p>
        </div>
      ]
    },
    "Co-ordinates": {
      items: [
        <div className="accoritem">
          <div className="accordian-inner-row">
            <div className="accoiriner-col">
              <h3>COMPLIANCE OFFICER :</h3>
              <p><b>Regd Office:</b></p>
              <p><b>Mr. Sanjay Kumar Chowdhary</b><br />
                CG Power and Industrial Solutions Limited<br />
                10th Floor, CG House,<br />
                Dr Annie Besant Road,<br />
                Worli, Mumbai - 400 030.</p>
              <p><b>Email</b> : ho.secretarial@cgglobal.com<br />
                <b>Tel. No.</b>: +91 22 2423 7777</p>
            </div>
            <div className="accoiriner-col">
              <h3>INVESTOR SERVICES :</h3>
              <p>Investors are requested to register their grievances /<br /> complaints to:</p>
              <p><b>Secretarial Department</b><br />
                CG Power and Industrial Solutions Limited<br />
                10th Floor, CG House,<br />
                Dr Annie Besant Road,<br />
                Worli, Mumbai - 400 030.</p>
              <p><b>Email</b> : investorservices@cgglobal.com<br />
                <b>Tel. No.</b>: +91 22 2423 7777</p>
            </div>
          </div>
        </div>
      ]
    },
    "Share Price Information": {
      items: [
        <div className="accoritem">
          <div className="financial-item">
            <div className="item-title">
              NSE Share Price
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
            </div>
          </div>
          <div className="financial-item">
            <div className="item-title">
              BSE Share Price
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
            </div>
          </div>
        </div>
      ]
    },
    "SEBI Norms on KYC": {
      items: [
        <div className="accoritem">
          <p className="tounsderline">SEBI Norms for Furnishing PAN, KYC details and Nominations</p>
          <p>SEBI has, vide the Circular No. SEBI/HO/MIRSD/MIRSD_RTAMB/P/CIR/2021/655 dated November 3, 2021, mandated the furnishing of PAN, Address with PIN, email address, mobile number, bank account details and nomination by holders of physical securities. Folios wherein any one of the cited document / details are not available on or after April 01, 2023, shall be frozen by the Registrars and Transfer Agent of the Company (RTA).</p>
          <p><b>Download Forms</b></p>
          <div className="financial-item">
            <div className="item-title">
              Form ISR-1 Form for updation of KYC details
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
          <div className="financial-item">
            <div className="item-title">
              Form ISR-2 Specimen signature
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
          <div className="financial-item">
            <div className="item-title">
              Form SH-13 Nomination Form
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
          <div className="financial-item">
            <div className="item-title">
              Form ISR-3 Declaration to Opting out Nomination
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
          <div className="financial-item">
            <div className="item-title">
              Form SH-14 Cancellation of Nomination
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
          <div className="financial-item">
            <div className="item-title">
              Form ISR-4 Request for issue of Duplicate Certificate and other Service Requests
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
        </div>
      ]
    },
    "ESOP": {
      items: [
        <div className="accoritem">
          <select className="year-select" value="">
              <option value="">2021 - 2022</option>
            </select>
          <div className="financial-item">
            <div className="item-title">
              ESOP Disclosure - FY 2021-22
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
        </div>
      ]
    },
    "Postal Ballot": { items: [
        <div className="accoritem">
          <select className="year-select" value="">
              <option value="">2021 - 2022</option>
              <option value="">2022 - 2023</option>
              <option value="">2023 - 2024</option>
            </select>
          <div className="financial-item">
            <div className="item-title">
             Notice of Postal Ballot dated 24th July, 2024
            </div>
            <div className="item-actions">
              <a href="" className="action-link" target="_blank"><img src={viewIcon} alt="" />View</a>
              <a href="" className="action-link" target="_blank"><img src={downloadIcon} alt="" />Download</a>
            </div>
          </div>
        </div>
    ] },
  };

  return (
    <div className="financials-wrapper">
      <h3 className="quick-links-heading">Quick Links</h3>
      {Object.entries(financialData).map(([title, section], index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={index} className={`financial-section ${isOpen ? "open" : ""}`}>
            {/* Header */}
            <div
              className="financial-section-header"
              onClick={() => toggleAccordion(index)}
            >
              <span>{title}</span>
              <img
                src={isOpen ? upangl  : downangl}
                alt={isOpen ? "Collapse" : "Expand"}
              />
            </div>

            {/* Content */}
            {isOpen && (
              <div className="financial-content">
                {section.items && section.items.length > 0 ? (
                  section.items.map((item, i) => (
                    <div key={i} className="accordion-item">
                      {item}
                    </div>
                  ))
                ) : (
                  <p>No data available</p>
                )}
              </div>
            )}
          </div>
        );
      })}

    </div>
  );
}

export default SharedRelatedInformation