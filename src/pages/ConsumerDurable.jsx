import React, { useState } from 'react';

import banner from "../components/assets/images/swibaner.jpg";
import conic1 from "../components/assets/images/consumerdurable/conic1.svg";
import conic2 from "../components/assets/images/consumerdurable/conic2.svg";
import conic3 from "../components/assets/images/consumerdurable/conic3.svg";
import conic4 from "../components/assets/images/consumerdurable/conic4.svg";
import conic5 from "../components/assets/images/consumerdurable/conic5.svg";
import prod1 from "../components/assets/images/consumerdurable/prod1.jpg";
import prod2 from "../components/assets/images/consumerdurable/prod2.jpg";
import prod3 from "../components/assets/images/consumerdurable/prod3.jpg";
import prod4 from "../components/assets/images/consumerdurable/prod4.jpg";

const ConsumerDurable = () =>{

    const discoverProductArr = [
        {img:prod1, distitle:'Stay Cool, Save More.', disdesc:`Power-packed airflow with energy-saving.`, dislink:''},
        {img:prod2, distitle:'Instant Warmth, Endless Comfort', disdesc:`Instant hot water for ultimate comfort.`, dislink:''},
        {img:prod3, distitle:'Beat the Heat, Instantly.', disdesc:`Power-packed airflow with energy-saving.`, dislink:''},
        {img:prod4, distitle:'Smart Tools, Easy Living.', disdesc:`Appliances that simplify your day-to-day life.`, dislink:''},
    ]

    const tabData=[
        {tabimg:conic1, tabtitle:'Fans', content:[
            {acttabtitle:'BLDC Ceiling Fan',acttabitemarr:[
                {acttabitemlabel:'BLDC Ceiling Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Ceiling Fan',acttabitemarr:[
                {acttabitemlabel:'Eco Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'Standard Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'Premium Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'TPW Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Table Fan',acttabitemarr:[
                {acttabitemlabel:'Table Fan',acttabitemlink:''},
                {acttabitemlabel:'Table Fan2',acttabitemlink:''}
            ]},
            {acttabtitle:'Pedestal Fan',acttabitemarr:[
                {acttabitemlabel:'Pedestal Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Wall Fan',acttabitemarr:[
                {acttabitemlabel:'Wall Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Tower Fan',acttabitemarr:[
                {acttabitemlabel:'Tower Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Exhaust Fan',acttabitemarr:[
                {acttabitemlabel:'Exhaust Fan',acttabitemlink:''}
            ]},
        ]},
        {tabimg:conic2, tabtitle:'Air Coolers', content:[
            {acttabtitle:'BLDC Ceiling Fan',acttabitemarr:[
                {acttabitemlabel:'BLDC Ceiling Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Ceiling Fan',acttabitemarr:[
                {acttabitemlabel:'Eco Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'Standard Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'Premium Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'TPW Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Table Fan',acttabitemarr:[
                {acttabitemlabel:'Table Fan',acttabitemlink:''},
                {acttabitemlabel:'Table Fan2',acttabitemlink:''}
            ]},
            {acttabtitle:'Pedestal Fan',acttabitemarr:[
                {acttabitemlabel:'Pedestal Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Wall Fan',acttabitemarr:[
                {acttabitemlabel:'Wall Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Tower Fan',acttabitemarr:[
                {acttabitemlabel:'Tower Fan',acttabitemlink:''}
            ]}
        ]},
        {tabimg:conic3, tabtitle:'Geysers & Heaters', content:[
            {acttabtitle:'BLDC Ceiling Fan',acttabitemarr:[
                {acttabitemlabel:'BLDC Ceiling Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Ceiling Fan',acttabitemarr:[
                {acttabitemlabel:'Eco Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'Standard Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'Premium Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'TPW Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Table Fan',acttabitemarr:[
                {acttabitemlabel:'Table Fan',acttabitemlink:''},
                {acttabitemlabel:'Table Fan2',acttabitemlink:''}
            ]},
            {acttabtitle:'Pedestal Fan',acttabitemarr:[
                {acttabitemlabel:'Pedestal Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Wall Fan',acttabitemarr:[
                {acttabitemlabel:'Wall Fan',acttabitemlink:''}
            ]}
        ]},
        {tabimg:conic4, tabtitle:'Home Appliances', content:[
            {acttabtitle:'BLDC Ceiling Fan',acttabitemarr:[
                {acttabitemlabel:'BLDC Ceiling Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Table Fan',acttabitemarr:[
                {acttabitemlabel:'Table Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Pedestal Fan',acttabitemarr:[
                {acttabitemlabel:'Pedestal Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Wall Fan',acttabitemarr:[
                {acttabitemlabel:'Wall Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Tower Fan',acttabitemarr:[
                {acttabitemlabel:'Tower Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Exhaust Fan',acttabitemarr:[
                {acttabitemlabel:'Exhaust Fan',acttabitemlink:''}
            ]},
        ]},
        {tabimg:conic5, tabtitle:'Water Pumps', content:[
            {acttabtitle:'BLDC Ceiling Fan',acttabitemarr:[
                {acttabitemlabel:'BLDC Ceiling Fan',acttabitemlink:''}
            ]},
            {acttabtitle:'Ceiling Fan',acttabitemarr:[
                {acttabitemlabel:'Eco Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'Standard Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'Premium Ceiling Fan',acttabitemlink:''},
                {acttabitemlabel:'TPW Fan',acttabitemlink:''}
            ]}
        ]}
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const activeTab = tabData[activeIndex];

    return(
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
                            <li className="breadcrumb-item active" aria-current="page">Consumer Durables</li>
                        </ol>
                    </div>
                </div>   



                    <div className="product-display-tabs consumerpro-tab">
                            {/* <!-- Tabs --> */}
                            <div className="cust-container">
                                <div className="tabs-container commcntabui tabbotborder consumerproduct d-flex">
                                    <ul className="nav nav-tabs" id="pdpdetailTab" role="tablist">
                                        {tabData.map((item,id) => (
                                            <li className="nav-item">
                                                <a
                                                    key={id}
                                                    className={`nav-link ${activeIndex === id ? 'active' : ''}`}
                                                    onClick={() => setActiveIndex(id)}>
                                                    <img src={item.tabimg} alt="" />{item.tabtitle}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* <!-- Tab Content --> */}
                            <div className="tab-content comccontabcontent consumerproduct-cntnt pl-0" id="pdpdetailTabContent">
                            {/* <!-- product1 Tab --> */}
                            <div className="tab-pane fade show active" id="product1" role="tabpanel">
                                <div className="consumer-product-container">
                                    {activeTab.content.map((section,idx) =>(
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

            <section className="stackcard-sec">
                <div className="cust-container">
                    <div className="stack-card-animation stackcard-consumer">
                        <ul id="stack-cards-ul" style={{'--numcards': `${discoverProductArr.length}`}}>
                            {discoverProductArr.map((item,id) => (
                                <li className="stack-card-item" id={`card-${id}`} data-total-cards={discoverProductArr.length} style={{ '--index': `${id + 1}` }} key={id}>
                                    <div className="card-content" style={{backgroundImage: `url(${item.img})`}}>
                                        <div className="card-contentdesc">
                                            <h4>{item.distitle}</h4>
                                            <p>{item.disdesc}</p>
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