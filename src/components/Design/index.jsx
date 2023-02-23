import React, {useRef} from "react";
import { useScroll, Text, Billboard } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Design = () => {
  const ref = useRef()

  const scroll = useScroll()
  useFrame(() => {
    const r1 = scroll.range(7 / 10, 1 / 10)

    // ref.current.classList.toggle('show', r1)
    // let filter = `blur(${r1*10}px)`
    // console.log(filter)
    // ref.current.style.flter = filter
    // ref1.current.style.letterSpacing = r1*30 + 'px'
    // ref1.current.style.scale = r1*10
    ref.current.scale.set(r1*10, r1*10, 1)
  })
  return (
    <Billboard
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false} // Lock the rotation on the z axis (default=false)
    >
      <Text fontSize={1}>We Design</Text>
    </Billboard>
  );
};
export default Design;
