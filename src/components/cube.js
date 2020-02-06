import React, {useState} from "react";
import {useSpring, animated} from "react-spring";

function Click () {
    const [state, toggle] = useState(true);
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000, mass: 20, friction: 28} })


    return (

        <div onClick={() => toggle(!state)}>
            <animated.div
                style={{

                    transform: x
                        .interpolate({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                        })
                        .interpolate(x => `scale(${x})`)
                }}
            >
                Click ME
            </animated.div>
        </div>

    )
}

export default Click;


/*useEffect(()=>{
     let controls, renderer, scene, camera;
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer();
        camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
        controls = new TrackballControls(camera, renderer.domElement);

        let clock = new THREE.Clock();



        renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
        document.body.appendChild( renderer.domElement );
        renderer.domElement.classList.add('App-logo');
        renderer.domElement.classList.add('main-title');
        renderer.domElement.classList.add('center');

        let light = new THREE.AmbientLight(0x304403);
        scene.add(light);
        let pointlight = new THREE.PointLight(0xFFFFFF, 1, 2);
        pointlight.position.z = 5;
        scene.add(pointlight);


        let texture = new THREE.TextureLoader().load( "./JJFLProfilePic.png" );
        var geometry = new THREE.BoxGeometry( 3, 3, 3 );
        var material = new THREE.MeshLambertMaterial(( { color: 0x00ff00, map: texture} ));
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            cube.position.x += 0.1;
            cube.position.y += 0.1;
            if (cube.position.x > 10) {
                cube.position.x = -10;
            }

            if (cube.position.y > 10) {
                cube.position.y = -10;
            }

            renderer.render( scene, camera );
        };

        animate();


});  */
