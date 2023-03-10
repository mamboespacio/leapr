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
import { sectionsLength } from "./Experience";


export default function Model() {
  
  const dataScroll = useScroll();
  const offset = dataScroll.offset;

  const model = useGLTF("./LEAPR_2200.glb");
  const animations = useAnimations(model.animations, model.scene);
  const actions = animations.actions;


  //Dinamic values
  let fovToLerp = new Vector3(0, 0, 0);
  let greenLigth = useRef();


  //START
  useEffect(() => {

    console.log(model.scene) 
    for (let action in actions) {
      actions[action].play().paused = true;
    }

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
          child.material.metalness = 0;
          child.material.roughness = 0.3;
          child.material.color = new THREE.Color("rgb(100,200,100)");
          child.material.emissive = new THREE.Color("rgb(0,255,100)");
          child.material.depthFunc = 3;
          child.material.emissiveIntensity = 0;
          child.material.wireframe = true;
        }

        if (child.material.name == "Mat_CuboProcess_Bake") {
          child.material.roughness = 0.1;
          child.material.metalness = 0.5; 
          child.material.transparent = true;
          child.material.opacity = 1.0;  
        }
      }

    });
  }, []);


  //UPDATE
  useFrame((state, delta) => {

    let r1 = dataScroll.range(0, 22 / sectionsLength);
    
    for (let action in actions) {
     
        if (r1 < 0.97) {
          actions[action].time = THREE.MathUtils.lerp(
            actions[action].time,
            actions[action].getClip().duration * r1,
            1.0
          );

          // console.log("ACTION TIME", actions[action].time)
        } else {
          actions[action].time = actions[action].time = THREE.MathUtils.damp(
            actions[action].time,
            actions[action].getClip().duration * 0.97,
            100,
            delta
          );
        }
      
    }

    state.camera.updateProjectionMatrix()
 
    // //Animated values on Model
    let emissiveIntensityCubo = dataScroll.range(22 / sectionsLength , 2 / sectionsLength);
    model.scene.children[3].material.emissiveIntensity = emissiveIntensityCubo; // INTENSIDAD EMISION CUBO

  });

  return (
    <>
      <Float
        speed={0.1} // Animation speed, defaults to 1
        rotationIntensity={0.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <primitive object={model.scene} scale={1} />
      </Float>

      <directionalLight ref={greenLigth} position={[0, 0, 100]} />
    </>
  );
}

useGLTF.preload("./0123_LEAPR_boceto3d_8_OPTIMIZE.glb");

export const TranssmisiveMaterial = () => {
  const material = new THREE.MeshPhysicalMaterial({
    transmission: 0.8,
    metalness: 0.7,
    roughness: 0.1,
    thickness: 3,
    ior: 2,
    clearcoat: 1,
    attenuationDistance: 0.5,
    attenuationColor: "#ffffff",
    color: "#0dff00",
  });
  return material;
};

