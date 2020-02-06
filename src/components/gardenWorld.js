import React, { Suspense, useState, useRef } from 'react'
import {Canvas, useLoader, useFrame, useThree} from 'react-three-fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from 'three'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";



function BBQ() {
    const loader = useLoader(FBXLoader, './assets/images/garden/Objects/barbecue.fbx');
    return <primitive object={loader.scene} position={[0, 0, 0]} />
}

function Box() {

    const Controls = props => {
        const { gl, camera } = useThree()
        const ref = useRef();
        useFrame(() => ref.current.update());
        return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
    };

    return (

        <Canvas>
            <mesh>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" transparent opacity={0.5} />
            </mesh>
        </Canvas>
    )
}

function Garden () {



        return (
            <div>
                <mesh
                    visible
                    userData={{ test: 'hello' }}
                    position={new THREE.Vector3(1, 2, 3)}
                    rotation={new THREE.Euler(0, 0, 0)}
                    geometry={new THREE.SphereGeometry(1, 16, 16)}
                    material={new THREE.MeshBasicMaterial({ color: new THREE.Color('hotpink'), transparent: true })}
                />
            </div>
        )
    }

export default Box;
