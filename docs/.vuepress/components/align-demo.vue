<template>
  <div class="align-wrapper">
    <c-row class="row" align="left">
      <c-col class="item" span="8">left</c-col>
      <c-col class="item" span="8">left</c-col>
    </c-row>
    <c-row class="row" align="center">
      <c-col class="item" span="8">center</c-col>
      <c-col class="item" span="8">center</c-col>
    </c-row>
    <c-row class="row" align="right">
      <c-col class="item" span="8">right</c-col>
      <c-col class="item" span="8">right</c-col>
    </c-row>
  </div>
</template>

<script>
  import Col from '../../../src/Col'
  import Row from '../../../src/Row'

  export default {
    components: {
      'c-col': Col,
      'c-row': Row
    },
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";
  .align-wrapper{ text-align: center; color: $font-color;
    .row{ padding-top: $wrapper-top;
      > .item { text-align: center;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
      }
    }
  }
</style>