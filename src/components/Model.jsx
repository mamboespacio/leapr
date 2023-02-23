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


export default function Model() {
  const state_ = useThree();
  const dataScroll = useScroll();

  const model = useGLTF("./leapr_NLAmerge.glb");
  const animations = useAnimations(model.animations, model.scene);
  const actions = animations.actions;

  // FieldOfView | Valor del Scroll al final de la seccion |
  const paramsInicio = new THREE.Vector3(1, 0.03, 0);
  const paramsPartners = new THREE.Vector3(120, 0.2, 0);
  const paramsDNA = new THREE.Vector3(15, 0.45, -10);
  const paramsOurWork = new THREE.Vector3(50, 0.6, 0);
  const paramsOurProcess = new THREE.Vector3(100, 1, 0);

  //CAMERA PATHS

  const inicialPosition = new THREE.Vector3(21.25, 1.35, -1.63);
  const partnersPosition = new THREE.Vector3(-31.75, 1.37, 116.06);
  const DNAPosition = new THREE.Vector3(-6.90, -2.53, 6.74);
  const ourWorkPosition = new THREE.Vector3(102.77, -354.92, -32.99);
  const ourProcessPosition = new THREE.Vector3(82.96, -707.50, 12.85);
  const timeLearp = 0.025


  //Dinamic values
  let fovToLerp = new Vector3(0, 0, 0);
  let greenLigth = useRef();

  //START
  useEffect(() => {
    console.log(model)
    for (let action in actions) {
      actions[action].play();
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
          console.log(child)
        }

        if (child.material.name == "material_cubos.002_Bake") {
          child.material.metalness = 1;
          child.material.roughness = 0;
          child.material.depthFunc = 1;
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

        if (child.name == "CuboProcess_Bake") {
          child.material.roughness = 0.1;
          child.material.metalness = 0.5;
          child.material.transparent = true;
          child.material.opacity = 1.0;
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
      state.frameloop = "always"
      state.camera.fov = fovToLerp.lerp(paramsInicio, 0.1).x;
      state.camera.position.lerp(inicialPosition, timeLearp)
      state.camera.lookAt(0,0,0)
    }

    if (offset > paramsInicio.y && offset < paramsPartners.y) {
      // SECCION PARTNERS
      state.frameloop = "always"
      state.camera.fov = fovToLerp.lerp(paramsPartners, 0.25).x;
      state.camera.position.lerp(partnersPosition, timeLearp)
      state.camera.lookAt(0,0,0)

    } else if (offset > paramsPartners.y && offset < paramsDNA.y) {
      // SECCION DNA
      state.frameloop = "always"
      state.camera.fov = fovToLerp.lerp(paramsDNA, 0.25).x;
      state.camera.position.lerp(DNAPosition, timeLearp)
      state.camera.lookAt(0,-1.5,6)
    } else if (offset > paramsDNA.y && offset < paramsOurWork.y) {
      // SECCION OUR WORK
      state.frameloop = "always"
      state.camera.fov = fovToLerp.lerp(paramsOurWork, 0.25).x;
      state.camera.position.lerp(ourWorkPosition, timeLearp)
      state.camera.lookAt(80.77, -324.92, 0)
    } else if (offset > paramsOurWork.y && offset < paramsOurProcess.y) {
      // SECCION OUR PROCESS
      state.frameloop = "always"
      state.camera.fov = fovToLerp.lerp(paramsOurProcess, 0.25).x;
      state.camera.position.lerp(ourProcessPosition, timeLearp)
      state.camera.lookAt(0, -657.50, 0)
    }
  };

  //UPDATE
  useFrame((state, delta) => {
    let r1 = dataScroll.range(0, 8 / 10);
    const offset = dataScroll.offset;
    modelEffects(state, r1);

    for (let action in actions) {
     
        if (r1 < 0.97) {
          actions[action].time = THREE.MathUtils.lerp(
            actions[action].time,
            actions[action].getClip().duration * r1,
            1.0
          );
        } else {
          actions[action].time = actions[action].time = THREE.MathUtils.damp(
            actions[action].time,
            actions[action].getClip().duration * 0.98,
            100,
            delta
          );
        }
      
    }

    state.camera.updateProjectionMatrix()
 
    //Animated values on Model
    let emissiveIntensityCubo = dataScroll.range(8 / 10 - 0.02, 1 / 10);
    model.scene.children[4].material.emissiveIntensity = emissiveIntensityCubo; // INTENSIDAD EMISION CUBO

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
      </Float>

      <directionalLight ref={greenLigth} position={[0, 0, 100]} />
    </>
  );
}

useGLTF.preload("./0123_LEAPR_boceto3d_8_OPTIMIZE.glb");

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
