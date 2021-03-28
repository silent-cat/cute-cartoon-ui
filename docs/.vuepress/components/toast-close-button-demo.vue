<template>
  <div>
    <c-button @click="showToast">按钮文本内容与触发回调函数</c-button>
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
    showToast() {
      this.$toast(`显示`, {
        autoClose: false,
        closeButton: {
          text: '点击按钮触发回调函数',
          callback: function test() {
            alert('回调函数已执行')
          }
        }
      })
    }
  }
}
</script>

<style></style>
