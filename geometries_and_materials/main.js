import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020); 

// Camera
const camera = new THREE.PerspectiveCamera(60, 1920 / 1080);
camera.position.z = 4;
camera.position.x = 0.9;
camera.position.y = -0.5;

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(1920, 1080);
document.body.appendChild(renderer.domElement);
 
// const geometry = new THREE.ConeGeometry(1, 2, 32);
// const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
// const geometry = new THREE.SphereGeometry(1, 32, 32);
   const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

// Basic material – flat color, ignores light
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Lambert material – uses diffuse reflection only
// Good for matte surfaces (no shiny highlights)
// const material = new THREE.MeshLambertMaterial({ color: 0x8844ff });


//  Standard material – physically based (ambient + diffuse + specular)
//  Controlled by 'metalness' and 'roughness' properties
// const material = new THREE.MeshStandardMaterial({
//   color: 0x000080,           // Purple diffuse base
//   metalness: 0.9,            // Controls how reflective the surface is (specular strength)
//   roughness: 0.3,            // Controls smoothness (lower = more mirror-like)
//   emissive: 0x220044,        // Adds a faint self-glow
// });

// Phong material – adds specular highlights (shiny reflections)
const material = new THREE.MeshPhongMaterial({
  color: 0x000080,         // Base color (diffuse component)
  specular: 0xffffff,      // Highlight color
  shininess: 100           // Size/intensity of the specular highlight
});

const object = new THREE.Mesh(geometry, material);
scene.add(object);

const ambientLight = new THREE.AmbientLight(0x000080, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(1, 3, 5);
scene.add(directionalLight);

const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.5);
scene.add(lightHelper);

ambientLight.intensity = 0.4;
directionalLight.intensity = 1.2;

function animate() {
  object.rotation.y += 1.01;
  object.rotation.x += 1.005;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();