import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import prodBanner from '../components/assets/images/product_listing/product-listing.png';
import fanTabImg1 from '../components/assets/images/product_listing/ceilingFan.png';
import fanTabImg2 from '../components/assets/images/product_listing/tableFan.png';
import fanTabImg3 from '../components/assets/images/product_listing/pedestalFan.png';
import fanTabImg4 from '../components/assets/images/product_listing/wallFan.png';
import fanTabImg5 from '../components/assets/images/product_listing/towerFan.png';
import fanTabImg6 from '../components/assets/images/product_listing/exuausstFan.png';
import prodImg from '../components/assets/images/product_listing/ceiling-fanImg.jpg';
import oscillatingfan from '../components/assets/images/product_listing/oscillatingfan.svg';
import bulletfan from '../components/assets/images/product_listing/bulletfan.svg';
import waiting from '../components/assets/images/product_listing/waiting.svg';
import filterIcon from '../components/assets/images/product_listing/filtericn.svg';
import sortIcon from '../components/assets/images/product_listing/recommend-sort.svg';


const ProductListing = () => {
    const [activeTab, setActiveTab] = useState("#ceiling");
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [sortOpen, setSortOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Recommended");
    const [selectedFilters, setSelectedFilters] = useState(["Ceiling Fan"]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const sortOptions = [
        "Recommended",
        "Price: High to Low",
        "Price: Low to High"
    ];

    const filterOptions = [
        "Ceiling Fan",
        "Table Fan",
        "Pedestal Fan",
        "Wall Fan",
        "Tower Fan",
        "Exhaust Fan"
    ];

    const tabsFans = [
        { id: "ceiling", img: fanTabImg1, label: "Ceiling Fan" },
        { id: "table", img: fanTabImg2, label: "Table Fan" },
        { id: "pedestal", img: fanTabImg3, label: "Pedestal Fan" },
        { id: "wall", img: fanTabImg4, label: "Wall Fan" },
        { id: "tower", img: fanTabImg5, label: "Tower Fan" },
        { id: "exhaust", img: fanTabImg6, label: "Exhaust Fan" }
    ];

    const handleTabClick = (href) => {
        setActiveTab(href);
    };

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth <= 768) {
    //             document.querySelector(".fan-tabs-desktop").style.display = "none";
    //             document.querySelector(".fan-tabs-mobile").style.display = "block";

    //             if (!swiperInstance) {
    //                 const newSwiper = new Swiper(".fanTabsSwiper", {
    //                     slidesPerView: 2.5,
    //                     spaceBetween: 12,
    //                     slidesPerGroup: 1,
    //                     slideToClickedSlide: true,
    //                     watchSlidesProgress: true,
    //                 });
    //                 setSwiperInstance(newSwiper);
    //             }
    //         } else {
    //             document.querySelector(".fan-tabs-desktop").style.display = "block";
    //             document.querySelector(".fan-tabs-mobile").style.display = "none";
    //             if (swiperInstance) {
    //                 swiperInstance.destroy(true, true);
    //                 setSwiperInstance(null);
    //             }
    //         }
    //     };

    //     window.addEventListener("resize", handleResize);
    //     handleResize();
    //     return () => window.removeEventListener("resize", handleResize);
    // }, [swiperInstance]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {/* Banner */}
            <section className="inner-comoonbanner">
                <div className="comonban">
                    <img src={prodBanner} alt="" />
                    <div className="cust-container">
                        <div className="textBan">
                            <h2>Stay Cool, Save More.</h2>
                            <p>Power-packed airflow<br /> with energy-saving.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="commonfrst-sec">
                <div className="cust-container">
                    {/* Breadcrumb */}
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Consumer Durables</a></li>
                            <li className="breadcrumb-item"><a href="#">Products</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Fans</li>
                        </ol>
                    </div>

                    {/* Tabs Section (Desktop) */}
                    {/* <div className="fanBlock fan-tabs-desktop">
                        <ul className="nav nav-tabs fan-tabs DesktopTabs">
                            {[
                                { id: "ceiling", img: fanTabImg1, label: "Ceiling Fan" },
                                { id: "table", img: fanTabImg2, label: "Table Fan" },
                                { id: "pedestal", img: fanTabImg3, label: "Pedestal Fan" },
                                { id: "wall", img: fanTabImg4, label: "Wall Fan" },
                                { id: "tower", img: fanTabImg5, label: "Tower Fan" },
                                { id: "exhaust", img: fanTabImg6, label: "Exhaust Fan" }
                            ].map(tab => (
                                <li className="nav-item" key={tab.id}>
                                    <a
                                        className={`nav-link ${activeTab === `#${tab.id}` ? "active" : ""}`}
                                        href={`#${tab.id}`}
                                        onClick={(e) => { e.preventDefault(); handleTabClick(`#${tab.id}`); }}
                                    >
                                        <img src={tab.img} alt={tab.label} />
                                        {tab.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Tabs Section (Mobile) */}
                    {/* <div className="fan-tabs-mobile" style={{ display: "none" }}>
                        <div className="swiper-container fanTabsSwiper">
                            <div className="swiper-wrapper">
                                {[
                                    { id: "ceiling", img: fanTabImg1, label: "Ceiling Fan" },
                                    { id: "table", img: fanTabImg2, label: "Table Fan" },
                                    { id: "pedestal", img: fanTabImg3, label: "Pedestal Fan" },
                                    { id: "wall", img: fanTabImg4, label: "Wall Fan" },
                                    { id: "tower", img: fanTabImg5, label: "Tower Fan" },
                                    { id: "exhaust", img: fanTabImg6, label: "Exhaust Fan" }
                                ].map(tab => (
                                    <div className="swiper-slide" key={tab.id}>
                                        <a
                                            className={`nav-link ${activeTab === `#${tab.id}` ? "active" : ""}`}
                                            href={`#${tab.id}`}
                                            onClick={(e) => { e.preventDefault(); handleTabClick(`#${tab.id}`); }}
                                        >
                                            <img src={tab.img} alt={tab.label} style={{ display: "block", margin: "0 auto" }} />
                                            <div style={{ textAlign: "center", fontSize: "13px" }}>{tab.label}</div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> */}
                    {/* Tabs Section */}
                    <div className="fanBlock">
                        {isMobile ? (
                            <div className="fan-tabs-mobile">
                                <Swiper
                                    slidesPerView={2.5}
                                    spaceBetween={12}
                                    slidesPerGroup={1}
                                    slideToClickedSlide
                                    watchSlidesProgress
                                >
                                    {tabsFans.map(tab => (
                                        <SwiperSlide key={tab.id}>
                                            <a
                                                className={`nav-link ${activeTab === `#${tab.id}` ? "active" : ""}`}
                                                href={`#${tab.id}`}
                                                onClick={(e) => { e.preventDefault(); handleTabClick(`#${tab.id}`); }}
                                            >
                                                <img src={tab.img} alt={tab.label} style={{ display: "block", margin: "0 auto", padding:'10px' }} />
                                                <div style={{ textAlign: "center", fontSize: "13px", color:"#000" }}>{tab.label}</div>
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ) : (
                            <ul className="nav nav-tabs fan-tabs DesktopTabs">
                                {tabsFans.map(tab => (
                                    <li className="nav-item" key={tab.id}>
                                        <a
                                            className={`nav-link ${activeTab === `#${tab.id}` ? "active" : ""}`}
                                            href={`#${tab.id}`}
                                            onClick={(e) => { e.preventDefault(); handleTabClick(`#${tab.id}`); }}
                                        >
                                            <img src={tab.img} alt={tab.label} style={{padding:'10px'}} />
                                            {tab.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Sorting & Filters Row */}
                    <div className="filters-sort-row d-flex justify-content-between align-items-center mt-3 mb-5 flex-wrap">

                        {/* LEFT SIDE: Sort + Filters */}
                        <div className="d-flex">

                            {/* Sort By */}
                            <div className="dropdown mr-2" style={{ position: "relative" }}>
                                <button
                                    className="btn sort-btn"
                                    type="button"
                                    onClick={() => setSortOpen(!sortOpen)}
                                >
                                    <img src={sortIcon} alt="" /> {selectedSort}
                                </button>
                                {sortOpen && (
                                    <div
                                        className="dropdown-menu p-2 show sortDropdown"
                                        style={{
                                            display: "block",
                                            minWidth: "200px",
                                            maxWidth: "90vw",
                                            top: "100% !important",
                                            left: "auto",
                                            right: 0,
                                            position: "absolute"
                                        }}
                                    >
                                        <p><strong className="dropdown-title">SORT BY</strong></p>
                                        <hr className="my-2 hrbgSort" />
                                        {sortOptions.map(option => (
                                            <a
                                                key={option}
                                                className={`dropdown-item d-flex justify-content-between align-items-center ${selectedSort === option ? "active" : ""}`}
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSelectedSort(option);
                                                    setSortOpen(false);
                                                }}
                                                style={{
                                                    backgroundColor: selectedSort === option ? "#005CAB1A" : "transparent",
                                                    fontWeight: selectedSort === option ? "600" : "normal"
                                                }}
                                            >
                                                <span>{option}</span>
                                                {selectedSort === option && (
                                                    <i className="fas fa-check" style={{ color: "#005CAB" }} />
                                                )}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Filters */}
                            <div className="dropdown" style={{ position: "relative" }}>
                                <button
                                    className="btn filterIcon"
                                    type="button"
                                    onClick={() => setFilterOpen(!filterOpen)}
                                >
                                    <img src={filterIcon} alt="" /> Filters
                                </button>
                                {filterOpen && (
                                    <div className="dropdown-menu p-3 show" style={{ display: "block", minWidth: "250px" }}>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <strong className="dropdown-title">FILTERS</strong>
                                            <button
                                                type="button"
                                                className="btn btn-link p-0"
                                                style={{ color: "#7BC143" }}
                                                onClick={() => setSelectedFilters([])}
                                            >
                                                Clear All
                                            </button>
                                        </div>
                                        <hr className="my-2 filterType" />
                                        <strong>TYPE</strong>
                                        <hr className="my-2" />
                                        {filterOptions.map(type => (
                                            <div className="form-check" key={type}>
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id={type}
                                                    checked={selectedFilters.includes(type)}
                                                    onChange={() => {
                                                        if (selectedFilters.includes(type)) {
                                                            setSelectedFilters(selectedFilters.filter(f => f !== type));
                                                        } else {
                                                            setSelectedFilters([...selectedFilters, type]);
                                                        }
                                                    }}
                                                />
                                                <label className="form-check-label" htmlFor={type}>{type}</label>
                                            </div>
                                        ))}
                                        <button
                                            className="btn btn-success btn-block mt-3 btnApply"
                                            style={{ backgroundColor: "#005CAB" }}
                                            onClick={() => setFilterOpen(false)}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>

                        {/* RIGHT SIDE: Applied Filters */}
                        <div className="applied-filters mb-2">
                            {selectedFilters.map((filter, index) => (
                                <span className="badge badge-success filter-badge" key={index}>
                                    <i
                                        className="fas fa-times mr-1"
                                        onClick={() => setSelectedFilters(selectedFilters.filter(f => f !== filter))}
                                        style={{ cursor: "pointer" }}
                                    ></i>
                                    {filter}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Product Grid */}
                    <div className="tab-content" id="fanTabContent">
                        <div className={`tab-pane fade ${activeTab === "#ceiling" ? "show active" : ""}`} id="ceiling">
                            <div className="row product-row">
                                {[...Array(12)].map((_, index) => (
                                    <div className="col-md-3 mb-3" key={index}>
                                        <div className="product-card">
                                            <span className="badge badge-primary new-badge">New</span>
                                            <img src={prodImg} alt="Product" className="img-fluid mb-3" />
                                            <h5>CG AeroSwift Ceiling Fan</h5>
                                            <ul className="product-features list-unstyled">
                                                <li><img src={oscillatingfan} alt="" /> High speed motor</li>
                                                <li><img src={bulletfan} alt="" /> Wide angle oscillation</li>
                                                <li><img src={waiting} alt="" /> Longer life</li>
                                            </ul>
                                            <div className="viewDiv">
                                                <button className="btn btn-outline-primary btnViewD">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default ProductListing;