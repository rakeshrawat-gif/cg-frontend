import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, FreeMode } from 'swiper/modules';

import BannerMobSlider from '../components/assets/images/home/bannerslidemob.jpg';
import BannerHome from '../components/assets/images/home/banner.jpg';
import diagonalbigarw from '../components/assets/images/home/diagonalbigarw.svg';
import diagolanArrow from '../components/assets/images/headicn/solution/diagolanarw.svg';

import SolutionForBus1 from '../components/assets/images/home/sfbim11.jpg';
import SolutionForBus2 from '../components/assets/images/home/sfbim22.jpg';
import SolutionForBus3 from '../components/assets/images/home/sfbim33.jpg';
import SolutionForBus4 from '../components/assets/images/home/sfbim44.jpg';
import SolutionForBus5 from '../components/assets/images/home/sfbim55.jpg';
import SolutionForBus6 from '../components/assets/images/home/sfbim66.jpg';

import transFgreen from '../components/assets/images/home/transfgreen.svg';
import switchFgreen from '../components/assets/images/home/switchgreen.svg';
import motoricn from '../components/assets/images/home/motoricn.svg';
import driveandautoicn from  '../components/assets/images/home/driveandautoicn.svg';
import railwaygrenicn from  '../components/assets/images/home/railwaygrenicn.svg';
import consuprgreen from  '../components/assets/images/home/consuprgreen.svg';

import leftArrow from '../components/assets/images/leftarow.svg';
import rightArrow from '../components/assets/images/rightarow.svg';
import aboutIcon1 from '../components/assets/images/home/abic1.svg';
import aboutIcon2 from '../components/assets/images/home/abic2.svg';
import aboutIcon3 from '../components/assets/images/home/abic3.svg';
import aboutIcon4 from '../components/assets/images/home/abic4.svg';
import cgImg1 from '../components/assets/images/home/cgim1.jpg';
import cgImg2 from '../components/assets/images/home/cgim2.jpg';
import cgImg3 from '../components/assets/images/home/cgim3.jpg';
import cgWithdigArrow from '../components/assets/images/home/whtdigarw.png';
import cgWildEnv from '../components/assets/images/home/wldenv.png';
import cggrIcon1 from '../components/assets/images/home/gricn1.svg';
import cggrIcon2 from '../components/assets/images/home/gricn2.svg';

import cgslideIcon1 from '../components/assets/images/home/cicn1.png';
import cgslideIcon2 from '../components/assets/images/home/cicn2.png';
import cgslideIcon3 from '../components/assets/images/home/cicn3.png';
import cgslideIcon4 from '../components/assets/images/home/cicn4.png';
import cgslideIcon5 from '../components/assets/images/home/cicn5.png';
import cgslideIcon6 from '../components/assets/images/home/cicn6.png';
import cgslideIcon7 from '../components/assets/images/home/cicn7.png';
import cgslideIcon8 from '../components/assets/images/home/cicn8.png';
import cgslideIcon9 from '../components/assets/images/home/cicn9.png';
import cgslideIcon10 from '../components/assets/images/home/cicn10.png';

import cgslideIcon11 from '../components/assets/images/home/cicn11.png';
import cgslideIcon12 from '../components/assets/images/home/cicn12.png';
import cgslideIcon13 from '../components/assets/images/home/cicn13.png';
import cgslideIcon14 from '../components/assets/images/home/cicn14.png';
import cgslideIcon15 from '../components/assets/images/home/cicn15.png';
import cgslideIcon16 from '../components/assets/images/home/cicn16.png';
import cgslideIcon17 from '../components/assets/images/home/cicn17.png';
import cgslideIcon18 from '../components/assets/images/home/cicn18.png';
import cgslideIcon19 from '../components/assets/images/home/cicn19.png';
import cgslideIcon20 from '../components/assets/images/home/cicn20.png';
import cgslideIcon21 from '../components/assets/images/home/cicn21.png';
import cgslideIcon22 from '../components/assets/images/home/cicn22.png';
import cgslideIcon23 from '../components/assets/images/home/cicn23.png';
import cgslideIcon24 from '../components/assets/images/home/cicn24.png';
import cgslideIcon25 from '../components/assets/images/home/cicn25.png';
import cgslideIcon26 from '../components/assets/images/home/cicn26.png';
import cgslideIcon27 from '../components/assets/images/home/cicn27.png';

// Import Swiper stylesy
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import "./MarqueeSlider.css";


