import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from "@react-three/drei";
import { MeshBasicMaterial } from 'three';

const LoadingPage = () => {
  const cubeRef = useRef();
  const { scene } = useGLTF("./LEAPR_loading.glb");

  useEffect(() =>
  {
    scene.children[0].material = new MeshBasicMaterial({ color: '#0dff00'})
  },[])

  useFrame(() => {
      scene.rotation.y += 0.05
  });

  return (
    <>
      {/* <ambientLight /> */}
      <directionalLight color="#0dff00" />
      <primitive object={scene} scale ={[ 5,5,5]}/>
      <mesh position={[0,0,-100]} scale={[100,50,1]}>
        <planeBufferGeometry args={[5, 5]} />
        <meshStandardMaterial color={'#0dff00'} />
      </mesh>
    </>
  );
};

export default LoadingPage;