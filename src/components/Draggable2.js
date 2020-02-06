import * as CANNON from "cannon";
import React, { useState } from "react"
import { useThree, useFrame } from "react-three-fiber"
import { useDrag } from "react-use-gesture";
import { useCannon } from './useCannon';


function DraggableDodecahedron2({ position: initialPosition }) {
    const { size, viewport } = useThree();
    const [position, setPosition] = useState(initialPosition);
    const [quaternion, setQuaternion] = useState([0, 0, 0, 0]);
    const aspect = size.width / viewport.width;

    const { ref, body } = useCannon({ bodyProps: { mass: 100000 } }, body => {
        body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
        body.position.set(...position);
    }, []);

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
        <mesh ref={ref} castShadow position={position} quaternion={quaternion} {...bind()}
              onClick={e => {
                  e.stopPropagation();
              }}
        >

            <dodecahedronBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="yellow" />

        </mesh>
    )
}

export default DraggableDodecahedron2;
