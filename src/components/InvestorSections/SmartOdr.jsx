import React from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";

const documents = [
  { title: "SEBI Circular dated 31st July 2023 on Online Resolution of<br/> Disputes in the Indian Securities Market", viewLink: "#", downloadLink: "#" },
  {
    title: "SEBI Circular dated 4th August 2023-Corrigendum cum<br/> Amendment to Circular dated July 31, 2023 on Online Resolution<br/> of Disputes in the Indian Securities Market",
    viewLink: "#",
    downloadLink: "#",
  },
];

const SmartOdr = () => {
  return (
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
  );
};

export default SmartOdr;
