import React, { useState } from "react";

import ClimateImg from "../components/assets/images/ESG/env1.jpg";
import ProductImg from "../components/assets/images/ESG/env2.jpg";
import InnovationImg from "../components/assets/images/ESG/env3.jpg";
import HumanImg from "../components/assets/images/ESG/env4.jpg";
import HumanRightImg from "../components/assets/images/ESG/env5.jpg";
import InnovationmgtImg from "../components/assets/images/ESG/env6.jpg";
import corporateImg from "../components/assets/images/ESG/env7.jpg";
import ResponsibleImg from "../components/assets/images/ESG/env8.jpg";
import CRMImg from "../components/assets/images/ESG/env9.jpg";
import arrow from "../components/assets/images/ESG/Icon.png";
import swip1Img from "../components/assets/images/ESG/sw1.jpg";
import swip2Img from "../components/assets/images/ESG/sw2.jpg";
import swip3Img from "../components/assets/images/ESG/sw3.jpg";
import bannerImg from "../components/assets/images/ESG/ESG3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import leftIcn from "../components/assets/images/ESG/left.png";
import rightIcn from "../components/assets/images/ESG/right.png";

const Enviormental = () => {
  const [activeTab, setActiveTab] = useState("Environmental Stewardship");
  const [activeIndex, setActiveIndex] = useState(0);

  const tabList = [
    "Environmental Stewardship",
    "People & Communities",
    "Governance & Partnerships",
  ];
  const tabContent = {
    "Environmental Stewardship": [
      {
        title: "Climate Actions",
        image: ClimateImg,
        items: [
          "Managing GHG emissions (Scope 1, 2, and 3) and energy intensity",
          "Adoption of renewable energy sources",
          "Energy efficiency initiatives",
        ],
      },
      {
        title: "Product Stewardship",
        image: ProductImg,
        items: [
          "Designing sustainable, regulation-compliant products",
          "Lifecycle impact management and responsible sourcing",
          "Customer grievance redressal mechanisms",
        ],
      },
      {
        title: "Innovation Management",
        image: InnovationImg,
        items: [
          "Sustainability-focused product innovation",
          "Integration of clean technologies and high-efficiency designs",
          "Patent filings and R&D initiatives",
        ],
      },
    ],

    "People & Communities": [
      {
        title: "Human Capital Development",
        image: HumanImg,
        items: [
          "Employee health, safety, and wellbeing initiatives",
          "Diversity, inclusion, and retention strategies",
          "Employee training, development, and fair compensation",
        ],
      },
      {
        title: "Human Rights",
        image: HumanRightImg,
        items: [
          "Periodic human rights impact assessments",
          "Training programs for internal and external stakeholders",
        ],
      },
      {
        title: "Innovation Management",
        image: InnovationmgtImg,
        items: [
          "Sustainability-focused product innovation",
          "Integration of clean technologies and high-efficiency designs",
          "Patent filings and R&D initiatives",
        ],
      },
    ],

    "Governance & Partnerships": [
      {
        title: "Corporate Governance",
        image: corporateImg,
        items: [
          "Transparent governance structures and board practices",
          "Risk management systems including ESG risks",
          "Stakeholder communication and feedback mechanisms",
        ],
      },
      {
        title: "Responsible Supply Chain",
        image: ResponsibleImg,
        items: [
          "Customer satisfaction surveys and feedback loops",
          "Product updates based on insights",
          "Grievance redressal systems",
        ],
      },
      {
        title: "CRM",
        image: CRMImg,
        items: [
          "Customer data management and privacy",
          "Ethical marketing and communication practices",
          "Stakeholder engagement and feedback mechanisms",
        ],
      },
    ],
  };

  const swipdata = [
    {
      image: swip1Img,
      caption: "Heading Placeholder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
    },
    {
      image: swip2Img,
      caption: "Heading Placeholder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      image: swip3Img,
      caption: "Heading Placeholder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      image: swip3Img,
      caption: "Heading Placeholder",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
    },
  ];

  return (
    <>
      <section className="inner-comoonbanner">
        <div className="comonban">
          <img src={bannerImg} alt="Leadership and Top Management" />
        </div>
      </section>
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
                ESG
              </li>
            </ol>
          </div>

          <div className="common-heading-sec">
            <div className="comon-head-inner">
              <h2>Environmental, Social, and Governance (ESG)</h2>
              <p>
                At CG, sustainability is embedded into the very fabric of our
                operations. Our approach is driven by purpose-led innovation,
                responsible value creation, and a deep commitment to
                environmental stewardship and social progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="tech-wrapper commonfrst-sec">
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
      </section> */}

      <section className="common-heading-sec">
        <div className="cust-container">
          <div className="comon-head-inner">
            <h2>Materiality at CG</h2>
            <p>
              At CG, our sustainability strategy is guided by material ESG
              issues that have the greatest impact on our stakeholders, the
              environment, and long-term business success. Our materiality
              approach aligns with global frameworks and ensures focus on
              climate action, corporate governance, ethical supply chains, and
              more.
            </p>
            <p>
              In FY 2022–23, we conducted a structured Materiality Assessment to
              identify and prioritize ESG topics critical to our business and
              stakeholders. Each topic is reviewed through a financial,
              environmental, and social lens, helping us manage risks and unlock
              opportunities for sustainable growth.
            </p>
          </div>
        </div>

        <div className="cust-container">
          <div className="tabs">
            {tabList.map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}

          <div className="cards-container">
            {tabContent[activeTab].map((card, idx) => (
              <div className="env-card" key={idx}>
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="materiality-footer">
            <p>
              Materiality at CG is not just a compliance exercise, it’s a
              strategic imperative that helps us future-proof our business while
              creating long-term value for all stakeholders. We remain committed
              to evolving our ESG priorities in step with global standards and
              stakeholder expectations.
            </p>
            <p>
              Our next step: a Double Materiality Assessment that will further
              integrate sustainability into everything we do.
            </p>
            <a href="#" className="view-report">
              View Report
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Swiper  */}

      <section className="greener-everyday tech-wrapper">
        <h1 className="materiality-title">Greener Everyday</h1>
        <p className="materiality-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        </p>

        <div className="greener-layout">
          {/* Green Card shows active slide's content */}
          <div className="green-card-sm">
            <img
              src={swipdata[activeIndex].image}
              alt="green"
              className="green-img"
            />
            <div className="green-card-text">
              <h3>{swipdata[activeIndex].caption}</h3>
              <p>{swipdata[activeIndex].text}</p>
            </div>
          </div>

          <div className="swiper-wrapper-sm">
            <Swiper
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >
              {swipdata
                .filter((_, index) => index !== activeIndex)
                .map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="image-card">
                      <img src={item.image} alt={`slide-${index}`} />
                      <div className="caption">{item.caption}</div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-nav-sm">
              <button className="prev-btn">
                <img src={leftIcn} alt="prev" />
              </button>
              <button className="next-btn">
                <img src={rightIcn} alt="next" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enviormental;
