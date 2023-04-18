import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

export function Decentraland({next, prev, goToSlide}){
  const ref = useRef(0)
  const nextImage = () => {
    ref.current.slideNext()
  };
  const prevImage = () => {
    ref.current.slidePrev()
  };
  return(
    <div className="row gx-0">
      <div className="col-12 projects-selector">
        <div className="row g-0">
          <div className="col-12 col-md-3 project active">
            <button onClick={()=>goToSlide(2)} href="#">LEAPER'S HEADQUARTERS</button> 
          </div>
          <div className="col-12 col-md-3 project">
            <button onClick={()=>goToSlide(3)} href="#">LEAPR FT GABY PEÑALBA</button> 
          </div>
          <div className="col-12 col-md-3 project d-none d-md-block">
            <button onClick={()=>goToSlide(0)} className="" href="#">NERA</button>
          </div>
          <div className="col-12 col-md-3 project d-none d-md-block">
            <button onClick={()=>goToSlide(1)} href="#">LEAPR’S AUDITORIUM</button>
          </div>
        </div>
      </div>
    <div className="col-12 col-md-3">
      <p>
        This venue is home to LEAPR’S metaverse offices at Decentraland. Inspired and built from our visual identity, it includes a peaceful walk through a park, an extense NFT gallery that exhibits our art, lounge areas to relax in, private offices to meet in, and an auditorium for conferences.
      </p>
      <button
        className="btn btn-arrows pt-3"
        onClick={prev}
      >
        <ArrowLeft/>
      </button>
      <button
        className="btn btn-arrows pt-3"
        onClick={next}
      >
        <ArrowRight />
      </button>
    </div>
    <div className='col-md-9'>
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      className="projectsSwiper"
      spaceBetween={0}
      slidesPerView={1}   
      loop={true}
      onSwiper={(swiper) => {
        ref.current = swiper;
      }}
    >
      <SwiperSlide>
        <img
          alt='dcl1'
          src="images/work/dcl/dcl1.png"
          style={{
            width: "100%",
            height: "auto",
        }} />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt='dcl2'
          src="images/work/dcl/dcl2.png"
          style={{
            width: "100%",
            height: "auto",
        }} />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt='dcl3'
          src="images/work/dcl/dcl3.png"
          style={{
            width: "100%",
            height: "auto",
        }} />
      </SwiperSlide>
      <div className='arrowsbox'>
        <button
          className="btn btn-arrows pt-3"
          onClick={prevImage}
        >
          <ArrowLeft/>
        </button>
        <button
          className="btn btn-arrows pt-3"
          onClick={nextImage}
        >
          <ArrowRight />
        </button>
      </div>
    </Swiper>
    </div>
    </div>
  )
}
