<template>
  <div class="popover-wrapper">
    <c-popover position="left">
      <template slot="content">
        popover 中的内容
      </template>
      <c-button>左方</c-button>
    </c-popover>
    <c-popover>
      <c-button>click</c-button>
      <template slot="content">
        popover 中的内容
      </template>
    </c-popover>
    <c-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <c-button>hover</c-button>
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