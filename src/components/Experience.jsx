import {
  ScrollControls,
  Environment,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  ColorDepth,
  ToneMapping,
  HueSaturation
 } from "@react-three/postprocessing";
import { BlendFunction} from "postprocessing";
import { Perf } from "r3f-perf";
import { useControls } from 'leva'
import { Suspense } from "react";
import Model from "./Model";
import { SpaceParticles } from "./SpaceParticles";

export default function Experience() {

  const hueEffect = useControls({ hue: { value: 1.38, min: 0, max: 6.28319, step: 0.001 }})
  return (
    <>
      <Perf position="top-left" />
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0.2}
          luminanceSmoothing={0.1}
          height={300}
        />
        <Noise opacity={0.03} />
        <Vignette
          eskil={false}
          offset={0.}
          darkness={0.2}
          blendFunction={BlendFunction.SOFT_LIGHT}
        />
        <ToneMapping
          blendFunction={BlendFunction.NORMAL} // blend mode
          adaptive={true} // toggle adaptive luminance map usage
          resolution={256} // texture resolution of the luminance map
          middleGrey={0.8} // middle grey factor
          maxLuminance={16.0} // maximum luminance
          averageLuminance={1.0} // average luminance
          adaptationRate={1.0} // luminance adaptation rate
        />
        <ColorDepth bits={[64]}/>
        <HueSaturation saturation={[0.2]} {...hueEffect}/>
      </EffectComposer>
      <Environment preset="forest" background blur={[0.5]} />
      {/* <Sky turbidity={[10]} distance={[100000]} sunPosition={[1,100,100]} mieDirectionalG={[1]} rayleigh={[0.3]} /> */}
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
        {" "}
        <ScrollControls pages={6}>
          <Model />
        </ScrollControls>
      </Suspense>
      <SpaceParticles count={[5000]}/>
      {/* <CameraShake maxYaw={0.01} maxPitch={0.01} maxRoll={0.01} yawFrequency={0.5} pitchFrequency={0.5} rollFrequency={0.4} /> */}

    </>
  );
}
