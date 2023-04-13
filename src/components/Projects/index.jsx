import React, {useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Sandbox } from "./sandbox";
import { Decentraland } from "./decentraland";
import { Spatial } from "./spatial";
import { Gaby } from "./gaby";

const Projects = () => {

  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState();

  // const ref = useRef()
  // const controlledSwiper = useRef()
  
  const goToSlide = (slide) => {
    mainSwiper.slideTo(slide);
  };
  const next = () => {
    mainSwiper.slideNext()
  };
  const prev = () => {
    mainSwiper.slidePrev()
  };
  return (
    <section id="work" className="h-100">
      <div className="row gx-0 align-items-center h-100">
        <div className="col-12">            
          <div className="row">
            <div className="col-12">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}  
                onSwiper={(swiper) => setMainSwiper(swiper)}
                loop={true}
                // onSlideChange={(swiper)=>{
                //   // controlledSwiper.current.slideTo(2)
                //   console.log(swiper.realIndex)
                // }}
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
