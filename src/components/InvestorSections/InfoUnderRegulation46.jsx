import arrowIcon from "../assets/images/headicn/solution/diagolanarw.svg";

const infoList = [
  "Analysts Interaction",
  "Annual Return under Section 92 of the Companies Act, 2013",
  "CG Code of Conduct and Business Practices- Board and Senior Management",

  "CG Dividend Distribution Policy",
  "CG Remuneration Policy",
  "CG Whistleblower Policy",
  "Composition of various committees of the Board of Directors",
  "Contact details for Investor Grievances",
  "Credit Rating",
  "Details of Business",
  "Disclosure of contact details of Key Managerial Personnel authorized for the<br/> purpose of determining materiality of events",
  "Familiarisation Programme for Directors",
  "Financial Information",
  "Memorandum and Articles of Association of the Company",
  "Newspaper Disclosures",
  "Policy on Related Party Transactions",
  "Policy for Determination of Materiality for Disclosure of Information/ Events to Stock<br/> Exchanges",
  "Secretarial Compliance Report",
  "Shareholding Pattern",
  "Statement of Deviation or Variations",
  "Stock Exchange Disclosures",
  "Terms & Conditions of Appointment of Independent Directors",
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
