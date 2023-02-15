import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Marquee from "../Marquee";
import { projects as items } from "../../data/projects";

const Projects = () => {
  return (
    <section className="h-100">
      <div className="row gx-0 align-items-center h-100">
        <div className="col-12 col-md-11">
          <div className="row">
            <div className="col-12">
              <Marquee
                rtl={false}
                items={items}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-md-2">
              <p>
                We are a group of creatives who collaborate with clients helping them understand, envision, and plan the endless possibilities within virtual platforms.
              </p>
            </div>
            <div className="col-12 col-md-10">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                className="projectsSwiper"
                // autoplay={{
                //   delay: 5200,
                //   disableOnInteraction: true,
                // }}
                // speed={800}
              >
                {items.map((item, index) => {
                  return (
                  <SwiperSlide key={index}>
                    <img
                      src={item.src}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "auto",
                      }} />
                  </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
