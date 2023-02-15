import React from "react";
import styles from "./About.module.css";

const About = () => {

  return (
    <section className="h-100">
        <div className="row gx-0 h-100 align-items-center">
          <div className="col-5">
            <p>
              <span className="text-highlight">
                LEAPR
              </span>
              is a web3 innovation design agency based in Buenos Aires.<br/>
              We are a group of creatives who collaborate with clients helping them understand,
              envision, and plan the endless possibilities within virtual platforms.<br/>
              <span className="text-highlight">
                Let us take your vision to a new dimension.
              </span>
            </p>
          </div>
        </div>
    </section>
  );
};
export default About;
