import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import FirURL from './Pool/assets/Fir.glb'

export default function Model(props) {
  const group = useRef()
  const gltf = useLoader(GLTFLoader, FirURL);

  return (
    <group ref={group} {...props}>
      <scene name="Root Scene" >
        <object3D name="RootNode_(model_correction_matrix)">
        <object3D name="RootNode" position={[0, 0, 0]} scale={[20, 20, 20]}>
            <mesh name="Cylinder_0" receiveShadow castShadow>
              <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
              <meshStandardMaterial attach="material" {...gltf.__$[3].material} name="saplinleaf" />
            </mesh>
            <mesh name="Cylinder_1" receiveShadow castShadow>
              <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
              <meshStandardMaterial attach="material" {...gltf.__$[4].material} name="trunkwood" />
            </mesh>
        </object3D>
        </object3D>
      </scene>
    </group>
  )
}
