<template>
  <svg class="cc-icon" aria-hidden="true" v-if="name">
    <use :xlink:href=" `#icon-${name}` "></use>
  </svg>
</template>

<script>
  import './svg.js'

  export default {
    props: ['name']
  }
</script>

<style lang="scss" scoped>

  .cc-icon {
    width: 2.5rem;
    height: 2.5rem;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
  }

</style>