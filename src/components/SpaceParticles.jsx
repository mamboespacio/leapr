import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import Random from 'canvas-sketch-util/random';
import {  MeshTransmissionMaterial } from '@react-three/drei'
import { useControls } from 'leva'


export function SpaceParticles({ count }) {
  const mesh = useRef();
  const light = useRef();

  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Random.range(0, 100);
      const factor = Random.range(20, 120);
      const speed = Random.range(0.001, 0.0015) / 2;
      const x = Random.range(-200, 200);
      const y = Random.range(-2000, 200);
      const z = Random.range(-100, 100);

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, index) => {
      let { factor, speed, x, y, z } = particle;

      // Update the particle time
      const t = (particle.time += speed);

      // Update the particle position based on the time
      // This is mostly random trigonometry functions to oscillate around the (x, y, z) point
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );

      // Derive an oscillating value which will be used
      // for the particle size and rotation
      const s = Math.cos(t);
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });


  // const config = useControls({
  //   meshPhysicalMaterial: false,
  //   transmissionSampler: false,
  //   backside: false,
  //   samples: { value: 10, min: 1, max: 32, step: 1 },
  //   resolution: { value: 2048, min: 256, max: 2048, step: 256 },
  //   transmission: { value: 1, min: 0, max: 1 },
  //   roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
  //   thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
  //   ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
  //   chromaticAberration: { value: 0.06, min: 0, max: 1 },
  //   anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
  //   distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
  //   temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
  //   clearcoat: { value: 1, min: 0, max: 1 },
  //   attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
  //   attenuationColor: '#ffffff',
  //   color: '#c9ffa1',
  //   bg: '#839681'
  // })


  return (
    <>
      {/* <pointLight ref={light} distance={400} intensity={100} color="lightblue"  position={[0,-400,0]}/> */}
      {/* <pointLight ref={light} distance={400} intensity={100} color="lightblue"  position={[0,400,0]}/> */}
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#050505" roughness={[0.1]} metalness={[0]}/>
        {/* <MeshTransmissionMaterial background={new THREE.Color(config.bg)} {...config} /> */}
      </instancedMesh>
    </>
  );
}