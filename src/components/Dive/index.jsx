import React, {useRef, useEffect} from "react";
import { useScroll, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { mapRange } from "canvas-sketch-util/math";


const Dive = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()
  const scroll = useScroll()

  useEffect(() => {
    ref1.current.visible = false
    ref2.current.visible = false
    ref3.current.visible = false
    ref4.current.visible = false
  }, [])
  

  useFrame((state) => {
    const r1 = scroll.range(5 / 10, 1 / 10)
    const r2 = scroll.range(6 / 10, 1 / 10)
    const r3 = scroll.range(7 / 10, 1 / 10)
    const r4 = scroll.range(8 / 10, 1 / 10)
    const r1v = scroll.visible(5 / 10, 1 / 10)
    const r2v = scroll.visible(6 / 10, 1 / 10)
    const r3v = scroll.visible(7 / 10, 1 / 10)
    const r4v = scroll.visible(8 / 10, 1 / 10)
    console.log(ref1.current.visible)
    ref1.current.fontSize = mapRange(r1, 0, 1, 7, 10)
    ref1.current.letterSpacing = r1
    ref1.current.fillOpacity = mapRange(r1, 0, 1, 1, 0)
    ref1.current.parent = state.camera
    ref1.current.visible = r1v
    ref2.current.fontSize = mapRange(r2, 0, 1, 7, 10)
    ref2.current.letterSpacing = r2
    ref2.current.fillOpacity = mapRange(r2, 0, 1, 1, 0)
    ref2.current.parent = state.camera
    ref2.current.visible = r2v
    ref3.current.fontSize = mapRange(r3, 0, 1, 7, 10)
    ref3.current.letterSpacing = r3
    ref3.current.fillOpacity = mapRange(r3, 0, 1, 1, 0)
    ref3.current.parent = state.camera
    ref3.current.visible = r3v
    ref4.current.fontSize = mapRange(r4, 0, 1, 7, 10)
    ref4.current.letterSpacing = r4
    ref4.current.fillOpacity = mapRange(r4, 0, 1, 1, 0)
    ref4.current.parent = state.camera
    ref4.current.visible = r4v
  })
  return (
    <>
      <Text color={'white'} ref={ref1} fillOpacity={0} fontSize={0} position={[0, 0, -20]}>We Dive</Text>
      <Text color={'white'} ref={ref2} fillOpacity={0} fontSize={0} position={[0, 0, -20]}>We Define</Text>
      <Text color={'white'} ref={ref3} fillOpacity={0} fontSize={0} position={[0, 0, -20]}>We Design</Text>
      <Text color={'white'} ref={ref4} fillOpacity={0} fontSize={0} position={[0, 0, -20]}>We Deploy</Text>
    </>
  );
};
export default Dive;
