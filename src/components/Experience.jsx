import {
  ScrollControls,
  Scroll,
  useScroll,
  Environment,
  Sky
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Model from "./Model";
import About from "./About";
import Claim from './Claim'
import Partners from './Partners'
import Dive from './Dive'
import Projects from './Projects'
import { SpaceParticles } from "./SpaceParticles";
import Effect from "./Effect";
import SkyBox from "./SkyBox";

export default function Experience() {

  return (
    <>
      <Perf position="top-left" />

      <Environment preset="forest"/>
      {/* <Sky turbidity={[10]} distance={[100000]} sunPosition={[1,100,100]} mieDirectionalG={[1]} rayleigh={[0.3]} /> */}
      <SkyBox />
      {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
      <directionalLight position={[0,0,100]}  color="#0dff00" intensity={[1]}/>

      <Suspense>
        <ScrollControls pages={6}>
          <Scroll html style={{ width: '100%', height: '100%' }}>
            <Claim/>
            <Partners/>
            <About/>
            <Projects/>
            <Dive/>
          </Scroll>
          <Model />
          <Effect/>
        </ScrollControls>
      </Suspense>

      <SpaceParticles count={[5000]}/>
      {/* <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} /> */}
    </>
  );
}
