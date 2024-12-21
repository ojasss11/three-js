// Second three js practice file
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 10;
const geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10);
const material = new THREE.MeshBasicMaterial({
  color: "white",
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);

cube.position.x = 3;
cube.position.y = 3;
cube.position.z = 3;

const geometry2 = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5);
const material2 = new THREE.MeshBasicMaterial({
  color: "yellow",
  wireframe: true,
});
const cube2 = new THREE.Mesh(geometry2, material2);

cube2.position.x = -3;
cube2.position.y = -3;
cube2.position.z = -3;
scene.add(cube, cube2);

const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
function animate() {
  window.requestAnimationFrame(animate);
  cube.rotation.y += 0.01;
  cube2.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
