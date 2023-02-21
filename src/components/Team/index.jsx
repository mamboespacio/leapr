import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Marquee from "../Marquee";
import { projects as items } from "../../data/projects";

const members = [
  {name:'TOMAS FAROUX', position:'CEO & Co-Founder', image:'/images/team/tomas.jpeg', margin: 3, marginleft: 3},
  {name:'ALEXANDRE BOCCARA', position:'Partner', image:'/images/team/alex.jpeg', margin: 3, marginleft: 25},
  {name:'ANA CARLISLE', position:'Lead Architect / 3D Generalist', image:'/images/team/ana.jpeg', margin: 3, marginleft: 3},
  {name:'DIEGO LISTA', position:'Creative Director / Visual Artist', image:'/images/team/diego.jpeg', margin: 3, marginleft: 3},
  {name:'JOAQUÍN MIGNAQUY', position:'Head of Business Development', image:'/images/team/joaquin.png', margin: 3, marginleft: 3},
  {name:'JOEL CORREA', position:'Game Designer', image:'/images/team/joel.png', margin: 3, marginleft: 3},
  {name:'MERCEDES LUNA', position:'Graphic Designer / 3D Generalist', image:'/images/team/mercedes.jpeg', margin: 3, marginleft: 3},
  {name:'OLIVIA PANDO', position:'Head of Communications', image:'/images/team/olivia.png', margin: 3, marginleft: 3},
  {name:'PABLO SIMON CASARINO', position:'Partner', image:'/images/team/pola.jpeg', margin: 3, marginleft: 3}
]
const Team = () => {
  return (
    <section id="team" className="py-5">
      <div className="row gx-0 align-items-center h-100">
        <div className="col-12 col-md-11">
          <div className="row justify-content-between">
            {members.map((item, index) => {
              return (
                <div className="col-12 col-md-4">
                  <div className="row member">
                    <div className="col-1 d-none d-md-block">
                    </div>
                    <div className="col-12 col-md-11">
                      <img className="w-100" src={item.image}/>
                      <p style={{textColor: '#00FF39'}} className="mt-3 mb-0">{item.name}</p>
                      <p>{item.position}</p>
                    </div>
                    
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
