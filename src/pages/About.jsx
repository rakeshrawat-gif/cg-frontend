import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import bannerImg from "../components/assets/images/about/aboutBg.png";
import videoPlCimg from '../components/assets/images/about/abt-video-placeholder.png';
import vellayanImg from '../components/assets/images/about/velleyan-subbiah.png';
import amarImg from '../components/assets/images/about/amar-kaul.png';
import aboutBgImg from '../components/assets/images/about/abt-bg-image-dotted.png';
import journeyImg from '../components/assets/images/about/abt-slider-journey-1.png';
import abtSlideImg from '../components/assets/images/about/abt-slider-1.png';
import abtSlideImg2 from '../components/assets/images/about/abt-slider-2.jpg';

const journeyData = [
    {
        year: "2000",
        title: "Started Our Journey",
        desc: "CG began operations in its first facility with a focus on innovation.",
        img: `${journeyImg}`
    },
    {
        year: "2005",
        title: "Global Expansion",
        desc: "Entered international markets and expanded operations globally.",
        img: `${journeyImg}`
    },
    {
        year: "2010",
        title: "Award Winning Solutions",
        desc: "Recognized for industry-leading solutions in energy sector.",
        img: `${journeyImg}`
    },
    {
        year: "2020",
        title: "Sustainable Focus",
        desc: "Shifted focus to green and sustainable energy practices.",
        img: `${journeyImg}`
    }
];

const slides = [
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
]

