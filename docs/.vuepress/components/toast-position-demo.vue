<template>
  <div>
    <c-button @click="showToast('top')">上方显示</c-button>
    <c-button @click="showToast('center')">中间显示</c-button>
    <c-button @click="showToast('bottom')">下方显示</c-button>
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
