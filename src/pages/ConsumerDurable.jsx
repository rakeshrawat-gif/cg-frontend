import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, FreeMode } from 'swiper/modules';

import banner from "../components/assets/images/swibaner.jpg";

import BannerMobSlider from '../components/assets/images/home/bannerslidemob.jpg';
import deskhomeban1 from '../components/assets/images/consumerdurable/banner1.jpg';
import deskhomeban2 from '../components/assets/images/consumerdurable/banner2.jpg';
import deskhomeban3 from '../components/assets/images/consumerdurable/banner3.jpg';
import mobhomeban1 from '../components/assets/images/consumerdurable/mobhomeban1.jpg';
import mobhomeban2 from '../components/assets/images/consumerdurable/mobhomeban2.jpg';
import mobhomeban3 from '../components/assets/images/consumerdurable/mobhomeban3.jpg';

import banleftarw from '../components/assets/images/home/bannerleftarw.svg';
import banrghtarw from '../components/assets/images/home/bannerrightarw.svg';
import conic1 from "../components/assets/images/consumerdurable/conic1.svg";
import conic2 from "../components/assets/images/consumerdurable/conic2.svg";
import conic3 from "../components/assets/images/consumerdurable/conic3.svg";
import conic4 from "../components/assets/images/consumerdurable/conic4.svg";
import conic5 from "../components/assets/images/consumerdurable/conic5.svg";
import prod1 from "../components/assets/images/consumerdurable/prod1.jpg";
import prod2 from "../components/assets/images/consumerdurable/prod2.jpg";
import prod3 from "../components/assets/images/consumerdurable/prod3.jpg";
import prod4 from "../components/assets/images/consumerdurable/prod4.jpg";

