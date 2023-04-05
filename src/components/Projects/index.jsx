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
import Marquee from "react-fast-marquee";

const Projects = () => {
  const ref = useRef(0)
  const ref2 = useRef(0)
  
  const slideTo = (slide) => {
    ref.current.slideTo(slide);
    ref2.current.slideTo(slide);
  };
  const next = () => {
    ref.current.slideNext()
  };
  const prev = () => {
    ref.current.slidePrev()
  };
  return (
    <section id="work" className="h-100">
      <div className="row gx-0 align-items-center h-100">
        <div className="col-12 col-md-12">
          <div className="row">
            
          <div className="row">
          <div className="col-12 col-md-12">
              <Swiper
                spaceBetween={0}
                slidesPerView={3}
                className="projects-selector"
                loop={true}
                initialSlide={0}
                onSwiper={(swiper) => {
                  ref2.current = swiper;
                }}
              >
                <SwiperSlide>
                  <button href="#" onClick={(e)=> slideTo(0)}>NERA</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button href="#" onClick={(e)=> slideTo(1)}>LEAPR’S AUDITORIUM</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button href="#" onClick={(e)=> slideTo(2)}>LEAPER'S HEADQUARTERS</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button href="#" onClick={(e)=> slideTo(3)}>LEAPR FT GABY PEÑALBA</button>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
            <div className="col-12 col-md-12">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}  
                initialSlide={0}   
                loop={true}
                onSwiper={(swiper) => {
                  ref.current = swiper;
                }}
                onSlideChange={(swiper)=>{
                  ref2.current.slideTo(swiper.realIndex)
                  // console.log(swiper.realIndex, ref2.current.realIndex)
                }}
                // autoplay={{
                //   delay: 5200,
                //   disableOnInteraction: true,
                // }}
                // speed={800}
              >
                <SwiperSlide><Sandbox next={next} prev={prev}/></SwiperSlide>
                <SwiperSlide><Spatial next={next} prev={prev}/></SwiperSlide>
                <SwiperSlide><Decentraland next={next} prev={prev}/></SwiperSlide>
                <SwiperSlide><Gaby next={next} prev={prev}/></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
