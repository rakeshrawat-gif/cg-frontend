import React from 'react';
import FootLogo from '../components/assets/images/footlogo.png';
import footPartIcon1 from '../components/assets/images/footparticn1.png';
import footPartIcon2 from '../components/assets/images/footparticn2.png';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="cust-container">
        <div className="footer-top">

          {/* Column 1: Logo + Social */}
          <div className="footer-col logo-col">
            <a href="/">
              <img src={FootLogo} alt="Company Logo" className="logo" />
            </a>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col foot-col2">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Our Business */}
          <div className="footer-col foot-col3">
            <h4>Our Business</h4>
            <ul>
              <li><a href="#">Industrial</a></li>
              <li><a href="#">Power</a></li>
              <li><a href="#">Railways</a></li>
            </ul>
          </div>

          {/* Column 4: Parent Companies */}
          <div className="footer-col foot-col4">
            <h4>Our Parent Companies</h4>
            <div className="foot-col4-partlogs">
              <img src={footPartIcon1} alt="Parent Logo 1" className="parent-logo" />
              <img src={footPartIcon2} alt="Parent Logo 2" className="parent-logo" />
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="cust-container">
          <div className="footerbottom-inner">
            <div className="footer-bottom-left">
              <p>Copyright © 2021. CG Power &amp; Industrial Solutions Ltd. All rights reserved.</p>
            </div>

            <div className="footer-bottom-right">
              <div className="footetbottom-right-first">
                <a href="#">Disclaimer</a>
                <span> | </span>
                <span>Made by Gin n Sardonic<sup>®</sup></span>
              </div>
              <div className="footetbottom-right-second">
                <a href="#" className="scroll-top"><i className="fas fa-chevron-up"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
