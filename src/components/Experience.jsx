import {
  ScrollControls,
  Scroll,
  Environment,
  Billboard,
  Text
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense} from "react";
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
import LoadingPage from "./Loader";

export const sectionsLength = 12

export default function Experience() {

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <Suspense
        fallback={<LoadingPage/>}
      >
        <ScrollControls pages={sectionsLength} damping={0.1} maxSpeed={0.1} >
          <Scroll html style={{ width: '100%', height: '100%' }}>
     
            <Claim/>
            <Partners/>
            <section style={{height:'100%'}}></section>
            {/* <section className="h-50"></section> */}
            <About/>
            
            <Projects/>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <Team/>
            {/* <p className="text-right text-highlight">LEAPR STUDIO Buenos Aires, Argentina</p> */}
          </Scroll>
          <Dive/>
          {/* <Define/>
          <Design/>
          <Deploy/> */}
          <Background/>
          <Model />
          <Effect/>
        </ScrollControls>
      </Suspense>
      <Environment files="/skybox/leapr_skybox2.hdr" background/> 
      <Environment preset="forest"/>
      <SpaceParticles count={[5000]}/>
    </>
  );
}
