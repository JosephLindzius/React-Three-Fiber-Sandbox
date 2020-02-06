import React from "react";
import {Canvas} from "react-three-fiber";


import Controls from "../components/Controls";
import Scene from "./Poolscene";

function Pool () {
    return (
        <Canvas>
            <Scene />
            <Controls />
        </Canvas>
    );
}

export default Pool;
