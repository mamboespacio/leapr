import React, {useRef} from "react";
import { useScroll, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { mapRange } from "canvas-sketch-util/math";

const Dive = () => {
  const ref = useRef()
  const scroll = useScroll()
  useFrame((state, camera) => {
    const r1 = scroll.range(7/10, 1 / 10)
    // ref.current.classList.toggle('show', r1)
    // let filter = `blur(${r1*10}px)`
    // console.log(filter)
    // ref.current.style.flter = filter
    ref.current.parent = state.camera
    ref.current.fontSize = mapRange(r1, 0, 1, 1, 5)
    ref.current.letterSpacing = r1
    ref.current.fillOpacity = mapRange(r1, 0, 1, 1, 0)
  })
  return (
    <Billboard
      follow={false}
      lockX={false}
      lockY={false}
      lockZ={false} // Lock the rotation on the z axis (default=false)
    >
      <Text ref={ref} fontSize={1}>We Dive</Text>
    </Billboard>
  );
};
export default Dive;
