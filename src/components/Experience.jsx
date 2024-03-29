import {
  ScrollControls,
  Scroll,
  Environment,
  Billboard,
  Text,
  SpotLight
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense} from "react";
import Model from "./Model";
import About from "./About";
import Claim from './Claim'
import Partners from './Partners'
import Dive from './Dive'
import Projects from './Projects'
import Team from './Team'
import Footer from './Footer'
import Background from './Background'
import Navigation from "./Navigation";
import Logo from "./Logo";
import { SpaceParticles } from "./SpaceParticles";
import Effect from "./Effect";
import LoadingPage from "./Loader";
import { SheetProvider } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import CameraControl from "./CameraControl";
import flyThrougState from "../stateCameraAnim.json"

export const sectionsLength = 25

export default function Experience() {

  const sheet = getProject("Fly Through", {state: flyThrougState}).sheet("Scene");


  return (
    <>
      {/* <Perf position="top-left" /> */}
      <Suspense
        fallback={null}
      >
        <ScrollControls pages={sectionsLength} damping={0.5} maxSpeed={0.1} >
          <SheetProvider sheet={sheet}>
            <Scroll html style={{ width: '100%', height: '100%' }}>
      
              <Claim/>
              <section style={{height:'100%'}}></section>
              <Partners/>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              {/* <section className="h-50"></section> */}
              <About/>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'50%'}}></section>
              <Projects/>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'100%'}}></section>
              <section style={{height:'50%'}}></section>
              <Team/>
              <Footer/>
            </Scroll>
            <Dive/>
            {/* <Define/>
            <Design/>
            <Deploy/> */}
            {/* <Background/> */}
            <Model />
            <CameraControl/>
            <Effect/>
          </SheetProvider>
        </ScrollControls>
      </Suspense>
      <Environment files="/skybox/leapr_skybox2.hdr" background/> 
      <Environment files="/skybox/forest_slope_1k.hdr"/> 
      <SpaceParticles count={[5000]}/>
    </>
  );
}
