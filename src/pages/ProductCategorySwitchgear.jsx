import React, { useState, useEffect } from "react";
import bannerImg from "../components/assets/images/swibaner.jpg";

import ArrowGreenIcon from '../components/assets/images/product_category_switchgear/arrowGreenIcon.svg';
import allProdImg1 from '../components/assets/images/product_category_switchgear/Current_Voltage_Transformers.png';
import allProdImg2 from '../components/assets/images/product_category_switchgear/Inductive_Voltage_Transformers.png';
import allProdImg3 from '../components/assets/images/product_category_switchgear/Capacitive_Voltage_Transformers.png';
import allProdImg4 from '../components/assets/images/product_category_switchgear/no-image.png';
import allProdImg5 from '../components/assets/images/product_category_switchgear/SF6-Circuit-Breaker.png';
import allProdImg6 from '../components/assets/images/product_category_switchgear/Disconnector.png';
import allProdImg7 from '../components/assets/images/product_category_switchgear/OIP.png';

const tabs = [
    { name: "Instrument Transformers" },
    { name: "Condenser Bushings" },
    { name: "Turnkey Solutions" },
    { name: "All Products" }
];

const allProducts = [
    {
        img: allProdImg1,
        title: "Current Voltage Transformers",
        text: "CG is a trusted name in high-voltage instrumentation, with a significant global presence of ...",
        category: "Instrument Transformers"
    },
    {
        img: allProdImg2,
        title: "Inductive Voltage Transformers",
        text: "For decades, CG has been a trusted leader in power solutions, with over 15,000 of our ...",
        category: "Instrument Transformers"
    },
    {
        img: allProdImg3,
        title: "Capacitive Voltage Transformers",
        text: "For over six decades, CG has been a trusted manufacturer and global supplier of high-quality ...",
        category: "Instrument Transformers"
    },
    {
        img: allProdImg4,
        title: "Power Voltage Transformers",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...",
        category: "Instrument Transformers"
    },
    {
        img: allProdImg5,
        title: "SF6 Circuit Breaker",
        text: "At CG, Our SF₆-insulated Dead Tank Breakers are engineered for durability and high performance .."
    },
    {
        img: allProdImg4,
        title: "Surge Arrestors",
        text: "CG’s Surge Arresters provide reliable overvoltage protection across power networks..."
    },
    {
        img: allProdImg6,
        title: "Disconnector",
        text: "At CG, disconnectors are built with advanced technology and designed to complement our ..."
    },
    {
        img: allProdImg7,
        title: "GIS & Dead Tank Breaker",
        text: "At CG, we offer Gas Insulated Substations ranging from 66kV to 245kV in both three-phase and ..."
    },
    {
        img: allProdImg7,
        title: "OIP",
        text: "Condenser bushings (also known as capacitor bushings) are high-voltage insulating devices used..."
    },
    {
        img: allProdImg4,
        title: "RIP",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ..."
    },
    {
        img: allProdImg4,
        title: "Electrical Power Distribution",
        text: "CG’s Transmission and Distribution Systems Group offers extensive expertise in ..."
    }
];

