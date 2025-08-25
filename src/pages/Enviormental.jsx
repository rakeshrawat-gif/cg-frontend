import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ClimateImg from "../components/assets/images/ESG/env1.jpg";
import ProductImg from "../components/assets/images/ESG/productStewardship.png";
import InnovationImg from "../components/assets/images/ESG/env3.jpg";
import HumanImg from "../components/assets/images/ESG/env4.jpg";
import HumanRightImg from "../components/assets/images/ESG/env5.jpg";
import InnovationmgtImg from "../components/assets/images/ESG/env6.jpg";
import corporateImg from "../components/assets/images/ESG/env7.jpg";
import ResponsibleImg from "../components/assets/images/ESG/env8.jpg";
import CRMImg from "../components/assets/images/ESG/env9.jpg";
import arrow from "../components/assets/images/ESG/Icon.png";
import esgGreenSlide1 from "../components/assets/images/ESG/esgGreenSlide1.png";
import swip1Img from "../components/assets/images/ESG/sw1.jpg";
import swip2Img from "../components/assets/images/ESG/sw2.jpg";
import swip3Img from "../components/assets/images/ESG/sw3.jpg";
import bannerImg from "../components/assets/images/ESG/ESG3.png";
import leftIcn from "../components/assets/images/ESG/left.png";
import rightIcn from "../components/assets/images/ESG/right.png";
import approachSustain from "../components/assets/images/ESG/approachSustain.svg";
import rateReport from "../components/assets/images/ESG/rateReport.svg";

import esgSolutSlide1 from "../components/assets/images/ESG/highVoltN.png";
import esgSolutSlide2 from "../components/assets/images/ESG/axelera.png";

import leftArrow from '../components/assets/images/leftarow.svg';
import rightArrow from '../components/assets/images/rightarow.svg';

import ESGRating from "./ESGRating";

const tabs = [
  {
    name: "CG’s Approach to Sustainability",
    icon: approachSustain
  },
  {
    name: "Ratings and Reports",
    icon: rateReport
  }
];

