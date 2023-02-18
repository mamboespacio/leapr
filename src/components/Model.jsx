import { useAnimations, useGLTF, useScroll, Float, useEnvironment } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'
import { Vector3 } from 'three'
import { mapRange } from 'canvas-sketch-util/math'

export default function Model()
{   
    const state_ = useThree()
    const dataScroll = useScroll()
    const model = useGLTF('./leapr_syncCubito3.glb')
    const animations = useAnimations(model.animations, model.scene)
    const actions = animations.actions

    // FieldOfView | Valor del Scroll al final de la seccion |
    const paramsInicio = new THREE.Vector3(1,0.03,0)
    const paramsPartners = new THREE.Vector3(120,0.2,0)
    const paramsDNA = new THREE.Vector3(15,0.45,0)
    const paramsOurWork = new THREE.Vector3(50,0.6,0)
    const paramsOurProcess = new THREE.Vector3(80,1,0)

    //Dinamic values
    let fovToLerp = new Vector3(0,0,0)
    let greenLigth = useRef()

    //START
    useEffect(() =>
    {
        for(let action in actions)
        {
           actions[action].play()
        }

        state_.camera.fov = 300        
        
        model.scene.traverse(function (child) {

            if (child.isMesh) {
                child.castShadow = true 
                child.receiveShadow = true

                if(child.material.name == 'material_cubos')
                {
                    child.material = TranssmisiveMaterial()
                }

                if(child.material.name == 'material_cubos.001')
                {
                    child.material.metalness = 0.2
                    child.material.roughness = 1
                    child.material.depthFunc = 1
                    child.material.emissiveIntensity = 0.1
                }

                if(child.material.name == 'concrete_floor_worn_001')
                {
                    child.material.metalness = 0.6
                    child.material.roughness = 0.1
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

                if(child.name == 'CuboProcess')
                {
                    child.material.roughness = 0.1 
                    child.material.metalness = 0.5
                    child.material.transparent = true
                    child.material.opacity = 1.0
                }
              
            }
        }) 
    }, [])

    //CUSTOM FUNCTIONS
    let modelEffects = (state, offset) => 
    {
        //VER PERFORMANCE 
        // Remplazar con leapr de valores
        fovToLerp.x = state.camera.fov
        // console.log(offset)

        if(offset < paramsInicio.y) // INICIO
        {   
            state.camera.fov = fovToLerp.lerp(paramsInicio, 0.1).x
        }

        if(offset > paramsInicio.y && offset < paramsPartners.y) // SECCION PARTNERS
        {
            state.camera.fov = fovToLerp.lerp(paramsPartners, 0.25).x
        }
        else if(offset > paramsPartners.y && offset < paramsDNA.y) // SECCION DNA
            {
                state.camera.fov = fovToLerp .lerp(paramsDNA, 0.25).x
            } else if (offset > paramsDNA.y && offset < paramsOurWork.y) // SECCION OUR WORK
                   {
                    state.camera.fov = fovToLerp .lerp(paramsOurWork, 0.25).x
                   } else if (offset > paramsOurWork.y && offset < paramsOurProcess.y) // SECCION OUR PROCESS
                          {
                            state.camera.fov = fovToLerp .lerp(paramsOurProcess, 0.25).x
                          }
    }

   //UPDATE
   useFrame((state, delta) =>
   {
        let r1 = dataScroll.range(0, 8/10)

        state.camera.position.set(  
            model.cameras[0].position.x,
            model.cameras[0].position.y,
            model.cameras[0].position.z)
        state.camera.rotation.set(
            model.cameras[0].rotation.x,
            model.cameras[0].rotation.y,
            model.cameras[0].rotation.z)
        
        state.camera.updateProjectionMatrix()
        
        const offset = dataScroll.offset
        
        modelEffects(state, r1)
        for(let action in actions)
        {
            if(r1 < 0.97)
            {
                // actions[action].time = THREE.MathUtils.damp(actions[action].time, (actions[action].getClip().duration * 1.2) * offset, 100, delta)
                actions[action].time = THREE.MathUtils.lerp(actions[action].time, (actions[action].getClip().duration) * r1, 1.0)

            }else
            {
                actions[action].time = actions[action].time = THREE.MathUtils.damp(actions[action].time, (actions[action].getClip().duration) * 0.98, 100, delta)
            }
        }

        //Animated values on Model
        let opacityCubo = dataScroll.range(5/10 + 0.05, 1/10)
        let emissiveIntensityCubo = dataScroll.range(8/10 - 0.02, 1/10) 
        model.scene.children[60].material.opacity = mapRange(opacityCubo, 0, 1, 1, 0) // OPACIDAD CUBO PIEDRA
        model.scene.children[4].material.emissiveIntensity = emissiveIntensityCubo // INTENSIDAD EMISION CUBO

        //Animated values at Ligths
        greenLigth.intensity = mapRange(dataScroll.range(0, 3/10) * 10, 0, 10, 10, 0)
        if(greenLigth.intensity <= 0)
        {
            greenLigth.color = new THREE.Color('#000000')
        } 
        else
        {
            greenLigth.color = new THREE.Color("#0dff00")
        }
        //logs
        console.log(greenLigth.intensity)
   }) 

    return (
        <>
        <Float
        speed={0.2} // Animation speed, defaults to 1
        rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
            <primitive object={model.scene} scale={ 1 }/>
        </Float>

        <directionalLight ref={greenLigth} position={[0,0,100]}  />
        </>   
    )
}

useGLTF.preload('./leapr2.glb')


export const TranssmisiveMaterial = () =>
{
    const material = new THREE.MeshPhysicalMaterial({     
        transmission: { value: 0.5, min: 0, max: 1 },
        roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
        thickness: { value: 3, min: 0, max: 10, step: 0.01 },
        ior: { value: 5, min: 1, max: 5, step: 0.01 },
        clearcoat: { value: 1, min: 0, max: 1 },
        attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
        attenuationColor: '#ffffff',
        color: '#0dff00',})
    return material
}


export const UpdateFov = (inicio,  final) =>
{
    inicio.lerp(final, 0.025)
}




