import { useAnimations, useGLTF, useScroll, Float, Caustics} from '@react-three/drei'
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
    const childrens = model.children

    //START
    useEffect(() =>
    {
        for(let action in actions)
        {
           actions[action].play()
        }
        
        model.scene.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true

                if(child.material.name == 'material_cubos')
                {
                    child.material.metalness = 1
                    child.material.roughness = 0.07
                    child.material.emissiveIntensity = 0
                    child.material.depthFunc = 3
                }

                if(child.material.name == 'material_cubos.001')
                {
                    child.material.metalness = 0
                    child.material.roughness = 1
                    child.material.depthFunc = 1
                    child.material.emissiveIntensity = 0
                    console.log(child.material) 
                }

                if(child.material.name == 'concrete_floor_worn_001')
                {
                    child.material.metalness = 0.6
                    child.material.roughness = 0.2
                    child.material.depthFunc = 3
                }

                if(child.material.name == 'Material')
                {
                    child.material.metalness = 1
                    child.material.roughness = 0.15
                    child.material.color = new THREE.Color('rgb(50,50,50)')
                    child.material.emissive = new THREE.Color('rgb(0,255,100)') 
                    child.material.depthFunc = 3 
                    child.material.emissiveIntensity = 0
                    child.material.wireframe = true
                }
              
                // console.log(child.material)
            }
        }) 
    }, [])

    //CUSTOM FUNCTIONS
    let updateFov = (state, offset) =>
    {
        // Remplazar con leapr de valores
        // console.log(offset)
        if(offset < 0.03)
        {
            state.camera.fov = 1
        }

        if(offset > 0.03 && offset < 0.2)
        {
            state.camera.fov = 120
        }
        else if(offset > 0.2 && offset < 0.45) 
            {
                state.camera.fov = 10
            } else if (offset > 0.45 && offset < 1)
                   {
                        state.camera.fov = 60
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

    return (
        <Float
        speed={0.2} // Animation speed, defaults to 1
        rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <primitive object={model.scene} scale={ 1 }/>
            
        </Float>
            
    )
}

useGLTF.preload('./leapr2.glb')