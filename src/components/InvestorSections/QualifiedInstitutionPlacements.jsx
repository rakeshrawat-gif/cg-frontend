import React, { useState } from "react";

const QualifiedInstitutionPlacements = () => {
    const [activeTab, setActiveTab] = useState("Preliminary Placement Document");
    const [showDisclaimerPopup, setShowDisclaimerPopup] = useState(false);
    const [showDeniedPopup, setShowDeniedPopup] = useState(false);
    const [showDocumentPopup, setShowDocumentPopup] = useState(false);

    return (
        <div className="placement-doc-section">
            <div className="cust-container">
                {/* <div className="placement-tabs">
                <button
                    className={activeTab === "Preliminary Placement Document" ? "active" : ""}
                    onClick={() => setActiveTab("Preliminary Placement Document")}
                >
                    Preliminary Placement Document
                </button>
                <button
                    className={activeTab === "Placement Document" ? "active" : ""}
                    onClick={() => setActiveTab("Placement Document")}
                >
                    Placement Document
                </button>
            </div> */}

                <div className="placementTabs">
                    <button
                        className={activeTab === "Preliminary Placement Document" ? "active" : ""}
                        onClick={() => setActiveTab("Preliminary Placement Document")}
                    >
                        Preliminary Placement Document
                    </button>
                    <button
                        className={activeTab === "Placement Document" ? "active" : ""}
                        onClick={() => setActiveTab("Placement Document")}
                    >
                        Placement Document
                    </button>
                </div>

                <div className="placement-content">
                    <p className="titlePopup">DISCLAIMER</p>
                    <p className="popPara">
                        IMPORTANT: You must read and agree with the terms and conditions of the following disclaimer
                        before continuing.<br /><br />

                        <span className="paraFirstQualify">PLEASE READ THIS NOTICE CAREFULLY. IT APPLIES TO ALL PERSONS WHO VIEW THIS WEBSITE.
                            VIEWING THIS INFORMATION MAY NOT BE LAWFUL IN CERTAIN JURISDICTIONS. PLEASE NOTE THAT
                            THE DISCLAIMER SET OUT BELOW MAY BE ALTERED OR UPDATED. YOU SHOULD READ IT IN FULL EACH
                            TIME YOU VISIT THE WEBSITE. BY ACCESSING THIS INFORMATION ON THIS WEBSITE, YOU AGREE TO THE
                            TERMS AND CONDITIONS BELOW, INCLUDING ANY MODIFICATIONS THAT MAY BE MADE TO THEM FROM TIME
                            TO TIME.<br /><br />

                            THESE MATERIALS ARE NOT DIRECTED AT OR INTENDED TO BE ACCESSED BY PERSONS LOCATED IN THE
                            UNITED STATES OR OTHER JURISDICTIONS OUTSIDE INDIA AND ARE INTENDED FOR DISTRIBUTION TO,
                            AND USE BY, RESIDENTS OF INDIA ONLY.</span><br /><br />

                        THESE MATERIALS ARE BEING MADE AVAILABLE ON THIS WEBSITE BY CG POWER AND INDUSTRIAL SOLUTIONS
                        LIMITED (THE “ COMPANY”) SOLELY TO COMPLY WITH THE SECURITIES AND EXCHANGE BOARD OF INDIA
                        (ISSUE OF CAPITAL AND DISCLOSURE REQUIREMENTS) REGULATIONS, 2018, AS AMENDED (“ SEBI ICDR
                        REGULATIONS”) AND THE COMPANIES ACT, 2013 AND THE RULES MADE THEREUNDER, EACH AS AMENDED
                        (“ COMPANIES ACT”). MAKING THE PRELIMINARY PLACEMENT DOCUMENT DATED JUNE 30, 2025AVAILABLE
                        IN ELECTRONIC FORMAT ON THIS WEBSITE DOES NOT CONSTITUTE AN OFFER TO SELL OR THE SOLICITATION
                        OF AN OFFER TO BUY EQUITY SHARES IN THE PROPOSED QUALIFIED INSTITUTIONS PLACEMENT (“ ISSUE”)
                        IN ANY JURISDICTION.
                        NOTHING HEREIN CONSTITUTES AN OFFER OF SECURITIES FOR SALE IN ANY JURISDICTION WHERE IT IS
                        UNLAWFUL TO DO SO. YOU ARE REMINDED THAT YOU HAVE ACCESSED THE PRELIMINARY PLACEMENT
                        DOCUMENT ON THE BASIS THAT YOU ARE A PERSON INTO WHOSE POSSESSION THE DOCUMENTS MAY BE
                        LAWFULLY DELIVERED IN ACCORDANCE WITH THE LAWS OF THE JURISDICTION IN WHICH YOU ARE LOCATED.<br /><br />

                        THIS DISCLAIMER APPLIES TO ALL PERSONS WHO VIEW THIS WEBSITE. THE FOLLOWING DISCLAIMER APPLIES
                        TO THE PRELIMINARY PLACEMENT DOCUMENT IN RELATION TO THE PROPOSED QUALIFIED INSTITUTIONS PLACEMENT
                        OF EQUITY SHARES (“ EQUITY SHARES”) OF THE COMPANY FILED WITH BSE LIMITED AND THE NATIONAL STOCK
                        EXCHANGE OF INDIA LIMITED (“ STOCK EXCHANGES”) (THE “ PRELIMINARY PLACEMENT DOCUMENT”). YOU ARE
                        ADVISED TO READ THIS DISCLAIMER CAREFULLY BEFORE READING, ACCESSING OR MAKING ANY OTHER USE OF
                        THE PRELIMINARY PLACEMENT DOCUMENT.<br /><br />

                        THE SECURITIES DESCRIBED IN THE PRELIMINARY PLACEMENT DOCUMENT HAVE NOT BEEN, AND WILL NOT BE,
                        REGISTERED UNDER THE U.S. SECURITIES ACT OF 1933, AS AMENDED (THE “ U.S. SECURITIES ACT”),
                        OR THE SECURITIES LAWS OF ANY STATE OF THE UNITED STATES AND UNLESS SO REGISTERED, MAY NOT
                        BE OFFERED OR SOLD WITHIN THE UNITED STATES EXCEPT PURSUANT TO A TRANSACTION EXEMPT FROM, OR
                        NOT SUBJECT TO, THE REGISTRATION REQUIREMENTS OF THE U.S. SECURITIES ACT AND APPLICABLE
                        STATE SECURITIES LAWS. ACCORDINGLY, THE SECURITIES ARE BEING OFFERED AND SOLD (A) IN THE
                        UNITED STATES ONLY TO PERSONS REASONABLY BELIEVED TO BE QUALIFIED INSTITUTIONAL BUYERS
                        (AS DEFINED IN RULE 144A UNDER THE U.S. SECURITIES ACT) PURSUANT TO SECTION 4(a)(2) OR ANOTHER
                        EXEMPTION UNDER THE U.S. SECURITIES ACT, AND (B) OUTSIDE THE UNITED STATES IN OFFSHORE
                        TRANSACTIONS IN RELIANCE ON REGULATION S UNDER THE U.S. SECURITIES ACT; OR PURSUANT TO
                        ANOTHER EXEMPTION FROM, OR IN TRANSACTIONS NOT SUBJECT TO, THE REGISTRATION REQUIREMENTS
                        OF THE U.S. SECURITIES ACT.<br /><br />

                        THE PRELIMINARY PLACEMENT DOCUMENT PRESENTED HEREIN IS PLACED SOLELY TO COMPLY WITH THE
                        PROVISIONS OF CHAPTER VI OF THE SEBI ICDR REGULATIONS,SECTIONS42 AND 62 OF THE COMPANIES
                        ACT AND RULE 14 OF THE PAS RULES AN OTHER PROVISIONS OF THE COMPANIES ACT, 2013. ACCESS TO
                        THIS WEBSITE SHALL NOT FORM THE BASIS OF, OR BE RELIED UPON IN CONNECTION WITH, ANY CONTRACT
                        OR COMMITMENT WHATSOEVER. WE ARE NOT SOLICITING ANY ACTION OR DECISION BASED ON THE INFORMATION
                        ON THIS WEBSITE.<br /><br />

                        THE PRELIMINARY PLACEMENT DOCUMENT HAS NOT BEEN AND WILL NOT BE FILED AS A PROSPECTUS OR A
                        STATEMENT IN LIEU OF PROSPECTUS WITH ANY REGISTRAR OF COMPANIES IN INDIA UNDER THE COMPANIES
                        ACT.THE PRELIMINARY PLACEMENT DOCUMENT SHALL BE FILED AS A PRIVATE PLACEMENT OFFER LETTER
                        WITH THE STOCK EXCHANGES. THE PRELIMINARY PLACEMENT DOCUMENTIS EXCLUSIVE TO THE RECIPIENT
                        AND IS NOT INTENDED AND DOES NOT CONSTITUTEAN OFFER OR A SOLICITATION OR INVITATION OF AN
                        OFFER TO SUBSCRIBE TO THE SECURITIES DESCRIBED IN THE PRELIMINARY PLACEMENT DOCUMENTTO THE
                        GENERAL PUBLIC OR ANY PERSON OR CLASS OF INVESTORS OTHER THAN ELIGIBLE QUALIFIED INSTITUTIONAL
                        BUYERS, AS DEFINED IN THE SEBI ICDR REGULATIONS. THE PRELIMINARY PLACEMENT DOCUMENT HAS
                        NOT BEEN REVIEWED AND APPROVED BY ANY REGULATORY AUTHORITY IN INDIA OR ABROAD, INCLUDING THE
                        SECURITIES AND EXCHANGE BOARD OF INDIA, RESERVE BANK OF INDIA, ANY REGISTRAR OF COMPANIES IN
                        INDIA OR ANY STOCK EXCHANGE IN INDIA. THE PRELIMINARY PLACEMENT DOCUMENT IS NOT AND SHOULD
                        NOT BE CONSTRUED AS AN INVITATION, OFFER OR SALE OF ANY SECURITIES TO THE PUBLIC IN INDIA.<br /><br />

                        NONE OF THE COMPANY, THE BOOK RUNNING LEAD MANAGERSAND ANY OF THEIR RESPECTIVE AFFILIATES,
                        ACCEPTS ANY LIABILITY WHATSOEVER, DIRECT OR INDIRECT, THAT MAY ARISE FROM THE USE OF THE
                        INFORMATION CONTAINED ON THIS WEBSITE. ACCESS TO THIS WEBSITE OR THE PRELIMINARY PLACEMENT
                        DOCUMENTDOES NOT CONSTITUTE A RECOMMENDATION BY THE COMPANY, THEBOOK RUNNING LEAD MANAGERS,
                        ANY OF THEIR RESPECTIVE AFFILIATES OR ANY OTHER PARTY TO SUBSCRIBE TO OR BUY OR SELL THE
                        EQUITY SHARES. MAKING PRESS ANNOUNCEMENTS AND OTHER DOCUMENTS AVAILABLE IN ELECTRONIC FORMAT
                        DOES NOT CONSTITUTE AN OFFER TO SELL OR THE SOLICITATION OF AN OFFER TO BUY EQUITY SHARES
                        IN THE COMPANY.<br /><br />

                        THE PRELIMINARY PLACEMENT DOCUMENT, WILL NOT BE CIRCULATED OR DISTRIBUTED TO THE PUBLIC IN
                        INDIA OR ANY OTHER JURISDICTION, AND WILL NOT CONSTITUTE A PUBLIC OFFER IN INDIA OR ANY OTHER
                        JURISDICTION.<br /><br />

                        THE INFORMATION IN THE PRELIMINARY PLACEMENT DOCUMENT IS AS OF THE DATE THEREOF AND NEITHER
                        THE COMPANY, ITS DIRECTORS NOR THEBOOK RUNNING LEAD MANAGER ARE UNDER ANY OBLIGATION TO
                        UPDATE OR REVISE THE PRELIMINARY PLACEMENT DOCUMENT TO REFLECT CIRCUMSTANCES ARISING AFTER
                        THE DATE THEREOF.<br /><br />

                        THE ISSUE, AND THE DISTRIBUTION OF THEPRELIMINARY PLACEMENT DOCUMENT IS BEING MADE TO
                        QUALIFIED INSTITUTIONAL BUYERS AS DEFINED UNDER THE SEBI ICDR REGULATIONS (“QIBs”)
                        WHICH ARE NOT RESTRICTED FROM PARTICIPATING IN THE ISSUE UNDER THE APPLICABLE LAWS,
                        INCLUDING THE SEBI ICDR REGULATIONS, ARE ELIGIBLE TO INVEST IN THIS ISSUE (“ELIGIBLE QIBs”)
                        IN RELIANCE UPON CHAPTER VI OF THE SEBI ICDR REGULATIONS, AS AMENDED AND SECTIONS 42 AND 62,
                        READ WITH RULE OF 14 OF THE COMPANIES (PROSPECTUS AND ALLOTMENT OF SECURITIES) RULES, 2014,
                        AS AMENDED (THE “PAS RULES”) AND OTHER APPLICABLE PROVISIONS OF THE COMPANIES ACT, 2013 AND
                        THE RULES MADE THREUNDER. UNLESS A SERIALLY NUMBERED PRELIMINARY PLACEMENT DOCUMENTACCOMPANIED
                        BY AN APPLICATION FORM IS ADDRESSEDTO A SPECIFIC QIB INVITING SUCH QIB TO MAKE A BID THROUGH
                        SUCH APPLICATION FORM, NO OFFER AND/OR INVITATION OF OFFER SHALL BE DEEMED TO HAVE BEEN MADE.
                        YOU ACKNOWLEDGE THAT ACCESS TO THE PRELIMINARY PLACEMENT DOCUMENT IS INTENDED FOR USE BY YOU
                        ONLY AND YOU AGREE NOT TO FORWARD THE PRELIMINARY PLACEMENT DOCUMENT ON TO ANY OTHER PERSON,
                        IN WHOLE OR IN PART, OR OTHERWISE PROVIDE ACCESS VIA E-MAIL OR OTHERWISE TO ANY OTHER PERSON.<br /><br />

                        YOU ARE ACCESSING THIS WEBSITE AT YOUR OWN RISK AND IT IS YOUR RESPONSIBILITY TO TAKE
                        PRECAUTIONS TO ENSURE THAT IT IS FREE FROM VIRUSES AND OTHER ITEMS OF A DESTRUCTIVE NATURE.
                        NEITHER THE COMPANY, THEBOOK RUNNING LEAD MANAGERSNOR ANY OF THEIR AFFILIATES, DIRECTORS,
                        OFFICERS AND EMPLOYEES WILL BE LIABLE OR HAVE ANY RESPONSIBILITY OF ANY KIND FOR ANY LOSS
                        OR DAMAGE THAT YOU INCUR IN THE EVENT OF ANY FAILURE OR DISRUPTION OF THIS WEBSITE, OR
                        RESULTING FROM THE ACT OR OMISSION OF ANY OTHER PARTY INVOLVED IN MAKING THIS WEBSITE OR
                        THE DATA CONTAINED THEREIN AVAILABLE TO YOU, OR FROM ANY OTHER CAUSE RELATING TO YOUR ACCESS
                        TO, INABILITY TO ACCESS, OR USE OF THE WEBSITE OR THESE MATERIALS. IT IS YOUR RESPONSIBILITY
                        TO TAKE PRECAUTIONS TO ENSURE THAT IT IS FREE FROM VIRUSES AND OTHER ITEMS OF A
                        DESTRUCTIVE NATURE.<br /><br />

                        THE PRELIMINARY PLACEMENT DOCUMENT MAY CONTAIN STATEMENTS ABOUT FUTURE EVENTS AND EXPECTATIONS
                        THAT CONSTITUTE FORWARD-LOOKING STATEMENTS. THERE CAN BE NO ASSURANCE THAT THE RESULTS AND EVENTS
                        CONTEMPLATED BY THE FORWARD-LOOKING STATEMENTS CONTAINED THERE WILL IN FACT OCCUR. THE COMPANY,
                        ITS DIRECTORS, THEBOOK RUNNING LEAD MANAGERS OR ANY OF THEIR RESPECTIVE AFFILIATES DO NOT MAKE
                        ANY REPRESENTATION OR WARRANTY, EXPRESS OR IMPLIED, AS TO, AND DO NOT ACCEPT ANY RESPONSIBILITY
                        OR LIABILITY WITH RESPECT TO, THE FAIRNESS, ACCURACY, COMPLETENESS OR CORRECTNESS OF ANY
                        INFORMATION OR OPINION IN THE PRELIMINARY PLACEMENT DOCUMENT.<br />
                        IF YOU ACCESS THE PRELIMINARY PLACEMENT DOCUMENT CONTRARY TO THE FOREGOING RESTRICTIONS, YOU
                        WILL BE INELIGIBLE TO PURCHASE THE SECURITIES.<br /><br />

                        INVESTING IN THE EQUITY SHARES DESCRIBED IN THE PRELIMINARY PLACEMENT DOCUMENT PRESENTED
                        HEREIN INVOLVES RISKS AND YOU SHOULD NOT INVEST ANY FUNDS IN THE EQUITY SHARES UNLESS YOU
                        ARE PREPARED TO RISK LOSING ALL OR PART OF YOUR INVESTMENT. YOU ARE ADVISED TO CAREFULLY
                        READ THE RISK FACTORS AND THE OTHER INFORMATION CONTAINED IN THE PRELIMINARY PLACEMENT
                        DOCUMENT PRESENTED HEREIN BEFORE MAKING AN INVESTMENT DECISION. YOU ARE ADVISED TO CONSULT
                        YOUR OWN ADVISORS ABOUT THE PARTICULAR CONSEQUENCES OF INVESTING IN THE EQUITY SHARES DESCRIBED
                        IN THE PRELIMINARY PLACEMENT DOCUMENT.<br /><br />

                        THE PRELIMINARY PLACEMENT DOCUMENT MAY NOT BE DOWNLOADED, DELIVERED, FORWARDED OR DISTRIBUTED,
                        ELECTRONICALLY OR OTHERWISE, IN WHOLE OR IN PART, TO ANY OTHER PERSON AND MAY NOT BE
                        REPRODUCED IN ANY MANNER WHATSOEVER. ANY DOWNLOADING, FORWARDING, DELIVERY, DISTRIBUTION OR
                        REPRODUCTION OF THE PRELIMINARY PLACEMENT DOCUMENT IN WHOLE OR IN PART IS UNAUTHORIZED.
                        FAILURE TO COMPLY WITH THIS DISCLAIMER MAY RESULT IN A VIOLATION OF THE APPLICABLE LAWS.<br /><br />

                        <span className="paraLastQualify">YOU ARE ACCESSING THE MATERIALS ON THIS WEBSITE ON THE BASIS THAT YOU ARE A PERSON INTO
                            WHOSE POSSESSION THESE MATERIAL MAY BE LAWFULLY DELIVERED IN ACCORDANCE WITH THE LAWS OF THE
                            JURISDICTION IN WHICH YOU ARE LOCATED. IF YOU ARE NOT PERMITTED TO VIEW THE MATERIALS ON
                            THIS WEBSITE OR ARE IN ANY DOUBT AS TO WHETHER YOU ARE PERMITTED TO VIEW THESE MATERIALS,
                            PLEASE EXIT THIS WEBPAGE.</span><br />
                    </p>
                    {/* <p className="disclaimer-text">
                    Please read and accept the disclaimer before accessing the document.
                </p> */}
                    <div className="popuBtnDiv">
                        <button
                            className="disclaimer-button"
                            onClick={() => setShowDisclaimerPopup(true)}
                        >
                            I certify that I am authorized to access this site
                        </button>
                    </div>
                </div>

                {/* Disclaimer Popup */}
                {showDisclaimerPopup && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                            <button className="popup-close" onClick={() => setShowDisclaimerPopup(false)}>
                                &times;
                            </button>
                            <p className="titlePopup">DISCLAIMER</p>
                            <p className="popupPara">
                                To access this information, you must confirm by pressing on the button marked "I Confirm" that,
                                at the time of access, you (a) are located and resident in India and (b) are not a resident of
                                the United States and you are not located inside the United States and (c) are eligible to invest.
                                If you cannot make this confirmation, you must press the button marked “I Do Not Confirm”.<br /><br />

                                By clicking on “I confirm”, you are further confirming that you are a qualified institutional buyer
                                (as defined in the Securities and Exchange Board of India (Issue of Capital and Disclosure Requirements)
                                Regulations 2018, as amended) and you agree that the information contained herein is not an offer to
                                the public or to any other class of investors. Further, you confirm that you shall not base any
                                investment decision on the information contained herein and you confirm that have read the legal
                                disclaimer as stated above.<br /><br />

                                The documentation contained in these pages is posted solely to comply with Indian legal and regulatory
                                requirements. Making the information contained herein available in electronic format does not
                                constitute an offer to sell or the solicitation of an offer to buy securities of the Company in
                                the United States or in any jurisdiction outside India. Further, it does not constitute a recommendation
                                by the Company or any other party to sell or buy securities in the Company in the United States or
                                in any jurisdiction outside India.<br />
                            </p>
                            <div className="popup-actions">
                                <button
                                    onClick={() => {
                                        setShowDisclaimerPopup(false);
                                        setShowDocumentPopup(true);
                                    }}
                                >
                                    I Confirm
                                </button>
                                <button
                                    onClick={() => {
                                        setShowDisclaimerPopup(false);
                                        setShowDeniedPopup(true);
                                    }}
                                >
                                    I Do Not Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Not Permitted Popup */}
                {showDeniedPopup && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                            <p className="titlePopup">DISCLAIMER</p>
                            <button className="popup-close" onClick={() => setShowDeniedPopup(false)}>
                                &times;
                            </button>
                            <p>You are not permitted to view this document.</p>
                        </div>
                    </div>
                )}

                {/* Document Access Popup */}
                {showDocumentPopup && (
                    <div className="popup-overlay">
                        <div className="popup-box">
                            <button className="popup-close" onClick={() => setShowDocumentPopup(false)}>
                                &times;
                            </button>
                            <p className="popTitle">Preliminary Placement Document / Placement Document</p>
                            <p>
                                Please indicate which country you are accessing the document from:
                            </p>
                            <div className="popup-actions">
                                <button
                                    onClick={() =>
                                        window.open("/pdfs/preliminary-india.pdf", "_blank")
                                    }
                                >
                                    India
                                </button>
                                <button
                                    onClick={() => {
                                        setShowDisclaimerPopup(false);
                                        setShowDeniedPopup(true);
                                    }}
                                >
                                    Other Than India
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QualifiedInstitutionPlacements;