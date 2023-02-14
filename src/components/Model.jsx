import { useAnimations, useGLTF, useScroll} from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { forwardRef, useEffect } from 'react'
import * as THREE from 'three'

export default function Model()
{
    const dataScroll = useScroll()
    const state = useThree()
    const model = useGLTF('./leapr2.glb')
    const animations = useAnimations(model.animations, model.scene)
    const actions = animations.actions

    //START
    useEffect(() =>
    {
        for(let action in actions)
        {
           actions[action].play()
        }
    }, [])

    //CUSTOM FUNCTIONS
    let updateFov = (state, offset) =>
    {
        // Remplazar con leapr de valores
        console.log(offset)
        if(offset < 0.03)
        {
            state.camera.fov = 2
        }

        if(offset > 0.03 && offset < 0.2)
        {
            state.camera.fov = 120
        }
        else if(offset > 0.2 && offset < 0.45)
            {
                state.camera.fov = 20
            } else if (offset > 0.45 && offset < 0.6)
                   {
                        state.camera.fov = 80
                   } 
    }
   //UPDATE
   useFrame((state, delta) =>
   {
        state.camera.position.set(
            model.cameras[0].position.x,
            model.cameras[0].position.y,
            model.cameras[0].position.z)
        state.camera.rotation.set(
            model.cameras[0].rotation.x,
            model.cameras[0].rotation.y,
            model.cameras[0].rotation.z)
        
        // console.log(dataScroll.offset)
        // state.camera.fov = 120
        
        state.camera.updateProjectionMatrix()
        
        const offset = dataScroll.offset
        
        updateFov(state, offset)
        for(let action in actions)
        {
            if(offset < 0.97)
            {
                actions[action].time = THREE.MathUtils.damp(actions[action].time, (actions[action].getClip().duration) * offset, 100, delta)
            }else
            {
                actions[action].time = actions[action].time = THREE.MathUtils.damp(actions[action].time, (actions[action].getClip().duration) * 0.98, 100, delta)
            }
        }
   }) 

    return (<primitive object={model.scene} scale={ 1 }/>)
}

useGLTF.preload('./leapr2.glb')