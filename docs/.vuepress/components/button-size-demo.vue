<template>
  <div>
      <c-button size="small">小型按钮</c-button>
      <c-button size="middle">中型按钮</c-button>
      <c-button size="large">大型按钮</c-button>

      <c-button size="small" circle>小型</c-button>
      <c-button size="middle" circle>中型</c-button>
      <c-button size="large" circle>大型</c-button>
  </div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  components: {
    'c-button': Button
  },
}
</script>

<style></style>