const About = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
        }, 100);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (
                swiperRef.current &&
                swiperRef.current.swiper &&
                prevRef.current &&
                nextRef.current
            ) {
                swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
                swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
                swiperRef.current.swiper.navigation.init();
                swiperRef.current.swiper.navigation.update();
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="bg-white font-['Roboto']">
            {/* Banner Section */}
            <section className="inner-comoonbanner">
                <div className="comonban">
                    <img src={bannerImg} alt="Leadership and Top Management" />
                </div>
            </section>

            {/* Breadcrumb */}
            {/* <section className="commonfrst-sec">
                <div className="cust-container">
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">About CG</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Company Overview  </li>
                        </ol>
                    </div>
                </div>
            </section> */}

            {/* Innovation Section */}
            <section className="sectionAbt aboutFirstSec">
                <div className="cust-container">
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">About CG</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Company Overview  </li>
                        </ol>
                    </div>
                    <h1 className="aboutYears">88+ Years of</h1>
                    <h2 className="aboutYears colorsYrs">Innovation and Impact</h2>
                    <div className='flex_div'>
                        <div className='firstDiv'>
                            <h3 className="abt-title">The Force That <br />Inspires Tomorrow</h3>
                            <p className="abtPara-text">
                                CG, headquartered in Mumbai, is a pioneering name in engineering with a legacy spanning over 88 years.
                                CG has been the quiet force driving the growth and transformation of everyday lives with more efficient
                                engineering solutions for the world.
                            </p>
                            <p className="abtPara-text">
                                As a leading engineering conglomerate, we have evolved from a trailblazing Indian enterprise into a
                                global force. With 18 world-class manufacturing units and a workforce of over 7,000 skilled
                                professionals, we design and deliver high-performance engineering solutions that are built to thrive
                                in the most demanding conditions globally.
                            </p>
                        </div>
                        <div className="secondDiv relative">
                            <div className="video-wrapper">
                                <img src={videoPlCimg} alt="Video Placeholder" class="video-image" />
                            </div>
                            {/* <button className="absolute -top-4 -right-4 bg-blue-600 p-3 rounded-full shadow-lg text-white">
                                <FaPlay />
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="abt-section">
                <div className='cust-container'>
                    <h2 className='abt-title'>Word From Our Leaders</h2>
                    <div className="leaderPara-div">
                        <div className="flex_div">
                            {/* Leader 1 */}
                            <div className="firstDiv leaderFlexMob">
                                <img
                                    src={vellayanImg}
                                    alt="Leader 1"
                                    className="leader-img"
                                />
                                <div className='bgwhiteBox'>
                                    <h3 className="abtMsgChairman mb-4">Message from the Chairman</h3>
                                    <p className="abtPara-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p className="abtPara-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="abtChairman-name">Vellayan Subbiah</div>
                                    <div className="abtDesignation">Chairman</div>
                                </div>
                            </div>

                            {/* Leader 2 */}
                            <div className="secondDiv leaderFlexMob">
                                <img
                                    src={amarImg}
                                    alt="Leader 2"
                                    className="leader-img"
                                />
                                <div className='bgwhiteBox'>
                                    <h3 className="abtMsgChairman">Message from the Vice Chairman</h3>
                                    <p className="abtPara-text">With a legacy spanning more than 86 years, we stand as a significant player in
                                        the industrial machinery sector, dedicated to championing innovation and excellence.
                                        Our diverse portfolio, with Industrial Motors, Drives & Automations, Railway Products,
                                        Commercial Products, Transformers, and Switchgears, underscore our commitment to pioneering
                                        solutions that drive India's growth story forward.At CG, we are steadfast in our dedication
                                        to Environmental, Social, and Governance (ESG) principles and we continually strive for
                                        sustainable practices and positive societal impact. Our commitment to Corporate Social
                                        Responsibility (CSR) is integral to our operations, reflecting our broader mission to
                                        contribute meaningfully to the communities we serve. Discover more about how we are
                                        shaping a brighter future not only for India but also beyond.</p>
                                    <div className="abtChairman-name">Amar Kaul</div>
                                    <div className="abtDesignation">Managing Director & CEO,
                                        CG Power and Industrial Solutions Limited</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Slider */}
            {/* <section className="py-16 text-center">
                <div className="container mx-auto px-4 overflow-hidden">
                    <h2 className="text-4xl font-bold text-gray-800">CG Through the Years</h2>
                    <p className=" mt-2">
                        From a pioneering start in 1878 to becoming a global name in electrical
                        solutions, CG's journey is one of innovation, expansion, and transformation.
                    </p>

                    <div className="mt-12 px-4">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            spaceBetween={30}
                            slidesPerView={1}
                        >
                            {[
                                {
                                    year: '1979',
                                    img: '/timeline.jpg',
                                    title: 'Two Strong Pillars',
                                    desc: 'Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.'
                                },
                            ].map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="flex flex-col items-center justify-center">
                                        <img src={item.img} alt="timeline" className="w-72 rounded-lg shadow-lg" />
                                        <div className="mt-4">
                                            <h3 className="font-bold text-xl text-blue-600">{item.year}</h3>
                                            <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                                            <p className="text-sm ">{item.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex justify-between items-center mt-4 px-4">
                            <button className="swiper-button-prev text-gray-800"><FaChevronLeft size={20} /></button>
                            <button className="swiper-button-next text-gray-800"><FaChevronRight size={20} /></button>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="journey-section">
                <div className="cust-container">
                    <h2 className="journey-title">Our Journey Through the Years</h2>

                    <div className="journey-swiper-wrapper">
                        <button ref={prevRef} className="swiper-nav prev">←</button>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation]}
                            loop={false}
                            slidesPerView={1}
                            spaceBetween={30}
                        >
                            {journeyData.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="journey-slide">
                                        <div className="slide-left">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <div className="divider" />
                                        <div className="slide-right">
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button ref={nextRef} className="swiper-nav next">→</button>
                    </div>
                    <div className="journey-years-bar">
                        <div className="wave-line" />
                        <div className="years-circles">
                            {journeyData.map((item, idx) => (
                                <div className="year-indicator" key={idx}>
                                    <span className={`dot ${idx === 0 ? "active" : ""}`}></span>
                                    <p>{item.year}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Financial Stats */}
            <section class="financial-stats-section">
                <div class="cust-container">
                    <h2 class="abtFinTitle">
                        Financial <span class="abtSpanTitle">Numbers</span>
                    </h2>

                    <div class="financial-masonry">
                        <div class="finance-tile active-tile wide">
                            <p class="small">Standalone revenue</p>
                            <p class="big-number">₹9,329 Cr</p>
                        </div>
                        <div class="finance-tile tall">
                            <p class="small">Consolidated revenue</p>
                            <p class="big-number">₹XXXX Cr</p>
                        </div>
                        <div class="finance-tile">
                            <p class="small">Free cash flow</p>
                            <p class="big-number">₹727 Cr</p>
                        </div>
                        <div class="finance-tile wide">
                            <p class="small">Unexecuted order book</p>
                            <p class="big-number">₹9,909 Cr</p>
                        </div>
                        <div class="finance-tile">
                            <p class="small">Order intake reached</p>
                            <p class="big-number">₹13,526 Cr</p>
                        </div>
                        <div class="finance-tile tall">
                            <p class="small">(PBT) growth</p>
                            <p class="big-number">17%</p>
                        </div>
                        <div class="finance-tile">
                            <p class="small">Revenue growth YoY</p>
                            <p class="big-number">23%</p>
                        </div>
                        <div class="finance-tile">
                            <p class="small">Lorem Ipsum</p>
                            <p class="big-number">XX</p>
                        </div>
                        <div class="finance-tile wide">
                            <p class="small">ROCE</p>
                            <p class="big-number">33%</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manufacturing Facilities */}
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
        </main>
    );
};

export default About;
