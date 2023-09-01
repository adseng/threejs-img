// import * as THREE from "./three.module.min.js";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js"


const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0xbfe3dd );

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(50, 50, 100);
camera.lookAt(scene.position);
scene.add(camera);

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(800);
scene.add(axesHelper);

// 环境光
// const ambLight = new THREE.AmbientLight();
// scene.add(ambLight);

// 光
const pointLight = new THREE.PointLight();
pointLight.position.set(20, 20, 40);
scene.add(pointLight);
// antialias 平滑 抗锯齿
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio( window.devicePixelRatio );


// // 设置相机控件轨道控制器OrbitControls
// const controls = new OrbitControls(camera, renderer.domElement);
// // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
// controls.addEventListener("change", function () {
//     renderer.render(scene, camera); //执行渲染操作
// }); //监听鼠标、键盘事件

const loader = new GLTFLoader();
loader.load('src/maple_leaf.glb', glb =>{
    const model = glb.scene
    scene.add(model)
    renderer.render(scene, camera);

    // 创建渲染目标
    // const renderTarget = new THREE.WebGLRenderTarget(512, 512);

    // 渲染第一个角度的图片
    camera.position.set(20, -10, 0);
    camera.lookAt(model.position);
    // renderer.setRenderTarget(renderTarget);
    renderer.render(scene, camera);
    const dataURL1 = renderer.getContext().canvas.toDataURL('image/png');
    // downloadImage(dataURL1, 'image1.png');

    // 渲染第二个角度的图片
    camera.position.set(50, 100, 50);
    // camera.lookAt(model.position);
    // renderer.setRenderTarget(renderTarget);
    renderer.render(scene, camera);
    const dataURL2 = renderer.getContext().canvas.toDataURL('image/png');
    // downloadImage(dataURL2, 'image2.png');

    // 渲染第三个角度的图片
    camera.position.set(100, 50, 50);
    camera.lookAt(model.position);
    // renderer.setRenderTarget(renderTarget);
    renderer.render(scene, camera);
    const dataURL3 = renderer.getContext().canvas.toDataURL('image/png');
    // downloadImage(dataURL3, 'image3.png');

    // 创建img标签并将图片显示在页面上
    const img1 = document.createElement('img');
    img1.src = dataURL1;
    img1.style.left = '0'
    document.body.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = dataURL2;
    img2.style.left = '400px'
    document.body.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = dataURL3;
    img3.style.left = '800px'
    document.body.appendChild(img3);
})



// document.getElementById('app')?.append(renderer.domElement);
// renderer.render(scene, camera);



// 保存图片到本地
function downloadImage(dataURL: string, filename: string) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