function NumberCounter({ target, duration = 2000, suffix = "", formatK = false }) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);
  const frame = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        frame.current = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
        cancelAnimationFrame(frame.current);
      }
    };

    frame.current = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frame.current);
  }, [startAnimation, target, duration]);

  const displayValue = formatK
    ? `${Math.floor(count / 1000)}K${suffix}`
    : `${count.toLocaleString()}${suffix}`;

  return <h4 ref={ref}>{displayValue}</h4>;
}

const Homepage = () => {

   const icons = [
    cgslideIcon1, cgslideIcon2, cgslideIcon3, cgslideIcon4,
    cgslideIcon5, cgslideIcon6, cgslideIcon7, cgslideIcon8,
    cgslideIcon9, cgslideIcon10, cgslideIcon11, cgslideIcon12, cgslideIcon13, cgslideIcon14, cgslideIcon15, cgslideIcon16, cgslideIcon17, cgslideIcon18, cgslideIcon19, cgslideIcon20, cgslideIcon21, cgslideIcon22, cgslideIcon23, cgslideIcon24, cgslideIcon25, cgslideIcon26, cgslideIcon27
  ];

  useEffect(() => {
    const parents = document.querySelectorAll(".mobile-menu .has-children > a");

    parents.forEach(link => {
      const handleClick = (e) => {
        e.preventDefault();
        const parentLi = link.parentElement;
        parentLi.classList.toggle("open");
        const submenu = parentLi.querySelector(".submenu");
        if (submenu) {
          submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        }
      };
      link.addEventListener("click", handleClick);

      return () => {
        link.removeEventListener("click", handleClick);
      };
    });
  }, []);

  return (
    <>
      {/* Home Banner Carousel Section */}
      <section className="inner-comoonbanner home-banner-carousl-sec">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          loop={true}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="homebanercarousel"
        >
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiperlid-img">
                <picture>
                  <source media="(min-width:740px)" srcSet={BannerHome} />
                  <img src={BannerMobSlider} alt="Banner 1" />
                </picture>
              </div>
              <div className="slide-content-desc">
                <h1>Engineering a Smarter, Stronger Tomorrow</h1>
                <hr />
                <p>Delivering reliable solutions that move industries and the world - forward.</p>
                <a href="#" className="homeswiperslidcta">Explore More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiperlid-img">
                <picture>
                  <source media="(min-width:740px)" srcSet={BannerHome} />
                  <img src={BannerMobSlider} alt="Banner 2" />
                </picture>
              </div>
              <div className="slide-content-desc">
                <h1>Engineering a Smarter, Stronger Tomorrow</h1>
                <hr />
                <p>Delivering reliable solutions that move industries and the world - forward.</p>
                <a href="#" className="homeswiperslidcta">Explore More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="swiperlid-img">
                <picture>
                  <source media="(min-width:740px)" srcSet={BannerHome} />
                  <img src={BannerMobSlider} alt="Banner 3" />
                </picture>
              </div>
              <div className="slide-content-desc">
                <h1>Engineering a Smarter, Stronger Tomorrow</h1>
                <hr />
                <p>Delivering reliable solutions that move industries and the world - forward.</p>
                <a href="#" className="homeswiperslidcta">Explore More</a>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
          <div className="homeswipernav">
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
          </div>
      </section>

      {/* Highlight Section */}
      <section className="highlight-section comntbmargn">
        <div className="cust-container">
          <div className="highlight-section-inner">
            <div className="highlight-text">
              <div className="highlight-line">
                <span className="blue-highlight">8+ Decades</span>
                <span>of Trust <span className="mobileshowtxt">and</span></span>
              </div>
              <div><span className="desktopshowtxt">and</span> Excellence</div>
            </div>
            <div className="diagonalbgarw">
              <img src={diagonalbigarw} alt="Diagonal Arrow" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions for Business Section */}
      <section className="solutionforbus-sec comntbmargn">
        <div className="solutionforbus-navbar mobile">
          <div className="comon-head-inner">
            <h2>Solutions for<br />Your Business</h2>
            <p>As a global leader in engineering solutions, CG empowers customers to efficiently harness power and enhance industrial productivity with a focus on sustainability.</p>
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
              className="solutionforbusswiper"
            >
              <SwiperSlide>
                <div className="solution-sliditem">
                  <div className="soluitn-img">
                    <img src={SolutionForBus1} alt="Transformers" />
                  </div>
                  <div className="solutin-desc">
                    <div className="solut-icn">
                      <img src={transFgreen} alt="Transformer Icon" />
                    </div>
                    <h5>Transformers</h5>
                    <p>As a global leader in engineering solutions, CG empowers</p>
                    <a href="/">Know More <img src={diagolanArrow} alt="Arrow" /></a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="solution-sliditem">
                  <div className="soluitn-img">
                    <img src={SolutionForBus2} alt="Switchgears" />
                  </div>
                  <div className="solutin-desc">
                    <div className="solut-icn">
                      <img src={switchFgreen} alt="Switchgear Icon" />
                    </div>
                    <h5>Switchgears</h5>
                    <p>CG offers one of the widest ranges of Medium to Ultra High Voltage</p>
                    <a href="/">Know More <img src={diagolanArrow} alt="Arrow" /></a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="solution-sliditem">
                  <div className="soluitn-img">
                    <img src={SolutionForBus3} alt="Motors" />
                  </div>
                  <div className="solutin-desc">
                    <div className="solut-icn">
                      <img src={motoricn} alt="Motor Icon" />
                    </div>
                    <h5>Motors</h5>
                    <p>As a global leader in engineering solutions, CG empowers</p>
                    <a href="/">Know More <img src={diagolanArrow} alt="Arrow" /></a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="solution-sliditem">
                  <div className="soluitn-img">
                    <img src={SolutionForBus4} alt="Drives & Automation" />
                  </div>
                  <div className="solutin-desc">
                    <div className="solut-icn">
                      <img src={driveandautoicn} alt="Transformer Icon" />
                    </div>
                    <h5>Drives & Automation</h5>
                    <p>As a global leader in engineering solutions, CG empowers</p>
                    <a href="/">Know More <img src={diagolanArrow} alt="Arrow" /></a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="solution-sliditem">
                  <div className="soluitn-img">
                    <img src={SolutionForBus5} alt="Railways" />
                  </div>
                  <div className="solutin-desc">
                    <div className="solut-icn">
                      <img src={railwaygrenicn} alt="Switchgear Icon" />
                    </div>
                    <h5>Railways</h5>
                    <p>As a global leader in engineering solutions, CG empowers</p>
                    <a href="/">Know More <img src={diagolanArrow} alt="Arrow" /></a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="solution-sliditem">
                  <div className="soluitn-img">
                    <img src={SolutionForBus6} alt="Railways" />
                  </div>
                  <div className="solutin-desc">
                    <div className="solut-icn">
                      <img src={consuprgreen} alt="Switchgear Icon" />
                    </div>
                    <h5>Consumer Products</h5>
                    <p>As a global leader in engineering solutions, CG empowers</p>
                    <a href="/">Know More <img src={diagolanArrow} alt="Arrow" /></a>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
            <div className="solutionforbus-navbar rmbmob">
              <div className="comon-head-inner desktop">
                <h2>Solutions for<br />Your Business</h2>
                <p>As a global leader in engineering solutions, CG empowers customers to efficiently harness power and enhance industrial productivity with a focus on sustainability.</p>
              </div>
              <div className="switchgear-swiper-nav">
                <div className="swiper-button-prev"><img src={leftArrow} alt="Previous" /></div>
                <div className="swiper-button-next"><img src={rightArrow} alt="Next" /></div>
              </div>
            </div>
        </div>
      </section>

      {/* Across Border Section */}
      <section className="acrossborder-sec comntbmargn">
        <div className="cust-container">
          <div className="acrossborder-inner text-center">
            <h4>across <span>Borders,</span><br /><span>Beyond</span> limits</h4>
          </div>
        </div>
        
        <div className="acrossborer-globdesc">
          <div className="cust-container">
            <div className="acrossborder-icntxt">
              <div className="acrossborer-item paddlr d-flex">
                <div className="acrobor-itemimg d-flex">
                  <img src={aboutIcon3} alt="" />
                </div>
                {/* <h4>88</h4> */}
                <NumberCounter target={88} />
                <p>Years <br />of Trust</p>
              </div>
              <div className="acrossborer-item paddlr d-flex">
                <div className="acrobor-itemimg d-flex">
                  <img src={aboutIcon2} alt="" />
                </div>
                {/* <h4>80</h4> */}
                <NumberCounter target={80} />
                <p>Global <br />Markets</p>
              </div>
            </div>
            <div className="acrossborder-icntxt">
              <div className="acrossborer-item d-flex">
                <div className="acrobor-itemimg d-flex">
                  <img src={aboutIcon4} alt="" />
                </div>
                {/* <h4>17</h4> */}
                <NumberCounter target={17} />
                <p>Manufacturing<br /> Units</p>
              </div>
              <div className="acrossborer-item d-flex">
                <div className="acrobor-itemimg d-flex">
                  <img src={aboutIcon1} alt="" />
                </div>
                {/* <h4>7K+</h4> */}
                 <NumberCounter target={7000} suffix="+" formatK={true} />
                <p>Team <br />Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CG in News Section */}
      <section className="cginnews-sec comntbmargn">
        <div className="cust-container">
          <div className="cgnews-sec-head">
            <div className="comonhead">
              <h5>CG in the News</h5>
            </div>
            <div className="comconhead-cta dsktop">
              <a href="javascript::">See all <img src={diagolanArrow} alt="" /></a>
            </div>
          </div>
          <div className="news-section">
            <div className="news-card newscard-fstchild" style={{ backgroundImage: `url(${cgImg1})` }}>
              <div className="news-image">
                <span className="news-badge">News</span>
              </div>
              <div className="news-content">
                <div className="newsdesc">
                  <div className="news-date">18 June 2025</div>
                  <div className="news-title"><h4><a href="javascriprt:;">CG bags Rs 641 crore order <br/> from PGCIL</a></h4></div>
                </div>
                <div className="news-icon">
                  <a href="/"><img src={cgWithdigArrow} alt="" /></a>
                </div>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image" style={{ backgroundImage: `url(${cgImg3})` }}>
                <span className="news-badge">News</span>
                <div className="news-icon"><a href="/"><img src={cgWithdigArrow} alt="" /></a></div>
              </div>
              <div className="news-content">
                <div className="news-date">22 January 2025</div>
                <div className="news-title">
                  <h4><a href="jacvascript:;">CG Drives & Automation expanding in France</a></h4>
                  <p>We are thrilled to announce that CG Drives & Automation is expanding in France as a part</p>
                </div>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image" style={{ backgroundImage: `url(${cgImg2})` }}>
                <span className="news-badge">News</span>
                <div className="news-icon"><a href="/"><img src={cgWithdigArrow} alt="" /></a></div>
              </div>
              <div className="news-content">
                <div className="news-date">27 November 2024</div>
                <div className="news-title">
                  <h4><a href="/">CG Arm wins Rs 600 cr 'KAVACH' order from Indian Railways</a></h4>
                  <p>Shares of CG Power and Industrial Solutions surged up to 2.63 per cent at Rs 754.80 per</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cgnews-sec-head mobile">
            <div className="comconhead-cta text-center">
              <a href="javascript::">See all <img src={diagolanArrow} alt="" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Green Section */}
      <section className="enginnering-green-section comntbmargn">
        <div className="cust-container">
          <div className="green-container">
            <div className="green-left">
              <img src={cgWildEnv} alt="Green Earth" />
            </div>
            <div className="green-right">
              <div className="comonhead">
                <h5>Engineering a Greener Future</h5>
                <p>At CG, sustainability drives every step—from design to delivery. We focus on efficient, safe, and circular solutions that reduce environmental impact and support a greener future, all guided by our Product Stewardship Policy.</p>
              </div>
              <div className="green-cards">
                <div className="green-card">
                  <div className="greencardimg">
                    <img src={cggrIcon1} alt="" />
                  </div>
                  <h4>CG’s Approach to Sustainability</h4>
                  <a href="#">Know more <img src={diagolanArrow} alt="" /></a>
                </div>
                <div className="green-card">
                  <div className="greencardimg">
                    <img src={cggrIcon2} alt="" />
                  </div>
                  <h4>Ratings and Reports</h4>
                  <a href="#">Know more <img src={diagolanArrow} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Carousel Section */}
      <section className="infinite-carousel-sec comntbmargn">
          <div className="comonhead text-center">
            <h5>Trusted by Industries. Chosen by Leaders</h5>
          </div>
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            freeModeMomentum={false}
            freeModeMomentumRatio={0} 
            slidesPerView="auto"
            spaceBetween={30}
            speed={1500}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            className="infi-carousel"
          >
             {[...icons, ...icons].map((icon, index) => (
              <SwiperSlide key={index}>
                <img src={icon} alt={`icon-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
      </section>
    </>
  );
};

export default Homepage;