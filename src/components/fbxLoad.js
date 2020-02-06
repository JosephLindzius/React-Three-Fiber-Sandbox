import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import PlantGLB from '../assets/garden/Objects/plant.glb';

function Plant(props) {
    const group = useRef()
    const gltf = useLoader(GLTFLoader, PlantGLB)

    return (
        <group ref={group} {...props}>
            <scene name="Root Scene" >
                <object3D name="RootNode_(model_correction_matrix)">
                    <object3D name="Root">
                        <object3D
                            name="planet001"
                            position={[0, 0, 0]}
                            rotation={[0, 0, 0]}
                            scale={[20.0, 20.0, 20.0]}>
                    <mesh receiveShadow castShadow name="Cube_0" >
                            <bufferGeometry attach="geometry" {...gltf.__$[3].geometry} />
                            <meshStandardMaterial attach="material" {...gltf.__$[3].material} name="leave" />
                        </mesh>
                        <mesh receiveShadow castShadow name="Cube_1" >
                            <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
                            <meshStandardMaterial attach="material" {...gltf.__$[4].material} name="trunk" />
                        </mesh>
                        <mesh receiveShadow castShadow name="Cube_2" >
                            <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
                            <meshStandardMaterial attach="material" {...gltf.__$[5].material} name="plasterpot" />
                        </mesh>
                        <mesh receiveShadow castShadow name="Cube_3" >
                            <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
                            <meshStandardMaterial attach="material" {...gltf.__$[6].material} name="dirtpot" />
                        </mesh>
                        </object3D>
                    </object3D>
                </object3D>
            </scene>
        </group>
    )
}

export default Plant;
