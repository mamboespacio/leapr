import React, {useRef} from "react";
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Dive = () => {
  const ref = useRef()
  const scroll = useScroll()
  useFrame(() => {
    const r1 = scroll.range(4 / 5, 1 / 5)
    // ref.current.classList.toggle('show', r1)
    // let filter = `blur(${r1*10}px)`
    // console.log(filter)
    // ref.current.style.flter = filter
    ref.current.style.letterSpacing = r1*20 + 'px'
    ref.current.style.scale = r1*10
  })
  return (
    <section className="h-100">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-md-12 text-center">
            <h1 ref={ref}>We Dive</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dive;
