import React, { useEffect } from 'react';
import subjvban from '../components/assets/images/subjoinven/subjvban.jpg';
import indiaIcon from '../components/assets/images/subjoinven/indiaicn.svg';
import nonIndiaIcon from '../components/assets/images/subjoinven/nonindiaicn.svg';
import downloadIcon from '../components/assets/images/subjoinven/downloadicn.svg';
import sjv1 from '../components/assets/images/subjoinven/sjvic1.jpg';
import sjv2 from '../components/assets/images/subjoinven/sjvic2.jpg';
import sjv3 from '../components/assets/images/subjoinven/sjvic3.jpg';
import sjv4 from '../components/assets/images/subjoinven/sjvic4.jpg';
import sjv5 from '../components/assets/images/subjoinven/sjvic5.jpg';
import arrowIcon from '../components/assets/images/headicn/solution/diagolanarw.svg';

const SubsidiariesJointVentures = () => {
  useEffect(() => {
  const firstTab = document.querySelector('#companyTab a.nav-link.active');
  if (firstTab && window.bootstrap?.Tab) {
    new window.bootstrap.Tab(firstTab).show();
  }
}, []);

  return (
    <>
      {/* Banner */}
      <section className="inner-comoonbanner">
        <div className="comonban">
          <img src={subjvban} alt="Banner" />
        </div>
      </section>

      {/* Breadcrumb & Intro */}
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

      {/* Tabs */}
      <section className="subjointabs">
        <div className="cust-container">
          <div className="tabs-container commcntabui d-flex">
            <ul className="nav nav-tabs" id="companyTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="india-tab" data-bs-toggle="tab" href="#india" role="tab">
                  <img src={indiaIcon} alt="India" /> India
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="nonindia-tab" data-bs-toggle="tab" href="#nonindia" role="tab">
                  <img src={nonIndiaIcon} alt="Non India" /> Non India
                </a>
              </li>
            </ul>
            <div className="download-icncta">
              <button type="button">
                <img src={downloadIcon} alt="Download" /> Download Logos
              </button>
            </div>
          </div>

          <div className="tab-content comccontabcontent" id="companyTabContent">
            {/* India Tab */}
            <div className="tab-pane fade show active" id="india" role="tabpanel">
              <div className="company-section">
                <div className="row">
                  {[
                    {
                      img: sjv1,
                      title: 'CG Adhesive Products Limited',
                      desc: 'CG Adhesive Products Limited  is a Joint Venture between CG Power and Industrial Solutions Ltd. and PPI Adhesive Products Limited, Republic of Ireland...',
                    },
                    {
                      img: sjv2,
                      title: 'CG Semi Private',
                      desc: 'CG Semi Private Ltd. is a joint venture uniting CG Power and Industrial Solutions Limited, Renesas Electronics America Inc....',
                    },
                    {
                      img: sjv3,
                      title: 'Axiro Semiconductor Private Limited',
                      desc: 'Axiro is rapidly emerging as a key player in the global semiconductor ecosystem...',
                    },
                    {
                      img: sjv4,
                      title: 'CG Power Equipments Limited',
                      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                    },
                    {
                      img: sjv5,
                      title: 'G.G.Tronics India Private Limited',
                      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
                    },
                  ].map((item, idx) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={idx}>
                      <div className="company-card">
                        <img src={item.img} className="company-logo" alt={item.title} />
                        <div className="company-title">{item.title}</div>
                        <div className="company-desc">{item.desc}</div>
                        <a href="javascript:;" className="know-more">Know more <img src={arrowIcon} alt="Arrow" /></a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Non India Tab */}
            <div className="tab-pane fade" id="nonindia" role="tabpanel">
              <div className="company-section">
                <div className="row">
                  {[sjv3, sjv4, sjv5].map((imgSrc, idx) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={idx}>
                      <div className="company-card">
                        <img src={imgSrc} className="company-logo" alt="Logo" />
                        <div className="company-title">Company Title</div>
                        <div className="company-desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                        </div>
                        <a href="javascript:;" className="know-more">Know more <img src={arrowIcon} alt="Arrow" /></a>
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