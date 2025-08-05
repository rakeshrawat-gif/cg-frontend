import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import BannerMobSlider from '../components/assets/images/home/bannerslidemob.jpg';
import BannerHome from '../components/assets/images/home/banner.jpg';
import diagonalbigarw from '../components/assets/images/home/diagonalbigarw.svg';
import diagolanArrow from '../components/assets/images/headicn/solution/diagolanarw.svg';
import SolutionForBus1 from '../components/assets/images/home/sfbim1.jpg';
import SolutionForBus2 from '../components/assets/images/home/sfbim2.jpg';
import SolutionForBus3 from '../components/assets/images/home/sfbim3.jpg';
import transFgreen from '../components/assets/images/home/transfgreen.svg';
import switchFgreen from '../components/assets/images/home/switchgreen.svg';
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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Homepage = () => {

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
          navigation={false}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          // navigation={{
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // }}
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
          <div className="swiper-pagination">
            <div className="homeswipernav">
              {/* <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div> */}
            </div>
          </div>
        </Swiper>
      </section>

      {/* Highlight Section */}
      <section className="highlight-section comntbmargn">
        <div className="cust-container">
          <div className="highlight-section-inner">
            <div className="highlight-text">
              <div className="highlight-line">
                <span className="blue-highlight">8+ Decades</span>
                <span>of Legacy in</span>
              </div>
              <div>Engineering Excellence</div>
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
            modules={[Navigation]}
            slidesPerView="auto"
            loop={true}
            spaceBetween={20}
            centeredSlides={false}
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
                  <p>As a global leader in engineering solutions, CG empowers</p>
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
                    <img src={transFgreen} alt="Motor Icon" />
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
                  <p>As a global leader in engineering solutions, CG empowers</p>
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
                    <img src={transFgreen} alt="Motor Icon" />
                  </div>
                  <h5>Motors</h5>
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
          <div className="acrossborer-globdesc">
            <div className="acrossborder-icntxt">
              <div className="acrossborer-item paddlr d-flex">
                <div className="acrobor-itemimg d-flex">
                  <img src={aboutIcon3} alt="" />
                </div>
                <h4>88</h4>
                <p>Years <br />of Trust</p>
              </div>
              <div className="acrossborer-item paddlr d-flex">
                <div className="acrobor-itemimg d-flex">
                  <img src={aboutIcon2} alt="" />
                </div>
                <h4>80</h4>
                <p>Global <br />Markets</p>
              </div>
            </div>
            <div className="acrossborder-icntxt">
              <div className="acrossborer-item d-flex">
                <div className="acrobor-itemimg d-flex">
                  <img src={aboutIcon4} alt="" />
                </div>
                <h4>17</h4>
                <p>Manufacturing<br /> Units</p>
              </div>
              <div className="acrossborer-item d-flex">
                <div className="acrobor-itemimg d-flex">
                  <img src={aboutIcon1} alt="" />
                </div>
                <h4>7K+</h4>
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
                  <div className="news-title"><h4><a href="javascriprt:;">CG bags Rs 641 crore order from PGCIL</a></h4></div>
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
        <div className="cust-container">
          <div className="comonhead text-center">
            <h5>Trusted by Industries. Chosen by Leaders</h5>
          </div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView="auto"
            spaceBetween={30}
            speed={1000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            direction="horizontal"
            className="infi-carousel"
          >
            <SwiperSlide><img src={cgslideIcon1} alt="Icon 1" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon2} alt="Icon 2" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon3} alt="Icon 3" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon4} alt="Icon 4" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon5} alt="Icon 5" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon6} alt="Icon 6" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon7} alt="Icon 7" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon8} alt="Icon 8" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon9} alt="Icon 9" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon10} alt="Icon 10" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon1} alt="Icon 1" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon2} alt="Icon 2" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon3} alt="Icon 3" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon4} alt="Icon 4" /></SwiperSlide>
            <SwiperSlide><img src={cgslideIcon5} alt="Icon 5" /></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Homepage;