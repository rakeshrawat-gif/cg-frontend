import React from "react";
import bannerImage from "../assets/images/innerpagebanner.jpg"; // Adjust the path as per your structure
import contentImg from "../assets/images/aboutsjv.jpg";

const SubsidiariesJointVentures = () => {
  return (
    <div className="innerpage">
      {/* Banner Section */}
      <section className="innerpage-banner">
        <img src={bannerImage} className="inrban-img" alt="Banner" />
        <div className="inr-page-hed">
          <div className="cust-container">
            <h1>Subsidiaries & Joint Ventures</h1>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumbsec">
        <div className="cust-container">
          <ul>
            <li><a href="/">Home</a></li>
            <li><img src="images/rightangle.svg" alt="Arrow" /></li>
            <li>About CG</li>
            <li><img src="images/rightangle.svg" alt="Arrow" /></li>
            <li>Subsidiaries & Joint Ventures</li>
          </ul>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="comonpagesection comntbmargn">
        <div className="cust-container">
          <div className="comon-head-inner">
            <h2>Subsidiaries & Joint Ventures</h2>
          </div>

          <div className="comon-innerpage-content">
            <div className="innerimg-rightcontent">
              <div className="img-part">
                <img src={contentImg} alt="Subsidiary" />
              </div>
              <div className="right-para">
                <p>
                  CG’s wholly owned subsidiaries include CG Power Solutions Limited and CG International B.V. The businesses of these companies are briefly described hereunder:
                </p>

                <h4>CG Power Solutions Limited (CGPSL)</h4>
                <p>
                  CGPSL is a wholly owned subsidiary of CG and was incorporated in 2009 to undertake turnkey project business. The company is into substation and railway turnkey projects and has a good presence in India.
                </p>

                <h4>CG International B.V. (CGI)</h4>
                <p>
                  CGI is a wholly owned subsidiary of CG and is based in the Netherlands. CGI acts as the investment vehicle for CG’s international operations. CGI holds stake in all overseas operations of CG, including manufacturing units and marketing companies in the USA, Europe, Indonesia, and the Middle East.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubsidiariesJointVentures;