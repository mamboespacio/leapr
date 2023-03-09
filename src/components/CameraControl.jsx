import { useScroll } from "@react-three/drei";
import { val } from "@theatre/core";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";

export default function CameraControl()
{
    const sheet = useCurrentSheet();
    const scroll = useScroll();

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
      });



    return (
        <>
             <PerspectiveCamera
                theatreKey="Camera"
                makeDefault
                position={[3, 4, 30]}
                fov={90}
                near={0.1}
                far={70}
            />
        </>   )

}