<template>
  <div class="popover-wrapper">
    <c-popover position="bottom">
      <template slot="content">
        popover 中的内容
      </template>
      <c-button>下方显示内容</c-button>
    </c-popover>
    <c-popover>
      <template slot="content">
        popover 中的内容
      </template>
      <c-button>点击显示</c-button>
    </c-popover>
    <c-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <c-button>hover 显示内容</c-button>
    </c-popover>
  </div>
</template>

<script>
  import Popover from '../../../src/Popover'
  import Button from '../../../src/Button'

  export default {
    components:{
      'c-popover':Popover,
      'c-button': Button
    }
  }
</script>

<style lang="scss" scoped>

</style>