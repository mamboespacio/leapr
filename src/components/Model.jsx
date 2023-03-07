import {
  useAnimations,
  useGLTF,
  useScroll,
  Float,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { mapRange } from "canvas-sketch-util/math";
import { gsap } from "gsap"


export default function Model() {
  const state_ = useThree();
  const dataScroll = useScroll();

  const model = useGLTF("./LEAPR_merge_16.glb");
  const animations = useAnimations(model.animations, model.scene);
  const actions = animations.actions;

  // FieldOfView | Valor del Scroll al final de la seccion |
  const paramsInicio = new THREE.Vector3(1, 0.06, 0);
  const paramsPartners = new THREE.Vector3(120, 0.2, 0);
  const paramsDNA = new THREE.Vector3(30, 0.47, 0);
  const paramsOurWork = new THREE.Vector3(30, 0.67, 0);
  const paramsOurProcess = new THREE.Vector3(100, 1, 0);

  //CAMERA PATHS

  const inicialPosition = new THREE.Vector3(21.25, 1.35, -1.63);
  const partnersPosition = new THREE.Vector3(-31.75, 1.37, 116.06);
  const DNAPosition = new THREE.Vector3(10, 6.53, 8.74);
  const ourWorkPosition = new THREE.Vector3(102.77, -344.92, -42.99);
  const ourProcessPosition = new THREE.Vector3(82.96, -707.50, 12.85);


  //LOOKATS

  const lookAtRef = useRef()
  let dinamicLookAt = new THREE.Vector3(0,0,0)
  const inicialLookAt = new THREE.Vector3(0,0,0)
  const partnersLookAt = new THREE.Vector3(0,0,0)
  const DNALookAt = new THREE.Vector3(0,-1.5,6)
  const ourWorkLookAt = new THREE.Vector3(80.77, -324.92, 0)
  const ourProcessLookAt = new THREE.Vector3(0, -657.50, 0)
  const timeLearp = 0.025




  //Dinamic values
  let fovToLerp = new Vector3(0, 0, 0);
  let greenLigth = useRef();

  //START
  useEffect(() => {
    console.log(model.scene) 
    lookAtRef.current.material.visible = false
    for (let action in actions) {
      
      if(actions[action]._clip.name === 'AnimationMerge')
      {
        console.log(actions[action]._clip.name)
        console.log('yes') 
        actions[action].play();
      }
    }

    state_.camera.fov = 1;
    state_.camera.position.set(inicialPosition.x, inicialPosition.y, inicialPosition.z)
    state_.camera.lookAt(new THREE.Vector3(0,0,0))

    model.scene.traverse(function (child) {

      if (child.isMesh) {

        child.castShadow = true;
        child.receiveShadow = true; 

        if (child.material.name == "material_cubos_Bake") {
          child.material = TranssmisiveMaterial();

        }

        if (child.material.name == "material_cubos.002_Bake") {
          child.material.metalness = 0.3;
          child.material.roughness = 0;
          child.material.depthFunc = 3;
          child.material.emissiveIntensity = 0.1;
        }

        if (child.material.name == "concrete_floor_worn_001_Bake") {
          child.material.metalness = 0.6;
          child.material.roughness = 0.1;
          child.material.depthFunc = 3;
        }

        if (child.material.name == "Material_Bake") {
          child.material.metalness = 1;
          child.material.roughness = 0.15;
          child.material.color = new THREE.Color("rgb(50,50,50)");
          child.material.emissive = new THREE.Color("rgb(0,255,100)");
          child.material.depthFunc = 3;
          child.material.emissiveIntensity = 0;
          child.material.wireframe = true;
        }

        if (child.material.name == "Mat_CuboProcess_Bake") {
          child.material.roughness = 0.1;
          child.material.metalness = 0.5; 
        }
      }

    });
  }, []);

  //CUSTOM FUNCTIONS
  let modelEffects = (state, offset) => {
    //VER PERFORMANCE
    // Remplazar con leapr de valores
    fovToLerp.x = state.camera.fov;
  
    if (offset < paramsInicio.y) {
      // INICIO
      state.camera.fov = fovToLerp.lerp(paramsInicio, 0.1).x; 
      gsap.to(state.camera.position, {x: inicialPosition.x, y: inicialPosition.y, z: inicialPosition.z, duration: 5})
      gsap.to(lookAtRef.current.position,{x: inicialLookAt.x, y: inicialLookAt.y, z: inicialLookAt.z, duration: 5})
      dinamicLookAt = dinamicLookAt.lerp(inicialPosition, timeLearp)
      
    }

    if (offset > paramsInicio.y && offset < paramsPartners.y) {

      // SECCION PARTNERS
      state.camera.fov = fovToLerp.lerp(paramsPartners, 0.15).x;
      gsap.to(state.camera.position, {x: partnersPosition.x, y: partnersPosition.y, z: partnersPosition.z, duration: 5})
      gsap.to(lookAtRef.current.position,{x: partnersLookAt.x, y: partnersLookAt.y, z: partnersLookAt.z, duration: 10})
    } else if (offset > paramsPartners.y && offset < paramsDNA.y) {

      // SECCION DNA
      state.camera.fov = fovToLerp.lerp(paramsDNA, 0.05).x;
      gsap.to(state.camera.position, {x: DNAPosition.x, y: DNAPosition.y, z: DNAPosition.z, duration: 8})
      gsap.to(lookAtRef.current.position,{x: DNALookAt.x, y: DNALookAt.y, z: DNALookAt.z, duration: 8})

    } else if (offset > paramsDNA.y && offset < paramsOurWork.y) {

      // SECCION OUR WORK
      state.camera.fov = fovToLerp.lerp(paramsOurWork, 0.05).x;
      gsap.to(state.camera.position, {x: ourWorkPosition.x, y: ourWorkPosition.y, z: ourWorkPosition.z, duration: 1})
      gsap.to(lookAtRef.current.position,{x: ourWorkLookAt.x, y: ourWorkLookAt.y, z: ourWorkLookAt.z, duration: 2})

    } else if (offset > paramsOurWork.y && offset < paramsOurProcess.y) {

      // SECCION OUR PROCESS
      state.frameloop = "always"
      state.camera.fov = fovToLerp.lerp(paramsOurProcess, 0.05).x;
      gsap.to(state.camera.position, {x: ourProcessPosition.x, y: ourProcessPosition.y, z: ourProcessPosition.z, duration: 5})
      gsap.to(lookAtRef.current.position,{x: ourProcessLookAt.x, y: ourProcessLookAt.y, z: ourProcessLookAt.z, duration: 6})

    }

    state.camera.lookAt(lookAtRef.current.position.x, lookAtRef.current.position.y, lookAtRef.current.position.z)

  };

  //UPDATE
  useFrame((state, delta) => {
    let r1 = dataScroll.range(0, 8 / 13);
    const offset = dataScroll.offset;
    modelEffects(state, r1);

    for (let action in actions) {


        if (r1 < 0.97) {

          if(actions[action]._clip.name === 'AnimationMerge')
          {
            actions[action].time = THREE.MathUtils.lerp(
              actions[action].time,
              actions[action].getClip().duration * r1,
              1.0
            );
          }
         
        } else {
          if(actions[action]._clip.name === 'AnimationMerge')
          {
            actions[action].time = actions[action].time = THREE.MathUtils.damp(
              actions[action].time,
              actions[action].getClip().duration * 0.98,
              100,
              delta
            );
          }
        }
      
    }

    state.camera.updateProjectionMatrix()
 
    //Animated values on Model
    let emissiveIntensityCubo = dataScroll.range(8 / 13, 1 / 13);
    model.scene.children[3].material.emissiveIntensity = emissiveIntensityCubo; // INTENSIDAD EMISION CUBO

    //Animated values at Ligths
    greenLigth.intensity = mapRange(
      dataScroll.range(0, 3 / 10) * 10,
      0,
      10,
      10,
      0
    );
    // if (greenLigth.intensity <= 0) {
    //   greenLigth.color = new THREE.Color("#000000");
    // } else {
    //   greenLigth.color = new THREE.Color("#0dff00");
    // }

  });

  return (
    <>
      <Float
        speed={0.2} // Animation speed, defaults to 1
        rotationIntensity={0.2} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <primitive object={model.scene} scale={1} />
        <mesh ref={lookAtRef}>
          <circleBufferGeometry args={[1, 9]} />
        </mesh>
      </Float>

      <directionalLight ref={greenLigth} position={[0, 0, 100]} />
    </>
  );
}

useGLTF.preload("./LEAPR_merge_11_merge.glb");

export const TranssmisiveMaterial = () => {
  const material = new THREE.MeshPhysicalMaterial({
    transmission: 0.5,
    metalness: 0.3,
    roughness: 0.,
    thickness: 3,
    ior: 10,
    clearcoat: 1,
    attenuationDistance: 0.5,
    attenuationColor: "#ffffff",
    color: "#0dff00",
  });
  return material;
};

export const UpdateFov = (inicio, final) => {
  inicio.lerp(final, 0.025);
};
