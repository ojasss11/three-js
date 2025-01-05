import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  74,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
// scene.add(camera);
/*
const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshBasicMaterial({
  color: "blue",
  wireframe: true,
});

const mesh = new THREE.Mesh(geometry, material);
*/
// scene.add(mesh);
const cubego = new THREE.BoxGeometry(1, 1, 1);
const cubemat = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(cubego, cubemat);

cube.position.x = -1;
const spheregeo = new THREE.SphereGeometry(1, 10, 10);
const spheremat = new THREE.MeshBasicMaterial({ color: "blue" });
const sphere = new THREE.Mesh(spheregeo, spheremat);

sphere.position.x = 1;
scene.add(cube);
scene.add(sphere);
const group = new THREE.Group();
group.add(cube);
group.add(sphere);
scene.add(group);
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);
/*
function animate() {
  window.requestAnimationFrame(animate);
  mesh.rotation.x += 1;
  renderer.render(scene, camera);
}

animate();
*/
// 90 degree=1.57,180 degree=3.14,270 degree=4.71,360 degree=6.28
// 90 deg=pi/2,180 deg=pi,270 deg=3pi/2,360 deg=2pi
