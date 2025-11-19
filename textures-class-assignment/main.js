import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 3;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("textures/Stylized_Wood_Floor_001_normal.png");

// Shape (change if you want)
const material = new THREE.MeshBasicMaterial({ map: texture });
const shape = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 100),
    material
);
scene.add(shape);

// Animation
function animate() {
    requestAnimationFrame(animate);

    shape.rotation.x += 0.01;
    shape.rotation.y += 0.02;

    renderer.render(scene, camera);
}

animate();
