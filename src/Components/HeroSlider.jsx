// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// export default function HeroSlider() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty("--progress", 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };

//   return (
//     <div className="hero_container">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 4500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="hero_card">
//             <div className="hero_img">
//               <img
//                 src="https://assets.asaxiy.uz/product/items/desktop/4e2d7ed9da13be8a8a498e71312ae8e92022082810503297268oo0mdBpuSM.jpg.webp"
//                 alt=""
//               />
//             </div>
//             <div className="hero_content">
//               <h2 className="hero_title">Toshkentda yotoqxona mebellari .</h2>
//               <p className="hero_view">Ko'rish</p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>

//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";
import { SlArrowRight } from "react-icons/sl";

import BaseUrl from "../config/url.jsx";

import axios from "axios";

export default function HeroSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // api ulash
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // isLoading holatini qo'shdik

  useEffect(() => {
    axios
      .get(`${BaseUrl}/about/slider/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:Slider", response.data);
        setApiData(response.data);
        setIsLoading(false); // Ma'lumotlar yuklandi, loadingni to'xtatish
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false); // Xatolik yuz berganda ham loadingni to'xtatish
      });
  }, []);

  return (
    <div className="hero_container">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 45000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next", // Custom tugmalar uchun selectorlar
          prevEl: ".custom-prev",
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {apiData?.response?.map((dataSlider) => {
          return (
            <SwiperSlide>
              <div className="hero_card" key={dataSlider.id}>
                <div className="hero_img">
                  <img src={dataSlider.image} alt="" />
                </div>
                <div className="hero_overlay"></div>
                <div className="hero_content">
                  <h2 className="hero_title">{dataSlider.title}</h2>
                  {/* <p className="hero_view">
                    <span>Ko'rish</span>
                    <span className="hero_view_icon">
                      <SlArrowRight />
                    </span>
                  </p> */}
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

        <div className="swiper-controls">
          <div className="custom-button custom-prev">
            <CgArrowLongLeft />
          </div>
          <div className="custom-button custom-next">
            <CgArrowLongRight />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
