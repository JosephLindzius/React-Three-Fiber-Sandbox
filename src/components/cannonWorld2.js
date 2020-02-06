import * as CANNON from "cannon";
import React, { useState, useMemo } from "react"
import { Canvas, useThree, useFrame } from "react-three-fiber"
import { useDrag } from "react-use-gesture";
import * as THREE from 'three';
import { useCannon, Provider } from './useCannon';


function Box({ position: initialPosition }) {
    // Register box as a physics body with mass
    const { size, viewport } = useThree();
    const [position, setPosition] = useState(initialPosition);
    const [quaternion, setQuaternion] = useState([0, 0, 0, 0]);
    const aspect = size.width / viewport.width;

    const {ref, body} = useCannon({ mass: 100000 }, body => {
        body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
        body.position.set(...position)
    })

    const texture = useMemo(() => new THREE.TextureLoader().load("./assets/images/JJFLProfilePic.png", function(texture){

        var material = new THREE.MeshBasicMaterial( {

            map: texture
        } );
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set( 16, 16 );
    }))

    const bind = useDrag(({ offset: [,], xy: [x, y], first, last }) => {
        if (first) {
            body.mass = 0;
            body.updateMassProperties();
        } else if (last) {
            body.mass = 10000;
            body.updateMassProperties();
        }
        body.position.set((x - size.width / 2) / aspect, -(y - size.height / 2) / aspect, -0.7);
    }, { pointerEvents: true });

    useFrame(() => {
        // Sync cannon body position with three js
        const deltaX = Math.abs(body.position.x - position[0]);
        const deltaY = Math.abs(body.position.y - position[1]);
        const deltaZ = Math.abs(body.position.z - position[2]);
        if (deltaX > 0.001 || deltaY > 0.001 || deltaZ > 0.001) {
            setPosition(body.position.clone().toArray());
        }
        const bodyQuaternion = body.quaternion.toArray();
        const quaternionDelta = bodyQuaternion.map((n, idx) => Math.abs(n - quaternion[idx]))
            .reduce((acc, curr) => acc + curr);
        if (quaternionDelta > 0.01) {
            setQuaternion(body.quaternion.toArray());
        }
    });

    return (
        <mesh ref={ref} castShadow receiveShadow position={position} quaternion={quaternion}  {...bind()}
              onClick={e => {
                  e.stopPropagation();
              }}

        >
            <boxGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial attach="material" map={texture} color="#433O43" key={Math.random()}/>
        </mesh>
    )
}

export default Box;
