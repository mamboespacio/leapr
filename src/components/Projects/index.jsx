import React, {useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Sandbox } from "./sandbox";
import { Decentraland } from "./decentraland";
import { Spatial } from "./spatial";
import { Gaby } from "./gaby";

const Projects = () => {
  const ref = useRef(null)
  const previous = () => {
    ref.current.slidePrev();
  };

  const next = (slide) => {
    console.log(slide)
    ref.current.slideTo(slide);
  };
  return (
    <section id="work" className="h-100">
      <div className="row gx-0 align-items-center h-100">
        <div className="col-12 col-md-11">
          <div className="row">
            <div className="col-12 col-md-11">
              <div className="marquee">
                <div
                  className="marqueeContentLeft"
                >
                  <div className="marqueeItem">
                    <a onClick={()=> next(0)}>NERA</a>
                  </div>
                  <div className="marqueeItem">
                    <a onClick={()=> next(1)}>LEAPR’S AUDITORIUM</a>
                  </div>
                  <div className="marqueeItem">
                    <a onClick={()=> next(2)}>LEAPER'S HEADQUARTERS</a>
                  </div>
                  <div className="marqueeItem">
                    <a onClick={()=> next(3)}>LEAPR FT GABY PEÑALBA</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-md-11">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}              
                onSwiper={(swiper) => {
                  ref.current = swiper;
                }}
                // autoplay={{
                //   delay: 5200,
                //   disableOnInteraction: true,
                // }}
                // speed={800}
              >
                <SwiperSlide><Sandbox/></SwiperSlide>
                <SwiperSlide><Spatial/></SwiperSlide>
                <SwiperSlide><Decentraland/></SwiperSlide>
                {/* <SwiperSlide><Gaby/></SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
