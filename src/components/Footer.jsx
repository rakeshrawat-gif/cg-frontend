import React from 'react';
import { useEffect } from "react";

import FootLogo from '../components/assets/images/footlogo.png';
import FootLocation from '../components/assets/images/footlocicn.svg';
import FootMail from '../components/assets/images/footemailicn.svg';
import footPartIcon1 from '../components/assets/images/footparticn1.png';
import footPartIcon2 from '../components/assets/images/footparticn2.png';

const Footer = () => {
  useEffect(() => {
    const handleClick = (e) => {
      if (window.innerWidth <= 767) {
        const title = e.currentTarget;
        const links = title.nextElementSibling;
        const isOpen = links.classList.contains("show");

        // Close all
        document.querySelectorAll(".footer-links").forEach((el) => el.classList.remove("show"));
        document.querySelectorAll(".footer-title").forEach((el) => el.classList.remove("active"));

        // Toggle current
        if (!isOpen) {
          links.classList.add("show");
          title.classList.add("active");
        }
      }
    };

    const titles = document.querySelectorAll(".footer-title");
    titles.forEach((title) => {
      title.addEventListener("click", handleClick);
    });

    return () => {
      titles.forEach((title) => {
        title.removeEventListener("click", handleClick);
      });
    };
  }, []);


  return (
     <footer className="main-footer">
        <div className="cust-container">
            <div className="footer-top">
              {/*  Column 1: Logo + Social  */}
              <div className="footer-col logo-col">
                <a href="/"><img src={FootLogo} alt="Company Logo" className="logo" /></a>
                
                <div className="footcol-addres">
                  <div className="footcol-additem">
                    <img src={FootLocation} alt=""/><span>CG Power and Industrial Solutions Limited<br/> 10th Floor, CG House,Dr Annie Besant Road,<br/> Worli, Mumbai - 400030.</span>
                  </div>
                  <div className="footcol-additem">
                    <img src={FootMail} alt=""/><a href="mailto:help@cgglobal.com"><span>help@cgglobal.com</span></a>
                  </div>
                </div>

                 {/*  Column 1: Parent Companies  */}
                  <div className="footer-col foot-colpartner footdekstop">
                      <h4 className="footer-title">Our Parent Companies:</h4>
                      <div className="foot-col4-partlogs footer-links">
                         <img src={footPartIcon1} alt="" className="parent-logo"/>
                        <img src={footPartIcon2} alt="" className="parent-logo"/>
                      </div>
                  
                  </div>
              </div>

              {/*  Column 2: Company  */}
              <div className="footer-col foot-col2">
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                  <li><a href="#">Company Overview</a></li>
                  <li><a href="#">Leadership & Top Management</a></li>
                  <li><a href="/subsidiaries-joint-ventures">Subsidiaries & Joint Ventures</a></li>
                  <li><a href="#">Our Purpose & Values</a></li>
                  <li><a href="/sector-we-serve">Sectors We Serve</a></li>
                  <li><a href="#">ESG</a></li>
                  <li><a href="#">Technology + R&D</a></li>
              </ul>
              </div>

              {/* Column 3: Solutions */}
              <div className="footer-col foot-col3">
                <h4 className="footer-title">Solutions</h4>
                <ul className="footer-links">
                    <li><a href="#">Transformers</a></li>
                    <li><a href="/switchgear">Switchgears</a></li>
                    <li><a href="#">Motors</a></li>
                    <li><a href="#">Drives & Automation</a></li>
                    <li><a href="#">Railways</a></li>
                    <li><a href="#">Consumer Durables</a></li>
                </ul>
              </div>

              {/*  Column 4: Resources */}
              <div className="footer-col foot-col4">
                <h4 className="footer-title">Resources</h4>
                <ul className="footer-links">
                    <li><a href="/contact-us">Contact Us</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Investors</a></li>
                    <li><a href="#">Policies</a></li>
                    <li><a href="#">CG in the News</a></li>
                    <li><a href="#">Disclaimer</a></li>
                </ul>
              </div>
            </div>
             {/*  Column 1: Parent Companies  */}
            <div className="footer-col foot-colpartner footmobile">
                <h4>Our Parent Companies:</h4>
                <div className="foot-col4-partlogs">
                    <img src={footPartIcon1} alt="" className="parent-logo"/>
                    <img src={footPartIcon2} alt="" className="parent-logo"/>
                </div>
            
            </div>
            <div className="footer-social-row">
              <div className="social-icons">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="cust-container">
                <div className="footerbottom-inner">
                    <div className="footer-bottom-left">
                        <p>Copyright © 2021. CG Power & Industrial Solutions Ltd. All rights reserved.</p>          
                    </div>
                    
                    {/* <div className="footer-bottom-right">
                        <div className="footetbottom-right-first">
                            <a href="#">Disclaimer</a>
                            <span>|</span>
                            <span>Made by Gin n Sardonic<sup>®</sup></span>
                        </div>
                        <div className="footetbottom-right-second">
                            <a href="#" className="scroll-top"><i className="fas fa-chevron-up"></i></a>
                        </div>
                    </div>*/}
                </div>
                
            </div>
            
        </div>

    </footer>
  );
};

export default Footer;
