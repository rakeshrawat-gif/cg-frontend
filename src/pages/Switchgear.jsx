import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import banner from "../components/assets/images/switchgear/swibaner.jpg";
import mobbaner from "../components/assets/images/switchgear/mobbaner.jpg";
import card1 from "../components/assets/images/switchgear/card1.jpg";
import card2 from "../components/assets/images/switchgear/card2.jpg";
import card3 from "../components/assets/images/switchgear/card3.jpg";
import card4 from "../components/assets/images/switchgear/card4.jpg";
import card5 from "../components/assets/images/switchgear/card5.jpg";

import sliuser from "../components/assets/images/switchgear/sliuser.jpg";
import newproduct from "../components/assets/images/switchgear/newproduct.jpg";

import leftarow from "../components/assets/images/switchgear/leftarow.svg";
import rightarow from "../components/assets/images/switchgear/rightarow.svg";
import newproLeftarw from "../components/assets/images/switchgear/newpro-leftarw.svg";
import righnewproRightarwtarow from "../components/assets/images/switchgear/newpro-rightarw.svg";

import wmleftarow from "../components/assets/images/switchgear/wm/leftarow.png";
import wmrightarow from "../components/assets/images/switchgear/wm/rightarow.png";
import zw1 from "../components/assets/images/switchgear/wm/zwm/zw11.jpg";
import zw2 from "../components/assets/images/switchgear/wm/zwm/zw22.jpg";
import zw3 from "../components/assets/images/switchgear/wm/zwm/zw33.jpg";
import zw4 from "../components/assets/images/switchgear/wm/zwm/zw44.jpg";

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


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Switchgear = () => {

    const switchGearCards = [
        {
            title: 'MEDIUM VOLTAGE (MV) SWITCHGEAR', desc: [
                { detail: 'Our Medium Voltage (MV) switchgear range includes AIS (Indoor & Outdoor), MV GIS, RMUs, Vacuum Interrupters, Compact Substations, Relays, Reclosers, Contactors, Arresters, and Isolators. Designed with advanced protection, control, and automation, it ensures system stability and reduces downtime.' }
            ],
            slink: '', img: card1
        },
        {
            title: 'POWER QUALITY SOLUTIONS', desc: [
                { detail: 'Our Power Quality Solutions improve efficiency, stability, and reliability by mitigating disturbances and enhancing voltage profiles. We offer comprehensive solutions to ensure grid compliance, reduce penalties, and deliver uninterrupted, high-quality power for critical operations.' }
            ],
            slink: '', img: card2
        },
        {
            title: 'RELAYS AND AUTOMATION', desc: [
                { detail: 'Our Relays and Automation solutions enhance protection, control, and efficiency in power distribution systems with reliable, intelligent design.They enable digital transformation for smarter grid management, ensuring safe operations and improved uptime.' }
            ],
            slink: '', img: card3
        },
        {
            title: 'HIGH VOLTAGE & EXTRA HIGH VOLTAGE', desc: [
                { detail: 'We offer a comprehensive range of HV and EHV equipment (33kV to 800kV) designed for safety, reliability, and performance in critical transmission and distribution networks.Engineered to meet global standards, these solutions ensure grid stability, low maintenance, and long service life.' }
            ],
            slink: '', img: card4
        },
         {
            title: 'TURNKEY SOLUTIONS', desc: [
                { detail: 'At CG, we specialise in turnkey substation projects of up to 765 kV, catering to both large industrial clients and major power utilities. We have established a strong global track record in the complete construction of both AIS (Air-Insulated Substations) and GIS (Gas-Insulated Substations) across numerous countries.' }
            ],
            slink: '', img: card5
        },
    ];
    const slideData = [
        {
            img: newproduct,
            heading: "Heading Placeholder",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ",
        },
        {
            img: newproduct,
            heading: "Heading Placeholder",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ",
        },
        {
            img: newproduct,
            heading: "Heading Placeholder",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ",
        },
    ];
    const singleUsearr = [
            {img:sigu1},{img:sigu2},{img:sigu3},{img:sigu4},{img:sigu5},{img:sigu6}
    ]
    const zeroWastarr = [
           {img:zw1},{img:zw2},{img:zw3},{img:zw4}
    ]
    const waterMgtarr = [
           {img:watm1},{img:watm2},{img:watm3}
    ]
    const otherAwtarr = [
           {img:otheraward1},{img:otheraward2}
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
            <section className="inner-comoonbanner">
                <div className="comonban">
                    <picture>
                        <source media="(min-width:740px)" srcset={banner}/>
                        <img src={mobbaner} alt="" />
                    </picture>
                </div>
            </section>

            <section className="commonfrst-sec mobotpad0">
                <div className="cust-container">
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Switchgears</li>
                        </ol>
                    </div>

                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>Switchgears</h2>
                            <p>CG offers one of the widest ranges of Medium to Ultra High Voltage (UHV) switchgear, including Gas-Insulated Switchgear (GIS) and Dead Tank Circuit Breakers (DTB), tailored for the power generation and distribution in utilities and industries. Backed by years of dependable service, our solutions are trusted by customers around the world. We also export Low-Voltage Panel Products from our India-based export hub.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="stackcard-sec">
                <div className="cust-container">
                    <div className="stack-card-animation">
                        <ul id="stack-cards-ul">
                            {switchGearCards.map((item, id) => (
                                <li className="stack-card-item" id={`card-${id}`} data-total-cards={switchGearCards.length} style={{ '--index': `${id + 1}` }} key={id}>
                                    <a href={item.slink}>
                                        <div className="card-content">
                                            <div className="card-contentdesc">
                                                <h4>{item.title}</h4>
                                                {item.desc.map((data, idx) => (
                                                    <p key={idx}>{data.detail}</p>
                                                ))}
                                                <div className="card-contentcta">
                                                    <a href={item.slink}>Know More</a>
                                                </div>
                                            </div>
                                            <figure><img alt="" src={item.img} /></figure>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>

            <section className="swiperslider-sec switchgearslienttestisec addmarginbotm comntbmargn pb-0">
                <div className="cust-container">
                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>Client Testimonials</h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                        </div>
                    </div>
                </div>
                <div className="swiper-innerslider">
                    <div className="swiper-item-slider">
                        <Swiper
                            className="switchgear-swiper"
                            modules={[Pagination, Navigation, Autoplay]}
                            loop={true}
                            centeredSlides={false}
                            spaceBetween={30}
                            slidesPerView={'auto'}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                            }}

                            // autoplay={{
                            //     delay: 4000,
                            //     disableOnInteraction: false,
                            // }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1
                                },
                                991: {
                                    slidesPerView: 1
                                },
                                993: {
                                    slidesPerView: 1.8
                                }
                            }}

                        >
                            <SwiperSlide>
                                <div className="testimonial-header">
                                    <img src={sliuser} alt="Avatar" />
                                    <div>
                                        <div className="testimonial-name">Esther Hills</div>
                                        <div className="testimonial-role">Lead Intranet Technician</div>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p>Fuga et debitis numquam omnis sed explicabo rem. Temporibus aut earum harum sint enim quia sit. Odit blanditiis illum amet doloribus adipisci corrupti explicabo. Qui non omnis eum consequatur voluptas aut ut dolor aut.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-header">
                                    <img src={sliuser} alt="Avatar" />
                                    <div>
                                        <div className="testimonial-name">Esther Hills</div>
                                        <div className="testimonial-role">Lead Intranet Technician</div>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p>Fuga et debitis numquam omnis sed explicabo rem. Temporibus aut earum harum sint enim quia sit. Odit blanditiis illum amet doloribus adipisci corrupti explicabo. Qui non omnis eum consequatur voluptas aut ut dolor aut.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-header">
                                    <img src={sliuser} alt="Avatar" />
                                    <div>
                                        <div className="testimonial-name">Esther Hills</div>
                                        <div className="testimonial-role">Lead Intranet Technician</div>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p>Fuga et debitis numquam omnis sed explicabo rem. Temporibus aut earum harum sint enim quia sit. Odit blanditiis illum amet doloribus adipisci corrupti explicabo. Qui non omnis eum consequatur voluptas aut ut dolor aut.</p>
                                </div>
                            </SwiperSlide>
                            <div className="switchgear-swiper-nav">
                                <div className="swiper-button-prev"><img src={leftarow} alt="" /></div>
                                <div className="swiper-button-next"><img src={rightarow} alt="" /></div>
                            </div>
                        </Swiper>
                    </div>
                </div>


            </section>

            <section className="switchgr-newprodsec comntbmargn">
                <div className="cust-container">
                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>New Products Developed</h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                        </div>
                    </div>
                    <div className="carousel-wrapper">
                        <div className="slider-container">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                //   autoplay={{
                                //     delay: 3000,
                                //     disableOnInteraction: false,
                                //   }}
                                pagination={{ el: ".custom-pagination", clickable: true }}
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                className="newcardsec-carousel"
                            >
                                {slideData.map((slide, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="card-slide">
                                            <div className="new-prod-img">
                                                <img src={slide.img} alt="slide" />
                                            </div>

                                            <div className="slide-text">
                                                <h3>{slide.heading}</h3>
                                                <p>{slide.desc}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                {/* External pagination container */}
                                <div className="custom-pagination"></div>
                            </Swiper>
                        </div>


                        <div className="newprodc-navbar">
                            <button className="custom-nav prev" onClick={() => swiperRef.current?.slidePrev()}> 
                                <picture>
                                    <source media="(min-width:1025px)" srcset={newproLeftarw}/>
                                    <img alt="" src={leftarow}/>  {/*mobile*/}
                                </picture>
                             </button>
                            <button className="custom-nav next" onClick={() => swiperRef.current?.slideNext()}> 
                                <picture>
                                    <source media="(min-width:1025px)" srcset={righnewproRightarwtarow}/>
                                    <img alt="" src={rightarow}/>  {/*mobile*/}
                                </picture>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            <section className="product-display-tabs certificationtab-sec">
                <div className="cust-container">
                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>Certifications</h2>
                        </div>
                    </div>
                    {/* <!-- Tabs --> */}
                    {/* <div className="tabs-container commcntabui awmanagmenttabs d-flex">
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
                    </div> */}

                    {/* <!-- Tab Content --> */}
                    {/* <div className="tab-content comccontabcontent" id="pdpdetailTabContent">
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
                                    <div className="wastemgmt-pagination-1"></div>
                                </div>
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
                                    <div className="wastemgmt-pagination-2"></div>
                                </div>
                            </div>
                        }

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
                                    <div className="wastemgmt-pagination-2"></div>
                                </div>
                            </div>
                        }

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
                                    <div className="wastemgmt-pagination-3"></div>
                                </div>
                            </div>
                        }

                    </div> */}
                    <div className="tab-content comccontabcontent" id="pdpdetailTabContent">
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
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
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
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default Switchgear;