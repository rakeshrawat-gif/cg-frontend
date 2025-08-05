// TimelineSlider.jsx
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import aboutSlide1 from '../components/assets/images/about/abt-slider-journey-1.png';
import aboutSlide2 from '../components/assets/images/about/abt-slider-journey-1.png';
import WaveSvg1 from '../components/assets/images/about/wave-svg1.svg';
import WaveSvg2 from '../components/assets/images/about/wave-svg2.svg';
// import "./TimelineSlider.css";

const contentData = [
    {
        year: "2002",
        img: `${aboutSlide1}`,
        title: "Our Beginning in England",
        desc: "Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.",
        color: "#005CAB",
        wave: "green",
        // wave: `${WaveSvg1}`
    },
    {
        year: "2005",
        img: `${aboutSlide2}`,
        title: "Expansion",
        desc: "Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.",
        color: "#1f78d1",
        wave: "blue"
    },
    {
        year: "2010",
        img: `${aboutSlide1}`,
        title: "Innovation",
        desc: "Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.",
        color: "#005CAB",
        wave: "green"
    },
    {
        year: "2018",
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

    const getDotY = (dotEl, pathEl) => {
        const dotRect = dotEl.getBoundingClientRect();
        const waveRect = pathEl.getBoundingClientRect();
        const t = (dotRect.left + dotRect.width / 2 - waveRect.left) / waveRect.width;
        const point = pathEl.getPointAtLength(t * pathEl.getTotalLength());
        return point.y;
    };

    // useEffect(() => {
    //     const updateDotPositions = () => {
    //         document.querySelectorAll(".timeline-dot").forEach((dot) => {
    //             const wave = dot.classList.contains("blue") ? bluePathRef.current : greenPathRef.current;
    //             const y = getDotY(dot, wave);

    //             // Offset wave Y so it's aligned with the bottom of the container
    //             const svgBottomOffset = document.querySelector(".wave-svg").getBoundingClientRect().bottom;
    //             const swiperTopOffset = document.querySelector(".swiper-container-wrapper").getBoundingClientRect().top;
    //             const relativeY = y + (svgBottomOffset - swiperTopOffset) - 80; // 80 is padding-top of swiper section

    //             dot.style.transform = `translateY(${relativeY}px)`;

    //             const connector = dot.nextElementSibling;
    //             if (connector) {
    //                 connector.style.top = `0`;
    //                 connector.style.height = `${relativeY}px`; // draw line from dot upward
    //             }
    //         });
    //     };
    //     setTimeout(updateDotPositions, 300);
    //     window.addEventListener("resize", updateDotPositions);
    //     return () => window.removeEventListener("resize", updateDotPositions);
    // }, []);

    useEffect(() => {
        const updateDotPositions = () => {
            const waveSvg = document.querySelector(".wave-svg");
            const waveRect = waveSvg.getBoundingClientRect();
            const swiperRect = document.querySelector(".timeline-swiper").getBoundingClientRect();

            document.querySelectorAll(".timeline-dot").forEach((dot) => {
                const wave = dot.classList.contains("blue") ? bluePathRef.current : greenPathRef.current;
                const dotRect = dot.getBoundingClientRect();

                // Get the X position of the dot relative to wave path
                const dotCenterX = dotRect.left + dotRect.width / 2;
                const t = (dotCenterX - waveRect.left) / waveRect.width;

                // Get corresponding Y point on path
                const waveY = wave.getPointAtLength(t * wave.getTotalLength()).y;

                // Compute final Y position relative to the container
                const relativeY = waveY - 60; // Adjust this number to position dot on wave

                // Apply position to dot
                dot.style.transform = `translate(-50%, ${relativeY}px)`;

                // Update connector line (from dot upwards to image)
                const connector = dot.nextElementSibling;
                if (connector) {
                    connector.style.top = `0`;
                    connector.style.height = `${relativeY}px`;
                }
            });
        };

        setTimeout(updateDotPositions, 300);
        window.addEventListener("resize", updateDotPositions);
        return () => window.removeEventListener("resize", updateDotPositions);
    }, []);


    return (
        <section className="timeline-section">
            <div className="year-bg" ref={yearRef}>{contentData[0].year}</div>
            <svg className="wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path
                    ref={greenPathRef}
                    id="greenWavePath"
                    d="M0,60 
       C180,10 360,110 540,60 
       S900,10 1080,60 
       S1260,110 1440,60"
                    fill="none"
                    stroke="#57b246"
                    strokeWidth="1.5"
                />
                <path
                    ref={bluePathRef}
                    id="blueWavePath"
                    d="M0,60 
       C160,100 320,20 480,60 
       S800,100 960,60 
       S1280,20 1440,60"
                    fill="none"
                    stroke="#1f78d1"
                    strokeWidth="1.5"
                />
            </svg>
            <div className="swiper-container-wrapper">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
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
                <div className="swiper-navigation center-aligned YearsNav">
                    <div className="swiper-button-prev"><FaChevronLeft /></div>
                    <div className="swiper-button-next"><FaChevronRight /></div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSlider;
