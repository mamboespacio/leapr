import {
  ScrollControls,
  Environment,
  Sky
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Model from "./Model";
import { SpaceParticles } from "./SpaceParticles";
import Effect from "./Effect";
import SkyBox from "./SkyBox";

export default function Experience() {

  return (
    <>
      <Perf position="top-left" />

      <Environment preset="forest"  />
      {/* <Sky turbidity={[10]} distance={[100000]} sunPosition={[1,100,100]} mieDirectionalG={[1]} rayleigh={[0.3]} /> */}
      <SkyBox/>
      {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
      <directionalLight color='green' position={[0,40,0]} intensity={[5]}/>

      <Suspense
        fallback={
          <mesh position-y={0.5} scale={[5, 10, 5]}>
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial wireframe color="red" />
          </mesh>
        }
      >
        <ScrollControls pages={6}>
          <Model />
          <Effect/>
        </ScrollControls>
      </Suspense>

      <SpaceParticles count={[5000]}/>
      {/* <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} /> */}
    </>
  );
}