const ProductCategorySwitchgear = () => {
    const [selectedTab, setSelectedTab] = useState("Instrument Transformers");
    const [isMobileView, setIsMobileView] = useState(false);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        const apply = () => {
            const mobile = mq.matches;
            setIsMobileView(mobile);
            setVisibleCount(mobile ? 6 : allProducts.length);
        };
        apply();
        mq.addEventListener("change", apply);
        return () => mq.removeEventListener("change", apply);
    }, []);

    const itemsToShow =
        selectedTab === "All Products"
            ? isMobileView
                ? visibleCount
                : allProducts.length
            : 4; // categories show only 4 items

    const productsToRender =
        selectedTab === "All Products"
            ? allProducts.slice(0, itemsToShow)
            : allProducts.filter((prod) => prod.category === selectedTab).slice(0, itemsToShow);

    return (
        <>
            <section className="inner-comoonbanner">
                <div className="comonban">
                    <img src={bannerImg} alt="Leadership and Top Management" />
                </div>
            </section>
            <section className="commonfrst-sec">
                <div className="cust-container">
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Switchgears</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                High Voltage & Extra High Voltage
                            </li>
                        </ol>
                    </div>

                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>High Voltage & Extra High Voltage</h2>
                            <p>
                                CG offers a comprehensive range of High Voltage (HV) and Extra High Voltage (EHV)
                                equipment engineered to ensure safety, reliability, and performance in critical
                                power transmission and distribution networks. Our solutions are designed for
                                pplications ranging from 33kV to 800kV, supporting grid stability and operational
                                excellence. These offerings are built to meet stringent international standards
                                and support modern grid requirements with high reliability, minimal maintenance,
                                and extended service life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mapfilter-sec leadershipSec ProductSwitchSec">
                <div className="cust-container">
                    {/* Tabs Sections */}
                    <div className="contacttabs">
                        {tabs.map((tab, idx) => (
                            <button
                                key={idx}
                                className={`tab ${selectedTab === tab.name ? "active" : ""}`}
                                onClick={() => setSelectedTab(tab.name)}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* <div className="tab-content">
                        {selectedTab === "Instrument Transformers" && (
                            <section>
                                <h3>Instrument Transformers</h3>
                                <p>Content for Instrument Transformers goes here.</p>
                            </section>
                        )}
                        {selectedTab === "Condenser Bushings" && (
                            <section>
                                <h3>Condenser Bushings</h3>
                                <p>Content for Condenser Bushings goes here.</p>
                            </section>
                        )}
                        {selectedTab === "Turnkey Solutions" && (
                            <section>
                                <h3>Turnkey Solutions</h3>
                                <p>Content for Turnkey Solutions goes here.</p>
                            </section>
                        )}
                        {selectedTab !== "All Products" && (
                            <section className="all-products-switchgear">
                                <div className="products-grid">
                                    {allProducts.map((prod, idx) => (
                                        <div key={idx} className="product-card">
                                            <img src={prod.img} alt={prod.title} className="product-img" />
                                            <div className="allProdTextDiv">
                                                <h4 className="product-title">{prod.title}</h4>
                                                <p className="product-text">{prod.text}</p>
                                                <button className="know-more-btn">
                                                    Know More
                                                    <img src={ArrowGreenIcon} alt="arrow" className="arrow-icon" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div> */}
                    {/* Tab Sections */}
                    <div className="tab-content">
                        {selectedTab !== "All Products" ? (
                            <section className="all-products-switchgear">
                                <div className="products-grid">
                                    {allProducts
                                        .filter(prod => prod.category === selectedTab) // filter by category
                                        .slice(0, 4) // only first 4
                                        .map((prod, idx) => (
                                            <div key={idx} className="product-card">
                                                <div className="product-img-wrap">
                                                    <img src={prod.img} alt={prod.title} className="product-img" />
                                                </div>
                                                <div className="allProdTextDiv">
                                                    <h4 className="product-title">{prod.title}</h4>
                                                    <p className="product-text">{prod.text}</p>
                                                    <button className="know-more-btn">
                                                        Know More
                                                        <img src={ArrowGreenIcon} alt="arrow" className="arrow-icon" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </section>
                        ) : (
                            <section className="all-products-switchgear">
                                <div className="products-grid">
                                    {productsToRender.map((prod, idx) => (
                                        <div key={idx} className="product-card">
                                            <div className="product-img-wrap">
                                                <img src={prod.img} alt={prod.title} className="product-img" />
                                            </div>
                                            <div className="allProdTextDiv">
                                                <h4 className="product-title">{prod.title}</h4>
                                                <p className="product-text">{prod.text}</p>
                                                <button className="know-more-btn">
                                                    Know More
                                                    <img src={ArrowGreenIcon} alt="arrow" className="arrow-icon" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Load More for All Products on Mobile */}
                                {selectedTab === "All Products" &&
                                    isMobileView &&
                                    visibleCount < allProducts.length && (
                                        <div className="load-more-wrap">
                                            <button
                                                className="load-more-btn"
                                                onClick={() =>
                                                    setVisibleCount((c) => Math.min(c + 6, allProducts.length))
                                                }
                                            >
                                                Load More
                                                <img src={ArrowGreenIcon} alt="arrow" className="arrow-icon" />
                                            </button>
                                        </div>
                                    )}
                            </section>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductCategorySwitchgear;