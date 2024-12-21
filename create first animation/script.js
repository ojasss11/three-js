const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
// const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
  color: "green",
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// cube.rotation.x = 1;
camera.position.z = 5;
const canvas = document.querySelector("#canvas");

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.render(scene, camera);

function animate() {
  window.requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  cube.rotation.y += 0.5;
  renderer.render(scene, camera);
}

animate();
