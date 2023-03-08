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
  const group = useRef()
  const state_ = useThree();
  const dataScroll = useScroll();

  const model = useGLTF("./LEAPR_merge_16.glb");
  const { nodes, materials, animations } = useGLTF('/LEAPR_merge_16.glb')
  const { actions } = useAnimations(animations, group)

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
        <group ref={group} dispose={null}>
          <group name="Scene">
            <group name="patita_main" position={[0, 9.24, 0]} rotation={[0, 0.17, 0]}>
              <mesh name="Patita_V1001_Curve004_cell162" geometry={nodes.Patita_V1001_Curve004_cell162.geometry} material={nodes.Patita_V1001_Curve004_cell162.material} position={[0.26, -6.73, 4.89]} />
              <mesh name="Patita_V1001_Curve004_cell166" geometry={nodes.Patita_V1001_Curve004_cell166.geometry} material={nodes.Patita_V1001_Curve004_cell166.material} position={[5.67, -14.67, 4.94]} />
              <mesh name="Patita_V1001_Curve004_cell167" geometry={nodes.Patita_V1001_Curve004_cell167.geometry} material={nodes.Patita_V1001_Curve004_cell167.material} position={[1.01, -20.76, 4.95]} />
              <mesh name="Patita_V1001_Curve004_cell168" geometry={nodes.Patita_V1001_Curve004_cell168.geometry} material={nodes.Patita_V1001_Curve004_cell168.material} position={[-1.34, -8.63, 5.04]} />
              <mesh name="Patita_V1001_Curve004_cell169" geometry={nodes.Patita_V1001_Curve004_cell169.geometry} material={nodes.Patita_V1001_Curve004_cell169.material} position={[3.59, -9.62, 4.96]} />
              <mesh name="Patita_V1001_Curve004_cell171" geometry={nodes.Patita_V1001_Curve004_cell171.geometry} material={nodes.Patita_V1001_Curve004_cell171.material} position={[-0.96, -5.32, 4.75]} />
              <mesh name="Patita_V1001_Curve004_cell172" geometry={nodes.Patita_V1001_Curve004_cell172.geometry} material={nodes.Patita_V1001_Curve004_cell172.material} position={[-3.65, -8.62, 4.97]} />
              <mesh name="Patita_V1001_Curve004_cell173" geometry={nodes.Patita_V1001_Curve004_cell173.geometry} material={nodes.Patita_V1001_Curve004_cell173.material} position={[0.51, -4.16, 5]} />
              <mesh name="Patita_V1001_Curve004_cell174" geometry={nodes.Patita_V1001_Curve004_cell174.geometry} material={nodes.Patita_V1001_Curve004_cell174.material} position={[-0.38, -10.1, 4.98]} />
              <mesh name="Patita_V1001_Curve004_cell177" geometry={nodes.Patita_V1001_Curve004_cell177.geometry} material={nodes.Patita_V1001_Curve004_cell177.material} position={[-6.99, -11.37, 4.94]} />
              <mesh name="Patita_V1001_Curve004_cell179" geometry={nodes.Patita_V1001_Curve004_cell179.geometry} material={nodes.Patita_V1001_Curve004_cell179.material} position={[-2.35, -13.16, 4.9]} />
              <mesh name="Patita_V1001_Curve004_cell180" geometry={nodes.Patita_V1001_Curve004_cell180.geometry} material={nodes.Patita_V1001_Curve004_cell180.material} position={[0.45, -12.89, 5.02]} />
              <mesh name="Patita_V1001_Curve004_cell182" geometry={nodes.Patita_V1001_Curve004_cell182.geometry} material={nodes.Patita_V1001_Curve004_cell182.material} position={[4.19, -3.69, 4.98]} />
              <mesh name="Patita_V1001_Curve004_cell183" geometry={nodes.Patita_V1001_Curve004_cell183.geometry} material={nodes.Patita_V1001_Curve004_cell183.material} position={[-0.5, -0.27, 4.97]} />
              <mesh name="Patita_V1001_Curve004_cell184" geometry={nodes.Patita_V1001_Curve004_cell184.geometry} material={nodes.Patita_V1001_Curve004_cell184.material} position={[3.13, -8.06, 4.96]} />
              <mesh name="Patita_V1001_Curve004_cell185" geometry={nodes.Patita_V1001_Curve004_cell185.geometry} material={nodes.Patita_V1001_Curve004_cell185.material} position={[-1.02, -13.3, 4.95]} />
              <mesh name="Patita_V1001_Curve004_cell186" geometry={nodes.Patita_V1001_Curve004_cell186.geometry} material={nodes.Patita_V1001_Curve004_cell186.material} position={[-3.35, -12.5, 4.74]} />
              <mesh name="Patita_V1001_Curve004_cell187" geometry={nodes.Patita_V1001_Curve004_cell187.geometry} material={nodes.Patita_V1001_Curve004_cell187.material} position={[-11.87, -4.03, 4.6]} />
              <mesh name="Patita_V1001_Curve004_cell189" geometry={nodes.Patita_V1001_Curve004_cell189.geometry} material={nodes.Patita_V1001_Curve004_cell189.material} position={[8.45, -7.49, 4.31]} />
              <mesh name="Patita_V1001_Curve004_cell190" geometry={nodes.Patita_V1001_Curve004_cell190.geometry} material={nodes.Patita_V1001_Curve004_cell190.material} position={[1.56, -4.96, 4.88]} />
              <mesh name="Patita_V1001_Curve004_cell191" geometry={nodes.Patita_V1001_Curve004_cell191.geometry} material={nodes.Patita_V1001_Curve004_cell191.material} position={[-1.63, -17.08, 4.97]} />
              <mesh name="Patita_V1001_Curve004_cell193" geometry={nodes.Patita_V1001_Curve004_cell193.geometry} material={nodes.Patita_V1001_Curve004_cell193.material} position={[-1.36, -2.86, 5.2]} />
              <mesh name="Patita_V1001_Curve004_cell194" geometry={nodes.Patita_V1001_Curve004_cell194.geometry} material={nodes.Patita_V1001_Curve004_cell194.material} position={[1.4, -0.75, 4.96]} />
              <mesh name="Patita_V1001_Curve004_cell195" geometry={nodes.Patita_V1001_Curve004_cell195.geometry} material={nodes.Patita_V1001_Curve004_cell195.material} position={[-5.52, -9.23, 5.17]} />
              <mesh name="Patita_V1001_Curve004_cell196" geometry={nodes.Patita_V1001_Curve004_cell196.geometry} material={nodes.Patita_V1001_Curve004_cell196.material} position={[2.72, -5.87, 5.03]} />
              <mesh name="Patita_V1001_Curve004_cell198" geometry={nodes.Patita_V1001_Curve004_cell198.geometry} material={nodes.Patita_V1001_Curve004_cell198.material} position={[-5.64, -7.22, 5.01]} />
              <mesh name="Patita_V1001_Curve004_cell199" geometry={nodes.Patita_V1001_Curve004_cell199.geometry} material={nodes.Patita_V1001_Curve004_cell199.material} position={[-6.31, -13.5, 4.95]} />
              <mesh name="Patita_V1001_Curve004_cell200" geometry={nodes.Patita_V1001_Curve004_cell200.geometry} material={nodes.Patita_V1001_Curve004_cell200.material} position={[-3.94, -1.79, 4.99]} />
              <mesh name="Patita_V1001_Curve004_cell203" geometry={nodes.Patita_V1001_Curve004_cell203.geometry} material={nodes.Patita_V1001_Curve004_cell203.material} position={[1.26, -5.94, 5.17]} />
              <mesh name="Patita_V1001_Curve004_cell204" geometry={nodes.Patita_V1001_Curve004_cell204.geometry} material={nodes.Patita_V1001_Curve004_cell204.material} position={[2.18, -14.62, 4.99]} />
              <mesh name="Patita_V1001_Curve004_cell205" geometry={nodes.Patita_V1001_Curve004_cell205.geometry} material={nodes.Patita_V1001_Curve004_cell205.material} position={[-6.12, -10.79, 5.02]} />
              <mesh name="Patita_V1001_Curve004_cell209" geometry={nodes.Patita_V1001_Curve004_cell209.geometry} material={nodes.Patita_V1001_Curve004_cell209.material} position={[1.88, -8.84, 4.93]} />
              <mesh name="Patita_V1001_Curve004_cell210" geometry={nodes.Patita_V1001_Curve004_cell210.geometry} material={nodes.Patita_V1001_Curve004_cell210.material} position={[-2.54, -11.22, 4.98]} />
              <mesh name="Patita_V1001_Curve004_cell212" geometry={nodes.Patita_V1001_Curve004_cell212.geometry} material={nodes.Patita_V1001_Curve004_cell212.material} position={[9.53, -5.49, 4.73]} />
              <mesh name="Patita_V1001_Curve004_cell213" geometry={nodes.Patita_V1001_Curve004_cell213.geometry} material={nodes.Patita_V1001_Curve004_cell213.material} position={[-1.09, -9.07, 4.84]} />
              <mesh name="Patita_V1001_Curve004_cell214" geometry={nodes.Patita_V1001_Curve004_cell214.geometry} material={nodes.Patita_V1001_Curve004_cell214.material} position={[2.18, -11.75, 4.93]} />
              <mesh name="Patita_V1001_Curve004_cell215" geometry={nodes.Patita_V1001_Curve004_cell215.geometry} material={nodes.Patita_V1001_Curve004_cell215.material} position={[-0.36, -5.6, 4.95]} />
              <mesh name="Patita_V1001_Curve004_cell216" geometry={nodes.Patita_V1001_Curve004_cell216.geometry} material={nodes.Patita_V1001_Curve004_cell216.material} position={[-10.66, -4.55, 5.01]} />
              <mesh name="Patita_V1001_Curve004_cell218" geometry={nodes.Patita_V1001_Curve004_cell218.geometry} material={nodes.Patita_V1001_Curve004_cell218.material} position={[-8.39, -12.1, 5.01]} />
              <mesh name="Patita_V1001_Curve004_cell219" geometry={nodes.Patita_V1001_Curve004_cell219.geometry} material={nodes.Patita_V1001_Curve004_cell219.material} position={[-2.77, -6.99, 4.98]} />
              <mesh name="Patita_V1001_Curve004_cell220" geometry={nodes.Patita_V1001_Curve004_cell220.geometry} material={nodes.Patita_V1001_Curve004_cell220.material} position={[-5.03, -8.71, 4.89]} />
              <mesh name="Patita_V1001_Curve004_cell221" geometry={nodes.Patita_V1001_Curve004_cell221.geometry} material={nodes.Patita_V1001_Curve004_cell221.material} position={[-4.72, -12.56, 5.01]} />
              <mesh name="Patita_V1001_Curve004_cell222" geometry={nodes.Patita_V1001_Curve004_cell222.geometry} material={nodes.Patita_V1001_Curve004_cell222.material} position={[5.21, -11.56, 4.95]} />
              <mesh name="Patita_V1001_Curve004_cell223" geometry={nodes.Patita_V1001_Curve004_cell223.geometry} material={nodes.Patita_V1001_Curve004_cell223.material} position={[1.4, -7.25, 4.73]} />
              <mesh name="Patita_V1001_Curve004_cell224" geometry={nodes.Patita_V1001_Curve004_cell224.geometry} material={nodes.Patita_V1001_Curve004_cell224.material} position={[-9.7, -13.32, 4.93]} />
              <mesh name="Patita_V1001_Curve004_cell225" geometry={nodes.Patita_V1001_Curve004_cell225.geometry} material={nodes.Patita_V1001_Curve004_cell225.material} position={[-4.48, -11.08, 4.92]} />
              <mesh name="Patita_V1001_Curve004_cell227" geometry={nodes.Patita_V1001_Curve004_cell227.geometry} material={nodes.Patita_V1001_Curve004_cell227.material} position={[0.93, -17.12, 4.97]} />
              <mesh name="Patita_V1001_Curve004_cell229" geometry={nodes.Patita_V1001_Curve004_cell229.geometry} material={nodes.Patita_V1001_Curve004_cell229.material} position={[-3.34, -14.45, 4.96]} />
              <mesh name="Patita_V1001_Curve004_cell230" geometry={nodes.Patita_V1001_Curve004_cell230.geometry} material={nodes.Patita_V1001_Curve004_cell230.material} position={[-0.98, -14.71, 4.96]} />
              <mesh name="Patita_V1001_Curve004_cell231" geometry={nodes.Patita_V1001_Curve004_cell231.geometry} material={nodes.Patita_V1001_Curve004_cell231.material} position={[-10.07, -10.45, 4.67]} />
              <mesh name="Patita_V1001_Curve004_cell232" geometry={nodes.Patita_V1001_Curve004_cell232.geometry} material={nodes.Patita_V1001_Curve004_cell232.material} position={[0.26, -15.2, 4.91]} />
              <mesh name="Patita_V1001_Curve004_cell234" geometry={nodes.Patita_V1001_Curve004_cell234.geometry} material={nodes.Patita_V1001_Curve004_cell234.material} position={[1.33, -10.11, 4.97]} />
              <mesh name="Patita_V1001_Curve004_cell235" geometry={nodes.Patita_V1001_Curve004_cell235.geometry} material={nodes.Patita_V1001_Curve004_cell235.material} position={[-2.4, -4.26, 4.99]} />
              <mesh name="Patita_V1001_Curve004_cell236" geometry={nodes.Patita_V1001_Curve004_cell236.geometry} material={nodes.Patita_V1001_Curve004_cell236.material} position={[0.72, -8.18, 4.98]} />
              <mesh name="Patita_V1001_Curve004_cell240" geometry={nodes.Patita_V1001_Curve004_cell240.geometry} material={nodes.Patita_V1001_Curve004_cell240.material} position={[10.31, -14.17, 3.57]} />
              <mesh name="Patita_V1001_Curve004_cell157" geometry={nodes.Patita_V1001_Curve004_cell157.geometry} material={nodes.Patita_V1001_Curve004_cell157.material} morphTargetDictionary={nodes.Patita_V1001_Curve004_cell157.morphTargetDictionary} morphTargetInfluences={nodes.Patita_V1001_Curve004_cell157.morphTargetInfluences} position={[8.39, -46.76, -0.11]} />
            </group>
            <mesh name="CuboProcess001" geometry={nodes.CuboProcess001.geometry} material={nodes.CuboProcess001.material} position={[0, -668.33, 0]} rotation={[0.01, 0.01, 0.23]} scale={-30.36} />
            <mesh name="CuboProcess002" geometry={nodes.CuboProcess002.geometry} material={nodes.CuboProcess002.material} position={[0, -668.33, 0]} rotation={[0.01, 0.01, 0.23]} scale={-30.36} />
            <mesh name="CuboProcess003" geometry={nodes.CuboProcess003.geometry} material={nodes.CuboProcess003.material} position={[0, -668.33, 0]} rotation={[0.01, 0.01, 0.23]} scale={-30.36} />
            <mesh name="CuboProcess004" geometry={nodes.CuboProcess004.geometry} material={nodes.CuboProcess004.material} position={[0, -668.33, 0]} rotation={[0.01, 0.01, 0.23]} scale={-30.36} />
            <mesh name="CuboProcess005" geometry={nodes.CuboProcess005.geometry} material={nodes.CuboProcess005.material} position={[0, -668.33, 0]} rotation={[0.01, 0.01, 0.23]} scale={-30.36} />
            <mesh name="CuboProcess006" geometry={nodes.CuboProcess006.geometry} material={nodes.CuboProcess006.material} position={[0, -668.33, 0]} rotation={[0.01, 0.01, 0.23]} scale={-30.36} />
            <mesh name="CuboProcess007" geometry={nodes.CuboProcess007.geometry} material={nodes.CuboProcess007.material} position={[0, -668.33, 0]} rotation={[0.01, 0.01, 0.23]} scale={-30.36} />
            <mesh name="CuboProcess008" geometry={nodes.CuboProcess008.geometry} material={nodes.CuboProcess008.material} position={[0, -668.33, 0]} rotation={[0.01, 0.01, 0.23]} scale={-30.36} />
            <group name="DISTRITO_DCL" position={[47.09, -377.05, -26.34]} rotation={[-Math.PI / 2, -0.22, Math.PI / 2]} scale={4.98}>
              <mesh name="Plane096" geometry={nodes.Plane096.geometry} material={nodes.Plane096.material} />
              <mesh name="Plane096_1" geometry={nodes.Plane096_1.geometry} material={nodes.Plane096_1.material} />
              <mesh name="Plane096_2" geometry={nodes.Plane096_2.geometry} material={nodes.Plane096_2.material} />
              <mesh name="Plane096_3" geometry={nodes.Plane096_3.geometry} material={nodes.Plane096_3.material} />
              <mesh name="Plane096_4" geometry={nodes.Plane096_4.geometry} material={nodes.Plane096_4.material} />
              <mesh name="Plane096_5" geometry={nodes.Plane096_5.geometry} material={nodes.Plane096_5.material} />
              <mesh name="Plane096_6" geometry={nodes.Plane096_6.geometry} material={nodes.Plane096_6.material} />
              <mesh name="Plane096_7" geometry={nodes.Plane096_7.geometry} material={nodes.Plane096_7.material} />
            </group>
          </group>
        </group>
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
