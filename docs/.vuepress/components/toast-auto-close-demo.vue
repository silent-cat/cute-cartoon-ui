<template>
  <div>
    <c-button @click="$toast(`显示toast`,{autoClose:false})">关闭自动关闭</c-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../../src/Toast'
import Button from '../../../src/Button'
import plugin from '../../../src/plugin'
Vue.use(plugin)
export default {
  components: {
    'c-button': Button,
    'c-toast': Toast
  },
  methods: {
    showToast(position) {
      this.$toast(`${position}显示`, {
        position: position
      })
    }
  }
}
</script>

<style></style>
