import {
  ScrollControls,
  useScroll,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  DepthOfField,
  SSR,
} from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import { Perf } from "r3f-perf";
import { Suspense, useRef } from "react";
import Model from "./Model";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0.7}
          luminanceSmoothing={0.1}
          height={300}
        />
        {/* <Noise opacity={0.02} /> */}
        <Vignette
          eskil={false}
          offset={0.1}
          darkness={0.9}
          blendFunction={BlendFunction.COLOR}
        />
      </EffectComposer>
      <Environment preset="forest" />

      <Suspense
        fallback={
          <mesh position-y={0.5} scale={[5, 10, 5]}>
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial wireframe color="red" />
          </mesh>
        }
      >
        {" "}
        <ScrollControls pages={6}>
          <Model />
        </ScrollControls>
      </Suspense>
    </>
  );
}
