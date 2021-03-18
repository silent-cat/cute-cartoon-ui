<template>
  <div class="tabs-body-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'InitTabsBody',
    inject: ['eventBus'],
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-body-wrapper {
    box-shadow:0px 1px 0px rgba(0,0,0,.2),inset 0px -1px 4px rgba(0,0,0,.2);
    border-bottom: 4px solid #fff;
  }
</style>