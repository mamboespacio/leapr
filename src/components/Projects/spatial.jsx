import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

export function Spatial({next, prev, goToSlide}){
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
          <div className="col-12 col-md-3 project  active">
            <button onClick={()=>goToSlide(1)} href="#">LEAPR’S AUDITORIUM</button>
          </div>
          <div className="col-12 col-md-3 project">
            <button onClick={()=>goToSlide(2)} href="#">LEAPER'S HEADQUARTERS</button> 
          </div>
          <div className="col-12 col-md-3 project d-none d-md-block">
            <button onClick={()=>goToSlide(3)} href="#">LEAPR FT GABY PEÑALBA</button> 
          </div>
          <div className="col-12 col-md-3 project d-none d-md-block">
            <button onClick={()=>goToSlide(0)} className="" href="#">NERA</button>
          </div>
        </div>
      </div>
    <div className="col-12 col-md-3">
      <p>
        This nature-inspired auditorium built in Spatial was created to enable leapr-related events, connecting all our audience into one immersive space. It hosts a wide range of possibilities: from interviews, to conferences, meetings and live streamings of web3 announcements. The space is available for third parties to rent for private affairs.
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
          alt='spatial'
          src="images/work/spatial/spatial1.png"
          style={{
            width: "100%",
            height: "auto",
          }} />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt='spatial'
          src="images/work/spatial/spatial2.png"
          style={{
            width: "100%",
            height: "auto",
          }} />
      </SwiperSlide>
      <SwiperSlide>
        <img
          alt='spatial'
          src="images/work/spatial/spatial3.png"
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
