import {
    EffectComposer,
    Bloom,
    Noise,
    Vignette,
    ToneMapping,
    HueSaturation,
    DepthOfField,
    ChromaticAberration,
   } from "@react-three/postprocessing";
  import { BlendFunction } from "postprocessing";
  import { useScroll }  from '@react-three/drei'
  import { useFrame } from '@react-three/fiber'
import { useRef, useState } from "react";
import { Vector2 } from "three";


  export default function Effect()
  {
    // const hueEffect = useControls({ hue: { value: 1.38, min: 0, max: 6.28319, step: 0.001 }})

    const dataScroll = useScroll()
    const sunRef = useRef()
    
    let [focusDistance, setFD] = useState()
    let updateFocusDistance = () =>
    {
        let offset = dataScroll.offset

        if(offset < 0.03)
        {
            setFD(0.3)
        }

        if(offset > 0.03 && offset < 0.2)
        {
            setFD(0.4)
        }
        else if(offset > 0.2 && offset < 0.45) 
            {
                setFD(0.01)
            } else if (offset > 0.45 && offset < 0.6)
                   {
                    setFD(0.1)
                   } else if (offset > 0.6 && offset < 0.78)
                          {
                            setFD(0.2)
                          } else if (offset > 0.78 && offset < 1)
                                 {
                                    setFD(0.1)
                                 }
                                 

        // console.log("focus " + focusDistance + " " + "offset " + offset)
    }

    useFrame((state, delta) =>
    {
        updateFocusDistance()
        
    })

    return  <>
            <EffectComposer>
                <Bloom
                    mipmapBlur
                    luminanceThreshold={0.9}
                    luminanceSmoothing={0.1}
                    height={300}
                />
                <Noise opacity={0.05} />
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
                {/* <ColorDepth bits={[64]}/> */}
                <DepthOfField focalLength={[0.2]} focusDistance={[focusDistance]} bokehScale={[10]} />
                <HueSaturation saturation={[0.]} hue={[0]}/>
                <ChromaticAberration/>
                {/* <GodRays  sun={sunRef}/>  */}
            </EffectComposer>
            </>
  }