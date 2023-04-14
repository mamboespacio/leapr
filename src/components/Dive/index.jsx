import React, {useRef, useEffect} from "react";
import { useScroll, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { mapRange } from "canvas-sketch-util/math";
import { sectionsLength } from "../Experience";


const Dive = () => {
  const fontUrl = 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff'
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
    const r1 = scroll.range(13 / sectionsLength, 1 / sectionsLength)
    const r2 = scroll.range(15 / sectionsLength, 1 / sectionsLength)
    const r3 = scroll.range(20 / sectionsLength, 1 / sectionsLength)
    const r4 = scroll.range(22 / sectionsLength, 1 / sectionsLength)
    const r1v = scroll.visible(13 / sectionsLength, 1 / sectionsLength)
    const r2v = scroll.visible(15/ sectionsLength, 1 / sectionsLength)
    const r3v = scroll.visible(20 / sectionsLength, 1 / sectionsLength)
    const r4v = scroll.visible(22 / sectionsLength, 1 / sectionsLength)
    ref1.current.fontSize = mapRange(r1, 0, 1, 2, 4)
    ref1.current.letterSpacing = r1
    ref1.current.fillOpacity = mapRange(r1, 0, 1, 1, 0)
    ref1.current.parent = state.camera
    ref1.current.visible = r1v
    ref2.current.fontSize = mapRange(r2, 0, 1, 2, 4)
    ref2.current.letterSpacing = r2
    ref2.current.fillOpacity = mapRange(r2, 0, 1, 1, 0)
    ref2.current.parent = state.camera
    ref2.current.visible = r2v
    ref3.current.fontSize = mapRange(r3, 0, 1, 2, 4)
    ref3.current.letterSpacing = r3
    ref3.current.fillOpacity = mapRange(r3, 0, 1, 1, 0)
    ref3.current.parent = state.camera
    ref3.current.visible = r3v
    ref4.current.fontSize = mapRange(r4, 0, 1, 2, 4)
    ref4.current.letterSpacing = r4
    ref4.current.fillOpacity = mapRange(r4, 0, 1, 1, 0)
    ref4.current.parent = state.camera
    ref4.current.visible = r4v
  })
  return (
    <>
      <Text color={'white'} font={fontUrl} ref={ref1} fillOpacity={0} fontSize={0} position={[0, 0, -20]}>WE DIVE</Text>
      <Text color={'white'} font={fontUrl} ref={ref2} fillOpacity={0} fontSize={0} position={[0, 0, -20]}>WE DEFINE</Text>
      <Text color={'white'} font={fontUrl} ref={ref3} fillOpacity={0} fontSize={0} position={[0, 0, -20]}>WE DESIGN</Text>
      <Text color={'white'} font={fontUrl} ref={ref4} fillOpacity={0} fontSize={0} position={[0, 0, -20]}>WE DEPLOY</Text>
    </>
  );
};
export default Dive;
