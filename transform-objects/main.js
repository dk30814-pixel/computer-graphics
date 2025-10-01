import * as THREE from 'three';

const scene = new THREE.Scene(); //scene constructor
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
    100, window.innerWidth/window.innerHeight, 0.1, 1000
);

camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshStandardMaterial({color:0xff0000});
const cubeMesh = new THREE.Mesh(geometry, material);
// scene.add(cubeMesh);

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(2,2,5);
scene.add(light);

//Moving objects: x, y and z
// cubeMesh.position.x = 0.7
// cubeMesh.position.y = -0.6
// cubeMesh.position.z = 1
// console.log(cubeMesh.position.distanceTo(camera.position))
// cubeMesh.position.set(0.7, -0.6, 1);

//Axes Helper
// const axesHelper = new THREE.AxesHelper(10);
// scene.add(axesHelper); //y-green, x-red, z-is blue but hidden because it is aligned with the camera

// //Scaling objects
// cubeMesh.scale.x = 2
// cubeMesh.scale.y = 0.25
// cubeMesh.scale.z  = 0.5

// Rotation
// cubeMesh.rotation.x = Math.PI * 0.25
// cubeMesh.rotation.y = Math.PI * 0.25

// // Combining transformations
// cubeMesh.position.x = 0.7
// cubeMesh.position.y = -0.6
// cubeMesh.position.z = 1
// cubeMesh.scale.x = 2
// cubeMesh.scale.y = 0.25
// cubeMesh.scale.z = 0.5
// cubeMesh.rotation.x = Math.PI * 0.25
// cubeMesh.rotation.y = Math.PI * 0.25

//Scene graph
const group = new THREE.Group();
group.scale.y = 3
group.rotation.y = 1
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xffffff})
);
cube1.position.x = -1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,5),
    new THREE.MeshBasicMaterial({color:0xff111})
);
cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xffffff})
);
cube3.position.x = 1.5
group.add(cube3)

// const cube4 = new THREE.Mesh(
//     new THREE.BoxGeometry(7,3,6),
//     new THREE.MeshBasicMaterial({color:0x00FF00})
// );
// cube4.position.x = 0
// group.add(cube4)

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    // cube4.rotateZ(1.2)
    // cube4.rotateX(0.6)
    // group.rotateY(0.1)
    cube1.rotateX(0.1)
    cube3.rotateX(0.1)
}

animate();