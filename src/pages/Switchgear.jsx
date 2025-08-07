import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import banner from "../components/assets/images/switchgear/swibaner.jpg";
import card1 from "../components/assets/images/switchgear/card1.jpg";
import card2 from "../components/assets/images/switchgear/card2.jpg";
import card3 from "../components/assets/images/switchgear/card3.jpg";
import card4 from "../components/assets/images/switchgear/card4.jpg";
import sliuser from "../components/assets/images/switchgear/sliuser.jpg";
import newproduct from "../components/assets/images/switchgear/newproduct.jpg";

import leftarow from "../components/assets/images/switchgear/leftarow.svg";
import rightarow from "../components/assets/images/switchgear/rightarow.svg";
import newproLeftarw from "../components/assets/images/switchgear/newpro-leftarw.svg";
import righnewproRightarwtarow from "../components/assets/images/switchgear/newpro-rightarw.svg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Switchgear = () => {

    const switchGearCards = [
        {title:'MEDIUM VOLTAGE (MV) SWITCHGEAR', desc:[
            {detail:'Our Medium Voltage (MV) switchgear range includes AIS (Indoor & Outdoor), MV GIS, RMUs, Vacuum Interrupters, Compact Substations, Relays, Reclosers, Contactors, Arresters, and Isolators. Designed with advanced protection, control, and automation, it ensures system stability and reduces downtime.'}
        ],
        slink:'', img:card1
        },
        {title:'POWER QUALITY SOLUTIONS', desc:[
            {detail:'Our Power Quality Solutions improve efficiency, stability, and reliability by mitigating disturbances and enhancing voltage profiles. We offer comprehensive solutions to ensure grid compliance, reduce penalties, and deliver uninterrupted, high-quality power for critical operations.'}
        ],
        slink:'', img:card2
        },
        {title:'RELAYS AND AUTOMATION', desc:[
            {detail:'Our Relays and Automation solutions enhance protection, control, and efficiency in power distribution systems with reliable, intelligent design.They enable digital transformation for smarter grid management, ensuring safe operations and improved uptime.'}
        ],
        slink:'', img:card3
        },
         {title:'HIGH VOLTAGE & EXTRA HIGH VOLTAGE', desc:[
            {detail:'We offer a comprehensive range of HV and EHV equipment (33kV to 800kV) designed for safety, reliability, and performance in critical transmission and distribution networks.Engineered to meet global standards, these solutions ensure grid stability, low maintenance, and long service life.'}
        ],
        slink:'', img:card4
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
            heading: "Second Slide",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ",
        },
        {
            img: newproduct,
            heading: "Third Slide",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ];

    const swiperRef = useRef(null);
      
   return (
    <>
    <section className="inner-comoonbanner">
        <div className="comonban">
            <img src={banner} alt="" />
        </div>
    </section>

    <section className="commonfrst-sec">
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
            {switchGearCards.map((item,id) => (
                    <li className="stack-card-item" id={`card-${id}`} data-total-cards={switchGearCards.length} style={{ '--index': `${id + 1}` }} key={id}>
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
                </li>
            ))}
            </ul>
        </div>
    </div>
    
   </section>

   <section className="swiperslider-sec comntbmargn pb-0">
        <div className="cust-container">
            <div className="common-heading-sec">
                <div className="comon-head-inner">
                    <h2>Client Testimonials</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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
                    992: {
                        slidesPerView: 2
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
                    pagination={{ el: ".custom-pagination",clickable: true }}
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
                    <button className="custom-nav prev" onClick={() => swiperRef.current?.slidePrev()}> <img src={newproLeftarw} alt="" /> </button>
                    <button className="custom-nav next" onClick={() => swiperRef.current?.slideNext()}> <img src={righnewproRightarwtarow} alt="" /> </button>
                </div>
                
            </div>
        </div>
    </section>
    </>
  );
};

export default Switchgear;