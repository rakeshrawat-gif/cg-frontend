import React, { useEffect, useRef, useState } from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";

const Policies = () => {


  const documents = [
    { title: "CG CSR Policy", viewLink: "#", downloadLink: "#" },
    { title: "CG’s Archival of Documents Policy", viewLink: "#", downloadLink: "#" },
    { title: "CG Code of Fair Disclosure of UPSI", viewLink: "#", downloadLink: "#" },
    { title: "CG Code of Conduct and Business Practices", viewLink: "#", downloadLink: "#" },
    { title: "Dividend Distribution Policy", viewLink: "#", downloadLink: "#" },
    { title: "Related Party Transactions Policy", viewLink: "#", downloadLink: "#" },
    { title: "Policy on Material Subsidiaries", viewLink: "#", downloadLink: "#" },
    { title: "Policy for determination of materiality of disclosures", viewLink: "#", downloadLink: "#" },
    { title: "CG Supplier Code of Conduct", viewLink: "#", downloadLink: "#" },
    { title: "CG Remuneration Policy", viewLink: "#", downloadLink: "#" },
    { title: "CG Whistleblower Policy", viewLink: "#", downloadLink: "#" },
    { title: "Customer Care Policy", viewLink: "#", downloadLink: "#" },
    { title: "Environment Policy", viewLink: "#", downloadLink: "#" },
    { title: "Human Resources Policy", viewLink: "#", downloadLink: "#" },
    { title: "Human Rights Policy", viewLink: "#", downloadLink: "#" },
    { title: "Occupational Health and Safety Policy", viewLink: "#", downloadLink: "#" },
    { title: "Product Stewardship Policy", viewLink: "#", downloadLink: "#" },
    { title: "Supply Chain Sustainability Policy", viewLink: "#", downloadLink: "#" },
    { title: "CG Board Diversity Policy", viewLink: "#", downloadLink: "#" },
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

export default Policies