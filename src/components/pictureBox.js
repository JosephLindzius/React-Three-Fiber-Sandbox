import React from "react";
import * as THREE from "three";
import TrackballControls from "three-trackballcontrols";

function PictureBox () {


        let controls, renderer, scene, camera;
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer();
        camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
        controls = new TrackballControls(camera, renderer.domElement);

        let light = new THREE.AmbientLight(0x034EFF);
        scene.add(light);

        let pointLight = new THREE.PointLight(0xFFF342, 1, 1, 0.1);
        scene.add(pointLight);

        renderer.setSize( window.innerWidth/4, window.innerHeight/4 );
        document.body.appendChild( renderer.domElement );
        renderer.domElement.id = 'happy';
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var texture = new THREE.TextureLoader()
            .load( './assets/images/JJFLProfilePic.png' );
        console.log(texture);
        var material = new THREE.MeshLambertMaterial( { color: 0x00ff00, map: texture } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        function animate () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        }


       animate();

    return (
        <div>
          TEST
        </div>
    )
}

export default PictureBox;