const ConsumerDurable = () => {

    const discoverProductArr = [
        { img: prod1, distitle: 'Stay Cool, Save More.', disdesc: `Power-packed airflow<br/> with energy-saving.`, dislink: '' },
        { img: prod2, distitle: 'Instant Warmth,<br/> Endless Comfort', disdesc: `Instant hot water for<br/> ultimate comfort.`, dislink: '' },
        { img: prod3, distitle: 'Beat the Heat, Instantly.', disdesc: `Power-packed airflow<br/> with energy-saving.`, dislink: '' },
        { img: prod4, distitle: 'Smart Tools,<br/> Easy Living.', disdesc: `Appliances that simplify<br/> your day-to-day life.`, dislink: '' },
    ]

    const tabData = [
        {
            tabimg: conic1, tabtitle: 'Fans', content: [
                {
                    acttabtitle: 'BLDC Ceiling Fan', acttabitemarr: [
                        { acttabitemlabel: 'BLDC Ceiling Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Ceiling Fan', acttabitemarr: [
                        { acttabitemlabel: 'Eco Ceiling Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'Standard Ceiling Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'Premium Ceiling Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'TPW Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Table Fan', acttabitemarr: [
                        { acttabitemlabel: 'Table Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'Table Fan2', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Pedestal Fan', acttabitemarr: [
                        { acttabitemlabel: 'Pedestal Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Wall Fan', acttabitemarr: [
                        { acttabitemlabel: 'Wall Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Tower Fan', acttabitemarr: [
                        { acttabitemlabel: 'Tower Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Exhaust Fan', acttabitemarr: [
                        { acttabitemlabel: 'Exhaust Fan', acttabitemlink: '' }
                    ]
                },
            ]
        },
        {
            tabimg: conic2, tabtitle: 'Air Coolers', content: [
                {
                    acttabtitle: 'Desert Cooler', acttabitemarr: [
                        { acttabitemlabel: 'Desert Cooler', acttabitemlink: '' }
                    ]
                },
                 {
                    acttabtitle: 'Personal Cooler', acttabitemarr: [
                        { acttabitemlabel: 'Personal Cooler', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Tower Cooler', acttabitemarr: [
                        { acttabitemlabel: 'Tower Cooler', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Window Cooler', acttabitemarr: [
                        { acttabitemlabel: 'Window Cooler', acttabitemlink: '' }
                    ]
                },
                // {
                //     acttabtitle: 'Ceiling Fan', acttabitemarr: [
                //         { acttabitemlabel: 'Eco Ceiling Fan', acttabitemlink: '' },
                //         { acttabitemlabel: 'Standard Ceiling Fan', acttabitemlink: '' },
                //         { acttabitemlabel: 'Premium Ceiling Fan', acttabitemlink: '' },
                //         { acttabitemlabel: 'TPW Fan', acttabitemlink: '' }
                //     ]
                // }
            ]
        },
        {
            tabimg: conic3, tabtitle: 'Geysers & Heaters', content: [
                {
                    acttabtitle: 'BLDC Ceiling Fan', acttabitemarr: [
                        { acttabitemlabel: 'BLDC Ceiling Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Ceiling Fan', acttabitemarr: [
                        { acttabitemlabel: 'Eco Ceiling Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'Standard Ceiling Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'Premium Ceiling Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'TPW Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Table Fan', acttabitemarr: [
                        { acttabitemlabel: 'Table Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'Table Fan2', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Pedestal Fan', acttabitemarr: [
                        { acttabitemlabel: 'Pedestal Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Wall Fan', acttabitemarr: [
                        { acttabitemlabel: 'Wall Fan', acttabitemlink: '' }
                    ]
                }
            ]
        },
        {
            tabimg: conic4, tabtitle: 'Home Appliances', content: [
                {
                    acttabtitle: 'BLDC Ceiling Fan', acttabitemarr: [
                        { acttabitemlabel: 'BLDC Ceiling Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Table Fan', acttabitemarr: [
                        { acttabitemlabel: 'Table Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Pedestal Fan', acttabitemarr: [
                        { acttabitemlabel: 'Pedestal Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Wall Fan', acttabitemarr: [
                        { acttabitemlabel: 'Wall Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Tower Fan', acttabitemarr: [
                        { acttabitemlabel: 'Tower Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Exhaust Fan', acttabitemarr: [
                        { acttabitemlabel: 'Exhaust Fan', acttabitemlink: '' }
                    ]
                },
            ]
        },
        {
            tabimg: conic5, tabtitle: 'Water Pumps', content: [
                {
                    acttabtitle: 'BLDC Ceiling Fan', acttabitemarr: [
                        { acttabitemlabel: 'BLDC Ceiling Fan', acttabitemlink: '' }
                    ]
                },
                {
                    acttabtitle: 'Ceiling Fan', acttabitemarr: [
                        { acttabitemlabel: 'Eco Ceiling Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'Standard Ceiling Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'Premium Ceiling Fan', acttabitemlink: '' },
                        { acttabitemlabel: 'TPW Fan', acttabitemlink: '' }
                    ]
                }
            ]
        }
    ]

    const [activeIndex, setActiveIndex] = useState(null);
    const activeTab = tabData[activeIndex];

    return (
        <>
            {/* Home Banner Carousel Section for durable page*/}
            <section className="inner-comoonbanner home-banner-carousl-sec consumer-durable-sec">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    className="homebanercarousel"
                >
                    <SwiperSlide>
                        <div className="slide-content">
                            <div className="swiperlid-img">
                                <picture>
                                    <source media="(min-width:740px)" srcSet={deskhomeban1} />
                                    <img src={mobhomeban1} alt="Banner 1" />
                                </picture>
                            </div>
                            {/* <div className="slide-content-desc">
                                <h1>Driving Change with Purpose and Care</h1>
                                <hr />
                                <p>Delivering solutions that empower businesses and elevate lives</p>
                                <a href="#" className="homeswiperslidcta">Build a Better Future with Us</a>
                            </div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <div className="swiperlid-img">
                                <picture>
                                    <source media="(min-width:740px)" srcSet={deskhomeban2} />
                                    <img src={mobhomeban2} alt="Banner 2" />
                                </picture>
                            </div>
                            <div className="slide-content-desc">
                                <h1>Get in touch with our customer care team</h1>
                                <a href="#" className="homeswiperslidcta">Get in Touch</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <div className="swiperlid-img">
                                <picture>
                                    <source media="(min-width:740px)" srcSet={deskhomeban3} />
                                    <img src={mobhomeban3} alt="Banner 3" />
                                </picture>
                            </div>
                            <div className="slide-content-desc">
                                <h1>At the Heart of Your Homes Since 1937</h1>
                                <a href="#" className="homeswiperslidcta">View Products</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                    <div className="homeswipernav">
                        <div className="swiper-button-next">
                            <img src={banrghtarw} alt="" />
                        </div>
                        <div className="swiper-button-prev">
                            <img src={banleftarw} alt="" />
                        </div>
                    </div>
                </Swiper>
            </section>

            <section className="commonfrst-sec">
                <div className="cust-container">
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Consumer Durables</li>
                        </ol>
                    </div>
                </div>



                <div className="product-display-tabs consumerpro-tab" onMouseLeave={() => setActiveIndex(null)}>
                    {/* <!-- Tabs --> */}
                    <div className="cust-container">
                        <div className="tabs-container commcntabui tabbotborder consumerproduct d-flex">
                            <ul className="nav nav-tabs" id="pdpdetailTab" role="tablist">
                                {tabData.map((item, id) => (
                                    <li className="nav-item">
                                        <a
                                            key={id}
                                            className={`nav-link ${activeIndex === id ? 'active' : ''}`}
                                            onMouseEnter={() => setActiveIndex(id)}>
                                            <img src={item.tabimg} alt="" />
                                            {item.tabtitle}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Tab Content --> */}
                    <div className="tab-content comccontabcontent consumerproduct-cntnt pl-0" id="pdpdetailTabContent">
                        {/* <!-- product1 Tab --> */}
                        {activeIndex !== null && (
                        <div className="tab-pane fade show active" id="product1" role="tabpanel">
                            <div className="consumer-product-container">
                                {tabData[activeIndex].content.map((section, idx) => (
                                    <div className="consumer-product-item" key={idx}>
                                        <h4>{section.acttabtitle}</h4>
                                        {section.acttabitemarr.map((listItem, idxs) => (
                                            <a href={listItem.acttabitemlink} key={idxs}>{listItem.acttabitemlabel}</a>
                                        ))}
                                        {/* <a href="#">BLDC Ceiling Fan</a> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}
                        {/* <!-- product2 Tab --> */}
                        {/* <div className="tab-pane fade" id="product2" role="tabpanel">
                                <div className="consumer-product-container">
                                <div className="consumer-product-item">
                                    <h4>BLDC Ceiling Fan</h4>
                                    <a href="#">BLDC Ceiling Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Ceiling Fan</h4>
                                    <a href="#">Eco Ceiling Fan</a>
                                    <a href="#">Standard Ceiling Fan</a>
                                    <a href="#">Premium Ceiling Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Table Fan</h4>
                                    <a href="#">Table Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Pedestal Fan</h4>
                                    <a href="#">Pedestal Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Tower Fan</h4>
                                    <a href="#">Tower Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Exhaust Fan</h4>
                                    <a href="#">Exhaust Fan</a>
                                </div>
                                </div>
                            </div> */}
                        {/* <!-- product3 Tab --> */}
                        {/* <div className="tab-pane fade" id="product3" role="tabpanel">
                                <div className="consumer-product-container">
                                <div className="consumer-product-item">
                                    <h4>BLDC Ceiling Fan</h4>
                                    <a href="#">BLDC Ceiling Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Ceiling Fan</h4>
                                    <a href="#">Eco Ceiling Fan</a>
                                    <a href="#">Standard Ceiling Fan</a>
                                    <a href="#">Premium Ceiling Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Table Fan</h4>
                                    <a href="#">Table Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Pedestal Fan</h4>
                                    <a href="#">Pedestal Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Wall Fan</h4>
                                    <a href="#">Wall Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Tower Fan</h4>
                                    <a href="#">Tower Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Exhaust Fan</h4>
                                    <a href="#">Exhaust Fan</a>
                                </div>
                                </div>
                            </div> */}
                        {/* <!-- product4 Tab --> */}
                        {/* <div className="tab-pane fade" id="product4" role="tabpanel">
                                <div className="consumer-product-container">
                                <div className="consumer-product-item">
                                    <h4>BLDC Ceiling Fan</h4>
                                    <a href="#">BLDC Ceiling Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Ceiling Fan</h4>
                                    <a href="#">Eco Ceiling Fan</a>
                                    <a href="#">Standard Ceiling Fan</a>
                                    <a href="#">Premium Ceiling Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Table Fan</h4>
                                    <a href="#">Table Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Pedestal Fan</h4>
                                    <a href="#">Pedestal Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Wall Fan</h4>
                                    <a href="#">Wall Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Tower Fan</h4>
                                    <a href="#">Tower Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Exhaust Fan</h4>
                                    <a href="#">Exhaust Fan</a>
                                </div>
                                </div>
                            </div> */}
                        {/* <!-- product5 Tab --> */}
                        {/* <div className="tab-pane fade" id="product5" role="tabpanel">
                                <div className="consumer-product-container">
                                <div className="consumer-product-item">
                                    <h4>BLDC Ceiling Fan</h4>
                                    <a href="#">BLDC Ceiling Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Ceiling Fan</h4>
                                    <a href="#">Eco Ceiling Fan</a>
                                    <a href="#">Standard Ceiling Fan</a>
                                    <a href="#">Premium Ceiling Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Table Fan</h4>
                                    <a href="#">Table Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Pedestal Fan</h4>
                                    <a href="#">Pedestal Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Wall Fan</h4>
                                    <a href="#">Wall Fan</a>
                                </div>

                                <div className="consumer-product-item">
                                    <h4>Tower Fan</h4>
                                    <a href="#">Tower Fan</a>
                                </div>

                                </div>
                            </div> */}

                    </div>
                </div>

                <div className="cust-container">
                    <div className="common-heading-sec tbspac">
                        <div className="comon-head-inner">
                            <h2>Discover Our Products</h2>
                            <p>High-quality appliances engineered for performance and reliability</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stackcard-sec consumerdurable-stackcard-sec">
                <div className="cust-container">
                    <div className="stack-card-animation stackcard-consumer">
                        <ul id="stack-cards-ul" style={{ '--numcards': `${discoverProductArr.length}` }}>
                            {discoverProductArr.map((item, id) => (
                                <li className="stack-card-item" id={`card-${id}`} data-total-cards={discoverProductArr.length} style={{ '--index': `${id + 1}` }} key={id}>
                                    <div className="card-content" style={{ backgroundImage: `url(${item.img})` }}>
                                        <div className="card-contentdesc">
                                            <h4 dangerouslySetInnerHTML = {{__html: item.distitle}}/>
                                            <p dangerouslySetInnerHTML = {{ __html: item.disdesc}} />
                                            <div className="card-contentcta">
                                                <a href={item.dislink}>View Products</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ConsumerDurable;