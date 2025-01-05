import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  74,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const cubego = new THREE.BoxGeometry(5, 5, 5);
const cubemat = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
const cube = new THREE.Mesh(cubego, cubemat);
cube.position.x = 1;

scene.add(cube);
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
/*
setTimeout(function () {
  console.log("Hey");
}, 2000);
*/
/*
setInterval(() => {
  console.log("Hey");
}, 100);
*/
setInterval(() => {
  console.log("Hey");
}, 10);
function animate() {
  window.requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  renderer.render(scene, camera);
}

animate();
