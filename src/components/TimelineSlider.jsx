// TimelineSlider.jsx
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import aboutSlide1 from '../components/assets/images/about/abt-slider-journey-1.png';
import aboutSlide2 from '../components/assets/images/about/journey-slider-about2.webp';
import WaveSvg1 from '../components/assets/images/about/wave-svg1.svg';
import WaveSvg2 from '../components/assets/images/about/wave-svg2.svg';
// import "./TimelineSlider.css";

const contentData = [
    {
        year: "1878",
        img: `${aboutSlide1}`,
        title: "Our Beginning in England",
        desc: "Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.",
        color: "#005CAB",
        wave: "green",
        // wave: `${WaveSvg1}`
    },
    {
        year: "1937",
        img: `${aboutSlide2}`,
        title: "Expansion",
        desc: "Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.",
        color: "#1f78d1",
        wave: "blue"
    },
    {
        year: "1960",
        img: `${aboutSlide1}`,
        title: "Innovation",
        desc: "Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.",
        color: "#005CAB",
        wave: "green"
    },
    {
        year: "1982",
        img: `${aboutSlide2}`,
        title: "Leadership",
        desc: "Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.",
        color: "#1f78d1",
        wave: "blue"
    }
];

const TimelineSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const greenPathRef = useRef(null);
    const bluePathRef = useRef(null);
    const yearRef = useRef(null);

    const updateYear = (index) => {
        if (yearRef.current) {
            yearRef.current.textContent = contentData[index].year;
        }
    };

    return (
        <section className="timeline-section">
            <div className="year-bg" ref={yearRef}>{contentData[0].year}</div>
            <div className="swiper-container-wrapper">

                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={600}
                    slidesPerView={1}
                    spaceBetween={40}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                        updateYear(swiper.realIndex);
                    }}
                    className="timeline-swiper"
                >
                    {contentData.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="timeline-slide">
                                <div className="timeline-left">
                                    <img src={item.img} alt={item.year} className="timeline-img" />
                                </div>
                                <div className="timeline-center">
                                    <div
                                        className={`timeline-dot ${item.wave}`}
                                        data-year={item.year}
                                    >
                                        {item.year}
                                    </div>
                                    <div
                                        className="connector-line"
                                        style={{ background: item.color }}
                                    ></div>
                                </div>
                                <div className="timeline-right">
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="wave-wrapper fixed-wave">
                    <img
                        src={WaveSvg1}
                        alt="Green Wave"
                        className="wave-image green-wave"
                    />
                    <img
                        src={WaveSvg2}
                        alt="Blue Wave"
                        className="wave-image blue-wave"
                    />
                </div>
                <div className="swiper-navigation center-aligned YearsNav">
                    <div className="swiper-button-prev"><FaChevronLeft /></div>
                    <div className="swiper-button-next"><FaChevronRight /></div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSlider;
