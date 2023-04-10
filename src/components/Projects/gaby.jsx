import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

export function Gaby({prev,next}){
  const ref = useRef(0)
  const nextImage = () => {
    ref.current.slideNext()
  };
  const prevImage = () => {
    ref.current.slidePrev()
  };
  return(
    <div className='row gx-0'>
    <div className="col-12 col-md-3">
      <p>
        LEAPRS's first wearable drop in collaboration with the argentine 3D Artist, Gabriela Peñalba. The collection consists of unique pieces, including puffer jackets, personalized hoodies, pants, and accessories. 
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
          src="images/work/gaby/gaby_leapr10.jpg"
          style={{
            width: "100%",
            height: "auto",
          }} />
      </SwiperSlide>
      <SwiperSlide>
        <ReactPlayer controls = {true} width="100%" height="100%" url='images/work/gaby/gabyFTleapr_1.mp4' />
      </SwiperSlide>
      <SwiperSlide>
        <ReactPlayer controls = {true} width="100%" height="100%" url='images/work/gaby/gabyFTleapr_2.mp4' />
      </SwiperSlide>
      <SwiperSlide>
        <ReactPlayer controls = {true} width="100%" height="100%" url='images/work/gaby/gabyFTleapr_3.mp4' />
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
