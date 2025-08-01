import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../components/assets/images/headerlogo.svg";
import headIcon1 from "../components/assets/images/headicn/about/icn1.svg";
import headIcon2 from "../components/assets/images/headicn/about/icn2.svg";
import headIcon3 from "../components/assets/images/headicn/about/icn3.svg";
import headIcon4 from "../components/assets/images/headicn/about/icn4.svg";
import headIcon5 from "../components/assets/images/headicn/about/icn5.svg";
import headIcon6 from "../components/assets/images/headicn/about/icn6.svg";
import headIcon7 from "../components/assets/images/headicn/about/icn7.svg";
import headSIcon1 from "../components/assets/images/headicn/solution/sicn1.svg";
import headSIcon3 from "../components/assets/images/headicn/solution/sicn3.svg";
import headSIcon4 from "../components/assets/images/headicn/solution/sicn4.svg";
import headSIcon5 from "../components/assets/images/headicn/solution/sicn5.svg";
import headSIcon6 from "../components/assets/images/headicn/solution/sicn6.svg";
import diagonArrow from "../components/assets/images/headicn/solution/diagolanarw.svg";
import careerIcon2 from "../components/assets/images/headicn/career/cicn2.svg";
import careerIcon3 from "../components/assets/images/headicn/career/cicn3.svg";
import careerIcon4 from "../components/assets/images/headicn/career/cicn4.svg";
import careerIcon5 from "../components/assets/images/headicn/career/cicn5.svg";

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

  return (
    <header
      id="custhead"
      ref={headerRef}
      className={isMobileNavOpen ? "header-mobile-expanded" : ""}
    >
      <div className="cust-container">
        {/* Desktop Header */}
        <nav
          className="navbar navbar-expand-xl navbar-light"
          id="desktopheader"
        >
          <div className="head-logo">
            <Link className="navbar-brand" to="/">
              <img src={headerLogo} alt="Company Logo" />
            </Link>
            <div className="head-mob-menusrch-icn">
              <button
                className="navbar-toggler"
                type="button"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={isMobileNavOpen ? "true" : "false"}
                aria-label="Toggle navigation"
                onClick={toggleMobileNav}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div className="head-menuitems">
            <div
              className={`collapse navbar-collapse justify-content-end ${
                isMobileNavOpen ? "show" : ""
              }`}
              id="navbarNav"
            >
              <ul className="navbar-nav justify-content-end">
                <li
                  className={`nav-item dropdown singldrdwn-col ${
                    activeSingleDropdown === "about" ? "show" : ""
                  }`}
                  onMouseEnter={() => handleDropdownHover("about", true)}
                  onMouseLeave={() => handleDropdownHover("about", false)}
                >
                  <Link
                    className={`nav-link dropdown-toggle ${
                      activeSingleDropdown === "about" ? "active" : ""
                    }`}
                    to="/about_cg"
                    id="single-first-dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={
                      activeSingleDropdown === "about" ? "true" : "false"
                    }
                  >
                    About CG
                  </Link>
                  <div
                    className={`dropdown-menu p-0 ${
                      activeSingleDropdown === "about" ? "show" : ""
                    }`}
                    aria-labelledby="single-first-dropdown"
                  >
                    {/* Desktop View */}
                    <ul
                      className="singl-drdwn single-dropdown-menu mega-menu desktop-view"
                      aria-labelledby="single-first-dropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">
                          <div className="single-dr-inner">
                            <img src={headIcon2} alt="" />
                            <span>Company Overview</span>
                          </div>
                        </Link>
                      </li>
                      <li className="has-submenu">
                        <Link className="dropdown-item" to="/our_leadership">
                          <div className="single-dr-inner">
                            <img src={headIcon2} alt="" />
                            <span>Leadership and Top Management</span>
                          </div>
                        </Link>
                      </li>
                      <li className="has-submenu">
                        <Link className="dropdown-item" to="/subsidiaries_jv">
                          <div className="single-dr-inner">
                            <img src={headIcon3} alt="" />
                            <span>Subsidiaries and Joint Ventures</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                        <ul className="submenu single-dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <div className="single-dr-inner">
                                <img src={headIcon4} alt="" />
                                <span>Board Members</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <div className="single-dr-inner">
                                <img src={headIcon4} alt="" />
                                <span>Policies</span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <div className="single-dr-inner">
                            <img src={headIcon4} alt="" />
                            <span>Our Purpose and Values</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          <div className="single-dr-inner">
                            <img src={headIcon5} alt="" />
                            <span>Sectors We Serve</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/esg">
                          <div className="single-dr-inner">
                            <img src={headIcon6} alt="" />
                            <span>ESG</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/tehcnology">
                          <div className="single-dr-inner">
                            <img src={headIcon7} alt="" />
                            <span>Technology + R&D</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <div className="mobile-accordion-menu">
                      <div
                        className={`accordion-toggle ${
                          openMobileAccordions["switchgears-mobile"]
                            ? "open"
                            : ""
                        }`}
                        onClick={() =>
                          toggleMobileAccordion("switchgears-mobile")
                        }
                      >
                        Switchgears
                      </div>
                      <div
                        className="accordion-content"
                        style={{
                          display: openMobileAccordions["switchgears-mobile"]
                            ? "block"
                            : "none",
                        }}
                      >
                        <div
                          className={`accordion-toggle ${
                            openMobileAccordions["high-voltage-mobile"]
                              ? "open"
                              : ""
                          }`}
                          onClick={() =>
                            toggleMobileAccordion("high-voltage-mobile")
                          }
                        >
                          High Voltage
                        </div>
                        <div
                          className="accordion-content"
                          style={{
                            display: openMobileAccordions["high-voltage-mobile"]
                              ? "block"
                              : "none",
                          }}
                        >
                          <Link to="#">SF6 Circuit Breaker</Link>
                          <Link to="#">GIS & Dead Tank Breaker</Link>
                          <Link to="#">Condenser Bushings</Link>
                        </div>
                        <div
                          className={`accordion-toggle ${
                            openMobileAccordions["medium-voltage-mobile"]
                              ? "open"
                              : ""
                          }`}
                          onClick={() =>
                            toggleMobileAccordion("medium-voltage-mobile")
                          }
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
                  onMouseEnter={() =>
                    handleMegaMenuCategoryHover("megatransformers")
                  } // Default to first category on hover
                  onMouseLeave={() => {
                    setActiveSolutionCategory(null);
                    setActiveSolutionSubCategory(null);
                  }}
                >
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="solutionsDropdown"
                    role="button"
                  >
                    Solutions
                  </Link>
                  <div
                    className={`dropdown-menu megamenucustom p-0 ${
                      activeSolutionCategory ? "show" : ""
                    }`}
                    aria-labelledby="solutionsDropdown"
                  >
                    <div className="mega-menu desktop-view">
                      <div className="menu-column" id="menucolfrst">
                        <Link
                          className={`submenu-item ${
                            activeSolutionCategory === "megatransformers"
                              ? "active"
                              : ""
                          }`}
                          to="javascript:;"
                          data-target="#megatransformers"
                          onMouseEnter={() =>
                            handleMegaMenuCategoryHover("megatransformers")
                          }
                        >
                          <div className="magamenu-inner">
                            <img src={headSIcon1} alt="" />
                            <span>Transformers</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                        <Link
                          className={`submenu-item ${
                            activeSolutionCategory === "megaswitchgears"
                              ? "active"
                              : ""
                          }`}
                          to="javascript:;"
                          data-target="#megaswitchgears"
                          onMouseEnter={() =>
                            handleMegaMenuCategoryHover("megaswitchgears")
                          }
                        >
                          <div className="magamenu-inner">
                            <img src={headSIcon3} alt="" />
                            <span>Switchgears</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                        <Link
                          className={`submenu-item ${
                            activeSolutionCategory === "megamotors"
                              ? "active"
                              : ""
                          }`}
                          to="javascript:;"
                          data-target="#megamotors"
                          onMouseEnter={() =>
                            handleMegaMenuCategoryHover("megamotors")
                          }
                        >
                          <div className="magamenu-inner">
                            <img src={headSIcon3} alt="" />
                            <span>Motors</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                        <Link
                          className={`submenu-item ${
                            activeSolutionCategory === "megadriveautomation"
                              ? "active"
                              : ""
                          }`}
                          to="javascript:;"
                          data-target="#megadriveautomation"
                          onMouseEnter={() =>
                            handleMegaMenuCategoryHover("megadriveautomation")
                          }
                        >
                          <div className="magamenu-inner">
                            <img src={headSIcon4} alt="" />
                            <span>Drives & Automation</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                        <Link
                          className={`submenu-item ${
                            activeSolutionCategory === "megaconsumerproduct"
                              ? "active"
                              : ""
                          }`}
                          to="javascript:;"
                          data-target="#megaconsumerproduct"
                          onMouseEnter={() =>
                            handleMegaMenuCategoryHover("megaconsumerproduct")
                          }
                        >
                          <div className="magamenu-inner">
                            <img src={headSIcon5} alt="" />
                            <span>Consumer Products</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                        <Link
                          className={`submenu-item ${
                            activeSolutionCategory === "megarailways"
                              ? "active"
                              : ""
                          }`}
                          to="javascript:;"
                          data-target="#megarailways"
                          onMouseEnter={() =>
                            handleMegaMenuCategoryHover("megarailways")
                          }
                        >
                          <div className="magamenu-inner">
                            <img src={headSIcon6} alt="" />
                            <span>Railways</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                      </div>
                      <div className="menu-column" id="menucolsecnd">
                        <div
                          id="megatransformers"
                          className={`level2-content ${
                            activeSolutionCategory === "megatransformers"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Transformers <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory ===
                              "#megatransformarSub1"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#megatransformarSub1"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#megatransformarSub1"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Transformer 1</span>
                              <i className="fas fa-angle-right"></i>
                            </div>
                          </Link>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory ===
                              "#megatransformarSub2"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#megatransformarSub2"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#megatransformarSub2"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Transformer 2</span>
                              <i className="fas fa-angle-right"></i>
                            </div>
                          </Link>
                        </div>
                        <div
                          id="megaswitchgears"
                          className={`level2-content ${
                            activeSolutionCategory === "megaswitchgears"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Switchgears <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory ===
                              "#mediumvoltageproductsSub"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#mediumvoltageproductsSub"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#mediumvoltageproductsSub"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Medium Voltage Products</span>
                            </div>
                          </Link>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory === "#powerqualsoluSub"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#powerqualsoluSub"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#powerqualsoluSub"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Power Quality Solutions</span>
                            </div>
                          </Link>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory ===
                              "#relaysautomationSub"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#relaysautomationSub"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#relaysautomationSub"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Relays and Automation</span>
                            </div>
                          </Link>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory === "#highvoltageSub"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#highvoltageSub"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover("#highvoltageSub")
                            }
                          >
                            <div className="magamenu-inner">
                              <span>High Voltage & Extra High Voltage</span>
                            </div>
                          </Link>
                        </div>
                        <div
                          id="megamotors"
                          className={`level2-content ${
                            activeSolutionCategory === "megamotors"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Motors <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory ===
                              "#mediumvoltageproductsSub"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#mediumvoltageproductsSub"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#mediumvoltageproductsSub"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Mega Motor 1</span>
                            </div>
                          </Link>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory === "#powerqualsoluSub"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#powerqualsoluSub"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#powerqualsoluSub"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Mega Motor 2</span>
                            </div>
                          </Link>
                        </div>
                        <div
                          id="megadriveautomation"
                          className={`level2-content ${
                            activeSolutionCategory === "megadriveautomation"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Drives & Automation{" "}
                              <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory ===
                              "#driveandautomationSub1"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#driveandautomationSub1"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#driveandautomationSub1"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Drive 1</span>
                            </div>
                          </Link>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory ===
                              "#driveandautomationSub2"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#driveandautomationSub2"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#driveandautomationSub2"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Drive 2</span>
                            </div>
                          </Link>
                        </div>
                        <div
                          id="megaconsumerproduct"
                          className={`level2-content ${
                            activeSolutionCategory === "megaconsumerproduct"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Consumer Products <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory === "#consuProductSub1"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#consuProductSub1"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#consuProductSub1"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Product 1</span>
                            </div>
                          </Link>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory === "#consuProductSub2"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#consuProductSub2"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover(
                                "#consuProductSub2"
                              )
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Product 2</span>
                            </div>
                          </Link>
                        </div>
                        <div
                          id="megarailways"
                          className={`level2-content ${
                            activeSolutionCategory === "megarailways"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Railways <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory === "#railwaySub1"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#railwaySub1"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover("#railwaySub1")
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Railway 1</span>
                            </div>
                          </Link>
                          <Link
                            className={`submenu-item ${
                              activeSolutionSubCategory === "#railwaySub2"
                                ? "active"
                                : ""
                            }`}
                            to="javascript:;"
                            data-target="#railwaySub2"
                            onMouseEnter={() =>
                              handleMegaMenuSubCategoryHover("#railwaySub2")
                            }
                          >
                            <div className="magamenu-inner">
                              <span>Railway 2</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="menu-column" id="menucolthrd">
                        <div
                          id="megatransformarSub1"
                          className={`level3-content ${
                            activeSolutionSubCategory === "#megatransformarSub1"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Transformer 1 <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Power Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Surge Arrester</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Disconnector</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="megatransformarSub2"
                          className={`level3-content ${
                            activeSolutionSubCategory === "#megatransformarSub2"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Transformer 2 <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">SF6 Circuit Breaker</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Surge Arrester</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Disconnector</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="mediumvoltageproductsSub"
                          className={`level3-content ${
                            activeSolutionSubCategory ===
                            "#mediumvoltageproductsSub"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Medium Voltage Products{" "}
                              <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">SF6 Circuit Breaker</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Disconnector</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="powerqualsoluSub"
                          className={`level3-content ${
                            activeSolutionSubCategory === "#powerqualsoluSub"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Power Quality Solutions
                              <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Surge Arrester</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Disconnector</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="relaysautomationSub"
                          className={`level3-content ${
                            activeSolutionSubCategory === "#relaysautomationSub"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Relays and Automation{" "}
                              <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Surge Arrester</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Disconnector</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="highvoltageSub"
                          className={`level3-content ${
                            activeSolutionSubCategory === "#highvoltageSub"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              High Voltage & Extra High Voltage{" "}
                              <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Disconnector</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="driveandautomationSub1"
                          className={`level3-content ${
                            activeSolutionSubCategory ===
                            "#driveandautomationSub1"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Drive 1 <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">Disconnector</Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="driveandautomationSub2"
                          className={`level3-content ${
                            activeSolutionSubCategory ===
                            "#driveandautomationSub2"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Drive 2 <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="consuProductSub1"
                          className={`level3-content ${
                            activeSolutionSubCategory === "#consuProductSub1"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Product 1 <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="consuProductSub2"
                          className={`level3-content ${
                            activeSolutionSubCategory === "#consuProductSub2"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Product 2 <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="railwaySub1"
                          className={`level3-content ${
                            activeSolutionSubCategory === "#railwaySub1"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Railway 1 <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="railwaySub2"
                          className={`level3-content ${
                            activeSolutionSubCategory === "#railwaySub2"
                              ? "active"
                              : ""
                          }`}
                        >
                          <div className="megainner-head">
                            <Link to="javascript:;">
                              Railway 2 <img src={diagonArrow} alt="" />
                            </Link>
                          </div>
                          <ul className="thirdlevel-drop-menu list-unstyled">
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Instrument Transformer
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Current Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Capacitive Voltage Transformer
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Inductive Voltage Transformer
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link to="javascript:;">
                                GIS & Dead Tank Breaker
                              </Link>
                            </li>
                            <li className="thirdlevel-menu-item">
                              <Link
                                to="javascript:;"
                                onClick={handleThirdLevelToggle}
                              >
                                Condenser Bushings
                              </Link>
                              <i className="fas fa-angle-down"></i>
                              <ul className="thlev-dropdown-submenu">
                                <li>
                                  <Link to="javascript:;">
                                    Condenser Bushings
                                  </Link>
                                </li>
                                <li>
                                  <Link to="javascript:;">
                                    Bushings Condenser
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mobile-accordion-menu">
                      <div
                        className={`accordion-toggle ${
                          openMobileAccordions["solutions-switchgears"]
                            ? "open"
                            : ""
                        }`}
                        onClick={() =>
                          toggleMobileAccordion("solutions-switchgears")
                        }
                      >
                        Switchgears
                      </div>
                      <div
                        className="accordion-content"
                        style={{
                          display: openMobileAccordions["solutions-switchgears"]
                            ? "block"
                            : "none",
                        }}
                      >
                        <div
                          className={`accordion-toggle ${
                            openMobileAccordions["solutions-high-voltage"]
                              ? "open"
                              : ""
                          }`}
                          onClick={() =>
                            toggleMobileAccordion("solutions-high-voltage")
                          }
                        >
                          High Voltage
                        </div>
                        <div
                          className="accordion-content"
                          style={{
                            display: openMobileAccordions[
                              "solutions-high-voltage"
                            ]
                              ? "block"
                              : "none",
                          }}
                        >
                          <Link to="#">SF6 Circuit Breaker</Link>
                          <Link to="#">GIS & Dead Tank Breaker</Link>
                          <Link to="#">Condenser Bushings</Link>
                        </div>
                        <div
                          className={`accordion-toggle ${
                            openMobileAccordions["solutions-medium-voltage"]
                              ? "open"
                              : ""
                          }`}
                          onClick={() =>
                            toggleMobileAccordion("solutions-medium-voltage")
                          }
                        >
                          Medium Voltage
                        </div>
                        <div
                          className="accordion-content"
                          style={{
                            display: openMobileAccordions[
                              "solutions-medium-voltage"
                            ]
                              ? "block"
                              : "none",
                          }}
                        >
                          <Link to="#">MV Switchgear 1</Link>
                          <Link to="#">MV Switchgear 2</Link>
                        </div>
                      </div>
                      <div
                        className={`accordion-toggle ${
                          openMobileAccordions["solutions-motors"] ? "open" : ""
                        }`}
                        onClick={() =>
                          toggleMobileAccordion("solutions-motors")
                        }
                      >
                        Motors
                      </div>
                      <div
                        className="accordion-content"
                        style={{
                          display: openMobileAccordions["solutions-motors"]
                            ? "block"
                            : "none",
                        }}
                      >
                        <div
                          className={`accordion-toggle ${
                            openMobileAccordions["solutions-motor-drive"]
                              ? "open"
                              : ""
                          }`}
                          onClick={() =>
                            toggleMobileAccordion("solutions-motor-drive")
                          }
                        >
                          Motor Drive
                        </div>
                        <div
                          className="accordion-content"
                          style={{
                            display: openMobileAccordions[
                              "solutions-motor-drive"
                            ]
                              ? "block"
                              : "none",
                          }}
                        >
                          <Link to="#">Drive Type A</Link>
                          <Link to="#">Drive Type B</Link>
                        </div>
                      </div>
                      <div
                        className={`accordion-toggle ${
                          openMobileAccordions["solutions-transformers"]
                            ? "open"
                            : ""
                        }`}
                        onClick={() =>
                          toggleMobileAccordion("solutions-transformers")
                        }
                      >
                        Transformers
                      </div>
                      <div
                        className="accordion-content"
                        style={{
                          display: openMobileAccordions[
                            "solutions-transformers"
                          ]
                            ? "block"
                            : "none",
                        }}
                      >
                        <div
                          className={`accordion-toggle ${
                            openMobileAccordions["solutions-power-transformer"]
                              ? "open"
                              : ""
                          }`}
                          onClick={() =>
                            toggleMobileAccordion("solutions-power-transformer")
                          }
                        >
                          Power Transformer
                        </div>
                        <div
                          className="accordion-content"
                          style={{
                            display: openMobileAccordions[
                              "solutions-power-transformer"
                            ]
                              ? "block"
                              : "none",
                          }}
                        >
                          <Link to="#">PT Product 1</Link>
                          <Link to="#">PT Product 2</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Consumer Durables
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/investor">
                    Investors
                  </Link>
                </li>

                {/* Careers Dropdown */}
                <li
                  className={`nav-item dropdown singldrdwn-col ${
                    activeSingleDropdown === "careers" ? "show" : ""
                  }`}
                  onMouseEnter={() => handleDropdownHover("careers", true)}
                  onMouseLeave={() => handleDropdownHover("careers", false)}
                >
                  <Link
                    className={`nav-link dropdown-toggle ${
                      activeSingleDropdown === "careers" ? "active" : ""
                    }`}
                    to="#"
                    id="single-second-dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={
                      activeSingleDropdown === "careers" ? "true" : "false"
                    }
                  >
                    Careers
                  </Link>
                  <div
                    className={`dropdown-menu p-0 ${
                      activeSingleDropdown === "careers" ? "show" : ""
                    }`}
                    aria-labelledby="single-second-dropdown"
                  >
                    {/* Desktop View */}
                    <ul
                      className="singl-drdwn single-dropdown-menu mega-menu desktop-view"
                      aria-labelledby="single-second-dropdown"
                    >
                      <li className="has-submenu">
                        <Link className="dropdown-item" to="#">
                          <div className="single-dr-inner">
                            <img src={careerIcon2} alt="" />
                            <span>Life at CG</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                        <ul className="submenu single-dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <div className="single-dr-inner">
                                <img src={headIcon4} alt="" />
                                <span>Board Members</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <div className="single-dr-inner">
                                <img src={headIcon4} alt="" />
                                <span>Policies</span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <Link className="dropdown-item" to="#">
                          <div className="single-dr-inner">
                            <img src={careerIcon2} alt="" />
                            <span>Open Positions</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                        <ul className="submenu single-dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <div className="single-dr-inner">
                                <img src={headIcon4} alt="" />
                                <span>Board Members</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <div className="single-dr-inner">
                                <img src={headIcon4} alt="" />
                                <span>Policies</span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <Link className="dropdown-item" to="#">
                          <div className="single-dr-inner">
                            <img src={careerIcon3} alt="" />
                            <span>Subsidiaries and Joint Ventures</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                        <ul className="submenu single-dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="#">
                              <div className="single-dr-inner">
                                <img src={headIcon4} alt="" />
                                <span>Board Members</span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              <div className="single-dr-inner">
                                <img src={headIcon4} alt="" />
                                <span>Policies</span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-submenu">
                        <Link className="dropdown-item" to="#">
                          <div className="single-dr-inner">
                            <img src={careerIcon4} alt="" />
                            <span>Power of Women at CG</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                      </li>
                      <li className="has-submenu">
                        <Link className="dropdown-item" to="#">
                          <div className="single-dr-inner">
                            <img src={careerIcon5} alt="" />
                            <span>Growth as a Leader at CG</span>
                            <i className="fas fa-angle-right"></i>
                          </div>
                        </Link>
                      </li>
                    </ul>
                    <div className="mobile-accordion-menu">
                      <div
                        className={`accordion-toggle ${
                          openMobileAccordions["careers-switchgears-mobile"]
                            ? "open"
                            : ""
                        }`}
                        onClick={() =>
                          toggleMobileAccordion("careers-switchgears-mobile")
                        }
                      >
                        Switchgears
                      </div>
                      <div
                        className="accordion-content"
                        style={{
                          display: openMobileAccordions[
                            "careers-switchgears-mobile"
                          ]
                            ? "block"
                            : "none",
                        }}
                      >
                        <div
                          className={`accordion-toggle ${
                            openMobileAccordions["careers-high-voltage-mobile"]
                              ? "open"
                              : ""
                          }`}
                          onClick={() =>
                            toggleMobileAccordion("careers-high-voltage-mobile")
                          }
                        >
                          High Voltage
                        </div>
                        <div
                          className="accordion-content"
                          style={{
                            display: openMobileAccordions[
                              "careers-high-voltage-mobile"
                            ]
                              ? "block"
                              : "none",
                          }}
                        >
                          <Link to="#">SF6 Circuit Breaker</Link>
                          <Link to="#">GIS & Dead Tank Breaker</Link>
                          <Link to="#">Condenser Bushings</Link>
                        </div>
                        <div
                          className={`accordion-toggle ${
                            openMobileAccordions[
                              "careers-medium-voltage-mobile"
                            ]
                              ? "open"
                              : ""
                          }`}
                          onClick={() =>
                            toggleMobileAccordion(
                              "careers-medium-voltage-mobile"
                            )
                          }
                        >
                          Medium Voltage
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Search */}
                <li className="nav-item desktopsrchtwh">
                  <Link
                    className="nav-link"
                    to="#"
                    id="desk-searchToggle"
                    onClick={toggleSearchBar}
                  >
                    <span>
                      <i className="fas fa-search"></i>
                    </span>
                  </Link>
                </li>
                {/* Contact */}
                <li className="nav-item">
                  <Link className="nav-link" to="/worldwide_contact">
                    <span className="curvebtn contactheadbtn">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Header */}
        <nav className="navbar navbar-expand-xl navbar-light" id="mobileheader">
          <div className="head-logo">
            <Link className="navbar-brand" to="/">
              <img src={headerLogo} alt="" />
            </Link>
            <div className="head-mob-menusrch-icn">
              <Link
                className="mobsrchtwh"
                to="#"
                id="mob-searchToggle"
                onClick={toggleSearchBar}
              >
                <span>
                  <i className="fas fa-search"></i>
                </span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-target="#mainNav"
                id="menuToggle"
                aria-controls="mainNav"
                aria-expanded={isMobileNavOpen ? "true" : "false"}
                aria-label="Toggle navigation"
                onClick={toggleMobileNav}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div
            className={`collapse navbar-collapse mobile-menu ${
              isMobileNavOpen ? "show" : ""
            }`}
            id="mainNav"
          >
            <ul>
              <li className="has-children">
                <Link to="/about_cg" onClick={handleMobileMultiLevelToggle}>
                  About CG
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="javasceipt:;">Company Overview</Link>
                  </li>
                  <li>
                    <Link to="/our_leadership">
                      Leadership and Top Management
                    </Link>
                  </li>
                  <li className="has-children">
                    <Link
                      to="/subsidiaries_jv"
                      onClick={handleMobileMultiLevelToggle}
                    >
                      Subsidiaries and Joint Ventures
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to="javascript:;">Board Members</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Policies</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="javascript:;">Our Purpose and Values</Link>
                  </li>
                  <li>
                    <Link to="javascript:;">Sectors We Serve</Link>
                  </li>
                  <li>
                    <Link to="/esg">ESG</Link>
                  </li>
                  <li>
                    <Link to="/tehcnology">Technology + R&D</Link>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <Link to="#" onClick={handleMobileMultiLevelToggle}>
                  Solutions
                </Link>
                <ul className="submenu">
                  <li className="has-children">
                    <Link to="#" onClick={handleMobileMultiLevelToggle}>
                      Transformers
                    </Link>
                    <ul className="submenu">
                      <li className="has-children">
                        <Link to="#" onClick={handleMobileMultiLevelToggle}>
                          Transformer 1
                        </Link>
                        <ul className="submenu">
                          <li className="has-children">
                            <Link to="#" onClick={handleMobileMultiLevelToggle}>
                              Instrument Transformer
                            </Link>
                            <i className="fas fa-angle-down"></i>
                            <ul className="submenu">
                              <li>
                                <Link to="#">Current Transformer</Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Capacitive Voltage Transformer
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  Inductive Voltage Transformer
                                </Link>
                              </li>
                              <li>
                                <Link to="#">Power Voltage Transformer</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="#">Surge Arrester</Link>
                          </li>
                          <li>
                            <Link to="#">Disconnector</Link>
                          </li>
                          <li>
                            <Link to="#">GIS & Dead Tank Breaker</Link>
                          </li>
                          <li className="has-children">
                            <Link to="#" onClick={handleMobileMultiLevelToggle}>
                              Condenser Bushings
                            </Link>
                            <i className="fas fa-angle-down"></i>
                            <ul className="submenu">
                              <li>
                                <Link to="#">Condenser Bushings</Link>
                              </li>
                              <li>
                                <Link to="#">Bushings Condenser</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="javascript:;">Transformer 2</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="javasceipt:;">Switchgears</Link>
                  </li>
                  <li>
                    <Link to="javasceipt:;">Motors</Link>
                  </li>
                  <li>
                    <Link to="javasceipt:;">Drives & Automation</Link>
                  </li>
                  <li>
                    <Link to="javasceipt:;">Consumer Products</Link>
                  </li>
                  <li>
                    <Link to="javasceipt:;">Railways</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">Consumer Durables</Link>
              </li>
              <li>
                <Link to="/investor">Investors</Link>
              </li>
              <li className="has-children">
                <Link to="#" onClick={handleMobileMultiLevelToggle}>
                  Careers
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="javasceipt:;">Life at CG</Link>
                  </li>
                  <li>
                    <Link to="javasceipt:;">Open Positions</Link>
                  </li>
                  <li>
                    <Link to="javascript:;">Campus Programs</Link>
                  </li>
                  <li>
                    <Link to="javascript:;">Power of Women at CG</Link>
                  </li>
                  <li>
                    <Link to="javascript:;">Growth as a Leader at CG</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/worldwide_contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Search Bar */}
        <div
          id="searchBarContainer"
          style={{ display: isSearchBarOpen ? "block" : "none" }}
        >
          <div className="cust-container">
            <form className="form-inline">
              <input
                name="search"
                className="form-control mr-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-primary curvebtn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
