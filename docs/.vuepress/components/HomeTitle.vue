<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { withBase } from '@vuepress/client'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

const props = withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '标题'
  }
)

// 首页标题
const homeTitleRef = ref<HTMLDivElement>()

// 场景
const scene = new THREE.Scene()

// 相机
const camera = new THREE.PerspectiveCamera(45, undefined, 1, 2000)
// 设置相机位置
camera.position.set(0, 0, 400)

// 加载环境纹理
const texture = new THREE.TextureLoader().load(withBase('/textures/environment.png'))
// 以球形方式渲染
texture.mapping = THREE.EquirectangularReflectionMapping
// 设置环境贴图
scene.environment = texture

// 字体加载器
const fontLoader = new FontLoader()
// 加载字体。STXingKai-华文行楷
fontLoader.load(withBase('/fonts/STXingKai.json'), font => {
  // 文字几何体
  const textGeometry = new TextGeometry(props.title, {
    font,
    size: 80,
    height: 5,
    // 曲线分段数
    curveSegments: 12,
    // 开启倒角
    bevelEnabled: true,
    // 倒角深度
    bevelThickness: 4,
    // 倒角大小
    bevelSize: 2,
    // 倒角偏移
    bevelOffset: 0,
    // 倒角分段数
    bevelSegments: 5
  })
  // 文字几何体居中
  textGeometry.center()

  // 文字材质
  const textMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x0097ff,
    // 粗糙度。0-不粗糙
    roughness: 0,
    // 反射率
    reflectivity: 1,
    // 厚度
    thickness: 80,
    // 折射率
    ior: 1.5,
    // 透明度。1-完全透明
    transmission: 1,
    // 两面可见
    side: THREE.DoubleSide,
    // 自发光颜色
    emissive: 0x0097ff,
    // 发光强度
    emissiveIntensity: 0.1
  })

  // 文字
  const text = new THREE.Mesh(textGeometry, textMaterial)
  scene.add(text)
})

// 渲染器。antialias: true-开启抗锯齿；alpha: true-启用透明度支持
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
// 开启阻尼
controls.enableDamping = true
// 自动旋转
controls.autoRotate = true
// 自动旋转速度
controls.autoRotateSpeed = 3

// 渲染函数。立即执行函数
;(function render() {
  // 请求动画帧
  requestAnimationFrame(render)
  // 更新控制器
  controls.update()
  // 渲染场景和相机
  renderer.render(scene, camera)
})()

// 设置 3D 标题位置
function setHomeTitlePosition() {
  // 获取主标题
  const mainTitle = document.querySelector('.home .hero #main-title') as HTMLTitleElement
  // 主标题后添加 3D 首页标题
  mainTitle.insertAdjacentElement('afterend', homeTitleRef.value!)
  // 隐藏主标题
  mainTitle.style.display = 'none'
}

// 更新相机和渲染器参数
function updateCameraAndRendererParams() {
  const titleWidth = homeTitleRef.value?.clientWidth!
  const titleHeight = homeTitleRef.value?.clientHeight!
  // 设置相机宽高比
  camera.aspect = titleWidth / titleHeight
  // 更新相机投影矩阵
  camera.updateProjectionMatrix()
  // 设置渲染器尺寸
  renderer.setSize(titleWidth, titleHeight)
  // 设置渲染器像素比
  renderer.setPixelRatio(window.devicePixelRatio)
}

onMounted(() => {
  updateCameraAndRendererParams()
  // 将渲染器画布添加至 title
  homeTitleRef.value!.appendChild(renderer.domElement)

  setHomeTitlePosition()

  window.addEventListener('resize', updateCameraAndRendererParams)
})

onUnmounted(() => {
  // 移除事件监听器，避免产生内存泄漏和性能问题
  window.removeEventListener('resize', updateCameraAndRendererParams)
})
</script>

<template>
  <div class="home-title" ref="homeTitleRef"></div>
</template>

<style scoped>
.home-title {
  height: 155px;
  cursor: pointer;
}
</style>
