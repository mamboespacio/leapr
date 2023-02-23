import React, {useRef} from "react";
import { useScroll, Text, Billboard } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Define = () => {
  const ref = useRef()

  const scroll = useScroll()
  useFrame(() => {
    const r1 = scroll.range(6 / 10, 1 / 10)

    // ref.current.classList.toggle('show', r1)
    // let filter = `blur(${r1*10}px)`
    // console.log(filter)
    // ref.current.style.flter = filter
    ref.current.scale.set(r1*10, r1*10, 1)
  })
  return (
    <Billboard
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false} // Lock the rotation on the z axis (default=false)
    >
      <Text fontSize={1}>We Define</Text>
    </Billboard>
  );
};
export default Define;
