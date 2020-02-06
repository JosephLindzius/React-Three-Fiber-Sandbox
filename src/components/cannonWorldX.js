import React, {Suspense} from "react"
import { Canvas, } from "react-three-fiber"
import * as THREE from 'three';
import { Provider } from './useCannon';

import Box from "./cannonWorld2"
import Plane from "./cannonWorld"

import DraggableDodecahedron from "./Draggable";
import FBXLoader from "./fbxLoad";

function World () {

    return (
        <div className="boxCanvas">
            <Canvas
                onCreated={({ gl }) => {
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFSoftShadowMap;}}
                shadowMap camera={{ position: [0, 0, 10], rotation: [0, 0, 0] }}>
                <React.Fragment>
                    <ambientLight intensity={0.5} />
                    <spotLight intensity={0.8} position={[30, 30, 50]} angle={0.3} penumbra={1} castShadow />
                    <Provider>
                        <DraggableDodecahedron/>
                        <Plane position={[0, 0, -5]} />
                        <Box position={[1, 0, 1]} key={Math.random()}/>
                        <Box position={[2, 1, 5]} key={Math.random()}/>
                        <Box position={[0, 0, 6]} key={Math.random()}/>
                        <Box position={[-1, 1, 8]} key={Math.random()}/>
                        <Box position={[-2, 2, 13]} key={Math.random()}/>
                        <Box position={[2, -1, 13]} key={Math.random()}/>
                    </Provider>
                </React.Fragment>
            </Canvas>
        </div>
    )
}

export default World