const Enviormental = () => {
  const [selectedTab, setSelectedTab] = useState("CG’s Approach to Sustainability");

  const [activeTab, setActiveTab] = useState("Environmental Stewardship");
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbSwiper, setThumbSwiper] = useState(null);


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
      image: [esgGreenSlide1, esgGreenSlide1, esgGreenSlide1],
      caption: "Herbal Garden",
      text: "CG’s Unit-1 Ahmednagar plant has developed a “Herbal Garden” using STP-treated water, promoting sustainability while enhancing the facility’s surroundings. The garden features herbs with culinary, medicinal, and ornamental uses, with each plant labeled and linked to a QR code for more information, reflecting the company’s commitment to a greener lifestyle.",
    },
    {
      image: [esgGreenSlide1, esgGreenSlide1, esgGreenSlide1],
      caption: "Hazardous Waste Diverted from Disposal to Processing at LT Motors Unit-1",
      text: "To reduce its carbon footprint, LT Motors Unit-1 has diverted hazardous waste from disposal to pre-processing after successful trials at M/s Green Gene Enviro Protection & Infrastructure Pvt. Ltd. This initiative minimizes pollution while turning waste into a resource, reflecting CG’s commitment to sustainability.",
    },
    {
      image: [esgGreenSlide1, esgGreenSlide1, esgGreenSlide1],
      caption: "Installation of Industrial Dish Washing Machine",
      text: "CG’s Switchgear facility in Nashik has installed a dishwashing machine in its canteen washing area, improving cleaning efficiency while supporting sustainability efforts. This initiative helps save approximately 250 cubic meters of water every month and reflects the company’s commitment to reducing environmental impact through responsible resource management.",
    }
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

      <section className="mapfilter-sec cust-container leadershipSec">
        <div className="esgSolutionCust">
          {/* Tabs */}
          <div className="contacttabs">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                className={`tab ${selectedTab === tab.name ? "active" : ""}`}
                onClick={() => setSelectedTab(tab.name)}
              >
                <img src={tab.icon} alt={tab.name} className="mr-2 inline-block" />
                {tab.name}
              </button>
            ))}
          </div>

          {/* Grid Content */}
          <div className="tabcontent">
            {selectedTab === "CG’s Approach to Sustainability" && (
              <>
                {/* Solutions Slider */}
                <section className="solutionforbus-sec comntbmargn esgSwiperSec">
                  <div className="solutionforbus-navbar mobile esg-navbar">
                    <div className="caseStudyTit">
                      <div className='titleEsg'>
                        <h3>Solutions Engineered with Purpose</h3>
                        <p>
                          At CG Power, innovation is not just about performance — it's about responsibility.
                          Each of our advanced industrial solutions is engineered to drive operational
                          efficiency while minimizing environmental impact, supporting safer workplaces,
                          reducing emissions, and enabling a more sustainable future.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-item-slider">
                    <Swiper
                      modules={[Autoplay, FreeMode, Navigation]}
                      slidesPerView="auto"
                      loop={true}
                      freeMode={true}
                      freeModeMomentum={false}
                      freeModeMomentumRatio={0}
                      spaceBetween={20}
                      centeredSlides={false}
                      speed={3000}
                      navigation={{
                        nextEl: '.solutionforbus-sec .swiper-button-next',
                        prevEl: '.solutionforbus-sec .swiper-button-prev',
                      }}

                      breakpoints={{
                        0: { slidesPerView: 1.2 },
                        676: { slidesPerView: 2.2 },
                        991: { slidesPerView: 2.2 },
                        992: { slidesPerView: 2.2 },
                      }}
                      className="esgSwiperWrapper"
                    >
                      <SwiperSlide>
                        <div className="esgSolution-sliditem">
                          <div className="soluitn-img esgSlide-img">
                            <img src={esgSolutSlide1} alt="High Voltage Motors – N Series" />
                            <div className="esgEnvText">
                              <h4>High Voltage Motors – N Series</h4>
                              <h5>Power meets purpose</h5>
                              <p>Designed for demanding industrial environments, our energy-efficient HV N-Series
                                motors offer optimized noise and vibration levels, superior power-to-weight ratio,
                                and reduced thermal stress. By enhancing energy performance across sectors like
                                oil & gas, cement, and power, these motors contribute to significant reductions
                                in industrial carbon footprints.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="esgSolution-sliditem">
                          <div className="soluitn-img esgSlide-img">
                            <img src={esgSolutSlide2} alt="AXELERA Process Performance Motors" />
                            <div className="esgEnvText">
                              <h4>AXELERA Process Performance Motors</h4>
                              <h5>Sustainable performance, engineered locally</h5>
                              <p>A Made-in-India innovation, AXELERA motors combine energy efficiency with
                                robust design, reducing operational costs and maintenance needs. Ideal for
                                process industries, these motors support sustainable industrial growth by
                                improving productivity while conserving energy.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="esgSolution-sliditem">
                          <div className="soluitn-img esgSlide-img">
                            <img src={esgSolutSlide1} alt="High Voltage Motors – N Series" />
                            <div className="esgEnvText">
                              <h4>High Voltage Motors – N Series</h4>
                              <h5>Power meets purpose</h5>
                              <p>Designed for demanding industrial environments, our energy-efficient HV N-Series
                                motors offer optimized noise and vibration levels, superior power-to-weight ratio,
                                and reduced thermal stress. By enhancing energy performance across sectors like
                                oil & gas, cement, and power, these motors contribute to significant reductions
                                in industrial carbon footprints.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="esgSolution-sliditem">
                          <div className="soluitn-img esgSlide-img">
                            <img src={esgSolutSlide2} alt="AXELERA Process Performance Motors" />
                            <div className="esgEnvText">
                              <h4>AXELERA Process Performance Motors</h4>
                              <h5>Sustainable performance, engineered locally</h5>
                              <p>A Made-in-India innovation, AXELERA motors combine energy efficiency with
                                robust design, reducing operational costs and maintenance needs. Ideal for
                                process industries, these motors support sustainable industrial growth by
                                improving productivity while conserving energy.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="solutionforbus-navbar caseStudy-navbar esg-navbar rmbmob">
                      <div className="comon-head-inner desktop">
                        <h2 class="desktopView abtFinTitle">
                          <span class="titleEsg">Solutions Engineered with Purpose</span>
                          <p>
                            At CG Power, innovation is not just about performance — it's about responsibility.
                            Each of our advanced industrial solutions is engineered to drive operational
                            efficiency while minimizing environmental impact, supporting safer workplaces,
                            reducing emissions, and enabling a more sustainable future.
                          </p>
                        </h2>
                        <h2 class="mobileView abtFinTitle">
                          <span class="titleEsg">Solutions Engineered with Purpose</span>
                          <p>
                            At CG Power, innovation is not just about performance — it's about responsibility.
                            Each of our advanced industrial solutions is engineered to drive operational
                            efficiency while minimizing environmental impact, supporting safer workplaces,
                            reducing emissions, and enabling a more sustainable future.
                          </p>
                        </h2>
                      </div>
                      <div className="switchgear-swiper-nav">
                        <div className="swiper-button-prev"><img src={leftArrow} alt="Previous" /></div>
                        <div className="swiper-button-next"><img src={rightArrow} alt="Next" /></div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Existing Design */}
                <section className="common-heading-sec">
                  <div className="cust-containerNew">
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

                  <div className="cust-containerNew">
                    <div className="env-tabs">
                      {tabList.map((tab) => (
                        <button
                          key={tab}
                          className={`env-tab-button ${activeTab === tab ? "active" : ""
                            }`}
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

                {/* Swiper Section */}
                <section className="greener-everyday">
                  <h1 className="materiality-title">Greener Everyday</h1>
                  <p className="materiality-desc">
                    At CG, sustainability starts with everyday actions. From nurturing herbal gardens to
                    implementing responsible waste disposal and processing, we’re integrating green habits
                    into our daily operations, building a cleaner, healthier future, one step at a time.
                  </p>

                  <div className="greener-layout">
                    <div className="green-card-sm">
                      <div className="inner-green-slider">
                        <Swiper
                          modules={[Navigation, Controller]}
                          onSwiper={setMainSwiper}
                          controller={{ control: thumbSwiper }}
                          slidesPerView={1}
                          navigation={{
                            nextEl: ".inner-next",
                            prevEl: ".inner-prev",
                          }}
                          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        >
                          {swipdata[activeIndex].image.map((img, idx) => (
                            <SwiperSlide key={idx}>
                              <img src={img} alt={`inner-${activeIndex}-${idx}`} className="green-img" />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <div className="green-card-text">
                        <h3>{swipdata[activeIndex].caption}</h3>
                        <p>{swipdata[activeIndex].text}</p>
                      </div>
                    </div>

                    <div className="inner-nav">
                      <button className="inner-prev">‹</button>
                      <button className="inner-next">›</button>
                    </div>

                    <div className="swiper-wrapper-sm">
                      <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}   // 👈 only 2 slides
                        spaceBetween={20}
                        loop={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        navigation={{
                          nextEl: ".next-btn",
                          prevEl: ".prev-btn",
                        }}
                        breakpoints={{
                          0: { slidesPerView: 1 },
                          768: { slidesPerView: 1 }, // 👈 never more than 2
                        }}
                      >
                        {swipdata.map((item, index) => (
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

                    {/* New slider */}
                    {/* <div className="green-card-sm">
                      <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                          nextEl: ".swiper-nav-sm .next-btn",
                          prevEl: ".swiper-nav-sm .prev-btn",
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                      >
                        {swipdata.map((item, i) => (
                          <SwiperSlide key={i}>
                            <div className="green-card-inner">
                              <Swiper
                                modules={[Navigation]}
                                slidesPerView={1}
                                navigation={{
                                  nextEl: `.inner-nav-${i} .inner-next`,
                                  prevEl: `.inner-nav-${i} .inner-prev`,
                                }}
                              >
                                {swipdata[activeIndex].image.map((img, idx) => (
                                  <SwiperSlide key={idx}>
                                    <img src={img} alt={`inner-${activeIndex}-${idx}`} className="green-img" />
                                  </SwiperSlide>
                                ))}
                              </Swiper>
                              <div className={`inner-nav inner-nav-${i}`}>
                                <button className="inner-prev">‹</button>
                                <button className="inner-next">›</button>
                              </div>

                              <div className="green-card-text">
                                <h3>{item.caption}</h3>
                                <p>{item.text}</p>
                              </div>
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
                    </div> */}

                  </div>
                </section>

              </>
            )}

            {selectedTab === "Ratings and Reports" && (
              <>
                <ESGRating />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Enviormental;
