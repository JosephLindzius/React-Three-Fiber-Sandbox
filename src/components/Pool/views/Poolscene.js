import React from 'react';
import { useThree } from 'react-three-fiber';


import Lights from '../components/Lights';
import PoolTable from "../components/PoolTable";
import PoolBall from "../components/PoolBall";


function Scene() {
    const { camera } = useThree();

    camera.fov = 45;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.near = 0.1;
    camera.far = 1000;

    camera.up.set(0, 0, 1);
    camera.position.set(-5, 7, 5);

    return (
        <>
            <Lights
                type='AmbientLight'
                color={0xffffff}
                intensity={0.2}
                position={[0, 0, 0]}
            />
            {[[-5, -12, 20], [5, -12, 20], [-5, 12, 20], [5, 12, 20]].map(pos => (
                <Lights
                    type='PointLight'
                    color={0xffffff}
                    intensity={0.4}
                    distance={100}
                    position={pos}
                    castShadow
                />
            ))}
            <React.Suspense fallback={<mesh />}>
                <PoolTable />
            </React.Suspense>
            <object3D>
                <PoolBall position={[0, -16, 0]} />
                <PoolBall position={[-1.01, 15, 0]} />
                <PoolBall position={[1.01, 17, 0]} />
                <PoolBall position={[-0.51, 16, 0]} />
                <PoolBall position={[-1.01, 17, 0]} />
                <PoolBall position={[-2.02, 17, 0]}  />
                <PoolBall position={[1.53, 16, 0]}  />
                <PoolBall position={[0.51, 14, 0]} />
                <PoolBall position={[0, 15, 0]}  />
                <PoolBall position={[0, 13, 0]}  />
                <PoolBall position={[0.51, 16, 0]}  />
                <PoolBall position={[2.02, 17, 0]}  />
                <PoolBall position={[-0.51, 14, 0]}  />
                <PoolBall position={[0, 17, 0]}  />
                <PoolBall position={[-1.53, 16, 0]}  />
                <PoolBall position={[1.01, 15, 0]}  />
            </object3D>
        </>
    );
}

export default Scene;
