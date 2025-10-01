import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);

const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 10);
scene.add(light);

const car = new THREE.Group();
scene.add(car);

const bodyGeometry = new THREE.BoxGeometry(6, 2, 3);
const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
car.add(body);

const wheelGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });

function createWheel(x, z) {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.rotation.x = 2;
    wheel.position.set(x, -1, z);
    return wheel;
}

const wheels = [];
wheels.push(createWheel(-2.5, -1.5)); 
wheels.push(createWheel(2.5, -1.5));  
wheels.push(createWheel(-2.5, 1.5));  
wheels.push(createWheel(2.5, 1.5));   

wheels.forEach(w => car.add(w));

function animate() {
    requestAnimationFrame(animate);

    wheels.forEach(w => w.rotation.z += 0.1);

    car.rotation.y += -0.009;

    renderer.render(scene, camera);
}
animate();
