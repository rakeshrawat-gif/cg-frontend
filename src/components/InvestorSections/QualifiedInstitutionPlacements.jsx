import React, { useState } from "react";

const QualifiedInstitutionPlacements = () => {
    const [activeTab, setActiveTab] = useState("Preliminary Placement Document");
    const [showDisclaimerPopup, setShowDisclaimerPopup] = useState(false);
    const [showDeniedPopup, setShowDeniedPopup] = useState(false);
    const [showDocumentPopup, setShowDocumentPopup] = useState(false);

    return (
        <div className="placement-doc-section">
            <div className="placement-tabs">
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
                <p className="disclaimer-text">
                    Please read and accept the disclaimer before accessing the document.
                </p>
                <button
                    className="disclaimer-button"
                    onClick={() => setShowDisclaimerPopup(true)}
                >
                    Click to Proceed
                </button>
            </div>

            {/* Disclaimer Popup */}
            {showDisclaimerPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <button className="popup-close" onClick={() => setShowDisclaimerPopup(false)}>
                            &times;
                        </button>
                        <p>
                            By proceeding, you acknowledge that you have read and understood
                            the disclaimer and agree to its terms.
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
                        <p>
                            Please select your location to access the{" "}
                            <strong>{activeTab}</strong>
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
                                onClick={() =>
                                    window.open("/pdfs/preliminary-others.pdf", "_blank")
                                }
                            >
                                Other Than India
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QualifiedInstitutionPlacements;
