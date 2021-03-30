<template>
  <main class="cube-container-content">
    <slot></slot>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
.cube-container-content {
  flex-grow: 1;
  height: 12rem;
  line-height: 12rem;
  background: #409eff;
  text-align: center;
}
</style>
