import React, { useState } from "react";
import addressIcon from "../assets/images/contact/addreicn.svg";
import phoneIcon from "../assets/images/contact/phoneicn.svg";
import faxicon from "../assets/images/Investors/faxicn.svg";
import mailIcon from "../assets/images/contact/mailicn.svg";

const tabOptions = [
  "Investor Relations",
  "Registrar And Transfer Agents",
  "Materiality Contacts",
  "Calender of Events",
];

const InvestorRelationsHome = () => {
  const [selectedTab, setSelectedTab] = useState("Investor Relations");
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  return (
    <>
      <div className="tab-section">
        {tabOptions.map((tab, index) => (
          <button
            key={index}
            className={`relation-tab ${selectedTab === tab ? "active" : ""}`}
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
            Here, you will find detailed financial information, including Annual
            Reports, shareholding patterns, and key investor announcements,
            among other essential updates.
          </p>
        )}

        {selectedTab === "Registrar And Transfer Agents" && (
          <div className="registrarpoup">
            <p><b>Registrar & Transfer Agents</b></p>
            <p className="tech-subtitle investor-subtitile">
              Registrar And Transfer Agents The Company's Registrar and Transfer
              Agent is Datamatics Business Solutions Limited (Formerly known as
              Datamatics Financial Services Limited), which is a SEBI-registered
              Registrar and Transfer Agent. <span onClick={() => setShowPopup(true)}>Please click here for contact details</span>.
            </p>

            {/* Popup for Please click here for contact details */}
            {showPopup && (
              <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                <div className="registrarpopupinner">
                  <div
                    className="popup-content"
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                  >
                    <button className="popup-close" onClick={() => setShowPopup(false)}>
                      ✖
                    </button>

                    <h3>SHARE REGISTRY AGENT</h3>
                    <p>In compliance with SEBI’s guidelines vide Circular No. D&CC/FITTC/CIR-5/2002 dated December 27, 2002 and Circular No. D&CC/FITTC/CIR-18/2003 dated February 12 2003, the Company has appointed DATAMATICS FINANCIAL SERVICES LIMITED as its Share Transfer Agent with effect from 1st December, 2007 to handle the entire share registry work, in terms of both physical and electronic records.<br />
                      The investors can send all documents related to transfer, demat requests, share certificates and all communication directly to DATAMATICS FINANCIAL SERVICES LIMITED at the address given below :</p>


                    <div className="popup-datamaric">
                      <h3 style={{ textAlign: 'left' }}>DATAMATICS BUSINESS SOLUTIONS LIMITED </h3>
                      <p>(Formerly known as Datamatics Financial Services Limited)<br />
                        Unit : CG Power and Industrial Solutions Limited.</p>
                      <div className="datamatic-desc">
                        <p><img src={addressIcon} alt="address" /><span>Plot No B-5, Part B, Cross Lane,MIDC, Marol, Andheri (E), Mumbai 400 093</span></p>
                        <p><img src={phoneIcon} alt="phone" /><span>+91 22 6671 2151<br />
                          +91 22 6671 2160</span></p>
                        <p><img src={faxicon} alt="fax" /><span>+91 22 6671 2230</span></p>
                        <p><img src={mailIcon} alt="mail" /><span>cginvestors@datamaticsbpm.com</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p><b>CG INVESTOR SERVICES DEPARTMENT</b></p>
            <p className="tech-subtitle investor-subtitile">
              In addition to the R&T Agent, our <span onClick={() => setShowPopup2(true)}>Investor Services Department</span>,
              which is located at the Company’s Registered Office, will be happy
              to assist, in case investors experience any difficulties in their
              interaction with Datamatics Business Solutions Limited (Formerly
              known as Datamatics Financial Services Limited).
            </p>

            {/* Popup for Investor Services Department */}
            {showPopup2 && (
              <div className="popup-overlay" onClick={() => setShowPopup2(false)}>
                <div className="registrarpopupinner">
                  <div
                    className="popup-content"
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                  >
                    <button className="popup-close" onClick={() => setShowPopup2(false)}>
                      ✖
                    </button>

                    <h3>Co-Ordinates</h3>
                    <div className="topoup-dramticinrow">
                      <div className="popup-datamaric">
                        <h3 style={{ textAlign: 'left' }}>COMPLIANCE OFFICER : </h3>
                        <p>Regd Office:<br />
                          Sanjay Kumar Chowdhary</p>
                        <div className="datamatic-desc">
                          <p><img src={addressIcon} alt="address" /><span>CG Power and Industrial Solutions Limited<br /> 10th Floor, CG House,Dr Annie Besant Road,<br /> Worli, Mumbai - 400 030.</span></p>
                          <p><img src={phoneIcon} alt="phone" /><span>+91 22 2423 7777</span></p>
                          <p><img src={mailIcon} alt="mail" /><span>ho.secretarial@cgglobal.com</span></p>
                        </div>
                      </div>
                      <div className="popup-datamaric">
                        <h3 style={{ textAlign: 'left' }}>INVESTOR SERVICES : </h3>
                        <p>Investors are requested to register their grievances<br />
                          / complaints to: Secretarial Department</p>
                        <div className="datamatic-desc">
                          <p><img src={addressIcon} alt="address" /><span>CG Power and Industrial Solutions Limited<br /> 10th Floor, CG House, Dr Annie Besant Road,<br /> Worli, Mumbai - 400 030</span></p>
                          <p><img src={phoneIcon} alt="phone" /><span>+91 22 2423 7777</span></p>
                          <p><img src={mailIcon} alt="mail" /><span>investorservices@cgglobal.com</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {selectedTab === "Materiality Contacts" && (
          <div>
            <p className="tech-subtitle investor-subtitile">
              Mr. Amar Kaul, Managing Director & CEO [Key Managerial Personnel]
              is authorised to determine the materiality of an event or
              information for disclosure to the Stock Exchanges under the SEBI
              (Listing Obligations and Disclosure Requirements) Regulations,
              2015. Mr. Susheel Todi, Chief Financial Officer of the Company,
              shall advise the CEO/MD on the materiality of the event or
              information. The contact details of the said Key Managerial
              Personnel (‘KMP’) are given below:
            </p>
            <p className="tech-subtitle investor-subtitile">
              The contact details of the said Key Managerial Personnel (“KMP”)
              are given below:
            </p>
            <div className="totablescrollonmob">
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
          </div>
        )}

        {selectedTab === "Calender of Events" && (
          <div className="calendar-table totablescrollonmob">
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
    </>
  );
};

export default InvestorRelationsHome;
