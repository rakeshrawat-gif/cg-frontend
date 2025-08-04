import React from "react";
import viewIcon from "../assets/images/Investors/viewIcon.png";
import downloadIcon from "../assets/images/Investors/download.png";

const documents = [
  { title: "Complaint Report BSE", viewLink: "#", downloadLink: "#" },
  {
    title: "Report by Independent Directors",
    viewLink: "#",
    downloadLink: "#",
  },
  { title: "Report by Audit Committee", viewLink: "#", downloadLink: "#" },
  {
    title:
      "Confirmation for non applicability of valuation report and fairness opinion",
    viewLink: "#",
    downloadLink: "#",
  },
  { title: "Draft Scheme of Arrangement", viewLink: "#", downloadLink: "#" },
  { title: "Compliance Report", viewLink: "#", downloadLink: "#" },
  {
    title: "Auditor Certificate Accounting Treatment Certificate",
    viewLink: "#",
    downloadLink: "#",
  },
  {
    title: "Auditor Certificate 10(b) undertaking",
    viewLink: "#",
    downloadLink: "#",
  },
  { title: "Complaint Report-NSE", viewLink: "#", downloadLink: "#" },
];

const SchemeOfArrangement = () => {
  return (
    <div className="scheme-wrapper">
      {documents.map((doc, index) => (
        <div className="scheme-row" key={index}>
          <div className={`scheme-title ${index === 0 ? "highlighted" : ""}`}>
            {doc.title}
          </div>
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
  );
};

export default SchemeOfArrangement;
