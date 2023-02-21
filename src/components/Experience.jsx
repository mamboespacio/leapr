import {
  ScrollControls,
  Scroll,
  useScroll,
  Environment,
  Sky
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useEffect, useRef, useState } from "react";
import Model from "./Model";
import About from "./About";
import Claim from './Claim'
import Partners from './Partners'
import Dive from './Dive'
import Define from './Define'
import Design from './Design'
import Deploy from './Deploy'
import Projects from './Projects'
import Team from './Team'
import Background from './Background'
import Navigation from "./Navigation";
import Logo from "./Logo";
import { SpaceParticles } from "./SpaceParticles";
import Effect from "./Effect";
import SkyBox from "./SkyBox";
import { useFrame} from "@react-three/fiber";

export const sectionsLength = 12

export default function Experience() {

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <Environment preset="forest"/>
      <SkyBox />
      <Suspense>
      
        <ScrollControls pages={sectionsLength}>
          
          <Scroll html style={{ width: '100%', height: '100%' }}>
            <Claim/>
            <Partners/>
            <section style={{height:'175%'}}></section>
            {/* <section className="h-50"></section> */}
            <About/>
            <section style={{height:'20%'}}></section>
            <Projects/>
            <Dive/>
            <Define/>
            <Design/>
            <Deploy/>
            <Team/>
            <p className="mt-3 text-highlight">LEAPR STUDIO Buenos Aires, Argentina</p>
          </Scroll>
          {/* <Background/>
          <Model /> */}
          {/* <Effect/> */}
        </ScrollControls>
      </Suspense>

      <SpaceParticles count={[5000]}/>
    </>
  );
}
