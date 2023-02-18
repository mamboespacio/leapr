import { useAnimations, useGLTF, useScroll, Float, useEnvironment } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'

export default function Model()
{   
    const state_ = useThree()
    const dataScroll = useScroll()
    const model = useGLTF('./leapr_syncCubito3.glb')
    const animations = useAnimations(model.animations, model.scene)
    const actions = animations.actions

    const fovInicio = new THREE.Vector3(1,0,0)
    const fovPartners = new THREE.Vector3(120,0,0)
    const fovDNA = new THREE.Vector3(15,0,0)
    const fovOurWork = new THREE.Vector3(50,0,0)
    const fovOurProcess = new THREE.Vector3(80,0,0)

    //Dinamic values
    let fovToLerp


    //CONFIGSS
    const config = useControls({
        transmission: { value: 0.5, min: 0, max: 1 },
        roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
        thickness: { value: 3, min: 0, max: 10, step: 0.01 },
        ior: { value: 5, min: 1, max: 5, step: 0.01 },
        clearcoat: { value: 1, min: 0, max: 1 },
        attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
        attenuationColor: '#ffffff',
        color: '#0dff00',
    })
    //'#0dff00'



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
                    child.material = TranssmisiveMaterial(config)
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
                    child.material.transparent = 1
                    child.material.opacity = 1
                    child.material.visible = 0
                }
                
              
            }
        }) 
    }, [])

    //CUSTOM FUNCTIONS
    let updateFov = (state, offset) => 
    {
        // Remplazar con leapr de valores
        if(offset < 0.03)
        {   

            fovToLerp = new THREE.Vector3(state.camera.fov, 0, 0)
            state.camera.fov = fovToLerp.lerp(fovInicio, 0.1).x
        }

        if(offset > 0.03 && offset < 0.2)
        {
            fovToLerp = new THREE.Vector3(state.camera.fov, 0, 0)
            state.camera.fov = fovToLerp.lerp(fovPartners, 0.25).x
        }
        else if(offset > 0.2 && offset < 0.45) 
            {
                fovToLerp = new THREE.Vector3(state.camera.fov, 0, 0)
                state.camera.fov = fovToLerp .lerp(fovDNA, 0.25).x
            } else if (offset > 0.45 && offset < 0.6)
                   {
                    fovToLerp = new THREE.Vector3(state.camera.fov, 0, 0)
                    state.camera.fov = fovToLerp .lerp(fovOurWork, 0.25).x
                   } else if (offset > 0.6 && offset < 1)
                          {
                            fovToLerp = new THREE.Vector3(state.camera.fov, 0, 0)
                            state.camera.fov = fovToLerp .lerp(fovOurProcess, 0.25).x
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


export const TranssmisiveMaterial = (config) =>
{
    const material = new THREE.MeshPhysicalMaterial({...config})
    return material
}


export const UpdateFov = (inicio,  final) =>
{
    inicio.lerp(final, 0.025)
}

export function clamp(input, min, max) {
    return input < min ? min : input > max ? max : input;
  }

export function map(current, in_min, in_max, out_min, out_max) {
    const mapped = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    return clamp(mapped, out_min, out_max);
  }



