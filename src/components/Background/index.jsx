import React, { useEffect, useRef } from "react";
import { Image, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { mapRange } from "canvas-sketch-util/math";

const Background = () => {
  const { width: w, height: h } = useThree((state) => state.viewport)
  const ref = useRef()
  const scroll = useScroll()

  useEffect(() =>
  {
    
  },[])

  useFrame((state, delta) => {
    const r1 = scroll.range(2 / 5, 1 / 5)
    // ref.current.material.zoom = 1 + r1  // 1 and higher
    ref.current.material.grayscale = r1 // between 0 and 1
    ref.current.material.transparent = true
    ref.current.material.opacity = mapRange(r1, 0, 1, 1, 0)
    ref.current.parent = state.camera
  })
  return <Image ref={ref} url="/images/gradient-01.jpg" scale={[w *35, w * 35, 1]} position={[0, 0, -140]} />
}

export default Background;