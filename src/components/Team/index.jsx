import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const Team = () => {
  const ref = useRef(0);
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState(true);

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch(
            'https://leapr-cms.herokuapp.com/api/members?populate=*'
          );
          const json = await response.json();
          setMembers(json.data);
          // console.log(json.data)
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    }
  }, [isLoading]);

  const next = () => {
    ref.current.slideNext();
  };
  const prev = () => {
    ref.current.slidePrev();
  };
  if (isLoading) {
    return <p>loading...</p>;
  } else {
    return (
      <section id="team" style={{ height: "100%" }}>
        <div className="row align-items-center h-100">
          <div className="col-12 order-2 order-md-1">
            <div className="row gx-0 pb-5 align-items-start">
              <div className="col-12 col-md-3 d-flex align-items-center justify-content-md-end">
                <h3 className="text-highlight-2 mb-0 d-inline-block font-audimat">
                  OUR TEAM
                </h3>
                <button className="btn btn-arrows pt-3" onClick={prev}>
                  <ArrowLeft />
                </button>
                <button className="btn btn-arrows pt-3" onClick={next}>
                  <ArrowRight />
                </button>
              </div>

              <div className="col-12 col-md-9">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={2}
                  spaceBetween={10}
                  breakpoints={{
                    1200: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                  }}
                  loop={true}
                  onSwiper={(swiper) => {
                    ref.current = swiper;
                  }}
                >
                  {members.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <div className="member" key={index}>
                          <div className="row gx-0 member">
                            <div className="col-12 position-relative">
                              <img alt={item.attributes.name} className="w-100" src={item.attributes.image.data.attributes.url} />
                              <p className="mb-0 memberDetail text-highlight-2 d-block">
                                {item.attributes.name}
                              </p>
                            </div>
                            <div className="col-12 position-relative">
                              <p className="memberDetail2 text-highlight-3">
                                {item.attributes.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
export default Team;
