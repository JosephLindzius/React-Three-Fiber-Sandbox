import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import TableUrl from './Pool/assets/GardenWoodTables.glb'

function GardenTable (props) {
  const group = useRef()
  const gltf = useLoader(GLTFLoader, TableUrl)

  return (
    <group ref={group} {...props}>
      <scene name="Root Scene" >
        <object3D name="RootNode_(model_correction_matrix)">
        <object3D name="RootNode"  position={[0.0, 0.0, 0.0,]} rotation={[0, 0, 0,]} scale={[20, 20, 20]}>
            <mesh receiveShadow castShadow name="Cube_003_0" >
              <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
              <meshStandardMaterial attach="material" {...gltf.__$[3].material} name="woodtableup" />
            </mesh>
            <mesh receiveShadow castShadow name="Cube_003_1" >
              <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
              <meshStandardMaterial attach="material" {...gltf.__$[4].material} name="woodtabledown" />
            </mesh>
        </object3D>
        </object3D>
      </scene>
    </group>
  )
}
export default GardenTable;
