import React, { useState } from 'react';

import diagonArrow from '../components/assets/images/headicn/solution/diagolanarw.svg';
import bannerImage from "../components/assets/images/subjoinven/subjvban.jpg";
import Indian from "../components/assets/images/subjoinven/indiaicn.svg";
import nonIndian from "../components/assets/images/subjoinven/nonindiaicn.svg";
import downloadIcn from "../components/assets/images/subjoinven/downloadicn.svg";

import sjvic1 from "../components/assets/images/subjoinven/sjvic1.jpg";
import sjvic2 from "../components/assets/images/subjoinven/sjvic2.jpg";
import sjvic3 from "../components/assets/images/subjoinven/sjvic3.jpg";
import sjvic4 from "../components/assets/images/subjoinven/sjvic4.jpg";
import sjvic5 from "../components/assets/images/subjoinven/sjvic5.jpg";

const SubsidiariesJointVentures = () => {
  const tabData = [
    { label: 'India', img: Indian, content:[
      {cimg: sjvic1, ctitle:'CG Adhesive Products Limited', cdesc:'CG Adhesive Products Limited  is a Joint Venture between CG Power and Industrial Solutions Ltd. and PPI Adhesive Products Limited, Republic of Ireland, for the manufacture of Pressure Sensitive Adhesive Tapes and Laminates (Paper and Mica based) for Electrical, Electronics and Specialty applications. The Company also offers complete solutions for printed and die cut components and labels.', clink:'', imgalt:'India' },
      {cimg: sjvic2, ctitle:'CG Semi Private', cdesc:'CG Semi Private Ltd. is a joint venture uniting CG Power and Industrial Solutions Limited, Renesas Electronics America Inc., and Stars Microelectronics (Thailand) Public Co., Ltd. They specialize in Outsourced Semiconductor Assembly and Testing (OSAT) services, offering comprehensive test services on a global scale.', clink:'' },
      {cimg: sjvic3, ctitle:'Axiro Semiconductor Private Limited', cdesc:'Axiro is rapidly emerging as a key player in the global semiconductor ecosystem. They ship millions of production ICs every month, driven by a team built for speed, scale, and execution. Their portfolio spans RF, mmWave, wireless infrastructure, and Satcom — enabling the next wave of connectivity through technologies like 6G and AI-powered systems.', clink:'' },
      {cimg: sjvic4, ctitle:'CG Power Equipments Limited', cdesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ', clink:'' },
      {cimg: sjvic5, ctitle:'G.G.Tronics India Private Limited', cdesc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa ', clink:'' },
    ]},
    { label: 'Non India', img: nonIndian, content:[
      {cimg: sjvic3, ctitle:'CG Adhesive Products Limited', cdesc:'CG Adhesive Products Limited  is a Joint Venture between CG Power and Industrial Solutions Ltd. and PPI Adhesive Products Limited, Republic of Ireland, for the manufacture of Pressure Sensitive Adhesive Tapes and Laminates (Paper and Mica based) for Electrical, Electronics and Specialty applications. The Company also offers complete solutions for printed and die cut components and labels.', clink:'', imgalt:'India' },
     {cimg: sjvic5, ctitle:'CG Adhesive Products Limited', cdesc:'CG Adhesive Products Limited  is a Joint Venture between CG Power and Industrial Solutions Ltd. and PPI Adhesive Products Limited, Republic of Ireland, for the manufacture of Pressure Sensitive Adhesive Tapes and Laminates (Paper and Mica based) for Electrical, Electronics and Specialty applications. The Company also offers complete solutions for printed and die cut components and labels.', clink:'', imgalt:'India' },
     {cimg: sjvic1, ctitle:'CG Adhesive Products Limited', cdesc:'CG Adhesive Products Limited  is a Joint Venture between CG Power and Industrial Solutions Ltd. and PPI Adhesive Products Limited, Republic of Ireland, for the manufacture of Pressure Sensitive Adhesive Tapes and Laminates (Paper and Mica based) for Electrical, Electronics and Specialty applications. The Company also offers complete solutions for printed and die cut components and labels.', clink:'', imgalt:'India' },
    ] }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabData[activeIndex];

  return (
    <>
      <section className="inner-comoonbanner">
        <div className="comonban">
            <img src={bannerImage} alt=""/>
        </div>
      </section>

       <section className="commonfrst-sec">
        <div className="cust-container">
            <div className="breadcr-inner">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">About CG</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Subsidiaries and Joint Ventures</li>
                </ol>
            </div>

            <div className="common-heading-sec">
                <div className="comon-head-inner">
                    <h2>Subsidiaries / Joint Ventures</h2>
                    <p>Over the years, CG has strategically acquired entities and entered into several joint ventures to enhance market reach, unlock synergies, share advanced technologies, and manage risk more effectively. These collaborations have played a pivotal role in expanding CG’s global footprint and strengthening its competitive edge.</p>
                </div>
            </div>
        </div>
      </section>

    <section className="subjointabs">
      <div className="cust-container">
        {/* <!-- Tabs --> */}
        <div className="tabs-container commcntabui d-flex">
          <ul className="nav nav-tabs" id="companyTab" role="tablist">
            {tabData.map((tab, idx) => (
              <li className="nav-item">
                <a
                key={idx}
                className={`nav-link ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}>
                  <img src={tab.img} alt="" />{tab.label}</a>
              </li>
            ))}
          </ul>
          <div className="download-icncta">
            <button href="javascript:;"><img src={downloadIcn} alt="" />Download Logos</button>
          </div>
        </div>

        {/* <!-- Tab Content --> */}
        <div className="tab-content comccontabcontent" id="companyTabContent">
          {/* <!-- India Tab --> */}
          <div className="tab-pane fade show active" id="india" role="tabpanel">
            <div className="company-section">
              <div className="row ">
                {activeTab.content.map((item, id)=>(
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={id}>
                    <div className="company-card">
                      <img src={item.cimg} className="company-logo" alt={item.imgalt}/>
                      <div className="company-title">{item.ctitle}</div>
                      <div className="company-desc">{item.cdesc}</div>
                      <a href={item.clink} className="know-more">Know more <img src={diagonArrow} alt="" /></a>
                    </div>
                </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    </>
  );
};

export default SubsidiariesJointVentures;