<template>
  <svg class="cube-icon" aria-hidden="true" v-if="name">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'

export default {
  props: ['name']
}
</script>

<style lang="scss" scoped>
.cube-icon {
  width: 1.5rem;
  height: 1.5rem;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
