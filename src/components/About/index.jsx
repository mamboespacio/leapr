import React from "react";
import styles from "./About.module.css";

const About = () => {

  return (
    <section id="dna" className="h-100">
        <div className="row gx-0 h-100 align-items-center">
          <div className="col-6">
            <p>
              <span className="text-highlight">
                LEAPR 
              </span> is a strategy and design studio for metaverse platforms based in Argentina <br/>
              As a team of skilled and creative thinkers,
              we're passionate about bringing virtual platforms to life.
              We'll work with you to understand your unique vision,
              then turn that vision into a reality with our technical expertise and innovative ideas.
              Let us help you explore the endless possibilities of the digital landscape,
              from immersive experiences to dynamic simulations and beyond.
              <br/>
              <span className="text-highlight">
              Your virtual adventure awaits - are you ready to take the leap with us?
              </span>
            </p>
          </div>
        </div>
    </section>
  );
};
export default About;
