import React, { useState, useEffect } from "react";
import banner from "../components/assets/images/sectorweserve/secwebaner.jpg";
import sws1 from "../components/assets/images/sectorweserve/sws1.svg";
import sws2 from "../components/assets/images/sectorweserve/sws2.svg";
import sws3 from "../components/assets/images/sectorweserve/sws3.svg";
import sws4 from "../components/assets/images/sectorweserve/sws4.svg";
import sws5 from "../components/assets/images/sectorweserve/sws5.svg";
import sws6 from "../components/assets/images/sectorweserve/sws6.svg";
import sws7 from "../components/assets/images/sectorweserve/sws7.svg";
import sws8 from "../components/assets/images/sectorweserve/sws8.svg";
import sws9 from "../components/assets/images/sectorweserve/sws9.svg";
import sws10 from "../components/assets/images/sectorweserve/sws10.svg";
import sws11 from "../components/assets/images/sectorweserve/sws11.svg";
import sws12 from "../components/assets/images/sectorweserve/sws12.svg";
import sws13 from "../components/assets/images/sectorweserve/sws13.svg";
import sws14 from "../components/assets/images/sectorweserve/sws14.svg";
import sws15 from "../components/assets/images/sectorweserve/sws15.svg";
import sws16 from "../components/assets/images/sectorweserve/sws16.svg";
import sws17 from "../components/assets/images/sectorweserve/sws17.svg";
import sws18 from "../components/assets/images/sectorweserve/sws18.svg";
import sws19 from "../components/assets/images/sectorweserve/sws19.svg";
import sws20 from "../components/assets/images/sectorweserve/sws20.svg";
import sws21 from "../components/assets/images/sectorweserve/sws21.svg";
import sws22 from "../components/assets/images/sectorweserve/sws22.svg";
import sws23 from "../components/assets/images/sectorweserve/sws23.svg";
import sws24 from "../components/assets/images/sectorweserve/sws24.svg";
import sws25 from "../components/assets/images/sectorweserve/sws25.svg";
import sws26 from "../components/assets/images/sectorweserve/sws26.svg";
import diagolanArrow from '../components/assets/images/headicn/solution/diagolanarw.svg';



