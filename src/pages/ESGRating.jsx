import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import wmleftarow from "../components/assets/images/switchgear/wm/leftarow.png";
import wmrightarow from "../components/assets/images/switchgear/wm/rightarow.png";
import zw1 from "../components/assets/images/switchgear/wm/zwm/zw1.jpg";
import zw2 from "../components/assets/images/switchgear/wm/zwm/zw2.jpg";
import zw3 from "../components/assets/images/switchgear/wm/zwm/zw3.jpg";
import zw4 from "../components/assets/images/switchgear/wm/zwm/zw4.jpg";

import sigu1 from "../components/assets/images/switchgear/wm/singus/sigu1.jpg";
import sigu2 from "../components/assets/images/switchgear/wm/singus/sigu2.jpg";
import sigu3 from "../components/assets/images/switchgear/wm/singus/sigu3.jpg";
import sigu4 from "../components/assets/images/switchgear/wm/singus/sigu4.jpg";
import sigu5 from "../components/assets/images/switchgear/wm/singus/sigu5.jpg";
import sigu6 from "../components/assets/images/switchgear/wm/singus/sigu6.jpg";

import watm1 from "../components/assets/images/switchgear/watm/watm1.jpg";
import watm2 from "../components/assets/images/switchgear/watm/watm2.jpg";
import watm3 from "../components/assets/images/switchgear/watm/watm3.jpg";
import otheraward1 from "../components/assets/images/switchgear/ow/otheraward1.jpg";
import otheraward2 from "../components/assets/images/switchgear/ow/otheraward2.jpg";

import CDPImg from "../components/assets/images/ESG/cdp.png";
import SunImg from "../components/assets/images/ESG/sustan.png";
import SPImg from "../components/assets/images/ESG/sp.png";
import arrow from "../components/assets/images/ESG/Icon.png";
import bannerImg from "../components/assets/images/ESG/ESG1.png";

