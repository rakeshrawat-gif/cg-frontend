import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SolutionForBus1 from '../components/assets/images/home/sfbim1.jpg';
import SolutionForBus2 from '../components/assets/images/home/sfbim2.jpg';

const slides = [
  {
    img: SolutionForBus1,
    title: "Transformers",
    desc: "As a global leader in engineering solutions, CG empowers ...",
  },
  {
    img: SolutionForBus2,
    title: "Switchgears",
    desc: "CG offers one of the widest ranges of Medium to Ultra High Voltage ...",
  },
  {
    img: SolutionForBus1,
    title: "Motors",
    desc: "As a global leader in engineering solutions, CG empowers ...",
  },
];



export default function SwiperSlider() {

   const bluebgwrapper ={
        background: 'linear-gradient(to right, #004b93, #0069d9)',
        padding: '40px 20px',
        borderRadius: '30px',
        overflow: 'hidden'
    }

     const customswiper ={
        paddingLeft:' 10%'
    }

    const slideCard = {
        background: 'white',
        borderRadius: '12px',
        width: '280px !important',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
    }

//     const slidecardimg ={
//             width: 100%;
//   height: 160px;
//   object-fit: cover;
//   border-top-left-radius: 12px;
//   border-top-right-radius: 12px;
//     }

// .slide-card img {
//   width: 100%;
//   height: 160px;
//   object-fit: cover;
//   border-top-left-radius: 12px;
//   border-top-right-radius: 12px;
// }

// .slide-content {
//   padding: 15px;
// }




  return (
    <div className="blue-bg-wrapper" style={bluebgwrapper}>
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        spaceBetween={20}
        navigation
        className="custom-swiper"
        style={customswiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slide-card" style={slideCard}>
            <img src={slide.img} alt={slide.title} />
            <div className="slide-content">
              <h3>{slide.title}</h3>
              <p>{slide.desc}</p>
              <a href="#">Know more →</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
