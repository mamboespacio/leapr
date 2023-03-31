import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Marquee from "react-fast-marquee";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const members = [
  {name:'TOMAS FAROUX', position:'CEO & Co-Founder', image:'/images/team/tomas.jpeg', margin: 3, marginleft: 3},
  {name:'JOAQUÍN MIGNAQUY', position:'Head of Business Development', image:'/images/team/joaquin.png', margin: 3, marginleft: 3},
  {name:'OLIVIA PANDO', position:'Head of Communications', image:'/images/team/olivia.png', margin: 3, marginleft: 3},
  {name:'DIEGO LISTA', position:'Creative Director / Visual Artist', image:'/images/team/diego.jpeg', margin: 3, marginleft: 3},
  {name:'ANA CARLISLE', position:'Lead Architect / 3D Generalist', image:'/images/team/ana.jpeg', margin: 3, marginleft: 3},
  {name:'JOEL CORREA', position:'Game Designer', image:'/images/team/joel.png', margin: 3, marginleft: 3},
  {name:'MERCEDES LUNA', position:'Graphic Designer / 3D Generalist', image:'/images/team/mercedes.jpeg', margin: 3, marginleft: 3},
  // {name:'CARLOS LAVIÑA', position:'Visual Artist', image:'/images/team/carlos.jpeg', margin: 3, marginleft: 3},
  {name:'ALEXANDRE BOCCARA', position:'Partner', image:'/images/team/alex.jpeg', margin: 3, marginleft: 25},
  {name:'PABLO SIMON CASARINO', position:'Partner', image:'/images/team/pola.jpeg', margin: 3, marginleft: 3}
]
const Team = () => {
  return (
    <section id="team" style={{height:'100%'}}>
      <div className="row align-items-center h-100">
        <div className="col-12 order-2 order-md-1">
          <div className="row gx-0 pb-5 align-items-start">
            <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end">
              <h2 className="text-highlight-2 mb-0 d-inline-block font-audimat">OUR TEAM</h2>
            </div>
            <div className="col-12 col-md-9">
              
                <Marquee
                  pauseOnHover={false}
                  gradient={false}
                >
                    {members.map((item, index) => {
                      return(
                        <div className="member" key={index}>
                          <div className="row gx-0 member">
                            <div className="col-12 position-relative">
                              <img className="w-100" src={item.image}/>
                              <p className="mb-0 memberDetail text-highlight-2 d-block">{item.name}</p>
                              
                            </div> 
                            <div className="col-12 position-relative">
                              <p className="memberDetail2 text-highlight-3">{item.position}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}  
                        
                </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
