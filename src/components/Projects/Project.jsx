import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player'
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";


export function Project({prev, next, goToSlide, projects, pos, project}){
  // console.log(goToSlide)
  const refSandbox = useRef(0)

  const proj = projects.slice();
  for (var i = 0; i < pos; i++) {
    proj.push(projects[i])
  }
  proj.splice(0,pos)

  const handleClick = (e, index) => {
    e.preventDefault();
    // console.log(pos, index)
    goToSlide(index)
  }
  const nextImage = () => {
    refSandbox.current.slideNext()
  };
  const prevImage = () => {
    refSandbox.current.slidePrev()
  };
  const isVideo = (media) => {
    const videoExt = ['.mpeg', '.mp4', '.wmv', '.avi', '.flv']
    if (videoExt.includes(media)){
      return true
    }
  }
  return(
    <div className="row gx-0">
      <div className="col-12 projects-selector">
        <div className="row g-0 flex-nowrap">
          {proj.map((item, index) => {
            // console.log(proj)
            if (index === 0){
              return(
                <div className="col-12 col-md-3 project active" key={index}>
                  <button className="text-uppercase" href="#">{item.attributes.name}</button>
                </div>
              )
            }else {
              var item_id = item.id - 1;
              return(
                <div className="col-12 col-md-3 project" key={index}>
                  <button className="text-uppercase" onClick={(e) => {handleClick(e, item_id)}} href="#">{item.attributes.name}</button> 
                </div>
              )
            }
          })}
        </div>
      </div>
      <div className="col-12 col-md-3">
        <p className='w-100 d-inline-block'>
          {project.attributes.description}
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
            refSandbox.current = swiper;
          }}
        >
          {project.attributes.media.data.map((item, index) => {
            // console.log(item)
            if (isVideo(item.attributes.ext)){
              return(
                <SwiperSlide key={index}>
                  <ReactPlayer controls = {true} width="100%" height="100%" wrapper="video-container" url={item.attributes.url} />
                </SwiperSlide>
              )
            }
            else {
              return(
                <SwiperSlide key={index}>
                  <img
                    alt={project.attributes.name}
                    src={item.attributes.url}
                    style={{
                  width: "100%",
                  height: "auto",
                }} />
                </SwiperSlide>
              )
            }
          })}
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
