<template>
  <div class="cube-loading"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.cube-loading {
  /* 相对定位 */
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* 只需要将其它的边的颜色设为透明就好 */
  border: 3px solid transparent;
  /* 我们需要隐藏其它三条边只显示一条边 */
  border-top-color: #9370db;
  animation: rotate 2s linear infinite;
}

.cube-loading::before {
  content: '';
  position: absolute;
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: 5px;
  /* 这边也是一样 用伪元素做边框 */
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ba55d3;
  animation: rotate 3s linear infinite;
}

.cube-loading::after {
  content: '';
  position: absolute;
  top: 15px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #f0f;
  /* 动画 时长 linear是匀速运动 infinite 是无限次运动 */
  animation: rotate 1.5s linear infinite;
}

/* 下面定义一下动画 */
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    /* 顺时针旋转360度 */
    transform: rotate(360deg);
  }
}
</style>
