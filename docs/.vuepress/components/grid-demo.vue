<template>
  <div class="grid-wrapper">
    <c-row class="row">
      <c-col class="item" span="24">col-24</c-col>
    </c-row>
    <c-row class="row">
      <c-col class="item" span="12">col-12</c-col>
      <c-col class="item" span="12">col-12</c-col>
    </c-row>
    <c-row class="row">
      <c-col class="item" span="8">col-8</c-col>
      <c-col class="item" span="8">col-8</c-col>
      <c-col class="item" span="8">col-8</c-col>
    </c-row>
    <c-row class="row">
      <c-col class="item" span="6">col-6</c-col>
      <c-col class="item" span="6">col-6</c-col>
      <c-col class="item" span="6">col-6</c-col>
      <c-col class="item" span="6">col-6</c-col>
    </c-row>
  </div>
</template>

<style lang="scss" scoped>
$background: #409eff;
$wrapper-top: 10px;
$font-color: white;
* {
  box-sizing: border-box;
}

.grid-wrapper {
  > .row {
    padding: 0.2em;
    > .item {
      text-align: center;
      color: $font-color;
      &:nth-child(odd) {
        background: $background;
      }
      &:nth-child(even) {
        background: lighten($background, 20%);
        color: $font-color;
      }
    }
  }
}
</style>

<script>
import Col from '../../../src/Col'
import Row from '../../../src/Row'

export default {
  components: {
    'c-col': Col,
    'c-row': Row
  }
}
</script>
