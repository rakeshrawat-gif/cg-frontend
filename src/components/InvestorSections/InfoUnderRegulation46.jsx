import arrowIcon from "../assets/images/headicn/solution/diagolanarw.svg";

const infoList = [
  "Details of Business",
  "Memorandum and Articles of Association of the Company",
  "Terms & Conditions of Appointment of Independent Directors",
  "Composition of various committees of the Board of Directors",
  "CG Code of Conduct and Business Practices- Board and Senior Management",
  "CG Whistleblower Policy",
  "CG Remuneration Policy",
  "Policy on Related Party Transactions",
  "Policy on Material Subsidiaries",
  "Familiarisation Programme for Directors",
  "Contact details for Investor Grievances",
  "Financial Information",
  "Shareholding Pattern",
  "Analysts Interaction",
  "Newspaper Disclosures",
  "Credit Rating",
  "Secretarial Compliance Report",
  "Policy for Determination of Materiality for Disclosure of Information/ Events to Stock<br/> Exchanges",
  "Disclosure of contact details of Key Managerial Personnel authorized for the<br/> purpose of determining materiality of events",
  "Stock Exchange Disclosures",
  "Statement of Deviation or Variations",
  "CG Dividend Distribution Policy",
  "Annual Return under Section 92 of the Companies Act, 2013",
];

const InfoUnderRegulation46 = () => {
  return (
    <div className="info-regulation-wrapper infounder46sec">
      {infoList.map((item, index) => (
        <div className="info-row" key={index}>
          <div className="info-title" dangerouslySetInnerHTML={{ __html: item }} />
          <div className="info-link">
            <a href="#" className="info-know-more">
              Know more
              <img src={arrowIcon} alt="arrow" className="info-arrow-icon" />
            </a>
          </div>
        </div>
      ))
      }
    </div >
  );
};

export default InfoUnderRegulation46;
