import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { Scene, PerspectiveCamera, OrthographicCamera, Renderer, Mesh } from 'three';
export interface BasicScenarioImp {
  // 挂载节点
  refDom: HTMLElement;
  // 场景
  scene: Scene;
  // 摄像机
  camera: PerspectiveCamera | OrthographicCamera;
  // 渲染器
  renderer: Renderer;
  cube: Mesh;
  controls: OrbitControls;
  // 初始化场景
  initScenario(): void;
  // 初始化灯光
  initLight(): void;
  // 初始化相机
  initCamera(): void;
  // 初始化渲染器
  initRenderer(): void;
  // 初始化控制器
  initControls(): void;
  // 渲染
  render(): void;
  // 窗口变化
  resize(): void;
}

export default class BasicScenario implements BasicScenarioImp {
  refDom: HTMLElement;
  camera: PerspectiveCamera | OrthographicCamera;
  scene: Scene;
  renderer: Renderer;
  cube: Mesh;
  controls: OrbitControls;
  constructor(ref: HTMLElement) {
    this.refDom = ref;
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.refDom.clientWidth / this.refDom.clientHeight,
      0.1,
      1000
    );
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    window.addEventListener('resize', this.resize.bind(this));
    // 初始化方法调用
    this.initCamera();
    this.initScenario();
    this.initRenderer();
  }

  initCamera(): void {
    this.camera.position.set(0, 0, 5);
  }

  initLight(): void {}

  initRenderer(): void {
    this.renderer.setSize(this.refDom.clientWidth, this.refDom.clientHeight);
    this.refDom.appendChild(this.renderer.domElement);
    this.render();
  }

  initScenario(): void {
    this.scene.fog = new THREE.Fog(0xffffff, 10, 50);
    this.scene.background = new THREE.Color(0x66ffcc);
  }

  render(): void {
    requestAnimationFrame(this.render.bind(this));
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
  resize() {
    if (!(this.camera instanceof THREE.OrthographicCamera)) {
      this.camera.aspect = this.refDom.clientWidth / this.refDom.clientHeight;
    }
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.refDom.clientWidth, this.refDom.clientHeight);
  }
  initControls() {
    this.controls.minDistance = 1;
    this.controls.maxDistance = 20;
  }
}
