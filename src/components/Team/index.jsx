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
  {name:'JOAQUÍN MIGNAQUY', position:'Head of Business Development', image:'/images/team/joaquin.png', margin: 3, marginleft: 3},
  {name:'OLIVIA PANDO', position:'Head of Communications', image:'/images/team/olivia.png', margin: 3, marginleft: 3},
  {name:'DIEGO LISTA', position:'Creative Director / Visual Artist', image:'/images/team/diego.jpeg', margin: 3, marginleft: 3},
  {name:'ANA CARLISLE', position:'Lead Architect / 3D Generalist', image:'/images/team/ana.jpeg', margin: 3, marginleft: 3},
  {name:'JOEL CORREA', position:'Game Designer', image:'/images/team/joel.png', margin: 3, marginleft: 3},
  {name:'MERCEDES LUNA', position:'Graphic Designer / 3D Generalist', image:'/images/team/mercedes.jpeg', margin: 3, marginleft: 3},
  {name:'ALEXANDRE BOCCARA', position:'Partner', image:'/images/team/alex.jpeg', margin: 3, marginleft: 25},
  {name:'PABLO SIMON CASARINO', position:'Partner', image:'/images/team/pola.jpeg', margin: 3, marginleft: 3}
]
const Team = () => {
  return (
    <section id="team" style={{height:'300%'}} className="py-5 bg-black">
      <div className="row gx-0 align-items-center py-5">
        <div className="col-12">
          <div className="row gx-0">
            <div className="col-4 col-md-2 offset-md-1">
              <div className="row gx-0 member">
                <div className="col-1 bg-color"></div>
                <div className="col-11 position-relative">
                  <img className="w-100" src={members[0].image}/>
                  <p style={{textColor: '#00FF39'}} className="mb-0 memberDetail text-highlight">{members[0].name}</p>
                  <p className="memberDetail2">{members[0].position}</p>
                </div> 
              </div>
            </div>
            <div className="col-4 col-md-2 mt-5 offset-4 offset-md-5">
              <div className="row gx-0 member">
                <div className="col-1 bg-color"></div>
                <div className="col-11 position-relative">
                  <img className="w-100" src={members[1].image}/>
                  <p style={{textColor: '#00FF39'}} className="mb-0 memberDetail text-highlight">{members[1].name}</p>
                  <p className="memberDetail2">{members[1].position}</p>
                </div> 
              </div>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-4 col-md-2 offset-md-2">
              <div className="row gx-0 member">
                <div className="col-1 bg-color"></div>
                <div className="col-11 position-relative">
                  <img className="w-100" src={members[2].image}/>
                  <p style={{textColor: '#00FF39'}} className="mb-0 memberDetail text-highlight">{members[2].name}</p>
                  <p className="memberDetail2">{members[2].position}</p>
                </div> 
              </div>
            </div>
            <div className="col-4 col-md-2 mt-5 offset-4 offset-md-3">
              <div className="row gx-0 member">
                <div className="col-1 bg-color"></div>
                <div className="col-11 position-relative">
                  <img className="w-100" src={members[3].image}/>
                  <p style={{textColor: '#00FF39'}} className="mb-0 memberDetail text-highlight">{members[3].name}</p>
                  <p className="memberDetail2">{members[3].position}</p>
                </div> 
              </div>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-4 col-md-2">
              <div className="row gx-0 member">
                <div className="col-1 bg-color"></div>
                <div className="col-11 position-relative">
                  <img className="w-100" src={members[4].image}/>
                  <p style={{textColor: '#00FF39'}} className="mb-0 memberDetail text-highlight">{members[4].name}</p>
                  <p className="memberDetail2">{members[4].position}</p>
                </div> 
              </div>
            </div>
            <div className="col-4 col-md-2 mt-5 offset-4 offset-md-6">
              <div className="row gx-0 member">
                <div className="col-1 bg-color"></div>
                <div className="col-11 position-relative">
                  <img className="w-100" src={members[5].image}/>
                  <p style={{textColor: '#00FF39'}} className="mb-0 memberDetail text-highlight">{members[5].name}</p>
                  <p className="memberDetail2">{members[5].position}</p>
                </div> 
              </div>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-4 col-md-2 offset-md-1">
              <div className="row gx-0 member">
                <div className="col-1 bg-color"></div>
                <div className="col-11 position-relative">
                  <img className="w-100" src={members[6].image}/>
                  <p style={{textColor: '#00FF39'}} className="mb-0 memberDetail text-highlight">{members[6].name}</p>
                  <p className="memberDetail2">{members[6].position}</p>
                </div> 
              </div>
            </div>
          </div>
          <div className="row gx-0 mt-5">
            <div className="col-4 col-md-2 offset-md-2">
              <div className="row gx-0 member">
                <div className="col-1 bg-color"></div>
                <div className="col-11 position-relative">
                  <img className="w-100" src={members[7].image}/>
                  <p style={{textColor: '#00FF39'}} className="mb-0 memberDetail text-highlight">{members[7].name}</p>
                  <p className="memberDetail2">{members[7].position}</p>
                </div> 
              </div>
            </div>
            <div className="col-4 col-md-2 mt-5 offset-4 offset-md-3">
              <div className="row gx-0 member">
                <div className="col-1 bg-color"></div>
                <div className="col-11 position-relative">
                  <img className="w-100" src={members[8].image}/>
                  <p style={{textColor: '#00FF39'}} className="mb-0 memberDetail text-highlight">{members[8].name}</p>
                  <p className="memberDetail2">{members[8].position}</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
