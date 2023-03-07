import {
  ScrollControls,
  Scroll,
  Environment,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense} from "react";
import Model from "./Model";
import { SpaceParticles } from "./SpaceParticles";
import Effect from "./Effect";


export const sectionsLength = 14

export default function Experience() {

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <Suspense
        // fallback={<LoadingPage/>}
      >
        <ScrollControls pages={sectionsLength} damping={0.1} maxSpeed={1} >
          <Scroll html style={{ width: '100%', height: '100%' }}>
     
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'50%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'100%'}}></section>
            <section style={{height:'50%'}}></section>
            <section style={{height:'100%'}}></section>
          </Scroll>
         
          <Model />
          <Effect/>
        </ScrollControls>
      </Suspense>
      <Environment preset="forest"/>
      <SpaceParticles count={[5000]}/>
    </>
  );
}
