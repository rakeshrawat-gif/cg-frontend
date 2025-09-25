import React from "react";
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";


const documents = [
  { title: "Disclosure pursuant to Regulation 30 and 31A of SEBI Listing<br/> Regulations, 2015- Intimation of request letter for re-classification", viewLink: "#", downloadLink: "#" },
  {
    title: "Disclosure on allotment of 5,600 shares pursuant to the ESOP Plan<br/> 2021 on 9th September, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on allotment of 71,980 shares pursuant to the ESOP<br/> Plan 2021 on 3rd September, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on Press Release dated 11th August 2025-CG DE SUB LLC", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on allotment of 52,000 shares pursuant to the ESOP Plan<br/> 2021 on 8th August, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on update on Green Field Project", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on allotment of 11,000 shares pursuant to the ESOP Plan<br/> 2021 on 30th July, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on the transcript of the Investor Call held on 24 07 2025<br/> for Q1_2025_26 results", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on audio recording of the earnings call held on 24th July<br/> 2025-Q1-FY 2025-26", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Further disclosure on receipt of AO order", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on allotment of 7,000 shares pursuant to the ESOP Plan<br/> 2021 on 11th July, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on 88th Annual General Meeting of the Company", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on Resignation of SMP- Mr. Mukul Srivastava", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure under Regulation 30 of SEBI LODR Regulations, 2015", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation of Analysts or investor meeting scheduled on 26 06 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation of Analysts or investor meeting scheduled on 20 06 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation for Issue opening and Floor price-QIP", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation on allotment of equity shares-QIP", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation of Analysts or investor meeting scheduled on 19 08 2025<br/> to 21 08 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation on Board meeting scheduled to be held on 24th July,<br/> 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation on closing of issue including issue price-QIP", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation of Earnings call-Board Meeting_Q1- FY 2025-26", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation on opening of special window for re-lodgment as per<br/> SEBI Circular", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Outcome of the Board Meeting held on 24th July 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Press Release dated 28th August 2025-CG Semi Private Limited", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Press Release-Financial Results-Q1 FY 2025-26", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Proceedings of the 88th AGM for FY 2024-25", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Stay Order received on 22nd July 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Voting Results of 88th Annual General Meeting held on 24th July<br/> 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on Press Release dated 17th June, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation of Analysts or investor meeting scheduled on 16 06 2025<br/> and 17 06 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on allotment of 41,200 shares pursuant to the ESOP Plan<br/> 2021 on 13th June, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Revision in Disclosure dated 6th June, 2025 on clarification of news<br/> article", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure dated 6th June, 2025 on clarification of news article", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on allotment of 6,500 shares pursuant to the ESOP Plan<br/> 2021 on 6th June, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure regarding change in Senior Management Personnel<br/> effective 2nd June 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on allotment of 6,000 shares pursuant to the ESOP Plan<br/> 2021 on 28th May, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on Change in Designation of SMP- Mr. Gaurav Makhija", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on the transcript of the Investor Call held on 06 05 2025<br/> for Q4_2024_25 results", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on allotment of 20,740 shares pursuant to the ESOP Plan<br/> 2021 on 8th May, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on Update on acquisition of BTW", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on audio recording of the earnings call held on 6th May<br/> 2025-Q4-FY 2024-25", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation of 88th Annual General Meeting", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Press Release-Financial Results-Q4 FY 2024-25", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Outcome of the Board Meeting held on 6th May 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation on Board meeting scheduled to be held on 6th May, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation of Earnings call-Board Meeting_Q4- FY 2024-25", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Intimation of Earnings call-Board Meeting_Q4- FY 2024-25", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on Press Release dated 28th April, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure on allotment of 1,35,000 shares pursuant to the ESOP<br/> Plan 2021 on 18th April, 2025", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure under Regulation 30 of SEBI LODR on stay order passed<br/> on 9th April, 2025 by IT Department", viewLink: "#",downloadLink: "#",
  },
  {
    title: "Disclosure under Regulation 30 of SEBI LODR-Update on RF<br/> Component Business", viewLink: "#",downloadLink: "#",
  },
];
const StockExchangeDisclosures = () => {
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
}

export default StockExchangeDisclosures