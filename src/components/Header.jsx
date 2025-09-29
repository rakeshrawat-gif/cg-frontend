import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";

import headerLogo from '../components/assets/images/headerlogo.svg';
import headIcon1 from '../components/assets/images/headicn/about/icn1.svg';
import headIcon2 from '../components/assets/images/headicn/about/icn2.svg';
import headIcon3 from '../components/assets/images/headicn/about/icn3.svg';
import headIcon4 from '../components/assets/images/headicn/about/icn4.svg';
import headIcon5 from '../components/assets/images/headicn/about/icn5.svg';
import headIcon6 from '../components/assets/images/headicn/about/icn6.svg';
import headIcon7 from '../components/assets/images/headicn/about/icn7.svg';
import compnyovervw from '../components/assets/images/headicn/about/compnyovervw.svg';
import headSIcon1 from '../components/assets/images/headicn/solution/sicn1.svg';
import headSIcon3 from '../components/assets/images/headicn/solution/sicn3.svg';
import headSIcon4 from '../components/assets/images/headicn/solution/sicn4.svg';
import headSIcon5 from '../components/assets/images/headicn/solution/sicn5.svg';
import headSIcon6 from '../components/assets/images/headicn/solution/sicn6.svg';
import diagonArrow from '../components/assets/images/headicn/solution/diagolanarw.svg';
import swicthgeargren from '../components/assets/images/headicn/solution/swicthgeargren.svg';


import whycg from '../components/assets/images/headicn/career/whycg.svg';
import lifeatcg from '../components/assets/images/headicn/career/lifeatcg.svg';
import exploreroles from '../components/assets/images/headicn/career/exploreroles.svg';
import learingandgrwth from '../components/assets/images/headicn/career/learingandgrwth.svg';


// import '.././components/assets/js/cust.js';

