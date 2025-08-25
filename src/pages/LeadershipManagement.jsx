import React, { useEffect, useState } from "react";
import bannerImg from "../components/assets/images/leadership/leadership.png";
import boardIcons from "../components/assets/images/leadership/bordDirector.svg";
import leaderIcons from "../components/assets/images/leadership/leadershipTeam.svg";
import diagolanArrow from '../components/assets/images/headicn/solution/diagolanarw.svg';
import amarImg from "../components/assets/images/leadership/amar-kaul.jpg";
import sushilImg from "../components/assets/images/leadership/sushil.png";
import maraisImg from "../components/assets/images/leadership/Marais-Nel.png";
import sriramImg from "../components/assets/images/leadership/sriram.png";
import JatinderImg from "../components/assets/images/leadership/Jatinder.png";
import AjayImg from "../components/assets/images/leadership/Ajay.png";
import ChidambaramImg from "../components/assets/images/leadership/Chidambaram.png";
import GauravImg from "../components/assets/images/leadership/Gaurav.png";
import MehernoshImg from "../components/assets/images/leadership/Mehernosh.png";
import VirendraImg from "../components/assets/images/leadership/Virendra.png";
import SanjayImg from "../components/assets/images/leadership/Sanjay.png";
import DevenImg from "../components/assets/images/leadership/Deven.png";
import VellayanImg from "../components/assets/images/leadership/Vellayan.png";
import ArunachalamImg from "../components/assets/images/leadership/Arunachalam.png";
import JayakumarImg from "../components/assets/images/leadership/Jayakumar.png";
import SivaramImg from "../components/assets/images/leadership/Sivaram.png";
import VijayalakshmiImg from "../components/assets/images/leadership/Vijayalakshmi.png";
import MammenImg from "../components/assets/images/leadership/Mammen.png";

const tabs = [
    {
        name: "Board of Directors",
        icon: boardIcons
    },
    {
        name: "Leadership Team",
        icon: leaderIcons
    }
];

const sampleData = {
    "Board of Directors": [
        {
            name: "Vellayan Subbiah",
            designation: "Chairman and Non-Executive Non-Independent Director",
            image_url: `${VellayanImg}`
        },
        {
            name: "Amar Kaul",
            designation: "Managing Director & CEO",
            image_url: `${amarImg}`
        },

        {
            name: "M A M Arunachalam",
            designation: "Non-Executive Non-Independent Director",
            image_url: `${ArunachalamImg}`
        },
        {
            name: "P S Jayakumar",
            designation: "Non-Executive Independent Director",
            image_url: `${JayakumarImg}`
        },
        {
            name: "Sriram Sivaram",
            designation: "Non-Executive Independent Director",
            image_url: `${SivaramImg}`
        },
        {
            name: "Vijayalakshmi Rajaram Iyer",
            designation: "Non-Executive Independent Director",
            image_url: `${VijayalakshmiImg}`
        },
        {
            name: "Mammen Chally",
            designation: "Non-Executive Independent Director",
            image_url: `${MammenImg}`
        },
    ],
    "Leadership Team": [
        {
            name: "Amar Kaul",
            designation: "Managing Director & CEO",
            image_url: `${amarImg}`
        },
        {
            name: "Susheel Todi",
            designation: "Chief Financial Officer",
            image_url: `${sushilImg}`
        },
        {
            name: "Marais Nel",
            designation: "Executive Vice President - Drives and Automation (CG Emotron)",
            image_url: `${maraisImg}`
        },
        {
            name: "Sriram Rangarajan",
            designation: "Executive Vice President – Head Consumer Product Business",
            image_url: `${sriramImg}`
        },
        {
            name: "Jatinder Kaul",
            designation: "Executive Vice President - Motors Business (India Sub-continent)",
            image_url: `${JatinderImg}`
        },
        {
            name: "Ajay Jain",
            designation: "Vice President- Transformers",
            image_url: `${AjayImg}`
        },
        {
            name: "Chidambaram Balakrishnan",
            designation: "Vice President - Railways",
            image_url: `${ChidambaramImg}`
        },
        {
            name: "Gaurav Makhija",
            designation: "Vice President - Switchgear & EPD",
            image_url: `${GauravImg}`
        },
        {
            name: "Mehernosh N. Mehta",
            designation: "Vice President – Human Resources",
            image_url: `${MehernoshImg}`
        },
        {
            name: "Virendra Nandedkar",
            designation: "Vice President – CGX Operations and Commercial Excellence",
            image_url: `${VirendraImg}`
        },
        {
            name: "Sanjay Kumar Chowdhary",
            designation: "Company Secretary",
            image_url: `${SanjayImg}`
        },
        {
            name: "Deven Jani",
            designation: "Vice President-Strategic Sourcing",
            image_url: `${DevenImg}`
        },
    ]
};