import downArrow from "../components/assets/images/ESG/Vector.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ESGRating = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const singleUsearr = [
    { img: sigu1 }, { img: sigu2 }, { img: sigu3 }, { img: sigu4 }, { img: sigu5 }, { img: sigu6 }
  ]
  const zeroWastarr = [
    { img: zw1 }, { img: zw2 }, { img: zw3 }, { img: zw4 }
  ]
  const waterMgtarr = [
    { img: watm1 }, { img: watm2 }, { img: watm3 }
  ]
  const otherAwtarr = [
    { img: otheraward1 }, { img: otheraward2 }
  ]

  const swiperRef = useRef(null);
  const wastemanagement1 = useRef(null);
  const wastemanagement2 = useRef(null);
  const wastemanagement3 = useRef(null);
  const wastemanagement4 = useRef(null);

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>

      <section className="esg-bg-wrapper">
        <div className="cards-wrapper cust-container">
          <div className="comon-head-inner">
            <h2>CG’s ESG Ratings</h2>
          </div>
          {/* <div className="esg-card-grid">
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
          </div> */}
          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1.2}
              // pagination={{ clickable: true }}
              className="esg-mobile-swiper"
            >
              {esgCards.map((card, index) => (
                <SwiperSlide key={index}>
                  <div className={`esg-card ${card.className}`}>
                    <div className="img-wrapper">
                      <img src={card.image} alt={card.title} className="esg-logo" />
                    </div>
                    <div className="card-content">
                      <h3 className="esg-title">{card.title}</h3>
                      <p className="esg-description">{card.description}</p>
                      <a href={card.link} className="esg-link">
                        Know more <img src={arrow} alt="" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
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
                      Know more <img src={arrow} alt="" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="reports-wrapper">
        <div className="reports-list">
          {reports.map((report, idx) => (
            <a
              key={idx}
              href={report.link}
              className={`report-row ${report.type === "green" ? "green-row" : "white-row"
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
      {/* <section className="certifications-wrapper">
        <h2 className="certifications-title">Certifications</h2>
        <div className="certifications-list">
          {certifications.map((item, idx) => (
            <div key={idx} className="certification-item">
              <span>{item.title}</span>
              <img src={downArrow} alt="" className="cert-arrow" />
            </div>
          ))}
        </div>
      </section> */}

      <section className="product-display-tabs esgCertificateSec certificationtab-sec">
        <div className="cust-containerNew cust-container">
          <div className="common-heading-sec">
            <div className="comon-head-inner">
              <h2>Certifications</h2>
            </div>
          </div>
          {/* <!-- Tabs --> */}
          <div className="tabs-container commcntabui awmanagmenttabs d-flex">
            <ul className="nav nav-tabs" id="pdpdetailTab" role="tablist">
              <li className="nav-item">
                <a className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab1")}>
                  Waste Management</a>
              </li>

              <li className="nav-item">
                <a className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab2")}>Water Management</a>
              </li>

              <li className="nav-item">
                <a className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
                  onClick={() => handleTabClick("tab3")}>Other Awards and Certifications</a>
              </li>
            </ul>
          </div>

          {/* <!-- Tab Content --> */}
          <div className="tab-content comccontabcontent" id="pdpdetailTabContent">
            {/* <!-- Waste Management --> */}
            {activeTab === "tab1" &&
              <div className="wastemgmt-tab">
                <div className="wastemgmt-colone">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                      el: ".wastemgmt-pagination-1",
                      clickable: true,
                    }}
                    onSwiper={(swiper) => (wastemanagement1.current = swiper)}
                    className="wastemgmt-swiper"
                  >
                    {singleUsearr.map((data, index) => (
                      <SwiperSlide key={index}>
                        <div className="wastemgmtinner">
                          <div className="wastemgmt-img">
                            <img src={data.img} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="wastemgmt-title">
                    <h5>Single Use Plastic Free Certification</h5>
                  </div>
                  <div className="wastemgmt-navbar wmnavbar1">
                    <button
                      className="custom-nav prev"
                      onClick={() => wastemanagement1.current?.slidePrev()}
                    >
                      <img src={wmleftarow} alt="" />
                    </button>
                    <button
                      className="custom-nav next"
                      onClick={() => wastemanagement1.current?.slideNext()}
                    >
                      <img src={wmrightarow} alt="" />
                    </button>
                  </div>
                  {/* <div className="wastemgmt-pagination-1"></div> */}
                </div>
                {/* Second Slider */}
                <div className="wastemgmt-colone wastemgmt-coltwo">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                      el: ".wastemgmt-pagination-2",
                      clickable: true,
                    }}
                    onSwiper={(swiper) => (wastemanagement2.current = swiper)}
                    className="wastemgmt-swiper"
                  >
                    {zeroWastarr.map((data, index) => (
                      <SwiperSlide key={index}>
                        <div className="wastemgmtinner">
                          <div className="wastemgmt-img">
                            <img src={data.img} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="wastemgmt-title">
                    <h5>Zero Waste to Landfill Certification</h5>
                  </div>
                  <div className="wastemgmt-navbar wmnavbar2">
                    <button
                      className="custom-nav prev"
                      onClick={() => wastemanagement2.current?.slidePrev()}
                    >
                      <img src={wmleftarow} alt="" />
                    </button>
                    <button
                      className="custom-nav next"
                      onClick={() => wastemanagement2.current?.slideNext()}
                    >
                      <img src={wmrightarow} alt="" />
                    </button>
                  </div>
                  {/* <div className="wastemgmt-pagination-2"></div> */}
                </div>
              </div>
            }


            {/* <!-- Water Management --> */}
            {activeTab === "tab2" &&
              <div className="wastemgmt-tab">
                <div className="wastemgmt-colone">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                      el: ".wastemgmt-pagination-2",
                      clickable: true,
                    }}
                    onSwiper={(swiper) => (wastemanagement3.current = swiper)}
                    className="wastemgmt-swiper"
                  >
                    {waterMgtarr.map((data, index) => (
                      <SwiperSlide key={index}>
                        <div className="wastemgmtinner">
                          <div className="wastemgmt-img">
                            <img src={data.img} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="wastemgmt-title">
                    <h5>Water Management Certification</h5>
                  </div>
                  <div className="wastemgmt-navbar wmnavbar1">
                    <button
                      className="custom-nav prev"
                      onClick={() => wastemanagement3.current?.slidePrev()}
                    >
                      <img src={wmleftarow} alt="" />
                    </button>
                    <button
                      className="custom-nav next"
                      onClick={() => wastemanagement3.current?.slideNext()}
                    >
                      <img src={wmrightarow} alt="" />
                    </button>
                  </div>
                  {/* <div className="wastemgmt-pagination-2"></div> */}
                </div>
              </div>
            }

            {/* <!-- Other Awards and Certifications --> */}
            {activeTab === "tab3" &&
              <div className="wastemgmt-tab">
                <div className="wastemgmt-colone">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                      el: ".wastemgmt-pagination-3",
                      clickable: true,
                    }}
                    onSwiper={(swiper) => (wastemanagement4.current = swiper)}
                    className="wastemgmt-swiper"
                  >
                    {otherAwtarr.map((data, index) => (
                      <SwiperSlide key={index}>
                        <div className="wastemgmtinner">
                          <div className="wastemgmt-img">
                            <img src={data.img} alt="" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="wastemgmt-title">
                    <h5>Other Awards and Certifications</h5>
                  </div>
                  <div className="wastemgmt-navbar wmnavbar1">
                    <button
                      className="custom-nav prev"
                      onClick={() => wastemanagement4.current?.slidePrev()}
                    >
                      <img src={wmleftarow} alt="" />
                    </button>
                    <button
                      className="custom-nav next"
                      onClick={() => wastemanagement4.current?.slideNext()}
                    >
                      <img src={wmrightarow} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default ESGRating;
