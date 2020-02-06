import * as CANNON from 'cannon'
import { useCannon } from './useCannon'

import React, {useMemo, useState} from "react";

import * as THREE from "three";
import PlaneTexture from "../assets/scaled_floor.jpg"
import {useThree} from "react-three-fiber";


function Plane({ position }) {
    const { size, viewport } = useThree();


    const { body} = useCannon({ mass: 100000 }, body => {
        body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
        body.position.set(...position)
    })

    const texture = useMemo(() => new THREE.TextureLoader().load(PlaneTexture), function(texture){
        var material = new THREE.MeshBasicMaterial( {
            map: texture
        } );

    })

    // Register plane as a physics body with zero mass
    const ref = useCannon({ mass: 0 }, body => {
        body.addShape(new CANNON.Plane())
        body.position.set(...position)
    })
    return (
        <mesh ref={ref} receiveShadow position={position}>
            <planeBufferGeometry attach="geometry" args={[50, 50]} />
            <meshPhongMaterial attach="material" map={texture} />
        </mesh>
    )
}



export default Plane;
