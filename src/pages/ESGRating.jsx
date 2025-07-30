import React from "react";
import CDPImg from "../components/assets/images/ESG/cdp.png";
import SunImg from "../components/assets/images/ESG/sustan.png";
import SPImg from "../components/assets/images/ESG/sp.png";
import arrow from "../components/assets/images/ESG/Icon.png";
import bannerImg from "../components/assets/images/ESG/ESG1.png";

import downArrow from "../components/assets/images/ESG/Vector.png";

const ESGRating = () => {
  const esgCards = [
    {
      title: "CDP Ratings",
      image: CDPImg,
      description:
        "CDP is a global non-profit that runs the world’s only independent environmental disclosure system for companies, capital markets, cities, states and regions to manage their environmental impacts. In 2024, CG participated in its inaugural CDP Assessments for “Climate Action” and “Water” as a commitment to its transparency in its ESG performance. CG received rating of “C” both of its assessments.",
      link: "#",
      className: "white-card",
    },
    {
      title: "Sustainalytics",
      image: SunImg,
      description:
        "Morningstar Sustainalytics’ ESG Risk Ratings measure the degree to which a company’s economic value (enterprise value) is at risk driven by ESG factors. The ESG Risk Ratings assess the magnitude of a company’s unmanaged ESG risks. CG’s Sustainalytics rating is presently at 27.1 which is at medium risk as per Sustainalytics’ assessment.",
      link: "#",
      className: "greens-card",
    },
    {
      title: "S&P Global Ratings",
      image: SPImg,
      description:
        "In 2024, CG took part in its first S&P Global Corporate Sustainability Assessment (CSA), demonstrating its ESG transparency commitment. It scored 34, above the industry average, reflecting strong ESG risk and opportunity management. CG aims to rank among the global leaders in the “ELQ Electrical Components & Equipment” industry.",
      link: "#",
      className: "white-card",
    },
  ];

  const reports = [
    {
      title: "ESG Report",
      action: "Download Report",
      link: "#",
      type: "green",
    },
    {
      title: "BRSR Report",
      action: "View Report",
      link: "#",
      type: "white",
    },
    {
      title: "ESG Policies",
      action: "View Policies",
      link: "#",
      type: "white",
    },
  ];

  const certifications = [
    { title: "Water Management" },
    { title: "Waste Management" },
    { title: "Climate Change Actions" },
    { title: "Section Awaited" },
  ];
  return (
    <>
      <section className="inner-comoonbanner">
        <div className="comonban">
          <img src={bannerImg} alt="Leadership and Top Management" />
        </div>
      </section>
      <section className="tech-wrapper commonfrst-sec">
        <div className="breadcrumb">
          Home &nbsp;|&nbsp; About CG &nbsp;|&nbsp; <span> ESG </span>
        </div>

        <h1 className="tech-title">
          Environmental, Social, and Governance (ESG)
        </h1>
        <p className="tech-subtitle">
          At CG, sustainability is embedded into the very fabric of our
          operations. Our approach is driven by purpose-led innovation,
          responsible value creation, and a deep commitment to environmental
          stewardship and social progress.
        </p>
      </section>

      <section className="esg-bg-wrapper">
        <div className="cards-wrapper">
          <h2 className="esg-heading">CG’s ESG Ratings</h2>
          <div className="esg-card-grid">
            {esgCards.map((card, index) => (
              <div className={`esg-card ${card.className}`} key={index}>
                <div className="img-wrapper">
                  <img src={card.image} alt={card.title} className="esg-logo" />
                </div>
                <div className="card-content">
                  <h3 className="esg-title">{card.title}</h3>
                  <p className="esg-description">{card.description}</p>
                  <a href={card.link} className="esg-link">
                    Know more <img src={arrow} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reports-wrapper tech-wrapper">
        <div className="reports-list">
          {reports.map((report, idx) => (
            <a
              key={idx}
              href={report.link}
              className={`report-row ${
                report.type === "green" ? "green-row" : "white-row"
              }`}
            >
              <span className="report-title">{report.title}</span>
              <span className="report-action">
                {report.action}{" "}
                <img src={arrow} alt="" className="arrow-icon" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-wrapper">
        <h2 className="certifications-title">Certifications</h2>
        <div className="certifications-list">
          {certifications.map((item, idx) => (
            <div key={idx} className="certification-item">
              <span>{item.title}</span>
              <img src={downArrow} alt="" className="cert-arrow" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ESGRating;