const SectorWeServe = () => {

    const sectorWeServData = [
        { img: sws8, title: 'Automobile' },
        { img: sws11, title: 'Building & Infrastructure' },
        { img: sws2, title: 'Cement' },
        { img: sws5, title: 'Chemicals' },
        { img: sws21, title: 'Data Centers' },
        { img: sws12, title: 'Defence' },
        { img: sws10, title: 'Electronics' },
        { img: sws4, title: 'Fertilizers' },
        { img: sws8, title: 'FMCG' },
        { img: sws23, title: 'Green Hydrogen' },
        { img: sws22, title: 'IT & Telecom' },
        { img: sws16, title: 'Metro Rail' },
        { img: sws20, title: 'Mining' },
        { img: sws19, title: 'Nuclear Power' },
        { img: sws6, title: 'Oil & Gas' },
        { img: sws13, title: 'Paper' },
        { img: sws14, title: 'Pharmaceuticals' },
        { img: sws26, title: 'Port & Shipping' },
        { img: sws25, title: 'Power Transmission & Distribution' },
        { img: sws17, title: 'Railways' },
        { img: sws15, title: 'Renewables' },
        { img: sws1, title: 'Steel and Metals' },
        { img: sws7, title: 'Sugar' },
        { img: sws3, title: 'Textiles' },
        { img: sws18, title: 'Thermal Power' },
        { img: sws24, title: 'Water & Irrigation' },
    ];

    const [visibleCount, setVisibleCount] = useState(8);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // mobile breakpoint
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // For mobile: show limited items, for desktop: show all
    const displayedData = isMobile
        ? sectorWeServData.slice(0, visibleCount)
        : sectorWeServData;

    return (
        <>
            <section className="inner-comoonbanner">
                <div className="comonban">
                    <img src={banner} alt="" />
                </div>
            </section>
            <section className="commonfrst-sec sectorsWeSect">
                <div className="cust-container">
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">About CG</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Sectors We Serve</li>
                        </ol>
                    </div>

                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>Key Sectors We Serve</h2>
                            {/* <p>CG serves key sectors with cutting-edge solutions in Switchgears, Transformers, Drive & Automation, Customer durables and Railways. Our technology supports reliable power distribution, industrial efficiency, and modern mobility.</p> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="sectorweserve">
                <div className="cust-container">
                    <div className="sectorweserve-inner">
                        <div className="grid">
                            {displayedData.map((item, id) => (
                                <div className="grid-item" key={id}>
                                    <img src={item.img} alt={item.title} />
                                    <span>{item.title}</span>
                                </div>
                            ))}
                        </div>

                        {/* Load More button only on mobile */}
                        {isMobile && visibleCount < sectorWeServData.length && (
                            <div className="load-more-wrapper" style={{ textAlign: "center", marginTop: "20px" }}>
                                <button
                                    className="load-more-btn"
                                    onClick={() => setVisibleCount(visibleCount + 8)}
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        padding: "10px 20px",
                                        background: "transparent",
                                        color: "#005CAB",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Load More <img style={{ marginLeft: '5px' }} src={diagolanArrow} alt="" />
                                </button>
                            </div>
                        )}
                        {/* <div className="grid">
                    <div className="grid-item">
                        <img src={sws1} alt="Railways" />
                        <span></span>
                    </div>
                    <div className="grid-item">
                        <img src={sws2}alt="Thermal Power" />
                        <span></span>
                    </div>
                    <div className="grid-item">
                        <img src={sws3}alt="Nuclear Power" />
                        <span></span>
                    </div>
                    <div className="grid-item">
                        <img src={sws4}alt="Mining" />
                        <span></span>
                    </div>
                    <div className="grid-item">
                        <img src={sws5}alt="Data Centers" />
                        <span></span>
                    </div>
                    <div className="grid-item">
                        <img src={sws6}alt="IT & Telecom" />
                        <span></span>
                    </div>
                    <div className="grid-item">
                        <img src={sws7}alt="Green Hydrogen" />
                        <span></span>
                    </div>
                    <div className="grid-item">
                        <img src={sws8}alt="Water & Irrigation" />
                        <span></span>
                    </div>
                    <div className="grid-item">
                        <img src={sws9}alt="Railways" />
                        <span>Railways</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws10} alt="Thermal Power" />
                        <span>Thermal Power</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws11} alt="Nuclear Power" />
                        <span>Nuclear Power</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws12} alt="Mining" />
                        <span>Mining</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws13} alt="Data Centers" />
                        <span>Data Centers</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws14} alt="IT & Telecom" />
                        <span>IT & Telecom</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws15} alt="Green Hydrogen" />
                        <span>Green Hydrogen</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws16} alt="Water & Irrigation" />
                        <span>Water & Irrigation</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws17} alt="Railways" />
                        <span>Railways</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws18} alt="Thermal Power" />
                        <span>Thermal Power</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws19} alt="Nuclear Power" />
                        <span>Nuclear Power</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws20} alt="Mining" />
                        <span>Mining</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws21} alt="Data Centers" />
                        <span>Data Centers</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws22} alt="IT & Telecom" />
                        <span>IT & Telecom</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws23} alt="Green Hydrogen" />
                        <span>Green Hydrogen</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws24} alt="Water & Irrigation" />
                        <span>Water & Irrigation</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws25} alt="Green Hydrogen" />
                        <span>Green Hydrogen</span>
                    </div>
                    <div className="grid-item">
                        <img src={sws26} alt="Water & Irrigation" />
                        <span>Water & Irrigation</span>
                    </div>
                </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectorWeServe;