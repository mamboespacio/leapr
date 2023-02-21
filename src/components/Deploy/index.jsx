import React, {useRef} from "react";
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

const Deploy = () => {
  const ref1 = useRef()

  const scroll = useScroll()
  useFrame(() => {
    const r1 = scroll.range(8 / 10, 1 / 10)

    // ref.current.classList.toggle('show', r1)
    // let filter = `blur(${r1*10}px)`
    // console.log(filter)
    // ref.current.style.flter = filter
    ref1.current.style.letterSpacing = r1*30 + 'px'
    ref1.current.style.scale = r1*10
    ref1.current.style.top = r1*200 + '%'
  })
  return (
    <section className="h-100">
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-md-12 text-center">
            <h1 ref={ref1}>We Deploy</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Deploy;