const Leadership = () => {
    const [selectedTab, setSelectedTab] = useState("Board of Directors");
    const [visibleCounts, setVisibleCounts] = useState({
        "Board of Directors": 6,
        "Leadership Team": 6
    });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleLoadMore = () => {
        setVisibleCounts(prev => ({
            ...prev,
            [selectedTab]: prev[selectedTab] + 6
        }));
    };

    const leadersData = sampleData[selectedTab] || [];
    const displayedLeaders = isMobile
        ? leadersData.slice(0, visibleCounts[selectedTab])
        : leadersData;

    return (
        <div>
            {/* Banner Section */}
            <section className="inner-comoonbanner">
                <div className="comonban">
                    <img src={bannerImg} alt="Leadership and Top Management" />
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="commonfrst-sec">
                <div className="cust-container">
                    <div className="breadcr-inner">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">About CG</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Leadership </li>
                        </ol>
                    </div>
                    <div className="common-heading-sec">
                        <div className="comon-head-inner">
                            <h2>Leadership</h2>
                            <p>At CG, our leadership team exemplifies the values, vision, and long-term commitment that define who we are. Rooted in a culture of excellence and guided by a forward-looking mindset, our leaders are deeply aligned with CG’s mission of transforming your needs into smart solutions for an enhanced quality of life.
                                At CG, leadership is not just about direction; it’s about inspiration, stewardship, and building a legacy that is built to last.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs and Content Section */}
            <section className="mapfilter-sec leadershipSec">
                <div className="cust-container">
                    {/* Tabs */}
                    <div className="contacttabs">
                        {tabs.map((tab, idx) => (
                            <button
                                key={idx}
                                className={`tab ${selectedTab === tab.name ? "active" : ""}`}
                                onClick={() => setSelectedTab(tab.name)}
                            >
                                <img src={tab.icon} alt={tab.name} className="mr-2 inline-block" />
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    {/* Grid Content */}
                    <div className="tabcontent">
                        {/* <div className="custom-flex-wrapper mt-10">
                            {sampleData[selectedTab]?.map((person, idx) => (
                                <div
                                    key={idx}
                                    className="box text-center"
                                >
                                    <div
                                        className="image imgHover"
                                        style={{
                                            // height: "420px",
                                            // width: "100%",
                                            // maxWidth: "380px",
                                            backgroundImage: `url(${person.image_url})`,
                                            // backgroundSize: "cover",
                                            // backgroundPosition: "center",
                                            // margin: "0 auto 12px",
                                            // borderRadius: "20px"
                                        }}
                                    ></div>
                                    <h4 className=" text-[#005CAB] font-[400] text-[16px] leading-[120%] tracking-[0.5px] font-helvetica">
                                        {person.name}
                                    </h4>
                                    <p className="text-[#4C4F54] font-[400] text-[16px] leading-[120%] tracking-[0.5px] font-helvetica">
                                        {person.designation}
                                    </p>
                                </div>
                            ))}
                        </div> */}

                        <div className="custom-flex-wrapper mt-10">
                            {displayedLeaders.map((person, idx) => (
                                <div key={idx} className="box text-center leader-box">
                                    <div
                                        className="image imgHover leader-image"
                                        style={{ backgroundImage: `url(${person.image_url})` }}
                                    ></div>
                                    <h4 className="leader-name">
                                        {person.name}
                                    </h4>
                                    <p className="leader-designation">
                                        {person.designation}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Load More for mobile */}
                        {isMobile && visibleCounts[selectedTab] < leadersData.length && (
                            <div className="text-center mt-6">
                                <button
                                    onClick={handleLoadMore}
                                    className="btn loadMoreLeader"
                                >
                                    Load More <img src={diagolanArrow} alt="" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Leadership;