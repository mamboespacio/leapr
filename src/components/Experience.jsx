import {
  ScrollControls,
  Scroll,
  Environment,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useEffect, useRef, useState } from "react";
import Model from "./Model";
import About from "./About";
import Claim from './Claim'
import Partners from './Partners'
import Dive from './Dive'
import Projects from './Projects'
import Background from './Background'
import { SpaceParticles } from "./SpaceParticles";
import Effect from "./Effect";
import Loader from "./Loader";


export const sectionsLength = 12

export default function Experience() {

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <Suspense
        // fallback={<Loader/>}
      >
        <ScrollControls pages={sectionsLength} damping={0.9} maxSpeed={0.5}>
          <Scroll html style={{ width: '100%', height: '100%' }}>
     
            <Claim/>
            <Partners/>
            <section style={{height:'175%'}}></section>
            {/* <section className="h-50"></section> */}
            <About/>
            <section style={{height:'20%'}}></section>
            <Projects/>
            <Dive/>
            <Dive/>
            <Dive/>
            <Dive/>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            
          </Scroll>
          <Background/>
          <Model />
          <Effect/>
        </ScrollControls>
      </Suspense>
      <Environment files="/skybox/leapr_skybox1.hdr" background/>
      <Environment preset="forest"/>
      <SpaceParticles count={[5000]}/>
    </>
  );
}
