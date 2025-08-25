import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, FreeMode } from 'swiper/modules';
import bannerImg from "../components/assets/images/technologyR&D/R&D1.png";
import trainImg from "../components/assets/images/technologyR&D/train.png";
import machineImg from "../components/assets/images/technologyR&D/machine.png";

import caseStudySlide1 from '../components/assets/images/technologyR&D/caseStudy-1.png';
import caseStudySlide2 from '../components/assets/images/technologyR&D/caseStudy-2.png';
import caseArrow from '../components/assets/images/technologyR&D/caseArrow.svg';
import greenArrow from '../components/assets/images/technologyR&D/greenArrow.svg';

import leftArrow from '../components/assets/images/leftarow.svg';
import rightArrow from '../components/assets/images/rightarow.svg';

import InnovationGrid from "./InnovationGrid";

const LeadingWithTechnology = () => {
  const techSections = [
    {
      img: trainImg,
      reverse: false,
      paragraphs: [
        "Staffed with highly qualified experts and equipped with robust infrastructure, our R&D ecosystem is powered by strong processes that drive consistent technological breakthroughs and business growth.",
        "Our journey in technology began with Colonel R.E.B. Crompton, our visionary founder and a pioneer in electrical engineering in the late 19th and early 20th centuries. Under his leadership, CG became the first pioneers to introduce electric locomotives in India, setting the stage for decades of innovation.",
      ],
    },
    {
      img: machineImg,
      reverse: true,
      paragraphs: [
        "The formal establishment of CG’s R&D division in 1977 marked a significant milestone — an embodiment of our founder’s pioneering spirit. Since then, we’ve delivered multiple industry firsts and continue to bridge early-stage innovation with market-ready solutions. By collaborating closely with our business divisions and external partners, CG R&D secures our competitive edge in a global marketplace.",
        "Today, CG’s technology portfolio spans Transformers, Switchgear, Motors, Drives, and Automation Products, enabling smarter, more efficient systems across industries.",
      ],
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="inner-comoonbanner">
        <div className="comonban">
          <img src={bannerImg} alt="Leading with Technology Banner" />
        </div>
      </section>

      {/* Breadcrumb & Intro Section */}
      <section className="commonfrst-sec">
        <div className="cust-container">
          <div className="breadcr-inner">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">About CG</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Technology + R&D
              </li>
            </ol>
          </div>

          <div className="common-heading-sec">
            <div className="comon-head-inner">
              <h2>Leading with Technology</h2>
              <p>
                At CG, innovation is not just a goal; it's a legacy. Our
                state-of-the-art R&D Centres are the innovation engines behind
                our Strategic Business Units, dedicated to New Product
                Development and cutting-edge technological advancements.
              </p>
            </div>
          </div>

          {/* Dynamic Sections */}
          {techSections.map((section, idx) => (
            <div
              className={`tech-row ${section.reverse ? "reverse" : ""} row-${idx}`}
              key={idx}
            >
              <div className="tech-image">
                <img src={section.img} alt="Tech" />
              </div>
              <div className="tech-text">
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className={pIdx === 0 ? "tech-text-title" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="solutionforbus-sec comntbmargn techSection">
        <div className="solutionforbus-navbar mobile caseStudy-navbar">
          <div className="caseStudyTit">
            <div className='titleCase'>
              <h2>case <img src={caseArrow} alt="" /></h2>
              <h3>studies</h3>
            </div>
          </div>
        </div>
        <div className="swiper-item-slider">
          <Swiper
            modules={[Autoplay, FreeMode, Navigation]}
            slidesPerView="auto"
            loop={true}
            freeMode={true}
            freeModeMomentum={false}
            freeModeMomentumRatio={0}
            spaceBetween={20}
            centeredSlides={false}
            speed={3000}
            // autoplay={{
            //   delay: 200,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true,
            // }}

            navigation={{
              nextEl: '.solutionforbus-sec .swiper-button-next',
              prevEl: '.solutionforbus-sec .swiper-button-prev',
            }}

            breakpoints={{
              0: { slidesPerView: 1.5 },
              676: { slidesPerView: 2.5 },
              991: { slidesPerView: 2.5 },
              992: { slidesPerView: 2.5 },
            }}
            className="caseStudySwiper"
          // className="solutionforbusswiper caseStudySwiper"
          >
            <SwiperSlide>
              <div className="casestudy-sliditem">
                <div className="soluitn-img caseStudy-img">
                  <img src={caseStudySlide1} className='caseImgSlide' alt="Krimpenerwaard pumping station" />
                  <div className='caseStudyDesc'>
                    <h3>Krimpenerwaard pumping station</h3>
                    <p>The Krimpenerwaard pumping station
                      contributes to dry feet and sufficient ...</p>
                  </div>
                  <img src={greenArrow} alt="Arrow" className="hover-arrow" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="casestudy-sliditem">
                <div className="soluitn-img caseStudy-img">
                  <img src={caseStudySlide2} className='caseImgSlide' alt="GMB BioEnergy" />
                  <div className='caseStudyDesc'>
                    <h3>GMB BioEnergy</h3>
                    <p>GMB BioEnergy is a company with leading expertise
                      and sustainable solutions in the ...</p>
                  </div>
                  <img src={greenArrow} alt="Arrow" className="hover-arrow" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="casestudy-sliditem">
                <div className="soluitn-img caseStudy-img">
                  <img src={caseStudySlide1} className='caseImgSlide' alt="GMB BioEnergy" />
                  <div className='caseStudyDesc'>
                    <h3>Krimpenerwaard pumping station</h3>
                    <p>The Krimpenerwaard pumping station
                      contributes to dry feet and sufficient ...</p>
                  </div>
                  <img src={greenArrow} alt="Arrow" className="hover-arrow" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="casestudy-sliditem">
                <div className="soluitn-img caseStudy-img">
                  <img src={caseStudySlide2} className='caseImgSlide' alt="GMB BioEnergy" />
                  <div className='caseStudyDesc'>
                    <h3>GMB BioEnergy</h3>
                    <p>GMB BioEnergy is a company with leading expertise
                      and sustainable solutions in the ...</p>
                  </div>
                  <img src={greenArrow} alt="Arrow" className="hover-arrow" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="casestudy-sliditem">
                <div className="soluitn-img caseStudy-img">
                  <img src={caseStudySlide1} className='caseImgSlide' alt="Krimpenerwaard pumping station" />
                  <div className='caseStudyDesc'>
                    <h3>Krimpenerwaard pumping station</h3>
                    <p>The Krimpenerwaard pumping station
                      contributes to dry feet and sufficient ...</p>
                  </div>
                  <img src={greenArrow} alt="Arrow" className="hover-arrow" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="casestudy-sliditem">
                <div className="soluitn-img caseStudy-img">
                  <img src={caseStudySlide2} className='caseImgSlide' alt="Krimpenerwaard pumping station" />
                  <div className='caseStudyDesc'>
                    <h3>GMB BioEnergy</h3>
                    <p>GMB BioEnergy is a company with leading expertise
                      and sustainable solutions in the ...</p>
                  </div>
                  <img src={greenArrow} alt="Arrow" className="hover-arrow" />
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
          <div className="solutionforbus-navbar caseStudy-navbar rmbmob">
            <div className="comon-head-inner desktop">
              <h2 class="desktopView abtFinTitle">
                <span class="caseOutlinedText">case <img src={caseArrow} alt="" /></span> <span class="caseSpanTitle">studies</span>
              </h2>
              <h2 class="mobileView abtFinTitle">
                <span class="caseOutlinedText">case <img src={caseArrow} alt="" /></span> <span class="caseSpanTitle">studies</span>
              </h2>
            </div>
            <div className="switchgear-swiper-nav">
              <div className="swiper-button-prev"><img src={leftArrow} alt="Previous" /></div>
              <div className="swiper-button-next"><img src={rightArrow} alt="Next" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Grid Section */}
      <InnovationGrid />
    </>
  );
};

export default LeadingWithTechnology;
