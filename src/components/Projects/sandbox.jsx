import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player'


export function Sandbox(){
  return(
    <div className="row gx-0">
    <div className="col-12 col-md-3">
      <p>
      Nera is a two-leveled game based in The SandBox  in which the player is submerged into a captivating story with different parkour and puzzle challenges. During this journey, they will meet with different characters which will guide them throughout the adventure.
      </p>
    </div>
    <div className='col-md-9'>
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
        <ReactPlayer wrapper="video-container" url='https://www.youtube.com/watch?v=zBsy-sc0P3k' />
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
  )
}
