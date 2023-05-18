import React, {useRef, useState, useEffect} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Project } from "./Project";

const Projects = () => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

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
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://leapr-cms.herokuapp.com/api/projects?populate=*&sort=id:asc'
        );
        const json = await response.json();
        // console.log('fetch projects', json.data)
        setProjects(json.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (<p>loading...</p>)
  }
  else{
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
                  onSwiper={(swiper) => {
                    setMainSwiper(swiper)
                  }}
                  loop={true}
                  // onSlideChange={(swiper)=>{
                  //   // controlledSwiper.current.slideTo(2)
                  //   console.log(swiper.realIndex)
                  // }}
                >
                  {mainSwiper &&(
                    projects.map((item, index) => {
                      return(
                        <SwiperSlide key={index}>
                          <Project next={next} prev={prev} goToSlide={goToSlide} projects={projects} pos={index} project={item}/>
                        </SwiperSlide>
                      )
                    })
                  )}
                  
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
}
export default Projects;