const Header = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [activeSolutionCategory, setActiveSolutionCategory] = useState(null);
    const [activeSolutionSubCategory, setActiveSolutionSubCategory] =
        useState(null);
    const [activeSingleDropdown, setActiveSingleDropdown] = useState(null);
    const [openMobileAccordions, setOpenMobileAccordions] = useState({});
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const headerRef = useRef(null);
    const [headerDynamicHeight, setHeaderDynamicHeight] = useState(0);
    const [activeAboutSubmenu, setActiveAboutSubmenu] = useState(null);
    const [isHoverActive, setIsHoverActive] = useState(false);

    const searchRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const adjustDropdowns = () => {
            const dropdowns = document.querySelectorAll(".single-dropdown-menu");
            dropdowns.forEach((menu) => {
                const rect = menu.getBoundingClientRect();
                if (rect.right > window.innerWidth) {
                    menu.style.left = "auto";
                    menu.style.right = "0";
                }
            });
        };

        window.addEventListener("resize", adjustDropdowns);
        adjustDropdowns();

        const toggleMobileNav = () => {
            setIsMobileNavOpen(prevState => !prevState);
            if (!isMobileNavOpen) setIsSearchBarOpen(false);
        };

        return () => {
            window.removeEventListener("resize", adjustDropdowns);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
            if (window.innerWidth < 768) {
                setActiveSolutionCategory(null);
                setActiveSolutionSubCategory(null);
                setActiveSingleDropdown(null);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.offsetHeight;
            setHeaderDynamicHeight(height);
        }
    }, [isMobileNavOpen, isDesktop]);

    const toggleSearchBar = (e) => {
        e.preventDefault();
        setIsSearchBarOpen((prevState) => !prevState);
    };
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target) &&
                !event.target.closest("#desk-searchToggle") &&
                !event.target.closest("#mob-searchToggle") &&
                !event.target.closest(".swiper")
            ) {
                setIsSearchBarOpen(false);
            }

        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const toggleMobileNav = () => {
        setIsMobileNavOpen((prevState) => !prevState);
        if (!isMobileNavOpen) setIsSearchBarOpen(false);
    };

    useEffect(() => {
        setIsMobileNavOpen(false);
        setIsSearchBarOpen(false);
    }, [location]);

    const handleDropdownHover = (dropdownName, isHovering) => {
        if (!isDesktop) return;
        setActiveSingleDropdown(isHovering ? dropdownName : null);
    };

    const handleMegaMenuCategoryHover = (categoryId) => {
        if (!isDesktop) return;
        setActiveSolutionCategory(categoryId);
        const firstSubCategoryElement = document
            .getElementById(categoryId)
            ?.querySelector(".submenu-item");
        if (firstSubCategoryElement) {
            const target = firstSubCategoryElement.getAttribute("data-target");
            setActiveSolutionSubCategory(target);
        } else {
            setActiveSolutionSubCategory(null);
        }
    };

    const handleMegaMenuSubCategoryHover = (subCategoryId) => {
        if (!isDesktop) return;
        setActiveSolutionSubCategory(subCategoryId);
    };

    const toggleMobileAccordion = (id) => {
        setOpenMobileAccordions((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    useEffect(() => {
        document
            .querySelectorAll(".menu-column .submenu-item .fa-chevron-right")
            .forEach((el) => el.remove());

        if (isDesktop) {
            document
                .querySelectorAll(".menu-column:first-child .submenu-item")
                .forEach((item) => {
                    const targetId = item.getAttribute("data-target");
                    if (
                        targetId &&
                        document
                            .getElementById(targetId)
                            ?.classList.contains("level2-content")
                    ) {
                        const arrow = document.createElement("i");
                        arrow.className = "fas fa-chevron-right ml-auto";
                        item.appendChild(arrow);
                    }
                });

            document
                .querySelectorAll(".menu-column:nth-child(2) .submenu-item")
                .forEach((item) => {
                    const targetId = item.getAttribute("data-target");
                    if (
                        targetId &&
                        document
                            .getElementById(targetId)
                            ?.classList.contains("level3-content")
                    ) {
                        const arrow = document.createElement("i");
                        arrow.className = "fas fa-chevron-right ml-auto";
                        item.appendChild(arrow);
                    }
                });
        }
    }, [isDesktop, activeSolutionCategory, activeSolutionSubCategory]);
    useEffect(() => {
        if (!isDesktop) {
            document
                .querySelectorAll(".mobile-accordion-menu .accordion-toggle")
                .forEach((toggle) => {
                    const nextContent = toggle.nextElementSibling;
                    if (
                        nextContent &&
                        nextContent.classList.contains("accordion-content")
                    ) {
                        toggle.classList.add("has-content");
                    } else {
                        toggle.classList.remove("has-content");
                    }
                });
        }
    }, [isDesktop, openMobileAccordions]);

    const handleMobileMultiLevelToggle = (e) => {
        e.preventDefault();
        const parentLi = e.currentTarget.parentElement;
        parentLi.classList.toggle("open");
        const submenu = parentLi.querySelector(".submenu");
        if (submenu) {
            submenu.style.display =
                submenu.style.display === "block" ? "none" : "block";

            Array.from(parentLi.parentNode.children).forEach((sibling) => {
                if (
                    sibling !== parentLi &&
                    sibling.classList.contains("has-children")
                ) {
                    sibling.classList.remove("open");
                    const siblingSubmenu = sibling.querySelector(".submenu");
                    if (siblingSubmenu) {
                        siblingSubmenu.style.display = "none";
                    }
                }
            });
        }
    };

    const handleThirdLevelToggle = (e) => {
        const item = e.currentTarget.parentElement;
        const submenu = item.querySelector(".thlev-dropdown-submenu");

        if (submenu) {
            e.preventDefault();
            item.classList.toggle("active");
            submenu.style.display =
                submenu.style.display === "block" ? "none" : "block";

            Array.from(item.parentNode.children).forEach((sibling) => {
                if (
                    sibling !== item &&
                    sibling.classList.contains("thirdlevel-menu-item")
                ) {
                    sibling.classList.remove("active");
                    const siblingSubmenu = sibling.querySelector(
                        ".thlev-dropdown-submenu"
                    );
                    if (siblingSubmenu) {
                        siblingSubmenu.style.display = "none";
                    }
                }
            });
        }
    };


    // const handleMobileMultiLevelToggle = (e) => {
    //     e.preventDefault();
    //     const parentLi = e.currentTarget.parentElement;
    //     parentLi.classList.toggle("open");
    //     const submenu = parentLi.querySelector(".submenu");
    //     if (submenu) {
    //         submenu.style.display = submenu.style.display === "block" ? "none" : "block";

    //         Array.from(parentLi.parentNode.children).forEach(sibling => {
    //             if (sibling !== parentLi && sibling.classList.contains('has-children')) {
    //                 sibling.classList.remove('open');
    //                 const siblingSubmenu = sibling.querySelector('.submenu');
    //                 if (siblingSubmenu) {
    //                     siblingSubmenu.style.display = 'none';
    //                 }
    //             }
    //         });
    //     }
    // };

    // const handleThirdLevelToggle = (e) => {
    //     const item = e.currentTarget.parentElement;
    //     const submenu = item.querySelector('.thlev-dropdown-submenu');

    //     if (submenu) {
    //         e.preventDefault();
    //         item.classList.toggle('active');
    //         submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

    //         Array.from(item.parentNode.children).forEach(sibling => {
    //             if (sibling !== item && sibling.classList.contains('thirdlevel-menu-item')) {
    //                 sibling.classList.remove('active');
    //                 const siblingSubmenu = sibling.querySelector('.thlev-dropdown-submenu');
    //                 if (siblingSubmenu) {
    //                     siblingSubmenu.style.display = 'none';
    //                 }
    //             }
    //         });
    //     }
    // };





    return (
        <header id="custhead" ref={headerRef} className={isMobileNavOpen ? 'header-mobile-expanded' : ''}>
            <div className="cust-container">
                {/* Desktop Header */}
                <nav className="navbar navbar-expand-xl navbar-light" id="desktopheader">
                    <div className="head-logo">
                        <a className="navbar-brand" href="/">
                            <img src={headerLogo} alt="Company Logo" />
                        </a>
                        <div className="head-mob-menusrch-icn">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded={isMobileNavOpen ? 'true' : 'false'}
                                aria-label="Toggle navigation"
                                onClick={toggleMobileNav}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>

                    <div className="head-menuitems">
                        <div className={`collapse navbar-collapse justify-content-end ${isMobileNavOpen ? 'show' : ''}`} id="navbarNav">
                            <ul className="navbar-nav justify-content-end">
                                <li
                                    className={`nav-item dropdown singldrdwn-col ${activeSingleDropdown === 'about' ? 'show' : ''}`}
                                    onMouseEnter={() => handleDropdownHover('about', true)}
                                    onMouseLeave={() => handleDropdownHover('about', false)}
                                >
                                    <a
                                        className={`nav-link dropdown-toggle ${activeSingleDropdown === 'about' ? 'active' : ''}`}
                                        href="#"
                                        id="single-first-dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded={activeSingleDropdown === 'about' ? 'true' : 'false'}
                                    >
                                        About CG
                                    </a>
                                    <div className={`dropdown-menu p-0 ${activeSingleDropdown === 'about' ? 'show' : ''}`} aria-labelledby="single-first-dropdown">
                                        {/* Desktop View */}
                                        <ul className="singl-drdwn single-dropdown-menu mega-menu desktop-view" aria-labelledby="single-first-dropdown">
                                            <li>
                                                <a className="dropdown-item" href="/about_cg">
                                                    <div className="single-dr-inner">
                                                        <img src={compnyovervw} alt="" />
                                                        <span>Company Overview</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="has-submenu">
                                                <a className="dropdown-item" href="/our_leadership">
                                                    <div className="single-dr-inner">
                                                        <img src={headIcon2} alt="" />
                                                        <span>Leadership</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="has-submenu">
                                                <a className="dropdown-item" href="/subsidiaries_jv">
                                                    <div className="single-dr-inner">
                                                        <img src={headIcon3} alt="" />
                                                        <span>Subsidiaries and Joint Ventures</span>
                                                        {/* <i className="fas fa-angle-right"></i> */}
                                                    </div>
                                                </a>
                                                {/* <ul className="submenu single-dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="single-dr-inner">
                                                            <img src={headIcon4} alt="" />
                                                            <span>Board Members</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="single-dr-inner">
                                                            <img src={headIcon4} alt="" />
                                                            <span>Policies</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul> */}
                                            </li>
                                            {/* <li>
                                            <a className="dropdown-item" href="#">
                                                <div className="single-dr-inner">
                                                    <img src={headIcon4} alt="" />
                                                    <span>Our Purpose and Values</span>
                                                </div>
                                            </a>
                                        </li> */}
                                            <li>
                                                <a className="dropdown-item" href="/sector-we-serve">
                                                    <div className="single-dr-inner">
                                                        <img src={headIcon5} alt="" />
                                                        <span>Sectors We Serve</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/esg">
                                                    <div className="single-dr-inner">
                                                        <img src={headIcon6} alt="" />
                                                        <span>ESG</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/technology">
                                                    <div className="single-dr-inner">
                                                        <img src={headIcon7} alt="" />
                                                        <span>Technology + R&D</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="mobile-accordion-menu">
                                            <div
                                                className={`accordion-toggle ${openMobileAccordions['switchgears-mobile'] ? 'open' : ''}`}
                                                onClick={() => toggleMobileAccordion('switchgears-mobile')}
                                            >
                                                Switchgears
                                            </div>
                                            <div className="accordion-content" style={{ display: openMobileAccordions['switchgears-mobile'] ? 'block' : 'none' }}>
                                                <div
                                                    className={`accordion-toggle ${openMobileAccordions['high-voltage-mobile'] ? 'open' : ''}`}
                                                    onClick={() => toggleMobileAccordion('high-voltage-mobile')}
                                                >
                                                    High Voltage
                                                </div>
                                                <div className="accordion-content" style={{ display: openMobileAccordions['high-voltage-mobile'] ? 'block' : 'none' }}>
                                                    <a href="#">SF6 Circuit Breaker</a>
                                                    <a href="#">GIS & Dead Tank Breaker</a>
                                                    <a href="#">Condenser Bushings</a>
                                                </div>
                                                <div
                                                    className={`accordion-toggle ${openMobileAccordions['medium-voltage-mobile'] ? 'open' : ''}`}
                                                    onClick={() => toggleMobileAccordion('medium-voltage-mobile')}
                                                >
                                                    Medium Voltage
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li
                                    className="nav-item dropdown position-static"
                                    id="solutionsDropdownContainer"
                                    onMouseEnter={() => {
                                        handleDropdownHover('solutions', true);
                                        handleMegaMenuCategoryHover('megatransformers');
                                    }}
                                    onMouseLeave={() => {
                                        handleDropdownHover('solutions', false);
                                        setActiveSolutionCategory(null); setActiveSolutionSubCategory(null);
                                    }}
                                >
                                    <a className={`nav-link dropdown-toggle ${activeSingleDropdown === 'solutions' ? 'active' : ''}`} href="#" id="solutionsDropdown" role="button">
                                        Business Solutions
                                    </a>
                                    <div className={`dropdown-menu megamenucustom p-0 ${activeSolutionCategory ? 'show' : ''}`} aria-labelledby="solutionsDropdown">
                                        <div className="mega-menu desktop-view">
                                            <div className="menu-column" id="menucolfrst">
                                                <a
                                                    className={`submenu-item ${activeSolutionCategory === 'megatransformers' ? 'active' : ''}`}
                                                    href="/"
                                                    data-target="#megatransformers"
                                                    onMouseEnter={() => handleMegaMenuCategoryHover('megatransformers')}
                                                >
                                                    <div className="magamenu-inner">
                                                        <img src={headSIcon1} alt="" />
                                                        <span>Transformers</span>
                                                        <i className="fas fa-angle-right"></i>
                                                    </div>
                                                </a>
                                                <a
                                                    className={`submenu-item ${activeSolutionCategory === 'megaswitchgears' ? 'active' : ''}`}
                                                    href="/"
                                                    data-target="#megaswitchgears"
                                                    onMouseEnter={() => handleMegaMenuCategoryHover('megaswitchgears')}
                                                >
                                                    <div className="magamenu-inner">
                                                        <img src={swicthgeargren} alt="" />
                                                        <span>Switchgears</span>
                                                        <i className="fas fa-angle-right"></i>
                                                    </div>
                                                </a>
                                                <a
                                                    className={`submenu-item ${activeSolutionCategory === 'megamotors' ? 'active' : ''}`}
                                                    href="/"
                                                    data-target="#megamotors"
                                                    onMouseEnter={() => handleMegaMenuCategoryHover('megamotors')}
                                                >
                                                    <div className="magamenu-inner">
                                                        <img src={headSIcon3} alt="" />
                                                        <span>Motors</span>
                                                        <i className="fas fa-angle-right"></i>
                                                    </div>
                                                </a>
                                                <a
                                                    className={`submenu-item ${activeSolutionCategory === 'megadriveautomation' ? 'active' : ''}`}
                                                    href="/"
                                                    data-target="#megadriveautomation"
                                                    onMouseEnter={() => handleMegaMenuCategoryHover('megadriveautomation')}
                                                >
                                                    <div className="magamenu-inner">
                                                        <img src={headSIcon4} alt="" />
                                                        <span>Drives & Automation</span>
                                                        <i className="fas fa-angle-right"></i>
                                                    </div>
                                                </a>
                                                {/* <a
                                                className={`submenu-item ${activeSolutionCategory === 'megaconsumerproduct' ? 'active' : ''}`}
                                                href="/"
                                                data-target="#megaconsumerproduct"
                                                onMouseEnter={() => handleMegaMenuCategoryHover('megaconsumerproduct')}
                                            >
                                                <div className="magamenu-inner">
                                                    <img src={headSIcon5} alt="" />
                                                    <span>Consumer Products</span>
                                                    <i className="fas fa-angle-right"></i>
                                                </div>
                                            </a> */}
                                                <a
                                                    className={`submenu-item ${activeSolutionCategory === 'megarailways' ? 'active' : ''}`}
                                                    href="/"
                                                    data-target="#megarailways"
                                                    onMouseEnter={() => handleMegaMenuCategoryHover('megarailways')}
                                                >
                                                    <div className="magamenu-inner">
                                                        <img src={headSIcon6} alt="" />
                                                        <span>Railways</span>
                                                        <i className="fas fa-angle-right"></i>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="menu-column" id="menucolsecnd">
                                                <div id="megatransformers" className={`level2-content ${activeSolutionCategory === 'megatransformers' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Transformers <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#megatransformarSub1' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#megatransformarSub1"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#megatransformarSub1')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Power Transformers & Reactors</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#megatransformarSub2' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#megatransformarSub2"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#megatransformarSub2')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Distribution Transformers, Low<br /> Power Transformers & Cast Resin<br /> Transformers</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className="submenu-item"
                                                        href="/"
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Turnkey Solutions</span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div id="megaswitchgears" className={`level2-content ${activeSolutionCategory === 'megaswitchgears' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/switchgear">Switchgears <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#mediumvoltageproductsSub' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#mediumvoltageproductsSub"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#mediumvoltageproductsSub')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Medium Voltage Products</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#powerqualsoluSub' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#powerqualsoluSub"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#powerqualsoluSub')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Power Quality Solutions</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#relaysautomationSub' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#relaysautomationSub"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#relaysautomationSub')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Relays and Automation</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#highvoltageSub' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#highvoltageSub"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#highvoltageSub')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>High Voltage & Extra High Voltage</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div id="megamotors" className={`level2-content ${activeSolutionCategory === 'megamotors' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Motors <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#mediumvoltageproductsSub' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#mediumvoltageproductsSub"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#mediumvoltageproductsSub')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Mega Motor 1</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#powerqualsoluSub' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#powerqualsoluSub"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#powerqualsoluSub')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Mega Motor 2</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div id="megadriveautomation" className={`level2-content ${activeSolutionCategory === 'megadriveautomation' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Drives & Automation <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#driveandautomationSub1' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#driveandautomationSub1"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#driveandautomationSub1')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Drive 1</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#driveandautomationSub2' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#driveandautomationSub2"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#driveandautomationSub2')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Drive 2</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div id="megaconsumerproduct" className={`level2-content ${activeSolutionCategory === 'megaconsumerproduct' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Consumer Products <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#consuProductSub1' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#consuProductSub1"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#consuProductSub1')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Product 1</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#consuProductSub2' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#consuProductSub2"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#consuProductSub2')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Product 2</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div id="megarailways" className={`level2-content ${activeSolutionCategory === 'megarailways' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Railways <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#railwaySub1' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#railwaySub1"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#railwaySub1')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Railway 1</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                    <a
                                                        className={`submenu-item ${activeSolutionSubCategory === '#railwaySub2' ? 'active' : ''}`}
                                                        href="/"
                                                        data-target="#railwaySub2"
                                                        onMouseEnter={() => handleMegaMenuSubCategoryHover('#railwaySub2')}
                                                    >
                                                        <div className="magamenu-inner">
                                                            <span>Railway 2</span>
                                                            <i className="fas fa-angle-right"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="menu-column" id="menucolthrd">
                                                <div id="megatransformarSub1" className={`level3-content ${activeSolutionSubCategory === '#megatransformarSub1' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Transformer 1 <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        {/* <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                                <li><a href="/">Power Voltage Transformer</a></li>
                                                            </ul>
                                                        </li> */}
                                                        <li className="thirdlevel-menu-item"><a href="/">Generator Transformers</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Shunt Reactors</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Auto Transformers</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Furnace Transformers</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Locomotive and Trackside<br />
                                                            Power Transformers </a></li>
                                                        {/* <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                                <div id="megatransformarSub2" className={`level3-content ${activeSolutionSubCategory === '#megatransformarSub2' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Transformer 2 <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">SF6 Circuit Breaker</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Surge Arrester</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Disconnector</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="mediumvoltageproductsSub" className={`level3-content ${activeSolutionSubCategory === '#mediumvoltageproductsSub' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Medium Voltage Products <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">SF6 Circuit Breaker</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Disconnector</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="powerqualsoluSub" className={`level3-content ${activeSolutionSubCategory === '#powerqualsoluSub' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Power Quality Solutions <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Surge Arrester</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Disconnector</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="relaysautomationSub" className={`level3-content ${activeSolutionSubCategory === '#relaysautomationSub' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Relays and Automation <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Surge Arrester</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Disconnector</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="highvoltageSub" className={`level3-content ${activeSolutionSubCategory === '#highvoltageSub' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">High Voltage & Extra High Voltage <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Disconnector</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="driveandautomationSub1" className={`level3-content ${activeSolutionSubCategory === '#driveandautomationSub1' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Drive 1 <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">Disconnector</a></li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="driveandautomationSub2" className={`level3-content ${activeSolutionSubCategory === '#driveandautomationSub2' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Drive 2 <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="consuProductSub1" className={`level3-content ${activeSolutionSubCategory === '#consuProductSub1' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Product 1 <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="consuProductSub2" className={`level3-content ${activeSolutionSubCategory === '#consuProductSub2' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Product 2 <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="railwaySub1" className={`level3-content ${activeSolutionSubCategory === '#railwaySub1' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Railway 1 <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="railwaySub2" className={`level3-content ${activeSolutionSubCategory === '#railwaySub2' ? 'active' : ''}`}>
                                                    <div className="megainner-head">
                                                        <a href="/">Railway 2 <img src={diagonArrow} alt="" /></a>
                                                    </div>
                                                    <ul className="thirdlevel-drop-menu list-unstyled">
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Instrument Transformer
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>

                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Current Transformer</a></li>
                                                                <li><a href="/">Capacitive Voltage Transformer</a></li>
                                                                <li><a href="/">Inductive Voltage Transformer</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="thirdlevel-menu-item"><a href="/">GIS & Dead Tank Breaker</a></li>
                                                        <li className="thirdlevel-menu-item">
                                                            <a href="/" onClick={handleThirdLevelToggle}>Condenser Bushings
                                                                <i className="fa fa-chevron-down arrow-icon ml-2"></i>
                                                            </a>
                                                            <ul className="thlev-dropdown-submenu">
                                                                <li><a href="/">Condenser Bushings</a></li>
                                                                <li><a href="/">Bushings Condenser</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mobile-accordion-menu">
                                            <div
                                                className={`accordion-toggle ${openMobileAccordions['solutions-switchgears'] ? 'open' : ''}`}
                                                onClick={() => toggleMobileAccordion('solutions-switchgears')}
                                            >
                                                Switchgears
                                            </div>
                                            <div className="accordion-content" style={{ display: openMobileAccordions['solutions-switchgears'] ? 'block' : 'none' }}>
                                                <div
                                                    className={`accordion-toggle ${openMobileAccordions['solutions-high-voltage'] ? 'open' : ''}`}
                                                    onClick={() => toggleMobileAccordion('solutions-high-voltage')}
                                                >
                                                    High Voltage
                                                </div>
                                                <div className="accordion-content" style={{ display: openMobileAccordions['solutions-high-voltage'] ? 'block' : 'none' }}>
                                                    <a href="#">SF6 Circuit Breaker</a>
                                                    <a href="#">GIS & Dead Tank Breaker</a>
                                                    <a href="#">Condenser Bushings</a>
                                                </div>
                                                <div
                                                    className={`accordion-toggle ${openMobileAccordions['solutions-medium-voltage'] ? 'open' : ''}`}
                                                    onClick={() => toggleMobileAccordion('solutions-medium-voltage')}
                                                >
                                                    Medium Voltage
                                                </div>
                                                <div className="accordion-content" style={{ display: openMobileAccordions['solutions-medium-voltage'] ? 'block' : 'none' }}>
                                                    <a href="#">MV Switchgear 1</a>
                                                    <a href="#">MV Switchgear 2</a>
                                                </div>
                                            </div>
                                            <div
                                                className={`accordion-toggle ${openMobileAccordions['solutions-motors'] ? 'open' : ''}`}
                                                onClick={() => toggleMobileAccordion('solutions-motors')}
                                            >
                                                Motors
                                            </div>
                                            <div className="accordion-content" style={{ display: openMobileAccordions['solutions-motors'] ? 'block' : 'none' }}>
                                                <div
                                                    className={`accordion-toggle ${openMobileAccordions['solutions-motor-drive'] ? 'open' : ''}`}
                                                    onClick={() => toggleMobileAccordion('solutions-motor-drive')}
                                                >
                                                    Motor Drive
                                                </div>
                                                <div className="accordion-content" style={{ display: openMobileAccordions['solutions-motor-drive'] ? 'block' : 'none' }}>
                                                    <a href="#">Drive Type A</a>
                                                    <a href="#">Drive Type B</a>
                                                </div>
                                            </div>
                                            <div
                                                className={`accordion-toggle ${openMobileAccordions['solutions-transformers'] ? 'open' : ''}`}
                                                onClick={() => toggleMobileAccordion('solutions-transformers')}
                                            >
                                                Transformers
                                            </div>
                                            <div className="accordion-content" style={{ display: openMobileAccordions['solutions-transformers'] ? 'block' : 'none' }}>
                                                <div
                                                    className={`accordion-toggle ${openMobileAccordions['solutions-power-transformer'] ? 'open' : ''}`}
                                                    onClick={() => toggleMobileAccordion('solutions-power-transformer')}
                                                >
                                                    Power Transformer
                                                </div>
                                                <div className="accordion-content" style={{ display: openMobileAccordions['solutions-power-transformer'] ? 'block' : 'none' }}>
                                                    <a href="#">PT Product 1</a>
                                                    <a href="#">PT Product 2</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/consumer-durable">
                                        Consumer Durables
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/investor">
                                        Investors
                                    </a>
                                </li>

                                {/* Careers Dropdown */}
                                <li
                                    className={`nav-item dropdown singldrdwn-col ${activeSingleDropdown === 'careers' ? 'show' : ''}`}
                                    onMouseEnter={() => handleDropdownHover('careers', true)}
                                    onMouseLeave={() => handleDropdownHover('careers', false)}
                                >
                                    <a
                                        className={`nav-link dropdown-toggle ${activeSingleDropdown === 'careers' ? 'active' : ''}`}
                                        href="#"
                                        id="single-second-dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded={activeSingleDropdown === 'careers' ? 'true' : 'false'}
                                    >
                                        Careers
                                    </a>
                                    <div className={`dropdown-menu p-0 ${activeSingleDropdown === 'careers' ? 'show' : ''}`} aria-labelledby="single-second-dropdown">
                                        {/* Desktop View */}
                                        <ul className="singl-drdwn single-dropdown-menu mega-menu desktop-view" aria-labelledby="single-second-dropdown">
                                            <li className="has-submenu">
                                                <a className="dropdown-item" href="#">
                                                    <div className="single-dr-inner">
                                                        <img src={whycg} alt="" />
                                                        <span>Why CG?</span>
                                                        {/* <i className="fas fa-angle-right"></i> */}
                                                    </div>
                                                </a>
                                                {/* <ul className="submenu single-dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="single-dr-inner">
                                                            <img src={headIcon4} alt="" />
                                                            <span>Board Members</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="single-dr-inner">
                                                            <img src={headIcon4} alt="" />
                                                            <span>Policies</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul> */}
                                            </li>
                                            <li className="has-submenu">
                                                <a className="dropdown-item" href="#">
                                                    <div className="single-dr-inner">
                                                        <img src={lifeatcg} alt="" />
                                                        <span>Life at CG</span>
                                                        {/* <i className="fas fa-angle-right"></i> */}
                                                    </div>
                                                </a>
                                                {/* <ul className="submenu single-dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="single-dr-inner">
                                                            <img src={headIcon4} alt="" />
                                                            <span>Board Members</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="single-dr-inner">
                                                            <img src={headIcon4} alt="" />
                                                            <span>Policies</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul> */}
                                            </li>
                                            <li className="has-submenu">
                                                <a className="dropdown-item" href="#">
                                                    <div className="single-dr-inner">
                                                        <img src={exploreroles} alt="" />
                                                        <span>Explore Roles</span>
                                                        {/* <i className="fas fa-angle-right"></i> */}
                                                    </div>
                                                </a>
                                                {/* <ul className="submenu single-dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="single-dr-inner">
                                                            <img src={headIcon4} alt="" />
                                                            <span>Board Members</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        <div className="single-dr-inner">
                                                            <img src={headIcon4} alt="" />
                                                            <span>Policies</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul> */}
                                            </li>
                                            <li className="has-submenu">
                                                <a className="dropdown-item" href="#">
                                                    <div className="single-dr-inner">
                                                        <img src={learingandgrwth} alt="" />
                                                        <span>Learning and Growth</span>
                                                        {/* <i className="fas fa-angle-right"></i> */}
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="mobile-accordion-menu">
                                            <div
                                                className={`accordion-toggle ${openMobileAccordions['careers-switchgears-mobile'] ? 'open' : ''}`}
                                                onClick={() => toggleMobileAccordion('careers-switchgears-mobile')}
                                            >
                                                Switchgears
                                            </div>
                                            <div className="accordion-content" style={{ display: openMobileAccordions['careers-switchgears-mobile'] ? 'block' : 'none' }}>
                                                <div
                                                    className={`accordion-toggle ${openMobileAccordions['careers-high-voltage-mobile'] ? 'open' : ''}`}
                                                    onClick={() => toggleMobileAccordion('careers-high-voltage-mobile')}
                                                >
                                                    High Voltage
                                                </div>
                                                <div className="accordion-content" style={{ display: openMobileAccordions['careers-high-voltage-mobile'] ? 'block' : 'none' }}>
                                                    <a href="#">SF6 Circuit Breaker</a>
                                                    <a href="#">GIS & Dead Tank Breaker</a>
                                                    <a href="#">Condenser Bushings</a>
                                                </div>
                                                <div
                                                    className={`accordion-toggle ${openMobileAccordions['careers-medium-voltage-mobile'] ? 'open' : ''}`}
                                                    onClick={() => toggleMobileAccordion('careers-medium-voltage-mobile')}
                                                >
                                                    Medium Voltage
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* Search */}
                                <li className="nav-item desktopsrchtwh">
                                    <a className="nav-link" href="#" id="desk-searchToggle" onClick={toggleSearchBar}>
                                        <span>
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </a>
                                </li>
                                {/* Contact */}
                                <li className="nav-item">
                                    <a className="nav-link" href="/worldwide_contact">
                                        <span className="curvebtn contactheadbtn">Contact Us</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Mobile Header */}
                <nav className="navbar navbar-expand-xl navbar-light" id="mobileheader">
                    <div className="head-logo">
                        <a className="navbar-brand" href="/">
                            <img src={headerLogo} alt="" />
                        </a>
                        <div className="head-mob-menusrch-icn">
                            <a className="mobsrchtwh" href="#" id="mob-searchToggle" onClick={toggleSearchBar}>
                                <span>
                                    <i className="fas fa-search"></i>
                                </span>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-target="#mainNav"
                                id="menuToggle"
                                aria-controls="mainNav"
                                aria-expanded={isMobileNavOpen ? 'true' : 'false'}
                                aria-label="Toggle navigation"
                                onClick={toggleMobileNav}
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>

                    <div className={`collapse navbar-collapse mobile-menu ${isMobileNavOpen ? 'show' : ''}`} id="mainNav">
                        <ul>
                            <li className="has-children">
                                <a href="#" onClick={handleMobileMultiLevelToggle}>About CG</a>
                                <ul className="submenu">
                                    <li><a href="/about_cg">Company Overview</a></li>
                                    <li><a href="/our_leadership">Leadership</a></li>
                                    {/* <li className="has-children">
                                    <a href="#" onClick={handleMobileMultiLevelToggle}>Subsidiaries and Joint Ventures</a>
                                    <ul className="submenu">
                                        <li><a href="/">Board Members</a></li>
                                        <li><a href="/">Policies</a></li>
                                    </ul>
                                </li> */}
                                    <li>
                                        <a href="/subsidiaries_jv">Subsidiaries and Joint Ventures</a>
                                    </li>
                                    <li><a href="/sector-we-serve">Sectors We Serve</a></li>
                                    <li><a href="/esg">ESG</a></li>
                                    <li><a href="/technology">Technology + R&D</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="#" onClick={handleMobileMultiLevelToggle}>Business Solutions</a>
                                <ul className="submenu">
                                    <li className="has-children">
                                        <a href="#" onClick={handleMobileMultiLevelToggle}>Transformers</a>
                                        <ul className="submenu">
                                            <li className="has-children">
                                                <a href="#" onClick={handleMobileMultiLevelToggle}>Transformer 1</a>
                                                <ul className="submenu">
                                                    <li className="has-children">
                                                        <a href="#" onClick={handleMobileMultiLevelToggle}>Instrument Transformer</a>
                                                        <ul className="submenu">
                                                            <li><a href="#">Current Transformer</a></li>
                                                            <li><a href="#">Capacitive Voltage Transformer</a></li>
                                                            <li><a href="#">Inductive Voltage Transformer</a></li>
                                                            <li><a href="#">Power Voltage Transformer</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Surge Arrester</a></li>
                                                    <li><a href="#">Disconnector</a></li>
                                                    <li><a href="#">GIS & Dead Tank Breaker</a></li>
                                                    <li className="has-children">
                                                        <a href="#" onClick={handleMobileMultiLevelToggle}>Condenser Bushings</a>
                                                        <ul className="submenu">
                                                            <li><a href="#">Condenser Bushings</a></li>
                                                            <li><a href="#">Bushings Condenser</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="/">Transformer 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/switchgear">Switchgears</a></li>
                                    <li><a href="">Motors</a></li>
                                    <li><a href="">Drives & Automation</a></li>
                                    <li><a href="">Railways</a></li>
                                </ul>
                            </li>
                            <li><a href="/consumer-durable">Consumer Durables</a></li>
                            <li><a href="#">Investors</a></li>
                            <li className="has-children">
                                <a href="#" onClick={handleMobileMultiLevelToggle}>Careers</a>
                                <ul className="submenu">
                                    <li><a href="">Why CG?</a></li>
                                    <li><a href="">Life at CG</a></li>
                                    <li><a href="/">Explore Roles</a></li>
                                    <li><a href="/">Learning and Growth</a></li>
                                </ul>
                            </li>
                            <li><a href="/worldwide_contact">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>

                {/* Search Bar */}
                {isSearchBarOpen && (
                    <div id="searchBarContainer" ref={searchRef} style={{ display: isSearchBarOpen ? 'block' : 'none', }}>
                        {/* <div className="cust-container"> */}
                        <form className="form-inline">
                            <div className="headsearchclosebtn">
                                <span onClick={() => setIsSearchBarOpen(false)}>X</span>
                            </div>
                            <input name="search" className="form-control mr-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button className="headsearchbtn curvebtn" type="submit">
                                Search
                            </button>
                        </form>
                        {/* </div> */}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
