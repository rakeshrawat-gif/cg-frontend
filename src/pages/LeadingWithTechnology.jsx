import React from "react";
import bannerImg from "../components/assets/images/technologyR&D/R&D1.png";
import trainImg from "../components/assets/images/technologyR&D/train.png";
import machineImg from "../components/assets/images/technologyR&D/machine.png";
import InnovationGrid from "./InnovationGrid";

const LeadingWithTechnology = () => {
  const techSections = [
    {
      img: trainImg,
      reverse: false,
      paragraphs: [
        "Staffed with highly qualified experts and equipped with robust infrastructure, our R&D ecosystem is powered by strong processes that drive consistent technological breakthroughs and business growth.",
        "Our journey in technology began with Colonel R.E.B. Crompton, our visionary founder and a pioneer in electrical engineering in the late 19th and early 20th centuries. Under his leadership, CG became the first pioneers to introduce electric locomotives in India, setting the stage for decades of innovation.",
      ],
    },
    {
      img: machineImg,
      reverse: true,
      paragraphs: [
        "The formal establishment of CG’s R&D division in 1977 marked a significant milestone — an embodiment of our founder’s pioneering spirit. Since then, we’ve delivered multiple industry firsts and continue to bridge early-stage innovation with market-ready solutions. By collaborating closely with our business divisions and external partners, CG R&D secures our competitive edge in a global marketplace.",
        "Today, CG’s technology portfolio spans Transformers, Switchgear, Motors, Drives, and Automation Products, enabling smarter, more efficient systems across industries.",
      ],
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="inner-comoonbanner">
        <div className="comonban">
          <img src={bannerImg} alt="Leading with Technology Banner" />
        </div>
      </section>

      {/* Breadcrumb & Intro Section */}
      <section className="commonfrst-sec">
        <div className="cust-container">
          <div className="breadcr-inner">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">About CG</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Technology + R&D
              </li>
            </ol>
          </div>

          <div className="common-heading-sec">
            <div className="comon-head-inner">
              <h2>Leading with Technology</h2>
              <p>
                At CG, innovation is not just a goal; it's a legacy. Our
                state-of-the-art R&D Centres are the innovation engines behind
                our Strategic Business Units, dedicated to New Product
                Development and cutting-edge technological advancements.
              </p>
            </div>
          </div>

          {/* Dynamic Sections */}
          {techSections.map((section, idx) => (
            <div
              className={`tech-row ${section.reverse ? "reverse" : ""}`}
              key={idx}
            >
              <div className="tech-image">
                <img src={section.img} alt="Tech" />
              </div>
              <div className="tech-text">
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className={pIdx === 0 ? "tech-text-title" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Innovation Grid Section */}
      <InnovationGrid />
    </>
  );
};

export default LeadingWithTechnology;
