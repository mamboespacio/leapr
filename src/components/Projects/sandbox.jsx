import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player'
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";


export function Sandbox(){
  return(
    <div className="row gx-0">
      <div className='col-md-8'>
        <Swiper
        modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          className="projectsSwiper"
          spaceBetween={0}
          slidesPerView={1}  
          loop={true}
          navigation={true}
        >
          <SwiperSlide>
            <img
              alt='sandbox'
              src="images/work/sandbox/sandbox1.png"
              style={{
                width: "100%",
                height: "auto",
              }} />
          </SwiperSlide>
          <SwiperSlide>
            <ReactPlayer controls = {true} width="100%" height="100%" wrapper="video-container" url='images/work/sandbox/sandbox2.mp4' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-12 col-md-3">
        <p className="w-100">About this project:</p>
        <p className='w-100 pt-3 d-inline-block'>
          Nera is a two-leveled game based in The SandBox  in which the player is submerged into a captivating story with different parkour and puzzle challenges. During this journey, they will meet with different characters which will guide them throughout the adventure.
        </p>
        <button
          className="btn btn-arrows pt-3"
          // onClick={previous}
        >
          <ArrowLeft/>
        </button>
        <button
          className="btn btn-arrows pt-3"
          // onClick={next}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
