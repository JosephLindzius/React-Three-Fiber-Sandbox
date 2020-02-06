import React from "react";
import {Canvas} from "react-three-fiber";


import Controls from "./Pool/components/Controls";
import Scene from "./PlantScene";
import * as THREE from "three";

function PlantCanvas () {
    return (
            <Canvas
                onCreated={({ gl }) => {
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFSoftShadowMap;}}>
            <Scene />
            <Controls />
            </Canvas>
    );
}

export default PlantCanvas;
