<template>
  <div>
    <c-button @click="clickEvent">点击</c-button>
  </div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  components: {
    'c-button': Button
  },
  methods: {
    clickEvent() {
      alert('触发按钮的点击事件')
    }
  },
  data() {
    return {}
  }
}
</script>
