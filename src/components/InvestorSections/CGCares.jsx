import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { FaDownload, FaEye } from "react-icons/fa";
import abtSlideImg from '../assets/images/about/abt-slider-1.png';
import abtSlideImg2 from '../assets/images/about/abt-slider-2.jpg';

const CGCares = () => {
    const [activeTab, setActiveTab] = useState("Skill Development Centers");
    const swiperRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.update();
            }
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    const tabList = [
        "Mobile Medical Vans",
        "Skill Development Centers",
        "Health and Sanitation",
        "Sustainability and Clean Energy",
    ];

    const paragraph = `Focussing on improving education and skill development in underserved communities, we establish Skill Development Centres to provide vocational training, improving employment opportunities for local youth and women. Our initiatives also include upgrading school facilities, constructing toilets, and setting up Anganwadis to support early childhood care and education, directly benefiting children and families in rural areas of districts like Raisen, Chhindwara, and Ahmednagar.`;

    return (
        <div className="cust-container">
            <div className="cg-cares-wrapper">
                <p className="cgcares-intro">
                    At CG, we are committed to upholding the Group’s enduring legacy of social responsibility by
                    dedicating a portion of our income towards community development initiatives. We believe that
                    social responsibility is not merely a statutory duty, but a moral and ethical obligation—our
                    dharma. Our philanthropic initiatives are guided by this spiritual conscience, enabling
                    us to fulfil our duties to diverse sections of society.<br /><br />

                    We aim to make a meaningful difference in the lives of the underprivileged by supporting and
                    engaging in initiatives that enhance well-being, promote empowerment, and uplift communities.
                    While we remain responsive to the evolving needs of society, education and healthcare will
                    continue to be our key focus areas.<br /><br />

                    Our efforts will be directed towards reaching the most marginalised and disadvantaged
                    segments of society through programmes that:<br /><br />

                    <ul>
                        <li>Empower underserved communities through education, awareness, and access to financial
                            and social services;</li>
                        <li>Facilitate access to essential needs such as healthcare, clean drinking water, and sanitation;</li>
                        <li>Address hunger and poverty through skill development and livelihood generation;</li>
                        <li>Support ecological and environmental sustainability through initiatives such as afforestation,
                            soil conservation, rainwater harvesting, and biodiversity conservation;</li>
                        <li>Promote sports by nurturing and training emerging talent;</li>
                        <li>Implement rural development projects;</li>
                        <li>And support any other initiative in line with our CSR Policy that seeks to uplift underprivileged communities.</li>
                    </ul>

                    In addition, we shall undertake programmes as specified under Schedule VII of the Companies Act, 2013, aligned with our commitment to inclusive and sustainable growth.

                </p>

                {/* Section 1 */}
                <div className="cgcares-doc-row">
                    <div className="cgCarerow1">
                        <h3>CSR Programmes - FY 2023-24</h3>
                        <div className="doc-actions">
                            <span><FaEye /> View</span>
                            <span><FaDownload /> Download</span>
                        </div>
                    </div>
                    <div className="cgCarerow1">
                        <h3>CSR Programmes - FY 2022-23</h3>
                        <div className="doc-actions">
                            <span><FaEye /> View</span>
                            <span><FaDownload /> Download</span>
                        </div>
                    </div>
                </div>

                {/* CSR Committee */}
                <p className="cgcares-committee">
                    The Company’s CSR initiatives are guided and overseen by a dedicated Committee of the Board, comprising:
                    <br /><br />
                    <ul>
                        <li> M. A. M. Arunachalam – Chairman</li>
                        <li>Ms. Vijayalakshmi R. Iyer – Member</li>
                        <li>Ms. Sasikala Varadachari – Member </li>
                    </ul>
                </p>

                {/* Section 2 */}
                <div className="cgcares-doc-row">
                    <div className="cgCarerow1">
                        <h3>CG CSR Policy</h3>
                        <div className="doc-actions">
                            <span><FaEye /> View</span>
                            <span><FaDownload /> Download</span>
                        </div>
                    </div>
                    <div className="cgCarerow1">
                        <h3>OLD CG CSR Policy</h3>
                        <div className="doc-actions">
                            <span><FaEye /> View</span>
                            <span><FaDownload /> Download</span>
                        </div>
                    </div>
                </div>

                {/* Snapshots */}
                <h2 className="cgcares-title">CG Cares - Snapshots of our CSR Initiative</h2>
                <div className="cgcares-tabs">
                    {tabList.map((tab) => (
                        <button
                            key={tab}
                            className={`tab ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="tab-content">
                    <p className="cgcares-tab-para">{paragraph}</p>

                    {/* Custom Slider */}
                    <section className="section-manufacturing">
                        <div className="cust-containerz">
                            <h2 className="manufacturing-title">World-class manufacturing facilities</h2>
                            <p className="manufacturing-subtitle">
                                CG's high-efficiency plants are setting new industry benchmarks across the world.
                            </p>

                            <div className="manufacturing-swiper-wrapper">
                                <div className="swiper-controls">
                                    <span className="swiper-custom-prev"><FaChevronLeft /></span>
                                    <span className="swiper-custom-next"><FaChevronRight /></span>
                                </div>
                                <Swiper
                                    className="swiper Manufacture-slider"
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    effect="coverflow"
                                    centeredSlides={true}
                                    initialSlide={2.2}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    slidesPerView={1}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 80,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: false,
                                    }}
                                    direction="horizontal"
                                    grabCursor={false}
                                    spaceBetween={10}
                                    navigation={{
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 1.2,
                                            coverflowEffect: {
                                                rotate: 0,
                                                stretch: 0,
                                                depth: 0,
                                                modifier: 1,
                                                slideShadows: false,
                                            },
                                        },
                                        1024: {
                                            slidesPerView: 2.2,
                                            spaceBetween: 40,
                                        },
                                        1280: {
                                            slidesPerView: 2.2,
                                            spaceBetween: 50,
                                        },
                                    }}
                                >
                                    {[
                                        {
                                            title: 'Pithampur Motors Facility',
                                            img: abtSlideImg
                                        },
                                        {
                                            title: 'Climate Action Plant',
                                            img: abtSlideImg2
                                        },
                                        {
                                            title: 'Hydro Plant',
                                            img: abtSlideImg2
                                        }
                                    ].map((item, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div className="slide-card">
                                                <img src={item.img} className="slide-image" alt={item.title} />
                                                <div className="slide-overlay" />
                                                <div className="slide-text">
                                                    <h3>{item.title}</h3>
                                                    <a href="#">EXPLORE →</a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                <div className="swiper-custom-pagination" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CGCares;