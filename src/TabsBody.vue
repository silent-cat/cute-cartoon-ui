<template>
  <div class="tabs-body-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    inject: ['eventBus'],
  }
</script>

<style lang="scss" scoped>
  .tabs-body-wrapper {
    box-shadow:inset 0px -1px 4px rgba(0,0,0,.2);
    /* border-bottom: 4px solid #fff; */
  }
</style>