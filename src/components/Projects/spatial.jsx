import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Spatial(){
  return(
    <div className="row">
    <div className="col-12 col-md-2">
      <p>
      This nature-inspired auditorium built in Spatial was created to enable leapr-related events, connecting all our audience into one immersive space. It hosts a wide range of possibilities: from interviews, to conferences, meetings and live streamings of web3 announcements. The space is available for third parties to rent for private affairs.

      </p>
    </div>
    <div className='col-md-10'>
    
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
          src="images/work/spatial/spatial1.png"
          style={{
            width: "100%",
            height: "auto",
          }} />
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
  )
}
