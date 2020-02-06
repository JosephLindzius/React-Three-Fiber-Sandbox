import React, {Suspense, useReducer, useRef} from 'react';
import {useFrame, useThree} from 'react-three-fiber';


import Plant from "./fbxLoad";
import Lights from "./Pool/components/Lights";
import GardenTable from "./Tables";
import Fir from './Fir'



function Plantscene () {
    const ref = useRef();
    const { camera } = useThree();

    camera.fov = 60;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.near = 0.01;
    camera.far = 10000;

    camera.up.set(0, 0, 1);
    camera.position.set(0, 2, 2);



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

                    <Suspense fallback={  <mesh receiveShadow>
                        <planeBufferGeometry attach="geometry" arg={[1, 1]} />
                        <meshPhongMaterial attach="material" color="#50402D" />
                    </mesh>}>
                        <Fir position={[0, -2, 1.1]}/>
                        <Fir position={[-1.5, -2, 1.1]}/>
                        <Fir position={[1.5, -2, 1.1]}/>
                        <GardenTable position={[0, 0, 0.26]}/>
                        <GardenTable position={[0, 1.5, 0.26]}/>
                        <Plant position={[2, 0, 0.42]}/>
                        <Plant position={[-2, 0, 0.42]}/>
                        <Plant position={[2, 0.75, 0.42]}/>
                        <Plant position={[-2, 0.75, 0.42]}/>
                        <Plant position={[2, 1.5, 0.42]}/>
                        <Plant receiveShadow castShadow position={[-2, 1.5, 0.42]}/>
                    </Suspense>
                    <mesh ref={ref} receiveShadow castShadow>
                        <planeBufferGeometry attach="geometry" args={[5, 5]} />
                        <meshPhongMaterial attach="material" color="#50402D" />
                    </mesh>
                    <mesh receiveShadow castShadow position={[0, -2.5, 2.5]} rotation={[-Math.PI/2, 0, 0]}>
                        <planeBufferGeometry attach="geometry" args={[5, 5]}/>
                        <meshPhongMaterial attach="material" color="#50402D" />
                    </mesh>
                    <mesh receiveShadow castShadow position={[2.5, 0, 2.5]} rotation={[0, -Math.PI/2, 0]}>
                        <planeBufferGeometry attach="geometry" args={[5, 5]} />
                        <meshPhongMaterial attach="material" color="#50402D" />
                    </mesh>
                    <mesh receiveShadow castShadow position={[-2.5, 0, 2.5]} rotation={[0, Math.PI/2, 0]}>
                        <planeBufferGeometry attach="geometry" args={[5, 5]} />
                        <meshPhongMaterial attach="material" color="#50402D" />
                    </mesh>
                    <mesh receiveShadow castShadow position={[0, 5, 0]} rotation={[0, 0, 0]}>
                        <planeBufferGeometry attach="geometry" args={[5, 5]} />
                        <meshPhongMaterial attach="material" color="#50402D" />
                    </mesh>
                </>


    );
}

export default Plantscene;
