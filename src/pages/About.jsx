import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import banner from "../components/assets/images/about/aboutBg.png";
import mobbaner from "../components/assets/images/about/aboutMobImg.png";
import purposeArrow from "../components/assets/images/about/purposeArrow.png";
import videoPlCimg from '../components/assets/images/about/abt-video-placeholder.png';
import vellayanImg from '../components/assets/images/about/velleyan-subbiah.png';
import amarImg from '../components/assets/images/about/amar-kaul.png';
import aboutBgImg from '../components/assets/images/about/abt-bg-image-dotted.png';
import journeyImg from '../components/assets/images/about/abt-slider-journey-1.png';
import abtSlideImg from '../components/assets/images/about/abt-slider-1.png';
import abtSlideImg2 from '../components/assets/images/about/abt-slider-2.jpg';
import upArrow from '../components/assets/images/about/upArrow.svg';
import rightArrowSlide from '../components/assets/images/about/rightArrowSlide.svg';
import leftArrowSlide from '../components/assets/images/about/leftArrowSlide.svg';
import TimelineSlider from "../components/TimelineSlider";
import manuFactSlide1 from '../components/assets/images/about/sliders-manu/Malanpur-Madhya-Pradesh-India.png';
import manuFactSlide2 from '../components/assets/images/about/sliders-manu/Kundaim-Goa-India.png';
import manuFactSlide3 from '../components/assets/images/about/sliders-manu/Mandideep-Madhya-Pradesh-India.png';
import manuFactSlide4 from '../components/assets/images/about/sliders-manu/Ahmednagar-Maharashtra-India.png';
import manuFactSlide5 from '../components/assets/images/about/sliders-manu/Colvale-Goa-India.png';
import manuFactSlide6 from '../components/assets/images/about/sliders-manu/Mandideep-Madhya-Pradesh-India-2.png';
import manuFactSlide7 from '../components/assets/images/about/sliders-manu/Aurangabad-Maharashtra-India.png';
import manuFactSlide8 from '../components/assets/images/about/sliders-manu/Nashik-Maharashtra-India.png';

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
                    {/* <img src={bannerImg} alt="About CG" /> */}
                    <picture>
                        <source media="(min-width:740px)" srcset={banner} />
                        <img src={mobbaner} alt="" />  {/* Mobile*/}
                    </picture>
                </div>
            </section>

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
                    <h2 className="aboutYears colorsYrs"><span>Innovation</span> and <span>Impact</span></h2>
                    <div className='flex_div'>
                        <div className='firstDiv'>
                            <h3 className="abt-title">The Force That <br />Inspires Tomorrow</h3>
                            <p className="abtPara-text">
                                At CG, we don’t just manufacture products; we engineer progress.
                                CG, headquartered in Mumbai, is a pioneering name in engineering with a legacy
                                spanning over 88 years. CG has been the quiet force driving the growth and
                                transformation of everyday lives with more efficient engineering solutions for
                                the world.
                            </p>
                            <p className="abtPara-text">
                                As a leading engineering conglomerate, we have evolved from a trailblazing Indian
                                enterprise into a global force. With 18 world-class manufacturing units and a
                                workforce of over 7,000 skilled professionals, we design and deliver
                                high-performance engineering solutions that are built to thrive in the most
                                demanding conditions globally.
                            </p>
                        </div>
                        <div className="secondDiv relative">
                            <div className="video-wrapper">
                                {/* <img src={videoPlCimg} alt="Video Placeholder" class="video-image" /> */}
                                <iframe
                                    width="100%"
                                    height="100%s"
                                    src="https://www.youtube.com/embed/PFkBvBH31fQ?start=6"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            {/* <button className="absolute -top-4 -right-4 bg-blue-600 p-3 rounded-full shadow-lg text-white">
                                <FaPlay />
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="ourPurpose">
                <div className="cust-container">
                    <div className='purposeFlex'>
                        <div className="leftPurpose">
                            <h2 class="desktopView abtFinTitle">
                                <span class="outlined-text">our</span> <span class="abtSpanTitle">purpose</span>
                            </h2>
                            <h2 class="mobileView abtFinTitle">
                                <span class="outlined-text">our</span> <span class="abtSpanTitle">purpose</span>
                            </h2>
                            <p className="purposeSubtitle">Pioneering innovation for a sustainable future
                            </p>
                            <p className="purposePara">
                                From innovation to sustainable impact, we craft solutions that empower industries,
                                support businesses, and enhance lives. Our aim is to balance performance with
                                responsible long-term value creation for our partners, customers, and communities
                                alike.
                            </p>
                        </div>
                        <div className="rightPurpose">
                            <img src={purposeArrow} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="abt-section">
                <div className='cust-container'>
                    <h2 className='abt-title'>Word From Our Leaders</h2>
                    <div className="leader-slider mobileLeadView">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                            spaceBetween={20}
                            breakpoints={{
                                768: { slidesPerView: 1 }, 
                                1024: { slidesPerView: 2 } 
                            }}
                        >
                            {[
                                {
                                    img: vellayanImg,
                                    heading: "Message from the Chairman",
                                    text: `<p className="abtPara-text">Post the acquisition by TII in 2020, we have undertaken a focused transformation, restoring CG’s legacy of engineering excellence while building a foundation for sustainable and scalable growth.
                                        CG has always stood at the intersection of innovation, capability, and trust. With operations spanning three core sectors, Power, Industrial and Railways, the company is uniquely positioned to contribute to India's evolving economic ambitions. As the nation accelerates its journey toward self-reliance and global competitiveness, CG is ready to play a defining role in making India a manufacturing powerhouse for the world.
                                        In a time of disruption and reinvention, our goal is not merely to grow, but to lead - responsibly, strategically, and with a long-term vision.</p>`,
                                    name: "Vellayan Subbiah",
                                    role: "Chairman"
                                },
                                {
                                    img: amarImg,
                                    heading: "Message from the Vice Chairman",
                                    text: `<p className="abtPara-text">With a legacy spanning more than 86 years, 
                                        we stand as a significant player in the industrial machinery sector, dedicated to 
                                        championing innovation and excellence. Our diverse portfolio, with Industrial 
                                        Motors, Drives & Automations, Railway Products, Commercial Products, Transformers, 
                                        and Switchgears, underscore our commitment to pioneering solutions that drive 
                                        India's growth story forward. At CG, we are steadfast in our dedication to Environmental, 
                                        Social, and Governance (ESG) principles and we continually strive for sustainable 
                                        practices and positive societal impact. Our commitment to Corporate Social Responsibility (CSR) 
                                        is integral to our operations, reflecting our broader mission to contribute meaningfully to 
                                        the communities we serve. Discover more about how we are shaping a brighter future not only 
                                        for India but also beyond.</p>`,
                                    name: "Amar Kaul",
                                    role: "Managing Director & CEO, CG Power and Industrial Solutions Limited"
                                }
                            ].map((leader, i) => (
                                <SwiperSlide key={i}>
                                    <div className="leaderFlexMob">
                                        <img src={leader.img} className="leader-img" alt={leader.name} />
                                        <div className="bgwhiteBox">
                                            <h3 className="abtMsgChairman">{leader.heading}</h3>
                                            <div
                                                className="abtPara-text"
                                                dangerouslySetInnerHTML={{ __html: leader.text }}
                                            />
                                            <div className="abtChairman-name">{leader.name}</div>
                                            <div className="abtDesignation">{leader.role}</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    {/* <div className="leaderPara-div"> */}
                    {/* Mobile slider */}
                    {/* <div className="leader-slider mobileLeadView">
                            <Swiper
                                modules={[Pagination]}
                                pagination={{ clickable: true }}
                                slidesPerView={1}
                                spaceBetween={20}
                            >
                                {[
                                    {
                                        img: vellayanImg,
                                        heading: "Message from the Chairman",
                                        text: `<p className="abtPara-text">Post the acquisition by TII in 2020, we have undertaken a focused transformation, restoring CG’s legacy of engineering excellence while building a foundation for sustainable and scalable growth.
                                        CG has always stood at the intersection of innovation, capability, and trust. With operations spanning three core sectors, Power, Industrial and Railways, the company is uniquely positioned to contribute to India's evolving economic ambitions. As the nation accelerates its journey toward self-reliance and global competitiveness, CG is ready to play a defining role in making India a manufacturing powerhouse for the world.
                                        In a time of disruption and reinvention, our goal is not merely to grow, but to lead - responsibly, strategically, and with a long-term vision.</p>`,
                                        name: "Vellayan Subbiah",
                                        role: "Chairman"
                                    },
                                    {
                                        img: amarImg,
                                        heading: "Message from the Vice Chairman",
                                        text: `<p className="abtPara-text">With a legacy spanning more than 86 years, 
                                        we stand as a significant player in the industrial machinery sector, dedicated to 
                                        championing innovation and excellence. Our diverse portfolio, with Industrial 
                                        Motors, Drives & Automations, Railway Products, Commercial Products, Transformers, 
                                        and Switchgears, underscore our commitment to pioneering solutions that drive 
                                        India's growth story forward. At CG, we are steadfast in our dedication to Environmental, 
                                        Social, and Governance (ESG) principles and we continually strive for sustainable 
                                        practices and positive societal impact. Our commitment to Corporate Social Responsibility (CSR) 
                                        is integral to our operations, reflecting our broader mission to contribute meaningfully to 
                                        the communities we serve. Discover more about how we are shaping a brighter future not only 
                                        for India but also beyond.</p>`,
                                        name: "Amar Kaul",
                                        role: "Managing Director & CEO, CG Power and Industrial Solutions Limited"
                                    }
                                ].map((leader, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="leaderFlexMob">
                                            <img src={leader.img} className="leader-img" alt={leader.name} />
                                            <div className="bgwhiteBox">
                                                <h3 className="abtMsgChairman">{leader.heading}</h3>
                                                <div
                                                    className="abtPara-text"
                                                    dangerouslySetInnerHTML={{ __html: leader.text }}
                                                />
                                                <div className="abtChairman-name">{leader.name}</div>
                                                <div className="abtDesignation">{leader.role}</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div> */}

                    {/* Desktop layout */}
                    {/* <div className="flex_div deskLeadView">
                            <div className="firstDiv leaderFlexMob">
                                <img
                                    src={vellayanImg}
                                    alt="Leader 1"
                                    className="leader-img"
                                />
                                <div className='bgwhiteBox'>
                                    <h3 className="abtMsgChairman mb-4">Message from the Chairman</h3>
                                    <p className="abtPara-text">Post the acquisition by TII in 2020, we have undertaken a focused transformation, restoring CG’s legacy of engineering excellence while building a foundation for sustainable and scalable growth.
                                        CG has always stood at the intersection of innovation, capability, and trust. With operations spanning three core sectors, Power, Industrial and Railways, the company is uniquely positioned to contribute to India's evolving economic ambitions. As the nation accelerates its journey toward self-reliance and global competitiveness, CG is ready to play a defining role in making India a manufacturing powerhouse for the world.
                                        In a time of disruption and reinvention, our goal is not merely to grow, but to lead - responsibly, strategically, and with a long-term vision.
                                    </p>
                                    <div className="leaderNameWrap">
                                        <div className="abtChairman-name">Vellayan Subbiah</div>
                                        <div className="abtDesignation">Chairman</div>
                                    </div>
                                </div>
                            </div>

                            <div className="secondDiv leaderFlexMob">
                                <img
                                    src={amarImg}
                                    alt="Leader 2"
                                    className="leader-img"
                                />
                                <div className='bgwhiteBox'>
                                    <h3 className="abtMsgChairman">Message from the Vice Chairman</h3>
                                    <p className="abtPara-text">With a legacy spanning more than 86 years, we stand
                                        as a significant player in the industrial machinery sector, dedicated to
                                        championing innovation and excellence. Our diverse portfolio, with Industrial
                                        Motors, Drives & Automations, Railway Products, Commercial Products,
                                        Transformers, and Switchgears, underscore our commitment to pioneering
                                        solutions that drive India's growth story forward.
                                        At CG, we are steadfast in our dedication to Environmental,
                                        Social, and Governance (ESG) principles and we continually strive
                                        for sustainable practices and positive societal impact. Our commitment
                                        to Corporate Social Responsibility (CSR) is integral to our operations,
                                        reflecting our broader mission to contribute meaningfully to the communities
                                        we serve. Discover more about how we are shaping a brighter future not only
                                        for India but also beyond.
                                    </p>
                                    <div className="leaderNameWrap">
                                        <div className="abtChairman-name">Amar Kaul</div>
                                        <div className="abtDesignation">Managing Director & CEO,
                                            CG Power and Industrial Solutions Limited</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </section>


            {/* Timeline Slider */}
            <section className="journey-section">
                <div className="cust-container">
                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>CG Through the Years</h2>
                            <p>From a pioneering start in 1878 to becoming a global name in electrical solutions,
                                CG's journey is one of innovation, expansion, and transformation.</p>
                        </div>
                    </div>
                </div>
                <TimelineSlider />
            </section>

            {/* Financial Stats */}
            <section class="financial-stats-section finaSectionBg">
                <div class="cust-container">
                    <div className="fBlockFin">
                        <div className="fLeftBlock">
                            <h2 class="abtFinTitle">
                                <span class="outlined-text">Impact</span><span class="abtSpanTitle">numbers</span>
                            </h2>
                        </div>
                        <div className="fRightBlock">
                            <div className="ftextPriceBlock">
                                <div className="fTextBlock">
                                    <p>Standalone Revenue</p>
                                </div>
                                <div className="fPriceBlock">
                                    <p>₹9,329 Cr <span>($1.06B)</span></p>
                                </div>
                            </div>
                            <div className="ftextPriceBlock">
                                <div className="fTextBlock">
                                    <p>Consolidated Revenue</p>
                                </div>
                                <div className="fPriceBlock">
                                    <p>₹9,909 Cr <span>($1.13B)</span></p>
                                </div>
                            </div>
                            <div className="ftextPriceBlock">
                                <div className="fTextBlock">
                                    <p>Unexecuted Order Book</p>
                                </div>
                                <div className="fPriceBlock">
                                    <p>₹10,631 Cr <span>($1.21B)</span></p>
                                </div>
                            </div>
                            <div className="ftextPriceBlock">
                                <div className="fTextBlock">
                                    <p>Order Intake Reached</p>
                                </div>
                                <div className="fPriceBlock">
                                    <p>₹13,526 Cr <span>($1.6B)</span></p>
                                </div>
                            </div>
                            <div className="ftextPriceBlock">
                                <div className="fTextBlock">
                                    <p>(PBT) Growth</p>
                                </div>
                                <div className="fPriceBlock">
                                    <p>17% <img src={upArrow} alt="" /></p>
                                </div>
                            </div>
                            <div className="ftextPriceBlock">
                                <div className="fTextBlock">
                                    <p>Revenue Growth YoY</p>
                                </div>
                                <div className="fPriceBlock">
                                    <p>23% <img src={upArrow} alt="" /></p>
                                </div>
                            </div>
                            <div className="ftextPriceBlock">
                                <div className="fTextBlock">
                                    <p>ROCE</p>
                                </div>
                                <div className="fPriceBlock">
                                    <p>33%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manufacturing Facilities */}
            <section className="section-manufacturing">
                <div className="cust-containerz">
                    <div className="cust-container" style={{ textAlign: 'left' }}>
                        <h2 className="manufacturing-title">World-class manufacturing facilities</h2>
                        <p className="manufacturing-subtitle">
                            CG's high-efficiency plants are setting new industry benchmarks across the world.
                        </p>
                    </div>

                    <div className="manufacturing-swiper-wrapper">
                        <div className="swiper-controls">
                            <span className="swiper-custom-prev"><img src={leftArrowSlide} alt="" /></span>
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
                                clickable: true,
                                el: ".swiper-custom-pagination",
                            }}
                            breakpoints={{
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
                                1024: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 40,
                                },
                                1280: {
                                    slidesPerView: 1.4,
                                    spaceBetween: 150,
                                },
                            }}
                        >
                            {[
                                {
                                    title: 'Distribution and Low Power Transformers’ Manufacturing Facility',
                                    desc: 'Malanpur, Madhya Pradesh, India',
                                    img: manuFactSlide1
                                },
                                {
                                    title: 'FHP Motors’ Manufacturing Facility',
                                    desc: 'Kundaim, Goa, India',
                                    img: manuFactSlide2
                                },
                                {
                                    title: 'Large Industrial Machines’ Manufacturing Facility',
                                    desc: 'Mandideep, Madhya Pradesh, India',
                                    img: manuFactSlide3
                                },
                                {
                                    title: 'LT Motors’ Manufacturing Facility',
                                    desc: 'Ahmednagar, Maharashtra, India',
                                    img: manuFactSlide4
                                },
                                {
                                    title: 'LT Motors’ Manufacturing Facility',
                                    desc: 'Colvale, Goa, India',
                                    img: manuFactSlide5
                                },
                                {
                                    title: 'Power Transformers’ Manufacturing Facility',
                                    desc: 'Mandideep, Madhya Pradesh, India',
                                    img: manuFactSlide6
                                },
                                {
                                    title: 'Switchgears’ Manufacturing Facility',
                                    desc: 'Aurangabad, Maharashtra, India',
                                    img: manuFactSlide7
                                },
                                {
                                    title: 'Switchgears’ Manufacturing Facility',
                                    desc: 'Nashik, Maharashtra, India.jpg',
                                    img: manuFactSlide8
                                },
                            ].map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="slide-card">
                                        <img src={item.img} className="slide-image" alt={item.title} />
                                        <div className="slide-overlay" />
                                        <div className="slide-text">
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                            {/* <a href="#">EXPLORE →</a> */}
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
