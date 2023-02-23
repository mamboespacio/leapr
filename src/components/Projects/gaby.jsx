import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player'

export function Gaby(){
  return(
    <div className='row gx-0'>
    <div className="col-12 col-md-3">
      <p>
      LEAPRS's first wearable drop in collaboration with the argentine 3D Artist, Gabriela Peñalba. The collection consists of unique pieces, including puffer jackets, personalized hoodies, pants, and accessories. 


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
    </Swiper>
    </div>
    </div>
  )
}
