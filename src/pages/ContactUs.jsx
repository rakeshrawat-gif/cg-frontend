import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../components/assets/css/contactus.css"; // adjust path if needed
import "../components/assets/css/style.css";

const ContactUs = () => {
  return (
    <>
      <section className="inner-comoonbanner">
        <div className="comonban">
          <img src="images/contact/contactbaner.jpg" alt="Contact Banner" />
        </div>
      </section>

      <section className="commonfrst-sec">
        <div className="cust-container">
          <div className="breadcr-inner">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </div>
          <div className="common-heading-sec">
            <div className="comon-head-inner">
              <h2>Reach Us Worldwide</h2>
              <p>Explore CG’s extensive network of operations spanning worldwide. Reach out to our global offices for support, partnerships, or inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mapfilter-sec">
        <div className="cust-container">

          {/* Country Filter Dropdown */}
          <div className="mapfiltercontrols">
            <div className="custom-select-wrapper">
              <div className="custom-select-country" id="countrySelectDropdown">
                <div className="selected-option">
                  <img src="https://flagcdn.com/in.svg" alt="India" />
                  <span>India</span>
                  <i className="fas fa-chevron-down dropdown-arrow"></i>
                </div>
                <ul className="select-options" id="countryOptions">
                  <li data-flag="https://flagcdn.com/in.svg" data-value="India">
                    <img src="https://flagcdn.com/in.svg" alt="India" /> India
                  </li>
                  <li data-flag="https://flagcdn.com/us.svg" data-value="USA">
                    <img src="https://flagcdn.com/us.svg" alt="USA" /> USA
                  </li>
                  <li data-flag="https://flagcdn.com/de.svg" data-value="Germany">
                    <img src="https://flagcdn.com/de.svg" alt="Germany" /> Germany
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div id="map" style={{ height: "400px", backgroundColor: "#eee", marginTop: "20px" }}>
            {/* TODO: Integrate Google Maps or Leaflet map here */}
            Map Placeholder
          </div>

          {/* Card Grid Placeholder */}
          <div className="locitem-card-grid" id="locationCards">
            {/* TODO: Loop through location cards here */}
            <p style={{ textAlign: "center", padding: "20px" }}>Location cards go here</p>
          </div>
        </div>
      </section>

      {/* Optional Office Slider (using Swiper) */}
      <section className="office-slider">
        <div className="cust-container">
          <h3>Our Global Offices</h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              768: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
          >
            {/* Example SwiperSlides - replace with dynamic data */}
            <SwiperSlide><div className="office-card">Office 1</div></SwiperSlide>
            <SwiperSlide><div className="office-card">Office 2</div></SwiperSlide>
            <SwiperSlide><div className="office-card">Office 3</div></SwiperSlide>
            <SwiperSlide><div className="office-card">Office 4</div></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ContactUs;