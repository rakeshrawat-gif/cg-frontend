import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Pagination, Autoplay } from "swiper/modules";

import banner from "../components/assets/images/swibaner.jpg";
import mobbaner from "../components/assets/images/switchgear/mobbaner.jpg";
import proi1 from "../components/assets/images/productdetail/proi1.jpg";
import proi2 from "../components/assets/images/productdetail/proi2.jpg";
import downloadicn from "../components/assets/images/productdetail/downloadicn.svg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductDisplay = () => {

    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const mainSwiperRef = useRef(null);

    const goNext = () => {
        if (mainSwiperRef.current) {
            mainSwiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (mainSwiperRef.current) {
            mainSwiperRef.current.swiper.slidePrev();
        }
    };

   
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
                        <img src={mobbaner} alt="" />  {/* Mobile*/}
                    </picture>
                </div>
            </section>
            <section className="commonfrst-sec rdpadmob">
                <div className="cust-container">
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item truncate"><a href="#">Switchgears</a></li>
                            <li className="breadcrumb-item truncate"><a href="#">High Voltage & Extra High Voltage</a></li>
                            <li className="breadcrumb-item active" aria-current="page">SF6 Circuit Breaker</li>
                        </ol>
                    </div>

                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>AIS (SF₆) Circuit Breaker – Up to 800 kV</h2>
                        </div>
                    </div>


                    <div className="ais-circuit-breaker-inner">
                        <div className="ais-circuitbreaker-swiper">
                                {/* Navigation buttons */}
                                <div className="ais-navbar">
                                    <div className="swiper-button-prev" onClick={goPrev}></div>
                                    <div className="swiper-button-next" onClick={goNext}></div>
                                </div>

                                {/* Main Swiper */}
                                <Swiper
                                    ref={mainSwiperRef}
                                    modules={[Navigation, Thumbs, Autoplay]}
                                    loop={true}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={false} // Navigation handled manually
                                    thumbs={{ swiper: thumbsSwiper }}
                                    className="swiper ais-circuit-slider"
                                >
                                    <SwiperSlide><img src={proi1} alt="Image 1" /></SwiperSlide>
                                    <SwiperSlide><img src={proi2} alt="Image 2" /></SwiperSlide>
                                    <SwiperSlide><img src={proi1} alt="Image 3" /></SwiperSlide>
                                </Swiper>

                                {/* Thumbnail Swiper */}
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={3}
                                    loop={true}
                                    watchSlidesProgress={true}
                                    modules={[Thumbs, Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false,
                                    }}
                                    className="swiper thumbs-slider"
                                >
                                    <SwiperSlide><img src={proi1} alt="Thumb 1" /></SwiperSlide>
                                    <SwiperSlide><img src={proi2} alt="Thumb 2" /></SwiperSlide>
                                    <SwiperSlide><img src={proi1} alt="Thumb 3" /></SwiperSlide>
                                </Swiper>
                                </div>
                        <div className="ais-circuit-desc-outer commcntabui">
                            <div className="ais-circuit-desc-inner">
                                <p>The SF₆-insulated Dead Tank Breaker (DTB) from CG is designed for reliable high-voltage performance in a wide range of environmental conditions. Our DTBs have been successfully deployed by utilities across diverse climates in Latin America and Africa.</p>
                                <p>These breakers are engineered to meet rigorous National and International standards for Quality, Environmental Management, and Occupational Health & Safety, including ISO 9001:2015, ISO 14001, and ISO 18001.</p>
                                <p>Their performance and reliability have been validated through comprehensive type testing at internationally recognised laboratories such as VEIKI-VNL in Hungary. Tests include short-circuit making and breaking, switching operations, dielectric withstand (power frequency), lightning impulse, and partial discharge testing — all in accordance with IEC 62271-100.</p>

                                <div className="download-icncta">
                                    <button href="javascript:;"><img src={downloadicn} alt=""/>Download Certificate/Brochure</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-display-tabs product-detail-multtab">
                <div className="cust-container">
                    {/* <!-- Tabs --> */}
                    <div className="tabs-container commcntabui tabbotborder d-flex">
                        <ul className="nav nav-tabs" id="pdpdetailTab" role="tablist">
                            <li className="nav-item">
                                <a className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
                                onClick={() => handleTabClick("tab1")}>
                                    Why Choose CG’s SF6 Circuit Breaker?</a>
                            </li>

                            <li className="nav-item">
                                <a className={`nav-link ${ activeTab === "tab3" ? "active" : ""}`}
                                onClick={() => handleTabClick("tab3")}>Specifications</a>
                            </li>
                        </ul>
                        {/* <!-- <div className="download-icncta">
                            <button href="javascript:;"><img src="images/subjoinven/downloadicn.svg" alt="">Download Logos</button>
                        </div> --> */}
                    </div>

                    {/* <!-- Tab Content --> */}
                    <div className="tab-content comccontabcontent" id="pdpdetailTabContent">
                        {/* <!-- Keyfeatrre Tab --> */}
                        {activeTab === "tab1" && 
                            <div className="keyfeature pdpul">
                                <ul>
                                    <li><b>Multi-Core Capability:</b> Up to three CT cores per phase for versatile measurement and protection</li>
                                    <li><b>Lightweight Durability:</b> Aluminium enclosures reduce losses, resist corrosion, and minimise weight</li>
                                    <li><b>Low Maintenance:</b> Minimal servicing needs ensure high availability and extended lifespan</li>
                                    <li><b>Compact Design:</b> Space-efficient construction ideal for limited installations</li>
                                    <li><b>Sustainable Build:</b> Materials and design support enhanced environmental performance</li>
                                </ul>
                            </div>
                        }
                        

                        {/* <!-- Advantage Tab --> */}
                        {/* {activeTab === "tab2" && 
                            <div className="keyfeature pdpul">
                                <ul>
                                    <li><b>Multi-Core Capability:</b> Up to three CT cores per phase for versatile measurement and protection</li>
                                    <li><b>Lightweight Durability:</b> Aluminium enclosures reduce losses, resist corrosion, and minimise weight</li>
                                    <li><b>Low Maintenance:</b> Minimal servicing needs ensure high availability and extended lifespan</li>
                                    <li><b>Compact Design:</b> Space-efficient construction ideal for limited installations</li>
                                    <li><b>Sustainable Build:</b> Materials and design support enhanced environmental performance</li>
                                </ul>
                            </div>
                        } */}
                        

                        {/* <!-- Specification Tab --> */}
                        {activeTab === "tab3" && 
                            <div className="keyfeature table-wrapper pdpul">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Rating</th>
                                            <th>Unit</th>
                                            <th>72.5 kV DTB</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-label="Rating">Type Designation</td>
                                            <td data-label="Unit">-</td>
                                            <td data-label="72.5 kV DTB">DTB72-40</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Applicable Standard</td>
                                            <td data-label="Unit">-</td>
                                            <td data-label="72.5 kV DTB">IEC 62271-100</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Highest System Voltage</td>
                                            <td data-label="Unit">kV</td>
                                            <td data-label="72.5 kV DTB">72.5</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Rated Frequency</td>
                                            <td data-label="Unit">Hz</td>
                                            <td data-label="72.5 kV DTB">50</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Rated Normal Current</td>
                                            <td data-label="Unit">A</td>
                                            <td data-label="72.5 kV DTB">3150</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Rated Power Frequency Withstand Voltage (1 min)</td>
                                            <td data-label="Unit">kV</td>
                                            <td data-label="72.5 kV DTB">140</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Rated Lightning Impulse Withstand Voltage</td>
                                            <td data-label="Unit">kVp</td>
                                            <td data-label="72.5 kV DTB">325</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Rated Short Circuit Breaking Current (3 sec)</td>
                                            <td data-label="Unit">kA</td>
                                            <td data-label="72.5 kV DTB">40</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Rated Peak Withstand Current</td>
                                            <td data-label="Unit">kAp</td>
                                            <td data-label="72.5 kV DTB">100</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Rated Break Time</td>
                                            <td data-label="Unit">ms</td>
                                            <td data-label="72.5 kV DTB">60</td>
                                        </tr>
                                        <tr>
                                            <td data-label="Rating">Ambient Temperature</td>
                                            <td data-label="Unit">°C</td>
                                            <td data-label="72.5 kV DTB">40</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }
                        
                    </div>
                </div>
            </section>
        </>
    )

}

export default ProductDisplay;