import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { FaDownload, FaEye } from "react-icons/fa";
import abtSlideImg from '../assets/images/about/abt-slider-1.png';
import abtSlideImg2 from '../assets/images/about/abt-slider-2.jpg';
import viewIcon from "../assets/images/Investors/viewicn.svg";
import downloadIcon from "../assets/images/Investors/dwnld.svg";

// import rightArrowSlide from '../components/assets/images/about/rightArrowSlide.svg';
import rightArrowSlide from '../assets/images/about/rightArrowSlide.svg';
import leftArrowSlide from '../assets/images/about/leftArrowSlide.svg';
// Swiper one
import manuFactSlide1 from '../assets/images/about/sliders-manu/Malanpur-Madhya-Pradesh-India.png';
import manuFactSlide2 from '../assets/images/about/sliders-manu/Kundaim-Goa-India.png';
import manuFactSlide3 from '../assets/images/about/sliders-manu/Mandideep-Madhya-Pradesh-India.png';
import manuFactSlide4 from '../assets/images/about/sliders-manu/Ahmednagar-Maharashtra-India.png';
import manuFactSlide5 from '../assets/images/about/sliders-manu/Colvale-Goa-India.png';
import manuFactSlide6 from '../assets/images/about/sliders-manu/Mandideep-Madhya-Pradesh-India-2.png';
import manuFactSlide7 from '../assets/images/about/sliders-manu/Aurangabad-Maharashtra-India.png';
import mv1 from '../assets/images/Investors/mobilevan/mv1.jpg';
import sdc1 from '../assets/images/Investors/sdc/sdc1.jpg';
import has1 from '../assets/images/Investors/has/has1.jpg';
import sce1 from '../assets/images/Investors/sce/sce1.jpg';

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

    const programes = [
        { title: "CSR Programmes - FY 2023-24", viewLink: "#", downloadLink: "#" },
        { title: "CSR Programmes - FY 2022-23", viewLink: "#", downloadLink: "#" },
    ];
    const policy = [
        { title: "CG CSR Policy", viewLink: "#", downloadLink: "#" },
        { title: "OLD CG CSR Policy", viewLink: "#", downloadLink: "#" },
    ];

    return (
        // <div className="cust-container">
        <div className="cg-cares-wrapper">
            <p className="cgcares-intro">
                At CG, we are committed to upholding the Group’s enduring legacy of social responsibility by dedicating a portion of our income towards community development initiatives. We believe that social responsibility is not merely a statutory duty, but a moral and ethical obligation—our dharma. Our philanthropic initiatives are guided by this spiritual conscience, enabling us to fulfil our duties to diverse sections of society.</p>

            <p>We aim to make a meaningful difference in the lives of the underprivileged by supporting and engaging in initiatives that enhance well-being, promote empowerment, and uplift communities. While we remain responsive to the evolving needs of society, education and healthcare will continue to be our key focus areas.</p>

            <p>Our efforts will be directed towards reaching the most marginalised and disadvantaged segments of society through programmes that:</p>

            <ul>
                <li>Empower underserved communities through education, awareness, and access to financial and social services;</li>
                <li>Facilitate access to essential needs such as healthcare, clean drinking water, and sanitation;</li>
                <li>Address hunger and poverty through skill development and livelihood generation;</li>
                <li>Support ecological and environmental sustainability through initiatives such as afforestation, soil conservation, rainwater harvesting, and biodiversity conservation;</li>
                <li>Promote sports by nurturing and training emerging talent;</li>
                <li>Implement rural development projects;</li>
                <li>And support any other initiative in line with our CSR Policy that seeks to uplift underprivileged communities.</li>
            </ul>

            <p>In addition, we shall undertake programmes as specified under Schedule VII of the Companies Act, 2013, aligned with our commitment to inclusive and sustainable growth.</p>

            {/* Section 1 */}
            <div className="scheme-wrapper cgcsr-schemawrpr">
                {programes.map((doc, index) => (
                    <div className="scheme-row" key={index}>
                        <div className={`scheme-title ${index === 0 ? "highlighted" : ""}`} dangerouslySetInnerHTML={{ __html: doc.title }} />
                        <div className="scheme-actions">
                            <a
                                href={doc.viewLink}
                                className="action-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={viewIcon} alt="View" />
                                View
                            </a>
                            <a href={doc.downloadLink} className="action-link" download>
                                <img src={downloadIcon} alt="Download" />
                                Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* CSR Committee */}
            <p className="cgcares-committee">
                The Company’s CSR initiatives are guided and overseen by a dedicated Committee of the Board, comprising:</p>
            <ul>
                <li>M. A. M. Arunachalam – Chairman</li>
                <li>Ms. Vijayalakshmi R. Iyer – Member</li>
                <li>Ms. Sasikala Varadachari – Member</li>
            </ul>

            {/* Section 2 */}
            <div className="scheme-wrapper cgcsr-schemawrpr">
                {policy.map((doc, index) => (
                    <div className="scheme-row" key={index}>
                        <div className={`scheme-title ${index === 0 ? "highlighted" : ""}`} dangerouslySetInnerHTML={{ __html: doc.title }} />
                        <div className="scheme-actions">
                            <a
                                href={doc.viewLink}
                                className="action-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={viewIcon} alt="View" />
                                View
                            </a>
                            <a href={doc.downloadLink} className="action-link" download>
                                <img src={downloadIcon} alt="Download" />
                                Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Snapshots */}
            <div className="common-heading-sec">
                <div className="comon-head-inner">
                    <h2>CG Cares - Snapshots of our CSR Initiative</h2>
                </div>
            </div>

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
                {/* <p className="cgcares-tab-para">{paragraph}</p> */}

                {activeTab === "Mobile Medical Vans" && (
                    <div className="cgcsrtab-inner">
                        <p className="tech-subtitle investor-subtitile">
                            43,673 patients. 30 villages. 1 aim. Our Mobile Medical Clinics, supported by #Wockhardt Foundation brought essential healthcare to the doorsteps of individuals across 30 villages in Madhya Pradesh and Maharashtra. From treating flu and joint pain to creating awareness and tracking health trends - this project is a testament to our commitment to Sustainable Development Goal (#SDG 3): Good Health and Well-being for all. This is just one of the many ways we’re building healthier communities under #CGCares.
                        </p>

                        <div className="manufacturing-swiper-wrapper cgcsrmarginLR">
                            <div className="swiper-controls">
                                <span className="swiper-custom-prev"><img src={leftArrowSlide} alt="" /></span>
                                <div className="swiper-custom-pagination" />
                                <span className="swiper-custom-next"><img src={rightArrowSlide} alt="" /></span>
                            </div>
                            <Swiper
                                className="swiper Manufacture-slider"
                                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                                effect="coverflow"
                                centeredSlides={true}
                                initialSlide={0}
                                loop={true}
                                slidesPerView={1.2}
                                grabCursor={false}
                                spaceBetween={10}
                                loopedSlides={3}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: -150,
                                    depth: 250,
                                    modifier: 1.5,
                                    slideShadows: false,
                                }}
                                navigation={{
                                    nextEl: ".swiper-custom-next",
                                    prevEl: ".swiper-custom-prev",
                                }}
                                pagination={{
                                    clickable: false,
                                    el: ".swiper-custom-pagination",
                                }}
                                breakpoints={{
                                    0: {
                                        spaceBetween: 0,
                                        slidesPerView: 1,
                                        
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        coverflowEffect: {
                                            rotate: 0,
                                            stretch: 0,
                                            depth: 0,
                                            modifier: 1,
                                            slideShadows: false,
                                        },
                                    },
                                    992: {
                                        slidesPerView: 1,
                                        spaceBetween: 40,
                                        pagination: { clickable: true }
                                    },
                                    1024: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 40,
                                    },
                                    1600: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 50,
                                    },
                                    2560: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 500,
                                    },
                                }}
                            >
                                {[
                                    {
                                        img: mv1
                                    },
                                    {
                                        img: mv1
                                    },
                                    {
                                        img: mv1
                                    },
                                    {
                                        img: mv1
                                    },
                                    {
                                        img: mv1
                                    },
                                ].map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="slide-card">
                                            <img src={item.img} className="slide-image" alt={item.title} />
                                            <div className="slide-overlay" />
                                            {/* <div className="slide-text">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                                <a href="#">EXPLORE →</a>
                                            </div> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                        </div>
                    </div>


                )}
                {activeTab === "Skill Development Centers" && (
                    <div className="cgcsrtab-inner">
                        <p className="tech-subtitle investor-subtitile">
                            Focussing on improving education and skill development in underserved communities, we establish Skill Development Centres to provide vocational training, improving employment opportunities for local youth and women. Our initiatives also include upgrading school facilities, constructing toilets, and setting up Anganwadis to support early childhood care and education, directly benefiting children and families in rural areas of districts like Raisen, Chhindwara, and Ahmednagar.
                        </p>

                        <div className="manufacturing-swiper-wrapper cgcsrmarginLR">
                            <div className="swiper-controls">
                                <span className="swiper-custom-prev"><img src={leftArrowSlide} alt="" /></span>
                                <div className="swiper-custom-pagination" />
                                <span className="swiper-custom-next"><img src={rightArrowSlide} alt="" /></span>
                            </div>
                            <Swiper
                                className="swiper Manufacture-slider"
                                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                                effect="coverflow"
                                centeredSlides={true}
                                initialSlide={0}
                                loop={true}
                                slidesPerView={1.2}
                                grabCursor={false}
                                spaceBetween={10}
                                loopedSlides={3}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: -150,
                                    depth: 250,
                                    modifier: 1.5,
                                    slideShadows: false,
                                }}
                                navigation={{
                                    nextEl: ".swiper-custom-next",
                                    prevEl: ".swiper-custom-prev",
                                }}
                                pagination={{
                                    clickable: false,
                                    el: ".swiper-custom-pagination",
                                }}
                                breakpoints={{
                                    0: {
                                        spaceBetween: 0,
                                        slidesPerView: 1,
                                        
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        coverflowEffect: {
                                            rotate: 0,
                                            stretch: 0,
                                            depth: 0,
                                            modifier: 1,
                                            slideShadows: false,
                                        },
                                    },
                                    992: {
                                        slidesPerView: 1,
                                        spaceBetween: 40,
                                        pagination: { clickable: true }
                                    },
                                    1024: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 40,
                                    },
                                    1600: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 50,
                                    },
                                    2560: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 500,
                                    },
                                }}
                            >
                                {[
                                    {
                                        img: sdc1
                                    },
                                    {
                                        img: sdc1
                                    },
                                    {
                                        img: sdc1
                                    },
                                    {
                                        img: sdc1
                                    },
                                    {
                                        img: sdc1
                                    },
                                    {
                                        img: sdc1
                                    },
                                ].map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="slide-card">
                                            <img src={item.img} className="slide-image" alt={item.title} />
                                            <div className="slide-overlay" />
                                            {/* <div className="slide-text">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                                <a href="#">EXPLORE →</a>
                                            </div> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                        </div>
                    </div>
                )}
                {activeTab === "Health and Sanitation" && (
                    <div className="cgcsrtab-inner">
                        <p className="tech-subtitle investor-subtitile">
                            Our CSR efforts in rural areas of Madhya Pradesh and Maharashtra focus on renovating Public Health Centres, constructing sanitation facilities, and ensuring access to nutritious meals through school kitchen upgrades. These initiatives aim to improve the well-being of communities in districts like Raisen, Dahod, and Gwalior, making essential services more accessible and improving overall living conditions.
                        </p>

                        <div className="manufacturing-swiper-wrapper cgcsrmarginLR">
                            <div className="swiper-controls">
                                <span className="swiper-custom-prev"><img src={leftArrowSlide} alt="" /></span>
                                <div className="swiper-custom-pagination" />
                                <span className="swiper-custom-next"><img src={rightArrowSlide} alt="" /></span>
                            </div>
                            <Swiper
                               className="swiper Manufacture-slider"
                                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                                effect="coverflow"
                                centeredSlides={true}
                                initialSlide={0}
                                loop={true}
                                slidesPerView={1.2}
                                grabCursor={false}
                                spaceBetween={10}
                                loopedSlides={3}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: -150,
                                    depth: 250,
                                    modifier: 1.5,
                                    slideShadows: false,
                                }}
                                navigation={{
                                    nextEl: ".swiper-custom-next",
                                    prevEl: ".swiper-custom-prev",
                                }}
                                pagination={{
                                    clickable: false,
                                    el: ".swiper-custom-pagination",
                                }}
                                breakpoints={{
                                    0: {
                                        spaceBetween: 0,
                                        slidesPerView: 1,
                                        
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        coverflowEffect: {
                                            rotate: 0,
                                            stretch: 0,
                                            depth: 0,
                                            modifier: 1,
                                            slideShadows: false,
                                        },
                                    },
                                    992: {
                                        slidesPerView: 1,
                                        spaceBetween: 40,
                                        pagination: { clickable: true }
                                    },
                                    1024: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 40,
                                    },
                                    1600: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 50,
                                    },
                                    2560: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 500,
                                    },
                                }}
                            >
                                {[
                                    {
                                        img: has1
                                    },
                                    {
                                        img: has1
                                    },
                                    {
                                        img: has1
                                    },
                                    {
                                        img: has1
                                    },
                                    {
                                        img: has1
                                    },
                                ].map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="slide-card">
                                            <img src={item.img} className="slide-image" alt={item.title} />
                                            <div className="slide-overlay" />
                                            {/* <div className="slide-text">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                                <a href="#">EXPLORE →</a>
                                            </div> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                        </div>
                    </div>
                )}
                {activeTab === "Sustainability and Clean Energy" && (
                    <div className="cgcsrtab-inner">
                        <p className="tech-subtitle investor-subtitile">
                            CG Power integrates clean energy solutions into community infrastructure in rural areas of Madhya Pradesh and Maharashtra. Primary Health Centres (PHCs), Anganwadis, schools, and Skill Development Centres have been solarised to ensure reliable and eco-friendly power. Solar street lights improve village safety and visibility at night. Integrated Domestic Energy Systems (IDES) have been distributed to households, providing affordable and clean home energy. Electric Vehicle (EV) charging stations have also been installed to encourage sustainable mobility. These measures help reduce carbon emissions and support a cleaner environment for rural communities.
                        </p>

                        <div className="manufacturing-swiper-wrapper cgcsrmarginLR">
                            <div className="swiper-controls">
                                <span className="swiper-custom-prev"><img src={leftArrowSlide} alt="" /></span>
                                <div className="swiper-custom-pagination" />
                                <span className="swiper-custom-next"><img src={rightArrowSlide} alt="" /></span>
                            </div>
                            <Swiper
                              className="swiper Manufacture-slider"
                                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                                effect="coverflow"
                                centeredSlides={true}
                                initialSlide={0}
                                loop={true}
                                slidesPerView={1.2}
                                grabCursor={false}
                                spaceBetween={10}
                                loopedSlides={3}
                                coverflowEffect={{
                                    rotate: 0,
                                    stretch: -150,
                                    depth: 250,
                                    modifier: 1.5,
                                    slideShadows: false,
                                }}
                                navigation={{
                                    nextEl: ".swiper-custom-next",
                                    prevEl: ".swiper-custom-prev",
                                }}
                                pagination={{
                                    clickable: false,
                                    el: ".swiper-custom-pagination",
                                }}
                                breakpoints={{
                                    0: {
                                        spaceBetween: 0,
                                        slidesPerView: 1,
                                        
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        coverflowEffect: {
                                            rotate: 0,
                                            stretch: 0,
                                            depth: 0,
                                            modifier: 1,
                                            slideShadows: false,
                                        },
                                    },
                                    992: {
                                        slidesPerView: 1,
                                        spaceBetween: 40,
                                        pagination: { clickable: true }
                                    },
                                    1024: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 40,
                                    },
                                    1600: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 50,
                                    },
                                    2560: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 500,
                                    },
                                }}
                            >
                                {[
                                    {
                                        img: sce1
                                    },
                                    {
                                        img: sce1
                                    },
                                    {
                                        img: sce1
                                    },
                                    {
                                        img: sce1
                                    },
                                    {
                                        img: sce1
                                    },
                                ].map((item, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="slide-card">
                                            <img src={item.img} className="slide-image" alt={item.title} />
                                            <div className="slide-overlay" />
                                            {/* <div className="slide-text">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                                <a href="#">EXPLORE →</a>
                                            </div> */}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                        </div>
                    </div>
                )}
            </div>
        </div>
        // </div>
    );
};

export default CGCares;